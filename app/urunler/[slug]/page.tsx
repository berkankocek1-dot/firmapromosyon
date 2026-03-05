import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { products, type Product } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";
const SITE_NAME = "FirmaPromosyon";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function absUrl(pathOrUrl?: string) {
  const fallback = `${SITE_URL}/og.jpg`;
  if (!pathOrUrl) return fallback;
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function stripToText(input?: string) {
  if (!input) return "";
  return input.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeSlug(s?: string) {
  if (!s) return "";
  try {
    return decodeURIComponent(s).trim().toLowerCase();
  } catch {
    return String(s).trim().toLowerCase();
  }
}

function getWaNumber() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  return raw.replace(/\D/g, "");
}

function getDefaultWaTextEncoded() {
  const t = process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_TEXT || "";
  if (!t) return "";
  if (t.includes("%")) return t;
  return encodeURIComponent(t);
}

function makeWaHref(customText?: string) {
  const num = getWaNumber();
  if (!num) return "/iletisim";
  const base = `https://wa.me/${num}`;
  const textEncoded = customText ? encodeURIComponent(customText) : getDefaultWaTextEncoded();
  return textEncoded ? `${base}?text=${textEncoded}` : base;
}

function findProductBySlug(slug: string): Product | undefined {
  const want = normalizeSlug(slug);
  return products.find((p) => normalizeSlug(p.slug) === want);
}

/** Google index + build stabilitesi */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı | FirmaPromosyon",
      robots: { index: false, follow: false },
    };
  }

  const title = `${product.title} | ${SITE_NAME}`;
  const description =
    (product.shortDesc ||
      stripToText(product.longDesc).slice(0, 160) ||
      "Kurumsal promosyon ürünleri için hızlı teklif alın.").slice(0, 160);

  const canonicalAbs = `${SITE_URL}/urunler/${product.slug}`;
  const ogImage = absUrl(product.image ?? "/og.jpg");

  return {
    title,
    description,
    alternates: { canonical: canonicalAbs },
    openGraph: {
      type: "website",
      url: canonicalAbs,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: product.title }],
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
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
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const product = findProductBySlug(slug);
  if (!product) return notFound();

  const productUrl = absUrl(`/urunler/${product.slug}`);
  const imageAbs = absUrl(product.image ?? "/og.jpg");

  const waHref = makeWaHref(`Merhaba, ${product.title} için teklif almak istiyorum.`);
  const mailOfferHref = `/kurumsal-teklif-al?product=${encodeURIComponent(product.title)}`;

  const productJsonLd: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: stripToText(product.longDesc || product.shortDesc),
    url: productUrl,
    image: [imageAbs],
    brand: { "@type": "Brand", name: SITE_NAME },
    sku: product.slug,
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      url: absUrl(`/teklif?urun=${product.slug}`),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: SITE_NAME },
    },
  };

  const faqItems =
    product.faq && product.faq.length
      ? product.faq
      : [
          {
            q: "Minimum sipariş adedi nedir?",
            a: "Minimum sipariş adedi baskı durumuna göre değişir. Baskısız siparişlerde genelde 50 adet ile başlanır. Logo baskılı siparişlerde minimum adet, baskı tekniğine ve üretim planına göre değişebilir.",
          },
          {
            q: "Logo baskı seçenekleri nelerdir?",
            a: "Ürüne göre UV, tampon veya lazer gibi logo baskı seçenekleri sunulabilir. En uygun baskı yöntemi teklif aşamasında netleştirilir.",
          },
          {
            q: "Teslim süresi kaç gün?",
            a: "Adet, baskı türü ve üretim yoğunluğuna göre değişir. Termin bilgisi teklif aşamasında paylaşılır.",
          },
        ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Ürünler", item: `${SITE_URL}/urunler` },
      { "@type": "ListItem", position: 3, name: product.title, item: productUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-10 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black" />

      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="product-jsonld"
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
          <Image src={product.image ?? "/og.jpg"} alt={product.title} fill className="object-cover" priority />
        </div>

        <div>
          <div className="text-sm font-medium text-white/70">{product.category ?? "Ürün"}</div>

          <h1 className="mt-2 text-3xl font-semibold text-white">{product.title}</h1>

          <p className="mt-4 text-white/80">
            {product.shortDesc ?? "Kurumsal promosyon ürünleri için hızlı teklif alın."}
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
              target={waHref.startsWith("http") ? "_blank" : undefined}
              rel={waHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              WhatsApp’tan Yaz
            </a>
          </div>

          {product.longDesc && (
            <section className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Ürün Açıklaması</h2>
              <div className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/80">{product.longDesc}</div>
            </section>
          )}

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Sık Sorulan Sorular</h2>
            <div className="mt-4 space-y-3">
              {faqItems.map((item) => (
                <details key={item.q} className="rounded-xl border border-white/15 bg-black/20 px-4 py-3">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-white">{item.q}</summary>
                  <p className="mt-2 text-sm text-white/80">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs text-white/40">
            Kalıcı bağlantı:{" "}
            <a className="underline hover:text-white/70" href={productUrl}>
              {productUrl}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}



