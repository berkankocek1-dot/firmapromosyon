const coasterSlugs = new Set(["promosyon-bardak-altligi-ba-650", "promosyon-deri-bardak-altligi-ms-190", "promosyon-deri-bardak-altligi-set-ms-195"]);
export function isCoaster(product: { slug: string }): boolean { return coasterSlugs.has(product.slug); }
