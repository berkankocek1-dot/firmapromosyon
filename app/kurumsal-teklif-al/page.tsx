export const runtime = "nodejs";

import { Suspense } from "react";
import { redirect } from "next/navigation";
import { products } from "@/data/products";
import { submitLead } from "../actions/lead";
import LeadQuoteForm from "./LeadQuoteForm";

export const metadata = {
  title: "Kurumsal Teklif Al",
  description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif formu.",
  alternates: { canonical: "https://www.firmapromosyon.com/kurumsal-teklif-al" },
  openGraph: {
    title: "Kurumsal Teklif Al | FirmaPromosyon",
    description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif formu.",
    url: "https://www.firmapromosyon.com/kurumsal-teklif-al",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function KurumsalTeklifAlPage() {
  const quoteProducts = products.map(({ slug, title, category, image, price }) => ({ slug, title, category, image, ...(typeof price === "number" ? { price } : {}) }));
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-3xl px-4 pb-28 pt-8 sm:pt-12">
        <header>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">Kurumsal toplu sipariş</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Kurumsal Teklif Al</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">Promosyon ürününüzü seçin veya baskı ihtiyacınızı yazın. Adet ve iletişim bilgilerinizi paylaşın; size özel teklif hazırlayalım.</p>
        </header>
        <div className="mt-7 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <Suspense fallback={<p role="status" className="py-8 text-sm text-gray-600">Teklif formu yükleniyor…</p>}>
            <LeadQuoteForm products={quoteProducts} action={submitLeadAction} />
          </Suspense>
        </div>
        <p className="mt-5 text-center text-xs leading-6 text-gray-500">Fiyat ve teslim süresi; ürün, adet, stok ve baskı detaylarına göre teklif aşamasında netleşir.</p>
      </div>
    </div>
  );
}

async function submitLeadAction(formData: FormData) {
  "use server";

  const payload = {
    company: String(formData.get("company") || ""),
    name: String(formData.get("name") || ""),
    phone: String(formData.get("phone") || ""),
    email: String(formData.get("email") || ""),
    product: String(formData.get("product") || ""),
    qty: String(formData.get("qty") || ""),
    message: String(formData.get("message") || ""),
  };

  await submitLead(payload);

  redirect("/kurumsal-teklif-al/basarili");
}
