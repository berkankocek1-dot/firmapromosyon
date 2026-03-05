import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function slugifyCategoryTR(category: string) {
  // Kalem -> kalem, Çakmak -> cakmak, Anahtarlık -> anahtarlik
  return category
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function unslugifyCategoryTR(slug: string) {
  // Bizim kategoriler belli olduğu için map en temiz çözüm
  const map: Record<string, string> = {
    kalem: "Kalem",
    cakmak: "Çakmak",
    anahtarlik: "Anahtarlık",
  };
  return map[slug] ?? null;
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = unslugifyCategoryTR(slug);

  if (!categoryName) {
    return {
      title: "Kategori bulunamadı",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${SITE_URL}/kategori/${slug}`;
  const title = `Promosyon ${categoryName} | FirmaPromosyon`;
  const description = `Promosyon ${categoryName.toLocaleLowerCase(
    "tr-TR"
  )} ürünleri: kurumsal logo baskılı çözümler, toplu sipariş ve hızlı teklif. ${categoryName} modellerini inceleyin.`;

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
  const categoryName = unslugifyCategoryTR(slug);
  if (!categoryName) return notFound();

  const list = products.filter((p) => p.category === categoryName);
  if (list.length === 0) return notFound();

  const pageUrl = `${SITE_URL}/kategori/${slug}`;

  const itemListElement = list.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Breadcrumb JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Ürünler", item: `${SITE_URL}/urunler` },
            { "@type": "ListItem", position: 3, name: categoryName, item: pageUrl },
          ],
        }}
      />

      {/* CollectionPage JSON-LD */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Promosyon ${categoryName}`,
          url: pageUrl,
          description: `Promosyon ${categoryName.toLocaleLowerCase(
            "tr-TR"
          )} ürünleri: logo baskılı kurumsal çözümler, toplu sipariş ve hızlı teklif.`,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      {/* Üst bölüm (koyu zeminde okunur) */}
      <nav className="mb-6 text-sm text-white/80">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>
        <span className="px-2">/</span>
        <Link href="/urunler" className="hover:underline">
          Ürünler
        </Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-white">{categoryName}</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">
          Promosyon {categoryName}
        </h1>
        <p className="mt-2 text-white/80">
          Logo baskılı kurumsal {categoryName.toLocaleLowerCase("tr-TR")} modellerini inceleyin
          ve hızlı teklif alın.
        </p>

        <div className="mt-4">
          <Link
            href="/urunler"
            className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white border border-white/20 hover:bg-white/15 transition"
          >
            ← Tüm ürünlere dön
          </Link>
        </div>
      </header>

      {/* Ürünler */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold text-gray-600">{p.category}</div>
              <h2 className="mt-1 text-lg font-bold text-gray-900">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-gray-700">{p.shortDesc}</p>

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Hızlı Teklif
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

// ✅ Build zamanı statik route üretimi (SEO + hız)
export function generateStaticParams() {
  const cats = Array.from(new Set(products.map((p) => p.category)));
  return cats.map((c) => ({ slug: slugifyCategoryTR(c) }));
}