import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

export const metadata: Metadata = {
  title: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
  description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
    description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
    url: SITE_URL,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "FirmaPromosyon" }],
  },
};

const WHATSAPP =
  "https://wa.me/90XXXXXXXXXX?text=Merhaba%2C%20DTF%20bask%C4%B1%20ve%20promosyon%20%C3%BCr%C3%BCnleri%20i%C3%A7in%20teklif%20almak%20istiyorum.";

function pickTitle(p: any) {
  return p?.title ?? p?.name ?? "Ürün";
}
function pickDesc(p: any) {
  return p?.shortDesc ?? p?.description ?? "Kurumsal promosyon için hızlı teklif alın.";
}
function pickCat(p: any) {
  return p?.category ?? "Ürün";
}
function pickImg(p: any) {
  return p?.image ?? "/og.jpg";
}

export default function Home() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FirmaPromosyon | Kurumsal DTF Baskı & Promosyon",
    url: SITE_URL,
    description: "Kurumsal DTF baskı ve promosyon ürünleri için hızlı teklif alın.",
    inLanguage: "tr-TR",
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og.jpg` },
  };

  const topStrip = products.slice(0, 6);
  const topGrid = products.slice(0, 6);

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* HERO (Premium, daha kısa + ürün şeridi) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />
        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[720px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-8 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Hızlı dönüş • Kurumsal işler
            </div>

            {/* ✅ Mobil kesilme fix: clamp + break-words + max-w + min-w-0 */}
            <h1 className="mt-4 font-extrabold leading-tight tracking-tight text-gray-900 break-words max-w-[22ch] md:max-w-none text-[clamp(30px,7.2vw,56px)]">
              DTF Baskı &amp; Promosyon
              <span className="block text-gray-600">Kurumsal toplu sipariş</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-gray-700 md:text-lg">
              Tişört, sweatshirt, şapka ve promosyon ürünlerde kaliteli baskı çözümleri.
              Tasarımını gönder, detayları netleştirip hızlıca teklif oluşturalım.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/teklif"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900"
              >
                Teklif iste
              </Link>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-500"
              >
                WhatsApp’tan Yaz
              </a>

              <Link
                href="/urunler"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-500"
              >
                Ürünleri İncele
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Badge title="DTF / UV / Serigrafi" text="Baskı opsiyonları" />
              <Badge title="Türkiye geneli" text="Kargo opsiyonu" />
              <Badge title="Kurumsal süreç" text="Adet/termin net" />
            </div>

            {/* ✅ ÜRÜN ŞERİDİ — ilk ekranda görünsün */}
            <div className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-extrabold text-gray-900">Popüler Ürünler</div>
                <Link href="/urunler" className="text-sm font-semibold text-gray-900 hover:underline">
                  Tümünü gör →
                </Link>
              </div>

              <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {topStrip.map((p: any) => {
                  const title = pickTitle(p);
                  const img = pickImg(p);

                  return (
                    <Link
                      key={p.slug}
                      href={`/urunler/${p.slug}`}
                      className="shrink-0 w-[170px] rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                        <Image
                          src={img}
                          alt={title}
                          fill
                          sizes="170px"
                          className="object-contain p-3 transition duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900">
                        {title}
                      </div>
                      <div className="mt-1 text-xs text-gray-600">Detay →</div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-3 text-xs text-gray-500">
                ⚠️ Bilgilendirme amaçlıdır. Fiyat/termin; adet, baskı ve modele göre değişir.
              </div>
            </div>
          </div>

          {/* RIGHT — daha derli toplu panel */}
          <div className="min-w-0 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-gray-900">Öne Çıkanlar</div>

            <div className="mt-4 grid gap-3">
              <Feature title="Aynı gün dönüş hedefi" text="İhtiyaca göre hızlı teklif." />
              <Feature title="Kurumsal toplu sipariş" text="Adet, baskı ve termin netleşir." />
              <Feature title="TR geneli gönderim" text="Kargo ile teslimat opsiyonu." />
            </div>

            <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-xs font-semibold text-gray-600">Hızlı Aksiyon</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Link
                  href="/kurumsal-teklif-al"
                  className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-gray-900"
                >
                  Kurumsal teklif formu
                </Link>
                <Link
                  href="/rehber"
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-900 hover:border-gray-500"
                >
                  Rehber
                </Link>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                Not: Rehber sayfan yoksa bu link 404 verir. İstersen /rehber’i birlikte ekleriz.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ÜRÜNLER GRID (hero sonrası) */}
      <section id="urunler" className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold text-gray-900">Popüler Ürünler</h2>
            <p className="mt-2 text-sm text-gray-600">
              Ürün görselleri temsili olabilir. En doğru bilgi için teklif isteyin.
            </p>
          </div>

          <Link href="/urunler" className="shrink-0 text-sm font-semibold text-gray-900 hover:underline">
            Tümünü Gör →
          </Link>
        </div>

        {/* ✅ Grid responsive optimize: mobil 1, sm 2, lg 3 */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topGrid.map((p: any) => {
            const title = pickTitle(p);
            const desc = pickDesc(p);
            const cat = pickCat(p);
            const img = pickImg(p);

            return (
              <article
                key={p.slug}
                className="group rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Link href={`/urunler/${p.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-5 transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 min-w-0">
                    <div className="text-xs font-semibold text-gray-600">{cat}</div>
                    <h3 className="mt-1 text-lg font-extrabold text-gray-900 break-words">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700 line-clamp-3">{desc}</p>
                  </div>
                </Link>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                    Hızlı dönüş
                  </span>

                  <div className="flex gap-2">
                    <Link
                      href={`/urunler/${p.slug}`}
                      className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-900 hover:border-gray-500"
                    >
                      Detay
                    </Link>
                    <Link
                      href={`/teklif?urun=${p.slug}`}
                      className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white hover:bg-gray-900"
                    >
                      Teklif İste
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Hizmetler</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ServiceCard title="DTF Transfer Baskı" text="Logo/çizim baskı, esnek ve dayanıklı." />
          <ServiceCard title="Tekstil Baskı" text="Tişört • Sweatshirt • Şapka • Forma" />
          <ServiceCard title="Promosyon Ürün" text="Kupa • Kalem • Ajanda • Kurumsal set" />
        </div>
      </section>

      {/* SÜREÇ */}
      <section id="surec" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Süreç</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Step n="1" title="Tasarım Gönder" text="WhatsApp veya form ile dosyanı ilet." />
          <Step n="2" title="Adet & Termin" text="Detayları netleştirelim." />
          <Step n="3" title="Üretim & Teslim" text="Üretelim, kargo/elden teslim edelim." />
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Sık Sorulanlar</h2>
        <div className="mt-6 space-y-3">
          <Faq
            q="Minimum adet var mı?"
            a="Esnek üretim yapıyoruz. Ürün, baskı ve adete göre bilgi veriyoruz."
          />
          <Faq
            q="Teslim süresi kaç gün?"
            a="Yoğunluk ve adet durumuna göre değişir; hızlı üretim hedeflenir."
          />
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

/* ---------- UI ---------- */

function Badge({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-extrabold text-gray-900">{title}</div>
      <div className="mt-1 text-xs text-gray-600">{text}</div>
    </div>
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

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="text-base font-extrabold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-700">{text}</div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-extrabold text-white">
        {n}
      </div>
      <div className="mt-4 text-base font-extrabold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-700">{text}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <summary className="cursor-pointer text-sm font-extrabold text-gray-900">{q}</summary>
      <div className="mt-3 text-sm text-gray-700">{a}</div>
    </details>
  );
}