type TechnologyProduct = { category: string; title: string; shortDesc: string };

export function isChargingCable(product: TechnologyProduct): boolean {
  const text = product.title;
  return product.category === "Teknolojik Ürünler" && /şarj[\s\S]*kablo|kablo[\s\S]*şarj|çoklu[\s\S]*kablo/i.test(text) && !/\bhub\b|8 fonksiyonlu|Type-C Çoğaltıcı/i.test(product.title);
}

export function isPromotionalSpeaker(product: TechnologyProduct): boolean {
  return product.category === "Teknolojik Ürünler" && /hoparlör|speaker/i.test(product.title);
}

export function isWirelessCharger(product: TechnologyProduct): boolean {
  return product.category === "Teknolojik Ürünler" && /wireless\s+şarj|kablosuz\s+şarj/i.test(product.title + " " + product.shortDesc);
}
