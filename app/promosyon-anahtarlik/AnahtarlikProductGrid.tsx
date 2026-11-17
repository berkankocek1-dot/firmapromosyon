"use client";

// FP ANAHTARLIK GRID DESIGN V2

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { sortProductsByCode } from "@/data/productSorting";


type AnahtarlikProduct = {
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
  "Metal",
  "Deri",
  "Açacaklı",
  "Purjörlü",
  "Ev & Araba",
  "Telefon Standlı",
  "Özel Tasarım",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: AnahtarlikProduct, filter: string) {
  if (filter === "Tümü") return true;

  const code = product.slug.match(/(?:^|-)(an-\d+)(?:-|$)/i)?.[1]
    .toLowerCase();

  const text = normalize(`${product.title} ${product.shortDesc}`);
  const isPurjor =
    code === "an-380" ||
    code === "an-460" ||
    /purjör|purjor/.test(text);

  if (filter === "Metal") {
    return /metal|alüminyum|aluminyum/.test(text);
  }

  if (filter === "Deri") {
    return text.includes("deri");
  }

  if (filter === "Purjörlü") {
    return isPurjor;
  }

  if (filter === "Açacaklı") {
    if (isPurjor) return false;
    if (code === "an-160" || code === "an-450") return true;
    return /açacak|açacağı/.test(text);
  }

  if (filter === "Ev & Araba") {
    if (code === "an-165" || code === "an-170") return true;
    return /(?:ev|araba|otomobil) şeklinde/.test(text);
  }

  if (filter === "Telefon Standlı") {
    if (isPurjor || code === "an-160" || code === "an-450") {
      return false;
    }
    return /telefon stand(?:lı|ı)/.test(text);
  }

  if (filter === "Özel Tasarım") {
    return /özel tasarım|3d|baret|rozet/.test(text);
  }

  return false;
}

// FP ANAHTARLIK SEARCH SORT V1
type AnahtarlikSort = "default" | "price-asc" | "price-desc";

function matchesSearch(product: AnahtarlikProduct, query: string) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const text = normalize(`${product.title} ${product.slug} ${product.shortDesc}`);
  const compact = text.replace(/[^a-z0-9çğıöşü]/g, "");
  return terms.every((term) => text.includes(term) || compact.includes(term.replace(/[^a-z0-9çğıöşü]/g, "") || term));
}

function validPrice(product: AnahtarlikProduct) {
  return typeof product.price === "number" && Number.isFinite(product.price) && product.price > 0
    ? product.price
    : null;
}

function applyPriceSort(list: AnahtarlikProduct[], sortOrder: AnahtarlikSort) {
  if (sortOrder === "default") return list;
  return [...list].sort((a, b) => {
    const priceA = validPrice(a);
    const priceB = validPrice(b);
    if (priceA === null) return priceB === null ? 0 : 1;
    if (priceB === null) return -1;
    return sortOrder === "price-asc" ? priceA - priceB : priceB - priceA;
  });
}

export default function AnahtarlikProductGrid({
  products,
}: {
  products: AnahtarlikProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<AnahtarlikSort>("default");

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
          Promosyon Anahtarlık Modellerini Filtreleyin
        </h2>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-gray-600">
          Metal, deri, açacaklı ve özel tasarım promosyon anahtarlık
          modellerini özelliklerine göre inceleyebilirsiniz.
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

      <div id="anahtarlik-modelleri" className="mt-5 scroll-mt-28">
        <div className="grid gap-3 rounded-2xl border border-gray-200 bg-white p-3 sm:grid-cols-[minmax(0,1fr)_230px] sm:p-4">
          <label className="block min-w-0">
            <span className="mb-2 block text-xs font-semibold text-gray-700">Ürün adı veya kodu ara</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Örnek: AN-110, deri, açacaklı" className="min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-base text-black placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black" />
          </label>
          <label className="block min-w-0">
            <span className="mb-2 block text-xs font-semibold text-gray-700">Sıralama</span>
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as AnahtarlikSort)} className="min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-base text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
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
                  <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-sm transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white">↗</span>
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
    </>
  );
}
