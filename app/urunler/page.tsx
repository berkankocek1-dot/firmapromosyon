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

function normalizeCategory(v: string) {
  return v.trim().toLocaleLowerCase("tr-TR");
}

type PageProps = {
  searchParams?: Promise<{ kategori?: string }>;
};

export default async function ProductsPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};
  const selected = sp.kategori ? sp.kategori : "Tümü";

  const categories = Array.from(new Set(products.map((p) => p.category))).sort(
    (a, b) => a.localeCompare(b, "tr")
  );

  const filtered =
    selected === "Tümü"
      ? products
      : products.filter(
          (p) => normalizeCategory(p.category) === normalizeCategory(selected)
        );

  const pageUrl =
    selected === "Tümü"
      ? `${SITE_URL}/urunler`
      : `${SITE_URL}/urunler?kategori=${encodeURIComponent(selected)}`;

  const itemListElement = filtered.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Breadcrumb JSON-LD */}
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
            ...(selected !== "Tümü"
              ? [
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: selected,
                    item: pageUrl,
                  },
                ]
              : []),
          ],
        }}
      />

      {/* CollectionPage JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name:
            selected === "Tümü" ? "Ürünler" : `Ürünler - ${selected} Kategorisi`,
          url: pageUrl,
          description:
            "Kurumsal promosyon ürünleri: kalem, çakmak, kupa, ajanda, tişört ve daha fazlası.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: filtered.length,
            itemListElement,
          },
        }}
      />

      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">Ürünler</h1>
        <p className="mt-2 text-gray-700">
          Kategorilere göre filtreleyin ve hızlı teklif alın.
        </p>
      </div>

      {/* ✅ Kategoriler */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Link
          href="/urunler"
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            selected === "Tümü"
              ? "bg-black text-white border-black"
              : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
          }`}
        >
          Tümü
        </Link>

        {categories.map((cat) => {
          const active = normalizeCategory(cat) === normalizeCategory(selected);
          return (
            <Link
              key={cat}
              href={`/urunler?kategori=${encodeURIComponent(cat)}`}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </Link>
          );
        })}
      </div>

      {/* Ürün grid */}
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
              <div className="text-xs font-semibold text-gray-600">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {p.title}
              </h2>

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
        <p className="mt-10 text-center text-gray-700">
          Bu kategoride henüz ürün yok.
        </p>
      )}
    </main>
  );
}