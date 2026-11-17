import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isPurjorKeychain } from "@/data/keychainSubcategories";

const CATEGORY = "Anahtarlık";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-purjorlu-anahtarlik";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Purjörlü promosyon anahtarlık modellerini inceleyin. AN-380, AN-460, AN-480 ve AN-500 için lazer veya domeks uygulamalarını karşılaştırarak teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Purjörlü Anahtarlık Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Purjörlü Anahtarlık Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Purjörlü Anahtarlık Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isPurjorKeychain(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Anahtarlık", item: SITE_URL + "/promosyon-anahtarlik" },
          { "@type": "ListItem", position: 3, name: "Purjörlü Anahtarlık", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Purjörlü Anahtarlık", url: PAGE_URL, description,
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
          <span aria-current="page">Purjörlü Anahtarlık</span>
        </nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
        <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Purjörlü Anahtarlık Modelleri</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Tesisat ve ısıtma sektörüne yönelik purjör işlevli anahtarlıkları inceleyin. AN-380, AN-460, AN-480 ve AN-500 modellerinde baskı yöntemi, yüzey ve ölçü bilgilerini ürün bazında karşılaştırın.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-anahtarlik" className="rounded-xl border border-gray-200 px-5 py-3 text-black">Tüm Anahtarlık Modelleri</Link>
        </div>
      </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-purjorlu-anahtarlik-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyat baskı hariçtir."}))} />

      <section id="purjorlu-anahtarlik-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Purjörlü Anahtarlık Nedir?</h2><p className="leading-7">Purjörlü anahtarlık, anahtar taşıma işlevini uygun radyatör purjör vanalarında kullanılabilecek bir anahtar bölümüyle birleştirir. Isıtma sistemleriyle çalışan tesisat firmaları, servisler ve bayiler için iş alanıyla ilişkili bir kurumsal hediye seçeneğidir. Ürün seçerken hem taşınabilir gövdeyi hem de logonun uygulanacağı yüzeyi değerlendirin.</p><p className="leading-7">Bu listedeki modeller şişe açacaklı anahtarlıklardan farklıdır. Purjör anahtarı bölümünün her vana tipine uyduğu varsayılmamalıdır. Kullanım uyumluluğunu ilgili vana ve ürün özelliklerine göre kontrol edin; sayfa bir bakım veya montaj talimatı değildir.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Lazer ve Domeks Uygulaması Nasıl Seçilir?</h2><p className="leading-7">AN-380 için tek yön lazer baskı belirtilir ve arka yüz düz siyah zemindir. Bu modelde iki tarafın da aynı logo uygulamasına uygun olduğunu varsaymayın. AN-480 lazer baskıya uygundur; renk seçeneğini ve logo yerleşimini birlikte değerlendirerek teklif isteyin.</p><p className="leading-7">AN-500 ise çift yön domeks etiket uygulamasına uygundur. Lazer ile domeks aynı uygulama değildir: teklif talebinde hangi modeli istediğinizi belirtmeniz, uygun yöntemin değerlendirilmesini kolaylaştırır. AN-460 için de yöntem ve uygulanabilir yüzey ürün bazında netleştirilmelidir.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Ölçü, Renk ve Ambalajı Birlikte Değerlendirin</h2><p className="leading-7">AN-460 ve AN-480 ürün kayıtlarında 3 x 7,9 cm ölçüsü belirtilir. Bu bilgi ürün ölçüsüdür; logo baskı alanının aynı boyutta olduğu anlamına gelmez. Baskı dosyasını hazırlamadan önce kullanılabilir yüzey ve yerleşim onayını isteyin.</p><p className="leading-7">AN-480 lacivert, kırmızı ve siyah seçenekleriyle belirtilir. AN-380 ve AN-500 için şeffaf poşet ambalaj bilgisi bulunur. Bir modelin renk veya ambalaj bilgisini listedeki bütün ürünlere genellemeyin. Özel paketleme isteniyorsa ayrıca teklif kapsamına ekleyin.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Purjörlü Anahtarlık Fiyatları ve Sipariş Hazırlığı</h2><p className="leading-7">Sayısal tutar gösterilen kartlarda birim fiyat baskı hariç TL + KDV olarak sunulur. Logo uygulaması, adet ve ambalaj talebi netleşmeden yalnızca ürün fiyatıyla toplam sipariş bütçesi oluşturmayın. Teklif etiketi bulunan ürün için güncel fiyat isteyin.</p><p className="leading-7">Teklif talebinize ürün kodunu, adedi, logo dosyasını, renk tercihini ve ihtiyaç tarihini ekleyin. Tedarik güncel tedarikçi stoklarına göre değerlendirilir. Minimum sipariş ve teslim süresi model, uygulama ve sevkiyat koşullarıyla birlikte netleştirilir; burada bütün ürünlere ortak bir adet veya süre verilmez.</p></div>
<div><h2 className="text-2xl font-bold !text-black">Purjörlü Anahtarlık Hakkında Sorular</h2><div className="divide-y divide-gray-200">{[
["Her radyatöre uygun mu?", "Uyumluluk vana tipine ve ürünün anahtar bölümüne bağlıdır. Bütün radyatörlere uyduğu varsayılmamalıdır; siparişten önce ilgili özellikleri kontrol ettirin."],
["AN-380 çift yön lazer baskıya uygun mu?", "Ürün kaydında tek yön lazer baskı ve düz siyah arka yüz belirtilir. Çift yön uygulamayı ortak bir özellik olarak değerlendirmeyin."],
["Domeks uygulamalı model hangisi?", "AN-500 için çift yön domeks etiket uygulaması belirtilir. Logo dosyanızla birlikte model kodunu paylaşarak yerleşim ve teklif isteyin."],
["3 x 7,9 cm ölçüsü baskı alanı mı?", "AN-460 ve AN-480 için belirtilen bu bilgi ürün ölçüsüdür. Kullanılabilir logo alanı ayrıca değerlendirilmelidir."],
].map(([q,a])=><div key={q} className="py-5"><h3 className="text-lg font-bold !text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<p className="leading-7">Bütçe hazırlığı için <Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="font-semibold !text-black underline">anahtarlık fiyatları rehberini</Link> inceleyebilir, seçtiğiniz model ve logo dosyasıyla teklif isteyebilirsiniz.</p>
<div className="flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Purjörlü Anahtarlık İçin Teklif Al</Link><Link href="/promosyon-anahtarlik" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold !text-black">Tüm Anahtarlıklar</Link></div>
</section><section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5"><h2 className="text-xl font-bold text-black">Seçim ve Baskı Rehberi</h2><Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white"><Image src="/guides/promosyon-anahtarlik-fiyatlari-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold text-white">Promosyon Anahtarlık Fiyatları ve Yaptırma Maliyeti</h3><p className="mt-2 text-sm leading-6 text-white/90">Anahtarlık yaptırma fiyatlarını ürün, baskı, adet ve hazırlık bedeliyle değerlendirin. Örnek toplam maliyet hesabını ve teklif kapsamını inceleyin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link></section></div></div>);
}
