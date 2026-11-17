"use client";

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


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function TermosProductGrid({products}: {products: TermosProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-termos-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp'tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Termos Seçenekleri" filterDescription="Logo baskılı promosyon termos modellerini kapasite ve ürün özelliklerine göre filtreleyerek ihtiyacınıza uygun modeli daha kolay bulabilirsiniz." categoryLabel="" showPrices={true} />;
}
