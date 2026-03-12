import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Guide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  sections: { title: string; body: string }[];
  ctaProductSlug?: string;
  keywords?: string[];
};

const guides: Guide[] = [
  {
    slug: "dtf-baski-nedir",
    title: "DTF Baskı Nedir? Avantajları ve Kullanım Alanları",
    description:
      "DTF baskı nedir, nasıl yapılır, avantajları nelerdir ve hangi ürünlerde kullanılır? Kısa ve net rehber.",
    h1: "DTF Baskı Nedir?",
    keywords: ["DTF baskı", "DTF baskı nedir", "DTF baskı avantajları"],
    sections: [
      {
        title: "DTF baskı ne demek?",
        body:
          "DTF (Direct To Film), tasarımın önce özel bir filme basılıp ardından ısı ve pres ile ürüne aktarılmasıdır. Tekstil başta olmak üzere birçok yüzeyde kullanılabilir.",
      },
      {
        title: "Avantajları",
        body:
          "Canlı renkler, yüksek detay, dayanıklılık ve düşük adetlerde de üretim esnekliği sağlar. Tasarımlar yıkamaya karşı dayanıklı olacak şekilde uygulanabilir.",
      },
      {
        title: "Nerelerde kullanılır?",
        body:
          "DTF baskı en çok tişört, sweatshirt, bez çanta gibi tekstil ürünlerinde tercih edilir. Kurumsal etkinlik ve promosyonlarda hızlı üretim için uygundur.",
      },
    ],
    ctaProductSlug: "dtf-baskili-tisort",
  },
  {
    slug: "promosyon-kupa-baski",
    title: "Promosyon Kupa Baskı: Toplu Sipariş ve Fiyatı Etkileyenler",
    description:
      "Promosyon kupa baskıda baskı türleri, adet, termin ve fiyatı etkileyen detaylar. Kurumsal sipariş için rehber.",
    h1: "Promosyon Kupa Baskı Rehberi",
    keywords: ["promosyon kupa", "kupa baskı", "logo baskılı kupa"],
    sections: [
      {
        title: "Hangi baskı türleri yapılır?",
        body:
          "Kupa baskıda tasarım, ürün ve adet bilgisine göre uygun baskı yöntemi belirlenir. Logo konumu ve renk sayısı fiyatı etkiler.",
      },
      {
        title: "Fiyatı neler etkiler?",
        body:
          "Adet, baskı alanı, tasarım detayı ve termin süresi fiyatı belirleyen ana unsurlardır. Toplu alımlarda birim maliyet düşer.",
      },
      {
        title: "Kurumsal sipariş süreci",
        body:
          "İstenen model, adet ve teslim tarihi paylaşıldığında hızlı şekilde teklif hazırlanır. Termin ve baskı detayları teklifte netleşir.",
      },
    ],
  },
  {
    slug: "promosyon-kalem-toptan",
    title: "Promosyon Kalem Toptan: Kurumsal Hediyede Doğru Seçim",
    description:
      "Promosyon kalem çeşitleri, baskı alanı, adet ve teklif süreci. Toptan alım için pratik rehber.",
    h1: "Promosyon Kalem Toptan",
    keywords: ["promosyon kalem", "toptan promosyon kalem", "logo baskılı kalem"],
    sections: [
      {
        title: "Kalem türleri",
        body:
          "Plastik, metal ve premium seçenekler bulunur. Kurumsal etkinlik, fuar ve müşteri hediyesi için yaygın kullanılır.",
      },
      {
        title: "Baskı alanı ve logo",
        body:
          "Logo konumu, renk sayısı ve kalem modeli baskı uygulamasını etkiler. Net bir logo dosyası teklif sürecini hızlandırır.",
      },
      {
        title: "Toptan sipariş ipucu",
        body:
          "Adet ve hedef kullanım amacına göre model seçmek maliyeti optimize eder. Termin ve teslimat bilgisi teklifte netleşir.",
      },
    ],
  },
  {
    slug: "promosyon-urunleri-secim-rehberi",
    title: "Promosyon Ürünleri Seçim Rehberi",
    description:
      "Kurumsal promosyon ürünleri seçerken hedef kitle, kullanım alanı, baskı yöntemi ve ürün kalitesi hakkında detaylı rehber.",
    h1: "Promosyon Ürünleri Seçim Rehberi",
    keywords: [
      "promosyon ürünleri",
      "kurumsal promosyon ürünleri",
      "promosyon ürün seçimi",
    ],
    sections: [
      {
        title: "Promosyon ürünü neden önemlidir?",
        body:
          "Doğru seçilmiş promosyon ürünleri markanızın görünürlüğünü artırır ve hedef kitlenizle daha kalıcı bir bağ kurulmasına yardımcı olur.",
      },
      {
        title: "Seçim yaparken nelere bakılmalı?",
        body:
          "Hedef kitle, kullanım alanı, ürün kalitesi, baskı türü ve sipariş adedi birlikte değerlendirilmelidir. Günlük kullanımda yer bulan ürünler genellikle daha yüksek etki sağlar.",
      },
      {
        title: "Hangi ürünler daha çok tercih edilir?",
        body:
          "Promosyon kalem, promosyon ajanda, promosyon termos, promosyon anahtarlık ve promosyon USB bellek gibi ürünler kurumsal siparişlerde en sık tercih edilen kategoriler arasında yer alır.",
      },
    ],
  },
];

function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {
      title: "Sayfa Bulunamadı",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/rehber/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: `${SITE_URL}${canonical}`,
      title: guide.title,
      description: guide.description,
      siteName: "FirmaPromosyon",
      locale: "tr_TR",
      images: [
        {
          url: `${SITE_URL}/og.jpg`,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [`${SITE_URL}/og.jpg`],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: `${SITE_URL}/rehber/${guide.slug}`,
    inLanguage: "tr-TR",
    image: [`${SITE_URL}/og.jpg`],
    author: {
      "@type": "Organization",
      name: "FirmaPromosyon",
    },
    publisher: {
      "@type": "Organization",
      name: "FirmaPromosyon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og.jpg`,
      },
    },
    keywords: guide.keywords?.join(", "),
  };

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
        name: "Rehber",
        item: `${SITE_URL}/rehber`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.h1,
        item: `${SITE_URL}/rehber/${guide.slug}`,
      },
    ],
  };

  const relatedGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Script
        id="guide-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="guide-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900 hover:underline">
              Ana Sayfa
            </Link>
            <span className="px-2">/</span>
            <Link href="/rehber" className="hover:text-gray-900 hover:underline">
              Rehber
            </Link>
            <span className="px-2">/</span>
            <span className="font-medium text-gray-900">{guide.h1}</span>
          </nav>

          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <div className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
              Rehber İçeriği
            </div>

            <div className="mt-5 max-w-3xl">
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                {guide.h1}
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
                {guide.description}
              </p>

              <div className="mt-6">
                <Link
                  href="/rehber"
                  className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-500"
                >
                  ← Rehberlere dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="space-y-6">
          {guide.sections.map((s, index) => (
            <section
              key={s.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                Bölüm {index + 1}
              </div>

              <h2 className="mt-4 text-xl font-extrabold leading-8 text-gray-900 md:text-2xl">
                {s.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </section>

      {/* KISA NOTLAR */}
      <section className="mx-auto max-w-5xl px-5 py-2">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            Kurumsal sipariş öncesi kısa notlar
          </h2>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700 md:text-base">
            <li>• Adet bilgisi fiyatı doğrudan etkiler.</li>
            <li>• Baskı alanı ve logo dosyası teklif sürecini hızlandırır.</li>
            <li>• Termin süresi üretim planına göre netleşir.</li>
            <li>• Toplu alımlarda birim maliyet genelde daha avantajlı olur.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-black p-6 text-white shadow-sm md:p-8">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Kurumsal teklif almak ister misiniz?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
            Adet, baskı ve termin bilgisine göre hızlı teklif hazırlayalım.
            Kurumsal promosyon ürünleri ve logo baskı süreçleri için bizimle
            iletişime geçebilirsiniz.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={guide.ctaProductSlug ? `/teklif?urun=${guide.ctaProductSlug}` : "/teklif"}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              Hızlı Teklif Al
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* DİĞER REHBERLER */}
      {relatedGuides.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
                Diğer rehberler
              </h2>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                İlgili konulardaki diğer rehber içerikleri de inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relatedGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/rehber/${g.slug}`}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  Rehber
                </div>

                <h3 className="mt-4 text-lg font-extrabold leading-7 text-gray-900">
                  {g.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {g.description}
                </p>

                <div className="mt-4 text-sm font-semibold text-gray-900">
                  İncele →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* İLGİLİ KATEGORİLER */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            İlgili kategoriler
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 md:text-base">
            Rehber içeriğiyle bağlantılı promosyon ürün kategorilerine hızlıca geçebilirsiniz.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kategori/kalem"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Kalem
            </Link>
            <Link
              href="/kategori/cakmak"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Çakmak
            </Link>
            <Link
              href="/kategori/anahtarlik"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Anahtarlık
            </Link>
            <Link
              href="/kategori/termos"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Termos
            </Link>
            <Link
              href="/kategori/usb-bellek"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon USB Bellek
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}