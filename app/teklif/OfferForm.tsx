"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/data/products";

const WHATSAPP_PHONE = "905350509128";
const normalize = (value: string) =>
  value.toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i").replace(/[^a-z0-9]/g, "");

function ProductPrice({ price }: { price?: number }) {
  if (typeof price !== "number" || !Number.isFinite(price) || price <= 0) return null;
  return <span className="mt-1.5 block text-sm font-bold text-gray-950">{new Intl.NumberFormat("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price)} TL <span className="text-xs font-normal text-gray-500">+ KDV / adet</span></span>;
}

export default function OfferForm({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const querySlug = (searchParams.get("urun") || searchParams.get("product") || "").trim().toLowerCase();
  const queryProduct = products.find((product) => product.slug === querySlug);
  const [productSlug, setProductSlug] = useState("");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(true);
  const [category, setCategory] = useState("");
  const categoryRef = useRef<HTMLElement>(null);
  const categories = useMemo(() => Array.from(new Set(products.map((product) => product.category || "Diğer"))).sort((a, b) => a.localeCompare(b, "tr")), [products]);
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState("");
  const [note, setNote] = useState("");
  const [productError, setProductError] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const selectedProduct = queryProduct || products.find((product) => product.slug === productSlug);
  const lockProduct = Boolean(queryProduct);

  useEffect(() => {
    if (queryProduct) {
      setProductSlug(queryProduct.slug);
      setProductError("");
    }
  }, [queryProduct]);

  const matches = useMemo(() => {
    const term = normalize(search);
    return products.filter((product) => (product.category || "Diğer") === category && (!term || normalize(`${product.title} ${product.category} ${product.slug}`).includes(term)));
  }, [products, search, category]);

  function chooseProduct(product: Product) {
    setProductSlug(product.slug);
    setCategory(product.category || "Diğer");
    setSearch("");
    setSearchOpen(false);
    setProductError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedProduct) {
      setProductError("Lütfen listeden teklif almak istediğiniz ürünü seçin.");
      setSearchOpen(true);
      if (category) searchRef.current?.focus();
      else categoryRef.current?.focus();
      return;
    }
    const message = [
      "Merhaba, hızlı teklif almak istiyorum.", "",
      `Ürün: ${selectedProduct.title}`,
      `Ürün bağlantısı: https://www.firmapromosyon.com/urunler/${selectedProduct.slug}`,
      `Kategori: ${selectedProduct.category || "-"}`,
      `Adet: ${qty || "Henüz belli değil"}`,
      `Firma: ${company.trim() || "-"}`,
      `Not: ${note.trim() || "-"}`, "",
      `Ad Soyad: ${fullName.trim()}`,
      `Telefon: ${phone.trim()}`,
      `E-posta: ${email.trim() || "-"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const fieldClass = "min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-950 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10";
  const labelClass = "mb-2 block text-sm font-semibold text-gray-900";
  const optional = <span className="font-normal text-gray-500">(isteğe bağlı)</span>;

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-gray-900">
      <section aria-labelledby="offer-product-heading">
        <div className="mb-4 flex items-center gap-3">
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">1</span>
          <h2 id="offer-product-heading" className="text-lg font-bold">Ürününüzü seçin</h2>
        </div>
        {selectedProduct && (
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white">
              <Image src={selectedProduct.image} alt={selectedProduct.title} fill sizes="80px" className="object-contain p-2" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-gray-500">Seçilen ürün</p>
              <p className="mt-1 break-words text-sm font-semibold leading-6">{selectedProduct.title}</p>
              <ProductPrice price={selectedProduct.price} />
              {typeof selectedProduct.price === "number" && selectedProduct.price > 0 && <p className="mt-1 text-xs text-gray-500">Liste birim fiyatı · Baskı hariç</p>}
              <Link href={`/urunler/${selectedProduct.slug}`} className="mt-1 inline-block text-xs underline underline-offset-4">Ürün detayları</Link>
            </div>
            {!lockProduct && <button type="button" onClick={() => { setCategory(selectedProduct.category || "Diğer"); setProductSlug(""); setSearchOpen(true); requestAnimationFrame(() => searchRef.current?.focus()); }} className="shrink-0 rounded-lg px-2 py-2 text-xs font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2">Değiştir</button>}
          </div>
        )}
        {!selectedProduct && (
          <div>
            <p id="offer-category-label" className={labelClass}>Ürün kategorisi</p>
            <details className="group rounded-xl border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-black/10" onKeyDown={(event) => { if (event.key === "Escape") { event.currentTarget.removeAttribute("open"); categoryRef.current?.focus(); } }}>
              <summary ref={categoryRef} id="offer-category" aria-labelledby="offer-category-label offer-category-value" className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-black [&::-webkit-details-marker]:hidden">
                <span id="offer-category-value" className={category ? "text-gray-950" : "text-gray-500"}>{category || "Kategori seçin"}</span>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-gray-500 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
              </summary>
              <ul aria-label="Ürün kategorileri" className="max-h-64 overflow-y-auto overscroll-contain border-t border-gray-200 py-1">
                {categories.map((name) => <li key={name}><button type="button" aria-pressed={category === name} onClick={(event) => { setCategory(name); setSearch(""); setSearchOpen(true); setProductError(""); event.currentTarget.closest("details")?.removeAttribute("open"); categoryRef.current?.focus(); }} className={`flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm hover:bg-gray-50 focus-visible:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset ${category === name ? "bg-gray-100 font-semibold" : ""}`}><span>{name}</span>{category === name && <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-gray-900"><path d="m5 12 4 4L19 6" /></svg>}</button></li>)}
              </ul>
            </details>
            {!category && <p className="mt-2 text-sm leading-6 text-gray-500">Önce bir kategori seçin. O kategorideki ürünler görselleriyle aşağıda listelenir.</p>}
            {category && <div className="mt-5">
            <label htmlFor="offer-product-search" className={labelClass}>Ürün adı veya kodu</label>
            <input ref={searchRef} id="offer-product-search" type="search" autoComplete="off" value={search} onChange={(event) => { setSearch(event.target.value); setSearchOpen(true); setProductError(""); }} onFocus={() => setSearchOpen(true)} onKeyDown={(event) => { if (event.key === "Escape") setSearchOpen(false); if (event.key === "Enter") { event.preventDefault(); setSearchOpen(true); } }} placeholder="Örn. DK-500, termos, defter" className={fieldClass} aria-invalid={Boolean(productError)} aria-describedby={productError ? "offer-product-error" : "offer-product-help"} aria-controls={searchOpen ? "offer-product-results" : undefined} />
            <p id="offer-product-help" className="mt-2 text-xs leading-5 text-gray-500">Seçtiğiniz kategoride ürün adı veya koduyla arayabilirsiniz.</p>
            {searchOpen && (
              <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-white">
                <p role="status" className="border-b border-gray-100 px-4 py-2 text-xs text-gray-500">{matches.length === 0 ? "Eşleşen ürün bulunamadı. Ürün kodunu veya daha kısa bir kelimeyi deneyin." : `${matches.length} ürün · Fiyatlar baskı ve KDV hariç birim liste fiyatlarıdır.`}</p>
                <ul id="offer-product-results" aria-label="Ürün arama sonuçları" className="max-h-80 overflow-y-auto overscroll-contain">
                  {matches.map((product) => <li key={product.slug}><button type="button" onClick={() => chooseProduct(product)} className="flex min-h-24 w-full items-center gap-3 border-b border-gray-100 px-3 py-3 text-left last:border-0 hover:bg-gray-50 focus-visible:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset"><span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-white"><Image src={product.image} alt="" fill sizes="64px" className="object-contain p-1.5" /></span><span className="min-w-0 flex-1"><span className="block break-words text-sm font-medium leading-6">{product.title}</span><span className="mt-0.5 block text-xs text-gray-500">{product.category}</span><ProductPrice price={product.price} /></span><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-gray-400"><path d="m9 6 6 6-6 6" /></svg></button></li>)}
                </ul>
              </div>
            )}
            </div>}
            {productError && <p id="offer-product-error" role="alert" className="mt-2 text-sm text-red-700">{productError}</p>}
          </div>
        )}
        {querySlug && !queryProduct && !selectedProduct && <p className="mt-2 text-sm text-gray-600">Bağlantıdaki ürün bulunamadı. Lütfen aramadan bir ürün seçin.</p>}
      </section>

      <section aria-labelledby="offer-details-heading" className="border-t border-gray-100 pt-6">
        <div className="mb-5 flex items-center gap-3"><span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">2</span><h2 id="offer-details-heading" className="text-lg font-bold">Talebinizi paylaşın</h2></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="offer-name" className={labelClass}>Ad soyad <span aria-hidden="true">*</span></label><input id="offer-name" name="name" autoComplete="name" required maxLength={120} pattern=".*\S.*" value={fullName} onChange={(event) => setFullName(event.target.value)} className={fieldClass} placeholder="Adınız ve soyadınız" /></div>
          <div><label htmlFor="offer-phone" className={labelClass}>Telefon <span aria-hidden="true">*</span></label><input id="offer-phone" name="tel" type="tel" inputMode="tel" autoComplete="tel" required maxLength={30} pattern=".*[0-9].*" value={phone} onChange={(event) => setPhone(event.target.value)} className={fieldClass} placeholder="05XX XXX XX XX" /></div>
          <div><label htmlFor="offer-company" className={labelClass}>Firma {optional}</label><input id="offer-company" name="organization" autoComplete="organization" maxLength={160} value={company} onChange={(event) => setCompany(event.target.value)} className={fieldClass} placeholder="Firma adı" /></div>
          <div><label htmlFor="offer-email" className={labelClass}>E-posta {optional}</label><input id="offer-email" name="email" type="email" autoComplete="email" maxLength={200} value={email} onChange={(event) => setEmail(event.target.value)} className={fieldClass} placeholder="ornek@firma.com" /></div>
          <div className="sm:col-span-2"><label htmlFor="offer-qty" className={labelClass}>Sipariş adedi {optional}</label><input id="offer-qty" name="quantity" type="number" inputMode="numeric" min={1} step={1} value={qty} onChange={(event) => setQty(event.target.value)} className={fieldClass} placeholder="Örn. 250" /><p className="mt-2 text-xs text-gray-500">Adet henüz belli değilse boş bırakabilirsiniz.</p></div>
          <div className="sm:col-span-2"><label htmlFor="offer-note" className={labelClass}>Baskı ve diğer detaylar {optional}</label><textarea id="offer-note" name="note" rows={3} maxLength={2000} value={note} onChange={(event) => setNote(event.target.value)} className={`${fieldClass} resize-y`} placeholder="Ürün rengi, logo baskısı veya ihtiyaç tarihinizi yazabilirsiniz." /></div>
        </div>
      </section>
      <div className="border-t border-gray-100 pt-6">
        <p className="mb-4 text-xs text-gray-500">* Ad soyad ve telefon zorunludur. Diğer bilgileri daha sonra da paylaşabilirsiniz.</p>
        <button type="submit" className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-black px-5 py-4 text-base font-semibold text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">WhatsApp’tan Teklif İste <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 "><path d="M7 17 17 7M7 7h10v10" /></svg></button>
        <p className="mt-3 text-center text-xs leading-5 text-gray-500">Mesajınız WhatsApp’ta hazırlanır. Göndermeden önce kontrol edebilirsiniz.</p>
        <p className="mt-3 text-center text-xs leading-5 text-gray-500">Kişisel veriler hakkında <Link href="/kvkk" className="underline underline-offset-2">KVKK aydınlatma metnini</Link> inceleyebilirsiniz.</p>
      </div>
    </form>
  );
}
