"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
};

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function ProductsClient({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("q") || "";

  const [search, setSearch] = useState(queryFromUrl);

  useEffect(() => {
    setSearch(queryFromUrl);
  }, [queryFromUrl]);

  const filteredProducts = useMemo(() => {
    const query = normalizeText(search);

    if (!query) return products;

    return products.filter((p) => {
      const title = normalizeText(p.title);
      const category = normalizeText(p.category);
      const slug = normalizeText(p.slug);

      return (
        title.includes(query) ||
        category.includes(query) ||
        slug.includes(query)
      );
    });
  }, [search, products]);

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor="product-search"
          className="mb-2 block text-sm font-medium text-white/80"
        >
          Ürün adı veya stok kodu ile arayın
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="product-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Örnek: PY-110, metal kalem, çakmak"
            className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-white/50"
          />

          <button
            type="button"
            onClick={() => setSearch("")}
            className="rounded-2xl border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Temizle
          </button>
        </div>

        <p className="mt-3 text-sm text-white/70">
          Toplam {filteredProducts.length} ürün gösteriliyor
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
          Aradığınız ürüne uygun sonuç bulunamadı. Ürün adı ya da kodu farklı şekilde yazmayı deneyin.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
            <Link
              key={p.id}
              href={`/urunler/${p.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold text-gray-600">
                  {p.category}
                </div>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {p.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm text-gray-700">
                  {p.shortDesc}
                </p>

                <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                  Hızlı Teklif
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}