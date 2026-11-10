import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isLightUpPowerbank } from "@/data/powerbankSubcategories";

const CATEGORY = "Powerbank";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-isikli-logolu-powerbank`;
const description = "Işıklı logolu promosyon powerbank modellerini karşılaştırın. LED logo alanı, kapasite ve şarj özelliklerini inceleyerek toplu kurumsal sipariş için teklif alın.";
const faqItems = [{"question": "Işıklı logo ile LED şarj göstergesi aynı mı?", "answer": "Hayır. Şarj göstergesi batarya durumunu gösterir; ışıklı logo alanı ise markalama içindir. Yalnız LED ekranı veya feneri bulunan ürünler ışıklı logo grubuna dahil edilmez."}, {"question": "Hangi kapasiteler bulunuyor?", "answer": "Bu grupta PB-360 organizer 6.500 mAh, PB-100 8.000 mAh; diğer listelenen modeller 10.000 mAh olarak tanımlanır. Kapasite ve şarj gücü ayrı değerlendirilmelidir."}, {"question": "Işıklı logo renkli UV baskıyla aynı mı?", "answer": "Hayır. Işıklı markalama ile yüzeye renkli baskı farklı uygulamalardır. Ürün ve logoya uygun yöntem, ışık rengi ve kullanılabilir alan model bazında netleştirilmelidir."}, {"question": "Bütün ışıklı logolu modeller MagSafe uyumlu mu?", "answer": "Hayır. Işıklı logo bir markalama özelliğidir. Manyetik ve kablosuz şarj desteği ayrıca kontrol edilmelidir; tüm modellerde ortak kabul edilmez."}, {"question": "Kart fiyatlarına ışıklı logo uygulaması dahil mi?", "answer": "Fiyat gösterilen kartlarda ürün bedeli baskı hariç TL + KDV olarak sunulur. Işıklı logo alanının bulunması, tasarım ve uygulama bedelinin dahil olduğu anlamına gelmez. Adet ve logonuzla toplam teklif isteyin."}];
export const metadata: Metadata = {
 title: "Promosyon Işıklı Logolu Powerbank Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı Işıklı Logolu Powerbank Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({data}: {data: Record<string, unknown>}) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, "\\u003c")}} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isLightUpPowerbank(p)));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:`${SITE_URL}/`},
   {"@type":"ListItem",position:2,name:"Promosyon Powerbank",item:`${SITE_URL}/promosyon-powerbank`},
   {"@type":"ListItem",position:3,name:"Işıklı Logolu Powerbank",item:PAGE_URL},
  ]}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:"Promosyon Işıklı Logolu Powerbank",description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`${SITE_URL}/urunler/${p.slug}`}))}}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}} />
  <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-powerbank" className="underline">Promosyon Powerbank</Link> / Işıklı Logolu Powerbank</nav>
   <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Işıklı Logolu Powerbank Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Işıklı logo veya Light-Up markalama özelliği belirtilen powerbankleri karşılaştırın. LED logo alanını, kapasiteyi ve şarj bağlantılarını inceleyerek markanıza özel toplu sipariş için teklif alın.</p>
   <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-powerbank" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Powerbank Modelleri</Link></div>
  </section>
  <p className="mb-4 text-sm font-medium !text-white">{list.length} ışıklı logolu powerbank modeli gösteriliyor</p>
  <section aria-label="Işıklı logolu powerbank ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Powerbank</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
     <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
     <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
    </div></Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Işıklı Logo Alanına Göre Powerbank Seçimi</h2>
   <p>Işıklı logolu powerbank seçerken yalnız ürünün ışık vermesine bakmayın. Marka uygulamasına ayrılmış alan ile batarya göstergesi veya LED fener farklı işlevlerdir. Bu grupta başlık veya kısa ürün bilgisinde ışıklı logo, ışıklı markalama ya da Light-Up logo özelliği belirtilen modeller yer alır.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Işıklı logolu powerbanklerde özellik örnekleri</caption><thead><tr><th scope="col" className="p-3 text-white">Modeller</th><th scope="col" className="p-3 text-white">Belirtilen ayrıntı</th><th scope="col" className="p-3 text-white">Seçimde kontrol edin</th></tr></thead><tbody>{[
    ["PB-120, PB-160","Standlı tasarım","Stand yapısı ve logo konumu"],
    ["PB-100, PB-170, PB-320","MagSafe bilgisi","Telefon ve kılıf uyumu"],
    ["PB-240","22,5W hızlı şarj ve dahili kablolar","Kablo uçları ve çıkış özellikleri"],
    ["PB-360","6.500 mAh organizer","Organizer içeriği ve uygulama alanı"],
   ].map(([models,feature,detail])=><tr key={models} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{models}</th><td className="p-3">{feature}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">LED Logo ile Şarj Göstergesini Ayırın</h3>
   <p>Bir üründe LED ekran bulunması, logonun aydınlatılabildiğini göstermez. Işıklı markalama için üründe buna uygun alan ve yapı bulunmalıdır. PB-260 açıklamasında hem ışıklı logo alanı hem dijital batarya göstergesi belirtilir; bunlar ayrı özelliklerdir. Gösterge veya fener bilgisini markalama özelliği yerine kullanmayın.</p>
   <h3 className="text-xl font-bold text-white">Logo Çizgileri ve Uygulanabilir Ölçü</h3>
   <p>İnce çizgiler, küçük harfler ve uzun firma adları ışıklı alanda farklı görünebilir. Logonuzu mümkünse vektörel dosya olarak paylaşın; uygulanabilir ölçüyü ve ışık rengini seçtiğiniz model üzerinden teyit edin. Bütün ürünlerin aynı logo alanını, parlaklığı veya renk seçeneklerini sunduğunu varsaymayın.</p>
   <p>PB-130 Light-Up lazer kazıma logo teknolojisiyle tanımlanır. PB-140 ve PB-160 bilgilerinde UV baskı ve ışıklı markalama seçenekleri bulunur. Yüzeye renkli baskı ile aydınlatmalı markalama aynı işlem değildir. İstediğiniz görünümü belirtip tasarımın yerleşimini üretim öncesinde onaylayın.</p>
   <h3 className="text-xl font-bold text-white">Kapasite ve Şarj Özellikleri</h3>
   <p>PB-360 organizer 6.500 mAh, PB-100 8.000 mAh kapasiteyle tanımlanır. Bu listedeki diğer modeller 10.000 mAh olarak sunulur. Işıklı logo bulunması daha hızlı şarj veya belirli bir telefon doldurma sayısı anlamına gelmez. Kapasiteyi, cihaz bataryası ve kullanım koşullarıyla birlikte değerlendirin.</p>
   <p>Kablosuz şarj, MagSafe uyumluluğu ve dahili kablo desteği tüm ürünlerde ortak değildir. PB-120 ve PB-160 standlı; PB-240 dahili kablolu ve hızlı şarj bilgisiyle sunulur. Kablolu çıkış gücü ile kablosuz şarj gücünü ayırın. Belirli bir telefon veya saat için ürün seçiyorsanız uyumluluğu ayrıca sorun.</p>
   <h3 className="text-xl font-bold text-white">Organizer ile Taşınabilir Şarj Cihazı Arasında Seçim</h3>
   <p>PB-360, ışıklı logolu PU deri organizer olarak diğer gövde tiplerinden ayrılır. Hediye planında organizer işlevi, dış ölçü ve paket kapsamını birlikte inceleyin. Bir organizer modelindeki aksesuarların başka bir powerbankte de bulunduğunu kabul etmeyin. İçerik ve paketleme teklif sırasında açıklığa kavuşturulmalıdır.</p>
   <h3 className="text-xl font-bold text-white">Kurumsal Işıklı Logo Siparişi</h3>
   <p>Model kodunu, adet ve renk dağılımını, logo dosyasını ve hedef teslim tarihini paylaşın. Kartlarda fiyat bulunan tutarlar baskı hariç TL + KDV olarak gösterilir. Işıklı logo alanının üründe bulunması uygulama bedelinin dahil olduğu anlamına gelmez; tasarım ve markalamayı kapsayan toplam teklif isteyin.</p>
   <p>Güncel tedarik uygunluğu, logo onayı ve kutulama istekleri teslim planını etkiler. Manyetik şarj önceliğinizse <Link href="/promosyon-magsafe-powerbank" className="font-semibold text-white underline">MagSafe powerbank modellerini</Link>, bütün seçenekler için <Link href="/promosyon-powerbank" className="font-semibold text-white underline">ana powerbank kategorisini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Işıklı Logolu Powerbank Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f=><div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
  <section aria-labelledby="powerbank-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
    <h2 id="powerbank-secim-rehberi-baslik" className="text-xl font-bold !text-black">Powerbank Seçimini Planlayın</h2>
    <p className="mt-3 text-sm leading-7 !text-gray-700">Kapasite, cihaz ve bağlantı uyumu, kablolu ve kablosuz şarj ile logo seçeneklerini birlikte değerlendirin.</p>
    <Link href="/rehber/promosyon-powerbank-secim-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">Powerbank Seçim Rehberini İncele →</Link>
  </section>
 </div>;
}
