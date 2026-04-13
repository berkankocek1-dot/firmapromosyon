import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber`;

const guides = [
  {
    slug: "dtf-baski-nedir",
    title: "DTF Baskı Nedir? Nasıl Yapılır?",
    desc: "DTF baskı teknolojisi nedir, nasıl yapılır ve avantajları nelerdir? DTF baskı hakkında detaylı rehber.",
  },
  {
    slug: "promosyon-kupa-baski",
    title: "Promosyon Kupa Baskı Rehberi",
    desc: "Logo baskılı promosyon kupa nasıl yapılır? Kurumsal kupa siparişi verirken bilmeniz gerekenler.",
  },
  {
    slug: "promosyon-kalem-toptan",
    title: "Promosyon Kalem Toptan Satın Alma Rehberi",
    desc: "Toptan promosyon kalem nasıl alınır? En çok tercih edilen promosyon kalem modelleri ve fiyat bilgileri.",
  },
  {
    slug: "promosyon-urunleri-secim-rehberi",
    title: "Promosyon Ürünleri Seçim Rehberi",
    desc: "Kurumsal promosyon ürünleri nasıl seçilir? Hedef kitleye, kullanım alanına ve baskı türüne göre doğru ürün seçimini inceleyin.",
  },
  {
    slug: "promosyon-kalem-nedir",
    title: "Promosyon Kalem Nedir? Firmalar Neden Tercih Eder?",
    desc: "Promosyon kalem nedir, firmalar neden tercih eder? Logo baskılı promosyon kalemlerin avantajları, kullanım alanları ve marka bilinirliğine katkıları hakkında detaylı rehber.",
  },
  {
  slug: "promosyon-kalem-secerken-nelere-dikkat-edilmeli",
  title: "Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?",
  desc: "Promosyon kalem seçerken model, baskı türü, kalite, hedef kitle ve kullanım alanı açısından dikkat edilmesi gereken noktaları inceleyin.",
},
{
  slug: "promosyon-kalemlerde-baski-turleri-nelerdir",
  title: "Promosyon Kalemlerde Baskı Türleri Nelerdir?",
  desc: "Promosyon kalemlerde kullanılan baskı türleri nelerdir? Tampon baskı, UV baskı, serigrafi ve lazer baskı gibi yöntemlerin farklarını detaylı inceleyin.",
},
{
  slug: "promosyon-kalem-fiyatlari-nasil-hesaplanir",
  title: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
  desc: "Promosyon kalem fiyatları nasıl belirlenir? Adet, baskı ve model bazlı fiyat hesaplama rehberi.",
},
{
  slug: "promosyon-kalem-toptan-fiyatlari",
  title: "Promosyon Kalem Toptan Fiyatları 2026",
  desc: "Toptan promosyon kalem fiyatları ne kadar? 100, 500 ve 1000 adet için güncel fiyat rehberi.",
},
{
  slug: "logo-baskili-kalem-fiyatlari",
  title: "Logo Baskılı Kalem Fiyatları 2026",
  desc: "Logo baskılı promosyon kalem fiyatları ne kadar? Baskı türüne göre detaylı rehber.",
},
{
  slug: "en-ucuz-promosyon-kalem",
  title: "En Ucuz Promosyon Kalem Hangisi?",
  desc: "En uygun fiyatlı promosyon kalem modelleri ve toplu alım rehberi.",
},
{
  slug: "promosyon-cakmak-fiyatlari",
  title: "Promosyon Çakmak Fiyatları 2026",
  desc: "Promosyon çakmak fiyatları ne kadar? Baskı türü, adet ve model bazlı detaylı fiyat rehberi.",
},
{
  slug: "promosyon-cakmak-nedir",
  title: "Promosyon Çakmak Nedir?",
  desc: "Promosyon çakmak nedir, neden kullanılır? Logo baskılı çakmak hakkında detaylı rehber.",
},
{
  slug: "promosyon-cakmak-kullanim-alanlari",
  title: "Promosyon Çakmak Nerelerde Kullanılır?",
  desc: "Promosyon çakmak nerelerde kullanılır, ne işe yarar ve hangi baskılar uygulanır? Detaylı rehber.",
},
{
  slug: "promosyon-anahtarlik-nedir",
  title: "Promosyon Anahtarlık Nedir?",
  desc: "Promosyon anahtarlık nedir, nerelerde kullanılır ve hangi baskılar uygulanır? Detaylı rehber.",
},
{
  slug: "promosyon-anahtarlik-fiyatlari",
  title: "Promosyon Anahtarlık Fiyatları 2026",
  desc: "Promosyon anahtarlık fiyatları ne kadar? Malzeme, baskı ve adet bazlı detaylı rehber.",
},
{
  slug: "promosyon-kalem",
  title: "Promosyon Kalem Nedir? 2026 Detaylı Rehber",
  desc: "Promosyon kalem nedir, neden tercih edilir ve firmalara ne kazandırır? Baskı türleri, kullanım alanları ve fiyat detaylarıyla kapsamlı rehber.",
},
{
  slug: "promosyon-kalem-fiyatlari",
  title: "Promosyon Kalem Fiyatları 2026",
  desc: "Promosyon kalem fiyatları ne kadar? Adet, baskı ve model bazlı detaylı fiyat rehberi.",
},
{
  slug: "baskili-kalem-fiyatlari",
  title: "Baskılı Kalem Fiyatları 2026",
  desc: "Baskılı kalem fiyatları ne kadar? Logo baskı, UV baskı ve adet bazlı detaylı rehber.",
},
{
  slug: "logo-baskili-kalem",
  title: "Logo Baskılı Kalem Nedir? 2026 Rehber",
  desc: "Logo baskılı kalem nedir, nasıl yapılır ve firmalara ne kazandırır? Detaylı rehber.",
},
{
  slug: "kalem-baski-fiyatlari",
  title: "Kalem Baskı Fiyatları 2026",
  desc: "Kalem baskı fiyatları ne kadar? Tampon, UV ve lazer baskı detaylı rehber.",
},
{
  slug: "esantiyon-kalem",
  title: "Eşantiyon Kalem Nedir? 2026 Detaylı Rehber",
  desc: "Eşantiyon kalem nedir, neden tercih edilir ve firmalara ne kazandırır? Baskı, model ve kullanım alanlarıyla kapsamlı rehber.",
},
{
  slug: "reklam-kalemleri",
  title: "Reklam Kalemleri Nedir? 2026 Detaylı Rehber",
  desc: "Reklam kalemleri nedir, neden kullanılır ve firmalara ne kazandırır? Logo baskı, model ve kullanım alanlarıyla kapsamlı rehber.",
},
{
  slug: "kurumsal-kalem",
  title: "Kurumsal Kalem Nedir? 2026 Detaylı Rehber",
  desc: "Kurumsal kalem nedir, neden tercih edilir ve firmalara ne kazandırır? Logo baskı, model seçimi ve kullanım alanlarıyla kapsamlı rehber.",
},
{
  slug: "promosyon-kalem-toplu-alim",
  title: "Promosyon Kalem Toplu Alım Rehberi 2026",
  desc: "Promosyon kalem toplu alırken nelere dikkat edilmeli? Adet, baskı, model seçimi, fiyat avantajı ve toplu sipariş stratejileriyle detaylı rehber.",
},
{
  slug: "promosyon-rubber-kalem",
  title: "Promosyon Rubber Kalem Nedir? Avantajları Nelerdir?",
  desc: "Promosyon rubber kalem nedir, neden tercih edilir, hangi alanlarda kullanılır ve firmalara ne kazandırır? Logo baskılı rubber kalemler hakkında detaylı rehber.",
},
{
  slug: "promosyon-tasli-cakmak-nedir",
  title: "Promosyon Taşlı Çakmak Nedir? Avantajları Nelerdir?",
  desc: "Promosyon taşlı çakmak nedir, neden tercih edilir, hangi alanlarda kullanılır ve firmalara ne kazandırır? Detaylı rehber.",
},
{
  slug: "logo-baskili-promosyon-cakmak-secerken-nelere-dikkat-edilmeli",
  title: "Logo Baskılı Promosyon Çakmak Seçerken Nelere Dikkat Edilmeli?",
  desc: "Logo baskılı promosyon çakmak seçerken kalite, baskı alanı, model, adet ve hedef kitle açısından dikkat edilmesi gerekenler.",
},
{
  slug: "promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta",
  title: "Promosyon Çakmak Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta",
  desc: "Promosyon çakmak alırken kalite, baskı türü, model seçimi, sipariş adedi, teslim süresi ve fiyat dengesi açısından dikkat edilmesi gerekenler.",
},
{
  slug: "kurumsal-tanitim-icin-promosyon-cakmak-kullanimi-tam-rehber",
  title: "Kurumsal Tanıtım İçin Promosyon Çakmak Kullanımı (Tam Rehber)",
  desc: "Kurumsal tanıtım için promosyon çakmak nasıl kullanılır, hangi firmalar için uygundur, avantajları nelerdir ve seçim sürecinde nelere dikkat edilmelidir sorularına detaylı rehber.",
},
{
  slug: "promosyon-cakmak-mi-kalem-mi-en-dogru-promosyon-urunu-secimi",
  title: "Promosyon Çakmak mı Kalem mi? En Doğru Promosyon Ürünü Seçimi",
  desc: "Promosyon çakmak mı yoksa promosyon kalem mi daha mantıklı? Hedef kitle, kullanım alanı, maliyet, görünürlük ve marka etkisi açısından detaylı karşılaştırma rehberi.",
},
{
  slug: "logo-baskili-promosyon-cakmak-rehberi-modeller-fiyatlar-ve-kullanim-alanlari",
  title: "Logo Baskılı Promosyon Çakmak Rehberi: Modeller, Fiyatlar ve Kullanım Alanları",
  desc: "Logo baskılı promosyon çakmak modelleri, fiyatları, baskı seçenekleri, kullanım alanları ve doğru ürün seçimi hakkında detaylı rehber.",
},
{
  slug: "promosyon-anahtarlik-nedir-firmalar-neden-tercih-eder",
  title: "Promosyon Anahtarlık Nedir? Firmalar Neden Tercih Eder?",
  desc: "Promosyon anahtarlık nedir, neden tercih edilir ve hangi sektörler için uygundur? Logo baskılı anahtarlık modelleri ve avantajları hakkında detaylı rehber.",
},
{
  slug: "promosyon-anahtarlik-alirken-dikkat-edilmesi-gereken-10-kritik-nokta",
  title: "Promosyon Anahtarlık Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta",
  desc: "Promosyon anahtarlık alırken kalite, malzeme, baskı, model seçimi, adet ve hedef kitle açısından dikkat edilmesi gereken 10 kritik noktayı detaylıca inceleyin.",
},
{
  slug: "logo-baskili-promosyon-anahtarlik-rehberi-modeller-fiyatlar-ve-kullanim-alanlari",
  title: "Logo Baskılı Promosyon Anahtarlık Rehberi: Modeller, Fiyatlar ve Kullanım Alanları",
  desc: "Logo baskılı promosyon anahtarlık modelleri, fiyatları, baskı seçenekleri, kullanım alanları ve doğru ürün seçimi hakkında detaylı rehber.",
},

];

export const metadata: Metadata = {
  title: "Promosyon Ürün Rehberleri | FirmaPromosyon",
  description:
    "Promosyon ürünleri, DTF baskı, promosyon kalem, promosyon kupa ve kurumsal promosyon seçimi hakkında detaylı rehberleri inceleyin.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Ürün Rehberleri | FirmaPromosyon",
    description:
      "Promosyon ürünleri ve logo baskı çözümleri hakkında hazırlanan rehber içerikleri inceleyin.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ürün Rehberleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ürün Rehberleri | FirmaPromosyon",
    description:
      "Promosyon ürünleri ve baskı çözümleri hakkında hazırlanan rehber içerikleri inceleyin.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function RehberPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehber",
        item: PAGE_URL,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Promosyon Ürün Rehberleri",
    itemListElement: guides.map((g, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/rehber/${g.slug}`,
      name: g.title,
    })),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              FirmaPromosyon Rehber
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Promosyon Ürün Rehberleri
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
              Promosyon ürünleri, DTF baskı, kurumsal promosyon ürün seçimi ve
              logo baskılı ürünler hakkında hazırladığımız detaylı rehberleri
              inceleyebilirsiniz. Rehber içerikleri sayesinde doğru ürün seçimi,
              baskı yöntemi ve sipariş planlaması hakkında daha net bilgi edinebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Öne Çıkan Rehberler
            </h2>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Promosyon ürünleri ve baskı süreçleri hakkında hazırlanan içeriklere göz atın.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/rehber/${g.slug}`}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
            >
              <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                Rehber
              </div>

              <h2 className="mt-4 text-lg font-extrabold leading-7 text-gray-900 md:text-xl">
                {g.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-700 md:text-[15px]">
                {g.desc}
              </p>

              <span className="mt-5 inline-flex items-center text-sm font-semibold text-gray-900">
                Rehberi Oku →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Promosyon Ürünleri Hakkında Bilmeniz Gerekenler
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon ürünleri, markaların hedef kitlesiyle daha güçlü ve kalıcı
                bir temas kurmasına yardımcı olan etkili tanıtım araçlarıdır. Doğru
                seçilmiş kurumsal promosyon ürünleri; fuar, etkinlik, bayi toplantısı,
                kurumsal hediye ve günlük ofis kullanımı gibi birçok alanda yüksek
                görünürlük sağlar.
              </p>

              <p>
                Logo baskılı promosyon ürünleri seçerken ürün kalitesi, kullanım alanı,
                baskı tekniği ve hedef kitle uyumu gibi kriterler önemlidir. Promosyon
                kalem, promosyon kupa, promosyon termos, promosyon ajanda ve diğer
                kurumsal promosyon ürünleri için hazırladığımız rehber içerikler bu
                süreçte daha doğru karar vermenizi sağlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            Promosyon Ürün Kategorileri
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 md:text-base">
            En çok tercih edilen promosyon ürün kategorilerine hızlıca geçerek
            ürünleri inceleyebilirsiniz.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kategori/kalem"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Kalem
            </Link>

            <Link
              href="/kategori/cakmak"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Çakmak
            </Link>

            <Link
              href="/kategori/anahtarlik"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Anahtarlık
            </Link>

            <Link
              href="/kategori/termos"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Termos
            </Link>

            <Link
              href="/kategori/usb-bellek"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon USB Bellek
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}