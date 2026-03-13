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

const CATEGORY = "Hesap Makineleri";
const PAGE_URL = `${SITE_URL}/promosyon-hesap-makineleri`;

export const metadata: Metadata = {
  title:
    "Promosyon Hesap Makineleri | Logo Baskılı Kurumsal Hesap Makinesi Modelleri",
  description:
    "Promosyon hesap makineleri, logo baskılı kurumsal hesap makinesi çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Ofis ve kurumsal kullanım için promosyon hesap makinelerini inceleyin.",
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
    title: "Promosyon Hesap Makineleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon hesap makinesi çeşitleri. Kurumsal ofis kullanımı ve toplu sipariş için hesap makinesi modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Hesap Makineleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Hesap Makineleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon hesap makinesi çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Hesap Makineleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Hesap Makineleri",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon hesap makineleri. Kurumsal promosyon, ofis kullanımı ve toplu siparişler için hesap makinesi çeşitleri.",
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
            Promosyon Hesap Makineleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Hesap Makineleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Promosyon hesap makineleri, ofis ve ticari kullanımda sık tercih
            edilen pratik promosyon ürünleri arasında yer alır. Logo baskılı
            hesap makinesi modelleri; muhasebe departmanları, finans ekipleri,
            ofis çalışanları ve kurumsal tanıtım çalışmaları için kullanışlı
            bir çözüm sunar.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan promosyon hesap makineleri; farklı
            boyut, tasarım ve kullanım özellikleri ile kurumsal ihtiyaçlara
            uygun seçeneklerle sunulmaktadır. Firmanızın logosuna uygun
            baskılı sipariş seçenekleri için ürünleri inceleyebilir,
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
              Logo Baskılı Promosyon Hesap Makinesi Modelleri
            </h2>

            <p>
              Logo baskılı promosyon hesap makineleri, iş hayatında sık
              kullanılan ve markanızın sürekli görünür olmasını sağlayan
              kullanışlı promosyon ürünleri arasında yer alır. Özellikle
              muhasebe ve finans departmanlarında yoğun şekilde tercih edilir.
            </p>

            <p>
              Kurumsal firmalar tarafından kullanılan hesap makinesi modelleri;
              ofis çalışanları, muhasebe ekipleri, satış temsilcileri ve
              finans departmanları için pratik ve işlevsel bir promosyon
              çözümü sunar.
            </p>

            <p>
              Promosyon hesap makinesi çeşitleri; masaüstü hesap makineleri,
              cep tipi hesap makineleri ve çok fonksiyonlu hesap makineleri
              gibi farklı alternatiflerle sunulabilir.
            </p>

            <p>
              Promosyon hesap makinesi fiyatları; ürün modeli, fonksiyon
              özellikleri, baskı tercihi ve sipariş miktarına göre
              değişiklik gösterebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Hesap Makineleri Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Muhasebe Departmanları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Muhasebe ekipleri tarafından kullanılan hesap makineleri,
                  günlük finans işlemlerinde önemli bir yardımcıdır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis Çalışma Alanları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Ofislerde kullanılan hesap makineleri, hızlı hesaplama
                  işlemleri için pratik bir çözüm sunar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kurumsal Tanıtım Çalışmaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon hesap makineleri, markanızı uzun süre
                  görünür kılan kullanışlı promosyon ürünleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Eğitim ve Ticari Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Okullar ve ticari işletmeler için hesap makineleri
                  pratik ve işlevsel bir araçtır.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}