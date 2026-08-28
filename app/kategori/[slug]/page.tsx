import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { getCategoryBySlug, categories } from "@/data/categories";
import CategoryProductsClient from "./CategoryProductsClient";

const SITE_URL = "https://www.firmapromosyon.com";
const WHATSAPP_NUMBER = "905350509128";

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

function getCategoryDescription(name: string, count: number) {
  return `${name} kategorisinde yer alan ${count} farklı ürünü inceleyebilir, firmanıza uygun logo baskılı kurumsal promosyon seçenekleri için hızlı teklif alabilirsiniz. Toplu alım, özel baskı ve kurumsal çözümler için kategori detaylarını inceleyin.`;
}

function getCategorySeoContent(name: string) {
  return {
    title: `${name} Modelleri ve Logo Baskılı Kurumsal Çözümler`,
    intro: `${name} kategorisi, kurumsal tanıtım çalışmaları, fuar dağıtımları, etkinlik organizasyonları ve toplu promosyon ihtiyaçları için tercih edilen ürünleri bir araya getirir. Firma logonuza uygun baskı çözümleri ile markanızı görünür kılabilir, hedef kitlenize uzun süre kullanılacak promosyon ürünleri sunabilirsiniz.`,
    body1: `${name} ürünleri seçilirken ürün kalitesi, baskı uygunluğu, kullanım alanı ve hedef kitle uyumu büyük önem taşır. Doğru promosyon ürünü seçimi, yalnızca dağıtım yapmak için değil, markanızın akılda kalıcılığını artırmak için de önemlidir.`,
    body2: `FirmaPromosyon olarak ${name.toLocaleLowerCase(
      "tr-TR"
    )} kategorisinde hem ekonomik hem de premium seçenekler sunuyoruz. Toplu sipariş, logo baskı, kurumsal teklif ve üretim süreçleri için bizimle iletişime geçebilir, firmanıza en uygun modeli hızlı şekilde belirleyebilirsiniz.`,
  };
}

function getFaqItems(categoryName: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${categoryName} ürünlerine logo baskı yapılabiliyor mu?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Evet. ${categoryName} kategorisindeki birçok ürün üzerine logo baskı uygulanabilmektedir. Baskı yöntemi ürün modeline göre değişebilir.`,
        },
      },
      {
        "@type": "Question",
        name: `${categoryName} ürünleri toplu siparişe uygun mu?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Evet. ${categoryName} ürünleri kurumsal toplu siparişler için uygundur. Minimum sipariş adedi ürün modeline göre değişebilir.`,
        },
      },
      {
        "@type": "Question",
        name: `${categoryName} fiyat teklifi nasıl alınır?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Bu kategori sayfasındaki ürünleri inceleyerek WhatsApp üzerinden hızlı fiyat teklifi alabilirsiniz.`,
        },
      },
      {
        "@type": "Question",
        name: `${categoryName} sayfasındaki ürünler güncel mi?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Kategori sayfamız düzenli olarak güncellenmektedir. Güncel ürün, baskı seçeneği ve stok bilgisi için bizimle iletişime geçebilirsiniz.`,
        },
      },
    ],
    url: pageUrl,
  };
}

function getCategoryWhatsAppUrl(categoryName: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${categoryName} kategorisindeki ürünler için kurumsal fiyat teklifi almak istiyorum.`
  )}`;
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
    `${cat.name} ürünleri, logo baskılı kurumsal promosyon ve toplu alım çözümleri için hızlı teklif alın.`;

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
  const seoContent = getCategorySeoContent(cat.name);
  const whatsappUrl = getCategoryWhatsAppUrl(cat.name);

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

  const faqJsonLd = getFaqItems(cat.name, pageUrl);
  const featuredProducts = filtered.slice(0, 6);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <JsonLd data={breadcrumbJsonLd} />
        <JsonLd data={collectionJsonLd} />
        <JsonLd data={faqJsonLd} />

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

        <section className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold text-white md:text-5xl">
                {cat.name}
              </h1>
              <p className="mt-3 text-base leading-7 text-white/80 md:text-lg">
                {cat.seoDescription ||
                  getCategoryDescription(cat.name, filtered.length)}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:min-w-[240px]">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm text-white/60">Kategori Ürün Sayısı</div>
                <div className="mt-1 text-3xl font-bold text-white">
                  {filtered.length}
                </div>
              </div>

              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Kurumsal Teklif Al
              </Link>
            </div>
          </div>
        </section>

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
          <>
            <CategoryProductsClient
              products={filtered}
              categoryName={cat.name}
            />

            <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {seoContent.title}
              </h2>

              <div className="mt-5 space-y-5 text-[15px] leading-7 text-white/80 md:text-base">
                <p>{seoContent.intro}</p>
                <p>{seoContent.body1}</p>
                <p>{seoContent.body2}</p>
              </div>

              {featuredProducts.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white">
                    Öne Çıkan {cat.name} Ürünleri
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {featuredProducts.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/urunler/${product.slug}`}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/urunler"
                  className="inline-flex rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  Tüm Ürünleri İncele
                </Link>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  Bu Kategori İçin Teklif Al
                </Link>
              </div>
            </section>

            <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Sık Sorulan Sorular
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    {cat.name} ürünlerine baskı yapılır mı?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Evet. Ürün modeline göre lazer baskı, UV baskı, serigrafi,
                    tampon baskı veya farklı baskı teknikleri uygulanabilir.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    Minimum sipariş adedi var mı?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Minimum sipariş adedi ürün modeline göre değişebilir. Toplu
                    alım ve üretim detayları için teklif alabilirsiniz.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    Kurumsal teklif süreci nasıl ilerliyor?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Ürün seçiminizi yaptıktan sonra adet, baskı talebi ve teslim
                    detaylarını ileterek WhatsApp üzerinden hızlı fiyat teklifi
                    alabilirsiniz.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    Ürünler güncel mi?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Kategori içerikleri düzenli olarak güncellenmektedir. Güncel
                    stok, renk ve üretim bilgisi için bizimle iletişime
                    geçebilirsiniz.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}