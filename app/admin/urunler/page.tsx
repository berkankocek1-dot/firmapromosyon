import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function AdminProductsPage() {
  const pricedProducts = products.filter((product) => product.price).length;
  const faqProducts = products.filter(
    (product) => product.faq && product.faq.length > 0
  ).length;

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black">Ürünler</h1>
          <p className="mt-2 text-gray-600">
            Tüm ürünlerinizi ve SEO içeriklerinizi yönetin.
          </p>
        </div>

        <button className="rounded-xl bg-black px-5 py-3 text-sm font-bold text-white">
          + Yeni Ürün
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">Toplam Ürün</div>
          <div className="mt-2 text-3xl font-black">{products.length}</div>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">Fiyatlı Ürün</div>
          <div className="mt-2 text-3xl font-black">{pricedProducts}</div>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">SSS Bulunan</div>
          <div className="mt-2 text-3xl font-black">{faqProducts}</div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b p-5 md:flex-row">
          <input
            type="text"
            placeholder="Ürün adı, model veya slug ara..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none md:max-w-md"
          />

          <select className="rounded-xl border border-gray-300 px-4 py-3">
            <option>Tüm kategoriler</option>
          </select>

          <select className="rounded-xl border border-gray-300 px-4 py-3">
            <option>Tüm SEO durumları</option>
            <option>SEO eksik</option>
            <option>SSS eksik</option>
            <option>Fiyat eksik</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b bg-gray-50 text-sm text-gray-600">
              <tr>
                <th className="px-5 py-4">Ürün</th>
                <th className="px-5 py-4">Kategori</th>
                <th className="px-5 py-4">Fiyat</th>
                <th className="px-5 py-4">SEO</th>
                <th className="px-5 py-4">SSS</th>
                <th className="px-5 py-4 text-right">İşlem</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => {
                const hasFaq = !!product.faq?.length;
                const hasDescription =
                  !!product.longDesc && product.longDesc.length >= 200;

                const seoScore =
                  (product.title ? 25 : 0) +
                  (product.shortDesc ? 25 : 0) +
                  (hasDescription ? 25 : 0) +
                  (hasFaq ? 25 : 0);

                return (
                  <tr
                    key={product.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-5 py-4">
                      <div className="flex min-w-[320px] items-center gap-4">
                        <div className="relative h-14 w-14 flex-none overflow-hidden rounded-xl border bg-white">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            unoptimized
                            className="object-contain p-1"
                          />
                        </div>

                        <div>
                          <div className="font-bold">{product.title}</div>
                          <div className="mt-1 text-xs text-gray-500">
                            {product.slug}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm">
                      {product.category || "—"}
                    </td>

                    <td className="px-5 py-4 font-semibold">
                      {product.price
                        ? `${product.price.toLocaleString("tr-TR")} TL`
                        : "Eksik"}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          seoScore >= 75
                            ? "bg-green-100 text-green-700"
                            : seoScore >= 50
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {seoScore}/100
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      {hasFaq ? (
                        <span className="font-bold text-green-600">Var</span>
                      ) : (
                        <span className="font-bold text-red-600">Eksik</span>
                      )}
                    </td>

                    <td className="px-5 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/urunler/${product.slug}`}
                          target="_blank"
                          className="rounded-lg border px-3 py-2 text-xs font-bold hover:bg-gray-100"
                        >
                          Görüntüle
                        </Link>

                        <Link
                          href={`/admin/urunler/${product.slug}`}
                          className="rounded-lg bg-black px-3 py-2 text-xs font-bold text-white"
                        >
                          Düzenle
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

