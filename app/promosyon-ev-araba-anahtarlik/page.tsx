import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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
    <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="rounded-2xl bg-gray-50 p-6 text-black md:p-6 border border-gray-200">
        <nav aria-label="İçerik yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-600">
          <Link href="/" className="underline">Ana Sayfa</Link><span>/</span>
          <Link href="/promosyon-anahtarlik" className="underline">Promosyon Anahtarlık</Link><span>/</span>
          <span aria-current="page">Ev ve Araba Şeklinde Anahtarlık</span>
        </nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
        <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Ev ve Araba Şeklinde Anahtarlık Modelleri</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Emlak ve otomotiv tanıtımları için altı ev, iki araba şeklindeki anahtarlık modelini karşılaştırın. Dönen mekanizma, kutulu sunum ve baskı yöntemlerini ürün bazında inceleyin.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-anahtarlik" className="rounded-xl border border-gray-200 px-5 py-3 text-black">Tüm Anahtarlık Modelleri</Link>
        </div>
      </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-ev-araba-anahtarlik-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyat baskı hariçtir."}))} />

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
</section><section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5"><h2 className="text-xl font-bold text-black">Seçim ve Baskı Rehberi</h2><Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white"><Image src="/guides/promosyon-anahtarlik-fiyatlari-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold text-white">Promosyon Anahtarlık Fiyatları ve Yaptırma Maliyeti</h3><p className="mt-2 text-sm leading-6 text-white/90">Anahtarlık yaptırma fiyatlarını ürün, baskı, adet ve hazırlık bedeliyle değerlendirin. Örnek toplam maliyet hesabını ve teklif kapsamını inceleyin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link></section></div></div>);
}
