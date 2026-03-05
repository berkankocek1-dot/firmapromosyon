export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc?: string;

  // ✅ Yeni kategori listesi eklendi (hepsi burada)
  category:
    | "Kalem"
    | "USB Bellek"
    | "Powerbank"
    | "Tarihsiz Defter"
    | "Ajanda"
    | "Duvar Saatleri"
    | "Kalem Setleri"
    | "Termos"
    | "Geri Dönüşümlü Ürünler"
    | "Yapışkanlı Notluklar"
    | "Matbaa Ürünleri"
    | "Karton Çantalar"
    | "Promosyon Şapka"
    | "Ahşap ve Deri Masaüstü Ürünler"
    | "Promosyon Tişört"
    | "Organizerler"
    | "Sekreterlikler ve Evrak Çantaları"
    | "Kırtasiye Ürünleri"
    | "VIP Ürünler"
    | "Masa Sümeni"
    | "Hesap Makineleri"
    | "Seramik ve Porselen Kupalar"
    | "Ham Bez & Tela Çanta"
    | "Bayraklar"
    | "Teknolojik Ürünler"
    | "Kartvizitlik"
    | "Ayna ve Deri Kartlıklar"
    | "Çakı, Fener ve Tornavida Seti"
    | "İmalat Ürünler"
    // ✅ Eski kategoriler de kalsın
    | "Kupa"
    | "Tişört"
    | "Anahtarlık"
    | "Çakmak";

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

Kurumsal toplu alım ve logo baskı için teklif isteyebilirsiniz.
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
    image: "/products/promosyon-dokunmatik-kalem-dk600-logo-baski.jpg",
    gallery: ["/products/promosyon-dokunmatik-kalem-dk600-logo-baski.jpg"],
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

  {
    id: "p3",
    slug: "promosyon-tasli-cakmak-cricket-cm-100",
    title: "Promosyon Taşlı Çakmak (Cricket 7.8 x 2.2) ÇM-100",
    shortDesc:
      "Promosyon taşlı çakmak ÇM-100 (Cricket 7.8×2.2 cm) logo baskıya uygundur. Kurumsal promosyon, fuar ve etkinlikler için idealdir. Baskısız minimum 100 adet; baskılı minimum adet değişebilir. Renkler stok durumuna göre kontrol edilir.",
    longDesc: `
Promosyon Taşlı Çakmak ÇM-100 (Cricket 7.8 × 2.2 cm), kurumsal promosyon çalışmalarında en sık tercih edilen promosyon çakmak modellerinden biridir. Kompakt tasarımı ve pratik kullanımı sayesinde fuar, etkinlik, müşteri ziyareti ve promosyon kampanyalarında dağıtım için ideal bir reklam ürünüdür.

PROMOSYON TAŞLI ÇAKMAK ÇM-100 TEKNİK ÖZELLİKLERİ
• Model: ÇM-100
• Ebat: 7.8 × 2.2 cm
• Baskı Alanı: 5.5 × 1.4 cm
• Mekanizma: Taşlı çakmak
• Kullanım: Doldurulamaz
• Baskı Türü: Tampon Baskı + UV Dijital Baskı

RENK SEÇENEKLERİ (STOK KONTROLLÜ)
Beyaz, Kırmızı, Mavi, Sarı, Siyah.
Not: Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde renk/stok kontrolü yapılır ve teyit edilir.

MİNİMUM SİPARİŞ / BASKI BİLGİSİ
• Baskısız minimum sipariş: 100 adet
• Logo baskılı siparişlerde minimum adet; baskı tekniği, renk seçimi ve üretim planına göre değişebilir. Kesin minimum adet ve fiyat teklifte netleştirilir.

Kurumsal toplu alım ve logo baskı için hızlı teklif isteyebilirsiniz.
`.trim(),
    category: "Çakmak",
    image: "/products/promosyon-tasli-cakmak-cm-100.jpg",
    gallery: ["/products/promosyon-tasli-cakmak-cm-100.jpg"],
    faq: [
      {
        q: "Promosyon taşlı çakmak minimum sipariş adedi nedir?",
        a: "Baskısız siparişlerde minimum adet 100’dür. Logo baskılı siparişlerde minimum adet üretim planına göre değişebilir.",
      },
      {
        q: "Baskı alanı ve baskı türü nedir?",
        a: "Baskı alanı 5.5 × 1.4 cm’dir. Tampon baskı ve UV dijital baskı uygulanabilir.",
      },
      {
        q: "Renk seçenekleri stokta var mı?",
        a: "Beyaz, Kırmızı, Mavi, Sarı ve Siyah renk seçenekleri bulunur. Renkler stok durumuna göre değişebilir ve sipariş öncesinde stok kontrolü yapılır.",
      },
      {
        q: "ÇM-100 çakmak doldurulabilir mi?",
        a: "Hayır. ÇM-100 modeli doldurulamaz taşlı çakmaktır.",
      },
    ],
  },

  {
    id: "p4",
    slug: "promosyon-cricket-mayyetolu-sibopsuz-cakmak-cm-150",
    title: "Promosyon Cricket Manyetolu Sibopsuz Çakmak (7.8 x 2.2) ÇM-150",
    shortDesc:
      "Promosyon Cricket manyetolu sibopsuz çakmak ÇM-150 (78×22 mm) logo baskıya uygundur. Kurumsal promosyon, fuar ve etkinlikler için idealdir. Baskısız minimum sipariş 100 adet; baskılı minimum adet değişebilir. Renkler stok durumuna göre kontrol edilir.",
    longDesc: `
Promosyon Cricket Manyetolu Sibopsuz Çakmak ÇM-150, kurumsal promosyon çalışmalarında sık tercih edilen promosyon çakmak modellerinden biridir. Manyetolu mekanizması ve pratik kullanımı sayesinde fuar, etkinlik, müşteri ziyareti ve promosyon kampanyalarında dağıtım için idealdir.

Logo baskıya uygun yüzeyi ile markanızın görünürlüğünü artırır. Kurumsal firmalar için promosyon dağıtımlarında uygun maliyetli ve etkili bir reklam ürünüdür.

PROMOSYON ÇAKMAK ÇM-150 TEKNİK ÖZELLİKLERİ
• Model: ÇM-150
• Tip: Manyetolu, sibopsuz
• Ölçü / Ebat: 78 × 22 mm (7.8 × 2.2 cm)
• Baskı Alanı: 55 × 14 mm (5.5 × 1.4 cm)
• Baskı Türleri: Tampon Baskı – UV Baskı

RENK SEÇENEKLERİ (STOK KONTROLLÜ)
Beyaz, Kırmızı, Mavi, Sarı, Siyah.
Not: Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde renk/stok kontrolü yapılır ve teyit edilir.

MİNİMUM SİPARİŞ / BASKI BİLGİSİ
• Baskısız minimum sipariş: 100 adet
• Logo baskılı siparişlerde minimum adet; baskı tekniği (tampon/UV), renk seçimi ve üretim planına göre değişebilir. Kesin minimum adet ve fiyat teklifte netleştirilir.

Kurumsal toplu alım ve logo baskı için hızlı teklif isteyebilirsiniz.
`.trim(),
    category: "Çakmak",
    image: "/products/promosyon-cricket-mayyetolu-sibopsuz-cakmak-cm-150.jpg",
    gallery: ["/products/promosyon-cricket-mayyetolu-sibopsuz-cakmak-cm-150.jpg"],
    faq: [
      {
        q: "ÇM-150 promosyon çakmak minimum sipariş adedi nedir?",
        a: "Baskısız siparişlerde minimum adet 100’dür. Logo baskılı siparişlerde minimum adet üretim planına göre değişebilir.",
      },
      {
        q: "ÇM-150 çakmakta baskı alanı ve baskı türleri nedir?",
        a: "Baskı alanı 55 × 14 mm’dir. Tampon baskı ve UV baskı uygulanabilir.",
      },
      {
        q: "Renk seçenekleri stokta var mı?",
        a: "Beyaz, Kırmızı, Mavi, Sarı ve Siyah renk seçenekleri bulunur. Renkler stok durumuna göre değişebilir; sipariş öncesinde stok kontrolü yapılır.",
      },
      {
        q: "ÇM-150 çakmak hangi kullanım alanları için uygundur?",
        a: "Fuar, etkinlik, müşteri ziyareti ve kurumsal promosyon dağıtımlarında logo baskılı reklam ürünü olarak uygundur.",
      },
    ],
  },

  {
    id: "p5",
    slug: "promosyon-anahtarlik-an-110",
    title: "Promosyon Anahtarlık AN-110",
    shortDesc:
      "Promosyon anahtarlık AN-110, lazer baskıya uygun şık tasarımı ile kurumsal promosyon çalışmalarında sık tercih edilen bir üründür. Minimum sipariş baskısız 100 adet olup renkler stok durumuna göre kontrol edilir.",
    longDesc: `
Promosyon Anahtarlık AN-110, kurumsal firmaların marka tanıtımı için tercih ettiği pratik ve kullanışlı promosyon ürünlerinden biridir. Şık tasarımı ve lazer baskıya uygun yüzeyi sayesinde firmanızın logosunu uzun süre görünür hale getirir.

Fuar, etkinlik, müşteri ziyareti ve promosyon dağıtımlarında etkili bir reklam ürünü olarak kullanılabilir. Günlük kullanımda anahtar taşıma amacıyla kullanılan anahtarlıklar, markanızın sürekli görünür olmasını sağlar.

PROMOSYON ANAHTARLIK AN-110 TEKNİK ÖZELLİKLERİ
• Model: AN-110
• Ebat: 13 × 2 cm
• Baskı Türü: Lazer Baskı
• Baskı: Çift Yön Baskı Uygulanabilir
• Paketleme: Şeffaf Poşet

RENK SEÇENEKLERİ (STOK KONTROLLÜ)
Kırmızı, Lacivert, Siyah, Taba, Turkuaz.
Not: Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde renk ve stok kontrolü yapılır.

MİNİMUM SİPARİŞ
• Baskısız minimum sipariş: 100 adet
• Logo baskılı siparişlerde minimum adet, üretim planına göre değişebilir.

Kurumsal promosyon anahtarlık siparişleri için teklif alabilirsiniz.
`.trim(),
    category: "Anahtarlık",
    image: "/products/promosyon-anahtarlik-an-110.jpg",
    gallery: ["/products/promosyon-anahtarlik-an-110.jpg"],
    faq: [
      {
        q: "Promosyon anahtarlık AN-110 minimum sipariş adedi nedir?",
        a: "Baskısız siparişlerde minimum sipariş 100 adettir. Baskılı siparişlerde minimum adet üretim planına göre değişebilir.",
      },
      {
        q: "Anahtarlığa hangi baskı uygulanabilir?",
        a: "Ürüne lazer baskı uygulanabilir. Lazer baskı uzun ömürlü ve kalıcıdır.",
      },
      {
        q: "Anahtarlık çift taraflı baskıya uygun mu?",
        a: "Evet. Ürün çift yön baskıya uygundur.",
      },
      {
        q: "Renk seçenekleri stokta var mı?",
        a: "Kırmızı, Lacivert, Siyah, Taba ve Turkuaz renk seçenekleri bulunmaktadır. Renkler stok durumuna göre değişebilir.",
      },
    ],
  },
];

export default products;