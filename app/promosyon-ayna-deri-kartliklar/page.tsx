import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";


const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const CATEGORY = "Ayna ve Deri Kartlıklar";
const PAGE_URL = `${SITE_URL}/promosyon-ayna-deri-kartliklar`;

export const metadata: Metadata = {
  title:
    "Promosyon Ayna ve Manikür Setleri | Logo Baskılı Modeller",
  description:
    "Katlanır ayna, derili cep aynası ve 5 parça aynalı manikür setlerini inceleyin. AY-100, AY-110, AY-120 ve MNK-100 için logo baskılı toplu sipariş teklifi alın.",
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
    title: "Promosyon Ayna ve Deri Kartlıklar | FirmaPromosyon",
    description:
      "Katlanır ayna, kare ve yuvarlak cep aynası ile aynalı manikür setleri. Logo uygulaması için teklif alın.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ayna ve Deri Kartlıklar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ayna ve Deri Kartlıklar | FirmaPromosyon",
    description:
      "Promosyon cep aynaları ve 5 parça aynalı manikür setleri için toplu sipariş ve logo uygulaması.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter((p) => p.category === CATEGORY));

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
              name: "Promosyon Ayna ve Deri Kartlıklar",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Ayna ve Deri Kartlıklar",
          url: PAGE_URL,
          description:
            "AY-100, AY-110 ve AY-120 aynalar ile MNK-100 aynalı manikür seti. Kurumsal logo uygulaması ve toplu sipariş seçenekleri.",
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
            Promosyon Ayna ve Deri Kartlıklar
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Ayna ve Deri Kartlıklar
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            AY-100 katlanır ayna, AY-110 derili ayna, AY-120 kare ayna ve MNK-100 aynalı manikür setini inceleyin. Kozmetik, güzellik ve kişisel bakım kampanyaları için ürünleri karşılaştırabilirsiniz.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Aynalarda ürün ölçüsü ile logo alanı ayrı değerlendirilir. AY-110 ve AY-120 baskı seçenekleri ile manikür setinin renkleri ürün sayfalarında yer alır. Toplu sipariş ve tasarıma özel teklif alabilirsiniz.
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

      <p className="mt-8 text-sm font-medium text-gray-700">{list.length} ürün gösteriliyor</p>

      <section className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
              <Image
  src={p.image}
  alt={p.title}
  fill
  unoptimized
  loading="lazy"
  className="object-contain bg-white p-4"
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

              {typeof p.price === "number" && p.price > 0 ? (
                <div className="mt-3">
                  <p className="text-base font-bold text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p>
                  <p className="mt-1 text-xs text-gray-600">Fiyatlar baskı hariçtir. Güncel teklif için iletişime geçin.</p>
                </div>
              ) : <p className="mt-3 text-sm font-semibold text-gray-900">Güncel fiyat için teklif alın.</p>}

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
              Logo Baskılı Cep Aynaları ve Manikür Seti
            </h2>

            <p>AY-100 katlanabilir tasarımıyla, AY-110 60 mm ölçüsüyle ve AY-120 60 x 60 mm kare formuyla ayrılır. MNK-100 ise 5 parça bilgisiyle sunulan aynalı manikür setidir.</p>

            <p>Bu modeller kozmetik kampanyalarında, güzellik merkezi tanıtımlarında, müşteri ve çalışan hediyelerinde değerlendirilebilir.</p>

            <p>AY-110 ve AY-120 için serigrafi / tampon, UV ve dijital baskı seçenekleri bulunur. AY-100 ve MNK-100 logo uygulaması teklif aşamasında belirlenir.</p>

            <p>Ayna ve manikür seti fiyatları; model, sipariş miktarı ve logo uygulamasına göre değerlendirilir. Liste fiyatları baskı hariçtir ve KDV ayrıca eklenir.</p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Ayna ve Manikür Setleri Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Günlük Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">Cep aynaları ve aynalı manikür seti, kişisel kullanım için taşınabilir seçeneklerdir.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kurumsal Hediyeler
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">Kozmetik ve güzellik alanındaki müşteri kampanyaları için değerlendirilebilir.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Organizasyonlar
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">Fuar ve etkinliklerde modele uygun logo uygulamasıyla tanıtım hediyesi olarak sunulabilir.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Çalışan Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">Çalışanlara yönelik kişisel bakım hediyesi seçenekleri arasında değerlendirilebilir.</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}