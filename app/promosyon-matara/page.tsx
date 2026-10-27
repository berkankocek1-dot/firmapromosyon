import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import MataraProductGrid from "./MataraProductGrid";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-matara`;
const description = "Logo baskılı cam ve plastik promosyon matara modellerini inceleyin. Farklı kapasite seçenekleri, toplu sipariş ve kurumsal fiyat teklifi.";

const faqItems = [
  { question: "Promosyon matara üzerine firma logosu uygulanabilir mi?", answer: "Evet. Logo uygulamasının yeri ve baskı yöntemi seçilen modelin gövdesine veya kılıfına göre belirlenir. Teklif için ürün kodunu, sipariş adedini ve logonuzu paylaşabilirsiniz." },
  { question: "Cam ve plastik matara modellerini nasıl seçebilirim?", answer: "Materyalin yanında kapasiteyi, kapak yapısını ve kullanım ortamını karşılaştırabilirsiniz. Ürünleri cam ve plastik matara filtreleriyle ayırabilir, modelin açıklamasından ayrıntıları inceleyebilirsiniz." },
  { question: "Matara ile termos aynı ürün müdür?", answer: "Bu kategoride cam ve plastik su mataraları yer alır. Bir mataranın sıcak veya soğuk tutma özelliği olduğu varsayılmamalıdır. Isı yalıtımı arıyorsanız termos kategorisindeki modelleri inceleyebilirsiniz." },
  { question: "Promosyon matara minimum kaç adet sipariş edilir?", answer: "Minimum sipariş adedi modele, logo uygulamasına ve sipariş koşullarına göre belirlenir. Seçtiğiniz ürünün kodunu ve ihtiyaç duyduğunuz adedi ileterek teklif alabilirsiniz." },
  { question: "Matara fiyatlarına logo baskısı dahil midir?", answer: "Ürün kartlarında gösterilen fiyatlar baskı hariç ve KDV hariçtir. Baskı bedeli; yöntem, tasarım, uygulama alanı ve sipariş adedine göre ayrıca hesaplanır." },
  { question: "Matara siparişinde renk ve teslim süresi nasıl belirlenir?", answer: "Tercih edilen modelin renkleri, güncel stok durumu ve baskı planı sipariş öncesinde kontrol edilir. Teslim süresi tasarım onayı ve sipariş ayrıntıları netleştikten sonra paylaşılır." },
];

export const metadata: Metadata = {
  title: "Promosyon Matara | Logo Baskılı Cam ve Plastik Matara",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { title: "Promosyon Matara | FirmaPromosyon", description, url: PAGE_URL, siteName: "FirmaPromosyon", locale: "tr_TR", type: "website", images: [{ url: `${SITE_URL}/og.jpg`, width: 1200, height: 630, alt: "Cam ve Plastik Promosyon Matara Modelleri" }] },
  twitter: { card: "summary_large_image", title: "Promosyon Matara | FirmaPromosyon", description, images: [`${SITE_URL}/og.jpg`] },
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function MataraPage() {
  const list = sortProductsByCode(visibleProducts.filter(p => p.category === "Matara"));
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Ürünler", item: `${SITE_URL}/urunler` },
          { "@type": "ListItem", position: 3, name: "Promosyon Matara", item: PAGE_URL },
        ] }} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Promosyon Matara", url: PAGE_URL, description, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, idx) => ({ "@type": "ListItem", position: idx + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} />

        <section className="rounded-3xl border border-white/15 bg-white/5 px-6 py-8 md:px-8 md:py-10">
          <nav aria-label="Sayfa yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:underline">Ana Sayfa</Link><span aria-hidden="true">/</span>
            <Link href="/urunler" className="hover:underline">Ürünler</Link><span aria-hidden="true">/</span>
            <span aria-current="page" className="font-semibold text-white">Promosyon Matara</span>
          </nav>
          <h1 className="text-3xl font-extrabold md:text-4xl">Promosyon Matara</h1>
          <p className="mt-3 max-w-3xl leading-7 text-gray-200">Cam ve plastik promosyon matara modellerini inceleyin. Ofis, spor ve etkinlik hediyeleri için kapasite ve malzemeyi karşılaştırın; logo baskılı toplu siparişiniz için teklif alın.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-gray-200">Kurumsal Teklif Al</Link>
            <Link href="/promosyon-termos" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">Termos Modellerini İncele</Link>
          </div>
        </section>

        <MataraProductGrid products={list} />

        <section className="mt-14 space-y-8 rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8">
          <div className="max-w-4xl space-y-4 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskılı Cam ve Plastik Matara Modelleri</h2>
            <p>Promosyon matara, firmanızın logosunu günlük kullanılan bir ürün üzerinde sunmanıza yardımcı olur. Çalışan hediyeleri, spor etkinlikleri, fuarlar ve müşteri kampanyaları için model seçerken kullanım ortamını ve taşıma ihtiyacını birlikte değerlendirebilirsiniz.</p>
            <h3 className="text-xl font-semibold text-white">Cam matara seçenekleri</h3>
            <p>Cam gövdeli modelleri kapasite, ölçü ve varsa kılıf özelliklerine göre karşılaştırabilirsiniz. Logo uygulamasının cam yüzeye mi yoksa kılıfa mı yapılacağı seçilen ürüne göre netleştirilir. Temizlik ve kullanım koşulları için ürünün bilgileri esas alınmalıdır.</p>
            <h3 className="text-xl font-semibold text-white">Plastik ve spor matara seçenekleri</h3>
            <p>Plastik mataralarda kapak biçimi, içim şekli ve kapasite seçimde belirleyicidir. Detokslu ve emzikli modelleri kendi ihtiyaçlarınıza göre inceleyebilirsiniz. Malzeme türü, baskı yöntemi ve renkler her modelin ürün sayfasından kontrol edilmelidir.</p>
            <h3 className="text-xl font-semibold text-white">Matara kapasitesi nasıl seçilir?</h3>
            <p>Kapasiteyi, ürünün nerede kullanılacağını ve nasıl taşınacağını düşünerek seçin. Daha küçük modeller çanta ve masa kullanımında değerlendirilebilir; daha geniş kapasiteli seçenekler daha fazla su taşımak isteyenler için incelenebilir. Kapasite tek başına ürünün ölçüsünü veya ısı yalıtımını göstermez.</p>
            <h3 className="text-xl font-semibold text-white">Toptan matara fiyatı ve logo baskısı</h3>
            <p>Toplam sipariş bedeli; model, adet ve logo uygulamasına göre hesaplanır. Tasarımın renkleri, baskı alanı ve uygulanacak yöntem teklif aşamasında belirlenir. Ürün kartındaki baskı hariç fiyatı, baskılı siparişin toplam bedeliyle birlikte değerlendirmeniz gerekir.</p>
            <p>Teklif için ürün kodunu, adedi, logonuzu ve hedef teslim tarihinizi paylaşabilirsiniz. Renk ve stok bilgileri sipariş öncesinde teyit edilir. Isı yalıtımlı içecek taşıma ürünü arıyorsanız <Link href="/promosyon-termos" className="font-semibold text-white underline underline-offset-4">promosyon termos modellerini</Link> inceleyebilirsiniz.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Promosyon Matara Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqItems.map(item => <div key={item.question} className="rounded-2xl border border-white/15 p-5"><h3 className="text-lg font-semibold">{item.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{item.answer}</p></div>)}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
