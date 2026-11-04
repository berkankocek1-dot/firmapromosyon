type ThermosProduct = { category: string; title: string };
export function getThermosCapacity(product: ThermosProduct): number | null {
  const match = product.title.match(/\b(\d{3,4})\s*ml\b/i);
  return match ? Number(match[1]) : null;
}
export function is500mlThermos(product: ThermosProduct): boolean {
  return product.category === "Termos" && getThermosCapacity(product) === 500;
}

export function isLargeThermos(product: ThermosProduct): boolean {
  const capacity = getThermosCapacity(product);
  return product.category === "Termos" && capacity !== null && capacity >= 700;
}

export function isDigitalThermos(product: ThermosProduct): boolean {
  if (product.category !== "Termos") return false;
  const code = /\bTK-\d+\b/i.exec(product.title)?.[0].toUpperCase();
  return ["TK-195", "TK-196", "TK-200"].includes(code || "");
}
