"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const q = search.trim();
    if (!q) return;

    router.push(`/urunler?q=${encodeURIComponent(q)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Ürün arama"
      className="mt-3 flex w-full max-w-xl flex-col gap-2 sm:flex-row"
    >
      <input
        type="search"
        name="q"
        aria-label="Ürün adı veya kodu"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ürün adı veya kodu ara... Örnek: metal kalem, MK-330"
        className="min-h-12 min-w-0 w-full flex-1 rounded-2xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-black"
      />

      <button
        type="submit"
        className="inline-flex min-h-12 w-full shrink-0 items-center justify-center whitespace-nowrap rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:w-auto"
      >
        Ürün Ara
      </button>
    </form>
  );
}
