"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { sortProductsByCode } from "@/data/productSorting";


type ImalatProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  price?: number;
};

const priceNotes: Record<string, string> = {"promosyon-oto-kokusu-ok-750": "Ofset baskı liste fiyatına dahildir. Minimum sipariş 1.000 adettir.", "promosyon-kapak-acacak-ac-100": "UV baskı uygulaması için tasarıma göre teklif hazırlanır.", "promosyon-uzun-acacak-ac-110": "UV baskı uygulaması için tasarıma göre teklif hazırlanır.", "promosyon-bardak-altligi-ba-650": "Listelenen fiyat 1.000 adet sipariş esasına aittir; seçilen adette baskı kapsamı nihai teklifte belirtilir.", "promosyon-balon-bl-600": "Çubuk fiyata dahil değildir; istenirse ayrıca hesaplanır. Tek renk serigrafi baskı için teklif hazırlanır.", "promosyon-frizbi-frz-160": "Tek renk için serigrafi, renkli tasarım için ofset baskı uygulanır.", "promosyon-mouse-pad-mp-600": "Görülen fiyat 1.000 adet için baskı dahildir. 500 adet ve diğer sipariş miktarları için ayrıca teklif alınır.", "promosyon-bilek-destekli-mouse-pad-mp-650": "Görülen fiyat 1.000 adet için baskı dahildir. 500 adet ve diğer sipariş miktarları için ayrıca teklif alınır.", "promosyon-oto-kesesi-oks-170": "Logo yöntemi, uygulama alanı ve sipariş ayrıntıları teklif aşamasında belirlenir.", "promosyon-para-tabagi-pt-100": "Logo uygulama yöntemi ve alanı tasarım çalışmasında belirlenir.", "promosyon-kare-para-tabagi-pt-110": "Logo uygulama yöntemi ve alanı tasarım çalışmasında belirlenir.", "promosyon-kalemlik-pu-100": "Logo tasarımı 5 x 8 cm reklam alanına göre hazırlanır; baskı tekniği teklifte belirlenir.", "promosyon-seffaf-kalemlik-pu-110": "Logo tasarımı 5 x 8 cm reklam alanına göre hazırlanır; baskı tekniği teklifte belirlenir.", "promosyon-yonca-kalemlik-pu-130": "3,5 x 3,5 cm reklam alanında tek renk tasarım planlanır.", "promosyon-seffaf-kup-kagitlik-pu-140": "Kağıt fiyata dahil değildir. Özel renk ve üretim adedi talebi için teklif hazırlanır.", "promosyon-kup-kagitlik-pu-150": "Kağıt fiyata dahil değildir. Özel renk ve üretim adedi talebi için teklif hazırlanır.", "promosyon-semsiye-sm-100": "Logo uygulama yöntemi ve alanı tasarım çalışmasında belirlenir.", "promosyon-isikli-semsiye-sm-150": "Serigrafi / tampon ve DTF baskı seçenekleri bulunur. Logo konumu ve kapsamı teklifte belirlenir."};

const filters = [
  "Tümü",
  "Açacak",
  "Mouse Pad",
  "Masaüstü",
  "Şemsiye",
  "Oto Ürünleri",
  "Diğer",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function getGroup(product: ImalatProduct) {
  const text = normalize(`${product.title} ${product.shortDesc}`);

  if (text.includes("açacak")) {
    return "Açacak";
  }

  if (text.includes("mouse pad")) {
    return "Mouse Pad";
  }

  if (
    text.includes("para tabağı") ||
    text.includes("kalemlik") ||
    text.includes("kağıtlık")
  ) {
    return "Masaüstü";
  }

  if (text.includes("şemsiye")) {
    return "Şemsiye";
  }

  if (
    text.includes("oto kokusu") ||
    text.includes("oto kesesi")
  ) {
    return "Oto Ürünleri";
  }

  return "Diğer";
}

export default function ImalatProductGrid({
  products,
}: {
  products: ImalatProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "Tümü") return products;

    return sortProductsByCode(products.filter(
      (product) => getGroup(product) === activeFilter
    ));
  }, [products, activeFilter]);

  return (
    <>
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Promosyon İmalat Ürünlerini Filtreleyin
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Özel üretim promosyon ürünlerini ürün türüne göre filtreleyerek
          ihtiyacınıza uygun modelleri daha kolay inceleyebilirsiniz.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {filters.map((item) => {
            const active = activeFilter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setActiveFilter(item)}
                className={`rounded-xl border-2 border-black px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? "bg-black text-white shadow-sm"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </section>

      <div className="mt-5">
        <p className="text-sm font-medium text-gray-700">
          {activeFilter === "Tümü"
            ? `${filteredProducts.length} ürün gösteriliyor`
            : `${activeFilter} için ${filteredProducts.length} ürün gösteriliyor`}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <section className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/urunler/${product.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  loading="lazy"
                  className="object-contain bg-white p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {product.category}
                </div>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {product.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                  {product.shortDesc}
                </p>

                {product.price && (
                  <div className="mt-3">
                    <div className="text-base font-bold text-gray-900">
                      {product.price.toLocaleString("tr-TR")} TL + KDV
                    </div>

                    <div className="mt-1 text-xs font-medium text-green-600">
                      {priceNotes[product.slug] || "Baskı ve sipariş ayrıntıları için teklif alın."}
                    </div>
                  </div>
                )}

                <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                  Ürünü İncele
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="font-medium text-gray-700">
            Bu filtreye uygun ürün bulunamadı.
          </p>

          <button
            type="button"
            onClick={() => setActiveFilter("Tümü")}
            className="mt-3 rounded-xl border-2 border-black bg-black px-5 py-2 text-sm font-semibold text-white"
          >
            Tüm Ürünleri Göster
          </button>
        </div>
      )}
    </>
  );
}