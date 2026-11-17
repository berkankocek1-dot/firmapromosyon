import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isOpenerKeychain } from "@/data/keychainSubcategories";

const CATEGORY = "Anahtarlık";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-acacakli-anahtarlik";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı açacaklı anahtarlık modellerini karşılaştırın. AN-160, AN-340, AN-350 ve AN-450 seçeneklerini inceleyerek baskılı toplu sipariş için teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Açacaklı Anahtarlık Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Açacaklı Anahtarlık Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Açacaklı Anahtarlık Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isOpenerKeychain(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Anahtarlık", item: SITE_URL + "/promosyon-anahtarlik" },
          { "@type": "ListItem", position: 3, name: "Açacaklı Anahtarlık", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Açacaklı Anahtarlık", url: PAGE_URL, description,
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
          <span aria-current="page">Açacaklı Anahtarlık</span>
        </nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
        <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Açacaklı Anahtarlık Modelleri</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Anahtar taşıma ile şişe açacağı işlevini bir araya getiren dört modeli karşılaştırın. Alüminyum gövde, metal yüzey ve logo alanı bilgilerini ürün bazında inceleyin. Sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-anahtarlik" className="rounded-xl border border-gray-200 px-5 py-3 text-black">Tüm Anahtarlık Modelleri</Link>
        </div>
      </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-acacakli-anahtarlik-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyat baskı hariçtir."}))} />

      <section id="acacakli-anahtarlik-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Açacaklı Promosyon Anahtarlık Modelleri</h2>
<p className="leading-7">Açacaklı anahtarlık, anahtar taşıma işlevine şişe kapağı açma özelliği ekleyen bir promosyon seçeneğidir. Model seçerken açacak biçimi kadar elde taşınacak gövdeyi ve logo alanını da değerlendirin. Aynı kullanım işlevini sunan ürünler farklı ölçü, malzeme veya yüzey tasarımına sahip olabilir.</p>
<p className="leading-7">Bu sayfada AN-160, AN-340, AN-350 ve AN-450 yer alır. Purjörlü modeller bu listede bulunmaz; purjör işlevi şişe açacağıyla aynı değildir. Ürün kodunu ve detay sayfasını kontrol ederek ihtiyacınıza uygun modeli seçin.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Dört Açacaklı Modelin Karşılaştırması</h2>
<div className="overflow-x-auto"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><caption className="sr-only">Açacaklı anahtarlıklarda ürün kayıtlarında belirtilen bilgiler</caption><thead><tr><th scope="col" className="border-b p-3 !text-black">Model</th><th scope="col" className="border-b p-3 !text-black">Belirtilen özellik</th><th scope="col" className="border-b p-3 !text-black">Logo planlaması</th></tr></thead><tbody>{[
["AN-160", "1 x 8,5 cm alüminyum gövde", "Tek yön lazer uygulaması"],
["AN-340", "Açacak işlevli metal yüzey", "Ürüne uygun lazer logo yerleşimi"],
["AN-350", "Oval tasarımlı, açacak işlevli metal yüzey", "Oval yüzeye göre logo ve metin düzeni"],
["AN-450", "Anahtar taşıma ve şişe açacağı işlevi", "17 x 12 mm lazer uygulama alanı"],
].map(([code,feature,print])=><tr key={code}><th scope="row" className="border-b p-3 font-semibold !text-black">{code}</th><td className="border-b p-3">{feature}</td><td className="border-b p-3">{print}</td></tr>)}</tbody></table></div>
<p className="leading-7">Ürün ölçüsü ile baskı alanı farklı bilgilerdir. Örneğin AN-160 için belirtilen gövde ölçüsünü doğrudan logo alanı olarak kullanmayın. AN-450 için verilen uygulama alanında da logonun ayrıntılarını ve yazıların okunabilirliğini birlikte değerlendirin.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Açacaklı Anahtarlığa Logo Yerleşimi</h2>
<p className="leading-7">Logo, açacak bölümünün işlevini ve gövdenin kullanılabilir yüzeyini dikkate alarak yerleştirilmelidir. Firma adınız uzun veya logonuz ayrıntılıysa bütün bilgileri küçük alana sığdırmak yerine okunabilir bir düzen üzerinde çalışın. Lazer uygulamasının görünümünü seçilen ürünün yüzeyiyle birlikte değerlendirin.</p>
<p className="leading-7">Teklif isterken logo dosyasını ve eklenmesini istediğiniz metni birlikte gönderin. Tek veya çift yön talebinizi belirtin; ikinci yüz uygunluğu her model için ayrıca kontrol edilmelidir. Üretim onayında uygulama alanını, yönü ve yazım doğruluğunu kontrol edin.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Fiyat ve Toplu Dağıtım Planlaması</h2>
<p className="leading-7">Kartlarda sayısal fiyat bulunan modeller için tutar baskı hariç birim ürün fiyatıdır; KDV ayrıca eklenir. Karşılaştırmayı aynı adet ve aynı logo uygulamasıyla yapın. Fiyat belirtilmeyen bir seçenek için güncel teklif isteyin; ürün bedeline baskı veya ambalajın dahil olduğunu varsaymayın.</p>
<p className="leading-7">Dağıtımda ayrı paketleme, kutu veya başka bir promosyon ürünüyle birlikte sunum düşünüyorsanız bunu talebinize ekleyin. Ürün kodunu, adedi, tercih edilen rengi ve ihtiyaç tarihini paylaşın. Hazır modellerin temini güncel tedarikçi stoklarına bağlıdır; minimum adet ve teslim süresi baskı ve sevkiyat koşullarıyla birlikte netleştirilir.</p></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Açacaklı Anahtarlık Hakkında Sorular</h2><div className="divide-y divide-gray-200">{[
["Purjörlü anahtarlık şişe açacağı yerine geçer mi?", "Purjör işlevi ile şişe açacağı farklıdır. Bu sayfada açacak özelliği belirtilen modeller listelenir; purjörlü modeller dahil edilmez."],
["AN-160 ölçüsü logo baskı alanı mı?", "1 x 8,5 cm bilgisi ürün ölçüsüdür. Logo alanı ve yerleşimi tek yön lazer uygulaması kapsamında ayrıca değerlendirilmelidir."],
["AN-450 üzerine uzun bir internet adresi yazılabilir mi?", "17 x 12 mm uygulama alanında metnin uzunluğu ve okunabilirliği birlikte incelenmelidir. Adresi ve logo dosyasını paylaşarak yerleşimin değerlendirilmesini isteyin."],
["Dört modelin de iki tarafına baskı yapılır mı?", "Çift yön uygunluğu bütün modellere ortak değildir. AN-160 için tek yön lazer belirtilir; diğer modellerde ikinci yüz talebini ürün bazında kontrol ettirin."],
].map(([q,a])=><div key={q} className="py-5"><h3 className="text-lg font-bold !text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<div className="space-y-3"><h2 className="text-2xl font-bold !text-black">Anahtarlık Sipariş Teklifi</h2><p className="leading-7">Bütçe kapsamını oluşturmak için <Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="font-semibold !text-black underline">anahtarlık fiyatları rehberini</Link> inceleyin. Seçtiğiniz model ve logo dosyasıyla baskılı sipariş teklifinizi isteyin.</p></div>
<div className="flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Açacaklı Anahtarlık İçin Teklif Al</Link><Link href="/promosyon-anahtarlik" className="flex min-h-14 items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:border-gray-400 hover:bg-gray-50">Tüm Anahtarlıklar</Link><Link href="/promosyon-metal-anahtarlik" className="flex min-h-14 items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:border-gray-400 hover:bg-gray-50">Metal Anahtarlıklar</Link><Link href="/promosyon-deri-anahtarlik" className="flex min-h-14 items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:border-gray-400 hover:bg-gray-50">Deri Anahtarlıklar</Link></div>
</section>
      <section aria-labelledby="acacak-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="acacak-rehberi-baslik" className="text-xl font-bold !text-black">Açacak Seçimini ve Logo Baskısını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Bağımsız açacak ve açacaklı anahtarlığı kullanım, form ve logo alanıyla karşılaştırın; dağıtım ve baskı kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-acacak-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-acacak-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Açacak Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Bağımsız açacak ve açacaklı anahtarlığı kullanım, form, logo alanı ve dağıtım biçimiyle karşılaştırın. Baskı yerleşimi ve toplu sipariş kapsamını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
</div></div>
  );
}
