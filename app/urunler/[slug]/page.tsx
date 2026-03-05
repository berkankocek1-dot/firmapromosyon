import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Ürün bulunamadı",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${SITE_URL}/urunler/${product.slug}`;
  const imgUrl = product.image.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image}`;

  return {
    title: product.title,
    description: product.shortDesc,
    alternates: { canonical },
    openGraph: {
      title: product.title,
      description: product.shortDesc,
      url: canonical,
      type: "article",
      images: [{ url: imgUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.shortDesc,
      images: [imgUrl],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  const productUrl = `${SITE_URL}/urunler/${product.slug}`;

  const longDescText = (product.longDesc ?? "").trim();
  const longDescLines = longDescText
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const imgUrl = product.image.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image}`;

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
      { "@type": "ListItem", position: 3, name: product.title, item: productUrl },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDesc,
    image: [imgUrl],
    url: productUrl,
    brand: { "@type": "Brand", name: "FirmaPromosyon" },
    category: product.category,
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 bg-white text-gray-900">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={productJsonLd} />

      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-800">
        <Link className="hover:underline" href="/">
          Ana Sayfa
        </Link>
        <span className="px-2">/</span>
        <Link className="hover:underline" href="/urunler">
          Ürünler
        </Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-gray-900">{product.title}</span>
      </nav>

      <section className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* Görsel */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* İçerik */}
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900">
            {product.title}
          </h1>

          <p className="mt-3 text-gray-900">
            {product.shortDesc}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-900">
              Kategori: {product.category}
            </span>
          </div>

          {/* Ürün açıklaması */}
          {longDescLines.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-bold text-gray-900">
                Ürün Açıklaması
              </h2>

              <div className="mt-3 space-y-3 text-gray-900 leading-relaxed">
                {longDescLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/teklif?product=${encodeURIComponent(product.slug)}`}
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90"
            >
              Hızlı Teklif Al
            </Link>

            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              İletişim
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}