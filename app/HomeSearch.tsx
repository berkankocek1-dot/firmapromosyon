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
      className="mt-6 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ürün adı veya kodu ara... Ornek: metal kalem, MK-330"
        className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-black"
      />

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
      >
        Ürün Ara
      </button>
    </form>
  );
}