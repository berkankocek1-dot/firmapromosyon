import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductsClient from "./ProductsClient";

const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Kurumsal promosyon ürünleri: kalem, çakmak, kupa, ajanda, tişört ve daha fazlası. Hızlı teklif için ürünleri inceleyin.",
  alternates: { canonical: `${SITE_URL}/urunler` },
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
    title: "Ürünler | FirmaPromosyon",
    description:
      "Kurumsal promosyon ürünleri: kalem, çakmak, kupa, ajanda, tişört ve daha fazlası. Hızlı teklif için ürünleri inceleyin.",
    url: `${SITE_URL}/urunler`,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Ürünler | FirmaPromosyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ürünler | FirmaPromosyon",
    description:
      "Kurumsal promosyon ürünleri: kalem, çakmak, kupa, ajanda, tişört ve daha fazlası. Hızlı teklif için ürünleri inceleyin.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

function slugifyCategoryTR(category: string) {
  return category
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map((p) => p.category))).sort(
    (a, b) => a.localeCompare(b, "tr")
  );

  const pageUrl = `${SITE_URL}/urunler`;

  const itemListElement = products.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
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
            ],
          }}
        />

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Ürünler",
            url: pageUrl,
            description:
              "Kurumsal promosyon ürünleri: kalem, çakmak, kupa, ajanda, tişört ve daha fazlası.",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: products.length,
              itemListElement,
            },
          }}
        />

        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            Ürünler
          </h1>
          <p className="mt-2 text-base text-white/80 md:text-lg">
            Kategorilere göre filtreleyin ve hızlı teklif alın.
          </p>
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex min-w-max gap-3 pb-1">
            <Link
              href="/urunler"
              className="whitespace-nowrap rounded-full border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Tümü
            </Link>

            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/kategori/${slugifyCategoryTR(cat)}`}
                className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <Suspense fallback={<ProductsLoadingFallback />}>
          <ProductsClient products={products} />
        </Suspense>
      </div>
    </main>
  );
}

function ProductsLoadingFallback() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="aspect-square w-full rounded-xl bg-gray-100" />

          <div className="mt-4">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="mt-3 h-5 w-full rounded bg-gray-200" />
            <div className="mt-2 h-4 w-5/6 rounded bg-gray-100" />
            <div className="mt-2 h-4 w-4/6 rounded bg-gray-100" />
            <div className="mt-4 h-8 w-28 rounded-full bg-gray-900" />
          </div>
        </div>
      ))}
    </div>
  );
}