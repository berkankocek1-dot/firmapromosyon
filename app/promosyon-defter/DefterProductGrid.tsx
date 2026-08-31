"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type DefterProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  longDesc?: string;
  price?: number;
};

const filters = [
  "Tümü",
  "Kalem Tutuculu",
  "Metal Detaylı",
  "Premium",
  "Büyük Boy",
  "Kareli",
  "Cep & Mini Boy",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: DefterProduct, filter: string) {
  if (filter === "Tümü") return true;

  const text = normalize(
    `${product.title} ${product.shortDesc} ${product.longDesc || ""}`
  );

  if (filter === "Kalem Tutuculu") {
    return (
      text.includes("kalem tutuculu") ||
      text.includes("kalem yuvalı") ||
      text.includes("kalemlikli")
    );
  }

  if (filter === "Metal Detaylı") {
    return (
      text.includes("metal plakalı") ||
      text.includes("metal detaylı") ||
      text.includes("metal tokalı") ||
      text.includes("manyetik kilitli")
    );
  }

  if (filter === "Premium") {
    return text.includes("premium");
  }

  if (filter === "Büyük Boy") {
    return (
      text.includes("büyük boy") ||
      text.includes("17x24") ||
      text.includes("16x24") ||
      text.includes("19,5x25")
    );
  }

  if (filter === "Kareli") {
    return text.includes("kareli");
  }

  if (filter === "Cep & Mini Boy") {
    return (
      text.includes("cep boy") ||
      text.includes("mini boy")
    );
  }

  return true;
}

export default function DefterProductGrid({
  products,
}: {
  products: DefterProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        matchesFilter(product, activeFilter)
      ),
    [products, activeFilter]
  );

  return (
    <>
      <section className="mt-8 mb-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Promosyon Defter Modellerini Filtreleyin
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Kalem tutuculu, metal detaylı, premium, büyük boy ve cep boy
          promosyon defterleri özelliklerine göre inceleyebilirsiniz.
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

      <p className="mb-4 text-sm font-medium text-white">
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
                  className="object-contain p-4"
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
                      Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
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