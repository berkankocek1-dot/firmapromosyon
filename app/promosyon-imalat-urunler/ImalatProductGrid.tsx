"use client";

import { sortProductsByCode } from "@/data/productSorting";


type ImalatProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  price?: number;
};

const priceNotes: Record<string, string> = {"promosyon-oto-kokusu-ok-750": "Ofset baskı liste fiyatına dahildir. Minimum sipariş 1.000 adettir.", "promosyon-kapak-acacak-ac-100": "UV baskı uygulaması için tasarıma göre teklif hazırlanır.", "promosyon-uzun-acacak-ac-110": "UV baskı uygulaması için tasarıma göre teklif hazırlanır.", "promosyon-bardak-altligi-ba-650": "Listelenen fiyat 1.000 adet sipariş esasına aittir; seçilen adette baskı kapsamı nihai teklifte belirtilir.", "promosyon-balon-bl-600": "Çubuk fiyata dahil değildir; istenirse ayrıca hesaplanır. Tek renk serigrafi baskı için teklif hazırlanır.", "promosyon-frizbi-frz-160": "Tek renk için serigrafi, renkli tasarım için ofset baskı uygulanır.", "promosyon-mouse-pad-mp-600": "Görülen fiyat 1.000 adet için baskı dahildir. 500 adet ve diğer sipariş miktarları için ayrıca teklif alınır.", "promosyon-bilek-destekli-mouse-pad-mp-650": "Görülen fiyat 1.000 adet için baskı dahildir. 500 adet ve diğer sipariş miktarları için ayrıca teklif alınır.", "promosyon-oto-kesesi-oks-170": "Logo yöntemi, uygulama alanı ve sipariş ayrıntıları teklif aşamasında belirlenir.", "promosyon-para-tabagi-pt-100": "Logo uygulama yöntemi ve alanı tasarım çalışmasında belirlenir.", "promosyon-kare-para-tabagi-pt-110": "Logo uygulama yöntemi ve alanı tasarım çalışmasında belirlenir.", "promosyon-kalemlik-pu-100": "Logo tasarımı 5 x 8 cm reklam alanına göre hazırlanır; baskı tekniği teklifte belirlenir.", "promosyon-seffaf-kalemlik-pu-110": "Logo tasarımı 5 x 8 cm reklam alanına göre hazırlanır; baskı tekniği teklifte belirlenir.", "promosyon-yonca-kalemlik-pu-130": "3,5 x 3,5 cm reklam alanında tek renk tasarım planlanır.", "promosyon-seffaf-kup-kagitlik-pu-140": "Kağıt fiyata dahil değildir. Özel renk ve üretim adedi talebi için teklif hazırlanır.", "promosyon-kup-kagitlik-pu-150": "Kağıt fiyata dahil değildir. Özel renk ve üretim adedi talebi için teklif hazırlanır.", "promosyon-semsiye-sm-100": "Logo uygulama yöntemi ve alanı tasarım çalışmasında belirlenir.", "promosyon-isikli-semsiye-sm-150": "Serigrafi / tampon ve DTF baskı seçenekleri bulunur. Logo konumu ve kapsamı teklifte belirlenir."};

const filters = [
  "Tümü",
  "Açacak",
  "Mouse Pad",
  "Masaüstü",
  "Şemsiye",
  "Oto Ürünleri",
  "Diğer",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+/g, " ")
    .trim();
}

function getGroup(product: ImalatProduct) {
  const text = normalize(`${product.title} ${product.shortDesc}`);

  if (text.includes("açacak")) {
    return "Açacak";
  }

  if (text.includes("mouse pad")) {
    return "Mouse Pad";
  }

  if (
    text.includes("para tabağı") ||
    text.includes("kalemlik") ||
    text.includes("kağıtlık")
  ) {
    return "Masaüstü";
  }

  if (text.includes("şemsiye")) {
    return "Şemsiye";
  }

  if (
    text.includes("oto kokusu") ||
    text.includes("oto kesesi")
  ) {
    return "Oto Ürünleri";
  }

  return "Diğer";
}


import FpCategoryCatalog from "../_components/FpCategoryCatalog";
export default function ImalatProductGrid({products}: {products: ImalatProduct[]}) {
 return <FpCategoryCatalog anchorId="promosyon-imalat-urunler-modelleri" products={sortProductsByCode(products).map(p => ({...p, priceNote:(priceNotes[p.slug] || "Baskı ve sipariş ayrıntıları için teklif alın.")}))} filters={filters} filterProduct={(p, f) => getGroup(p) === f} filterTitle="Promosyon İmalat Ürünlerini Filtreleyin" filterDescription="Özel üretim promosyon ürünlerini ürün türüne göre filtreleyerek ihtiyacınıza uygun modelleri daha kolay inceleyebilirsiniz." categoryLabel="" showPrices={true} />;
}
