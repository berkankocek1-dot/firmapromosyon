import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { products } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function normalizeTR(v: string) {
  return v.trim().toLocaleLowerCase("tr-TR");
}

const PAGE_URL = `${SITE_URL}/promosyon-ajanda`;
const CATEGORY_NAME = "Ajanda";

export const metadata: Metadata = {
  title:
    "Promosyon Ajanda Modelleri | Logo Baskılı Kurumsal Promosyon Ajanda",
  description:
    "Promosyon ajanda modelleri, logo baskılı kurumsal ajanda çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Firma tanıtımı, ofis kullanımı ve kurumsal hediyeler için promosyon ajanda ürünlerini inceleyin.",
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Promosyon Ajanda Modelleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ajanda çeşitleri. Kurumsal toplu alım, marka tanıtımı ve hızlı teklif için inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ajanda Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ajanda Modelleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ajanda çeşitleri. Kurumsal toplu alım ve hızlı teklif.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function PromosyonAjandaPage() {
  const filtered = products.filter(
    (p) => normalizeTR(p.category) === normalizeTR(CATEGORY_NAME)
  );

  const itemListElement = filtered.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ana Sayfa",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Ürünler",
              item: `${SITE_URL}/urunler`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Promosyon Ajanda",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Ajanda",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon ajanda modelleri. Kurumsal toplu alım ve hızlı teklif.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: filtered.length,
            itemListElement,
          },
        }}
      />

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>
        <span className="px-2">/</span>
        <Link href="/urunler" className="hover:underline">
          Ürünler
        </Link>
        <span className="px-2">/</span>
        <span className="font-semibold text-gray-900">Promosyon Ajanda</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
          Promosyon Ajanda Modelleri
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">
          Promosyon ajanda modelleri, markanızı yıl boyunca görünür kılan en güçlü
          kurumsal promosyon ürünleri arasında yer alır. Logo baskılı ajanda
          çeşitleri; ofis kullanımı, müşteri hediyesi, bayi dağıtımı, fuar,
          toplantı ve kurumsal etkinliklerde hem prestijli hem de kullanışlı bir
          tanıtım çözümü sunar.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">
          FirmaPromosyon’da yer alan promosyon ajanda ürünleri, farklı kapak
          yapıları, iç tasarımlar ve baskı seçenekleri ile kurumsal ihtiyaçlara
          uygun şekilde sunulmaktadır. Minimum sipariş adetleri, stok uygunluğu,
          renk seçenekleri ve baskı detayları ürün bazında değişebilir. Sipariş
          öncesinde güncel bilgi ve teklif alınması önerilir.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/teklif"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Hızlı Teklif Al
          </Link>

          <Link
            href="/urunler?kategori=Ajanda"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Ürünlerde Filtrele
          </Link>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {p.category}
              </div>
              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {p.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                {p.shortDesc}
              </p>

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Ürünü İncele
              </div>
            </div>
          </Link>
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">
            Bu kategoride henüz ürün yok. Yakında eklenecek.
          </p>
        </div>
      )}

      {filtered.length > 0 && (
        <>
          <section className="mt-14 max-w-4xl space-y-5 text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              Logo Baskılı Promosyon Ajanda Modelleri
            </h2>

            <p>
              Logo baskılı promosyon ajanda ürünleri, markanızı kullanıcıların
              masa üstünde, toplantılarda ve günlük planlama süreçlerinde sürekli
              görünür hale getiren etkili tanıtım araçlarıdır. Ajanda gibi uzun
              süre kullanılan ürünler, marka hatırlanırlığını artırmak ve
              kurumsal prestiji güçlendirmek açısından oldukça değerlidir.
            </p>

            <p>
              Promosyon ajanda modelleri özellikle yeni yıl dönemlerinde,
              kurumsal müşteri hediyelerinde, bayi ağında, çalışanlara yönelik
              dağıtımlarda ve üst segment firma promosyonlarında yoğun şekilde
              tercih edilir. Hem işlevsel hem de prestijli bir ürün olması,
              ajandayı kurumsal promosyon içinde güçlü bir kategori haline getirir.
            </p>

            <p>
              Ajanda çeşitleri; farklı kapak malzemeleri, iç sayfa düzenleri,
              ebat seçenekleri, termo deri kapak, spiralli yapı veya klasik ciltli
              modeller gibi alternatiflerle sunulabilir. Baskılı ve baskısız
              seçenekler modele göre değişebilir. Sipariş öncesinde baskı alanı,
              minimum adet, renk seçeneği ve teslim süresi hakkında bilgi alınması
              önerilir.
            </p>

            <p>
              Promosyon ajanda fiyatları; ürün ölçüsü, kapak kalitesi, iç tasarım,
              baskı tercihi ve sipariş miktarına göre değişiklik gösterebilir.
              Firmanız için en uygun ajanda modelini seçerek hızlı teklif alabilir,
              kurumsal tanıtımınızı daha profesyonel hale getirebilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Promosyon Ajanda Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Kurumsal Müşteri Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Logo baskılı ajandalar, müşterilere verilebilecek prestijli ve
                  yıl boyunca kullanılan kurumsal hediye ürünleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ofis ve Personel Kullanımı
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Şirket içinde çalışanlara dağıtılan promosyon ajandalar,
                  kurumsal bütünlüğü güçlendirirken günlük planlama için de
                  pratik bir kullanım sağlar.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Bayi ve İş Ortaklığı Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Promosyon ajanda modelleri, bayi ağına ve iş ortaklarına
                  dağıtılabilecek kaliteli ve kurumsal görünümü güçlü ürünlerdir.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Yeni Yıl ve Özel Dönem Kampanyaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Özellikle yıl sonu ve yeni yıl kampanyalarında promosyon ajanda
                  ürünleri, firmaların en çok tercih ettiği klasik kurumsal
                  promosyon seçeneklerinden biridir.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Sık Aranan Promosyon Ajanda Terimleri
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "promosyon ajanda",
                "logo baskılı ajanda",
                "kurumsal ajanda",
                "toptan promosyon ajanda",
                "firma logolu ajanda",
                "baskılı ajanda",
                "ajanda modelleri",
                "promosyon ürünleri",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}