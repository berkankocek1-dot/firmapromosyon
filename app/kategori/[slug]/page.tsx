import { notFound, permanentRedirect } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getCategoryLandingHref } from "@/data/categoryLandingPages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  permanentRedirect(getCategoryLandingHref(category.name));
}