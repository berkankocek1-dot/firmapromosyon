import Link from "next/link";

const WHATSAPP =
  "https://wa.me/90XXXXXXXXXX?text=Merhaba%2C%20DTF%20bask%C4%B1%20i%C3%A7in%20fiyat%20almak%20istiyorum.";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <div className="text-lg font-bold">FirmaPromosyon</div>

        <nav className="hidden gap-5 text-sm text-gray-700 md:flex">
          <a className="hover:text-black" href="#hizmetler">Hizmetler</a>
          <a className="hover:text-black" href="#urunler">Ürünler</a>
          <a className="hover:text-black" href="#surec">Süreç</a>
          <a className="hover:text-black" href="#sss">SSS</a>
          <Link className="hover:text-black" href="/iletisim">İletişim</Link>
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          WhatsApp
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            DTF Baskı & Promosyon Ürün
            <span className="block text-gray-600">Hızlı üretim • Kurumsal toplu sipariş</span>
          </h1>

          <p className="mt-4 text-gray-700">
            Tişört, sweatshirt, şapka ve promosyon ürünlerde kaliteli baskı çözümleri.
            Tasarımını gönder, aynı gün dönüş yapalım.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Hızlı Teklif Al
            </a>

            <Link
              href="/iletisim"
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold hover:border-gray-500"
            >
              İletişim Formu
            </Link>
          </div>

          <div className="mt-5 text-xs text-gray-500">
            ⚠️ Yasal not: Bu site bilgilendirme amaçlıdır. Fiyatlar siparişe göre değişir.
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <div className="text-sm font-semibold text-gray-700">Öne Çıkanlar</div>

          <div className="mt-4 grid gap-3">
            <Feature title="Hızlı üretim" text="Yoğunluğa göre en kısa sürede üretim." />
            <Feature title="Kaliteli DTF transfer" text="Canlı renk, esnek yapı, uzun ömür." />
            <Feature title="Toplu sipariş" text="Kurumsal siparişler için özel fiyat." />
            <Feature title="Türkiye geneli gönderim" text="Kargo ile teslimat opsiyonu." />
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-bold">Hizmetler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="DTF Transfer Baskı" text="Logo/çizim baskı, esnek ve dayanıklı." />
          <Card title="Tekstil Baskı" text="Tişört • Sweatshirt • Şapka • Forma" />
          <Card title="Promosyon Ürün" text="Kupa • Kalem • Ajanda • Kurumsal set" />
        </div>
      </section>

      <section id="urunler" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-bold">Popüler Ürünler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Baskılı Tişört" text="Etkinlik, personel, marka çalışmaları." />
          <Card title="Baskılı Sweatshirt" text="Kış sezonu kurumsal giyim." />
          <Card title="Promosyon Kupa" text="Toplu alım için ideal." />
        </div>
      </section>

      <section id="surec" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-bold">Sipariş Süreci</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Step n="1" title="Tasarım Gönder" text="WhatsApp veya form ile dosyanı ilet." />
          <Step n="2" title="Onay & Fiyat" text="Ölçü/adet/baskıya göre fiyatı netleştirelim." />
          <Step n="3" title="Üretim & Teslim" text="Üretelim, kargo/elden teslim edelim." />
        </div>
      </section>

      <section id="sss" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-bold">Sık Sorulanlar</h2>
        <div className="mt-6 space-y-3">
          <Faq q="Minimum adet var mı?" a="Ürüne göre değişir. Hızlı teklif için WhatsApp’tan yaz." />
          <Faq q="Teslim süresi kaç gün?" a="Yoğunluk ve adet durumuna göre değişir; genelde hızlı üretim." />
          <Faq q="DTF baskı dayanıklı mı?" a="Uygun yıkama koşullarında uzun ömürlüdür." />
        </div>
      </section>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} FirmaPromosyon • firmapromosyon.com
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-gray-600">{text}</div>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-gray-600">{text}</div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
        {n}
      </div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-gray-600">{text}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-gray-200 bg-white p-4">
      <summary className="cursor-pointer font-semibold">{q}</summary>
      <div className="mt-2 text-sm text-gray-600">{a}</div>
    </details>
  );
}