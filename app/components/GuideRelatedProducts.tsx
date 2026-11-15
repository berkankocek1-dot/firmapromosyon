import GuideProductCards from "@/app/components/GuideProductCards";
import { guideProductConfigs, selectGuideProducts } from "@/data/guideProductCards";

type GuideRelatedProductsProps = { guideSlug: string };

export default function GuideRelatedProducts({ guideSlug }: GuideRelatedProductsProps) {
  const config = guideProductConfigs[guideSlug];
  if (!config) return null;
  const products = selectGuideProducts(guideSlug);
  if (products.length === 0) return null;

  return (
    <GuideProductCards
      category={config.groups[0].category}
      title={config.title}
      categoryHref={config.categoryHref}
      items={products}
    />
  );
}
