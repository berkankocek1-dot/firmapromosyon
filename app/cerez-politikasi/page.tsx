import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | FirmaPromosyon",
};

export default function CerezPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Çerez Politikası</h1>

      <p className="mb-4">
        Web sitemiz kullanıcı deneyimini geliştirmek amacıyla çerezler
        kullanmaktadır.
      </p>

      <p className="mb-4">
        Çerezler, ziyaret edilen sayfaların analiz edilmesine ve kullanıcı
        deneyiminin iyileştirilmesine yardımcı olur.
      </p>

      <p>
        Web sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş
        sayılırsınız.
      </p>
    </main>
  );
}