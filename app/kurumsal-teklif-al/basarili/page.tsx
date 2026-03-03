import Link from "next/link";

export default function Basarili() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <div className="rounded-3xl border border-black/10 bg-white p-8">
        <h1 className="text-3xl font-extrabold text-zinc-950">Talebiniz alındı ✅</h1>
        <p className="mt-3 text-zinc-600">
          Ekibimiz en kısa sürede sizinle iletişime geçecek. (Genelde 30–120 dk)
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800">
            Ana Sayfa
          </Link>
          <Link href="/kurumsal-teklif-al" className="rounded-xl border border-zinc-200 px-5 py-3 text-sm font-semibold hover:border-zinc-400">
            Yeni Teklif Gönder
          </Link>
        </div>
      </div>
    </main>
  );
}
