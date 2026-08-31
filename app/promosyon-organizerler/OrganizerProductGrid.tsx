"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type OrganizerProduct = {
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
  "Kılıflı",
  "Manyetik Kilitli",
  "Hesap Makineli",
  "Metal Tokalı",
  "Ajandalı",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: OrganizerProduct, filter: string) {
  if (filter === "Tümü") return true;

  const text = normalize(
    `${product.title} ${product.shortDesc} ${product.longDesc || ""}`
  );

  if (filter === "Kılıflı") {
    return text.includes("kılıflı");
  }

  if (filter === "Manyetik Kilitli") {
    return text.includes("manyetik kilitli");
  }

  if (filter === "Hesap Makineli") {
    return (
      text.includes("hesap makineli") ||
      text.includes("hesap makinalı")
    );
  }

  if (filter === "Metal Tokalı") {
    return (
      text.includes("metal tokalı") ||
      text.includes("metal kilitli")
    );
  }

  if (filter === "Ajandalı") {
    return text.includes("ajanda");
  }

  return true;
}

export default function OrganizerProductGrid({
  products,
}: {
  products: OrganizerProduct[];
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
          Promosyon Organizer Modellerini Filtreleyin
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Kılıflı, manyetik kilitli, hesap makineli ve metal tokalı
          promosyon organizer modellerini inceleyebilirsiniz.
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