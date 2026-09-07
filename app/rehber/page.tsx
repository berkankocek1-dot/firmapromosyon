import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/data/guides";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber`;



export const metadata: Metadata = {
  title: "Promosyon Ürün Rehberleri | FirmaPromosyon",
  description:
    "Promosyon ürünleri, DTF baskı, promosyon kalem, promosyon kupa ve kurumsal promosyon seçimi hakkında detaylı rehberleri inceleyin.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Ürün Rehberleri | FirmaPromosyon",
    description:
      "Promosyon ürünleri ve logo baskı çözümleri hakkında hazırlanan rehber içerikleri inceleyin.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ürün Rehberleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ürün Rehberleri | FirmaPromosyon",
    description:
      "Promosyon ürünleri ve baskı çözümleri hakkında hazırlanan rehber içerikleri inceleyin.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function RehberPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehber",
        item: PAGE_URL,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Promosyon Ürün Rehberleri",
    itemListElement: guides.map((g, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/rehber/${g.slug}`,
      name: g.title,
    })),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              FirmaPromosyon Rehber
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Promosyon Ürün Rehberleri
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
              Promosyon ürünleri, DTF baskı, kurumsal promosyon ürün seçimi ve
              logo baskılı ürünler hakkında hazırladığımız detaylı rehberleri
              inceleyebilirsiniz. Rehber içerikleri sayesinde doğru ürün seçimi,
              baskı yöntemi ve sipariş planlaması hakkında daha net bilgi
              edinebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Öne Çıkan Rehberler
            </h2>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Promosyon ürünleri ve baskı süreçleri hakkında hazırlanan
              içeriklere göz atın.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/rehber/${g.slug}`}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] w-full bg-gray-100">
                <Image
                  src={`/guides/${g.slug}.jpg`}
                  alt={g.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  Rehber
                </div>

                <h2 className="mt-4 text-lg font-extrabold leading-7 text-gray-900 md:text-xl">
                  {g.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-700 md:text-[15px]">
                  {g.desc}
                </p>

                <span className="mt-5 inline-flex items-center text-sm font-semibold text-gray-900">
                  Rehberi Oku →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Promosyon Ürünleri Hakkında Bilmeniz Gerekenler
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon ürünleri, markaların hedef kitlesiyle daha güçlü ve
                kalıcı bir temas kurmasına yardımcı olan etkili tanıtım
                araçlarıdır. Doğru seçilmiş kurumsal promosyon ürünleri; fuar,
                etkinlik, bayi toplantısı, kurumsal hediye ve günlük ofis
                kullanımı gibi birçok alanda yüksek görünürlük sağlar.
              </p>

              <p>
                Logo baskılı promosyon ürünleri seçerken ürün kalitesi, kullanım
                alanı, baskı tekniği ve hedef kitle uyumu gibi kriterler
                önemlidir. Promosyon kalem, promosyon kupa, promosyon termos,
                promosyon ajanda ve diğer kurumsal promosyon ürünleri için
                hazırladığımız rehber içerikler bu süreçte daha doğru karar
                vermenizi sağlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            Promosyon Ürün Kategorileri
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 md:text-base">
            En çok tercih edilen promosyon ürün kategorilerine hızlıca geçerek
            ürünleri inceleyebilirsiniz.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/promosyon-kalem"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Kalem
            </Link>

            <Link
              href="/promosyon-cakmak"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Çakmak
            </Link>

            <Link
              href="/promosyon-anahtarlik"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Anahtarlık
            </Link>

            <Link
              href="/promosyon-termos"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Termos
            </Link>

            <Link
              href="/promosyon-usb-bellek"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon USB Bellek
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}