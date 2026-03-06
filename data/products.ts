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
}
];

export default products;