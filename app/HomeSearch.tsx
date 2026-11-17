"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductSearchBox from "./components/ProductSearchBox";
import type { SearchProduct } from "./components/productSearch";

export default function HomeSearch({ products }: { products: SearchProduct[] }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  return (
    <form action="/urunler" method="get" role="search"
      className="mt-3 flex w-full max-w-2xl items-start gap-2"
      onSubmit={event => {
        event.preventDefault();
        router.push(query.trim() ? `/urunler?q=${encodeURIComponent(query.trim())}` : "/urunler");
      }}>
      <ProductSearchBox products={products} value={query} onChange={setQuery}
        id="home-product-search" name="q" theme="light"
        label="Ürün adı veya koduyla arayın"
        placeholder="Ürün adı veya kodu ara… Örnek: metal kalem, MK-330" />
      <button type="submit"
        className="min-h-12 shrink-0 rounded-2xl bg-black px-4 py-3 text-sm font-bold text-white transition hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:px-5">
        Ürün Ara
      </button>
    </form>
  );
}
