import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingChatbot from "@/components/ai/FloatingChatbot";
import { CartProvider } from "@/context/CartContext";

import { HeroCanvas } from "@/components/3d/HeroCanvas";

import { Playfair_Display, Inter } from 'next/font/google';

import GlobalLoader from "@/components/layout/GlobalLoader";

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Lumina Café | Smart AI Café Experience",
  description: "A premium modern café startup demonstrating responsible AI and smart recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col relative antialiased bg-background`}>
        <GlobalLoader />
        <HeroCanvas />
        <div className="relative z-10 flex flex-col min-h-screen">
          <CartProvider>
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
            <FloatingChatbot />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
