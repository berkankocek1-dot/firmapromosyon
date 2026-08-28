export const runtime = "nodejs";

import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase/server";
import { submitLead } from "../actions/lead";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const SLUG = "kurumsal-teklif-al";
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
      `Kurumsal teklif sayfası alınamadı: ${error.message}`
    );
  }

  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage();

  if (!page) {
    return {
      title: "Kurumsal Teklif Al | FirmaPromosyon",
      description:
        "Kurumsal promosyon ürünleri ve baskı çözümleri için hızlı teklif alın.",
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

function parsePageContent(content: string | null) {
  const fallback = {
    intro:
      "DTF baskı, kurumsal tekstil ve promosyon ürünleri için teklifinizi hızlıca alın. Logonuzu ve ürün/adet detaylarını paylaşın, aynı gün fiyat çalışalım.",

    offerItems: [
      "DTF Transfer Baskı",
      "Baskılı Tişört / Sweatshirt",
      "Şapka / Forma / İş Kıyafeti",
      "Kupa / Ajanda / Kalem / Set",
    ],

    processIntro:
      "Tekliften teslimata kadar şeffaf ve hızlı ilerliyoruz.",

    processSteps: [
      {
        title: "Bilgiyi Alalım",
        text: "Ürün, adet ve detayları alırız.",
      },
      {
        title: "Fiyat Çalışalım",
        text: "Alternatifli fiyat sunarız.",
      },
      {
        title: "Üretim & Teslim",
        text: "Onay sonrası üretim başlar.",
      },
    ],
  };

  if (!content) {
    return fallback;
  }

  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim());

  const firstHeadingIndex = lines.findIndex(
    (line) => line.startsWith("## ")
  );

  const introLines =
    firstHeadingIndex === -1
      ? lines
      : lines.slice(0, firstHeadingIndex);

  const intro =
    introLines.filter(Boolean).join(" ") ||
    fallback.intro;

  const offerHeadingIndex = lines.findIndex(
    (line) =>
      line.toLocaleLowerCase("tr-TR") ===
      "## neye teklif veriyoruz?"
  );

  const processHeadingIndex = lines.findIndex(
    (line) =>
      line.toLocaleLowerCase("tr-TR") ===
      "## süreç"
  );

  let offerItems = fallback.offerItems;

  if (offerHeadingIndex !== -1) {
    const end =
      processHeadingIndex > offerHeadingIndex
        ? processHeadingIndex
        : lines.length;

    const found = lines
      .slice(offerHeadingIndex + 1, end)
      .filter((line) => line.startsWith("- "))
      .map((line) => line.slice(2).trim())
      .filter(Boolean);

    if (found.length > 0) {
      offerItems = found;
    }
  }

  let processIntro = fallback.processIntro;
  let processSteps = fallback.processSteps;

  if (processHeadingIndex !== -1) {
    const processLines = lines
      .slice(processHeadingIndex + 1)
      .filter(Boolean);

    const firstListIndex = processLines.findIndex(
      (line) => line.startsWith("- ")
    );

    if (firstListIndex > 0) {
      processIntro = processLines
        .slice(0, firstListIndex)
        .join(" ");
    }

    const stepLines = processLines
      .filter((line) => line.startsWith("- "))
      .map((line) => line.slice(2).trim());

    const parsedSteps = stepLines
      .map((line) => {
        const separatorIndex = line.indexOf(":");

        if (separatorIndex === -1) {
          return {
            title: line,
            text: "",
          };
        }

        return {
          title: line
            .slice(0, separatorIndex)
            .trim(),

          text: line
            .slice(separatorIndex + 1)
            .trim(),
        };
      })
      .filter((step) => step.title);

    if (parsedSteps.length > 0) {
      processSteps = parsedSteps;
    }
  }

  return {
    intro,
    offerItems,
    processIntro,
    processSteps,
  };
}

export default async function KurumsalTeklifAlPage() {
  const page = await getPage();

  if (!page) {
    notFound();
  }

  const {
    intro,
    offerItems,
    processIntro,
    processSteps,
  } = parsePageContent(page.content);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.06),transparent_40%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              30 dk içinde dönüş • Kurumsal toplu sipariş
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 md:text-5xl">
              {page.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              {intro}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Badge
                title="Hızlı Üretim"
                desc="Yoğunluğa göre planlama"
              />

              <Badge
                title="Türkiye Geneli"
                desc="Kargo / elden teslim"
              />
            </div>

            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold text-zinc-900">
                Neye teklif veriyoruz?
              </div>

              <ul className="mt-3 grid gap-2 text-sm text-zinc-600 sm:grid-cols-2">
                {offerItems.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-bold text-zinc-950">
                  Teklif Formu
                </div>

                <p className="mt-1 text-sm text-zinc-600">
                  Bilgileri doldur, ekibimiz sana mail ile dönüş yapsın.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-zinc-50 p-2">
                <Image
                  src="/logo.png"
                  alt="FirmaPromosyon"
                  width={120}
                  height={30}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <form
              action={submitLeadAction}
              className="mt-6 space-y-4"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  label="Firma Adı"
                  name="company"
                  placeholder="Örn: ABC İnşaat"
                />

                <Field
                  label="Yetkili Ad Soyad"
                  name="name"
                  placeholder="Örn: Ahmet Yılmaz"
                  required
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  label="Telefon"
                  name="phone"
                  placeholder="05xx xxx xx xx"
                  required
                />

                <Field
                  label="E-posta"
                  name="email"
                  type="email"
                  placeholder="ornek@firma.com"
                  required
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  label="Ürün"
                  name="product"
                  placeholder="Tişört / Kupa / Ajanda..."
                  required
                />

                <Field
                  label="Adet"
                  name="qty"
                  placeholder="Örn: 100"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-zinc-800">
                  Not / Detay
                </label>

                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="Dosya linki, ölçü, baskı alanı, model, renk vb."
                />

                <p className="mt-2 text-xs text-zinc-500">
                  ⚠️ Yasal not: Bu form bilgilendirme/teklif amaçlıdır.
                  Fiyatlar sipariş detayına göre değişir.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-bold text-white hover:bg-zinc-800"
              >
                Teklif Gönder
              </button>

              <div className="text-center text-xs text-zinc-500">
                Ortalama dönüş:{" "}
                <span className="font-semibold text-zinc-800">
                  30–120 dakika
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-zinc-950">
          Süreç
        </h2>

        <p className="mt-2 text-zinc-600">
          {processIntro}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Step
              key={`${step.title}-${index}`}
              n={String(index + 1)}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

async function submitLeadAction(
  formData: FormData
) {
  "use server";

  const payload = {
    company: String(
      formData.get("company") || ""
    ),

    name: String(
      formData.get("name") || ""
    ),

    phone: String(
      formData.get("phone") || ""
    ),

    email: String(
      formData.get("email") || ""
    ),

    product: String(
      formData.get("product") || ""
    ),

    qty: String(
      formData.get("qty") || ""
    ),

    message: String(
      formData.get("message") || ""
    ),
  };

  await submitLead(payload);

  redirect("/kurumsal-teklif-al/basarili");
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-zinc-800">
        {label}{" "}
        {required ? (
          <span className="text-red-500">
            *
          </span>
        ) : null}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
      />
    </div>
  );
}

function Badge({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-sm font-bold text-zinc-950">
        {title}
      </div>

      <div className="mt-1 text-xs text-zinc-600">
        {desc}
      </div>
    </div>
  );
}

function Step({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm font-extrabold text-white">
        {n}
      </div>

      <div className="mt-4 text-lg font-bold text-zinc-950">
        {title}
      </div>

      <div className="mt-2 text-sm text-zinc-600">
        {text}
      </div>
    </div>
  );
}
