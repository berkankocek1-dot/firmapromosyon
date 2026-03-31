import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-toptan-fiyatlari`;

export const metadata: Metadata = {
  title: "Promosyon Kalem Toptan Fiyatları 2026",
  description:
    "Promosyon kalem toptan fiyatları 2026 yılında ne kadar? 100, 500, 1000 adet siparişlerde fiyatlar nasıl değişir detaylı öğrenin.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Kalem Toptan Fiyatları 2026",
    description:
      "Toptan promosyon kalem fiyatları, baskı maliyetleri ve adet bazlı fiyat rehberi.",
    url: PAGE_URL,
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-900">

      {/* BREADCRUMB */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/">Ana Sayfa</Link> /{" "}
        <Link href="/rehber">Rehber</Link> /{" "}
        <span>Promosyon Kalem Toptan Fiyatları</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">

        <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold">
          Rehber
        </div>

        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
          Promosyon Kalem Toptan Fiyatları 2026
        </h1>

        <p className="mt-4 text-lg text-gray-700 leading-8">
          Promosyon kalem toptan fiyatları, sipariş adedi, kalem modeli,
          baskı türü ve üretim kalitesine göre değişiklik gösterir. Özellikle
          yüksek adetli siparişlerde birim fiyatın düşmesi, promosyon kalemleri
          en avantajlı reklam ürünlerinden biri haline getirir. Bu nedenle
          firmalar, pazarlama bütçelerini optimize etmek için promosyon kalem
          fiyatlarını doğru analiz etmek zorundadır.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-8">
          Eğer siz de firmanız için toplu kalem siparişi vermeyi planlıyorsanız,
          fiyatların nasıl oluştuğunu bilmek büyük avantaj sağlar. Bu rehberde
          100, 500 ve 1000 adet promosyon kalem fiyatlarının nasıl değiştiğini,
          baskı türlerinin maliyete etkisini ve en uygun fiyatı nasıl
          alabileceğinizi detaylı şekilde öğrenebilirsiniz.
        </p>

        {/* CONTENT */}
        <div className="mt-10 space-y-10">

          <section>
            <h2 className="text-2xl font-extrabold">
              Promosyon Kalem Toptan Fiyatları Neye Göre Belirlenir?
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              Promosyon kalem fiyatlarını belirleyen en önemli faktörler;
              kalemin üretim maliyeti ve baskı maliyetidir. Plastik kalemler
              daha ekonomik olurken, metal kalemler daha yüksek fiyatlıdır.
              Bunun üzerine baskı türü ve sipariş adedi eklendiğinde toplam
              maliyet ortaya çıkar.
            </p>

            <p className="mt-4 text-gray-700 leading-7">
              Ayrıca üretici firmanın verdiği iskonto oranları da fiyatı
              doğrudan etkiler. Toptan alımlarda genellikle %30 - %45 arası
              iskonto uygulanır ve bu da maliyeti ciddi şekilde düşürür.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              100 Adet Promosyon Kalem Fiyatı
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              100 adet gibi düşük siparişlerde fiyatlar genellikle daha yüksek
              olur. Çünkü üretim ve baskı hazırlık maliyetleri az ürüne
              bölünür. Bu yüzden birim fiyat ortalama 12 - 20 TL arasında
              olabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              500 Adet Promosyon Kalem Fiyatı
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              500 adet siparişlerde fiyatlar ciddi şekilde düşer. Bu seviyede
              hem üretici hem de baskı maliyetleri dengelenir ve ortalama fiyat
              8 - 15 TL aralığına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              1000 Adet Promosyon Kalem Fiyatı
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              1000 adet ve üzeri siparişlerde en avantajlı fiyatlar elde edilir.
              Büyük siparişlerde birim maliyet ciddi şekilde düşer ve firmalar
              için en karlı nokta oluşur.
            </p>

            <p className="mt-4 text-gray-700 leading-7">
              Bu yüzden promosyon kalem alırken mümkün olduğunca toplu sipariş
              vermek her zaman daha avantajlıdır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Baskı Türüne Göre Fiyat Farkı
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              Tampon baskı en uygun fiyatlı seçenektir. UV baskı daha kaliteli
              ve renkli sonuç verdiği için maliyetlidir. Lazer baskı ise metal
              kalemlerde premium bir görünüm sağlar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Uygun Promosyon Kalem Nasıl Seçilir?
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              En uygun fiyatlı kalemi seçmek için sadece maliyete değil, hedef
              kitlenize de odaklanmalısınız. Eğer geniş kitleye dağıtım
              yapacaksanız plastik kalem mantıklıdır. Kurumsal müşteriler için
              ise metal kalem daha doğru seçim olabilir.
            </p>
          </section>

        </div>

        {/* KATEGORİLER */}
        <div className="mt-10 rounded-2xl border bg-gray-50 p-5">
          <h3 className="font-bold text-lg">İlgili Kategoriler</h3>

          <div className="mt-4 flex flex-col gap-2 font-semibold">
            <Link href="/kategori/kalem">Promosyon Kalem</Link>
            <Link href="/kategori/cakmak">Promosyon Çakmak</Link>
            <Link href="/kategori/anahtarlik">Promosyon Anahtarlık</Link>
            <Link href="/kategori/termos">Promosyon Termos</Link>
            <Link href="/kategori/usb-bellek">Promosyon USB Bellek</Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex gap-3">
          <Link
            href="/kurumsal-teklif-al"
            className="bg-black text-white px-6 py-3 rounded-2xl font-semibold"
          >
            Teklif Al
          </Link>

          <Link
            href="/urunler"
            className="border px-6 py-3 rounded-2xl font-semibold"
          >
            Ürünleri İncele
          </Link>
        </div>

      </article>
    </main>
  );
}