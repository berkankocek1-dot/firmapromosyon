export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  category: "Kupa" | "Ajanda" | "Kalem" | "Tişört" | "Anahtarlık";
  minOrder: number;
  image: string;
  gallery?: string[];
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "promosyon-kupa",
    title: "Promosyon Kupa Baskı",
    shortDesc: "Logolu kupa üretimi, toplu sipariş ve hızlı teklif.",
    category: "Kupa",
    minOrder: 50,
    image: "/products/kupa.png",
    gallery: ["/products/kupa.webp"],
  },
  {
    id: "p2",
    slug: "promosyon-ajanda",
    title: "Promosyon Ajanda",
    shortDesc: "Kurumsal ajanda, baskılı/emboss seçenekleri.",
    category: "Ajanda",
    minOrder: 100,
    image: "/products/ajanda.png",
    gallery: ["/products/ajanda.webp"],
  },
  {
    id: "p3",
    slug: "promosyon-kalem",
    title: "Promosyon Kalem",
    shortDesc: "Toptan promosyon kalem, logo baskı dahil.",
    category: "Kalem",
    minOrder: 500,
    image: "/products/kalem.png",
    gallery: ["/products/kalem.webp"],
  },
  {
    id: "p4",
    slug: "dtf-baskili-tisort",
    title: "DTF Baskılı Tişört",
    shortDesc: "DTF baskı ile canlı renkler, hızlı üretim.",
    category: "Tişört",
    minOrder: 30,
    image: "/products/tisort.png",
    gallery: ["/products/tisort.webp"],
  },
  {
    id: "p5",
    slug: "promosyon-anahtarlik",
    title: "Promosyon Anahtarlık",
    shortDesc: "Metal / plastik seçenekleriyle kurumsal anahtarlık.",
    category: "Anahtarlık",
    minOrder: 200,
    image: "/products/anahtarlik.png",
    gallery: ["/products/anahtarlik.webp"],
  },
];