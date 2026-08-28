import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseServer } from "@/lib/supabase/server";

function slugifyTR(input: string) {
  return input
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function createPage(formData: FormData) {
  "use server";

  const title = String(
    formData.get("title") ?? ""
  ).trim();

  let slug = String(
    formData.get("slug") ?? ""
  ).trim();

  const content = String(
    formData.get("content") ?? ""
  ).trim();

  const seoTitle = String(
    formData.get("seo_title") ?? ""
  ).trim();

  const seoDescription = String(
    formData.get("seo_description") ?? ""
  ).trim();

  const focusKeyword = String(
    formData.get("focus_keyword") ?? ""
  ).trim();

  const status = String(
    formData.get("status") ?? "draft"
  );

  const sortOrderRaw = String(
    formData.get("sort_order") ?? "0"
  ).trim();

  if (!title) {
    throw new Error("Sayfa başlığı boş bırakılamaz.");
  }

  if (!slug) {
    slug = slugifyTR(title);
  }

  if (!slug) {
    throw new Error("Geçerli bir slug oluşturulamadı.");
  }

  const sortOrder = Number(sortOrderRaw);

  if (Number.isNaN(sortOrder)) {
    throw new Error("Sıralama geçerli bir sayı olmalıdır.");
  }

  if (
    status !== "draft" &&
    status !== "published"
  ) {
    throw new Error("Geçersiz yayın durumu.");
  }

  const supabase = getSupabaseServer();

  const { data: existing, error: existingError } =
    await supabase
      .from("pages")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

  if (existingError) {
    throw new Error(
      `Sayfa kontrol edilemedi: ${existingError.message}`
    );
  }

  if (existing) {
    throw new Error(
      "Bu slug ile kayıtlı bir sayfa zaten var."
    );
  }

  const { error } = await supabase
    .from("pages")
    .insert({
      title,
      slug,
      content: content || null,
      seo_title:
        seoTitle ||
        `${title} | FirmaPromosyon`,
      seo_description:
        seoDescription || null,
      focus_keyword:
        focusKeyword || null,
      status,
      sort_order: sortOrder,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    throw new Error(
      `Sayfa oluşturulamadı: ${error.message}`
    );
  }

  revalidatePath("/admin/sayfalar");
  revalidatePath(`/${slug}`);
  revalidatePath("/sitemap.xml");

  redirect("/admin/sayfalar");
}

export default function NewPagePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-500">
          Sayfa Yönetimi
        </div>

        <h1 className="mt-2 text-3xl font-black">
          Yeni Sayfa Ekle
        </h1>

        <p className="mt-2 text-gray-600">
          Sabit sayfa içeriğini ve SEO ayarlarını
          Supabase veritabanına ekleyin.
        </p>
      </div>

      <form action={createPage}>
        <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-xl font-bold">
                Sayfa Bilgileri
              </h2>

              <div className="mt-6 grid gap-5">
                <label>
                  <div className="mb-2 text-sm font-bold">
                    Sayfa Başlığı *
                  </div>

                  <input
                    name="title"
                    required
                    placeholder="Örn: Hakkımızda"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-2">
                  <label>
                    <div className="mb-2 text-sm font-bold">
                      Slug
                    </div>

                    <input
                      name="slug"
                      placeholder="hakkimizda"
                      className="w-full rounded-xl border px-4 py-3"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                      Boş bırakırsanız başlıktan otomatik oluşturulur.
                    </p>
                  </label>

                  <label>
                    <div className="mb-2 text-sm font-bold">
                      Sıralama
                    </div>

                    <input
                      name="sort_order"
                      type="number"
                      defaultValue={0}
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </label>
                </div>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Sayfa İçeriği
                  </div>

                  <textarea
                    name="content"
                    rows={16}
                    placeholder="Sayfada gösterilecek içeriği yazın..."
                    className="w-full rounded-xl border px-4 py-3"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Şimdilik düz metin olarak kullanacağız.
                    Paragraflar korunacak.
                  </p>
                </label>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-xl font-bold">
                SEO Ayarları
              </h2>

              <div className="mt-6 grid gap-5">
                <label>
                  <div className="mb-2 text-sm font-bold">
                    SEO Title
                  </div>

                  <input
                    name="seo_title"
                    placeholder="Hakkımızda | FirmaPromosyon"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Meta Description
                  </div>

                  <textarea
                    name="seo_description"
                    rows={5}
                    placeholder="Google sonuçlarında görünecek açıklama..."
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Focus Keyword
                  </div>

                  <input
                    name="focus_keyword"
                    placeholder="kurumsal promosyon firması"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>
              </div>
            </section>
          </div>

          <aside>
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-lg font-bold">
                Yayın
              </h2>

              <select
                name="status"
                defaultValue="draft"
                className="mt-5 w-full rounded-xl border px-4 py-3"
              >
                <option value="draft">
                  Taslak
                </option>

                <option value="published">
                  Yayında
                </option>
              </select>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-black px-5 py-3 font-bold text-white"
              >
                Sayfayı Oluştur
              </button>
            </section>

            <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="font-bold text-blue-800">
                Bilgi
              </div>

              <p className="mt-2 text-sm leading-6 text-blue-700">
                Önce veritabanı kaydını oluşturacağız.
                Mevcut site sayfasını Supabase'e bağlama işlemini
                ayrı ve güvenli bir adımda yapacağız.
              </p>
            </div>
          </aside>
        </div>
      </form>
    </div>
  );
}
