type SortableProduct = {
  title: string;
  slug: string;
};

function normalizeCodeText(value: string): string {
  return value
    .replace(/\u0131/g, "i")
    .replace(/\u0130/g, "I")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function productCode(product: SortableProduct) {
  const pattern = /(?:^|[^A-Z0-9])([A-Z]{2,8})-(\d{2,6})([A-Z]?)(?=$|[^A-Z0-9])/;
  const match =
    normalizeCodeText(product.title).match(pattern) ??
    normalizeCodeText(product.slug).match(pattern);

  return match
    ? { prefix: match[1], number: Number(match[2]), suffix: match[3] }
    : null;
}

export function sortProductsByCode<T extends SortableProduct>(
  products: readonly T[]
): T[] {
  return [...products].sort((a, b) => {
    const left = productCode(a);
    const right = productCode(b);

    if (!left && !right) return 0;
    if (!left) return 1;
    if (!right) return -1;

    if (left.prefix !== right.prefix) {
      return left.prefix < right.prefix ? -1 : 1;
    }

    if (left.number !== right.number) {
      return left.number - right.number;
    }

    if (left.suffix !== right.suffix) {
      return left.suffix < right.suffix ? -1 : 1;
    }

    return 0;
  });
}
