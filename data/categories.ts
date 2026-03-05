export type CategoryItem = {
  name: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
};

export function slugifyTR(input: string) {
  return input
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ✅ Sadece isimleri yaz: otomatik slug + SEO üretilir
const categoryNames = [
  "Kalem",
  "USB Bellek",
  "Powerbank",
  "Tarihsiz Defter",
  "Ajanda",
  "Duvar Saatleri",
  "Kalem Setleri",
  "Termos",
  "Geri Dönüşümlü Ürünler",
  "Yapışkanlı Notluklar",
  "Matbaa Ürünleri",
  "Karton Çantalar",
  "Promosyon Şapka",
  "Ahşap ve Deri Masaüstü Ürünler",
  "Promosyon Tişört",
  "Organizerler",
  "Sekreterlikler ve Evrak Çantaları",
  "Kırtasiye Ürünleri",
  "VIP Ürünler",
  "Masa Sümeni",
  "Hesap Makineleri",
  "Seramik ve Porselen Kupalar",
  "Ham Bez & Tela Çanta",
  "Bayraklar",
  "Teknolojik Ürünler",
  "Kartvizitlik",
  "Ayna ve Deri Kartlıklar",
  "Çakı, Fener ve Tornavida Seti",
  "İmalat Ürünler",
  // mevcut kısa kategorilerin de dursun:
  "Çakmak",
  "Anahtarlık",
  "Kupa",
];

export const categories: CategoryItem[] = categoryNames.map((name) => {
  const slug = slugifyTR(name);
  return {
    name,
    slug,
    seoTitle: `${name} | FirmaPromosyon`,
    seoDescription: `${name} kategorisindeki kurumsal promosyon ürünlerini inceleyin. Toplu alım, logo baskı seçenekleri ve hızlı teklif için ürünleri görüntüleyin.`,
  };
});

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}