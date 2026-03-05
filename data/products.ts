export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc?: string;
  category: "Kupa" | "Ajanda" | "Kalem" | "Tişört" | "Anahtarlık";
  image: string;
  gallery?: string[];
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "promosyon-dokunmatik-kalem-dk-500",
    title: "Promosyon Dokunmatik Kalem DK-500",
    shortDesc:
      "Logo baskılı promosyon dokunmatik kalem modeli. Kurumsal tanıtım için toplu sipariş ve hızlı teklif alın.",
    longDesc: `
Promosyon dokunmatik kalem DK-500 modeli, kurumsal tanıtım ve marka bilinirliği için en çok tercih edilen promosyon ürünlerinden biridir. Hem klasik kalem hem de dokunmatik ekran kalemi olarak kullanılabilmesi sayesinde oldukça pratik ve kullanışlıdır.

Akıllı telefon ve tablet ekranlarında rahatlıkla kullanılabilen dokunmatik uç tasarımı sayesinde modern bir promosyon ürünüdür. Özellikle teknoloji odaklı firmalar, kurumsal şirketler ve etkinlik organizasyonları tarafından sıklıkla tercih edilmektedir.

Promosyon kalemler, düşük maliyetle yüksek reklam etkisi sağlayan en güçlü tanıtım araçlarından biridir. Fuarlar, müşteri ziyaretleri, promosyon kampanyaları ve kurumsal etkinliklerde dağıtılarak marka bilinirliğinizi artırır.

DK-500 modeli ergonomik tasarımı, kaliteli gövdesi ve şık görünümü ile dikkat çeker. Ürün üzerine firmanıza özel logo baskısı uygulanarak tamamen kurumsal kimliğinize uygun hale getirilebilir.

Toplu siparişlerde ekonomik fiyat avantajı sunan promosyon dokunmatik kalemler, uzun süre kullanılabilmesi sayesinde markanızın sürekli görünür olmasını sağlar.

Minimum sipariş miktarı genellikle 100 adet olup, sipariş adedine göre fiyatlandırma değişmektedir.

Promosyon kalem siparişleri ve kurumsal logo baskı seçenekleri için hızlı teklif alabilirsiniz.
`.trim(),
    category: "Kalem",
    image: "/products/dokunmatik-kalem-dk-500.jpg",
    gallery: ["/products/dokunmatik-kalem-dk-500.jpg"],
  },
];