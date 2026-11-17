"use client";

import { sortProductsByCode } from "@/data/productSorting";


type TeknolojiProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  longDesc?: string;
  price?: number;
};

const filters = ["Tümü", "Şarj Kabloları", "Type-C Çoklayıcı", "Hoparlör", "Wireless Şarj", "Telefon Standı", "Araç İçi", "LED Logolu"];

const verifiedFeatures: Record<string, string[]> = {"promosyon-kutulu-sarj-kablo-seti-kbl-350": ["Şarj Kabloları"], "promosyon-kutulu-sarj-kablo-seti-kbl-360": ["Şarj Kabloları"], "promosyon-kutulu-sarj-kablo-seti-kbl-370": ["Şarj Kabloları"], "promosyon-coklu-sarj-kablosu-eva-kutulu-kbl-375": ["Şarj Kabloları", "LED Logolu"], "promosyon-coklu-isikli-kablo-kbl-380": ["Şarj Kabloları", "LED Logolu"], "promosyon-coklu-sarj-kablosu-kbl-390": ["Şarj Kabloları"], "promosyon-8-fonksiyonlu-type-c-cogaltici-kbl-400": ["Type-C Çoklayıcı"], "promosyon-ios-micro-usb-type-c-led-isikli-kablo-kbl-420": ["Şarj Kabloları", "LED Logolu"], "promosyon-bluetooth-speaker-spk-435": ["Hoparlör"], "promosyon-bluetooth-hoparlor-spk-440": ["Hoparlör"], "promosyon-bluetooth-hoparlor-spk-445": ["Hoparlör"], "promosyon-bluetooth-speaker-spk-450": ["Hoparlör"], "promosyon-wireless-sarj-hoparlor-spk-460": ["Hoparlör", "Wireless Şarj"], "promosyon-wireless-sarj-hoparlor-spk-470": ["Hoparlör", "Wireless Şarj", "LED Logolu"], "promosyon-arac-ici-telefon-tutucu-tt-480-magsafe-wireless-sarjli": ["Wireless Şarj", "Araç İçi", "Telefon Standı"], "promosyon-arac-ici-telefon-tutucu-tt-490-manyetik-kompakt": ["Araç İçi", "Telefon Standı"], "promosyon-telefon-standi-tt-500-katlanabilir-masaustu": ["Telefon Standı"], "promosyon-wireless-sarj-istasyonu-tt-475": ["Wireless Şarj", "Telefon Standı"], "promosyon-wireless-sarj-istasyonu-tt-476-coklu-cihaz-standli": ["Wireless Şarj", "Telefon Standı", "LED Logolu"], "promosyon-wireless-sarj-cihazi-tt-477-standli-hizli-sarj": ["Wireless Şarj", "Hoparlör", "LED Logolu"], "promosyon-arac-ici-telefon-tutucu-tt-520-15w-magsafe-wireless": ["Wireless Şarj", "Araç İçi", "Telefon Standı"], "promosyon-ayakli-aynali-telefon-standi-tt-530-katlanabilir": ["Telefon Standı"], "promosyon-teknolojik-spk-100": ["Hoparlör"], "promosyon-teknolojik-spk-110": ["Hoparlör"], "promosyon-teknolojik-spk-180": ["Hoparlör", "Wireless Şarj"], "promosyon-teknolojik-tt-160": ["Wireless Şarj", "Telefon Standı", "LED Logolu"], "promosyon-teknolojik-tt-170": ["Wireless Şarj", "Telefon Standı", "LED Logolu"], "promosyon-teknolojik-tt-180": ["Wireless Şarj", "Telefon Standı"], "promosyon-teknolojik-tt-190": ["Telefon Standı"]};

function matchesFilter(product: TeknolojiProduct, filter: string) {
  if (filter === "Tümü") return true;
  return (verifiedFeatures[product.slug] || []).includes(filter);
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function TeknolojiProductGrid({products}: {products: TeknolojiProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-teknolojik-urunler-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} filters={filters} filterProduct={matchesFilter} filterTitle="Promosyon Teknolojik Ürünleri Filtreleyin" filterDescription="Şarj kablosu, Bluetooth hoparlör, wireless şarj ve telefon standı modellerini özelliklerine göre inceleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
