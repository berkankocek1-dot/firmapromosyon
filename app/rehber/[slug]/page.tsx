import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Guide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  sections: { title: string; body: string }[];
  ctaProductSlug?: string;
  keywords?: string[];
  image?: string;
};

const guides: Guide[] = [
  {
  slug: "dtf-baski-nedir",
  title: "DTF Baskı Nedir? Nasıl Yapılır? Avantajları ve Kullanım Alanları",
  description:
    "DTF baskı nedir, nasıl yapılır, avantajları nelerdir? Tişört, çanta ve promosyon ürünlerde DTF baskı hakkında detaylı rehber.",
  h1: "DTF Baskı Nedir?",
  image: "/guides/dtf-baski-nedir.jpg",
  keywords: [
    "DTF baskı",
    "DTF baskı nedir",
    "DTF baskı nasıl yapılır",
    "DTF baskı avantajları",
    "DTF baskı tişört",
    "dtf baskı fiyatları"
  ],
  sections: [
    {
      title: "DTF Baskı Nedir?",
      body: `
DTF baskı (Direct To Film), tasarımın özel bir PET film üzerine basıldıktan sonra tekstil veya farklı yüzeylere ısı ve pres yardımıyla transfer edilmesini sağlayan modern bir baskı teknolojisidir.

Geleneksel baskı yöntemlerinden farklı olarak, DTF baskıda tasarım doğrudan ürüne değil önce filme uygulanır. Daha sonra bu film, sıcak pres makinesi ile ürün yüzeyine aktarılır.

Son yıllarda özellikle promosyon ürünleri, tekstil üretimi ve kurumsal baskı çözümlerinde en çok tercih edilen yöntemlerden biri haline gelmiştir.
      `,
    },
    {
      title: "DTF Baskı Nasıl Yapılır?",
      body: `
DTF baskı süreci birkaç temel adımdan oluşur:

1. Tasarım hazırlanır (PNG veya vektör formatında)
2. Özel DTF yazıcı ile film üzerine baskı alınır
3. Baskının üzerine yapıştırıcı (toz) uygulanır
4. Film kurutma işlemi yapılır
5. Isı presi ile ürün üzerine transfer edilir
6. Film çıkarılır ve baskı sabitlenir

Bu süreç sayesinde yüksek kaliteli, dayanıklı ve profesyonel görünümlü baskılar elde edilir.
      `,
    },
    {
      title: "DTF Baskının Avantajları Nelerdir?",
      body: `
DTF baskı, diğer baskı tekniklerine göre birçok önemli avantaj sunar:

• Canlı ve parlak renkler elde edilir  
• Fotoğraf kalitesinde detaylı baskı yapılabilir  
• Açık ve koyu renk tüm kumaşlarda uygulanabilir  
• Yıkamaya ve aşınmaya karşı dayanıklıdır  
• Esnek yapısı sayesinde çatlama yapmaz  
• Düşük adetli üretim için uygundur  
• Hızlı üretim imkanı sağlar  

Özellikle kurumsal promosyon ürünlerinde hızlı teslimat ve kalite avantajı nedeniyle tercih edilir.
      `,
    },
    {
      title: "DTF Baskı Hangi Ürünlerde Kullanılır?",
      body: `
DTF baskı oldukça geniş bir kullanım alanına sahiptir. En yaygın kullanıldığı ürünler şunlardır:

• Tişört ve sweatshirt  
• Bez çanta (tote bag)  
• Şapka ve tekstil aksesuarları  
• Promosyon ürünleri  
• Spor kıyafetleri  
• İş kıyafetleri  

Özellikle firma logolu promosyon ürünlerinde DTF baskı, hem ekonomik hem de kaliteli sonuçlar sunduğu için öne çıkar.
      `,
    },
    {
      title: "DTF Baskı mı, Diğer Baskı Türleri mi?",
      body: `
DTF baskı, serigrafi ve dijital baskı gibi yöntemlere göre daha esnek bir çözümdür.

Serigrafi baskı yüksek adetlerde avantajlı olsa da düşük adetlerde maliyetli olabilir. Sublimasyon baskı ise sadece açık renk yüzeylerde uygulanabilir.

DTF baskı ise bu sınırlamaları ortadan kaldırır ve hem düşük hem yüksek adetlerde verimli bir üretim sağlar.
      `,
    },
    {
      title: "DTF Baskı Dayanıklı mı?",
      body: `
Evet, doğru uygulandığında DTF baskı oldukça dayanıklıdır.

• 30-40 derece yıkamada uzun süre dayanır  
• Çatlama ve solma yapmaz  
• Esnek yapısı sayesinde kumaşla birlikte hareket eder  

Bu nedenle hem günlük kullanım hem de promosyon ürünleri için ideal bir baskı yöntemidir.
      `,
    },
    {
      title: "DTF Baskı Fiyatları Neye Göre Değişir?",
      body: `
DTF baskı fiyatları aşağıdaki faktörlere göre değişiklik gösterir:

• Baskı yapılacak ürün türü  
• Adet sayısı (toptan siparişlerde fiyat düşer)  
• Baskı boyutu  
• Renk sayısı ve tasarım detayları  

Kurumsal siparişlerde genellikle adet arttıkça birim maliyet ciddi şekilde düşmektedir.
      `,
    },
    {
      title: "DTF Baskı Neden Tercih Edilmeli?",
      body: `
DTF baskı, hem kalite hem maliyet açısından en dengeli baskı yöntemlerinden biridir.

Eğer logo baskılı promosyon ürün yaptırmayı düşünüyorsanız:

• Hızlı üretim  
• Uygun maliyet  
• Profesyonel görünüm  

gibi avantajları sayesinde DTF baskı en doğru tercihlerden biridir.

Özellikle yeni kurulan markalar ve kurumsal firmalar için ideal bir çözümdür.
      `,
    },
    {
      title: "Sonuç",
      body: `
DTF baskı, modern baskı teknolojileri arasında en hızlı büyüyen ve en çok tercih edilen yöntemlerden biridir.

Yüksek kalite, uygun maliyet ve esnek üretim avantajı sayesinde hem bireysel hem kurumsal kullanımda büyük avantaj sağlar.

Eğer siz de markanız için kaliteli baskılı ürünler yaptırmak istiyorsanız, DTF baskı teknolojisini tercih ederek profesyonel sonuçlar elde edebilirsiniz.
      `,
    },
  ],
  ctaProductSlug: "dtf-baskili-tisort",
},
  {
  slug: "promosyon-kupa-baski",
  title: "Promosyon Kupa Baskı Rehberi: Toplu Sipariş, Baskı Türleri ve Fiyatlandırma",
  description:
    "Promosyon kupa baskı nasıl yapılır? Logo baskılı kupalarda baskı türleri, fiyatı etkileyen faktörler ve kurumsal sipariş süreci detaylı rehber.",
  h1: "Promosyon Kupa Baskı Rehberi",
  image: "/guides/promosyon-kupa-baski.jpg",
  keywords: [
    "promosyon kupa",
    "kupa baskı",
    "logo baskılı kupa",
    "promosyon kupa fiyatları",
    "toptan kupa baskı",
    "kurumsal kupa"
  ],
  sections: [
    {
      title: "Promosyon Kupa Baskı Nedir?",
      body: `
Promosyon kupa baskı, firmaların logo, slogan veya marka kimliğini seramik kupa gibi ürünler üzerine uygulayarak oluşturduğu reklam ve tanıtım ürünleridir.

Günlük kullanımda sıkça tercih edilen kupalar, markaların görünürlüğünü artırmak için oldukça etkili bir promosyon aracıdır. Özellikle ofis ortamlarında, fuarlarda ve kurumsal hediyelerde sıkça tercih edilir.

Logo baskılı kupalar, hem ekonomik hem de uzun süre kullanılan ürünler olduğu için reklam açısından yüksek geri dönüş sağlar.
      `,
    },
    {
      title: "Promosyon Kupada Hangi Baskı Türleri Kullanılır?",
      body: `
Promosyon kupa üretiminde farklı baskı teknikleri kullanılabilir. Seçilecek yöntem; adet, tasarım ve bütçeye göre belirlenir.

En yaygın kullanılan baskı türleri şunlardır:

• Sublimasyon Baskı  
Fotoğraf kalitesinde baskı sağlar. Renk geçişleri oldukça başarılıdır. Genellikle tam yüzey baskılarda tercih edilir.

• Serigrafi Baskı  
Tek veya az renkli logolarda kullanılır. Yüksek adetli siparişlerde maliyet avantajı sağlar.

• UV Baskı  
Canlı renkler ve detaylı baskılar için uygundur. Özel tasarımlarda tercih edilir.

Her baskı türünün avantajı farklıdır. Bu yüzden doğru teknik seçimi hem maliyet hem kalite açısından kritik öneme sahiptir.
      `,
    },
    {
      title: "Promosyon Kupa Fiyatlarını Neler Belirler?",
      body: `
Promosyon kupa fiyatları sabit değildir ve birçok faktöre göre değişiklik gösterir.

Fiyatı etkileyen başlıca unsurlar:

• Sipariş adedi  
Adet arttıkça birim maliyet düşer. Toptan siparişlerde ciddi avantaj sağlanır.

• Baskı türü  
Sublimasyon, UV veya serigrafi baskı fiyatları farklıdır.

• Baskı alanı  
Tam yüzey baskı ile tek taraf baskı arasında fiyat farkı oluşur.

• Tasarım detayları  
Renk sayısı ve tasarım karmaşıklığı maliyeti etkiler.

• Ürün kalitesi  
Kupanın seramik kalitesi ve kaplama türü fiyatı değiştirir.

Kurumsal siparişlerde genellikle adet bazlı özel fiyatlandırma yapılır.
      `,
    },
    {
      title: "Toplu Promosyon Kupa Siparişi Nasıl Verilir?",
      body: `
Kurumsal kupa sipariş süreci oldukça hızlı ve pratiktir.

Genellikle şu adımlar izlenir:

1. Ürün modeli seçilir  
2. Adet bilgisi belirlenir  
3. Logo veya tasarım paylaşılır  
4. Baskı türü belirlenir  
5. Teklif hazırlanır  
6. Onay sonrası üretim başlar  

Bu süreçte doğru ürün seçimi ve baskı planlaması, hem maliyet hem de teslim süresi açısından büyük önem taşır.
      `,
    },
    {
      title: "Promosyon Kupa Neden Tercih Edilmeli?",
      body: `
Promosyon kupalar, en etkili reklam ürünlerinden biridir.

Tercih edilme nedenleri:

• Günlük kullanım ürünü olması  
• Marka görünürlüğünü artırması  
• Uzun ömürlü olması  
• Uygun maliyetli olması  
• Kurumsal imajı güçlendirmesi  

Bir kupa, gün içinde defalarca kullanıldığı için markanız sürekli göz önünde olur. Bu da diğer promosyon ürünlerine göre çok daha güçlü bir reklam etkisi sağlar.
      `,
    },
    {
      title: "Promosyon Kupalar Nerelerde Kullanılır?",
      body: `
Promosyon kupalar birçok alanda kullanılabilir:

• Kurumsal firmalarda çalışanlara dağıtım  
• Müşterilere hediye ürün  
• Fuar ve etkinlik promosyonları  
• Ofis kullanımı  
• Özel kampanya ve lansmanlar  

Özellikle markasını büyütmek isteyen firmalar için vazgeçilmez bir promosyon ürünüdür.
      `,
    },
    {
      title: "Kupa Baskıda Kalite Nasıl Anlaşılır?",
      body: `
Kaliteli bir promosyon kupa baskı için dikkat edilmesi gerekenler:

• Baskının silinmemesi ve solmaması  
• Renklerin canlı olması  
• Baskının yüzeye düzgün oturması  
• Kupada çatlak veya deformasyon olmaması  

Kaliteli baskı, markanızın prestijini doğrudan etkiler. Bu nedenle düşük kalite üretimlerden kaçınılmalıdır.
      `,
    },
    {
      title: "Promosyon Kupa Siparişinde Dikkat Edilmesi Gerekenler",
      body: `
Sipariş verirken şu detaylara dikkat edilmelidir:

• Doğru ürün seçimi  
• Baskı alanı ve ölçüleri  
• Logo çözünürlüğü  
• Termin süresi  
• Numune talebi  

Bu detaylar hem üretim sürecini hem de son ürün kalitesini doğrudan etkiler.
      `,
    },
    {
      title: "Sonuç",
      body: `
Promosyon kupa baskı, hem ekonomik hem de etkili bir reklam yöntemidir.

Doğru baskı tekniği ve doğru ürün seçimi ile markanızı uzun süre görünür kılabilirsiniz.

Eğer siz de kurumsal tanıtımınızı güçlendirmek ve müşterilerinize kalıcı bir ürün sunmak istiyorsanız, promosyon kupa baskı en doğru tercihlerden biridir.
      `,
    },
  ],
},
  {
  slug: "promosyon-kalem-toptan",
  title: "Promosyon Kalem Toptan Satın Alma Rehberi: Fiyatlar, Modeller ve Kurumsal Sipariş",
  description:
    "Promosyon kalem toptan nasıl alınır? Plastik, metal kalem çeşitleri, baskı seçenekleri ve fiyatı etkileyen faktörler hakkında detaylı rehber.",
  h1: "Promosyon Kalem Toptan Satın Alma Rehberi",
  image: "/guides/promosyon-kalem-toptan.jpg",
  keywords: [
    "promosyon kalem",
    "toptan promosyon kalem",
    "logo baskılı kalem",
    "promosyon kalem fiyatları",
    "kalem baskı",
    "kurumsal kalem"
  ],
  sections: [
    {
      title: "Promosyon Kalem Nedir?",
      body: `
Promosyon kalem, firmaların marka bilinirliğini artırmak amacıyla üzerine logo veya slogan basılarak dağıtılan en popüler promosyon ürünlerinden biridir.

Hem uygun maliyetli hem de günlük kullanım ürünü olması sayesinde en çok tercih edilen kurumsal hediyeler arasında yer alır.

Fuarlar, etkinlikler, müşteri ziyaretleri ve kurumsal dağıtımlar için promosyon kalemler vazgeçilmez bir seçenektir.
      `,
    },
    {
      title: "Promosyon Kalem Türleri Nelerdir?",
      body: `
Promosyon kalemler kullanım amacına ve bütçeye göre farklı kategorilere ayrılır:

• Plastik Kalemler  
En ekonomik seçenektir. Yüksek adetli dağıtımlar için idealdir.

• Metal Kalemler  
Daha şık ve prestijli bir görünüm sunar. Kurumsal hediyelerde tercih edilir.

• Dokunmatik (Touch) Kalemler  
Telefon ve tablet kullanımına uygun modellerdir. Teknolojik promosyon kategorisinde yer alır.

• Premium Kalem Setleri  
Defter, kutu ve aksesuarlarla birlikte sunulan özel setlerdir.

Doğru kalem seçimi, hedef kitlenize ve kullanım amacınıza göre yapılmalıdır.
      `,
    },
    {
      title: "Promosyon Kalem Baskı Türleri",
      body: `
Kalem üzerine logo uygulamak için farklı baskı teknikleri kullanılabilir:

• Tampon Baskı  
En yaygın kullanılan yöntemdir. Tek veya iki renkli logolar için uygundur.

• UV Baskı  
Renkli ve detaylı tasarımlar için tercih edilir.

• Lazer Kazıma  
Metal kalemlerde kullanılır. Kalıcı ve premium bir görünüm sağlar.

Seçilecek baskı yöntemi; kalem modeli, logo yapısı ve bütçeye göre belirlenir.
      `,
    },
    {
      title: "Promosyon Kalem Fiyatlarını Neler Etkiler?",
      body: `
Promosyon kalem fiyatları birçok faktöre bağlı olarak değişir:

• Sipariş adedi  
Adet arttıkça birim fiyat düşer.

• Kalem modeli  
Plastik, metal veya premium ürünler arasında fiyat farkı vardır.

• Baskı türü  
Tampon, UV veya lazer baskı maliyeti etkiler.

• Baskı yönü  
Tek taraf veya çift taraf baskı fiyatı değiştirir.

• Renk sayısı  
Çok renkli baskılar daha maliyetlidir.

Toptan siparişlerde doğru model seçimi ile maliyet ciddi şekilde optimize edilebilir.
      `,
    },
    {
      title: "Toptan Promosyon Kalem Siparişi Nasıl Verilir?",
      body: `
Promosyon kalem sipariş süreci oldukça hızlı ilerler:

1. Kalem modeli seçilir  
2. Adet belirlenir  
3. Logo dosyası paylaşılır  
4. Baskı yöntemi seçilir  
5. Teklif hazırlanır  
6. Onay sonrası üretim başlar  

Kurumsal siparişlerde süreç genellikle 3-7 iş günü arasında tamamlanır.
      `,
    },
    {
      title: "Promosyon Kalem Neden En Çok Tercih Edilen Üründür?",
      body: `
Promosyon kalemler diğer ürünlere göre çok daha fazla tercih edilir çünkü:

• Uygun maliyetlidir  
• Herkes tarafından kullanılır  
• Sürekli göz önündedir  
• Marka bilinirliğini artırır  
• Dağıtımı kolaydır  

Bir kalem, gün içinde defalarca kullanıldığı için markanızın sürekli görünmesini sağlar.
      `,
    },
    {
      title: "Promosyon Kalem Nerelerde Kullanılır?",
      body: `
Promosyon kalemler birçok farklı alanda kullanılabilir:

• Fuar ve etkinlik dağıtımları  
• Kurumsal müşteri hediyeleri  
• Ofis kullanımı  
• Eğitim kurumları  
• Banka ve finans sektörü  

Geniş kullanım alanı sayesinde en etkili promosyon ürünlerinden biridir.
      `,
    },
    {
      title: "Promosyon Kalem Siparişinde Dikkat Edilmesi Gerekenler",
      body: `
Sipariş verirken şu detaylara dikkat edilmelidir:

• Logo çözünürlüğü yüksek olmalıdır  
• Kalem rengi ile logo uyumu düşünülmelidir  
• Baskı alanı doğru seçilmelidir  
• Teslim süresi netleştirilmelidir  

Bu detaylar, hem baskı kalitesini hem de müşteri memnuniyetini doğrudan etkiler.
      `,
    },
    {
      title: "Sonuç",
      body: `
Promosyon kalem, kurumsal tanıtımın en etkili ve en ekonomik yollarından biridir.

Doğru model ve doğru baskı seçimi ile markanızı geniş kitlelere ulaştırabilirsiniz.

Eğer siz de uygun maliyetle etkili bir reklam yapmak istiyorsanız, toptan promosyon kalem siparişi en doğru tercihlerden biridir.
      `,
    },
  ],
},
{
  slug: "promosyon-urunleri-secim-rehberi",
  title: "Promosyon Ürünleri Seçim Rehberi: Kurumsal Firmalar İçin En Doğru Ürün Nasıl Seçilir?",
  description:
    "Promosyon ürünleri nasıl seçilir? Hedef kitle, ürün kalitesi, baskı yöntemleri, fiyatlandırma ve en etkili promosyon ürünleri hakkında detaylı rehber.",
  h1: "Promosyon Ürünleri Seçim Rehberi",
  image: "/guides/promosyon-urunleri-secim-rehberi.jpg",
  keywords: [
    "promosyon ürünleri",
    "kurumsal promosyon ürünleri",
    "promosyon ürün seçimi",
    "en iyi promosyon ürünleri",
    "firma promosyon ürünleri",
    "promosyon ürün önerileri",
    "toptan promosyon ürünleri"
  ],
  sections: [
    {
      title: "Promosyon Ürünleri Neden Bu Kadar Önemli?",
      body: `
Promosyon ürünleri, klasik reklam yöntemlerinden farklı olarak doğrudan kullanıcıyla temas kuran en güçlü pazarlama araçlarından biridir.

Bir sosyal medya reklamı birkaç saniye görülürken, doğru seçilmiş bir promosyon ürünü aylar hatta yıllarca kullanılabilir. Bu da markanızın sürekli göz önünde olmasını sağlar.

Kurumsal firmalar için promosyon ürünlerinin sağladığı avantajlar:

• Marka bilinirliğini artırır  
• Müşteri ile duygusal bağ kurar  
• Sadakati güçlendirir  
• Rakipler arasında fark yaratır  
• Düşük maliyetle uzun süreli reklam sağlar  

Bu yüzden promosyon ürünü seçimi, basit bir satın alma değil doğrudan pazarlama stratejisidir.
      `,
    },
    {
      title: "Promosyon Ürünü Seçerken Nelere Dikkat Edilmeli?",
      body: `
Doğru promosyon ürünü seçmek için birkaç kritik faktör birlikte değerlendirilmelidir.

• Hedef kitle  
Ürünü kim kullanacak? Öğrenciye verilen ürün ile VIP müşteriye verilen ürün aynı olmamalıdır.

• Kullanım sıklığı  
Ne kadar sık kullanılan ürün seçerseniz, reklam etkisi o kadar artar.

• Ürün kalitesi  
Kalitesiz ürün = kötü marka algısı demektir.

• Baskı kalitesi  
Logo ne kadar net görünürse marka o kadar güçlü algılanır.

• Bütçe ve adet  
Toptan siparişlerde doğru planlama ile ciddi maliyet avantajı sağlanır.

En iyi promosyon ürünü, hem hedef kitleye uygun hem de günlük hayatta kullanılan üründür.
      `,
    },
    {
      title: "En Çok Tercih Edilen Promosyon Ürünleri",
      body: `
Kurumsal firmalar tarafından en çok tercih edilen promosyon ürünleri şunlardır:

• Promosyon Kalem  
En çok dağıtılan üründür. Uygun maliyetlidir ve herkes tarafından kullanılır.

• Promosyon Kupa  
Ofislerde sürekli kullanıldığı için marka görünürlüğü yüksektir.

• Promosyon Termos  
Premium segmenttir. Marka değerini yükseltir.

• Promosyon Anahtarlık  
Sürekli taşındığı için görünürlük sağlar.

• Promosyon USB Bellek  
Teknolojik promosyon kategorisinde yer alır.

Bu ürünler hem maliyet hem de etki açısından en verimli promosyon araçlarıdır.
      `,
    },
    {
      title: "Promosyon Ürünlerinde Baskı Türleri Nelerdir?",
      body: `
Promosyon ürünlerde kullanılan baskı teknikleri ürün türüne göre değişir.

En yaygın baskı yöntemleri:

• UV Baskı  
Renkli ve detaylı logolar için idealdir.

• Tampon Baskı  
Kalem ve küçük ürünlerde kullanılır.

• Lazer Kazıma  
Metal yüzeylerde kalıcı ve premium görünüm sağlar.

• DTF Baskı  
Tekstil ürünlerde yüksek kalite sunar.

Doğru baskı yöntemi seçimi, ürünün kalitesini ve markanın algısını doğrudan etkiler.
      `,
    },
    {
      title: "Promosyon Ürünlerinde Kalite Neden Kritik?",
      body: `
Promosyon ürünleri markanızın fiziksel temsilidir.

Kalitesiz ürünler:

• Kullanılmaz  
• Atılır  
• Markaya zarar verir  

Kaliteli ürünler ise:

• Uzun süre kullanılır  
• Sürekli reklam sağlar  
• Güven oluşturur  

Bu yüzden promosyon ürünlerinde kalite, maliyetten daha önemli bir kriterdir.
      `,
    },
    {
      title: "Toptan Promosyon Siparişlerinde Doğru Planlama",
      body: `
Toptan siparişlerde yapılan doğru planlama büyük avantaj sağlar.

Dikkat edilmesi gerekenler:

• Doğru ürün seçimi  
• Doğru adet planlaması  
• Baskı detaylarının net olması  
• Teslim süresinin belirlenmesi  

Bu planlama sayesinde hem maliyet düşer hem süreç hızlanır.
      `,
    },
    {
      title: "Promosyon Ürünleri ile Satış ve Marka Gücü Nasıl Artırılır?",
      body: `
Promosyon ürünleri sadece dağıtılan ürünler değildir, doğru kullanıldığında satış aracına dönüşür.

Etkili kullanım:

• Fuar ve etkinliklerde dağıtım  
• Müşteriye sipariş yanında hediye  
• Kampanya destek ürünü olarak kullanma  
• Ofis içinde marka görünürlüğü sağlama  

Bu stratejiler ile promosyon ürünleri doğrudan satışa katkı sağlar.
      `,
    },
    {
      title: "Promosyon Ürünü Seçerken Yapılan Büyük Hatalar",
      body: `
En yaygın hatalar:

• En ucuz ürünü seçmek  
• Hedef kitleyi düşünmemek  
• Kalitesiz baskı yaptırmak  
• Rastgele ürün seçmek  

Bu hatalar promosyon yatırımını tamamen boşa çıkarabilir.
      `,
    },
    {
      title: "Promosyon Ürünlerinde Fiyat Nasıl Belirlenir?",
      body: `
Promosyon ürün fiyatları şu faktörlere göre değişir:

• Ürün türü  
• Adet  
• Baskı yöntemi  
• Baskı alanı  
• Ürün kalitesi  

Adet arttıkça birim maliyet düşer. Bu yüzden toptan sipariş her zaman avantajlıdır.
      `,
    },
    {
      title: "Sonuç: Doğru Promosyon Ürünü = Güçlü Marka",
      body: `
Promosyon ürünleri, doğru seçildiğinde markanızı büyüten en güçlü araçlardan biridir.

Doğru ürün + doğru baskı + doğru hedef kitle = maksimum etki

Eğer siz de firmanız için en uygun promosyon ürününü seçmek istiyorsanız, profesyonel bir planlama ile en doğru sonucu elde edebilirsiniz.
      `,
    },
  ],
},

];

function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {
      title: "Sayfa Bulunamadı",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/rehber/${guide.slug}`;
  const imageUrl = guide.image
    ? `${SITE_URL}${guide.image}`
    : `${SITE_URL}/guides/${guide.slug}.jpg`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: `${SITE_URL}${canonical}`,
      title: guide.title,
      description: guide.description,
      siteName: "FirmaPromosyon",
      locale: "tr_TR",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [imageUrl],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return notFound();

  const guideImage = guide.image ?? `/guides/${guide.slug}.jpg`;
  const relatedGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: `${SITE_URL}/rehber/${guide.slug}`,
    inLanguage: "tr-TR",
    image: [`${SITE_URL}${guideImage}`],
    author: {
      "@type": "Organization",
      name: "FirmaPromosyon",
    },
    publisher: {
      "@type": "Organization",
      name: "FirmaPromosyon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og.jpg`,
      },
    },
    keywords: guide.keywords?.join(", "),
  };

  const breadcrumbJsonLd = {
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
        name: guide.h1,
        item: `${SITE_URL}/rehber/${guide.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Script
        id="guide-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="guide-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900 hover:underline">
              Ana Sayfa
            </Link>
            <span className="px-2">/</span>
            <Link href="/rehber" className="hover:text-gray-900 hover:underline">
              Rehber
            </Link>
            <span className="px-2">/</span>
            <span className="font-medium text-gray-900">{guide.h1}</span>
          </nav>

          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <div className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
              Rehber İçeriği
            </div>

            <div className="mt-5 max-w-4xl">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={guideImage}
                  alt={guide.title}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                {guide.h1}
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
                {guide.description}
              </p>

              <div className="mt-6">
                <Link
                  href="/rehber"
                  className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-500"
                >
                  ← Rehberlere dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="space-y-6">
          {guide.sections.map((s, index) => (
            <section
              key={s.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                Bölüm {index + 1}
              </div>

              <h2 className="mt-4 text-xl font-extrabold leading-8 text-gray-900 md:text-2xl">
                {s.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-2">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            Kurumsal sipariş öncesi kısa notlar
          </h2>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700 md:text-base">
            <li>• Adet bilgisi fiyatı doğrudan etkiler.</li>
            <li>• Baskı alanı ve logo dosyası teklif sürecini hızlandırır.</li>
            <li>• Termin süresi üretim planına göre netleşir.</li>
            <li>• Toplu alımlarda birim maliyet genelde daha avantajlı olur.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-black p-6 text-white shadow-sm md:p-8">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Kurumsal teklif almak ister misiniz?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
            Adet, baskı ve termin bilgisine göre hızlı teklif hazırlayalım.
            Kurumsal promosyon ürünleri ve logo baskı süreçleri için bizimle
            iletişime geçebilirsiniz.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={guide.ctaProductSlug ? `/teklif?urun=${guide.ctaProductSlug}` : "/teklif"}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              Hızlı Teklif Al
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
                Diğer rehberler
              </h2>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                İlgili konulardaki diğer rehber içerikleri de inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relatedGuides.map((g) => {
              const relatedImage = g.image ?? `/guides/${g.slug}.jpg`;

              return (
                <Link
                  key={g.slug}
                  href={`/rehber/${g.slug}`}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] w-full bg-gray-100">
                    <Image
                      src={relatedImage}
                      alt={g.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      Rehber
                    </div>

                    <h3 className="mt-4 text-lg font-extrabold leading-7 text-gray-900">
                      {g.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-700">
                      {g.description}
                    </p>

                    <div className="mt-4 text-sm font-semibold text-gray-900">
                      İncele →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            İlgili kategoriler
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600 md:text-base">
            Rehber içeriğiyle bağlantılı promosyon ürün kategorilerine hızlıca geçebilirsiniz.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kategori/kalem"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Kalem
            </Link>
            <Link
              href="/kategori/cakmak"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Çakmak
            </Link>
            <Link
              href="/kategori/anahtarlik"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Anahtarlık
            </Link>
            <Link
              href="/kategori/termos"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Termos
            </Link>
            <Link
              href="/kategori/usb-bellek"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon USB Bellek
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}