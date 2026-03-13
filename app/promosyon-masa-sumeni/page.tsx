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

const CATEGORY = "Masa Sümeni";
const PAGE_URL = `${SITE_URL}/promosyon-masa-sumeni`;

export const metadata: Metadata = {
  title:
    "Promosyon Masa Sümeni | Logo Baskılı Kurumsal Masa Sümeni Modelleri",
  description:
    "Promosyon masa sümeni modelleri, logo baskılı kurumsal masa sümeni çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Ofis masaları ve yönetici masaları için promosyon masa sümeni ürünlerini inceleyin.",
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
    title: "Promosyon Masa Sümeni | FirmaPromosyon",
    description:
      "Logo baskılı promosyon masa sümeni çeşitleri. Kurumsal ofis kullanımı ve toplu sipariş için masa sümeni modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Masa Sümeni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Masa Sümeni | FirmaPromosyon",
    description:
      "Logo baskılı promosyon masa sümeni çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Masa Sümeni",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Masa Sümeni",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon masa sümeni modelleri. Kurumsal promosyon, ofis kullanımı ve toplu siparişler için masa sümeni çeşitleri.",
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
            Promosyon Masa Sümeni
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Masa Sümeni
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Promosyon masa sümeni modelleri, ofis masalarında düzen ve
            profesyonel görünüm sağlayan kurumsal promosyon ürünleri
            arasında yer alır. Logo baskılı masa sümeni ürünleri,
            yöneticiler ve ofis çalışanları için hem kullanışlı hem de
            prestijli bir masa aksesuarı sunar.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan masa sümeni çeşitleri; farklı
            malzeme, tasarım ve kullanım özellikleri ile kurumsal
            ihtiyaçlara uygun seçeneklerle sunulmaktadır. Firmanızın
            logosuna uygun baskılı sipariş seçenekleri için ürünleri
            inceleyebilir, toplu alım ve hızlı teklif avantajlarından
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
              Logo Baskılı Promosyon Masa Sümeni Modelleri
            </h2>

            <p>
              Logo baskılı masa sümeni ürünleri, ofis masalarında düzen
              sağlarken markanızın sürekli görünür olmasına yardımcı
              olan kurumsal promosyon ürünleri arasında yer alır.
              Özellikle yönetici masalarında kullanılan masa sümenleri
              prestijli bir kurumsal görünüm oluşturur.
            </p>

            <p>
              Kurumsal firmalar tarafından tercih edilen masa sümeni
              modelleri; yönetici ofislerinde, toplantı odalarında ve
              çalışma alanlarında düzenli bir masa görünümü oluşturmak
              için kullanılmaktadır.
            </p>

            <p>
              Promosyon masa sümeni çeşitleri; deri görünümlü masa
              sümenleri, özel tasarımlı masa setleri ve farklı
              boyutlarda masa düzenleyici aksesuarlarla birlikte
              sunulabilir.
            </p>

            <p>
              Promosyon masa sümeni fiyatları; ürün modeli, malzeme
              kalitesi, baskı tercihi ve sipariş miktarına göre
              değişiklik gösterebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Masa Sümeni Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Yönetici Masaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Masa sümeni ürünleri yönetici masalarında düzen
                  ve prestijli bir görünüm oluşturur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis Çalışma Alanları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Ofis çalışanlarının masalarında düzen sağlamak
                  için masa sümeni ürünleri tercih edilir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kurumsal Hediyeler
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Logo baskılı masa sümenleri kurumsal hediyeler
                  arasında prestijli bir seçenek oluşturur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplantı ve Sunum Alanları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Toplantı odalarında kullanılan masa sümenleri
                  profesyonel bir masa düzeni sağlar.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}