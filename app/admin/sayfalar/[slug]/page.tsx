import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function updatePage(formData: FormData) {
  "use server";

  const currentSlug = String(
    formData.get("current_slug") ?? ""
  ).trim();

  const title = String(
    formData.get("title") ?? ""
  ).trim();

  const slug = String(
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

  if (!currentSlug) {
    throw new Error(
      "Mevcut sayfa slug bilgisi bulunamadı."
    );
  }

  if (!title) {
    throw new Error(
      "Sayfa başlığı boş bırakılamaz."
    );
  }

  if (!slug) {
    throw new Error(
      "Slug boş bırakılamaz."
    );
  }

  if (
    status !== "draft" &&
    status !== "published"
  ) {
    throw new Error(
      "Geçersiz yayın durumu."
    );
  }

  const sortOrder = Number(sortOrderRaw);

  if (Number.isNaN(sortOrder)) {
    throw new Error(
      "Sıralama geçerli bir sayı olmalıdır."
    );
  }

  const supabase = getSupabaseServer();

  if (slug !== currentSlug) {
    const { data: existing, error: existingError } =
      await supabase
        .from("pages")
        .select("id")
        .eq("slug", slug)
        .maybeSingle();

    if (existingError) {
      throw new Error(
        `Slug kontrol edilemedi: ${existingError.message}`
      );
    }

    if (existing) {
      throw new Error(
        "Bu slug ile başka bir sayfa zaten kayıtlı."
      );
    }
  }

  const { error } = await supabase
    .from("pages")
    .update({
      title,
      slug,
      content: content || null,
      seo_title: seoTitle || null,
      seo_description: seoDescription || null,
      focus_keyword: focusKeyword || null,
      status,
      sort_order: sortOrder,
      updated_at: new Date().toISOString(),
    })
    .eq("slug", currentSlug);

  if (error) {
    throw new Error(
      `Sayfa güncellenemedi: ${error.message}`
    );
  }

  revalidatePath("/admin/sayfalar");
  revalidatePath(`/admin/sayfalar/${currentSlug}`);
  revalidatePath(`/admin/sayfalar/${slug}`);
  revalidatePath(`/${currentSlug}`);
  revalidatePath(`/${slug}`);
  revalidatePath("/sitemap.xml");

  redirect(`/admin/sayfalar/${slug}`);
}

export default async function AdminPageEditPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const { data: page, error } =
    await getSupabaseServer()
      .from("pages")
      .select("*")
      .eq("slug", slug)
      .single();

  if (error || !page) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-500">
          Sayfa Düzenleme
        </div>

        <h1 className="mt-2 text-3xl font-black">
          {page.title}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          ID: {page.id}
        </p>
      </div>

      <form action={updatePage}>
        <input
          type="hidden"
          name="current_slug"
          value={page.slug}
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <section className="rounded-2xl border bg-white p-6">
              <h2 className="text-xl font-bold">
                Sayfa Bilgileri
              </h2>

              <div className="mt-6 grid gap-5">
                <label>
                  <div className="mb-2 text-sm font-bold">
                    Sayfa Başlığı
                  </div>

                  <input
                    name="title"
                    required
                    defaultValue={page.title}
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
                      required
                      defaultValue={page.slug}
                      className="w-full rounded-xl border px-4 py-3"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                      Slug değiştirirsen sayfanın adresi de değişir.
                    </p>
                  </label>

                  <label>
                    <div className="mb-2 text-sm font-bold">
                      Sıralama
                    </div>

                    <input
                      name="sort_order"
                      type="number"
                      defaultValue={page.sort_order ?? 0}
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
                    rows={20}
                    defaultValue={page.content ?? ""}
                    className="w-full rounded-xl border px-4 py-3 font-mono text-sm leading-6"
                  />

                  <div className="mt-3 rounded-xl bg-gray-50 p-4 text-xs leading-6 text-gray-600">
                    <div>
                      <strong>Alt başlık:</strong> ## Başlık
                    </div>

                    <div>
                      <strong>Liste:</strong> - Liste maddesi
                    </div>

                    <div>
                      <strong>Paragraf:</strong> Normal metin
                    </div>
                  </div>
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
                    defaultValue={page.seo_title ?? ""}
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
                    defaultValue={page.seo_description ?? ""}
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </label>

                <label>
                  <div className="mb-2 text-sm font-bold">
                    Focus Keyword
                  </div>

                  <input
                    name="focus_keyword"
                    defaultValue={page.focus_keyword ?? ""}
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
                defaultValue={page.status}
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
              href={`/${page.slug}`}
              target="_blank"
              className="mt-4 block rounded-xl border bg-white px-5 py-3 text-center font-bold"
            >
              Sayfayı Sitede Görüntüle
            </a>

            <a
              href="/admin/sayfalar"
              className="mt-3 block rounded-xl border bg-white px-5 py-3 text-center font-bold"
            >
              Sayfalara Dön
            </a>

            <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <div className="font-bold text-blue-800">
                Anlık Güncelleme
              </div>

              <p className="mt-2 text-sm leading-6 text-blue-700">
                Kaydettiğiniz içerik ve SEO değişiklikleri
                Supabase'e yazılır. Dinamik bağlı sayfalarda
                yeniden deploy gerekmez.
              </p>
            </div>
          </aside>
        </div>
      </form>
    </div>
  );
}
