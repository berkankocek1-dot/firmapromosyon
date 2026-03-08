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

];

export default products;