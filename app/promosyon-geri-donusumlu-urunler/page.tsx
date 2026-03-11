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

const CATEGORY = "Geri Dönüşümlü Ürünler";
const PAGE_URL = `${SITE_URL}/promosyon-geri-donusumlu-urunler`;

export const metadata: Metadata = {
  title:
    "Geri Dönüşümlü Promosyon Ürünleri | Logo Baskılı Çevre Dostu Ürünler",
  description:
    "Geri dönüşümlü promosyon ürünleri, logo baskılı çevre dostu kurumsal ürünler ve toplu sipariş seçenekleri için hızlı teklif alın. Ahşap, kraft ve sürdürülebilir promosyon ürünlerini inceleyin.",
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
    title: "Geri Dönüşümlü Promosyon Ürünleri | FirmaPromosyon",
    description:
      "Logo baskılı çevre dostu promosyon ürünleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için geri dönüşümlü promosyon ürünlerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Geri Dönüşümlü Promosyon Ürünleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geri Dönüşümlü Promosyon Ürünleri | FirmaPromosyon",
    description:
      "Logo baskılı çevre dostu promosyon ürünleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Geri Dönüşümlü Ürünler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Geri Dönüşümlü Promosyon Ürünleri",
          url: PAGE_URL,
          description:
            "Logo baskılı geri dönüşümlü promosyon ürünleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için çevre dostu ürün çeşitleri.",
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
            Geri Dönüşümlü Ürünler
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Geri Dönüşümlü Promosyon Ürünleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Geri dönüşümlü promosyon ürünleri, çevre bilincine önem veren
            markaların kurumsal tanıtım çalışmalarında öne çıkan promosyon
            ürünleri arasında yer alır. Logo baskılı çevre dostu promosyon
            ürünleri; fuar, seminer, kurumsal etkinlik, ofis kullanımı ve
            müşteri dağıtımları için hem sürdürülebilir hem de etkili bir
            tanıtım çözümü sunar.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan geri dönüşümlü promosyon ürünleri;
            kraft defter, spiralli notluk, yapışkanlı notluk, ahşap telefon
            tutucu ve benzeri çevre dostu seçeneklerle kurumsal ihtiyaçlara
            uygun şekilde sunulmaktadır. Firmanızın logosuna uygun baskılı
            veya baskısız sipariş seçenekleri için ürünleri inceleyebilir,
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
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Geri Dönüşümlü Promosyon Ürünleri
            </h2>

            <p>
              Logo baskılı geri dönüşümlü promosyon ürünleri, markanızı
              çevre dostu bir kurumsal kimlikle öne çıkaran etkili reklam
              araçlarıdır. Günlük kullanım değeri yüksek olan çevre dostu
              ürünlerin tercih edilmesi, markanızın sürdürülebilirlik
              yaklaşımını müşterilerinize doğrudan yansıtmanıza yardımcı olur.
            </p>

            <p>
              Kurumsal firmalar tarafından tercih edilen geri dönüşümlü
              promosyon ürünleri; fuar organizasyonlarında, seminer ve
              eğitimlerde, müşteri ziyaretlerinde, bayi toplantılarında ve
              personel dağıtımlarında yoğun şekilde kullanılabilir.
            </p>

            <p>
              Geri dönüşümlü promosyon ürünleri; kraft kapaklı defter,
              spiralli notluk, yapışkanlı notluk, ahşap masaüstü ürünleri
              ve farklı çevre dostu kurumsal ürün alternatifleri ile
              sunulabilir. Baskılı ve baskısız seçenekler, ürün modeline göre
              değişebilir.
            </p>

            <p>
              Geri dönüşümlü promosyon ürün fiyatları; ürün modeli, malzeme
              yapısı, baskı tercihi ve sipariş miktarına göre değişiklik
              gösterebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Geri Dönüşümlü Promosyon Ürünleri Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Organizasyon Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Çevre dostu promosyon ürünleri, fuar standlarında ve
                  etkinliklerde markanızın sürdürülebilir yaklaşımını öne
                  çıkaran güçlü tanıtım araçlarıdır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Kurumsal Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Şirket içinde kullanılan geri dönüşümlü defter, notluk ve
                  masaüstü ürünleri kurumsal bütünlüğü desteklerken çevre
                  duyarlılığı mesajını da güçlendirir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Geri dönüşümlü promosyon ürünleri, müşterilere ve iş
                  ortaklarına verilebilecek kullanışlı ve kurumsal değeri
                  yüksek hediye alternatifleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Sürdürülebilir Marka İletişimi
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Çevre dostu promosyon ürünleri, markanızın sürdürülebilirlik
                  vizyonunu destekleyen toplu tanıtım çalışmalarında etkili bir
                  kurumsal iletişim çözümü sunar.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}