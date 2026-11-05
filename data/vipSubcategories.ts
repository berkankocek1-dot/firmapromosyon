type VipProduct = { category: string; title: string; shortDesc?: string };
function normalize(value: string): string {
  return value.toLocaleLowerCase("tr-TR").replace(/ı/g, "i").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
export function isCorporateGiftBox(product: VipProduct): boolean {
  if (product.category !== "VIP Ürünler") return false;
  return /(?:hediye|set)\s+kut(?:u|usu|ulari|ular)\b/.test(normalize(product.title));
}
export function isThermosGiftSet(product: VipProduct): boolean {
  if (product.category !== "VIP Ürünler" || isCorporateGiftBox(product)) return false;
  const text = normalize(product.title + " " + (product.shortDesc || ""));
  if (/termos(?:lu)?\s+(?:yok(?:tur)?|bulunm(?:az|uyor)|icerm(?:ez|iyor))\b|termos[^.;\n]{0,35}dahil\s+degil|termossuz/.test(text)) return false;
  return /termos/.test(text);
}
