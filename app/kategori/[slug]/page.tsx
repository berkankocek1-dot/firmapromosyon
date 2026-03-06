import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { getCategoryBySlug, categories } from "@/data/categories";

const SITE_URL = "https://www.firmapromosyon.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function normalizeCategory(v: string) {
  return v.trim().toLocaleLowerCase("tr-TR");
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);

  if (!cat) {
    return {
      title: "Kategori bulunamadı",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${SITE_URL}/kategori/${cat.slug}`;
  const title = cat.seoTitle || `${cat.name} | FirmaPromosyon`;
  const description =
    cat.seoDescription ||
    `${cat.name} ürünleri: kurumsal promosyon ve toplu alım için hızlı teklif alın.`;

  return {
    title,
    description,
    alternates: { canonical },
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
      title,
      description,
      url: canonical,
      siteName: "FirmaPromosyon",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og.jpg`],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return notFound();

  const filtered = products.filter(
    (p) => normalizeCategory(p.category) === normalizeCategory(cat.name)
  );

  const pageUrl = `${SITE_URL}/kategori/${cat.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ürünler",
        item: `${SITE_URL}/urunler`,
      },
      { "@type": "ListItem", position: 3, name: cat.name, item: pageUrl },
    ],
  };

  const itemListElement = filtered.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.seoTitle || `${cat.name} | FirmaPromosyon`,
    url: pageUrl,
    description:
      cat.seoDescription ||
      `${cat.name} ürünleri: kurumsal promosyon, toplu alım ve logo baskı için hızlı teklif alın.`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: filtered.length,
      itemListElement,
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <JsonLd data={breadcrumbJsonLd} />
        <JsonLd data={collectionJsonLd} />

        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-white/70">
          <Link className="hover:text-white hover:underline" href="/">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link className="hover:text-white hover:underline" href="/urunler">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">{cat.name}</span>
        </nav>

        {/* Başlık */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {cat.name}
          </h1>
          <p className="mt-2 text-white/80">
            {cat.seoDescription ||
              `${cat.name} kategorisindeki ürünleri inceleyin ve hızlı teklif alın.`}
          </p>
        </div>

        {/* Kategori hızlı linkler */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex min-w-max gap-3 pb-1">
            <Link
              href="/urunler"
              className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Tüm Ürünler
            </Link>

            {categories.map((c) => {
              const active = c.slug === cat.slug;

              return (
                <Link
                  key={c.slug}
                  href={`/kategori/${c.slug}`}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/20 bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  {c.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Ürünler */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-white/80">
              Bu kategoride henüz ürün yok. Yakında eklenecek.
            </p>
            <div className="mt-4">
              <Link
                href="/urunler"
                className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black hover:opacity-90"
              >
                Tüm ürünleri gör
              </Link>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </main>
  );
}