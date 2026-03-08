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

const CATEGORY = "Çakmak";
const PAGE_URL = `${SITE_URL}/promosyon-cakmak`;

export const metadata: Metadata = {
  title:
    "Promosyon Çakmak | Logo Baskılı Kurumsal Promosyon Çakmak Modelleri",
  description:
    "Promosyon çakmak modelleri, logo baskılı kurumsal çakmak çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Fuar, etkinlik, kafe, restoran ve firma tanıtımı için promosyon çakmak ürünlerini inceleyin.",
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
    title: "Promosyon Çakmak | FirmaPromosyon",
    description:
      "Logo baskılı promosyon çakmak çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon çakmak modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Çakmak Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Çakmak | FirmaPromosyon",
    description:
      "Logo baskılı promosyon çakmak çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Çakmak",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Çakmak",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon çakmak modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon çakmak çeşitleri.",
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
          <span className="font-semibold text-white">Promosyon Çakmak</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Çakmak
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Promosyon çakmak modelleri, markanızı günlük kullanım alanlarında öne
            çıkaran ekonomik ve etkili promosyon ürünleri arasında yer alır. Logo
            baskılı promosyon çakmak ürünleri; fuar, etkinlik, restoran, kafe,
            otel, bayi toplantısı ve saha dağıtımları için sık tercih edilen
            kurumsal tanıtım çözümlerindendir.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan promosyon çakmak çeşitleri; farklı gövde
            yapıları, renk seçenekleri ve baskı uygulamaları ile kurumsal
            ihtiyaçlara uygun olarak sunulmaktadır. Firmanızın logosuna uygun
            baskılı veya baskısız sipariş seçenekleri için ürünleri inceleyebilir,
            toplu alım ve hızlı teklif avantajlarından yararlanabilirsiniz.
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

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {p.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
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
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">
            Bu kategoride henüz ürün yok.
          </p>
        </div>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon Çakmak Modelleri
            </h2>

            <p>
              Logo baskılı promosyon çakmak ürünleri, markanızı kullanıcıların
              günlük hayatında sürekli görünür kılan pratik tanıtım ürünleridir.
              Özellikle yoğun kullanılan alanlarda dağıtılan promosyon
              çakmaklar, uzun süreli marka hatırlanırlığı sağlar.
            </p>

            <p>
              Kurumsal firmalar, kafe ve restoranlar, oteller, organizasyon
              şirketleri, tütün ürünleri satış noktaları ve saha dağıtımı yapan
              markalar tarafından promosyon çakmak modelleri sıkça tercih edilir.
              Yüksek adetli siparişe uygun yapısı sayesinde hem ekonomik hem de
              etkili bir reklam çözümüdür.
            </p>

            <p>
              Promosyon çakmak çeşitleri; taşlı çakmak, elektronik çakmak,
              plastik gövdeli modeller ve farklı baskı alanlarına sahip ürünler
              gibi çeşitli alternatiflerle sunulabilir. Tampon baskı, UV baskı
              veya modele uygun diğer baskı teknikleri ile firma logosu ürün
              üzerine uygulanabilir. Baskılı ve baskısız seçenekler modele göre
              değişebilir.
            </p>

            <p>
              Promosyon çakmak fiyatları; model, baskı tekniği, malzeme yapısı ve
              sipariş miktarına göre değişiklik gösterebilir. Firmanız için en
              uygun promosyon çakmak modelini seçerek toplu sipariş ve hızlı
              teklif avantajlarından yararlanabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Çakmak Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Etkinlik Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve organizasyonlarda dağıtılan logo baskılı
                  çakmaklar, ziyaretçilerin markanızı uzun süre hatırlamasına
                  yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kafe, Restoran ve Otel Kullanımı
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon çakmak ürünleri özellikle kafe, restoran, otel ve
                  eğlence mekanlarında hem işlevsel hem de reklam amaçlı tercih
                  edilen ürünler arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon çakmak modelleri, mevcut müşterilere veya bayi ağına
                  verilebilecek ekonomik ve yüksek görünürlüklü promosyon
                  ürünlerinden biridir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Firma Tanıtım Kampanyaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli promosyon çakmak siparişleri, marka bilinirliği
                  artırmak isteyen firmalar için düşük maliyetli ve etkili bir
                  tanıtım çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Sık Aranan Promosyon Çakmak Terimleri
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "promosyon çakmak",
                "logo baskılı çakmak",
                "kurumsal çakmak",
                "toptan promosyon çakmak",
                "firma logolu çakmak",
                "baskılı çakmak",
                "promosyon ürünleri",
                "taşlı çakmak",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}