import FpLegalPage from "../_components/FpLegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "FirmaPromosyon çerez politikası, web sitemizde kullanılan çerez türleri ve kullanıcı deneyimini geliştirme amaçları hakkında bilgi içerir.",
  alternates: {
    canonical: "https://www.firmapromosyon.com/cerez-politikasi",
  },
};

export default function CerezPage() {
  return (
    <FpLegalPage title="Çerez Politikası" href="/cerez-politikasi">
<p className="mb-4">
        FirmaPromosyon olarak, web sitemizi ziyaret eden kullanıcıların
        deneyimini geliştirmek amacıyla çerezler (cookies) kullanmaktayız.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        Çerez (Cookie) Nedir?
      </h2>
      <p className="mb-4">
        Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla
        cihazınıza kaydedilen küçük metin dosyalarıdır.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        Hangi Çerezleri Kullanıyoruz?
      </h2>
      <p className="mb-4">
        Web sitemizde aşağıdaki çerez türleri kullanılmaktadır:
      </p>

      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>Zorunlu Çerezler (site çalışması için gereklidir)</li>
        <li>Performans ve Analiz Çerezleri</li>
        <li>Fonksiyonel Çerezler</li>
      </ul>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        Çerezlerin Kullanım Amaçları
      </h2>
      <p className="mb-4">
        Çerezler; site performansını analiz etmek, kullanıcı deneyimini geliştirmek,
        tercihlerinizi hatırlamak ve hizmetlerimizi iyileştirmek amacıyla
        kullanılmaktadır.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-semibold">
        Çerezleri Nasıl Kontrol Edebilirsiniz?
      </h2>
      <p className="mb-4">
        Tarayıcı ayarlarınızı değiştirerek çerezleri kabul edebilir, reddedebilir
        veya mevcut çerezleri silebilirsiniz.
      </p>

      <p>
        Web sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş
        sayılırsınız.
      </p>
    </FpLegalPage>
  );
}
