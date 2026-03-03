"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/data/products";

const WHATSAPP_PHONE = "90XXXXXXXXXX"; // kendi numaran (başında + yok)
const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;

export default function OfferForm({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();

  const [productSlug, setProductSlug] = useState<string>("");

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState("");
  const [note, setNote] = useState("");

  // Query'den urun slug al
  const urunFromQuery = (searchParams.get("urun") || "")
    .toString()
    .trim()
    .toLowerCase();

  useEffect(() => {
    if (!urunFromQuery) return;
    const exists = products.some((p) => p.slug === urunFromQuery);
    if (exists) setProductSlug(urunFromQuery);
  }, [urunFromQuery, products]);

  const selectedProduct = useMemo(
    () => products.find((p) => p.slug === productSlug),
    [products, productSlug]
  );

  const lockProduct = Boolean(urunFromQuery) && productSlug === urunFromQuery;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const msg = `
Merhaba, hızlı teklif almak istiyorum.

Ürün: ${selectedProduct?.title || "-"}
Kategori: ${selectedProduct?.category || "-"}
Adet: ${qty || "-"}
Firma: ${company || "-"}
Not: ${note || "-"}

Ad Soyad: ${fullName || "-"}
Telefon: ${phone || "-"}
E-posta: ${email || "-"}
`.trim();

    window.open(wa(msg), "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10";

  const selectClass =
    "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
      <div>
        <label className="block text-sm font-semibold text-gray-900">Ürün</label>

        <select
          className={selectClass}
          value={productSlug}
          onChange={(e) => setProductSlug(e.target.value)}
          disabled={lockProduct}
          required
        >
          <option value="" disabled>
            Ürün seçin
          </option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.title}
            </option>
          ))}
        </select>

        {lockProduct && (
          <p className="mt-1 text-xs font-medium text-gray-700">
            Ürün otomatik seçildi.
          </p>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          className={fieldClass}
          placeholder="Ad Soyad"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className={fieldClass}
          placeholder="Firma"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          className={fieldClass}
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          className={fieldClass}
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          className={fieldClass}
          placeholder="Adet (opsiyonel)"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          className={fieldClass}
          placeholder="Not (baskı, renk, teslimat vs.)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-black px-4 py-3 font-semibold text-white hover:opacity-90"
      >
        WhatsApp’tan Hızlı Teklif Al
      </button>

      <p className="text-xs text-gray-600">
        Gönderince WhatsApp’ta mesaj otomatik hazırlanır.
      </p>
    </form>
  );
}