import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | FirmaPromosyon",
  description: "FirmaPromosyon kurumsal promosyon ve DTF baskı çözümleri hakkında bilgi alın.",
};

export default function HakkimizdaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Hakkımızda</h1>

      <p className="mb-4">
        FirmaPromosyon, Türkiye genelinde şirketlere özel promosyon ürünleri ve
        baskı çözümleri sunan bir kurumsal tedarik platformudur.
      </p>

      <p className="mb-4">
        Kurumsal firmaların marka bilinirliğini artırmasına yardımcı olan
        promosyon ürünlerini hızlı teklif ve güvenilir üretim ağı ile
        müşterilerimize ulaştırıyoruz.
      </p>

      <p className="mb-4">
        Hizmet verdiğimiz ürün grupları:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Promosyon kupa</li>
        <li>Promosyon kalem</li>
        <li>Promosyon ajanda</li>
        <li>Promosyon anahtarlık</li>
        <li>DTF baskılı tişört</li>
      </ul>

      <p>
        FirmaPromosyon olarak hedefimiz, firmaların ihtiyaç duyduğu promosyon
        ürünlerini en hızlı ve en güvenilir şekilde temin etmelerini
        sağlamaktır.
      </p>
    </main>
  );
}