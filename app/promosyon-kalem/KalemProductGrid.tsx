"use client";

// FP KALEM GRID DESIGN V2

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { sortProductsByCode } from "@/data/productSorting";
import { isMetalPen } from "@/data/penSubcategories";


type KalemProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  price?: number;
};

const filters = [
  "Tümü",
  "Plastik",
  "Metal",
  "Roller",
  "Jel",
  "Rubber",
  "Kurşun",
  "Dokunmatik",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: KalemProduct, filter: string) {
  const text = normalize(`${product.title} ${product.shortDesc}`);

  if (filter === "Tümü") return true;
  if (filter === "Plastik") return text.includes("plastik");
  if (filter === "Metal") return isMetalPen(product);
  if (filter === "Roller") return text.includes("roller");

  if (filter === "Jel") {
    return (
      text.includes("jel") ||
      text.includes("jell")
    );
  }

  if (filter === "Rubber") return text.includes("rubber");
  if (filter === "Kurşun") return text.includes("kurşun");

  if (filter === "Dokunmatik") {
    return (
      text.includes("dokunmatik") ||
      text.includes("stylus")
    );
  }

  return true;
}

// FP KALEM SEARCH SORT V1
type KalemSort = "default" | "price-asc" | "price-desc";

function matchesSearch(product: KalemProduct, query: string) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const text = normalize(`${product.title} ${product.slug} ${product.shortDesc}`);
  const compact = text.replace(/[^a-z0-9çğıöşü]/g, "");
  return terms.every((term) => text.includes(term) || compact.includes(term.replace(/[^a-z0-9çğıöşü]/g, "") || term));
}

function validPrice(product: KalemProduct) {
  return typeof product.price === "number" && Number.isFinite(product.price) && product.price > 0
    ? product.price
    : null;
}

function applyPriceSort(list: KalemProduct[], sortOrder: KalemSort) {
  if (sortOrder === "default") return list;
  return [...list].sort((a, b) => {
    const priceA = validPrice(a);
    const priceB = validPrice(b);
    if (priceA === null) return priceB === null ? 0 : 1;
    if (priceB === null) return -1;
    return sortOrder === "price-asc" ? priceA - priceB : priceB - priceA;
  });
}

export default function KalemProductGrid({
  products,
}: {
  products: KalemProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<KalemSort>("default");

  const filteredProducts = useMemo(() => {
    const matched = products.filter((product) => matchesFilter(product, activeFilter) && matchesSearch(product, query));
    return applyPriceSort(sortProductsByCode(matched), sortOrder);
  }, [products, activeFilter, query, sortOrder]);

  function resetSelection() {
    setActiveFilter("Tümü");
    setQuery("");
    setSortOrder("default");
  }

  return (
    <>
      <section className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <h2 className="text-lg font-bold text-black">
          Promosyon Kalem Seçenekleri
        </h2>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-gray-600">
          İhtiyacınıza uygun kalem türünü seçerek plastik, metal, roller, jel,
          rubber, kurşun ve dokunmatik promosyon kalem modellerini
          filtreleyebilirsiniz.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = activeFilter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setActiveFilter(item)}
                aria-pressed={active}
                className={`min-h-11 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-black hover:text-black"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

      </section>

      <div id="kalem-modelleri" className="mt-5 scroll-mt-28">
        <div className="grid gap-3 rounded-2xl border border-gray-200 bg-white p-3 sm:grid-cols-[minmax(0,1fr)_230px] sm:p-4">
          <label className="block min-w-0">
            <span className="mb-2 block text-xs font-semibold text-gray-700">Ürün adı veya kodu ara</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Örnek: MK-130, metal, dokunmatik" className="min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-base text-black placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black" />
          </label>
          <label className="block min-w-0">
            <span className="mb-2 block text-xs font-semibold text-gray-700">Sıralama</span>
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as KalemSort)} className="min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-base text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
              <option value="default">Varsayılan sıra</option>
              <option value="price-asc">Fiyat: düşükten yükseğe</option>
              <option value="price-desc">Fiyat: yüksekten düşüğe</option>
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p role="status" aria-live="polite" aria-atomic="true" className="text-sm font-medium text-gray-600">
            {activeFilter === "Tümü"
              ? `${filteredProducts.length} ürün gösteriliyor`
              : `${activeFilter} için ${filteredProducts.length} ürün gösteriliyor`}
          </p>
          {(activeFilter !== "Tümü" || query !== "" || sortOrder !== "default") && (
            <button type="button" onClick={resetSelection} className="min-h-11 text-sm font-semibold text-black underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
              Seçimleri Temizle
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <section className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
          {filteredProducts.map((p) => (
            <Link
              key={p.id}
              href={`/urunler/${p.slug}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-white">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  unoptimized
                  loading="lazy"
                  className="object-contain bg-white p-2 sm:p-3"
                  sizes="(max-width: 767px) 46vw, (max-width: 1279px) 31vw, 295px"
                />
              </div>

              <div className="flex flex-1 flex-col border-t border-gray-100 bg-gray-50 px-3 py-4 sm:px-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {p.category}
                </div>

                <h2 className="mt-1 min-h-[4.125rem] line-clamp-3 break-words text-sm font-bold leading-[1.375rem] text-black sm:min-h-[2.75rem] sm:line-clamp-2">
                  {p.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600 sm:text-sm">
                  {p.shortDesc}
                </p>

                {typeof p.price === "number" && Number.isFinite(p.price) && p.price > 0 ? (
                  <div className="mt-auto pt-3">
                    <div className="text-base font-bold text-gray-900">
                      {p.price.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TL + KDV
                    </div>

                    <div className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs">
                      Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan
                      yazın.
                    </div>
                  </div>
                ) : <p className="mt-auto pt-3 text-sm font-semibold text-gray-900">Güncel fiyat için teklif alın.</p>}

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-gray-700">Ürünü İncele</span>
                  <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center text-sm transition-colors"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
          <p className="font-medium text-gray-700">
            Bu arama veya filtreye uygun ürün bulunamadı.
          </p>

          <button
            type="button"
            onClick={resetSelection}
            className="mt-3 rounded-xl border-2 border-black bg-black px-5 py-2 text-sm font-semibold text-white"
          >
            Tüm Ürünleri Göster
          </button>
        </div>
      )}
      {/* FP KALEM SERVICES BELOW PRODUCTS */}
      <section aria-label="Kalem siparişi ve baskı seçenekleri" className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5">
        <div className="grid gap-4 text-sm text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-semibold text-gray-900">Logo Baskı</span>
            <p className="mt-1">
              Kalem modeline uygun kurumsal logo uygulamaları.
            </p>
          </div>

          <div>
            <span className="font-semibold text-gray-900">Toplu Sipariş</span>
            <p className="mt-1">
              Firma, fuar ve etkinlik ihtiyaçlarına uygun adetler.
            </p>
          </div>

          <div>
            <span className="font-semibold text-gray-900">Farklı Modeller</span>
            <p className="mt-1">
              Ekonomik modellerden premium kalemlere alternatifler.
            </p>
          </div>

          <div>
            <span className="font-semibold text-gray-900">Kurumsal Teklif</span>
            <p className="mt-1">
              Ürün, baskı ve sipariş adedine özel fiyatlandırma.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
