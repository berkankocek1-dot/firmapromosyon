
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
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="rounded-3xl bg-black p-6 text-white md:p-10">
        <nav aria-label="İçerik yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-200">
          <Link href="/" className="underline">Ana Sayfa</Link><span>/</span>
          <Link href="/promosyon-anahtarlik" className="underline">Promosyon Anahtarlık</Link><span>/</span>
          <span aria-current="page">Purjörlü Anahtarlık</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Purjörlü Anahtarlık Modelleri</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-200">Tesisat ve ısıtma sektörüne yönelik purjör işlevli anahtarlıkları inceleyin. AN-380, AN-460, AN-480 ve AN-500 modellerinde baskı yöntemi, yüzey ve ölçü bilgilerini ürün bazında karşılaştırın.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-anahtarlik" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Anahtarlık Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} purjörlü anahtarlık modeli gösteriliyor</p>
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
</section></div>);
}
