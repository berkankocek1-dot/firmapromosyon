type NotebookProduct = { category: string; title: string; shortDesc: string };

export function isPenHolderNotebook(product: NotebookProduct): boolean {
  return product.category === "Tarihsiz Defter" && /kalem\s+(?:tutucu|yuva|geçme)|kalemlikli/i.test(`${product.title} ${product.shortDesc}`);
}

export function isMetalDetailNotebook(product: NotebookProduct): boolean {
  return product.category === "Tarihsiz Defter" && /\bmetal\b/i.test(`${product.title} ${product.shortDesc}`);
}

export function isSquaredNotebook(product: NotebookProduct): boolean {
  return product.category === "Tarihsiz Defter" && /kareli/i.test(`${product.title} ${product.shortDesc}`);
}

export function isPocketNotebook(product: NotebookProduct): boolean {
  return product.category === "Tarihsiz Defter" && /(?:cep|mini)\s+boy/i.test(`${product.title} ${product.shortDesc}`);
}
