import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import { categories } from "../data/categories";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error("Supabase env değerleri eksik.");
}

const supabase = createClient(
  supabaseUrl,
  supabaseSecretKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

async function migrateCategories() {
  console.log(`Toplam ${categories.length} kategori bulundu.`);

  const rows = categories.map((category, index) => ({
    name: category.name,
    slug: category.slug,
    seo_title: category.seoTitle,
    seo_description: category.seoDescription,
    description: "",
    focus_keyword: null,
    image: null,
    status: "published",
    sort_order: index,
  }));

  const { error } = await supabase
    .from("categories")
    .upsert(rows, {
      onConflict: "slug",
    });

  if (error) {
    console.error("Kategori aktarım hatası:");
    console.error(error);
    process.exit(1);
  }

  const { count, error: countError } = await supabase
    .from("categories")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (countError) {
    console.error(countError);
    process.exit(1);
  }

  console.log("----------------------------");
  console.log(`categories.ts : ${categories.length}`);
  console.log(`Supabase      : ${count ?? 0}`);
  console.log("----------------------------");
  console.log("Kategori aktarımı tamamlandı.");
}

migrateCategories();
