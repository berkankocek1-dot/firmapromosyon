import type { MetadataRoute } from "next";
import { getSupabaseServer } from "@/lib/supabase/server";
import { categories } from "@/data/categories";

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.firmapromosyon.com";

  const { data: products, error } = await getSupabaseServer()
    .from("products")
    .select("slug, updated_at")
    .eq("status", "published")
    .eq("robots_index", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Sitemap ürünleri alınamadı: ${error.message}`);
  }

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/teklif`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kurumsal-teklif-al`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map(
    (category) => ({
      url: `${baseUrl}/kategori/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  const guideRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/rehber`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehber/dtf-baski-nedir`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehber/promosyon-kupa-baski`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehber/promosyon-kalem-toptan`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = (products ?? []).map(
    (product) => ({
      url: `${baseUrl}/urunler/${product.slug}`,
      lastModified: product.updated_at
        ? new Date(product.updated_at)
        : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [
    ...routes,
    ...categoryRoutes,
    ...guideRoutes,
    ...productRoutes,
  ];
}
