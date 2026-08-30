"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type KupaProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
};

const filters = [
  "Tümü",
  "Kupa",
  "Fincan",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: KupaProduct, filter: string) {
  const text = normalize(`${product.title} ${product.shortDesc}`);

  if (filter === "Tümü") return true;

  if (filter === "Kupa") {
    return text.includes("kupa") && !text.includes("fincan");
  }

  if (filter === "Fincan") {
    return text.includes("fincan");
  }

  return true;
}

export default function KupaProductGrid({
  products,
}: {
  products: KupaProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredProducts = useMemo(
    () => products.filter((product) => matchesFilter(product, activeFilter)),
    [products, activeFilter]
  );

  return (
    <>
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Promosyon Kupa ve Fincan Seçenekleri
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Kurumsal kullanım, ofis, kafe ve etkinlik ihtiyaçlarına uygun
          promosyon kupa ve fincan modellerini ürün tipine göre
          filtreleyebilirsiniz.
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

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-white">
          {activeFilter === "Tümü"
            ? `${filteredProducts.length} ürün gösteriliyor`
            : `${activeFilter} için ${filteredProducts.length} ürün gösteriliyor`}
        </p>

        {activeFilter !== "Tümü" && (
          <button
            type="button"
            onClick={() => setActiveFilter("Tümü")}
            className="text-sm font-semibold text-black underline underline-offset-4"
          >
            Filtreyi Temizle
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <section className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
            <Link
              key={p.id}
              href={`/urunler/${p.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  unoptimized
                  loading="lazy"
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {p.category}
                </div>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {p.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                  {p.shortDesc}
                </p>

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
