"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { sortProductsByCode } from "@/data/productSorting";


type VipProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  longDesc?: string;
  price?: number;
};

const filters = ["Tümü", "Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler", "Anahtarlıklı", "MagSafe İçeren", "Set Kutuları"];

const verifiedFeatures: Record<string, string[]> = {"VIP-100": ["Defter & Kalem", "Teknoloji Setleri", "Anahtarlıklı"], "VIP-110": ["Defter & Kalem", "Termoslu Setler", "Anahtarlıklı"], "VIP-120": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-125": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler"], "VIP-130": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler"], "VIP-140": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler", "Anahtarlıklı", "MagSafe İçeren"], "VIP-150": ["Teknoloji Setleri", "Anahtarlıklı"], "VIP-160": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler"], "VIP-170": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler"], "VIP-180": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-190": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-200": ["Defter & Kalem", "Teknoloji Setleri", "Anahtarlıklı"], "VIP-210": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-220": ["Defter & Kalem", "Anahtarlıklı"], "VIP-230": ["Defter & Kalem", "Teknoloji Setleri", "Anahtarlıklı"], "VIP-240": ["Teknoloji Setleri"], "VIP-250": ["Teknoloji Setleri", "Termoslu Setler", "MagSafe İçeren"], "VIP-260": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-270": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-280": ["Defter & Kalem", "Anahtarlıklı"], "VIP-290": ["Defter & Kalem", "Anahtarlıklı"], "VIP-300": ["Defter & Kalem", "Teknoloji Setleri", "MagSafe İçeren"], "VIP-310": ["Defter & Kalem", "Anahtarlıklı"], "VIP-320": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-330": ["Defter & Kalem", "Teknoloji Setleri", "Anahtarlıklı"], "VIP-340": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-350": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-355": ["Defter & Kalem", "Anahtarlıklı"], "VIP-360": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-365": ["Defter & Kalem", "Anahtarlıklı"], "VIP-370": ["Defter & Kalem", "Termoslu Setler", "Anahtarlıklı"], "VIP-380": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler", "MagSafe İçeren"], "VIP-390": ["Defter & Kalem"], "VIP-400": ["Teknoloji Setleri", "Termoslu Setler", "MagSafe İçeren"], "VIP-410": ["Defter & Kalem"], "VIP-420": ["Defter & Kalem"], "VIP-430": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-440": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-460": ["Defter & Kalem"], "VIP-470": ["Set Kutuları"], "VIP-480": ["Set Kutuları"], "VIP-485": ["Set Kutuları"], "VIP-490": ["Set Kutuları"], "VIP-500": ["Set Kutuları"], "VIP-510": ["Set Kutuları"], "VIP-520": ["Set Kutuları"]};

function matchesFilter(product: VipProduct, filter: string) {
  if (filter === "Tümü") return true;
  const code = product.slug.match(/(?:^|-)vip-(\d+)(?:-|$)/i);
  return code ? (verifiedFeatures[`VIP-${code[1]}`] || []).includes(filter) : false;
}

export default function VipProductGrid({
  products,
}: {
  products: VipProduct[];
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
          Promosyon VIP Ürünleri Filtreleyin
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Defterli, teknolojik, termoslu ve premium kurumsal VIP hediye
          setlerini içeriklerine göre inceleyebilirsiniz.
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
                  <p className="mt-3 text-sm font-semibold text-gray-900">
                    Güncel fiyat için teklif alın.
                  </p>
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
