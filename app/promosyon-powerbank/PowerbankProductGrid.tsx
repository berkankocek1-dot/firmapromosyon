"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type PowerbankProduct = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  shortDesc: string;
  price?: number;
};

const filters = [
  "Tümü",
  "5.000 mAh",
  "10.000 mAh",
  "20.000 mAh",
  "MagSafe",
  "Wireless",
  "Hızlı Şarj",
  "Işıklı Logo",
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll(".", "")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesFilter(product: PowerbankProduct, filter: string) {
  const text = normalize(`${product.title} ${product.shortDesc}`);

  if (filter === "Tümü") return true;

  if (filter === "5.000 mAh") {
    return text.includes("5000 mah");
  }

  if (filter === "10.000 mAh") {
    return text.includes("10000 mah");
  }

  if (filter === "20.000 mAh") {
    return text.includes("20000 mah");
  }

  if (filter === "MagSafe") {
    return text.includes("magsafe");
  }

  if (filter === "Wireless") {
    return text.includes("wireless") || text.includes("kablosuz");
  }

  if (filter === "Hızlı Şarj") {
    return text.includes("hızlı şarj");
  }

  if (filter === "Işıklı Logo") {
    return (
      text.includes("ışıklı logo") ||
      text.includes("ışıklı logolu")
    );
  }

  return true;
}

export default function PowerbankProductGrid({
  products,
}: {
  products: PowerbankProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredProducts = useMemo(
    () => products.filter((product) => matchesFilter(product, activeFilter)),
    [products, activeFilter]
  );

  return (
    <>
      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Promosyon Powerbank Seçenekleri
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          İhtiyacınıza uygun kapasite, şarj teknolojisi ve logo uygulamasına göre
          promosyon powerbank modellerini filtreleyebilirsiniz.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {filters.map((item) => {
            const active = activeFilter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setActiveFilter(item)}
                className={`rounded-xl border-2 border-black px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? "bg-black text-white shadow-sm"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-3 border-t border-gray-200 pt-5 text-sm text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-semibold text-gray-900">Logo Baskı</span>
            <p className="mt-1">Kurumsal logonuza uygun baskı seçenekleri.</p>
          </div>

          <div>
            <span className="font-semibold text-gray-900">Toplu Sipariş</span>
            <p className="mt-1">Firma ve etkinlik ihtiyaçlarına uygun adetler.</p>
          </div>

          <div>
            <span className="font-semibold text-gray-900">
              Farklı Kapasiteler
            </span>
            <p className="mt-1">İhtiyaca göre farklı mAh alternatifleri.</p>
          </div>

          <div>
            <span className="font-semibold text-gray-900">Kurumsal Teklif</span>
            <p className="mt-1">Model ve adede özel hızlı fiyatlandırma.</p>
          </div>
        </div>
      </section>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-medium text-white">
          {activeFilter === "Tümü"
            ? `${filteredProducts.length} ürün gösteriliyor`
            : `${activeFilter} için ${filteredProducts.length} ürün gösteriliyor`}
        </p>

        {activeFilter !== "Tümü" && (
          <button
            type="button"
            onClick={() => setActiveFilter("Tümü")}
            className="text-sm font-semibold text-black underline underline-offset-4"
          >
            Filtreyi Temizle
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <section className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
            <Link
              key={p.id}
              href={`/urunler/${p.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  unoptimized
                  loading="lazy"
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {p.category}
                </div>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {p.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                  {p.shortDesc}
                </p>

                {p.price && (
                  <div className="mt-3">
                    <div className="text-base font-bold text-gray-900">
                      {p.price.toLocaleString("tr-TR")} TL + KDV
                    </div>

                    <div className="mt-1 text-xs font-medium text-green-600">
                      Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan
                      yazın.
                    </div>
                  </div>
                )}

                <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                  Ürünü İncele
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="font-medium text-gray-700">
            Bu filtreye uygun ürün bulunamadı.
          </p>

          <button
            type="button"
            onClick={() => setActiveFilter("Tümü")}
            className="mt-3 rounded-xl border-2 border-black bg-black px-5 py-2 text-sm font-semibold text-white"
          >
            Tüm Ürünleri Göster
          </button>
        </div>
      )}
    </>
  );
}

