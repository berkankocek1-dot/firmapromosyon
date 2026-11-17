import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMetalDetailNotebook } from "@/data/notebookSubcategories";

const CATEGORY = "Tarihsiz Defter";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-metal-detayli-defter`;
const description = "Metal plakalı, tokalı ve şerit detaylı promosyon defterleri karşılaştırın. Kapak ve iç sayfa özelliklerini inceleyip logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Metal detaylı defter tamamen metal kapaklı mı?",
    "answer": "Hayır. Bu grupta kapakta metal plaka, toka, şerit veya başka metal detay belirtilen tarihsiz defterler yer alır. Bu ayrıntı kapağın tamamının metal olduğunu göstermez."
  },
  {
    "question": "Metal plakalı defter ile metal tokalı defterin farkı nedir?",
    "answer": "Plaka, kapak üzerindeki bir yüzey detayıdır; toka ise kapanış tasarımının parçası olabilir. Konum, ölçü ve işlev model bazında incelenmelidir."
  },
  {
    "question": "Logo metal parçaya uygulanabilir mi?",
    "answer": "Metal parçanın yüzeyi, kaplaması ve alanı değerlendirilerek uygunluk belirlenir. Her metal ayrıntının lazer veya başka bir logo yöntemine uygun olduğunu varsaymayın; ürün kodu ve logonuzla teyit edin."
  },
  {
    "question": "Metal tokalı bütün modeller mıknatıslı mı?",
    "answer": "Metal toka bulunması tek başına mıknatıslı kapanış anlamına gelmez. TD-400 açıklamasında manyetik kilit belirtilir; diğer modellerin kapanış biçimi ayrıca kontrol edilmelidir."
  },
  {
    "question": "Metal detaylı defter fiyatına baskı dahil mi?",
    "answer": "Fiyat gösterilen kartlarda ürün bedeli baskı hariç TL + KDV olarak sunulur. Logo uygulaması, adet ve paketleme istekleriyle toplam teklif hazırlanır. Fiyatı bulunmayan ürünler için güncel teklif isteyin."
  }
];
export const metadata: Metadata = {
 title: "Metal Detaylı Promosyon Defter Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/products/promosyon-tarihsiz-defter-td-101.jpg", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Metal Detaylı Defter Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isMetalDetailNotebook(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Defter", item: `${SITE_URL}/promosyon-defter` },
    { "@type": "ListItem", position: 3, name: "Metal Detaylı Defter", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Metal Detaylı Promosyon Defter", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-defter" className="underline">Promosyon Defter</Link> / Metal Detaylı Defter</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Metal Detaylı Promosyon Defter Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">Metal plaka, toka, şerit veya kapak ayrıntısıyla sunulan tarihsiz defterleri inceleyin. Logo uygulanacak alanı, kapanış yapısını ve iç sayfa özelliklerini karşılaştırarak kurumsal toplu siparişiniz için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-defter" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Defter Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-metal-detayli-defter-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Metal Plaka, Toka ve Şerit Arasındaki Farklar</h2>
        <p>Metal detaylı promosyon defter seçerken metal parçanın yalnız görünümünü değil, kapak üzerindeki konumunu ve işlevini de inceleyin. Bir plaka, kapanış tokası ve dekoratif şerit aynı kullanım özelliğini ifade etmez. Bu sayfadaki ürünler, başlık veya kısa açıklamalarında metal ayrıntı belirtilen tarihsiz defterlerden oluşur.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Ürün bilgilerinde belirtilen metal detay örnekleri</caption><thead><tr><th scope="col" className="p-3 text-black">Detay</th><th scope="col" className="p-3 text-black">Model örnekleri</th><th scope="col" className="p-3 text-black">Kontrol edilecek bilgi</th></tr></thead><tbody>{[
         ["Metal plaka", "TD-101, TD-102", "Plakanın konumu ve logo alanı"], ["Metal toka", "TD-116, TD-165, TD-190, TD-260", "Kapanış biçimi ve yüzey"], ["Metal şerit", "TD-370", "Şeridin kapak tasarımındaki yeri"], ["Metal detaylı kapanış bandı", "TD-104", "Bandın yerleşimi"], ["Manyetik kilit ve metal toka", "TD-400", "Kapanış mekanizması"],
        ].map(([feature, code, check]) => <tr key={feature} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{feature}</th><td className="p-3">{code}</td><td className="p-3">{check}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Metal Detay, Tamamen Metal Kapak Demek Değildir</h3>
        <p>Bu gruptaki ürünlerin kapak malzemeleri ve metal parçaları birlikte değerlendirilmelidir. Örneğin TD-116 termo deri kapak ve metal toka bilgisiyle, TD-165 termo PU kapak ve metal toka bilgisiyle sunulur. Metal ayrıntı ifadesinden kapağın tamamının metal olduğu veya bütün ürünlerin aynı ağırlıkta olduğu sonucu çıkarılamaz.</p>
        <h3 className="text-xl font-bold text-black">Logoyu Kapağa mı, Metal Parçaya mı Uygulamalı?</h3>
        <p>Logo konumunu seçerken parçanın ölçüsünü, kaplamasını ve kapak üzerindeki yerini kontrol edin. Küçük bir metal plaka uzun firma adları veya çok satırlı iletişim bilgileri için sınırlı alan sunabilir. Kapak yüzeyi ise dikiş, toka veya şerit nedeniyle farklı bir yerleşim gerektirebilir.</p>
        <p>Lazer, sıcak baskı, gofre veya renkli uygulama tercihinde model ve logo birlikte değerlendirilir. Her metal parçanın lazer kazımaya uygun olduğu varsayılmamalıdır. Mümkünse vektörel logo dosyanızı göndererek uygulanabilir alanı ve yöntemi teyit edin. Üretim öncesinde tasarımı gerçek uygulama ölçüsünde onaylayın.</p>
        <h3 className="text-xl font-bold text-black">Kapanış Biçimini Ayrı Kontrol Edin</h3>
        <p>Metal toka ve manyetik kilit aynı özellik değildir. TD-400 açıklamasında manyetik kilitli kapak belirtilir. Diğer metal tokalı modellerde aynı mekanizmanın bulunduğunu kabul etmeyin. Çantada taşıma veya masa üzerinde kullanım için kapanışın biçimini ürün görselleri ve güncel teknik bilgiler üzerinden değerlendirin.</p>
        <h3 className="text-xl font-bold text-black">Organizer Kılıfı ve İç Sayfa Özellikleri</h3>
        <p>TD-135 ve TD-136 kılıflı organizer defter olarak tanımlanır. TD-135 açıklamasında 224 çizgili sayfa, TD-136 için 13 x 21 cm iç blok ve 160 çizgili sayfa bilgisi bulunur. Dış kılıf ölçüsü ile iç bloğun ölçüsünü aynı kabul etmeyin; paket içeriğini model bazında sorun.</p>
        <p>TD-440 için 15 x 21 cm ve 232 çizgili sayfa belirtilir. Diğer modellerin ebat, sayfa sayısı ve kâğıt özelliklerini ürün detayından ayrı karşılaştırın. Metal ayrıntı, iç sayfa düzenini veya kâğıt gramajını belirlemez. Günlük not alma ihtiyacınızı esas alarak seçim yapın.</p>
        <h3 className="text-xl font-bold text-black">Logo Baskılı Toplu Sipariş</h3>
        <p>Ürün kodunu, renk dağılımını, adedi ve logonun kapakta mı metal parçada mı olmasını istediğinizi paylaşın. Kalem, kutu veya ayrı paketleme gerekiyorsa bunları teklife ekletin. Ürün fotoğrafında bir aksesuar görünmesi tek başına ürün bedeline dahil olduğunu göstermez.</p>
        <p>Fiyat gösterilen kartlarda bedel baskı hariç TL + KDV olarak sunulur. Toplam tutarı aynı model ve uygulama kapsamı üzerinden karşılaştırın. Güncel tedarik uygunluğu, tasarım onayı ve teslimat adresi sipariş planında birlikte değerlendirilir.</p>
        <p>Kalemi birlikte taşımak için <Link href="/promosyon-kalem-tutuculu-defter" className="font-semibold text-black underline">kalem tutuculu defterleri</Link> inceleyebilirsiniz. Bütün modeller <Link href="/promosyon-defter" className="font-semibold text-black underline">ana defter kategorisinde</Link> yer alır.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Metal Detaylı Defter Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="defter-ajanda-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="defter-ajanda-secim-rehberi-baslik" className="text-xl font-bold !text-black">Defter ve Ajanda Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyut, iç sayfa, kapak ve cilt seçeneklerini karşılaştırın; takvim yılı, logo ve toplu sipariş onayını birlikte değerlendirin.</p>
        <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-defter-ajanda-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Defter ve Ajanda Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon defter ve ajandayı kullanım amacı, boyut, iç sayfa, kapak ve cilt yapısıyla karşılaştırın. Takvim yılı, logo, numune ve toplu sipariş onayını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
