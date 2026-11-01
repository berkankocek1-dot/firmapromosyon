export function isMetalKeychain(product: {
  category: string;
  title: string;
  shortDesc: string;
}) {
  const isKeychain = product.category === "Anahtarlık" &&
    /\bAN\s*-\s*\d+\b/i.test(product.title);
  const text = `${product.title} ${product.shortDesc}`.toLocaleLowerCase("tr-TR");
  return isKeychain && /metal|alüminyum|aluminyum/.test(text);
}

export function isLeatherKeychain(product: {
  category: string;
  title: string;
  shortDesc: string;
}) {
  const text = `${product.title} ${product.shortDesc}`.toLocaleLowerCase("tr-TR");
  return product.category === "Anahtarlık" &&
    /\bAN\s*-\s*\d+\b/i.test(product.title) && text.includes("deri");
}

export function isOpenerKeychain(product: {
  category: string;
  title: string;
  slug: string;
  shortDesc: string;
}) {
  if (product.category !== "Anahtarlık" || !/\bAN\s*-\s*\d+\b/i.test(product.title)) return false;
  const code = product.slug.match(/(?:^|-)(an-\d+)(?:-|$)/i)?.[1].toLowerCase();
  const text = `${product.title} ${product.shortDesc}`.toLocaleLowerCase("tr-TR");
  if (code === "an-380" || code === "an-460" || /purjör|purjor/.test(text)) return false;
  return code === "an-160" || code === "an-450" || /açacak|açacağı/.test(text);
}

export function isPurjorKeychain(product: {
  category: string;
  title: string;
  shortDesc: string;
}) {
  return product.category === "Anahtarlık"
    && /\bAN\s*-\s*\d+\b/i.test(product.title)
    && /purjör|purjor/.test(`${product.title} ${product.shortDesc}`.toLocaleLowerCase("tr-TR"));
}

export function isHouseCarKeychain(product: {
  category: string;
  title: string;
  shortDesc: string;
}) {
  return product.category === "Anahtarlık"
    && /\bAN\s*-\s*\d+\b/i.test(product.title)
    && /(?:ev|araba|otomobil) şeklinde/.test(`${product.title} ${product.shortDesc}`.toLocaleLowerCase("tr-TR"));
}
