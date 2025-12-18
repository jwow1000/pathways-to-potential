import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend";
import { createClient } from 'next-sanity';
import { writeToken } from '@/sanity/lib/token';
import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";

// --- Sanity config ---
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: writeToken,
  useCdn: false,
});

// --- Resend config ---
const resend = new Resend(process.env.RESEND_API_KEY)
const emailTo = process.env.RESEND_EMAIL_TO || "";

// --- Rate limit store (in-memory for example; use Redis in production) ---
const rateLimitStore = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, honeypot, start_time } = body;

    // --- 1. Spam checks ---
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    const startTime = parseInt(start_time, 10);
    if (!isNaN(startTime) && Date.now() - startTime < 2000) {
      return NextResponse.json({ error: 'Form submitted too quickly' }, { status: 400 });
    }
    
    const ip = req.headers.get('x-forwarded-for') || '';
    const key = `${ip}-${subject}`;
    const now = Date.now();
    if (rateLimitStore.has(key) && now - rateLimitStore.get(key)! < 24 * 60 * 60 * 1000) {
      return NextResponse.json({ error: 'You already submitted a form recently, we limit the amount you can send' }, { status: 429 });
    }
    rateLimitStore.set(key, now);

    // --- 2. Validate required fields ---
    if (!name || !email || !message || !subject) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // --- 3. Store contact in Sanity ---
    await client.create({
      _type: 'formContact',
      name,
      email,
      message,
      subject,
      createdAt: new Date().toISOString(),
    });

    // --- 4. Send alert to Pathways ---
    const messageBody = `
      From: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `
    await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM || "noreply@pathwaystopotential.com", 
      to: emailTo,
      subject: `New message from ${name}`,
      text: messageBody,
      replyTo: email,
    })

    // --- 5. Send confirmation to inquirer ---
    const confirmationBody = `
      Hello ${name}, \n
      Thanks for your inquiring about therapy with Pathways to Potential. We received your message and someone from our team will contact you shortly. \n
      Best, \n
      Jon at Pathways to Potential
    `
    await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM || "noreply@pathwaystopotential.com", 
      to: email,
      subject: `Thank You for contacting us`,
      text: confirmationBody,
    })

    return NextResponse.json({ message: 'Inquiry submitted successfully' });
  } catch (err) {
    console.error('Inquiry error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
