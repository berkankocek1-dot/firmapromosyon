import Link from "next/link";
import Image from "next/image";
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

const CATEGORY = "Duvar Saatleri";
const PAGE_URL = `${SITE_URL}/promosyon-duvar-saatleri`;

export const metadata: Metadata = {
  title:
    "Promosyon Duvar Saatleri | Logo Baskılı Kurumsal Duvar Saati Modelleri",
  description:
    "Promosyon duvar saatleri, logo baskılı kurumsal duvar saati modelleri ve toplu sipariş seçenekleri. Ofis, kurum ve firma tanıtımı için promosyon duvar saatlerini inceleyin.",
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
    title: "Promosyon Duvar Saatleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon duvar saati modelleri. Ofisler ve kurumsal tanıtım için promosyon duvar saatlerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Duvar Saatleri",
      },
    ],
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
              name: "Promosyon Duvar Saatleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Duvar Saatleri",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon duvar saatleri. Kurumsal tanıtım ve toplu sipariş için duvar saati modelleri.",
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
            Promosyon Duvar Saatleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Promosyon Duvar Saatleri
          </h1>

          <p className="mt-3 max-w-3xl text-gray-200">
            Promosyon duvar saatleri, firmaların marka bilinirliğini artırmak
            için tercih ettiği en etkili promosyon ürünleri arasında yer alır.
            Ofislerde, mağazalarda ve iş yerlerinde sürekli görünen duvar
            saatleri sayesinde markanız uzun süre görünür olur.
          </p>

          <p className="mt-3 max-w-3xl text-gray-200">
            Logo baskılı promosyon duvar saatleri; fuar organizasyonları,
            kurumsal etkinlikler, bayi toplantıları ve müşteri dağıtımları için
            hem prestijli hem de kullanışlı bir promosyon ürünüdür.
          </p>

          <div className="mt-5 flex gap-3 flex-wrap">
            <Link
              href="/kurumsal-teklif-al"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </header>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain p-4"
                sizes="(max-width:768px)100vw,33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs text-gray-500 uppercase">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {p.title}
              </h2>

              <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {p.shortDesc}
              </p>

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Ürünü İncele
              </div>
            </div>
          </Link>
        ))}
      </section>

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün bulunmuyor.
        </p>
      )}
    </main>
  );
}