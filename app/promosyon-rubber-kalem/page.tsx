
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isRubberPen } from "@/data/penSubcategories";

const CATEGORY = "Kalem";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-rubber-kalem";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı rubber kalem modellerini karşılaştırın. Yüzey, gövde, yazım ve baskı özelliklerini inceleyerek kurumsal toplu sipariş için teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Rubber Kalem Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Rubber Kalem Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Rubber Kalem Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isRubberPen(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Kalem", item: SITE_URL + "/promosyon-kalem" },
          { "@type": "ListItem", position: 3, name: "Rubber Kalem", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Rubber Kalem", url: PAGE_URL, description,
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
          <Link href="/promosyon-kalem" className="underline">Promosyon Kalem</Link><span>/</span>
          <span aria-current="page">Rubber Kalem</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Rubber Kalem Modelleri</h1>

<p className="mt-4 max-w-3xl leading-7 text-gray-200">Rubber yüzeyi belirtilen metal, roller ve dokunmatik kalem seçeneklerini inceleyin. Tutuş tercihinizi, yazım özelliklerini ve logo uygulamasını birlikte değerlendirin. Sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-kalem" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Kalem Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} rubber kalem modeli gösteriliyor</p>
      <section aria-label="Roller kalem modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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



<section id="rubber-kalem-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Rubber Promosyon Kalem Nedir?</h2>
<p className="leading-7">Rubber ifadesi kalemin yüzey veya kaplama özelliğini tanımlar; tek başına yazım türünü ya da gövdenin ana malzemesini belirtmez. Rubber olarak adlandırılan bir model metal, roller veya dokunmatik kalem seçenekleri arasında da bulunabilir. Bu sayfada başlığında rubber özelliği açıkça belirtilen Kalem kategorisindeki modeller listelenir.</p>
<p className="leading-7">Model seçerken yalnızca dış görünümü değil, ürün detayındaki gövde ve yazım bilgilerini de karşılaştırın. Yüzey dokusu, tutuş hissi ve logo görünümü sizin için belirleyiciyse numune temin koşullarını siparişten önce sorabilirsiniz.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Gövde Kaplaması ile Yazım Türünü Ayırın</h2>
<p className="leading-7">Rubber yüzey bir mürekkep veya refil türü değildir. Kalemin roller, jel veya başka bir yazım sistemine sahip olup olmadığını ürün açıklamasından kontrol edin. Mürekkep rengi ve uç kalınlığı hakkında bilgi yoksa görünümden hareketle karar vermeyin.</p>
<p className="leading-7">Benzer şekilde dokunmatik uç her rubber modelde bulunmaz. Telefon veya tablet kullanımına yönelik bir ürün arıyorsanız stylus özelliğinin seçtiğiniz modelde belirtilmesini esas alın. Belirli cihazlarla uyumluluk konusunda özel ihtiyacınızı sipariş öncesinde paylaşın.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Rubber Kaleme Logo Uygulaması</h2>
<p className="leading-7">Logo uygulaması kaplamanın ve gövdenin özelliklerine göre değerlendirilir. Bir model için lazer baskı belirtilmiş olması diğer bütün rubber kalemlerin aynı yöntemle basılabileceği anlamına gelmez. Uygulama alanını ve uygun yöntemi ürün bazında kontrol edin.</p>
<p className="leading-7">Logonun yüzey üzerindeki görünümü; gövde rengi, kaplama ve tasarımın ayrıntılarıyla birlikte değerlendirilmelidir. Firma adı, internet adresi ve varsa ek mesajı birlikte gönderin. Tek veya çift yön uygulama isteğinizi belirtin; onay görselinde yerleşimi, ölçüyü ve yazıların okunabilirliğini kontrol edin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Kurumsal Hediye İçin Model Karşılaştırması</h2>
<p className="leading-7">Müşteri ziyareti, çalışan hediyesi veya etkinlik dağıtımı için kalem seçerken kullanım amacını ve toplam adedi belirleyin. Kapak tasarımı, tutuş alanı ve yazım beklentisini birlikte değerlendirin. Her ürün için belirtilmeyen ergonomi veya dayanıklılık özelliklerini ortak bir vaat olarak kabul etmeyin.</p>
<p className="leading-7">Özel kutu veya ambalaj istiyorsanız bunun ürün bedeline dahil olup olmadığını sorun. Görselde görülen aksesuarların teklif kapsamını doğrulayın. Hediye sunumunda ambalajın yanında baskılı kalemin nasıl yerleşeceğini de planlayabilirsiniz.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Rubber Kalem Fiyatları ve Toplu Sipariş</h2>
<p className="leading-7">Kartlarda sayısal fiyat bulunan ürünler için tutarlar baskı hariç birim ürün fiyatıdır; KDV ayrıca eklenir. Fiyat belirtilmeyen modeller için güncel teklif alın. Alternatifleri aynı adet, baskı yönü ve ambalaj kapsamıyla karşılaştırın.</p>
<p className="leading-7">Teklif talebinde ürün kodunu, adedi, gövde rengi tercihini, logo dosyasını ve ihtiyaç tarihinizi paylaşın. Ürünler güncel tedarikçi stoklarına göre temin edilir. Minimum adet, renk uygunluğu ve teslim süresi ürün ile baskı koşullarına göre netleştirilir. Etkinlik tarihi varsa tasarım onayı ve sevkiyat süresini birlikte değerlendirin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Rubber Kalem Seçim Tablosu</h2><div className="overflow-x-auto"><table className="w-full min-w-[520px] border-collapse text-left text-sm"><caption className="sr-only">Rubber kalem karşılaştırma ölçütleri</caption><thead><tr><th scope="col" className="border-b p-3 text-black">Özellik</th><th scope="col" className="border-b p-3 text-black">Kontrol edilecek bilgi</th></tr></thead><tbody>{[
["Gövde ve yüzey", "Ana malzeme, kaplama bilgisi ve renk seçenekleri"],
["Yazım", "Belirtilen refil, mürekkep rengi ve uç özellikleri"],
["Ek işlev", "Varsa dokunmatik uç veya modele özgü özellikler"],
["Logo", "Uygun yöntem, uygulama alanı ve yönü"],
["Sipariş", "Adet, ambalaj kapsamı ve ihtiyaç tarihi"],
].map(([a,b]) => <tr key={a}><th scope="row" className="border-b p-3 font-semibold text-black">{a}</th><td className="border-b p-3">{b}</td></tr>)}</tbody></table></div></div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Rubber Kalem Hakkında Sık Sorulan Sorular</h2><div className="divide-y divide-gray-200">{[
["Rubber kalem metal kalemden farklı mı?", "Rubber yüzey özelliğini, metal ise gövde malzemesini tanımlar. Bir model her iki özelliğe de sahip olabilir; ürünün teknik bilgisini inceleyin."],
["Bütün rubber kalemler roller mi?", "Hayır. Yazım türü kaplamadan bağımsız olarak ürün bazında kontrol edilmelidir."],
["Hepsinde dokunmatik uç var mı?", "Stylus özelliği tüm modellere ortak değildir. Seçtiğiniz ürün için belirtilen işlevleri esas alın."],
["Her modele lazer logo uygulanabilir mi?", "Uygun yöntem yüzey ve gövde özelliklerine göre belirlenir. Lazer baskı uygunluğunu seçilen model üzerinden kontrol edin."],
["Fiyata logo baskısı dahil mi?", "Sayısal ürün fiyatları baskı hariç TL + KDV tutarlarıdır. Model, adet ve tasarıma göre baskılı teklif isteyin."],
["Minimum sipariş ve teslim süresi nedir?", "Güncel tedarik, renk, adet ve baskı koşullarına göre netleştirilir. İhtiyaç tarihinizi teklif talebinde paylaşın."],
].map(([q,a]) => <div key={q} className="py-5"><h3 className="text-lg font-bold text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<div className="space-y-3"><h2 className="text-2xl font-bold text-black">İlgili Kalem Rehberleri</h2><p className="leading-7"><Link href="/rehber/promosyon-kalem-toptan" className="font-semibold text-black underline">Toplu kalem siparişi rehberi</Link> ile teklif hazırlığını; <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="font-semibold text-black underline">kalem baskı türleri rehberi</Link> ile uygulama seçeneklerini inceleyebilirsiniz.</p></div>
<div className="flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Rubber Kalem İçin Teklif Al</Link>
<Link href="/promosyon-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Tüm Kalemler</Link>
<Link href="/promosyon-metal-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Metal Kalemler</Link>
<Link href="/promosyon-plastik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Plastik Kalemler</Link>
<Link href="/promosyon-dokunmatik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Dokunmatik Kalemler</Link>
<Link href="/promosyon-roller-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Roller Kalemler</Link>
<Link href="/promosyon-jel-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Jel Kalemler</Link>
<Link href="/promosyon-kursun-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Kurşun Kalemler</Link>
</div></section></div>
  );
}
