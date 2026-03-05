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
      "Promosyon dokunmatik kalem DK-500 (logo baskıya uygun). Kurumsal promosyon, fuar ve etkinlikler için toplu alım. Baskısız minimum 50 adet; baskılı minimum adet değişebilir. Renkler stok durumuna göre kontrol edilir.",
    longDesc: `
Promosyon Dokunmatik Kalem DK-500; kurumsal promosyon ürünleri arasında hem şık görünümü hem de günlük kullanım avantajı sayesinde en çok tercih edilen modellerden biridir. Dokunmatik ucu sayesinde telefon ve tablet kullanımında pratiklik sunar. Logo baskılı promosyon kalem arayan firmalar için fuar, etkinlik, müşteri ziyareti ve kurumsal hediye dağıtımlarında güçlü bir çözümdür.

PROMOSYON DOKUNMATİK KALEM DK-500 ÖZELLİKLERİ
• Dokunmatik uç: Telefon ve tablet ekranlarında kolay kullanım
• Ergonomik gövde: Uzun süre elde konforlu tutuş
• Kurumsal baskıya uygun yüzey: Logo baskı / marka baskısı için ideal
• Şık ve profesyonel görünüm: Kurumsal hediye ve promosyon dağıtımı için uygun

RENK SEÇENEKLERİ (STOK KONTROLLÜ)
Fıstık Yeşili, Lacivert, Kırmızı, Füme, Mat Turuncu, Beyaz, Siyah, Pembe, Yeşil, Gümüş, Turuncu, Sarı, Turkuaz.
Not: Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde renk/stok bilgisi mutlaka kontrol edilir ve netleştirilir.

MİNİMUM SİPARİŞ / BASKI BİLGİSİ
• Baskısız minimum sipariş: 50 adet
• Logo baskılı siparişlerde minimum adet; baskı tekniği (UV/tampon/lazer), renk seçimi ve üretim planına göre değişebilir. Kesin minimum adet ve fiyat, teklif aşamasında netleştirilir.

Kurumsal toplu alım ve logo baskı için hızlı teklif isteyebilirsiniz.
`.trim(),
    category: "Kalem",
    image: "/products/dokunmatik-kalem-dk-500.jpg",
    gallery: ["/products/dokunmatik-kalem-dk-500.jpg"],
    faq: [
      {
        q: "Minimum sipariş adedi nedir?",
        a: "Baskısız siparişlerde minimum adet 50’dir. Logo baskılı siparişlerde minimum adet; baskı tekniği, renk seçimi ve üretim planına göre değişebilir. Net minimum adet teklif aşamasında belirlenir.",
      },
      {
        q: "Renk seçenekleri kesin mi, stok var mı?",
        a: "Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesi seçtiğiniz renk(ler) için stok kontrolü yapılır ve teyit edilir.",
      },
      {
        q: "Logo baskı seçenekleri nelerdir?",
        a: "Ürüne göre UV, tampon veya lazer gibi baskı yöntemleri uygulanabilir. En uygun yöntem ve baskı alanı, teklif aşamasında netleştirilir.",
      },
      {
        q: "Teslim süresi kaç gün?",
        a: "Adet, baskı türü ve üretim yoğunluğuna göre değişir. Termin ve üretim süresi teklif aşamasında paylaşılır.",
      },
    ],
  },

  // ✅ YENİ ÜRÜN: DK-600
  {
    id: "p2",
    slug: "promosyon-dokunmatik-kalem-dk600",
    title: "Promosyon Dokunmatik Kalem DK-600",
    shortDesc:
      "Promosyon dokunmatik kalem DK-600 (logo baskıya uygun rubber gövde). Kurumsal promosyon, fuar ve etkinlikler için toplu alım. Baskısız minimum 50 adet; baskılı minimum adet değişebilir. Renkler: Standart, Kırmızı, Turkuaz, Siyah, Yeşil, Füme, Turuncu (stok kontrolü yapılır).",
    longDesc: `
Promosyon Dokunmatik Kalem DK-600; rubber (kauçuk) gövde yapısı, şık tasarımı ve dokunmatik ucu sayesinde kurumsal promosyon ürünleri arasında en çok tercih edilen modellerden biridir. Telefon ve tablet ekranlarında rahat kullanım sunar; aynı zamanda günlük kullanım için dayanıklı ve konforlu bir tutuş sağlar.

PROMOSYON DOKUNMATİK KALEM DK-600 ÖZELLİKLERİ
• Dokunmatik uç: Telefon ve tablet ekranlarında kolay kullanım
• Rubber gövde: Kaymaz yüzey, konforlu tutuş ve premium görünüm
• Logo baskıya uygun: Kurumsal logo / marka baskısı için ideal yüzey
• Kullanım alanı: Fuar, etkinlik, müşteri ziyareti, kurumsal hediye ve promosyon dağıtımı

RENK SEÇENEKLERİ (STOK KONTROLLÜ)
Standart, Kırmızı, Turkuaz, Siyah, Yeşil, Füme, Turuncu.
Not: Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde renk/stok kontrolü yapılır ve teyit edilir.

MİNİMUM SİPARİŞ / BASKI BİLGİSİ
• Baskısız minimum sipariş: 50 adet
• Logo baskılı siparişlerde minimum adet; baskı tekniği (UV / tampon / lazer), renk seçimi ve üretim planına göre değişebilir. Kesin minimum adet ve fiyat teklifte netleştirilir.

Kurumsal toplu alım ve logo baskı için hızlı teklif isteyebilirsiniz.
`.trim(),
    category: "Kalem",
    // Görseli public/products içine koyduysan bu doğru:
    image: "/products/promosyon-dokunmatik-kalem-dk600.jpg",
    gallery: ["/products/promosyon-dokunmatik-kalem-dk600.jpg"],
    faq: [
      {
        q: "Minimum sipariş adedi nedir?",
        a: "Baskısız siparişlerde minimum adet 50’dir. Logo baskılı siparişlerde minimum adet; baskı tekniği, renk seçimi ve üretim planına göre değişebilir. Net minimum adet teklif aşamasında belirlenir.",
      },
      {
        q: "Renk seçenekleri kesin mi, stok kontrolü yapılıyor mu?",
        a: "Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde Standart / Kırmızı / Turkuaz / Siyah / Yeşil / Füme / Turuncu seçenekleri için stok kontrolü yapılır ve teyit edilir.",
      },
      {
        q: "Logo baskı seçenekleri nelerdir?",
        a: "Ürüne göre UV, tampon veya lazer gibi baskı yöntemleri uygulanabilir. En uygun yöntem ve baskı alanı, teklif aşamasında netleştirilir.",
      },
      {
        q: "Teslim süresi kaç gün?",
        a: "Adet, baskı türü ve üretim yoğunluğuna göre değişir. Termin ve üretim süresi teklif aşamasında paylaşılır.",
      },
    ],
  },
];

export default products;