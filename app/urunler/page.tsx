import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts as products } from "@/data/productVisibility";
import ProductsClient from "./ProductsClient";
import { getCategoryLandingHref } from "@/data/categoryLandingPages";
import { sortProductsByCode } from "@/data/productSorting";
import { categorySubfilters, matchesSubfilter } from "./productFilters";

const SITE_URL = "https://www.firmapromosyon.com";



function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const metadata: Metadata = {
  title: "Promosyon Ürünleri | Logo Baskılı Kurumsal Hediyeler",
  description:
    "Logo baskılı promosyon ürünlerini inceleyin. Kalem, defter, ajanda, termos ve kurumsal hediye modellerini karşılaştırın; toplu sipariş için teklif alın.",
  alternates: { canonical: `${SITE_URL}/urunler` },
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
    title: "Promosyon Ürünleri | Logo Baskılı Kurumsal Hediyeler | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ürünlerini inceleyin. Kalem, defter, ajanda, termos ve kurumsal hediye modellerini karşılaştırın; toplu sipariş için teklif alın.",
    url: `${SITE_URL}/urunler`,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Ürünler | FirmaPromosyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ürünleri | Logo Baskılı Kurumsal Hediyeler | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ürünlerini inceleyin. Kalem, defter, ajanda, termos ve kurumsal hediye modellerini karşılaştırın; toplu sipariş için teklif alın.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function ProductsPage() {

  const pageUrl = `${SITE_URL}/urunler`;

  const sortedProducts = sortProductsByCode(products);

  const categoryCounts = new Map<string, number>();
  for (const product of sortedProducts) {
    if (!product.category.trim()) continue;
    categoryCounts.set(
      product.category,
      (categoryCounts.get(product.category) || 0) + 1
    );
  }

  const allCategoryLinks = Array.from(categoryCounts, ([name, count]) => ({
    name,
    count,
    href: getCategoryLandingHref(name),
  })).sort((a, b) => a.name.localeCompare(b.name, "tr"));

  const cardProducts = sortedProducts.map((product) => ({
    id: product.id,
    slug: product.slug,
    title: product.title,
    category: product.category,
    image: product.image,
    shortDesc: product.shortDesc,
    ...(typeof product.price === "number" ? { price: product.price } : {}),
    matchedSubfilters: (categorySubfilters[product.category] || [])
      .filter((filter) => matchesSubfilter(product, filter)),
  }));

  const itemListElement = sortedProducts.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Ana Sayfa",
                item: `${SITE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Ürünler",
                item: `${SITE_URL}/urunler`,
              },
            ],
          }}
        />

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Promosyon Ürünleri",
            url: pageUrl,
            description:
              "Logo baskılı promosyon ürünlerini inceleyin. Kalem, defter, ajanda, termos ve kurumsal hediye modellerini karşılaştırın; toplu sipariş için teklif alın.",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: sortedProducts.length,
              itemListElement,
            },
          }}
        />

        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            Promosyon Ürünleri
          </h1>
          <p className="mt-2 text-base text-white/80 md:text-lg">
            Kategorilere göre filtreleyin ve hızlı teklif alın.
          </p>
        </div>

        <Suspense fallback={<ProductsLoadingFallback />}>
          <ProductsClient products={cardProducts} />
        </Suspense>

        <section
          id="tum-promosyon-kategorileri"
          aria-labelledby="tum-kategoriler-baslik"
          className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
        >
          <h2 id="tum-kategoriler-baslik" className="text-xl font-bold text-white">
            Tüm Promosyon Ürün Kategorileri
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/80">
            {allCategoryLinks.length} ürün kategorisi arasından ihtiyacınıza uygun
            grubu seçin. Kategori sayfalarında modelleri ve ürün özelliklerini
            inceleyebilirsiniz.
          </p>

          <nav aria-label="Tüm promosyon ürün kategorileri" className="mt-5">
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {allCategoryLinks.map((category) => (
                <li key={category.name} className="min-w-0">
                  <Link
                    href={category.href}
                    className="flex h-full flex-col justify-between gap-3 rounded-xl border border-white/20 bg-black/30 p-4 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <span className="break-words text-sm font-semibold">
                      {category.name}
                    </span>
                    <span className="text-xs text-white/80">
                      {category.count} ürün
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section
          id="promosyon-urunleri-secim-rehberi"
          aria-labelledby="promosyon-urunleri-rehber-baslik"
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-white md:p-8"
        >
          <h2
            id="promosyon-urunleri-rehber-baslik"
            className="text-2xl font-bold text-white"
          >
            Logo Baskılı Promosyon Ürünleri ve Kurumsal Hediye Seçimi
          </h2>
          <p className="mt-4 leading-7 text-white/80">
            Promosyon ürünleri; fuar dağıtımları, çalışan hediyeleri, bayi
            buluşmaları ve müşteri ziyaretleri gibi farklı ihtiyaçlar için
            seçilebilir. Bu katalogda ürünleri kategorilerine göre inceleyebilir,
            stok koduyla arama yapabilir ve kullanım amacınıza uygun modelleri
            karşılaştırabilirsiniz. Doğru seçim için yalnızca ürünün görünümünü
            değil, kime verileceğini ve hangi ortamda kullanılacağını da
            değerlendirin.
          </p>

          <h3 className="mt-7 text-xl font-bold text-white">
            Hangi Promosyon Ürünü Hangi İhtiyaca Uygun?
          </h3>
          <p className="mt-3 leading-7 text-white/80">
            Geniş katılımlı etkinliklerde kolay taşınan
            {" "}<Link href="/promosyon-kalem" className="text-white underline underline-offset-4">promosyon kalem</Link>
            {" "}ve
            {" "}<Link href="/promosyon-anahtarlik" className="text-white underline underline-offset-4">anahtarlık modelleri</Link>
            {" "}incelenebilir. Ofis kullanımı ve çalışan hediyeleri için
            {" "}<Link href="/promosyon-defter" className="text-white underline underline-offset-4">tarihsiz defter</Link>,
            {" "}ajanda ve masaüstü ürünleri değerlendirilebilir. Günlük kullanıma
            yönelik bir hediye arıyorsanız termos ve matara seçeneklerine;
            birden fazla ürünü bir arada sunmak istiyorsanız kalem setleri ve
            VIP ürünlere göz atabilirsiniz. Her ürün grubunun malzeme, ölçü ve
            kişiselleştirme seçenekleri farklıdır.
          </p>

          <h3 className="mt-7 text-xl font-bold text-white">
            Ürün ve Logo Baskısı Seçerken Nelere Bakılmalı?
          </h3>
          <p className="mt-3 leading-7 text-white/80">
            Önce hedef kitlenizi, dağıtım adedini ve ürün başına ayırdığınız
            bütçeyi belirleyin. Ardından ürünün kullanım alanını, baskı yüzeyini
            ve logo tasarımınızın bu yüzeyde nasıl görüneceğini değerlendirin.
            Küçük baskı alanlarında sade bir logo daha okunabilir olabilir;
            çok renkli veya ayrıntılı tasarımlarda ise uygulanacak baskı
            tekniğinin uygunluğu kontrol edilmelidir. Lazer, UV, tampon baskı
            veya nakış her ürüne uygulanamaz. Ürün sayfasındaki özellikleri
            inceleyip tasarımınızı teklif aşamasında paylaşabilirsiniz.
          </p>
          <p className="mt-3 leading-7 text-white/80">
            Model karşılaştırırken kapasite, malzeme, ebat ve set içeriği gibi
            somut özellikleri esas alın. Ürün görsellerinde yer alan örnek
            logoları kendi baskınızın birebir sonucu olarak değerlendirmeyin.
            Renk seçeneği, stok ve siparişe özel uygulama detaylarını sipariş
            öncesinde netleştirmek, ihtiyacınıza uygun ürünün belirlenmesini
            kolaylaştırır.
          </p>

          <h3 className="mt-7 text-xl font-bold text-white">
            Promosyon Ürün Fiyatları ve Toplu Sipariş Teklifi
          </h3>
          <p className="mt-3 leading-7 text-white/80">
            Toplam sipariş bedeli; seçilen model, adet, baskı yöntemi, baskı
            yönü ve varsa ambalaj taleplerine göre belirlenir. Listelenen
            fiyatların baskı ve KDV açıklamalarını kontrol edin. Fiyat
            belirtilmeyen ürünler için model ve sipariş detaylarıyla teklif
            isteyebilirsiniz. Teklif talebinizde stok kodunu, adedi, tercih
            ettiğiniz rengi, logo dosyanızı ve ihtiyaç duyduğunuz teslim tarihini
            paylaşmanız değerlendirmeyi kolaylaştırır.
          </p>
          <p className="mt-3 leading-7 text-white/80">
            Seçim konusunda daha fazla bilgi için
            {" "}<Link href="/rehber" className="text-white underline underline-offset-4">promosyon ürünleri ve baskı rehberlerini</Link>
            {" "}inceleyebilir veya belirlediğiniz modeller için
            {" "}<Link href="/kurumsal-teklif-al" className="text-white underline underline-offset-4">kurumsal teklif talebi</Link>
            {" "}oluşturabilirsiniz.
          </p>
        </section>

      </div>
    </div>
  );
}

function ProductsLoadingFallback() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="aspect-square w-full rounded-xl bg-gray-100" />

          <div className="mt-4">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="mt-3 h-5 w-full rounded bg-gray-200" />
            <div className="mt-2 h-4 w-5/6 rounded bg-gray-100" />
            <div className="mt-2 h-4 w-4/6 rounded bg-gray-100" />
            <div className="mt-4 h-8 w-28 rounded-full bg-gray-900" />
          </div>
        </div>
      ))}
    </div>
  );
}