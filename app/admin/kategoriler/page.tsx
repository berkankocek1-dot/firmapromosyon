import Link from "next/link";
import { getSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const { data: categories, error } = await getSupabaseServer()
    .from("categories")
    .select(`
      id,
      name,
      slug,
      description,
      seo_title,
      seo_description,
      focus_keyword,
      image,
      status,
      sort_order
    `)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Kategoriler alınamadı: ${error.message}`);
  }

  const safeCategories = categories ?? [];

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black">
            Kategoriler
          </h1>

          <p className="mt-2 text-gray-600">
            Kategori içeriklerini ve SEO ayarlarını yönetin.
          </p>
        </div>

        <Link
          href="/admin/kategoriler/yeni"
          className="rounded-xl bg-black px-5 py-3 text-center text-sm font-bold text-white"
        >
          + Yeni Kategori
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            Toplam Kategori
          </div>

          <div className="mt-2 text-3xl font-black">
            {safeCategories.length}
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            Yayındaki Kategori
          </div>

          <div className="mt-2 text-3xl font-black">
            {
              safeCategories.filter(
                (category) =>
                  category.status === "published"
              ).length
            }
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            SEO Açıklaması Eksik
          </div>

          <div className="mt-2 text-3xl font-black">
            {
              safeCategories.filter(
                (category) =>
                  !category.seo_description
              ).length
            }
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b bg-gray-50 text-sm text-gray-600">
              <tr>
                <th className="px-5 py-4">
                  Kategori
                </th>

                <th className="px-5 py-4">
                  Slug
                </th>

                <th className="px-5 py-4">
                  SEO
                </th>

                <th className="px-5 py-4">
                  Durum
                </th>

                <th className="px-5 py-4 text-right">
                  İşlem
                </th>
              </tr>
            </thead>

            <tbody>
              {safeCategories.map((category) => {
                const seoScore =
                  (category.seo_title ? 50 : 0) +
                  (category.seo_description ? 50 : 0);

                return (
                  <tr
                    key={category.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-5 py-4">
                      <div className="font-bold">
                        {category.name}
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {category.slug}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          seoScore === 100
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {seoScore}/100
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      {category.status === "published" ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          Yayında
                        </span>
                      ) : (
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                          Taslak
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/kategori/${category.slug}`}
                          target="_blank"
                          className="rounded-lg border px-3 py-2 text-xs font-bold hover:bg-gray-100"
                        >
                          Görüntüle
                        </Link>

                        <Link
                          href={`/admin/kategoriler/${category.slug}`}
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
