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
      "Logo baskıya uygun promosyon dokunmatik kalem DK-500. Kurumsal promosyon, fuar ve etkinlikler için toplu siparişe uygundur. Baskısız minimum 50 adet; baskılı minimum adet değişebilir.",
    longDesc: `
Promosyon Dokunmatik Kalem DK-500; kurumsal promosyon ürünleri arasında hem şık görünümü hem de günlük kullanım avantajı sayesinde en çok tercih edilen modellerden biridir. Dokunmatik ucu sayesinde telefon ve tablet kullanımında pratiklik sunar.

Logo baskılı promosyon kalem arayan firmalar için fuar, etkinlik, müşteri ziyareti ve kurumsal hediye dağıtımlarında güçlü bir çözümdür.

PROMOSYON DOKUNMATİK KALEM DK-500 ÖZELLİKLERİ
• Dokunmatik uç: Telefon ve tablet ekranlarında kolay kullanım
• Ergonomik gövde: Uzun süre elde konforlu tutuş
• Kurumsal baskıya uygun yüzey: Logo baskı / marka baskısı için ideal
• Şık ve profesyonel görünüm: Kurumsal promosyon dağıtımı için uygun

RENK SEÇENEKLERİ (STOK KONTROLLÜ)
Fıstık Yeşili, Lacivert, Kırmızı, Füme, Mat Turuncu, Beyaz, Siyah, Pembe, Yeşil, Gümüş, Turuncu, Sarı, Turkuaz.

Not: Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde stok kontrolü yapılır.

MİNİMUM SİPARİŞ
• Baskısız minimum sipariş: 50 adet
• Logo baskılı siparişlerde minimum adet üretim planına göre değişebilir.

Kurumsal toplu alım ve logo baskı için teklif alabilirsiniz.
`.trim(),
    category: "Kalem",
    image: "/products/promosyon-dokunmatik-kalem-dk500.jpg",
    gallery: ["/products/promosyon-dokunmatik-kalem-dk500.jpg"],
    faq: [
      {
        q: "Minimum sipariş adedi nedir?",
        a: "Baskısız siparişlerde minimum adet 50’dir. Logo baskılı siparişlerde minimum adet üretim planına göre değişebilir.",
      },
      {
        q: "Renk seçenekleri stokta var mı?",
        a: "Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde stok kontrolü yapılır.",
      },
      {
        q: "Logo baskı yapılabiliyor mu?",
        a: "Evet. Ürüne UV, tampon veya lazer baskı uygulanabilir.",
      },
      {
        q: "Teslim süresi ne kadar?",
        a: "Sipariş adedi ve baskı türüne göre değişir. Termin bilgisi teklif aşamasında paylaşılır.",
      },
    ],
  },

  {
    id: "p2",
    slug: "promosyon-dokunmatik-kalem-dk-600",
    title: "Promosyon Dokunmatik Kalem DK-600",
    shortDesc:
      "Logo baskıya uygun rubber gövdeli promosyon dokunmatik kalem DK-600. Kurumsal promosyon, fuar ve etkinlikler için idealdir. Baskısız minimum sipariş 50 adet olup renkler stok durumuna göre kontrol edilir.",
    longDesc: `
Promosyon Dokunmatik Kalem DK-600; rubber gövde yapısı ve dokunmatik ucu sayesinde modern ve kullanışlı bir promosyon kalem modelidir.

Telefon ve tablet ekranlarında rahat kullanım sağlayan dokunmatik uç sayesinde hem günlük kullanım hem de kurumsal promosyon dağıtımı için tercih edilir.

PROMOSYON DOKUNMATİK KALEM DK-600 ÖZELLİKLERİ
• Dokunmatik uç: Telefon ve tablet kullanımına uygun
• Rubber gövde: Kaymaz yüzey ve konforlu tutuş
• Logo baskıya uygun yüzey
• Kurumsal promosyon ve fuar dağıtımları için ideal

RENK SEÇENEKLERİ
Standart, Kırmızı, Turkuaz, Siyah, Yeşil, Füme, Turuncu.

Not: Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde stok kontrolü yapılır.

MİNİMUM SİPARİŞ
• Baskısız minimum sipariş: 50 adet
• Logo baskılı siparişlerde minimum adet üretim planına göre değişebilir.

Kurumsal promosyon siparişleri ve logo baskı için teklif alabilirsiniz.
`.trim(),
    category: "Kalem",
    image: "/products/promosyon-dokunmatik-kalem-dk600.jpg",
    gallery: ["/products/promosyon-dokunmatik-kalem-dk600.jpg"],
    faq: [
      {
        q: "Promosyon dokunmatik kalem DK-600 minimum sipariş adedi nedir?",
        a: "Baskısız siparişlerde minimum adet 50’dir. Logo baskılı siparişlerde minimum adet üretim planına göre değişebilir.",
      },
      {
        q: "Renk seçenekleri nelerdir?",
        a: "Standart, Kırmızı, Turkuaz, Siyah, Yeşil, Füme ve Turuncu renk seçenekleri bulunmaktadır. Renkler stok durumuna göre değişebilir.",
      },
      {
        q: "Logo baskı yapılabiliyor mu?",
        a: "Evet. Kurumsal logo baskısı UV, tampon veya lazer teknikleri ile uygulanabilir.",
      },
      {
        q: "Promosyon kalem teslim süresi ne kadar?",
        a: "Teslim süresi sipariş adedi ve baskı türüne göre değişir. Termin bilgisi teklif aşamasında paylaşılır.",
      },
    ],
  },
];

export default products;