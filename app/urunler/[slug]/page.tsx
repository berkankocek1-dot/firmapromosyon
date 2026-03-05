import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { products } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";
const SITE_NAME = "FirmaPromosyon";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Product = {
  slug: string;
  title: string;
  shortDesc?: string;
  longDesc?: string;
  category?: string;
  image?: string;
};

function absUrl(pathOrUrl: string) {
  if (!pathOrUrl) return `${SITE_URL}/og.jpg`;
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function getWaNumber() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const digits = raw.replace(/\D/g, "");
  return digits || "";
}

function getDefaultWaTextEncoded() {
  const t = process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_TEXT || "";
  if (t.includes("%")) return t;
  return encodeURIComponent(t);
}

function makeWaHref(customText?: string) {
  const num = getWaNumber();
  const base = num ? `https://wa.me/${num}` : `https://wa.me/`;
  const textEncoded = customText
    ? encodeURIComponent(customText)
    : getDefaultWaTextEncoded();

  return textEncoded ? `${base}?text=${textEncoded}` : base;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((p: any) => p.slug === slug) as Product | undefined;

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
      robots: { index: false, follow: false },
    };
  }

  const title = product.title;
  const description =
    product.shortDesc ?? "Kurumsal promosyon ürünleri için hızlı teklif alın.";
  const canonical = `/urunler/${product.slug}`;
  const ogImage = absUrl(product.image ?? "/og.jpg");

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: absUrl(canonical),
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p: any) => p.slug === slug) as Product | undefined;
  if (!product) return notFound();

  const canonicalPath = `/urunler/${product.slug}`;
  const productUrl = absUrl(canonicalPath);
  const imageAbs = absUrl(product.image ?? "/og.jpg");

  const waHref = makeWaHref(`Merhaba, ${product.title} için teklif almak istiyorum.`);
  const mailOfferHref = `/kurumsal-teklif-al?product=${encodeURIComponent(product.title)}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description:
      product.shortDesc ?? "Kurumsal promosyon ürünleri için hızlı teklif alın.",
    url: productUrl,
    image: [imageAbs],
    brand: { "@type": "Brand", name: SITE_NAME },
    sku: product.slug,
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      url: absUrl(`/teklif?urun=${product.slug}`),
      availability: "https://schema.org/InStock",
    },
  };

  const faqItems = [
    {
      q: "Minimum sipariş adedi var mı?",
      a: "Ürüne göre değişir. Adet, baskı türü ve termin bilgisine göre kurumsal teklif oluşturuyoruz.",
    },
    {
      q: "Baskı türleri neler?",
      a: "Ürüne göre DTF, UV veya serigrafi seçenekleri sunulabilir.",
    },
    {
      q: "Teslim süresi kaç gün?",
      a: "Adet ve üretim yoğunluğuna göre değişir.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: x.a,
      },
    })),
  };

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-10 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black" />

      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mb-6">
        <Link href="/urunler" className="text-sm font-medium text-white/70 hover:text-white">
          ← Ürünlere dön
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-800">
          <Image src={product.image ?? "/og.jpg"} alt={product.title} fill className="object-cover" />
        </div>

        <div>
          <div className="text-sm font-medium text-white/70">{product.category ?? "Ürün"}</div>

          <h1 className="mt-2 text-3xl font-semibold text-white">
            {product.title}
          </h1>

          <p className="mt-4 text-white/80">
            {product.shortDesc ??
              "Kurumsal promosyon ürünleri için hızlı teklif alın."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/teklif?urun=${product.slug}`}
              className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black shadow-lg hover:bg-gray-200"
            >
              Hızlı Teklif Al
            </Link>

            <Link
              href={mailOfferHref}
              className="rounded-2xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              Mail ile Teklif Al
            </Link>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              WhatsApp’tan Yaz
            </a>
          </div>

          {/* SEO Ürün Açıklaması */}
          {product.longDesc && (
            <section className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">
                Ürün Açıklaması
              </h2>

              <div className="mt-4 space-y-4 text-white/80 leading-relaxed text-sm">
                {product.longDesc
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean)
                  .map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
              </div>
            </section>
          )}

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">
              Sık Sorulan Sorular
            </h2>

            <div className="mt-4 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="rounded-xl border border-white/15 bg-black/20 px-4 py-3"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-sm text-white/80">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}