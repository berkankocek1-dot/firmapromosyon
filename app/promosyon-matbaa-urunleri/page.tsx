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

const CATEGORY = "Matbaa Ürünleri";
const PAGE_URL = `${SITE_URL}/promosyon-matbaa-urunleri`;

export const metadata: Metadata = {
  title:
    "Promosyon Matbaa Ürünleri | Logo Baskılı Kurumsal Matbaa Ürünleri",
  description:
    "Promosyon matbaa ürünleri, logo baskılı kurumsal baskı çözümleri ve toplu sipariş seçenekleri için hızlı teklif alın. Kartvizit, broşür, katalog, el ilanı ve kurumsal basılı ürünleri inceleyin.",
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
    title: "Promosyon Matbaa Ürünleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon matbaa ürünleri. Kurumsal tanıtım, baskılı evrak ve toplu sipariş için matbaa ürünlerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Matbaa Ürünleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Matbaa Ürünleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon matbaa ürünleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Matbaa Ürünleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Matbaa Ürünleri",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon matbaa ürünleri. Kurumsal tanıtım, baskılı evrak, fuar ve toplu siparişler için matbaa ürünleri çözümleri.",
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
            Promosyon Matbaa Ürünleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Matbaa Ürünleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Promosyon matbaa ürünleri, kurumsal tanıtım ve marka görünürlüğü
            çalışmalarında en çok tercih edilen baskılı çözümler arasında yer alır.
            Kartvizit, broşür, katalog, el ilanı, dosya, antetli kağıt ve benzeri
            matbaa ürünleri; firmaların profesyonel görünümünü destekleyen önemli
            tanıtım araçlarıdır.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan promosyon matbaa ürünleri; farklı ebat,
            kağıt türü, baskı tekniği ve kurumsal ihtiyaçlara uygun seçeneklerle
            sunulmaktadır. Firmanızın logosuna ve tasarımına uygun baskılı sipariş
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
              Logo Baskılı Promosyon Matbaa Ürünleri
            </h2>

            <p>
              Logo baskılı promosyon matbaa ürünleri, firmanızın kurumsal kimliğini
              yansıtan ve marka görünürlüğünü artıran profesyonel baskı çözümleri
              arasında yer alır. Kurumsal iletişimde kullanılan basılı materyaller,
              müşteriler ve iş ortakları üzerinde güven veren bir izlenim bırakır.
            </p>

            <p>
              Kurumsal firmalar tarafından sık tercih edilen matbaa ürünleri;
              kartvizit, broşür, katalog, el ilanı, antetli kağıt, sunum dosyası ve
              çeşitli tanıtım materyalleri gibi geniş bir kullanım alanına sahiptir.
            </p>

            <p>
              Promosyon matbaa ürünleri; tasarım yapısı, baskı tekniği, kağıt türü
              ve kullanım amacına göre farklı alternatiflerle sunulabilir. Marka
              ihtiyacına göre sade, lüks veya yüksek adetli ekonomik baskı çözümleri
              tercih edilebilir.
            </p>

            <p>
              Promosyon matbaa ürünleri fiyatları; ürün türü, baskı özelliği,
              malzeme kalitesi ve sipariş miktarına göre değişiklik gösterebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Matbaa Ürünleri Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kurumsal Tanıtım Çalışmaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon matbaa ürünleri, firmanızın kurumsal kimliğini
                  destekleyen ve marka bilinirliğini artıran etkili tanıtım
                  materyalleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Etkinlik Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Broşür, katalog ve el ilanı gibi baskılı ürünler fuar ve
                  organizasyonlarda markanızı ziyaretçilere profesyonel şekilde
                  tanıtmanıza yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Satış ve Pazarlama Destekleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Matbaa ürünleri, saha satış ekipleri ve pazarlama süreçlerinde
                  müşterilere sunulacak basılı destek materyalleri olarak sık
                  kullanılmaktadır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Resmi Evrak Kullanımı
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Antetli kağıt, dosya ve kartvizit gibi ürünler günlük kurumsal
                  yazışmalarda ve resmi iletişim süreçlerinde profesyonel bir görünüm
                  sağlar.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}