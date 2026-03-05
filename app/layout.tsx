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
    // ✅ Default title sade: template zaten "| FirmaPromosyon" ekleyecek
    default: "Kurumsal DTF Baskı & Promosyon",
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
    // ✅ OG title da sade
    title: "Kurumsal DTF Baskı & Promosyon",
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
    // ✅ Twitter title da sade
    title: "Kurumsal DTF Baskı & Promosyon",
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
    logo: `${SITE_URL}/logo.png`, // public/logo.png varsa
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}>
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <footer className="mt-20 bg-neutral-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-lg font-semibold">{SITE_NAME}</h3>
                <p className="text-sm text-white/70">
                  Kurumsal promosyon ürünleri ve DTF baskı çözümleri için hızlı teklif alın.
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
              © {new Date().getFullYear()} {SITE_NAME} — Tüm hakları saklıdır.
            </div>
          </div>
        </footer>

        <StickyWhatsApp />
      </body>
    </html>
  );
}