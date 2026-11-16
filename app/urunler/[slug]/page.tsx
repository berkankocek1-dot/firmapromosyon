import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { isProductVisible } from "@/data/productVisibility";
import { getCategoryLandingHref } from "@/data/categoryLandingPages";

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

function getCategoryHref(categoryName: string) {
  return getCategoryLandingHref(categoryName);
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

  const categoryProducts = products.filter(
    (item) => item.category === product.category && (item.slug === product.slug || isProductVisible(item))
  );
  const currentProductIndex = categoryProducts.findIndex(
    (item) => item.slug === product.slug
  );
  const relatedProducts = Array.from(
    {
      length: Math.min(8, Math.max(0, categoryProducts.length - 1)),
    },
    (_, offset) =>
      categoryProducts[
        (currentProductIndex + offset + 1) % categoryProducts.length
      ]
  );

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
      {
        "@type": "ListItem",
        position: 4,
        name: product.title,
        item: productUrl,
      },
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
    ...(product.price && isProductVisible(product)
      ? {
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "TRY",
            availability: product.availability ?? "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            url: productUrl,

          },
        }
      : {}),
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
    <div data-product-detail-surface="true" className="min-h-screen w-full bg-white text-gray-900">
<div className="mx-auto max-w-6xl bg-white px-5 py-10 text-gray-900">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={productJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

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
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            unoptimized
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900">
            {product.title}
          </h1>

          {product.price && isProductVisible(product) && (
            <div className="mt-4 border-l-4 border-gray-900 pl-4">
              <div className="text-sm font-medium text-gray-500">
                Ürün Fiyatı
              </div>

              <div className="mt-1 text-2xl font-semibold text-gray-900">
                {product.price.toLocaleString("tr-TR")} TL + KDV
              </div>

              <p className="mt-1 text-sm font-medium text-green-600">
                Fiyatlar baskı hariç olup referans niteliğindedir. Sipariş
                adedi ve baskı detaylarına göre özel fiyatlandırma yapılmaktadır.
                Ürünler stok durumuna göre temin edilmektedir. Size özel en
                avantajlı teklif için WhatsApp üzerinden bizimle iletişime
                geçebilirsiniz.
              </p>
            </div>
          )}

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href={`/teklif?product=${encodeURIComponent(product.slug)}`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold leading-6 text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              WhatsApp’tan Hızlı Teklif Al
            </Link>
            <Link
              href={`/kurumsal-teklif-al?product=${encodeURIComponent(product.slug)}`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-center text-sm font-semibold leading-6 text-gray-900 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              E-posta ile Teklif Al
            </Link>
          </div>

          <p className="mt-4 text-gray-900">{product.shortDesc}</p>

          {!isProductVisible(product) && (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-gray-900">
              Bu ürün şu anda temin edilemiyor. Yeniden temin durumu ve
              alternatif modeller için bizimle iletişime geçebilirsiniz.
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={categoryHref}
              className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-900 transition hover:bg-gray-300"
            >
              Kategori: {product.category}
            </Link>
          </div>

            {longDescLines.length > 0 && (
              <a
                href="#urun-aciklamasi"
                className="mt-4 min-h-11 max-w-full items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black hidden lg:inline-flex"
              >
                Ürün açıklaması ve özelliklerini incele
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 shrink-0"
                >
                  <path
                    d="M12 5v14m-6-6 6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}




        </div>
      </section>


        {longDescLines.length > 0 && (
          <section
            id="urun-aciklamasi" data-product-description="true"
            className="mt-8 scroll-mt-28 border-t border-gray-200 pt-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Ürün Açıklaması
            </h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-gray-900">
              {longDescLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </section>
        )}

      {product.faq && product.faq.length > 0 && (
        <section className="mt-16 rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Sıkça Sorulan Sorular
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            {product.title} hakkında merak edilen sipariş, baskı ve teslimat
            detaylarını aşağıda inceleyebilirsiniz.
          </p>

          <div className="mt-6 space-y-4">
            {product.faq.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {item.q}
                </h3>

                <p className="mt-2 leading-relaxed text-gray-700">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-16 rounded-2xl bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Kurumsal Toplu Sipariş İçin Teklif Alın
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          {product.title} ve diğer promosyon ürünleri için kurumsal toplu sipariş
          verebilirsiniz. Logo baskı, renk seçenekleri, stok durumu ve fiyat
          bilgisi için hemen teklif alın.
        </p>

        <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
            <Link
              href={`/teklif?product=${encodeURIComponent(product.slug)}`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold leading-6 text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              WhatsApp’tan Hızlı Teklif Al
            </Link>
            <Link
              href={`/kurumsal-teklif-al?product=${encodeURIComponent(product.slug)}`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-center text-sm font-semibold leading-6 text-gray-900 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              E-posta ile Teklif Al
            </Link>
          </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Benzer Ürünler</h2>

          <p className="mt-2 text-sm text-gray-600">
            Bu ürüne benzer logo baskılı promosyon ürün modellerini
            inceleyebilirsiniz.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/urunler/${item.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-3 transition group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 line-clamp-2 text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>

                {item.price && (
                  <div className="mt-2 text-sm font-bold text-gray-900">
                    {item.price.toLocaleString("tr-TR")} TL + KDV
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
</div>
  );
}
