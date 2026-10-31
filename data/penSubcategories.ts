export function isMetalPen(product: {
  category: string;
  title: string;
  shortDesc: string;
}) {
  return product.category === "Kalem" &&
    /\bMK\s*-\s*\d+\b/i.test(product.title);
}
export function isPlasticPen(product: {
  category: string;
  title: string;
  shortDesc: string;
}) {
  return product.category === "Kalem" &&
    /\bPLS\s*-\s*\d+\b/i.test(product.title);
}

export function isTouchPen(product: {
  category: string;
  title: string;
  shortDesc: string;
}) {
  return product.category === "Kalem" &&
    /\bDK\s*-\s*\d+\b/i.test(product.title);
}

export function isRollerPen(product: { category: string; title: string; shortDesc: string }) {
  return product.category === "Kalem" &&
    /\bRK\s*-\s*\d+\b/i.test(product.title) && /roller/i.test(product.title);
}

export function isGelPen(product: { category: string; title: string; shortDesc: string }) {
  return product.category === "Kalem" && /\bjell?\b/i.test(product.title) &&
    !/yar[ıi]\s*jel/i.test(product.title);
}

export function isPencil(product: { category: string; title: string; shortDesc: string }) {
  return product.category === "Kalem" && /kurşun\s+kalem/i.test(product.title);
}

export function isRubberPen(product: { category: string; title: string; shortDesc: string }) {
  return product.category === "Kalem" && /\brubber\b/i.test(product.title);
}
