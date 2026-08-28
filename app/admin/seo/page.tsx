import Link from "next/link";
import { getSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type AuditResult = {
  score: number;
  issues: string[];
};

function hasText(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasFaq(value: unknown) {
  return Array.isArray(value) && value.length > 0;
}

function auditProduct(product: any): AuditResult {
  let score = 0;
  const issues: string[] = [];

  if (hasText(product.seo_title)) {
    score += 20;
  } else {
    issues.push("SEO Title eksik");
  }

  if (hasText(product.seo_description)) {
    score += 20;
  } else {
    issues.push("Meta Description eksik");
  }

  if (hasText(product.focus_keyword)) {
    score += 15;
  } else {
    issues.push("Focus Keyword eksik");
  }

  if (hasText(product.image)) {
    score += 10;
  } else {
    issues.push("Ana görsel eksik");
  }

  if (hasText(product.short_desc)) {
    score += 10;
  } else {
    issues.push("Kısa açıklama eksik");
  }

  if (hasText(product.long_desc)) {
    score += 15;
  } else {
    issues.push("Uzun açıklama eksik");
  }

  if (hasFaq(product.faq)) {
    score += 10;
  } else {
    issues.push("FAQ eksik");
  }

  return { score, issues };
}

function auditCategory(category: any): AuditResult {
  let score = 0;
  const issues: string[] = [];

  if (hasText(category.seo_title)) {
    score += 30;
  } else {
    issues.push("SEO Title eksik");
  }

  if (hasText(category.seo_description)) {
    score += 30;
  } else {
    issues.push("Meta Description eksik");
  }

  if (hasText(category.focus_keyword)) {
    score += 20;
  } else {
    issues.push("Focus Keyword eksik");
  }

  if (hasText(category.description)) {
    score += 15;
  } else {
    issues.push("Kategori a\u00e7\u0131klamas\u0131 eksik");
  }

  if (hasText(category.image)) {
    score += 5;
  } else {
    issues.push("Kategori g\u00f6rseli eksik");
  }

  return { score, issues };
}

function scoreClass(score: number) {
  if (score === 100) {
    return "bg-green-100 text-green-800";
  }

  if (score >= 85) {
    return "bg-blue-100 text-blue-800";
  }

  if (score >= 70) {
    return "bg-yellow-100 text-yellow-800";
  }

  return "bg-red-100 text-red-800";
}

function scoreLabel(score: number) {
  if (score === 100) return "Mükemmel";
  if (score >= 85) return "İyi";
  if (score >= 70) return "İyileştirilebilir";
  return "Kritik";
}

export default async function AdminSeoPage({
  searchParams,
}: {
  searchParams: Promise<{
    issue?: string;
    score?: string;
    categoryIssue?: string;
    categoryScore?: string;
  }>;
}) {
  const params = await searchParams;
  const selectedIssue = params.issue ?? "";
  const selectedScore = params.score ?? "";
  const selectedCategoryIssue = params.categoryIssue ?? "";
  const selectedCategoryScore = params.categoryScore ?? "";

  const supabase = getSupabaseServer();

  const [
    { data: products, error: productsError },
    { data: categories, error: categoriesError },
  ] = await Promise.all([
    supabase
      .from("products")
      .select(`
        id,
        slug,
        title,
        category,
        image,
        short_desc,
        long_desc,
        seo_title,
        seo_description,
        focus_keyword,
        faq,
        status
      `)
      .order("title", { ascending: true }),

    supabase
      .from("categories")
      .select(`
        id,
        slug,
        name,
        description,
        image,
        seo_title,
        seo_description,
        focus_keyword,
        status,
        sort_order
      `)
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true }),
  ]);

  if (productsError) {
    throw new Error(
      `Ürün SEO verileri alınamadı: ${productsError.message}`
    );
  }

  if (categoriesError) {
    throw new Error(
      `Kategori SEO verileri alınamadı: ${categoriesError.message}`
    );
  }

  const productRows = (products ?? []).map((product) => ({
    ...product,
    audit: auditProduct(product),
  }));

  const categoryRows = (categories ?? []).map((category) => ({
    ...category,
    audit: auditCategory(category),
  }));

  const averageProductScore =
    productRows.length > 0
      ? Math.round(
          productRows.reduce(
            (total, product) => total + product.audit.score,
            0
          ) / productRows.length
        )
      : 0;

  const averageCategoryScore =
    categoryRows.length > 0
      ? Math.round(
          categoryRows.reduce(
            (total, category) => total + category.audit.score,
            0
          ) / categoryRows.length
        )
      : 0;

  const criticalProducts = productRows.filter(
    (product) => product.audit.score < 70
  );

  const improvableProducts = productRows.filter(
    (product) =>
      product.audit.score >= 70 && product.audit.score < 85
  );

  const goodProducts = productRows.filter(
    (product) =>
      product.audit.score >= 85 && product.audit.score < 100
  );

  const perfectProducts = productRows.filter(
    (product) => product.audit.score === 100
  );

  const criticalCategories = categoryRows.filter(
    (category) => category.audit.score < 70
  );

  const perfectCategories = categoryRows.filter(
    (category) => category.audit.score === 100
  );

  const productIssueCounts = {
    "SEO Title eksik": productRows.filter((product) =>
      product.audit.issues.includes("SEO Title eksik")
    ).length,

    "Meta Description eksik": productRows.filter((product) =>
      product.audit.issues.includes("Meta Description eksik")
    ).length,

    "Focus Keyword eksik": productRows.filter((product) =>
      product.audit.issues.includes("Focus Keyword eksik")
    ).length,

    "Ana görsel eksik": productRows.filter((product) =>
      product.audit.issues.includes("Ana görsel eksik")
    ).length,

    "Kısa açıklama eksik": productRows.filter((product) =>
      product.audit.issues.includes("Kısa açıklama eksik")
    ).length,

    "Uzun açıklama eksik": productRows.filter((product) =>
      product.audit.issues.includes("Uzun açıklama eksik")
    ).length,

    "FAQ eksik": productRows.filter((product) =>
      product.audit.issues.includes("FAQ eksik")
    ).length,
  };

  const categoryIssueCounts = {
    "SEO Title eksik": categoryRows.filter((category) =>
      category.audit.issues.includes("SEO Title eksik")
    ).length,

    "Meta Description eksik": categoryRows.filter((category) =>
      category.audit.issues.includes("Meta Description eksik")
    ).length,

    "Focus Keyword eksik": categoryRows.filter((category) =>
      category.audit.issues.includes("Focus Keyword eksik")
    ).length,

    "Kategori açıklaması eksik": categoryRows.filter((category) =>
      category.audit.issues.includes("Kategori açıklaması eksik")
    ).length,

    "Kategori görseli eksik": categoryRows.filter((category) =>
      category.audit.issues.includes("Kategori görseli eksik")
    ).length,
  };

  let filteredProducts = productRows.filter(
    (product) => product.audit.issues.length > 0
  );

  if (selectedIssue) {
    filteredProducts = filteredProducts.filter((product) =>
      product.audit.issues.includes(selectedIssue)
    );
  }

  if (selectedScore === "critical") {
    filteredProducts = filteredProducts.filter(
      (product) => product.audit.score < 70
    );
  }

  if (selectedScore === "improvable") {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.audit.score >= 70 && product.audit.score < 85
    );
  }

  if (selectedScore === "good") {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.audit.score >= 85 && product.audit.score < 100
    );
  }

  filteredProducts.sort(
    (a, b) => a.audit.score - b.audit.score
  );

  let problematicCategories = categoryRows.filter(
    (category) => category.audit.issues.length > 0
  );

  if (selectedCategoryIssue) {
    problematicCategories = problematicCategories.filter((category) =>
      category.audit.issues.includes(selectedCategoryIssue)
    );
  }

  if (selectedCategoryScore === "critical") {
    problematicCategories = problematicCategories.filter(
      (category) => category.audit.score < 70
    );
  }

  if (selectedCategoryScore === "improvable") {
    problematicCategories = problematicCategories.filter(
      (category) =>
        category.audit.score >= 70 && category.audit.score < 85
    );
  }

  if (selectedCategoryScore === "good") {
    problematicCategories = problematicCategories.filter(
      (category) =>
        category.audit.score >= 85 && category.audit.score < 100
    );
  }

  problematicCategories.sort(
    (a, b) => a.audit.score - b.audit.score
  );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <div className="text-sm font-semibold text-gray-500">
          SEO Yönetimi
        </div>

        <h1 className="mt-2 text-3xl font-black">
          SEO Merkezi
        </h1>

        <p className="mt-2 max-w-3xl text-gray-600">
          Ürün ve kategorilerdeki SEO eksiklerini tespit edin,
          puanları takip edin ve sorunlu kayıtları doğrudan düzenleyin.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <section className="rounded-2xl border bg-white p-6">
          <div className="text-sm font-bold text-gray-500">
            Ürün SEO Ortalaması
          </div>

          <div className="mt-2 text-4xl font-black">
            %{averageProductScore}
          </div>

          <div className="mt-2 text-sm text-gray-500">
            {productRows.length} ürün analiz edildi
          </div>
        </section>

        <section className="rounded-2xl border bg-white p-6">
          <div className="text-sm font-bold text-gray-500">
            Kategori SEO Ortalaması
          </div>

          <div className="mt-2 text-4xl font-black">
            %{averageCategoryScore}
          </div>

          <div className="mt-2 text-sm text-gray-500">
            {categoryRows.length} kategori analiz edildi
          </div>
        </section>

        <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="text-sm font-bold text-red-700">
            Kritik Kayıtlar
          </div>

          <div className="mt-2 text-4xl font-black text-red-800">
            {criticalProducts.length + criticalCategories.length}
          </div>

          <div className="mt-2 text-sm text-red-700">
            SEO puanı 70'in altında
          </div>
        </section>

        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <div className="text-sm font-bold text-green-700">
            Mükemmel SEO
          </div>

          <div className="mt-2 text-4xl font-black text-green-800">
            {perfectProducts.length + perfectCategories.length}
          </div>

          <div className="mt-2 text-sm text-green-700">
            100 / 100 puana sahip kayıt
          </div>
        </section>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <section className="rounded-2xl border border-red-200 bg-white p-5">
          <div className="text-sm font-bold text-red-700">
            Kritik Ürün
          </div>
          <div className="mt-1 text-3xl font-black">
            {criticalProducts.length}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            0 - 69 puan
          </div>
        </section>

        <section className="rounded-2xl border border-yellow-200 bg-white p-5">
          <div className="text-sm font-bold text-yellow-700">
            İyileştirilebilir
          </div>
          <div className="mt-1 text-3xl font-black">
            {improvableProducts.length}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            70 - 84 puan
          </div>
        </section>

        <section className="rounded-2xl border border-blue-200 bg-white p-5">
          <div className="text-sm font-bold text-blue-700">
            İyi Ürün
          </div>
          <div className="mt-1 text-3xl font-black">
            {goodProducts.length}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            85 - 99 puan
          </div>
        </section>

        <section className="rounded-2xl border border-green-200 bg-white p-5">
          <div className="text-sm font-bold text-green-700">
            Mükemmel Ürün
          </div>
          <div className="mt-1 text-3xl font-black">
            {perfectProducts.length}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            100 / 100 puan
          </div>
        </section>
      </div>

      <section className="mt-8 rounded-2xl border bg-white p-6">
        <div>
          <h2 className="text-xl font-black">
            En Yaygın Ürün SEO Sorunları
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Hangi eksiklerin önce düzeltilmesi gerektiğini buradan görebilirsiniz.
          </p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(productIssueCounts).map(
            ([issue, count]) => (
              <Link
                key={issue}
                href={`/admin/seo?issue=${encodeURIComponent(issue)}`}
                className="rounded-xl border p-4 transition hover:bg-gray-50"
              >
                <div className="text-sm font-bold text-gray-600">
                  {issue}
                </div>

                <div className="mt-2 text-3xl font-black">
                  {count}
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border bg-white p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-xl font-black">
              Ürün Filtreleri
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              SEO sorunlarına göre ürün listesini daraltın.
            </p>
          </div>

          <Link
            href="/admin/seo"
            className="rounded-xl border px-4 py-2 text-center text-sm font-bold"
          >
            Filtreleri Temizle
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/admin/seo?score=critical"
            className={`rounded-xl border px-4 py-2 text-sm font-bold ${
              selectedScore === "critical"
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            Kritik
          </Link>

          <Link
            href="/admin/seo?score=improvable"
            className={`rounded-xl border px-4 py-2 text-sm font-bold ${
              selectedScore === "improvable"
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            İyileştirilebilir
          </Link>

          <Link
            href="/admin/seo?score=good"
            className={`rounded-xl border px-4 py-2 text-sm font-bold ${
              selectedScore === "good"
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            İyi
          </Link>
        </div>

        {(selectedIssue || selectedScore) && (
          <div className="mt-5 rounded-xl bg-gray-50 p-4 text-sm">
            <strong>Aktif filtre:</strong>{" "}
            {selectedIssue || scoreLabel(
              selectedScore === "critical"
                ? 50
                : selectedScore === "improvable"
                ? 75
                : 90
            )}
          </div>
        )}
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border bg-white">
        <div className="flex flex-col gap-4 border-b p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-black">
              Ürün SEO Listesi
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredProducts.length} ürün bulundu.
              En düşük SEO puanı üstte gösterilir.
            </p>
          </div>

          <Link
            href="/admin/urunler"
            className="rounded-xl border px-4 py-2 text-center text-sm font-bold"
          >
            Tüm Ürünlere Git
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead className="bg-gray-50 text-left text-sm text-gray-500">
              <tr>
                <th className="px-6 py-4">Ürün</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">SEO</th>
                <th className="px-6 py-4">Sorunlar</th>
                <th className="px-6 py-4 text-right">İşlem</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredProducts.slice(0, 100).map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    <div className="font-bold">
                      {product.title}
                    </div>

                    <div className="mt-1 text-xs text-gray-500">
                      /{product.slug}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm">
                    {product.category}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-col items-start gap-1">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-black ${scoreClass(
                          product.audit.score
                        )}`}
                      >
                        {product.audit.score}/100
                      </span>

                      <span className="text-xs font-semibold text-gray-500">
                        {scoreLabel(product.audit.score)}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex max-w-xl flex-wrap gap-2">
                      {product.audit.issues.map((issue) => (
                        <span
                          key={issue}
                          className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700"
                        >
                          {issue}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/admin/urunler/${product.slug}`}
                      className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-bold text-white"
                    >
                      Düzenle
                    </Link>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    Bu filtreye uygun ürün bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {filteredProducts.length > 100 && (
          <div className="border-t bg-gray-50 px-6 py-4 text-sm text-gray-500">
            Performans için ilk 100 kayıt gösteriliyor.
            Filtrelenmiş toplam ürün: {filteredProducts.length}
          </div>
        )}
      </section>

      <section className="mt-8 rounded-2xl border bg-white p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-xl font-black">
              Kategori SEO Analizi
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              31 kategoride hangi SEO alanlarının eksik olduğunu
              ve kaç kategoriyi etkilediğini görün.
            </p>
          </div>

          <Link
            href="/admin/seo"
            className="rounded-xl border px-4 py-2 text-center text-sm font-bold"
          >
            Kategori Filtrelerini Temizle
          </Link>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {Object.entries(categoryIssueCounts).map(
            ([issue, count]) => (
              <Link
                key={issue}
                href={`/admin/seo?categoryIssue=${encodeURIComponent(issue)}`}
                className={`rounded-xl border p-4 transition hover:bg-gray-50 ${
                  selectedCategoryIssue === issue
                    ? "border-black bg-gray-50"
                    : ""
                }`}
              >
                <div className="text-sm font-bold text-gray-600">
                  {issue}
                </div>

                <div className="mt-2 text-3xl font-black">
                  {count}
                </div>

                <div className="mt-1 text-xs text-gray-500">
                  kategori
                </div>
              </Link>
            )
          )}
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-black text-gray-700">
            Kategori Puanına Göre Filtrele
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="/admin/seo?categoryScore=critical"
              className={`rounded-xl border px-4 py-2 text-sm font-bold ${
                selectedCategoryScore === "critical"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              Kritik (0-69)
            </Link>

            <Link
              href="/admin/seo?categoryScore=improvable"
              className={`rounded-xl border px-4 py-2 text-sm font-bold ${
                selectedCategoryScore === "improvable"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              İyileştirilebilir (70-84)
            </Link>

            <Link
              href="/admin/seo?categoryScore=good"
              className={`rounded-xl border px-4 py-2 text-sm font-bold ${
                selectedCategoryScore === "good"
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              İyi (85-99)
            </Link>
          </div>

          {(selectedCategoryIssue || selectedCategoryScore) && (
            <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm">
              <strong>Aktif kategori filtresi:</strong>{" "}
              {selectedCategoryIssue ||
                (selectedCategoryScore === "critical"
                  ? "Kritik"
                  : selectedCategoryScore === "improvable"
                  ? "İyileştirilebilir"
                  : "İyi")}
            </div>
          )}
        </div>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border bg-white">
        <div className="flex flex-col gap-4 border-b p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-black">
              Sorunlu Kategoriler
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {problematicCategories.length} kategoride SEO geliştirmesi gerekiyor.
            </p>
          </div>

          <Link
            href="/admin/kategoriler"
            className="rounded-xl border px-4 py-2 text-center text-sm font-bold"
          >
            Tüm Kategorilere Git
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead className="bg-gray-50 text-left text-sm text-gray-500">
              <tr>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Durum</th>
                <th className="px-6 py-4">SEO</th>
                <th className="px-6 py-4">Sorunlar</th>
                <th className="px-6 py-4 text-right">İşlem</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {problematicCategories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4">
                    <div className="font-bold">
                      {category.name}
                    </div>

                    <div className="mt-1 text-xs text-gray-500">
                      /{category.slug}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                      {category.status === "published"
                        ? "Yayında"
                        : "Taslak"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-col items-start gap-1">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-black ${scoreClass(
                          category.audit.score
                        )}`}
                      >
                        {category.audit.score}/100
                      </span>

                      <span className="text-xs font-semibold text-gray-500">
                        {scoreLabel(category.audit.score)}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex max-w-xl flex-wrap gap-2">
                      {category.audit.issues.map((issue) => (
                        <span
                          key={issue}
                          className="rounded-lg bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700"
                        >
                          {issue}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/admin/kategoriler/${category.slug}`}
                      className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-bold text-white"
                    >
                      Düzenle
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
