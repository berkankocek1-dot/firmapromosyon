import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { is20000mAhPowerbank } from "@/data/powerbankSubcategories";

const CATEGORY = "Powerbank";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-20000-mah-powerbank`;
const description = "20.000 mAh promosyon powerbank modellerini karşılaştırın. PB-110, PB-220, PB-300 ve PB-340 için bağlantı ve logo seçeneklerini inceleyip toplu teklif alın.";
const faqItems = [{"question": "Hangi modeller 20.000 mAh grubunda yer alıyor?", "answer": "PB-110, PB-220, PB-300 ve PB-340 başlıklarında 20.000 mAh olarak tanımlanır. Listeleme güncel ürün başlığındaki kapasiteye göre yapılır."}, {"question": "20.000 mAh powerbank telefonu kaç kez şarj eder?", "answer": "Kesin sayı yalnız kapasite değerinden hesaplanamaz. Telefon bataryası, enerji dönüşüm kayıpları, bağlantı ve şarj sırasında kullanım sonucu etkiler."}, {"question": "Bütün 20.000 mAh modeller hızlı şarjlı mı?", "answer": "Hayır. Kapasite, çıkış gücü ve şarj protokolü farklı özelliklerdir. Hızlı şarj ihtiyacınız varsa seçilen modeldeki port ve protokol bilgilerini ayrıca teyit edin."}, {"question": "Type-C bağlantısı hangi modelde belirtiliyor?", "answer": "PB-300 açıklamasında Type-C desteği belirtilir. Portun giriş veya çıkış işlevini ve gücünü ayrıca kontrol edin. Diğer modellerde aynı bağlantının bulunduğunu varsaymayın."}, {"question": "Fiyata logo baskısı ve KDV dahil mi?", "answer": "Ürün kartlarında tutarlar baskı hariç TL + KDV olarak sunulur. Model kodu, adet, logo yöntemi ve paketleme talepleriyle toplam teklif isteyin."}];
export const metadata: Metadata = {
 title: "Promosyon 20.000 mAh Powerbank Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı 20.000 mAh Powerbank Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({data}: {data: Record<string, unknown>}) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, "\\u003c")}} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && is20000mAhPowerbank(p)));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:`${SITE_URL}/`},
   {"@type":"ListItem",position:2,name:"Promosyon Powerbank",item:`${SITE_URL}/promosyon-powerbank`},
   {"@type":"ListItem",position:3,name:"20.000 mAh Powerbank",item:PAGE_URL},
  ]}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:"Promosyon 20.000 mAh Powerbank",description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`${SITE_URL}/urunler/${p.slug}`}))}}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}} />
  <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-powerbank" className="underline">Promosyon Powerbank</Link> / 20.000 mAh Powerbank</nav>
   <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon 20.000 mAh Powerbank Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">20.000 mAh kapasiteli PB-110, PB-220, PB-300 ve PB-340 modellerini inceleyin. Bağlantıları, gösterge ve logo ayrıntılarını karşılaştırarak kurumsal toplu siparişiniz için teklif alın.</p>
   <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-powerbank" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Powerbank Modelleri</Link></div>
  </section>
  <p className="mb-4 text-sm font-medium !text-white">{list.length} 20.000 mAh powerbank modeli gösteriliyor</p>
  <section aria-label="20.000 mAh powerbank ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Powerbank</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
     <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
     <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
    </div></Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">20.000 mAh Powerbanklerde Kapasitenin Yanında Neye Bakılmalı?</h2>
   <p>20.000 mAh powerbank seçerken aynı kapasitedeki ürünlerin bağlantı ve kullanım özelliklerini ayrı karşılaştırın. Gün içinde ek enerjiye ihtiyaç duyan çalışanlar veya müşteri hediyeleri için kapasite önemli bir ölçüt olabilir. Bunun yanında ürün ölçüleri, ağırlığı, dolum süresi ve çıkış desteği seçimi etkiler.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">20.000 mAh powerbanklerde ürün bilgilerinde belirtilen ayrıntılar</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Belirtilen özellik</th><th scope="col" className="p-3 text-white">Kontrol edilecek bilgi</th></tr></thead><tbody>{[
    ["PB-110","Dijital şarj göstergesi, çift USB çıkışı","Çıkış gücü ve bağlantı kapsamı"],
    ["PB-220","LCD ekran, çift USB çıkışı","Port özellikleri ve logo alanı"],
    ["PB-300","Çift USB çıkışı, Type-C desteği","Type-C giriş / çıkış işlevi"],
    ["PB-340","20.000 mAh, siyah gövde","Bağlantılar, ölçü ve uygulama alanı"],
   ].map(([model,feature,detail])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{model}</th><td className="p-3">{feature}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Kapasite Kesin Telefon Şarj Sayısını Göstermez</h3>
   <p>Üründe belirtilen mAh değerinden bütün telefonlar için ortak bir dolum sayısı çıkarılmamalıdır. Telefon bataryasının büyüklüğü, enerji dönüşüm kayıpları ve kullanım koşulları sonucu değiştirir. Telefon şarj olurken yoğun kullanılıyorsa aktarılan enerjinin bir bölümü de bu kullanıma gider.</p>
   <p>Birden fazla cihaz için seçim yapıyorsanız cihazları ve günlük kullanım beklentinizi teklif talebinde belirtin. Kapasite kadar desteklenen çıkışlar ve aynı anda şarj koşulları da değerlendirilmelidir. İki USB çıkışı bulunması, bütün portların aynı anda aynı en yüksek gücü vereceği anlamına gelmez.</p>
   <h3 className="text-xl font-bold text-white">Hızlı Şarj ve Type-C Desteğini Ayrı İnceleyin</h3>
   <p>20.000 mAh değeri enerji kapasitesini belirtir; tek başına hızlı şarj desteği değildir. Çıkış gücünü, desteklenen protokolü ve telefonun uyumunu ürün bazında kontrol edin. PB-300 açıklamasında Type-C desteği yer alır. Portun giriş, çıkış veya her iki işlev için kullanılıp kullanılmadığını ayrıca teyit edin.</p>
   <p>Powerbankin kendi dolum süresi de kullanılacak adaptör ve giriş özelliklerine bağlıdır. Kutudan adaptör veya kablo çıktığını varsaymadan paket içeriğini sorun. İstenen performans için gerekli bağlantıları teklif kapsamına dahil ettirin.</p>
   <h3 className="text-xl font-bold text-white">Gösterge, Ölçü ve Taşıma İhtiyacı</h3>
   <p>PB-110 dijital şarj göstergesiyle, PB-220 LCD ekranıyla tanımlanır. Gösterge tipiyle logo alanını karıştırmayın. Diğer ürünlerde aynı ekranın bulunduğunu kabul etmeyin; doluluk bilgisinin nasıl gösterildiğini ürün detayından inceleyin.</p>
   <p>Ürünün dış ölçüsünü ve ağırlığını kullanıcıların taşıma alışkanlığıyla karşılaştırın. Aynı kapasitedeki iki gövde farklı boyutlarda olabilir. Hediye kutusu veya çalışan kiti hazırlanacaksa paket ölçülerini ve toplam taşıma ağırlığını da önceden değerlendirin.</p>
   <h3 className="text-xl font-bold text-white">Logo Uygulaması ve Kurumsal Teklif</h3>
   <p>Gövde yüzeyi, portlar ve gösterge logo yerleşimini etkiler. PB-220 bilgilerinde UV uygulaması belirtilir; diğer modellerin uygun yöntemi kendi ürün bilgisiyle kontrol edilmelidir. Logonuzu mümkünse vektörel dosyayla paylaşarak ölçü, renk ve uygulama konumunu netleştirin.</p>
   <p>Kartlardaki tutarlar baskı hariç TL + KDV olarak sunulur. Model kodunu, sipariş adedini, renk dağılımını ve paketleme taleplerini bildirerek toplam teklif alın. Güncel tedarik uygunluğu ve logo onayı teslim planını etkiler; etkinlik tarihinizi baştan paylaşın.</p>
   <p>Entegre kablo önceliğinizse <Link href="/promosyon-dahili-kablolu-powerbank" className="font-semibold text-white underline">dahili kablolu powerbankleri</Link>, diğer kapasite seçenekleri için <Link href="/promosyon-powerbank" className="font-semibold text-white underline">tüm powerbank modellerini</Link> karşılaştırabilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">20.000 mAh Powerbank Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f=><div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
  <section aria-labelledby="powerbank-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
    <h2 id="powerbank-secim-rehberi-baslik" className="text-xl font-bold !text-black">Powerbank Seçimini Planlayın</h2>
    <p className="mt-3 text-sm leading-7 !text-gray-700">Kapasite, cihaz ve bağlantı uyumu, kablolu ve kablosuz şarj ile logo seçeneklerini birlikte değerlendirin.</p>
    <Link href="/rehber/promosyon-powerbank-secim-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">Powerbank Seçim Rehberini İncele →</Link>
  </section>
 </div>;
}
