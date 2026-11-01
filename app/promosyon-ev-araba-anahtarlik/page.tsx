
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isHouseCarKeychain } from "@/data/keychainSubcategories";

const CATEGORY = "Anahtarlık";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-ev-araba-anahtarlik";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Ev ve araba şeklinde promosyon anahtarlık modellerini inceleyin. Emlak ve otomotiv tanıtımları için lazer, domeks ve kutulu seçeneklerle teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Ev ve Araba Şeklinde Anahtarlık Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Ev ve Araba Şeklinde Anahtarlık Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ev ve Araba Şeklinde Anahtarlık Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isHouseCarKeychain(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Anahtarlık", item: SITE_URL + "/promosyon-anahtarlik" },
          { "@type": "ListItem", position: 3, name: "Ev ve Araba Şeklinde Anahtarlık", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Ev ve Araba Şeklinde Anahtarlık", url: PAGE_URL, description,
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
          <Link href="/promosyon-anahtarlik" className="underline">Promosyon Anahtarlık</Link><span>/</span>
          <span aria-current="page">Ev ve Araba Şeklinde Anahtarlık</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Ev ve Araba Şeklinde Anahtarlık Modelleri</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-200">Emlak ve otomotiv tanıtımları için altı ev, iki araba şeklindeki anahtarlık modelini karşılaştırın. Dönen mekanizma, kutulu sunum ve baskı yöntemlerini ürün bazında inceleyin.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-anahtarlik" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Anahtarlık Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} ev ve araba şeklinde anahtarlık modeli gösteriliyor</p>
      <section aria-label="Purjörlü anahtarlık modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section id="ev-araba-anahtarlik-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Ev ve Araba Şeklinde Promosyon Anahtarlıklar</h2><p className="leading-7">Ev şeklindeki anahtarlıklar, emlak ofislerinin ve konut projelerinin faaliyet alanıyla doğrudan ilişki kuran bir hediye seçeneğidir. Araba şeklindeki modeller ise otomotiv bayileri, araç servisleri ve kiralama firmalarının tanıtım çalışmalarında değerlendirilebilir. Seçimi yalnız şekle göre yapmayın; gövde, logo yüzeyi ve sunum biçimini de inceleyin.</p><p className="leading-7">Bu sayfa ev veya araba biçimi ürün kaydında belirtilen modelleri bir araya getirir. Aynı tasarım grubundaki ürünlerin ölçüleri ve baskı yöntemleri farklı olabilir. Karttaki ürün koduyla detay sayfasını açarak karar verin.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Ev Şeklinde Anahtarlık Modelleri</h2><p className="leading-7">AN-165 ve AN-170, dönen mekanizmaya sahip ev şeklindeki modellerdir. Her ikisi için 3,4 x 9,3 cm ürün ölçüsü ve lazer baskı uygunluğu belirtilir. AN-165 karton kutulu sunumuyla ayrılır; AN-170 için siyah renk bilgisi bulunur. Kutu veya renk bilgisini iki modelin ortak özelliği olarak değerlendirmeyin.</p><p className="leading-7">AN-310 için 4,4 x 8 cm ölçü ile çift yön lazer ve domeks uygulamalarına uygunluk belirtilir. AN-320 renkli çerçeve detaylarıyla, AN-440 ev şeklindeki tasarımıyla ve AN-490 metal yüzeyiyle listelenir. Bu modellerin her birinde kullanılabilir logo alanını ayrıca değerlendirin.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Araba Şeklinde Anahtarlık Modelleri</h2><p className="leading-7">AN-330, araba şeklindeki metal tasarımı ve lazer baskıya uygun yüzeyiyle sunulur. AN-360 için araba biçimi ve çift yön lazer baskı özelliği belirtilir. İkinci yüz uygulaması önemliyse talebinizde bunu açıkça yazın; bütün araba şeklindeki modellerin aynı baskı kapsamına sahip olduğunu varsaymayın.</p><p className="leading-7">Otomotiv sektöründeki bir dağıtım için firma logosu ve iletişim bilgisinin nasıl yerleştirileceğini birlikte değerlendirin. Gövde biçiminin daralan alanları, uzun bir adres veya küçük yazı için uygun olmayabilir. Üretimden önce uygulanacak yüzü ve logo düzenini kontrol edin.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Logo Baskısı ve Sipariş Kapsamı</h2><p className="leading-7">Ürün ölçüsü ile baskı alanı aynı değildir. Gövdenin dış ölçülerine bakarak logo dosyasını doğrudan bu boyutta hazırlamayın. Logo, ek metin ve tek veya çift yön talebinizi paylaşarak seçilen ürüne uygun bir yerleşim isteyin. Lazer ve domeks uygulamaları da birbirinden farklıdır; seçilen modelin yönteme uygunluğu esas alınır.</p><p className="leading-7">Sayısal fiyat gösterilen kartlardaki tutar baskı hariç birim ürün bedelidir; KDV ayrıca eklenir. Aynı adet ve uygulama kapsamıyla teklif karşılaştırın. Kutu, poşet veya özel paketleme talebini ayrıca belirtin. Ürün kodu, adet, logo dosyası, renk tercihi ve ihtiyaç tarihi teklif hazırlığını kolaylaştırır.</p><p className="leading-7">Hazır ürünlerin temini güncel tedarikçi stoklarına göre değerlendirilir. Minimum sipariş ve teslim süresi seçilen model, baskı ve sevkiyat koşullarıyla birlikte netleştirilir. Sayfadaki farklı modeller için ortak bir teslim süresi veya stok miktarı varsayılmamalıdır.</p></div>
<div><h2 className="text-2xl font-bold !text-black">Ev ve Araba Şeklinde Anahtarlık Hakkında Sorular</h2><div className="divide-y divide-gray-200">{[
["Dönen mekanizmalı ev anahtarlıkları hangileri?", "AN-165 ve AN-170 için dönen mekanizma belirtilir. AN-165 karton kutulu sunuma sahiptir."],
["Bütün modellerde çift yön baskı var mı?", "Hayır. AN-310 için çift yön lazer ve domeks, AN-360 için çift yön lazer belirtilir. Diğer ürünlerin ikinci yüz uygunluğu ayrıca kontrol edilmelidir."],
["Ölçüler logo alanını mı gösteriyor?", "Ürün ölçüsü logo alanı değildir. Seçilen gövde üzerinde kullanılabilir yüzey ve logo düzeni ayrıca değerlendirilir."],
["Emlak ofisi için hangisini seçmeliyim?", "Ev şeklindeki modelleri logo alanı, sunum ve bütçenize göre karşılaştırabilirsiniz. Kutulu sunum isteniyorsa AN-165 seçeneğini değerlendirin."],
].map(([q,a])=><div key={q} className="py-5"><h3 className="text-lg font-bold !text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<p className="leading-7">Bütçe hazırlığı için <Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="font-semibold !text-black underline">anahtarlık fiyatları rehberini</Link> inceleyebilir, seçtiğiniz model ve logo dosyasıyla teklif isteyebilirsiniz.</p>
<div className="flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Ev ve Araba Şeklinde Anahtarlık İçin Teklif Al</Link><Link href="/promosyon-anahtarlik" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold !text-black">Tüm Anahtarlıklar</Link></div>
</section></div>);
}
