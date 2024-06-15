import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/Social";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tours from "@/components/Tours";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evertrip - Plan your next trip with Evertrip",
  description: "We provide the best tours to northern India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <SocialLinks />
      </body>
    </html>
  );
}
