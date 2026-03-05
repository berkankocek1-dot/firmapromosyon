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

export const metadata: Metadata = {
  title: "Promosyon Ajanda Modelleri | Logo Baskılı Kurumsal Ajanda",
  description:
    "Promosyon ajanda modelleri: logo baskılı kurumsal ajanda çeşitleri. Toplu sipariş, stok kontrolü ve hızlı teklif için inceleyin.",
  alternates: { canonical: `${SITE_URL}/promosyon-ajanda` },
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
    title: "Promosyon Ajanda Modelleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ajanda çeşitleri. Kurumsal toplu alım ve hızlı teklif.",
    url: `${SITE_URL}/promosyon-ajanda`,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ajanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ajanda Modelleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ajanda çeşitleri. Kurumsal toplu alım ve hızlı teklif.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function PromosyonAjandaPage() {
  const categoryName = "Ajanda";

  const filtered = products.filter(
    (p) => normalizeTR(p.category) === normalizeTR(categoryName)
  );

  const pageUrl = `${SITE_URL}/promosyon-ajanda`;

  const itemListElement = filtered.map((p, idx) => ({
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
            { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Ürünler", item: `${SITE_URL}/urunler` },
            { "@type": "ListItem", position: 3, name: "Promosyon Ajanda", item: pageUrl },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Ajanda",
          url: pageUrl,
          description:
            "Logo baskılı promosyon ajanda modelleri. Kurumsal toplu alım ve hızlı teklif.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: filtered.length,
            itemListElement,
          },
        }}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Promosyon Ajanda Modelleri
        </h1>
        <p className="mt-2 max-w-2xl text-gray-700">
          Logo baskıya uygun promosyon ajanda çeşitleri. Kurumsal toplu alım,
          stok kontrolü ve hızlı teklif için ürünleri inceleyin.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/teklif"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90"
          >
            Hızlı Teklif Al
          </Link>

          <Link
            href="/kategori/ajanda"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
          >
            Kategori Sayfasına Git
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
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
              <div className="text-xs font-semibold text-gray-600">{p.category}</div>
              <h2 className="mt-1 text-lg font-bold text-gray-900">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-gray-700">
                {p.shortDesc}
              </p>

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Hızlı Teklif
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">
            Bu kategoride henüz ürün yok. Yakında eklenecek.
          </p>
        </div>
      )}
    </main>
  );
}