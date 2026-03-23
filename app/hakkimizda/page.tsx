import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | FirmaPromosyon",
  description:
    "FirmaPromosyon, kurumsal promosyon ürünleri, logo baskılı çözümler ve DTF baskı hizmetleri sunan profesyonel tedarik platformudur.",
  alternates: {
    canonical: "https://www.firmapromosyon.com/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Hakkımızda</h1>

      <p className="mb-4">
        FirmaPromosyon, Türkiye genelinde kurumsal firmalara özel promosyon
        ürünleri ve logo baskılı tedarik çözümleri sunmak amacıyla kurulmuş bir
        promosyon tedarik platformudur.
      </p>

      <p className="mb-4">
        Amacımız, firmaların marka bilinirliğini artırmasına katkı sağlayan
        promosyon ürünlerini hızlı teklif süreci, güvenilir tedarik ağı ve
        profesyonel baskı seçenekleri ile sunmaktır.
      </p>

      <p className="mb-4">
        Promosyon kalem, promosyon kupa, promosyon anahtarlık, promosyon
        ajanda, termos, USB bellek, çakmak, bez çanta ve daha birçok ürün
        grubunda kurumsal ihtiyaçlara uygun çözümler sağlamaktayız.
      </p>

      <p className="mb-4">
        Ürünlerimiz; fuarlar, etkinlikler, bayi toplantıları, şirket içi
        organizasyonlar, müşteri hediyeleri ve marka tanıtım çalışmaları için
        tercih edilmektedir.
      </p>

      <p className="mb-4">
        Baskı tarafında ise DTF baskı, UV baskı, lazer baskı, tampon baskı ve
        dijital baskı gibi farklı uygulama seçenekleri ile ürün ve ihtiyaca
        uygun çözümler sunuyoruz.
      </p>

      <p className="mb-4">Hizmet verdiğimiz başlıca ürün grupları:</p>

      <ul className="mb-6 list-disc pl-6">
        <li>Promosyon kalem</li>
        <li>Promosyon kupa ve termos</li>
        <li>Promosyon anahtarlık</li>
        <li>Promosyon ajanda ve defter</li>
        <li>Promosyon çakmak</li>
        <li>USB bellek ve powerbank</li>
        <li>DTF baskılı tekstil ürünleri</li>
      </ul>

      <p className="mb-4">
        FirmaPromosyon olarak önceliğimiz; doğru ürünü, doğru baskı yöntemiyle,
        doğru fiyat avantajı ile firmalara sunmaktır.
      </p>

      <p>
        Güvenilir iletişim, hızlı teklif süreci ve kurumsal çözümlerle
        markaların promosyon ihtiyaçlarını tek noktadan karşılamayı
        hedefliyoruz.
      </p>
    </main>
  );
}