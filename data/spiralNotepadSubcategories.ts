const spiralNotepadSlugs = new Set(["promosyon-spiralli-notluk-gd-110", "promosyon-spiralli-notluk-gd-120", "promosyon-spiralli-not-defteri-gd-140", "promosyon-renkli-yapiskanli-notluk-gd-150", "promosyon-spiralli-not-defteri-gd-160", "promosyon-spiralli-defter-yapiskanli-notluk-gd-170", "promosyon-spiralli-notluk-gd-210"]);

export function isSpiralNotepad(product: { slug: string }): boolean {
  return spiralNotepadSlugs.has(product.slug);
}
