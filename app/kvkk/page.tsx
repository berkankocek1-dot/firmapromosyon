import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | FirmaPromosyon",
  description:
    "FirmaPromosyon KVKK aydınlatma metni, kişisel verilerin işlenmesi, saklanması ve kullanıcı hakları hakkında detaylı bilgi.",
  alternates: {
    canonical: "https://www.firmapromosyon.com/kvkk-aydinlatma",
  },
};

export default function KVKKPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">
        Kişisel Verilerin Korunması (KVKK) Aydınlatma Metni
      </h1>

      <p className="mb-4">
        FirmaPromosyon olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (“KVKK”) kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi
        işlemekte ve korumaktayız.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        İşlenen Kişisel Veriler
      </h2>
      <p className="mb-4">
        Web sitemiz üzerinden iletilen ad, soyad, telefon numarası ve e-posta
        adresi gibi bilgiler tarafımızca işlenmektedir.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        Kişisel Verilerin İşlenme Amaçları
      </h2>
      <p className="mb-4">
        Kişisel verileriniz; teklif oluşturma, müşteri iletişimi sağlama,
        hizmet sunumu ve kullanıcı deneyimini geliştirme amacıyla
        işlenmektedir.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        Kişisel Verilerin Aktarılması
      </h2>
      <p className="mb-4">
        Kişisel verileriniz, açık rızanız olmaksızın üçüncü kişilerle
        paylaşılmaz. Ancak hizmetin gerektirdiği durumlarda, ilgili iş ortakları
        ile sınırlı olarak paylaşılabilir.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        Veri Saklama Süresi
      </h2>
      <p className="mb-4">
        Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca
        saklanmakta ve sonrasında silinmekte veya anonim hale getirilmektedir.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        KVKK Kapsamındaki Haklarınız
      </h2>
      <p className="mb-4">
        KVKK kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme,
        işlenmişse bilgi talep etme, düzeltilmesini isteme, silinmesini talep
        etme ve işlenmesine itiraz etme haklarına sahipsiniz.
      </p>

      <p>
        Haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
      </p>
    </main>
  );
}