export type SearchProduct = {
  slug: string;
  title: string;
  category: string;
  image: string;
  price?: number;
};

export function normalizeSearch(value: string): string {
  return value.toLocaleLowerCase("tr-TR").replace(/ı/g, "i")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ").trim();
}

export function getProductCode(product: SearchProduct): string {
  return product.title.match(/(?:^|[^\p{L}\p{N}])([A-ZÇĞİÖŞÜ]{1,8}-\d{2,5}(?:-[A-Z\d]+)*)(?![\p{L}\p{N}])/u)?.[1] || "";
}

export function matchesProductSearch(product: SearchProduct, query: string): boolean {
  const tokens = normalizeSearch(query).split(" ").filter(Boolean);
  if (!tokens.length) return true;
  const words = normalizeSearch(`${product.title} ${product.category} ${product.slug}`);
  const code = normalizeSearch(getProductCode(product)).replace(/ /g, "");
  return tokens.every(token => words.includes(token) || code.includes(token));
}

export function searchProducts(products: SearchProduct[], query: string): SearchProduct[] {
  const normalized = normalizeSearch(query);
  if (!normalized) return [];
  const compact = normalized.replace(/ /g, "");
  const rank = (product: SearchProduct) => {
    const code = normalizeSearch(getProductCode(product)).replace(/ /g, "");
    if (code === compact) return 0;
    if (code && code.startsWith(compact)) return 1;
    return 2;
  };
  return products.filter(product => matchesProductSearch(product, query))
    .sort((a, b) => rank(a) - rank(b) ||
      getProductCode(a).localeCompare(getProductCode(b), "tr", { numeric: true }) ||
      a.title.localeCompare(b.title, "tr"));
}
