"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
};

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

export default function CategoryProductsClient({
  products,
  categoryName,
}: {
  products: Product[];
  categoryName: string;
}) {
  const isKalemCategory = normalizeText(categoryName) === "kalem";

  const subFilters = ["Tüm Kalemler", "Plastik Kalem", "Metal Kalem", "Dokunmatik Kalem"];
  const [activeFilter, setActiveFilter] = useState("Tüm Kalemler");

  const filteredProducts = useMemo(() => {
    if (!isKalemCategory) return products;
    if (activeFilter === "Tüm Kalemler") return products;

    return products.filter((p) => {
      const title = normalizeText(p.title);

      if (activeFilter === "Plastik Kalem") {
        return title.includes("plastik kalem");
      }

      if (activeFilter === "Metal Kalem") {
        return title.includes("metal kalem");
      }

      if (activeFilter === "Dokunmatik Kalem") {
        return title.includes("dokunmatik kalem");
      }

      return true;
    });
  }, [products, activeFilter, isKalemCategory]);

  return (
    <>
      {isKalemCategory && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {subFilters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/20 bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-white/80">
            Bu filtrede ürün bulunamadı.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
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
                <div className="text-xs font-semibold text-gray-600">
                  {p.category}
                </div>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {p.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm text-gray-700">
                  {p.shortDesc}
                </p>

                <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                  Hızlı Teklif
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}