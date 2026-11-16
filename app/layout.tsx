import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

  title: {
    default: "FirmaPromosyon | Kurumsal Promosyon Ürünleri & Baskı Hizmetleri",
    template: "%s | FirmaPromosyon",
  },

  description:
    "Kurumsal promosyon ürünleri, logo baskılı ürünler, UV baskı, DTF baskı, lazer baskı, tampon baskı ve nakış hizmetleri için hızlı teklif alın.",
  // Canonical URLs are defined per page, not inherited from the home page.

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
    title: "FirmaPromosyon | Kurumsal Promosyon Ürünleri & Baskı Hizmetleri",
    description:
      "Kurumsal promosyon ürünleri, logo baskılı ürünler, UV baskı, DTF baskı, lazer baskı, tampon baskı ve nakış hizmetleri için hızlı teklif alın.",
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
    title: "FirmaPromosyon | Kurumsal Promosyon Ürünleri & Baskı Hizmetleri",
    description:
      "Kurumsal promosyon ürünleri, logo baskılı ürünler, UV baskı, DTF baskı, lazer baskı, tampon baskı ve nakış hizmetleri için hızlı teklif alın.",
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
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MVLL345T"
          strategy="lazyOnload"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KXS6PMKHM4"
          strategy="lazyOnload"
        />

        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KXS6PMKHM4');
          `}
        </Script>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FirmaPromosyon",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            email: "info@firmapromosyon.com",
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

        <footer className="mt-10 bg-neutral-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-[1.4fr_1fr_1.15fr_1fr_1.4fr] lg:gap-7">
  <div className="col-span-2 min-w-0 lg:col-span-1">
    <h3 className="mb-3 text-lg font-bold">FirmaPromosyon</h3>
    <p className="max-w-md text-sm leading-6 text-white/75">
      Logo baskılı promosyon ürünleri ve kurumsal hediyeler.
      UV, DTF, lazer, tampon baskı ve nakış çözümleri.
    </p>
  </div>

  <div className="min-w-0 ">
                <h3 className="mb-3 text-sm font-bold">Kurumsal</h3>
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

  <div className="min-w-0 ">
                <h3 className="mb-3 text-sm font-bold">Yasal</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a
                      href="/mesafeli-satis-sozlesmesi"
                      className="hover:text-white"
                    >
                      Mesafeli Satış Sözleşmesi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/iptal-ve-iade-kosullari"
                      className="hover:text-white"
                    >
                      İptal ve İade Koşulları
                    </a>
                  </li>
                  <li>
                    <a href="/teslimat-kosullari" className="hover:text-white">
                      Teslimat Koşulları
                    </a>
                  </li>
                </ul>
              </div>

  <div className="min-w-0">
    <h3 className="mb-3 text-sm font-bold">Baskı Hizmetleri</h3>
    <ul className="space-y-2 text-sm text-white/80">
      <li>UV Baskı</li>
      <li>DTF Baskı</li>
      <li>Lazer Baskı</li>
      <li>Tampon Baskı</li>
      <li>Nakış</li>
    </ul>
  </div>

  <div className="min-w-0 col-span-2 lg:col-span-1">
                <h3 className="mb-3 text-sm font-bold">İletişim</h3>
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

  <div className="mt-4 space-y-3 text-sm leading-6 text-white/75">
    <a
      href="mailto:info@firmapromosyon.com"
      className="block break-words transition hover:text-white"
    >
      info@firmapromosyon.com
    </a>
    <div>
      <p className="mb-1 font-semibold text-white">Çalışma Saatleri</p>
      <p>Pazartesi–Cuma: 09:00–18:00</p>
      <p>Cumartesi: 09:00–13:00</p>
    </div>
  </div>
</div>
</div>

            <div className="border-t border-white/10 text-center text-white/60 mt-6 pt-4 text-xs leading-6">
              © {new Date().getFullYear()} FirmaPromosyon — Kurumsal Promosyon
              Ürünleri, Logo Baskılı Promosyon, UV Baskı, DTF Baskı, Lazer
              Baskı, Tampon Baskı ve Nakış Hizmetleri. Tüm hakları saklıdır.
            </div>
          </div>
        </footer>

        <StickyWhatsApp />
        <SpeedInsights />
      </body>
    </html>
  );
}
