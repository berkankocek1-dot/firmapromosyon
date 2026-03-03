import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

const WHATSAPP =
  "https://wa.me/90XXXXXXXXXX?text=Merhaba%2C%20DTF%20bask%C4%B1%20ve%20promosyon%20%C3%BCr%C3%BCnleri%20i%C3%A7in%20teklif%20almak%20istiyorum.";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            DTF Baskı & Promosyon Ürün
            <span className="block text-gray-700">
              Hızlı üretim • Kurumsal toplu sipariş
            </span>
          </h1>

          <p className="mt-4 text-gray-700">
            Tişört, sweatshirt, şapka ve promosyon ürünlerde kaliteli baskı
            çözümleri. Tasarımını gönder, aynı gün dönüş yapalım.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/teklif"
              className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Kurumsal Teklif Al
            </Link>

            <a
              href={WHATSAPP}
              target="_blank"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:border-gray-500"
              rel="noreferrer"
            >
              WhatsApp’tan Yaz
            </a>

            <Link
              href="/iletisim"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:border-gray-500"
            >
              İletişim
            </Link>
          </div>

          <div className="mt-5 text-xs text-gray-600">
            ⚠️ Yasal not: Bu site bilgilendirme amaçlıdır. Fiyatlar siparişe göre
            değişir.
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <div className="text-sm font-semibold text-gray-900">Öne Çıkanlar</div>

          <div className="mt-4 grid gap-3">
            <Feature title="Hızlı üretim" text="Yoğunluğa göre en kısa sürede üretim." />
            <Feature title="Kaliteli DTF transfer" text="Canlı renk, esnek yapı, uzun ömür." />
            <Feature title="Toplu sipariş" text="Kurumsal siparişler için özel fiyat." />
            <Feature title="Türkiye geneli gönderim" text="Kargo ile teslimat opsiyonu." />
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section id="hizmetler" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Hizmetler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="DTF Transfer Baskı" text="Logo/çizim baskı, esnek ve dayanıklı." />
          <Card title="Tekstil Baskı" text="Tişört • Sweatshirt • Şapka • Forma" />
          <Card title="Promosyon Ürün" text="Kupa • Kalem • Ajanda • Kurumsal set" />
        </div>
      </section>

      {/* URUNLER */}
      <section id="urunler" className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900">Popüler Ürünler</h2>

          <Link
            href="/urunler"
            className="text-sm font-semibold text-gray-800 hover:text-black"
          >
            Tümünü Gör →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Ürün detaya giden kısım */}
              <Link href={`/urunler/${p.slug}`} className="block">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="mt-4">
                  <div className="text-xs font-semibold text-gray-700">{p.category}</div>
                  <div className="mt-1 text-lg font-bold text-gray-900">{p.title}</div>
                  <div className="mt-2 text-sm text-gray-700">{p.shortDesc}</div>
                </div>
              </Link>

              {/* CTA kısmı */}
              <div className="mt-4 flex items-center justify-between gap-2">
                <div className="inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold text-white">
                  Min. {p.minOrder} adet
                </div>

                <Link
                  href={`/teklif?urun=${p.slug}`}
                  className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-900 hover:border-gray-500"
                >
                  Hızlı Teklif
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="surec" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Sipariş Süreci</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Step n="1" title="Tasarım Gönder" text="WhatsApp veya form ile dosyanı ilet." />
          <Step n="2" title="Onay & Fiyat" text="Ölçü/adet/baskıya göre fiyatı netleştirelim." />
          <Step n="3" title="Üretim & Teslim" text="Üretelim, kargo/elden teslim edelim." />
        </div>
      </section>

      <section id="sss" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Sık Sorulanlar</h2>
        <div className="mt-6 space-y-3">
          <Faq q="Minimum adet var mı?" a="Ürüne göre değişir. Hızlı teklif için WhatsApp’tan yaz." />
          <Faq q="Teslim süresi kaç gün?" a="Yoğunluk ve adet durumuna göre değişir; genelde hızlı üretim." />
          <Faq q="DTF baskı dayanıklı mı?" a="Uygun yıkama koşullarında uzun ömürlüdür." />
        </div>
      </section>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-gray-700">
          © {new Date().getFullYear()} FirmaPromosyon • firmapromosyon.com
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-700">{text}</div>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-700">{text}</div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
        {n}
      </div>
      <div className="mt-3 font-semibold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-700">{text}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-gray-200 bg-white p-4">
      <summary className="cursor-pointer font-semibold text-gray-900">{q}</summary>
      <div className="mt-2 text-sm text-gray-700">{a}</div>
    </details>
  );
}