import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseServer } from "@/lib/supabase/server";
import { uploadCategoryImage } from "@/lib/category-image";

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

async function createCategory(formData: FormData) {
  "use server";

  const name = String(formData.get("name") ?? "").trim();
  let slug = String(formData.get("slug") ?? "").trim();

  const description = String(
    formData.get("description") ?? ""
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

  const imageFile = formData.get("image_file");

  const status = String(
    formData.get("status") ?? "draft"
  );

  const sortOrderRaw = String(
    formData.get("sort_order") ?? "0"
  ).trim();

  if (!name) {
    throw new Error("Kategori adı boş bırakılamaz.");
  }

  if (!slug) {
    slug = slugifyTR(name);
  }

  if (!slug) {
    throw new Error("Geçerli bir slug oluşturulamadı.");
  }

  const sortOrder = Number(sortOrderRaw);

  if (Number.isNaN(sortOrder)) {
    throw new Error("Sıralama geçerli bir sayı olmalıdır.");
  }

  const supabase = getSupabaseServer();

  const { data: existing } = await supabase
    .from("categories")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (existing) {
    throw new Error(
      "Bu slug ile kayıtlı bir kategori zaten var."
    );
  }

  let image: string | null = null;

  if (imageFile instanceof File && imageFile.size > 0) {
    image = await uploadCategoryImage(imageFile, slug);
  }

  const { error } = await supabase
    .from("categories")
    .insert({
      name,
      slug,
      description: description || null,
      seo_title:
        seoTitle ||
        `${name} | FirmaPromosyon`,
      seo_description:
        seoDescription ||
        `${name} kategorisindeki kurumsal promosyon ürünlerini inceleyin. Toplu alım, logo baskı seçenekleri ve hızlı teklif için ürünleri görüntüleyin.`,
      focus_keyword: focusKeyword || null,
      image: image || null,
      status,
      sort_order: sortOrder,
    });

  if (error) {
    throw new Error(
      `Kategori oluşturulamadı: ${error.message}`
    );
  }

  revalidatePath("/admin/kategoriler");
  revalidatePath("/urunler");
  revalidatePath("/sitemap.xml");

  if (status === "published") {
    revalidatePath(`/kategori/${slug}`);
  }

  redirect(`/admin/kategoriler/${slug}`);
}

export default function NewCategoryPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-500">
          Kategori Yönetimi
        </div>

        <h1 className="mt-2 text-3xl font-black">
          Yeni Kategori Ekle
        </h1>

        <p className="mt-2 text-gray-600">
          Yeni kategoriyi Supabase veritabanına ekleyin.
          Yayına aldığınızda kategori sitede otomatik görünür.
        </p>
      </div>

      <form action={createCategory}>
        <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
          <div className="space-y-6">

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-xl font-bold">
                Kategori Bilgileri
              </h2>

              <div className="mt-6 grid gap-5">
                <label>
                  <div className="mb-2 text-sm font-bold">
                    Kategori Adı *
                  </div>

                  <input
                    name="name"
                    required
                    placeholder="Örn: Promosyon Şemsiye"
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
                      placeholder="promosyon-semsiye"
                      className="w-full rounded-xl border px-4 py-3"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                      Boş bırakırsanız kategori adından otomatik oluşturulur.
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
                    Kategori Açıklaması
                  </div>

                  <textarea
                    name="description"
                    rows={8}
                    placeholder="Kategori sayfasında gösterilecek açıklama..."
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
  <div className="mb-2 text-sm font-bold">
    Kategori Görseli
  </div>

  <input
    type="file"
    name="image_file"
    accept="image/jpeg,image/png,image/webp"
    className="w-full rounded-xl border bg-white px-4 py-3"
  />

  <p className="mt-2 text-xs text-gray-500">
    JPG, PNG veya WebP. Maksimum 8 MB.
    Görsel eklemek zorunlu değildir.
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
                    placeholder="Promosyon Şemsiye | FirmaPromosyon"
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
                    placeholder="promosyon şemsiye"
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
                Kategoriyi Oluştur
              </button>
            </section>

            <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="font-bold text-blue-800">
                Tavsiye
              </div>

              <p className="mt-2 text-sm leading-6 text-blue-700">
                Yeni kategoriyi önce Taslak olarak oluşturup
                içerikleri kontrol ettikten sonra Yayında durumuna
                alabilirsiniz.
              </p>
            </div>
          </aside>
        </div>
      </form>
    </div>
  );
}




