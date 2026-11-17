"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type CatalogProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category?: string;
  shortDesc: string;
  price?: number;
  priceNote?: string;
};

type Props<T extends CatalogProduct> = {
  products: T[];
  anchorId: string;
  filters?: readonly string[];
  filterProduct?: (product: T, filter: string) => boolean;
  filterTitle?: string;
  filterDescription?: string;
  categoryLabel?: string;
  showPrices?: boolean;
};

export function normalizeCatalogText(value: string) {
  return value.toLocaleLowerCase("tr-TR").replace(/\s+/g, " ").trim();
}

export function matchesCatalogSearch(product: CatalogProduct, query: string) {
  const text = normalizeCatalogText(`${product.title} ${product.slug} ${product.shortDesc}`);
  const compact = text.replace(/[^a-z0-9çğıöşü]/g, "");
  return normalizeCatalogText(query).split(/\s+/).filter(Boolean).every(term => {
    const key = term.replace(/[^a-z0-9çğıöşü]/g, "");
    return text.includes(term) || (key.length > 0 && compact.includes(key));
  });
}

export function catalogPrice(product: CatalogProduct) {
  return typeof product.price === "number" && Number.isFinite(product.price) && product.price > 0 ? product.price : null;
}

export function sortCatalogProducts<T extends CatalogProduct>(products: T[], order: string) {
  if (order === "default") return products;
  return [...products].sort((a, b) => {
    const x = catalogPrice(a), y = catalogPrice(b);
    if (x === null) return y === null ? 0 : 1;
    if (y === null) return -1;
    return order === "price-asc" ? x - y : y - x;
  });
}

export default function FpCategoryCatalog<T extends CatalogProduct>({products, anchorId, filters, filterProduct, filterTitle, filterDescription, categoryLabel, showPrices = true}: Props<T>) {
  const [filter, setFilter] = useState("Tümü");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("default");
  const shown = useMemo(() => sortCatalogProducts(products.filter(p => (filter === "Tümü" || !filterProduct || filterProduct(p, filter)) && matchesCatalogSearch(p, query)), order), [products, filter, filterProduct, query, order]);
  function reset() {setFilter("Tümü"); setQuery(""); setOrder("default");}
  return <>
    {filters && filters.length > 0 && <section className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5">
      {filterTitle && <h2 className="text-lg font-bold text-black">{filterTitle}</h2>}
      {filterDescription && <p className="mt-1 max-w-3xl text-sm leading-6 text-gray-600">{filterDescription}</p>}
      <div className="mt-4 flex flex-wrap gap-2">{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`min-h-11 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${filter === item ? "border-black bg-black text-white" : "border-gray-300 bg-white text-gray-700 hover:border-black hover:text-black"}`}>{item}</button>)}</div>
    </section>}
    <div id={anchorId} className="mt-5 scroll-mt-28">
      <div className={`grid gap-3 rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 ${showPrices ? "sm:grid-cols-[minmax(0,1fr)_230px]" : ""}`}>
        <label className="block min-w-0"><span className="mb-2 block text-xs font-semibold text-gray-700">Ürün adı veya kodu ara</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Ürün kodu, model veya özellik yazın" className="min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-base text-black placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black" /></label>
        {showPrices && <label className="block min-w-0"><span className="mb-2 block text-xs font-semibold text-gray-700">Sıralama</span><select value={order} onChange={event => setOrder(event.target.value)} className="min-h-11 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-base text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"><option value="default">Varsayılan sıra</option>{showPrices && <><option value="price-asc">Fiyat: düşükten yükseğe</option><option value="price-desc">Fiyat: yüksekten düşüğe</option></>}</select></label>}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><p role="status" aria-live="polite" aria-atomic="true" className="text-sm font-medium text-gray-600">{filter === "Tümü" ? `${shown.length} ürün gösteriliyor` : `${filter} için ${shown.length} ürün gösteriliyor`}</p>{(filter !== "Tümü" || query !== "" || order !== "default") && <button type="button" onClick={reset} className="min-h-11 text-sm font-semibold text-black underline underline-offset-4">Seçimleri Temizle</button>}</div>
    </div>
    {shown.length > 0 ? <section aria-label="Kategori ürün listesi" className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 md:gap-4">{shown.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
      <div className="relative aspect-square w-full overflow-hidden bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 767px) 46vw, (max-width: 1279px) 31vw, 295px" className="object-contain p-3 sm:p-4" /></div>
      <div className="flex flex-1 flex-col border-t border-gray-100 bg-gray-50 p-3 sm:p-4"><p className="text-[10px] font-medium uppercase tracking-wide text-gray-500 sm:text-xs">{p.category || categoryLabel}</p><h2 className="mt-1 min-h-[4.125rem] line-clamp-3 break-words text-sm font-bold leading-[1.375rem] text-black sm:min-h-[2.75rem] sm:line-clamp-2">{p.title}</h2><p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600 sm:text-sm">{p.shortDesc}</p>
        <div className="mt-auto pt-3">{showPrices && catalogPrice(p) !== null ? <><p className="text-base font-bold text-gray-900">{p.price!.toLocaleString("tr-TR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} TL + KDV</p>{p.priceNote && <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs">{p.priceNote}</p>}</> : <p className="text-sm font-semibold text-gray-900">Güncel fiyat için teklif alın.</p>}</div>
        <div className="mt-4 flex items-center justify-between gap-2"><span className="text-xs font-semibold text-gray-700">Ürünü İncele</span><span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center text-sm transition-colors"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div>
      </div>
    </Link>)}</section> : <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center"><p className="font-medium text-gray-700">Bu arama veya filtreye uygun ürün bulunamadı.</p><button type="button" onClick={reset} className="mt-3 min-h-11 rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white">Tüm Ürünleri Göster</button></div>}
  </>;
}
