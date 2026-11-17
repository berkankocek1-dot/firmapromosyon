"use client";

import { sortProductsByCode } from "@/data/productSorting";


type UsbProduct = {
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
  "Metal",
  "Ahşap",
  "Deri",
  "Kart USB",
  "Özel Tasarım",
  "USB 3.0",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: UsbProduct, filter: string) {
  const text = normalize(`${product.title} ${product.shortDesc}`);

  if (filter === "Tümü") return true;

  if (filter === "Metal") {
    return text.includes("metal");
  }

  if (filter === "Ahşap") {
    return text.includes("ahşap");
  }

  if (filter === "Deri") {
    return text.includes("deri");
  }

  if (filter === "Kart USB") {
    return (
      text.includes("kart usb") ||
      text.includes("kredi kartı")
    );
  }

  if (filter === "Özel Tasarım") {
    return (
      text.includes("kristal") ||
      text.includes("anahtar usb") ||
      text.includes("ışıklı") ||
      text.includes("led") ||
      text.includes("kalem usb") ||
      text.includes("karabinalı")
    );
  }

  if (filter === "USB 3.0") {
    return text.includes("usb 3.0");
  }

  return true;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function UsbProductGrid({products}: {products: UsbProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-usb-bellek-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:undefined}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon USB Bellek Seçenekleri" filterDescription="Logo baskılı promosyon USB bellek modellerini malzeme, tasarım ve bağlantı özelliklerine göre filtreleyerek firmanıza uygun modeli daha kolay bulabilirsiniz." categoryLabel="" showPrices={true} />;
}
