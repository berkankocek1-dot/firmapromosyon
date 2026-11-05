type PowerbankProduct = {category: string; title: string; shortDesc: string};

export function isMagSafePowerbank(product: PowerbankProduct): boolean {
  return product.category === "Powerbank" && /magsafe/i.test(`${product.title} ${product.shortDesc}`);
}

export function isLightUpPowerbank(product: PowerbankProduct): boolean {
  const text = `${product.title} ${product.shortDesc}`.toLocaleLowerCase("tr-TR");
  return product.category === "Powerbank" && (text.includes("ışıklı") || /light[\s-]*up/.test(text));
}

export function isBuiltInCablePowerbank(product: PowerbankProduct): boolean {
  return product.category === "Powerbank" && /dahili\s+(?:şarj\s+)?kablo/i.test(`${product.title} ${product.shortDesc}`);
}

export function is20000mAhPowerbank(product: PowerbankProduct): boolean {
  return product.category === "Powerbank" && /\b20[.\s]*000\s*mAh\b/i.test(product.title);
}

export function isOrganizerPowerbank(product: PowerbankProduct): boolean {
  return product.category === "Powerbank" && /organizer/i.test(product.title + " " + product.shortDesc);
}
