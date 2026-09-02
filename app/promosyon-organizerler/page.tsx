import Link from "next/link";
import OrganizerProductGrid from "./OrganizerProductGrid";
import type { Metadata } from "next";
import { products } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const CATEGORY = "Organizerler";
const PAGE_URL = `${SITE_URL}/promosyon-organizerler`;

export const metadata: Metadata = {
  title:
    "Promosyon Organizer | Logo Baskılı Modeller",
  description:
    "Logo baskılı termo deri, ajandalı, hesap makineli ve manyetik kilitli organizer modellerini inceleyin. Toptan sipariş için hızlı teklif alın.",
  alternates: { canonical: PAGE_URL },
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
    title: "Promosyon Organizerler | FirmaPromosyon",
    description:
      "Logo baskılı promosyon organizer çeşitleri. Kurumsal tanıtım, ofis kullanımı ve toplu sipariş için organizer modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Organizer Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Organizerler | FirmaPromosyon",
    description:
      "Logo baskılı promosyon organizer çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function Page() {
  const list = products.filter((p) => p.category === CATEGORY);

  const itemListElement = list.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ana Sayfa",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Ürünler",
              item: `${SITE_URL}/urunler`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Promosyon Organizerler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Organizerler",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon organizer modelleri. Kurumsal promosyon, ofis kullanımı ve toplu siparişler için organizer çeşitleri.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
        <nav className="mb-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-white hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">
            Promosyon Organizerler
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Organizerler
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Logo baskılı promosyon organizer modellerini inceleyebilir,
            firmanız için toplu sipariş ve hızlı teklif avantajlarından
            yararlanabilirsiniz.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </header>
      </section>

      <OrganizerProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon Organizer Modelleri
            </h2>

            <p>
              Promosyon organizer modelleri, ofis düzenini sağlamak ve
              kurumsal marka görünürlüğünü artırmak için tercih edilen
              fonksiyonel promosyon ürünleri arasında yer alır. Logo
              baskılı organizer ürünleri; toplantılar, iş seyahatleri,
              günlük ofis kullanımı ve kurumsal hediyeler için pratik
              bir çözüm sunar.
            </p>

            <p>
              FirmaPromosyon’da yer alan promosyon organizer çeşitleri;
              farklı tasarım, malzeme ve kullanım özellikleri ile
              kurumsal ihtiyaçlara uygun şekilde sunulmaktadır.
              Firmanızın logosuna uygun baskılı sipariş seçenekleri
              için ürünleri inceleyebilir, toplu alım ve hızlı teklif
              avantajlarından yararlanabilirsiniz.
            </p>

            <p>
              Logo baskılı promosyon organizer ürünleri, iş hayatında
              düzeni sağlamak ve markanızı profesyonel bir şekilde
              temsil etmek için tercih edilen kurumsal promosyon
              ürünleri arasında yer alır. Günlük kullanımda sürekli
              görünen organizer ürünleri, marka bilinirliğini
              artırmaya yardımcı olur.
            </p>

            <p>
              Kurumsal firmalar tarafından kullanılan organizer
              modelleri; toplantı notlarını düzenlemek, evrakları
              saklamak, iş planlaması yapmak ve ofis düzenini
              korumak amacıyla tercih edilmektedir.
            </p>

            <p>
              Promosyon organizer çeşitleri; deri organizer,
              ajandalı organizer, notluk organizer ve evrak
              düzenleyici organizer modelleri gibi farklı
              alternatiflerle sunulabilir.
            </p>

            <p>
              Promosyon organizer fiyatları; ürün modeli,
              malzeme kalitesi, baskı türü ve sipariş
              miktarına göre değişiklik gösterebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Organizerler Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Kurumsal Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Organizer ürünleri ofislerde evrak ve not
                  düzenini sağlamak için kullanılan pratik
                  kurumsal aksesuarlar arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplantı ve İş Seyahatleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Toplantı ve iş seyahatlerinde kullanılan
                  organizer ürünleri, notları ve belgeleri
                  düzenli şekilde saklamaya yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kurumsal Hediye Ürünleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Logo baskılı organizer modelleri, iş
                  ortaklarına veya müşterilere verilebilecek
                  kullanışlı kurumsal hediye ürünleri arasında
                  yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Marka Tanıtım Çalışmaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon organizer ürünleri, markanızın
                  uzun süre görünür kalmasını sağlayan
                  etkili reklam araçları arasında yer alır.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}