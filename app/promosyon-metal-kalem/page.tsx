
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMetalPen } from "@/data/penSubcategories";

const CATEGORY = "Kalem";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-metal-kalem";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı metal kalem modellerini ve baskı hariç fiyatlarını karşılaştırın. Gövde, refil ve baskı özelliklerini inceleyerek toplu sipariş için teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Metal Kalem Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Metal Kalem Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Metal Kalem Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isMetalPen(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Kalem", item: SITE_URL + "/promosyon-kalem" },
          { "@type": "ListItem", position: 3, name: "Metal Kalem", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Metal Kalem", url: PAGE_URL, description,
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
          <span aria-current="page">Metal Kalem</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Metal Kalem Modelleri</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-200">
          Metal gövdeli kalemleri refil, yüzey kaplaması ve logo uygulaması açısından karşılaştırın.
          Jel, rubber veya dokunmatik özellikler modele göre değişir; ayrıntıları ürün sayfalarında inceleyin.
          Fiyat bulunan modellerde tutarlar baskı hariç TL + KDV olarak gösterilir.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-kalem" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Kalem Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} metal kalem modeli gösteriliyor</p>
      <section aria-label="Metal kalem modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section id="metal-kalem-secim-rehberi"
        aria-labelledby="metal-secim-baslik"
        className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">

        <div className="space-y-4">
          <h2 id="metal-secim-baslik" className="text-2xl font-bold text-black">
            Promosyon Metal Kalem Nasıl Seçilir?
          </h2>
          <p className="leading-7">
            Müşteri ziyaretleri, toplantılar veya çalışan hediyeleri için metal kalem
            seçerken kullanım amacını, yazım tercihini ve logo yerleşimini birlikte
            değerlendirin. Gövdenin metal olması; refilin jel olduğunu, belirli bir
            mürekkep rengi bulunduğunu veya kutunun ürüne dahil olduğunu göstermez.
            Her modelin ayrıntılarını ürün sayfasından kontrol edin.
          </p>
          <p className="leading-7">
            Aynı kalemi geniş bir gruba dağıtacaksanız toplam bütçe ve renk temini;
            kişiye özel bir hediye hazırlayacaksanız tasarım, ambalaj ve uygulama
            seçenekleri seçimde öne çıkabilir. Fotoğrafı benzer olan modellerin
            baskı alanları ve yazım özellikleri farklı olabilir.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Metal Kalem Özelliklerini Karşılaştırın
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Metal promosyon kalem seçiminde özelliklerin anlamı
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="border-b p-3 text-black">Özellik</th>
                  <th scope="col" className="border-b p-3 text-black">Neyi anlatır?</th>
                  <th scope="col" className="border-b p-3 text-black">Neyi kontrol etmelisiniz?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Gövde ve kaplama", "Kalemin malzemesi ve yüzey yapısı", "Ürün ölçüsü, kaplama ve uygulamaya uygun yüzey"],
                  ["Tükenmez veya jel", "Refilin yazım türü", "Mürekkep rengi ve varsa uç kalınlığı"],
                  ["Rubber", "Gövdenin yüzey kaplaması", "Modelin baskı yöntemi ve uygulama alanı"],
                  ["Dokunmatik uç", "Uyumlu ekranlarda kullanılabilen ek uç", "Ürünün stylus ve yazım özellikleri"],
                  ["Baskı alanı", "Logo için belirtilen uygulama ölçüsü", "Firma adı, amblem ve küçük yazıların yerleşimi"],
                  ["Kutu veya ambalaj", "Ürünün sunum biçimi", "Ambalajın teklife dahil olup olmadığı"],
                ].map(([feature, meaning, check]) => (
                  <tr key={feature}>
                    <th scope="row" className="border-b p-3 font-semibold text-black">{feature}</th>
                    <td className="border-b p-3">{meaning}</td>
                    <td className="border-b p-3">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="leading-7">
            Bu özellikler birbirini dışlamaz. Bir metal kalem aynı zamanda jel
            refilli, rubber kaplamalı veya dokunmatik uçlu olabilir. Karşılaştırmayı
            yalnızca model adındaki tek bir özelliğe göre yapmayın.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Metal Kaleme Lazer Logo Baskısı
          </h2>
          <p className="leading-7">
            Lazer uygulamasında sonuç, kalemin yüzeyine ve kaplamasına bağlıdır.
            Logonun görünümünü değerlendirirken yalnızca gövde rengini değil,
            uygulama sonrasında ortaya çıkacak kontrastı da inceleyin. Her modelde
            aynı renk ve görünüm elde edileceği varsayılmamalıdır.
          </p>
          <p className="leading-7">
            UV veya tampon gibi diğer yöntemlerin uygunluğu da seçilen yüzeye ve
            tasarıma göre belirlenir. Renkli logo, uzun firma adı veya çift yönlü
            uygulama istiyorsanız dosyanızı bu bilgilerle birlikte paylaşın.
            Yöntemlerin farklarını
            {" "}<Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir"
              className="font-semibold text-black underline underline-offset-4">
              kalem baskı türleri rehberinde
            </Link>{" "}inceleyebilirsiniz.
          </p>
          <h3 className="text-lg font-bold text-black">Logo yerleşiminde dikkat edilecekler</h3>
          <ul className="list-disc space-y-2 pl-5 leading-7">
            <li>Ürün ölçüsüyle baskı alanı ölçüsünü birbirinden ayırın.</li>
            <li>Amblem, firma adı ve iletişim bilgilerinin birlikte okunabildiğini kontrol edin.</li>
            <li>Tek yön veya çift yön uygulama talebinizi belirtin.</li>
            <li>Üretim onayında yazıları, logo konumunu ve uygulama boyutunu inceleyin.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Promosyon Metal Kalem Fiyatları Nasıl Değerlendirilir?
          </h2>
          <p className="leading-7">
            Ürün kartlarında fiyat bulunan modellerin tutarları baskı hariç
            TL + KDV olarak gösterilir. Fiyatı bulunmayan ürünlerde güncel teklif
            isteyebilirsiniz. Baskılı sipariş için yalnızca kalemin birim bedelini
            karşılaştırmak yeterli değildir.
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-7">
            <li><strong>Model ve adet:</strong> Aynı sipariş miktarında alternatifleri karşılaştırın.</li>
            <li><strong>Baskı kapsamı:</strong> Yöntemi, uygulama ölçüsünü ve baskı yönünü belirtin.</li>
            <li><strong>Ek kalemler:</strong> Varsa hazırlık, kutu, ambalaj ve kargo bedellerini öğrenin.</li>
            <li><strong>KDV:</strong> Tekliflerin vergi kapsamının aynı olduğundan emin olun.</li>
          </ul>
          <p className="leading-7">
            Adet değiştiğinde birim maliyet de değişebilir; her model ve adet
            aralığında aynı indirim oranı beklenmemelidir. Hesaplama ayrıntıları için
            {" "}<Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir"
              className="font-semibold text-black underline underline-offset-4">
              promosyon kalem fiyatlandırma rehberini
            </Link>{" "}inceleyin.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Toptan Metal Kalem Siparişi ve Tedarik Süreci
          </h2>
          <p className="leading-7">
            Seçtiğiniz ürün kodunu, adedi, gövde rengini ve logo dosyasını paylaşarak
            teklif isteyebilirsiniz. Ürünler güncel tedarikçi stoklarına göre temin
            edilir. İstenen rengin bulunması ve baskı planı teslimat süresini
            etkileyebileceğinden ihtiyaç tarihinizi baştan belirtin.
          </p>
          <p className="leading-7">
            Koli veya kutu içi adet, minimum sipariş miktarıyla aynı bilgi değildir.
            Baskılı ve baskısız alım koşullarını ürün özelinde netleştirin. Etkinlik
            siparişlerinde üretim ve sevkiyat sürelerinin kapsamını da kontrol edin.
            Süreci adım adım görmek için
            {" "}<Link href="/rehber/promosyon-kalem-toptan"
              className="font-semibold text-black underline underline-offset-4">
              toplu kalem siparişi rehberine
            </Link>{" "}geçebilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Metal Kalem Hakkında Sık Sorulan Sorular
          </h2>
          <div className="divide-y divide-gray-200">
            {[
              ["Her metal kaleme lazer baskı yapılabilir mi?",
                "Uygunluk modelin yüzeyine, kaplamasına ve uygulama alanına göre değerlendirilir. Seçtiğiniz ürün ve logo üzerinden yöntem belirlenmelidir."],
              ["Metal kalem fiyatına logo baskısı dahil mi?",
                "Bu sayfadaki sayısal ürün fiyatları baskı hariçtir. Logo uygulaması ve diğer sipariş kalemleri için özel teklif isteyebilirsiniz."],
              ["Minimum kaç adet sipariş verebilirim?",
                "Minimum adet ürün modeline, baskılı veya baskısız alıma ve güncel temin koşullarına göre netleşir. Kutu içi adet tek başına minimum sipariş anlamına gelmez."],
              ["Gövde rengi mürekkep rengini gösterir mi?",
                "Hayır. Gövde rengi ve mürekkep rengi farklı özelliklerdir. Refil türünü ve mürekkep rengini ürün detayından kontrol edin."],
              ["Metal kalemler kutulu mu gönderilir?",
                "Ambalaj kapsamı modele ve talebinize göre değişir. Hediye kutusu istiyorsanız teklif aşamasında belirtin ve dahil olup olmadığını kontrol edin."],
              ["Sipariş ne zaman teslim edilir?",
                "Teslim süresi tedarikçi stoğu, renk seçimi, logo onayı, baskı programı ve kargoya göre belirlenir. İhtiyaç tarihinizi paylaşarak güncel termin isteyin."],
            ].map(([question, answer]) => (
              <div key={question} className="py-5">
                <h3 className="text-lg font-bold text-black">{question}</h3>
                <p className="mt-2 leading-7">{answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-black p-6 text-white">
          <h2 className="text-xl font-bold text-white">Modelinizi Seçin, Baskılı Sipariş İçin Teklif Alın</h2>
          <p className="mt-3 leading-7 text-gray-200">
            Ürün kodu, adet, renk ve logonuzla talebinizi iletin.
            Metal dışındaki seçenekleri karşılaştırmak için tüm kalem modellerine dönebilirsiniz.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/kurumsal-teklif-al"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
              Kurumsal Teklif Al
            </Link>
            <Link href="/promosyon-kalem"
              className="rounded-xl border border-white/40 px-5 py-3 font-semibold text-white">
              Tüm Promosyon Kalemler
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
