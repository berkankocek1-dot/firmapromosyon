type AgendaProduct = { category: string; title: string; shortDesc: string };

export function isSpiralAgenda(product: AgendaProduct): boolean {
  return product.category === "Ajanda" && /spiral/i.test(`${product.title} ${product.shortDesc}`);
}

export function isThermoPuAgenda(product: AgendaProduct): boolean {
  return product.category === "Ajanda" && /termo\s+pu\b/i.test(`${product.title} ${product.shortDesc}`);
}
