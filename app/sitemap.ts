import type { MetadataRoute } from "next";
import dateManifest from "@/data/seo-lastmod.json";
import nextConfig from "../next.config";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { getCategoryLandingHref } from "@/data/categoryLandingPages";
import { guides } from "@/data/guides";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.firmapromosyon.com";

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/urunler`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/teklif`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kurumsal-teklif-al`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/rehber`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...guides.map((guide) => ({
      url: `${baseUrl}/rehber/${guide.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}${getCategoryLandingHref(category.name)}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Reuse the actual redirect rules so retired URLs stay out of the sitemap.
  const redirects = (await nextConfig.redirects?.()) ?? [];
  const redirectedPaths = new Set(
    redirects
      .filter((rule) => !rule.has?.length && !rule.missing?.length)
      .map((rule) => rule.source)
  );

  const productRoutes: MetadataRoute.Sitemap = products
    .map((product) => ({
    url: `${baseUrl}/urunler/${product.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const allRoutes: MetadataRoute.Sitemap = [
    ...routes,
    ...guideRoutes,
    ...categoryRoutes,
    ...productRoutes,
  ];

  const seen = new Set<string>();
  return allRoutes.filter((route) => {
    const path = new URL(route.url).pathname;
    if (redirectedPaths.has(path) || seen.has(route.url)) return false;
    seen.add(route.url);
    return true;
  }).map((route) => {
    const pathname = new URL(route.url).pathname;
    const dates = dateManifest.pages as Record<string, { hash: string; lastModified?: string }>;
    const lastModified = dates[pathname]?.lastModified;
    return lastModified ? { ...route, lastModified } : route;
  });
}
