import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Footer Import Karein

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Platinum Events & Caterers | Luxury Events Management",
  description:
    "Creating Extraordinary Moments, One Event at a Time. Premium Event Management & Catering Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-emerald-charcoal text-white font-sans antialiased selection:bg-gold selection:text-emerald-charcoal flex flex-col min-h-screen">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="grow">{children}</div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}