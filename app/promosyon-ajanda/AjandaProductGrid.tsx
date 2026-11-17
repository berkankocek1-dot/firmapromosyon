"use client";

import { sortProductsByCode } from "@/data/productSorting";


type AjandaProduct = {
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
  "17x24",
  "16 cm Serisi",
  "Termo Deri",
  "Termo PU",
  "Spiralli",
  "Sert Kapak",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: AjandaProduct, filter: string) {
  if (filter === "Tümü") return true;

  const text = normalize(
    `${product.title} ${product.shortDesc} ${product.longDesc || ""}`
  );

  if (filter === "17x24") {
    return (
      text.includes("17 x 24") ||
      text.includes("17x24")
    );
  }

  if (filter === "16 cm Serisi") {
    return (
      text.includes("16 x 24") ||
      text.includes("16x24") ||
      text.includes("16.5 x 22") ||
      text.includes("16,5 x 22")
    );
  }

  if (filter === "Termo Deri") {
    return text.includes("termo deri");
  }

  if (filter === "Termo PU") {
    return text.includes("termo pu");
  }

  if (filter === "Spiralli") {
    return text.includes("spiral");
  }

  if (filter === "Sert Kapak") {
    return text.includes("sert kapak");
  }

  return true;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function AjandaProductGrid({products}: {products: AjandaProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-ajanda-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Ajanda Modellerini Filtreleyin" filterDescription="Termo deri, termo PU, spiralli ve farklı ölçülerdeki promosyon ajanda modellerini özelliklerine göre inceleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
