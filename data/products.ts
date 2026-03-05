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
      "Logo baskılı promosyon dokunmatik kalem DK-500. Kurumsal etkinlik, fuar ve müşteri ziyaretleri için toplu alım + hızlı teklif.",
    longDesc: `
Promosyon dokunmatik kalem DK-500, kurumsal promosyon ürünleri arasında hem şık görünümü hem de günlük kullanım avantajı sayesinde en çok tercih edilen modellerden biridir. Bu model; klasik tükenmez kalem işlevinin yanında, dokunmatik ucu sayesinde akıllı telefon ve tablet ekranlarında rahat kullanım sunar. Bu da DK-500’ü özellikle teknoloji odaklı firmalar, kurumsal şirketler, eğitim kurumları ve etkinlik organizasyonları için ideal bir promosyon kalem seçeneği haline getirir.

PROMOSYON DOKUNMATİK KALEM DK-500 ÖZELLİKLERİ
• Dokunmatik uç: Telefon ve tablet ekranlarında pratik kullanım
• Ergonomik gövde: Uzun süre elde konforlu tutuş
• Kurumsal baskıya uygun yüzey: Logo baskı / marka baskısı için ideal
• Şık ve profesyonel görünüm: Kurumsal hediye ve promosyon dağıtımı için uygun

LOGO BASKILI PROMOSYON KALEM AVANTAJLARI
Logo baskılı promosyon kalemler, düşük maliyetle yüksek görünürlük sağlayan en güçlü kurumsal tanıtım araçlarından biridir. Müşterilerinizin masasında, çantasında ve ofis ortamında uzun süre kullanılabildiği için markanız sürekli göz önünde kalır. DK-500 gibi dokunmatik kalemler ise “kullanışlı” algısını güçlendirir ve markanıza premium bir izlenim kazandırır.

PROMOSYON KALEM NERELERDE KULLANILIR?
• Fuar ve organizasyon promosyonları
• Kurumsal hediye ve müşteri ziyaretleri
• Şirket içi etkinlikler ve lansmanlar
• Okul / eğitim kurumu tanıtımları
• Kampanya ve pazarlama faaliyetleri

RENK SEÇENEKLERİ VE STOK BİLGİSİ
Mevcut renk seçenekleri:
Fıstık Yeşili, Lacivert, Kırmızı, Füme, Mat Turuncu, Beyaz, Siyah, Pembe, Yeşil, Gümüş, Turuncu, Sarı, Turkuaz.

Sipariş öncesinde seçilen rengin güncel stok durumu kontrol edilerek tarafınıza bilgi verilir. Yüksek adetli siparişlerde renk ve stok teyidi teklif aşamasında netleştirilir.

MİNİMUM SİPARİŞ ADEDİ
Minimum sipariş adedi baskı durumuna göre değişmektedir:
• Baskısız siparişlerde minimum: 50 adet
• Logo baskılı siparişlerde minimum adet; baskı tekniğine, renk seçimine ve üretim planına göre değişebilir.

Kurumsal toplu alım, logo baskı ve termin bilgisi için “Hızlı Teklif Al” veya “Mail ile Teklif Al” üzerinden teklif isteyebilirsiniz.
`.trim(),
    category: "Kalem",
    image: "/products/dokunmatik-kalem-dk-500.jpg",
    gallery: ["/products/dokunmatik-kalem-dk-500.jpg"],
  },
];