"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQEditor({
  initialFaq,
}: {
  initialFaq: FAQItem[];
}) {
  const [items, setItems] = useState<FAQItem[]>(
    initialFaq.length > 0
      ? initialFaq
      : []
  );

  function addItem() {
    setItems((current) => [
      ...current,
      {
        q: "",
        a: "",
      },
    ]);
  }

  function removeItem(index: number) {
    setItems((current) =>
      current.filter((_, i) => i !== index)
    );
  }

  function updateItem(
    index: number,
    field: "q" | "a",
    value: string
  ) {
    setItems((current) =>
      current.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  }

  return (
    <section className="rounded-2xl border bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">
            Sık Sorulan Sorular
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Ürün sayfasındaki soru-cevapları buradan yönetin.
          </p>
        </div>

        <button
          type="button"
          onClick={addItem}
          className="rounded-xl bg-black px-4 py-2 text-sm font-bold text-white"
        >
          + Yeni Soru
        </button>
      </div>

      {items.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
          Bu üründe henüz SSS bulunmuyor.
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="font-bold">
                  Soru {index + 1}
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50"
                >
                  Sil
                </button>
              </div>

              <label className="block">
                <div className="mb-2 text-sm font-bold">
                  Soru
                </div>

                <input
                  name="faq_q"
                  value={item.q}
                  onChange={(e) =>
                    updateItem(index, "q", e.target.value)
                  }
                  placeholder="Örn: Bu ürüne logo baskı yapılabilir mi?"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
                />
              </label>

              <label className="mt-4 block">
                <div className="mb-2 text-sm font-bold">
                  Cevap
                </div>

                <textarea
                  name="faq_a"
                  value={item.a}
                  onChange={(e) =>
                    updateItem(index, "a", e.target.value)
                  }
                  rows={4}
                  placeholder="Sorunun cevabını yazın..."
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
