import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | FirmaPromosyon",
  description: "FirmaPromosyon gizlilik politikası ve veri kullanım şartları.",
};

export default function GizlilikPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>

      <p className="mb-4">
        FirmaPromosyon olarak ziyaretçilerimizin gizliliğini korumayı
        taahhüt ederiz.
      </p>

      <p className="mb-4">
        Web sitemiz üzerinden iletilen kişisel bilgiler yalnızca teklif
        oluşturma ve müşteri iletişimi amacıyla kullanılmaktadır.
      </p>

      <p className="mb-4">
        Kişisel verileriniz üçüncü kişiler ile izniniz olmadan paylaşılmaz ve
        yalnızca hizmet sunumu için kullanılmaktadır.
      </p>

      <p>
        Web sitemizi kullanarak bu gizlilik politikasını kabul etmiş sayılırsınız.
      </p>
    </main>
  );
}