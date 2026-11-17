"use client";

import { sortProductsByCode } from "@/data/productSorting";


type VipProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  longDesc?: string;
  price?: number;
};

const filters = ["Tümü", "Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler", "Anahtarlıklı", "MagSafe İçeren", "Set Kutuları"];

const verifiedFeatures: Record<string, string[]> = {"VIP-100": ["Defter & Kalem", "Teknoloji Setleri", "Anahtarlıklı"], "VIP-110": ["Defter & Kalem", "Termoslu Setler", "Anahtarlıklı"], "VIP-120": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-125": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler"], "VIP-130": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler"], "VIP-140": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler", "Anahtarlıklı", "MagSafe İçeren"], "VIP-150": ["Teknoloji Setleri", "Anahtarlıklı"], "VIP-160": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler"], "VIP-170": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler"], "VIP-180": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-190": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-200": ["Defter & Kalem", "Teknoloji Setleri", "Anahtarlıklı"], "VIP-210": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-220": ["Defter & Kalem", "Anahtarlıklı"], "VIP-230": ["Defter & Kalem", "Teknoloji Setleri", "Anahtarlıklı"], "VIP-240": ["Teknoloji Setleri"], "VIP-250": ["Teknoloji Setleri", "Termoslu Setler", "MagSafe İçeren"], "VIP-260": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-270": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-280": ["Defter & Kalem", "Anahtarlıklı"], "VIP-290": ["Defter & Kalem", "Anahtarlıklı"], "VIP-300": ["Defter & Kalem", "Teknoloji Setleri", "MagSafe İçeren"], "VIP-310": ["Defter & Kalem", "Anahtarlıklı"], "VIP-320": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-330": ["Defter & Kalem", "Teknoloji Setleri", "Anahtarlıklı"], "VIP-340": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-350": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-355": ["Defter & Kalem", "Anahtarlıklı"], "VIP-360": ["Defter & Kalem", "Teknoloji Setleri"], "VIP-365": ["Defter & Kalem", "Anahtarlıklı"], "VIP-370": ["Defter & Kalem", "Termoslu Setler", "Anahtarlıklı"], "VIP-380": ["Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler", "MagSafe İçeren"], "VIP-390": ["Defter & Kalem"], "VIP-400": ["Teknoloji Setleri", "Termoslu Setler", "MagSafe İçeren"], "VIP-410": ["Defter & Kalem"], "VIP-420": ["Defter & Kalem"], "VIP-430": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-440": ["Teknoloji Setleri", "Termoslu Setler"], "VIP-460": ["Defter & Kalem"], "VIP-470": ["Set Kutuları"], "VIP-480": ["Set Kutuları"], "VIP-485": ["Set Kutuları"], "VIP-490": ["Set Kutuları"], "VIP-500": ["Set Kutuları"], "VIP-510": ["Set Kutuları"], "VIP-520": ["Set Kutuları"]};

function matchesFilter(product: VipProduct, filter: string) {
  if (filter === "Tümü") return true;
  const code = product.slug.match(/(?:^|-)vip-(\d+)(?:-|$)/i);
  return code ? (verifiedFeatures[`VIP-${code[1]}`] || []).includes(filter) : false;
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function VipProductGrid({products}: {products: VipProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-vip-urunler-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon VIP Ürünleri Filtreleyin" filterDescription="Defterli, teknolojik, termoslu ve premium kurumsal VIP hediye setlerini içeriklerine göre inceleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
