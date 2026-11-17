"use client";

import { sortProductsByCode } from "@/data/productSorting";


type PowerbankProduct = {
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
  "5.000 mAh",
  "10.000 mAh",
  "20.000 mAh",
  "MagSafe",
  "Wireless",
  "Hızlı Şarj",
  "Işıklı Logo",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll(".", "")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: PowerbankProduct, filter: string) {
  const text = normalize(`${product.title} ${product.shortDesc}`);

  if (filter === "Tümü") return true;

  if (filter === "5.000 mAh") {
    return text.includes("5000 mah");
  }

  if (filter === "10.000 mAh") {
    return text.includes("10000 mah");
  }

  if (filter === "20.000 mAh") {
    return text.includes("20000 mah");
  }

  if (filter === "MagSafe") {
    return text.includes("magsafe");
  }

  if (filter === "Wireless") {
    return text.includes("wireless") || text.includes("kablosuz");
  }

  if (filter === "Hızlı Şarj") {
    return text.includes("hızlı şarj");
  }

  if (filter === "Işıklı Logo") {
    return (
      text.includes("ışıklı logo") ||
      text.includes("ışıklı logolu")
    );
  }

  return true;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function PowerbankProductGrid({products}: {products: PowerbankProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-powerbank-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Powerbank Seçenekleri" filterDescription="İhtiyacınıza uygun kapasite, şarj teknolojisi ve logo uygulamasına göre promosyon powerbank modellerini filtreleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
