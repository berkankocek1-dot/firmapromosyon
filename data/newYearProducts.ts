import { products, type Product } from "@/data/products";

// Selection checked against the supplier's visible New Year collection on 2026-11-16.
// Prices, images and descriptions always come from the current local product data.
// UB-270 and UB-280 are intentionally included here only; global visibility is unchanged.
export const newYearGroups = [
  {
    "id": "hediye-setleri",
    "category": "VIP Ürünler",
    "title": "Kurumsal Hediye Setleri",
    "href": "/promosyon-vip-urunler",
    "description": "Set içeriği, kutu ve logo alanına göre kurumsal hediye seçeneklerini karşılaştırın. Her modelin paket kapsamı ilgili ürün üzerinden kontrol edilir.",
    "codes": [
      "VIP-100",
      "VIP-190",
      "VIP-390",
      "VIP-110",
      "VIP-270",
      "VIP-490",
      "VIP-310",
      "VIP-150",
      "VIP-230",
      "VIP-200",
      "VIP-520",
      "VIP-170",
      "VIP-480",
      "VIP-180",
      "VIP-320",
      "VIP-440",
      "VIP-430",
      "VIP-510",
      "VIP-210",
      "VIP-410",
      "VIP-500",
      "VIP-470",
      "VIP-160",
      "VIP-120",
      "VIP-340",
      "VIP-125",
      "VIP-420",
      "VIP-350",
      "VIP-380",
      "VIP-220",
      "VIP-130",
      "VIP-250",
      "VIP-330",
      "VIP-260",
      "VIP-360",
      "VIP-140",
      "VIP-280",
      "VIP-240",
      "VIP-370",
      "VIP-300",
      "VIP-400",
      "VIP-485",
      "VIP-365",
      "VIP-355",
      "VIP-290",
      "VIP-460"
    ]
  },
  {
    "id": "kalem-setleri",
    "category": "Kalem Setleri",
    "title": "Kalem Setleri",
    "href": "/promosyon-kalem-setleri",
    "description": "Kutulu kalem seçeneklerini kalem türü, sunum ve logo uygulamasına göre inceleyin.",
    "codes": [
      "KS-340",
      "KS-200",
      "KS-230",
      "KS-220",
      "KS-330",
      "KS-320",
      "KS-210",
      "KS-355",
      "KS-120",
      "KS-350",
      "KS-310",
      "KS-130",
      "KS-100",
      "KS-110",
      "KS-170",
      "KS-150",
      "KS-180",
      "KS-160",
      "KS-190",
      "KS-270",
      "KS-240",
      "KS-140",
      "KS-260",
      "KS-250",
      "KS-360",
      "KS-280",
      "KS-300",
      "KS-290"
    ]
  },
  {
    "id": "ajandalar",
    "category": "Ajanda",
    "title": "Ajanda Modelleri",
    "href": "/promosyon-ajanda",
    "description": "Yeni yıl planlaması için ajanda seçeneklerini karşılaştırın. 2027 iç sayfa ve güncel stok bilgisi sipariş öncesinde teyit edilir.",
    "codes": [
      "AJ-100",
      "AJ-120",
      "AJ-220",
      "AJ-130",
      "AJ-190",
      "AJ-160",
      "AJ-140",
      "AJ-250",
      "AJ-230",
      "AJ-240",
      "AJ-320",
      "AJ-200",
      "AJ-210",
      "AJ-290",
      "AJ-180",
      "AJ-280",
      "AJ-170",
      "AJ-150",
      "AJ-310",
      "AJ-300",
      "AJ-110",
      "AJ-260",
      "AJ-330",
      "AJ-340",
      "AJ-270",
      "AJ-115"
    ]
  },
  {
    "id": "masa-sumenleri",
    "category": "Masa Sümeni",
    "title": "Masa Sümenleri",
    "href": "/promosyon-masa-sumeni",
    "description": "Masa düzeni için sümen modellerini ölçü, malzeme ve içeriklerine göre karşılaştırın.",
    "codes": [
      "MSN-100",
      "MSN-120",
      "MSN-110",
      "KMS-130",
      "KMS-140",
      "KMS-150"
    ]
  },
  {
    "id": "usb-setleri",
    "category": "USB Bellek",
    "title": "USB Bellek Setleri",
    "href": "/promosyon-usb-bellek",
    "description": "Kutulu USB bellek seçeneklerini inceleyin. Kapasite, set içeriği, logo uygulaması ve teslim kapsamı teklif aşamasında netleştirilir.",
    "codes": [
      "UB-270",
      "UB-280"
    ]
  }
] as const;

function productCode(product: Product): string | undefined {
  const text = `${product.title} ${product.slug}`.toUpperCase();
  return text.match(/\b(?:VIP|KS|AJ|MSN|KMS|UB)-\d{3}\b/)?.[0];
}

export function getNewYearProducts(groupId: string): Product[] {
  const group = newYearGroups.find((item) => item.id === groupId);
  if (!group) return [];
  const byCode = new Map(products.filter((p) => p.category === group.category).map((p) => [productCode(p), p]));
  return group.codes.map((code) => byCode.get(code)).filter((p): p is Product => p !== undefined);
}
