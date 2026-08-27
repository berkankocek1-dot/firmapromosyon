import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseServer } from "@/lib/supabase/server";
import {
  uploadCategoryImage,
  deleteCategoryImage,
} from "@/lib/category-image";
import DeleteCategoryButton from "./DeleteCategoryButton";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function deleteCategory(formData: FormData) {
  "use server";

  const slug = String(
    formData.get("delete_slug") ?? ""
  ).trim();

  if (!slug) {
    throw new Error("Silinecek kategori bulunamadı.");
  }

  const supabase = getSupabaseServer();

  const { data: category, error: categoryError } =
    await supabase
      .from("categories")
      .select("id, name, slug")
      .eq("slug", slug)
      .single();

  if (categoryError || !category) {
    throw new Error(
      `Kategori bulunamadı: ${
        categoryError?.message ?? "Bilinmeyen hata"
      }`
    );
  }

  const { count, error: productCountError } =
    await supabase
      .from("products")
      .select("id", {
        count: "exact",
        head: true,
      })
      .ilike("category", category.name);

  if (productCountError) {
    throw new Error(
      `Kategori ürünleri kontrol edilemedi: ${productCountError.message}`
    );
  }

  if ((count ?? 0) > 0) {
    throw new Error(
      `Bu kategori silinemez. Kategoriye bağlı ${count} ürün bulunuyor.`
    );
  }

  const { error: deleteError } = await supabase
    .from("categories")
    .delete()
    .eq("slug", slug);

  if (deleteError) {
    throw new Error(
      `Kategori silinemedi: ${deleteError.message}`
    );
  }

  revalidatePath("/admin/kategoriler");
  revalidatePath(`/kategori/${slug}`);
  revalidatePath("/urunler");
  revalidatePath("/sitemap.xml");

  redirect("/admin/kategoriler");
}

async function removeCategoryImage(formData: FormData) {
  "use server";

  const slug = String(
    formData.get("current_slug") ?? ""
  ).trim();

  if (!slug) {
    throw new Error("Kategori slug bilgisi bulunamadi.");
  }

  const supabase = getSupabaseServer();

  const { data: category, error: categoryError } =
    await supabase
      .from("categories")
      .select("id, image")
      .eq("slug", slug)
      .single();

  if (categoryError || !category) {
    throw new Error("Kategori bulunamadi.");
  }

  if (category.image) {
    await deleteCategoryImage(category.image);
  }

  const { error: updateError } = await supabase
    .from("categories")
    .update({
      image: null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", category.id);

  if (updateError) {
    throw new Error(
      `Kategori gorseli veritabanindan silinemedi: ${updateError.message}`
    );
  }

  revalidatePath(`/admin/kategoriler/${slug}`);
  revalidatePath(`/kategori/${slug}`);
  revalidatePath("/admin/kategoriler");

  redirect(`/admin/kategoriler/${slug}`);
}

async function updateCategory(formData: FormData) {
  "use server";

  const currentSlug = String(
    formData.get("current_slug") ?? ""
  ).trim();

  const name = String(
    formData.get("name") ?? ""
  ).trim();

  const slug = String(
    formData.get("slug") ?? ""
  ).trim();

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

  const currentImage = String(
    formData.get("current_image") ?? ""
  ).trim();

  const imageFile = formData.get("image_file");

  const status = String(
    formData.get("status") ?? "published"
  );

  const sortOrderRaw = String(
    formData.get("sort_order") ?? "0"
  ).trim();

  if (!currentSlug) {
    throw new Error("Mevcut kategori slug bilgisi bulunamadı.");
  }

  if (!name) {
    throw new Error("Kategori adı boş bırakılamaz.");
  }

  if (!slug) {
    throw new Error("Slug boş bırakılamaz.");
  }

  const sortOrder = Number(sortOrderRaw);

  if (Number.isNaN(sortOrder)) {
    throw new Error("Sıralama geçerli bir sayı olmalıdır.");
  }

  let image = currentImage;

  if (imageFile instanceof File && imageFile.size > 0) {
    image = await uploadCategoryImage(imageFile, slug);
  }

  const { error } = await getSupabaseServer()
    .from("categories")
    .update({
      name,
      slug,
      description: description || null,
      seo_title: seoTitle || null,
      seo_description: seoDescription || null,
      focus_keyword: focusKeyword || null,
      image: image || null,
      status,
      sort_order: sortOrder,
      updated_at: new Date().toISOString(),
    })
    .eq("slug", currentSlug);

  if (error) {
    throw new Error(
      `Kategori güncellenemedi: ${error.message}`
    );
  }

  revalidatePath("/admin/kategoriler");
  revalidatePath(`/admin/kategoriler/${slug}`);
  revalidatePath(`/kategori/${slug}`);
  revalidatePath("/urunler");
  revalidatePath("/sitemap.xml");

  redirect(`/admin/kategoriler/${slug}`);
}

export default async function AdminCategoryEditPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const { data: category, error } =
    await getSupabaseServer()
      .from("categories")
      .select("*")
      .eq("slug", slug)
      .single();

  if (error || !category) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-500">
          Kategori Düzenleme
        </div>

        <h1 className="mt-2 text-3xl font-black">
          {category.name}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          ID: {category.id}
        </p>
      </div>

      <form action={updateCategory}>
        <input
          type="hidden"
          name="current_slug"
          value={category.slug}
        />

        <input
          type="hidden"
          name="current_image"
          value={category.image ?? ""}
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
          <div className="space-y-6">

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-xl font-bold">
                Kategori Bilgileri
              </h2>

              <div className="mt-6 grid gap-5">
                <label>
                  <div className="mb-2 text-sm font-bold">
                    Kategori Adı
                  </div>

                  <input
                    name="name"
                    defaultValue={category.name}
                    required
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
                      defaultValue={category.slug}
                      required
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </label>

                  <label>
                    <div className="mb-2 text-sm font-bold">
                      Sıralama
                    </div>

                    <input
                      name="sort_order"
                      type="number"
                      defaultValue={category.sort_order ?? 0}
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
                    defaultValue={category.description ?? ""}
                    rows={8}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
  <div className="mb-2 text-sm font-bold">
    Kategori Görseli
  </div>

  {category.image && (
    <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-3">
      <img
        src={category.image}
        alt={category.name}
        className="h-48 w-full object-contain"
      />

      <button
        type="submit"
        formAction={removeCategoryImage}
        formNoValidate
        className="mt-3 w-full rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-bold text-red-700 transition hover:bg-red-100"
      >
        {"Görseli Sil"}
      </button>
    </div>
  )}

  <input
    type="file"
    name="image_file"
    accept="image/jpeg,image/png,image/webp"
    className="w-full rounded-xl border bg-white px-4 py-3"
  />

  <p className="mt-2 text-xs text-gray-500">
    JPG, PNG veya WebP. Maksimum 8 MB.
    Yeni görsel seçmezsen mevcut görsel korunur.
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
                    defaultValue={category.seo_title ?? ""}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Meta Description
                  </div>

                  <textarea
                    name="seo_description"
                    defaultValue={category.seo_description ?? ""}
                    rows={5}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Focus Keyword
                  </div>

                  <input
                    name="focus_keyword"
                    defaultValue={category.focus_keyword ?? ""}
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
                defaultValue={category.status}
                className="mt-5 w-full rounded-xl border px-4 py-3"
              >
                <option value="published">
                  Yayında
                </option>

                <option value="draft">
                  Taslak
                </option>
              </select>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-black px-5 py-3 font-bold text-white"
              >
                Değişiklikleri Kaydet
              </button>
            </section>

            <a
              href={`/kategori/${category.slug}`}
              target="_blank"
              className="mt-4 block rounded-xl border bg-white px-5 py-3 text-center font-bold"
            >
              Kategoriyi Sitede Görüntüle
            </a>
          </aside>
        </div>
      </form>

      <section className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold text-red-800">
            Tehlikeli İşlemler
          </h2>

          <p className="mt-2 text-sm leading-6 text-red-700">
            Kategoriye bağlı ürün varsa silme işlemi engellenir.
            Boş kategoriler kalıcı olarak silinebilir.
            Bu işlem geri alınamaz.
          </p>

          <div className="mt-5">
            <DeleteCategoryButton
              slug={category.slug}
              deleteAction={deleteCategory}
            />
          </div>
        </div>
      </section>
    </div>
  );
}









