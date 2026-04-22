import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir`;
const IMAGE_PATH = "/guides/promosyon-kalem-fiyatlari-nasil-hesaplanir.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;

export const metadata: Metadata = {
  title: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
  description:
    "Promosyon kalem fiyatları nasıl hesaplanır? Adet, baskı türü, kalem modeli, baskı yönü ve sipariş detaylarına göre fiyatların nasıl değiştiğini detaylı rehberde inceleyin.",
  keywords: [
    "promosyon kalem fiyatları",
    "promosyon kalem fiyat hesaplama",
    "logo baskılı kalem fiyatları",
    "promosyon kalem baskı fiyatları",
    "toptan promosyon kalem",
    "promosyon kalem adet fiyatı",
    "kurumsal promosyon kalem",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
    description:
      "Promosyon kalem fiyatlarını etkileyen adet, model, baskı türü ve sipariş detaylarını anlatan detaylı rehber.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
    description:
      "Promosyon kalem fiyatlarını etkileyen temel unsurları detaylı şekilde öğrenin.",
    images: [IMAGE_URL],
  },
};

export default function PromosyonKalemFiyatlariNasilHesaplanirPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
    description:
      "Promosyon kalem fiyatlarının nasıl hesaplandığını, adet, baskı türü, model ve sipariş detaylarına göre nasıl değiştiğini anlatan detaylı rehber.",
    inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL,
    image: [IMAGE_URL],
    author: {
      "@type": "Organization",
      name: "FirmaPromosyon",
    },
    publisher: {
      "@type": "Organization",
      name: "FirmaPromosyon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehber",
        item: `${SITE_URL}/rehber`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Promosyon kalem fiyatları en çok neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promosyon kalem fiyatları en çok kalem modeli, sipariş adedi, baskı türü, baskı yönü ve renk sayısına göre değişir. Ayrıca ürün segmenti ve teslim süresi de toplam maliyeti etkileyebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Sipariş adedi arttıkça promosyon kalem birim fiyatı düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, çoğu durumda sipariş adedi arttıkça birim fiyat düşer. Çünkü baskı hazırlığı ve işçilik gibi sabit maliyetler daha fazla ürüne yayılır.",
        },
      },
      {
        "@type": "Question",
        name: "Baskı türü promosyon kalem fiyatını etkiler mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, tampon baskı, UV baskı ve lazer baskı gibi farklı baskı yöntemleri maliyeti doğrudan etkiler. Tek yön ve çift yön baskı da fiyatı değiştirir.",
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/rehber" className="hover:underline">
          Rehber
        </Link>{" "}
        / <span>Promosyon Kalem Fiyatları Nasıl Hesaplanır?</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Promosyon Kalem Fiyatları Nasıl Hesaplanır?
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Promosyon Kalem Fiyatları Nasıl Hesaplanır?"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <p className="mt-6 text-base leading-7 text-gray-700 md:text-lg">
            Promosyon kalem fiyatları, ilk bakışta basit gibi görünse de aslında
            birçok farklı değişkene bağlı olarak belirlenir. Aynı kalem modeli,
            farklı adetlerde, farklı baskı seçenekleriyle ve farklı sipariş
            detaylarıyla tamamen farklı maliyetlere ulaşabilir. Bu nedenle
            promosyon kalem siparişi verecek firmaların yalnızca kalemin etiket
            fiyatına bakması yeterli değildir. Doğru fiyat analizi için kalem
            modeli, malzeme kalitesi, baskı türü, baskı yönü, sipariş adedi ve
            kullanım amacı birlikte değerlendirilmelidir.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
            Özellikle kurumsal promosyon ürünleri arasında promosyon kalem,
            düşük maliyetli ama yüksek görünürlüklü bir seçenek olduğu için çok
            sık tercih edilir. Ancak fiyat hesaplamasında yapılan küçük bir hata,
            toplam sipariş maliyetini ciddi şekilde etkileyebilir. Bu yüzden
            promosyon kalem fiyatlarının nasıl oluştuğunu anlamak, hem doğru
            teklif almak hem de bütçeyi daha verimli kullanmak açısından büyük
            avantaj sağlar.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
            Bu rehberde promosyon kalem fiyatlarını etkileyen ana unsurları,
            adet arttıkça birim fiyatın neden düştüğünü, baskı türlerinin
            maliyete nasıl yansıdığını ve sipariş verirken nelere dikkat
            edilmesi gerektiğini detaylı şekilde inceleyebilirsiniz. Eğer
            firmanız için hem uygun maliyetli hem de etkili bir logo baskılı
            promosyon kalem arıyorsanız, bu içerik size doğru planlama konusunda
            net bir çerçeve sunacaktır.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Promosyon Kalem Fiyatları Neye Göre Değişir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem fiyatları tek bir etkene bağlı değildir.
                Fiyatlandırma yapılırken ürünün kendi maliyeti ile baskı
                maliyeti birlikte değerlendirilir. Kalemin plastik, metal,
                soft touch veya dokunmatik olması gibi yapısal özellikler ürünün
                temel fiyatını belirler. Bunun üzerine uygulanacak baskı
                tekniği, baskı yönü, renk sayısı ve sipariş adedi eklenince
                toplam maliyet ortaya çıkar.
              </p>
              <p>
                Birçok firma sadece “kalem fiyatı” üzerinden düşünerek teklif
                almaya çalışır. Oysa gerçekte kalemin maliyeti ile baskı
                maliyeti iki ayrı unsur olarak değerlendirilmelidir. Bazı
                durumlarda ekonomik bir kalem modeli seçilmiş olsa bile baskı
                detayları maliyeti yükseltebilir. Bu nedenle sağlıklı fiyat
                analizi için her aşamanın ayrı ayrı düşünülmesi gerekir.
              </p>
              <p>
                Özellikle yüksek adetli siparişlerde küçük birim farklar toplam
                maliyette ciddi sonuç doğurur. Bu yüzden promosyon kalem
                fiyatlarını anlamak, yalnızca satın alma süreci için değil, kar
                marjını doğru hesaplamak açısından da önemlidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              1. Kalem Modeli Fiyatı Doğrudan Etkiler
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem fiyatlarını belirleyen ilk ve en temel unsur,
                seçilen modeldir. Plastik promosyon kalemler, genellikle en
                ekonomik ürün grubu içinde yer alır. Bu yüzden fuar, etkinlik,
                toplu dağıtım ve geniş çaplı kampanyalarda daha sık tercih
                edilir. Yüksek adetli siparişlerde maliyeti düşük tutmak isteyen
                firmalar için plastik kalemler çoğu zaman mantıklı bir başlangıç
                noktasıdır.
              </p>
              <p>
                Metal promosyon kalemler ise daha şık, daha ağır ve daha güçlü
                bir kalite algısı sunduğu için fiyat olarak plastik modellere
                göre daha yüksektir. Özellikle kurumsal hediye, yönetici
                sunumu, bayi toplantısı veya prestijli müşteri ziyaretleri gibi
                alanlarda metal kalemler daha fazla öne çıkar. Yani fiyat
                yükselirken ürünün bıraktığı etki de değişir.
              </p>
              <p>
                Dokunmatik kalem, roller kalem, jel kalem veya özel kaplamalı
                modeller gibi daha niş ürünlerde ise standart modellere göre
                farklı maliyetler oluşabilir. Bu yüzden fiyat hesabı yaparken
                önce ürün sınıfının doğru belirlenmesi gerekir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              2. Sipariş Adedi Arttıkça Birim Fiyat Neden Düşer?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem siparişlerinde en belirleyici unsurlardan biri
                adettir. Adet yükseldikçe birim fiyatın düşmesinin temel nedeni,
                üretim ve baskı hazırlık maliyetlerinin daha fazla ürüne
                yayılmasıdır. Kalemin baskı öncesi hazırlığı, klişe süreci,
                üretim planlaması ve işçilik gibi sabit maliyetler düşük adetli
                siparişlerde daha fazla hissedilir.
              </p>
              <p>
                Örneğin 300 adet sipariş verilen bir kalemde hazırlık maliyeti
                daha az ürüne bölündüğü için birim maliyet yüksek kalabilir.
                Aynı ürün 3000 adet sipariş edildiğinde ise bu sabit maliyetler
                çok daha fazla ürüne dağıldığından birim fiyat aşağı iner.
                Bu yüzden promosyon kalemlerde toplu sipariş vermek çoğu zaman
                maliyet avantajı sağlar.
              </p>
              <p>
                Eğer firmanız düzenli aralıklarla kalem dağıtıyor, fuarlara
                katılıyor veya kampanyalarda promosyon ürün kullanıyorsa,
                ihtiyaçları dönemsel değil toplu planlamak daha verimli olabilir.
                Böylece sadece ürün maliyetinde değil, baskı maliyetinde de daha
                avantajlı sonuç alınabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              3. Baskı Türü Fiyatı Nasıl Değiştirir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem fiyatları üzerinde en etkili ikinci büyük unsur,
                baskı türüdür. Çünkü aynı kalem modeli üzerine uygulanacak farklı
                baskı teknikleri, maliyeti önemli ölçüde değiştirebilir. En sık
                kullanılan yöntemlerden biri tampon baskıdır. Özellikle plastik
                kalemlerde yaygın kullanılan bu yöntem, tek renkli ve sade
                logolar için oldukça ekonomik bir çözümdür.
              </p>
              <p>
                UV baskı ise daha canlı, daha renkli ve görsel açıdan daha güçlü
                sonuçlar verdiği için maliyet açısından tampon baskıya göre daha
                yukarıda olabilir. Eğer marka kimliğiniz renkli bir logoya
                sahipse veya daha dikkat çekici bir baskı görünümü hedefliyorsanız
                UV baskı mantıklı olabilir. Ancak burada fiyat farkı da dikkate
                alınmalıdır.
              </p>
              <p>
                Lazer baskı genellikle metal promosyon kalemlerde tercih edilir.
                Boya basmak yerine yüzeyin işlenmesi esasına dayandığı için daha
                premium ve kalıcı bir görüntü sunar. Bu yöntem özellikle prestij
                odaklı siparişlerde öne çıkar. Dolayısıyla hangi baskı türünün
                seçileceği, hem fiyatı hem de oluşacak marka algısını doğrudan
                etkiler.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              4. Baskı Yönü ve Renk Sayısı Neden Önemlidir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalemlerde baskı sadece “var” veya “yok” şeklinde
                değerlendirilmez. Baskının tek yön mü yoksa çift yön mü
                uygulanacağı da fiyatı etkiler. Tek yön baskı genellikle daha
                ekonomik olurken, çift yön baskıda işçilik ve uygulama süreci
                arttığı için maliyet yükselir.
              </p>
              <p>
                Aynı durum renk sayısı için de geçerlidir. Tek renk logo
                uygulamaları daha uygun maliyetli olurken, çok renkli ya da
                detaylı tasarımlar baskı sürecini zorlaştırır ve fiyatı artırır.
                Bu nedenle sade, net ve kolay okunabilir bir logo tasarımı
                yalnızca estetik açıdan değil, maliyet açısından da avantaj
                sağlar.
              </p>
              <p>
                Özellikle yüksek adetli siparişlerde baskı yönü ve renk sayısında
                yapılan her tercih, toplam maliyet üzerinde hissedilir fark
                yaratır. Bu yüzden fiyat hesabı yapılırken kalem modeli kadar
                baskı detayları da netleştirilmelidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              5. Malzeme Kalitesi ve Ürün Segmenti Hesaba Katılmalıdır
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem fiyatları değerlendirilirken yalnızca “ucuz mu,
                pahalı mı?” diye bakmak doğru değildir. Çünkü iki farklı kalem
                arasında görülen fiyat farkı çoğu zaman malzeme kalitesinden
                kaynaklanır. Daha iyi yazan, daha sağlam gövdeye sahip, elde daha
                kaliteli his bırakan ve daha uzun ömürlü ürünler doğal olarak
                daha yüksek fiyatlı olabilir.
              </p>
              <p>
                Burada önemli olan, sipariş amacına göre doğru segmentte ürün
                seçmektir. Eğer kalemler fuarda binlerce kişiye dağıtılacaksa
                ekonomik ürün seçmek mantıklı olabilir. Ancak müşteri hediye
                seti hazırlanıyorsa veya kurumsal temsil değeri yüksek bir ürün
                aranıyorsa biraz daha üst segment modellere yönelmek daha doğru
                sonuç verebilir.
              </p>
              <p>
                Kısacası fiyat değerlendirmesi yaparken ürün segmenti mutlaka
                kullanım amacıyla birlikte düşünülmelidir. Uygun fiyatlı olması
                her zaman en iyi tercih anlamına gelmez; bazen biraz daha kaliteli
                bir ürün çok daha güçlü geri dönüş sağlayabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              6. Ortalama Promosyon Kalem Fiyatı Nasıl Düşünülmelidir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                “Promosyon kalem kaç TL?” sorusu çok sık sorulsa da buna tek
                cümleyle net cevap vermek zordur. Çünkü fiyat aralığı ürün
                segmentine, sipariş miktarına ve baskı detaylarına göre büyük
                değişim gösterebilir. Ekonomik plastik kalemler daha düşük
                maliyetli olurken, metal veya özel tasarım modeller daha yüksek
                bütçe gerektirebilir.
              </p>
              <p>
                Ayrıca baskısız fiyat ile baskılı fiyat arasında da fark vardır.
                Birçok firma ilk aşamada sadece kalemin çıplak maliyetine bakar;
                ancak baskı maliyeti eklendiğinde gerçek teklif ortaya çıkar.
                Özellikle çift yön, çok renkli veya özel uygulamalı baskılarda bu
                fark daha belirgin olabilir.
              </p>
              <p>
                Bu nedenle ortalama fiyat kavramını genel bir fikir vermesi için
                kullanmak gerekir; net teklif almak için ise ürün modeli, adet,
                baskı türü ve baskı yönü birlikte değerlendirilmelidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              7. En Doğru Fiyat Teklifi Nasıl Alınır?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem siparişi verirken en doğru fiyat teklifini almak
                için öncelikle ihtiyaçların net tanımlanması gerekir. Kaç adet
                sipariş verileceği, hangi modelin tercih edildiği, baskının tek
                yön mü çift yön mü olacağı ve logonun kaç renkli olduğu baştan
                belirlenirse teklif süreci çok daha sağlıklı ilerler.
              </p>
              <p>
                Belirsiz ifadelerle alınan teklifler çoğu zaman yanıltıcı olur.
                Çünkü örneğin “kalem fiyatı” ile “logo baskılı kalem fiyatı”
                arasında ciddi fark olabilir. Bu yüzden teklif istemeden önce
                ihtiyaç listesini netleştirmek, hem daha gerçekçi fiyat almak
                hem de farklı seçenekleri daha sağlıklı karşılaştırmak açısından
                önemlidir.
              </p>
              <p>
                Eğer birden fazla model arasında kararsız kalınıyorsa, aynı adet
                ve aynı baskı detaylarıyla alternatif teklifler istemek en doğru
                yöntemlerden biridir. Böylece yalnızca fiyatı değil, ürünün
                yaratacağı etkiyi de karşılaştırmak mümkün olur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Sık Yapılan Fiyat Hesaplama Hataları
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem fiyatı hesaplanırken firmaların en sık yaptığı
                hatalardan biri sadece ürün fiyatına odaklanmaktır. Oysa baskı
                maliyeti, yön sayısı ve tasarım detayları hesaba katılmadan
                yapılan fiyat karşılaştırmaları yanıltıcı olabilir.
              </p>
              <p>
                Bir diğer yaygın hata, düşük adetli siparişle yüksek adetli
                sipariş fiyatını aynı mantıkla değerlendirmektir. Adet etkisi
                promosyon ürünlerde son derece önemlidir. Bu yüzden küçük adetli
                siparişte pahalı görünen bir model, yüksek adette çok daha
                avantajlı hale gelebilir.
              </p>
              <p>
                Ayrıca yalnızca en ucuz ürüne yönelmek de her zaman doğru sonuç
                vermez. Çünkü kötü yazan veya kalitesiz hissiyat veren bir kalem,
                reklam etkisini azaltabilir. Sağlıklı karar için maliyet ve
                kalite birlikte düşünülmelidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Sonuç
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem fiyatları; kalem modeli, sipariş adedi, baskı
                türü, baskı yönü, renk sayısı ve malzeme kalitesi gibi birçok
                farklı değişkene bağlı olarak hesaplanır. Bu nedenle doğru fiyat
                analizi için yalnızca kalemin temel maliyetine değil, baskı ve
                kullanım amacı gibi detaylara da dikkat etmek gerekir.
              </p>
              <p>
                Doğru planlama yapıldığında promosyon kalemler hem uygun
                maliyetli hem de yüksek reklam gücüne sahip ürünler haline
                gelir. Özellikle toplu siparişlerde birim maliyeti düşürmek,
                baskı türünü doğru seçmek ve hedef kitleye uygun model belirlemek
                uzun vadede çok daha verimli sonuç verir.
              </p>
              <p>
                Eğer siz de firmanız için en uygun logo baskılı kalem modelini
                incelemek ve fiyat seçeneklerini değerlendirmek istiyorsanız,
                ilgili kategori sayfalarını ziyaret ederek ürünleri
                karşılaştırabilir ve ihtiyacınıza uygun teklif talebinde
                bulunabilirsiniz.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-lg font-bold text-gray-900">
                İlgili Kategoriler
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-gray-800">
                <Link href="/promosyon-kalem" className="hover:underline">
                  Promosyon Kalem Modelleri
                </Link>
                <Link href="/promosyon-cakmak" className="hover:underline">
                  Promosyon Çakmak Modelleri
                </Link>
                <Link href="/promosyon-termos" className="hover:underline">
                  Promosyon Termos Modelleri
                </Link>
                <Link href="/promosyon-usb-bellek" className="hover:underline">
                  Promosyon USB Bellek Modelleri
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/teklif"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
              >
                Kurumsal Teklif Al
              </Link>

              <Link
                href="/urunler"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-500"
              >
                Tüm Ürünleri İncele
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}