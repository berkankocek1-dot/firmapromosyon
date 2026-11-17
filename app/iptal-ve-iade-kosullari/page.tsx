import FpLegalPage from "../_components/FpLegalPage";
import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

export const metadata: Metadata = {
  title: "İptal ve İade Koşulları",
  description:
    "FirmaPromosyon iptal ve iade koşulları. Baskılı ve baskısız promosyon ürünlerinde sipariş iptali, iade şartları ve süreç bilgileri.",
  alternates: { canonical: `${SITE_URL}/iptal-ve-iade-kosullari` },
};

export default function Page() {
  return (
    <FpLegalPage title="İptal ve İade Koşulları" href="/iptal-ve-iade-kosullari">
<p className="mt-3 text-sm text-gray-500">
          Güncelleme Tarihi: 2026
        </p>

        <div className="mt-6 space-y-8 text-gray-700 leading-7">
          <section>
            <h2 className="text-xl font-bold text-gray-900">1. Genel Bilgilendirme</h2>

            <p className="mt-3">
              FirmaPromosyon üzerinden verilen siparişlerde iptal ve iade süreçleri,
              ürünün niteliğine, baskı durumuna, üretim aşamasına ve teslimat
              durumuna göre değerlendirilmektedir.
            </p>

            <p className="mt-3">
              Promosyon ürünleri çoğu zaman toplu üretim, özel baskı veya müşteri
              talebine göre hazırlanan siparişler olduğu için standart e-ticaret
              ürünlerinden farklı şartlara tabi olabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">2. Sipariş İptali</h2>

            <p className="mt-3">
              Baskısız ve standart ürün siparişleri, ürün henüz hazırlık veya
              kargolama sürecine alınmadan önce iptal edilebilir.
            </p>

            <p className="mt-3">
              Logo baskılı, kişiselleştirilmiş, özel üretim veya müşteri onayı ile
              üretime alınmış siparişlerde ise üretim başladıktan sonra iptal
              mümkün olmayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">3. Baskılı Ürünlerde İade</h2>

            <p className="mt-3">
              Müşteri onayı ile baskıya alınan, özel olarak üretilen veya
              kişiselleştirilen promosyon ürünlerinde, ürünün ayıplı veya hatalı
              olmaması halinde iade kabul edilmeyebilir.
            </p>

            <p className="mt-3">
              Çünkü bu ürünler müşteri talebine özel hazırlandığından yeniden satışa
              uygun olmayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">4. Baskısız ve Standart Ürünlerde İade</h2>

            <p className="mt-3">
              Baskısız ve standart ürünlerde, ürünün kullanılmamış, zarar
              görmemiş, eksiksiz ve tekrar satışa uygun durumda olması halinde
              iade değerlendirmeye alınabilir.
            </p>

            <p className="mt-3">
              Ürün iadesinde ambalaj, varsa aksesuarlar ve teslim edilen diğer
              parçaların eksiksiz olarak gönderilmesi gerekir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">5. Hasarlı veya Hatalı Ürünler</h2>

            <p className="mt-3">
              Teslim edilen ürünlerde üretim hatası, baskı hatası, eksik ürün veya
              taşıma kaynaklı görünür hasar bulunması halinde, durumun teslimat
              sonrasında gecikmeden bildirilmesi gerekir.
            </p>

            <p className="mt-3">
              Gerekli inceleme sonrasında hata FirmaPromosyon kaynaklı ise yeniden
              üretim, değişim veya uygun görülmesi halinde iade süreci başlatılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">6. İade İçin Gerekli Şartlar</h2>

            <p className="mt-3">
              İade taleplerinde aşağıdaki şartların sağlanması gerekebilir:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5"><li>Ürünün kullanılmamış olması</li><li>Ürünün zarar görmemiş olması</li><li>Ürünün tekrar satışa uygun durumda olması</li><li>Ürünün ambalajı ve varsa aksesuarları ile birlikte eksiksiz
              gönderilmesi</li></ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">7. İade Kabul Edilmeyebilecek Durumlar</h2>

            <p className="mt-3">
              Aşağıdaki durumlarda iade kabul edilmeyebilir:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5"><li>Müşteri onayı ile baskıya alınmış ürünler</li><li>Özel üretim veya kişiselleştirilmiş siparişler</li><li>Kullanılmış, zarar görmüş veya tekrar satışa uygun olmayan ürünler</li><li>Eksik gönderilen aksesuar veya ambalaj içeriği</li></ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">8. İade Süreci</h2>

            <p className="mt-3">
              İade talebinin değerlendirmeye alınabilmesi için, sipariş bilgileri
              ile birlikte FirmaPromosyon’a yazılı olarak veya iletişim kanalları
              üzerinden başvuru yapılması önerilir.
            </p>

            <p className="mt-3">
              Talep incelendikten sonra ürünün iade, değişim veya yeniden üretim
              kapsamına girip girmediği konusunda müşteriye bilgi verilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">9. Kargo ve Teslim Kaynaklı Sorunlar</h2>

            <p className="mt-3">
              Kargo teslimatı sırasında ambalajı hasarlı görünen paketlerde,
              teslim almadan önce kontrol yapılması ve gerekli durumlarda kargo
              görevlisine tutanak tutulması önerilir.
            </p>

            <p className="mt-3">
              Kargo kaynaklı zararların hızlı şekilde bildirilmesi, çözüm sürecini
              kolaylaştıracaktır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">10. Yürürlük</h2>

            <p className="mt-3">
              FirmaPromosyon üzerinden sipariş veren kullanıcılar, sipariş süreci
              ile birlikte işbu iptal ve iade koşullarını kabul etmiş sayılır.
            </p>
          </section>
        </div>
    </FpLegalPage>
  );
}
