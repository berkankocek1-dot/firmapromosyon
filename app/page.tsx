import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

const CATEGORY_ORDER = [
  "Kalem",
  "Anahtarlık",
  "Çakmak",
  "Kupa",
  "USB Bellek",
  "Termos",
  "Ajanda",
  "Tarihsiz Defter",
  "Powerbank",
  "Karton Çantalar",
  "Duvar Saatleri",
  "Kalem Setleri",
  "Geri Dönüşümlü Ürünler",
  "Yapışkanlı Notluklar",
  "Matbaa Ürünleri",
  "Promosyon Şapka",
  "Ahşap ve Deri Masaüstü Ürünler",
  "Promosyon Tişört",
  "Organizerler",
  "Sekreterlikler ve Evrak Çantaları",
  "Kırtasiye Ürünleri",
  "VIP Ürünler",
  "Masa Sümeni",
  "Hesap Makineleri",
  "Seramik ve Porselen Kupalar",
  "Ham Bez & Tela Çanta",
  "Bayraklar",
  "Teknolojik Ürünler",
  "Kartvizitlik",
  "Ayna ve Deri Kartlıklar",
  "Çakı, Fener ve Tornavida Seti",
  "İmalat Ürünler",
] as const;

export const metadata: Metadata = {
  title: "FirmaPromosyon | Logo Baskılı Kurumsal Promosyon Ürünleri",
  description:
    "Logo baskılı kurumsal promosyon ürünleri, promosyon kalem, termos, ajanda, anahtarlık, USB bellek ve powerbank çözümleri için FirmaPromosyon’dan hızlı teklif alın.",
  alternates: { canonical: "/" },
  keywords: [
    "promosyon ürünleri",
    "kurumsal promosyon ürünleri",
    "logo baskılı promosyon ürünleri",
    "promosyon kalem",
    "promosyon ajanda",
    "promosyon anahtarlık",
    "promosyon çakmak",
    "promosyon termos",
    "promosyon powerbank",
    "promosyon usb bellek",
    "dtf baskı",
    "uv baskı",
    "toptan promosyon ürünleri",
  ],
  openGraph: {
    title: "FirmaPromosyon | Logo Baskılı Kurumsal Promosyon Ürünleri",
    description:
      "Kurumsal promosyon ürünleri, toplu sipariş ve logo baskı çözümleri için hızlı teklif alın.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "FirmaPromosyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FirmaPromosyon | Logo Baskılı Kurumsal Promosyon Ürünleri",
    description:
      "Kurumsal promosyon ürünleri, toplu sipariş ve logo baskı çözümleri için hızlı teklif alın.",
    images: ["/og.jpg"],
  },
};

const WHATSAPP =
  "https://wa.me/905350509128?text=Merhaba%2C%20promosyon%20%C3%BCr%C3%BCnleri%20ve%20kurumsal%20sipari%C5%9F%20i%C3%A7in%20teklif%20almak%20istiyorum.";

function pickTitle(p: any) {
  return p?.title ?? p?.name ?? "Ürün";
}
function pickDesc(p: any) {
  return p?.shortDesc ?? p?.description ?? "Kurumsal promosyon için hızlı teklif alın.";
}
function pickCat(p: any) {
  return p?.category ?? "Ürün";
}
function pickImg(p: any) {
  return p?.image ?? "/og.jpg";
}
function pickSlug(p: any) {
  return p?.slug ?? "";
}
function pickLongDesc(p: any) {
  return p?.longDesc ?? p?.description ?? p?.shortDesc ?? "";
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

function slugify(value: string) {
  return normalizeText(value)
    .replace(/&/g, "ve")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getCategoryHref(categoryName: string) {
  const matched = categories.find(
    (c: any) => normalizeText(c.name) === normalizeText(categoryName)
  );

  return matched ? `/kategori/${matched.slug}` : `/kategori/${slugify(categoryName)}`;
}

function getMinOrderText(product: any) {
  const text = `${pickDesc(product)} ${pickLongDesc(product)}`.toLocaleLowerCase("tr-TR");

  if (text.includes("baskısız minimum 50")) return "Min. 50 adet";
  if (text.includes("minimum 50 adet")) return "Min. 50 adet";
  if (text.includes("minimum sipariş: 300")) return "Min. 300 adet";
  if (text.includes("minimum 300 adet")) return "Min. 300 adet";
  if (text.includes("minimum 100 adet")) return "Min. 100 adet";

  const cat = pickCat(product);
  if (cat === "Kalem") return "Min. adet değişebilir";
  if (cat === "Ajanda" || cat === "Tarihsiz Defter" || cat === "Defter")
    return "Adede göre teklif";
  if (cat === "Çakmak") return "Min. adet değişebilir";

  return "Adede göre teklif";
}

function getCategoryImage(category: any) {
  if (category?.image) return category.image;

  const matchedProduct = products.find(
    (p: any) => normalizeText(p.category) === normalizeText(category.name)
  );

  return matchedProduct ? pickImg(matchedProduct) : "/og.jpg";
}

function buildOrderedCategories() {
  return CATEGORY_ORDER.map((categoryName) => {
    const matched = categories.find(
      (c: any) => normalizeText(c.name) === normalizeText(categoryName)
    );

    if (matched) return matched;

    return {
      name: categoryName,
      slug: slugify(categoryName),
      seoDescription: `${categoryName} ürünlerini inceleyin.`,
      image: products.find(
        (p: any) => normalizeText(p.category) === normalizeText(categoryName)
      )?.image,
    };
  });
}

function buildOrderedCategoryProducts(allProducts: any[]) {
  const result: any[] = [];

  CATEGORY_ORDER.forEach((categoryName) => {
    const firstMatch = allProducts.find(
      (p: any) => normalizeText(p.category) === normalizeText(categoryName)
    );

    if (firstMatch) {
      result.push(firstMatch);
    }
  });

  return result;
}

export default function Home() {
  const orderedCategories = buildOrderedCategories();
  const orderedCategoryProducts = buildOrderedCategoryProducts(products);

  const heroCategoryChips = orderedCategories.slice(0, 12);
  const topStrip = orderedCategoryProducts.slice(0, 10);
  const heroShowcase = orderedCategoryProducts.slice(0, 5);

  const kalemProducts = products
    .filter((p: any) => normalizeText(p.category) === normalizeText("Kalem"))
    .slice(0, 4);

  const ajandaProducts = products
    .filter(
      (p: any) =>
        normalizeText(p.category) === normalizeText("Ajanda") ||
        normalizeText(p.category) === normalizeText("Tarihsiz Defter") ||
        normalizeText(p.category) === normalizeText("Defter")
    )
    .slice(0, 4);

  const termosProducts = products
    .filter((p: any) => normalizeText(p.category) === normalizeText("Termos"))
    .slice(0, 4);

  const ecoProducts = products
    .filter(
      (p: any) =>
        normalizeText(p.category) === normalizeText("Geri Dönüşümlü Ürünler")
    )
    .slice(0, 4);

  const categoryCards = orderedCategories;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FirmaPromosyon | Logo Baskılı Kurumsal Promosyon Ürünleri",
    url: SITE_URL,
    description:
      "Kurumsal promosyon ürünleri, logo baskı çözümleri ve toplu siparişler için hızlı teklif alın.",
    inLanguage: "tr-TR",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og.jpg`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FirmaPromosyon",
    url: SITE_URL,
    logo: `${SITE_URL}/og.jpg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-535-050-91-28",
        contactType: "sales",
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Popüler Ürünler",
    itemListElement: topStrip
      .filter((p: any) => pickSlug(p))
      .map((p: any, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/urunler/${pickSlug(p)}`,
        name: pickTitle(p),
      })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Promosyon ürünlerinde minimum sipariş adedi var mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minimum sipariş adedi ürün tipine, baskı yöntemine ve modele göre değişebilir. Net bilgi için teklif formu üzerinden ürün ve adet bilgisi ile bize ulaşabilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Kurumsal toplu siparişlerde logo baskı yapıyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. DTF baskı, UV baskı, lazer baskı ve farklı baskı çözümleriyle kurumsal toplu siparişler için logo uygulaması yapılabilmektedir.",
        },
      },
      {
        "@type": "Question",
        name: "Teslim süresi nasıl belirlenir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Teslim süresi ürün modeli, stok durumu, baskı tipi ve sipariş adedine göre değişir. Detaylar teklif aşamasında netleştirilir.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_45%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-16">
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-stretch">
            <div className="rounded-[32px] border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur md:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                Kurumsal promosyon • Hızlı teklif • Türkiye geneli
              </div>

              <h1 className="mt-5 text-[clamp(34px,6vw,64px)] font-extrabold leading-[1.05] tracking-tight text-gray-900">
                Kurumsal Promosyon Ürünleri
                <span className="mt-2 block text-gray-600">
                  Logo Baskılı Toplu Sipariş ve Baskı Çözümleri
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-700 md:text-lg">
                Kurumsal tanıtım, fuar, etkinlik ve toplu firma siparişleri için
                logo baskılı promosyon ürünleri sunuyoruz. DTF, UV ve lazer baskı
                seçenekleriyle ürün, adet ve uygulama detaylarına göre hızlı teklif alın.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/kurumsal-teklif-al"
                  className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900"
                >
                  Hızlı Teklif Al
                </Link>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-gray-500"
                >
                  WhatsApp’tan Yaz
                </a>

                <Link
                  href="/urunler"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-gray-500"
                >
                  Tüm Ürünleri İncele
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <HeroStat title="Promosyon Ürünleri" text="Kurumsal toplu sipariş" />
                <HeroStat title="DTF / UV / Lazer" text="Farklı baskı çözümleri" />
                <HeroStat title="Türkiye Geneli" text="Gönderim ve süreç desteği" />
                <HeroStat title="Hızlı Dönüş" text="Teklif ve bilgi akışı" />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="mb-3 text-sm font-extrabold text-gray-900">
                  Öne Çıkan Kategoriler
                </div>

                <div className="flex flex-wrap gap-3">
                  {heroCategoryChips.map((category: any) => (
                    <Link
                      key={category.slug}
                      href={`/kategori/${category.slug}`}
                      className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-gray-50"
                    >
                      {category.name}
                    </Link>
                  ))}

                  <Link
                    href="/urunler"
                    className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
                  >
                    Tümünü Gör →
                  </Link>
                </div>
              </div>
            </div>

            <aside className="grid gap-4 sm:grid-cols-2">
              {heroShowcase.map((p: any, i: number) => {
                const title = pickTitle(p);
                const img = pickImg(p);
                const slug = pickSlug(p);
                const cat = pickCat(p);

                return (
                  <Link
                    key={slug}
                    href={`/urunler/${slug}`}
                    className={`group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                      i === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={`relative bg-gray-100 ${
                        i === 0 ? "aspect-[16/9]" : "aspect-[4/4]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-contain p-5 transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
                        {cat}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="line-clamp-2 text-sm font-extrabold text-gray-900 md:text-base">
                        {title}
                      </div>
                      <div className="mt-2 text-xs font-semibold text-gray-600">
                        Ürünü incele →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </aside>
          </div>
        </div>
      </section>

      {/* GÜVEN BANDI */}
      <section className="border-b border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-4 text-sm font-semibold text-gray-700 sm:grid-cols-2 lg:grid-cols-5">
          <div>✔ Logo baskı seçenekleri</div>
          <div>✔ Kurumsal toplu sipariş</div>
          <div>✔ Türkiye geneli gönderim</div>
          <div>✔ Adede özel teklif</div>
          <div>✔ WhatsApp hızlı dönüş</div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
              Premium kategori görünümü
            </div>

            <h2 className="mt-4 text-2xl font-extrabold text-gray-900 md:text-3xl">
              Tüm Promosyon Kategorileri
            </h2>
            <p className="mt-3 text-sm text-gray-600 md:text-base">
              Kurumsal tanıtım, etkinlik, fuar ve marka görünürlüğü için uygun ürün
              gruplarını kategori bazında inceleyin.
            </p>
          </div>

          <Link href="/urunler" className="text-sm font-semibold text-gray-900 hover:underline">
            Tüm ürünler →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {categoryCards.map((category: any) => (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50" />
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-gray-100 bg-gray-100">
                  <Image
                    src={getCategoryImage(category)}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 md:p-5">
                  <div className="line-clamp-2 min-h-[48px] text-sm font-extrabold text-gray-900 md:text-base">
                    {category.name}
                  </div>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600 md:text-sm">
                    {category.seoDescription || `${category.name} ürünlerini inceleyin.`}
                  </p>

                  <div className="mt-4 inline-flex items-center rounded-full bg-black px-3 py-1.5 text-[11px] font-semibold text-white md:text-xs">
                    Kategoriye git →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* POPÜLER ÜRÜNLER */}
      <section className="border-b border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
                Popüler Ürünler
              </h2>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                En çok ilgi gören promosyon ürünlerini hızlıca inceleyin.
              </p>
            </div>

            <Link
              href="/urunler"
              className="text-sm font-semibold text-gray-900 hover:underline"
            >
              Tümünü Gör →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {topStrip.map((p: any) => {
              const title = pickTitle(p);
              const img = pickImg(p);
              const slug = pickSlug(p);
              const cat = pickCat(p);

              return (
                <Link
                  key={slug}
                  href={`/urunler/${slug}`}
                  className="group rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-contain p-4 transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-semibold text-gray-600">{cat}</div>
                    <div className="mt-1 line-clamp-2 text-sm font-extrabold text-gray-900">
                      {title}
                    </div>
                    <div className="mt-3 text-xs font-semibold text-gray-900">Detay →</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* KATEGORİ BAZLI ÜRÜNLER */}
      {kalemProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12">
          <SectionHeader
            title="Promosyon Kalem Modelleri"
            text="Logo baskıya uygun promosyon kalem modellerini inceleyin."
            href="/kategori/kalem"
            cta="Tüm Kalemler →"
          />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kalemProducts.map((p: any) => (
              <MiniProductCard key={pickSlug(p)} product={p} />
            ))}
          </div>
        </section>
      )}

      {termosProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12">
          <SectionHeader
            title="Promosyon Termos Modelleri"
            text="Logo baskılı promosyon termos çeşitlerini ve kurumsal kullanım için uygun modelleri inceleyin."
            href="/kategori/termos"
            cta="Tüm Termoslar →"
          />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {termosProducts.map((p: any) => (
              <MiniProductCard key={pickSlug(p)} product={p} />
            ))}
          </div>
        </section>
      )}

      {ajandaProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12">
          <SectionHeader
            title="Ajanda ve Tarihsiz Defter Ürünleri"
            text="Kurumsal hediye ve toplu sipariş için ajanda ve defter seçenekleri."
            href="/urunler"
            cta="Tümünü Gör →"
          />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ajandaProducts.map((p: any) => (
              <MiniProductCard key={pickSlug(p)} product={p} />
            ))}
          </div>
        </section>
      )}

      {ecoProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12">
          <SectionHeader
            title="Geri Dönüşümlü Promosyon Ürünleri"
            text="Çevre dostu, sürdürülebilir ve logo baskıya uygun geri dönüşümlü promosyon ürünlerini inceleyin."
            href="/kategori/geri-donusumlu-urunler"
            cta="Tüm Ürünler →"
          />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecoProducts.map((p: any) => (
              <MiniProductCard key={pickSlug(p)} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* HİZMETLER */}
      <section id="hizmetler" className="mx-auto max-w-7xl px-5 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">Hizmetler</h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Kurumsal sipariş sürecinde ürün seçimi, baskı yöntemi ve marka uygulama aşamalarında çözüm sunuyoruz.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <ServiceCard
            title="DTF Transfer Baskı"
            text="Tekstil ve farklı yüzeylerde kaliteli, esnek ve dayanıklı baskı çözümleri."
          />
          <ServiceCard
            title="Kurumsal Promosyon"
            text="Kalem, ajanda, çakmak, anahtarlık, termos, USB bellek ve diğer promosyon ürünlerinde toplu sipariş."
          />
          <ServiceCard
            title="Logo Uygulama Seçenekleri"
            text="UV baskı, lazer baskı, DTF baskı ve ürüne göre farklı markalama yöntemleri."
          />
        </div>
      </section>

      {/* KULLANIM ALANLARI */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Nerelerde Kullanılır?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700 md:text-base">
              Promosyon ürünleri; fuar, bayi toplantısı, kurumsal hediye, ofis içi kullanım,
              seminer, etkinlik ve marka görünürlüğü amaçlı dağıtımlar için güçlü bir tanıtım aracıdır.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <SimpleInfoCard title="Fuar ve Etkinlikler" text="Marka görünürlüğünü artıran dağıtım ürünleri." />
            <SimpleInfoCard title="Kurumsal Hediye" text="Müşteri ve iş ortakları için kullanışlı promosyonlar." />
            <SimpleInfoCard title="Ofis Kullanımı" text="Günlük kullanımda markanızı görünür tutan ürünler." />
            <SimpleInfoCard title="Toplu Firma Dağıtımı" text="Personel, bayi ve kampanya süreçleri için uygun çözümler." />
          </div>
        </div>
      </section>

      {/* SÜREÇ */}
      <section id="surec" className="mx-auto max-w-7xl px-5 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">Sipariş Süreci</h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Doğru ürün, doğru baskı ve doğru adet planlaması ile tekliften üretime kadar süreci netleştiriyoruz.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Step
            n="1"
            title="Ürünü Seç"
            text="İhtiyacınıza uygun promosyon ürününü ve kategoriyi belirleyin."
          />
          <Step
            n="2"
            title="Adet ve Baskıyı Netleştir"
            text="Baskı tipi, renk, adet, stok ve termin bilgisi netleşsin."
          />
          <Step
            n="3"
            title="Teklif ve Üretim"
            text="Onay sonrası kurumsal sipariş ve üretim sürecini başlatalım."
          />
        </div>
      </section>

      {/* SEO METNİ */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Kurumsal Promosyon ve Baskı Çözümleri
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon ürünleri, markanızı müşterilerinizin ve iş ortaklarınızın
                günlük hayatında görünür kılmanın etkili yollarından biridir.
              </p>

              <p>
                FirmaPromosyon olarak ürün seçimi, baskı tekniği, adet planlaması
                ve teklif sürecinde kurumsal ihtiyaçlara uygun çözümler sunuyoruz.
              </p>

              <p>
                Uygun ürün ve doğru baskı yöntemiyle fuar, etkinlik, bayi ağı ve
                kurumsal dağıtım süreçlerinizi daha güçlü hale getirebilirsiniz.
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            <SimpleInfoCard
              title="Kurumsal siparişe uygun ürün seçimi"
              text="Kullanım amacına ve hedef kitlenize göre doğru ürün gruplarını inceleyin."
            />
            <SimpleInfoCard
              title="DTF, UV ve lazer baskı alternatifleri"
              text="Ürüne ve kullanım senaryosuna göre farklı baskı çözümleri."
            />
            <SimpleInfoCard
              title="Fuar, etkinlik ve dağıtım odaklı kullanım"
              text="Marka görünürlüğünü destekleyen pratik promosyon seçenekleri."
            />
            <SimpleInfoCard
              title="Hızlı teklif ve süreç desteği"
              text="Ürün, adet ve baskı detaylarına göre daha net sipariş planlaması."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
          Sık Sorulan Sorular
        </h2>
        <div className="mt-6 space-y-3">
          <Faq
            q="Minimum sipariş adedi her üründe aynı mı?"
            a="Hayır. Minimum sipariş adedi ürün tipine, baskı yöntemine ve modele göre değişebilir. En doğru bilgi için ilgili ürün sayfasından teklif isteyebilirsiniz."
          />
          <Faq
            q="Promosyon ürünlerinde logo baskı yapılıyor mu?"
            a="Evet. Ürüne göre DTF baskı, UV baskı, lazer baskı ve farklı uygulamalar yapılabilmektedir."
          />
          <Faq
            q="Teslim süresi kaç gün sürer?"
            a="Teslim süresi; stok durumu, sipariş adedi ve baskı tipine göre değişir. Teklif aşamasında termin bilgisi netleştirilir."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-3xl bg-black px-6 py-10 text-white md:px-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Kurumsal Toplu Sipariş İçin Teklif Alın
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
            Promosyon ürünleri, logo baskı çözümleri ve kurumsal siparişler için
            ürün, adet ve baskı detaylarını iletin; size uygun teklif hazırlayalım.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              Kurumsal Teklif Al
            </Link>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- UI ---------- */

function SectionHeader({
  title,
  text,
  href,
  cta,
}: {
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      </div>
      <Link href={href} className="text-sm font-semibold text-gray-900 hover:underline">
        {cta}
      </Link>
    </div>
  );
}

function MiniProductCard({ product }: { product: any }) {
  const title = pickTitle(product);
  const img = pickImg(product);
  const slug = pickSlug(product);
  const cat = pickCat(product);

  return (
    <Link
      href={`/urunler/${slug}`}
      className="group rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <div className="text-xs font-semibold text-gray-600">{cat}</div>
        <div className="mt-1 line-clamp-2 text-sm font-extrabold text-gray-900">
          {title}
        </div>
        <div className="mt-3 text-xs font-semibold text-gray-900">Detay →</div>
      </div>
    </Link>
  );
}

function HeroStat({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
      <div className="text-sm font-extrabold text-gray-900">{title}</div>
      <div className="mt-1 text-xs text-gray-600">{text}</div>
    </div>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
        Kurumsal çözüm
      </div>
      <div className="mt-4 text-base font-extrabold text-gray-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-gray-700">{text}</div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-extrabold text-white">
        {n}
      </div>
      <div className="mt-4 text-base font-extrabold text-gray-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-gray-700">{text}</div>
    </div>
  );
}

function SimpleInfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-extrabold text-gray-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-gray-700">{text}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <summary className="cursor-pointer text-sm font-extrabold text-gray-900">
        {q}
      </summary>
      <div className="mt-3 text-sm leading-7 text-gray-700">{a}</div>
    </details>
  );
}