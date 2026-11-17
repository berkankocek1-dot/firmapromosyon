"use client";

import { sortProductsByCode } from "@/data/productSorting";


type KupaProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
};

const filters = [
  "Tümü",
  "Kupa",
  "Fincan",
];

const verifiedTypes: Record<string, string> = {"promosyon-porselen-kupa-330ml-pk-100": "Kupa", "promosyon-porselen-kupa-280ml-pk-110": "Kupa", "promosyon-porselen-kupa-280ml-pk-120": "Kupa", "promosyon-6li-kahve-fincani-65ml-kvf-100": "Fincan", "promosyon-seramik-kupa-330ml-sk-105": "Kupa"};

function matchesFilter(product: KupaProduct, filter: string) {
  return filter === "Tümü" || verifiedTypes[product.slug] === filter;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function KupaProductGrid({products}: {products: KupaProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-kupa-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:undefined}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Kupa ve Fincan Seçenekleri" filterDescription="Kurumsal kullanım, ofis, kafe ve etkinlik ihtiyaçlarına uygun promosyon kupa ve fincan modellerini ürün tipine göre filtreleyebilirsiniz." categoryLabel="" showPrices={false} />;
}
