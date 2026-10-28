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
  "promosyon-powerbank-organizer-pb-390-8000mah-isikli-logolu",
  "promosyon-wireless-stand-set-pb-400-15w-hizli-sarj",
  "promosyon-standli-wireless-sarj-pb-410-isikli-logolu",
  "promosyon-wireless-sarj-standi-pb-420-15w-typec",
  "promosyon-wireless-stand-set-pb-425-3lu-15w-typec",
  "promosyon-wireless-stand-set-pb-430-isikli-logolu-15w",
  "promosyon-anahtarlik-an-540",
  "promosyon-kalem-seti-ks-235-ozel-tasarim-lazer-baski",
  "promosyon-ahsap-kalem-ks-335-tekli-roller",
  "promosyon-tekli-kalem-kutusu-ks-360-luks"
,
  "promosyon-termos-600-ml-tk-330",
  "promosyon-french-press-termos-500-ml-tk-340",
  "promosyon-termos-500-ml-uv-lazer-baskili-tk-350",

  "promosyon-ahsap-masa-seti-ah-100",
  "promosyon-luks-ahsap-masa-seti-ah-110",
  "promosyon-ahsap-masa-seti-ah-120",
  "promosyon-deri-kalemlik-ms-175",
  "promosyon-deri-kalemlik-ms-180",
]);

export function isProductVisible(product: { slug: string }): boolean {
  return !hiddenProductSlugs.has(product.slug);
}

export const visibleProducts = products.filter(isProductVisible);
