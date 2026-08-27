import Image from "next/image";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type ProductRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number | null;
  image: string;
  short_desc: string;
  long_desc: string;
  faq: { q: string; a: string }[] | null;
  seo_title: string | null;
  seo_description: string | null;
  robots_index: boolean;
  status: string;
};

export default async function AdminProductsPage() {
  const { data: products, error } = await supabaseServer
    .from("products")
    .select(
      `
      id,
      slug,
      title,
      category,
      price,
      image,
      short_desc,
      long_desc,
      faq,
      seo_title,
      seo_description,
      robots_index,
      status
      `
    )
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Ürünler alınamadı: ${error.message}`);
  }

  const safeProducts = (products ?? []) as ProductRow[];

  const pricedProducts = safeProducts.filter(
    (product) => product.price !== null
  ).length;

  const faqProducts = safeProducts.filter(
    (product) => Array.isArray(product.faq) && product.faq.length > 0
  ).length;

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black">Ürünler</h1>

          <p className="mt-2 text-gray-600">
            Supabase veritabanındaki ürünleri ve SEO içeriklerini yönetin.
          </p>
        </div>

        <Link
          href="/admin/urunler/yeni"
          className="rounded-xl bg-black px-5 py-3 text-center text-sm font-bold text-white"
        >
          + Yeni Ürün
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            Toplam Ürün
          </div>

          <div className="mt-2 text-3xl font-black">
            {safeProducts.length}
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            Fiyatlı Ürün
          </div>

          <div className="mt-2 text-3xl font-black">
            {pricedProducts}
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            SSS Bulunan
          </div>

          <div className="mt-2 text-3xl font-black">
            {faqProducts}
          </div>
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
                <th className="px-5 py-4">Durum</th>
                <th className="px-5 py-4 text-right">İşlem</th>
              </tr>
            </thead>

            <tbody>
              {safeProducts.map((product) => {
                const hasFaq =
                  Array.isArray(product.faq) && product.faq.length > 0;

                const hasLongDescription =
                  !!product.long_desc &&
                  product.long_desc.trim().length >= 200;

                const hasSeoTitle =
                  !!product.seo_title &&
                  product.seo_title.trim().length > 0;

                const hasSeoDescription =
                  !!product.seo_description &&
                  product.seo_description.trim().length > 0;

                const seoScore =
                  (hasSeoTitle ? 20 : 0) +
                  (hasSeoDescription ? 20 : 0) +
                  (product.slug ? 15 : 0) +
                  (product.short_desc ? 15 : 0) +
                  (hasLongDescription ? 15 : 0) +
                  (hasFaq ? 10 : 0) +
                  (product.robots_index ? 5 : 0);

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
                          <div className="font-bold">
                            {product.title}
                          </div>

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
                      {product.price !== null
                        ? `${product.price.toLocaleString("tr-TR")} TL`
                        : "Eksik"}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          seoScore >= 80
                            ? "bg-green-100 text-green-700"
                            : seoScore >= 60
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {seoScore}/100
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      {hasFaq ? (
                        <span className="font-bold text-green-600">
                          Var
                        </span>
                      ) : (
                        <span className="font-bold text-red-600">
                          Eksik
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-4">
                      {product.status === "published" ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          Yayında
                        </span>
                      ) : product.status === "draft" ? (
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                          Taslak
                        </span>
                      ) : (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                          Arşiv
                        </span>
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