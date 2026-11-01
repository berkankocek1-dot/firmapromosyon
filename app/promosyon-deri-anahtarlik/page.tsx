
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isLeatherKeychain } from "@/data/keychainSubcategories";

const CATEGORY = "Anahtarlık";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-deri-anahtarlik";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Deri ve deri görünümlü promosyon anahtarlık modellerini karşılaştırın. Askı, metal yüzey ve logo uygulaması seçeneklerini inceleyerek toplu sipariş için teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Deri Anahtarlık Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Deri Anahtarlık Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Deri Anahtarlık Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isLeatherKeychain(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Anahtarlık", item: SITE_URL + "/promosyon-anahtarlik" },
          { "@type": "ListItem", position: 3, name: "Deri Anahtarlık", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Deri Anahtarlık", url: PAGE_URL, description,
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
          <span aria-current="page">Deri Anahtarlık</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Deri Anahtarlık Modelleri</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-200">Deri detaylı ve deri görünümlü AN serisi anahtarlıkları inceleyin. Askı tasarımını, metal logo yüzeyini ve modele uygun uygulama seçeneklerini karşılaştırın. Malzeme bilgisi ürün bazında değerlendirilir; sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-anahtarlik" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Anahtarlık Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} deri anahtarlık modeli gösteriliyor</p>
      <section aria-label="Deri anahtarlık modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section id="deri-anahtarlik-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Deri ve Deri Görünümlü Anahtarlık Seçimi</h2>
<p className="leading-7">Deri anahtarlık ararken ürünün hangi bölümünde bu malzemenin veya görünümün kullanıldığını inceleyin. Bazı modellerde askı bölümü öne çıkarken bazılarında metal yüzey ile birlikte tasarlanmış bir detay bulunur. Logo uygulamasının yapılacağı parça, ürünün genel görünümünden ayrı değerlendirilmelidir.</p>
<p className="leading-7">Bu sayfa, başlığında veya kısa açıklamasında deri özelliği belirtilen AN serisi kayıtları bir araya getirir. Deri görünümlü olarak tanımlanan bir ürünün gerçek deri olduğu sonucunu çıkarmayın. Gerçek deri, suni deri veya başka bir malzeme tercihiniz varsa açık malzeme bilgisini sipariş öncesinde netleştirin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Askı Biçimi, Bağlantı ve Metal Detaylar</h2>
<p className="leading-7">Uzun veya kısa askı, halka bağlantısı ve metal yüzeyin biçimi modeller arasında karşılaştırılabilir ayrıntılardır. Anahtarlığın cepte veya çantada taşınacağı kullanım şeklini düşünün. Ölçü ve ağırlık bilgisi belirtilmemişse bunları yalnızca fotoğrafa bakarak tahmin etmeyin.</p>
<p className="leading-7">Yuvarlak, oval veya dikdörtgen metal yüzeyli bir modelde logo tasarımının kaplayacağı alan değişir. Metal parçanın görünür boyutu ile uygulanabilir baskı alanı aynı olmayabilir. Uzun firma adları ve küçük yazılar için kullanılacak yüzeyin ölçüsünü kontrol edin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Gofre ile Lazer Uygulaması Aynı Şey Değildir</h2>
<p className="leading-7">Uygun yüzeylerde gofre ile iz oluşturulması ve lazer uygulaması farklı tekniklerdir. Bir modelin deri detaylı olması her iki yönteme de uygun olduğunu göstermez. Logo metal parçaya mı yoksa askı bölümüne mi uygulanacak, önce bunu belirleyin ve ürünün belirtilen baskı yöntemini esas alın.</p>
<p className="leading-7">Tek veya çift yön uygulama isteğinizi, her yüzde kullanılacak logo veya metinle birlikte paylaşın. Ön ve arka yüzlerin malzemesi veya yapısı farklıysa uygulama seçenekleri de değişebilir. Üretim onayında yerleşimi, ölçüyü ve ince çizgilerin okunabilirliğini birlikte kontrol edin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Renk Seçimi ve Kurumsal Hediye Sunumu</h2>
<p className="leading-7">Gövde, askı ve metal detayın rengi logonun görünümünü etkileyebilir. Kurumsal renginize yakın bir model arıyorsanız güncel seçenekleri ürün koduyla sorun. Fotoğrafta görünen her rengin istediğiniz adette temin edilebileceğini varsaymayın.</p>
<p className="leading-7">Kutu, kılıf veya ayrı paketleme talebiniz varsa teklif kapsamına açıkça ekletin. Ürün görselindeki sunum bütün modeller için ortak bir ambalaj vaadi değildir. Müşteri ziyareti veya çalışan hediyesi için alım yaparken baskı ile ambalajın birlikte nasıl sunulacağını değerlendirin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Deri Anahtarlık Fiyatlarını Nasıl Karşılaştırabilirsiniz?</h2>
<p className="leading-7">Listelenen sayısal tutarlar baskı hariç birim ürün fiyatıdır; KDV ayrıca eklenir. Fiyatı bulunmayan modeller için güncel teklif alın. Karşılaştırmada ürün bedelinin yanında logo uygulamasını, varsa kalıp veya hazırlık giderlerini, ambalajı ve kargoyu birlikte değerlendirin.</p>
<p className="leading-7">Aynı adet ve aynı uygulama kapsamıyla teklif istemek seçenekleri karşılaştırmayı kolaylaştırır. Malzeme konusunda özel beklentiniz varsa yalnızca en düşük tutara göre karar vermeyin; ürün tanımı ile teklif edilen modelin aynı olduğundan emin olun.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Toplu Sipariş Öncesi Hazırlık</h2>
<p className="leading-7">Teklif talebinde AN ürün kodunu, sipariş adedini, renk tercihini ve logo dosyasını paylaşın. Logonun metal yüzeye veya askıya uygulanmasını istiyorsanız bunu ayrıca belirtin. Görsel yerine vektörel logo dosyanız varsa tasarımın uygulama alanına uyarlanması için gönderebilirsiniz.</p>
<p className="leading-7">Ürünler güncel tedarikçi stoklarına göre temin edilir. Minimum adet, renk uygunluğu ve teslim süresi model ile uygulama koşullarına göre netleştirilir. Etkinlik veya ziyaret tarihi için alım yapıyorsanız tasarım onayı ve sevkiyat süresini birlikte planlayın.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Deri Anahtarlık Seçim Tablosu</h2><div className="overflow-x-auto"><table className="w-full min-w-[540px] border-collapse text-left text-sm"><caption className="sr-only">Deri detaylı ve deri görünümlü anahtarlıkların karşılaştırılması</caption><thead><tr><th scope="col" className="border-b p-3 !text-black">Ölçüt</th><th scope="col" className="border-b p-3 !text-black">Kontrol edilecek bilgi</th></tr></thead><tbody>{[
["Malzeme", "Gerçek deri, suni deri veya deri görünümü tanımının açık olması"],
["Askı ve bağlantı", "Askı biçimi, halka ve metal parçanın yapısı"],
["Logo yüzeyi", "Metal bölüm veya askı üzerindeki uygun uygulama alanı"],
["Yöntem", "Seçilen modelde belirtilen lazer veya gofre uygunluğu"],
["Sunum", "Kutu, kılıf ve paketlemenin teklif kapsamı"],
["Tedarik", "Renk, adet ve ihtiyaç tarihine göre temin koşulları"],
].map(([a,b])=><tr key={a}><th scope="row" className="border-b p-3 font-semibold !text-black">{a}</th><td className="border-b p-3">{b}</td></tr>)}</tbody></table></div></div>
<div className="space-y-4"><h2 className="text-2xl font-bold !text-black">Deri Anahtarlık Hakkında Sık Sorulan Sorular</h2><div className="divide-y divide-gray-200">{[
["Listelenen bütün modeller gerçek deri mi?", "Hayır, bu sayfada deri detaylı ve deri görünümlü tanımlanan modeller birlikte bulunur. Gerçek malzeme bilgisini ürün ve teklif üzerinden doğrulayın."],
["Deri detaylı ürün metal kategorisinde de bulunabilir mi?", "Evet. Metal logo yüzeyi ile deri veya deri görünümlü askı aynı üründe bulunabilir. Her iki listeden de aynı ürün detayına ulaşılır."],
["Logo askıya mı yoksa metal parçaya mı uygulanır?", "Uygun alan modele göre değişir. İstediğiniz yerleşimi belirtin ve ürün için belirtilen yöntemle birlikte değerlendirilmesini isteyin."],
["Her modelde gofre yapılabilir mi?", "Gofre uygunluğu malzeme ve yüzeye göre değerlendirilir. Deri görünümü tek başına yöntemin uygulanabileceğini göstermez."],
["Renk ve ambalaj seçebilir miyim?", "Renk temini ve ambalaj seçenekleri modele ve güncel tedarik koşullarına bağlıdır. İstenen renk, adet ve sunum şeklini teklif talebinde paylaşın."],
["Sayfadaki fiyatlar baskılı sipariş tutarı mı?", "Sayısal tutarlar baskı hariç birim fiyatlardır; KDV ayrıca eklenir. Logo uygulaması ve varsa ambalaj için toplam teklif isteyin."],
].map(([q,a])=><div key={q} className="py-5"><h3 className="text-lg font-bold !text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<div className="space-y-3"><h2 className="text-2xl font-bold !text-black">Teklif Kapsamını Netleştirin</h2><p className="leading-7">Sipariş bütçesini oluşturan kalemleri <Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="font-semibold !text-black underline">anahtarlık fiyatları rehberinden</Link> inceleyebilirsiniz. Malzeme ve uygulama tercihinizi seçtiğiniz ürün koduyla birlikte belirtin.</p></div>
<div className="flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Deri Anahtarlık İçin Teklif Al</Link><Link href="/promosyon-anahtarlik" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold !text-black">Tüm Anahtarlıklar</Link><Link href="/promosyon-metal-anahtarlik" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold !text-black">Metal Anahtarlıklar</Link></div>
</section></div>
  );
}
