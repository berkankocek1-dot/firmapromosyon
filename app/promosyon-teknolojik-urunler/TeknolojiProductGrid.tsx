"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { sortProductsByCode } from "@/data/productSorting";


type TeknolojiProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  longDesc?: string;
  price?: number;
};

const filters = ["Tümü", "Şarj Kabloları", "Type-C Çoklayıcı", "Hoparlör", "Wireless Şarj", "Telefon Standı", "Araç İçi", "LED Logolu"];

const verifiedFeatures: Record<string, string[]> = {"promosyon-kutulu-sarj-kablo-seti-kbl-350": ["Şarj Kabloları"], "promosyon-kutulu-sarj-kablo-seti-kbl-360": ["Şarj Kabloları"], "promosyon-kutulu-sarj-kablo-seti-kbl-370": ["Şarj Kabloları"], "promosyon-coklu-sarj-kablosu-eva-kutulu-kbl-375": ["Şarj Kabloları", "LED Logolu"], "promosyon-coklu-isikli-kablo-kbl-380": ["Şarj Kabloları", "LED Logolu"], "promosyon-coklu-sarj-kablosu-kbl-390": ["Şarj Kabloları"], "promosyon-8-fonksiyonlu-type-c-cogaltici-kbl-400": ["Type-C Çoklayıcı"], "promosyon-ios-micro-usb-type-c-led-isikli-kablo-kbl-420": ["Şarj Kabloları", "LED Logolu"], "promosyon-bluetooth-speaker-spk-435": ["Hoparlör"], "promosyon-bluetooth-hoparlor-spk-440": ["Hoparlör"], "promosyon-bluetooth-hoparlor-spk-445": ["Hoparlör"], "promosyon-bluetooth-speaker-spk-450": ["Hoparlör"], "promosyon-wireless-sarj-hoparlor-spk-460": ["Hoparlör", "Wireless Şarj"], "promosyon-wireless-sarj-hoparlor-spk-470": ["Hoparlör", "Wireless Şarj", "LED Logolu"], "promosyon-arac-ici-telefon-tutucu-tt-480-magsafe-wireless-sarjli": ["Wireless Şarj", "Araç İçi", "Telefon Standı"], "promosyon-arac-ici-telefon-tutucu-tt-490-manyetik-kompakt": ["Araç İçi", "Telefon Standı"], "promosyon-telefon-standi-tt-500-katlanabilir-masaustu": ["Telefon Standı"], "promosyon-wireless-sarj-istasyonu-tt-475": ["Wireless Şarj", "Telefon Standı"], "promosyon-wireless-sarj-istasyonu-tt-476-coklu-cihaz-standli": ["Wireless Şarj", "Telefon Standı", "LED Logolu"], "promosyon-wireless-sarj-cihazi-tt-477-standli-hizli-sarj": ["Wireless Şarj", "Hoparlör", "LED Logolu"], "promosyon-arac-ici-telefon-tutucu-tt-520-15w-magsafe-wireless": ["Wireless Şarj", "Araç İçi", "Telefon Standı"], "promosyon-ayakli-aynali-telefon-standi-tt-530-katlanabilir": ["Telefon Standı"], "promosyon-teknolojik-spk-100": ["Hoparlör"], "promosyon-teknolojik-spk-110": ["Hoparlör"], "promosyon-teknolojik-spk-180": ["Hoparlör", "Wireless Şarj"], "promosyon-teknolojik-tt-160": ["Wireless Şarj", "Telefon Standı", "LED Logolu"], "promosyon-teknolojik-tt-170": ["Wireless Şarj", "Telefon Standı", "LED Logolu"], "promosyon-teknolojik-tt-180": ["Wireless Şarj", "Telefon Standı"], "promosyon-teknolojik-tt-190": ["Telefon Standı"]};

function matchesFilter(product: TeknolojiProduct, filter: string) {
  if (filter === "Tümü") return true;
  return (verifiedFeatures[product.slug] || []).includes(filter);
}

export default function TeknolojiProductGrid({
  products,
}: {
  products: TeknolojiProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredProducts = useMemo(
    () =>
      sortProductsByCode(products.filter((product) =>
        matchesFilter(product, activeFilter)
      )),
    [products, activeFilter]
  );

  return (
    <>
      <section className="mt-8 mb-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Promosyon Teknolojik Ürünleri Filtreleyin
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Şarj kablosu, Bluetooth hoparlör, wireless şarj ve telefon
          standı modellerini özelliklerine göre inceleyebilirsiniz.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl border-2 border-black px-5 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <p className="mb-4 text-sm font-medium text-gray-700">
        {activeFilter === "Tümü"
          ? `${filteredProducts.length} ürün gösteriliyor`
          : `${activeFilter} filtresinde ${filteredProducts.length} ürün gösteriliyor`}
      </p>

      {filteredProducts.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

                {product.price != null ? (
                  <div className="mt-3">
                    <div className="text-base font-bold text-gray-900">
                      {product.price.toLocaleString("tr-TR")} TL + KDV
                    </div>

                    <div className="mt-1 text-xs font-medium text-green-600">
                      Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 text-sm font-semibold text-gray-900">Güncel fiyat için teklif alın.</p>
                )}

                <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                  Ürünü İncele
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <p className="font-medium text-gray-700">
            Bu filtreye uygun ürün bulunamadı.
          </p>

          <button
            type="button"
            onClick={() => setActiveFilter("Tümü")}
            className="mt-4 rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white"
          >
            Tüm Ürünleri Göster
          </button>
        </div>
      )}
    </>
  );
}