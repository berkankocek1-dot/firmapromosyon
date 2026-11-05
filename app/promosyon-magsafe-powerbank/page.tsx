import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMagSafePowerbank } from "@/data/powerbankSubcategories";

const CATEGORY = "Powerbank";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-magsafe-powerbank`;
const description = "MagSafe uyumlu promosyon powerbank modellerini kapasite, kablosuz şarj ve logo seçeneklerine göre karşılaştırın. Logo baskılı toplu sipariş için teklif alın.";
const faqItems = [{"question": "MagSafe powerbank her telefonla kullanılabilir mi?", "answer": "Telefonun kablosuz şarj desteği, manyetik uyumluluğu ve kullanılan kılıf birlikte kontrol edilmelidir. Her modelin bütün telefonlarda aynı işlevleri sunacağı varsayılmamalıdır."}, {"question": "MagSafe ile wireless aynı şey mi?", "answer": "Wireless kablosuz şarjı ifade eder. Manyetik yerleşim ise ayrı bir özelliktir. Bu listede ürün bilgilerinde MagSafe belirtilen modeller yer alır; yalnız wireless ifadesi yeterli değildir."}, {"question": "22,5W değeri kablosuz şarj gücü mü?", "answer": "Her zaman değil. Kablolu çıkış gücü ile kablosuz şarj gücü farklı olabilir. Örneğin PB-170 için 15W kablosuz şarj ve 22,5W çıkış bilgileri ayrı belirtilir. Kullanılacak bağlantıyı ürün detayından teyit edin."}, {"question": "Kapasite telefonun kaç kez şarj edileceğini gösterir mi?", "answer": "mAh kapasitesi tek başına kesin şarj sayısını belirlemez. Telefon bataryası, enerji dönüşüm kayıpları, bağlantı biçimi ve kullanım koşulları sonucu etkiler."}, {"question": "Logo baskısı fiyatlara dahil mi?", "answer": "Fiyat gösterilen kartlarda ürün bedeli baskı hariç TL + KDV olarak sunulur. Logo yöntemi, adet ve paketleme kapsamıyla toplam teklif isteyin. Fiyatı bulunmayan ürünler için güncel teklif alın."}];
export const metadata: Metadata = {
 title: "Promosyon MagSafe Powerbank Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı MagSafe Powerbank Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({data}: {data: Record<string, unknown>}) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, "\\u003c")}} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isMagSafePowerbank(p)));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:`${SITE_URL}/`},
   {"@type":"ListItem",position:2,name:"Promosyon Powerbank",item:`${SITE_URL}/promosyon-powerbank`},
   {"@type":"ListItem",position:3,name:"MagSafe Powerbank",item:PAGE_URL},
  ]}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:"Promosyon MagSafe Powerbank",description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`${SITE_URL}/urunler/${p.slug}`}))}}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}} />
  <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-powerbank" className="underline">Promosyon Powerbank</Link> / MagSafe Powerbank</nav>
   <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon MagSafe Powerbank Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">MagSafe uyumlu olarak tanımlanan powerbank modellerini kapasite, bağlantı ve logo özellikleriyle karşılaştırın. Telefon ve kılıf uyumluluğunu değerlendirerek kurumsal hediye siparişiniz için teklif alın.</p>
   <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-powerbank" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Powerbank Modelleri</Link></div>
  </section>
  <p className="mb-4 text-sm font-medium !text-white">{list.length} MagSafe powerbank modeli gösteriliyor</p>
  <section aria-label="MagSafe powerbank ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Powerbank</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
     <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
     <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
    </div></Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">MagSafe Powerbank Seçerken Uyumluluk ve Kapasite</h2>
   <p>MagSafe uyumlu powerbank seçimi, yalnız telefonun arkasına manyetik olarak tutunmasına göre yapılmamalıdır. Telefonun kablosuz şarj desteği, kılıfın yapısı ve seçilen ürünün bağlantıları birlikte değerlendirilir. Bu sayfa, başlık veya kısa ürün bilgisinde MagSafe belirtilen modelleri bir araya getirir; yalnız wireless ifadesi bulunan bütün ürünler bu gruba dahil edilmez.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">MagSafe powerbank modellerinin kapasite karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-white">Kapasite</th><th scope="col" className="p-3 text-white">Modeller</th><th scope="col" className="p-3 text-white">Karşılaştırılacak ayrıntı</th></tr></thead><tbody>{[
    ["5.000 mAh","PB-190, PB-200","Ölçü, ağırlık ve cihaz uyumu"],
    ["8.000 mAh","PB-100","Kablolu ve kablosuz özellikler"],
    ["10.000 mAh","PB-111, PB-170, PB-180, PB-230, PB-270, PB-320","Çıkış gücü, ek işlevler ve logo alanı"],
   ].map(([capacity,models,detail])=><tr key={capacity} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{capacity}</th><td className="p-3">{models}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Manyetik Tutunma ve Kablosuz Şarj</h3>
   <p>Manyetik yerleşim ve kablosuz enerji aktarımı farklı özelliklerdir. Telefonun ve kullanılan kılıfın desteğini kontrol edin. MagSafe uyumlu ifadesinden bütün modellerin Apple sertifikalı olduğu, Qi2 desteği sunduğu veya her cihazda aynı güce ulaşacağı sonucu çıkarılamaz. Belirli bir telefon serisine hediye hazırlıyorsanız cihazları teklif talebinde belirtin.</p>
   <h3 className="text-xl font-bold text-white">Kablolu Çıkış Gücünü Kablosuz Güçten Ayırın</h3>
   <p>PB-111, PB-170 ve PB-180 bilgilerinde 15W kablosuz şarj belirtilir. PB-170 için ayrıca 22,5W çıkış bilgisi bulunur. Bu iki değeri aynı bağlantıya ait kabul etmeyin. PB-100 ve PB-270 gibi hızlı şarj bilgisi olan modellerde de çıkışın hangi port ve protokolle kullanılacağını ürün detayından teyit edin. Gerçek şarj gücü cihaz desteği ve kullanım koşullarına bağlıdır.</p>
   <h3 className="text-xl font-bold text-white">5.000, 8.000 ve 10.000 mAh Arasında Seçim</h3>
   <p>Kapasiteyi, kullanıcının gün içindeki enerji ihtiyacı ve taşıma alışkanlığıyla birlikte düşünün. Daha yüksek kapasite tek başına daha hızlı şarj anlamına gelmez. Telefonun kaç kez doldurulabileceği batarya büyüklüğü, enerji dönüşüm kayıpları ve eş zamanlı kullanımdan etkilenir; yalnız mAh değerinden kesin bir şarj sayısı vaat edilmemelidir.</p>
   <h3 className="text-xl font-bold text-white">Işıklı Logo ve Diğer Uygulamalar</h3>
   <p>PB-100, PB-170 ve PB-320 açıklamalarında ışıklı logo veya markalama ayrıntısı bulunur. PB-111 ve PB-180 için UV uygulaması belirtilir. Bu özellikler bütün modellerde ortak değildir. Logonun kullanılabilir alana yerleşimini, küçük yazıların okunurluğunu ve baskı yöntemini model bazında değerlendirin.</p>
   <p>Portlar, göstergeler ve kablosuz şarj yüzeyi tasarımda dikkate alınmalıdır. Mümkünse vektörel logo dosyanızı paylaşın. Kapasitenin yanında gövde ölçüsü, bağlantılar ve varsa saat şarjı gibi ek işlevleri ayrı karşılaştırın; bir modeldeki özelliği diğer ürünlere genellemeyin.</p>
   <h3 className="text-xl font-bold text-white">Kurumsal MagSafe Powerbank Siparişi</h3>
   <p>Ürün kodunu, adet ve renk dağılımını, hedef cihazları ve logo isteğinizi iletin. Kutulama veya ayrı paketleme gerekiyorsa bunları da teklif kapsamına ekleyin. Kartlarda fiyat gösterilen tutarlar baskı hariç TL + KDV olarak sunulur; fiyatı bulunmayan modeller için güncel teklif isteyin.</p>
   <p>Güncel tedarik uygunluğu ve tasarım onayı teslim planını etkiler. Kullanım tarihinizi ve teslimat adresinizi baştan bildirin. Diğer kapasite ve bağlantı seçenekleri için <Link href="/promosyon-powerbank" className="font-semibold text-white underline">tüm promosyon powerbank modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">MagSafe Powerbank Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f=><div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
 </div>;
}
