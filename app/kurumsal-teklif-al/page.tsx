import Link from "next/link";

export const metadata = {
  title: "Kurumsal Teklif Al | FirmaPromosyon",
  description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif formu.",
};

export default function KurumsalTeklifAlPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-3xl font-extrabold">Kurumsal Teklif Al</h1>
      <p className="mt-3 text-zinc-600">
        (Geçici sayfa) Bir sonraki adımda buraya premium tasarım + form + mail gönderimi ekleyeceğiz.
      </p>

      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/iletisim"
          className="rounded-xl border border-zinc-200 px-5 py-3 text-sm font-semibold hover:border-zinc-400"
        >
          İletişim
        </Link>
      </div>
    </main>
  );
}
