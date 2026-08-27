import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import { products } from "../data/products";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL bulunamadı.");
}

if (!supabaseSecretKey) {
  throw new Error("SUPABASE_SECRET_KEY bulunamadı.");
}

const supabase = createClient(supabaseUrl, supabaseSecretKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

async function migrateProducts() {
  console.log(`Toplam ${products.length} ürün bulundu.`);
  console.log("Supabase aktarımı başlıyor...");

  const batchSize = 100;

  for (let i = 0; i < products.length; i += batchSize) {
    const batch = products.slice(i, i + batchSize);

    const rows = batch.map((product, index) => ({
      id: product.id,
      slug: product.slug,
      title: product.title,

      short_desc: product.shortDesc ?? "",
      long_desc: product.longDesc ?? "",

      price: product.price ?? null,
      category: product.category,

      image: product.image ?? "",
      gallery: product.gallery ?? [],
      faq: product.faq ?? [],

      seo_title: product.title,
      seo_description: product.shortDesc ?? "",
      focus_keyword: null,
      canonical_url: `https://www.firmapromosyon.com/urunler/${product.slug}`,

      og_title: product.title,
      og_description: product.shortDesc ?? "",
      og_image: product.image ?? "",

      robots_index: true,
      robots_follow: true,

      status: "published",
      featured: false,

      sort_order: i + index,
    }));

    const { error } = await supabase
      .from("products")
      .upsert(rows, { onConflict: "id" });

    if (error) {
      console.error(
        `HATA — ${i + 1}-${Math.min(i + batch.length, products.length)}`
      );
      console.error(error);
      process.exit(1);
    }

    console.log(
      `✓ ${i + 1}-${Math.min(i + batch.length, products.length)} aktarıldı`
    );
  }

  console.log("Aktarım tamamlandı, kayıt sayısı kontrol ediliyor...");

  const { count, error: countError } = await supabase
    .from("products")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (countError) {
    console.error("Ürün sayısı kontrol edilirken hata oluştu:");
    console.error(countError);
    process.exit(1);
  }

  console.log("");
  console.log("--------------------------------");
  console.log(`products.ts : ${products.length}`);
  console.log(`Supabase    : ${count ?? 0}`);
  console.log("--------------------------------");

  if (count === products.length) {
    console.log("✓ Ürün sayıları eşleşiyor.");
    console.log("✓ Migration başarıyla tamamlandı.");
  } else {
    console.warn("⚠ Ürün sayıları eşleşmiyor.");
    console.warn("Aktarımı kontrol etmemiz gerekiyor.");
  }
}

migrateProducts().catch((error) => {
  console.error("Beklenmeyen hata oluştu:");
  console.error(error);
  process.exit(1);
});