
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isPlasticPen } from "@/data/penSubcategories";

const CATEGORY = "Kalem";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-plastik-kalem";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı plastik kalem modellerini ve baskı hariç fiyatlarını inceleyin. Fuar ve etkinlik dağıtımları için renk, yazım ve baskı seçeneklerini karşılaştırın.";

export const metadata: Metadata = {
  title: "Promosyon Plastik Kalem Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Plastik Kalem Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Plastik Kalem Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isPlasticPen(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Kalem", item: SITE_URL + "/promosyon-kalem" },
          { "@type": "ListItem", position: 3, name: "Plastik Kalem", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Plastik Kalem", url: PAGE_URL, description,
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
          <span aria-current="page">Plastik Kalem</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Plastik Kalem Modelleri</h1>

<p className="mt-4 max-w-3xl leading-7 text-gray-200">
  Fuar, seminer ve kurumsal dağıtımlar için plastik kalem modellerini
  karşılaştırın. Ürün detaylarından gövde rengi, refil ve logo uygulama
  bilgilerini inceleyin. Sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.
</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-kalem" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Kalem Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} plastik kalem modeli gösteriliyor</p>
      <section aria-label="Plastik kalem modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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


<section id="plastik-kalem-secim-rehberi"
  className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Promosyon Plastik Kalem Seçimi</h2>
    <p className="leading-7">
      Plastik kalemler fuar, seminer, eğitim ve müşteri ziyaretleri gibi dağıtım
      çalışmalarında değerlendirilebilir. Seçimde yalnızca birim fiyatı değil,
      yazım türünü, gövde rengini ve logo alanını birlikte karşılaştırın.
      Aynı dağıtım için farklı modellerden teklif alırken adet ve baskı kapsamını
      sabit tutun.
    </p>
    <p className="leading-7">
      PLS model kodu bu sayfanın ürün grubunu belirtir. Her modelin refil,
      uç kalınlığı, mürekkep rengi ve mekanizma özellikleri aynı değildir.
      Jel veya dokunmatik özellikler yalnızca ilgili ürünlerde bulunabilir;
      ayrıntıları ürün sayfasından kontrol edin.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Modelleri Hangi Özelliklerle Karşılaştırabilirsiniz?</h2>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <caption className="sr-only">Plastik kalem seçiminde kontrol edilecek özellikler</caption>
        <thead><tr>
          <th scope="col" className="border-b p-3 text-black">Seçim konusu</th>
          <th scope="col" className="border-b p-3 text-black">Kontrol edilecek bilgi</th>
          <th scope="col" className="border-b p-3 text-black">Siparişe etkisi</th>
        </tr></thead>
        <tbody>
          {[
            ["Yazım", "Refil türü, mürekkep rengi ve varsa uç kalınlığı", "Kullanıcının yazım tercihine uygunluk"],
            ["Gövde", "Renk, biçim ve modelde belirtilen tutuş özellikleri", "Kurumsal renk ve kullanım tercihi"],
            ["Logo alanı", "Uygulanabilir baskı ölçüsü ve yönü", "Yazı ve amblemin okunabilirliği"],
            ["Uygulama", "Yüzeye uygun baskı yöntemi", "Tasarımın uygulanabilirliği ve maliyet"],
            ["Tedarik", "İstenen renk ve adet için güncel temin durumu", "Sipariş ve teslimat planı"],
          ].map(([topic, check, impact]) => (
            <tr key={topic}>
              <th scope="row" className="border-b p-3 font-semibold text-black">{topic}</th>
              <td className="border-b p-3">{check}</td>
              <td className="border-b p-3">{impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Plastik Kalem Üzerine Logo Baskısı</h2>
    <p className="leading-7">
      Tampon, UV veya diğer uygulamaların uygunluğu kalemin yüzeyine ve tasarıma
      göre belirlenir. Logo renklerini, baskının tek veya çift yönlü olmasını
      ve firma adı dışında eklenecek metinleri talebinizde belirtin.
      Her plastik modele aynı yöntemin uygulanabileceği varsayılmamalıdır.
    </p>
    <p className="leading-7">
      Dar alanlarda uzun sloganlar ve küçük iletişim bilgileri okunabilirliği
      azaltabilir. Üretim öncesi yerleşimde logo ölçüsünü, yazıları ve konumu
      kontrol edin. Gövde rengiyle logonun kontrastını da değerlendirin.
      {" "}<Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir"
        className="font-semibold text-black underline">Kalem baskı türleri rehberinde</Link>
      {" "}yöntemlerin farklarını inceleyebilirsiniz.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Plastik Kalem Fiyatları ve Dağıtım Bütçesi</h2>
    <p className="leading-7">
      Sayısal fiyatı bulunan ürünlerde tutarlar baskı hariç TL + KDV olarak
      gösterilir. Fiyatı olmayan modeller için güncel teklif isteyin.
      Dağıtım bütçesini planlarken ürün bedeline ek olarak baskı, varsa hazırlık,
      ambalaj ve kargo kalemlerini birlikte değerlendirin.
    </p>
    <p className="leading-7">
      Daha yüksek adette birim maliyet değişebilir; ancak her model için
      aynı indirim veya fiyat düşüşü beklenmemelidir. Farklı adetler için
      aynı baskı kapsamıyla teklif karşılaştırın.
      {" "}<Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir"
        className="font-semibold text-black underline">Kalem fiyatları nasıl hesaplanır?</Link>
      {" "}rehberi toplam bedeli değerlendirmenize yardımcı olur.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Toplu Plastik Kalem Siparişi</h2>
    <p className="leading-7">
      Model kodu, adet, gövde rengi ve logo dosyanızı paylaşarak teklif isteyin.
      Birden fazla şubeye veya etkinliğe dağıtım yapılacaksa miktarları ve
      ihtiyaç tarihlerini ayrıca belirtin. Ürünler güncel tedarikçi stoklarına
      göre temin edilir; istenen renk ve miktar sipariş sırasında netleştirilir.
    </p>
    <p className="leading-7">
      Minimum alım miktarıyla kutu veya koli içi adet bilgisini birbirinden
      ayırın. Baskılı ve baskısız sipariş koşulları aynı olmayabilir.
      Logo onayı, baskı programı ve sevkiyat süresini etkinlik tarihinizle
      birlikte planlayın.
      {" "}<Link href="/rehber/promosyon-kalem-toptan"
        className="font-semibold text-black underline">Toplu kalem siparişi rehberini</Link>
      {" "}inceleyerek teklif hazırlığını tamamlayabilirsiniz.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-black">Plastik Kalem Hakkında Sık Sorulan Sorular</h2>
    <div className="divide-y divide-gray-200">
      {[
        ["Plastik kalem fiyatına baskı dahil mi?",
          "Bu sayfadaki sayısal ürün fiyatları baskı hariçtir. Logo uygulaması için model, adet ve tasarımınıza göre teklif hazırlanır."],
        ["Her plastik kalemin mürekkep rengi aynı mı?",
          "Hayır. Gövde rengi mürekkep rengini göstermez. Refil ve mürekkep bilgisini ürün detayında kontrol edin."],
        ["Çok renkli logo uygulanabilir mi?",
          "Uygunluk modelin yüzeyine, baskı alanına ve tasarıma göre değerlendirilir. Logo dosyasını paylaşarak yöntem bilgisi isteyin."],
        ["Minimum sipariş miktarı nedir?",
          "Seçilen modele, baskılı veya baskısız alıma ve temin koşullarına göre netleşir. Koli veya kutu adedi tek başına minimum sipariş anlamına gelmez."],
        ["İstediğim gövde rengini seçebilir miyim?",
          "Ürünün renk seçenekleri güncel tedarikçi stoklarına bağlıdır. İstediğiniz rengi ve adedi teklif talebinde belirtin."],
        ["Plastik mi metal kalem mi seçmeliyim?",
          "Dağıtım amacını, yazım tercihini, logo uygulamasını ve toplam bütçeyi birlikte değerlendirin. Malzeme tek başına bütün ürün özelliklerini belirlemez."],
      ].map(([question, answer]) => (
        <div key={question} className="py-5">
          <h3 className="text-lg font-bold text-black">{question}</h3>
          <p className="mt-2 leading-7">{answer}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="flex flex-wrap gap-4">
    <Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Plastik Kalem İçin Teklif Al</Link>
    <Link href="/promosyon-metal-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Metal Kalemleri Karşılaştır</Link>
    <Link href="/promosyon-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Tüm Kalem Modelleri</Link>
  </div>
</section>
</div>
  );
}
