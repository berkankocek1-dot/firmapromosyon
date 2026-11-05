type CalculatorOrganizerProduct = {
  category: string;
  hasCalculator?: boolean;
};

export function isCalculatorOrganizer(product: CalculatorOrganizerProduct): boolean {
  return product.category === "Organizerler" && product.hasCalculator === true;
}
