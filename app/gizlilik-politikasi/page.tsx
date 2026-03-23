import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | FirmaPromosyon",
  description:
    "FirmaPromosyon gizlilik politikası, kişisel verilerin korunması, KVKK kapsamında veri kullanımı ve kullanıcı hakları hakkında bilgiler.",
  alternates: {
    canonical: "https://www.firmapromosyon.com/gizlilik-politikasi",
  },
};

export default function GizlilikPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>

      <p className="mb-4">
        FirmaPromosyon olarak ziyaretçilerimizin gizliliğini korumayı ve
        kişisel verilerin güvenliğini sağlamayı taahhüt ederiz.
      </p>

      <p className="mb-4">
        Web sitemiz üzerinden iletilen ad, soyad, telefon ve e-posta gibi
        kişisel bilgiler yalnızca teklif oluşturma, müşteri iletişimi ve hizmet
        sunumu amacıyla kullanılmaktadır.
      </p>

      <p className="mb-4">
        Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
        kapsamında korunmakta olup, açık rızanız olmadan üçüncü kişilerle
        paylaşılmaz.
      </p>

      <p className="mb-4">
        Verileriniz yalnızca hizmetin gerektirdiği ölçüde işlenir ve güvenli
        altyapılar üzerinde saklanır.
      </p>

      <p className="mb-4">
        Kullanıcılar, KVKK kapsamında kişisel verilerine ilişkin bilgi talep etme,
        düzeltme veya silme haklarına sahiptir.
      </p>

      <p className="mb-4">
        Web sitemizi kullanarak bu gizlilik politikasını kabul etmiş
        sayılırsınız.
      </p>
    </main>
  );
}