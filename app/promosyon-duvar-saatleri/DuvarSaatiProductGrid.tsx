"use client";

import { sortProductsByCode } from "@/data/productSorting";


type DuvarSaatiProduct = {
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
  "30 cm ve Altı",
  "35 cm",
  "40 cm ve Üzeri",
  "Özel Tasarım",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function getSize(text: string) {
  const match = text.match(/(\d+(?:[.,]\d+)?)\s*cm/i);

  if (!match) return null;

  return Number(match[1].replace(",", "."));
}

function matchesFilter(product: DuvarSaatiProduct, filter: string) {
  const text = normalize(`${product.title} ${product.shortDesc}`);
  const size = getSize(text);

  if (filter === "Tümü") return true;

  if (filter === "30 cm ve Altı") {
    return size !== null && size <= 30;
  }

  if (filter === "35 cm") {
    return size === 35;
  }

  if (filter === "40 cm ve Üzeri") {
    return size !== null && size >= 40;
  }


  if (filter === "Özel Tasarım") {
    return (
      text.includes("kare") ||
      text.includes("dikdörtgen") ||
      text.includes("ay yıldız") ||
      text.includes("yıldız figür")
    );
  }

  return true;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function DuvarSaatiProductGrid({products}: {products: DuvarSaatiProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-duvar-saatleri-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp'tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Duvar Saati Seçenekleri" filterDescription="Logo baskılı promosyon duvar saati modellerini ölçü, malzeme ve tasarım özelliklerine göre filtreleyerek firmanıza uygun modeli daha kolay bulabilirsiniz." categoryLabel="" showPrices={true} />;
}
