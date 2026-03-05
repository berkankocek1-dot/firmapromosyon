export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc?: string;
  category: "Kupa" | "Ajanda" | "Kalem" | "Tişört" | "Anahtarlık";
  image: string;
  gallery?: string[];
  faq?: { q: string; a: string }[];
};


export const products: Product[] = [
  {
    id: "p1",
    slug: "promosyon-dokunmatik-kalem-dk-500",
    title: "Promosyon Dokunmatik Kalem DK-500",
    shortDesc:
      "Logo baskılı promosyon dokunmatik kalem DK-500. Kurumsal etkinlik, fuar ve müşteri ziyaretleri için toplu alım + hızlı teklif.",
    longDesc: `
Promosyon dokunmatik kalem DK-500, kurumsal promosyon ürünleri arasında hem şık görünümü hem de günlük kullanım avantajı sayesinde en çok tercih edilen modellerden biridir.

PROMOSYON DOKUNMATİK KALEM DK-500 ÖZELLİKLERİ
• Dokunmatik uç: Telefon ve tablet ekranlarında pratik kullanım
• Ergonomik gövde: Uzun süre elde konforlu tutuş
• Kurumsal baskıya uygun yüzey: Logo baskı / marka baskısı için ideal
• Şık ve profesyonel görünüm: Kurumsal hediye ve promosyon dağıtımı için uygun

Kurumsal toplu alım ve logo baskı için teklif isteyebilirsiniz.
`.trim(),
    category: "Kalem",
    image: "/products/dokunmatik-kalem-dk-500.jpg",
    gallery: ["/products/dokunmatik-kalem-dk-500.jpg"],
    faq: [
      {
        q: "Minimum sipariş adedi nedir?",
        a: "Minimum sipariş adedi baskı durumuna göre değişir. Baskısız siparişlerde genelde 50 adet ile başlanır. Logo baskılı siparişlerde minimum adet, baskı tekniğine ve üretim planına göre değişebilir.",
      },
      {
        q: "Logo baskı seçenekleri nelerdir?",
        a: "Ürüne göre UV, tampon veya lazer gibi logo baskı seçenekleri sunulabilir. En uygun baskı yöntemi teklif aşamasında netleştirilir.",
      },
      {
        q: "Teslim süresi kaç gün?",
        a: "Adet, baskı türü ve üretim yoğunluğuna göre değişir. Termin bilgisi teklif aşamasında paylaşılır.",
      },
    ],
  },
];

export default products;


