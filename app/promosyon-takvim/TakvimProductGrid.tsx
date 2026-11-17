"use client";
type Card = {id:string;slug:string;title:string;image:string;shortDesc:string;price?:number};
const filters = ["Tümü", "Masa Takvimi", "Gemici Takvimi", "Jumbo", "Sıvama", "Taslama"] as const;

import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function TakvimProductGrid({products}: {products: Card[]}) {
 return <FpCategoryCatalog anchorId="takvim-modelleri" products={products.map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={(p, filter) => filter === "Tümü" || (filter === "Masa Takvimi" ? p.slug.includes("masa-takvimi") : filter === "Gemici Takvimi" ? p.slug.includes("gemici-takvimi") : p.title.toLocaleLowerCase("tr-TR").includes(filter.toLocaleLowerCase("tr-TR")))} filterTitle="Takvim Modellerini Filtreleyin" filterDescription="" categoryLabel="Takvimler" showPrices={true} />;
}
