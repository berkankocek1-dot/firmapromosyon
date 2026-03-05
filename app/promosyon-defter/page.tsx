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
  title: "Promosyon Defter Modelleri | Tarihsiz Defter & Kurumsal Baskı",
  description:
    "Promosyon defter modelleri: tarihsiz defter seçenekleri, kurumsal logo baskı ve toplu sipariş için hızlı teklif alın.",
  alternates: { canonical: `${SITE_URL}/promosyon-defter` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Defter Modelleri | FirmaPromosyon",
    description:
      "Tarihsiz promosyon defter çeşitleri. Kurumsal logo baskı ve hızlı teklif.",
    url: `${SITE_URL}/promosyon-defter`,
    type: "website",
    images: [{ url: `${SITE_URL}/og.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Defter Modelleri | FirmaPromosyon",
    description:
      "Tarihsiz promosyon defter çeşitleri. Kurumsal logo baskı ve hızlı teklif.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function PromosyonDefterPage() {
  const categoryName = "Tarihsiz Defter";

  const filtered = products.filter(
    (p) => normalizeTR(p.category) === normalizeTR(categoryName)
  );

  const pageUrl = `${SITE_URL}/promosyon-defter`;

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
            { "@type": "ListItem", position: 3, name: "Promosyon Defter", item: pageUrl },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Defter",
          url: pageUrl,
          description:
            "Tarihsiz promosyon defter modelleri. Kurumsal logo baskı ve toplu sipariş için hızlı teklif.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: filtered.length,
            itemListElement,
          },
        }}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Promosyon Defter Modelleri
        </h1>
        <p className="mt-2 text-gray-700 max-w-2xl">
          Tarihsiz promosyon defter seçenekleri. Minimum adet ve baskı detayları ürün bazında
          teklif aşamasında netleştirilir; renkler stok durumuna göre değişebilir.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/teklif"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90"
          >
            Hızlı Teklif Al
          </Link>
          <Link
            href="/urunler?kategori=Tarihsiz%20Defter"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
          >
            Ürünlerde Filtrele
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
              <p className="mt-2 line-clamp-3 text-sm text-gray-700">{p.shortDesc}</p>
              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Hızlı Teklif
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-gray-600">Bu kategoride henüz ürün yok.</p>
      )}
    </main>
  );
}