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

function normalizeTR(v: string) {
  return v.trim().toLocaleLowerCase("tr-TR");
}

const PAGE_URL = `${SITE_URL}/promosyon-defter`;
const CATEGORY_NAME = "Tarihsiz Defter";

export const metadata: Metadata = {
  title:
    "Promosyon Defter Modelleri | Tarihsiz Defter & Logo Baskılı Kurumsal Defter",
  description:
    "Promosyon defter modelleri, tarihsiz defter seçenekleri ve logo baskılı kurumsal defter çeşitleri için hızlı teklif alın. Toplu siparişe uygun promosyon defter ürünlerini inceleyin.",
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
    title: "Promosyon Defter Modelleri | FirmaPromosyon",
    description:
      "Tarihsiz promosyon defter çeşitleri, logo baskılı kurumsal defter modelleri ve toplu sipariş seçenekleri için hızlı teklif alın.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Defter Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Defter Modelleri | FirmaPromosyon",
    description:
      "Tarihsiz promosyon defter çeşitleri. Kurumsal logo baskı ve toplu sipariş için hızlı teklif alın.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function PromosyonDefterPage() {
  const filtered = products.filter(
    (p) => normalizeTR(p.category) === normalizeTR(CATEGORY_NAME)
  );

  const itemListElement = filtered.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white">
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
              name: "Promosyon Defter",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Defter",
          url: PAGE_URL,
          description:
            "Tarihsiz promosyon defter modelleri. Logo baskılı kurumsal defter çeşitleri ve toplu sipariş için hızlı teklif.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: filtered.length,
            itemListElement,
          },
        }}
      />

      <nav className="mb-6 text-sm text-gray-300">
        <Link href="/" className="hover:text-white hover:underline">
          Ana Sayfa
        </Link>
        <span className="px-2">/</span>
        <Link href="/urunler" className="hover:text-white hover:underline">
          Ürünler
        </Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-white">Promosyon Defter</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">
          Promosyon Defter Modelleri
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
          Promosyon defter modelleri, kurumsal tanıtım ve marka görünürlüğü için
          en sık tercih edilen promosyon ürünleri arasında yer alır. Özellikle
          tarihsiz defter seçenekleri; fuar, seminer, bayi toplantısı, ofis
          kullanımı, müşteri hediyesi ve kurumsal etkinliklerde hem kullanışlı
          hem de uzun ömürlü bir promosyon çözümü sunar.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
          FirmaPromosyon’da yer alan promosyon defter çeşitleri, logo baskılı
          veya baskısız sipariş seçenekleriyle kurumsal ihtiyaçlara uygun şekilde
          sunulmaktadır. Minimum sipariş adetleri, baskı detayları, kapak
          seçenekleri ve renk alternatifleri ürün bazında değişebilir. Sipariş
          öncesinde güncel stok, baskı alanı ve teslim süresi bilgisi alınması
          önerilir.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/teklif"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Hızlı Teklif Al
          </Link>

          <Link
            href="/urunler?kategori=Tarihsiz%20Defter"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ürünlerde Filtrele
          </Link>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
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

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-gray-300">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {filtered.length > 0 && (
        <>
          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon Defter Modelleri
            </h2>

            <p>
              Logo baskılı promosyon defter ürünleri, markanızı kullanıcıların
              masa üstünde, toplantılarda ve günlük iş akışında görünür hale
              getiren etkili reklam araçlarıdır. Defter gibi sürekli kullanılan
              ürünler, marka bilinirliğini artırmak ve kurumsal prestiji
              güçlendirmek açısından oldukça avantajlıdır.
            </p>

            <p>
              Tarihsiz promosyon defter modelleri, tarih sınırlaması olmadığı
              için yıl boyunca kullanılabilen ve bu nedenle en çok tercih edilen
              kurumsal promosyon ürünlerinden biridir. Şirket içi kullanım,
              bayi dağıtımı, müşteri hediyeleri ve fuar organizasyonları için
              oldukça uygundur.
            </p>

            <p>
              Promosyon defter çeşitleri; farklı kapak malzemeleri, iç sayfa
              düzenleri, ebat seçenekleri ve baskı uygulamaları ile sunulabilir.
              Baskılı ve baskısız seçenekler, ürün modeline göre değişebilir.
              Sipariş öncesinde kapak türü, baskı alanı, minimum adet, renk
              seçeneği ve teslim süresi hakkında bilgi alınması önerilir.
            </p>

            <p>
              Promosyon defter fiyatları; ürün ölçüsü, kapak malzemesi, sayfa
              yapısı, baskı tercihi ve sipariş miktarına göre değişiklik
              gösterebilir. Firmanız için en uygun modeli seçerek toplu sipariş
              ve hızlı teklif avantajlarından yararlanabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Defter Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Etkinlik Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve kurumsal organizasyonlarda dağıtılan
                  logo baskılı defterler, ziyaretçilerin markanızı uzun süre
                  hatırlamasına yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Kurumsal Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Şirket içi personel kullanımı, toplantılar ve müşteri
                  görüşmeleri için promosyon defter kullanmak, kurumsal
                  bütünlüğü güçlendiren pratik bir çözümdür.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon defter modelleri, mevcut müşterilere ve bayi ağına
                  verilebilecek kullanışlı, prestijli ve uzun ömürlü kurumsal
                  hediye ürünleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Firma Tanıtım Çalışmaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli promosyon defter siparişleri, marka bilinirliği
                  oluşturmak isteyen firmalar için etkili ve profesyonel bir
                  tanıtım çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Sık Aranan Promosyon Defter Terimleri
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "promosyon defter",
                "tarihsiz defter",
                "logo baskılı defter",
                "kurumsal defter",
                "toptan promosyon defter",
                "firma logolu defter",
                "baskılı defter",
                "promosyon ürünleri",
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
        </>
      )}
    </main>
  );
}