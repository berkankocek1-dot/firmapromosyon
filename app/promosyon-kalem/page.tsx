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

const CATEGORY = "Kalem";
const PAGE_URL = `${SITE_URL}/promosyon-kalem`;

export const metadata: Metadata = {
  title: "Promosyon Kalem | Logo Baskılı Kurumsal Kalem Modelleri",
  description:
    "Promosyon kalem modelleri: logo baskılı, kurumsal kullanım için uygun toplu sipariş seçenekleri. Hızlı teklif alın, ürünleri inceleyin.",
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
    title: "Promosyon Kalem | FirmaPromosyon",
    description:
      "Logo baskılı promosyon kalem çeşitleri. Kurumsal promosyon, fuar ve etkinlikler için toplu sipariş + hızlı teklif.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [{ url: `${SITE_URL}/og.jpg`, width: 1200, height: 630, alt: "Promosyon Kalem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem | FirmaPromosyon",
    description:
      "Logo baskılı promosyon kalem çeşitleri. Toplu sipariş ve hızlı teklif.",
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
            { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Ürünler", item: `${SITE_URL}/urunler` },
            { "@type": "ListItem", position: 3, name: "Promosyon Kalem", item: PAGE_URL },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kalem",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon kalem modelleri. Kurumsal kullanım için toplu sipariş ve hızlı teklif.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      <nav className="mb-6 text-sm text-white/80">
        <Link href="/" className="hover:underline">Ana Sayfa</Link>
        <span className="px-2">/</span>
        <Link href="/urunler" className="hover:underline">Ürünler</Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-white">Promosyon Kalem</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">Promosyon Kalem</h1>
        <p className="mt-2 text-white/80">
          Logo baskılı kurumsal promosyon kalem modellerini inceleyin ve hızlı teklif alın.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/kategori/kalem"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
          >
            Kategori sayfasına git →
          </Link>
          <Link
            href="/kurumsal-teklif-al"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
          >
            Kurumsal Teklif Al →
          </Link>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
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
      </section>
    </main>
  );
}