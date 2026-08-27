import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSupabaseServer } from "@/lib/supabase/server";
import { getCategoryBySlug, categories } from "@/data/categories";
import CategoryProductsClient from "./CategoryProductsClient";

const SITE_URL = "https://www.firmapromosyon.com";
export const dynamic = "force-dynamic";
export const revalidate = 0;

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
  return `${name} kategorisinde yer alan ${count} farklÄ± Ã¼rÃ¼nÃ¼ inceleyebilir, firmanÄ±za uygun logo baskÄ±lÄ± kurumsal promosyon seÃ§enekleri iÃ§in hÄ±zlÄ± teklif alabilirsiniz. Toplu alÄ±m, Ã¶zel baskÄ± ve kurumsal Ã§Ã¶zÃ¼mler iÃ§in kategori detaylarÄ±nÄ± inceleyin.`;
}

function getCategorySeoContent(name: string) {
  return {
    title: `${name} Modelleri ve Logo BaskÄ±lÄ± Kurumsal Ã‡Ã¶zÃ¼mler`,
    intro: `${name} kategorisi, kurumsal tanÄ±tÄ±m Ã§alÄ±ÅŸmalarÄ±, fuar daÄŸÄ±tÄ±mlarÄ±, etkinlik organizasyonlarÄ± ve toplu promosyon ihtiyaÃ§larÄ± iÃ§in tercih edilen Ã¼rÃ¼nleri bir araya getirir. Firma logonuza uygun baskÄ± Ã§Ã¶zÃ¼mleri ile markanÄ±zÄ± gÃ¶rÃ¼nÃ¼r kÄ±labilir, hedef kitlenize uzun sÃ¼re kullanÄ±lacak promosyon Ã¼rÃ¼nleri sunabilirsiniz.`,
    body1: `${name} Ã¼rÃ¼nleri seÃ§ilirken Ã¼rÃ¼n kalitesi, baskÄ± uygunluÄŸu, kullanÄ±m alanÄ± ve hedef kitle uyumu bÃ¼yÃ¼k Ã¶nem taÅŸÄ±r. DoÄŸru promosyon Ã¼rÃ¼nÃ¼ seÃ§imi, yalnÄ±zca daÄŸÄ±tÄ±m yapmak iÃ§in deÄŸil, markanÄ±zÄ±n akÄ±lda kalÄ±cÄ±lÄ±ÄŸÄ±nÄ± artÄ±rmak iÃ§in de Ã¶nemlidir.`,
    body2: `FirmaPromosyon olarak ${name.toLocaleLowerCase(
      "tr-TR"
    )} kategorisinde hem ekonomik hem de premium seÃ§enekler sunuyoruz. Toplu sipariÅŸ, logo baskÄ±, kurumsal teklif ve Ã¼retim sÃ¼reÃ§leri iÃ§in bizimle iletiÅŸime geÃ§ebilir, firmanÄ±za en uygun modeli hÄ±zlÄ± ÅŸekilde belirleyebilirsiniz.`,
  };
}

function getFaqItems(categoryName: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${categoryName} Ã¼rÃ¼nlerine logo baskÄ± yapÄ±labiliyor mu?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Evet. ${categoryName} kategorisindeki birÃ§ok Ã¼rÃ¼n Ã¼zerine logo baskÄ± uygulanabilmektedir. BaskÄ± yÃ¶ntemi Ã¼rÃ¼n modeline gÃ¶re deÄŸiÅŸebilir.`,
        },
      },
      {
        "@type": "Question",
        name: `${categoryName} Ã¼rÃ¼nleri toplu sipariÅŸe uygun mu?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Evet. ${categoryName} Ã¼rÃ¼nleri kurumsal toplu sipariÅŸler iÃ§in uygundur. Minimum sipariÅŸ adedi Ã¼rÃ¼n modeline gÃ¶re deÄŸiÅŸebilir.`,
        },
      },
      {
        "@type": "Question",
        name: `${categoryName} fiyat teklifi nasÄ±l alÄ±nÄ±r?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Bu kategori sayfasÄ±ndaki Ã¼rÃ¼nleri inceleyerek WhatsApp Ã¼zerinden hÄ±zlÄ± fiyat teklifi alabilirsiniz.`,
        },
      },
      {
        "@type": "Question",
        name: `${categoryName} sayfasÄ±ndaki Ã¼rÃ¼nler gÃ¼ncel mi?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Kategori sayfamÄ±z dÃ¼zenli olarak gÃ¼ncellenmektedir. GÃ¼ncel Ã¼rÃ¼n, baskÄ± seÃ§eneÄŸi ve stok bilgisi iÃ§in bizimle iletiÅŸime geÃ§ebilirsiniz.`,
        },
      },
    ],
    url: pageUrl,
  };
}

function getCategoryWhatsAppUrl(categoryName: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${categoryName} kategorisindeki Ã¼rÃ¼nler iÃ§in kurumsal fiyat teklifi almak istiyorum.`
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
      title: "Kategori bulunamadÄ±",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${SITE_URL}/kategori/${cat.slug}`;
  const title = cat.seoTitle || `${cat.name} | FirmaPromosyon`;
  const description =
    cat.seoDescription ||
    `${cat.name} Ã¼rÃ¼nleri, logo baskÄ±lÄ± kurumsal promosyon ve toplu alÄ±m Ã§Ã¶zÃ¼mleri iÃ§in hÄ±zlÄ± teklif alÄ±n.`;

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

  const { data: productRows, error: productsError } = await getSupabaseServer()
    .from("products")
    .select("id, slug, title, category, image, short_desc, price, sort_order")
    .eq("status", "published")
    .order("sort_order", { ascending: true });

  if (productsError) {
    throw new Error(
      `Kategori ürünleri alınamadı: ${productsError.message}`
    );
  }

  const filtered = (productRows ?? [])
    .filter(
      (p) =>
        normalizeCategory(p.category) === normalizeCategory(cat.name)
    )
    .map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      category: p.category,
      image: p.image,
      shortDesc: p.short_desc ?? "",
      price:
        p.price === null || p.price === undefined
          ? undefined
          : Number(p.price),
    }));

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
        name: "ÃœrÃ¼nler",
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
      `${cat.name} Ã¼rÃ¼nleri: kurumsal promosyon, toplu alÄ±m ve logo baskÄ± iÃ§in hÄ±zlÄ± teklif alÄ±n.`,
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
            ÃœrÃ¼nler
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
                <div className="text-sm text-white/60">Kategori ÃœrÃ¼n SayÄ±sÄ±</div>
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
              TÃ¼m ÃœrÃ¼nler
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
              Bu kategoride henÃ¼z Ã¼rÃ¼n yok. YakÄ±nda eklenecek.
            </p>
            <div className="mt-4">
              <Link
                href="/urunler"
                className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black hover:opacity-90"
              >
                TÃ¼m Ã¼rÃ¼nleri gÃ¶r
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
                    Ã–ne Ã‡Ä±kan {cat.name} ÃœrÃ¼nleri
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
                  TÃ¼m ÃœrÃ¼nleri Ä°ncele
                </Link>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  Bu Kategori Ä°Ã§in Teklif Al
                </Link>
              </div>
            </section>

            <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                SÄ±k Sorulan Sorular
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    {cat.name} Ã¼rÃ¼nlerine baskÄ± yapÄ±lÄ±r mÄ±?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Evet. ÃœrÃ¼n modeline gÃ¶re lazer baskÄ±, UV baskÄ±, serigrafi,
                    tampon baskÄ± veya farklÄ± baskÄ± teknikleri uygulanabilir.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    Minimum sipariÅŸ adedi var mÄ±?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Minimum sipariÅŸ adedi Ã¼rÃ¼n modeline gÃ¶re deÄŸiÅŸebilir. Toplu
                    alÄ±m ve Ã¼retim detaylarÄ± iÃ§in teklif alabilirsiniz.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    Kurumsal teklif sÃ¼reci nasÄ±l ilerliyor?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    ÃœrÃ¼n seÃ§iminizi yaptÄ±ktan sonra adet, baskÄ± talebi ve teslim
                    detaylarÄ±nÄ± ileterek WhatsApp Ã¼zerinden hÄ±zlÄ± fiyat teklifi
                    alabilirsiniz.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    ÃœrÃ¼nler gÃ¼ncel mi?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Kategori iÃ§erikleri dÃ¼zenli olarak gÃ¼ncellenmektedir. GÃ¼ncel
                    stok, renk ve Ã¼retim bilgisi iÃ§in bizimle iletiÅŸime
                    geÃ§ebilirsiniz.
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



