import { Suspense } from "react";
import { products } from "@/data/products";
import OfferForm from "./OfferForm";

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