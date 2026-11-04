type UsbProduct = { category: string; title: string; shortDesc?: string };
export function isMetalUsb(product: UsbProduct): boolean {
  if (product.category !== "USB Bellek") return false;
  const text = `${product.title} ${product.shortDesc || ""}`.toLocaleLowerCase("tr-TR");
  if (/(?:deri|ahşap|kristal|kart usb|kredi kartı|kalem|kutulu|hediye seti)/u.test(text)) return false;
  return /(?:^|\s)metal(?:\s|[.,;:]|$)/u.test(text);
}
