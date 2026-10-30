import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts as products } from "@/data/productVisibility";
import ProductsClient from "./ProductsClient";
import { sortProductsByCode } from "@/data/productSorting";
import { categorySubfilters, matchesSubfilter } from "./productFilters";

const SITE_URL = "https://www.firmapromosyon.com";

const categoryLinks = [
  { href: "/promosyon-kalem", label: "Promosyon Kalem" },
  { href: "/promosyon-defter", label: "Promosyon Defter" },
  { href: "/promosyon-ajanda", label: "Promosyon Ajanda" },
  { href: "/promosyon-powerbank", label: "Promosyon Powerbank" },
  { href: "/promosyon-usb-bellek", label: "Promosyon USB Bellek" },
  { href: "/promosyon-termos", label: "Promosyon Termos" },
  { href: "/promosyon-matara", label: "Promosyon Matara" },
  { href: "/promosyon-kalem-setleri", label: "Promosyon Kalem Setleri" },
  { href: "/promosyon-teknolojik-urunler", label: "Teknolojik Ürünler" },
  { href: "/promosyon-vip-urunler", label: "VIP Promosyon Ürünleri" },
  { href: "/promosyon-cakmak", label: "Promosyon Çakmak" },
  { href: "/promosyon-anahtarlik", label: "Promosyon Anahtarlık" },
];

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const metadata: Metadata = {
  title: "Promosyon Ürünleri | Logo Baskılı Kurumsal Hediyeler",
  description:
    "Logo baskılı promosyon ürünlerini inceleyin. Kalem, defter, ajanda, termos ve kurumsal hediye modellerini karşılaştırın; toplu sipariş için teklif alın.",
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
    title: "Promosyon Ürünleri | Logo Baskılı Kurumsal Hediyeler | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ürünlerini inceleyin. Kalem, defter, ajanda, termos ve kurumsal hediye modellerini karşılaştırın; toplu sipariş için teklif alın.",
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
    title: "Promosyon Ürünleri | Logo Baskılı Kurumsal Hediyeler | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ürünlerini inceleyin. Kalem, defter, ajanda, termos ve kurumsal hediye modellerini karşılaştırın; toplu sipariş için teklif alın.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function ProductsPage() {

  const pageUrl = `${SITE_URL}/urunler`;

  const sortedProducts = sortProductsByCode(products);
  const cardProducts = sortedProducts.map((product) => ({
    id: product.id,
    slug: product.slug,
    title: product.title,
    category: product.category,
    image: product.image,
    shortDesc: product.shortDesc,
    ...(typeof product.price === "number" ? { price: product.price } : {}),
    matchedSubfilters: (categorySubfilters[product.category] || [])
      .filter((filter) => matchesSubfilter(product, filter)),
  }));

  const itemListElement = sortedProducts.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
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
            name: "Promosyon Ürünleri",
            url: pageUrl,
            description:
              "Logo baskılı promosyon ürünlerini inceleyin. Kalem, defter, ajanda, termos ve kurumsal hediye modellerini karşılaştırın; toplu sipariş için teklif alın.",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: sortedProducts.length,
              itemListElement,
            },
          }}
        />

        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            Promosyon Ürünleri
          </h1>
          <p className="mt-2 text-base text-white/80 md:text-lg">
            Kategorilere göre filtreleyin ve hızlı teklif alın.
          </p>
        </div>

        <Suspense fallback={<ProductsLoadingFallback />}>
          <ProductsClient products={cardProducts} />
        </Suspense>

        <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
          <h2 className="text-xl font-bold text-white">
            Popüler Promosyon Kategorileri
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            İhtiyacınıza uygun promosyon ürünlerini kategori sayfalarından inceleyin.
          </p>
          <nav aria-label="Popüler promosyon kategorileri" className="mt-4 flex flex-wrap gap-2">
            {categoryLinks.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
              >
                {category.label}
              </Link>
            ))}
          </nav>
        </section>
      </div>
    </div>
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