import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { isProductVisible, visibleProducts } from "@/data/productVisibility";

type GuideProductCardsProps = {
  category: Product["category"];
  title: string;
  categoryHref: string;
  items?: Product[];
};

export default function GuideProductCards({
  category,
  title,
  categoryHref,
  items,
}: GuideProductCardsProps) {
  const products = (items ?? visibleProducts)
    .filter(
      (product) =>
        (items !== undefined || product.category === category) &&
        isProductVisible(product) &&
        product.availability !== "https://schema.org/OutOfStock"
    )
    .slice(0, 4);

  if (products.length === 0) return null;

  return (
    <section className="min-w-0 rounded-3xl border border-gray-200 bg-gray-50 p-3 sm:p-5">
      <h2 className="text-xl font-extrabold leading-7 text-gray-900 sm:text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-gray-700">
        Rehberdeki seçim ölçütlerini ürünlerin özellikleriyle karşılaştırın.
        Ölçü, kapasite ve logo uygulama bilgileri için ürün detaylarını inceleyin.
      </p>

      <div className="mt-4 grid min-w-0 grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/urunler/${product.slug}`}
            className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-2 transition sm:p-3 hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
              <Image
                src={product.image}
                alt={product.title}
                fill
                unoptimized
                sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 160px"
                className="object-contain p-1 sm:p-2"
              />
            </div>
            <h3 className="mt-3 line-clamp-3 break-words text-xs font-bold leading-5 text-gray-900 sm:text-sm">
              {product.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600">
              {product.shortDesc}
            </p>
            <div className="mt-auto pt-3">
              {typeof product.price === "number" && product.price > 0 ? (
                <p className="break-words text-sm font-bold leading-5 text-gray-900">
                  {product.price.toLocaleString("tr-TR", {
                    maximumFractionDigits: 2,
                  })} TL + KDV
                </p>
              ) : (
                <p className="text-sm font-semibold text-gray-700">
                  Fiyat için teklif isteyin
                </p>
              )}
              <span className="mt-2 inline-flex min-h-11 items-center text-xs font-semibold text-gray-900 underline underline-offset-4 sm:text-sm">
                Ürünü incele
              </span>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-4 text-xs leading-6 text-gray-600">
        Gösterilen fiyatlar birim ürün fiyatıdır; baskı ve KDV hariçtir.
        Güncel stok, sipariş adedi ve baskı kapsamı teklif aşamasında teyit edilir.
      </p>
      <Link
        href={categoryHref}
        className="mt-4 inline-flex min-h-12 max-w-full items-center justify-center rounded-xl bg-black px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        Tüm modelleri incele
      </Link>
    </section>
  );
}
