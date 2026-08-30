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
  price?: number;
};

const popularCategories = [
  "Kalem",
  "Promosyon Şapka",
  "Tarihsiz Defter",
  "Termos",
  "USB Bellek",
  "Powerbank",
  "Çakmak",
  "Anahtarlık",
  "Kupa",
  "Promosyon Tişört",
  "Ajanda",
  "Kalem Setleri",
  "Teknolojik Ürünler",
  "Ham Bez & Tela Çanta",
];

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function ProductsClient({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("q") || "";

  const [search, setSearch] = useState(queryFromUrl);
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    setSearch(queryFromUrl);
  }, [queryFromUrl]);

  const categories = useMemo(
    () =>
      Array.from(new Set(products.map((product) => product.category))).sort(
        (a, b) => a.localeCompare(b, "tr")
      ),
    [products]
  );

  const visiblePopularCategories = useMemo(
    () => popularCategories.filter((category) => categories.includes(category)),
    [categories]
  );

  const filteredProducts = useMemo(() => {
    const query = normalizeText(search);

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "Tümü" || product.category === activeCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const title = normalizeText(product.title);
      const category = normalizeText(product.category);
      const slug = normalizeText(product.slug);

      return (
        title.includes(query) ||
        category.includes(query) ||
        slug.includes(query)
      );
    });
  }, [search, activeCategory, products]);

  function clearFilters() {
    setSearch("");
    setActiveCategory("Tümü");
  }

  return (
    <>
      <section className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7">
        <div>
          <label
            htmlFor="product-search"
            className="mb-2 block text-sm font-semibold text-white"
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
              className="w-full rounded-2xl border border-white/20 bg-black/30 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-white/60"
            />

            <button
              type="button"
              onClick={clearFilters}
              className="rounded-2xl border border-white bg-white px-6 py-4 text-sm font-bold text-black transition hover:opacity-90"
            >
              Temizle
            </button>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">
                Popüler Kategoriler
              </h2>

              <p className="mt-1 text-sm text-white/60">
                Aradığınız ürün grubunu seçerek sonuçları daraltın.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllCategories((current) => !current)}
              className="self-start text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white sm:self-auto"
            >
              {showAllCategories
                ? "Daha Az Kategori Göster"
                : `+ Tüm Kategoriler (${categories.length})`}
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setActiveCategory("Tümü")}
              className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                activeCategory === "Tümü"
                  ? "border-white bg-white text-black"
                  : "border-white/20 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Tümü
            </button>

            {visiblePopularCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-white bg-white text-black"
                    : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {showAllCategories && (
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-white">
                  Tüm Kategoriler
                </h3>

                <span className="text-xs text-white/50">
                  {categories.length} kategori
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setShowAllCategories(false);
                    }}
                    className={`rounded-xl border px-3 py-3 text-left text-sm font-semibold transition ${
                      activeCategory === category
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
          {activeCategory !== "Tümü" && (
            <button
              type="button"
              onClick={() => setActiveCategory("Tümü")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black"
            >
              {activeCategory}
              <span aria-hidden="true">×</span>
            </button>
          )}

          <p className="text-sm text-white/70">
            {activeCategory === "Tümü"
              ? `${filteredProducts.length} ürün gösteriliyor`
              : `${activeCategory} kategorisinde ${filteredProducts.length} ürün gösteriliyor`}
          </p>
        </div>
      </section>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-lg font-bold text-white">
            Ürün bulunamadı
          </h2>

          <p className="mt-2 text-sm text-white/70">
            Arama kelimenizi veya seçili kategoriyi değiştirerek tekrar deneyin.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black"
          >
            Filtreleri Temizle
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/urunler/${product.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold text-gray-600">
                  {product.category}
                </div>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {product.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm text-gray-700">
                  {product.shortDesc}
                </p>

                {product.price && (
                  <div className="mt-3">
                    <div className="text-base font-bold text-gray-900">
                      {product.price.toLocaleString("tr-TR")} TL + KDV
                    </div>

                    <div className="mt-1 text-xs font-medium text-green-600">
                      Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
                    </div>
                  </div>
                )}

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