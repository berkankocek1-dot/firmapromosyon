import { slugifyTR } from "./categories";

const categoryLandingPages: Record<string, string> = {
  "kalem": "/promosyon-kalem",
  "usb-bellek": "/promosyon-usb-bellek",
  "powerbank": "/promosyon-powerbank",
  "tarihsiz-defter": "/promosyon-defter",
  "ajanda": "/promosyon-ajanda",
  "duvar-saatleri": "/promosyon-duvar-saatleri",
  "kalem-setleri": "/promosyon-kalem-setleri",
  "termos": "/promosyon-termos",
  "geri-donusumlu-urunler": "/promosyon-geri-donusumlu-urunler",
  "yapiskanli-notluklar": "/promosyon-yapiskanli-notluklar",
  "matbaa-urunleri": "/promosyon-matbaa-urunleri",
  "karton-cantalar": "/promosyon-karton-cantalar",
  "promosyon-sapka": "/promosyon-sapka",
  "ahsap-ve-deri-masaustu-urunler": "/promosyon-ahsap-ve-deri-masaustu-urunler",
  "promosyon-tisort": "/promosyon-tisort",
  "organizerler": "/promosyon-organizerler",
  "sekreterlikler-ve-evrak-cantalari": "/promosyon-sekreterlikler-ve-evrak-cantalari",
  "kirtasiye-urunleri": "/promosyon-kirtasiye-urunleri",
  "vip-urunler": "/promosyon-vip-urunler",
  "masa-sumeni": "/promosyon-masa-sumeni",
  "hesap-makineleri": "/promosyon-hesap-makineleri",
  "ham-bez-tela-canta": "/promosyon-ham-bez-tela-canta",
  "bayraklar": "/promosyon-bayraklar",
  "teknolojik-urunler": "/promosyon-teknolojik-urunler",
  "kartvizitlik": "/promosyon-kartvizitlik",
  "ayna-ve-deri-kartliklar": "/promosyon-ayna-deri-kartliklar",
  "caki-fener-ve-tornavida-seti": "/promosyon-caki-fener-tornavida-seti",
  "imalat-urunler": "/promosyon-imalat-urunler",
  "cakmak": "/promosyon-cakmak",
  "anahtarlik": "/promosyon-anahtarlik",
  "kupa": "/promosyon-kupa",
};

export function getCategoryLandingHref(categoryName: string) {
  const slug = slugifyTR(categoryName);
  return categoryLandingPages[slug] ?? `/kategori/${slug}`;
}

export { categoryLandingPages };
