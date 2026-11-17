import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
const openingSlugs = new Set(["promosyon-oto-kokusu-ok-750"]);

const CATEGORY = "İmalat Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-oto-kokusu";
const title = "Promosyon Oto Kokusu Modelleri ve Fiyatları";
const description = "Logo baskılı OK-750 promosyon oto kokusunu inceleyin. Özel kesim, ofset baskı dahil fiyat ve minimum 1.000 adet toptan sipariş için teklif alın.";
const faqItems = [{"question": "Minimum sipariş kaç adettir?", "answer": "OK-750 promosyon oto kokusunda minimum sipariş 1.000 adettir."}, {"question": "Oto kokusu fiyatına logo baskısı dahil mi?", "answer": "Ofset baskı liste fiyatına dahildir. Fiyatlara KDV eklenir; tasarım ve sipariş kapsamı nihai teklifte netleştirilir."}, {"question": "Özel kesim oto kokusu yapılabilir mi?", "answer": "OK-750 özel kesim olarak hazırlanabilir. Toplam ürün ebatı 14 cm olarak belirtilir. Kesim ve baskı alanı tasarım onayında ayrıca netleştirilir."}, {"question": "Hangi koku seçenekleri bulunur?", "answer": "Fresh, meyveli ve parfüm grupları bulunur. Güncel seçenek ve tedarik uygunluğu sipariş öncesinde teyit edilir."}, {"question": "Beyaz zeminli tasarımlarda hangi kokular önerilir?", "answer": "Tedarikçinin beyaz zeminli tasarımlar için önerileri Lavanta, Portakal, Çam, Çilek, Kavun ve Limondur. Seçilen kokunun güncel uygunluğu sipariş öncesinde teyit edilir."}, {"question": "Koku ne kadar kalır ve sipariş ne zaman teslim edilir?", "answer": "Mevcut ürün bilgilerinde koku kalıcılığına ilişkin kesin süre belirtilmez. Teslim süresi adet, tasarım onayı ve üretim planına göre teklifte netleştirilir."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(p => openingSlugs.has(p.slug)));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"İmalat Ürünler",item:SITE_URL+"/promosyon-imalat-urunler"},
   {"@type":"ListItem",position:3,name:"Oto Kokusu",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-imalat-urunler" className="underline">İmalat Ürünler</Link> / Oto Kokusu</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Oto Kokusu Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">OK-750 özel kesim oto kokusunu logo tasarımınız ve seçtiğiniz koku ile planlayın. Ofset baskı liste fiyatına dahildir. Minimum 1.000 adet kurumsal sipariş için güncel teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-imalat-urunler" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm İmalat Ürünleri</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-oto-kokusu-ok-750-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-oto-kokusu-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Ofset baskı liste fiyatına dahildir. Minimum sipariş 1.000 adettir."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Logo Baskılı Oto Kokusu Nasıl Seçilir?</h2>
   <p>Promosyon oto kokusu; oto servisleri, araç kiralama firmaları, oto yıkamalar ve kurumsal tanıtım çalışmaları için değerlendirilebilir. OK-750 modelinde logo tasarımı, özel kesim ve koku seçimi birlikte planlanır. Seçiminizi dağıtım adedi, marka tasarımı ve ihtiyaç tarihinize göre yapın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">OK-750 oto kokusu özellikleri ve sipariş kapsamı</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Üretim ve ebat</th><th scope="col" className="p-3">Baskı ve minimum adet</th></tr></thead><tbody><tr className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">OK-750</th><td className="p-3">Özel kesim; 14 cm toplam ebat</td><td className="p-3">Ofset baskı liste fiyatına dahil; minimum 1.000 adet</td></tr></tbody></table></div>
   <h3 className="text-xl font-bold text-black">Özel Kesim ve Logo Tasarımı</h3>
   <p>OK-750 özel kesim seçeneğiyle hazırlanır. Kurumsal logonuzun veya kampanya görselinizin kesim biçimiyle uyumu tasarım aşamasında değerlendirilir. Ürün bilgisindeki 14 cm toplam ebat, doğrudan kullanılabilir baskı alanı değildir. Kesim çizgisi, tasarım yerleşimi ve uygulama ölçüsü üretim öncesinde netleştirilir.</p>
   <p>Logo dosyasını mümkünse vektörel biçimde iletin. Küçük yazıların okunabilirliğini ve kesim kenarlarına yakın tasarım öğelerini gerçek uygulama boyutunda kontrol edin. Kesim ve tasarım uygunluğunu sipariş onayından önce teyit edin.</p>
   <h3 className="text-xl font-bold text-black">Fresh, Meyveli ve Parfüm Koku Seçenekleri</h3>
   <p>Fresh grubunda Okyanus, Yeni Araba, Lavanta ve Bahar; meyveli grupta Sakız, Kavun, Elma, Karışık Meyve, Egzotik Meyve, Limon, Çilek ve Vanilya belirtilir. Parfüm grubunda Odunsu, Cool Wather, Yaz Güneşi, Wogo, Thor ve Lucy seçenekleri bulunur. Güncel tedarik uygunluğu sipariş öncesinde kontrol edilir.</p>
   <p>Beyaz zeminli tasarımlar için tedarikçinin önerileri Lavanta, Portakal, Çam, Çilek, Kavun ve Limondur. Tasarım zeminini ve koku tercihinizi birlikte paylaşarak uygunluğu teyit edin. Mevcut açıklamada kesin koku kalıcılık süresi belirtilmediği için belirli bir gün sayısı üzerinden plan yapmayın.</p>
   <h3 className="text-xl font-bold text-black">Ofset Baskı Dahil Oto Kokusu Fiyatları</h3>
   <p>OK-750 liste fiyatına ofset baskı dahildir ve minimum sipariş 1.000 adettir. Fiyatlara KDV eklenir. Özel kesim, adet ve tasarım taleplerinizi paylaşarak nihai teklif kapsamını netleştirin. Paketleme ve teslimatla ilgili ek taleplerinizi de teklif aşamasında belirtin.</p>
   <p>Farklı teklifleri karşılaştırırken aynı adet, kesim ve baskı kapsamını esas alın. Ürün kartındaki güncel tutar ile siparişinizin toplam kapsamını birlikte kontrol edin.</p>
   <h3 className="text-xl font-bold text-black">Kurumsal Sipariş ve Teslim Planı</h3>
   <p>Teklif talebine OK-750 kodunu, sipariş adedini, logo dosyasını, kesim ve koku tercihini ekleyin. Teslim yeri ve ihtiyaç tarihinizi de paylaşın. Net termin; tasarım onayı, tedarik ve üretim planı üzerinden belirlenir.</p>
   <p>Diğer dağıtım seçenekleri için <Link href="/promosyon-imalat-urunler" className="font-semibold text-black underline">imalat promosyon ürünlerini</Link> inceleyebilirsiniz. Tanıtım paketini tamamlamak için <Link href="/promosyon-anahtarlik" className="font-semibold text-black underline">logo baskılı anahtarlık modellerini</Link> karşılaştırabilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-2xl border border-gray-200 p-6 text-gray-600">
   <h2 className="text-xl font-bold text-black">Oto Kokusu Seçim ve Baskı Rehberi</h2>
   <p className="mt-3 leading-7">Özel kesim, koku tercihi, tasarım zemini ve numune onayı için sipariş öncesi kontrol adımlarını inceleyin.</p>
   <Link href="/rehber/promosyon-oto-kokusu-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-oto-kokusu-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Oto Kokusu Seçim ve Baskı Rehberini Oku</h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon oto kokusunda özel kesim, koku seçimi ve logo tasarımını birlikte planlayın. Baskı dosyası, numune, ambalaj ve sipariş onayı adımlarını öğrenin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Promosyon Oto Kokusu Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div></div>;
}
