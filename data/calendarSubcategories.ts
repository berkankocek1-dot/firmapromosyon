type CalendarProduct = { category: string; title: string; shortDesc?: string };
export function isMarineCalendar(product: CalendarProduct): boolean {
  if (product.category !== "Takvimler") return false;
  const text = (product.title + " " + (product.shortDesc || "")).toLocaleLowerCase("tr-TR");
  if (/gemici\s+takvimi\s+(?:değil|yok|bulunmaz)/u.test(text)) return false;
  return /gemici\s+takvim/u.test(text);
}
