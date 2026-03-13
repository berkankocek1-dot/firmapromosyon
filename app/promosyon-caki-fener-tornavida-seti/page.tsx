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

const CATEGORY = "Çakı, Fener ve Tornavida Seti";
const PAGE_URL = `${SITE_URL}/promosyon-caki-fener-tornavida-seti`;

export const metadata: Metadata = {
  title:
    "Promosyon Çakı, Fener ve Tornavida Seti | Logo Baskılı Çok Amaçlı Setler",
  description:
    "Promosyon çakı, fener ve tornavida seti modelleri. Logo baskılı çok amaçlı promosyon setleri ve toplu sipariş seçenekleri için hızlı teklif alın.",
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
    title:
      "Promosyon Çakı, Fener ve Tornavida Seti | FirmaPromosyon",
    description:
      "Logo baskılı çok amaçlı promosyon setleri. Kurumsal tanıtım ve toplu sipariş için çakı, fener ve tornavida setlerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Çok Amaçlı Setler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Promosyon Çakı, Fener ve Tornavida Seti | FirmaPromosyon",
    description:
      "Logo baskılı çok amaçlı promosyon setleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Çok Amaçlı Setler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Çakı, Fener ve Tornavida Seti",
          url: PAGE_URL,
          description:
            "Logo baskılı çok amaçlı promosyon setleri. Kurumsal promosyon ve toplu siparişler için çakı, fener ve tornavida setleri.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
        <nav className="mb-6 text-sm text-gray-300">
          <Link href="/">Ana Sayfa</Link>
          <span className="px-2">/</span>
          <Link href="/urunler">Ürünler</Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">
            Çakı, Fener ve Tornavida Seti
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Promosyon Çakı, Fener ve Tornavida Seti
          </h1>

          <p className="mt-3 max-w-3xl text-gray-200">
            Promosyon çakı, fener ve tornavida seti modelleri,
            kullanışlı yapıları sayesinde oldukça tercih edilen
            promosyon ürünleri arasında yer alır. Çok amaçlı setler
            günlük yaşamda pratik çözümler sunarken aynı zamanda
            markanızın sürekli görünür olmasını sağlar.
          </p>

          <p className="mt-3 max-w-3xl text-gray-200">
            FirmaPromosyon’da yer alan çok amaçlı promosyon setleri;
            farklı tasarım ve fonksiyon seçenekleri ile sunulmaktadır.
            Firmanızın logosuna özel baskı seçenekleri ile ürünleri
            inceleyebilir ve toplu sipariş avantajlarından
            yararlanabilirsiniz.
          </p>

          <div className="mt-5 flex gap-3 flex-wrap">
            <Link
              href="/kurumsal-teklif-al"
              className="rounded-full bg-white px-5 py-3 text-black font-semibold"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler"
              className="rounded-full border border-white/30 px-5 py-3"
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
            className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-square rounded-xl bg-gray-50">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs text-gray-500 uppercase">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold">{p.title}</h2>

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

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Çok Amaçlı Promosyon Setleri
            </h2>

            <p>
              Çakı, fener ve tornavida setleri hem günlük kullanım
              hem de profesyonel kullanım için oldukça pratik
              ürünlerdir. Bu nedenle promosyon ürünleri arasında
              sıkça tercih edilir.
            </p>

            <p>
              Bu ürünler özellikle teknik servis ekipleri,
              saha çalışanları ve outdoor aktiviteleri ile
              ilgilenen kullanıcılar için kullanışlıdır.
            </p>

            <p>
              Çok amaçlı setler, kurumsal hediye olarak
              dağıtıldığında uzun süre kullanılan promosyon
              ürünleri arasında yer alır.
            </p>
          </section>

          <section className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-5 rounded-2xl">
              <h3 className="font-semibold">Outdoor Kullanım</h3>
              <p className="text-sm text-gray-200 mt-2">
                Kamp ve outdoor aktivitelerinde pratik kullanım sağlar.
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl">
              <h3 className="font-semibold">Kurumsal Hediyeler</h3>
              <p className="text-sm text-gray-200 mt-2">
                Çalışanlara ve müşterilere verilebilecek kullanışlı
                promosyon ürünleridir.
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl">
              <h3 className="font-semibold">Teknik Kullanım</h3>
              <p className="text-sm text-gray-200 mt-2">
                Teknik ekipler için pratik bir yardımcı araçtır.
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl">
              <h3 className="font-semibold">Tanıtım Amaçlı</h3>
              <p className="text-sm text-gray-200 mt-2">
                Markanın uzun süre hatırlanmasını sağlayan promosyon ürünüdür.
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}