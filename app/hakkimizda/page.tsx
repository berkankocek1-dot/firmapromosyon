import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const SLUG = "hakkimizda";
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
      `Hakkımızda sayfası alınamadı: ${error.message}`
    );
  }

  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage();

  if (!page) {
    return {
      title: "Hakkımızda | FirmaPromosyon",
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

function renderContent(content: string | null) {
  if (!content) {
    return null;
  }

  const lines = content.split(/\r?\n/);
  const elements: ReactNode[] = [];

  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`heading-${index}`}
          className="mb-4 mt-8 text-2xl font-semibold text-white"
        >
          {line.slice(3).trim()}
        </h2>
      );

      index++;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (
        index < lines.length &&
        lines[index].trim().startsWith("- ")
      ) {
        items.push(
          lines[index].trim().slice(2).trim()
        );

        index++;
      }

      elements.push(
        <ul
          key={`list-${index}`}
          className="mb-6 list-disc space-y-2 pl-6 text-white/90"
        >
          {items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>
              {item}
            </li>
          ))}
        </ul>
      );

      continue;
    }

    const paragraphLines: string[] = [line];
    index++;

    while (index < lines.length) {
      const nextLine = lines[index].trim();

      if (
        !nextLine ||
        nextLine.startsWith("## ") ||
        nextLine.startsWith("- ")
      ) {
        break;
      }

      paragraphLines.push(nextLine);
      index++;
    }

    elements.push(
      <p
        key={`paragraph-${index}`}
        className="mb-4 leading-7 text-white/80"
      >
        {paragraphLines.join(" ")}
      </p>
    );
  }

  return elements;
}

export default async function HakkimizdaPage() {
  const page = await getPage();

  if (!page) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">
        {page.title}
      </h1>

      {renderContent(page.content)}
    </main>
  );
}

