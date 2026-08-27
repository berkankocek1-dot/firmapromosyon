import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseServer } from "@/lib/supabase/server";
import { uploadProductImage } from "@/lib/product-image";
import FAQEditor from "./FAQEditor";
import DeleteProductButton from "./DeleteProductButton";
import { isAdminAuthenticated } from "@/lib/admin-auth";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function removeGalleryImage(formData: FormData) {
  "use server";

  const slug = String(formData.get("current_slug") ?? "").trim();
  const imageUrl = String(
    formData.get("remove_gallery_url") ?? ""
  ).trim();

  if (!slug) {
    throw new Error("Ürün slug bilgisi bulunamadı.");
  }

  if (!imageUrl) {
    throw new Error("Silinecek galeri görseli bulunamadı.");
  }

  const supabase = getSupabaseServer();

  const { data: product, error: fetchError } = await supabase
    .from("products")
    .select("gallery")
    .eq("slug", slug)
    .single();

  if (fetchError || !product) {
    throw new Error(
      `Ürün bilgisi alınamadı: ${fetchError?.message ?? "Ürün bulunamadı."}`
    );
  }

  const currentGallery: string[] = Array.isArray(product.gallery)
    ? product.gallery
    : [];

  const newGallery = currentGallery.filter(
    (url: string) => url !== imageUrl
  );

  const { error: updateError } = await supabase
    .from("products")
    .update({
      gallery: newGallery,
    })
    .eq("slug", slug);

  if (updateError) {
    throw new Error(
      `Galeri görseli kaldırılamadı: ${updateError.message}`
    );
  }

  // Görsel Supabase Storage'dan yüklenmişse fiziksel dosyayı da temizle.
  try {
    const marker =
      "/storage/v1/object/public/product-images/";

    if (imageUrl.includes(marker)) {
      const storagePath = decodeURIComponent(
        imageUrl.split(marker)[1]
      );

      if (storagePath) {
        await supabase.storage
          .from("product-images")
          .remove([storagePath]);
      }
    }
  } catch {
    // Storage temizliği başarısız olsa bile ürün galerisi bozulmasın.
  }

  revalidatePath("/admin/urunler");
  revalidatePath(`/admin/urunler/${slug}`);
  revalidatePath(`/urunler/${slug}`);

  redirect(`/admin/urunler/${slug}`);
}

async function deleteProduct(formData: FormData) {
  "use server";

  if (!(await isAdminAuthenticated())) {
    redirect("/admin-login");
  }

  const slug = String(
    formData.get("delete_slug") ?? ""
  ).trim();

  if (!slug) {
    throw new Error("Silinecek ürün bulunamadı.");
  }

  const supabase = getSupabaseServer();

  const { data: product, error: fetchError } =
    await supabase
      .from("products")
      .select("id, image, gallery, category")
      .eq("slug", slug)
      .single();

  if (fetchError || !product) {
    throw new Error(
      `Ürün bulunamadı: ${
        fetchError?.message ?? "Bilinmeyen hata"
      }`
    );
  }

  const storageUrls: string[] = [];

  if (product.image) {
    storageUrls.push(product.image);
  }

  if (Array.isArray(product.gallery)) {
    storageUrls.push(...product.gallery);
  }

  const { error: deleteError } = await supabase
    .from("products")
    .delete()
    .eq("slug", slug);

  if (deleteError) {
    throw new Error(
      `Ürün silinemedi: ${deleteError.message}`
    );
  }

  // Supabase Storage içindeki ilgili görselleri de temizlemeye çalış.
  const marker =
    "/storage/v1/object/public/product-images/";

  const storagePaths = storageUrls
    .filter((url) => url.includes(marker))
    .map((url) =>
      decodeURIComponent(url.split(marker)[1])
    )
    .filter(Boolean);

  if (storagePaths.length > 0) {
    try {
      await supabase.storage
        .from("product-images")
        .remove(storagePaths);
    } catch {
      // Storage temizlenemese bile ürün veritabanından silinmiş olur.
    }
  }

  revalidatePath("/admin");
  revalidatePath("/admin/urunler");

  revalidatePath("/urunler");
  revalidatePath(`/urunler/${slug}`);

  revalidatePath("/sitemap.xml");

  redirect("/admin/urunler");
}

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
  const currentImage = String(formData.get("current_image") ?? "").trim();

  let gallery: string[] = [];

  try {
    gallery = JSON.parse(
      String(formData.get("current_gallery") ?? "[]")
    );
  } catch {
    gallery = [];
  }
  const imageFile = formData.get("image_file");
  const galleryFiles = formData.getAll("gallery_files");

  const faqQuestions = formData
    .getAll("faq_q")
    .map((value) => String(value).trim());

  const faqAnswers = formData
    .getAll("faq_a")
    .map((value) => String(value).trim());

  const faq = faqQuestions
    .map((q, index) => ({
      q,
      a: faqAnswers[index] ?? "",
    }))
    .filter((item) => item.q && item.a);
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

  let image = currentImage;

  if (imageFile instanceof File && imageFile.size > 0) {
    image = await uploadProductImage(imageFile, slug);
  }

  for (const file of galleryFiles) {
    if (file instanceof File && file.size > 0) {
      const uploadedUrl = await uploadProductImage(file, slug);
      gallery.push(uploadedUrl);
    }
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
      gallery,
      faq,
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

  const currentCategoryExists = categories.some(
    (category) => category.name === product.category
  );

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
        <input
          type="hidden"
          name="current_image"
          value={product.image ?? ""}
        />

        <input
          type="hidden"
          name="current_gallery"
          value={JSON.stringify(
            Array.isArray(product.gallery) ? product.gallery : []
          )}
        />

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
                    <div className="mb-2 text-sm font-bold">
                      Kategori
                    </div>

                    <select
                      name="category"
                      defaultValue={product.category}
                      required
                      className="w-full rounded-xl border px-4 py-3"
                    >
                      {!currentCategoryExists && product.category && (
                        <option value={product.category}>
                          {product.category} (Mevcut)
                        </option>
                      )}

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
                    <div className="mb-2 text-sm font-bold">Fiyat</div>
                    <input
                      name="price"
                      defaultValue={product.price ?? ""}
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </label>

                  <label>
  <div className="mb-2 text-sm font-bold">
    Ana Görsel
  </div>

  {product.image && (
    <div className="mb-3 rounded-xl border border-gray-200 bg-gray-50 p-3">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />
    </div>
  )}

  <input
    type="file"
    name="image_file"
    accept="image/jpeg,image/png,image/webp"
    className="w-full rounded-xl border px-4 py-3"
  />

  <p className="mt-2 text-xs text-gray-500">
    Yeni görsel seçmezsen mevcut görsel korunur.
  </p>
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

                <div>
                  <div className="mb-2 text-sm font-bold">
                    Galeri Görselleri
                  </div>

                  {Array.isArray(product.gallery) &&
                    product.gallery.length > 0 && (
                      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                        {product.gallery.map((url: string, index: number) => (
                          <div
                            key={`${url}-${index}`}
                            className="rounded-xl border border-gray-200 bg-gray-50 p-2"
                          >
                            <img
                              src={url}
                              alt={`${product.title} galeri ${index + 1}`}
                              className="h-28 w-full object-contain"
                            />

                            <button
                              type="submit"
                              formAction={async () => {
                                "use server";

                                const data = new FormData();
                                data.set("current_slug", product.slug);
                                data.set("remove_gallery_url", url);

                                await removeGalleryImage(data);
                              }}
                              className="mt-2 w-full rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-50"
                            >
                              Görseli Sil
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                  <input
                    type="file"
                    name="gallery_files"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    className="w-full rounded-xl border px-4 py-3"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Birden fazla görsel seçebilirsin. Yeni görseller mevcut
                    galerinin sonuna eklenir.
                  </p>
                </div>
              </div>
            </section>

            <FAQEditor
              initialFaq={
                Array.isArray(product.faq)
                  ? product.faq
                  : []
              }
            />

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

      <section className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold text-red-800">
            Tehlikeli İşlemler
          </h2>

          <p className="mt-2 text-sm leading-6 text-red-700">
            Bu ürünü silerseniz ürün veritabanından kaldırılır,
            ürün sayfası yayından çıkar ve ilgili Supabase Storage
            görselleri de temizlenmeye çalışılır. Bu işlem geri alınamaz.
          </p>

          <div className="mt-5">
            <DeleteProductButton
              slug={product.slug}
              deleteAction={deleteProduct}
            />
          </div>
        </div>
      </section>
    </div>
  );
}























