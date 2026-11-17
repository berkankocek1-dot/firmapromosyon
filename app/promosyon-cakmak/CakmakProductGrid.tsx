"use client";

import { sortProductsByCode } from "@/data/productSorting";


type CakmakProduct = {
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
  "Taşlı",
  "Manyetolu",
  "Turbo / Rüzgar",
  "Doldurulabilir",
  "Mini Boy",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: CakmakProduct, filter: string) {
  if (filter === "Tümü") return true;

  const text = normalize(
    `${product.title} ${product.shortDesc} ${product.longDesc || ""}`
  );

  if (filter === "Taşlı") {
    return text.includes("taşlı");
  }

  if (filter === "Manyetolu") {
    return text.includes("manyetolu");
  }

  if (filter === "Turbo / Rüzgar") {
    return text.includes("turbo") || text.includes("rüzgar");
  }

  if (filter === "Doldurulabilir") {
    return text.includes("doldurulabilir") || text.includes("siboplu");
  }

  if (filter === "Mini Boy") {
    return text.includes("mini boy") || text.includes("mini turbo");
  }

  return true;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function CakmakProductGrid({products}: {products: CakmakProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-cakmak-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Çakmak Modellerini Filtreleyin" filterDescription="Taşlı, manyetolu, turbo ve doldurulabilir promosyon çakmak modellerini özelliklerine göre inceleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
