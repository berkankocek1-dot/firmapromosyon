import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

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
    ctaProductSlug: "promosyon-kupa",
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
    ctaProductSlug: "promosyon-kalem",
  },
];

function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export async function generateMetadata({ params }: PageProps) {
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
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
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
    author: {
      "@type": "Organization",
      name: "FirmaPromosyon",
    },
    publisher: {
      "@type": "Organization",
      name: "FirmaPromosyon",
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
    <main className="mx-auto max-w-5xl px-5 py-12">
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

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-black hover:underline">
          Ana Sayfa
        </Link>
        <span className="px-2">/</span>
        <Link href="/rehber" className="hover:text-black hover:underline">
          Rehber
        </Link>
        <span className="px-2">/</span>
        <span className="font-medium text-gray-900">{guide.h1}</span>
      </nav>

      <div className="mb-6">
        <Link href="/rehber" className="text-sm font-medium text-gray-600 hover:text-black">
          ← Rehberlere dön
        </Link>
      </div>

      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
          {guide.h1}
        </h1>
        <p className="mt-3 text-base leading-7 text-gray-600">
          {guide.description}
        </p>
      </header>

      <div className="mt-8 space-y-6">
        {guide.sections.map((s) => (
          <section
            key={s.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-bold text-gray-900">{s.title}</h2>
            <p className="mt-2 leading-7 text-gray-700">{s.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Kurumsal sipariş öncesi kısa notlar
        </h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• Adet bilgisi fiyatı doğrudan etkiler.</li>
          <li>• Baskı alanı ve logo dosyası teklif sürecini hızlandırır.</li>
          <li>• Termin süresi üretim planına göre netleşir.</li>
          <li>• Toplu alımlarda birim maliyet genelde daha avantajlı olur.</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-black p-6 text-white">
        <div className="text-lg font-bold">Kurumsal teklif almak ister misiniz?</div>
        <p className="mt-2 text-sm text-white/80">
          Adet, baskı ve termin bilgisine göre hızlı teklif hazırlayalım.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href={guide.ctaProductSlug ? `/teklif?urun=${guide.ctaProductSlug}` : "/teklif"}
            className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:bg-gray-200"
          >
            Hızlı Teklif Al
          </Link>
          <Link
            href="/iletisim"
            className="rounded-xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
          >
            İletişime Geç
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">Diğer rehberler</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {relatedGuides.map((g) => (
            <Link
              key={g.slug}
              href={`/rehber/${g.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-gray-900">{g.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900">İlgili kategoriler</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/kategori/kalem"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Promosyon Kalem
          </Link>
          <Link
            href="/kategori/cakmak"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Promosyon Çakmak
          </Link>
          <Link
            href="/kategori/anahtarlik"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Promosyon Anahtarlık
          </Link>
          
        </div>
      </section>
    </main>
  );
}