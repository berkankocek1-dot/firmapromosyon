"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { sortProductsByCode } from "@/data/productSorting";


type TermosProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  price?: number;
};

const filters = ["Tümü","500 ml","Büyük Hacim","Dijital Göstergeli","French Press","Bambu","Termos Seti"];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function getCapacity(text: string) {
  const match = text.match(/(\d{3,4})\s*ml/i);

  if (!match) return null;

  return Number(match[1]);
}

function matchesFilter(product: TermosProduct, filter: string) {
  if (filter === "Tümü") return true;
  const title = normalize(product.title);
  const code = /\bTK-\d+\b/i.exec(product.title)?.[0].toUpperCase();
  if (filter === "500 ml") return getCapacity(title) === 500;
  if (filter === "Büyük Hacim") { const capacity = getCapacity(title); return capacity !== null && capacity >= 700; }
  if (filter === "Dijital Göstergeli") return ["TK-195", "TK-196", "TK-200"].includes(code ?? "");
  if (filter === "French Press") return code === "TK-310";
  if (filter === "Bambu") return code === "TK-111";
  if (filter === "Termos Seti") return code === "TK-135";
  return false;
}

export default function TermosProductGrid({
  products,
}: {
  products: TermosProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredProducts = useMemo(
    () => sortProductsByCode(products.filter((product) => matchesFilter(product, activeFilter))),
    [products, activeFilter]
  );

  return (
    <>
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Promosyon Termos Seçenekleri
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Logo baskılı promosyon termos modellerini kapasite ve
          ürün özelliklerine göre filtreleyerek ihtiyacınıza uygun modeli
          daha kolay bulabilirsiniz.
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
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
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

                {p.price && (
                  <div className="mt-3">
                    <div className="text-base font-bold text-gray-900">
                      {p.price.toLocaleString("tr-TR")} TL + KDV
                    </div>

                    <div className="mt-1 text-xs font-medium text-green-600">
                      Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp'tan yazın.
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