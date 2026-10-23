import { products } from "@/data/products";

// Remove a slug from this set to show the product in listings again.
const hiddenProductSlugs = new Set<string>([
  "promosyon-metal-kalem-mk-420",
  "promosyon-metal-kalem-mk-440",
  "promosyon-metal-kalem-mk-450",
  "promosyon-metal-kalem-mk-460",
  "promosyon-metal-kalem-mk-470",
  "promosyon-metal-kalem-mk-500",
  "promosyon-metal-kalem-mk-510",
]);

export function isProductVisible(product: { slug: string }): boolean {
  return !hiddenProductSlugs.has(product.slug);
}

export const visibleProducts = products.filter(isProductVisible);