import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import StickyWhatsApp from "./components/StickyWhatsApp";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://www.firmapromosyon.com";
const SITE_NAME = "FirmaPromosyon";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
    template: `%s | ${SITE_NAME}`,
  },
  description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
    description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
    locale: "tr_TR",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "FirmaPromosyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
    description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`, // varsa public/logo.png
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />

        <Header />
        {children}
        <StickyWhatsApp />
      </body>
    </html>
  );
}