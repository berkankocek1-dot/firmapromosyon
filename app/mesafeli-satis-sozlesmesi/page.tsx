import FpLegalPage from "../_components/FpLegalPage";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi",
  description:
    "FirmaPromosyon mesafeli satış sözleşmesi. Sipariş, teslimat, cayma hakkı ve tarafların yükümlülüklerine ilişkin bilgilendirme metni.",
  alternates: { canonical: `${SITE_URL}/mesafeli-satis-sozlesmesi` },
};

export default function Page() {
  return (
    <FpLegalPage title="Mesafeli Satış Sözleşmesi" href="/mesafeli-satis-sozlesmesi">
<p className="mt-3 text-sm text-gray-500">
          Güncelleme Tarihi: 2026
        </p>

        <div className="mt-6 space-y-8 text-gray-700 leading-7">

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              1. Taraflar
            </h2>

            <p className="mt-3">
              İşbu sözleşme, aşağıda bilgileri bulunan SATICI ile internet sitesi
              üzerinden sipariş veren ALICI arasında elektronik ortamda kurulmuştur.
            </p>

            <p className="mt-3">
              <strong>SATICI:</strong> FirmaPromosyon
              <br />
              <strong>Web Sitesi:</strong> www.firmapromosyon.com
              <br />
              <strong>E-Posta:</strong> info@firmapromosyon.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Sözleşmenin Konusu
            </h2>

            <p className="mt-3">
              İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait internet sitesi
              üzerinden elektronik ortamda sipariş verdiği ürünlerin satışı ve
              teslimi ile ilgili olarak tarafların hak ve yükümlülüklerinin
              belirlenmesidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. Ürün Bilgileri
            </h2>

            <p className="mt-3">
              Ürünlerin temel özellikleri, fiyat bilgileri, baskı seçenekleri ve
              minimum sipariş adetleri ürün sayfalarında veya teklif aşamasında
              ALICI’ya sunulmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. Sipariş ve Ödeme
            </h2>

            <p className="mt-3">
              ALICI, internet sitesi üzerinden verdiği sipariş ile ürün bedelini,
              varsa baskı ücretlerini, kargo ve vergi gibi ek ücretleri kabul
              etmiş sayılır.
            </p>

            <p className="mt-3">
              Ödeme yöntemleri sipariş aşamasında belirtilir ve ödeme işlemi
              tamamlanmadan sipariş işleme alınmaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              5. Teslimat
            </h2>

            <p className="mt-3">
              Sipariş konusu ürünler, stok durumu ve üretim sürecine bağlı olarak
              belirlenen süre içerisinde ALICI’ya teslim edilir.
            </p>

            <p className="mt-3">
              Logo baskılı veya özel üretim ürünlerde üretim süresi değişiklik
              gösterebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              6. Cayma Hakkı
            </h2>

            <p className="mt-3">
              ALICI, ürünün teslim alınmasından itibaren 14 gün içerisinde cayma
              hakkını kullanabilir.
            </p>

            <p className="mt-3">
              Ancak ALICI’nın talebi doğrultusunda özel olarak üretilen veya logo
              baskısı yapılan ürünlerde cayma hakkı kullanılamaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              7. İade Koşulları
            </h2>

            <p className="mt-3">
              İade edilecek ürünlerin kullanılmamış, zarar görmemiş ve yeniden
              satışa uygun durumda olması gerekir.
            </p>

            <p className="mt-3">
              Özel üretim veya baskılı ürünlerde iade kabul edilmeyebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              8. Uyuşmazlıkların Çözümü
            </h2>

            <p className="mt-3">
              İşbu sözleşmeden doğabilecek uyuşmazlıklarda Türkiye Cumhuriyeti
              kanunları uygulanır ve tüketici hakem heyetleri ile tüketici
              mahkemeleri yetkilidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              9. Yürürlük
            </h2>

            <p className="mt-3">
              ALICI, internet sitesi üzerinden sipariş verdiğinde bu sözleşmenin
              tüm şartlarını kabul etmiş sayılır.
            </p>
          </section>

        </div>
    </FpLegalPage>
  );
}
