export const runtime = "nodejs";

import Image from "next/image";
import { redirect } from "next/navigation";
import { submitLead } from "../actions/lead";

export const metadata = {
  title: "Kurumsal Teklif Al | FirmaPromosyon",
  description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif formu.",
};

export default function KurumsalTeklifAlPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
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
              Kurumsal Teklif Al
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              DTF baskı, kurumsal tekstil ve promosyon ürünleri için teklifini hızlıca al.
              Logonu yükle, adet/ürün detayını yaz — aynı gün fiyat çalışalım.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Badge title="Hızlı Üretim" desc="Yoğunluğa göre planlama" />
              <Badge title="Toplu Fiyat" desc="Kurumsala özel iskonto" />
              <Badge title="Türkiye Geneli" desc="Kargo / elden teslim" />
            </div>

            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold text-zinc-900">Neye teklif veriyoruz?</div>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-600 sm:grid-cols-2">
                <li>• DTF Transfer Baskı</li>
                <li>• Baskılı Tişört / Sweatshirt</li>
                <li>• Şapka / Forma / İş Kıyafeti</li>
                <li>• Kupa / Ajanda / Kalem / Set</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-bold text-zinc-950">Teklif Formu</div>
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

            <form action={submitLeadAction} className="mt-6 space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Firma Adı" name="company" placeholder="Örn: ABC İnşaat" />
                <Field label="Yetkili Ad Soyad" name="name" placeholder="Örn: Ahmet Yılmaz" required />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Telefon" name="phone" placeholder="05xx xxx xx xx" required />
                <Field label="E-posta" name="email" type="email" placeholder="ornek@firma.com" required />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Ürün" name="product" placeholder="Tişört / Kupa / Ajanda..." required />
                <Field label="Adet" name="qty" placeholder="Örn: 100" required />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-zinc-800">Not / Detay</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
                  placeholder="Dosya linki, ölçü, baskı alanı, model, renk vb."
                />
                <p className="mt-2 text-xs text-zinc-500">
                  ⚠️ Yasal not: Bu form bilgilendirme/teklif amaçlıdır. Fiyatlar sipariş detayına göre değişir.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-bold text-white hover:bg-zinc-800"
              >
                Teklif Gönder
              </button>

              <div className="text-center text-xs text-zinc-500">
                Ortalama dönüş: <span className="font-semibold text-zinc-800">30–120 dakika</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-zinc-950">Süreç</h2>
        <p className="mt-2 text-zinc-600">Tekliften teslimata kadar şeffaf ve hızlı ilerliyoruz.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Step n="1" title="Bilgiyi Alalım" text="Ürün, adet, baskı detayını ve logonu alırız." />
          <Step n="2" title="Fiyat Çalışalım" text="Alternatifli fiyat + termin sunarız." />
          <Step n="3" title="Üretim & Teslim" text="Onay sonrası üretim, kargo/elden teslim." />
        </div>
      </section>
    </main>
  );
}

async function submitLeadAction(formData: FormData) {
  "use server";

  const payload = {
    company: String(formData.get("company") || ""),
    name: String(formData.get("name") || ""),
    phone: String(formData.get("phone") || ""),
    email: String(formData.get("email") || ""),
    product: String(formData.get("product") || ""),
    qty: String(formData.get("qty") || ""),
    message: String(formData.get("message") || ""),
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
        {label} {required ? <span className="text-red-500">*</span> : null}
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

function Badge({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-sm font-bold text-zinc-950">{title}</div>
      <div className="mt-1 text-xs text-zinc-600">{desc}</div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm font-extrabold text-white">
        {n}
      </div>
      <div className="mt-4 text-lg font-bold text-zinc-950">{title}</div>
      <div className="mt-2 text-sm text-zinc-600">{text}</div>
    </div>
  );
}