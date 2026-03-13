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
    | ""
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
{
  id: "p6",
  slug: "promosyon-tarihsiz-defter-15x21-td-100",
  title: "Promosyon Tarihsiz Defter (15 x 21 cm) TD-100",
  shortDesc:
    "Promosyon tarihsiz defter TD-100 (15×21 cm). Termo deri kapak, 224 sayfa (70 gr ivory krem). Baskısız minimum 30 adet; logo baskılı minimum adet değişebilir. Renk seçenekleri stok durumuna göre kontrol edilir.",
  longDesc: `
Promosyon Tarihsiz Defter TD-100 (15 × 21 cm), kurumsal promosyon ve hediye çalışmalarında sık tercih edilen premium görünümlü bir tarihsiz ajanda/defter modelidir. Termo deri kapak yapısı, şık tasarımı ve günlük kullanım avantajı sayesinde fuar, etkinlik, müşteri ziyareti ve şirket içi hediye dağıtımlarında markanızın görünürlüğünü artırır.

PROMOSYON TARİHSİZ DEFTER TD-100 TEKNİK ÖZELLİKLERİ
• Ebat: 15 × 21 cm
• Kapak: Termo Deri
• Kağıt: 70 gr Ivory Krem
• Sayfa Sayısı: 224
• Baskı Seçenekleri: Gofre, Dijital
• Koli Adeti: 36

RENK SEÇENEKLERİ (STOK KONTROLLÜ)
Turkuaz Yeşil, Kırmızı, Füme, Gri, Lacivert, Taba, Turkuaz Mavi.
Not: Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde seçilen renk(ler) için stok kontrolü yapılır ve teyit edilir.

MİNİMUM SİPARİŞ / BASKI BİLGİSİ
• Baskısız minimum sipariş: 30 adet
• Logo baskılı siparişlerde minimum adet; baskı türü (gofre/dijital), renk seçimi ve üretim planına göre değişebilir. Kesin minimum adet ve fiyat teklifte netleştirilir.

Kurumsal toplu alım ve logo baskı için hızlı teklif isteyebilirsiniz.
`.trim(),
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-100.jpg", // ✅ dosya adına göre güncelle
  gallery: ["/products/promosyon-tarihsiz-defter-td-100.jpg"], // ✅ istersen 2. görsel de ekleriz
  faq: [
    {
      q: "Tarihsiz defter TD-100 minimum sipariş adedi nedir?",
      a: "Baskısız siparişlerde minimum adet 30’dur. Logo baskılı siparişlerde minimum adet; baskı türü, renk seçimi ve üretim planına göre değişebilir. Net minimum adet teklif aşamasında belirlenir.",
    },
    {
      q: "Kapak ve kağıt özellikleri nedir?",
      a: "Kapak termo deridir. İç sayfalar 70 gr ivory krem kağıttır ve toplam 224 sayfadır.",
    },
    {
      q: "Hangi baskı türleri uygulanabilir?",
      a: "Gofre ve dijital baskı uygulanabilir. En uygun yöntem, logo ve adet bilgisine göre teklif aşamasında netleştirilir.",
    },
    {
      q: "Renk seçenekleri stokta her zaman bulunur mu?",
      a: "Renk seçenekleri stok durumuna göre değişebilir. Sipariş öncesinde seçilen renkler için stok kontrolü yapılır ve teyit edilir.",
    },
    {
      q: "Koli adedi kaçtır?",
      a: "Koli adedi 36’dır.",
    },
  ],
},
{
  id: "p7",
  slug: "promosyon-dokunmatik-kalem-dk-650",
  title: "Promosyon Dokunmatik Kalem DK-650",
  shortDesc:
    "Promosyon dokunmatik kalem DK-650; logo baskılı kurumsal kalem. Fuar, etkinlik ve müşteri ziyaretleri için toplu alım + hızlı teklif. Renk seçenekleri stok kontrolüyle netleşir.",
  longDesc: `
Promosyon Dokunmatik Kalem DK-650, dokunmatik ucu sayesinde telefon/tablet kullanımına uygun, günlük kullanım değeri yüksek bir kurumsal promosyon ürünüdür. 
Fuar, etkinlik, saha ekipleri ve müşteri ziyaretlerinde markanızı sürekli görünür kılar.

✅ Stok Kodu: DK-650
✅ Minimum Sipariş (Baskısız): 50 adet
✅ Minimum Sipariş (Baskılı): Baskı türüne ve modele göre değişir
✅ Renk Seçenekleri: Beyaz, Kırmızı, Turuncu, Lacivert, Pembe, Gümüş, Sarı
✅ Stok Bilgisi: Renkler için sipariş öncesi stok kontrolü yapılır

Teklif almak için: adet + baskı bilgisi + renk tercihi + teslim tarihi + logo dosyası (PDF/AI/SVG) paylaşmanız yeterlidir.
`,
  category: "Kalem",
  image: "/products/promosyon-dokunmatik-kalem-dk-650.jpg",
gallery: ["/products/promosyon-dokunmatik-kalem-dk-650.jpg"],
},
{
  id: "p8",
  slug: "promosyon-dokunmatik-kalem-dk-750",
  title: "Promosyon Dokunmatik Kalem DK-750",
  shortDesc:
    "Promosyon dokunmatik kalem DK-750; logo baskılı kurumsal kalem modeli. Fuar, etkinlik ve kurumsal dağıtımlar için ideal promosyon ürünü.",
  longDesc: `
Promosyon Dokunmatik Kalem DK-750, telefon ve tablet ekranlarında kullanılabilen dokunmatik ucu sayesinde modern ve kullanışlı bir promosyon kalem modelidir. 
Kurumsal firmalar tarafından fuar, etkinlik, müşteri ziyareti ve promosyon kampanyalarında sık tercih edilir.

✅ Stok Kodu: DK-750  
✅ Minimum Sipariş (Baskısız): 50 adet  
✅ Minimum Sipariş (Baskılı): Baskı türüne göre değişebilir  
✅ Renk Seçenekleri: Kırmızı, Siyah, Lacivert  
✅ Stok Bilgisi: Renkler için sipariş öncesi stok kontrolü yapılır  

Dokunmatik kalem modelleri özellikle teknoloji ile uyumlu promosyon ürünleri arasında yer alır ve markanızın modern görünmesini sağlar.

Teklif almak için:  
adet + baskı bilgisi + renk tercihi + teslim tarihi + logo dosyanızı (PDF / AI / SVG) paylaşmanız yeterlidir.
`,
  category: "Kalem",
  image: "/products/promosyon-dokunmatik-kalem-dk-750.jpg",
gallery: ["/products/promosyon-dokunmatik-kalem-dk-750.jpg"],
},
{
  id: "p9",
  slug: "promosyon-dokunmatik-kalem-dk-800",
  title: "Promosyon Dokunmatik Kalem DK-800",
  category: "Kalem",
  image: "/products/promosyon-dokunmatik-kalem-dk800.jpg",
  shortDesc:
    "Promosyon dokunmatik kalem DK-800, lazer baskıya uygun şık tasarımıyla kurumsal promosyonlar için ideal bir üründür. Minimum 50 adet sipariş ile logo baskılı üretim yapılabilir.",

  longDesc: `
Promosyon dokunmatik kalem DK-800, kurumsal promosyon ürünleri arasında en çok tercih edilen kalem modellerinden biridir. Hem klasik tükenmez kalem olarak kullanılabilir hem de dokunmatik ekran kalemi özelliği sayesinde telefon ve tabletlerde rahat kullanım sağlar.

Şık metal detayları ve modern tasarımı sayesinde fuar, etkinlik, müşteri ziyaretleri ve kurumsal promosyon dağıtımları için ideal bir üründür. Lazer baskı yöntemi ile firmanızın logosu kalem üzerine net ve kalıcı şekilde uygulanabilir.

Promosyon kalemler, marka bilinirliğini artırmak ve müşterilerle kalıcı iletişim kurmak için en etkili promosyon ürünlerinden biridir. Günlük kullanımda sürekli elde bulunan kalemler, markanızın görünürlüğünü uzun süre sağlar.

Promosyon dokunmatik kalem DK-800 modeli özellikle teknoloji uyumlu yapısı sayesinde modern promosyon ürünleri arasında öne çıkar. Dokunmatik uç sayesinde akıllı telefon ve tabletlerde kolay kullanım sunar.

Minimum sipariş adedi genellikle 50 adet olup baskılı siparişlerde adet miktarı üretim koşullarına göre değişebilir.

Ürün Özellikleri

• Model: DK-800  
• Tür: Dokunmatik promosyon kalem  
• Baskı Türü: Lazer baskı  
• Kullanım: Telefon ve tablet uyumlu dokunmatik uç  
• Minimum Sipariş: 50 adet  
• Renk Seçenekleri: Kırmızı, Lacivert, Turkuaz, Siyah, Yeşil, Füme, Beyaz, Turuncu  

Promosyon dokunmatik kalem DK-800 ile firmanızın logosunu şık ve profesyonel bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon kalem siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p10",
  slug: "promosyon-dokunmatik-kalem-dk-900",
  title: "Promosyon Dokunmatik Kalem DK-900",
  category: "Kalem",
  image: "/products/promosyon-dokunmatik-kalem-dk-900.jpg",
  shortDesc:
    "Promosyon dokunmatik kalem DK-900 lazer baskıya uygun, modern tasarımı ile kurumsal promosyon çalışmaları için tercih edilen bir kalem modelidir. Baskısız minimum 50 adet sipariş verilebilir.",

  longDesc: `
Promosyon dokunmatik kalem DK-900, modern tasarımı ve dokunmatik ekran uyumlu yapısı sayesinde kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Hem tükenmez kalem olarak kullanılabilir hem de dokunmatik uç sayesinde akıllı telefon ve tabletlerde rahat kullanım sağlar.

Şık gövde tasarımı ve lazer baskıya uygun yüzeyi sayesinde firmanızın logosu kalem üzerine kalıcı ve net şekilde uygulanabilir. Fuar, etkinlik, müşteri ziyaretleri ve kurumsal promosyon dağıtımlarında etkili bir reklam ürünü olarak kullanılabilir.

Promosyon kalemler, marka bilinirliğini artırmak ve müşterilerle sürekli iletişim kurmak için en etkili promosyon ürünlerinden biridir. Günlük kullanımda sık kullanılan kalemler markanızın görünürlüğünü uzun süre sağlar.

Promosyon dokunmatik kalem DK-900 modeli özellikle teknoloji uyumlu yapısı sayesinde modern promosyon ürünleri arasında öne çıkar. Dokunmatik uç sayesinde akıllı telefon ve tablet ekranlarında kolay kullanım sunar.

Minimum sipariş adedi baskısız siparişlerde genellikle 50 adet olup baskılı siparişlerde minimum adet üretim planına göre değişebilir. Renk seçenekleri için sipariş öncesinde stok kontrolü yapılması önerilir.

Ürün Özellikleri

• Model: DK-900  
• Ölçü: 140 x Ø10 mm  
• Refil: Mavi refil  
• Baskı Türü: Lazer baskı  
• Baskı Alanı: 55 x 5,5 mm  
• Koli / Kutu Adedi: 500 / 50  
• Minimum Sipariş: 50 adet  
• Renk Seçenekleri: Gold, Kırmızı, Lacivert, Silver, Turkuaz, Turuncu  

Promosyon dokunmatik kalem DK-900 ile firmanızın logosunu müşterilerinize şık ve profesyonel bir şekilde ulaştırabilirsiniz. Kurumsal promosyon kalem siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p11",
  slug: "promosyon-dokunmatik-kalem-dk-950",
  title: "Promosyon Dokunmatik Kalem DK-950",
  category: "Kalem",
  image: "/products/promosyon-dokunmatik-kalem-dk-950.jpg",

  shortDesc:
    "Promosyon dokunmatik kalem DK-950 çok fonksiyonlu tasarımı ile kurumsal promosyon ürünleri arasında öne çıkan bir modeldir. Baskısız minimum 50 adet sipariş verilebilir, baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon dokunmatik kalem DK-950, çok fonksiyonlu tasarımı sayesinde kurumsal promosyon ürünleri arasında dikkat çeken kalem modellerinden biridir. Hem tükenmez kalem hem dokunmatik ekran kalemi hem de küçük el aletleri özelliklerini bir arada sunar.

Dokunmatik uç sayesinde telefon ve tablet ekranlarında rahat kullanım sağlar. Ayrıca gövdesinde bulunan su terazisi, yıldız ve düz tornavida uçları sayesinde pratik bir kullanım sunar. Bu özellikleri sayesinde DK-950 modeli özellikle teknik sektörlerde ve mühendislik firmalarında sık tercih edilen promosyon ürünlerinden biridir.

Modern tasarımı ve lazer baskıya uygun yüzeyi sayesinde firmanızın logosu kalem üzerine net ve kalıcı şekilde uygulanabilir. Fuar, etkinlik, müşteri ziyaretleri ve kurumsal promosyon dağıtımları için etkili bir reklam ürünüdür.

Promosyon kalemler, marka bilinirliğini artırmak ve müşterilerle kalıcı iletişim kurmak için en etkili promosyon ürünlerinden biridir. Günlük kullanımda sürekli elde bulunan kalemler markanızın görünürlüğünü uzun süre sağlar.

Minimum sipariş baskısız siparişlerde genellikle 50 adet olup baskılı siparişlerde minimum adet üretim planına göre değişebilir. Renk seçenekleri için sipariş öncesinde stok kontrolü yapılması önerilir.

Ürün Özellikleri

• Model: DK-950  
• Ölçü: 160 x Ø 10 mm  
• Refil: Mavi refil  
• Baskı Türü: Lazer baskı  
• Baskı Alanı: 55 x 4,0 mm  
• Koli / Kutu Adedi: 500 / 50  
• Fonksiyonlar: Dokunmatik ekran kalem ucu, su terazisi, yıldız tornavida, düz tornavida  
• Minimum Sipariş: 50 adet  
• Renk Seçenekleri: Kırmızı, Mavi, Silver, Siyah  
• Renkler için stok kontrolü yapılması önerilir

Promosyon dokunmatik kalem DK-950 ile firmanızın logosunu şık ve profesyonel bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon kalem siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p12",
  slug: "promosyon-kraft-govde-tukenmez-kalem-gdk-100",
  title: "Promosyon Kraft Gövde Tükenmez Kalem GDK-100",
  category: "Kalem",
  image: "/products/promosyon-kraft-govde-tukenmez-kalem-gdk-100.jpg",

  shortDesc:
    "Promosyon kraft gövde tükenmez kalem GDK-100, çevreci görünümlü tasarımıyla kurumsal promosyon çalışmaları için uygun bir kalem modelidir. Baskısız minimum 100 adet sipariş verilebilir, baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon kraft gövde tükenmez kalem GDK-100, doğal görünümlü kraft gövdesi ve renkli detayları ile öne çıkan promosyon kalem modellerinden biridir. Çevre dostu algısı oluşturan tasarımı sayesinde kurumsal etkinlikler, fuarlar, eğitim organizasyonları ve promosyon dağıtımları için sık tercih edilir.

Kraft gövdeli promosyon kalemler, markasını daha doğal ve modern bir sunumla öne çıkarmak isteyen firmalar için etkili bir seçenektir. Günlük kullanımda pratikliği sayesinde müşterilerinizin ve hedef kitlenizin elinde uzun süre kalır. Bu da marka görünürlüğünü artıran önemli bir avantaj sağlar.

Promosyon kraft gövde tükenmez kalem GDK-100 modeli, uygun maliyetli olması sayesinde yüksek adetli promosyon dağıtımları için de idealdir. Logo baskı uygulamalarında baskı tekniğine göre minimum sipariş adetleri değişebilir. Bu nedenle baskılı siparişlerde adet ve üretim detayları teklif aşamasında netleştirilir.

Renk seçenekleri sipariş öncesinde stok durumuna göre kontrol edilir. Kurumsal promosyon siparişlerinde seçilen renklerin ve baskı planının üretim öncesinde teyit edilmesi önerilir.

Ürün Özellikleri

• Model: GDK-100  
• Tür: Kraft gövde tükenmez kalem  
• Gövde: Kraft / doğal karton görünümlü gövde  
• Kullanım: Günlük yazım için uygun  
• Baskısız Minimum Sipariş: 100 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  
• Renk Seçenekleri: Mavi, Beyaz, Kırmızı, Lacivert, Sarı, Siyah, Turuncu, Yeşil  
• Renkler için stok kontrolü yapılması önerilir

Promosyon kraft gövde tükenmez kalem GDK-100 ile firmanızın logosunu ekonomik ve dikkat çekici bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon kalem siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p13",
  slug: "promosyon-geri-donusumlu-tohumlu-kalem-gdk-110",
  title: "Promosyon Geri Dönüşümlü Tohumlu Tükenmez Kalem GDK-110",
  category: "Kalem",
  image: "/products/promosyon-geri-donusumlu-tohumlu-kalem-gdk-110.jpg",

  shortDesc:
    "Promosyon geri dönüşümlü tohumlu kalem GDK-110 çevre dostu tasarımıyla dikkat çeken kurumsal promosyon kalem modelidir. Baskısız minimum 100 adet sipariş verilebilir, baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon geri dönüşümlü tohumlu tükenmez kalem GDK-110, çevre dostu promosyon ürünleri arasında öne çıkan özel bir kalem modelidir. Doğaya duyarlı tasarımı sayesinde kurumsal etkinlikler, fuarlar, sürdürülebilirlik temalı organizasyonlar ve çevreci markalar tarafından sık tercih edilmektedir.

Kalemin gövdesi geri dönüştürülebilir kraft malzemeden üretilmiştir ve üst kısmında bulunan özel tohum kapsülü sayesinde kullanım sonrası doğaya bırakılarak bitki yetiştirilmesine olanak sağlar. Bu özellik, markanızın çevre bilincini vurgulayan güçlü bir promosyon etkisi oluşturur.

Promosyon kalemler, marka bilinirliğini artırmak için en etkili promosyon ürünlerinden biridir. Günlük kullanımda sürekli elde bulunan kalemler, firmanızın reklamını uzun süre taşır ve hedef kitlenizle kalıcı bir iletişim kurmanıza yardımcı olur.

Promosyon geri dönüşümlü tohumlu kalem GDK-110 modeli özellikle sürdürülebilir promosyon ürünleri arayan firmalar için ideal bir seçenektir. Kurumsal promosyon dağıtımlarında hem dikkat çekici hem de çevreci bir alternatif sunar.

Baskısız siparişlerde minimum adet 100 olup baskılı siparişlerde minimum adet üretim koşullarına göre değişebilir. Sipariş öncesinde stok kontrolü yapılması önerilir.

Ürün Özellikleri

• Model: GDK-110  
• Tür: Geri dönüşümlü tohumlu tükenmez kalem  
• Gövde: Kraft / geri dönüştürülebilir malzeme  
• Tohum özelliği: Kullanım sonrası doğaya ekilebilir  
• Baskısız Minimum Sipariş: 100 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  
• Renk: Yeşil  
• Stok durumu sipariş öncesinde kontrol edilmelidir

Promosyon geri dönüşümlü tohumlu kalem GDK-110 ile firmanızın çevre dostu yaklaşımını müşterilerinize yansıtabilir ve markanızı sürdürülebilir promosyon ürünleri ile öne çıkarabilirsiniz. Kurumsal promosyon kalem siparişleri için hemen teklif alabilirsiniz.
`,
},
{
  id: "p14",
  slug: "promosyon-geri-donusumlu-tohumlu-kalem-gdk-120",
  title: "Promosyon Geri Dönüşümlü Tohumlu Tükenmez Kalem GDK-120",
  category: "Kalem",
  image: "/products/promosyon-geri-donusumlu-tohumlu-kalem-gdk-120.jpg",

  shortDesc:
    "Promosyon geri dönüşümlü tohumlu kalem GDK-120, çevre dostu tasarımıyla dikkat çeken kurumsal promosyon kalem modelidir. Baskısız minimum 100 adet sipariş verilebilir, baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon geri dönüşümlü tohumlu tükenmez kalem GDK-120, doğa dostu tasarımı ile öne çıkan çevreci promosyon kalem modellerinden biridir. Kraft gövdesi ve tohum kapsülü sayesinde hem kullanışlı hem de sürdürülebilir bir promosyon ürünü sunar.

Kalemin üst kısmında bulunan özel tohum kapsülü sayesinde ürün kullanıldıktan sonra doğaya ekilebilir ve bitki yetişmesine katkı sağlar. Bu özellik özellikle çevre bilinci yüksek markalar, eğitim kurumları ve sürdürülebilirlik temalı etkinlikler için oldukça dikkat çekici bir promosyon ürünüdür.

Promosyon kalemler, marka bilinirliğini artırmak ve müşterilerle kalıcı iletişim kurmak için en çok tercih edilen promosyon ürünlerinden biridir. Günlük kullanımda sürekli elde bulunan kalemler markanızın görünürlüğünü uzun süre sağlar.

Promosyon geri dönüşümlü tohumlu kalem GDK-120 modeli farklı renk seçenekleri ile sunulmaktadır. Sipariş sırasında tercih edilen renklerin stok durumuna göre kontrol edilmesi önerilir.

Baskısız siparişlerde minimum adet 100 olup baskılı siparişlerde minimum sipariş miktarı üretim koşullarına göre değişebilir.

Ürün Özellikleri

• Model: GDK-120  
• Tür: Geri dönüşümlü tohumlu tükenmez kalem  
• Gövde: Kraft / geri dönüştürülebilir malzeme  
• Özellik: Tohum kapsülü sayesinde doğaya ekilebilir  
• Baskısız Minimum Sipariş: 100 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  
• Renk Seçenekleri: Beyaz, Turuncu, Yeşil, Sarı, Kırmızı, Lacivert, Siyah  
• Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir

Promosyon geri dönüşümlü tohumlu kalem GDK-120 ile firmanızın çevre dostu yaklaşımını müşterilerinize gösterebilir ve sürdürülebilir promosyon ürünleri ile markanızı öne çıkarabilirsiniz. Kurumsal promosyon kalem siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p15",
  slug: "promosyon-tasli-siboplu-cakmak-cm-200",
  title: "Promosyon Taşlı Siboplu Çakmak CM-200",
  category: "Çakmak",
  image: "/products/promosyon-tasli-siboplu-cakmak-cm-200.jpg",

  shortDesc:
    "Promosyon taşlı siboplu çakmak CM-200, logo baskıya uygun yüzeyi ile kurumsal promosyon çalışmalarında sık tercih edilen ekonomik bir çakmak modelidir. Baskısız minimum sipariş 100 adettir, baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon taşlı siboplu çakmak CM-200, kurumsal promosyon ürünleri arasında en çok tercih edilen ekonomik ve kullanışlı çakmak modellerinden biridir. Dayanıklı yapısı ve logo baskıya uygun yüzeyi sayesinde markanızın reklamını uzun süre taşıyabilecek etkili bir promosyon ürünüdür.

Kasai ölçülerinde tasarlanan bu çakmak modeli 7.6 x 2.2 cm ölçülerine sahiptir. Ergonomik yapısı sayesinde günlük kullanım için oldukça pratiktir ve geniş baskı yüzeyi sayesinde firmanızın logosu çakmak üzerine net şekilde uygulanabilir.

Promosyon çakmaklar, özellikle yüksek adetli promosyon dağıtımları için en ekonomik ve etkili reklam ürünlerinden biridir. Fuarlar, organizasyonlar, kampanyalar ve kurumsal etkinliklerde geniş kitlelere ulaşmak için tercih edilir.

Taşlı siboplu mekanizması sayesinde güvenli ve pratik kullanım sunan CM-200 modeli dayanıklı yapısıyla uzun süreli kullanım sağlar.

Baskısız siparişlerde minimum adet 100 olup baskılı siparişlerde minimum sipariş miktarı üretim planına göre değişebilir. Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir.

Ürün Özellikleri

• Model: CM-200  
• Tür: Taşlı siboplu çakmak  
• Ölçü: 7.6 x 2.2 cm  
• Mekanizma: Taşlı siboplu sistem  
• Baskı: Logo baskıya uygun yüzey  
• Baskısız Minimum Sipariş: 100 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  
• Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir

Promosyon taşlı siboplu çakmak CM-200 ile firmanızın logosunu ekonomik ve etkili bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon çakmak siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p16",
  slug: "promosyon-manyetolu-siboplu-cakmak-cm-250",
  title: "Promosyon Manyetolu Siboplu Çakmak CM-250",
  category: "Çakmak",
  image: "/products/promosyon-manyetolu-siboplu-cakmak-cm-250.jpg",

  shortDesc:
    "Promosyon manyetolu siboplu çakmak CM-250, logo baskıya uygun yüzeyi ve mini boy tasarımıyla kurumsal promosyon çalışmaları için ideal bir çakmak modelidir. Baskısız minimum sipariş 100 adet olup baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon manyetolu siboplu çakmak CM-250, ekonomik ve kullanışlı yapısı sayesinde kurumsal promosyon ürünleri arasında sık tercih edilen çakmak modellerinden biridir. Mini boy tasarımı ve dayanıklı mekanizması sayesinde günlük kullanım için oldukça pratiktir.

Manyetolu siboplu mekanizması ile kolay ateşleme sağlayan bu model, geniş baskı yüzeyi sayesinde firmanızın logosunun net şekilde uygulanmasına olanak sağlar. Tampon baskı veya UV baskı teknikleri ile marka logosu çakmak üzerine profesyonel şekilde uygulanabilir.

Promosyon çakmaklar özellikle fuarlar, kampanyalar, organizasyonlar ve kurumsal etkinliklerde geniş kitlelere ulaşmak için kullanılan ekonomik promosyon ürünlerinden biridir. Günlük kullanımda sık kullanılan bir ürün olması sayesinde markanızın görünürlüğünü uzun süre artırır.

CM-250 modeli doldurulabilir yapısı sayesinde uzun süre kullanılabilir ve bu da promosyon ürününün reklam etkisini artırır.

Baskısız siparişlerde minimum adet 100 olup baskılı siparişlerde minimum sipariş miktarı üretim planına göre değişebilir. Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir.

Ürün Özellikleri

• Model: CM-250  
• Tür: Manyetolu siboplu çakmak  
• Ölçü: 6.2 x 2.1 cm  
• Mekanizma: Manyetolu siboplu sistem  
• Baskı Türü: Tampon baskı / UV baskı  
• Özellik: Doldurulabilir  
• Baskısız Minimum Sipariş: 100 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  
• Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir

Promosyon manyetolu siboplu çakmak CM-250 ile firmanızın logosunu ekonomik ve etkili bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon çakmak siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p17",
  slug: "promosyon-manyetolu-siboplu-cakmak-cm-300",
  title: "Promosyon Manyetolu Siboplu Çakmak CM-300",
  category: "Çakmak",
  image: "/products/promosyon-manyetolu-siboplu-cakmak-cm-300.jpg",

  shortDesc:
    "Promosyon manyetolu siboplu çakmak CM-300, logo baskıya uygun yüzeyi ve dayanıklı yapısıyla kurumsal promosyon çalışmalarında tercih edilen ekonomik bir çakmak modelidir. Baskısız minimum sipariş 100 adet olup baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon manyetolu siboplu çakmak CM-300, kurumsal promosyon ürünleri arasında en çok tercih edilen çakmak modellerinden biridir. Dayanıklı gövde yapısı ve geniş baskı alanı sayesinde firmanızın logosu çakmak üzerine net ve profesyonel şekilde uygulanabilir.

Manyetolu mekanizması sayesinde kolay ateşleme sağlayan bu model günlük kullanım için oldukça pratiktir. Doldurulabilir yapısı sayesinde uzun süre kullanılabilir ve bu da promosyon ürününün reklam etkisini artırır.

Promosyon çakmaklar fuarlar, kampanyalar, organizasyonlar ve kurumsal etkinliklerde geniş kitlelere ulaşmak için kullanılan ekonomik promosyon ürünlerinden biridir. Günlük kullanımda sık kullanılan bir ürün olması sayesinde markanızın görünürlüğünü uzun süre artırır.

CM-300 modeli özellikle uygun fiyatlı promosyon dağıtımları için ideal bir seçenek sunar.

Baskısız siparişlerde minimum adet 100 olup baskılı siparişlerde minimum sipariş miktarı üretim planına göre değişebilir.

Ürün Özellikleri

• Model: CM-300  
• Tür: Manyetolu siboplu çakmak  
• Ölçü: 8.1 x 2.3 cm  
• Mekanizma: Manyetolu sistem  
• Baskı Türü: Tampon baskı / UV baskı  
• Özellik: Doldurulabilir  
• Baskısız Minimum Sipariş: 100 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  

Promosyon manyetolu siboplu çakmak CM-300 ile firmanızın logosunu ekonomik ve etkili bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon çakmak siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p18",
  slug: "promosyon-manyetolu-turbo-ruzgar-cakmak-cm-350",
  title: "Promosyon Manyetolu Turbo Rüzgar Çakmak CM-350",
  category: "Çakmak",
  image: "/products/promosyon-manyetolu-turbo-ruzgar-cakmak-cm-350.jpg",

  shortDesc:
    "Promosyon manyetolu turbo rüzgar çakmak CM-350, güçlü alev sistemi ve logo baskıya uygun yüzeyi ile kurumsal promosyon çalışmaları için ideal bir çakmak modelidir. Baskısız minimum sipariş 100 adet olup baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon manyetolu turbo rüzgar çakmak CM-350, güçlü turbo alev sistemi sayesinde rüzgarlı ortamlarda bile kolay kullanım sağlayan dayanıklı bir promosyon çakmak modelidir. Kurumsal promosyon ürünleri arasında hem kullanışlı hem de dikkat çekici olması nedeniyle sıklıkla tercih edilir.

Turbo rüzgar mekanizması sayesinde standart çakmaklara göre daha güçlü bir ateşleme sunar. Manyetolu sistemi sayesinde pratik kullanım sağlar ve doldurulabilir yapısı ile uzun süre kullanılabilir.

Promosyon çakmaklar, özellikle fuarlar, organizasyonlar, kampanyalar ve kurumsal etkinliklerde geniş kitlelere ulaşmak için tercih edilen ekonomik promosyon ürünlerinden biridir. Günlük kullanımda sık kullanılan bir ürün olması markanızın görünürlüğünü artırır.

CM-350 modeli yerli üretim olması sayesinde kaliteli malzeme yapısı ile uzun ömürlü kullanım sunar. Geniş baskı yüzeyi sayesinde firmanızın logosu çakmak üzerine tampon baskı veya UV baskı yöntemi ile uygulanabilir.

Baskısız siparişlerde minimum adet 100 olup baskılı siparişlerde minimum sipariş miktarı üretim planına göre değişebilir. Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir.

Ürün Özellikleri

• Model: CM-350  
• Tür: Manyetolu turbo rüzgar çakmak  
• Ölçü: 7.8 x 2.4 cm  
• Mekanizma: Turbo rüzgar sistemi  
• Baskı Türü: Tampon baskı / UV baskı  
• Özellik: Doldurulabilir  
• Üretim: Yerli üretim  
• Baskısız Minimum Sipariş: 100 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  
• Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir

Promosyon manyetolu turbo rüzgar çakmak CM-350 ile firmanızın logosunu ekonomik ve etkili bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon çakmak siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p19",
  slug: "promosyon-anahtarlik-an-100",
  title: "Promosyon Anahtarlık AN-100",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-100.jpg",

  shortDesc:
    "Promosyon anahtarlık AN-100, lazer baskıya uygun metal yüzeyi ve şık tasarımı ile kurumsal promosyon çalışmalarında sık tercih edilen bir anahtarlık modelidir. Baskısız minimum sipariş 100 adet olup baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon anahtarlık AN-100, şık tasarımı ve dayanıklı yapısı sayesinde kurumsal promosyon ürünleri arasında sık tercih edilen anahtarlık modellerinden biridir. Metal yüzeyi ve kaliteli malzemesi sayesinde firmanızın logosu lazer baskı yöntemi ile anahtarlık üzerine net ve kalıcı şekilde uygulanabilir.

Promosyon anahtarlıklar, günlük hayatta sürekli kullanılan ürünler arasında yer aldığı için markanızın uzun süre görünür olmasını sağlar. Araç anahtarı, ev anahtarı veya ofis anahtarlarında kullanılan bu ürünler, markanızın reklamını sürekli olarak taşır.

AN-100 modeli çift yön baskıya uygun yapısı sayesinde logo veya marka mesajının daha dikkat çekici şekilde sunulmasına olanak sağlar. Şık tasarımı sayesinde kurumsal etkinlikler, fuarlar, müşteri ziyaretleri ve promosyon kampanyalarında etkili bir tanıtım ürünü olarak tercih edilir.

Ürünler genellikle şeffaf poşet ambalaj ile gönderilmektedir. Renk seçenekleri sipariş sırasında stok durumuna göre kontrol edilmelidir.

Baskısız siparişlerde minimum adet 100 olup baskılı siparişlerde minimum sipariş miktarı üretim planına göre değişebilir.

Ürün Özellikleri

• Model: AN-100  
• Tür: Promosyon anahtarlık  
• Baskı Türü: Lazer baskı  
• Baskı: Çift yön baskıya uygun  
• Ölçü: 11.6 x 1.8 cm  
• Ambalaj: Şeffaf poşet  
• Baskısız Minimum Sipariş: 100 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  
• Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir  

Promosyon anahtarlık AN-100 ile firmanızın logosunu şık ve profesyonel bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon anahtarlık siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p20",
  slug: "promosyon-tarihsiz-defter-td-101",
  title: "Promosyon Tarihsiz Defter TD-101",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-101.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-101, şık kapak tasarımı ve kurumsal logo baskıya uygun yapısı ile promosyon ürünleri arasında sık tercih edilen bir defter modelidir. Baskısız minimum sipariş 30 adet olup baskılı siparişlerde minimum adet değişebilir.",

  longDesc: `
Promosyon tarihsiz defter TD-101, kurumsal promosyon ürünleri arasında hem kullanışlı hem de prestijli bir seçenek sunan defter modellerinden biridir. Şık kapak tasarımı ve kaliteli malzeme yapısı sayesinde günlük kullanım için oldukça idealdir.

Tarihsiz yapısı sayesinde kullanıcılar defteri istedikleri zaman kullanmaya başlayabilir. Bu özellik özellikle ofis çalışanları, öğrenciler ve iş dünyasında not alma amacıyla kullanılan promosyon ürünleri için büyük avantaj sağlar.

Promosyon defterler, marka bilinirliğini artırmak ve müşterilerle kalıcı iletişim kurmak için en etkili promosyon ürünlerinden biridir. Günlük hayatta sürekli kullanılan defterler sayesinde firmanızın logosu uzun süre görünür kalır.

TD-101 modeli kurumsal etkinliklerde, fuarlarda, seminerlerde ve müşteri ziyaretlerinde dağıtılabilecek şık bir promosyon ürünüdür. Kapak yüzeyi logo baskıya uygun olup firmanızın markası defter üzerine profesyonel şekilde uygulanabilir.

Baskısız siparişlerde minimum adet 30 olup baskılı siparişlerde minimum sipariş miktarı üretim planına göre değişebilir. Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir.

Ürün Özellikleri

• Model: TD-101  
• Tür: Promosyon tarihsiz defter  
• Ölçü: 14.5 x 21 cm  
• Kapak: Şık ve dayanıklı kapak tasarımı  
• Kullanım: Ofis, eğitim ve günlük not alma  
• Baskısız Minimum Sipariş: 30 adet  
• Baskılı siparişlerde minimum adet üretim durumuna göre değişebilir  
• Renk seçenekleri için sipariş sırasında stok kontrolü yapılması önerilir

Promosyon tarihsiz defter TD-101 ile firmanızın logosunu prestijli ve profesyonel bir şekilde müşterilerinize ulaştırabilirsiniz. Kurumsal promosyon defter siparişleri için hızlı teklif alabilirsiniz.
`,
},
{
  id: "p21",
  slug: "promosyon-usb-bellek-ub-100",
  title: "Promosyon USB Bellek UB-100",
  category: "USB Bellek",
  image: "/products/promosyon-usb-bellek-ub-100.jpg",
  shortDesc:
    "Promosyon USB bellek UB-100, farklı kapasite ve renk seçenekleriyle kurumsal kullanıma uygun şık bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş için idealdir.",
  longDesc: `
Promosyon USB Bellek UB-100, kurumsal firmaların marka görünürlüğünü artırmak için tercih ettiği kullanışlı ve şık promosyon ürünleri arasında yer alır. Günlük kullanımda pratik olması, uzun süre saklanabilen bir tanıtım ürünü olması ve farklı kapasite seçenekleri sunması sayesinde fuar, seminer, bayi toplantısı, lansman ve kurumsal hediye organizasyonlarında etkili bir çözüm sunar.

UB-100 model promosyon USB bellek; 8GB, 16GB, 32GB, 64GB ve 128GB kapasite alternatifleriyle farklı ihtiyaçlara hitap eder. Ürün; beyaz, siyah, lacivert, kırmızı, turkuaz, yeşil, sarı, turuncu, füme, gümüş ve altın gibi farklı renk seçenekleriyle kurumsal kimliğe uygun sipariş oluşturma imkanı sağlar. Renk ve kapasite seçenekleri stok durumuna göre değişebildiği için sipariş öncesinde güncel uygunluk bilgisi talep edilmesi önerilir.

Bu promosyon USB bellek modeli baskılı ve baskısız olarak tercih edilebilir. Logo baskılı promosyon USB bellek siparişlerinde marka adı, firma logosu veya kampanya mesajı ürün üzerine uygulanarak daha profesyonel ve kurumsal bir görünüm elde edilir. Baskısız siparişlerde ise sade ve şık yapısıyla şirket içi kullanım, personel dağıtımı veya genel promosyon amaçlı değerlendirme yapılabilir. Baskılı ve baskısız minimum sipariş adetleri farklılık gösterebildiğinden, sipariş sırasında adet bilgisi için teklif alınması gerekir.

Promosyon USB bellek UB-100, döner kapaklı pratik tasarımı sayesinde kapağın kaybolma riskini azaltır ve kullanım kolaylığı sağlar. Hem günlük ofis kullanımına hem de müşterilere verilecek tanıtım ürünlerine uygun olması, bu ürünü toptan promosyon ürünleri arasında öne çıkarır. Bilgisayar, sunum dosyaları, kataloglar, fiyat listeleri, tanıtım içerikleri ve kurumsal evrakların paylaşımında sık tercih edilen bir modeldir.

Kurumsal promosyon ürünleri arasında USB belleklerin öne çıkmasının en büyük nedeni, doğrudan işlevsel olmasıdır. Kullanıcı tarafından aktif şekilde kullanılan bir ürün olması, markanızın daha uzun süre görünür kalmasına katkı sağlar. Bu nedenle logo baskılı promosyon USB bellek ürünleri, reklam ve tanıtım bütçesini daha verimli kullanmak isteyen firmalar için güçlü bir tercihtir.

Promosyon USB bellek fiyatları; tercih edilen kapasiteye, baskı seçeneğine, sipariş adedine ve üretim detaylarına göre değişebilir. Toplu alım, kurumsal sipariş ve özel baskı talepleriniz için teklif alarak firmanıza en uygun seçeneği belirleyebilirsiniz. Renk seçenekleri ve kapasite uygunluğu sipariş aşamasında teyit edilmelidir.

Eğer firmanız için hem kullanışlı hem de profesyonel bir tanıtım ürünü arıyorsanız, Promosyon USB Bellek UB-100 modeli etkili bir tercih olacaktır. Logo baskılı promosyon USB bellek, kurumsal hediye ürünleri ve toptan promosyon çözümleri için hemen teklif alabilirsiniz.
`
},
{
  id: "p22",
  slug: "promosyon-usb-bellek-ub-101",
  title: "Promosyon USB Bellek UB-101",
  category: "USB Bellek",
  image: "/products/promosyon-usb-bellek-ub-101.jpg",
  shortDesc:
    "Promosyon USB bellek UB-101 modeli, farklı kapasite ve renk seçenekleriyle kurumsal tanıtım için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş imkanı sunar.",
  longDesc: `
Promosyon USB Bellek UB-101, kurumsal tanıtım ve marka bilinirliği için en çok tercih edilen promosyon ürünleri arasında yer alan kullanışlı bir depolama çözümüdür. Günlük kullanımda pratik olması ve uzun süre saklanabilen bir ürün olması sayesinde firmaların reklam ve tanıtım çalışmalarında etkili bir rol oynar.

UB-101 model USB bellek; 8GB, 16GB, 32GB, 64GB ve 128GB kapasite seçenekleriyle farklı ihtiyaçlara hitap eder. Ayrıca bazı modellerde USB 3.0 desteği bulunarak daha hızlı veri aktarımı sağlanabilir. Bu sayede sunum dosyaları, kataloglar, tanıtım videoları, fiyat listeleri ve çeşitli dijital içerikler kolayca paylaşılabilir.

Ürün tasarımı döner kapaklı metal gövde yapısına sahiptir. Bu yapı hem şık bir görünüm sunar hem de USB girişinin korunmasına yardımcı olur. Sağlam ve dayanıklı yapısı sayesinde uzun süre kullanılabilir ve marka görünürlüğünü artıran etkili bir promosyon ürünü haline gelir.

Promosyon USB bellek UB-101 modeli farklı renk seçenekleriyle üretilebilmektedir. Kurumsal renklerinize uygun seçenekler ile sipariş oluşturabilirsiniz. Renk seçenekleri ve kapasite alternatifleri stok durumuna göre değişebileceği için sipariş sırasında uygunluk bilgisi talep edilmesi önerilir.

Ürün baskılı ve baskısız olarak sipariş verilebilir. Logo baskılı promosyon USB bellek tercih edildiğinde firmanızın logosu veya marka ismi ürün üzerine uygulanarak daha profesyonel bir kurumsal tanıtım yapılabilir. Fuarlar, seminerler, lansmanlar, bayi toplantıları ve kurumsal etkinliklerde dağıtılabilecek etkili bir promosyon ürünüdür.

Baskılı ve baskısız siparişlerde minimum sipariş adetleri farklılık gösterebilir. Kurumsal toplu siparişler için adet bilgisi, baskı yöntemi ve teslim süresi gibi detaylar sipariş sırasında netleştirilir.

Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş adedine ve baskı tercihine göre değişiklik gösterebilir. Kurumsal firmalar için toplu alım ve özel baskı seçenekleriyle ekonomik promosyon çözümleri sunulmaktadır.

Eğer firmanız için hem kullanışlı hem de uzun süre hatırlanacak bir promosyon ürünü arıyorsanız, Promosyon USB Bellek UB-101 modeli güçlü bir tercihtir. Logo baskılı promosyon USB bellek siparişi için teklif alabilir ve markanızı müşterilerinize profesyonel bir şekilde ulaştırabilirsiniz.
`
},
{
  id: "p23",
  slug: "promosyon-usb-bellek-ub-110",
  title: "Promosyon USB Bellek UB-110",
  category: "USB Bellek",
  image: "/products/promosyon-usb-bellek-ub-110.jpg",
  shortDesc:
    "Promosyon USB bellek UB-110 anahtarlık tasarımı ile hem kullanışlı hem de şık bir kurumsal promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş için uygundur.",
  longDesc: `
Promosyon USB Bellek UB-110 modeli, anahtarlık tasarımı sayesinde günlük kullanımda oldukça pratik olan ve kurumsal tanıtım çalışmalarında sık tercih edilen promosyon ürünleri arasında yer alır. Hem taşınabilir hem de dayanıklı yapısı sayesinde kullanıcıların sürekli yanında taşıyabileceği bir ürün olması, marka görünürlüğünü uzun süre artırır.

UB-110 model promosyon USB bellek; 16GB, 32GB ve 128GB kapasite seçenekleriyle sunulmaktadır. Bu kapasite seçenekleri sayesinde sunum dosyaları, kataloglar, tanıtım videoları, fiyat listeleri ve çeşitli dijital içerikler kolaylıkla saklanabilir ve paylaşılabilir.

Metal gövdeli tasarımı sayesinde hem şık hem de dayanıklı bir yapı sunar. Döner kapak mekanizması USB girişini korurken aynı zamanda ürünün kapağının kaybolmasını engeller. Anahtarlık halkası ile birlikte kullanılabilmesi sayesinde anahtar, çanta veya kartlık gibi eşyalarla birlikte taşınabilir.

Promosyon USB bellek UB-110 modeli baskılı veya baskısız olarak sipariş verilebilir. Logo baskılı promosyon USB bellek tercih edildiğinde firmanızın logosu veya marka adı ürün üzerine uygulanarak kurumsal tanıtım etkisi artırılabilir. Bu özellik sayesinde fuar, seminer, lansman, bayi toplantıları ve kurumsal etkinliklerde dağıtılabilecek güçlü bir reklam ürünü haline gelir.

Kurumsal promosyon ürünleri arasında USB belleklerin en büyük avantajı doğrudan kullanılabilir bir ürün olmasıdır. Kullanıcı tarafından aktif şekilde kullanılan bu ürünler, firmanızın markasının daha uzun süre hatırlanmasını sağlar.

Promosyon USB bellek UB-110 modeli için baskılı ve baskısız siparişlerde minimum sipariş adetleri değişiklik gösterebilir. Ayrıca kapasite seçenekleri ve stok durumu sipariş sırasında teyit edilmelidir. Kurumsal toplu siparişlerde detaylı bilgi ve teklif almak için iletişime geçebilirsiniz.

Eğer firmanız için hem şık hem de işlevsel bir promosyon ürünü arıyorsanız, Promosyon USB Bellek UB-110 modeli etkili bir tercih olacaktır. Logo baskılı promosyon USB bellek siparişi vererek markanızı müşterilerinize profesyonel bir şekilde ulaştırabilirsiniz.
`
},
{
  id: "p24",
  slug: "promosyon-usb-bellek-ub-120",
  title: "Promosyon USB Bellek UB-120",
  category: "USB Bellek",
  image: "/products/promosyon-usb-bellek-ub-120.jpg",
  shortDesc:
    "Promosyon USB bellek UB-120 metal gövdeli şık tasarımıyla kurumsal promosyon ürünleri arasında öne çıkar. Logo baskılı veya baskısız toplu sipariş için uygundur.",
  longDesc: `
Promosyon USB Bellek UB-120 modeli, metal gövde tasarımı ve modern görünümü ile kurumsal promosyon ürünleri arasında en çok tercih edilen modellerden biridir. Hem şık hem de dayanıklı yapısı sayesinde firmaların uzun süre kullanılabilen bir tanıtım ürünü sunmasına yardımcı olur.

UB-120 promosyon USB bellek modeli farklı kapasite seçenekleri ile sunulmaktadır. Ürün 8GB, 16GB, 32GB, 64GB ve 128GB kapasite alternatifleriyle sipariş edilebilir. Ayrıca bazı modellerde USB 3.0 desteği bulunarak daha hızlı veri aktarımı sağlanabilir. Bu sayede kataloglar, tanıtım dosyaları, sunumlar, video içerikleri ve kurumsal dokümanlar kolayca paylaşılabilir.

Metal gövdeli ve anahtarlık halkalı tasarımı sayesinde ürün hem estetik hem de kullanışlıdır. Anahtarlık tasarımı USB belleğin kolay taşınmasını sağlar ve günlük kullanımda sürekli yanınızda bulunabilecek bir promosyon ürünü haline getirir. Bu özellik sayesinde marka görünürlüğü uzun süre devam eder.

Promosyon USB bellek UB-120 modeli farklı renk seçenekleri ile üretilebilmektedir. Kurumsal kimliğinize uygun renk seçenekleri tercih edilebilir. Renk ve kapasite seçenekleri stok durumuna göre değişebileceğinden sipariş öncesinde uygunluk bilgisinin teyit edilmesi önerilir.

Ürün baskılı veya baskısız olarak sipariş verilebilir. Logo baskılı promosyon USB bellek siparişlerinde firma logosu veya marka adı ürün üzerine uygulanarak kurumsal tanıtım gücü artırılır. Bu ürün özellikle fuarlar, seminerler, lansmanlar, bayi toplantıları ve kurumsal etkinliklerde dağıtılabilecek etkili bir promosyon ürünüdür.

Promosyon USB bellek siparişlerinde minimum sipariş adetleri baskılı veya baskısız tercihe göre değişiklik gösterebilir. Kurumsal toplu siparişlerde adet, baskı türü ve teslim süresi gibi detaylar sipariş sırasında belirlenmektedir.

Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş miktarına ve baskı tercihine göre değişebilir. Kurumsal firmalar için toplu sipariş ve logo baskılı üretim seçenekleri ile uygun maliyetli promosyon çözümleri sunulmaktadır.

Eğer firmanız için hem şık hem de uzun süre kullanılabilecek bir tanıtım ürünü arıyorsanız Promosyon USB Bellek UB-120 modeli güçlü bir tercih olacaktır. Logo baskılı promosyon USB bellek siparişi için teklif alarak markanızı müşterilerinize profesyonel şekilde ulaştırabilirsiniz.
`
},
{
  id: "p25",
  slug: "promosyon-metal-usb-bellek-ub-130",
  title: "Promosyon Metal USB Bellek UB-130",
  category: "USB Bellek",
  image: "/products/promosyon-metal-usb-bellek-ub-130.jpg",
  shortDesc:
    "Promosyon metal USB bellek UB-130, şık metal gövdesi ve anahtarlık tasarımı ile kurumsal tanıtım için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri sunar.",
  longDesc: `
Promosyon Metal USB Bellek UB-130 modeli, dayanıklı metal gövdesi ve şık tasarımı ile kurumsal promosyon ürünleri arasında öne çıkan modellerden biridir. Modern ve profesyonel görünümü sayesinde firmaların marka tanıtımında etkili bir reklam ürünü olarak tercih edilir.

UB-130 promosyon USB bellek modeli farklı kapasite seçenekleri ile üretilebilmektedir. Ürün; 8GB, 16GB, 32GB, 64GB ve 128GB kapasite alternatifleri ile sunulabilir. Ayrıca bazı modellerde USB 3.0 desteği bulunarak daha hızlı veri aktarımı sağlanabilir. Bu sayede sunum dosyaları, kataloglar, fiyat listeleri, tanıtım videoları ve kurumsal dokümanlar kolayca paylaşılabilir.

Metal gövde yapısı sayesinde ürün hem sağlam hem de uzun ömürlüdür. Üzerinde bulunan taşıma askısı sayesinde anahtarlık veya çanta ile birlikte rahatlıkla taşınabilir. Bu özellik USB belleğin günlük kullanımda sürekli kullanıcıyla birlikte olmasını sağlar ve markanızın görünürlüğünü artırır.

Promosyon USB bellek UB-130 modeli farklı renk detaylarına sahip seçeneklerle üretilebilir. Kurumsal renklerinize uygun seçenekler tercih edilebilir. Renk seçenekleri ve kapasite alternatifleri stok durumuna göre değişebileceğinden sipariş sırasında güncel bilgi alınması önerilir.

Ürün baskılı veya baskısız olarak sipariş verilebilir. Logo baskılı promosyon USB bellek siparişlerinde firmanızın logosu veya marka adı ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir tanıtım ürünü elde edebilirsiniz. Bu ürün özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek güçlü bir promosyon ürünüdür.

Promosyon USB bellek siparişlerinde minimum sipariş adetleri baskı tercihine göre değişiklik gösterebilir. Kurumsal toplu siparişlerde adet, baskı yöntemi ve teslim süresi gibi detaylar sipariş sırasında belirlenmektedir.

Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş miktarına ve baskı tercihine göre değişebilir. Kurumsal firmalar için toplu sipariş ve logo baskılı üretim seçenekleri ile ekonomik promosyon çözümleri sunulmaktadır.

Eğer firmanız için hem dayanıklı hem de prestijli bir promosyon ürünü arıyorsanız, Promosyon Metal USB Bellek UB-130 modeli etkili bir tercih olacaktır. Logo baskılı promosyon USB bellek siparişi vererek markanızı müşterilerinize profesyonel bir şekilde ulaştırabilirsiniz.
`
},

{
  id: "p26",
  slug: "promosyon-anahtarlik-an-111",
  title: "Promosyon Anahtarlık AN-111 | Logo Baskılı Kurumsal Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-111.jpg",
  shortDesc:
    "Promosyon anahtarlık AN-111, metal ve deri tasarımı ile kurumsal firmalar için şık bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımı için ideal bir anahtarlık modelidir.",

  longDesc: `
Promosyon anahtarlık AN-111 modeli, modern tasarımı ve kaliteli malzeme yapısı sayesinde kurumsal promosyon ürünleri arasında sık tercih edilen modellerden biridir. Metal ve deri detaylı tasarımı sayesinde hem şık hem de dayanıklı bir kullanım sunar.

Logo baskılı promosyon anahtarlık modelleri, firmaların marka bilinirliğini artırmak için en etkili promosyon ürünleri arasında yer almaktadır. Günlük hayatta sürekli kullanılan anahtarlıklar, markanızın kullanıcı ile uzun süre temas halinde olmasını sağlar.

Promosyon anahtarlık AN-111 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan baskısı uygulanabilir. Böylece ürün hem kullanışlı hem de etkili bir reklam ürünü haline gelir. Özellikle fuarlar, seminerler, lansmanlar, bayi toplantıları ve kurumsal etkinliklerde dağıtılabilecek ideal bir promosyon ürünüdür.

Metal gövde ve deri detaylı tasarımı sayesinde ürün oldukça dayanıklıdır ve uzun süre kullanılabilir. Anahtar halkası sayesinde anahtarlar ile birlikte kolayca taşınabilir. Bu sayede promosyon anahtarlık sürekli kullanımda olur ve markanızın görünürlüğünü artırır.

Promosyon anahtarlık siparişleri baskılı veya baskısız olarak verilebilir. Logo baskılı üretimlerde firmanızın kurumsal kimliği ürün üzerine uygulanarak profesyonel bir tanıtım ürünü elde edilir.

Minimum sipariş miktarı baskılı veya baskısız tercihe göre değişiklik gösterebilir. Sipariş vermeden önce güncel stok bilgisi ve üretim detayları için firmamızdan bilgi alınması önerilir.

Promosyon anahtarlık fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem şık hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Anahtarlık AN-111 modeli etkili bir tercih olacaktır. Logo baskılı promosyon anahtarlık siparişi vererek markanızı müşterilerinize ve iş ortaklarınıza profesyonel şekilde tanıtabilirsiniz.
`
},
{
  id: "p27",
  slug: "promosyon-anahtarlik-an-112",
  title: "Promosyon Anahtarlık AN-112 | Logo Baskılı Metal Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-112.jpg",
  shortDesc:
    "Promosyon anahtarlık AN-112, metal gövde ve şık tasarımı ile kurumsal firmalar için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımı için tercih edilmektedir.",

  longDesc: `
Promosyon anahtarlık AN-112 modeli, modern metal tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen anahtarlık modellerinden biridir. Şık ve sade görünümü sayesinde hem günlük kullanım için uygundur hem de firmaların marka tanıtımında etkili bir reklam ürünü olarak kullanılabilir.

Logo baskılı promosyon anahtarlık modelleri, firmaların kurumsal kimliğini müşterilerine ve iş ortaklarına ulaştırmanın en pratik yollarından biridir. Günlük hayatta sürekli kullanılan anahtarlıklar sayesinde markanız kullanıcıların yanında sürekli görünür olur.

Promosyon anahtarlık AN-112 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan uygulanabilir. Böylece ürün hem kullanışlı hem de profesyonel bir tanıtım ürünü haline gelir. Özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek etkili bir promosyon ürünüdür.

Metal gövde yapısı sayesinde ürün oldukça dayanıklıdır ve uzun süre kullanılabilir. Anahtar halkası ile birlikte kolayca taşınabilir ve günlük kullanımda rahatlık sağlar. Bu özellik promosyon ürünün uzun süre kullanılmasına ve markanızın daha fazla görünür olmasına yardımcı olur.

Promosyon anahtarlık siparişleri baskılı veya baskısız olarak verilebilir. Logo baskılı üretimlerde firmanızın logosu ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir promosyon ürünü elde edebilirsiniz.

Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir. Sipariş vermeden önce stok durumu ve üretim detayları hakkında bilgi alınması önerilir.

Promosyon anahtarlık fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem şık hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Anahtarlık AN-112 modeli etkili bir tercih olacaktır. Logo baskılı promosyon anahtarlık siparişi vererek markanızı müşterilerinize ve iş ortaklarınıza profesyonel şekilde ulaştırabilirsiniz.
`
},
{
  id: "p28",
  slug: "promosyon-anahtarlik-an-113",
  title: "Promosyon Anahtarlık AN-113 | Logo Baskılı Kurumsal Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-113.jpg",
  shortDesc:
    "Promosyon anahtarlık AN-113, metal ve deri detaylı şık tasarımı ile kurumsal firmalar için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında etkili bir çözümdür.",

  longDesc: `
Promosyon anahtarlık AN-113 modeli, şık metal gövde detayı ve deri görünümlü tasarımı ile kurumsal promosyon ürünleri arasında dikkat çeken modellerden biridir. Hem estetik hem de kullanışlı yapısı sayesinde firmaların marka tanıtımında tercih ettiği promosyon anahtarlık seçenekleri arasında yer alır.

Logo baskılı promosyon anahtarlık ürünleri, markaların müşterileri ve iş ortakları üzerinde kalıcı bir görünürlük sağlamasına yardımcı olur. Günlük yaşamda sürekli kullanılan anahtarlıklar, reklam etkisi uzun süre devam eden promosyon ürünleri arasında öne çıkar.

Promosyon anahtarlık AN-113 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan uygulanabilir. Böylece ürün, sadece kullanışlı bir aksesuar değil aynı zamanda etkili bir reklam ve tanıtım aracı haline gelir. Özellikle fuarlar, bayi toplantıları, seminerler, kurumsal etkinlikler ve promosyon dağıtımlarında tercih edilebilecek uygun bir modeldir.

Metal ve deri detaylı yapısı sayesinde ürün hem dayanıklı hem de prestijli bir görünüm sunar. Anahtar halkası ile kolay taşınabilir ve günlük kullanımda rahatlık sağlar. Bu da markanızın kullanıcıyla sürekli temas etmesine katkı sunar.

Promosyon anahtarlık siparişleri baskılı veya baskısız olarak verilebilir. Minimum sipariş adedi baskılı ve baskısız tercihe göre değişiklik gösterebilir. Sipariş öncesinde güncel stok bilgisi alınması tavsiye edilir.

Promosyon anahtarlık fiyatları sipariş miktarına, baskı tercihine ve üretim detaylarına göre değişebilir. Kurumsal firmalara özel toplu sipariş seçenekleri ile avantajlı fiyat çözümleri sunulmaktadır.

Eğer firmanız için hem şık hem de kullanışlı bir promosyon ürünü arıyorsanız, Promosyon Anahtarlık AN-113 modeli iyi bir tercih olacaktır. Logo baskılı promosyon anahtarlık siparişi ile markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p29",
  slug: "promosyon-anahtarlik-an-114",
  title: "Promosyon Anahtarlık AN-114 | Logo Baskılı Metal Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-114.jpg",
  shortDesc:
    "Promosyon anahtarlık AN-114, metal ve deri detaylı tasarımı ile kurumsal firmalar için şık ve dayanıklı bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında etkili bir çözümdür.",

  longDesc: `
Promosyon anahtarlık AN-114 modeli, modern metal tasarımı ve deri detayları ile kurumsal promosyon ürünleri arasında dikkat çeken anahtarlık modellerinden biridir. Şık ve prestijli görünümü sayesinde firmaların marka tanıtımı için tercih ettiği promosyon ürünleri arasında yer alır.

Logo baskılı promosyon anahtarlık ürünleri, firmaların marka bilinirliğini artırmak için en çok kullanılan promosyon ürünlerinden biridir. Günlük hayatta sürekli kullanılan anahtarlıklar, markanızın müşteriler ve iş ortakları tarafından sürekli görülmesini sağlar.

Promosyon anahtarlık AN-114 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan uygulanabilir. Böylece ürün hem kullanışlı bir aksesuar hem de etkili bir reklam ürünü haline gelir. Özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek ideal bir promosyon ürünüdür.

Metal gövde ve deri detaylı tasarımı sayesinde ürün hem dayanıklı hem de uzun ömürlüdür. Anahtar halkası ile birlikte kolayca taşınabilir ve günlük kullanımda rahatlık sağlar. Bu da promosyon ürünün sürekli kullanımda olmasını ve markanızın daha fazla görünür olmasını sağlar.

Promosyon anahtarlık siparişleri baskılı veya baskısız olarak verilebilir. Logo baskılı üretimlerde firmanızın logosu ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir tanıtım ürünü elde edilir.

Minimum sipariş adedi baskılı veya baskısız tercihe göre değişiklik gösterebilir. Sipariş vermeden önce güncel stok durumu hakkında bilgi alınması tavsiye edilir.

Promosyon anahtarlık fiyatları sipariş miktarına, baskı tercihine ve üretim detaylarına göre değişebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem şık hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Anahtarlık AN-114 modeli etkili bir tercih olacaktır. Logo baskılı promosyon anahtarlık siparişi vererek markanızı müşterilerinize ve iş ortaklarınıza profesyonel bir şekilde ulaştırabilirsiniz.
`
},
{
  id: "p30",
  slug: "promosyon-anahtarlik-an-115",
  title: "Promosyon Anahtarlık AN-115 | Logo Baskılı Metal Deri Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-115.jpg",
  shortDesc:
    "Promosyon anahtarlık AN-115, metal ve deri detaylı şık tasarımı ile kurumsal firmalar için ideal bir promosyon ürünüdür. Siyah, lacivert ve kırmızı renk seçenekleri ile logo baskılı veya baskısız toplu sipariş verilebilir.",

  longDesc: `
Promosyon anahtarlık AN-115 modeli, modern metal gövdesi ve deri detaylı tasarımı ile kurumsal promosyon ürünleri arasında dikkat çeken modellerden biridir. Şık görünümü ve dayanıklı yapısı sayesinde firmaların marka tanıtımında sıkça tercih edilen promosyon ürünleri arasında yer alır.

Logo baskılı promosyon anahtarlık ürünleri, markaların müşterileri ve iş ortakları üzerinde kalıcı bir etki bırakmasını sağlar. Günlük hayatta sürekli kullanılan anahtarlıklar, reklam etkisi uzun süre devam eden promosyon ürünlerinden biridir.

Promosyon anahtarlık AN-115 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan uygulanabilir. Bu sayede ürün hem kullanışlı bir aksesuar hem de etkili bir reklam aracı haline gelir. Özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek ideal bir promosyon ürünüdür.

Metal ve deri detaylı yapısı sayesinde ürün hem dayanıklı hem de uzun ömürlüdür. Anahtar halkası sayesinde kolay taşınabilir ve günlük kullanımda rahatlık sağlar. Bu özellik ürünün sürekli kullanımda olmasını ve markanızın daha fazla görünür olmasını sağlar.

Promosyon anahtarlık AN-115 modeli siyah, lacivert ve kırmızı renk seçenekleri ile üretilebilmektedir. Kurumsal renklerinize uygun seçenekleri tercih ederek marka bütünlüğünü koruyabilirsiniz.

Promosyon anahtarlık siparişleri baskılı veya baskısız olarak verilebilir. Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir. Sipariş öncesinde güncel stok bilgisi alınması tavsiye edilir.

Promosyon anahtarlık fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem şık hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Anahtarlık AN-115 modeli iyi bir tercih olacaktır. Logo baskılı promosyon anahtarlık siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı bir şekilde ulaştırabilirsiniz.
`
},
{
  id: "p31",
  slug: "promosyon-anahtarlik-an-116",
  title: "Promosyon Anahtarlık AN-116 | Logo Baskılı Metal Deri Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-116.jpg",
  shortDesc:
    "Promosyon anahtarlık AN-116, metal ve deri detaylı şık tasarımı ile kurumsal firmalar için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında etkili bir çözümdür.",

  longDesc: `
Promosyon anahtarlık AN-116 modeli, modern metal gövde tasarımı ve deri detaylı yapısı ile kurumsal promosyon ürünleri arasında dikkat çeken anahtarlık modellerinden biridir. Şık ve sade tasarımı sayesinde hem günlük kullanım için uygundur hem de firmaların marka tanıtımında etkili bir reklam ürünü olarak kullanılabilir.

Logo baskılı promosyon anahtarlık ürünleri, markaların müşterileri ve iş ortakları üzerinde kalıcı bir görünürlük oluşturmasına yardımcı olur. Günlük yaşamda sürekli kullanılan anahtarlıklar sayesinde markanız kullanıcıların yanında uzun süre yer alır.

Promosyon anahtarlık AN-116 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan uygulanabilir. Böylece ürün hem kullanışlı bir aksesuar hem de etkili bir reklam aracı haline gelir. Özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek ideal bir promosyon ürünüdür.

Metal gövde ve deri detaylı tasarım ürünün hem dayanıklı hem de uzun ömürlü olmasını sağlar. Anahtar halkası sayesinde kolay taşınabilir ve günlük kullanımda rahatlık sağlar. Bu da promosyon ürünün sürekli kullanımda olmasını ve markanızın daha fazla görünür olmasını sağlar.

Promosyon anahtarlık siparişleri baskılı veya baskısız olarak verilebilir. Logo baskılı üretimlerde firmanızın logosu ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir promosyon ürünü elde edebilirsiniz.

Minimum sipariş adedi baskılı veya baskısız tercihe göre değişiklik gösterebilir. Sipariş öncesinde güncel stok bilgisi alınması tavsiye edilir.

Promosyon anahtarlık fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem şık hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Anahtarlık AN-116 modeli iyi bir tercih olacaktır. Logo baskılı promosyon anahtarlık siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p32",
  slug: "promosyon-usb-bellek-ub-140",
  title: "Promosyon USB Bellek UB-140 | Logo Baskılı Kurumsal USB Bellek",
  category: "USB Bellek",
  image: "/products/promosyon-usb-bellek-ub-140.jpg",
  shortDesc:
    "Promosyon USB bellek UB-140, modern tasarımı ve şık metal kapağı ile kurumsal firmalar için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında etkili bir çözümdür.",

  longDesc: `
Promosyon USB bellek UB-140 modeli, modern tasarımı ve kullanışlı yapısı sayesinde kurumsal promosyon ürünleri arasında en çok tercih edilen ürünlerden biridir. Hem pratik kullanım sağlaması hem de marka tanıtımına katkı sunması nedeniyle birçok firma tarafından promosyon ürünü olarak tercih edilmektedir.

Logo baskılı promosyon USB bellek ürünleri, firmaların kurumsal kimliğini müşterilerine ve iş ortaklarına ulaştırmak için oldukça etkili bir reklam aracıdır. Özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek ideal bir promosyon ürünüdür.

Promosyon USB bellek UB-140 modeli farklı kapasite seçenekleri ile üretilebilmektedir. Ürün; 16GB, 32GB ve 64GB kapasite seçenekleri ile tercih edilebilir. Bu sayede sunum dosyaları, kataloglar, tanıtım videoları, fiyat listeleri ve kurumsal dokümanlar kolayca taşınabilir ve paylaşılabilir.

Şık metal kapak ve şeffaf gövde tasarımı sayesinde ürün hem estetik hem de dayanıklı bir yapıya sahiptir. Modern görünümü sayesinde kurumsal promosyon ürünleri arasında dikkat çekici bir seçenek oluşturur.

Promosyon USB bellek UB-140 modeli farklı renk seçenekleri ile üretilebilmektedir. Renk ve kapasite seçenekleri stok durumuna göre değişiklik gösterebilir. Sipariş vermeden önce tercih edilen renk ve kapasite seçenekleri hakkında bilgi alınması önerilir.

Promosyon USB bellek siparişleri baskılı veya baskısız olarak verilebilir. Logo baskılı üretimlerde firmanızın logosu ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir promosyon ürünü elde edilir.

Minimum sipariş adedi baskılı veya baskısız tercihe göre değişiklik gösterebilir. Renk ve kapasite seçenekleri hakkında detaylı bilgi almak için sipariş öncesinde iletişime geçilmesi önerilir.

Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş miktarına ve baskı tercihine göre değişiklik gösterebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem kullanışlı hem de prestijli bir promosyon ürünü arıyorsanız Promosyon USB Bellek UB-140 modeli ideal bir tercih olacaktır. Logo baskılı promosyon USB bellek siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı bir şekilde ulaştırabilirsiniz.
`
},
{
  id: "p33",
  slug: "promosyon-usb-bellek-ub-150",
  title: "Promosyon USB Bellek UB-150 | Logo Baskılı Deri USB Bellek",
  category: "USB Bellek",
  image: "/products/promosyon-usb-bellek-ub-150.jpg",
  shortDesc:
    "Promosyon USB bellek UB-150, deri kapaklı şık tasarımı ile kurumsal firmalar için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında etkili bir çözümdür.",

  longDesc: `
Promosyon USB bellek UB-150 modeli, deri kapaklı şık tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında dikkat çeken modellerden biridir. Hem estetik görünümü hem de pratik kullanımı sayesinde firmaların marka tanıtımında sık tercih edilen promosyon ürünlerinden biridir.

Logo baskılı promosyon USB bellek ürünleri, firmaların kurumsal kimliğini müşterilerine ve iş ortaklarına ulaştırmak için oldukça etkili bir reklam aracıdır. Günlük kullanımda tercih edilen USB bellekler, markanızın uzun süre kullanıcı ile birlikte olmasını sağlar.

Promosyon USB bellek UB-150 modeli farklı kapasite seçenekleri ile üretilebilmektedir. Ürün; 8GB, 16GB ve 32GB kapasite seçenekleri ile tercih edilebilir. Bu sayede sunum dosyaları, kataloglar, tanıtım videoları, fiyat listeleri ve kurumsal dokümanlar kolayca taşınabilir ve paylaşılabilir.

Deri kapaklı tasarım sayesinde ürün hem şık hem de koruyucu bir yapıya sahiptir. USB bağlantı noktası kapak ile korunur ve böylece ürün daha uzun ömürlü kullanım sunar.

Promosyon USB bellek UB-150 modeli logo baskılı veya baskısız olarak sipariş verilebilir. Logo baskılı üretimlerde firmanızın logosu ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir promosyon ürünü elde edilir.

Minimum sipariş adedi baskı tercihine göre değişiklik gösterebilir. Kapasite seçenekleri ve stok durumu hakkında sipariş öncesinde bilgi alınması tavsiye edilir.

Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş miktarına ve baskı tercihine göre değişiklik gösterebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem şık hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon USB Bellek UB-150 modeli iyi bir tercih olacaktır. Logo baskılı promosyon USB bellek siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p34",
  slug: "promosyon-metal-usb-bellek-ub-160",
  title: "Promosyon Metal USB Bellek UB-160 | Logo Baskılı Kurumsal Flash Bellek",
  category: "USB Bellek",
  image: "/products/promosyon-metal-usb-bellek-ub-160.jpg",
  shortDesc:
    "Promosyon metal USB bellek UB-160, şık metal tasarımı ve farklı renk seçenekleri ile kurumsal firmalar için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında kullanılabilir.",

  longDesc: `
Promosyon metal USB bellek UB-160 modeli, dayanıklı metal gövdesi ve modern tasarımı ile kurumsal promosyon ürünleri arasında öne çıkan USB bellek modellerinden biridir. Şık görünümü ve uzun ömürlü yapısı sayesinde firmaların marka tanıtımında sık tercih edilen promosyon ürünlerinden biridir.

Logo baskılı promosyon USB bellek ürünleri, firmaların marka bilinirliğini artırmak için oldukça etkili bir reklam aracıdır. Özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek güçlü bir promosyon ürünüdür.

Promosyon USB bellek UB-160 modeli farklı kapasite seçenekleri ile üretilebilmektedir. Ürün; 8GB, 16GB, 32GB, 64GB ve 128GB kapasite seçenekleri ile tercih edilebilir. Ayrıca bazı modellerde yüksek hızlı veri aktarımı sağlayan USB 3.0 teknolojisi de bulunmaktadır.

Metal gövde yapısı sayesinde ürün hem dayanıklı hem de şık bir tasarıma sahiptir. Kompakt yapısı sayesinde kolay taşınabilir ve günlük kullanımda rahatlık sağlar. Bu sayede promosyon USB bellek uzun süre kullanılabilir ve markanızın görünürlüğünü artırır.

Promosyon metal USB bellek UB-160 modeli farklı renk seçenekleri ile üretilebilmektedir. Mat ve parlak yüzey seçenekleri ile birlikte farklı renk detayları bulunabilir. Renk ve kapasite seçenekleri stok durumuna göre değişiklik gösterebilir.

Promosyon USB bellek siparişleri logo baskılı veya baskısız olarak verilebilir. Logo baskılı üretimlerde firmanızın logosu ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir tanıtım ürünü elde edilir.

Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir. Kapasite, renk ve stok durumu hakkında sipariş öncesinde bilgi alınması önerilir.

Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş miktarına ve baskı tercihine göre değişiklik gösterebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem dayanıklı hem de prestijli bir promosyon ürünü arıyorsanız Promosyon Metal USB Bellek UB-160 modeli ideal bir tercih olacaktır. Logo baskılı promosyon USB bellek siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p35",
  slug: "promosyon-usb-bellek-ub-170",
  title: "Promosyon USB Bellek UB-170 | Logo Baskılı Kurumsal Flash Bellek",
  category: "USB Bellek",
  image: "/products/promosyon-usb-bellek-ub-170.jpg",
  shortDesc:
    "Promosyon USB bellek UB-170, modern tasarımı ve farklı renk seçenekleri ile kurumsal firmalar için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında kullanılabilir.",

  longDesc: `
Promosyon USB bellek UB-170 modeli, modern tasarımı ve kullanışlı yapısı ile kurumsal promosyon ürünleri arasında dikkat çeken modellerden biridir. Günlük kullanım için pratik bir ürün olması sayesinde firmaların marka tanıtımında sık tercih edilen promosyon ürünlerinden biridir.

Logo baskılı promosyon USB bellek ürünleri, firmaların kurumsal kimliğini müşterilerine ve iş ortaklarına ulaştırmak için oldukça etkili bir reklam aracıdır. Özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek ideal bir promosyon ürünüdür.

Promosyon USB bellek UB-170 modeli farklı kapasite seçenekleri ile üretilebilmektedir. Ürün farklı depolama kapasitesi alternatifleri ile tercih edilebilir. Kapasite seçenekleri stok durumuna göre değişiklik gösterebilir.

Şık ve kompakt tasarımı sayesinde USB bellek kolay taşınabilir ve günlük kullanımda rahatlık sağlar. Bu özellik sayesinde promosyon USB bellek kullanıcıların yanında sürekli bulunur ve markanızın görünürlüğünü artırır.

Promosyon USB bellek UB-170 modeli farklı renk seçenekleri ile üretilebilmektedir. Renk ve kapasite seçenekleri stok durumuna göre değişiklik gösterebilir. Sipariş öncesinde tercih edilen renk ve kapasite seçenekleri hakkında bilgi alınması önerilir.

Promosyon USB bellek siparişleri logo baskılı veya baskısız olarak verilebilir. Logo baskılı üretimlerde firmanızın logosu ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir promosyon ürünü elde edilir.

Minimum sipariş adedi baskı tercihine göre değişiklik gösterebilir. Kapasite ve stok durumu hakkında sipariş öncesinde bilgi alınması tavsiye edilir.

Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş miktarına ve baskı tercihine göre değişiklik gösterebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem kullanışlı hem de etkili bir promosyon ürünü arıyorsanız Promosyon USB Bellek UB-170 modeli iyi bir tercih olacaktır. Logo baskılı promosyon USB bellek siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p36",
  slug: "promosyon-usb-bellek-ub-180",
  title: "Promosyon USB Bellek UB-180 | Logo Baskılı Metal Flash Bellek",
  category: "USB Bellek",
  image: "/products/promosyon-usb-bellek-ub-180.jpg",
  shortDesc:
    "Promosyon USB bellek UB-180, metal gövde tasarımı ve farklı kapasite seçenekleri ile kurumsal firmalar için ideal bir promosyon ürünüdür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında kullanılabilir.",

  longDesc: `
Promosyon USB bellek UB-180 modeli, dayanıklı metal gövdesi ve modern tasarımı ile kurumsal promosyon ürünleri arasında öne çıkan USB bellek modellerinden biridir. Şık görünümü ve uzun ömürlü yapısı sayesinde firmaların marka tanıtımında sık tercih edilen promosyon ürünlerinden biridir.

Logo baskılı promosyon USB bellek ürünleri, firmaların kurumsal kimliğini müşterilerine ve iş ortaklarına ulaştırmak için oldukça etkili bir reklam aracıdır. Özellikle fuarlar, seminerler, bayi toplantıları, lansman organizasyonları ve kurumsal etkinliklerde dağıtılabilecek güçlü bir promosyon ürünüdür.

Promosyon USB bellek UB-180 modeli farklı kapasite seçenekleri ile üretilebilmektedir. Ürün; 8GB, 16GB, 32GB, 64GB ve 128GB kapasite seçenekleri ile tercih edilebilir. Ayrıca farklı veri aktarım hızlarına sahip USB 2.0 ve USB 3.0 seçenekleri de bulunmaktadır.

Metal gövde tasarımı sayesinde ürün hem şık hem de dayanıklı bir yapıya sahiptir. Kompakt tasarımı sayesinde kolay taşınabilir ve günlük kullanımda rahatlık sağlar. Bu sayede promosyon USB bellek kullanıcıların yanında sürekli bulunur ve markanızın görünürlüğünü artırır.

Promosyon USB bellek UB-180 modeli farklı renk ve yüzey seçenekleri ile üretilebilmektedir. Mat veya parlak yüzey seçenekleri ile birlikte farklı renk alternatifleri bulunabilir. Renk ve kapasite seçenekleri stok durumuna göre değişiklik gösterebilir.

Promosyon USB bellek siparişleri logo baskılı veya baskısız olarak verilebilir. Logo baskılı üretimlerde firmanızın logosu ürün üzerine uygulanarak kurumsal kimliğinizi yansıtan etkili bir tanıtım ürünü elde edilir.

Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir. Kapasite, renk ve stok durumu hakkında sipariş öncesinde bilgi alınması önerilir.

Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş miktarına ve baskı tercihine göre değişiklik gösterebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem kullanışlı hem de prestijli bir promosyon ürünü arıyorsanız Promosyon USB Bellek UB-180 modeli ideal bir tercih olacaktır. Logo baskılı promosyon USB bellek siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p37",
  slug: "promosyon-dokunmatik-kalem-dk-700",
  title: "Promosyon Dokunmatik Kalem DK-700 | Logo Baskılı Kurumsal Kalem",
  category: "Kalem",
  image: "/products/promosyon-dokunmatik-kalem-dk-700.jpg",
  shortDesc:
    "Promosyon dokunmatik kalem DK-700, modern tasarımı ve ekran uyumlu dokunmatik ucu ile kurumsal firmalar için ideal bir promosyon kalem modelidir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile marka tanıtımında kullanılabilir.",

  longDesc: `
Promosyon dokunmatik kalem DK-700 modeli, modern tasarımı ve çok yönlü kullanımı ile kurumsal promosyon ürünleri arasında öne çıkan kalem modellerinden biridir. Hem klasik yazı kalemi hem de dokunmatik ekran kalemi olarak kullanılabilmesi sayesinde oldukça pratik bir promosyon ürünüdür.

Logo baskılı promosyon kalem ürünleri, firmaların marka bilinirliğini artırmak için en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük hayatta sürekli kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında sürekli görünür olur.

Promosyon dokunmatik kalem DK-700 modeli, akıllı telefon, tablet ve dokunmatik ekranlı cihazlarla uyumlu özel dokunmatik uca sahiptir. Bu sayede kullanıcılar hem yazı yazabilir hem de mobil cihazlarda rahatlıkla dokunmatik kullanım sağlayabilir.

Şık ve ergonomik tasarımı sayesinde kalem hem rahat kullanım sağlar hem de estetik bir görünüm sunar. Metal ve plastik detayların bir arada kullanıldığı modern tasarımı ile kurumsal promosyon ürünleri arasında dikkat çeken bir modeldir.

Promosyon kalem DK-700 modeli logo baskılı veya baskısız olarak sipariş verilebilir. Logo baskılı üretimlerde firmanızın logosu veya marka adı kalem üzerine uygulanarak etkili bir reklam ürünü elde edilir.

Bu tür promosyon kalemler özellikle fuarlar, seminerler, eğitim organizasyonları, bayi toplantıları ve kurumsal etkinliklerde dağıtılabilecek en kullanışlı promosyon ürünlerinden biridir.

Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir. Renk seçenekleri ve stok durumu hakkında sipariş öncesinde bilgi alınması önerilir.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Kurumsal firmalar için toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem kullanışlı hem de etkili bir promosyon ürünü arıyorsanız Promosyon Dokunmatik Kalem DK-700 modeli ideal bir tercih olacaktır. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p38",
  slug: "promosyon-naturel-koseli-kursun-kalem-kk-360",
  title: "Promosyon Naturel Köşeli Kurşun Kalem KK-360 | Logo Baskılı Kurumsal Kalem",
  category: "Kalem",
  image: "/products/promosyon-naturel-koseli-kursun-kalem-kk-360.jpg",
  shortDesc:
    "Promosyon naturel köşeli kurşun kalem KK-360, doğal ahşap gövdesi ve sade tasarımı ile kurumsal tanıtım için ideal bir promosyon kalem modelidir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile kullanılabilir.",

  longDesc: `
Promosyon naturel köşeli kurşun kalem KK-360 modeli, doğal ahşap gövdesi ve sade tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Doğal görünümü ve çevre dostu yapısı sayesinde firmaların marka tanıtımında tercih ettiği promosyon kalem seçeneklerinden biridir.

Logo baskılı promosyon kalem ürünleri, markaların müşterileri ve iş ortakları üzerinde kalıcı bir görünürlük oluşturmasına yardımcı olur. Günlük hayatta sık kullanılan kalemler, markanızın sürekli görünür olmasını sağlayan etkili bir reklam ürünüdür.

Promosyon kurşun kalem KK-360 modeli doğal ahşap gövdeye sahiptir. Köşeli tasarımı sayesinde ergonomik bir kullanım sunar ve yazı yazarken rahat bir tutuş sağlar. Minimal tasarımı ile hem klasik hem de modern bir görünüm sunar.

Promosyon kalem KK-360 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan baskısı uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Bu tür promosyon kalemler özellikle eğitim kurumları, fuarlar, seminerler, etkinlikler, promosyon dağıtımları ve kurumsal tanıtım faaliyetlerinde sıklıkla tercih edilmektedir.

Promosyon kurşun kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir.

Renk seçenekleri ve stok durumu hakkında sipariş öncesinde bilgi alınması önerilir. Kurumsal toplu siparişlerde firmalara özel üretim ve baskı seçenekleri sunulmaktadır.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem doğal görünümlü hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Naturel Köşeli Kurşun Kalem KK-360 modeli iyi bir tercih olacaktır. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p39",
  slug: "promosyon-naturel-yuvarlak-kursun-kalem-kk-380",
  title: "Promosyon Naturel Yuvarlak Kurşun Kalem KK-380 | Logo Baskılı Kurumsal Kalem",
  category: "Kalem",
  image: "/products/promosyon-naturel-yuvarlak-kursun-kalem-kk-380.jpg",
  shortDesc:
    "Promosyon naturel yuvarlak kurşun kalem KK-380, doğal ahşap gövdesi ve sade tasarımı ile kurumsal tanıtım için ideal bir promosyon kalem modelidir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile tercih edilmektedir.",

  longDesc: `
Promosyon naturel yuvarlak kurşun kalem KK-380 modeli, doğal ahşap gövdesi ve sade tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Doğal görünümü ve çevre dostu yapısı sayesinde firmaların marka tanıtımında tercih ettiği promosyon kalem seçeneklerinden biridir.

Logo baskılı promosyon kalem ürünleri, markaların müşterileri ve iş ortakları üzerinde kalıcı bir görünürlük oluşturmasına yardımcı olur. Günlük hayatta sık kullanılan kalemler, markanızın sürekli görünür olmasını sağlayan etkili bir reklam ürünüdür.

Promosyon kurşun kalem KK-380 modeli yuvarlak gövde tasarımına sahiptir. Ergonomik yapısı sayesinde yazı yazarken rahat bir tutuş sağlar. Minimal tasarımı ile hem klasik hem de modern bir görünüm sunar.

Promosyon kalem KK-380 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan baskısı uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Bu tür promosyon kalemler özellikle eğitim kurumları, fuarlar, seminerler, etkinlikler, promosyon dağıtımları ve kurumsal tanıtım faaliyetlerinde sıklıkla tercih edilmektedir.

Promosyon kurşun kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir.

Renk seçenekleri ve stok durumu hakkında sipariş öncesinde bilgi alınması önerilir. Kurumsal toplu siparişlerde firmalara özel üretim ve baskı seçenekleri sunulmaktadır.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem doğal görünümlü hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Naturel Yuvarlak Kurşun Kalem KK-380 modeli iyi bir tercih olacaktır. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p40",
  slug: "promosyon-naturel-koseli-silgili-kursun-kalem-kk-390",
  title: "Promosyon Naturel Köşeli Silgili Kurşun Kalem KK-390 | Logo Baskılı Kalem",
  category: "Kalem",
  image: "/products/promosyon-naturel-koseli-silgili-kursun-kalem-kk-390.jpg",
  shortDesc:
    "Promosyon naturel köşeli silgili kurşun kalem KK-390, doğal ahşap gövdesi ve üst kısmındaki silgi detayı ile kullanışlı bir promosyon kalem modelidir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile kurumsal tanıtım için tercih edilmektedir.",

  longDesc: `
Promosyon naturel köşeli silgili kurşun kalem KK-390 modeli, doğal ahşap gövdesi ve pratik kullanım sağlayan silgili yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Doğal tasarımı ve ergonomik yapısı sayesinde hem estetik hem de kullanışlı bir promosyon ürünü sunar.

Logo baskılı promosyon kalem ürünleri, firmaların marka bilinirliğini artırmak için en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında sürekli görünür olur.

Promosyon kurşun kalem KK-390 modeli köşeli ahşap gövde tasarımına sahiptir. Bu yapı kalemin elde daha rahat tutulmasını sağlar ve yazı yazarken ergonomik bir kullanım sunar. Üst kısmında bulunan silgi sayesinde kullanıcılar yazım hatalarını kolayca düzeltebilir.

Promosyon kalem KK-390 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan baskısı uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Bu tür promosyon kalemler özellikle okullar, eğitim kurumları, fuarlar, seminerler, kurumsal etkinlikler ve promosyon dağıtımlarında sıklıkla tercih edilmektedir.

Promosyon kurşun kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir.

Renk seçenekleri ve stok durumu hakkında sipariş öncesinde bilgi alınması önerilir. Kurumsal toplu siparişlerde firmalara özel üretim ve baskı seçenekleri sunulmaktadır.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem doğal görünümlü hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Naturel Köşeli Silgili Kurşun Kalem KK-390 modeli ideal bir tercih olacaktır. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p41",
  slug: "promosyon-yuvarlak-silgili-naturel-kursun-kalem-kk-400",
  title: "Promosyon Yuvarlak Silgili Naturel Kurşun Kalem KK-400 | Logo Baskılı Kalem",
  category: "Kalem",
  image: "/products/promosyon-yuvarlak-silgili-naturel-kursun-kalem-kk-400.jpg",
  shortDesc:
    "Promosyon yuvarlak silgili naturel kurşun kalem KK-400, doğal ahşap gövdesi ve üst kısmındaki silgi detayı ile kullanışlı bir promosyon kalem modelidir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile kurumsal tanıtım için tercih edilmektedir.",

  longDesc: `
Promosyon yuvarlak silgili naturel kurşun kalem KK-400 modeli, doğal ahşap gövdesi ve pratik kullanım sağlayan silgili yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Sade tasarımı ve kullanışlı yapısı sayesinde hem eğitim kurumları hem de kurumsal firmalar için ideal bir promosyon ürünüdür.

Logo baskılı promosyon kalem ürünleri, firmaların marka bilinirliğini artırmak için en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen kalemler sayesinde markanız müşterilerinizin, öğrencilerin ve iş ortaklarınızın yanında sürekli görünür olur.

Promosyon kurşun kalem KK-400 modeli yuvarlak ahşap gövde tasarımına sahiptir. Bu yapı kalemin elde rahat tutulmasını sağlar ve yazı yazarken konforlu bir kullanım sunar. Üst kısmında bulunan silgi sayesinde kullanıcılar yazım hatalarını kolayca düzeltebilir.

Promosyon kalem KK-400 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan baskısı uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Bu tür promosyon kalemler özellikle okullar, eğitim kurumları, fuarlar, seminerler, kurumsal etkinlikler ve promosyon dağıtımlarında sıklıkla tercih edilmektedir.

Promosyon kurşun kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir.

Renk seçenekleri ve stok durumu hakkında sipariş öncesinde bilgi alınması önerilir. Kurumsal toplu siparişlerde firmalara özel üretim ve baskı seçenekleri sunulmaktadır.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem doğal görünümlü hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Yuvarlak Silgili Naturel Kurşun Kalem KK-400 modeli ideal bir tercih olacaktır. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p42",
  slug: "promosyon-yuvarlak-naturel-kirmizi-uclu-kursun-kalem-kk-410",
  title: "Promosyon Yuvarlak Naturel Kırmızı Uçlu Kurşun Kalem KK-410 | Logo Baskılı Kalem",
  category: "Kalem",
  image: "/products/promosyon-yuvarlak-naturel-kirmizi-uclu-kursun-kalem-kk-410.jpg",
  shortDesc:
    "Promosyon yuvarlak naturel kırmızı uçlu kurşun kalem KK-410, doğal ahşap gövdesi ve kırmızı uç detayı ile dikkat çeken bir promosyon kalem modelidir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile kurumsal tanıtım için tercih edilmektedir.",

  longDesc: `
Promosyon yuvarlak naturel kırmızı uçlu kurşun kalem KK-410 modeli, doğal ahşap gövdesi ve kırmızı uç detayı ile kurumsal promosyon ürünleri arasında farklı bir tasarıma sahip kalem modellerinden biridir. Minimal ve doğal görünümü sayesinde hem eğitim kurumları hem de kurumsal firmalar için tercih edilen promosyon kalem seçeneklerinden biridir.

Logo baskılı promosyon kalem ürünleri, firmaların marka bilinirliğini artırmak için en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen kalemler sayesinde markanız müşterilerinizin, öğrencilerin ve iş ortaklarınızın yanında sürekli görünür olur.

Promosyon kurşun kalem KK-410 modeli yuvarlak ahşap gövde tasarımına sahiptir. Ergonomik yapısı sayesinde elde rahat bir tutuş sağlar ve uzun süreli kullanımda konfor sunar. Kırmızı uç detayı sayesinde özellikle öğretmenler, ofis kullanımı ve eğitim kurumları için oldukça kullanışlıdır.

Promosyon kalem KK-410 modeli üzerine firmanıza ait logo, marka adı veya kurumsal slogan baskısı uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Bu tür promosyon kalemler özellikle okullar, eğitim kurumları, fuarlar, seminerler, kurumsal etkinlikler ve promosyon dağıtımlarında sıklıkla tercih edilmektedir.

Promosyon kurşun kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Minimum sipariş miktarı baskı tercihine göre değişiklik gösterebilir.

Renk seçenekleri ve stok durumu hakkında sipariş öncesinde bilgi alınması önerilir. Kurumsal toplu siparişlerde firmalara özel üretim ve baskı seçenekleri sunulmaktadır.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde avantajlı fiyat seçenekleri sunulmaktadır.

Eğer firmanız için hem doğal görünümlü hem de kullanışlı bir promosyon ürünü arıyorsanız Promosyon Yuvarlak Naturel Kırmızı Uçlu Kurşun Kalem KK-410 modeli iyi bir tercih olacaktır. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel ve kalıcı şekilde ulaştırabilirsiniz.
`
},
{
  id: "p43",
  slug: "promosyon-latali-yuvarlak-kursun-kalem-kk-440",
  title: "Promosyon Latalı Yuvarlak Kurşun Kalem KK-440 | Logo Baskılı Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-latali-yuvarlak-kursun-kalem-kk-440.jpg",

  shortDesc:
    "Promosyon latalı yuvarlak kurşun kalem KK-440, sade tasarımı ve dayanıklı yapısı ile kurumsal promosyon kalem ürünleri arasında yer alır. Logo baskılı veya baskısız toplu sipariş seçenekleri ile tercih edilmektedir.",

  longDesc: `
Promosyon latalı yuvarlak kurşun kalem KK-440 modeli, sade ve şık tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Dayanıklı yapısı ve ergonomik tasarımı sayesinde hem günlük kullanım hem de kurumsal dağıtımlar için uygun bir promosyon kalem seçeneği sunar.

Promosyon kalem ürünleri, firmaların marka bilinirliğini artırmak için en çok tercih edilen reklam ürünleri arasında yer almaktadır. Günlük kullanımda sıkça kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında sürekli görünür olur.

Promosyon kurşun kalem KK-440 modeli yuvarlak gövde tasarımına sahiptir ve rahat bir tutuş sunar. Hafif yapısı sayesinde uzun süreli kullanımda konfor sağlar. Eğitim kurumları, ofisler, fuarlar, seminerler ve tanıtım organizasyonlarında dağıtılabilecek ideal promosyon ürünlerinden biridir.

Ürün üzerine firmanıza ait logo, marka adı veya kurumsal mesaj baskı olarak uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Promosyon kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim detayları değişiklik gösterebilir.

Kurumsal promosyon ürünleri arasında ekonomik ve etkili bir reklam aracı olan promosyon kurşun kalem modelleri, özellikle toplu dağıtımlar için tercih edilmektedir.

Promosyon kalem fiyatları sipariş adedi, baskı yöntemi ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat seçenekleri sunulmaktadır.

Eğer firmanız için ekonomik ve kullanışlı bir promosyon ürünü arıyorsanız Promosyon Latalı Yuvarlak Kurşun Kalem KK-440 modeli ideal seçeneklerden biridir. Logo baskılı promosyon kalem siparişi vererek markanızı geniş kitlelere ulaştırabilirsiniz.
`
},
{
  id: "p44",
  slug: "promosyon-yuvarlak-silgili-latali-kursun-kalem-kk-450",
  title: "Promosyon Yuvarlak Silgili Latalı Kurşun Kalem KK-450 | Logo Baskılı Kalem",
  category: "Kalem",
  image: "/products/promosyon-yuvarlak-silgili-latali-kursun-kalem-kk-450.jpg",

  shortDesc:
    "Promosyon yuvarlak silgili latalı kurşun kalem KK-450, silgili yapısı ve sade tasarımı ile kurumsal promosyon kalem ürünleri arasında tercih edilen modellerden biridir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon yuvarlak silgili latalı kurşun kalem KK-450 modeli, sade ve kullanışlı tasarımı sayesinde kurumsal promosyon ürünleri arasında sıklıkla tercih edilen kalem modellerinden biridir. Üst kısmında bulunan silgi özelliği sayesinde pratik kullanım sunar ve özellikle eğitim kurumları, ofisler ve promosyon dağıtımları için uygun bir üründür.

Promosyon kalem ürünleri firmaların marka bilinirliğini artırmak için en çok kullanılan reklam ürünleri arasında yer almaktadır. Günlük hayatta sürekli kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında uzun süre görünür olur.

Promosyon kurşun kalem KK-450 modeli yuvarlak gövde yapısına sahiptir ve ergonomik tasarımı sayesinde rahat bir tutuş sağlar. Silgili yapısı sayesinde özellikle öğrenciler ve eğitim kurumları tarafından tercih edilen promosyon ürünleri arasında yer almaktadır.

Kalem üzerine firmanıza ait logo, marka adı veya kurumsal slogan baskı olarak uygulanabilir. Bu sayede ürün hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Promosyon kalem siparişleri baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon kalem modelleri özellikle fuarlar, seminerler, eğitim kurumları, şirket etkinlikleri ve promosyon dağıtımları için tercih edilmektedir.

Promosyon kalem fiyatları sipariş adedine, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için hem kullanışlı hem de ekonomik bir promosyon ürünü arıyorsanız Promosyon Yuvarlak Silgili Latalı Kurşun Kalem KK-450 modeli iyi bir tercih olacaktır. Logo baskılı promosyon kalem siparişi vererek markanızı geniş kitlelere ulaştırabilirsiniz.
`
},
{
  id: "p45",
  slug: "promosyon-metal-kalem-mk-100",
  title: "Promosyon Metal Kalem MK-100 | Logo Baskılı Metal Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-100.jpg",

  shortDesc:
    "Promosyon metal kalem MK-100, şık tasarımı ve dayanıklı metal gövdesi ile kurumsal promosyon kalem ürünleri arasında öne çıkan modellerden biridir. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon metal kalem MK-100 modeli, modern ve şık tasarımı ile kurumsal promosyon ürünleri arasında en çok tercih edilen kalem modellerinden biridir. Metal gövdesi sayesinde hem dayanıklı hem de prestijli bir görünüm sunar.

Promosyon kalem ürünleri firmaların marka bilinirliğini artırmak için en etkili reklam araçlarından biridir. Günlük kullanımda sık tercih edilen kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında sürekli görünür olur.

Promosyon metal kalem MK-100 modeli özellikle kurumsal firmalar, bankalar, fuarlar, seminerler ve şirket etkinlikleri için tercih edilen promosyon ürünleri arasında yer almaktadır. Metal gövde yapısı sayesinde standart plastik kalemlere göre daha prestijli bir promosyon ürünü sunar.

Ürün üzerine firmanıza ait logo, marka adı veya kurumsal mesaj lazer baskı yöntemi ile uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de uzun süreli bir reklam ürünü haline gelir.

Metal kalem modeli farklı renk seçenekleri ile üretilebilmektedir. Renk seçeneklerinin stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilir.

TEKNİK ÖZELLİKLER
Ürün Ölçüsü: 140 x Ø10 mm  
Refil: Mavi Refil  
Koli / Kutu Adedi: 500 / 50  
Baskı Türü: Lazer Baskı  
Baskı Alanı: 55 x 5,5 mm

Promosyon kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için şık ve prestijli bir promosyon ürünü arıyorsanız Promosyon Metal Kalem MK-100 modeli ideal bir tercihtir. Logo baskılı promosyon kalem siparişi vererek markanızı profesyonel bir şekilde müşterilerinize ulaştırabilirsiniz.
`
},
{
  id: "p46",
  slug: "promosyon-metal-kalem-mk-110",
  title: "Promosyon Metal Kalem MK-110 | Logo Baskılı Metal Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-110.jpg",

  shortDesc:
    "Promosyon metal kalem MK-110, rubber gövde yapısı ve modern tasarımı ile dikkat çeken kurumsal promosyon kalem modellerinden biridir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon metal kalem MK-110 modeli, rubber (kauçuk) kaplamalı gövde yapısı sayesinde hem şık bir görünüm hem de rahat bir kullanım sunan promosyon kalem modellerinden biridir. Modern tasarımı ve dayanıklı metal gövdesi sayesinde kurumsal promosyon ürünleri arasında oldukça tercih edilmektedir.

Promosyon kalem ürünleri firmaların marka bilinirliğini artırmak için en çok kullanılan reklam araçlarından biridir. Günlük kullanımda sürekli kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında uzun süre görünür olur.

Promosyon metal kalem MK-110 modeli özellikle fuarlar, seminerler, şirket etkinlikleri, müşteri ziyaretleri ve kurumsal promosyon dağıtımları için tercih edilen bir üründür. Rubber gövde kaplaması sayesinde elde kaymaz ve konforlu bir yazım deneyimi sunar.

Kalem üzerine firmanıza ait logo, marka adı veya kurumsal mesaj lazer baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Promosyon metal kalem MK-110 modeli farklı renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon kalem siparişleri baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon kalem fiyatları sipariş adedine, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için şık, dayanıklı ve prestijli bir promosyon ürünü arıyorsanız Promosyon Metal Kalem MK-110 modeli ideal bir tercihtir. Logo baskılı promosyon kalem siparişi vererek markanızı profesyonel bir şekilde müşterilerinize ulaştırabilirsiniz.
`
},
{
  id: "p47",
  slug: "promosyon-metal-kalem-07-uc-jel-kalem-mk-120",
  title: "Promosyon Metal Kalem (0.7 Uç Jel Kalem) MK-120 | Logo Baskılı İmza Kalemi",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-120.jpg",

  shortDesc:
    "Promosyon metal kalem MK-120, 0.7 uç jel refil yapısı ve modern metal gövdesi ile kurumsal promosyon kalem ürünleri arasında öne çıkan modellerden biridir. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon metal kalem MK-120 modeli, 0.7 uç jel refil yapısı sayesinde akıcı yazım sağlayan şık bir promosyon kalem modelidir. Metal gövde tasarımı sayesinde hem dayanıklı hem de prestijli bir görünüm sunar. Bu özellikleri ile özellikle kurumsal firmalar tarafından tercih edilen promosyon ürünleri arasında yer almaktadır.

Promosyon kalem ürünleri firmaların marka bilinirliğini artırmak için en çok tercih edilen reklam araçlarından biridir. Günlük kullanımda sıkça kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında uzun süre görünür olur.

Promosyon metal kalem MK-120 modeli aynı zamanda imza kalemi olarak da tercih edilmektedir. Kurumsal toplantılar, müşteri görüşmeleri, seminerler ve fuar organizasyonlarında dağıtılabilecek prestijli promosyon ürünlerinden biridir.

Ürün üzerine firmanıza ait logo, marka adı veya kurumsal mesaj lazer baskı yöntemi ile uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Promosyon metal kalem MK-120 modeli farklı renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 140 x Ø10 mm  
Refil: Mavi Jel Refil (0.7 Uç)  
Koli / Kutu Adedi: 500 / 50  
Baskı Türü: Lazer Baskı  
Baskı Alanı: 55 x 5,5 mm  
Kullanım: İmza Kalemi

Promosyon kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için hem şık hem de prestijli bir promosyon ürünü arıyorsanız Promosyon Metal Kalem MK-120 modeli ideal bir tercihtir. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel bir şekilde ulaştırabilirsiniz.
`
},
{
  id: "p48",
  slug: "promosyon-metal-kalem-mk-130",
  title: "Promosyon Metal Kalem MK-130 | Logo Baskılı Rubber Gövdeli Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-130.jpg",

  shortDesc:
    "Promosyon metal kalem MK-130, rubber gövde kaplaması ve modern tasarımı ile kurumsal promosyon kalem modelleri arasında öne çıkan ürünlerden biridir. Logo baskılı veya baskısız toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon metal kalem MK-130 modeli rubber (kauçuk) kaplamalı gövde tasarımı sayesinde hem şık bir görünüm hem de konforlu bir kullanım sunan promosyon kalem modellerinden biridir. Metal gövdesi ve modern tasarımı ile kurumsal promosyon ürünleri arasında sıklıkla tercih edilmektedir.

Promosyon kalem ürünleri firmaların marka bilinirliğini artırmak için en etkili reklam araçlarından biridir. Günlük kullanımda sıkça tercih edilen kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında sürekli görünür olur.

Promosyon metal kalem MK-130 modeli özellikle kurumsal firmalar, fuarlar, seminerler, müşteri ziyaretleri ve tanıtım organizasyonları için ideal bir promosyon ürünüdür. Rubber gövde kaplaması sayesinde elde kayma yapmaz ve uzun süreli kullanımda konfor sağlar.

Ürün üzerine firmanıza ait logo, marka adı veya kurumsal slogan lazer baskı yöntemi ile uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Promosyon metal kalem MK-130 modeli farklı renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 140 x Ø10 mm  
Refil: Mavi Refil  
Koli / Kutu Adedi: 500 / 50  
Baskı Türü: Lazer Baskı  
Baskı Alanı: 40 x 5,5 mm  
Gövde Tipi: Rubber Gövde

Promosyon kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için şık, dayanıklı ve modern bir promosyon ürünü arıyorsanız Promosyon Metal Kalem MK-130 modeli ideal bir tercihtir. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel şekilde ulaştırabilirsiniz.
`
},
{
  id: "p49",
  slug: "promosyon-metal-kalemler-mk-140",
  title: "Promosyon Metal Kalem MK-140 | Logo Baskılı Rubber Gövdeli Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalemler-mk-140.jpg",

  shortDesc:
    "Promosyon metal kalem MK-140, rubber gövde tasarımı ve modern görünümü ile kurumsal promosyon kalem modelleri arasında yer alan şık bir üründür. Logo baskılı veya baskısız toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon metal kalem MK-140 modeli rubber gövde kaplaması sayesinde hem modern hem de ergonomik bir kullanım sunan promosyon kalem modellerinden biridir. Metal gövde yapısı sayesinde dayanıklı ve prestijli bir görünüm sağlar.

Promosyon kalem ürünleri firmaların marka bilinirliğini artırmak için en çok tercih edilen reklam araçlarından biridir. Günlük kullanımda sürekli kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında uzun süre görünür olur.

Promosyon metal kalem MK-140 modeli özellikle kurumsal firmalar, fuarlar, seminerler, eğitim kurumları ve müşteri ziyaretleri için tercih edilen promosyon ürünleri arasında yer almaktadır.

Rubber gövde kaplaması sayesinde elde kayma yapmaz ve konforlu bir kullanım sağlar. Ürün üzerine firmanıza ait logo, marka adı veya kurumsal slogan lazer baskı yöntemi ile uygulanabilir.

Promosyon metal kalem MK-140 modeli farklı renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin stok durumu dönemsel olarak değişiklik gösterebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 140 x Ø10 mm  
Refil: Mavi Refil  
Koli / Kutu Adedi: 1000 / 50  
Baskı Türü: Lazer Baskı  
Baskı Alanı: 55 x 5,5 mm  
Gövde Tipi: Rubber Gövde

Promosyon kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için şık, dayanıklı ve modern bir promosyon ürünü arıyorsanız Promosyon Metal Kalem MK-140 modeli ideal bir tercihtir. Logo baskılı promosyon kalem siparişi vererek markanızı profesyonel şekilde müşterilerinize ulaştırabilirsiniz.
`
},
{
  id: "p50",
  slug: "promosyon-metal-kalem-mk-150",
  title: "Promosyon Metal Kalem MK-150 | Logo Baskılı Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-150.jpg",

  shortDesc:
    "Promosyon metal kalem MK-150, modern tasarımı ve farklı renk seçenekleri ile kurumsal promosyon kalem modelleri arasında tercih edilen ürünlerden biridir. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon metal kalem MK-150 modeli modern tasarımı ve farklı renk seçenekleri ile dikkat çeken promosyon kalem modellerinden biridir. Metal gövde yapısı sayesinde hem dayanıklı hem de şık bir görünüm sunar.

Promosyon kalem ürünleri firmaların marka bilinirliğini artırmak için en çok tercih edilen reklam ürünleri arasında yer almaktadır. Günlük kullanımda sürekli kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın yanında uzun süre görünür olur.

Promosyon metal kalem MK-150 modeli özellikle fuarlar, seminerler, müşteri ziyaretleri, kurumsal organizasyonlar ve tanıtım etkinliklerinde dağıtılabilecek ideal promosyon ürünlerinden biridir.

Kalem üzerine firmanıza ait logo, marka adı veya kurumsal slogan lazer baskı yöntemi ile uygulanabilir. Böylece kalem hem kullanışlı bir yazı aracı hem de etkili bir reklam ürünü haline gelir.

Bu model mavi renk mürekkep ile kullanılmaktadır ve günlük kullanım için akıcı bir yazım deneyimi sunar.

Promosyon metal kalem MK-150 modeli farklı renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin stok durumu dönemsel olarak değişiklik gösterebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon kalem siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon kalem fiyatları sipariş miktarına, baskı yöntemine ve üretim detaylarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için modern ve kullanışlı bir promosyon ürünü arıyorsanız Promosyon Metal Kalem MK-150 modeli iyi bir tercih olacaktır. Logo baskılı promosyon kalem siparişi vererek markanızı müşterilerinize profesyonel şekilde ulaştırabilirsiniz.
`
},
{
  id: "p51",
  slug: "promosyon-manyetolu-turbo-siboplu-ruzgar-cakmak-cm-360",
  title: "Promosyon Manyetolu Turbo Siboplu Rüzgar Çakmak CM-360 | Logo Baskılı Promosyon Çakmak",
  category: "Çakmak",
  image: "/products/promosyon-manyetolu-turbo-siboplu-cakmak-cm-360.jpg",

  shortDesc:
    "Promosyon manyetolu turbo siboplu rüzgar çakmak CM-360, güçlü alev yapısı ve dayanıklı gövdesi ile promosyon ürünleri arasında sık tercih edilen çakmak modellerinden biridir. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon manyetolu turbo siboplu rüzgar çakmak CM-360 modeli güçlü alev yapısı ve pratik kullanımı ile promosyon çakmak ürünleri arasında tercih edilen modellerden biridir. Manyetolu ateşleme sistemi sayesinde kolay kullanım sağlar ve rüzgara dayanıklı turbo alev özelliği ile dikkat çeker.

Promosyon çakmak ürünleri özellikle restoranlar, kafeler, barlar, organizasyonlar ve kurumsal promosyon dağıtımlarında sık tercih edilen reklam ürünleri arasında yer almaktadır. Günlük kullanımda sıkça kullanılan bu ürünler sayesinde markanız müşterilerinizin yanında sürekli görünür olur.

Promosyon çakmak CM-360 modeli üzerine firmanıza ait logo, marka adı veya reklam mesajı tampon baskı veya UV baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı bir çakmak hem de etkili bir reklam ürünü haline gelir.

TEKNİK ÖZELLİKLER  
Çakmak Boyutu: 80 x 24 mm  
Baskı Alanı: 50 x 14 mm  
Koli / Kutu Adedi: 1000 / 50  
Baskı Türü: Tampon Baskı – UV Baskı  
Ateşleme Sistemi: Manyetolu  
Alev Tipi: Turbo Alev

Promosyon çakmak CM-360 modeli beyaz ve siyah renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin ve sipariş adetlerinin stok durumu dönemsel olarak değişiklik gösterebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon çakmak siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon çakmak fiyatları sipariş miktarına ve baskı yöntemine göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için ekonomik ve etkili bir promosyon ürünü arıyorsanız Promosyon Manyetolu Turbo Siboplu Rüzgar Çakmak CM-360 modeli iyi bir tercih olacaktır. Logo baskılı promosyon çakmak siparişi vererek markanızı geniş kitlelere ulaştırabilirsiniz.
`
},
{
  id: "p52",
  slug: "promosyon-tasli-siboplu-cakmak-mini-boy-cm-400",
  title: "Promosyon Taşlı Siboplu Çakmak CM-400 | Mini Boy Logo Baskılı Promosyon Çakmak",
  category: "Çakmak",
  image: "/products/promosyon-tasli-siboplu-cakmak-cm-400.jpg",

  shortDesc:
    "Promosyon taşlı siboplu çakmak CM-400 mini boy tasarımı ile promosyon ürünleri arasında sık tercih edilen ekonomik çakmak modellerinden biridir. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon taşlı siboplu çakmak CM-400 modeli mini boy tasarımı ve pratik kullanımı ile promosyon çakmak ürünleri arasında tercih edilen modellerden biridir. Taşlı ateşleme sistemi sayesinde kolay kullanım sağlar ve günlük kullanım için ideal bir promosyon ürünüdür.

Promosyon çakmak ürünleri özellikle restoranlar, kafeler, organizasyonlar ve tanıtım kampanyalarında sık tercih edilen reklam ürünleri arasında yer almaktadır. Günlük kullanımda sıkça kullanılan çakmaklar sayesinde markanız müşterilerinizin yanında sürekli görünür olur.

Promosyon çakmak CM-400 modeli üzerine firmanıza ait logo, marka adı veya reklam mesajı tampon baskı veya UV dijital baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı bir çakmak hem de etkili bir reklam ürünü haline gelir.

Bu model mini boy tasarımı sayesinde cepte taşımaya uygun ve ekonomik bir promosyon ürünüdür. Özellikle promosyon dağıtımları ve kampanyalar için tercih edilmektedir.

TEKNİK ÖZELLİKLER  
Çakmak Tipi: Taşlı Siboplu Çakmak  
Ürün Boyutu: 70 x 22 mm  
Baskı Alanı: 45 x 14 mm  
Baskı Türü: Tampon Baskı + UV Dijital Baskı  
Model: Mini Boy

Promosyon çakmak CM-400 modeli beyaz ve siyah renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin ve sipariş adetlerinin stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon çakmak siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon çakmak fiyatları sipariş miktarına ve baskı yöntemine göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için ekonomik ve etkili bir promosyon ürünü arıyorsanız Promosyon Taşlı Siboplu Çakmak CM-400 modeli iyi bir tercih olacaktır. Logo baskılı promosyon çakmak siparişi vererek markanızı geniş kitlelere ulaştırabilirsiniz.
`
},
{
  id: "p53",
  slug: "promosyon-tasli-siboplu-cakmak-cm-450",
  title: "Promosyon Taşlı Siboplu Çakmak CM-450 | Logo Baskılı Promosyon Çakmak",
  category: "Çakmak",
  image: "/products/promosyon-tasli-siboplu-cakmak-cm-450.jpg",

  shortDesc:
    "Promosyon taşlı siboplu çakmak CM-450, klasik tasarımı ve pratik kullanımı ile promosyon ürünleri arasında sık tercih edilen ekonomik çakmak modellerinden biridir. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon taşlı siboplu çakmak CM-450 modeli klasik tasarımı ve kolay kullanımı sayesinde promosyon çakmak ürünleri arasında tercih edilen modellerden biridir. Taşlı ateşleme sistemi sayesinde pratik kullanım sağlar ve günlük kullanım için ideal bir promosyon ürünüdür.

Promosyon çakmak ürünleri özellikle restoranlar, kafeler, organizasyonlar, tanıtım kampanyaları ve kurumsal promosyon dağıtımları için sık tercih edilen reklam ürünleri arasında yer almaktadır. Günlük kullanımda sıkça kullanılan çakmaklar sayesinde markanız müşterilerinizin yanında sürekli görünür olur.

Promosyon çakmak CM-450 modeli üzerine firmanıza ait logo, marka adı veya reklam mesajı baskı olarak uygulanabilir. Böylece ürün hem kullanışlı bir çakmak hem de etkili bir reklam ürünü haline gelir.

Bu model özellikle promosyon dağıtımları, kampanyalar, organizasyonlar ve tanıtım etkinlikleri için tercih edilen ekonomik promosyon ürünlerinden biridir.

TEKNİK ÖZELLİKLER  
Çakmak Tipi: Taşlı Siboplu Çakmak  
Çakmak Ölçüsü: 78 x 22 mm  
Baskı Alanı: 53 x 14 mm  

Promosyon çakmak CM-450 modeli siyah ve beyaz renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin ve sipariş adetlerinin stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon çakmak siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon çakmak fiyatları sipariş miktarına ve baskı yöntemine göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için ekonomik ve kullanışlı bir promosyon ürünü arıyorsanız Promosyon Taşlı Siboplu Çakmak CM-450 modeli iyi bir tercih olacaktır. Logo baskılı promosyon çakmak siparişi vererek markanızı geniş kitlelere ulaştırabilirsiniz.
`
},
{
  id: "p54",
  slug: "promosyon-telefon-tutuculu-standli-tasli-cakmak-cm-500",
  title: "Promosyon Standlı Telefon Tutuculu Taşlı Çakmak CM-500 | Logo Baskılı Promosyon Çakmak",
  category: "Çakmak",
  image: "/products/promosyon-standli-tasli-cakmak-cm-500.jpg",

  shortDesc:
    "Promosyon standlı telefon tutuculu taşlı çakmak CM-500, pratik kullanımı ve telefon standı özelliği ile dikkat çeken promosyon çakmak modellerinden biridir. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon standlı taşlı çakmak CM-500 modeli hem çakmak hem de telefon tutucu olarak kullanılabilen pratik bir promosyon ürünüdür. Standlı yapısı sayesinde telefon tutucu olarak kullanılabilir ve günlük kullanımda oldukça pratik bir çözüm sunar.

Promosyon çakmak ürünleri restoranlar, kafeler, organizasyonlar ve tanıtım kampanyalarında sık tercih edilen reklam ürünleri arasında yer almaktadır. Günlük kullanımda sıkça kullanılan çakmaklar sayesinde markanız müşterilerinizin yanında sürekli görünür olur.

Promosyon çakmak CM-500 modeli üzerine firmanıza ait logo, marka adı veya reklam mesajı tampon baskı veya UV dijital baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı bir çakmak hem de etkili bir reklam ürünü haline gelir.

Telefon tutuculu stand özelliği sayesinde masa üzerinde telefon standı olarak da kullanılabilir. Bu özellik ürünü klasik promosyon çakmaklardan ayıran önemli bir avantajdır.

TEKNİK ÖZELLİKLER  
Çakmak Tipi: Taşlı Çakmak  
Özellik: Telefon Tutuculu Standlı Çakmak  
Ürün Ebatı: 7.6 x 2.2 cm  
Baskı Alanı 1: 5.3 x 1.4 cm  
Baskı Alanı 2: 3.5 x 1.4 cm  
Baskı Türü: Tampon Baskı + UV Dijital Baskı  
Dolum: Doldurulamaz

Promosyon çakmak CM-500 modeli beyaz, kırmızı, mavi, sarı ve siyah renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin ve sipariş adetlerinin stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon çakmak siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon çakmak fiyatları sipariş miktarına ve baskı yöntemine göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için farklı ve kullanışlı bir promosyon ürünü arıyorsanız Promosyon Standlı Telefon Tutuculu Taşlı Çakmak CM-500 modeli iyi bir tercih olacaktır. Logo baskılı promosyon çakmak siparişi vererek markanızı geniş kitlelere ulaştırabilirsiniz.
`
},
{
  id: "p55",
  slug: "promosyon-manyetolu-mini-turbo-ruzgar-cakmak-cm-550",
  title: "Promosyon Manyetolu Mini Turbo Rüzgar Çakmak CM-550 | Logo Baskılı Promosyon Çakmak",
  category: "Çakmak",
  image: "/products/promosyon-manyetolu-mini-turbo-cakmak-cm-550.jpg",

  shortDesc:
    "Promosyon manyetolu mini turbo rüzgar çakmak CM-550, güçlü turbo alevi ve kompakt mini boy tasarımı ile promosyon çakmak modelleri arasında tercih edilen ürünlerden biridir. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon manyetolu mini turbo rüzgar çakmak CM-550 modeli güçlü turbo alev yapısı sayesinde rüzgara dayanıklı kullanım sunan promosyon çakmak modellerinden biridir. Manyetolu ateşleme sistemi sayesinde pratik ve güvenli bir kullanım sağlar.

Mini boy tasarımı sayesinde kolay taşınabilir ve günlük kullanım için oldukça uygundur. Bu özellikleri ile promosyon dağıtımlarında sık tercih edilen promosyon ürünleri arasında yer almaktadır.

Promosyon çakmak ürünleri özellikle restoranlar, kafeler, organizasyonlar, etkinlikler ve tanıtım kampanyalarında tercih edilen etkili reklam ürünleridir. Günlük kullanımda sıkça kullanılan çakmaklar sayesinde markanız müşterilerinizin yanında sürekli görünür olur.

Promosyon çakmak CM-550 modeli üzerine firmanıza ait logo, marka adı veya reklam mesajı baskı olarak uygulanabilir. Böylece ürün hem kullanışlı bir çakmak hem de etkili bir reklam ürünü haline gelir.

TEKNİK ÖZELLİKLER  
Çakmak Tipi: Turbo Siboplu Çakmak  
Ateşleme: Manyetolu  
Ürün Ölçüsü: 68 x 24 mm  
Baskı Alanı: 40 x 14 mm  
Model: Mini Boy

Promosyon çakmak CM-550 modeli beyaz ve siyah renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin ve minimum sipariş adetlerinin stok durumu dönemsel olarak değişiklik gösterebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon çakmak siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon çakmak fiyatları sipariş miktarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için küçük boyutlu, kullanışlı ve güçlü alevli bir promosyon ürünü arıyorsanız Promosyon Manyetolu Mini Turbo Rüzgar Çakmak CM-550 modeli iyi bir tercih olacaktır.
`
},
{
  id: "p56",
  slug: "promosyon-manyetolu-cakmak-clipper-brio-cm-600",
  title: "Promosyon Manyetolu Çakmak Clipper Brio CM-600 | Logo Baskılı Promosyon Çakmak",
  category: "Çakmak",
  image: "/products/promosyon-manyetolu-cakmak-cm-600.jpg",

  shortDesc:
    "Promosyon manyetolu çakmak CM-600, yerli üretim ve doldurulabilir yapısı ile uzun süre kullanılabilen promosyon çakmak modellerinden biridir. Logo baskılı toplu sipariş seçenekleri ile firmalar için ideal bir promosyon ürünüdür.",

  longDesc: `
Promosyon manyetolu çakmak CM-600 modeli, Clipper / Brio tarzı tasarımı ve dayanıklı yapısı ile promosyon çakmak ürünleri arasında sık tercih edilen modellerden biridir. Manyetolu ateşleme sistemi sayesinde pratik kullanım sağlar ve günlük kullanım için oldukça uygundur.

Doldurulabilir yapısı sayesinde uzun süre kullanılabilir. Bu özellik promosyon çakmakların kullanım süresini uzatarak markanızın daha uzun süre görünür olmasına yardımcı olur.

Promosyon çakmak ürünleri restoranlar, kafeler, etkinlikler, fuarlar ve tanıtım kampanyalarında sıklıkla tercih edilen reklam ürünleri arasında yer almaktadır. Günlük kullanımda sürekli kullanılan bir ürün olduğu için marka bilinirliğini artırmak açısından oldukça etkilidir.

Promosyon çakmak CM-600 modeli üzerine firmanıza ait logo, marka adı veya reklam mesajı tampon baskı veya UV baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı hem de etkili bir reklam ürünü haline gelir.

TEKNİK ÖZELLİKLER  
Çakmak Tipi: Manyetolu Çakmak  
Model: Clipper / Brio Tip  
Ürün Ölçüsü: 75 x 23 mm  
Dolum: Doldurulabilir  
Baskı Türü: Tampon Baskı + UV Baskı  
Üretim: Yerli Üretim  
Minimum Sipariş: 250 Adet

Promosyon çakmak CM-600 modeli beyaz, kırmızı, mavi, sarı ve siyah renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin ve sipariş adetlerinin stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon çakmak siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süreci değişiklik gösterebilir.

Promosyon çakmak fiyatları sipariş miktarına göre değişiklik gösterebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için ekonomik ve kullanışlı bir promosyon ürünü arıyorsanız Promosyon Manyetolu Çakmak CM-600 modeli iyi bir tercih olacaktır.
`
},
{
  id: "p57",
  slug: "promosyon-powerbank-8000mah-pb-100",
  title: "Promosyon Powerbank 8000 mAh PB-100 | Logo Baskılı Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-8000mah-pb-100.jpg",

  shortDesc:
    "Promosyon powerbank 8000 mAh PB-100 modeli yüksek kapasiteli bataryası ve LCD ekran göstergesi ile firmalar için ideal bir promosyon powerbank ürünüdür. Logo baskılı toplu sipariş seçenekleri ile sunulmaktadır.",

  longDesc: `
Promosyon powerbank 8000 mAh PB-100 modeli yüksek kapasiteli bataryası ve modern tasarımı ile promosyon teknoloji ürünleri arasında en çok tercih edilen ürünlerden biridir. Günümüzde mobil cihazların yoğun kullanımı nedeniyle powerbank ürünleri günlük yaşamın vazgeçilmez aksesuarları arasında yer almaktadır.

Promosyon powerbank ürünleri fuarlar, kurumsal etkinlikler, promosyon kampanyaları ve müşteri hediyeleri için oldukça etkili bir reklam ürünüdür. Günlük kullanımda sürekli kullanılan bir ürün olduğu için markanızın görünürlüğünü artırır.

Promosyon powerbank PB-100 modeli üzerine firmanıza ait logo, marka adı veya reklam mesajı uygulanabilir. Böylece ürün hem kullanışlı bir teknoloji ürünü hem de etkili bir reklam aracına dönüşür.

TEKNİK ÖZELLİKLER  
Batarya: A+ Lithium Polymer  
Kapasite: 8000 mAh  
Gösterge: LCD Ekran  
Giriş: Type-C  
Çıkış: 1 USB  
Ağırlık: 180 Gram  
Materyal: Rubber  
Ürün Ölçüsü: 135 x 60 x 20 mm  

Bataryalarımız test edilmiş olup 2 yıl garantilidir. En iyi performans için telefonunuzu kendi orijinal kablosu ile kullanmanız önerilmektedir.

Promosyon powerbank PB-100 modeli promosyon kampanyaları, kurumsal hediyeler ve marka tanıtımı için ideal bir üründür. Sipariş miktarına ve baskı seçeneklerine göre fiyatlandırma değişiklik gösterebilir.

Renk ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır. Logo baskılı promosyon powerbank siparişi vererek markanızı müşterilerinizin yanında sürekli görünür hale getirebilirsiniz.
`
},
{
  id: "p58",
  slug: "promosyon-powerbank-13000mah-pb-110",
  title: "Promosyon Powerbank 13000 mAh PB-110 | Logo Baskılı Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-13000mah-pb-110.jpg",

  shortDesc:
    "Promosyon powerbank 13000 mAh PB-110 modeli yüksek kapasiteli bataryası, LCD ekran göstergesi ve çift USB çıkışı ile kurumsal promosyon teknoloji ürünleri arasında en çok tercih edilen powerbank modellerinden biridir.",

  longDesc: `
Promosyon powerbank 13000 mAh PB-110 modeli yüksek kapasitesi ve güçlü bataryası ile mobil cihazlar için güvenilir bir taşınabilir şarj çözümü sunar. Günümüzde akıllı telefon, tablet ve diğer mobil cihazların yoğun kullanımı nedeniyle powerbank ürünleri promosyon teknoloji ürünleri arasında en çok tercih edilen ürünlerden biri haline gelmiştir.

Promosyon powerbank ürünleri fuarlar, etkinlikler, kurumsal kampanyalar ve müşteri hediyeleri için oldukça etkili bir reklam ürünüdür. Günlük kullanımda sürekli kullanılan bir ürün olduğu için markanızın görünürlüğünü artırır.

Promosyon powerbank PB-110 modeli üzerine firmanıza ait logo, marka adı veya reklam mesajı uygulanabilir. Böylece ürün hem kullanışlı bir teknoloji ürünü hem de etkili bir reklam aracına dönüşür.

TEKNİK ÖZELLİKLER  
Batarya: A+ Lithium ION  
Kapasite: 13000 mAh  
Gösterge: İkinci Nesil LCD  
Giriş: DC5V 1A (MAX) / Micro  
Çıkış: DC5V 2A (MAX) / 2 USB  
Ağırlık: 275 Gram  
Materyal: Rubber  
Ürün Ölçüsü: 140 x 65 x 23 mm  

Bataryalarımız test edilmiş olup 2 yıl garantilidir. En iyi performans için telefonunuzu kendi orijinal kablosu ile kullanmanız önerilmektedir.

Promosyon powerbank PB-110 modeli lacivert ve siyah renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon powerbank siparişleri logo baskılı veya baskısız olarak verilebilir. Sipariş miktarına göre fiyatlandırma değişiklik gösterebilir ve toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Kurumsal promosyon ürünleri arasında yer alan powerbank modelleri marka tanıtımı için oldukça etkili ürünlerdir. Logo baskılı promosyon powerbank siparişi vererek markanızı müşterilerinizin yanında sürekli görünür hale getirebilirsiniz.
`
},
{
  id: "p59",
  slug: "promosyon-ajanda-17x23-termo-deri-aj-100",
  title: "Promosyon Ajanda 17,5 x 23,5 cm AJ-100 | Logo Baskılı Kurumsal Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-100.jpg",

  shortDesc:
    "Promosyon ajanda AJ-100 modeli termo deri kapak yapısı, 336 sayfalık iç tasarımı ve kurumsal logo baskı seçenekleri ile firmalar için ideal promosyon ajanda modellerinden biridir.",

  longDesc: `
Promosyon ajanda AJ-100 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında en çok tercih edilen ajanda modellerinden biridir. Özellikle yılbaşı promosyonları, kurumsal hediyeler ve müşteri ziyaretleri için oldukça tercih edilen bir üründür.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili kurumsal promosyon ürünleri arasında yer almaktadır. Günlük planlama, not alma ve iş takibi için kullanılan ajandalar sayesinde markanız yıl boyunca müşterilerinizin yanında olur.

Promosyon ajanda AJ-100 modeli üzerine firmanıza ait logo, marka adı veya özel tasarım gofre baskı veya dijital baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı hem de prestijli bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 17,5 x 23,5 cm  
Kağıt: 70 gr Ivory Krem  
Sayfa Sayısı: 336  
Kapak: Termo Deri  
Baskı Türü: Gofre Baskı + Dijital Baskı  
Koli Adedi: 40

Promosyon ajanda AJ-100 modeli gri, taba, kırmızı, lacivert, turkuaz, turuncu, yeşil, siyah ve füme gibi farklı renk seçenekleri ile sunulmaktadır. Renk seçeneklerinin stok durumu dönemsel olarak değişiklik gösterebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajanda siparişleri logo baskılı veya baskısız olarak verilebilir. Baskı yöntemi ve sipariş miktarına göre üretim süresi değişiklik gösterebilir.

Kurumsal promosyon ürünleri arasında yer alan ajanda modelleri özellikle yılbaşı dönemlerinde en çok tercih edilen promosyon ürünlerinden biridir. Logo baskılı promosyon ajanda siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p60",
  slug: "promosyon-duvar-saati-40cm-metal-kasa-ds-100",
  title: "Promosyon Duvar Saati 40 cm Metal Kasa DS-100 | Logo Baskılı Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-100.jpg",

  shortDesc:
    "Promosyon duvar saati 40 cm metal kasa DS-100 modeli geniş kadranı ve kaliteli yapısı ile kurumsal promosyon duvar saatleri arasında en çok tercih edilen modellerden biridir.",

  longDesc: `
Promosyon duvar saati DS-100 modeli 40 cm geniş çapı ve metal kasa yapısı ile dikkat çeken kurumsal promosyon ürünleri arasında yer almaktadır. Geniş kadranı sayesinde uzaktan rahat okunabilir ve ofis, işyeri, fabrika, mağaza ve kurumsal alanlarda kullanım için oldukça uygundur.

Promosyon duvar saatleri firmalar için uzun süre kullanılan en etkili reklam ürünlerinden biridir. Duvar saatleri sürekli görünür bir alanda bulunduğu için markanızın uzun süre müşterilerinizin gözünün önünde kalmasını sağlar.

Promosyon duvar saati DS-100 modeli üzerine firmanıza ait logo, marka adı veya reklam tasarımı uygulanabilir. Böylece ürün hem kullanışlı hem de etkili bir reklam aracına dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Tipi: Promosyon Duvar Saati  
Çap: 40 cm  
Kasa: Metal Kasa  
Cam: Mineral Cam  
Kadran: Bristol Kadran  
Saniye: Akar Saniye Mekanizması  

Promosyon duvar saatleri ofisler, işyerleri, fabrikalar ve kurumsal alanlar için oldukça kullanışlı promosyon ürünleridir. Logo baskılı duvar saatleri marka tanıtımı için uzun süre etkili bir reklam aracıdır.

Promosyon duvar saati DS-100 modeli farklı kadran ve kasa seçenekleri ile üretilebilmektedir. Renk seçeneklerinin ve stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında renk ve stok bilgisi alınması önerilmektedir.

Promosyon duvar saati siparişleri logo baskılı veya baskısız olarak verilebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Eğer firmanız için hem dekoratif hem de etkili bir reklam ürünü arıyorsanız Promosyon Duvar Saati DS-100 modeli oldukça iyi bir tercihtir.
`
},
{
  id: "p61",
  slug: "promosyon-tarihsiz-defter-15x21-td-102",
  title: "Promosyon Tarihsiz Defter 15 x 21 cm TD-102 | Logo Baskılı Kurumsal Defter",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-102.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-102 modeli 15 x 21 cm ölçüsü ve şık tasarımı ile kurumsal promosyon ürünleri arasında en çok tercih edilen promosyon defter modellerinden biridir.",

  longDesc: `
Promosyon tarihsiz defter TD-102 modeli 15 x 21 cm ölçüsü ile günlük kullanım için oldukça ideal bir promosyon defter ürünüdür. Kurumsal firmalar tarafından müşteri hediyesi, etkinlik promosyonu ve çalışan hediyesi olarak sık tercih edilmektedir.

Promosyon defterler hem kullanışlı hem de uzun süre kullanılan promosyon ürünleri arasında yer alır. Günlük not alma, toplantı notları ve planlama için kullanılan bu ürünler markanızın sürekli görünür olmasını sağlar.

Promosyon tarihsiz defter TD-102 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım baskı uygulanabilir. Böylece ürün hem kullanışlı hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 15 x 21 cm  
Ürün Tipi: Tarihsiz Defter  
Kullanım: Günlük Not Defteri  
Baskı: Logo Baskılı / Baskısız  

Promosyon tarihsiz defterler özellikle fuarlar, kurumsal etkinlikler, müşteri ziyaretleri ve promosyon kampanyaları için oldukça ideal ürünlerdir.

Ürün renk ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır. Logo baskılı promosyon defter siparişi vererek markanızı müşterilerinizin masasında sürekli görünür hale getirebilirsiniz.
`
},
{
  id: "p62",
  slug: "promosyon-tarihsiz-defter-14x21-td-103",
  title: "Promosyon Tarihsiz Defter 14,5 x 21 cm TD-103 | Logo Baskılı Kurumsal Defter",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-103.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-103 modeli 14,5 x 21 cm ölçüsü ve şık kapak tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen promosyon defter modellerinden biridir.",

  longDesc: `
Promosyon tarihsiz defter TD-103 modeli kompakt ölçüsü ve şık tasarımı ile günlük kullanım için ideal bir promosyon defter ürünüdür. Kurumsal firmalar tarafından müşteri hediyesi, etkinlik promosyonu ve çalışan hediyesi olarak sıklıkla tercih edilmektedir.

Promosyon defterler hem kullanışlı hem de uzun süre kullanılan promosyon ürünleri arasında yer almaktadır. Günlük not alma, toplantı notları ve planlama için kullanılan bu ürünler markanızın sürekli görünür olmasını sağlar.

Promosyon tarihsiz defter TD-103 modeli üzerine firmanıza ait logo, marka adı veya özel tasarım baskı uygulanabilir. Böylece ürün hem kullanışlı hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 14,5 x 21 cm  
Ürün Tipi: Tarihsiz Defter  
Baskı: Logo Baskılı / Baskısız  

RENK SEÇENEKLERİ  
Siyah  
Füme  
Lacivert  
Kırmızı  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişiklik gösterebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon defter siparişleri logo baskılı veya baskısız olarak verilebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Promosyon tarihsiz defterler fuarlar, etkinlikler, kurumsal kampanyalar ve müşteri hediyeleri için oldukça ideal promosyon ürünleri arasında yer almaktadır. Logo baskılı promosyon defter siparişi vererek markanızı müşterilerinizin masasında sürekli görünür hale getirebilirsiniz.
`
},
{
  id: "p63",
  slug: "promosyon-tarihsiz-defter-14x21-td-104",
  title: "Promosyon Tarihsiz Defter 14,5 x 21 cm TD-104 | Logo Baskılı Kurumsal Defter",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-104.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-104 modeli 14,5 x 21 cm ölçüsü ve şık kapak tasarımı ile kurumsal promosyon ürünleri arasında en çok tercih edilen promosyon defter modellerinden biridir.",

  longDesc: `
Promosyon tarihsiz defter TD-104 modeli modern tasarımı ve kullanışlı ölçüsü ile günlük kullanım için oldukça ideal bir promosyon defter ürünüdür. Kurumsal firmalar tarafından müşteri hediyesi, çalışan hediyesi ve promosyon kampanyaları için sıklıkla tercih edilmektedir.

Promosyon defterler uzun süre kullanılan ve markanızın sürekli görünmesini sağlayan promosyon ürünleri arasında yer almaktadır. Günlük not alma, toplantı notları ve iş planlaması için kullanılan bu ürünler markanızın müşterilerinizin masasında sürekli görünür olmasını sağlar.

Promosyon tarihsiz defter TD-104 modeli üzerine firmanıza ait logo, marka adı veya özel tasarım baskı uygulanabilir. Böylece ürün hem kullanışlı hem de etkili bir reklam ürünü haline gelir.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 14,5 x 21 cm  
Ürün Tipi: Tarihsiz Defter  
Baskı: Logo Baskılı / Baskısız  

RENK SEÇENEKLERİ  
Lacivert  
Taba  
Siyah  
Kırmızı  
Füme  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişiklik gösterebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon defter siparişleri logo baskılı veya baskısız olarak verilebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Promosyon tarihsiz defterler fuarlar, kurumsal etkinlikler ve müşteri ziyaretleri için oldukça ideal promosyon ürünleri arasında yer almaktadır. Logo baskılı promosyon defter siparişi vererek markanızı müşterilerinizin masasında sürekli görünür hale getirebilirsiniz.
`
},
{
  id: "p64",
  slug: "promosyon-tarihsiz-defter-14x21-termo-deri-td-110",
  title: "Promosyon Tarihsiz Defter 14,5 x 21 cm TD-110 | Logo Baskılı Termo Deri Defter",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-110.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-110 modeli termo deri kapak tasarımı, 80 gr ivory krem kağıdı ve çizgili sayfa yapısı ile kurumsal promosyon defter modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon tarihsiz defter TD-110 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında en çok tercih edilen defter modellerinden biridir. Günlük kullanım için ideal ölçüsü sayesinde hem ofis ortamında hem de kişisel kullanımda oldukça pratik bir üründür.

Promosyon defterler markaların tanıtımında kullanılan en etkili promosyon ürünlerinden biridir. Günlük not alma, toplantı notları ve planlama için kullanılan bu ürünler markanızın uzun süre görünür olmasını sağlar.

Promosyon tarihsiz defter TD-110 modeli üzerine firmanıza ait logo, marka adı veya özel tasarım gofre baskı veya dijital baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı hem de prestijli bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 14,5 x 21 cm  
Kağıt: 80 gr Ivory Krem  
Sayfa Sayısı: 224  
Kapak: Termo Deri  
Sayfa Tipi: Çizgili  
Baskı Türü: Gofre Baskı + Dijital Baskı  
Koli Adedi: 40  
Özellik: Kenarları Boyalı

RENK SEÇENEKLERİ  
Kırmızı  
Lacivert  
Açık Mavi  
Siyah  
Taba  
Füme  
Mor  
Turkuaz  
Yeşil  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon tarihsiz defter siparişleri logo baskılı veya baskısız olarak verilebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Promosyon defterler özellikle fuarlar, kurumsal etkinlikler, müşteri ziyaretleri ve promosyon kampanyaları için oldukça ideal promosyon ürünleri arasında yer almaktadır. Logo baskılı promosyon defter siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p65",
  slug: "promosyon-tarihsiz-defter-14x21-termo-pu-td-115",
  title: "Promosyon Tarihsiz Defter 14,5 x 21 cm TD-115 | Logo Baskılı Termo PU Defter",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-115.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-115 modeli termo PU sert kapak tasarımı, çizgili sayfaları ve kalem tutucu özelliği ile kurumsal promosyon defter modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon tarihsiz defter TD-115 modeli şık termo PU sert kapak yapısı ve kullanışlı iç sayfa tasarımı ile kurumsal promosyon ürünleri arasında tercih edilen defter modellerinden biridir. Günlük kullanım için ideal ölçüsü sayesinde hem ofis hem de kişisel kullanım için oldukça uygundur.

Promosyon defterler firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Günlük not alma, toplantı planlama ve iş takibi için kullanılan defterler sayesinde markanız müşterilerinizin masasında uzun süre görünür olur.

Promosyon tarihsiz defter TD-115 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre baskı veya dijital baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı hem de prestijli bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 14,5 x 21 cm  
Kağıt: 70 gr Krem  
Sayfa Sayısı: 160 (Çizgili)  
Kapak: Termo PU Sert Kapak  
Baskı Türü: Gofre Baskı + Dijital Baskı  
Koli Adedi: 40  
Özellik: Renkli Kenarlar  
Ek Özellik: Kalem Tutucu

RENK SEÇENEKLERİ  
Kırmızı  
Lacivert  
Turkuaz  
Siyah  
Yeşil  
Gri  
Turuncu  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon tarihsiz defter siparişleri logo baskılı veya baskısız olarak verilebilir. Toplu siparişlerde firmalara özel fiyat avantajları sunulmaktadır.

Promosyon defterler özellikle fuarlar, kurumsal etkinlikler ve müşteri ziyaretleri için oldukça ideal promosyon ürünleri arasında yer almaktadır. Logo baskılı promosyon defter siparişi vererek markanızı müşterilerinizin masasında uzun süre görünür hale getirebilirsiniz.
`
},
{
  id: "p66",
  slug: "promosyon-ajanda-17x24-termo-aj-110",
  title: "Promosyon Ajanda 17 x 24 cm AJ-110 | Logo Baskılı Kurumsal Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-110.jpg",

  shortDesc:
    "Promosyon ajanda AJ-110 modeli 17 x 24 cm ölçüsü, termo deri kapak yapısı ve kalem tutucu özelliği ile kurumsal promosyon ajanda modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-110 modeli termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında en çok tercih edilen ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş takibi için oldukça kullanışlı bir ajandadır.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-110 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre baskı, serigrafi baskı veya UV baskı yöntemleri ile uygulanabilir. Böylece ajanda hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 17 x 24 cm  
Kapak: Termo Deri  
Kalem Tutucu: Var  
Sayfa Sayısı: 336  
Kağıt: 70 gram Ivory Krem  
Baskı Türü: Gofre Baskı, Serigrafi Baskı, UV Baskı  
Koli Adedi: 30  

RENK SEÇENEKLERİ  
Kırmızı  
Lacivert  
Siyah  
Taba  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleridir. Logo baskılı promosyon ajanda siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p67",
  slug: "promosyon-ajanda-17x24-termo-deri-aj-120",
  title: "Promosyon Ajanda 17 x 24 cm AJ-120 | Logo Baskılı Kurumsal Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-120.jpg",

  shortDesc:
    "Promosyon ajanda AJ-120 modeli 17 x 24 cm ölçüsü, termo deri kapak tasarımı ve 336 sayfalık kaliteli iç yapısı ile kurumsal promosyon ajanda modelleri arasında en çok tercih edilen ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-120 modeli termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında öne çıkan ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş organizasyonu için oldukça kullanışlı bir ajandadır.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-120 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre baskı veya dijital baskı yöntemi ile uygulanabilir. Böylece ajanda hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 17 x 24 cm  
Kapak: Termo Deri  
Kağıt: 70 gr Ivory Krem  
Sayfa Sayısı: 336  
Baskı Türü: Gofre Baskı + Dijital Baskı  
Koli Adedi: 40  

RENK SEÇENEKLERİ  
Turkuaz Mavi  
Yeşil  
Taba  
Kırmızı  
Gri  
Turuncu  
Lacivert  
Siyah  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleri arasında yer almaktadır. Logo baskılı promosyon ajanda siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p68",
  slug: "promosyon-ajanda-17x24-termo-deri-aj-130",
  title: "Promosyon Ajanda 17 x 24 cm AJ-130 | Logo Baskılı Termo Deri Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-130.jpg",

  shortDesc:
    "Promosyon ajanda AJ-130 modeli 17 x 24 cm ölçüsü, termo deri kapak yapısı ve 336 sayfalık kaliteli iç tasarımı ile kurumsal promosyon ajanda modelleri arasında tercih edilen ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-130 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında öne çıkan ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş takibi için oldukça kullanışlı bir ajandadır.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-130 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre baskı yöntemi ile uygulanabilir. Böylece ajanda hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 17 x 24 cm  
Kapak: Termo Deri  
Kağıt: 70 gr Ivory Krem  
Sayfa Sayısı: 336  
Baskı Türü: Gofre Baskı  
Koli Adedi: 40  

RENK SEÇENEKLERİ  
Lacivert  
Turkuaz  
Kırmızı  
Taba  
Turkuaz Mavi  
Turkuaz Yeşil  
Füme  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleridir. Logo baskılı promosyon ajanda siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p69",
  slug: "promosyon-ajanda-17x24-termo-deri-aj-140",
  title: "Promosyon Ajanda 17 x 24 cm AJ-140 | Logo Baskılı Kurumsal Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-140.jpg",

  shortDesc:
    "Promosyon ajanda AJ-140 modeli 17 x 24 cm ölçüsü, termo deri kapak tasarımı ve 336 sayfalık kaliteli iç yapısı ile kurumsal promosyon ajanda modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-140 modeli şık termo deri kapak yapısı ve kaliteli iç sayfa tasarımı ile kurumsal promosyon ürünleri arasında tercih edilen ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş organizasyonu için oldukça kullanışlı bir ajandadır.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-140 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre baskı veya dijital baskı yöntemleri ile uygulanabilir. Böylece ajanda hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 17 x 24 cm  
Kapak: Termo Deri  
Kağıt: 70 gr Ivory Krem  
Sayfa Sayısı: 336  
Baskı Türü: Gofre Baskı + Dijital Baskı  
Koli Adedi: 40  

RENK SEÇENEKLERİ  
Kırmızı  
Lacivert  
Taba  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleridir. Logo baskılı promosyon ajanda siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p70",
  slug: "promosyon-ajanda-16x24-termo-deri-aj-150",
  title: "Promosyon Ajanda 16 x 24 cm AJ-150 | Logo Baskılı Termo Deri Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-150.jpg",

  shortDesc:
    "Promosyon ajanda AJ-150 modeli 16 x 24 cm ölçüsü, termo deri kapak yapısı ve 320 sayfalık tarihli iç tasarımı ile kurumsal promosyon ajanda modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-150 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında tercih edilen ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş takibi için oldukça kullanışlı bir ajandadır.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-150 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre baskı, dijital baskı veya UV baskı yöntemleri ile uygulanabilir. Böylece ajanda hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Ölçüsü: 16 x 24 cm  
Kapak: Termo Deri  
Kağıt: Krem Kağıt  
Sayfa Sayısı: 320 Sayfa (Tarihli)  
Baskı Türü: Gofre Baskı, Dijital Baskı, UV Baskı  

RENK SEÇENEKLERİ  
Taba  
Füme  
Kırmızı  
Turkuaz  
Turuncu  
Yeşil  
Lacivert  
Gri  
Krem  
Mor  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleridir. Logo baskılı promosyon ajanda siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p71",
  slug: "promosyon-duvar-saati-35cm-metal-kasa-ds-110",
  title: "Promosyon Duvar Saati 35 cm Metal Kasa DS-110 | Logo Baskılı Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-110.jpg",

  shortDesc:
    "Promosyon duvar saati DS-110 modeli 35 cm metal kasa yapısı, mineral cam koruması ve akar saniye mekanizması ile kurumsal promosyon duvar saatleri arasında tercih edilen modellerden biridir.",

  longDesc: `
Promosyon duvar saati DS-110 modeli 35 cm çapı ve metal kasa tasarımı ile kurumsal promosyon ürünleri arasında öne çıkan duvar saati modellerinden biridir. Geniş kadranı sayesinde ofisler, işyerleri, fabrikalar ve mağazalar için oldukça kullanışlıdır.

Promosyon duvar saatleri firmalar için uzun süre kullanılan en etkili reklam ürünlerinden biridir. Ofis duvarlarında veya çalışma alanlarında sürekli görünür olması sayesinde markanızın uzun süre akılda kalmasını sağlar.

Promosyon duvar saati DS-110 modeli üzerine firmanıza ait logo, marka adı veya reklam tasarımı uygulanabilir. Böylece ürün hem dekoratif hem de etkili bir reklam aracına dönüşür.

TEKNİK ÖZELLİKLER  
Ürün Tipi: Promosyon Duvar Saati  
Çap: 35 cm  
Kasa: Alüminyum Metal Kasa  
Cam: Mineral Cam  
Kadran: Bristol Kadran  
Saniye: Akar Saniye Mekanizması  

Promosyon duvar saatleri ofisler, mağazalar, fabrikalar ve kurumsal alanlar için oldukça ideal promosyon ürünleri arasında yer almaktadır.

Ürün renk ve kadran seçeneklerinin stok durumu dönemsel olarak değişiklik gösterebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri firmalara özel üretim olarak hazırlanabilir ve toplu siparişlerde özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p72",
  slug: "promosyon-duvar-saati-37cm-aluminyum-kasa-ds-115",
  title: "Promosyon Duvar Saati 37 cm Alüminyum Kasa DS-115 | Logo Baskılı Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-115.jpg",

  shortDesc:
    "Promosyon duvar saati DS-115 modeli 37 cm çapı, mineral cam koruması ve akar saniyeli mekanizması ile kurumsal promosyon duvar saatleri arasında tercih edilen modellerden biridir.",

  longDesc: `
Promosyon duvar saati DS-115 modeli 37 cm çapı ve modern tasarımı ile ofisler, işyerleri ve kurumsal alanlar için ideal promosyon ürünlerinden biridir. Geniş kadranı sayesinde uzaktan rahat okunabilir ve dekoratif bir görünüm sunar.

Promosyon duvar saatleri firmalar için uzun süre kullanılan en etkili reklam ürünlerinden biridir. Ofis duvarlarında veya çalışma alanlarında sürekli görünür olması sayesinde markanızın uzun süre akılda kalmasına yardımcı olur.

Promosyon duvar saati DS-115 modeli üzerine firmanıza ait logo, marka adı veya reklam tasarımı uygulanabilir. Böylece ürün hem dekoratif hem de etkili bir reklam aracına dönüşür.

TEKNİK ÖZELLİKLER  
Kasa Çapı: Ø 370 mm  
Kadran Çapı: Ø 308 mm  
Mekanizma: Akar Saniyeli Mekanizma  
Cam: Mineral Cam  
Kadran: Bristol Kadran  
Kasa: ABS Kasa  
Ambalaj: Shrink İç Ambalaj + Mikro Kutu  

Promosyon duvar saatleri özellikle ofisler, fabrikalar, mağazalar ve kurumsal alanlarda en çok tercih edilen promosyon ürünlerinden biridir.

Ürün renk ve kadran seçeneklerinin stok durumu dönemsel olarak değişiklik gösterebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri firmalara özel üretim olarak hazırlanabilir ve toplu siparişlerde özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p73",
  slug: "promosyon-duvar-saati-37cm-metal-kasa-ds-120",
  title: "Promosyon Duvar Saati 37 cm Metal Kasa DS-120 | Logo Baskılı Kurumsal Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-120.jpg",

  shortDesc:
    "Promosyon duvar saati DS-120 modeli 37 cm metal kasa, mineral cam ve akar saniyeli mekanizması ile ofis ve kurumsal alanlar için ideal promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon duvar saati DS-120 modeli şık metal kasası ve geniş kadranı ile kurumsal promosyon ürünleri arasında en çok tercih edilen modellerden biridir. 37 cm çapındaki büyük yapısı sayesinde ofislerde, iş yerlerinde ve kurumsal alanlarda rahatlıkla kullanılabilir.

Promosyon duvar saatleri firmaların marka görünürlüğünü artıran uzun ömürlü reklam ürünlerinden biridir. Ofis duvarlarında sürekli görünür olması sayesinde firmanızın logosu uzun süre müşterilerinizin göz önünde olur.

Bu model üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece ürün hem dekoratif hem de etkili bir promosyon ürünü haline gelir.

TEKNİK ÖZELLİKLER

Kasa Çapı: Ø 370 mm  
Kadran Çapı: Ø 308 mm  
Mekanizma: Akar Saniyeli Mekanizma  
Cam: Mineral Cam  
Kadran: Bristol Kadran  
Kasa: Akrilik Boyalı ABS Kasa  
Ambalaj: Shrink İç Ambalaj + Mikro Kutu  

Promosyon duvar saatleri özellikle ofisler, fabrikalar, mağazalar, okullar ve kurumsal işletmeler tarafından sıklıkla tercih edilen reklam ürünleri arasındadır.

Ürün renk ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri için toplu üretim yapılmakta olup firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p74",
  slug: "promosyon-duvar-saati-38cm-metal-kasa-ds-130",
  title: "Promosyon Duvar Saati 38 cm Metal Kasa DS-130 | Pirinç Kaplama Logo Baskılı Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-130.jpg",

  shortDesc:
    "Promosyon duvar saati DS-130 modeli 38 cm pirinç kaplama metal kasa, mineral cam ve akar saniyeli mekanizması ile şık tasarıma sahip kurumsal promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon duvar saati DS-130 modeli pirinç kaplama kasası ve yaldız kabartmalı kadranı ile klasik ve şık tasarıma sahip kurumsal promosyon ürünlerinden biridir. 38 cm çapındaki geniş yapısı sayesinde ofislerde, toplantı salonlarında ve kurumsal alanlarda rahatlıkla kullanılabilir.

Promosyon duvar saatleri uzun süre kullanılan reklam ürünleri arasında yer alır. Ofislerde ve iş yerlerinde sürekli görünür olması sayesinde markanızın bilinirliğini artırır ve etkili bir tanıtım sağlar.

Bu model üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece ürün hem dekoratif hem de güçlü bir reklam aracına dönüşür.

TEKNİK ÖZELLİKLER

Kasa Çapı: Ø 380 mm  
Kadran Çapı: Ø 288 mm  
Kasa: Pirinç Kaplama ABS Kasa  
Kadran: Yaldız Kabartma Kadran  
Cam: Mineral Cam  
Mekanizma: Akar Saniyeli Mekanizma  
Ambalaj: Shrink İç Ambalaj + Mikro Kutu  

Promosyon duvar saatleri özellikle ofisler, mağazalar, fabrikalar ve kurumsal işletmeler tarafından en çok tercih edilen promosyon ürünlerinden biridir.

Ürün stok ve model seçenekleri dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p75",
  slug: "promosyon-duvar-saati-35cm-plastik-kasa-ds-135",
  title: "Promosyon Duvar Saati 35 cm Plastik Kasa DS-135 | Logo Baskılı Kurumsal Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-135.jpg",

  shortDesc:
    "Promosyon duvar saati DS-135 modeli 35 cm plastik kasa, mineral cam ve akar saniyeli mekanizması ile ofis ve kurumsal kullanım için ideal promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon duvar saati DS-135 modeli modern tasarımı ve renk seçenekleri ile kurumsal promosyon ürünleri arasında sık tercih edilen modellerden biridir. 35 cm çapındaki geniş yapısı sayesinde ofislerde, mağazalarda ve iş yerlerinde rahatlıkla kullanılabilir.

Promosyon duvar saatleri firmaların marka bilinirliğini artıran en etkili reklam ürünlerinden biridir. Ofis duvarlarında uzun süre kullanıldığı için firmanızın logosu sürekli görünür olur ve marka hatırlanabilirliğini artırır.

Bu model üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece ürün hem dekoratif hem de etkili bir promosyon ürünü haline gelir.

TEKNİK ÖZELLİKLER

Kasa Çapı: Ø 350 mm  
Kadran Çapı: Ø 308 mm  
Mekanizma: Akar Saniyeli Mekanizma  
Cam: Mineral Cam  
Kadran: Bristol Kadran  
Kasa: Akrilik Boyalı ABS Kasa  
Ambalaj: Shrink İç Ambalaj + Mikro Kutu  

Promosyon duvar saatleri özellikle ofisler, fabrikalar, mağazalar ve kurumsal işletmeler tarafından en çok tercih edilen promosyon ürünlerinden biridir.

Ürün renk seçeneklerinin stok durumu dönemsel olarak değişiklik gösterebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri toplu üretim olarak hazırlanmakta olup firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p76",
  slug: "promosyon-duvar-saati-38cm-krom-kasa-ds-136",
  title: "Promosyon Duvar Saati 38 cm Krom Kasa DS-136 | Logo Baskılı Kurumsal Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-136.jpg",

  shortDesc:
    "Promosyon duvar saati DS-136 modeli 38 cm krom kasa, mineral cam ve akar saniyeli mekanizması ile ofis ve kurumsal kullanım için ideal promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon duvar saati DS-136 modeli krom kaplama kasası ve modern tasarımı ile kurumsal promosyon ürünleri arasında dikkat çeken modellerden biridir. 38 cm çapındaki geniş yapısı sayesinde ofislerde, iş yerlerinde ve kurumsal alanlarda rahatlıkla kullanılabilir.

Promosyon duvar saatleri uzun süre kullanılan ve markanızın görünürlüğünü artıran en etkili reklam ürünlerinden biridir. Ofis duvarlarında sürekli görünür olması sayesinde firmanızın logosu müşterilerinizin ve çalışanların gözünün önünde olur.

Bu model üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece ürün hem dekoratif hem de güçlü bir tanıtım ürünü haline gelir.

TEKNİK ÖZELLİKLER

Kasa Çapı: Ø 380 mm  
Kadran Çapı: Ø 288 mm  
Kasa: Krom Kaplama ABS Kasa  
Kadran: Bristol Kadran  
Cam: Mineral Cam  
Mekanizma: Akar Saniyeli Mekanizma  
Ambalaj: Shrink İç Ambalaj + Mikro Kutu  

Promosyon duvar saatleri özellikle ofisler, mağazalar, fabrikalar ve kurumsal işletmeler tarafından sıklıkla tercih edilen promosyon ürünleri arasında yer almaktadır.

Ürün stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri toplu üretim olarak hazırlanmakta olup firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p77",
  slug: "promosyon-duvar-saati-25cm-metal-kasa-ds-140",
  title: "Promosyon Duvar Saati 25 cm Metal Kasa DS-140 | Logo Baskılı Kurumsal Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-140.jpg",

  shortDesc:
    "Promosyon duvar saati DS-140 modeli 25 cm metal kasa, mineral cam ve akar saniyeli mekanizması ile ofis ve kurumsal kullanım için ideal promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon duvar saati DS-140 modeli kompakt boyutu ve şık metal kasası ile kurumsal promosyon ürünleri arasında tercih edilen modellerden biridir. 25 cm çapındaki yapısı sayesinde küçük ofislerde, mağazalarda ve çalışma alanlarında rahatlıkla kullanılabilir.

Promosyon duvar saatleri firmalar için uzun süre kullanılan ve marka görünürlüğünü artıran etkili reklam ürünlerinden biridir. Ofislerde veya çalışma alanlarında sürekli görünür olması sayesinde firmanızın logosu uzun süre müşterilerinizin ve çalışanların dikkatini çeker.

Bu model üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece ürün hem dekoratif hem de güçlü bir promosyon ürünü haline gelir.

TEKNİK ÖZELLİKLER

Kasa: Metal Kasa  
Cam: Mineral Cam  
Mekanizma: Akar Saniyeli Mekanizma  
Kadran: Bristol Kadran  

Promosyon duvar saatleri özellikle ofisler, mağazalar, fabrikalar ve kurumsal işletmeler tarafından sıklıkla tercih edilen promosyon ürünlerinden biridir.

Ürün stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri toplu üretim olarak hazırlanmakta olup firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p78",
  slug: "promosyon-duvar-saati-35cm-plastik-kasa-ds-150",
  title: "Promosyon Duvar Saati 35 cm Plastik Kasa DS-150 | Logo Baskılı Kurumsal Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-150.jpg",

  shortDesc:
    "Promosyon duvar saati DS-150 modeli 35 cm plastik kasa, mineral cam ve akar saniyeli mekanizması ile ofis ve kurumsal alanlar için ideal promosyon duvar saati modellerinden biridir.",

  longDesc: `
Promosyon duvar saati DS-150 modeli modern tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen modellerden biridir. 35 cm çapındaki geniş yapısı sayesinde ofislerde, mağazalarda ve kurumsal çalışma alanlarında rahatlıkla kullanılabilir.

Promosyon duvar saatleri firmaların marka görünürlüğünü artıran uzun ömürlü reklam ürünlerinden biridir. Ofis duvarlarında sürekli görünür olması sayesinde firmanızın logosu müşterilerinizin ve çalışanların dikkatini çeker.

Bu model üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece ürün hem dekoratif hem de güçlü bir reklam ürünü haline gelir.

TEKNİK ÖZELLİKLER

Kasa Çapı: Ø 350 mm  
Kadran Çapı: Ø 308 mm  
Mekanizma: Akar Saniyeli Mekanizma  
Cam: Mineral Cam  
Kadran: Alüminyum Kabartma Kadran  
Kasa: Akrilik Boyalı ABS Kasa  
Ambalaj: Shrink İç Ambalaj + Mikro Kutu  

Promosyon duvar saatleri özellikle ofisler, mağazalar, fabrikalar, okullar ve kurumsal işletmeler tarafından en çok tercih edilen promosyon ürünleri arasında yer almaktadır.

Ürün renk ve model stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri toplu üretim olarak hazırlanmakta olup firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p79",
  slug: "promosyon-duvar-saati-35cm-plastik-kasa-ds-160",
  title: "Promosyon Duvar Saati 35 cm Plastik Kasa DS-160 | Logo Baskılı Kurumsal Duvar Saati",
  category: "Duvar Saatleri",
  image: "/products/promosyon-duvar-saati-ds-160.jpg",

  shortDesc:
    "Promosyon duvar saati DS-160 modeli 35 cm plastik kasa, mineral cam ve akar saniyeli mekanizması ile kurumsal kullanım için ideal promosyon duvar saati modellerinden biridir.",

  longDesc: `
Promosyon duvar saati DS-160 modeli sade ve modern tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen modellerden biridir. 35 cm çapındaki yapısı sayesinde ofisler, mağazalar ve kurumsal çalışma alanlarında rahatlıkla kullanılabilir.

Promosyon duvar saatleri firmalar için uzun süre kullanılan ve marka görünürlüğünü artıran etkili reklam ürünlerinden biridir. Ofis duvarlarında sürekli görünür olması sayesinde firmanızın logosu müşterilerinizin ve çalışanların dikkatini çeker.

Bu model üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece ürün hem dekoratif hem de güçlü bir tanıtım ürünü haline gelir.

TEKNİK ÖZELLİKLER

Kasa: Plastik Kasa  
Cam: Mineral Cam  
Mekanizma: Akar Saniyeli Mekanizma  
Kadran: Bristol Kadran  

Promosyon duvar saatleri özellikle ofisler, mağazalar, fabrikalar, okullar ve kurumsal işletmeler tarafından sıklıkla tercih edilen promosyon ürünleri arasında yer almaktadır.

Ürün renk ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon duvar saati siparişleri toplu üretim olarak hazırlanmakta olup firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p80",
  slug: "promosyon-powerbank-10000mah-pb-111",
  title: "Promosyon Powerbank 10.000 mAh PB-111 | Logo Baskılı Kurumsal Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-pb-111.jpg",

  shortDesc:
    "Promosyon powerbank PB-111 modeli 10.000 mAh kapasitesi ile telefon ve mobil cihazlar için güçlü bir taşınabilir şarj çözümü sunar. Logo baskılı kurumsal promosyon ürünleri arasında en çok tercih edilen modellerden biridir.",

  longDesc: `
Promosyon powerbank PB-111 modeli 10.000 mAh yüksek kapasitesi ile mobil cihazlar için güçlü ve pratik bir taşınabilir şarj çözümü sunar. Günlük kullanımda telefon, tablet ve diğer elektronik cihazların hızlı şekilde şarj edilmesini sağlar.

Promosyon powerbank ürünleri özellikle teknoloji promosyon ürünleri arasında en çok tercih edilen modellerden biridir. Firmalar için etkili bir reklam ürünü olup, uzun süre kullanılan bir promosyon ürünüdür.

Ürün üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece powerbank ürünleri hem kullanışlı hem de güçlü bir tanıtım aracı haline gelir.

Promosyon powerbank modelleri fuarlar, kurumsal etkinlikler, müşteri hediyeleri ve kampanyalar için en çok tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Kapasite: 10.000 mAh  
Taşınabilir Şarj Cihazı  
Kurumsal Logo Baskı Uygulanabilir  
Dayanıklı ve Şık Tasarım  

Ürün renk ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon powerbank siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p81",
  slug: "promosyon-powerbank-10000mah-22-5w-hizli-sarj-pb-112",
  title: "Promosyon Powerbank 10.000 mAh 22.5W Hızlı Şarj PB-112 | Logo Baskılı Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-pb-112.jpg",

  shortDesc:
    "Promosyon powerbank PB-112 modeli 10.000 mAh kapasitesi ve 22.5W hızlı şarj özelliği ile mobil cihazlar için güçlü bir taşınabilir şarj çözümü sunar. Kurumsal promosyon ürünleri arasında en çok tercih edilen teknolojik hediyelerden biridir.",

  longDesc: `
Promosyon powerbank PB-112 modeli 10.000 mAh kapasitesi ve 22.5W hızlı şarj desteği ile mobil cihazlar için güçlü ve pratik bir taşınabilir şarj çözümü sunar. Günlük kullanımda telefon, tablet ve diğer elektronik cihazların hızlı şekilde şarj edilmesini sağlar.

Promosyon powerbank ürünleri teknoloji promosyonları arasında en çok tercih edilen kurumsal reklam ürünlerinden biridir. Uzun süre kullanılan bir ürün olması sayesinde firmanızın marka görünürlüğünü artırır.

Bu model üzerine firmanıza ait logo, marka veya reklam baskısı uygulanabilir. Böylece ürün hem kullanışlı hem de güçlü bir tanıtım ürünü haline gelir.

Promosyon powerbank ürünleri özellikle fuarlar, kurumsal etkinlikler, müşteri hediyeleri ve promosyon kampanyalarında en çok tercih edilen ürünler arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Kapasite: 10.000 mAh  
Hızlı Şarj: 22.5W Fast Charge  
Taşınabilir Şarj Cihazı  
Logo Baskı Uygulanabilir  
Dayanıklı ve Şık Tasarım  

Ürün renk ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon powerbank siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p82",
  slug: "promosyon-powerbank-10000mah-wireless-pb-113",
  title: "Promosyon Powerbank 10.000 mAh Wireless PB-113 | Logo Baskılı Kablosuz Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-pb-113.jpg",

  shortDesc:
    "Promosyon powerbank PB-113 modeli 10.000 mAh kapasitesi, kablosuz şarj özelliği ve LCD ekran göstergesi ile kurumsal promosyon ürünleri arasında en çok tercih edilen teknolojik hediyelerden biridir.",

  longDesc: `
Promosyon powerbank PB-113 modeli 10.000 mAh kapasitesi ve kablosuz şarj (wireless) özelliği ile mobil cihazlar için güçlü bir taşınabilir şarj çözümü sunar. Günlük kullanımda telefon ve diğer elektronik cihazların hızlı ve pratik şekilde şarj edilmesini sağlar.

Üzerinde bulunan 3. nesil LCD ekran göstergesi sayesinde powerbank'in kalan batarya seviyesi kolayca takip edilebilir. Kablosuz şarj özelliği sayesinde uyumlu cihazlar kablo kullanmadan doğrudan şarj edilebilir.

Promosyon powerbank ürünleri teknoloji promosyonları arasında en çok tercih edilen kurumsal reklam ürünlerinden biridir. Uzun süre kullanılan bir ürün olması sayesinde firmanızın marka görünürlüğünü artırır.

Ürün üzerine firmanıza ait logo, marka veya reklam baskısı UV renkli baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı hem de etkili bir promosyon ürünü haline gelir.

TEKNİK ÖZELLİKLER

Kapasite: 10.000 mAh  
Gösterge: 3. Nesil LCD Ekran  
Giriş: Type-C DC 5V / 2A  
Çıkış: Wireless 5W / USB DC 5V / 2A  
Kasa Malzemesi: ABS  
Baskı Türü: UV Renkli Baskı  
Kutu: Var  

Promosyon powerbank ürünleri özellikle fuarlar, kurumsal etkinlikler, müşteri hediyeleri ve promosyon kampanyaları için oldukça ideal teknolojik promosyon ürünleri arasında yer almaktadır.

Ürün renk ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon powerbank siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p83",
  slug: "promosyon-powerbank-10000mah-wireless-led-fenerli-pb-115",
  title: "Promosyon Powerbank 10.000 mAh Wireless LED Fenerli PB-115 | Logo Baskılı Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-pb-115.jpg",

  shortDesc:
    "Promosyon powerbank PB-115 modeli 10.000 mAh kapasitesi, kablosuz şarj özelliği, LED ekran göstergesi ve dahili LED feneri ile kurumsal promosyon ürünleri arasında dikkat çeken teknolojik hediyelerden biridir.",

  longDesc: `
Promosyon powerbank PB-115 modeli 10.000 mAh kapasitesi ile mobil cihazlar için güçlü bir taşınabilir şarj çözümü sunar. Kablosuz şarj (wireless) özelliği sayesinde uyumlu cihazlar kablo kullanmadan kolayca şarj edilebilir.

Üzerinde bulunan LED ekran göstergesi sayesinde powerbank'in kalan batarya seviyesi kolayca takip edilebilir. Ayrıca ürün üzerinde bulunan LED fener özelliği sayesinde karanlık ortamlarda pratik bir kullanım sağlar.

Promosyon powerbank ürünleri teknoloji promosyonları arasında en çok tercih edilen kurumsal reklam ürünlerinden biridir. Uzun süre kullanılan bir ürün olması sayesinde firmanızın marka görünürlüğünü artırır.

Ürün üzerine firmanıza ait logo veya marka baskısı UV baskı yöntemi ile uygulanabilir. Böylece ürün hem kullanışlı hem de güçlü bir tanıtım ürünü haline gelir.

TEKNİK ÖZELLİKLER

Kapasite: 10.000 mAh  
Gösterge: LED Ekran  
Renk: Siyah  
Giriş 1: 5V / 2A  
Giriş 2: Type-C 5V / 2A  
Çıkış 1: 5V / 2A  
Çıkış 2: USB 5V / 2A  
Çıkış 3: Dahili 5V / 2A  
Çıkış 4: Wireless 5W / 1A  
Materyal: Plastik  
Baskı Türü: UV Baskı  
Ek Özellik: LED Fener  
Kutu: Lüks Siyah Kutu  

Promosyon powerbank ürünleri özellikle fuarlar, kurumsal etkinlikler, müşteri hediyeleri ve promosyon kampanyaları için oldukça ideal teknolojik promosyon ürünleri arasında yer almaktadır.

Ürün stok ve renk durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon powerbank siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p84",
  slug: "promosyon-powerbank-10000mah-wireless-ayakli-standli-pb-120",
  title: "Promosyon Powerbank 10.000 mAh Wireless Ayaklı Standlı PB-120 | Logo Baskılı Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-pb-120.jpg",

  shortDesc:
    "Promosyon powerbank PB-120 modeli 10.000 mAh kapasitesi, kablosuz şarj özelliği, ayaklı telefon standı ve LED logo gövdesi ile kurumsal promosyon ürünleri arasında öne çıkan teknolojik hediyelerden biridir.",

  longDesc: `
Promosyon powerbank PB-120 modeli 10.000 mAh kapasitesi ile mobil cihazlar için güçlü ve pratik bir taşınabilir şarj çözümü sunar. Wireless kablosuz şarj özelliği sayesinde uyumlu cihazlar kablo kullanmadan kolayca şarj edilebilir.

Vakumlu rubber gövde tasarımı sayesinde ürün hem şık hem de modern bir görünüm sunar. Üzerindeki LED logo gövdesi sayesinde firmanıza ait logo veya marka baskısı daha dikkat çekici hale gelir. Bu özellik, ürünü sadece kullanışlı bir teknoloji aksesuarı değil aynı zamanda etkili bir reklam ürünü haline getirir.

Promosyon powerbank PB-120 modeli ayaklı telefon standı özelliği ile de öne çıkar. Masa üzerinde telefon standı olarak kullanılabilmesi sayesinde hem ofis ortamında hem de günlük kullanımda ekstra konfor sağlar.

Ürün üzerinde 1 adet USB çıkışı, 1 adet Micro giriş ve 1 adet Type-C giriş bulunmaktadır. Ayrıca dahili iPhone, Micro ve Type-C kablo seçenekleri sayesinde farklı cihazlarla uyumlu pratik bir kullanım sunar.

TEKNİK ÖZELLİKLER

Kapasite: 10.000 mAh  
Şarj Özelliği: Wireless Kablosuz Şarj  
Gövde: Vakumlu Rubber Gövde  
Logo: LED Logo Gövde  
Stand: Ayaklı Telefon Standı  
Çıkış: 1 Adet USB  
Giriş 1: Micro  
Giriş 2: Type-C  
Dahili Kablolar: iPhone - Micro - Type-C  
Kutu: Taslama Kutu  

Promosyon powerbank ürünleri özellikle fuarlar, kurumsal etkinlikler, müşteri hediyeleri ve promosyon kampanyaları için oldukça ideal teknolojik promosyon ürünleri arasında yer almaktadır.

Ürün renk ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon powerbank siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p85",
  slug: "promosyon-powerbank-10000mah-wireless-lightup-logo-pb-130",
  title: "Promosyon Powerbank 10.000 mAh Wireless Light-Up Logo PB-130 | Logo Baskılı Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-pb-130.jpg",

  shortDesc:
    "Promosyon powerbank PB-130 modeli 10.000 mAh kapasitesi, kablosuz şarj özelliği ve Light-Up lazer kazıma logo teknolojisi ile kurumsal promosyon ürünleri arasında dikkat çeken teknolojik hediyelerden biridir.",

  longDesc: `
Promosyon powerbank PB-130 modeli 10.000 mAh kapasitesi ile mobil cihazlar için güçlü bir taşınabilir şarj çözümü sunar. Günlük kullanımda telefon, tablet ve diğer elektronik cihazların hızlı şekilde şarj edilmesini sağlar.

Wireless kablosuz şarj özelliği sayesinde uyumlu cihazlar kablo kullanmadan doğrudan şarj edilebilir. Bu özellik özellikle modern akıllı telefon kullanıcıları için pratik bir kullanım sunar.

Rubber yüzey kaplaması sayesinde ürün hem şık hem de dayanıklı bir tasarıma sahiptir. Üzerinde uygulanan lazer kazıma Light-Up logo teknolojisi sayesinde firmanızın logosu ışıklı şekilde görünür hale gelir ve dikkat çekici bir reklam ürünü oluşturur.

Promosyon powerbank ürünleri teknoloji promosyonları arasında en çok tercih edilen kurumsal reklam ürünlerinden biridir. Uzun süre kullanılan bir ürün olması sayesinde markanızın görünürlüğünü artırır.

TEKNİK ÖZELLİKLER

Kapasite: 10.000 mAh  
Gösterge: 5 Kademeli LED Gösterge  
Renk: Siyah  
Giriş: USB  
Çıkış 1: 2A USB-A  
Çıkış 2: 2A USB-A  
Çıkış 3: 5W Wireless  
Materyal: Rubber  
Baskı Türü: Lazer Kazıma Light-Up Logo  
Kutu: Siyah Hediye Kutusu  

Ürün dahilinde Micro USB şarj kablosu bulunmaktadır.

Promosyon powerbank ürünleri özellikle fuarlar, kurumsal etkinlikler, müşteri hediyeleri ve promosyon kampanyalarında en çok tercih edilen teknolojik promosyon ürünleri arasında yer almaktadır.

Ürün stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Logo baskılı promosyon powerbank siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p86",
  slug: "promosyon-powerbank-20000mah-led-fenerli-pb-140",
  title: "Promosyon Powerbank 20.000 mAh LED Fenerli PB-140 | Logo Baskılı Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-pb-140.jpg",

  shortDesc:
    "Promosyon powerbank PB-140 modeli 20.000 mAh yüksek kapasitesi, dahili kabloları ve LED fener özelliği ile kurumsal promosyon ürünleri arasında dikkat çeken güçlü bir taşınabilir şarj cihazıdır.",

  longDesc: `
Promosyon powerbank PB-140 modeli 20.000 mAh yüksek kapasitesi sayesinde mobil cihazlar için güçlü ve uzun süreli bir taşınabilir şarj çözümü sunar. Günlük kullanımda telefon, tablet ve diğer elektronik cihazların güvenli şekilde şarj edilmesini sağlar.

Ürün üzerinde bulunan kademeli LED gösterge sayesinde powerbank'in kalan batarya seviyesi kolayca takip edilebilir. Ayrıca LED fener özelliği sayesinde karanlık ortamlarda pratik kullanım sağlar.

PB-140 modeli dahili iOS, USB-C ve Micro USB kabloları sayesinde farklı cihazlarla uyumlu kullanım sunar. Böylece ek kablo taşıma ihtiyacını ortadan kaldırarak kullanıcıya büyük kolaylık sağlar.

ABS ve cam görünümlü modern tasarımı sayesinde ürün hem şık hem de dayanıklı bir yapıya sahiptir. Üzerine firmanıza ait logo veya marka baskısı UV renkli baskı yöntemi ile uygulanabilir.

Promosyon powerbank ürünleri teknoloji promosyonları arasında en çok tercih edilen kurumsal reklam ürünlerinden biridir. Fuarlar, kurumsal etkinlikler ve müşteri hediyeleri için oldukça etkili bir promosyon ürünüdür.

TEKNİK ÖZELLİKLER

Kapasite: 20.000 mAh  
Gösterge: Kademeli LED Işık  
Renk: Siyah  
Giriş: Micro USB / Dahili USB-A  
Çıkış 1: 2A USB-A  
Çıkış 2: Dahili iOS Kablo  
Çıkış 3: Dahili USB-C Kablo  
Çıkış 4: Dahili Micro USB Kablo  
Materyal: ABS ve Cam Görünüm  
Baskı Türü: UV Renkli Baskı  
Ek Özellik: LED Fener  
Kutu: Siyah Hediye Kutusu  

Ürün dahilinde Micro USB şarj kablosu bulunmaktadır.

Promosyon powerbank siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.

Ürün stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.
`
},
{
  id: "p87",
  slug: "promosyon-powerbank-20000mah-pb-150",
  title: "Promosyon Powerbank 20.000 mAh PB-150 | Logo Baskılı Kurumsal Powerbank",
  category: "Powerbank",
  image: "/products/promosyon-powerbank-pb-150.jpg",

  shortDesc:
    "Promosyon powerbank PB-150 modeli 20.000 mAh yüksek kapasitesi, LED gösterge sistemi ve çift giriş desteği ile kurumsal promosyon ürünleri arasında en çok tercih edilen taşınabilir şarj cihazlarından biridir.",

  longDesc: `
Promosyon powerbank PB-150 modeli 20.000 mAh yüksek kapasitesi sayesinde mobil cihazlar için güçlü ve uzun süreli bir taşınabilir şarj çözümü sunar. Günlük kullanımda telefon, tablet ve diğer elektronik cihazların güvenli şekilde şarj edilmesini sağlar.

Kademeli LED gösterge sistemi sayesinde powerbank'in kalan batarya seviyesi kolayca takip edilebilir. Bu özellik kullanıcıya pratik bir kullanım deneyimi sunar.

Micro ve Type-C giriş desteği sayesinde farklı kablo seçenekleri ile kolay şarj edilebilir. 2A USB-A çıkışı sayesinde cihazlar hızlı ve güvenli şekilde şarj edilebilir.

ABS gövde yapısı sayesinde ürün dayanıklı ve uzun ömürlü bir tasarıma sahiptir. Üzerine firmanıza ait logo veya marka baskısı lazer baskı veya UV renkli baskı yöntemleri ile uygulanabilir.

Promosyon powerbank ürünleri teknoloji promosyonları arasında en çok tercih edilen kurumsal reklam ürünlerinden biridir. Fuarlar, kurumsal etkinlikler, müşteri hediyeleri ve promosyon kampanyalarında oldukça etkili bir promosyon ürünüdür.

TEKNİK ÖZELLİKLER

Kapasite: 20.000 mAh  
Gösterge: Kademeli LED Işık  
Renk: Siyah, Beyaz  
Giriş: Micro ve Type-C  
Çıkış: 2A USB-A  
Materyal: ABS  
Baskı Türü: Lazer Baskı / UV Renkli Baskı  
Kutu: Siyah Hediye Kutusu  

Ürün dahilinde Micro USB şarj kablosu bulunmaktadır.

Promosyon powerbank siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.

Ürün renk ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.
`
},
{
  id: "p88",
  slug: "promosyon-ajanda-16x24-termo-deri-aj-160",
  title: "Promosyon Ajanda 16 x 24 cm AJ-160 | Logo Baskılı Termo Deri Kurumsal Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-160.jpg",

  shortDesc:
    "Promosyon ajanda AJ-160 modeli 16 x 24 cm ölçüsü, termo deri kapak yapısı ve 336 sayfalık kaliteli iç tasarımı ile kurumsal promosyon ajanda modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-160 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş takibi için oldukça kullanışlıdır.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-160 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre veya dijital baskı yöntemleri ile uygulanabilir. Böylece ürün hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER

Ebat: 16 x 24 cm  
Kapak: Termo Deri  
Kağıt: 70 gr Ivory Krem  
Sayfa Sayısı: 336  
Baskı Türü: Gofre, Dijital  
Koli Adedi: 40  

RENK SEÇENEKLERİ

Siyah  
Taba  
Lacivert  
Turuncu  
Turkuaz  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleri arasında yer almaktadır. Logo baskılı promosyon ajanda siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p89",
  slug: "promosyon-ajanda-16x24-termo-deri-aj-170",
  title: "Promosyon Ajanda 16 x 24 cm AJ-170 | Logo Baskılı Termo Deri Kurumsal Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-170.jpg",

  shortDesc:
    "Promosyon ajanda AJ-170 modeli 16 x 24 cm ölçüsü, termo deri kapak yapısı ve 320 sayfalık krem kağıt iç tasarımı ile kurumsal promosyon ajanda modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-170 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş takibi için oldukça kullanışlıdır.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-170 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre veya UV baskı yöntemleri ile uygulanabilir. Böylece ürün hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER

Ebat: 16 x 24 cm  
Kapak: Termo Deri  
Kağıt: Krem Kağıt  
Sayfa Sayısı: 320  
Baskı Türü: Gofre, UV Baskı  
Koli Adedi: 40  

RENK SEÇENEKLERİ

Turkuaz  
Turuncu  
Taba  
Gri  
Kırmızı  
Lacivert  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleri arasında yer almaktadır. Logo baskılı promosyon ajanda siparişi vererek markanızı müşterilerinizin masasında yıl boyunca görünür hale getirebilirsiniz.
`
},
{
  id: "p90",
  slug: "promosyon-ajanda-17x24-termo-pu-aj-180",
  title: "Promosyon Ajanda 17 x 24 cm AJ-180 | Logo Baskılı Termo PU Kurumsal Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-180.jpg",

  shortDesc:
    "Promosyon ajanda AJ-180 modeli 17 x 24 cm ölçüsü, termo PU sert kapak yapısı ve 336 sayfalık ivory krem kağıt iç tasarımı ile kurumsal promosyon ajanda modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-180 modeli şık termo PU sert kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş takibi için oldukça kullanışlıdır.

Ajanda üzerinde bulunan telefon bölmesi sayesinde kullanıcılar telefonlarını veya küçük notlarını pratik şekilde saklayabilir. Bu özellik ajandayı hem fonksiyonel hem de kullanışlı bir promosyon ürünü haline getirir.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-180 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre veya dijital baskı yöntemleri ile uygulanabilir. Böylece ürün hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER

Ebat: 17 x 24 cm  
Kapak: Termo PU Sert Kapak  
Kağıt: 70 gr Ivory Krem  
Sayfa Sayısı: 336  
Baskı Türü: Gofre, Dijital  
Ek Özellik: Telefon Bölmesi  
Koli Adedi: 40  

RENK SEÇENEKLERİ

Gri  
Kırmızı  
Taba  
Füme  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleri arasında yer almaktadır.
`
},
{
  id: "p91",
  slug: "promosyon-ajanda-17x24-termo-deri-aj-190",
  title: "Promosyon Ajanda 17 x 24 cm AJ-190 | Logo Baskılı Termo Deri Kurumsal Ajanda",
  category: "Ajanda",
  image: "/products/promosyon-ajanda-aj-190.jpg",

  shortDesc:
    "Promosyon ajanda AJ-190 modeli 17 x 24 cm ölçüsü, termo deri kapak yapısı ve 336 sayfalık ivory krem kağıt iç tasarımı ile kurumsal promosyon ajanda modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon ajanda AJ-190 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen ajanda modellerinden biridir. Günlük planlama, toplantı notları ve iş takibi için oldukça kullanışlıdır.

Promosyon ajandalar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan ajandalar sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında yıl boyunca görünür olur.

Promosyon ajanda AJ-190 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre veya dijital baskı yöntemleri ile uygulanabilir. Böylece ürün hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER

Ebat: 17 x 24 cm  
Kapak: Termo Deri  
Kağıt: 70 gr Ivory Krem  
Sayfa Sayısı: 336  
Baskı Türü: Gofre, Dijital  
Koli Adedi: 35  

RENK SEÇENEKLERİ

Lacivert  
Kırmızı  
Taba  
Siyah  
Gri  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon ajandalar özellikle yılbaşı promosyonları, kurumsal hediyeler, fuarlar ve müşteri ziyaretleri için oldukça ideal promosyon ürünleri arasında yer almaktadır.
`
},
{
  id: "p92",
  slug: "promosyon-anahtarlik-an-117",
  title: "Promosyon Anahtarlık AN-117 | Logo Baskılı Kurumsal Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-117.jpg",

  shortDesc:
    "Promosyon anahtarlık AN-117 modeli dayanıklı yapısı ve logo baskı uygulanabilir yüzeyi ile kurumsal promosyon ürünleri arasında en çok tercih edilen reklam ürünlerinden biridir.",

  longDesc: `
Promosyon anahtarlık AN-117 modeli pratik kullanımı ve şık tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen modellerden biridir. Günlük hayatta sürekli kullanılan anahtarlıklar markanızın uzun süre görünür olmasını sağlar.

Promosyon anahtarlık ürünleri firmalar için düşük maliyetli ancak etkili reklam araçlarıdır. Özellikle fuarlar, kampanyalar, müşteri ziyaretleri ve kurumsal etkinliklerde dağıtılabilecek ideal promosyon ürünleri arasında yer alır.

Promosyon anahtarlık AN-117 modeli üzerine firmanıza ait logo, marka adı veya reklam tasarımı uygulanabilir. Böylece ürün hem kullanışlı hem de güçlü bir reklam ürünü haline gelir.

Promosyon anahtarlıklar özellikle otomotiv sektörü, mağazalar, emlak ofisleri, bankalar ve birçok kurumsal firma tarafından tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Anahtarlık  
Model: AN-117  
Logo Baskı: Uygulanabilir  
Kullanım: Kurumsal Promosyon Ürünü  

Promosyon anahtarlık siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.

Ürün stok ve model durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.
`
},
{
  id: "p93",
  slug: "promosyon-anahtarlik-an-120",
  title: "Promosyon Anahtarlık AN-120 | Lazer Baskılı Kurumsal Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-120.jpg",

  shortDesc:
    "Promosyon anahtarlık AN-120 modeli lazer baskı uygulanabilir yüzeyi ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında en çok tercih edilen reklam ürünlerinden biridir.",

  longDesc: `
Promosyon anahtarlık AN-120 modeli şık tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen modellerden biridir. Günlük hayatta sürekli kullanılan anahtarlıklar markanızın uzun süre görünür olmasını sağlar.

Promosyon anahtarlık ürünleri firmalar için düşük maliyetli ancak etkili reklam araçlarıdır. Özellikle fuarlar, kampanyalar, müşteri ziyaretleri ve kurumsal etkinliklerde dağıtılabilecek ideal promosyon ürünleri arasında yer alır.

Promosyon anahtarlık AN-120 modeli üzerine firmanıza ait logo, marka adı veya reklam tasarımı lazer baskı yöntemi ile uygulanabilir. Bu sayede logo uzun süre kalıcı şekilde ürün üzerinde yer alır.

TEKNİK ÖZELLİKLER

Model: AN-120  
Baskı Türü: Lazer Baskı  

RENK SEÇENEKLERİ

Siyah  
Kırmızı  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon anahtarlık siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.

Promosyon anahtarlıklar özellikle otomotiv sektörü, emlak firmaları, mağazalar ve kurumsal işletmeler tarafından sıklıkla tercih edilen promosyon ürünleri arasında yer almaktadır.
`
},
{
  id: "p94",
  slug: "promosyon-tarihsiz-defter-14-5x21-td-116",
  title: "Promosyon Tarihsiz Defter 14,5 x 21 cm TD-116 | Logo Baskılı Kurumsal Defter",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-116.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-116 modeli 14,5 x 21 cm ölçüsü, termo deri kapak yapısı ve 224 sayfalık ivory krem kağıt iç tasarımı ile kurumsal promosyon defter modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon tarihsiz defter TD-116 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen defter modellerinden biridir. Günlük notlar, toplantı notları ve iş planlamaları için oldukça kullanışlıdır.

Promosyon defterler firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan defterler sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında uzun süre görünür olur.

Promosyon tarihsiz defter TD-116 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre veya UV baskı yöntemleri ile uygulanabilir. Böylece ürün hem prestijli hem de etkili bir reklam ürününe dönüşür.

Defter üzerinde bulunan kalem tutucu özelliği kullanıcıya ekstra pratiklik sağlar. Ayrıca renkli kenar tasarımı sayesinde ürün estetik ve modern bir görünüm sunar.

TEKNİK ÖZELLİKLER

Ebat: 14.5 x 21 cm  
Kapak: Termo Deri  
Sayfa Sayısı: 224  
Sayfa Stili: Çizgili  
Kağıt: 80 gr Ivory Krem  
Baskı Türü: Gofre, UV  
Kalem Tutucu: Var  
Kenarlar: Renkli  
Koli Adedi: 40  

RENK SEÇENEKLERİ

Taba  
Lacivert  
Yeşil  
Füme  
Siyah  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon tarihsiz defterler özellikle fuarlar, kurumsal etkinlikler, müşteri ziyaretleri ve yılbaşı promosyonları için oldukça ideal promosyon ürünleri arasında yer almaktadır.
`
},
{
  id: "p95",
  slug: "promosyon-tarihsiz-defter-15x21-td-120",
  title: "Promosyon Tarihsiz Defter 15 x 21 cm TD-120 | Logo Baskılı Termo Deri Defter",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-120.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-120 modeli 15 x 21 cm ölçüsü, termo deri kapak tasarımı ve 224 sayfalık ivory krem kağıt iç yapısı ile kurumsal promosyon defter modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon tarihsiz defter TD-120 modeli şık termo deri kapak tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen defter modellerinden biridir. Günlük notlar, toplantı notları ve iş planlamaları için oldukça kullanışlıdır.

Promosyon defterler firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan defterler sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında uzun süre görünür olur.

Promosyon tarihsiz defter TD-120 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım gofre veya dijital baskı yöntemleri ile uygulanabilir. Böylece ürün hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER

Ebat: 15 x 21 cm  
Kapak: Termo Deri  
Kağıt: 70 gr Ivory Krem  
Sayfa Sayısı: 224  
Sayfa Stili: Çizgili  
Baskı Türü: Gofre, Dijital  
Koli Adedi: 40  
Not: Kalem aksesuardır  

RENK SEÇENEKLERİ

Füme  
Kırmızı  
Lacivert  
Turkuaz  
Gri  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon tarihsiz defterler özellikle fuarlar, kurumsal etkinlikler, müşteri ziyaretleri ve yılbaşı promosyonları için oldukça ideal promosyon ürünleri arasında yer almaktadır.
`
},
{
  id: "p96",
  slug: "promosyon-tarihsiz-defter-15x21-td-125",
  title: "Promosyon Tarihsiz Defter 15 x 21 cm TD-125 | Logo Baskılı Kurumsal Defter",
  category: "Tarihsiz Defter",
  image: "/products/promosyon-tarihsiz-defter-td-125.jpg",

  shortDesc:
    "Promosyon tarihsiz defter TD-125 modeli 15 x 21 cm ölçüsü, 80 gr ivory kağıt yapısı ve 224 sayfalık çizgili iç tasarımı ile kurumsal promosyon defter modelleri arasında tercih edilen ürünlerden biridir.",

  longDesc: `
Promosyon tarihsiz defter TD-125 modeli modern tasarımı ve kaliteli iç sayfa yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen defter modellerinden biridir. Günlük notlar, toplantı notları ve iş planlamaları için oldukça kullanışlıdır.

Promosyon defterler firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan defterler sayesinde markanız müşterilerinizin ve iş ortaklarınızın masasında uzun süre görünür olur.

Promosyon tarihsiz defter TD-125 modeli üzerine firmanıza ait logo, marka adı veya kurumsal tasarım sıcak baskı, serigraf baskı veya UV baskı yöntemleri ile uygulanabilir. Böylece ürün hem prestijli hem de etkili bir reklam ürününe dönüşür.

TEKNİK ÖZELLİKLER

Ebat: 15 x 21 cm  
Kağıt: 80 gr Ivory  
Sayfa Sayısı: 224 (112 Yaprak)  
Sayfa Stili: Çizgili  
Baskı Alanı: 80 x 50 mm  
Baskı Türleri: Sıcak Baskı, Serigraf Baskı, UV Baskı  
Koli Adedi: 40  

RENK SEÇENEKLERİ

Füme  
Gri  
Kırmızı  
Lacivert  
Siyah  
Taba  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebilmesi nedeniyle sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon tarihsiz defterler özellikle fuarlar, kurumsal etkinlikler, müşteri ziyaretleri ve yılbaşı promosyonları için oldukça ideal promosyon ürünleri arasında yer almaktadır.
`
},
{
  id: "p97",
  slug: "promosyon-metal-kalem-mk-160",
  title: "Promosyon Metal Kalem MK-160 | Logo Baskılı Kurumsal Metal Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-160.jpg",

  shortDesc:
    "Promosyon metal kalem MK-160 modeli şık metal gövdesi ve logo baskı uygulanabilir yüzeyi ile kurumsal promosyon ürünleri arasında en çok tercih edilen kalem modellerinden biridir.",

  longDesc: `
Promosyon metal kalem MK-160 modeli modern tasarımı ve dayanıklı metal gövdesi ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Günlük kullanımda hem ofis ortamında hem de kurumsal etkinliklerde rahatlıkla kullanılabilir.

Promosyon kalemler firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Sürekli kullanılan bir ürün olması sayesinde markanız müşterilerinizin ve iş ortaklarınızın elinde uzun süre görünür olur.

Promosyon metal kalem MK-160 modeli üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede kalem hem kullanışlı hem de etkili bir reklam ürünü haline gelir.

Metal kalemler özellikle fuarlar, müşteri ziyaretleri, kurumsal toplantılar ve promosyon kampanyalarında en çok tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Metal Kalem  
Mürekkep Rengi: Siyah  
Gövde: Metal  
Logo Baskı: Uygulanabilir  

RENK SEÇENEKLERİ

Koyu Kırmızı  
Lacivert  
Turkuaz  
Mat Turkuaz  
Beyaz  
Turuncu  
Siyah  
Açık Kırmızı  
Yeşil  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon metal kalem siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p98",
  slug: "promosyon-metal-kalem-mk-170",
  title: "Promosyon Metal Kalem MK-170 | Lazer Baskılı İmza Kalemi",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-170.jpg",

  shortDesc:
    "Promosyon metal kalem MK-170 modeli şık metal gövdesi, lazer baskı uygulanabilir yüzeyi ve imza kalemi tasarımı ile kurumsal promosyon kalem modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon metal kalem MK-170 modeli zarif tasarımı ve dayanıklı metal gövdesi ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Özellikle imza kalemi olarak kullanıma uygun şık yapısı sayesinde kurumsal ortamlarda prestijli bir promosyon ürünü olarak tercih edilir.

Promosyon kalemler firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sürekli kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın elinde uzun süre görünür olur.

Promosyon metal kalem MK-170 modeli üzerine firmanıza ait logo veya marka baskısı lazer baskı yöntemi ile uygulanabilir. Bu sayede logo kalem üzerinde kalıcı ve şık bir görünüm sunar.

TEKNİK ÖZELLİKLER

Ürün Tipi: Metal Kalem  
Kalem Türü: İmza Kalemi  
Refil: Mavi Refil  
Ölçü: 140 x Ø10 mm  
Baskı Türü: Lazer Baskı  
Baskı Alanı: 55 x 5,5 mm  
Koli / Kutu Adedi: 500 / 50  

RENK SEÇENEKLERİ

Beyaz  
Füme  
Kırmızı  
Mavi  
Siyah  
Turkuaz  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon metal kalemler özellikle fuarlar, müşteri ziyaretleri, kurumsal etkinlikler ve promosyon kampanyaları için oldukça ideal reklam ürünleri arasında yer almaktadır.
`
},
{
  id: "p99",
  slug: "promosyon-metal-kalem-mk-180",
  title: "Promosyon Metal Kalem MK-180 | Logo Baskılı Rubber Gövdeli Metal Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-180.jpg",

  shortDesc:
    "Promosyon metal kalem MK-180 modeli rubber kaplama gövdesi ve şık metal tasarımı ile kurumsal promosyon kalem modelleri arasında sık tercih edilen ürünlerden biridir.",

  longDesc: `
Promosyon metal kalem MK-180 modeli rubber kaplama gövdesi ve modern tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir. Metal gövdesi sayesinde dayanıklı ve uzun ömürlü bir kullanım sunar.

Promosyon kalemler firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Günlük hayatta sürekli kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın elinde uzun süre görünür olur.

Promosyon metal kalem MK-180 modeli üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede kalem hem kullanışlı hem de etkili bir reklam ürünü haline gelir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Metal Tükenmez Kalem  
Gövde: Rubber Kaplama Metal Gövde  
Mürekkep Rengi: Mavi  

RENK SEÇENEKLERİ

Siyah  
Mavi  
Lacivert  
Füme  
Kırmızı  
Turuncu  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon metal kalemler özellikle fuarlar, müşteri ziyaretleri, kurumsal toplantılar ve promosyon kampanyalarında en çok tercih edilen reklam ürünleri arasında yer almaktadır.
`
},
{
  id: "p100",
  slug: "promosyon-metal-kalem-mk-190",
  title: "Promosyon Metal Kalem MK-190 | Logo Baskılı Premium Metal Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-190.jpg",

  shortDesc:
    "Promosyon metal kalem MK-190 modeli şık metal tasarımı ve logo baskı uygulanabilir yüzeyi ile kurumsal promosyon kalem modelleri arasında öne çıkan premium kalemlerden biridir.",

  longDesc: `
Promosyon metal kalem MK-190 modeli modern ve şık tasarımı ile kurumsal promosyon ürünleri arasında dikkat çeken kalem modellerinden biridir. Metal gövde yapısı sayesinde dayanıklı ve uzun ömürlü bir kullanım sunar.

Promosyon kalemler firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Günlük hayatta sürekli kullanılan kalemler sayesinde markanız müşterilerinizin ve iş ortaklarınızın elinde uzun süre görünür olur.

Promosyon metal kalem MK-190 modeli üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede kalem hem kullanışlı hem de güçlü bir reklam ürünü haline gelir.

Metal kalemler özellikle fuarlar, müşteri ziyaretleri, kurumsal toplantılar ve promosyon kampanyalarında en çok tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Metal Tükenmez Kalem  
Gövde: Metal  

RENK SEÇENEKLERİ

Gümüş  
Bakır  
Altın  

Renk seçeneklerinin ve ürün stok durumunun dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon metal kalem siparişleri toplu üretim olarak hazırlanmakta olup kurumsal firmalara özel fiyat avantajları sunulmaktadır.
`
},
{
  id: "p101",
  slug: "promosyon-cam-matara-500ml-cm-390",
  title: "Promosyon Cam Matara 500 ml CM-390 | Logo Baskılı Cam Termos Matara",
  category: "Termos",
  image: "/products/promosyon-cam-matara-500ml-cm-390.jpg",

  shortDesc:
    "Promosyon cam matara 500 ml CM-390 modeli şık tasarımı, taşınabilir yapısı ve logo baskı uygulanabilir yüzeyi ile kurumsal promosyon termos ve matara modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon cam matara 500 ml CM-390 modeli modern tasarımı ve kullanışlı yapısı ile kurumsal promosyon ürünleri arasında dikkat çeken matara ve termos modellerinden biridir. Günlük kullanım için ideal olan bu ürün özellikle spor yapanlar, ofis çalışanları ve seyahat eden kişiler için oldukça pratik bir kullanım sunar.

Promosyon mataralar markaların reklam gücünü artıran etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sürekli kullanılan bu ürünler sayesinde firmanızın logosu kullanıcıların günlük hayatında sürekli görünür olur ve marka bilinirliğini artırır.

Promosyon cam matara CM-390 modeli üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede ürün hem kullanışlı hem de güçlü bir tanıtım aracı haline gelir. Kurumsal etkinlikler, fuarlar, müşteri hediyeleri ve promosyon kampanyalarında sıkça tercih edilen promosyon ürünleri arasında yer almaktadır.

Promosyon cam mataralar özellikle çevre dostu kullanım sağlayan ve tekrar kullanılabilir yapısı sayesinde son yıllarda en çok tercih edilen kurumsal promosyon ürünlerinden biri haline gelmiştir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Cam Matara  
Kategori: Promosyon Termos / Matara  
Kapasite: 500 ml  
Ürün Ölçüsü: 6,5 x 22,5 cm  

KULLANIM ALANLARI

Fuar ve etkinlik promosyonları  
Kurumsal firma hediyeleri  
Çalışan motivasyon ürünleri  
Spor ve günlük kullanım  

RENK SEÇENEKLERİ

Ürün renk seçenekleri ve stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon cam matara siparişleri genellikle toplu üretim şeklinde hazırlanmakta olup minimum sipariş adedi ve baskı detayları teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p102",
  slug: "promosyon-cam-matara-750ml-cm-400",
  title: "Promosyon Cam Matara 750 ml CM-400 | Logo Baskılı Cam Termos Matara",
  category: "Termos",
  image: "/products/promosyon-cam-matara-750ml-cm-400.jpg",

  shortDesc:
    "Promosyon cam matara 750 ml CM-400 modeli geniş kapasitesi, şık tasarımı ve logo baskı uygulanabilir yüzeyi ile kurumsal promosyon termos ve matara ürünleri arasında öne çıkan modellerden biridir.",

  longDesc: `
Promosyon cam matara 750 ml CM-400 modeli modern tasarımı ve geniş hacmi ile kurumsal promosyon ürünleri arasında dikkat çeken matara ve termos modellerinden biridir. Günlük kullanım için oldukça uygun olan bu ürün spor, ofis ve seyahat gibi farklı alanlarda rahatlıkla kullanılabilir.

Promosyon mataralar firmaların marka bilinirliğini artırmak için tercih ettiği etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sürekli kullanılan bu ürünler sayesinde firmanızın logosu uzun süre kullanıcıların gözünün önünde olur ve marka görünürlüğü artar.

Promosyon cam matara CM-400 modeli üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede ürün yalnızca kullanışlı bir içecek taşıma ürünü değil aynı zamanda güçlü bir reklam aracı haline gelir.

Promosyon cam mataralar çevre dostu ve tekrar kullanılabilir yapıları sayesinde son yıllarda en çok tercih edilen kurumsal promosyon ürünleri arasında yer almaktadır. Özellikle fuarlar, etkinlikler, müşteri hediyeleri ve çalışan motivasyon paketlerinde sıkça tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Cam Matara  
Kategori: Promosyon Termos / Matara  
Kapasite: 750 ml  
Ürün Ölçüsü: 7 x 25 cm  

KULLANIM ALANLARI

Fuar ve etkinlik promosyonları  
Kurumsal firma hediyeleri  
Çalışan motivasyon ürünleri  
Spor ve günlük kullanım  

RENK SEÇENEKLERİ

Ürün renk seçenekleri ve stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon cam matara siparişleri toplu üretim şeklinde hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p103",
  slug: "promosyon-termos-500ml-tk-100",
  title: "Promosyon Termos 500 ml TK-100 | Lazer Baskılı Logo Termos",
  category: "Termos",
  image: "/products/promosyon-termos-500ml-tk-100.jpg",

  shortDesc:
    "Promosyon termos 500 ml TK-100 modeli şık metal tasarımı, lazer baskı uygulanabilir yüzeyi ve günlük kullanıma uygun yapısı ile en çok tercih edilen promosyon termos modelleri arasında yer alır.",

  longDesc: `
Promosyon termos 500 ml TK-100 modeli modern tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında en çok tercih edilen termos modellerinden biridir. Günlük kullanım için oldukça pratik olan bu ürün ofis, seyahat, spor ve açık hava etkinliklerinde rahatlıkla kullanılabilir.

Promosyon termoslar markaların görünürlüğünü artıran etkili reklam ürünleri arasında yer almaktadır. Gün içerisinde sürekli kullanılan termoslar sayesinde firmanızın logosu kullanıcıların günlük hayatında sıkça görünür ve marka bilinirliği artar.

Promosyon termos TK-100 modeli üzerine firmanıza ait logo veya marka baskısı lazer baskı yöntemi ile uygulanabilir. Lazer baskı yöntemi sayesinde baskı kalıcı ve uzun ömürlü olur. Bu özellik termosu hem prestijli hem de güçlü bir kurumsal promosyon ürünü haline getirir.

Promosyon termos ürünleri özellikle fuarlar, seminerler, bayi toplantıları, müşteri hediyeleri ve çalışan motivasyon paketlerinde sıkça tercih edilmektedir. Kullanışlı ve kaliteli bir promosyon ürünü olması sayesinde markanızın profesyonel bir şekilde temsil edilmesine katkı sağlar.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Termos  
Kapasite: 500 ml  
Ürün Ölçüsü: 7 x 19 cm  
Baskı Türü: Lazer Baskı  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Müşteri ve çalışan hediyeleri  
Günlük kullanım ve seyahat  

RENK SEÇENEKLERİ

Beyaz  
Gümüş  
Kırmızı  
Lacivert  
Siyah  
Altın  

Ürün renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon termos siparişleri genellikle toplu üretim şeklinde hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p104",
  slug: "promosyon-termos-500ml-tk-110",
  title: "Promosyon Termos 500 ml TK-110 | UV ve Lazer Baskılı Logo Termos",
  category: "Termos",
  image: "/products/promosyon-termos-500ml-tk-110.jpg",

  shortDesc:
    "Promosyon termos 500 ml TK-110 modeli modern tasarımı, UV ve lazer baskı uygulanabilir yüzeyi ve dayanıklı yapısı ile kurumsal promosyon termos modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon termos 500 ml TK-110 modeli şık tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında sıkça tercih edilen termos modellerinden biridir. Günlük kullanım için ideal olan bu ürün ofis, seyahat, spor ve açık hava etkinliklerinde rahatlıkla kullanılabilir.

Promosyon termos ürünleri firmaların marka bilinirliğini artırmak için tercih ettiği etkili reklam araçları arasında yer almaktadır. Gün içerisinde sık kullanılan bir ürün olması sayesinde firmanızın logosu kullanıcıların günlük hayatında sürekli görünür hale gelir.

Promosyon termos TK-110 modeli üzerine firmanıza ait logo veya marka baskısı UV baskı veya lazer baskı yöntemi ile uygulanabilir. Bu sayede ürün hem estetik hem de uzun ömürlü bir kurumsal promosyon ürünü haline gelir.

Promosyon termoslar özellikle fuarlar, seminerler, müşteri ziyaretleri, bayi toplantıları ve kurumsal etkinliklerde dağıtılabilecek en kullanışlı promosyon ürünleri arasında yer almaktadır. Kullanışlı yapısı sayesinde markanızın profesyonel şekilde temsil edilmesine katkı sağlar.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Termos  
Kapasite: 500 ml  
Ürün Ölçüsü: 8,5 x 23,5 cm  
Baskı Türü: UV Baskı / Lazer Baskı  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Müşteri ve çalışan hediyeleri  
Günlük kullanım ve seyahat  

RENK SEÇENEKLERİ

Gümüş  
Kırmızı  
Lacivert  
Siyah  
Beyaz  

Ürün renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon termos siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p105",
  slug: "promosyon-termos-900ml-tk-120",
  title: "Promosyon Termos 900 ml TK-120 | Lazer Baskılı Logo Termos",
  category: "Termos",
  image: "/products/promosyon-termos-900ml-tk-120.jpg",

  shortDesc:
    "Promosyon termos 900 ml TK-120 modeli geniş kapasitesi, lazer baskıya uygun yüzeyi ve günlük kullanıma uygun şık tasarımı ile kurumsal promosyon termos modelleri arasında öne çıkan ürünlerden biridir.",

  longDesc: `
Promosyon termos 900 ml TK-120 modeli geniş hacmi ve kullanışlı yapısı ile kurumsal promosyon ürünleri arasında dikkat çeken termos modellerinden biridir. Günlük kullanım, ofis, seyahat, spor ve açık hava aktiviteleri için uygun olan bu ürün yüksek kapasitesi sayesinde uzun süreli kullanım avantajı sunar.

Promosyon termos ürünleri, firmaların marka görünürlüğünü artırmak için tercih ettiği en etkili promosyon seçenekleri arasında yer almaktadır. Gün içinde sık kullanılan bir ürün olması sayesinde firmanızın logosu kullanıcıların günlük hayatında sürekli görünür hale gelir ve marka bilinirliğine katkı sağlar.

Promosyon termos TK-120 modeli üzerine firmanıza ait logo veya marka baskısı lazer baskı yöntemi ile uygulanabilir. Lazer baskı sayesinde baskı daha kalıcı ve profesyonel bir görünüm sunar. Bu özellik ürünü hem prestijli hem de uzun ömürlü bir kurumsal promosyon ürünü haline getirir.

Promosyon termoslar özellikle fuarlar, bayi toplantıları, müşteri hediyeleri, çalışan motivasyon paketleri ve kurumsal etkinliklerde sıkça tercih edilmektedir. Yüksek hacimli termos modelleri günlük kullanım değeri yüksek olduğu için marka tanıtımında oldukça etkili sonuç verir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Termos  
Kapasite: 900 ml  
Ürün Ölçüsü: 25 x Ø 9 cm  
Baskı Türü: Lazer Baskı  
Baskı Alanı: 23 x 80 mm  
Kolideki Adet: 25  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Müşteri ve çalışan hediyeleri  
Günlük kullanım, seyahat ve spor  

RENK SEÇENEKLERİ

Kırmızı  
Mavi  
Pembe  
Siyah  

Ürün renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon termos siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı, teslim süresi ve baskı detayları teklif aşamasında netleşmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p106",
  slug: "promosyon-termos-900ml-tk-125",
  title: "Promosyon Termos 900 ml TK-125 | Lazer Baskılı Logo Termos",
  category: "Termos",
  image: "/products/promosyon-termos-900ml-tk-125.jpg",

  shortDesc:
    "Promosyon termos 900 ml TK-125 modeli geniş kapasitesi, lazer baskı uygulanabilir yüzeyi ve şık tasarımı ile kurumsal promosyon termos modelleri arasında öne çıkan kullanışlı ürünlerden biridir.",

  longDesc: `
Promosyon termos 900 ml TK-125 modeli geniş kapasitesi ve modern tasarımı ile kurumsal promosyon ürünleri arasında en çok tercih edilen termos modellerinden biridir. Günlük kullanım, ofis, seyahat ve açık hava aktiviteleri için oldukça kullanışlı bir yapıya sahiptir.

Promosyon termoslar markaların reklam gücünü artıran etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sık kullanılan bu ürünler sayesinde firmanızın logosu kullanıcıların günlük hayatında sürekli görünür olur ve marka bilinirliği artar.

Promosyon termos TK-125 modeli üzerine firmanıza ait logo veya marka baskısı lazer baskı yöntemi ile uygulanabilir. Lazer baskı yöntemi sayesinde baskı uzun ömürlü ve kalıcı bir görünüm sağlar. Bu özellik termosu hem prestijli hem de güçlü bir kurumsal promosyon ürünü haline getirir.

Promosyon termos ürünleri özellikle fuarlar, seminerler, bayi toplantıları, müşteri hediyeleri ve çalışan motivasyon paketlerinde sıkça tercih edilmektedir. Yüksek kapasiteli termos modelleri günlük kullanım değeri yüksek olduğu için marka tanıtımı açısından oldukça etkili sonuçlar sağlar.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Termos  
Kapasite: 900 ml  
Ürün Ölçüsü: 23 x Ø 9 cm  
Baskı Türü: Lazer Baskı  
Baskı Alanı: 23 x 80 mm  
Kolideki Adet: 25  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Müşteri ve çalışan hediyeleri  
Günlük kullanım ve seyahat  

RENK SEÇENEKLERİ

Renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon termos siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p107",
  slug: "promosyon-termos-400ml-tk-130",
  title: "Promosyon Termos 400 ml TK-130 | Lazer Baskılı Logo Termos",
  category: "Termos",
  image: "/products/promosyon-termos-400ml-tk-130.jpg",

  shortDesc:
    "Promosyon termos 400 ml TK-130 modeli kompakt tasarımı, lazer baskı uygulanabilir yüzeyi ve günlük kullanıma uygun yapısı ile kurumsal promosyon termos modelleri arasında tercih edilen ürünlerden biridir.",

  longDesc: `
Promosyon termos 400 ml TK-130 modeli kompakt ve kullanışlı tasarımı ile kurumsal promosyon ürünleri arasında sıkça tercih edilen termos modellerinden biridir. Taşınabilir boyutu sayesinde çanta içinde rahatlıkla taşınabilir ve günlük kullanım için oldukça pratiktir.

Promosyon termoslar firmaların marka bilinirliğini artırmak için kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sürekli kullanılan bir ürün olması sayesinde firmanızın logosu kullanıcıların günlük hayatında sıkça görünür hale gelir.

Promosyon termos TK-130 modeli üzerine firmanıza ait logo veya marka baskısı lazer baskı yöntemi ile uygulanabilir. Lazer baskı yöntemi sayesinde baskı daha kalıcı ve uzun ömürlü olur. Bu özellik termosu hem prestijli hem de güçlü bir kurumsal promosyon ürünü haline getirir.

Promosyon termos ürünleri özellikle fuarlar, etkinlikler, müşteri hediyeleri, bayi toplantıları ve çalışan motivasyon paketlerinde tercih edilen kullanışlı promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Termos  
Kapasite: 400 ml  
Ürün Ölçüsü: 23 x Ø 7 cm  
Baskı Türü: Lazer Baskı  
Baskı Alanı: 23 x 80 mm  
Kolideki Adet: 30  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Müşteri ve çalışan hediyeleri  
Günlük kullanım ve seyahat  

RENK SEÇENEKLERİ

Ürün renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon termos siparişleri toplu üretim şeklinde hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p108",
  slug: "promosyon-termos-1300ml-tk-140",
  title: "Promosyon Termos 1300 ml TK-140 | Kilitli Kapak Logo Baskılı Termos",
  category: "Termos",
  image: "/products/promosyon-termos-1300ml-tk-140.jpg",

  shortDesc:
    "Promosyon termos 1300 ml TK-140 modeli büyük kapasitesi, kilitli kapak sistemi ve logo baskı uygulanabilir yüzeyi ile kurumsal promosyon termos modelleri arasında dikkat çeken ürünlerden biridir.",

  longDesc: `
Promosyon termos 1300 ml TK-140 modeli yüksek kapasitesi ve kullanışlı tasarımı ile kurumsal promosyon ürünleri arasında öne çıkan termos modellerinden biridir. Geniş hacmi sayesinde gün boyu sıcak veya soğuk içeceklerin taşınmasına imkan sağlar.

Promosyon termoslar firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Günlük hayatta sık kullanılan termoslar sayesinde firmanızın logosu kullanıcıların günlük yaşamında sürekli görünür hale gelir.

Promosyon termos TK-140 modeli kilitli kapak sistemi sayesinde güvenli kullanım sunar ve taşıma sırasında dökülme riskini azaltır. Bu özellik özellikle seyahat, spor ve açık hava aktivitelerinde ürünü oldukça pratik hale getirir.

Promosyon termos üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede ürün hem kullanışlı hem de etkili bir reklam aracı haline gelir. Kurumsal etkinlikler, fuarlar, müşteri hediyeleri ve çalışan motivasyon paketleri için tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Termos  
Kapasite: 1300 ml  
Ürün Ölçüsü: 9,5 x 30 cm  
Kapak Tipi: Kilitli Kapak  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Müşteri ve çalışan hediyeleri  
Günlük kullanım, seyahat ve spor  

RENK SEÇENEKLERİ

Ürün renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon termos siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p109",
  slug: "promosyon-termos-1000ml-tk-150",
  title: "Promosyon Termos 1000 ml TK-150 | Kilitli Kapak Logo Baskılı Termos",
  category: "Termos",
  image: "/products/promosyon-termos-1000ml-tk-150.jpg",

  shortDesc:
    "Promosyon termos 1000 ml TK-150 modeli kilitli kapak sistemi, geniş kapasitesi ve logo baskı uygulanabilir yüzeyi ile kurumsal promosyon termos modelleri arasında tercih edilen kullanışlı ürünlerden biridir.",

  longDesc: `
Promosyon termos 1000 ml TK-150 modeli geniş hacmi ve ergonomik tasarımı ile kurumsal promosyon ürünleri arasında öne çıkan termos modellerinden biridir. Günlük kullanım, seyahat, spor aktiviteleri ve ofis ortamında sıcak veya soğuk içeceklerin taşınması için oldukça pratik bir kullanım sunar.

Promosyon termos ürünleri firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sık kullanılan bir ürün olması sayesinde firmanızın logosu kullanıcıların günlük hayatında sürekli görünür hale gelir.

Promosyon termos TK-150 modeli kilitli kapak sistemi sayesinde güvenli kullanım sağlar ve taşıma sırasında dökülme riskini azaltır. Bu özellik özellikle seyahat eden kullanıcılar için önemli bir avantaj sunar.

Promosyon termos üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede termos hem kullanışlı bir ürün hem de güçlü bir kurumsal reklam aracı haline gelir. Kurumsal etkinlikler, fuarlar, müşteri hediyeleri ve çalışan motivasyon paketlerinde sıkça tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Termos  
Kapasite: 1000 ml  
Ürün Ölçüsü: 8,5 x 25 cm  
Kapak Tipi: Kilitli Kapak  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Müşteri ve çalışan hediyeleri  
Günlük kullanım, seyahat ve spor  

RENK SEÇENEKLERİ

Ürün renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon termos siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p110",
  slug: "promosyon-termos-900ml-tk-155",
  title: "Promosyon Termos 900 ml TK-155 | Kilitli Kapak Logo Baskılı Termos",
  category: "Termos",
  image: "/products/promosyon-termos-900ml-tk-155.jpg",

  shortDesc:
    "Promosyon termos 900 ml TK-155 modeli kilitli kapak sistemi, geniş kapasitesi ve logo baskı uygulanabilir yüzeyi ile kurumsal promosyon termos modelleri arasında öne çıkan kullanışlı ürünlerden biridir.",

  longDesc: `
Promosyon termos 900 ml TK-155 modeli ergonomik tasarımı ve kullanışlı yapısı ile kurumsal promosyon ürünleri arasında tercih edilen termos modellerinden biridir. Geniş kapasitesi sayesinde gün boyu sıcak veya soğuk içeceklerin taşınmasına imkan sağlar.

Promosyon termos ürünleri firmaların marka bilinirliğini artırmak için tercih ettiği etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sık kullanılan bir ürün olması sayesinde firmanızın logosu kullanıcıların günlük hayatında sürekli görünür hale gelir.

Promosyon termos TK-155 modeli kilitli kapak sistemi sayesinde güvenli kullanım sunar ve taşıma sırasında dökülme riskini azaltır. Bu özellik özellikle seyahat, spor ve açık hava aktivitelerinde ürünü oldukça pratik hale getirir.

Promosyon termos üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede termos hem kullanışlı bir ürün hem de güçlü bir kurumsal tanıtım aracı haline gelir. Kurumsal etkinlikler, fuarlar, müşteri hediyeleri ve çalışan motivasyon paketlerinde sıkça tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Termos  
Kapasite: 900 ml  
Ürün Ölçüsü: 9,5 x 22 cm  
Kapak Tipi: Kilitli Kapak  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Müşteri ve çalışan hediyeleri  
Günlük kullanım, seyahat ve spor  

RENK SEÇENEKLERİ

Ürün renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon termos siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p111",
  slug: "promosyon-ahsap-telefon-tutucu-att-230",
  title: "Promosyon Ahşap Telefon Tutucu ATT-230 | Logo Baskılı Ahşap Telefon Standı",
  category: "Geri Dönüşümlü Ürünler",
  image: "/products/promosyon-ahsap-telefon-tutucu-att-230.jpg",

  shortDesc:
    "Promosyon ahşap telefon tutucu ATT-230 modeli kayın ağacı malzemesi, kaydırmaz tabanı ve logo baskı uygulanabilir yüzeyi ile çevre dostu promosyon ürünleri arasında öne çıkan kullanışlı masaüstü ürünlerinden biridir.",

  longDesc: `
Promosyon ahşap telefon tutucu ATT-230 modeli doğal kayın ağacı malzemeden üretilmiş çevre dostu promosyon ürünleri arasında yer almaktadır. Masa üzerinde telefon kullanımını kolaylaştıran ergonomik tasarımı sayesinde hem ofis hem de günlük kullanım için oldukça pratik bir üründür.

Geri dönüşümlü promosyon ürünleri, çevre bilincine sahip firmalar tarafından tercih edilen sürdürülebilir tanıtım ürünleri arasında yer almaktadır. Doğal ahşap malzemeden üretilen promosyon ürünleri markanızın çevreye duyarlı bir imaj oluşturmasına katkı sağlar.

Promosyon ahşap telefon standı ATT-230 modeli üzerine firmanıza ait logo veya marka baskısı uygulanabilir. Bu sayede ürün hem kullanışlı bir masaüstü aksesuarı hem de etkili bir reklam aracı haline gelir.

Promosyon ahşap telefon tutucular özellikle kurumsal hediyeler, fuar dağıtımları, ofis promosyonları ve çevre dostu kampanyalar için tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Ahşap Telefon Tutucu  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Malzeme: 1. Sınıf Kayın Ağacı  
Taban: Kaydırmaz Taban  

Ürün Ölçüsü:  
6,4 x 8 x 1,8 cm  
8 x 8,5 x 1,4 cm  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis masaüstü aksesuarları  
Fuar ve etkinlik dağıtımları  
Çevre dostu promosyon kampanyaları  

Promosyon ahşap telefon tutucu siparişleri toplu üretim şeklinde hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p112",
  slug: "promosyon-dikisli-defter-gd-100",
  title: "Promosyon Dikişli Defter GD-100 | Geri Dönüşümlü Logo Baskılı Kraft Defter",
  category: "Geri Dönüşümlü Ürünler",
  image: "/products/promosyon-dikisli-defter-gd-100.jpg",

  shortDesc:
    "Promosyon dikişli defter GD-100 modeli geri dönüşümlü kağıdı, kraft kapak tasarımı ve UV ile serigrafi baskıya uygun yapısı sayesinde çevre dostu promosyon ürünleri arasında öne çıkan kullanışlı defter modellerinden biridir.",

  longDesc: `
Promosyon dikişli defter GD-100 modeli çevre dostu yapısı ve şık kraft kapak tasarımı ile geri dönüşümlü promosyon ürünleri arasında dikkat çeken defter modellerinden biridir. Günlük not alma, toplantı kullanımı, eğitim etkinlikleri ve kurumsal dağıtımlar için oldukça uygun bir üründür.

Promosyon defterler firmaların marka görünürlüğünü artıran en etkili promosyon ürünleri arasında yer almaktadır. Günlük kullanım değeri yüksek olan defterler sayesinde firmanızın logosu kullanıcıların masaüstünde, ofis ortamında ve toplantılarda sürekli görünür halde kalır.

Promosyon dikişli defter GD-100 modeli geri dönüşüm kağıttan üretilmiş olup çevre bilincine önem veren firmalar için güçlü bir kurumsal promosyon seçeneğidir. Kraft kapak yapısı ve terzi dikişli formu ürüne doğal ve kaliteli bir görünüm kazandırır.

Promosyon geri dönüşümlü defter üzerine firmanıza ait logo veya marka baskısı UV baskı ya da serigrafi baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis aracı hem de çevre dostu bir reklam ürünü haline gelir.

Promosyon dikişli defterler özellikle fuarlar, seminerler, eğitim organizasyonları, kurumsal etkinlikler ve çalışan hediyeleri için tercih edilen promosyon ürünleri arasında yer almaktadır. Kareli ve çizgili iç sayfa seçenekleri ile farklı kullanım ihtiyaçlarına da hitap eder.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Dikişli Defter  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 12,5 x 20 cm  
Kağıt: 70 gr. Krem  
Yaprak Sayısı: 40 Yaprak  
Sayfa Sayısı: 80 Sayfa  
Kapak: Kraft  
Baskı Türü: UV Baskı / Serigrafi  
Cilt Tipi: Terzi Dikiş  
Kağıt Türü: Geri Dönüşüm Kağıt  
İç Sayfa: Kareli ve Çizgili  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Toplantı ve ofis kullanımı  
Çevre dostu promosyon kampanyaları  
Eğitim ve seminer organizasyonları  

RENK VE STOK BİLGİSİ

Ürün detayları, iç sayfa seçenekleri ve stok durumu dönemsel olarak değişebileceği için sipariş öncesinde bilgi alınması önerilmektedir.

Promosyon dikişli defter siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı, baskı türü ve teslim süresi gibi detaylar teklif aşamasında netleşmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p113",
  slug: "promosyon-spiralli-notluk-gd-110",
  title: "Promosyon Spiralli Notluk GD-110 | Logo Baskılı Spiralli Not Defteri",
  category: "Geri Dönüşümlü Ürünler",
  image: "/products/promosyon-spiralli-notluk-gd-110.jpg",

  shortDesc:
    "Promosyon spiralli notluk GD-110 modeli kompakt tasarımı, 140 sayfalık çizgili iç yapısı ve logo baskı uygulanabilir yüzeyi ile geri dönüşümlü promosyon ürünleri arasında tercih edilen kullanışlı not defteri modellerinden biridir.",

  longDesc: `
Promosyon spiralli notluk GD-110 modeli günlük not alma ve ofis kullanımı için tasarlanmış pratik promosyon ürünlerinden biridir. Kompakt boyutu sayesinde çanta içinde kolay taşınabilir ve toplantılar, seminerler ve eğitim organizasyonları için oldukça kullanışlıdır.

Promosyon notluklar firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sürekli kullanılan not defterleri sayesinde firmanızın logosu kullanıcıların masaüstünde ve günlük çalışma ortamında sürekli görünür olur.

Promosyon spiralli notluk GD-110 modeli üzerine firmanıza ait logo veya marka baskısı UV baskı veya serigrafi baskı yöntemi ile uygulanabilir. Bu sayede notluk hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal reklam aracı haline gelir.

Spiralli cilt yapısı sayesinde sayfalar kolayca çevrilebilir ve uzun süreli kullanım sağlar. Ayrıca kalem tutucu özelliği sayesinde notluk ile birlikte kalem taşımak oldukça pratik hale gelir.

Promosyon spiralli notluklar özellikle fuarlar, seminerler, eğitim etkinlikleri, müşteri hediyeleri ve çalışan promosyonları için tercih edilen ürünler arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Spiralli Notluk  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 11,5 x 16 cm  
Sayfa Sayısı: 140 Sayfa  
İç Sayfa: Çizgili  
Kağıt: 60 gr. Krem  
Cilt Tipi: Spiralli  
Kalem Tutucu: Var  
Baskı Türü: UV Baskı / Serigrafi  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Toplantı ve ofis kullanımı  
Eğitim ve seminer organizasyonları  

RENK VE STOK BİLGİSİ

Ürün renk seçenekleri ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon spiralli notluk siparişleri toplu üretim şeklinde hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p114",
  slug: "promosyon-spiralli-notluk-gd-120",
  title: "Promosyon Spiralli Notluk GD-120 | Sert Kraft Kapak Logo Baskılı Defter",
  category: "Geri Dönüşümlü Ürünler",
  image: "/products/promosyon-spiralli-notluk-gd-120.jpg",

  shortDesc:
    "Promosyon spiralli notluk GD-120 modeli sert kraft kapak tasarımı, geri dönüşümlü kağıdı ve logo baskıya uygun yapısı ile çevre dostu promosyon ürünleri arasında tercih edilen kullanışlı defter modellerinden biridir.",

  longDesc: `
Promosyon spiralli notluk GD-120 modeli çevre dostu malzemesi ve şık sert kraft kapak tasarımı ile geri dönüşümlü promosyon ürünleri arasında öne çıkan defter modellerinden biridir. Günlük not alma, toplantı kullanımı, eğitim etkinlikleri ve ofis ortamı için oldukça kullanışlı bir üründür.

Promosyon notluklar firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sık kullanılan bir ürün olması sayesinde firmanızın logosu kullanıcıların masaüstünde ve çalışma ortamında sürekli görünür olur.

Promosyon spiralli notluk GD-120 modeli üzerine firmanıza ait logo veya marka baskısı serigrafi veya dijital baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal reklam aracı haline gelir.

Spiralli cilt yapısı sayesinde sayfalar kolayca çevrilebilir ve uzun süreli kullanım sağlar. Geri dönüşümlü kağıttan üretilmiş olması ise çevreye duyarlı firmalar için önemli bir avantaj sunar.

Promosyon spiralli notluklar özellikle fuarlar, seminerler, eğitim organizasyonları, müşteri hediyeleri ve çalışan promosyonları için tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Spiralli Notluk  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 16 x 22 cm  
Kağıt: 70 gr Krem  
Yaprak Sayısı: 90 Yaprak  
Kapak: Sert Kraft  
Baskı Türü: Serigrafi / Dijital Baskı  
Kağıt Türü: Geri Dönüşüm Kağıt  
Cilt Tipi: Spiralli  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Toplantı ve ofis kullanımı  
Eğitim ve seminer organizasyonları  
Çevre dostu promosyon kampanyaları  

RENK VE STOK BİLGİSİ

Ürün detayları ve stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon spiralli notluk siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p115",
  slug: "promosyon-renkli-yapiskanli-notluk-gd-130",
  title: "Promosyon Renkli Yapışkanlı Notluk GD-130 | Logo Baskılı Yapışkanlı Not Defteri",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-renkli-yapiskanli-notluk-gd-130.jpg",

  shortDesc:
    "Promosyon renkli yapışkanlı notluk GD-130 modeli sert kraft kapak tasarımı, yapışkanlı not kağıtları ve logo baskı uygulanabilir yüzeyi ile geri dönüşümlü promosyon ürünleri arasında tercih edilen kullanışlı masaüstü notluk modellerinden biridir.",

  longDesc: `
Promosyon renkli yapışkanlı notluk GD-130 modeli ofis ve günlük kullanım için tasarlanmış pratik promosyon ürünlerinden biridir. Yapışkanlı not kağıtları sayesinde hızlı not alma, hatırlatma ve masaüstü kullanım için oldukça kullanışlıdır.

Promosyon notluk ürünleri firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan notluklar sayesinde firmanızın logosu kullanıcıların masaüstünde sürekli görünür halde kalır.

Promosyon yapışkanlı notluk GD-130 modeli üzerine firmanıza ait logo veya marka baskısı serigrafi ya da dijital baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal reklam aracı haline gelir.

Sert kraft kapak yapısı ürüne dayanıklılık kazandırırken geri dönüşümlü malzemesi çevre dostu bir promosyon ürünü olmasını sağlar. Renkli kapak seçenekleri sayesinde farklı kurumsal kampanyalar ve promosyon etkinlikleri için tercih edilmektedir.

Promosyon yapışkanlı notluklar özellikle fuarlar, seminerler, kurumsal etkinlikler, müşteri hediyeleri ve ofis promosyonları için sıkça tercih edilen ürünler arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Yapışkanlı Notluk  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 17,5 x 12 x 1,5 cm  
Not Kağıdı: 70'li  
Kapak: Sert Kraft  
Baskı Türü: Serigrafi / Dijital Baskı  
Koli Adedi: 40  

RENK SEÇENEKLERİ

Kırmızı  
Lacivert  
Siyah  
Turuncu  

Ürün renk seçenekleri ve stok durumları dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Kalem ürün görsellerinde aksesuar olarak yer alabilir ve ürüne dahil olmayabilir.

Promosyon yapışkanlı notluk siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p116",
  slug: "promosyon-spiralli-not-defteri-gd-140",
  title: "Promosyon Spiralli Not Defteri GD-140 | Sert Kraft Kapak Logo Baskılı Defter",
  category: "Geri Dönüşümlü Ürünler",
  image: "/products/promosyon-spiralli-not-defteri-gd-140.jpg",

  shortDesc:
    "Promosyon spiralli not defteri GD-140 modeli sert kraft kapak tasarımı, 100 yaprak krem kağıdı ve logo baskı uygulanabilir yüzeyi ile geri dönüşümlü promosyon ürünleri arasında öne çıkan kullanışlı defter modellerinden biridir.",

  longDesc: `
Promosyon spiralli not defteri GD-140 modeli çevre dostu yapısı ve şık sert kraft kapak tasarımı ile geri dönüşümlü promosyon ürünleri arasında dikkat çeken defter modellerinden biridir. Günlük not alma, toplantı kullanımı ve ofis ortamı için oldukça kullanışlı bir üründür.

Promosyon not defterleri firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Günlük kullanım değeri yüksek olan defterler sayesinde firmanızın logosu kullanıcıların masaüstünde ve çalışma ortamında sürekli görünür olur.

Promosyon spiralli not defteri GD-140 modeli üzerine firmanıza ait logo veya marka baskısı serigrafi veya dijital baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal reklam aracı haline gelir.

Spiralli cilt yapısı sayfaların kolayca çevrilmesini sağlar ve uzun süreli kullanım avantajı sunar. Sert kraft kapak yapısı ise ürüne dayanıklılık kazandırırken geri dönüşümlü kağıt kullanımı çevre dostu bir promosyon ürünü olmasını sağlar.

Promosyon spiralli defterler özellikle fuarlar, seminerler, eğitim organizasyonları, müşteri hediyeleri ve çalışan promosyonları için tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Spiralli Not Defteri  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 16,5 x 21,5 cm  
Kağıt: 70 gr Krem  
Yaprak Sayısı: 100 Yaprak  
Kapak: Sert Kraft  
Baskı Türü: Serigrafi / Dijital Baskı  
Cilt Tipi: Spiralli  
Koli Adeti: 40  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Toplantı ve ofis kullanımı  
Eğitim ve seminer organizasyonları  
Çevre dostu promosyon kampanyaları  

RENK VE STOK BİLGİSİ

Ürün detayları ve stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

Kalem ürün görsellerinde aksesuar olarak yer alabilir ve ürüne dahil olmayabilir.

Promosyon spiralli not defteri siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p117",
  slug: "promosyon-renkli-yapiskanli-notluk-gd-150",
  title: "Promosyon Renkli Yapışkanlı Notluk GD-150 | Logo Baskılı Yapışkanlı Not Defteri",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-renkli-yapiskanli-notluk-gd-150.jpg",

  shortDesc:
    "Promosyon renkli yapışkanlı notluk GD-150 modeli sert kapak tasarımı, 70 yaprak krem not kağıdı ve logo baskı uygulanabilir yüzeyi ile geri dönüşümlü promosyon ürünleri arasında tercih edilen kullanışlı masaüstü notluk modellerinden biridir.",

  longDesc: `
Promosyon renkli yapışkanlı notluk GD-150 modeli ofis ve günlük kullanım için tasarlanmış pratik promosyon ürünlerinden biridir. Yapışkanlı not kağıtları sayesinde hızlı not alma, hatırlatma ve masaüstü kullanım için oldukça kullanışlıdır.

Promosyon yapışkanlı notluklar firmaların marka bilinirliğini artırmak için tercih ettiği etkili promosyon ürünleri arasında yer almaktadır. Ofis ortamında sürekli kullanılan bu ürünler sayesinde firmanızın logosu kullanıcıların masaüstünde sürekli görünür halde kalır.

Promosyon renkli yapışkanlı notluk GD-150 modeli üzerine firmanıza ait logo veya marka baskısı UV baskı ya da serigrafi baskı yöntemi ile uygulanabilir. Bu sayede notluk hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal reklam aracı haline gelir.

Sert kapak sıvama yapısı ürüne dayanıklılık kazandırırken geri dönüşümlü kağıt kullanımı çevre dostu bir promosyon ürünü olmasını sağlar. Ayrıca kalem tutucu özelliği sayesinde notluk ile birlikte kalem kullanımı oldukça pratik hale gelir.

Promosyon yapışkanlı notluklar özellikle fuarlar, seminerler, kurumsal etkinlikler, müşteri hediyeleri ve ofis promosyonları için tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Yapışkanlı Notluk  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 11 x 16 x 1,3 cm  
Kağıt: 70 gr Krem  
Yaprak Sayısı: 70 Yaprak  
Kapak: Sert Kapak Sıvama  
Baskı Türü: UV Baskı / Serigrafi  
Kalem Tutucu: Var  
Kağıt Türü: Geri Dönüşüm Kağıt  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Toplantı ve ofis kullanımı  
Çevre dostu promosyon kampanyaları  

RENK VE STOK BİLGİSİ

Ürün detayları ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Kalem ürün görsellerinde aksesuar olarak yer alabilir ve ürüne dahil olmayabilir.

Promosyon yapışkanlı notluk siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p118",
  slug: "promosyon-spiralli-not-defteri-gd-160",
  title: "Promosyon Spiralli Not Defteri GD-160 | Kraft Kapak Logo Baskılı Not Defteri",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-spiralli-not-defteri-gd-160.jpg",

  shortDesc:
    "Promosyon spiralli not defteri GD-160 modeli kompakt boyutu, kraft kapak tasarımı ve logo baskıya uygun yapısı ile geri dönüşümlü promosyon ürünleri arasında tercih edilen pratik not defteri modellerinden biridir.",

  longDesc: `
Promosyon spiralli not defteri GD-160 modeli küçük ve taşınabilir boyutu ile günlük kullanım için tasarlanmış pratik promosyon ürünlerinden biridir. Çanta içinde kolay taşınabilen yapısı sayesinde toplantı, eğitim, fuar ve günlük not alma ihtiyaçları için oldukça kullanışlıdır.

Promosyon not defterleri firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sık kullanılan not defterleri sayesinde firmanızın logosu kullanıcıların masaüstünde ve günlük çalışma ortamında sürekli görünür olur.

Promosyon spiralli not defteri GD-160 modeli üzerine firmanıza ait logo veya marka baskısı serigrafi veya dijital baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal reklam aracı haline gelir.

Kraft kapak yapısı ürüne doğal ve çevre dostu bir görünüm kazandırırken geri dönüşümlü kağıt kullanımı sürdürülebilir promosyon ürünleri arasında yer almasını sağlar. Spiralli cilt yapısı sayesinde sayfalar kolayca çevrilebilir ve uzun süreli kullanım avantajı sunar.

Promosyon spiralli not defterleri özellikle fuarlar, seminerler, eğitim organizasyonları, müşteri hediyeleri ve ofis promosyonları için tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Spiralli Not Defteri  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 8,5 x 14 cm  
Kağıt: 70 gr Çizgili  
Sayfa Sayısı: 70 Yaprak  
Kapak: Kraft  
Baskı Türü: Serigrafi / Dijital Baskı  
Cilt Tipi: Spiralli  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Toplantı ve ofis kullanımı  
Eğitim ve seminer organizasyonları  
Çevre dostu promosyon kampanyaları  

RENK VE STOK BİLGİSİ

Ürün detayları ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Kalem ürün görsellerinde aksesuar olarak yer alabilir ve ürüne dahil olmayabilir.

Promosyon spiralli not defteri siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p119",
  slug: "promosyon-spiralli-defter-yapiskanli-notluk-gd-170",
  title: "Promosyon Spiralli Defter Yapışkanlı Notluk GD-170 | Logo Baskılı Geri Dönüşümlü Defter",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-spiralli-defter-yapiskanli-notluk-gd-170.jpg",

  shortDesc:
    "Promosyon spiralli defter yapışkanlı notluk GD-170 modeli geri dönüşümlü kağıdı, yapışkanlı notluk bölümü ve logo baskıya uygun yapısı ile çevre dostu promosyon ürünleri arasında tercih edilen kullanışlı defter modellerinden biridir.",

  longDesc: `
Promosyon spiralli defter yapışkanlı notluk GD-170 modeli pratik kullanım sunan çok fonksiyonlu promosyon ürünlerinden biridir. Hem not defteri hem de yapışkanlı notluk özelliği sayesinde günlük not alma, hatırlatma ve masaüstü kullanım için oldukça kullanışlıdır.

Promosyon defterler firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Günlük kullanım değeri yüksek olan bu ürünler sayesinde firmanızın logosu kullanıcıların masaüstünde ve çalışma ortamında sürekli görünür olur.

Promosyon spiralli defter GD-170 modeli üzerine firmanıza ait logo veya marka baskısı UV baskı ya da serigrafi baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal reklam aracı haline gelir.

Geri dönüşümlü kağıt kullanımı çevreye duyarlı firmalar için sürdürülebilir bir promosyon ürünü olmasını sağlar. Spiralli cilt yapısı sayfaların kolay çevrilmesine imkan verirken yapışkanlı notluk bölümü hızlı not alma ve hatırlatma için ekstra kullanım avantajı sunar.

Promosyon spiralli defter yapışkanlı notluklar özellikle fuarlar, seminerler, eğitim organizasyonları, müşteri hediyeleri ve ofis promosyonları için tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Spiralli Defter Yapışkanlı Notluk  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 12,5 x 20,5 cm  
Kağıt: 80 gr Ivory  
Yaprak Sayısı: 100 Yaprak  
Cilt Tipi: Spiralli  
Baskı Türü: UV Baskı / Serigrafi  
Özellik: Yapışkanlı Notluk Bölümü  
Kağıt Türü: Geri Dönüşüm Kağıt  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Toplantı ve ofis kullanımı  
Eğitim ve seminer organizasyonları  
Çevre dostu promosyon kampanyaları  

RENK VE STOK BİLGİSİ

Ürün detayları ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Promosyon spiralli defter siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p120",
  slug: "promosyon-renkli-yapiskanli-notluk-gd-180",
  title: "Promosyon Renkli Yapışkanlı Notluk GD-180 | Kraft Kapak Logo Baskılı Not Defteri",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-renkli-yapiskanli-notluk-gd-180.jpg",

  shortDesc:
    "Promosyon renkli yapışkanlı notluk GD-180 modeli kraft kapak tasarımı, 120 sayfa çizgili iç yapısı ve logo baskıya uygun yüzeyi ile geri dönüşümlü promosyon ürünleri arasında tercih edilen kullanışlı not defteri modellerinden biridir.",

  longDesc: `
Promosyon renkli yapışkanlı notluk GD-180 modeli günlük not alma ve masaüstü kullanım için tasarlanmış pratik promosyon ürünlerinden biridir. Kompakt boyutu sayesinde çanta içinde kolay taşınabilir ve ofis, toplantı, eğitim ve fuar etkinliklerinde rahatlıkla kullanılabilir.

Promosyon notluklar firmaların marka bilinirliğini artırmak için tercih ettiği en etkili promosyon ürünleri arasında yer almaktadır. Gün içerisinde sık kullanılan bu ürünler sayesinde firmanızın logosu kullanıcıların masaüstünde ve günlük çalışma ortamında sürekli görünür olur.

Promosyon yapışkanlı notluk GD-180 modeli üzerine firmanıza ait logo veya marka baskısı serigraf baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal reklam aracı haline gelir.

Kraft kapak tasarımı ürüne doğal ve çevre dostu bir görünüm kazandırırken geri dönüşümlü kağıt kullanımı sürdürülebilir promosyon ürünleri arasında yer almasını sağlar. Yapışkanlı not kağıtları ise hızlı not alma ve hatırlatma için pratik bir kullanım sunar.

Promosyon yapışkanlı notluklar özellikle fuarlar, seminerler, kurumsal etkinlikler, müşteri hediyeleri ve ofis promosyonları için tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Yapışkanlı Notluk  
Kategori: Geri Dönüşümlü Promosyon Ürünleri  
Ürün Ölçüsü: 10,5 x 14,7 cm  
Kağıt: 70 gr Krem  
Sayfa Sayısı: 120 Sayfa (Çizgili)  
Kapak: Kraft  
Baskı Türü: Serigraf Baskı  
Kağıt Türü: Geri Dönüşüm Kağıt  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik dağıtımları  
Toplantı ve ofis kullanımı  
Eğitim ve seminer organizasyonları  
Çevre dostu promosyon kampanyaları  

RENK VE STOK BİLGİSİ

Ürün detayları ve stok durumu dönemsel olarak değişebileceği için sipariş sırasında stok bilgisi alınması önerilmektedir.

Kalem ürün görsellerinde aksesuar olarak yer alabilir ve ürüne dahil olmayabilir.

Promosyon yapışkanlı notluk siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir. Kurumsal siparişler için hızlı teklif alabilirsiniz.
`
},
{
  id: "p121",
  slug: "promosyon-kalem-seti-ks-100",
  title: "Promosyon Kalem Seti KS-100 | Logo Baskılı Kurumsal Kalem Seti",

  category: "Kalem Setleri",

  image: "/products/promosyon-kalem-seti-ks-100.jpg",

  shortDesc:
    "Promosyon kalem seti KS-100 modeli şık kutu tasarımı, logo baskıya uygun yüzeyi ve mavi refil kalem yapısı ile kurumsal promosyon kalem setleri arasında tercih edilen prestijli promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon kalem seti KS-100 modeli şık kutu tasarımı ve kaliteli kalem yapısı ile kurumsal promosyon ürünleri arasında öne çıkan kalem seti modellerinden biridir. Kurumsal firmalar tarafından müşteri hediyesi, çalışan hediyesi veya fuar promosyon ürünü olarak tercih edilmektedir.

Promosyon kalem setleri markaların prestijli kurumsal promosyon ürünleri arasında yer alır. Şık kutu tasarımı sayesinde hem masaüstü kullanımı için uygundur hem de kurumsal hediye olarak sunulabilecek profesyonel bir görünüm sağlar.

Promosyon kalem seti KS-100 modeli üzerine firmanıza ait logo veya marka baskısı lazer baskı veya serigraf baskı yöntemleri ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis ürünü hem de güçlü bir reklam aracı haline gelir.

Kalem setleri özellikle kurumsal etkinliklerde, toplantılarda, bayi toplantılarında, özel gün hediyelerinde ve müşteri promosyonlarında sık tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Kalem Seti  
Kategori: Kalem Setleri  
Kalem Ölçüsü: 140 x Ø13 mm  
Kutu Ölçüsü: 192 x 97 mm  
Refil: Mavi Refil  
Kolideki Adet: 50 Adet  

BASKI BİLGİLERİ

Lazer Baskı Alanı: 50 x 5,5 mm  
Serigraf Baskı Alanı: 150 x 65 mm  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Firma tanıtım hediyeleri  
Fuar ve etkinlik promosyonları  
Müşteri ve bayi hediyeleri  
Ofis promosyon ürünleri  

RENK VE STOK BİLGİSİ

Ürün renkleri ve stok durumu dönemsel olarak değişebileceği için sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon kalem seti siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p122",
  slug: "promosyon-karton-canta-kc-100",
  title: "Promosyon Karton Çanta KÇ-100 | Logo Baskılı Karton Çanta",

  category: "Karton Çantalar",

  image: "/products/promosyon-karton-canta-kc-100.jpg",

  shortDesc:
    "Promosyon karton çanta KÇ-100 modeli 230 gr Amerikan Bristol kağıt, mat veya parlak selefon kaplama ve 35 cm PP kordon ip yapısı ile kurumsal promosyon ve mağaza kullanımı için tercih edilen dayanıklı karton çanta modellerinden biridir.",

  longDesc: `
Promosyon karton çanta KÇ-100 modeli kurumsal firmalar, mağazalar ve markalar için üretilen kaliteli promosyon karton çanta modellerinden biridir. 230 gr Amerikan Bristol kağıt kullanılarak üretilen bu karton çanta modeli hem dayanıklı hem de estetik bir kullanım sunar.

Promosyon karton çantalar özellikle mağazalarda ürün tesliminde, fuar ve etkinliklerde promosyon dağıtımlarında ve kurumsal marka tanıtımında sıklıkla tercih edilen promosyon ürünleri arasında yer almaktadır.

Karton çanta yüzeyi mat veya parlak selefon kaplama seçenekleri ile hazırlanabilir. Bu kaplama sayesinde ürün hem daha dayanıklı olur hem de baskı kalitesi daha profesyonel bir görünüm kazanır.

Promosyon karton çanta KÇ-100 modeli üzerine firmanıza ait logo veya marka tasarımı ofset baskı yöntemi ile uygulanabilir. Böylece ürün sadece bir taşıma çantası değil aynı zamanda güçlü bir reklam ve tanıtım aracı haline gelir.

Dayanıklı yapısı ve şık tasarımı sayesinde karton çantalar mağazalar, butik işletmeler, kozmetik firmaları, tekstil mağazaları, kurumsal firmalar ve fuar organizasyonları tarafından yoğun şekilde tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Karton Çanta  
Kategori: Matbaa Ürünleri  
Kağıt Türü: 230 gr Amerikan Bristol  
Kaplama: Mat Selefon / Parlak Selefon  
Kordon: 35 cm Standart PP Kordon  

EBAT SEÇENEKLERİ

25 x 35 x 8 cm  
21.5 x 33 x 12 cm  
23 x 31 x 8 cm  
23.5 x 27.5 x 10.5 cm  
24 x 26 x 8 cm  
24 x 34 x 9 cm  
24.5 x 35 x 9 cm  
25 x 29 x 8 cm  
25 x 32 x 8 cm  
25 x 39 x 8 cm  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Mağaza ve butik çantaları  
Fuar ve etkinlik promosyonları  
Kurumsal marka tanıtımı  
Tekstil ve kozmetik mağazaları  

RENK VE STOK BİLGİSİ

Promosyon karton çantalar kurumsal tasarıma göre özel üretim yapılmaktadır. Baskı tasarımı, renk seçenekleri ve üretim süresi sipariş detaylarına göre değişiklik gösterebilir.

Promosyon karton çanta siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p123",
  slug: "promosyon-250-yaprakli-kup-bloknot-mtb-100",
  title: "Promosyon 250 Yapraklı Küp Bloknot MTB-100 | Logo Baskılı Küp Bloknot",

  category: "Matbaa Ürünleri",

  image: "/products/promosyon-250-yaprakli-kup-bloknot-mtb-100.jpg",

  shortDesc:
    "Promosyon 250 yapraklı küp bloknot MTB-100 modeli 8 x 8 x 3 cm ölçüsü, 250 yaprak not kağıdı ve logo baskıya uygun dış kutu tasarımı ile ofis ve masaüstü kullanımında tercih edilen kurumsal promosyon bloknot ürünlerinden biridir.",

  longDesc: `
Promosyon 250 yapraklı küp bloknot MTB-100 modeli ofis kullanımı için oldukça pratik ve kullanışlı promosyon ürünleri arasında yer almaktadır. Masaüstü kullanımına uygun yapısı sayesinde not alma, hatırlatma ve günlük planlama için sıkça tercih edilmektedir.

Promosyon küp bloknot ürünleri özellikle kurumsal firmalar tarafından müşterilere dağıtılan promosyon ürünleri arasında yer alır. Ofis ortamında sürekli kullanıldığı için marka görünürlüğünü artıran etkili reklam ürünlerinden biridir.

MTB-100 modeli 250 yaprak iç kağıt kapasitesi sayesinde uzun süre kullanılabilir. Ürünün dış kutu kısmı 350 gr Amerikan Bristol kağıttan üretilmekte olup mat veya parlak selefon kaplama seçenekleri ile hazırlanabilmektedir.

Promosyon küp bloknot üzerine firmanıza ait logo, marka veya reklam tasarımı baskı uygulanarak ürün güçlü bir tanıtım aracı haline getirilebilir.

Promosyon küp bloknot ürünleri özellikle ofisler, bankalar, danışmanlık firmaları, eğitim kurumları ve kurumsal işletmeler tarafından yoğun şekilde tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Küp Bloknot  
Kategori: Matbaa Ürünleri  
Ürün Ölçüsü: 8 x 8 x 3 cm  
Yaprak Sayısı: 250 Yaprak  

KAĞIT BİLGİLERİ

Dış Kutu: 350 gr Amerikan Bristol  
Kaplama: Mat Selefon / Parlak Selefon  
İç Yaprak: 1. Hamur Kağıt  
Kağıt Gramajı: 80 gr  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis masaüstü promosyonları  
Fuar ve etkinlik promosyonları  
Müşteri promosyon ürünleri  
Kurumsal marka tanıtımı  

RENK VE STOK BİLGİSİ

Promosyon küp bloknot ürünleri kurumsal tasarım ve baskıya göre özel üretim yapılmaktadır. Baskı tasarımı ve üretim süresi sipariş detaylarına göre değişiklik gösterebilir.

Promosyon küp bloknot siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p124",
  slug: "promosyon-yerli-uretim-polyester-sapka-sp-500",
  title: "Promosyon Yerli Üretim Polyester Şapka ŞP-500 | Logo Baskılı Promosyon Şapka",

  category: "Promosyon Şapka",

  image: "/products/promosyon-yerli-uretim-polyester-sapka-sp-500.jpg",

  shortDesc:
    "Promosyon yerli üretim polyester şapka ŞP-500 modeli 140 gr polyester kumaşı, 5 panel tasarımı, cırt bantlı ayarlanabilir yapısı ve DTF transfer baskıya uygun yüzeyi ile kurumsal promosyon şapka modelleri arasında tercih edilen ürünlerden biridir.",

  longDesc: `
Promosyon yerli üretim polyester şapka ŞP-500 modeli kurumsal tanıtım faaliyetlerinde sık tercih edilen promosyon tekstil ürünleri arasında yer almaktadır. Dayanıklı polyester kumaş yapısı ve rahat kullanım sağlayan tasarımı sayesinde hem günlük kullanım hem de tanıtım amaçlı promosyon ürün olarak kullanılabilir.

Promosyon şapka ürünleri özellikle fuarlar, açık hava etkinlikleri, spor organizasyonları, şirket tanıtımları ve kampanyalarda markaların görünürlüğünü artıran etkili promosyon ürünlerinden biridir.

ŞP-500 modeli 140 gr polyester kumaştan üretilmiştir ve 5 panel tasarımına sahiptir. Şapkanın üzerinde bulunan kuş gözü detayları hava sirkülasyonu sağlayarak daha rahat bir kullanım sunar.

Promosyon şapka üzerine firmanıza ait logo veya marka tasarımı DTF transfer baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir tekstil ürünü hem de güçlü bir reklam ve marka tanıtım aracı haline gelir.

Ayarlanabilir cırt bantlı arka kısmı sayesinde farklı kullanıcılar için kolayca uyum sağlayabilir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Şapka  
Kategori: Promosyon Şapka  
Kumaş: 140 gr Polyester  
Üretim: Yerli Üretim  
Panel: 5 Panel Tasarım  
Siper: 4 Siper Dikiş  
Kuş Gözü: 2 Adet  
Arka Kapama: Cırt Bantlı Ayarlanabilir  

BASKI BİLGİLERİ

Baskı Türü: DTF Transfer Baskı  
Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Açık hava reklam ürünleri  
Şirket tanıtım kampanyaları  
Spor ve organizasyon etkinlikleri  

RENK VE STOK BİLGİSİ

Promosyon şapka renkleri ve stok durumu üretim dönemine göre değişiklik gösterebilir. Sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon şapka siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p125",
  slug: "promosyon-ahsap-masa-seti-ah-100",
  title: "Promosyon Ahşap Masa Seti AH-100 | Logo Baskılı Masaüstü Ofis Seti",

  category: "Ahşap ve Deri Masaüstü Ürünler",

  image: "/products/promosyon-ahsap-masa-seti-ah-100.jpg",

  shortDesc:
    "Promosyon ahşap masa seti AH-100 modeli kalemlik ve telefon standı bölmeleri bulunan şık tasarımı ile ofis masaları için tercih edilen prestijli kurumsal promosyon masaüstü ürünlerinden biridir.",

  longDesc: `
Promosyon ahşap masa seti AH-100 modeli kurumsal firmalar tarafından tercih edilen şık ve kullanışlı masaüstü promosyon ürünleri arasında yer almaktadır. Ofis masalarında düzen sağlayan tasarımı sayesinde hem dekoratif hem de işlevsel bir kullanım sunar.

Ahşap masa setleri özellikle yönetici masaları, ofis çalışanları ve kurumsal hediye ürünleri arasında sık tercih edilen promosyon ürünlerinden biridir. Kalemlik ve telefon standı bölmeleri sayesinde masa üzerinde düzenli bir kullanım sağlar.

Promosyon masa seti üzerine firmanıza ait logo veya marka baskısı uygulanarak ürün güçlü bir reklam ve kurumsal tanıtım aracı haline getirilebilir. Bu sayede marka görünürlüğü uzun süreli olarak sağlanabilir.

Ahşap masaüstü promosyon ürünleri özellikle bankalar, danışmanlık firmaları, holdingler, ofisler ve kurumsal işletmeler tarafından tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Ahşap Masa Seti  
Kategori: Ahşap ve Deri Masaüstü Ürünler  
Malzeme: Ahşap  
Bölmeler: Kalemlik ve Telefon Standı  
Kullanım: Masaüstü Ofis Organizer  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis masaüstü düzenleyiciler  
Yönetici masa setleri  
Firma tanıtım hediyeleri  
Kurumsal ofis promosyonları  

RENK VE STOK BİLGİSİ

Promosyon masa seti ürünleri farklı renk ve üretim seçenekleri ile hazırlanabilmektedir. Logo baskı ve üretim detayları sipariş aşamasında belirlenmektedir.

Promosyon masa seti siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p126",
  slug: "promosyon-penye-bisiklet-yaka-tshirt-pn-100",
  title: "Promosyon Penye Bisiklet Yaka T-shirt PN-100 | Logo Baskılı Promosyon Tişört",

  category: "Promosyon Tişört",

  image: "/products/promosyon-penye-bisiklet-yaka-tshirt-pn-100.jpg",

  shortDesc:
    "Promosyon penye bisiklet yaka t-shirt PN-100 modeli %100 pamuk 160 gr penye kumaşı, rahat kalıbı ve DTF transfer baskıya uygun yapısı ile kurumsal promosyon tişört modelleri arasında tercih edilen ürünlerden biridir.",

  longDesc: `
Promosyon penye bisiklet yaka t-shirt PN-100 modeli %100 pamuk penye kumaşı ve rahat kalıbı ile promosyon tekstil ürünleri arasında sık tercih edilen modellerden biridir. Günlük kullanıma uygun yapısı sayesinde hem çalışan kıyafeti hem de marka tanıtım ürünü olarak kullanılabilir.

Promosyon tişört ürünleri özellikle fuarlar, etkinlikler, organizasyonlar, şirket kampanyaları ve tanıtım faaliyetlerinde markaların görünürlüğünü artıran güçlü promosyon ürünleri arasında yer almaktadır.

PN-100 modeli 160 gr (Suprem) penye kumaştan üretilmektedir. Yumuşak dokusu sayesinde kullanıcıya rahat bir kullanım sunar. Bisiklet yaka tasarımı ve tüp model üretim yapısı ile modern ve konforlu bir kullanım sağlar.

Promosyon tişört üzerine firmanıza ait logo veya tasarım DTF transfer baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir tekstil ürünü hem de etkili bir reklam aracı haline gelir.

Promosyon tişörtler özellikle kurumsal firmalar, etkinlik organizasyonları, spor etkinlikleri, promosyon kampanyaları ve fuar organizasyonlarında yoğun şekilde tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Tişört  
Kategori: Promosyon Tişört  
Kumaş: %100 Pamuk Penye  
Kumaş Gramajı: 160 gr (Suprem)  
Model: Tüp Model  
Yaka Tipi: Bisiklet Yaka  

BEDEN SEÇENEKLERİ

S  
M  
L  
XL  

RENK SEÇENEKLERİ

Beyaz  
Siyah  
Kırmızı  
Lacivert  
Gri  
Saks Mavi  
Turkuaz  
Turuncu  
Sarı  

BASKI BİLGİLERİ

Baskı Türü: DTF Transfer Baskı  
Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Şirket tanıtım kampanyaları  
Organizasyon ve etkinlik tişörtleri  
Marka tanıtım ürünleri  

RENK VE STOK BİLGİSİ

Promosyon tişört ürünlerinde renk ve beden seçenekleri stok durumuna göre değişiklik gösterebilir. Sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon tişört siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p127",
  slug: "promosyon-organizer-19x265-org-100",
  title: "Promosyon Organizer ORG-100 | Logo Baskılı Termo Deri Organizer",

  category: "Organizerler",

  image: "/products/promosyon-organizer-org-100.jpg",

  shortDesc:
    "Promosyon organizer ORG-100 modeli termo deri kapak tasarımı, 336 sayfa çizgili iç yapısı ve 8 haneli hesap makinesi özelliği ile kurumsal promosyon organizer ürünleri arasında tercih edilen şık masaüstü ve ajanda organizer modellerinden biridir.",

  longDesc: `
Promosyon organizer ORG-100 modeli termo deri kapak tasarımı ve geniş iç hacmi sayesinde kurumsal promosyon ürünleri arasında prestijli bir seçenek olarak öne çıkmaktadır. Günlük not alma, toplantı planlama ve ofis kullanımı için oldukça kullanışlı bir organizer modelidir.

Promosyon organizer ürünleri özellikle yöneticiler, ofis çalışanları ve kurumsal firmalar tarafından tercih edilen promosyon ofis ürünleri arasında yer almaktadır. Şık tasarımı sayesinde hem kişisel kullanım hem de kurumsal hediye olarak kullanılabilir.

ORG-100 modeli 336 sayfa çizgili iç blok yapısına sahiptir. İç sayfalar 70 gr krem kağıttan üretilmiştir ve uzun süreli kullanım sağlar.

Organizer üzerinde bulunan 8 haneli hesap makinesi özelliği sayesinde günlük hesaplama işlemleri kolayca yapılabilir. Bu özellik ürünü daha fonksiyonel bir ofis ürünü haline getirir.

Promosyon organizer üzerine firmanıza ait logo veya marka baskısı gofre baskı, lazer baskı veya dijital baskı yöntemleri ile uygulanabilir. Bu sayede ürün güçlü bir marka tanıtım aracı haline gelir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Organizer  
Kategori: Organizerler  
Kapak Malzemesi: Termo Deri  
Ürün Ölçüsü: 19 x 26,5 cm  
İç Blok Ölçüsü: 16,5 x 23,5 cm  
Sayfa Sayısı: 336 Sayfa  
Sayfa Tipi: Çizgili  
Kağıt Türü: 70 gr Krem Kağıt  

EK ÖZELLİKLER

Hesap Makinesi: 8 Haneli  

BASKI BİLGİLERİ

Baskı Türleri: Gofre Baskı / Lazer Baskı / Dijital Baskı  
Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Yönetici ve ofis organizer ürünleri  
Toplantı ve not alma organizerleri  
Kurumsal hediye ürünleri  
Ofis promosyon ürünleri  

RENK VE STOK BİLGİSİ

Organizer ürünlerinde kapak renkleri ve üretim seçenekleri dönemsel olarak değişiklik gösterebilir. Sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon organizer siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p128",
  slug: "promosyon-sekreterlik-23x31-sb-100",
  title: "Promosyon Sekreterlik SB-100 | Logo Baskılı Termo Deri Evrak Sekreterliği",

  category: "Sekreterlikler ve Evrak Çantaları",

  image: "/products/promosyon-sekreterlik-sb-100.jpg",

  shortDesc:
    "Promosyon sekreterlik SB-100 modeli termo deri kapak tasarımı, bloknot bölmesi ve hesap makinesi özelliği ile kurumsal toplantılar ve ofis kullanımı için tercih edilen promosyon sekreterlik ve evrak organizer ürünlerinden biridir.",

  longDesc: `
Promosyon sekreterlik SB-100 modeli kurumsal firmalar tarafından tercih edilen kullanışlı ofis promosyon ürünleri arasında yer almaktadır. Termo deri kapak tasarımı sayesinde hem şık bir görünüm sunar hem de uzun süreli kullanım sağlar.

Promosyon sekreterlik ürünleri özellikle toplantılarda, sunumlarda ve ofis çalışmalarında evrak düzeni sağlamak için kullanılan pratik promosyon ürünleridir. İç kısmında bulunan bloknot bölmesi sayesinde not almak kolaylaşır.

SB-100 modeli içerisinde hesap makinesi bölmesi bulunur. Bu özellik özellikle ofis ve iş dünyasında çalışan kişiler için ürünü daha fonksiyonel hale getirir.

Promosyon sekreterlik üzerine firmanıza ait logo veya marka baskısı gofre baskı veya dijital baskı yöntemleri ile uygulanabilir. Bu sayede ürün hem kullanışlı bir ofis ürünü hem de güçlü bir kurumsal tanıtım aracı haline gelir.

Sekreterlik ve evrak çantası ürünleri özellikle bankalar, finans kurumları, danışmanlık firmaları, holdingler ve kurumsal işletmeler tarafından sık tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Sekreterlik  
Kategori: Sekreterlikler ve Evrak Çantaları  
Ürün Ölçüsü: 23 x 31 cm  
Kapak Malzemesi: Termo Deri  

ÜRÜN İÇERİĞİ

Bloknot  
Hesap Makinesi  
Kalem Bölmesi (Kalem aksesuardır)  

BASKI BİLGİLERİ

Baskı Türleri: Gofre Baskı / Dijital Baskı  
Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Toplantı ve sunum sekreterlikleri  
Ofis evrak düzenleyicileri  
Kurumsal hediye ürünleri  
Yönetici ve ofis promosyonları  

RENK VE STOK BİLGİSİ

Promosyon sekreterlik ürünleri farklı kapak renkleri ve üretim seçenekleri ile hazırlanabilmektedir. Sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon sekreterlik siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p129",
  slug: "promosyon-cetvel-cesitleri-ct-200",
  title: "Promosyon Cetvel Çeşitleri CT-200 | Logo Baskılı Promosyon Cetvel",

  category: "Kırtasiye Ürünleri",

  image: "/products/promosyon-cetvel-cesitleri-ct-200.jpg",

  shortDesc:
    "Promosyon cetvel çeşitleri CT-200 modeli okul, ofis ve kurumsal promosyon kullanımı için tercih edilen dayanıklı plastik cetvel modellerinden biridir. Logo baskıya uygun yapısı sayesinde marka tanıtımı için etkili bir promosyon ürünüdür.",

  longDesc: `
Promosyon cetvel çeşitleri CT-200 modeli hem eğitim kurumları hem de kurumsal firmalar tarafından tercih edilen kullanışlı kırtasiye promosyon ürünleri arasında yer almaktadır. Okullarda, ofislerde ve günlük kullanımda pratik ölçüm aracı olarak kullanılabilir.

Promosyon cetvel ürünleri özellikle eğitim kurumları, kırtasiye kampanyaları, öğrenci promosyonları ve kurumsal marka tanıtım faaliyetlerinde tercih edilmektedir. Günlük kullanımda sürekli kullanılan bir ürün olduğu için marka görünürlüğünü artıran etkili promosyon ürünlerinden biridir.

CT-200 modeli dayanıklı plastik malzemeden üretilmiş olup uzun süreli kullanım sağlar. Ürün üzerine firmanıza ait logo veya marka tasarımı baskı uygulanarak cetvel güçlü bir reklam ve tanıtım aracı haline getirilebilir.

Promosyon cetveller özellikle okullar, kurs merkezleri, eğitim kurumları, ofisler ve kurumsal etkinliklerde sık tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Cetvel  
Kategori: Kırtasiye Ürünleri  
Malzeme: Plastik  
Ölçü: 15 cm  

BASKI BİLGİLERİ

Logo Baskı: Kurumsal logo baskıya uygundur  
Baskı Türü: Serigraf veya UV baskı uygulanabilir  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Okul ve eğitim promosyonları  
Kırtasiye promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Ofis promosyon ürünleri  

RENK VE STOK BİLGİSİ

Promosyon cetvel ürünleri farklı renk seçenekleri ile üretilebilmektedir. Stok durumu ve üretim detayları sipariş öncesinde teyit edilmelidir.

Promosyon cetvel siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p130",
  slug: "promosyon-vip-set-vip-100",
  title: "Promosyon VIP Set VIP-100 | Logo Baskılı Kurumsal VIP Hediye Seti",

  category: "VIP Ürünler",

  image: "/products/promosyon-vip-set-vip-100.jpg",

  shortDesc:
    "Promosyon VIP set VIP-100 modeli termo deri defter, 13.000 mAh powerbank, kartvizitlik, anahtarlık, 16 GB USB bellek ve metal kalem seti içeriği ile kurumsal firmalar için hazırlanan prestijli promosyon hediye setlerinden biridir.",

  longDesc: `
Promosyon VIP set VIP-100 modeli kurumsal firmalar için hazırlanan prestijli promosyon hediye setleri arasında yer almaktadır. Şık kutu tasarımı ve zengin içeriği sayesinde özellikle yönetici hediyeleri, kurumsal etkinlikler ve özel gün promosyonları için tercih edilmektedir.

VIP promosyon setleri markaların prestijini yansıtan özel kurumsal hediye ürünleri arasında yer alır. İçeriğinde bulunan termo deri defter, powerbank, USB bellek, kartvizitlik ve kalem seti gibi ürünler hem kullanışlı hem de profesyonel bir görünüm sunar.

VIP-100 modeli içerisinde bulunan 13.000 mAh powerbank sayesinde mobil cihazlar kolayca şarj edilebilir. 16 GB USB bellek ise veri taşıma için pratik bir kullanım sağlar.

Promosyon VIP set üzerine firmanıza ait logo veya marka baskısı uygulanarak ürün güçlü bir reklam ve kurumsal tanıtım aracı haline getirilebilir. Bu sayede marka görünürlüğü uzun süreli olarak sağlanabilir.

VIP promosyon setleri özellikle bankalar, holdingler, kurumsal firmalar, finans kuruluşları ve yönetici hediyeleri için tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon VIP Set  
Kategori: VIP Ürünler  
Kutu Ölçüsü: 38 x 28 x 5,5 cm  

SET İÇERİĞİ

13 x 21 cm Termo Deri Defter  
13.000 mAh Powerbank  
Kartvizitlik  
Anahtarlık  
16 GB USB Bellek  
Metal Roller Kalem  
Metal Tükenmez Kalem  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
VIP müşteri hediyeleri  
Yönetici hediyeleri  
Kurumsal etkinlik promosyonları  
Prestij promosyon ürünleri  

RENK VE STOK BİLGİSİ

VIP promosyon setleri farklı içerik ve tasarım seçenekleri ile hazırlanabilmektedir. Logo baskı ve üretim detayları sipariş aşamasında belirlenmektedir.

Promosyon VIP set siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p131",
  slug: "promosyon-kristal-masa-seti-kms-130",
  title: "Promosyon Kristal Masa Seti KMS-130 | Logo Baskılı Kristal Masa Sümeni",

  category: "Masa Sümeni",

  image: "/products/promosyon-kristal-masa-seti-kms-130.jpg",

  shortDesc:
    "Promosyon kristal masa seti KMS-130 modeli 15 x 40 cm ölçüsü ve logo baskıya uygun kristal yüzeyi ile yönetici masaları ve kurumsal ofisler için tercih edilen prestijli promosyon masa sümeni ürünlerinden biridir.",

  longDesc: `
Promosyon kristal masa seti KMS-130 modeli şık ve modern tasarımı ile kurumsal masaüstü promosyon ürünleri arasında yer almaktadır. Kristal görünümlü yapısı sayesinde ofis masalarında hem dekoratif hem de işlevsel bir kullanım sunar.

Promosyon masa sümeni ve masa setleri özellikle yönetici masaları, kurumsal ofisler ve prestijli şirket hediyeleri arasında tercih edilen promosyon ürünleri arasında yer almaktadır.

KMS-130 modeli 15 x 40 cm ölçüsünde tasarlanmıştır ve masa üzerinde düzenli bir kullanım sağlar. Ürün üzerine firmanıza ait logo veya marka baskısı uygulanarak güçlü bir marka tanıtım aracı haline getirilebilir.

Promosyon masa setleri özellikle bankalar, finans kuruluşları, holdingler ve kurumsal şirketler tarafından yönetici masa hediyesi veya kurumsal promosyon ürünü olarak tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Kristal Masa Seti  
Kategori: Masa Sümeni  
Ürün Ölçüsü: 15 x 40 cm  

BASKI BİLGİLERİ

Baskı Alanı: 60 x 150 mm  
Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Yönetici masaüstü ürünleri  
Ofis masa sümeni  
Kurumsal hediye ürünleri  
Prestij promosyon ürünleri  

RENK VE STOK BİLGİSİ

Promosyon kristal masa setleri farklı üretim seçenekleri ve baskı uygulamaları ile hazırlanabilmektedir. Sipariş öncesinde stok ve üretim detaylarının teyit edilmesi önerilmektedir.

Promosyon masa seti siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p132",
  slug: "promosyon-12li-hesap-makinesi-hm-100",
  title: "Promosyon 12'li Hesap Makinesi HM-100 | Logo Baskılı Promosyon Hesap Makinesi",

  category: "Hesap Makineleri",

  image: "/products/promosyon-12li-hesap-makinesi-hm-100.jpg",

  shortDesc:
    "Promosyon 12'li hesap makinesi HM-100 modeli geniş ekranı ve logo baskıya uygun yüzeyi ile ofis, muhasebe ve kurumsal promosyon kullanımı için tercih edilen pratik hesap makinesi modellerinden biridir.",

  longDesc: `
Promosyon 12'li hesap makinesi HM-100 modeli ofis ve muhasebe kullanımı için tasarlanmış pratik promosyon ürünleri arasında yer almaktadır. Günlük hesaplama işlemlerini kolaylaştıran yapısı sayesinde ofis ortamlarında sık kullanılan promosyon ürünlerinden biridir.

Promosyon hesap makineleri özellikle finans kuruluşları, muhasebe firmaları, bankalar ve kurumsal şirketler tarafından tercih edilen promosyon ürünleri arasında yer almaktadır.

HM-100 modeli 12 haneli hesaplama kapasitesine sahip olup geniş tuş yapısı sayesinde rahat bir kullanım sunar. Masaüstü kullanım için uygun tasarımı sayesinde ofislerde uzun süre kullanılabilir.

Promosyon hesap makinesi üzerine firmanıza ait logo veya marka baskısı uygulanarak ürün güçlü bir reklam ve marka tanıtım aracı haline getirilebilir. Bu sayede marka görünürlüğü uzun süreli olarak sağlanabilir.

Promosyon hesap makineleri özellikle muhasebe ofisleri, finans şirketleri, bankalar ve kurumsal işletmeler tarafından tercih edilen etkili promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Hesap Makinesi  
Kategori: Hesap Makineleri  
Hane Sayısı: 12 Hane  
Ürün Ölçüsü: 23 x 10 x 12 cm  

BASKI BİLGİLERİ

Baskı Alanı: 30 x 14 mm  
Baskı Türü: Serigrafi / Tampon Baskı  

KOLİ BİLGİSİ

Kolideki Adet: 80  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve muhasebe promosyonları  
Finans ve banka promosyonları  
Fuar ve etkinlik promosyonları  
Kurumsal marka tanıtımı  

RENK VE STOK BİLGİSİ

Promosyon hesap makinesi ürünlerinde renk ve üretim seçenekleri dönemsel olarak değişiklik gösterebilir. Sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon hesap makinesi siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p133",
  slug: "promosyon-porselen-kupa-330ml-pk-100",
  title: "Promosyon Porselen Kupa PK-100 | Logo Baskılı 330 ml Promosyon Kupa",

  category: "Kupa",

  image: "/products/promosyon-porselen-kupa-pk-100.jpg",

  shortDesc:
    "Promosyon porselen kupa PK-100 modeli 330 ml kapasitesi, süblimasyon baskıya uygun yüzeyi ve dayanıklı porselen yapısı ile kurumsal promosyon kupa modelleri arasında en çok tercih edilen ürünlerden biridir.",

  longDesc: `
Promosyon porselen kupa PK-100 modeli günlük kullanım için tasarlanmış ve kurumsal promosyon ürünleri arasında en çok tercih edilen kupa modellerinden biridir. 330 ml hacmi sayesinde çay, kahve ve diğer sıcak içeceklerin tüketimi için ideal bir kullanım sunar.

Promosyon kupa ürünleri özellikle ofislerde, şirketlerde, fuarlarda ve marka tanıtım kampanyalarında kullanılan etkili promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sürekli kullanılan bir ürün olması nedeniyle marka görünürlüğünü uzun süre artıran promosyon ürünlerinden biridir.

PK-100 modeli kaliteli porselen malzemeden üretilmiştir. Kupa yüzeyi süblimasyon (dijital) baskı için uygundur ve firmanıza ait logo veya tasarım kupa üzerine yüksek kaliteli şekilde uygulanabilir.

Promosyon porselen kupalar özellikle kurumsal firmalar, kafeler, restoranlar, eğitim kurumları ve marka tanıtımı yapan şirketler tarafından tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Porselen Kupa  
Kategori: Kupa  
Malzeme: Porselen  
Yükseklik: 95 mm  
Çap: 80 mm  
Hacim: 330 ml  
Ağırlık: 340 gr  

BASKI BİLGİLERİ

Baskı Türü: Süblimasyon (Dijital Baskı)  
Baskı Alanı: 260 x 95 mm  
Minimum Sipariş: 45 Adet  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve çalışan hediyeleri  
Fuar ve etkinlik promosyonları  
Kafe ve restoran promosyonları  
Marka tanıtım ürünleri  

KULLANIM NOTU

Kupalar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum tüm baskılı kupa ürünlerinde görülebilen doğal bir kullanım sonucudur.

RENK VE STOK BİLGİSİ

Promosyon porselen kupalar farklı baskı tasarımları ile hazırlanabilmektedir. Sipariş öncesinde stok ve üretim detaylarının teyit edilmesi önerilmektedir.

Promosyon kupa siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı tasarımı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p134",
  slug: "promosyon-ham-bez-canta-hbc-150",
  title: "Promosyon Ham Bez Çanta HBÇ-150 | Logo Baskılı Ham Bez Çanta",

  category: "Ham Bez & Tela Çanta",

  image: "/products/promosyon-ham-bez-canta-hbc-150.jpg",

  shortDesc:
    "Promosyon ham bez çanta HBÇ-150 modeli 35 x 40 cm ölçüsü, 140 gr ham bez kumaşı ve logo baskıya uygun yüzeyi ile fuar, etkinlik ve kurumsal promosyon kullanımı için tercih edilen çevre dostu promosyon çanta modellerinden biridir.",

  longDesc: `
Promosyon ham bez çanta HBÇ-150 modeli çevre dostu yapısı ve dayanıklı kumaşı ile kurumsal promosyon ürünleri arasında en çok tercih edilen çanta modellerinden biridir. Günlük kullanım için uygun yapısı sayesinde fuarlar, etkinlikler ve alışveriş çantası olarak kullanılabilir.

Promosyon ham bez çantalar özellikle markaların çevre dostu promosyon ürünleri arasında yer almaktadır. Tekrar kullanılabilir yapısı sayesinde hem çevreye katkı sağlar hem de marka görünürlüğünü uzun süre artırır.

HBÇ-150 modeli 42 tel ham bez kumaştan üretilmiş olup 140 gr kumaş gramajına sahiptir. Dayanıklı yapısı sayesinde uzun süreli kullanım sunar.

Promosyon bez çanta üzerine firmanıza ait logo veya tasarım ofset baskı, dijital baskı veya DTF transfer baskı yöntemleri ile uygulanabilir. Bu sayede ürün hem kullanışlı bir çanta hem de güçlü bir marka tanıtım aracı haline gelir.

Promosyon bez çantalar özellikle fuarlar, organizasyonlar, mağazalar, kurumsal etkinlikler ve reklam kampanyalarında tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Ham Bez Çanta  
Kategori: Ham Bez & Tela Çanta  
Ürün Ölçüsü: 35 x 40 cm  
Kulp Askı Boyu: 70 cm  
Kumaş Türü: 42 Tel Ham Bez  
Kumaş Gramajı: 140 gr  

BASKI BİLGİLERİ

Baskı Türleri: Ofset Dijital Baskı / DTF Transfer Baskı  
Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Çevre dostu promosyon ürünleri  
Mağaza ve alışveriş çantaları  
Marka tanıtım kampanyaları  

RENK VE STOK BİLGİSİ

Promosyon bez çanta ürünlerinde kumaş rengi ve üretim seçenekleri dönemsel olarak değişiklik gösterebilir. Sipariş öncesinde stok bilgisi alınması önerilmektedir.

Promosyon ham bez çanta siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p135",
  slug: "promosyon-makam-bayragi-byk-100",
  title: "Promosyon Makam Bayrağı BYK-100 | Logo Baskılı Makam Bayrağı",

  category: "Bayraklar",

  image: "/products/promosyon-makam-bayragi-byk-100.jpg",

  shortDesc:
    "Promosyon makam bayrağı BYK-100 modeli kurumsal ofisler, resmi kurumlar ve şirketler için üretilen logo baskılı makam bayrağı çeşitleri arasında tercih edilen prestijli promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon makam bayrağı BYK-100 modeli kurumsal firmalar, resmi kurumlar ve organizasyonlar için üretilen prestijli promosyon ürünleri arasında yer almaktadır. Şirket ofislerinde, makam odalarında ve resmi toplantı alanlarında kullanılan makam bayrakları kurumsal kimliği temsil eden önemli ürünlerden biridir.

Promosyon makam bayrakları özellikle şirket merkezlerinde, yönetici odalarında, resmi kurumlarda ve kurumsal etkinliklerde kullanılmaktadır. Firmanıza ait logo veya kurum amblemi bayrak üzerine uygulanarak marka kimliğini güçlendiren profesyonel bir görünüm sağlar.

Makam bayrağı ürünleri hem dekoratif hem de kurumsal temsil açısından önemli bir yere sahiptir. Kaliteli kumaş ve dayanıklı üretim yapısı sayesinde uzun süreli kullanım sunar.

Promosyon makam bayrakları özellikle şirketler, holdingler, kamu kurumları, eğitim kurumları ve resmi organizasyonlar tarafından tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Makam Bayrağı  
Kategori: Bayraklar  
Kullanım: Makam Odaları / Kurumsal Ofisler  
Malzeme: Bayrak Kumaşı  

BASKI BİLGİLERİ

Baskı Türü: Dijital veya Serigraf Baskı  
Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Makam odası bayrakları  
Şirket ofisleri  
Resmi kurumlar  
Kurumsal etkinlik alanları  

RENK VE STOK BİLGİSİ

Promosyon makam bayrakları kurum logosu ve tasarımına göre özel üretim yapılabilmektedir. Baskı tasarımı ve üretim süresi sipariş aşamasında belirlenmektedir.

Promosyon makam bayrağı siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p136",
  slug: "promosyon-kutulu-sarj-kablo-seti-kbl-350",
  title: "Promosyon Kutulu Şarj Kablo Seti KBL-350 | Logo Baskılı Şarj Kablosu Seti",

  category: "Teknolojik Ürünler",

  image: "/products/promosyon-kutulu-sarj-kablo-seti-kbl-350.jpg",

  shortDesc:
    "Promosyon kutulu şarj kablo seti KBL-350 modeli pratik taşıma kutusu, çoklu bağlantı kablo yapısı ve logo baskıya uygun yüzeyi ile kurumsal promosyon teknolojik ürünler arasında tercih edilen kullanışlı promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon kutulu şarj kablo seti KBL-350 modeli mobil cihaz kullanıcıları için tasarlanmış pratik ve kullanışlı teknolojik promosyon ürünleri arasında yer almaktadır. Kompakt kutu tasarımı sayesinde kolay taşınabilir ve günlük kullanım için idealdir.

Promosyon teknolojik ürünler özellikle kurumsal firmalar tarafından marka tanıtımı için tercih edilen modern promosyon ürünleri arasında yer almaktadır. Günlük hayatta sık kullanılan teknolojik aksesuarlar marka görünürlüğünü uzun süre artıran etkili promosyon ürünleri sunar.

KBL-350 modeli şık ve koruyucu kutu tasarımına sahiptir. Şarj kablo seti farklı mobil cihazlarla uyumlu bağlantı seçenekleri sunarak pratik bir kullanım sağlar.

Promosyon şarj kablo seti üzerine firmanıza ait logo veya marka baskısı uygulanarak ürün güçlü bir reklam ve kurumsal tanıtım aracı haline getirilebilir.

Promosyon teknolojik ürünler özellikle fuarlar, kurumsal etkinlikler, şirket kampanyaları ve müşteri promosyonları için tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Şarj Kablo Seti  
Kategori: Teknolojik Ürünler  
Ürün Modeli: KBL-350  
Kutu Tipi: Taşıma Kutulu  

RENK SEÇENEKLERİ

Siyah  
Beyaz  

BASKI BİLGİLERİ

Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Teknolojik promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Müşteri promosyon hediyeleri  
Marka tanıtım ürünleri  

RENK VE STOK BİLGİSİ

Promosyon şarj kablo setleri farklı renk seçenekleri ile üretilebilmektedir. Sipariş öncesinde stok durumunun teyit edilmesi önerilmektedir.

Promosyon teknolojik ürün siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p137",
  slug: "promosyon-kartvizitlik-kv-100",
  title: "Promosyon Kartvizitlik KV-100 | Logo Baskılı Termo Deri Kartvizitlik",

  category: "Kartvizitlik",

  image: "/products/promosyon-kartvizitlik-kv-100.jpg",

  shortDesc:
    "Promosyon kartvizitlik KV-100 modeli termo deri kapak tasarımı ve logo baskıya uygun yüzeyi ile kurumsal promosyon kartvizitlik ürünleri arasında tercih edilen şık ve kullanışlı ofis aksesuarlarından biridir.",

  longDesc: `
Promosyon kartvizitlik KV-100 modeli iş dünyasında sık kullanılan kurumsal promosyon ürünleri arasında yer almaktadır. Termo deri kapak tasarımı sayesinde hem şık bir görünüm sunar hem de kartvizitlerin düzenli şekilde saklanmasını sağlar.

Promosyon kartvizitlik ürünleri özellikle şirket yöneticileri, satış ekipleri ve kurumsal çalışanlar tarafından tercih edilen ofis aksesuarları arasında yer almaktadır. Kartvizitlerin düzenli şekilde taşınmasını ve sunulmasını kolaylaştırır.

KV-100 modeli termo deri malzemeden üretilmiştir. Dayanıklı yapısı sayesinde uzun süreli kullanım sağlar ve profesyonel bir görünüm sunar.

Promosyon kartvizitlik üzerine firmanıza ait logo veya marka baskısı uygulanarak ürün güçlü bir reklam ve kurumsal tanıtım aracı haline getirilebilir.

Promosyon kartvizitlik ürünleri özellikle fuarlar, iş toplantıları, kurumsal etkinlikler ve müşteri görüşmelerinde tercih edilen promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Kartvizitlik  
Kategori: Kartvizitlik  
Malzeme: Termo Deri  

BASKI BİLGİLERİ

Baskı Türü: Lazer / Gofre / Dijital Baskı  
Logo Baskı: Kurumsal logo baskıya uygundur  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis masaüstü aksesuarları  
İş toplantıları ve fuarlar  
Kurumsal marka tanıtımı  
Yönetici ve çalışan promosyonları  

RENK VE STOK BİLGİSİ

Promosyon kartvizitlik ürünlerinde renk ve üretim seçenekleri dönemsel olarak değişiklik gösterebilir. Sipariş öncesinde stok durumunun teyit edilmesi önerilmektedir.

Promosyon kartvizitlik siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p138",
  slug: "promosyon-katlanir-ayna-ay-100",
  title: "Promosyon Katlanır Ayna AY-100 | Logo Baskılı Promosyon Ayna",

  category: "Ayna ve Deri Kartlıklar",

  image: "/products/promosyon-katlanir-ayna-ay-100.jpg",

  shortDesc:
    "Promosyon katlanır ayna AY-100 modeli kompakt tasarımı ve logo baskıya uygun yüzeyi ile kozmetik ve kurumsal promosyon ürünleri arasında tercih edilen pratik promosyon ayna modellerinden biridir.",

  longDesc: `
Promosyon katlanır ayna AY-100 modeli günlük kullanım için tasarlanmış pratik promosyon ürünleri arasında yer almaktadır. Katlanabilir yapısı sayesinde çantada kolay taşınabilir ve ihtiyaç duyulduğunda hızlı şekilde kullanılabilir.

Promosyon ayna ürünleri özellikle kozmetik firmaları, güzellik merkezleri, kuaförler ve kurumsal promosyon kampanyalarında tercih edilen etkili promosyon ürünleri arasında yer almaktadır.

AY-100 modeli kompakt ve dayanıklı yapıya sahiptir. Katlanır tasarımı sayesinde hem aynayı korur hem de kullanım sırasında rahat bir deneyim sunar.

Promosyon katlanır ayna üzerine firmanıza ait logo veya marka baskısı uygulanarak ürün güçlü bir reklam ve marka tanıtım aracı haline getirilebilir. Günlük kullanımda sık kullanılan bir ürün olduğu için marka görünürlüğünü uzun süre artırabilir.

Promosyon aynalar özellikle kozmetik promosyonları, kadınlara yönelik promosyon ürünleri, fuar etkinlikleri ve marka tanıtım kampanyalarında tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Katlanır Ayna  
Kategori: Ayna ve Deri Kartlıklar  
Model: AY-100  
Tasarım: Katlanabilir  

BASKI BİLGİLERİ

Logo Baskı: Kurumsal logo baskıya uygundur  
Baskı Türü: Serigraf / Dijital Baskı uygulanabilir  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Kozmetik promosyonları  
Fuar ve etkinlik promosyonları  
Güzellik merkezi promosyonları  
Marka tanıtım ürünleri  

RENK VE STOK BİLGİSİ

Promosyon katlanır ayna ürünlerinde renk ve üretim seçenekleri dönemsel olarak değişiklik gösterebilir. Sipariş öncesinde stok durumunun teyit edilmesi önerilmektedir.

Promosyon katlanır ayna siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p139",
  slug: "promosyon-cok-amacli-caki-seti-7-fonksiyonlu-ck-100",
  title: "Promosyon Çok Amaçlı Çakı Seti 7 Fonksiyonlu ÇK-100 | Logo Baskılı Çakı",

  category: "Çakı, Fener ve Tornavida Seti",

  image: "/products/promosyon-cok-amacli-caki-seti-ck-100.jpg",

  shortDesc:
    "Promosyon çok amaçlı çakı seti ÇK-100 modeli 7 fonksiyonlu yapısı, kompakt tasarımı ve lazer baskıya uygun yüzeyi ile kurumsal promosyon kampanyalarında tercih edilen pratik çok amaçlı araç setlerinden biridir.",

  longDesc: `
Promosyon çok amaçlı çakı seti ÇK-100 modeli günlük kullanım ve outdoor aktiviteleri için tasarlanmış pratik promosyon ürünleri arasında yer almaktadır. Kompakt yapısı sayesinde kolay taşınabilir ve farklı kullanım alanları sunar.

Promosyon çok amaçlı çakı ürünleri özellikle kamp aktiviteleri, outdoor etkinlikler, promosyon kampanyaları ve kurumsal tanıtım faaliyetlerinde tercih edilen fonksiyonel promosyon ürünleri arasında yer almaktadır.

ÇK-100 modeli 7 farklı fonksiyona sahip çok amaçlı bir araçtır. Günlük kullanımda küçük tamirat işlemleri ve pratik ihtiyaçlar için kullanılabilir.

Promosyon çakı seti üzerine firmanıza ait logo veya marka baskısı lazer baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir araç hem de etkili bir marka tanıtım ürünü haline gelir.

Promosyon çok amaçlı çakı ürünleri özellikle outdoor etkinlikler, fuarlar, promosyon kampanyaları ve marka tanıtım organizasyonlarında tercih edilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Çok Amaçlı Çakı  
Kategori: Çakı, Fener ve Tornavida Seti  
Fonksiyon Sayısı: 7 Fonksiyon  
Ürün Ölçüsü: 88 x 25 mm  

BASKI BİLGİLERİ

Baskı Türü: Lazer Baskı  
Baskı Alanı: 30 x 10 mm  

KOLİ BİLGİSİ

Koli / Kutu Adedi: 1000 / 100  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Outdoor ve kamp promosyonları  
Fuar ve etkinlik promosyonları  
Marka tanıtım kampanyaları  
Pratik çok amaçlı araç ürünleri  

RENK VE STOK BİLGİSİ

Promosyon çakı ürünlerinde renk ve üretim seçenekleri dönemsel olarak değişiklik gösterebilir. Sipariş öncesinde stok durumunun teyit edilmesi önerilmektedir.

Promosyon çakı seti siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı alanı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p140",
  slug: "promosyon-oto-kokusu-ok-750",
  title: "Promosyon Oto Kokusu OK-750 | Logo Baskılı Oto Kokusu",

  category: "İmalat Ürünler",

  image: "/products/promosyon-oto-kokusu-ok-750.jpg",

  shortDesc:
    "Promosyon oto kokusu OK-750 modeli özel kesim tasarımı, ofset baskı imkanı ve farklı koku seçenekleri ile araç içi kullanım için tercih edilen etkili promosyon reklam ürünlerinden biridir.",

  longDesc: `
Promosyon oto kokusu OK-750 modeli araç içi kullanım için tasarlanmış etkili promosyon ürünleri arasında yer almaktadır. Araç içinde uzun süre kullanılan bir ürün olması sayesinde marka görünürlüğünü artıran güçlü reklam araçlarından biridir.

Promosyon oto kokuları özellikle otomotiv firmaları, servisler, sigorta şirketleri, oto galeriler ve kurumsal tanıtım kampanyalarında tercih edilen promosyon ürünleri arasında yer almaktadır.

OK-750 modeli özel kesim tasarımına sahiptir ve firmanıza ait logo veya reklam tasarımı ürün üzerine ofset baskı yöntemi ile uygulanabilir. Bu sayede ürün hem kullanışlı bir araç aksesuarı hem de etkili bir reklam aracı haline gelir.

Promosyon oto kokuları araç aynasına kolayca asılabilen yapısı sayesinde pratik kullanım sunar. Farklı koku seçenekleri ile kullanıcıya hoş bir araç içi deneyim sağlar.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Oto Kokusu  
Kategori: İmalat Ürünler  
Ürün Ölçüsü: 14 cm  
Baskı Türü: Ofset Baskı  
Kesim: Özel Kesim  

SİPARİŞ BİLGİSİ

Minimum Sipariş: 1000 Adet  
Fiyata Ofset Baskı Dahildir  

KOKU SEÇENEKLERİ

FRESH KOKULAR  
Okyanus  
Yeni Araba  
Lavanta  
Bahar  

MEYVELİ KOKULAR  
Sakız  
Kavun  
Elma  
Karışık Meyve  
Egzotik Meyve  
Limon  
Çilek  
Vanilya  

PARFÜM KOKULARI  
Odunsu  
Cool Water  
Yaz Güneşi  
Wogo  
Thor  
Lucy  

NOT

Beyaz zeminli baskı tasarımlarında Lavanta, Portakal, Çam, Çilek, Kavun ve Limon kokuları önerilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Otomotiv promosyon ürünleri  
Oto servis ve galeriler  
Fuar ve etkinlik promosyonları  
Marka tanıtım kampanyaları  

RENK VE STOK BİLGİSİ

Promosyon oto kokusu ürünleri özel tasarım ve baskı seçenekleri ile üretilebilmektedir. Sipariş öncesinde üretim ve stok detaylarının teyit edilmesi önerilmektedir.

Promosyon oto kokusu siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı tasarımı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p141",
  slug: "promosyon-porselen-kupa-280ml-pk-110",
  title: "Promosyon Porselen Kupa PK-110 | 280 ml Logo Baskılı Kupa",

  category: "Kupa",

  image: "/products/promosyon-porselen-kupa-pk-110.jpg",

  shortDesc:
    "Promosyon porselen kupa PK-110 modeli 280 ml hacmi, çift yön renkli süblimasyon baskı imkanı ve dayanıklı porselen yapısı ile kurumsal promosyon kupa modelleri arasında tercih edilen kullanışlı promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon porselen kupa PK-110 modeli günlük kullanım için tasarlanmış kurumsal promosyon ürünleri arasında yer almaktadır. 280 ml hacmi sayesinde çay, kahve ve diğer sıcak içeceklerin tüketimi için ideal bir kullanım sunar.

Promosyon kupalar özellikle ofislerde, şirketlerde, fuarlarda ve marka tanıtım kampanyalarında kullanılan en etkili promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen bir ürün olduğu için marka görünürlüğünü uzun süre artırır.

PK-110 modeli kaliteli porselen malzemeden üretilmiştir. Kupa yüzeyi süblimasyon (dijital) baskı için uygundur ve firmanıza ait logo veya tasarım kupa üzerine yüksek kaliteli şekilde uygulanabilir.

Bu modelde çift yön renkli baskı uygulanabilmektedir ve belirtilen fiyata baskı dahildir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Porselen Kupa  
Kategori: Kupa  
Malzeme: Porselen  
Yükseklik: 9,3 cm  
Çap: 8 cm  
Hacim: 280 ml  
Ağırlık: 290 gr  

BASKI BİLGİLERİ

Baskı Türü: Süblimasyon (Dijital Baskı)  
Baskı Özelliği: Çift yön renkli baskı  
Minimum Sipariş: 45 Adet  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve çalışan hediyeleri  
Fuar ve etkinlik promosyonları  
Kafe ve restoran promosyonları  
Marka tanıtım kampanyaları  

KULLANIM NOTU

Kupalar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum tüm baskılı kupa ürünlerinde görülebilen doğal bir kullanım sonucudur.

RENK VE STOK BİLGİSİ

Promosyon kupalar farklı baskı tasarımları ile üretilebilmektedir. Sipariş öncesinde stok ve üretim detaylarının teyit edilmesi önerilmektedir.

Promosyon kupa siparişleri toplu üretim olarak hazırlanmakta olup minimum sipariş adedi, baskı tasarımı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p142",
  slug: "promosyon-kalem-seti-ks-110",
  title: "Promosyon Kalem Seti KS-110 | Logo Baskılı Kurumsal Kalem Seti",
  category: "Kalem Setleri",
  image: "/products/promosyon-kalem-seti-ks-110.jpg",

  shortDesc:
    "Promosyon kalem seti KS-110 modeli şık kutu tasarımı, lazer baskıya uygun metal kalemi ve kurumsal kullanıma uygun yapısı ile firma promosyonlarında tercih edilen kalem seti modellerinden biridir.",

  longDesc: `
Promosyon kalem seti KS-110 modeli kurumsal firmalar, etkinlikler ve marka tanıtım kampanyaları için tercih edilen şık tasarımlı promosyon kalem setleri arasında yer almaktadır.

Metal gövdeli kalemi ve zarif kutu tasarımı sayesinde hem kullanışlı hem de prestijli bir promosyon ürünü olarak kullanılabilir. Özellikle kurumsal hediye, fuar promosyonu, şirket tanıtımı ve özel etkinliklerde marka imajını güçlendiren promosyon ürünleri arasında yer almaktadır.

Kalem gövdesi lazer baskıya uygundur ve firmanıza ait logo veya marka bilgisi kalem üzerine kalıcı şekilde uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Kalem Seti  
Kategori: Kalem Setleri  
Kalem Ölçüsü: 137 x Ø11 mm  
Kutu Ölçüsü: 193 x 85 mm  
Refil Rengi: Mavi  
Kolideki Adet: 50  

BASKI BİLGİLERİ

Baskı Türü: Lazer Baskı  
Baskı Alanı: 50 x 5,5 mm  
Kutu Baskısı: Uygun Değildir  

RENK SEÇENEKLERİ

Füme  
Siyah (Siyah Klips)

Not: Renk seçenekleri ve stok durumu dönemsel olarak değişebilmektedir. Sipariş öncesinde güncel stok ve üretim bilgileri için teklif talebinde bulunabilirsiniz.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Firma tanıtım kampanyaları  
Fuar ve etkinlik promosyonları  
Kurumsal hediye ürünleri  
Ofis ve çalışan hediyeleri  

Promosyon kalem seti siparişleri toplu üretim şeklinde hazırlanmakta olup baskı tasarımı, renk seçimi ve teslim süresi gibi detaylar teklif aşamasında netleştirilmektedir.
`
},
{
  id: "p143",
  slug: "promosyon-kalem-seti-ks-120",
  title: "Promosyon Kalem Seti KS-120 | Logo Baskılı Kurumsal Kalem Seti",
  category: "Kalem Setleri",
  image: "/products/promosyon-kalem-seti-ks-120.jpg",

  shortDesc:
    "Promosyon kalem seti KS-120 modeli şık kutu tasarımı, lazer baskıya uygun metal kalemi ve kurumsal hediye olarak tercih edilen prestijli promosyon kalem setlerinden biridir.",

  longDesc: `
Promosyon kalem seti KS-120 modeli kurumsal firmalar, fuarlar, toplantılar ve özel etkinliklerde kullanılmak üzere tasarlanmış şık ve kullanışlı promosyon ürünleri arasında yer almaktadır.

Metal gövdeli kalemi ve özel tasarımlı kutusu sayesinde hem prestijli bir kurumsal hediye hem de etkili bir marka tanıtım ürünü olarak tercih edilmektedir. Günlük kullanımda sık kullanılan kalem ürünleri marka görünürlüğünü artıran en etkili promosyon ürünleri arasında yer almaktadır.

Kalem gövdesi lazer baskıya uygundur ve firmanıza ait logo veya marka bilgisi kalem üzerine kalıcı şekilde uygulanabilmektedir. Kutu kısmı ise serigraf baskı için uygundur ve kurumsal tasarımlar uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Kalem Seti  
Kategori: Kalem Setleri  
Kalem Ölçüsü: 138 x Ø13 mm  
Kutu Ölçüsü: 192 x 97 mm  
Refil Rengi: Mavi  
Kolideki Adet: 50  

BASKI BİLGİLERİ

Kalem Baskı Türü: Lazer Baskı  
Kalem Baskı Alanı: 50 x 5,5 mm  

Kutu Baskı Türü: Serigraf Baskı  
Kutu Baskı Alanı: 150 x 65 mm  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Firma tanıtım kampanyaları  
Fuar ve etkinlik promosyonları  
Kurumsal hediye ürünleri  
Ofis ve çalışan hediyeleri  

Promosyon kalem seti siparişleri toplu üretim olarak hazırlanmaktadır. Baskı tasarımı, renk seçenekleri ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p144",
  slug: "promosyon-renkli-yapiskanli-notluk-9x14-gd-190",
  title: "Promosyon Renkli Yapışkanlı Notluk GD-190 | 9x14 cm Logo Baskılı Notluk",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-renkli-yapiskanli-notluk-gd-190.jpg",

  shortDesc:
    "Promosyon renkli yapışkanlı notluk GD-190 modeli 9 x 14 cm ölçüsü, geri dönüşümlü kapak yapısı ve renkli yapışkanlı not kağıtları ile ofis ve kurumsal promosyon ürünleri arasında tercih edilen kullanışlı notluk modellerinden biridir.",

  longDesc: `
Promosyon renkli yapışkanlı notluk GD-190 modeli günlük ofis kullanımına uygun yapısı ve pratik not alma özelliği ile kurumsal promosyon ürünleri arasında sık tercih edilen ürünlerden biridir.

9 x 14 cm ölçülerine sahip olan bu model, geri dönüşümlü kapak yapısı ve içerisinde bulunan renkli yapışkanlı not kağıtları sayesinde hem çevre dostu hem de kullanışlı bir promosyon ürünüdür.

Promosyon notluklar özellikle ofislerde, toplantılarda, fuarlarda ve tanıtım etkinliklerinde markaların en çok tercih ettiği promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edildiği için marka görünürlüğünü uzun süre artırmaya yardımcı olur.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Yapışkanlı Notluk  
Kategori: Yapışkanlı Notluklar  
Ürün Ölçüsü: 9 x 14 cm  
Kapak: Geri Dönüşümlü Karton  
İçerik: Renkli Yapışkanlı Not Kağıtları  

RENK SEÇENEKLERİ

Yeşil  
Kraft  
Kırmızı  
Mavi  

Not: Renk seçenekleri ve stok durumu dönemsel olarak değişebilmektedir. Sipariş öncesinde güncel stok ve üretim bilgileri için teklif talebinde bulunabilirsiniz.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve masaüstü kullanım ürünleri  
Fuar ve etkinlik promosyonları  
Firma tanıtım kampanyaları  
Çalışan ve müşteri hediyeleri  

Promosyon yapışkanlı notluk siparişleri toplu üretim olarak hazırlanmaktadır. Baskı tasarımı, renk seçimi ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p145",
  slug: "promosyon-renkli-yapiskanli-notluk-14x10-gd-200",
  title: "Promosyon Renkli Yapışkanlı Notluk GD-200 | 14 x 10,7 cm Logo Baskılı Notluk",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-renkli-yapiskanli-notluk-gd-200.jpg",

  shortDesc:
    "Promosyon renkli yapışkanlı notluk GD-200 modeli 14 x 10,7 cm ölçüsü, geri dönüşümlü kağıt yapısı ve kalem tutucu özelliği ile ofis ve kurumsal promosyon ürünleri arasında tercih edilen kullanışlı notluk modellerinden biridir.",

  longDesc: `
Promosyon renkli yapışkanlı notluk GD-200 modeli pratik kullanım sunan yapısı ve çevre dostu tasarımı ile kurumsal promosyon ürünleri arasında yer almaktadır. 14 x 10,7 cm ölçülerine sahip olan bu model günlük not alma, hatırlatma ve ofis kullanımı için oldukça kullanışlıdır.

Ürün geri dönüşümlü kağıt malzemeden üretilmiştir ve çevre dostu promosyon ürünleri kategorisinde değerlendirilmektedir. İçerisinde bulunan yapışkanlı not kağıtları sayesinde hızlı not alma ve iş planlaması için ideal bir kullanım sunar.

Model üzerinde bulunan kalem tutucu bölmesi kullanım kolaylığı sağlar. Üründe bulunan kalem aksesuar olarak sunulmaktadır.

Promosyon yapışkanlı notluklar; ofislerde, toplantılarda, fuarlarda ve kurumsal etkinliklerde en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edildiği için marka görünürlüğünü uzun süre artırmaya yardımcı olur.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Yapışkanlı Notluk  
Kategori: Yapışkanlı Notluklar  
Ürün Ölçüsü: 14 x 10,7 cm  
Malzeme: Geri Dönüşümlü Kağıt  
Ek Özellik: Kalem Tutucu  

BASKI BİLGİLERİ

Baskı Türü: Serigraf Baskı, Dijital Baskı  

Not: Ürün üzerindeki kalem aksesuar olarak sunulmaktadır. Baskı tasarımı, renk seçenekleri ve üretim detayları sipariş öncesinde teklif aşamasında belirlenmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis masaüstü ürünleri  
Fuar ve etkinlik promosyonları  
Firma tanıtım kampanyaları  
Çalışan ve müşteri hediyeleri  

Promosyon yapışkanlı notluk siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar teklif aşamasında netleştirilmektedir.
`
},
{
  id: "p146",
  slug: "promosyon-renkli-yapiskanli-notluk-7x8-gd-220",
  title: "Promosyon Renkli Yapışkanlı Notluk GD-220 | Kraft Kapak Logo Baskılı Notluk",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-renkli-yapiskanli-notluk-gd-220.jpg",

  shortDesc:
    "Promosyon renkli yapışkanlı notluk GD-220 modeli sert kraft kapak yapısı, 80 gr yapışkanlı not kağıtları ve kompakt ölçüsü ile kurumsal promosyon ürünleri arasında tercih edilen pratik masaüstü notluk modellerinden biridir.",

  longDesc: `
Promosyon renkli yapışkanlı notluk GD-220 modeli kompakt tasarımı ve kullanışlı yapısı sayesinde ofislerde ve günlük kullanımda sık tercih edilen promosyon ürünleri arasında yer almaktadır.

Sert kraft kapak yapısı ürüne dayanıklılık kazandırırken çevre dostu bir görünüm de sunmaktadır. İçerisinde bulunan yapışkanlı not kağıtları hızlı not alma, hatırlatma ve planlama için pratik bir kullanım sağlar.

Promosyon yapışkanlı notluklar; fuarlar, şirket etkinlikleri, kurumsal tanıtımlar ve ofis kullanımı için tercih edilen en etkili promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık kullanılan ürünler olması nedeniyle marka görünürlüğünü uzun süre artırmaya yardımcı olur.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Yapışkanlı Notluk  
Kategori: Yapışkanlı Notluklar  
Ürün Ölçüsü: 7,8 x 8 x 2,5 cm  
Kağıt Gramajı: 80 gr  
Kağıt Adedi: 250 Yaprak  
Kapak: Sert Kraft  

BASKI BİLGİLERİ

Baskı Türü: Serigraf Baskı, Dijital Baskı  

Not: Baskı tasarımı, renk seçenekleri ve üretim detayları sipariş öncesinde teklif aşamasında belirlenmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis masaüstü ürünleri  
Fuar ve etkinlik promosyonları  
Firma tanıtım kampanyaları  
Çalışan ve müşteri hediyeleri  

Promosyon yapışkanlı notluk siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar teklif aşamasında netleştirilmektedir.
`
},
{
  id: "p147",
  slug: "promosyon-renkli-yapiskanli-notluk-5x21-gd-240",
  title: "Promosyon Renkli Yapışkanlı Notluk GD-240 | 5,6 x 21 cm Logo Baskılı Notluk",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-renkli-yapiskanli-notluk-gd-240.jpg",

  shortDesc:
    "Promosyon renkli yapışkanlı notluk GD-240 modeli 5,6 x 21 cm ölçüsü, kraft kapak tasarımı ve yapışkanlı not kağıtları ile kurumsal promosyon ürünleri arasında tercih edilen pratik masaüstü notluk modellerinden biridir.",

  longDesc: `
Promosyon renkli yapışkanlı notluk GD-240 modeli kompakt ve kullanışlı tasarımı ile ofislerde, toplantılarda ve günlük kullanımda tercih edilen promosyon ürünleri arasında yer almaktadır.

5,6 x 21 cm ölçülerine sahip olan bu model masaüstünde veya ajanda içinde kolay taşınabilir bir yapıya sahiptir. Ürün içerisinde bulunan yapışkanlı not kağıtları hızlı not alma ve hatırlatma amaçlı kullanım için idealdir.

Kraft kapak tasarımı ürüne doğal ve çevre dostu bir görünüm kazandırmaktadır. Kurumsal promosyon ürünleri arasında yer alan yapışkanlı notluklar marka tanıtımı için oldukça etkili ve uzun süre kullanılan promosyon ürünleri arasında yer almaktadır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Yapışkanlı Notluk  
Kategori: Yapışkanlı Notluklar  
Ürün Ölçüsü: 5,6 x 21 cm  
Kağıt Gramajı: 80 gr  
Kağıt Adedi: 25 Yaprak  
Kapak: Kraft  

BASKI BİLGİLERİ

Baskı Türü: Serigraf Baskı, Dijital Baskı  

RENK SEÇENEKLERİ

Lacivert  
Siyah  

Not: Renk seçenekleri ve stok durumu dönemsel olarak değişebilmektedir. Sipariş öncesinde güncel stok ve üretim bilgileri için teklif talebinde bulunabilirsiniz.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis masaüstü kullanım ürünleri  
Fuar ve etkinlik promosyonları  
Firma tanıtım kampanyaları  
Çalışan ve müşteri hediyeleri  

Promosyon yapışkanlı notluk siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p148",
  slug: "promosyon-renkli-yapiskanli-notluk-13x6-gd-250",
  title: "Promosyon Renkli Yapışkanlı Notluk GD-250 | 13 x 6,5 cm Logo Baskılı Notluk",
  category: "Yapışkanlı Notluklar",
  image: "/products/promosyon-renkli-yapiskanli-notluk-gd-250.jpg",

  shortDesc:
    "Promosyon renkli yapışkanlı notluk GD-250 modeli 13 x 6,5 cm ölçüsü ve geri dönüşümlü kapak tasarımı ile kurumsal promosyon ürünleri arasında tercih edilen pratik masaüstü notluk modellerinden biridir.",

  longDesc: `
Promosyon renkli yapışkanlı notluk GD-250 modeli kompakt yapısı ve çevre dostu tasarımı ile günlük kullanım için ideal promosyon ürünleri arasında yer almaktadır.

13 x 6,5 cm ölçülerine sahip olan bu model masaüstünde, ofislerde ve toplantılarda pratik not alma ihtiyacı için tercih edilmektedir. Geri dönüşümlü kapak yapısı sayesinde çevre dostu promosyon ürünleri kategorisinde değerlendirilmektedir.

Promosyon yapışkanlı notluklar; fuarlar, kurumsal etkinlikler, firma tanıtım kampanyaları ve ofis kullanımı için tercih edilen en etkili promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen ürünler olması nedeniyle marka görünürlüğünü uzun süre artırmaya yardımcı olur.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Yapışkanlı Notluk  
Kategori: Yapışkanlı Notluklar  
Ürün Ölçüsü: 13 x 6,5 cm  
Kapak: Geri Dönüşümlü Karton  

RENK SEÇENEKLERİ

Kraft  
Yeşil  

Not: Renk seçenekleri ve stok durumu dönemsel olarak değişebilmektedir. Sipariş öncesinde güncel stok ve üretim detayları için teklif talebinde bulunabilirsiniz.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis masaüstü kullanım ürünleri  
Fuar ve etkinlik promosyonları  
Firma tanıtım kampanyaları  
Çalışan ve müşteri hediyeleri  

Promosyon yapışkanlı notluk siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p149",
  slug: "promosyon-spiralli-notluk-gd-210",
  title: "Promosyon Spiralli Notluk GD-210 | Kraft Kapak Logo Baskılı Not Defteri",
  category: "Geri Dönüşümlü Ürünler",
  image: "/products/promosyon-spiralli-notluk-gd-210.jpg",

  shortDesc:
    "Promosyon spiralli notluk GD-210 modeli kraft kapak tasarımı, 150 sayfa çizgili iç yapısı ve kalem tutucu özelliği ile kurumsal promosyon ürünleri arasında tercih edilen kullanışlı notluk modellerinden biridir.",

  longDesc: `
Promosyon spiralli notluk GD-210 modeli hem kullanışlı tasarımı hem de çevre dostu kraft kapak yapısı ile kurumsal promosyon ürünleri arasında yer almaktadır. Günlük kullanım için uygun yapısı sayesinde ofislerde, toplantılarda ve eğitim alanlarında tercih edilen pratik bir notluk modelidir.

150 sayfa çizgili iç yapısı sayesinde not alma, planlama ve günlük kullanım için oldukça idealdir. Ürün üzerinde bulunan kalem tutucu bölmesi kullanım kolaylığı sağlar ve masaüstü düzenini destekler.

Promosyon notluklar; fuarlar, etkinlikler, kurumsal toplantılar ve marka tanıtım kampanyalarında en sık tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık kullanılan bir ürün olması sayesinde marka görünürlüğünü uzun süre artırır.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Spiralli Notluk  
Kategori: Geri Dönüşümlü Ürünler  
Ürün Ölçüsü: 11,5 x 15 cm  
Sayfa Sayısı: 150  
Kağıt Gramajı: 70 gr krem kağıt  
İç Yapı: Çizgili  
Cilt: Spiralli  
Kapak: Kraft  
Kalem Tutucu: Var  
Ek Özellik: Yapışkanlı Notluk Bölmesi  

BASKI BİLGİLERİ

Baskı Türü: UV Baskı, Serigraf Baskı  

Not: Renk seçenekleri ve stok durumu dönemsel olarak değişebilmektedir. Sipariş öncesinde güncel stok ve üretim detayları için teklif talebinde bulunabilirsiniz.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve masaüstü kullanım ürünleri  
Fuar ve etkinlik promosyonları  
Firma tanıtım kampanyaları  
Çalışan ve müşteri hediyeleri  

Promosyon spiralli notluk siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p150",
  slug: "promosyon-porselen-kupa-280ml-pk-120",
  title: "Promosyon Porselen Kupa PK-120 | 280 ml Logo Baskılı Kupa",
  category: "Kupa",
  image: "/products/promosyon-porselen-kupa-pk-120.jpg",

  shortDesc:
    "Promosyon porselen kupa PK-120 modeli 280 ml hacmi, dayanıklı porselen yapısı ve logo baskıya uygun geniş yüzeyi ile kurumsal promosyon ürünleri arasında tercih edilen klasik kupa modellerinden biridir.",

  longDesc: `
Promosyon porselen kupa PK-120 modeli günlük kullanım için tasarlanmış kurumsal promosyon ürünleri arasında yer almaktadır. 280 ml hacmi sayesinde çay, kahve ve diğer sıcak içeceklerin tüketimi için ideal bir kullanım sunar.

Promosyon kupalar; ofislerde, şirketlerde, fuarlarda ve marka tanıtım kampanyalarında en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen bir ürün olduğu için marka görünürlüğünü uzun süre artırmaya yardımcı olur.

PK-120 modeli kaliteli porselen malzemeden üretilmiştir. Kupa yüzeyi logo baskı uygulamaları için uygundur ve firmanıza ait tasarım kupa üzerine yüksek kaliteli şekilde uygulanabilir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Porselen Kupa  
Kategori: Kupa  
Malzeme: Porselen  
Yükseklik: 92 mm  
Çap: 78 mm  
Hacim: 280 ml  
Ağırlık: 300 gr  
Kupa Baskı Alanı: 250 x 92 mm  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve çalışan hediyeleri  
Fuar ve etkinlik promosyonları  
Kafe ve restoran promosyonları  
Marka tanıtım kampanyaları  

KULLANIM NOTU

Kupalar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum tüm baskılı kupa ürünlerinde görülebilen doğal bir kullanım sonucudur.

Promosyon kupa siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar teklif aşamasında belirlenmektedir.
`
},
{
  id: "p151",
  slug: "promosyon-seramik-kupa-330ml-sk-100",
  title: "Promosyon Seramik Kupa SK-100 | 330 ml Logo Baskılı Kupa",
  category: "Kupa",
  image: "/products/promosyon-seramik-kupa-sk-100.jpg",

  shortDesc:
    "Promosyon seramik kupa SK-100 modeli 330 ml hacmi, süblimasyon baskıya uygun yüzeyi ve dayanıklı seramik yapısı ile kurumsal promosyon kupa modelleri arasında tercih edilen kullanışlı promosyon ürünlerinden biridir.",

  longDesc: `
Promosyon seramik kupa SK-100 modeli günlük kullanım için tasarlanmış klasik kupa modelleri arasında yer almaktadır. 330 ml hacmi sayesinde çay, kahve ve diğer sıcak içeceklerin tüketimi için oldukça ideal bir kullanım sunar.

Promosyon kupalar; ofislerde, şirketlerde, fuarlarda ve tanıtım etkinliklerinde en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen bir ürün olması sayesinde marka görünürlüğünü uzun süre artırmaya yardımcı olur.

SK-100 modeli kaliteli seramik malzemeden üretilmiştir. Kupa yüzeyi süblimasyon (dijital) baskı için uygundur ve firmanıza ait logo veya tasarım kupa üzerine yüksek kaliteli şekilde uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Seramik Kupa  
Kategori: Kupa  
Malzeme: Seramik  
Yükseklik: 9,3 cm  
Çap: 8,1 cm  
Hacim: 330 ml  
Ağırlık: 260 gr  

BASKI BİLGİLERİ

Baskı Türü: Süblimasyon (Dijital Baskı)  
Minimum Sipariş: 45 Adet  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve çalışan hediyeleri  
Fuar ve etkinlik promosyonları  
Kafe ve restoran promosyonları  
Marka tanıtım kampanyaları  

KULLANIM NOTU

Kupalar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum baskılı kupa ürünlerinde doğal kullanım sonucu görülebilir.

Promosyon kupa siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p152",
  slug: "promosyon-6li-kahve-fincani-65ml-kvf-100",
  title: "Promosyon 6'lı Kahve Fincanı KVF-100 | 65 ml Logo Baskılı Fincan Seti",
  category: "Kupa",
  image: "/products/promosyon-6li-kahve-fincani-kvf-100.jpg",

  shortDesc:
    "Promosyon 6'lı kahve fincanı KVF-100 modeli 65 ml hacmi, porselen yapısı ve logo baskıya uygun yüzeyi ile kurumsal promosyon ürünleri arasında tercih edilen şık fincan seti modellerinden biridir.",

  longDesc: `
Promosyon 6'lı kahve fincanı KVF-100 modeli kurumsal firmalar, kafeler ve marka tanıtım kampanyaları için tercih edilen şık promosyon ürünleri arasında yer almaktadır.

Set içerisinde toplam 6 adet kahve fincanı bulunmaktadır. 65 ml hacme sahip olan bu model Türk kahvesi ve espresso gibi içecekler için ideal bir kullanım sunmaktadır.

Promosyon fincan setleri özellikle kafe, restoran, otel ve kurumsal tanıtım çalışmalarında sık tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen ürünler olması nedeniyle marka görünürlüğünü uzun süre artırmaya yardımcı olur.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Kahve Fincanı Seti  
Kategori: Kupa  
Set İçeriği: 6 Adet Fincan  
Minimum Sipariş: 1 Kutu  

Fincan Yükseklik: 57 mm  
Fincan Çap: 55 mm  
Hacim: 65 ml  
Ağırlık: 115 gr  

Baskı Alanı: 180 x 57 mm  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Kafe ve restoran promosyonları  
Otel ve turizm sektöründe kullanım  
Fuar ve etkinlik promosyonları  
Firma tanıtım kampanyaları  

KULLANIM NOTU

Fincanlar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum baskılı porselen ürünlerde doğal kullanım sonucu görülebilir.

Promosyon kahve fincanı siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p153",
  slug: "promosyon-6li-kahve-fincani-65ml-kvf-110",
  title: "Promosyon 6'lı Kahve Fincanı KVF-110 | 65 ml Logo Baskılı Fincan Seti",
  category: "Kupa",
  image: "/products/promosyon-6li-kahve-fincani-kvf-110.jpg",

  shortDesc:
    "Promosyon 6'lı kahve fincanı KVF-110 modeli 65 ml hacmi, porselen yapısı ve logo baskıya uygun yüzeyi ile kurumsal promosyon ürünleri arasında tercih edilen şık kahve fincanı setlerinden biridir.",

  longDesc: `
Promosyon 6'lı kahve fincanı KVF-110 modeli kurumsal firmalar, kafe ve restoranlar ile marka tanıtım kampanyaları için tercih edilen promosyon ürünleri arasında yer almaktadır.

Set içerisinde toplam 6 adet kahve fincanı bulunmaktadır. 65 ml hacme sahip olan bu model Türk kahvesi ve espresso gibi içecekler için ideal kullanım sunmaktadır.

Promosyon fincan setleri özellikle kafe, restoran, otel ve kurumsal etkinliklerde sık tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda tercih edilen ürünler olması nedeniyle marka görünürlüğünü uzun süre artırmaya yardımcı olur.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Kahve Fincanı Seti  
Kategori: Kupa  
Set İçeriği: 6 Adet Fincan  
Minimum Sipariş: 1 Kutu  

Fincan Yükseklik: 57 mm  
Fincan Çap: 55 mm  
Hacim: 65 ml  
Ağırlık: 115 gr  

Baskı Alanı: 180 x 57 mm  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Kafe ve restoran promosyonları  
Otel ve turizm sektöründe kullanım  
Fuar ve etkinlik promosyonları  
Firma tanıtım kampanyaları  

KULLANIM NOTU

Fincanlar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum baskılı porselen ürünlerde doğal kullanım sonucu görülebilir.

Promosyon kahve fincanı siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p154",
  slug: "promosyon-porselen-fincan-240ml-pk-130",
  title: "Promosyon Porselen Fincan PK-130 | 240 ml Logo Baskılı Mini Kupa",
  category: "Kupa",
  image: "/products/promosyon-porselen-fincan-pk-130.jpg",

  shortDesc:
    "Promosyon porselen fincan PK-130 modeli 240 ml hacmi, süblimasyon baskıya uygun yüzeyi ve dayanıklı porselen yapısı ile kurumsal promosyon ürünleri arasında tercih edilen kullanışlı fincan modellerinden biridir.",

  longDesc: `
Promosyon porselen fincan PK-130 modeli günlük kullanım için tasarlanmış şık ve kullanışlı promosyon ürünleri arasında yer almaktadır. 240 ml hacmi sayesinde kahve, nescafe ve diğer sıcak içeceklerin tüketimi için ideal bir kullanım sunar.

Promosyon fincan ve kupa modelleri; ofislerde, şirketlerde, fuarlarda ve marka tanıtım kampanyalarında en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen ürünler olması nedeniyle marka görünürlüğünü uzun süre artırmaya yardımcı olur.

PK-130 modeli kaliteli porselen malzemeden üretilmiştir. Kupa yüzeyi süblimasyon (dijital) baskı için uygundur ve firmanıza ait logo veya tasarım kupa üzerine yüksek kaliteli şekilde uygulanabilmektedir. Bu modelde çift yön renkli baskı yapılabilmektedir ve belirtilen fiyata baskı dahildir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Porselen Fincan  
Kategori: Kupa  
Malzeme: Porselen  
Yükseklik: 7,3 cm  
Çap: 8 cm  
Hacim: 240 ml  
Ağırlık: 230 gr  
Kupa Baskı Alanı: 250 x 73 mm  

BASKI BİLGİLERİ

Baskı Türü: Süblimasyon (Dijital Baskı)  
Baskı Özelliği: Çift yön renkli baskı  
Minimum Sipariş: 45 Adet  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve çalışan hediyeleri  
Fuar ve etkinlik promosyonları  
Kafe ve restoran promosyonları  
Marka tanıtım kampanyaları  

KULLANIM NOTU

Kupalar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum baskılı kupa ürünlerinde doğal kullanım sonucu görülebilir.

Promosyon fincan siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p155",
  slug: "promosyon-porselen-fincan-220ml-pk-140",
  title: "Promosyon Porselen Fincan PK-140 | 220 ml Logo Baskılı Kahve Fincanı",
  category: "Kupa",
  image: "/products/promosyon-porselen-fincan-pk-140.jpg",

  shortDesc:
    "Promosyon porselen fincan PK-140 modeli 220 ml hacmi, süblimasyon baskıya uygun yüzeyi ve dayanıklı porselen yapısı ile kurumsal promosyon ürünleri arasında tercih edilen şık kahve fincanı modellerinden biridir.",

  longDesc: `
Promosyon porselen fincan PK-140 modeli günlük kullanım için tasarlanmış kullanışlı ve şık promosyon ürünleri arasında yer almaktadır. 220 ml hacmi sayesinde kahve, nescafe ve diğer sıcak içeceklerin tüketimi için ideal bir kullanım sunar.

Promosyon fincan ve kupa modelleri; ofislerde, şirketlerde, fuarlarda ve marka tanıtım kampanyalarında en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen ürünler olması sayesinde marka görünürlüğünü uzun süre artırmaya yardımcı olur.

PK-140 modeli kaliteli porselen malzemeden üretilmiştir. Fincan yüzeyi süblimasyon (dijital) baskı için uygundur ve firmanıza ait logo veya tasarım fincan üzerine yüksek kaliteli şekilde uygulanabilmektedir. Bu modelde çift yön renkli baskı yapılabilmektedir ve belirtilen fiyata baskı dahildir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Porselen Fincan  
Kategori: Kupa  
Malzeme: Porselen  
Yükseklik: 7,2 cm  
Çap: 8 cm  
Hacim: 220 ml  
Ağırlık: 250 gr  
Kupa Baskı Alanı: 250 x 72 mm  

BASKI BİLGİLERİ

Baskı Türü: Süblimasyon (Dijital Baskı)  
Baskı Özelliği: Çift yön renkli baskı  
Minimum Sipariş: 45 Adet  

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve çalışan hediyeleri  
Fuar ve etkinlik promosyonları  
Kafe ve restoran promosyonları  
Marka tanıtım kampanyaları  

KULLANIM NOTU

Fincanlar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum baskılı porselen ürünlerde doğal kullanım sonucu görülebilir.

Promosyon porselen fincan siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p156",
  slug: "promosyon-2li-porselen-nescafe-fincani-260ml-pk-150",
  title: "Promosyon 2'li Porselen Nescafe Fincanı PK-150 | 260 ml Logo Baskılı Fincan Seti",
  category: "Kupa",
  image: "/products/promosyon-2li-porselen-nescafe-fincani-pk-150.jpg",

  shortDesc:
    "Promosyon 2'li porselen nescafe fincanı PK-150 modeli 260 ml hacmi, süblimasyon baskıya uygun yüzeyi ve dayanıklı porselen yapısı ile kurumsal promosyon ürünleri arasında tercih edilen şık fincan seti modellerinden biridir.",

  longDesc: `
Promosyon 2'li porselen nescafe fincanı PK-150 modeli kurumsal firmalar, kafe ve restoranlar ile marka tanıtım kampanyaları için tercih edilen promosyon ürünleri arasında yer almaktadır.

Set içerisinde toplam 2 adet porselen fincan bulunmaktadır. 260 ml hacme sahip olan bu model nescafe, latte, cappuccino ve diğer sıcak içeceklerin tüketimi için ideal kullanım sunmaktadır.

Promosyon fincan setleri; ofislerde, kurumsal etkinliklerde, fuarlarda ve marka tanıtım çalışmalarında en çok tercih edilen promosyon ürünleri arasında yer almaktadır. Günlük kullanımda sık tercih edilen ürünler olması nedeniyle marka görünürlüğünü uzun süre artırmaya yardımcı olur.

PK-150 modeli kaliteli porselen malzemeden üretilmiştir. Fincan yüzeyi süblimasyon (dijital) baskı için uygundur ve firmanıza ait logo veya tasarım fincan üzerine yüksek kaliteli şekilde uygulanabilmektedir. Bu modelde çift yön renkli baskı yapılabilmektedir ve belirtilen fiyata baskı dahildir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Porselen Nescafe Fincanı  
Kategori: Kupa  
Set İçeriği: 2 Adet Fincan  

Yükseklik: 7,5 cm  
Çap: 8 cm  
Hacim: 260 ml  
Ağırlık: 260 gr  
Baskı Alanı: 255 x 75 mm  

BASKI BİLGİLERİ

Baskı Türü: Süblimasyon (Dijital Baskı)  
Baskı Özelliği: Çift yön renkli baskı  
Minimum Sipariş: 24 Kutu  
Not: Tekli satış yapılmamaktadır.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Ofis ve çalışan hediyeleri  
Kafe ve restoran promosyonları  
Fuar ve etkinlik promosyonları  
Marka tanıtım kampanyaları  

KULLANIM NOTU

Fincanlar bulaşık makinesinde yıkamaya uygundur. Ancak bulaşık makinelerinde kullanılan kimyasallar nedeniyle kullanım sıklığına bağlı olarak zamanla yüzeyde çizilme veya baskıda solma gibi deformasyonlar oluşabilir. Bu durum baskılı porselen ürünlerde doğal kullanım sonucu görülebilir.

Promosyon fincan siparişleri toplu üretim olarak hazırlanmakta olup baskı tasarımı ve teslim süresi gibi detaylar sipariş öncesinde teklif aşamasında belirlenmektedir.
`
},
{
  id: "p157",
  slug: "promosyon-metal-versatil-kalem-07-mk-200",
  title: "Promosyon Metal Versatil Kalem 0.7 Uç MK-200 | Logo Baskılı Kurumsal Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-versatil-kalem-mk-200.jpg",

  shortDesc:
    "Promosyon metal versatil kalem MK-200 modeli 0.7 uç mekanizması, şık metal gövdesi ve lazer baskıya uygun yüzeyi ile kurumsal promosyon kalem modelleri arasında sık tercih edilen dayanıklı ve kaliteli bir promosyon ürünüdür.",

  longDesc: `
Promosyon metal versatil kalem MK-200 modeli şık tasarımı, dayanıklı metal gövdesi ve 0.7 uç mekanizması ile kurumsal promosyon ürünleri arasında en çok tercih edilen kalem modellerinden biridir.

Metal gövde yapısı sayesinde uzun süreli kullanım sunan bu model; ofislerde, kurumsal etkinliklerde, fuarlarda ve marka tanıtım çalışmalarında sık kullanılan promosyon kalem çeşitleri arasında yer almaktadır.

Promosyon kalemler günlük hayatta en çok kullanılan promosyon ürünleri arasında yer aldığı için marka bilinirliğini artırmak ve firmanızın sürekli görünür olmasını sağlamak açısından oldukça etkili bir tanıtım ürünüdür.

MK-200 modeli lazer baskıya uygundur ve firmanıza ait logo veya marka bilgileri kalem üzerine yüksek kaliteli şekilde uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Metal Versatil Kalem  
Kategori: Promosyon Kalem  
Kalem Tipi: 0.7 Uçlu Versatil Kalem  

Uzunluk: 140 mm  
Çap: Ø10 mm  

Baskı Türü: Lazer Baskı  
Baskı Alanı: 55 x 5,5 mm  

SİPARİŞ BİLGİSİ

Promosyon kalem siparişlerinde renk seçimi sipariş sırasında belirlenmektedir. Ürün toplu üretim olarak hazırlanmakta olup logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Ofis ve çalışan hediyeleri  
Marka tanıtım kampanyaları  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p158",
  slug: "promosyon-metal-kalem-mk-205",
  title: "Promosyon Metal Kalem MK-205 | Logo Baskılı Kurumsal Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-205.jpg",

  shortDesc:
    "Promosyon metal kalem MK-205 modeli rose gold aksam detayları, şık metal gövdesi ve lazer baskıya uygun yüzeyi ile kurumsal promosyon kalem modelleri arasında dikkat çeken kaliteli bir promosyon ürünüdür.",

  longDesc: `
Promosyon metal kalem MK-205 modeli şık tasarımı, rose gold metal aksam detayları ve dayanıklı gövde yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir.

Metal gövde yapısı sayesinde uzun süreli kullanım sunan bu model; ofislerde, kurumsal etkinliklerde, fuarlarda ve marka tanıtım çalışmalarında kullanılan promosyon kalem çeşitleri arasında yer almaktadır.

Promosyon kalemler günlük hayatta en sık kullanılan promosyon ürünleri arasında yer aldığı için marka bilinirliğini artırmak ve firmanızın uzun süre görünür olmasını sağlamak açısından oldukça etkili bir tanıtım ürünüdür.

MK-205 modeli lazer baskıya uygundur ve firmanıza ait logo veya marka bilgileri kalem üzerine yüksek kaliteli şekilde uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Metal Kalem  
Kategori: Promosyon Kalem  

Uzunluk: 140 mm  
Mürekkep Rengi: Mavi  

Baskı Türü: Lazer Baskı  

Tasarım Özelliği: Rose Gold Aksamlar  

RENK SEÇENEKLERİ

Siyah  
Gri  
Kırmızı  
Lacivert  

Not: Renk tercihi sipariş sırasında belirlenmektedir.

SİPARİŞ BİLGİSİ

Promosyon kalem siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Ofis ve çalışan hediyeleri  
Marka tanıtım kampanyaları  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p159",
  slug: "promosyon-metal-kalem-mk-210",
  title: "Promosyon Metal Kalem MK-210 | Rubber Gövdeli Logo Baskılı Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-210.jpg",

  shortDesc:
    "Promosyon metal kalem MK-210 modeli rubber kaplama gövdesi, mavi mürekkep yapısı ve lazer baskıya uygun yüzeyi ile kurumsal promosyon kalem modelleri arasında tercih edilen modern ve kullanışlı bir promosyon ürünüdür.",

  longDesc: `
Promosyon metal kalem MK-210 modeli rubber kaplama gövde tasarımı ve şık görünümü ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir.

Rubber kaplama gövde yapısı kalemin elde kaymasını önler ve daha konforlu bir kullanım sağlar. Bu özellik sayesinde günlük kullanımda oldukça rahat bir yazım deneyimi sunmaktadır.

Promosyon kalemler; ofislerde, kurumsal etkinliklerde, fuarlarda ve marka tanıtım çalışmalarında en çok kullanılan promosyon ürünleri arasında yer almaktadır. Günlük hayatta sık kullanılan ürünler olması nedeniyle marka bilinirliğini artırmak açısından oldukça etkili bir tanıtım ürünüdür.

MK-210 modeli metal tükenmez kalem yapısına sahiptir ve firmanıza ait logo veya marka bilgileri lazer baskı yöntemi ile kalem üzerine uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Metal Kalem  
Kategori: Promosyon Kalem  

Kalem Tipi: Metal Tükenmez Kalem  
Gövde Yapısı: Rubber Kaplama  

Mürekkep Rengi: Mavi  

Baskı Türü: Lazer Baskı  

RENK SEÇENEKLERİ

Sarı  
Siyah  
Kırmızı  
Mor  
Pembe  

Not: Renk tercihi sipariş sırasında belirlenmektedir.

SİPARİŞ BİLGİSİ

Promosyon kalem siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Ofis ve çalışan hediyeleri  
Marka tanıtım kampanyaları  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p160",
  slug: "promosyon-metal-kalem-mk-220",
  title: "Promosyon Metal Kalem MK-220 | Logo Baskılı Kurumsal Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-220.jpg",

  shortDesc:
    "Promosyon metal kalem MK-220 modeli dayanıklı metal gövdesi, mavi mürekkep yapısı ve lazer baskıya uygun yüzeyi ile kurumsal promosyon kalem modelleri arasında sık tercih edilen kaliteli bir promosyon ürünüdür.",

  longDesc: `
Promosyon metal kalem MK-220 modeli şık tasarımı ve dayanıklı metal gövde yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir.

Metal tükenmez kalem yapısı sayesinde uzun süreli kullanım sunan bu model; ofislerde, fuarlarda, kurumsal etkinliklerde ve marka tanıtım çalışmalarında kullanılan promosyon kalem çeşitleri arasında yer almaktadır.

Promosyon kalemler günlük hayatta en çok kullanılan promosyon ürünleri arasında yer aldığı için marka bilinirliğini artırmak ve firmanızın sürekli görünür olmasını sağlamak açısından oldukça etkili bir tanıtım ürünüdür.

MK-220 modeli lazer baskıya uygundur ve firmanıza ait logo veya marka bilgileri kalem üzerine yüksek kaliteli şekilde uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Metal Kalem  
Kategori: Promosyon Kalem  

Kalem Tipi: Metal Tükenmez Kalem  
Mürekkep Rengi: Mavi  

Baskı Türü: Lazer Baskı  

RENK SEÇENEKLERİ

Siyah  
Kırmızı  
Lacivert  
Beyaz  

Not: Renk tercihi sipariş sırasında belirlenmektedir.

SİPARİŞ BİLGİSİ

Promosyon kalem siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Ofis ve çalışan hediyeleri  
Marka tanıtım kampanyaları  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p161",
  slug: "promosyon-metal-kalem-mk-230",
  title: "Promosyon Metal Kalem MK-230 | Logo Baskılı Kurumsal Promosyon Kalem",
  category: "Kalem",
  image: "/products/promosyon-metal-kalem-mk-230.jpg",

  shortDesc:
    "Promosyon metal kalem MK-230 modeli dayanıklı metal gövdesi, mavi mürekkep yapısı ve lazer baskıya uygun yüzeyi ile kurumsal promosyon kalem modelleri arasında tercih edilen şık ve kullanışlı bir promosyon ürünüdür.",

  longDesc: `
Promosyon metal kalem MK-230 modeli dayanıklı metal gövde yapısı ve şık tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen kalem modellerinden biridir.

Metal tükenmez kalem yapısı sayesinde uzun süreli kullanım sunan bu model; ofislerde, fuarlarda, kurumsal etkinliklerde ve marka tanıtım çalışmalarında kullanılan promosyon kalem çeşitleri arasında yer almaktadır.

Promosyon kalemler günlük hayatta en sık kullanılan promosyon ürünleri arasında yer aldığı için marka bilinirliğini artırmak ve firmanızın sürekli görünür olmasını sağlamak açısından oldukça etkili bir tanıtım ürünüdür.

MK-230 modeli lazer baskıya uygundur ve firmanıza ait logo veya marka bilgileri kalem üzerine yüksek kaliteli şekilde uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Metal Kalem  
Kategori: Promosyon Kalem  

Kalem Tipi: Metal Tükenmez Kalem  
Mürekkep Rengi: Mavi  

Baskı Türü: Lazer Baskı  

RENK SEÇENEKLERİ

Yeşil  
Gümüş  
Kırmızı  

Not: Renk tercihi sipariş sırasında belirlenmektedir.

SİPARİŞ BİLGİSİ

Promosyon kalem siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Ofis ve çalışan hediyeleri  
Marka tanıtım kampanyaları  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p162",
  slug: "promosyon-anahtarlik-an-125",
  title: "Promosyon Anahtarlık AN-125 | Lazer Baskılı Kurumsal Promosyon Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-125.jpg",

  shortDesc:
    "Promosyon anahtarlık AN-125 modeli şık tasarımı, lazer baskıya uygun yüzeyi ve çift yön baskı imkanı ile kurumsal promosyon anahtarlık modelleri arasında sık tercih edilen kullanışlı bir promosyon ürünüdür.",

  longDesc: `
Promosyon anahtarlık AN-125 modeli şık ve kullanışlı tasarımı ile kurumsal promosyon ürünleri arasında en çok tercih edilen anahtarlık modellerinden biridir.

Günlük hayatta sık kullanılan ürünlerden biri olan anahtarlıklar; fuarlar, kurumsal etkinlikler, marka tanıtım kampanyaları ve promosyon çalışmalarında en etkili tanıtım ürünleri arasında yer almaktadır.

Promosyon anahtarlıklar küçük boyutlarına rağmen marka görünürlüğünü uzun süre artıran etkili bir reklam ürünüdür. Bu nedenle birçok firma tarafından kurumsal promosyon ürünü olarak tercih edilmektedir.

AN-125 modeli lazer baskıya uygundur ve firmanıza ait logo veya marka bilgileri anahtarlık üzerine yüksek kaliteli şekilde uygulanabilmektedir. Çift yönlü baskı yapılabilmesi sayesinde marka tanıtımı daha etkili hale gelmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Anahtarlık  
Kategori: Promosyon Anahtarlık  

Ürün Ebatı: 3.2 x 10.5 cm  

Baskı Türü: Lazer Baskı  
Baskı Yönü: Çift Yönlü Baskı  

Kutu: Var  

SİPARİŞ BİLGİSİ

Promosyon anahtarlık siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Marka tanıtım kampanyaları  
Ofis ve çalışan hediyeleri  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p163",
  slug: "promosyon-anahtarlik-an-130",
  title: "Promosyon Anahtarlık AN-130 | Lazer Baskılı Kurumsal Promosyon Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-130.jpg",

  shortDesc:
    "Promosyon anahtarlık AN-130 modeli lazer baskıya uygun yüzeyi ve şık tasarımı ile kurumsal promosyon anahtarlık modelleri arasında tercih edilen kullanışlı ve etkili bir promosyon ürünüdür.",

  longDesc: `
Promosyon anahtarlık AN-130 modeli şık tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen anahtarlık modellerinden biridir.

Anahtarlıklar günlük hayatta sürekli kullanılan ürünler arasında yer aldığı için marka tanıtımında oldukça etkili promosyon ürünleri arasında bulunmaktadır. Bu nedenle fuarlar, kurumsal etkinlikler ve reklam kampanyalarında sıklıkla tercih edilmektedir.

Promosyon anahtarlık modelleri küçük boyutlarına rağmen markanızın uzun süre görünür olmasını sağlayan etkili reklam ürünleri arasında yer almaktadır.

AN-130 modeli lazer baskıya uygundur ve firmanıza ait logo veya marka bilgileri anahtarlık üzerine yüksek kaliteli şekilde uygulanabilmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Anahtarlık  
Kategori: Promosyon Anahtarlık  

Baskı Türü: Lazer Baskı  

RENK SEÇENEKLERİ

Lacivert  
Siyah  

Not: Renk tercihi sipariş sırasında belirlenmektedir.

SİPARİŞ BİLGİSİ

Promosyon anahtarlık siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Marka tanıtım kampanyaları  
Ofis ve çalışan hediyeleri  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p164",
  slug: "promosyon-anahtarlik-an-140",
  title: "Promosyon Anahtarlık AN-140 | Lazer ve Gofre Baskılı Promosyon Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-140.jpg",

  shortDesc:
    "Promosyon anahtarlık AN-140 modeli çift yön baskı özelliği, lazer ve gofre baskıya uygun yüzeyi ile kurumsal promosyon anahtarlık modelleri arasında tercih edilen kullanışlı bir promosyon ürünüdür.",

  longDesc: `
Promosyon anahtarlık AN-140 modeli şık tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen anahtarlık modellerinden biridir.

Anahtarlıklar günlük hayatta sürekli kullanılan ürünler arasında yer aldığı için marka tanıtımı açısından oldukça etkili promosyon ürünleri arasında bulunmaktadır. Bu nedenle fuarlar, kurumsal etkinlikler, reklam kampanyaları ve promosyon çalışmalarında sıklıkla tercih edilmektedir.

Promosyon anahtarlık modelleri küçük boyutlarına rağmen marka görünürlüğünü uzun süre artıran etkili reklam ürünleri arasında yer almaktadır.

AN-140 modeli lazer ve gofre baskıya uygundur ve firmanıza ait logo veya marka bilgileri anahtarlık üzerine yüksek kaliteli şekilde uygulanabilmektedir. Çift yön baskı yapılabilmesi sayesinde marka tanıtımı daha etkili hale gelmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Anahtarlık  
Kategori: Promosyon Anahtarlık  

Baskı Türü: Lazer Baskı / Gofre Baskı  
Baskı Yönü: Çift Yön  

Ambalaj: Şeffaf Poşet  

RENK SEÇENEKLERİ

Kırmızı  
Turkuaz  

Not: Renk tercihi sipariş sırasında belirlenmektedir.

SİPARİŞ BİLGİSİ

Promosyon anahtarlık siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Marka tanıtım kampanyaları  
Ofis ve çalışan hediyeleri  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p165",
  slug: "promosyon-anahtarlik-an-150",
  title: "Promosyon Anahtarlık AN-150 | Lazer ve Gofre Baskılı Promosyon Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-150.jpg",

  shortDesc:
    "Promosyon anahtarlık AN-150 modeli çift yön baskı özelliği, lazer ve gofre baskıya uygun yüzeyi ile kurumsal promosyon anahtarlık modelleri arasında tercih edilen kullanışlı ve şık bir promosyon ürünüdür.",

  longDesc: `
Promosyon anahtarlık AN-150 modeli şık tasarımı ve dayanıklı yapısı ile kurumsal promosyon ürünleri arasında sık tercih edilen anahtarlık modellerinden biridir.

Anahtarlıklar günlük hayatta sürekli kullanılan ürünler arasında yer aldığı için marka tanıtımı açısından oldukça etkili promosyon ürünleri arasında bulunmaktadır. Bu nedenle fuarlar, kurumsal etkinlikler ve reklam kampanyalarında sıklıkla tercih edilmektedir.

Promosyon anahtarlık modelleri küçük boyutlarına rağmen marka görünürlüğünü uzun süre artıran etkili reklam ürünleri arasında yer almaktadır.

AN-150 modeli lazer ve gofre baskıya uygundur ve firmanıza ait logo veya marka bilgileri anahtarlık üzerine yüksek kaliteli şekilde uygulanabilmektedir. Çift yön baskı yapılabilmesi sayesinde marka tanıtımı daha etkili hale gelmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Anahtarlık  
Kategori: Promosyon Anahtarlık  

Baskı Türü: Lazer Baskı / Gofre Baskı  
Baskı Yönü: Çift Yön  

Ambalaj: Şeffaf Poşet  

RENK SEÇENEKLERİ

Siyah  
Turkuaz  
Turuncu  
Kırmızı  

Not: Renk tercihi sipariş sırasında belirlenmektedir.

SİPARİŞ BİLGİSİ

Promosyon anahtarlık siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Marka tanıtım kampanyaları  
Ofis ve çalışan hediyeleri  
Reklam ve promosyon çalışmaları
`
},
{
  id: "p166",
  slug: "promosyon-anahtarlik-an-160",
  title: "Promosyon Anahtarlık AN-160 | Lazer Baskılı Promosyon Anahtarlık",
  category: "Anahtarlık",
  image: "/products/promosyon-anahtarlik-an-160.jpg",

  shortDesc:
    "Promosyon anahtarlık AN-160 modeli çift yön baskı özelliği, lazer baskıya uygun yüzeyi ve kullanışlı tasarımı ile kurumsal promosyon anahtarlık modelleri arasında tercih edilen etkili bir promosyon ürünüdür.",

  longDesc: `
Promosyon anahtarlık AN-160 modeli şık ve kullanışlı tasarımı ile kurumsal promosyon ürünleri arasında sık tercih edilen anahtarlık modellerinden biridir.

Anahtarlıklar günlük hayatta sürekli kullanılan ürünler arasında yer aldığı için marka tanıtımı açısından oldukça etkili promosyon ürünleri arasında bulunmaktadır. Bu nedenle fuarlar, kurumsal etkinlikler ve reklam kampanyalarında sıklıkla tercih edilmektedir.

Promosyon anahtarlık modelleri küçük boyutlarına rağmen marka görünürlüğünü uzun süre artıran etkili reklam ürünleri arasında yer almaktadır.

AN-160 modeli lazer baskıya uygundur ve firmanıza ait logo veya marka bilgileri anahtarlık üzerine yüksek kaliteli şekilde uygulanabilmektedir. Çift yön baskı yapılabilmesi sayesinde marka tanıtımı daha etkili hale gelmektedir.

TEKNİK ÖZELLİKLER

Ürün Tipi: Promosyon Anahtarlık  
Kategori: Promosyon Anahtarlık  

Ürün Ebatı: 8.5 x 1.8 cm  

Baskı Türü: Lazer Baskı  
Baskı Yönü: Çift Yön  

Ambalaj: Şeffaf Poşet  

RENK SEÇENEKLERİ

Taba  
Kırmızı  

Not: Renk tercihi sipariş sırasında belirlenmektedir.

SİPARİŞ BİLGİSİ

Promosyon anahtarlık siparişleri toplu üretim olarak hazırlanmaktadır. Logo baskı tasarımı, renk tercihi ve teslim süresi teklif aşamasında netleştirilmektedir.

KULLANIM ALANLARI

Kurumsal promosyon ürünleri  
Fuar ve etkinlik promosyonları  
Marka tanıtım kampanyaları  
Ofis ve çalışan hediyeleri  
Reklam ve promosyon çalışmaları
`
},

];

export default products;