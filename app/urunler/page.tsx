import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Kurumsal promosyon ürünleri: kupa, ajanda, kalem, tişört ve daha fazlası. Hızlı teklif için ürünleri inceleyin.",
  alternates: {
    canonical: "/urunler",
  },
  openGraph: {
    title: "Ürünler | FirmaPromosyon",
    description:
      "Kurumsal promosyon ürünleri: kupa, ajanda, kalem, tişört ve daha fazlası. Hızlı teklif için ürünleri inceleyin.",
    url: `${SITE_URL}/urunler`,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ürünler" }],
  },
};

function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ProductsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ürünler",
    url: `${SITE_URL}/urunler`,
    description:
      "Kurumsal promosyon ürünleri: kupa, ajanda, kalem, tişört ve daha fazlası.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/urunler/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={collectionSchema} />

      <h1 className="mb-8 text-3xl font-semibold text-gray-900">Ürünler</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium text-gray-600">{p.category}</div>

              <h2 className="mt-1 text-lg font-semibold text-gray-900">
                {p.title}
              </h2>

              <p className="mt-2 text-sm text-gray-700">{p.shortDesc}</p>

              <div className="mt-4 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold text-white">
                Hızlı Teklif
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}