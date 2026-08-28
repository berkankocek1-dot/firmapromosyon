import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";
import ContactForm from "./ContactForm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const SLUG = "iletisim";
const SITE_URL = "https://www.firmapromosyon.com";

async function getPage() {
  const { data, error } = await getSupabaseServer()
    .from("pages")
    .select(`
      id,
      slug,
      title,
      content,
      seo_title,
      seo_description,
      focus_keyword,
      status
    `)
    .eq("slug", SLUG)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    throw new Error(
      `İletişim sayfası alınamadı: ${error.message}`
    );
  }

  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage();

  if (!page) {
    return {
      title: "İletişim | FirmaPromosyon",
      alternates: {
        canonical: `${SITE_URL}/${SLUG}`,
      },
    };
  }

  return {
    title:
      page.seo_title ||
      `${page.title} | FirmaPromosyon`,

    description:
      page.seo_description || undefined,

    alternates: {
      canonical: `${SITE_URL}/${page.slug}`,
    },
  };
}

function splitContent(content: string | null) {
  if (!content) {
    return [];
  }

  return content
    .split(/\r?\n\s*\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export default async function ContactPage() {
  const page = await getPage();

  if (!page) {
    notFound();
  }

  const contentParts = splitContent(page.content);

  const intro =
    contentParts[0] ??
    "Teklif almak veya bilgi istemek için formu doldurun.";

  const footerText =
    contentParts[1] ??
    "Alternatif olarak doğrudan WhatsApp butonunu da kullanabilirsiniz.";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-3xl font-bold text-black">
          {page.title}
        </h1>

        <p className="mt-3 text-base text-gray-700">
          {intro}
        </p>

        <ContactForm />

        <div className="mt-8 text-sm text-gray-600">
          {footerText}
        </div>
      </div>
    </main>
  );
}
