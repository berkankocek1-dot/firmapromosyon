"use client";

import { sortProductsByCode } from "@/data/productSorting";


type DefterProduct = {
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
  "Kalem Tutuculu",
  "Metal Detaylı",
  "Premium",
  "Büyük Boy",
  "Kareli",
  "Cep & Mini Boy",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: DefterProduct, filter: string) {
  if (filter === "Tümü") return true;

  const text = normalize(
    `${product.title} ${product.shortDesc} ${product.longDesc || ""}`
  );

  if (filter === "Kalem Tutuculu") {
    return (
      text.includes("kalem tutuculu") ||
      text.includes("kalem yuvalı") ||
      text.includes("kalemlikli")
    );
  }

  if (filter === "Metal Detaylı") {
    return (
      text.includes("metal plakalı") ||
      text.includes("metal detaylı") ||
      text.includes("metal tokalı") ||
      text.includes("manyetik kilitli")
    );
  }

  if (filter === "Premium") {
    return text.includes("premium");
  }

  if (filter === "Büyük Boy") {
    return (
      text.includes("büyük boy") ||
      text.includes("17x24") ||
      text.includes("16x24") ||
      text.includes("19,5x25")
    );
  }

  if (filter === "Kareli") {
    return text.includes("kareli");
  }

  if (filter === "Cep & Mini Boy") {
    return (
      text.includes("cep boy") ||
      text.includes("mini boy")
    );
  }

  return true;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function DefterProductGrid({products}: {products: DefterProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-defter-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Defter Modellerini Filtreleyin" filterDescription="Kalem tutuculu, metal detaylı, premium, büyük boy ve cep boy promosyon defterleri özelliklerine göre inceleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
