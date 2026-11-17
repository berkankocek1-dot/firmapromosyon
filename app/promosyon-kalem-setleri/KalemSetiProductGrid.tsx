"use client";

import { sortProductsByCode } from "@/data/productSorting";


type KalemSetiProduct = {
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
  "Lazer Baskı",
  "Kutu Serigraf Baskısı",
  "Dolma Kalem",
  "Kalem & Anahtarlık",
  "Renk Seçenekli",
  "Kalem Kutusu"
];



function matchesFilter(product: KalemSetiProduct, filter: string) {
  if (filter === "Tümü") return true;
  const code = product.slug.match(/(?:^|-)ks-(\d+)(?:-|$)/i)?.[1];
  if (!code) return false;

  if (filter === "Lazer Baskı") {
    return ["100","110","120","130","140","170","240","250"].includes(code);
  }
  if (filter === "Kutu Serigraf Baskısı") {
    return ["100","110","120","130","140","170","240"].includes(code);
  }
  if (filter === "Dolma Kalem") return ["240","250"].includes(code);
  if (filter === "Kalem & Anahtarlık") return ["200", "210", "220", "230"].includes(code);
  if (filter === "Renk Seçenekli") {
    return ["100","110","140","150","160","170","200","210",
            "310","320","330","340"].includes(code);
  }
  if (filter === "Kalem Kutusu") return ["355", "360"].includes(code);
  return false;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function KalemSetiProductGrid({products}: {products: KalemSetiProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-kalem-setleri-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Kalem Setlerini Filtreleyin" filterDescription="Dolma kalem, anahtarlıklı set, kutu baskısı ve renk seçeneklerine göre modelleri inceleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
