import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMetalKeychain } from "@/data/keychainSubcategories";

const CATEGORY = "Anahtarlık";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-metal-anahtarlik";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı metal anahtarlık modellerini ve baskı hariç fiyatlarını karşılaştırın. Metal yüzey, deri detay ve işlev seçeneklerini inceleyerek toplu teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Metal Anahtarlık Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Metal Anahtarlık Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Metal Anahtarlık Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isMetalKeychain(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Anahtarlık", item: SITE_URL + "/promosyon-anahtarlik" },
          { "@type": "ListItem", position: 3, name: "Metal Anahtarlık", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Metal Anahtarlık", url: PAGE_URL, description,
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
          <span aria-current="page">Metal Anahtarlık</span>
        </nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
        <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Metal Anahtarlık Modelleri</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Metal veya alüminyum özelliği belirtilen AN serisi anahtarlıkları karşılaştırın. Metal yüzeyli, deri detaylı ve farklı işlevlere sahip modelleri ürün bilgilerinden inceleyin. Sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-anahtarlik" className="rounded-xl border border-gray-200 px-5 py-3 text-black">Tüm Anahtarlık Modelleri</Link>
        </div>
      </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-metal-anahtarlik-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyat baskı hariçtir."}))} />

      <section id="metal-anahtarlik-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Metal Promosyon Anahtarlık Nasıl Seçilir?</h2>
<p className="leading-7">Metal anahtarlık seçerken logo uygulanacak yüzeyi, anahtarlığın biçimini ve taşıma alışkanlığını birlikte değerlendirin. Sade bir metal form, deri detaylı bir model ve açacak işlevli bir seçenek farklı ihtiyaçlara yanıt verebilir. Dağıtım amacı ve hedef adet, modelleri daraltmak için iyi bir başlangıçtır.</p>
<p className="leading-7">Bu listede ürün başlığında veya kısa açıklamasında metal ya da alüminyum özelliği belirtilen AN serisi modeller bulunur. Metal çerçeveli ve deri detaylı ürünler de bu gruba dahildir; listelenmesi ürünün bütün parçalarının metal olduğu anlamına gelmez. Her modelin malzemesini ve uygulama alanını detay sayfasından kontrol edin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Gövde, Askı ve Halka Yapısını Karşılaştırın</h2>
<p className="leading-7">Yuvarlak, oval, kare veya dikdörtgen yüzeyler logo tasarımına farklı alanlar sunar. Uzun bir firma adı ile tek simgeden oluşan bir logo için uygun yerleşim aynı olmayabilir. Görseldeki boş yüzeyin tamamını baskı alanı kabul etmeyin; belirtilen uygulama ölçüsünü esas alın.</p>
<p className="leading-7">Deri veya deri görünümlü askı bulunan modellerde metal yüzey ile askı bölümünü ayrı inceleyin. Ürün açıklamasında yalnızca deri görünümü belirtilmesi gerçek deri kullanıldığını göstermez. Halka sayısı, bağlantı biçimi ve varsa hareketli parça bilgileri de seçim sırasında değerlendirilebilir.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Açacaklı, Ev ve Araba Şeklindeki Modeller</h2>
<p className="leading-7">Açacaklı anahtarlık isteyen kullanıcı için işlev, ev veya araba biçiminde model isteyen kullanıcı için tasarım öne çıkabilir. Fonksiyonel veya şekilli bir model seçerken logonun okunabilirliğini ve kullanılabilir yüzeyi de kontrol edin. Bütün metal anahtarlıklarda açacak ya da telefon standı bulunmaz.</p>
<p className="leading-7">Emlak, otomotiv, bayi ziyareti veya etkinlik dağıtımı için uygunluğu yalnızca şekle göre belirlemeyin. Firma kimliği, kullanım amacı ve hedef bütçeyi birlikte düşünün. Ek işlevin nasıl kullanılacağı ürün bilgisine göre değerlendirilmelidir.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Metal Anahtarlığa Lazer ve Diğer Logo Uygulamaları</h2>
<p className="leading-7">Lazer uygulamasına uygun olduğu belirtilen modellerde logo, firma adı veya kısa bir mesaj değerlendirilebilir. Ancak uygunluk yalnızca metal kelimesine bakılarak belirlenmez; yüzey kaplaması ve ürünün uygulama bilgisi önemlidir. Renkli logo veya etiket isteniyorsa bunun seçilen model için uygulanabilirliğini ayrıca sorun.</p>
<p className="leading-7">İki yüzü olan her anahtarlık çift yön uygulamaya uygun olmayabilir. Ön ve arka yüzün biçimi veya malzemesi farklı olabilir. Teklif talebinde hangi yüzde hangi bilginin bulunacağını belirtin. Vektörel logo dosyanız varsa paylaşın; tasarım onayında küçük yazıları, ölçüyü ve yönü kontrol edin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Hazır Model ile Özel Üretim Arasındaki Fark</h2>
<p className="leading-7">Katalogdaki hazır bir modele logo uygulaması ile özel biçimde metal döküm üretim aynı süreç değildir. Özel tasarım olarak tanımlanan bir ürün için şekil, ölçü, yüzey ve üretim kapsamının ayrıca belirlenmesi gerekebilir. Ürün görselini bütün özel tasarımlar için sabit üretim vaadi olarak değerlendirmeyin.</p>
<p className="leading-7">Özel üretimde varsa kalıp, numune veya ek tasarım çalışmalarının teklif kapsamını sorun. Hazır modellerde renk ve adet uygunluğu güncel tedarikçi stoklarına göre netleştirilir. Her iki durumda da teslim süresini ihtiyaç tarihinizle birlikte değerlendirin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Metal Anahtarlık Fiyatları ve Toptan Sipariş</h2>
<p className="leading-7">Kartlardaki sayısal tutarlar baskı hariç birim ürün fiyatıdır; KDV ayrıca eklenir. Fiyatı bulunmayan modeller için güncel teklif isteyin. Birim ürün bedelinin yanında logo uygulamasını, varsa özel üretim giderlerini, kutu veya paketlemeyi ve kargoyu birlikte değerlendirin.</p>
<p className="leading-7">Karşılaştırma yaparken aynı adet ve aynı baskı kapsamıyla teklif alın. Ürün kodunu, adedi, renk tercihini, logo dosyasını ve ihtiyaç tarihinizi paylaşmanız kapsamın netleşmesini sağlar. Minimum sipariş ve teslim süresi modele, tedarik veya özel üretim koşullarına ve uygulamaya göre belirlenir.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Metal Anahtarlık Karşılaştırma Tablosu</h2><div className="overflow-x-auto"><table className="w-full min-w-[540px] border-collapse text-left text-sm"><caption className="sr-only">Metal anahtarlık seçiminde karşılaştırılacak özellikler</caption><thead><tr><th scope="col" className="border-b p-3 !text-black">Özellik</th><th scope="col" className="border-b p-3 !text-black">Sipariş öncesi kontrol</th></tr></thead><tbody>{[
["Malzeme", "Metal yüzey, çerçeve ve varsa askı bölümünün ayrı özellikleri"],
["Logo alanı", "Yüzey biçimi, belirtilen ölçü ve tasarımın okunabilirliği"],
["İşlev", "Varsa açacak, stand veya modele özgü kullanım özelliği"],
["Uygulama", "Ürüne uygun yöntem ve tek ya da çift yön talebi"],
["Üretim", "Hazır model veya özel tasarım kapsamı"],
["Teklif", "Adet, ambalaj, KDV, kargo ve teslim koşulları"],
].map(([a,b])=><tr key={a}><th scope="row" className="border-b p-3 font-semibold !text-black">{a}</th><td className="border-b p-3">{b}</td></tr>)}</tbody></table></div></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Metal Anahtarlık Hakkında Sık Sorulan Sorular</h2><div className="divide-y divide-gray-200">{[
["Deri detaylı modeller neden metal anahtarlık listesinde?", "Bir üründe metal logo yüzeyi veya gövde ile deri ya da deri görünümlü askı birlikte bulunabilir. Parçaların gerçek malzemesini ürün açıklamasından kontrol edin."],
["Her metal anahtarlığa lazer uygulanabilir mi?", "Yöntem ürünün yüzeyine ve kaplamasına göre belirlenir. Seçtiğiniz modelin baskı bilgisini esas alın; tüm metal ürünlere ortak uygunluk varsaymayın."],
["İki tarafa farklı bilgiler yazılabilir mi?", "İki tarafta uygun alan bulunan modellerde değerlendirilebilir. Ön ve arka yüzde istediğiniz logo veya metni teklif talebinde ayrı belirtin."],
["Anahtarlıklar kutulu mu?", "Kutu ve paketleme kapsamı model ve teklife göre kontrol edilmelidir. Ürün görselinden bütün siparişlerin aynı ambalajla sunulacağı sonucunu çıkarmayın."],
["Özel biçimde metal anahtarlık yaptırılabilir mi?", "Özel üretime uygun model ve tasarım için şekil, ölçü, adet ve varsa kalıp kapsamı ayrıca değerlendirilir. Hazır ürüne logo baskısıyla aynı koşullar geçerli olmayabilir."],
["Fiyatlara logo baskısı ve KDV dahil mi?", "Listelenen sayısal tutarlar baskı hariç birim fiyatlardır; KDV ayrıca eklenir. Model, adet ve tasarım için baskılı toplam teklif isteyebilirsiniz."],
].map(([q,a])=><div key={q} className="py-5"><h3 className="text-lg font-bold !text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<div className="space-y-3"><h2 className="text-2xl font-bold !text-black">Anahtarlık Sipariş Bütçesini Planlayın</h2><p className="leading-7">Ürün ve uygulama maliyetlerini değerlendirmek için <Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="font-semibold !text-black underline">promosyon anahtarlık fiyatları rehberini</Link> inceleyebilirsiniz. Teklifinizi ürün kodu ve tasarımınızla birlikte netleştirin.</p></div>
<div className="flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Metal Anahtarlık İçin Teklif Al</Link><Link href="/promosyon-anahtarlik" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold !text-black">Tüm Anahtarlık Modelleri</Link></div>
</section><section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5"><h2 className="text-xl font-bold text-black">Seçim ve Baskı Rehberi</h2><Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white"><Image src="/guides/promosyon-anahtarlik-fiyatlari-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold text-white">Promosyon Anahtarlık Fiyatları ve Yaptırma Maliyeti</h3><p className="mt-2 text-sm leading-6 text-white/90">Anahtarlık yaptırma fiyatlarını ürün, baskı, adet ve hazırlık bedeliyle değerlendirin. Örnek toplam maliyet hesabını ve teklif kapsamını inceleyin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link></section></div></div>
  );
}
