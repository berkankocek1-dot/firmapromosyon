import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

import { getSupabaseServer } from "@/lib/supabase/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { categories } from "@/data/categories";
import { uploadProductImage } from "@/lib/product-image";

function slugifyTR(value: string) {
  return value
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

async function createProduct(formData: FormData) {
  "use server";

  if (!(await isAdminAuthenticated())) {
    redirect("/admin-login");
  }

  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();

  const slug = slugInput
    ? slugifyTR(slugInput)
    : slugifyTR(title);

  const category = String(formData.get("category") ?? "").trim();

  const priceRaw = String(formData.get("price") ?? "").trim();

  const imageFile = formData.get("image_file");

  const shortDesc = String(
    formData.get("short_desc") ?? ""
  ).trim();

  const longDesc = String(
    formData.get("long_desc") ?? ""
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

  const canonicalInput = String(
    formData.get("canonical_url") ?? ""
  ).trim();

  const status = String(
    formData.get("status") ?? "draft"
  );

  const robotsIndex =
    formData.get("robots_index") === "on";

  const robotsFollow =
    formData.get("robots_follow") === "on";

  if (!title) {
    throw new Error("Ürün adı boş bırakılamaz.");
  }

  if (!slug) {
    throw new Error("Slug oluşturulamadı.");
  }

  if (!category) {
    throw new Error("Kategori seçmelisiniz.");
  }



  let price: number | null = null;

  if (priceRaw) {
    const normalizedPrice = priceRaw
      .replace(/\s/g, "")
      .replace(",", ".");

    const parsed = Number(normalizedPrice);

    if (Number.isNaN(parsed)) {
      throw new Error("Fiyat geçerli bir sayı olmalıdır.");
    }

    price = parsed;
  }

  if (!(imageFile instanceof File) || imageFile.size === 0) {
    throw new Error("Ana ürün görseli seçmelisiniz.");
  }

  const image = await uploadProductImage(imageFile, slug);

  const supabase = getSupabaseServer();

  const { data: existingProduct } = await supabase
    .from("products")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (existingProduct) {
    throw new Error(
      "Bu slug ile kayıtlı başka bir ürün bulunuyor."
    );
  }

  const { data: lastProduct } = await supabase
    .from("products")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  const nextSortOrder =
    Number(lastProduct?.sort_order ?? -1) + 1;

  const canonicalUrl =
    canonicalInput ||
    `https://www.firmapromosyon.com/urunler/${slug}`;

  const { error } = await supabase
    .from("products")
    .insert({
      id: crypto.randomUUID(),

      slug,
      title,
      category,
      price,

      image,
      gallery: [],
      faq: [],

      short_desc: shortDesc,
      long_desc: longDesc,

      seo_title: seoTitle || title,

      seo_description:
        seoDescription || shortDesc,

      focus_keyword:
        focusKeyword || null,

      canonical_url: canonicalUrl,

      og_title:
        seoTitle || title,

      og_description:
        seoDescription || shortDesc,

      og_image: image,

      robots_index: robotsIndex,
      robots_follow: robotsFollow,

      status,

      featured: false,
      sort_order: nextSortOrder,
    });

  if (error) {
    throw new Error(
      `Ürün oluşturulamadı: ${error.message}`
    );
  }

  revalidatePath("/admin");
  revalidatePath("/admin/urunler");

  revalidatePath("/urunler");
  revalidatePath(`/urunler/${slug}`);

  revalidatePath(
    `/kategori/${slugifyTR(category)}`
  );

  revalidatePath("/sitemap.xml");

  redirect(`/admin/urunler/${slug}`);
}

export default async function NewProductPage() {
  const { data: categoryRows, error: categoryError } =
    await getSupabaseServer()
      .from("categories")
      .select("name, slug, sort_order, status")
      .eq("status", "published")
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });

  if (categoryError) {
    throw new Error(
      `Kategoriler y?klenemedi: ${categoryError.message}`
    );
  }

  const categories = categoryRows ?? [];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-500">
          Ürün Yönetimi
        </div>

        <h1 className="mt-2 text-3xl font-black">
          Yeni Ürün Ekle
        </h1>

        <p className="mt-2 text-gray-600">
          Yeni ürünü Supabase veritabanına ekleyin.
          Yayına aldığınız ürün otomatik olarak
          sitede görünür.
        </p>
      </div>

      <form action={createProduct}>
        <div className="grid gap-6 xl:grid-cols-[1fr_340px]">

          <div className="space-y-6">

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">
                Ürün Bilgileri
              </h2>

              <div className="mt-6 grid gap-5">

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Ürün Adı *
                  </div>

                  <input
                    name="title"
                    required
                    placeholder="Promosyon Metal Kalem MK-100"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-2">

                  <label>
                    <div className="mb-2 text-sm font-bold">
                      Slug
                    </div>

                    <input
                      name="slug"
                      placeholder="promosyon-metal-kalem-mk-100"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                      Boş bırakırsanız ürün adından otomatik oluşturulur.
                    </p>
                  </label>

                  <label>
                    <div className="mb-2 text-sm font-bold">
                      Kategori *
                    </div>

                    <select
                      name="category"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-gray-300 px-4 py-3"
                    >
                      <option value="" disabled>
                        Kategori seç
                      </option>

                      {categories.map((category) => (
                        <option
                          key={category.slug}
                          value={category.name}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </label>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <label>
                    <div className="mb-2 text-sm font-bold">
                      Fiyat
                    </div>

                    <input
                      name="price"
                      inputMode="decimal"
                      placeholder="31,20"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                      KDV hariç referans ürün fiyatı.
                    </p>
                  </label>

                  <label>
  <div className="mb-2 text-sm font-bold">
    Ana Görsel *
  </div>

  <input
    type="file"
    name="image_file"
    accept="image/jpeg,image/png,image/webp"
    required
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
  />

  <p className="mt-2 text-xs text-gray-500">
    JPG, PNG veya WebP. Maksimum 8 MB.
  </p>
</label>

                </div>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Kısa Açıklama
                  </div>

                  <textarea
                    name="short_desc"
                    rows={5}
                    placeholder="Ürün kartlarında ve Google açıklamasında kullanılabilecek kısa ürün açıklaması..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 leading-relaxed"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Uzun Açıklama
                  </div>

                  <textarea
                    name="long_desc"
                    rows={18}
                    placeholder="Ürünün detaylı açıklaması, teknik özellikleri, kullanım alanları..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 leading-relaxed"
                  />
                </label>

              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold">
                SEO Ayarları
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Boş bırakılan SEO alanlarında ürün
                bilgileri varsayılan olarak kullanılır.
              </p>

              <div className="mt-6 grid gap-5">

                <label>
                  <div className="mb-2 text-sm font-bold">
                    SEO Title
                  </div>

                  <input
                    name="seo_title"
                    placeholder="Google sonuç başlığı"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Meta Description
                  </div>

                  <textarea
                    name="seo_description"
                    rows={4}
                    placeholder="Google sonuç açıklaması..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Focus Keyword
                  </div>

                  <input
                    name="focus_keyword"
                    placeholder="promosyon metal kalem"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Canonical URL
                  </div>

                  <input
                    name="canonical_url"
                    placeholder="Boş bırakılırsa otomatik oluşturulur"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3"
                  />
                </label>

                <div className="grid gap-4 md:grid-cols-2">

                  <label className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                    <input
                      type="checkbox"
                      name="robots_index"
                      defaultChecked
                    />

                    <div>
                      <div className="font-bold">
                        Index
                      </div>

                      <div className="text-xs text-gray-500">
                        Google sayfayı indexleyebilir.
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                    <input
                      type="checkbox"
                      name="robots_follow"
                      defaultChecked
                    />

                    <div>
                      <div className="font-bold">
                        Follow
                      </div>

                      <div className="text-xs text-gray-500">
                        Google linkleri takip edebilir.
                      </div>
                    </div>
                  </label>

                </div>

              </div>
            </section>

          </div>

          <aside className="space-y-6">

            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold">
                Yayın
              </h2>

              <label className="mt-5 block">

                <div className="mb-2 text-sm font-bold">
                  Durum
                </div>

                <select
                  name="status"
                  defaultValue="draft"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3"
                >
                  <option value="draft">
                    Taslak
                  </option>

                  <option value="published">
                    Yayında
                  </option>
                </select>

              </label>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-black px-5 py-3 font-bold text-white transition hover:opacity-90"
              >
                Ürünü Oluştur
              </button>

            </section>

            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-900">

              <div className="font-bold">
                Tavsiye
              </div>

              <p className="mt-2 leading-6">
                Yeni ürünü önce Taslak olarak kaydedip
                tüm içerikleri kontrol ettikten sonra
                Yayında durumuna alabilirsiniz.
              </p>

            </section>

          </aside>

        </div>
      </form>
    </div>
  );
}




