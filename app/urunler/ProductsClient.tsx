"use client";

import ProductSearchBox from "../components/ProductSearchBox";
import { matchesProductSearch } from "../components/productSearch";
import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { sortProductsByCode } from "@/data/productSorting";
import { categorySubfilters } from "./productFilters";
import { getProductPriceNote } from "./productPriceNotes";

type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
  matchedSubfilters: string[];
  price?: number;
};

type SortOrder = "default" | "price-asc" | "price-desc";
const popularCategories = [
  "Kalem", "Promosyon Şapka", "Tarihsiz Defter", "Termos", "USB Bellek",
  "Powerbank", "Çakmak", "Anahtarlık", "Kupa", "Promosyon Tişört", "Ajanda",
  "Kalem Setleri", "Teknolojik Ürünler", "Ham Bez & Tela Çanta",
];

function SearchQuerySync({ onQuery }: { onQuery: (value: string) => void }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  useEffect(() => { onQuery(query); }, [query, onQuery]);
  return null;
}

function validPrice(product: Product) {
  return typeof product.price === "number" && Number.isFinite(product.price) && product.price > 0 ? product.price : null;
}

function applyPriceSort(products: Product[], order: SortOrder) {
  if (order === "default") return products;
  return [...products].sort((a, b) => {
    const x = validPrice(a), y = validPrice(b);
    if (x === null) return y === null ? 0 : 1;
    if (y === null) return -1;
    return order === "price-asc" ? x - y : y - x;
  });
}

export default function ProductsClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [activeSubfilter, setActiveSubfilter] = useState("Tümü");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category).filter(category => category.trim()))).sort((a, b) => a.localeCompare(b, "tr")), [products]);
  const visiblePopularCategories = useMemo(() => popularCategories.filter(category => categories.includes(category)), [categories]);
  const availableSubfilters = categorySubfilters[activeCategory] || [];
  const filteredProducts = useMemo(() => {
    const matched = products.filter(product => {
      if (activeCategory !== "Tümü" && product.category !== activeCategory) return false;
      if (activeSubfilter !== "Tümü" && !product.matchedSubfilters.includes(activeSubfilter)) return false;
      return !search || matchesProductSearch(product, search);
    });
    return applyPriceSort(sortProductsByCode(matched), sortOrder);
  }, [products, search, activeCategory, activeSubfilter, sortOrder]);

  function changeCategory(category: string) {setActiveCategory(category); setActiveSubfilter("Tümü");}
  function clearFilters() {setSearch(""); setActiveCategory("Tümü"); setActiveSubfilter("Tümü"); setSortOrder("default");}
  const chipClass = (selected: boolean) => `min-h-11 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${selected ? "border-black bg-black text-white" : "border-gray-300 bg-white text-gray-700 hover:border-black hover:text-black"}`;

  return <>
    <Suspense fallback={null}><SearchQuerySync onQuery={setSearch} /></Suspense>
    <section aria-label="Ürün arama ve filtreler" className="mb-4 rounded-2xl border border-gray-200 bg-gray-50 p-3 md:p-4">
      <div className="grid items-end gap-3 sm:grid-cols-[minmax(0,1fr)_220px_auto]">
        <div className="min-w-0"><label htmlFor="product-search" className="mb-2 block text-xs font-semibold text-gray-700">Ürün adı veya stok kodu ile arayın</label><ProductSearchBox id="product-search" products={products} value={search} onChange={setSearch} theme="light" placeholder="Örnek: MK-330, metal kalem, çakmak" /></div>
        <label className="block min-w-0"><span className="mb-2 block text-xs font-semibold text-gray-700">Sıralama</span><select value={sortOrder} onChange={event => setSortOrder(event.target.value as SortOrder)} className="min-h-12 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-base text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"><option value="default">Varsayılan sıra</option><option value="price-asc">Fiyat: düşükten yükseğe</option><option value="price-desc">Fiyat: yüksekten düşüğe</option></select></label>
        <button type="button" onClick={clearFilters} className="min-h-12 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:border-black hover:bg-gray-100">Temizle</button>
      </div>
      <div className="mt-4 border-t border-gray-200 pt-4">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-lg font-bold text-black">Kategoriye Göre Filtrele</h2><p className="mt-1 text-sm text-gray-600">Aradığınız ürün grubunu seçerek sonuçları daraltın.</p></div><button type="button" aria-expanded={showAllCategories} aria-controls="diger-urun-kategorileri" onClick={() => setShowAllCategories(current => !current)} className="min-h-11 text-sm font-semibold text-gray-700 underline underline-offset-4 hover:text-black">{showAllCategories ? "Daha Az Kategori Göster" : "Diğer Kategoriler"}</button></div>
        <div className="mt-3 flex flex-wrap gap-2"><button type="button" aria-pressed={activeCategory === "Tümü"} onClick={() => changeCategory("Tümü")} className={chipClass(activeCategory === "Tümü")}>Tümü</button>{visiblePopularCategories.map(category => <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => changeCategory(category)} className={chipClass(activeCategory === category)}>{category}</button>)}</div>
        {showAllCategories && <div id="diger-urun-kategorileri" className="mt-4 rounded-xl border border-gray-200 bg-white p-4"><div className="mb-3 flex flex-wrap items-center justify-between gap-2"><h3 className="font-bold text-black">Tüm Kategoriler</h3><span className="text-xs text-gray-500">{categories.length} kategori</span></div><div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">{categories.map(category => <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => {changeCategory(category); setShowAllCategories(false);}} className={`${chipClass(activeCategory === category)} min-w-0 break-words text-left`}>{category}</button>)}</div></div>}
      </div>
      {availableSubfilters.length > 0 && <div className="mt-4 border-t border-gray-200 pt-4"><p className="mb-3 text-sm font-semibold text-black">{activeCategory} türünü seçin</p><div className="flex flex-wrap gap-2">{availableSubfilters.map(filter => <button key={filter} type="button" aria-pressed={activeSubfilter === filter} onClick={() => setActiveSubfilter(filter)} className={chipClass(activeSubfilter === filter)}>{filter}</button>)}</div></div>}
      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-3">{activeCategory !== "Tümü" && <button type="button" aria-label={`${activeCategory} kategori filtresini kaldır`} onClick={() => changeCategory("Tümü")} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-black">{activeCategory}<span aria-hidden="true">×</span></button>}<p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-gray-600">{activeCategory === "Tümü" ? `${filteredProducts.length} ürün gösteriliyor` : `${activeCategory} kategorisinde ${filteredProducts.length} ürün gösteriliyor`}</p></div>
    </section>
    {filteredProducts.length === 0 ? <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center"><h2 className="text-lg font-bold text-black">Ürün bulunamadı</h2><p className="mt-2 text-sm text-gray-600">Arama kelimenizi veya seçili kategoriyi değiştirerek tekrar deneyin.</p><button type="button" onClick={clearFilters} className="mt-4 min-h-11 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white">Filtreleri Temizle</button></div> : <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">{filteredProducts.map((product, index) => <Link key={product.id} href={`/urunler/${product.slug}`} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
      <div className="relative aspect-square w-full overflow-hidden bg-white"><Image src={product.image} alt={product.title} fill unoptimized loading={index < 4 ? "eager" : "lazy"} className="object-contain p-3 sm:p-4" sizes="(max-width: 767px) 46vw, (max-width: 1279px) 31vw, 295px" /></div>
      <div className="flex flex-1 flex-col border-t border-gray-100 bg-gray-50 p-3 sm:p-4"><p className="text-[10px] font-medium uppercase tracking-wide text-gray-500 sm:text-xs">{product.category}</p><h2 className="mt-1 min-h-[4.125rem] line-clamp-3 break-words text-sm font-bold leading-[1.375rem] text-black sm:min-h-[2.75rem] sm:line-clamp-2">{product.title}</h2><p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600 sm:text-sm">{product.shortDesc}</p>
        <div className="mt-auto pt-3">{validPrice(product) !== null ? <><p className="text-base font-bold text-gray-900">{product.price!.toLocaleString("tr-TR", {minimumFractionDigits:2,maximumFractionDigits:2})} TL + KDV</p><p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs">{getProductPriceNote(product.slug)}</p></> : <p className="text-sm font-semibold text-gray-900">Güncel fiyat için teklif alın.</p>}</div>
        <div className="mt-4 flex items-center justify-between gap-2"><span className="text-xs font-semibold text-gray-700">Ürünü İncele</span><span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center text-sm transition-colors"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div>
      </div>
    </Link>)}</div>}
  </>;
}
