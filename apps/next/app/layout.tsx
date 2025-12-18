import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// sans-serif main font
const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

// serif main font
const ibmSerif = IBM_Plex_Serif({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"], 
  subsets: ["latin"],
  variable: "--font-ibm-serif"
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
        className={`${interSans.variable} ${ibmSerif.variable} relative antialiased min-h-[100vh]`}
      >
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
