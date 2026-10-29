import type { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/data/products";
import OfferForm from "./OfferForm";

export const metadata: Metadata = {
  title: "Hızlı Teklif Al",
  description: "Promosyon ürününüzü seçin; adet ve baskı bilgilerinizi paylaşarak WhatsApp üzerinden hızlı teklif isteyin.",
  alternates: { canonical: "https://www.firmapromosyon.com/teklif" },
  openGraph: {
    title: "Hızlı Teklif Al | FirmaPromosyon",
    description: "Ürün, adet ve baskı bilgilerinizi paylaşarak WhatsApp üzerinden teklif isteyin.",
    url: "https://www.firmapromosyon.com/teklif",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function TeklifPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Hızlı Teklif Al
        </h1>

        <p className="mt-2 text-base text-gray-700">
          Ürün seçili gelir. Bilgileri girin, WhatsApp’tan hızlıca teklif isteyin.
        </p>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <Suspense
            fallback={
              <div className="text-sm text-gray-600">
                Form yükleniyor...
              </div>
            }
          >
            <OfferForm products={products} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}