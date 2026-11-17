"use client";

import { sortProductsByCode } from "@/data/productSorting";


type OrganizerProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  longDesc?: string;
  price?: number;
};

const filters = ["Tümü", "Hesap Makineli", "Metal Tokalı", "336 Sayfa", "352 Sayfa"];

const verifiedFeatures: Record<string, string[]> = {
  "ORG-100": ["Metal Tokalı", "352 Sayfa"],
  "ORG-110": ["Metal Tokalı", "352 Sayfa"],
  "ORG-120": ["Metal Tokalı", "352 Sayfa"],
  "ORG-130": ["Metal Tokalı", "352 Sayfa"],
  "ORG-140": ["Hesap Makineli", "336 Sayfa"],
  "ORG-150": ["Hesap Makineli", "Metal Tokalı", "352 Sayfa"],
  "ORG-160": ["Hesap Makineli", "336 Sayfa"],
  "ORG-170": ["Hesap Makineli", "352 Sayfa"],
  "ORG-180": ["Hesap Makineli", "Metal Tokalı", "352 Sayfa"],
  "ORG-190": ["Hesap Makineli", "Metal Tokalı", "352 Sayfa"],
};

function matchesFilter(product: OrganizerProduct, filter: string) {
  if (filter === "Tümü") return true;
  const code = product.slug.match(/(?:^|-)org-(\d+)(?:-|$)/i);
  return code ? (verifiedFeatures[`ORG-${code[1]}`] || []).includes(filter) : false;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function OrganizerProductGrid({products}: {products: OrganizerProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-organizerler-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Organizer Modellerini Filtreleyin" filterDescription="Organizer modellerini hesap makinesi, metal toka ve sayfa sayısına göre inceleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
