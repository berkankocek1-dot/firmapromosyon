"use client";

import { sortProductsByCode } from "@/data/productSorting";


type MataraProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  price?: number;
};

const filters = ["Tümü", "Cam Matara", "Plastik Matara", "500 ml", "750 ml", "800 ml", "1500 ml"];

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

function matchesFilter(product: MataraProduct, filter: string) {
  if (filter === "Tümü") return true;
  const title = normalize(product.title);
  if (filter === "Cam Matara") return /\bcam\b/.test(title);
  if (filter === "Plastik Matara") return /emzikli|detoks|plastik|\bpc\b/.test(title);
  return getCapacity(title) === getCapacity(filter);
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function MataraProductGrid({products}: {products: MataraProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-matara-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp'tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Matara Seçenekleri" filterDescription="Logo baskılı cam ve plastik matara modellerini kapasite ve ürün özelliklerine göre filtreleyerek ihtiyacınıza uygun modeli daha kolay bulabilirsiniz." categoryLabel="" showPrices={true} />;
}
