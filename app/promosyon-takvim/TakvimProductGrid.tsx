"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type Card = {id:string;slug:string;title:string;image:string;shortDesc:string;price?:number};
const filters = ["Tümü", "Masa Takvimi", "Gemici Takvimi", "Jumbo", "Sıvama", "Taslama"] as const;
export default function TakvimProductGrid({products}:{products:Card[]}) {
 const [filter,setFilter] = useState<string>("Tümü");
 const shown = products.filter(p => filter === "Tümü" || (filter === "Masa Takvimi" ? p.slug.includes("masa-takvimi") : filter === "Gemici Takvimi" ? p.slug.includes("gemici-takvimi") : p.title.toLocaleLowerCase("tr-TR").includes(filter.toLocaleLowerCase("tr-TR"))));
 return <>
  <section aria-label="Takvim filtreleri" className="mb-6 rounded-2xl bg-white p-5 text-gray-900">
   <h2 className="text-xl font-bold">Takvim Modellerini Filtreleyin</h2>
   <div className="mt-4 flex flex-wrap gap-3">{filters.map(f=><button key={f} type="button" aria-pressed={filter===f} onClick={()=>setFilter(f)} className={`rounded-xl border-2 border-black px-4 py-3 font-semibold ${filter===f?"bg-black text-white":"bg-white text-black"}`}>{f}</button>)}</div>
  </section>
  <p aria-live="polite" className="mb-4 !text-white">{shown.length} takvim modeli gösteriliyor</p>
  <section aria-label="Promosyon takvim ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {shown.map(p=><Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 !text-black shadow-sm transition hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl !bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-3" /></div>
    <p className="mt-4 text-xs font-semibold uppercase tracking-wide !text-gray-500">Takvimler</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    <p className="mt-3 text-base font-bold !text-black">{typeof p.price==="number"?`${p.price.toLocaleString("tr-TR")} TL + KDV`:"Fiyat için teklif alın"}</p>
    <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p>
    <span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
   </Link>)}
  </section>
  {shown.length===0&&<p className="py-6 text-white">Bu filtrede ürün bulunamadı. Diğer modelleri görmek için Tümü seçeneğini kullanın.</p>}
 </>;
}
