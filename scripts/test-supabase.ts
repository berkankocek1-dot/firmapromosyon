import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";

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

async function test() {
  const { data, error } = await supabase
    .from("products")
    .select("id, slug, title, price, category")
    .order("sort_order", { ascending: true })
    .limit(3);

  if (error) {
    console.error("Supabase test hatası:");
    console.error(error);
    process.exit(1);
  }

  console.log("Supabase bağlantısı başarılı.");
  console.log(data);
}

test();