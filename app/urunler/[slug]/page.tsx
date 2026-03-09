import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

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

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "c")
    .trim();
}

function getCategoryHref(categoryName: string) {
  const matched = categories.find(
    (c) => normalizeText(c.name) === normalizeText(categoryName)
  );

  return matched ? `/kategori/${matched.slug}` : "/urunler";
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
  const categoryHref = getCategoryHref(product.category);

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
      {
        "@type": "ListItem",
        position: 3,
        name: product.category,
        item: `${SITE_URL}${categoryHref}`,
      },
      { "@type": "ListItem", position: 4, name: product.title, item: productUrl },
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

  const faqJsonLd =
    product.faq && product.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <main className="mx-auto max-w-6xl bg-white px-5 py-10 text-gray-900">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={productJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

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
        <Link className="hover:underline" href={categoryHref}>
          {product.category}
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

          <p className="mt-3 text-gray-900">{product.shortDesc}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={categoryHref}
              className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-900 transition hover:bg-gray-300"
            >
              Kategori: {product.category}
            </Link>
          </div>

          {/* Ürün açıklaması */}
          {longDescLines.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-bold text-gray-900">Ürün Açıklaması</h2>

              <div className="mt-3 space-y-3 leading-relaxed text-gray-900">
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
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90"
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

      {/* YENİ EKLENEN KURUMSAL TEKLİF BÖLÜMÜ */}
      <section className="mt-16 rounded-2xl bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Kurumsal Toplu Sipariş İçin Teklif Alın
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          {product.title} ve diğer promosyon ürünleri için kurumsal toplu sipariş
          verebilirsiniz. Logo baskı, renk seçenekleri, stok durumu ve fiyat bilgisi
          için hemen teklif alın.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href={`/kurumsal-teklif-al?product=${encodeURIComponent(product.slug)}`}
            className="rounded-xl bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Kurumsal Teklif Al
          </Link>

          <Link
            href="/iletisim"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-200"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </main>
  );
}