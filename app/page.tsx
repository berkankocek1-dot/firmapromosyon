import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

export const metadata: Metadata = {
  title: "FirmaPromosyon | Kurumsal Promosyon Ürünleri ve DTF Baskı",
  description:
    "Kurumsal promosyon ürünleri, DTF baskı, UV baskı ve toplu sipariş çözümleri için FirmaPromosyon'dan hızlı teklif alın. Promosyon kalem, ajanda, defter, çakmak ve daha fazlası.",
  alternates: { canonical: "/" },
  keywords: [
    "promosyon ürünleri",
    "kurumsal promosyon",
    "promosyon kalem",
    "promosyon ajanda",
    "promosyon defter",
    "promosyon çakmak",
    "promosyon anahtarlık",
    "dtf baskı",
    "uv baskı",
    "toptan promosyon ürünleri",
    "logo baskılı promosyon",
  ],
  openGraph: {
    title: "FirmaPromosyon | Kurumsal Promosyon Ürünleri ve DTF Baskı",
    description:
      "Kurumsal promosyon ürünleri ve toplu sipariş çözümleri için hızlı teklif alın.",
    url: SITE_URL,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "FirmaPromosyon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FirmaPromosyon | Kurumsal Promosyon Ürünleri ve DTF Baskı",
    description:
      "Kurumsal promosyon ürünleri ve toplu sipariş çözümleri için hızlı teklif alın.",
    images: ["/og.jpg"],
  },
};

const WHATSAPP =
  "https://wa.me/905350509128?text=Merhaba%2C%20DTF%20bask%C4%B1%20ve%20promosyon%20%C3%BCr%C3%BCnleri%20i%C3%A7in%20teklif%20almak%20istiyorum.";

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

function getCategoryHref(categoryName: string) {
  const matched = categories.find(
    (c) => normalizeText(c.name) === normalizeText(categoryName)
  );

  return matched ? `/kategori/${matched.slug}` : "/urunler";
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
  if (cat === "Ajanda" || cat === "Defter") return "Adede göre teklif";
  if (cat === "Çakmak") return "Min. adet değişebilir";

  return "Adede göre teklif";
}

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const topStrip = products.slice(0, 8);

  const kalemProducts = products
    .filter((p: any) => normalizeText(p.category) === normalizeText("Kalem"))
    .slice(0, 4);

  const ajandaProducts = products
    .filter(
      (p: any) =>
        normalizeText(p.category) === normalizeText("Ajanda") ||
        normalizeText(p.category) === normalizeText("Defter")
    )
    .slice(0, 4);

  const categoryCards = categories.slice(0, 8);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FirmaPromosyon | Kurumsal Promosyon Ürünleri ve DTF Baskı",
    url: SITE_URL,
    description:
      "Kurumsal promosyon ürünleri, DTF baskı, UV baskı ve toplu sipariş çözümleri için hızlı teklif alın.",
    inLanguage: "tr-TR",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og.jpg`,
    },
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
    name: "Öne Çıkan Promosyon Ürünleri",
    itemListElement: featuredProducts.map((p: any, index: number) => ({
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
        name: "Kurumsal toplu siparişlerde baskı yapıyor musunuz?",
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
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />
        <div className="absolute -top-20 left-1/2 -z-10 h-72 w-[780px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute right-0 top-10 -z-10 h-40 w-40 rounded-full bg-gray-100 blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-2 md:items-center md:py-14">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Kurumsal promosyon • Hızlı teklif • Türkiye geneli
            </div>

            <h1 className="mt-4 max-w-[22ch] break-words text-[clamp(32px,7.2vw,60px)] font-extrabold leading-tight tracking-tight text-gray-900 md:max-w-none">
              Kurumsal Promosyon Ürünleri
              <span className="block text-gray-600">DTF Baskı ve Toplu Sipariş Çözümleri</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
              Promosyon kalem, ajanda, defter, çakmak, anahtarlık ve farklı promosyon
              ürünlerinde kurumsal toplu sipariş çözümleri sunuyoruz. DTF baskı, UV
              baskı ve farklı logo uygulamaları için hızlı teklif alın.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/teklif"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900"
              >
                Hızlı Teklif Al
              </Link>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-500"
              >
                WhatsApp’tan Yaz
              </a>

              <Link
                href="/urunler"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-500"
              >
                Tüm Ürünleri İncele
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Badge title="Promosyon Ürünleri" text="Kurumsal toplu sipariş" />
              <Badge title="DTF / UV / Lazer" text="Farklı baskı seçenekleri" />
              <Badge title="Hızlı Dönüş" text="Teklif ve süreç netliği" />
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-extrabold text-gray-900">Popüler Ürünler</div>
                <Link href="/urunler" className="text-sm font-semibold text-gray-900 hover:underline">
                  Tümünü gör →
                </Link>
              </div>

              <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {topStrip.map((p: any) => {
                  const title = pickTitle(p);
                  const img = pickImg(p);
                  const slug = pickSlug(p);

                  return (
                    <Link
                      key={slug}
                      href={`/urunler/${slug}`}
                      className="w-[180px] shrink-0 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                        <Image
                          src={img}
                          alt={title}
                          fill
                          sizes="180px"
                          className="object-contain p-3 transition duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                        {title}
                      </div>
                      <div className="mt-1 text-xs text-gray-600">Detay →</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-gray-900">Kurumsal Sipariş Avantajları</div>

            <div className="mt-4 grid gap-3">
              <Feature title="Hızlı teklif süreci" text="Ürün, baskı ve adet bilgisine göre kısa sürede dönüş." />
              <Feature title="Toplu alım çözümleri" text="Kurumsal siparişlerde ihtiyaç odaklı teklif." />
              <Feature title="Türkiye geneli gönderim" text="Kargo ve teslim seçenekleri ile süreç desteği." />
            </div>

            <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-xs font-semibold text-gray-600">En Çok Aranan Kategoriler</div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {categoryCards.slice(0, 6).map((category: any) => (
                  <Link
                    key={category.slug}
                    href={`/kategori/${category.slug}`}
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/kurumsal-teklif-al"
                  className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-gray-900"
                >
                  Kurumsal teklif formu
                </Link>
                <Link
                  href="/iletisim"
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 hover:border-gray-500"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            En Çok Tercih Edilen Promosyon Kategorileri
          </h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            Kurumsal tanıtım, fuar, etkinlik ve personel kullanımına uygun promosyon
            ürün kategorilerini inceleyin.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categoryCards.map((category: any) => (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-base font-extrabold text-gray-900">{category.name}</div>
              <p className="mt-2 text-sm text-gray-600">
                {category.seoDescription || `${category.name} ürünlerini inceleyin.`}
              </p>
              <div className="mt-4 text-sm font-semibold text-gray-900">Kategoriye git →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section id="urunler" className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Öne Çıkan Promosyon Ürünleri
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Ürün görselleri temsili olabilir. Model, baskı ve adet bilgisine göre özel teklif hazırlanır.
            </p>
          </div>

          <Link href="/urunler" className="shrink-0 text-sm font-semibold text-gray-900 hover:underline">
            Tümünü Gör →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p: any) => {
            const title = pickTitle(p);
            const desc = pickDesc(p);
            const cat = pickCat(p);
            const img = pickImg(p);
            const slug = pickSlug(p);
            const categoryHref = getCategoryHref(cat);
            const minOrder = getMinOrderText(p);

            return (
              <article
                key={slug}
                className="group rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Link href={`/urunler/${slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-4 transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="mt-4 min-w-0">
                  <Link
                    href={categoryHref}
                    className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-200"
                  >
                    {cat}
                  </Link>

                  <Link href={`/urunler/${slug}`} className="block">
                    <h3 className="mt-3 break-words text-lg font-extrabold text-gray-900">
                      {title}
                    </h3>
                  </Link>

                  <p className="mt-2 line-clamp-3 text-sm text-gray-700">{desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                      Hızlı teklif
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {minOrder}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <Link
                    href={`/urunler/${slug}`}
                    className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 hover:border-gray-500"
                  >
                    Ürün Detayı
                  </Link>
                  <Link
                    href={`/teklif?product=${encodeURIComponent(slug)}`}
                    className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-gray-900"
                  >
                    Teklif Al
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* KATEGORİ BAZLI ÜRÜNLER */}
      {kalemProducts.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Promosyon Kalem Modelleri</h2>
              <p className="mt-2 text-sm text-gray-600">
                Logo baskıya uygun promosyon kalem modellerini inceleyin.
              </p>
            </div>
            <Link href="/kategori/kalem" className="text-sm font-semibold text-gray-900 hover:underline">
              Tüm Kalemler →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kalemProducts.map((p: any) => (
              <MiniProductCard key={pickSlug(p)} product={p} />
            ))}
          </div>
        </section>
      )}

      {ajandaProducts.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Ajanda ve Defter Ürünleri</h2>
              <p className="mt-2 text-sm text-gray-600">
                Kurumsal hediye ve toplu sipariş için ajanda ve defter seçenekleri.
              </p>
            </div>
            <Link href="/urunler" className="text-sm font-semibold text-gray-900 hover:underline">
              Tümünü Gör →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ajandaProducts.map((p: any) => (
              <MiniProductCard key={pickSlug(p)} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* HİZMETLER */}
      <section id="hizmetler" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">Hizmetler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="DTF Transfer Baskı"
            text="Tekstil ve farklı yüzeylerde kaliteli, esnek ve dayanıklı baskı çözümleri."
          />
          <ServiceCard
            title="Kurumsal Promosyon"
            text="Kalem, ajanda, çakmak, anahtarlık ve diğer promosyon ürünlerinde toplu sipariş."
          />
          <ServiceCard
            title="Logo Uygulama Seçenekleri"
            text="UV baskı, lazer baskı, DTF baskı ve ürüne göre farklı markalama yöntemleri."
          />
        </div>
      </section>

      {/* SÜREÇ */}
      <section id="surec" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">Sipariş Süreci</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Step n="1" title="Ürünü Seç" text="İhtiyacınıza uygun promosyon ürününü belirleyin." />
          <Step n="2" title="Adet ve Baskıyı Netleştir" text="Baskı tipi, renk, adet ve termin bilgisi netleşsin." />
          <Step n="3" title="Teklif ve Üretim" text="Onay sonrası kurumsal sipariş sürecini başlatalım." />
        </div>
      </section>

      {/* SEO METNİ */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            Kurumsal Promosyon Ürünleri ve DTF Baskı Çözümleri
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
            <p>
              Kurumsal promosyon ürünleri, markaların müşterileri, iş ortakları ve
              çalışanlarıyla daha güçlü bir bağ kurmasına yardımcı olur. Promosyon kalem,
              promosyon ajanda, promosyon defter, promosyon çakmak ve promosyon
              anahtarlık gibi ürünler; fuar, etkinlik, bayi toplantısı, ofis kullanımı ve
              kurumsal dağıtım süreçlerinde sıkça tercih edilir.
            </p>

            <p>
              FirmaPromosyon olarak kurumsal firmalar için toplu siparişe uygun promosyon
              ürünleri ve baskı çözümleri sunuyoruz. DTF baskı, UV baskı, lazer baskı ve
              ürüne özel markalama seçenekleri ile ihtiyaçlara göre teklif oluşturuyoruz.
              Ürün modeli, baskı tipi, adet ve termin bilgisine göre süreç netleştirilerek
              en uygun çözüm planlanır.
            </p>

            <p>
              Toptan promosyon ürünleri arayan firmalar için hızlı teklif süreci, Türkiye
              geneli gönderim imkanı ve kurumsal iletişim desteği sağlıyoruz. Promosyon
              kalem, ajanda, defter, anahtarlık ve daha birçok kategori için ürün
              sayfalarını inceleyebilir, detaylı bilgi aldıktan sonra teklif formu
              üzerinden bize ulaşabilirsiniz.
            </p>

            <p>
              Eğer markanız için logo baskılı promosyon ürünleri arıyorsanız, ana sayfada
              yer alan kategoriler ve ürün kartları üzerinden size uygun modeli seçebilir,
              ürün detay sayfasından baskı ve sipariş süreci hakkında ön bilgi alabilirsiniz.
              Özellikle kurumsal promosyon ihtiyaçlarında ürün çeşitliliği, doğru baskı
              yöntemi ve net teklif süreci satış öncesi karar vermeyi kolaylaştırır.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">Sık Sorulan Sorular</h2>
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
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl bg-black px-6 py-10 text-white md:px-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Kurumsal Toplu Sipariş İçin Teklif Alın
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
            Promosyon ürünleri ve DTF baskı çözümleri için ürün, adet ve baskı detaylarını
            iletin; size uygun teklif hazırlayalım.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-100"
            >
              Kurumsal Teklif Al
            </Link>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-gray-700">
          © {new Date().getFullYear()} FirmaPromosyon • firmapromosyon.com
        </div>
      </footer>
    </main>
  );
}

/* ---------- UI ---------- */

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
        <div className="mt-1 line-clamp-2 text-sm font-extrabold text-gray-900">{title}</div>
        <div className="mt-3 text-xs font-semibold text-gray-900">Detay →</div>
      </div>
    </Link>
  );
}

function Badge({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-extrabold text-gray-900">{title}</div>
      <div className="mt-1 text-xs text-gray-600">{text}</div>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-700">{text}</div>
    </div>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="text-base font-extrabold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-700">{text}</div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-extrabold text-white">
        {n}
      </div>
      <div className="mt-4 text-base font-extrabold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-700">{text}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <summary className="cursor-pointer text-sm font-extrabold text-gray-900">{q}</summary>
      <div className="mt-3 text-sm text-gray-700">{a}</div>
    </details>
  );
}