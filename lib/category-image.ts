import { getSupabaseServer } from "@/lib/supabase/server";

const BUCKET = "category-images";

function safeFileName(name: string) {
  const extension = name.includes(".")
    ? name.split(".").pop()?.toLowerCase() || "jpg"
    : "jpg";

  const base = name
    .replace(/\.[^/.]+$/, "")
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `${base || "kategori"}.${extension}`;
}

export async function uploadCategoryImage(
  file: File,
  slug: string
) {
  if (!file || file.size === 0) {
    throw new Error("Kategori görseli seçilmedi.");
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("Yalnızca görsel dosyaları yüklenebilir.");
  }

  const maxSize = 8 * 1024 * 1024;

  if (file.size > maxSize) {
    throw new Error("Kategori görseli en fazla 8 MB olabilir.");
  }

  const supabase = getSupabaseServer();

  const fileName = safeFileName(file.name);
  const unique = Date.now();

  const path = `${slug}/${unique}-${fileName}`;

  const arrayBuffer = await file.arrayBuffer();

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, arrayBuffer, {
      contentType: file.type,
      cacheControl: "31536000",
      upsert: false,
    });

  if (error) {
    throw new Error(
      `Kategori görseli yüklenemedi: ${error.message}`
    );
  }

  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(path);

  return data.publicUrl;
}

export async function deleteCategoryImage(
  imageUrl: string
) {
  if (!imageUrl) {
    return;
  }

  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const markerIndex = imageUrl.indexOf(marker);

  if (markerIndex === -1) {
    return;
  }

  const storagePath = decodeURIComponent(
    imageUrl.slice(markerIndex + marker.length)
  );

  if (!storagePath) {
    return;
  }

  const { error } = await getSupabaseServer()
    .storage
    .from(BUCKET)
    .remove([storagePath]);

  if (error) {
    throw new Error(
      `Kategori görseli silinemedi: ${error.message}`
    );
  }
}
