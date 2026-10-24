import { products } from "@/data/products";

// Remove a slug from this set to show the product in listings again.
const hiddenProductSlugs = new Set<string>([
  "promosyon-metal-kalem-mk-440",
  "promosyon-metal-kalem-mk-500",
  "promosyon-metal-kalem-mk-510",
  "promosyon-usb-bellek-ub-140",
  "promosyon-usb-bellek-ub-170",
  "promosyon-usb-bellek-ub-270",
  "promosyon-usb-bellek-ub-280",
  "promosyon-usb-bellek-ub-460",
  "promosyon-ahsap-metal-usb-bellek-ub-390",
  "promosyon-cift-uclu-metal-usb-bellek-ub-400",
  "promosyon-kalem-usb-bellek-ub-420",
  "promosyon-kapakli-usb-bellek-ub-430",
  "promosyon-ince-metal-usb-bellek-ub-440",
  "promosyon-metal-kalem-usb-bellek-ub-450",
  "promosyon-oval-govdeli-isikli-usb-bellek",
]);

export function isProductVisible(product: { slug: string }): boolean {
  return !hiddenProductSlugs.has(product.slug);
}

export const visibleProducts = products.filter(isProductVisible);