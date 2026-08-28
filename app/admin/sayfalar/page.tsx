import Link from "next/link";
import { getSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminPagesPage() {
  const { data: pages, error } = await getSupabaseServer()
    .from("pages")
    .select(`
      id,
      slug,
      title,
      content,
      seo_title,
      seo_description,
      focus_keyword,
      status,
      sort_order,
      updated_at
    `)
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    throw new Error(`Sayfalar alınamadı: ${error.message}`);
  }

  const safePages = pages ?? [];

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black">
            Sayfalar
          </h1>

          <p className="mt-2 text-gray-600">
            Sabit sayfa içeriklerini ve SEO ayarlarını yönetin.
          </p>
        </div>

        <Link
          href="/admin/sayfalar/yeni"
          className="rounded-xl bg-black px-5 py-3 text-center text-sm font-bold text-white"
        >
          + Yeni Sayfa
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            Toplam Sayfa
          </div>

          <div className="mt-2 text-3xl font-black">
            {safePages.length}
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            Yayındaki Sayfa
          </div>

          <div className="mt-2 text-3xl font-black">
            {
              safePages.filter(
                (page) => page.status === "published"
              ).length
            }
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm font-semibold text-gray-500">
            SEO Eksik
          </div>

          <div className="mt-2 text-3xl font-black">
            {
              safePages.filter(
                (page) =>
                  !page.seo_title ||
                  !page.seo_description ||
                  !page.focus_keyword
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
                  Sayfa
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
              {safePages.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-12 text-center text-gray-500"
                  >
                    Henüz yönetilebilir sayfa eklenmemiş.
                  </td>
                </tr>
              ) : (
                safePages.map((page) => {
                  const seoScore =
                    (page.seo_title ? 35 : 0) +
                    (page.seo_description ? 35 : 0) +
                    (page.focus_keyword ? 20 : 0) +
                    (page.content ? 10 : 0);

                  return (
                    <tr
                      key={page.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-5 py-4">
                        <div className="font-bold">
                          {page.title}
                        </div>
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-600">
                        /{page.slug}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            seoScore === 100
                              ? "bg-green-100 text-green-700"
                              : seoScore >= 70
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {seoScore}/100
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        {page.status === "published" ? (
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
                            href={`/${page.slug}`}
                            target="_blank"
                            className="rounded-lg border px-3 py-2 text-xs font-bold hover:bg-gray-100"
                          >
                            Görüntüle
                          </Link>

                          <Link
                            href={`/admin/sayfalar/${page.slug}`}
                            className="rounded-lg bg-black px-3 py-2 text-xs font-bold text-white"
                          >
                            Düzenle
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
