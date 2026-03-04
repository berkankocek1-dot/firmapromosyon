import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.firmapromosyon.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/urunler`, lastModified: new Date() },
    { url: `${baseUrl}/teklif`, lastModified: new Date() },
    { url: `${baseUrl}/kurumsal-teklif-al`, lastModified: new Date() },
    { url: `${baseUrl}/iletisim`, lastModified: new Date() },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/urunler/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}