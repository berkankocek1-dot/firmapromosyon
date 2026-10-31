
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isTouchPen } from "@/data/penSubcategories";

const CATEGORY = "Kalem";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-dokunmatik-kalem";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı dokunmatik kalem modellerini karşılaştırın. Stylus uç, gövde ve yazım özelliklerini inceleyin; baskılı toplu sipariş için teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Dokunmatik Kalem Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Dokunmatik Kalem Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Dokunmatik Kalem Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isTouchPen(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Kalem", item: SITE_URL + "/promosyon-kalem" },
          { "@type": "ListItem", position: 3, name: "Dokunmatik Kalem", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Dokunmatik Kalem", url: PAGE_URL, description,
        mainEntity: {
          "@type": "ItemList", numberOfItems: list.length,
          itemListElement: list.map((p, i) => ({
            "@type": "ListItem", position: i + 1,
            name: p.title, url: SITE_URL + "/urunler/" + p.slug,
          })),
        },
      },
    ],
  };
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="rounded-3xl bg-black p-6 text-white md:p-10">
        <nav aria-label="İçerik yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-200">
          <Link href="/" className="underline">Ana Sayfa</Link><span>/</span>
          <Link href="/promosyon-kalem" className="underline">Promosyon Kalem</Link><span>/</span>
          <span aria-current="page">Dokunmatik Kalem</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Dokunmatik Kalem Modelleri</h1>

<p className="mt-4 max-w-3xl leading-7 text-gray-200">
  Yazı yazma işlevini uyumlu dokunmatik ekranlarda kullanım seçeneğiyle
  birleştiren DK serisi modelleri inceleyin. Gövde malzemesi, refil ve logo
  uygulaması modele göre değişir. Sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.
</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-kalem" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Kalem Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} dokunmatik kalem modeli gösteriliyor</p>
      <section aria-label="Dokunmatik kalem modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => (
          <Link key={p.id} href={"/urunler/" + p.slug}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
              <Image src={p.image} alt={p.title} fill unoptimized loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4" />
            </div>
            <h2 className="mt-4 text-lg font-bold !text-black">{p.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 font-bold text-gray-900">
              {typeof p.price === "number" && p.price > 0
                ? p.price.toLocaleString("tr-TR") + " TL + KDV"
                : "Güncel fiyat için teklif alın"}
            </p>
            {typeof p.price === "number" && p.price > 0 &&
              <p className="mt-1 text-xs text-gray-600">Fiyat baskı hariçtir.</p>}
            <span className="mt-4 inline-block rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">Ürünü İncele</span>
          </Link>
        ))}
      </section>



<section id="dokunmatik-kalem-secim-rehberi"
  className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Dokunmatik Promosyon Kalem Nedir?</h2>
    <p className="leading-7">
      Dokunmatik kalem, yazı yazma işlevinin yanında uyumlu ekranlarda kullanılabilen
      bir stylus uç sunar. Telefon veya tablet kullanan çalışanlar ve müşteriler için
      kurumsal hediye seçenekleri arasında değerlendirilebilir.
    </p>
    <p className="leading-7">
      Stylus uç bulunması kalemin aktif elektronik kalem olduğu anlamına gelmez.
      Basınç hassasiyeti, avuç içi algılama veya belirli bir cihazla uyumluluk gibi
      özellikler ürün bilgisinde açıkça belirtilmedikçe varsayılmamalıdır.
      Ekran ve koruyucu yüzey özellikleri kullanım sonucunu etkileyebilir.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">DK Serisi Modeller Nasıl Karşılaştırılır?</h2>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[540px] border-collapse text-left text-sm">
        <caption className="sr-only">Dokunmatik kalem seçiminde kontrol edilecek bilgiler</caption>
        <thead><tr>
          <th scope="col" className="border-b p-3 text-black">Özellik</th>
          <th scope="col" className="border-b p-3 text-black">Seçimde dikkat edilecek nokta</th>
        </tr></thead>
        <tbody>
          {[
            ["Stylus uç", "Kullanılacak ekranla uyumluluk ve ürünün belirtilen işlevleri"],
            ["Yazım özellikleri", "Refil türü, mürekkep rengi ve varsa uç kalınlığı"],
            ["Gövde ve tutuş", "Malzeme, ölçü ve modele özgü kaplama veya grip alanı"],
            ["Logo uygulaması", "Yüzeye uygun yöntem, baskı alanı ve uygulama yönü"],
            ["Tedarik", "İstenen renk ve adet için güncel temin koşulları"],
          ].map(([feature, detail]) => (
            <tr key={feature}>
              <th scope="row" className="border-b p-3 font-semibold text-black">{feature}</th>
              <td className="border-b p-3">{detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="leading-7">
      Dokunmatik uç, gövdenin metal veya plastik olduğunu göstermez.
      Yazım türü ve mürekkep rengi de gövde renginden bağımsızdır.
      Farklı DK modellerini karşılaştırırken her ürünün teknik bilgisini ayrı inceleyin.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Dokunmatik Kaleme Logo Baskısı</h2>
    <p className="leading-7">
      Baskı yöntemi gövde malzemesine, yüzeye ve tasarıma göre belirlenir.
      Her dokunmatik kaleme aynı yöntem uygulanamayabilir. Logo yanında firma adı,
      internet adresi veya slogan kullanılacaksa bütün tasarımı birlikte paylaşın.
    </p>
    <p className="leading-7">
      Küçük yazıların okunabilirliğini ve logo yerleşimini uygulama alanına göre
      değerlendirin. Tek veya çift yön baskı isteğinizi belirtin; üretim onayından
      önce ölçüyü, konumu ve yazıları kontrol edin.
      {" "}<Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir"
        className="font-semibold text-black underline">Kalem baskı türleri rehberini</Link>
      {" "}inceleyebilirsiniz.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Dokunmatik Kalem Fiyatları ve Toplu Sipariş</h2>
    <p className="leading-7">
      Fiyat bulunan modellerde tutarlar baskı hariç TL + KDV olarak gösterilir.
      Ürün bedeliyle birlikte baskı, varsa ambalaj ve kargo kapsamını karşılaştırın.
      Aynı adet ve aynı uygulama şartlarıyla teklif istemek alternatifleri
      değerlendirmenizi kolaylaştırır.
    </p>
    <p className="leading-7">
      Teklif talebinizde DK ürün kodunu, adedi, gövde rengini, logo dosyasını
      ve ihtiyaç tarihinizi paylaşın. Ürünler güncel tedarikçi stoklarına göre
      temin edilir. Minimum sipariş, renk temini ve teslim süresi ürün ve uygulama
      koşullarına göre netleştirilir.
      {" "}<Link href="/rehber/promosyon-kalem-toptan"
        className="font-semibold text-black underline">Toplu kalem siparişi rehberinde</Link>
      {" "}hazırlık adımlarını bulabilirsiniz.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Sık Sorulan Sorular</h2>
    <div className="divide-y divide-gray-200">
      {[
        ["Her telefon ve tablette çalışır mı?",
          "Uyumluluk ekranın ve stylus ucun özelliklerine bağlıdır. Özellikle belirli bir cihaz için alım yapıyorsanız uygunluğu sipariş öncesinde kontrol edin."],
        ["Bu modeller şarj gerektiren aktif kalemler mi?",
          "Dokunmatik ifadesi tek başına aktif elektronik kalem özellikleri anlamına gelmez. Şarj, bağlantı veya özel çizim özellikleri yalnızca ürün bilgisinde belirtiliyorsa değerlendirilmelidir."],
        ["Mürekkep rengi gövde rengiyle aynı mı?",
          "Gövde ve mürekkep rengi ayrı bilgilerdir. Yazım özelliklerini ürün detayından kontrol edin."],
        ["Fiyata logo baskısı dahil mi?",
          "Sayısal ürün fiyatları baskı hariçtir. Model, adet ve tasarıma göre baskılı sipariş için teklif isteyebilirsiniz."],
        ["Minimum sipariş ve teslim süresi nedir?",
          "Model, güncel tedarik koşulları ve baskı programına göre netleştirilir. İstenen adedi, rengi ve ihtiyaç tarihinizi paylaşın."],
      ].map(([q, a]) => (
        <div key={q} className="py-5">
          <h3 className="text-lg font-bold text-black">{q}</h3>
          <p className="mt-2 leading-7">{a}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="flex flex-wrap gap-3">
    <Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Dokunmatik Kalem İçin Teklif Al</Link>
    <Link href="/promosyon-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Tüm Kalem Modelleri</Link>
    <Link href="/promosyon-metal-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Metal Kalemler</Link>
    <Link href="/promosyon-plastik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Plastik Kalemler</Link>
  </div>
</section>
</div>
  );
}
