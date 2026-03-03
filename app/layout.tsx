import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import StickyWhatsApp from "./components/StickyWhatsApp";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
  description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <StickyWhatsApp />
      </body>
    </html>
  );
}