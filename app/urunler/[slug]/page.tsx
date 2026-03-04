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
  description?: string;
  category?: string;
  image?: string;
};

function absUrl(pathOrUrl: string) {
  if (!pathOrUrl) return `${SITE_URL}/og.jpg`;
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function getWaNumber() {
  // env varsa onu kullan, yoksa fallback boş bırak
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const digits = raw.replace(/\D/g, "");
  return digits || "";
}

function getDefaultWaTextEncoded() {
  // env içine URL-encoded text koyuyorsan direkt kullan
  // koymadıysan düz metin koyabilirsin -> burada encode ederiz
  const t = process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_TEXT || "";
  // Eğer zaten % içeriyorsa (encoded olma ihtimali), dokunmayalım:
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
  const description = product.description ?? "Kurumsal promosyon ürünleri için hızlı teklif alın.";
  const canonical = `/urunler/${product.slug}`;
  const ogImage = absUrl(product.image ?? "/og.jpg");

  return {
    title, // layout template otomatik ekler
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

  // Ürün bazlı WhatsApp metni
  const waHref = makeWaHref(`Merhaba, ${product.title} için teklif almak istiyorum.`);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description ?? "Kurumsal promosyon ürünleri için hızlı teklif alın.",
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Ürünler", item: absUrl("/urunler") },
      { "@type": "ListItem", position: 3, name: product.title, item: productUrl },
    ],
  };

  // FAQ (UI + Schema)
  const faqItems = [
    {
      q: "Minimum sipariş adedi var mı?",
      a: "Ürüne göre değişir. Adet, baskı türü ve termin bilgisine göre kurumsal teklif oluşturuyoruz.",
    },
    {
      q: "Baskı türleri neler?",
      a: "Ürüne göre DTF, UV veya serigrafi seçenekleri sunulabilir. En uygun yöntemi teklif aşamasında belirliyoruz.",
    },
    {
      q: "Teslim süresi kaç gün?",
      a: "Adet, stok ve baskı yoğunluğuna göre değişir. Net teslim tarihi teklifte belirtilir.",
    },
    {
      q: "Fiyat nasıl belirleniyor?",
      a: "Ürün tipi, adet, baskı alanı ve tasarım detayına göre hesaplanır. Hızlı teklif alarak fiyatı hemen öğrenebilirsiniz.",
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
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
          <h1 className="mt-2 text-3xl font-semibold text-white">{product.title}</h1>
          <p className="mt-4 text-white/80">
            {product.description ?? "Kurumsal promosyon ürünleri için hızlı teklif alın."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/teklif?urun=${product.slug}`}
              className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black shadow-lg hover:bg-gray-200"
            >
              Hızlı Teklif Al
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

          <div className="mt-8 rounded-2xl bg-white p-6 text-gray-900 shadow-lg">
            <h2 className="text-lg font-semibold">Kurumsal üretim & hızlı dönüş</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
              <li>Logo baskı (DTF / UV / serigrafi) opsiyonları</li>
              <li>Toplu alım – kurumsal teklif</li>
              <li>Termin & adet bilgisi teklifte netleşir</li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Sık Sorulan Sorular</h2>

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