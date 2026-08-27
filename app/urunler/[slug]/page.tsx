import Image from "next/image";
import ProductGallery from "./ProductGallery";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSupabaseServer } from "@/lib/supabase/server";
import { categories } from "@/data/categories";

const SITE_URL = "https://www.firmapromosyon.com";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  params: Promise<{ slug: string }>;
};

type FAQItem = {
  q: string;
  a: string;
};

type ProductRow = {
  id: string;
  slug: string;
  title: string;
  short_desc: string;
  long_desc: string;
  price: number | null;
  category: string;
  image: string;
  gallery: string[] | null;
  faq: FAQItem[] | null;

  seo_title: string | null;
  seo_description: string | null;
  focus_keyword: string | null;
  canonical_url: string | null;

  og_title: string | null;
  og_description: string | null;
  og_image: string | null;

  robots_index: boolean;
  robots_follow: boolean;

  status: string;
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
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
    (category) =>
      normalizeText(category.name) === normalizeText(categoryName)
  );

  return matched ? `/kategori/${matched.slug}` : "/urunler";
}

async function getProductBySlug(slug: string) {
  const { data, error } = await getSupabaseServer()
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Ürün sorgu hatası:", error);
    return null;
  }

  return data as ProductRow | null;
}

async function getRelatedProducts(
  category: string,
  currentSlug: string
) {
  const { data, error } = await getSupabaseServer()
    .from("products")
    .select("id, slug, title, image, price, category")
    .eq("category", category)
    .eq("status", "published")
    .neq("slug", currentSlug)
    .order("sort_order", { ascending: true })
    .limit(8);

  if (error) {
    console.error("Benzer ürün sorgu hatası:", error);
    return [];
  }

  return data ?? [];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Ürün bulunamadı",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical =
    product.canonical_url ||
    `${SITE_URL}/urunler/${product.slug}`;

  const title =
    product.seo_title ||
    product.title;

  const description =
    product.seo_description ||
    product.short_desc;

  const image =
    product.og_image ||
    product.image;

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    robots: {
      index: product.robots_index,
      follow: product.robots_follow,
    },

    openGraph: {
      title: product.og_title || title,
      description:
        product.og_description || description,
      url: canonical,
      type: "website",
      images: [
        {
          url: imageUrl,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.og_title || title,
      description:
        product.og_description || description,
      images: [imageUrl],
    },
  };
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryHref =
    getCategoryHref(product.category);

  const relatedProducts =
    await getRelatedProducts(
      product.category,
      product.slug
    );

  const productUrl =
    `${SITE_URL}/urunler/${product.slug}`;

  const imgUrl =
    product.image.startsWith("http")
      ? product.image
      : `${SITE_URL}${product.image}`;

  const longDescLines =
    (product.long_desc ?? "")
      .trim()
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean);

  const faq =
    Array.isArray(product.faq)
      ? product.faq
      : [];

  const gallery =
    Array.isArray(product.gallery)
      ? product.gallery
      : [];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
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
    description:
      product.seo_description ||
      product.short_desc,
    image: [imgUrl],
    url: productUrl,

    brand: {
      "@type": "Brand",
      name: "FirmaPromosyon",
    },

    category: product.category,

    ...(product.price !== null
      ? {
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "TRY",
            availability:
              "https://schema.org/InStock",
            itemCondition:
              "https://schema.org/NewCondition",
            url: productUrl,
          },
        }
      : {}),
  };

  const faqJsonLd =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
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

      {faqJsonLd && (
        <JsonLd data={faqJsonLd} />
      )}

      <nav className="mb-6 text-sm text-gray-800">
        <Link
          href="/"
          className="hover:underline"
        >
          Ana Sayfa
        </Link>

        <span className="px-2">/</span>

        <Link
          href="/urunler"
          className="hover:underline"
        >
          Ürünler
        </Link>

        <span className="px-2">/</span>

        <Link
          href={categoryHref}
          className="hover:underline"
        >
          {product.category}
        </Link>

        <span className="px-2">/</span>

        <span className="font-semibold">
          {product.title}
        </span>
      </nav>

      <section className="grid gap-10 md:grid-cols-2 md:items-start">
        <ProductGallery
          title={product.title}
          mainImage={product.image}
          gallery={gallery}
        />

        <div>
          <h1 className="text-3xl font-extrabold leading-tight">
            {product.title}
          </h1>

          {product.price !== null && (
            <div className="mt-4 border-l-4 border-gray-900 pl-4">
              <div className="text-sm font-medium text-gray-500">
                Ürün Fiyatı
              </div>

              <div className="mt-1 text-2xl font-semibold">
                {product.price.toLocaleString(
                  "tr-TR",
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }
                )}{" "}
                TL + KDV
              </div>

              <p className="mt-1 text-sm font-medium text-green-600">
                Fiyatlar baskı hariç olup referans
                niteliğindedir. Sipariş adedi ve baskı
                detaylarına göre özel fiyatlandırma
                yapılmaktadır. Ürünler stok durumuna
                göre temin edilmektedir.
              </p>
            </div>
          )}

          <p className="mt-4 text-gray-900">
            {product.short_desc}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={categoryHref}
              className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium transition hover:bg-gray-300"
            >
              Kategori: {product.category}
            </Link>
          </div>

          {longDescLines.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-bold">
                Ürün Açıklaması
              </h2>

              <div className="mt-3 space-y-3 leading-relaxed">
                {longDescLines.map(
                  (line, index) => (
                    <p key={index}>
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/teklif?product=${encodeURIComponent(
                product.slug
              )}`}
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90"
            >
              Hızlı Teklif Al
            </Link>

            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 font-semibold hover:bg-gray-100"
            >
              İletişim
            </Link>
          </div>
        </div>
      </section>

      {faq.length > 0 && (
        <section className="mt-16 rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-10">
          <h2 className="text-2xl font-bold">
            Sıkça Sorulan Sorular
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            {product.title} hakkında merak edilen
            sipariş, baskı ve teslimat detayları.
          </p>

          <div className="mt-6 space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold">
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
        <h2 className="text-2xl font-bold">
          Kurumsal Toplu Sipariş İçin Teklif Alın
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-700">
          {product.title} ve diğer promosyon
          ürünleri için kurumsal toplu sipariş
          verebilirsiniz. Logo baskı, renk
          seçenekleri, stok durumu ve fiyat
          bilgisi için hemen teklif alın.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href={`/kurumsal-teklif-al?product=${encodeURIComponent(
              product.slug
            )}`}
            className="rounded-xl bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Kurumsal Teklif Al
          </Link>

          <Link
            href="/iletisim"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-200"
          >
            İletişime Geç
          </Link>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Benzer Ürünler
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Bu ürüne benzer logo baskılı promosyon
            ürünlerini inceleyebilirsiniz.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.map(
              (item) => (
                <Link
                  key={item.id}
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

                  <h3 className="mt-3 line-clamp-2 text-sm font-semibold">
                    {item.title}
                  </h3>

                  {item.price !== null && (
                    <div className="mt-2 text-sm font-bold">
                      {Number(
                        item.price
                      ).toLocaleString(
                        "tr-TR",
                        {
                          maximumFractionDigits: 2,
                        }
                      )}{" "}
                      TL + KDV
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </section>
      )}
    </main>
  );
}







