import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import StickyWhatsApp from "./components/StickyWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ✅ Title tekrarını bitiren ayar:
  title: {
    default: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
    template: "%s | FirmaPromosyon",
  },

  description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
    description:
      "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
    url: SITE_URL,
    type: "website",
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
    description:
      "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        {/* Global JSON-LD */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FirmaPromosyon",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            sameAs: [],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FirmaPromosyon",
            url: SITE_URL,
          }}
        />

        <Header />

        <main className="flex-1">{children}</main>

        <footer className="mt-20 bg-neutral-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-lg font-semibold">FirmaPromosyon</h3>
                <p className="text-sm text-white/70">
                  Kurumsal promosyon ürünleri ve DTF baskı çözümleri için hızlı
                  teklif alın.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Kurumsal</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a href="/hakkimizda" className="hover:text-white">
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a href="/gizlilik-politikasi" className="hover:text-white">
                      Gizlilik Politikası
                    </a>
                  </li>
                  <li>
                    <a href="/kvkk" className="hover:text-white">
                      KVKK
                    </a>
                  </li>
                  <li>
                    <a href="/cerez-politikasi" className="hover:text-white">
                      Çerez Politikası
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">İletişim</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a href="/iletisim" className="hover:text-white">
                      İletişim
                    </a>
                  </li>
                  <li>
                    <a href="/kurumsal-teklif-al" className="hover:text-white">
                      Kurumsal Teklif Al
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
              © {new Date().getFullYear()} FirmaPromosyon — Tüm hakları saklıdır.
            </div>
          </div>
        </footer>

        <StickyWhatsApp />
      </body>
    </html>
  );
}
