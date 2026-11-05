type ManufacturingProduct = { category: string; title: string; shortDesc: string };

export function isMousePad(product: ManufacturingProduct): boolean {
  return product.category === "İmalat Ürünler" && /mouse\s*pad/i.test(product.title);
}
