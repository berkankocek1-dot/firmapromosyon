import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseServer } from "@/lib/supabase/server";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function updateProduct(formData: FormData) {
  "use server";

  const currentSlug = String(formData.get("current_slug") ?? "");
  const slug = String(formData.get("slug") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const shortDesc = String(formData.get("short_desc") ?? "").trim();
  const longDesc = String(formData.get("long_desc") ?? "").trim();
  const priceRaw = String(formData.get("price") ?? "").trim();
  const seoTitle = String(formData.get("seo_title") ?? "").trim();
  const seoDescription = String(formData.get("seo_description") ?? "").trim();
  const focusKeyword = String(formData.get("focus_keyword") ?? "").trim();
  const canonicalUrl = String(formData.get("canonical_url") ?? "").trim();
  const image = String(formData.get("image") ?? "").trim();
  const status = String(formData.get("status") ?? "published");

  const robotsIndex = formData.get("robots_index") === "on";
  const robotsFollow = formData.get("robots_follow") === "on";

  if (!currentSlug) throw new Error("Mevcut slug bulunamadı.");
  if (!slug) throw new Error("Slug boş bırakılamaz.");
  if (!title) throw new Error("Ürün adı boş bırakılamaz.");
  if (!category) throw new Error("Kategori boş bırakılamaz.");

  let price: number | null = null;

  if (priceRaw) {
    const parsedPrice = Number(priceRaw.replace(",", "."));

    if (Number.isNaN(parsedPrice)) {
      throw new Error("Fiyat geçerli bir sayı olmalıdır.");
    }

    price = parsedPrice;
  }

  const { error } = await getSupabaseServer()
    .from("products")
    .update({
      slug,
      title,
      category,
      short_desc: shortDesc,
      long_desc: longDesc,
      price,
      image,
      seo_title: seoTitle || null,
      seo_description: seoDescription || null,
      focus_keyword: focusKeyword || null,
      canonical_url:
        canonicalUrl ||
        `https://www.firmapromosyon.com/urunler/${slug}`,
      og_title: seoTitle || title,
      og_description: seoDescription || shortDesc,
      og_image: image,
      robots_index: robotsIndex,
      robots_follow: robotsFollow,
      status,
    })
    .eq("slug", currentSlug);

  if (error) {
    throw new Error(`Ürün güncellenemedi: ${error.message}`);
  }

  revalidatePath("/admin/urunler");
  revalidatePath(`/admin/urunler/${slug}`);
  revalidatePath(`/urunler/${slug}`);

  redirect(`/admin/urunler/${slug}`);
}

export default async function AdminProductEditPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: product, error } = await getSupabaseServer()
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !product) notFound();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-500">
          Ürün Düzenleme
        </div>

        <h1 className="mt-2 text-3xl font-black">{product.title}</h1>

        <p className="mt-2 text-sm text-gray-500">ID: {product.id}</p>
      </div>

      <form action={updateProduct}>
        <input type="hidden" name="current_slug" value={product.slug} />

        <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-xl font-bold">Ürün Bilgileri</h2>

              <div className="mt-6 grid gap-5">
                <label>
                  <div className="mb-2 text-sm font-bold">Ürün Adı</div>
                  <input
                    name="title"
                    defaultValue={product.title}
                    required
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-2">
                  <label>
                    <div className="mb-2 text-sm font-bold">Slug</div>
                    <input
                      name="slug"
                      defaultValue={product.slug}
                      required
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </label>

                  <label>
                    <div className="mb-2 text-sm font-bold">Kategori</div>
                    <input
                      name="category"
                      defaultValue={product.category}
                      required
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label>
                    <div className="mb-2 text-sm font-bold">Fiyat</div>
                    <input
                      name="price"
                      defaultValue={product.price ?? ""}
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </label>

                  <label>
                    <div className="mb-2 text-sm font-bold">Ana Görsel</div>
                    <input
                      name="image"
                      defaultValue={product.image ?? ""}
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </label>
                </div>

                <label>
                  <div className="mb-2 text-sm font-bold">Kısa Açıklama</div>
                  <textarea
                    name="short_desc"
                    defaultValue={product.short_desc ?? ""}
                    rows={5}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">Uzun Açıklama</div>
                  <textarea
                    name="long_desc"
                    defaultValue={product.long_desc ?? ""}
                    rows={18}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-xl font-bold">SEO Ayarları</h2>

              <div className="mt-6 grid gap-5">
                <label>
                  <div className="mb-2 text-sm font-bold">SEO Title</div>
                  <input
                    name="seo_title"
                    defaultValue={product.seo_title ?? ""}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Meta Description
                  </div>
                  <textarea
                    name="seo_description"
                    defaultValue={product.seo_description ?? ""}
                    rows={5}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">Focus Keyword</div>
                  <input
                    name="focus_keyword"
                    defaultValue={product.focus_keyword ?? ""}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">Canonical URL</div>
                  <input
                    name="canonical_url"
                    defaultValue={product.canonical_url ?? ""}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="robots_index"
                    defaultChecked={product.robots_index}
                  />
                  Index
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="robots_follow"
                    defaultChecked={product.robots_follow}
                  />
                  Follow
                </label>
              </div>
            </section>
          </div>

          <aside>
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-lg font-bold">Yayın</h2>

              <select
                name="status"
                defaultValue={product.status}
                className="mt-5 w-full rounded-xl border px-4 py-3"
              >
                <option value="published">Yayında</option>
                <option value="draft">Taslak</option>
                <option value="archived">Arşiv</option>
              </select>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-black px-5 py-3 font-bold text-white"
              >
                Değişiklikleri Kaydet
              </button>

              <div className="mt-6 border-t pt-5 text-sm">
                <div>
                  FAQ:{" "}
                  <strong>
                    {Array.isArray(product.faq)
                      ? `${product.faq.length} adet`
                      : "0 adet"}
                  </strong>
                </div>

                <div className="mt-2">
                  Galeri:{" "}
                  <strong>
                    {Array.isArray(product.gallery)
                      ? `${product.gallery.length} görsel`
                      : "0 görsel"}
                  </strong>
                </div>
              </div>
            </section>

            <a
              href={`/urunler/${product.slug}`}
              target="_blank"
              className="mt-4 block rounded-xl border bg-white px-5 py-3 text-center font-bold"
            >
              Ürünü Sitede Görüntüle
            </a>
          </aside>
        </div>
      </form>
    </div>
  );
}


