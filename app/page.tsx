import NewYearBanner from "./components/NewYearBanner";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts as products } from "@/data/productVisibility";
import { getCategoryLandingHref } from "@/data/categoryLandingPages";
import { categories } from "@/data/categories";
import type { Metadata } from "next";
import HomeSearch from "./HomeSearch";
import { visibleProducts as homeVisibleMataraProducts } from "@/data/productVisibility";
import { sortProductsByCode as sortHomeMataraProducts } from "@/data/productSorting";

const homeMataraPreviewProducts = sortHomeMataraProducts(
  homeVisibleMataraProducts.filter(p => p.category === "Matara")
).slice(0, 4);


const SITE_URL = "https://www.firmapromosyon.com";

const CATEGORY_ORDER = [
  "Kalem",
  "Anahtarlık",
  "Çakmak",
  "Kupa",
  "USB Bellek",
  "Termos",
  "Matara",
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
  "Ham Bez & Tela Çanta",
  "Bayraklar",
  "Teknolojik Ürünler",
  "Kartvizitlik",
  "Ayna ve Deri Kartlıklar",
  "Çakı, Fener ve Tornavida Seti",
  "İmalat Ürünler",
  "Takvimler",
  "Yoyo ve Boyun Askı İpleri",
] as const;

export const metadata: Metadata = {
  title: "FirmaPromosyon | Logo Baskılı Kurumsal Promosyon Ürünleri",
  description:
    "Logo baskılı kurumsal promosyon ürünleri, promosyon kalem, termos, ajanda, anahtarlık, USB bellek, kupa, karton çanta ve powerbank çözümleri için FirmaPromosyon’dan hızlı teklif alın.",
  alternates: { canonical: "/" },
  keywords: [
    "promosyon ürünleri",
    "kurumsal promosyon ürünleri",
    "logo baskılı promosyon ürünleri",
    "toptan promosyon ürünleri",
    "promosyon kalem",
    "promosyon ajanda",
    "promosyon anahtarlık",
    "promosyon çakmak",
    "promosyon termos",
    "promosyon powerbank",
    "promosyon usb bellek",
    "promosyon kupa",
    "karton çanta",
    "kalem setleri",
    "promosyon şapka",
    "promosyon tişört",
    "geri dönüşümlü promosyon ürünleri",
    "yapışkanlı notluk",
    "duvar saati promosyon",
    "kartvizitlik",
    "bayrak promosyon",
    "teknolojik promosyon ürünleri",
    "dtf baskı",
    "uv baskı",
    "lazer baskı",
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

const GUIDES = [
  {
    title: "Promosyon Ürünleri Seçim Rehberi",
    href: "/rehber/promosyon-urunleri-secim-rehberi",
    desc: "Kurumsal kullanım, fuar, etkinlik ve toplu dağıtım için doğru promosyon ürününü nasıl seçebileceğinizi inceleyin.",
    image: "/guides/promosyon-urunleri-secim-rehberi-kapak-v2.jpg",
  },
  {
    title: "Promosyon Kalem Toptan Satın Alma Rehberi",
    href: "/rehber/promosyon-kalem-toptan",
    desc: "Logo baskılı promosyon kalem siparişi verirken dikkat edilmesi gereken detayları öğrenin.",
    image: "/guides/promosyon-kalem-toptan-kapak-20261115.jpg",
  },
  {
    title: "DTF Baskı Nedir? Nasıl Yapılır?",
    href: "/rehber/dtf-baski-nedir",
    desc: "DTF baskı teknolojisinin ne olduğunu, hangi yüzeylerde kullanıldığını ve avantajlarını keşfedin.",
    image: "/guides/dtf-baski-nedir-kapak-20261115.jpg",
  },
];

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
  return getCategoryLandingHref(categoryName);
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

    const matchedProduct = products.find(
      (p: any) => normalizeText(p.category) === normalizeText(categoryName)
    );

    if (!matchedProduct) return null;

    return {
      name: categoryName,
      slug: slugify(categoryName),
      seoDescription: `${categoryName} ürünlerini inceleyin.`,
      image: matchedProduct?.image,
    };
  }).filter(Boolean);
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

  const heroShowcase = [
    { name: "VIP Ürünler", label: "VIP Hediye Setleri", image: "/products/promosyon-vip-set-vip-130-v2.jpg", imageClass: "object-cover object-center", imageStyle: {} },
    { name: "Ajanda", label: "Ajandalar", image: "/products/promosyon-ajanda-aj-115.jpg", imageClass: "object-contain scale-[1.12]", imageStyle: {} },
    { name: "Kalem", label: "Kalemler", image: "/products/promosyon-metal-kalem-mk-130.jpg", imageClass: "object-contain scale-[1.18] translate-y-[7%]", imageStyle: { clipPath: "inset(0 0 16% 0)" } },
  ];

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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FirmaPromosyon",
    url: SITE_URL,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/urunler?q={search_term_string}`,
      "query-input": "required name=search_term_string",
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
    logo: `${SITE_URL}/logo.png`,
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
    name: "Öne Çıkan Promosyon Ürünleri",
    itemListElement: topStrip
      .filter((p: any) => pickSlug(p))
      .map((p: any, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/urunler/${pickSlug(p)}`,
        name: pickTitle(p),
      })),
  };

  const guideListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Promosyon Rehberleri",
    itemListElement: GUIDES.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}${guide.href}`,
      name: guide.title,
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
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">
      <style>{`
        /* fp-home-card-hover-start */
        @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
          .fp-home-hover-card {
            position: relative;
            transition: transform 200ms ease, box-shadow 200ms ease;
          }
          .fp-home-hover-card:hover {
            z-index: 1;
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
          }
        }
        /* fp-home-card-hover-end */
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* FP TOP CATEGORY NAV */}
      <nav aria-label="Ürün kategorileri" className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5">
          <ul className="flex min-w-0 items-center gap-1 overflow-x-auto overscroll-x-contain py-1 lg:justify-between">
            {[
              { name: "Kalem", label: "Kalem" },
              { name: "Ajanda", label: "Ajanda" },
              { name: "Tarihsiz Defter", label: "Defter" },
              { name: "Termos", label: "Termos" },
              { name: "Anahtarlık", label: "Anahtarlık" },
              { name: "VIP Ürünler", label: "VIP Setler" },
              { name: "Teknolojik Ürünler", label: "Teknolojik Ürünler" },
            ].map((item) => (
              <li key={item.name} className="shrink-0">
                <Link href={getCategoryHref(item.name)} className="inline-flex min-h-11 items-center whitespace-nowrap rounded-lg px-3 py-3 text-[13px] font-semibold text-gray-700 transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black sm:px-4 sm:text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="shrink-0">
              <a href="#ana-sayfa-kategoriler" className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-3 text-[13px] font-bold text-black transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black sm:px-4 sm:text-sm">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                Tüm Kategoriler
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-8 md:py-12 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-xs">
              Kurumsal promosyon • Hızlı teklif • Türkiye geneli
            </p>
            <h1 className="mt-5 text-[clamp(28px,3.3vw,46px)] font-extrabold leading-[1.1] tracking-tight text-black">
              Kurumsal Promosyon Ürünleri
              <span className="mt-3 block text-[0.65em] font-semibold leading-snug text-gray-500">
                Logo Baskılı Toplu Sipariş ve Baskı Çözümleri
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-600">
              Kurumsal tanıtım, fuar, etkinlik ve toplu firma siparişleri için
              logo baskılı promosyon ürünleri sunuyoruz. Promosyon kalem, promosyon
              ajanda, promosyon termos, promosyon anahtarlık, promosyon USB bellek,
              promosyon kupa ve powerbank gibi birçok kategoride hızlı teklif alın.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                WhatsApp’tan Hızlı Teklif Al
              </a>
              <Link href="/kurumsal-teklif-al"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                E-posta ile Teklif Al
              </Link>
            </div>
            <HomeSearch products={products.map(({ slug, title, category, image, price }) => ({ slug, title, category, image, ...(typeof price === "number" ? { price } : {}) }))} />
            {/* HERO MINI CATEGORIES TK240 DS136 */}
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { name: "Termos", label: "Termoslar", image: "/products/termos-vitrin-temiz.webp", frame: "absolute inset-0" },
                { name: "Duvar Saatleri", label: "Duvar Saatleri", image: "/products/saat-vitrin-temiz.webp", frame: "absolute inset-0 scale-[1.15]" },
                { name: "Anahtarlık", label: "Anahtarlıklar", image: getCategoryImage(orderedCategories.find((category: any) => normalizeText(category.name) === normalizeText("Anahtarlık"))), frame: "absolute inset-0 scale-[1.2]" },
              ].map((item) => (
                <Link key={item.name} href={getCategoryHref(item.name)} className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <div className={item.frame}>
                      <Image src={item.image} alt={item.label} fill sizes="(max-width: 639px) 55vw, (max-width: 1023px) 57vw, 29vw" quality={75} className="object-contain" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-1 border-t border-gray-100 px-2 py-3 text-xs font-semibold sm:px-3 sm:text-sm">
                    <span>{item.label}</span><span aria-hidden="true"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/urunler" className="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline-offset-4 hover:underline">
              Tüm Ürünleri İncele <span aria-hidden="true"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
            </Link>
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
            {heroShowcase.map((item, index) => (
              <Link key={item.name} href={getCategoryHref(item.name)}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${index === 0 ? "col-span-2" : ""}`}>
                <div className={`relative w-full bg-white ${index === 0 ? "aspect-[1.45/1]" : "aspect-[1.2/1]"}`}>
                  <Image src={item.image} alt={item.name} fill
                    sizes={index === 0 ? "(max-width: 1023px) 92vw, 45vw" : "(max-width: 1023px) 44vw, 22vw"}
                    priority={index === 0}
                    quality={75}
                    className={item.imageClass}
                    style={item.imageStyle} />
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                  <div>
                    {index === 0 && <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-gray-500">Kurumsal hediye seçkisi</p>}
                    <h2 className="text-sm font-bold text-black sm:text-base">{item.label}</h2>
                  </div>
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center text-sm transition-colors"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <NewYearBanner />

      {/* KATEGORİLER */}
      {/* FP CATEGORY GRID V2 */}
      <section id="ana-sayfa-kategoriler" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-10 md:py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-black md:text-3xl">
              Logo Baskılı Promosyon Ürün Kategorileri
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">
              Kurumsal tanıtım, etkinlik, fuar ve marka görünürlüğü için uygun ürün
              gruplarını kategori bazında inceleyin.
            </p>
          </div>
          <Link href="/urunler" className="inline-flex min-h-11 shrink-0 items-center gap-3 text-sm font-semibold text-black underline-offset-4 hover:underline">
            Tüm ürünler <span aria-hidden="true"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
          </Link>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
          {categoryCards.map((category: any) => (
            <Link
              key={category.slug}
              href={getCategoryHref(category.name)}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-white">
                <Image
                  src={getCategoryImage(category)}
                  alt={category.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 767px) 46vw, (max-width: 1279px) 31vw, 295px"
                  className="object-contain p-2 sm:p-3"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-gray-100 bg-gray-50 px-3 py-4 sm:px-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="min-w-0 break-words text-sm font-bold leading-5 text-black sm:text-base">
                    {category.name}
                  </h3>
                  <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center text-sm transition-colors"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
                </div>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600 sm:text-sm">
                  {category.seoDescription || `${category.name} ürünlerini inceleyin.`}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FP COMPACT SERVICE STRIP */}
      <section aria-label="Sipariş ve baskı hizmetleri" className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-5 px-5 py-5 sm:grid-cols-3 lg:grid-cols-5">
          <HeroStat title="Logo Baskı Seçenekleri" text="DTF, UV ve lazer baskı çözümleri" />
          <HeroStat title="Kurumsal Toplu Sipariş" text="Promosyon ürünlerinde toplu alım" />
          <HeroStat title="Türkiye Geneli Gönderim" text="Gönderim ve süreç desteği" />
          <HeroStat title="Adede Özel Teklif" text="Ürün ve baskıya göre fiyatlandırma" />
          <HeroStat title="WhatsApp Hızlı Dönüş" text="Teklif ve bilgi akışı" />
        </div>
      </section>

      {/* POPÜLER ÜRÜNLER */}
      {/* FP FEATURED PRODUCTS V2 */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-black md:text-3xl">
                Öne Çıkan Promosyon Ürünleri
              </h2>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                En çok ilgi gören promosyon ürünlerini hızlıca inceleyin.
              </p>
            </div>

            <Link
              href="/urunler"
              className="text-sm font-semibold text-gray-900 hover:underline"
            >
              Tümünü Gör <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-3 md:gap-4 xl:grid-cols-5">
            {topStrip.map((p: any) => {
              const title = pickTitle(p);
              const img = pickImg(p);
              const slug = pickSlug(p);
              const cat = pickCat(p);

              return (
                <Link
                  key={slug}
                  href={`/urunler/${slug}`}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-white">
                    <Image
                      src={img}
                      alt={title}
                      fill

                      loading="lazy"
                      sizes="(max-width: 767px) 46vw, (max-width: 1279px) 31vw, 232px"
                      className="object-contain p-2 sm:p-3"
                    />
                  </div>

                  <div className="flex flex-1 flex-col border-t border-gray-100 bg-gray-50 px-3 py-4 sm:px-4">
                    <div className="text-[11px] font-medium leading-5 text-gray-500 sm:text-xs">{cat}</div>
                    <h3 className="mt-1 min-h-[2.75rem] line-clamp-2 break-words text-sm font-bold leading-[1.375rem] text-black">
                      {title}
                    </h3>
                    <HomeProductPrice product={p} />
                    <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                      <span className="text-xs font-semibold text-gray-700">Ürünü incele</span>
                      <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center text-sm transition-colors"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {kalemProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12">
          <SectionHeader
            title="Promosyon Kalem Modelleri"
            text="Logo baskıya uygun promosyon kalem modellerini inceleyin."
            href="/promosyon-kalem"
            cta="Tüm Kalemler →"
          />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-3 sm:gap-4">
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
            href="/promosyon-termos"
            cta="Tüm Termoslar →"
          />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-3 sm:gap-4">
            {termosProducts.map((p: any) => (
              <MiniProductCard key={pickSlug(p)} product={p} />
            ))}
          </div>
        </section>
      )}

      {homeMataraPreviewProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12">
          <SectionHeader
            title="Promosyon Matara Modelleri"
            text="Logo baskılı cam ve plastik matara modellerini inceleyin."
            href="/promosyon-matara"
            cta="Tüm Mataralar →"
          />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-3 sm:gap-4">
            {homeMataraPreviewProducts.map((p) => (
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
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-3 sm:gap-4">
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
            href="/promosyon-geri-donusumlu-urunler"
            cta="Tüm Ürünler →"
          />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-3 sm:gap-4">
            {ecoProducts.map((p: any) => (
              <MiniProductCard key={pickSlug(p)} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* REHBERLER */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Promosyon Ürünleri Rehberleri
            </h2>
            <p className="mt-3 text-sm text-gray-600 md:text-base">
              Promosyon ürün seçimi, baskı yöntemleri ve toplu sipariş süreci hakkında rehber içerikleri inceleyin.
            </p>
          </div>

          <Link href="/rehber" className="text-sm font-semibold text-gray-900 hover:underline">
            Tüm rehberler <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              data-home-guide-cover="true"
              className="fp-home-hover-card group relative isolate flex min-h-[300px] flex-col overflow-hidden rounded-3xl border-2 border-black bg-gray-950 p-5 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:min-h-[320px] sm:p-6"
            >
              <Image
                src={guide.image}
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 33vw"
                className="pointer-events-none object-cover"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/25" />
              <div className="relative z-10 mt-auto">
                <span className="inline-flex rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-semibold text-white">
                  Rehber
                </span>
                <h3 className="mt-4 text-lg font-extrabold leading-7 text-white">
                  {guide.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white">{guide.desc}</p>
                <div className="mt-4 text-sm font-bold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ÖNE ÇIKAN KATEGORİLER */}
      <section className="mx-auto max-w-7xl px-5 pb-6">
        <div className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
                Öne Çıkan Promosyon Kategorileri
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                En çok talep gören promosyon kategorilerine hızlıca geçin.
              </p>
            </div>

            <Link
              href="/urunler"
              className="text-sm font-semibold text-gray-900 hover:underline"
            >
              Tüm kategoriler <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {heroCategoryChips.map((category: any) => (
              <Link
                key={category.slug}
                href={getCategoryHref(category.name)}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-gray-50"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FP SERVICES DESIGN V2 */}
      <section id="hizmetler" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:py-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-black md:text-3xl">Hizmetler</h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Kurumsal sipariş sürecinde ürün seçimi, baskı yöntemi ve marka uygulama aşamalarında çözüm sunuyoruz.
          </p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-5">
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

      <section className="mx-auto max-w-7xl px-5 pb-8 pt-2 md:pb-10">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-7">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-black md:text-3xl">
              Nerelerde Kullanılır?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700 md:text-base">
              Promosyon ürünleri; fuar, bayi toplantısı, kurumsal hediye, ofis içi kullanım,
              seminer, etkinlik ve marka görünürlüğü amaçlı dağıtımlar için güçlü bir tanıtım aracıdır.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard title="Fuar ve Etkinlikler" text="Marka görünürlüğünü artıran dağıtım ürünleri." />
            <ServiceCard title="Kurumsal Hediye" text="Müşteri ve iş ortakları için kullanışlı promosyonlar." />
            <ServiceCard title="Ofis Kullanımı" text="Günlük kullanımda markanızı görünür tutan ürünler." />
            <ServiceCard title="Toplu Firma Dağıtımı" text="Personel, bayi ve kampanya süreçleri için uygun çözümler." />
          </div>
        </div>
      </section>

      {/* FP PROCESS CONTENT DESIGN V2 */}
      <section id="surec" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 md:py-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-black md:text-3xl">Sipariş Süreci</h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Doğru ürün, doğru baskı ve doğru adet planlaması ile tekliften üretime kadar süreci netleştiriyoruz.
          </p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-5">
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

      {/* GÜÇLENDİRİLMİŞ SEO METNİ */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-2 md:pb-10">
        <div className="grid items-start gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:grid-cols-2 md:gap-8 md:p-7">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-black md:text-3xl">
              Logo Baskılı Kurumsal Promosyon Ürünleri
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal promosyon ürünleri, markaların müşterileri, iş ortakları ve çalışanlarıyla daha güçlü bir bağ kurmasına yardımcı olan etkili tanıtım araçları arasında yer alır. Logo baskılı promosyon ürünleri; fuar, etkinlik, bayi toplantısı, kurumsal hediye ve günlük ofis kullanımı gibi birçok alanda tercih edilir.
              </p>

              <p>
                FirmaPromosyon olarak promosyon kalem, promosyon ajanda, promosyon termos, promosyon anahtarlık, promosyon USB bellek, promosyon kupa, promosyon powerbank, karton çanta ve geri dönüşümlü promosyon ürünleri gibi geniş bir ürün yelpazesi sunuyoruz. Her ürün grubu için kurumsal kimliğe uygun baskı çözümleri planlanabilir.
              </p>

              <p>
                DTF baskı, UV baskı, lazer baskı ve ürüne uygun farklı markalama yöntemleri sayesinde logo baskılı promosyon ürünleri, markanızın görünürlüğünü artırmak için güçlü bir destek sağlar. Ürün modeli, baskı alanı, sipariş adedi ve kullanım amacına göre en uygun promosyon çözümü belirlenebilir.
              </p>

              <p>
                Toptan promosyon ürünleri siparişlerinde doğru ürün seçimi kadar baskı yöntemi, teslim süresi ve hedef kitle uyumu da önemlidir. Bu nedenle promosyon kalem, promosyon termos, promosyon ajanda veya teknolojik promosyon ürünleri gibi kategorilerde ihtiyaç odaklı planlama yapılması daha verimli sonuç verir.
              </p>

              <p>
                Kurumsal promosyon ürünleri ile marka bilinirliğinizi desteklemek, müşterilerinize kullanışlı hediyeler sunmak ve fuar ya da etkinliklerde daha profesyonel bir görünüm elde etmek için ürün kategorilerini inceleyebilir, teklif formu üzerinden hızlıca bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>

          <div className="grid content-start gap-3 self-start">
            <SimpleInfoCard
              title="Kurumsal siparişe uygun ürün seçimi"
              text="Kullanım amacına ve hedef kitlenize göre doğru promosyon ürün gruplarını inceleyin."
            />
            <SimpleInfoCard
              title="DTF, UV ve lazer baskı alternatifleri"
              text="Ürüne ve kullanım senaryosuna göre farklı logo baskı çözümleri."
            />
            <SimpleInfoCard
              title="Promosyon kalem, termos, ajanda ve kupa"
              text="En çok tercih edilen logo baskılı promosyon ürünlerini tek sayfada inceleyin."
            />
            <SimpleInfoCard
              title="Hızlı teklif ve süreç desteği"
              text="Ürün, adet ve baskı detaylarına göre daha net sipariş planlaması yapın."
            />
            {/* FP QUOTE PREPARATION CHECKLIST */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
              <h3 className="text-base font-bold leading-6 text-black">Teklif İstemeden Önce</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                İhtiyacınıza uygun bir teklif hazırlayabilmemiz için aşağıdaki bilgileri paylaşabilirsiniz.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                <li><strong className="font-semibold text-black">Ürün ve adet:</strong> İlgilendiğiniz ürün kodunu, rengini ve sipariş adedini belirtin.</li>
                <li><strong className="font-semibold text-black">Logo dosyası:</strong> Varsa AI, EPS, SVG veya vektörel PDF dosyanızı paylaşın. Dosyanın baskıya uygunluğu ayrıca kontrol edilir.</li>
                <li><strong className="font-semibold text-black">Baskı detayları:</strong> Logonun uygulanacağı yönü, renk sayısını ve varsa kişiselleştirme talebini iletin.</li>
                <li><strong className="font-semibold text-black">Teslim tarihi:</strong> Fuar veya etkinlik tarihinizi belirtin; stok ve üretim süresi buna göre değerlendirilsin.</li>
              </ul>
              <Link href="/kurumsal-teklif-al" className="mt-5 inline-flex min-h-11 items-center justify-center gap-3 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                Kurumsal teklif isteyin <span aria-hidden="true"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FP FAQ DESIGN V2 */}
      <section id="sss" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-6 md:py-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-black md:text-3xl">
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
    </div>
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

// FP HOME PRODUCT PRICES V1
function HomeProductPrice({ product }: { product: any }) {
  const price = product.price;
  const hasPrice = typeof price === "number" && Number.isFinite(price) && price > 0;

  return (
    <div className="mt-3 min-h-[3.25rem]">
      {hasPrice ? (
        <>
          <div className="flex flex-wrap items-baseline gap-x-1.5 text-black">
            <span className="text-base font-bold tabular-nums sm:text-lg">
              {new Intl.NumberFormat("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price)} TL
            </span>
            <span className="text-[11px] font-medium text-gray-600">+ KDV</span>
          </div>
          <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-[11px]">Birim fiyat · Baskı hariç</p>
        </>
      ) : (
        <p className="text-sm font-semibold leading-6 text-black">Fiyat için teklif al</p>
      )}
    </div>
  );
}

// FP MINI PRODUCT CARD V2
function MiniProductCard({ product }: { product: any }) {
  const title = pickTitle(product);
  const img = pickImg(product);
  const slug = pickSlug(product);
  const cat = pickCat(product);
  const minOrder = getMinOrderText(product);

  return (
    <Link
      href={`/urunler/${slug}`}
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <Image
          src={img}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 1023px) 46vw, 295px"
          className="object-contain p-2 sm:p-3"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-gray-100 bg-gray-50 px-3 py-4 sm:px-4">
        <div className="flex min-h-8 flex-wrap items-center justify-between gap-x-2 gap-y-1">
          <div className="text-[11px] font-medium leading-5 text-gray-500 sm:text-xs">{cat}</div>
          <div className="rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] font-medium leading-4 text-gray-600 sm:text-[11px]">
            {minOrder}
          </div>
        </div>
        <h3 className="mt-2 min-h-[2.75rem] line-clamp-2 break-words text-sm font-bold leading-[1.375rem] text-black">
          {title}
        </h3>
        <HomeProductPrice product={product} />
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="text-xs font-semibold text-gray-700">Ürünü incele</span>
          <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center text-sm transition-colors"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
        </div>
      </div>
    </Link>
  );
}

function HeroStat({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex min-w-0 items-start gap-2">
      <span aria-hidden="true" className="mt-0.5 text-sm font-bold text-black">✓</span>
      <div className="min-w-0">
        <div className="text-xs font-bold leading-5 text-black sm:text-sm">{title}</div>
        <div className="mt-1 text-xs leading-5 text-gray-600">{text}</div>
      </div>
    </div>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-5">
      <h3 className="text-base font-bold leading-6 text-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-5">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
        {n}
      </div>
      <h3 className="mt-4 text-base font-bold leading-6 text-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

function SimpleInfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
      <h3 className="text-sm font-bold leading-6 text-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-gray-200 bg-white p-4 open:bg-gray-50 sm:p-5">
      <summary className="cursor-pointer rounded-sm text-sm font-bold leading-6 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
        {q}
      </summary>
      <div className="mt-3 border-t border-gray-200 pt-3 text-sm leading-7 text-gray-600">{a}</div>
    </details>
  );
}
