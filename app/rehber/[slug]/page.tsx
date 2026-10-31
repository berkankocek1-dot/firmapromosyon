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
    "DTF baskı nedir, nasıl yapılır? Filmden tekstile transfer sürecini, avantajlarını, kumaş uygunluğunu ve baskılı ürün bakımında dikkat edilecekleri öğrenin.",
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
    "title": "DTF Baskı Nedir, DTF Ne Demek?",
    "body": "DTF, İngilizce “Direct to Film” ifadesinin kısaltmasıdır. Tasarım önce özel bir transfer filmine basılır; yapıştırıcı katmanı ve ısı presi yardımıyla tekstil yüzeyine aktarılır. Baskı doğrudan kumaş üzerine yapılmadığı için bu yöntem filmden transfer baskı olarak da açıklanabilir.\n\nFirma logosu, yazı veya renkli görsellerin tişört ve bez çanta gibi tekstil ürünlerine uygulanmasında kullanılabilir. Sonuç, tasarımın yanında kumaşın yapısına ve uygulama koşullarına da bağlıdır."
  },
  {
    "title": "DTF Baskı Nasıl Yapılır?",
    "body": "DTF baskı süreci tasarım hazırlığı, film baskısı ve tekstile transfer aşamalarından oluşur.\n\n1. Tasarım, istenen baskı ölçüsünde hazırlanır. Arka planın şeffaflığı, ince çizgiler ve küçük yazılar kontrol edilir.\n2. Görsel, uygun DTF ekipmanı ve mürekkepleriyle transfer filmine basılır.\n3. Baskıya yapıştırıcı toz uygulanır ve kullanılan sisteme uygun şekilde kürlenir.\n4. Hazırlanan transfer, kumaş üzerinde belirlenen konuma yerleştirilerek ısı presiyle uygulanır.\n5. Film, kullanılan transferin talimatına göre sıcak veya soğuk soyulur. Gerekiyorsa son pres işlemi yapılır.\n\nSıcaklık, süre ve basınç için bütün ürünlere uygulanabilecek tek bir değer yoktur. Transfer malzemesinin talimatı ve kumaşın ısıya dayanımı esas alınmalıdır."
  },
  {
    "title": "DTF Baskının Avantajları Nelerdir?",
    "body": "Renkli logoları ve farklı renkler içeren tasarımları tek transferde uygulama imkânı sunar. Beyaz mürekkep katmanı sayesinde uygun açık ve koyu renkli tekstiller üzerinde kullanılabilir.\n\nHer renk için ayrı bir serigrafi kalıbı hazırlama gerektirmemesi, az adetli veya farklı tasarımlar içeren işler için değerlendirilmesini sağlar. Ancak en ekonomik yöntemin hangisi olduğu adet, baskı ölçüsü ve tasarıma göre değişir.\n\nFilm önceden hazırlanabildiği için baskı hazırlığı ile ürüne uygulama aşaması ayrı planlanabilir. Teslim süresi yine de ürün stoğuna ve üretim programına bağlıdır."
  },
  {
    "title": "DTF Baskı Hangi Kumaşlara ve Ürünlere Uygulanır?",
    "body": "Pamuklu, polyester ve karışım kumaşlar DTF uygulaması için değerlendirilebilir. Tişört, sweatshirt, iş kıyafeti ve ham bez çanta yaygın kullanım örnekleridir.\n\nBununla birlikte her kumaş ve kaplama aynı sonucu vermez. Su itici yüzeyler, ısıya hassas malzemeler ve çok esnek kumaşlar için uygunluk ayrıca kontrol edilmelidir. Polyesterde renk göçü gibi sorunlar açısından deneme uygulaması gerekebilir.\n\nBir ürünün tekstil olması tek başına yeterli değildir. Özellikle tela çanta ve şapka gibi ürünlerde malzeme, şekil ve presleme koşulları seçilen model üzerinden değerlendirilmelidir."
  },
  {
    "title": "DTF, DTG, Serigrafi ve Sublimasyon Arasındaki Fark Nedir?",
    "body": "DTF yönteminde tasarım filme basılır ve ardından tekstile transfer edilir. DTG yönteminde ise uygun tekstil üzerine doğrudan mürekkep püskürtülür; kumaşa ve sisteme göre ön işlem gerekebilir.\n\nSerigrafide tasarım elek ve kalıplar aracılığıyla uygulanır. Aynı tasarımın yüksek adetlerde üretileceği işlerde maliyet açısından karşılaştırılabilir.\n\nSublimasyonda boya, uygun polyester yüzeye veya özel kaplamaya ısıyla aktarılır. Klasik tekstil sublimasyonu açık renkli polyester ürünlerde değerlendirilir.\n\nBu rehberde anlatılan tekstil DTF uygulaması, sert yüzeylerde kullanılan UV DTF ile aynı işlem değildir. Baskı yöntemi seçilirken ürün malzemesi ve beklenen kullanım birlikte ele alınmalıdır."
  },
  {
    "title": "DTF Baskı Dayanıklı mı, Nasıl Yıkanmalı?",
    "body": "DTF baskının kullanım ömrü; transfer malzemesine, uygulamanın doğru yapılmasına, kumaşa ve bakım şekline bağlıdır. Her ürün için aynı yıkama sayısını veya çatlamama garantisini vermek doğru olmaz.\n\nBaskılı ürünü ters çevirerek yıkamak ve baskı yüzeyini sürtünmeden korumak bakım açısından yardımcı olabilir. Yıkama sıcaklığı, kurutma ve ütüleme için ürün etiketiyle baskı uygulayıcısının talimatlarını birlikte izleyin.\n\nBaskının üzerine doğrudan ütü uygulamayın. Ağartıcı, yüksek ısı ve yoğun mekanik işlem baskıya zarar verebilir. İlk yıkama öncesindeki bekleme süresini de uygulama talimatından öğrenin."
  },
  {
    "title": "DTF Baskının Sınırlamaları Nelerdir?",
    "body": "Geniş ve tamamen dolu tasarımlar kumaş üzerinde daha belirgin bir tabaka hissi oluşturabilir. Baskı alanı büyüdükçe kumaşın o bölgedeki esnekliği ve hava geçirgenliği de etkilenebilir.\n\nÇok küçük yazılar ve ince detaylar her ölçekte aynı netlikle uygulanamayabilir. Ekranda görülen renk ile fiziksel baskı arasında fark oluşabilir.\n\nToplu üretim öncesinde kumaş, baskı ölçüsü ve tasarımın birlikte kontrol edilmesi bu nedenle önemlidir. Kritik renk veya kullanım beklentilerinde numune uygulaması değerlendirilmelidir."
  },
  {
    "title": "DTF Baskı Fiyatı ve Teklif İçin Hangi Bilgiler Gerekir?",
    "body": "Fiyatı değerlendirmek için ürünün modeli ve kumaşı, sipariş adedi, baskının santimetre cinsinden ölçüsü ve uygulama konumu belirlenmelidir. Ön ve arka gibi birden fazla alana baskı yapılacaksa her alan ayrıca belirtilmelidir.\n\nYalnızca renk sayısına bakarak fiyat karşılaştırması yapmak yeterli değildir. Baskı alanı, transfer yerleşimi ve uygulama işçiliği de toplam bedeli etkileyebilir.\n\nTeklif isterken tasarım dosyanızı, ürün adedini, baskı ölçüsünü ve ihtiyaç tarihinizi paylaşın. Ürün bedelinin, baskı uygulamasının, kargonun ve KDV'nin teklife dahil olup olmadığını kontrol edin.\n\nTişört veya çanta seçimiyle başlıyorsanız önce uygun modeli belirleyebilir, ardından tasarımınız için uygulama ve fiyat bilgisi isteyebilirsiniz."
  }
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
  title: "Toplu Kalem Siparişi | Logo Baskılı Promosyon Kalem",
  description:
    "Toplu kalem siparişi öncesinde model, adet, logo baskı ve teslimat detaylarını planlayın. Toptan promosyon kalem için teklif hazırlığını adım adım inceleyin.",
  h1: "Toplu Kalem Siparişi: Logo Baskılı Promosyon Kalemler",
  image: "/guides/promosyon-kalem-toptan.jpg",
  keywords: [
    "promosyon kalem",
    "toptan promosyon kalem",
    "logo baskılı kalem",
    "promosyon kalem fiyatları",
    "kalem baskı",
    "kurumsal kalem",
    "toplu kalem siparişi",
    "toplu kalem yaptırma"
  ],
  sections: [
  {
    "title": "Toplu Kalem Siparişi İçin Önce Neleri Belirlemelisiniz?",
    "body": "Toplu kalem siparişi verirken başlangıç noktası, kalemlerin kimlere ve hangi amaçla dağıtılacağıdır. Fuar ziyaretçileri için geniş adetli dağıtım ile çalışanlara veya müşterilere hazırlanacak bir hediye aynı model ve ambalajı gerektirmeyebilir.\n\nTeklif istemeden önce yaklaşık adedi, bütçeyi, kullanım amacını ve ihtiyaç duyduğunuz tarihi belirleyin. Birden fazla şubeye dağıtım yapılacaksa toplam adedin yanında şube başına miktarı da paylaşın.\n\nHenüz model seçmediyseniz bütçenize uygun birkaç alternatifi aynı sipariş adedi ve baskı kapsamıyla karşılaştırın. Böylece ürün fiyatıyla baskı bedelini birlikte değerlendirerek seçim yapabilirsiniz."
  },
  {
    "title": "Plastik, Metal ve Dokunmatik Kalem Nasıl Seçilir?",
    "body": "Plastik promosyon kalemler, geniş katılımlı etkinlikler ve dağıtım çalışmaları için değerlendirilebilir. Seçimde gövde rengi, yazım türü, baskı alanı ve toplam sipariş bedeline bakın.\n\nMetal kalemlerde gövde kaplaması ve logo uygulamasına uygun yüzey önemlidir. Lazer uygulaması düşünüldüğünde seçilen modelin baskı ölçüsünü kontrol edin; benzer görünen iki kalemin baskı alanı farklı olabilir.\n\nDokunmatik uçlu modeller, yazı yazma işlevini uyumlu dokunmatik ekranlarda kullanım seçeneğiyle birleştirir. Jel, tükenmez ve versatil modellerin yazım özelliklerini de ayrı değerlendirin.\n\nKutulu bir hediye hazırlamak istiyorsanız kalemin yanında kutunun veya set ambalajının teklife dahil olup olmadığını sorun. Ürün görselinde görünen aksesuarların kapsamını sipariş öncesinde netleştirin."
  },
  {
    "title": "Logo Baskısı İçin Hangi Bilgiler Gerekli?",
    "body": "Logo dosyanızı mümkünse vektörel PDF, AI veya EPS biçiminde paylaşın. Dosya uzantısı tek başına yeterli değildir; içindeki logonun düzenlenebilirliği ve çizgi kalitesi de kontrol edilmelidir. Yalnızca görsel dosyanız varsa baskıya uygunluğu ayrıca değerlendirilir.\n\nTampon baskı, UV baskı veya lazer uygulaması seçilen kalemin malzemesine, yüzeyine ve logo tasarımına göre belirlenir. Her yöntem her kaleme uygulanamayabilir.\n\nTek yön veya çift yön uygulama istediğinizi; logo yanında telefon, internet adresi veya slogan bulunup bulunmayacağını belirtin. Küçük baskı alanlarında uzun metinleri azaltmak okunabilirliği kolaylaştırır.\n\nÜretim onayından önce logo boyutunu, konumunu, yazıları ve uygulama yönünü gösteren yerleşimi kontrol edin. Kalem gövdesinin rengi ile mürekkep rengini de ayrı ayrı teyit edin."
  },
  {
    "title": "Toptan Kalem Tekliflerini Nasıl Karşılaştırmalısınız?",
    "body": "Yalnızca kalemin birim fiyatına bakmak yerine teklifin toplam kapsamını karşılaştırın. Ürün bedeli, baskı uygulaması, varsa hazırlık veya kalıp bedeli, ambalaj, kargo ve KDV'nin nasıl hesaplandığını öğrenin.\n\nSipariş adedi birim maliyeti etkileyebilir; ancak her modelde ve her adet aralığında fiyatın mutlaka düşeceği varsayılmamalıdır. Stok, baskı yöntemi ve üretim koşulları teklifi değiştirebilir.\n\nÖrneğin 100, 500 ve 1.000 adet için karşılaştırma istiyorsanız aynı model, aynı logo ve aynı baskı yönünü esas alın. Bir teklifte baskı dahil, diğerinde hariç olması yanıltıcı bir fiyat farkı oluşturabilir.\n\nSitede gösterilen ürün fiyatının kapsamını inceleyin. Baskılı toplam bedeli, siparişinize özel hazırlanan teklif üzerinden değerlendirin."
  },
  {
    "title": "Minimum Sipariş ve Teslim Süresi Nasıl Netleşir?",
    "body": "Minimum sipariş miktarı seçilen ürüne, baskılı veya baskısız alıma ve güncel temin koşullarına göre netleştirilir. Koli ya da kutu içi adet bilgisi, tek başına minimum sipariş miktarı anlamına gelmez.\n\nTeslimat planında ürünün stok durumu, logo yerleşiminin onayı, baskı programı ve kargo süresi birlikte değerlendirilir. Bu nedenle tüm kalem siparişleri için sabit bir teslim süresi vermek doğru olmaz.\n\nBir fuara veya etkinliğe yetişmesi gerekiyorsa etkinlik tarihini ve ürünün elinizde olması gereken son günü ayrı belirtin. Teklifte paylaşılan sürenin üretimi mi, sevkiyatı mı yoksa adrese teslimi mi kapsadığını sorun."
  },
  {
    "title": "Toplu Kalem Siparişi Adım Adım Nasıl Verilir?",
    "body": "1. Kalem modelini veya karşılaştırmak istediğiniz alternatifleri seçin.\n2. Sipariş adedini, gövde rengini ve yazım tercihinizi belirtin.\n3. Logo dosyasını, baskı yönünü ve eklenecek metinleri paylaşın.\n4. Teslimat adresini ve ihtiyaç tarihinizi iletin.\n5. Ürün, baskı, ambalaj, kargo ve KDV kapsamını içeren teklifi değerlendirin.\n6. Logo yerleşimini ve sipariş detaylarını kontrol ederek onaylayın.\n\nTeklif talebinizi şu bilgilerle hazırlayabilirsiniz: “Model veya ürün kodu: … / Adet: … / Gövde rengi: … / Baskı: tek veya çift yön / Logo dosyası: … / İhtiyaç tarihi: … / Teslimat ili: …”\n\nModel seçeneklerini inceleyerek başlayabilir veya kullanım amacınızı ve bütçenizi paylaşarak alternatifler için kurumsal teklif isteyebilirsiniz."
  }
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
                {guide.slug === "promosyon-kalem-toptan" && (
                  <div data-kalem-toptan-actions className="mb-4 flex flex-wrap gap-3">
                    <Link
                      href="/promosyon-kalem"
                      className="inline-flex items-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                    >
                      Kalem Modellerini İncele
                    </Link>
                    <Link
                      href="/kurumsal-teklif-al"
                      className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:border-black"
                    >
                      Toplu Sipariş İçin Teklif Al
                    </Link>
                  </div>
                )}
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
            {guide.slug === "dtf-baski-nedir" && (
              <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-200">
                  DTF baskıya uygun modelleri inceleyin; uygulama uygunluğu seçilen ürün ve tasarıma göre netleştirilir.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/promosyon-tisort"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
                  >
                    Tişört Modellerini İncele
                  </Link>
                  <Link
                    href="/promosyon-ham-bez-tela-canta"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
                  >
                    Ham Bez ve Tela Çantaları İncele
                  </Link>
                </div>
              </div>
            )}
            {guide.slug === "promosyon-kupa-baski" && (
              <Link
                href="/promosyon-kupa"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
              >
                Kupa ve Fincan Modellerini İncele
              </Link>
            )}
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              href="/promosyon-kalem"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Kalem
            </Link>
            <Link
              href="/promosyon-cakmak"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Çakmak
            </Link>
            <Link
              href="/promosyon-anahtarlik"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Anahtarlık
            </Link>
            <Link
              href="/promosyon-termos"
              className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-white"
            >
              Promosyon Termos
            </Link>
            <Link
              href="/promosyon-usb-bellek"
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