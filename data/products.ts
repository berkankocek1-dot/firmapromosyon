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

];

export default products;