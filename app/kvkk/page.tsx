import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | FirmaPromosyon",
};

export default function KVKKPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">
        Kişisel Verilerin Korunması (KVKK)
      </h1>

      <p className="mb-4">
        6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında,
        FirmaPromosyon veri sorumlusu olarak kişisel verilerinizi işlemektedir.
      </p>

      <p className="mb-4">
        Web sitemiz üzerinden iletilen ad, telefon ve e-posta gibi bilgiler
        teklif oluşturma ve iletişim süreçleri için kullanılmaktadır.
      </p>

      <p className="mb-4">
        Kişisel verileriniz yalnızca hizmet sunumu amacıyla saklanmakta ve
        üçüncü kişiler ile paylaşılmamaktadır.
      </p>

      <p>
        KVKK kapsamında veri sahibi olarak bilgi talep etme, düzeltme ve
        silme haklarına sahipsiniz.
      </p>
    </main>
  );
}