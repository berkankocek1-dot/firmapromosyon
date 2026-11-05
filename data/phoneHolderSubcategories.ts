const phoneHolderSlugs = new Set(["promosyon-ahsap-telefon-tutucu-att-230", "promosyon-arac-ici-telefon-tutucu-tt-480-magsafe-wireless-sarjli", "promosyon-arac-ici-telefon-tutucu-tt-490-manyetik-kompakt", "promosyon-telefon-standi-tt-500-katlanabilir-masaustu", "promosyon-arac-ici-telefon-tutucu-tt-520-15w-magsafe-wireless", "promosyon-ayakli-aynali-telefon-standi-tt-530-katlanabilir"]);

export function isPhoneHolder(product: { slug: string }): boolean {
  return phoneHolderSlugs.has(product.slug);
}
