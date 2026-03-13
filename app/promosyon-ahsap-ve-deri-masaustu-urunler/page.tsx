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

const CATEGORY = "Ahşap ve Deri Masaüstü Ürünler";
const PAGE_URL = `${SITE_URL}/promosyon-ahsap-ve-deri-masaustu-urunler`;

export const metadata: Metadata = {
  title:
    "Promosyon Ahşap ve Deri Masaüstü Ürünler | Logo Baskılı Kurumsal Masaüstü Ürünleri",
  description:
    "Promosyon ahşap ve deri masaüstü ürünler, logo baskılı kurumsal masaüstü aksesuarları ve toplu sipariş seçenekleri için hızlı teklif alın. Ofis, yönetici hediyesi ve kurumsal kullanım için masaüstü ürünlerini inceleyin.",
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
    title: "Promosyon Ahşap ve Deri Masaüstü Ürünler | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ahşap ve deri masaüstü ürünleri. Kurumsal tanıtım, ofis kullanımı ve toplu sipariş için masaüstü ürünlerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ahşap ve Deri Masaüstü Ürünler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ahşap ve Deri Masaüstü Ürünler | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ahşap ve deri masaüstü ürünleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Ahşap ve Deri Masaüstü Ürünler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Ahşap ve Deri Masaüstü Ürünler",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon ahşap ve deri masaüstü ürünleri. Kurumsal promosyon, ofis kullanımı, yönetici hediyesi ve toplu siparişler için masaüstü ürünleri.",
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
            Promosyon Ahşap ve Deri Masaüstü Ürünler
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Ahşap ve Deri Masaüstü Ürünler
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Promosyon ahşap ve deri masaüstü ürünler, kurumsal ofis kullanımı ve
            prestijli hediye çözümleri arasında öne çıkan promosyon ürünleridir.
            Logo baskılı veya özel tasarımlı masaüstü aksesuarlar; ofis düzeni,
            yönetici kullanımı, müşteri hediyeleri ve kurumsal marka algısını
            güçlendirmek için şık bir çözüm sunar.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan ahşap ve deri masaüstü ürünleri; farklı
            tasarım, malzeme, kullanım amacı ve kurumsal ihtiyaçlara uygun
            seçeneklerle sunulmaktadır. Firmanızın logosuna uygun baskılı sipariş
            seçenekleri için ürünleri inceleyebilir, toplu alım ve hızlı teklif
            avantajlarından yararlanabilirsiniz.
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
              Logo Baskılı Promosyon Ahşap ve Deri Masaüstü Ürünler
            </h2>

            <p>
              Logo baskılı ahşap ve deri masaüstü ürünler, markanızı daha prestijli
              ve kurumsal bir şekilde yansıtan özel promosyon çözümleri arasında yer
              alır. Ofis masalarında sürekli görünen bu ürünler, marka bilinirliğini
              artırırken aynı zamanda profesyonel bir kurumsal imaj oluşturur.
            </p>

            <p>
              Kurumsal firmalar tarafından tercih edilen masaüstü ürünleri;
              yönetici masalarında, toplantı odalarında, ofis kullanımlarında,
              özel müşteri hediyelerinde ve prestijli kurumsal tanıtım
              çalışmalarında sık kullanılmaktadır.
            </p>

            <p>
              Promosyon ahşap ve deri masaüstü ürünler; masa isimlikleri, kalemlikler,
              kartvizitlikler, evrak düzenleyiciler, masa setleri ve özel tasarımlı
              aksesuarlar gibi farklı alternatiflerle sunulabilir. Ürün detayları ve
              baskı seçenekleri modele göre değişiklik gösterebilir.
            </p>

            <p>
              Ahşap ve deri masaüstü ürün fiyatları; ürün modeli, malzeme kalitesi,
              işçilik, baskı veya lazer uygulaması ve sipariş miktarına göre
              değişiklik gösterebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Ahşap ve Deri Masaüstü Ürünler Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Yönetici ve Ofis Masaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Ahşap ve deri masaüstü ürünler, yönetici ve ofis masalarında
                  düzenli, şık ve kurumsal bir görünüm oluşturmak için tercih edilir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Prestijli Kurumsal Hediyeler
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Özel müşterilere ve iş ortaklarına sunulan deri ve ahşap masaüstü
                  ürünler, yüksek algı değerine sahip kurumsal hediye seçenekleri
                  arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplantı ve Sunum Alanları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Toplantı odalarında kullanılan masaüstü aksesuarlar, kurumsal
                  düzeni destekler ve profesyonel bir sunum ortamı oluşturur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Marka İmajını Güçlendiren Tanıtımlar
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon masaüstü ürünleri, markanızı sıradan promosyonların
                  ötesinde daha seçkin ve kalıcı bir algı ile öne çıkarmaya yardımcı olur.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}