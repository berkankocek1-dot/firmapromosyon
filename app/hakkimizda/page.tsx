import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Kurumsal Promosyon Ürünleri | FirmaPromosyon",
  description:
    "FirmaPromosyon; logo baskılı promosyon ürünleri, kurumsal hediyelik çözümler, DTF, UV, lazer ve tampon baskı hizmetleri sunan profesyonel promosyon tedarik platformudur.",
  alternates: {
    canonical: "https://www.firmapromosyon.com/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">
        Hakkımızda
      </h1>

      <p className="mb-4">
        FirmaPromosyon, Türkiye genelindeki kurumsal firmalara özel logo
        baskılı promosyon ürünleri, kurumsal hediyelik çözümler ve profesyonel
        baskı hizmetleri sunan bir promosyon tedarik platformudur.
      </p>

      <p className="mb-4">
        Markaların tanıtım süreçlerinde daha görünür, akılda kalıcı ve
        profesyonel bir izlenim oluşturmasına yardımcı olmak amacıyla geniş ürün
        yelpazesi, hızlı teklif süreci ve güvenilir tedarik ağı ile hizmet
        veriyoruz.
      </p>

      <p className="mb-4">
        Promosyon kalem, logo baskılı kupa, promosyon anahtarlık, ajanda,
        defter, termos, USB bellek, powerbank, çakmak, bez çanta, şapka,
        tekstil ürünleri ve VIP kurumsal hediye setleri gibi birçok kategoride
        firmalara özel çözümler sunuyoruz.
      </p>

      <p className="mb-4">
        Ürünlerimiz; fuarlar, bayi toplantıları, lansmanlar, şirket içi
        organizasyonlar, müşteri hediyeleri, personel hediyeleri ve marka
        bilinirliği çalışmalarında tercih edilmektedir.
      </p>

      <p className="mb-4">
        Baskı uygulamalarında ürün yapısına ve kullanım amacına göre DTF baskı,
        UV baskı, lazer baskı, tampon baskı, serigrafi baskı ve dijital baskı
        gibi farklı teknikler ile profesyonel sonuçlar hedefliyoruz.
      </p>

      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Hizmet Verdiğimiz Başlıca Ürün Grupları
        </h2>

        <ul className="list-disc pl-6">
          <li>Promosyon kalem ve logo baskılı kalem modelleri</li>
          <li>Promosyon kupa, termos ve matara çeşitleri</li>
          <li>Promosyon anahtarlık ve metal aksesuar ürünleri</li>
          <li>Ajanda, defter ve ofis promosyon ürünleri</li>
          <li>Promosyon çakmak ve masaüstü ürünleri</li>
          <li>USB bellek, powerbank ve teknolojik promosyon ürünleri</li>
          <li>DTF baskılı tişört, şapka ve tekstil ürünleri</li>
          <li>VIP hediye setleri ve kurumsal promosyon kutuları</li>
        </ul>
      </section>

      <p className="mb-4">
        FirmaPromosyon olarak önceliğimiz; her firma için doğru ürünü, doğru
        baskı tekniği ve uygun fiyat avantajı ile sunmaktır. Sipariş sürecinde
        ürün seçimi, baskı alternatifi, fiyatlandırma ve teslimat aşamalarında
        pratik ve kurumsal bir deneyim sağlamayı amaçlıyoruz.
      </p>

      <p>
        Güvenilir iletişim, hızlı tekliflendirme ve geniş promosyon ürün
        seçenekleriyle markaların kurumsal tanıtım ihtiyaçlarını tek noktadan
        karşılamayı hedefliyoruz.
      </p>
    </main>
  );
}