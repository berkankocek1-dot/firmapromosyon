type Lighter = { category: string; title: string };
export function isFlintLighter(product: Lighter): boolean {
  return product.category === "Çakmak" && /(?:^|\s)taşlı(?:\s|$)/iu.test(product.title);
}

export function isMagnetoLighter(product: Lighter): boolean {
  return product.category === "Çakmak" && /(?:^|\s)manyetolu(?:\s|$)/iu.test(product.title);
}

export function isTurboLighter(product: Lighter): boolean {
  return product.category === "Çakmak" && /(?:^|\s)(?:turbo|rüzgar|rüzgâr)(?:\s|$)/iu.test(product.title);
}

export function isRefillableLighter(product: Lighter & { shortDesc?: string }): boolean {
  const text = `${product.title} ${product.shortDesc || ""}`;
  return product.category === "Çakmak" && /(?:^|\s)(?:doldurulabilir|siboplu)(?:\s|[.,;:]|$)/iu.test(text);
}

export function isMiniLighter(product: Lighter & { shortDesc?: string }): boolean {
  const text = `${product.title} ${product.shortDesc || ""}`;
  return product.category === "Çakmak" && /(?:^|\s)mini\s+(?:boy|turbo)(?:\s|[.,;:]|$)/iu.test(text);
}
