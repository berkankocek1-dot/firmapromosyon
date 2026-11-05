type MatbaaProduct = { slug: string };

const isCubeNotepadSlugs = new Set(["promosyon-250-yaprakli-kup-bloknot-mtb-100", "promosyon-375-yaprakli-kup-bloknot-mtb-110", "promosyon-500-yaprakli-kup-bloknot-mtb-120", "promosyon-750-yaprakli-kup-bloknot-mtb-130"]);
export function isCubeNotepad(product: MatbaaProduct): boolean { return isCubeNotepadSlugs.has(product.slug); }

const isPrintedNotepadSlugs = new Set(["promosyon-100-yaprakli-dik-bloknot-mtb-140", "promosyon-50-yaprak-ustten-tutkalli-bloknot-a5-mtb-150", "promosyon-50-yaprak-tac-kapak-bloknot-14x21-mtb-160", "promosyon-50-yaprak-tac-kapak-bloknot-14x21-mtb-170", "promosyon-50-yaprak-ustten-spiralli-bloknot-14x21-mtb-180"]);
export function isPrintedNotepad(product: MatbaaProduct): boolean { return isPrintedNotepadSlugs.has(product.slug); }
