import type { Metadata } from "next";
import { Inter, Adamina } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// sans-serif main font
const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

// serif main font
const adaminaSerif = Adamina({
  weight: "400",
  variable: "--font-adamina"
});

export const metadata: Metadata = {
  title: "Pathways to Potential",
  description: "Therapy practice Pathways to Potential, Jon Marrelli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${adaminaSerif.variable} antialiased`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}
