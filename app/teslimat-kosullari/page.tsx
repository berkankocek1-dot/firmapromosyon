import type { Metadata } from "next";

const SITE_URL = "https://www.firmapromosyon.com";

export const metadata: Metadata = {
  title: "Teslimat Koşulları",
  description:
    "FirmaPromosyon teslimat koşulları. Promosyon ürünleri, baskılı siparişler, üretim süresi, kargo ve teslimat süreçleri hakkında bilgilendirme metni.",
  alternates: { canonical: `${SITE_URL}/teslimat-kosullari` },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-3xl bg-black px-6 py-10 text-white md:px-10">
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">
          Teslimat Koşulları
        </h1>

        <p className="mt-3 text-sm text-gray-300">
          Güncelleme Tarihi: 2026
        </p>

        <div className="mt-10 space-y-10 text-gray-200 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white">1. Genel Bilgilendirme</h2>

            <p className="mt-3">
              FirmaPromosyon üzerinden verilen siparişlerde teslimat süresi;
              ürünün stok durumu, baskı süreci, sipariş adedi, üretim yoğunluğu
              ve teslimat adresine göre değişiklik gösterebilir.
            </p>

            <p className="mt-3">
              Standart ürünler ile logo baskılı veya özel üretim promosyon
              ürünlerinin teslim süreleri birbirinden farklı olabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Baskısız Ürün Teslimatı</h2>

            <p className="mt-3">
              Baskısız ve stokta hazır bulunan ürünler, sipariş onayı ve ödeme
              işlemleri tamamlandıktan sonra mümkün olan en kısa sürede
              kargoya teslim edilir.
            </p>

            <p className="mt-3">
              Teslim süresi; kargo firması, teslimat bölgesi ve resmi tatil gibi
              etkenlere bağlı olarak değişebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Baskılı ve Özel Üretim Siparişler</h2>

            <p className="mt-3">
              Logo baskılı, kişiye özel veya kurumsal taleplere göre hazırlanan
              siparişlerde üretim süreci bulunduğundan teslimat süresi standart
              ürünlere göre daha uzun olabilir.
            </p>

            <p className="mt-3">
              Baskı onayı alındıktan sonra üretim başlar ve teslim süresi siparişin
              içeriğine göre ayrıca planlanır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Teslimat Süresini Etkileyen Unsurlar</h2>

            <p className="mt-3">
              Aşağıdaki durumlar teslimat süresini etkileyebilir:
            </p>

            <p className="mt-3">
              • Ürünün stok durumu
              <br />
              • Baskı veya üretim süresi
              <br />
              • Sipariş adedi
              <br />
              • Resmi tatiller ve yoğun dönemler
              <br />
              • Kargo firmasının çalışma koşulları
              <br />
              • Teslimat adresinin uzaklığı
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. Kargo ve Taşıma</h2>

            <p className="mt-3">
              Siparişler uygun görülen kargo veya taşıma yöntemi ile ALICI’ya
              gönderilir. Kargo firması seçimi, sipariş türüne ve teslimat
              bölgesine göre değişebilir.
            </p>

            <p className="mt-3">
              Toplu siparişlerde veya özel paketleme gereken durumlarda farklı
              lojistik çözümleri uygulanabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">6. Teslimat Adresi Sorumluluğu</h2>

            <p className="mt-3">
              ALICI, teslimat adresi, iletişim bilgileri ve teslim alacak kişi
              bilgisinin doğru ve eksiksiz olmasından sorumludur.
            </p>

            <p className="mt-3">
              Hatalı veya eksik adres bilgilerinden kaynaklanan gecikmelerden
              FirmaPromosyon sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">7. Teslimat Sırasında Kontrol</h2>

            <p className="mt-3">
              Ürün teslimatı sırasında paketlerin dış görünüşünde ezilme, yırtılma,
              kırık veya benzeri hasar olup olmadığı kontrol edilmelidir.
            </p>

            <p className="mt-3">
              Gözle görülür bir hasar varsa, kargo görevlisi eşliğinde gerekli
              tutanak işlemlerinin yapılması önerilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">8. Gecikmeler ve Mücbir Sebepler</h2>

            <p className="mt-3">
              Hava koşulları, resmi tatiller, ulaşım sorunları, üretim gecikmeleri,
              tedarik problemleri veya mücbir sebepler gibi FirmaPromosyon’un
              kontrolü dışındaki durumlarda teslimat süresi uzayabilir.
            </p>

            <p className="mt-3">
              Bu gibi durumlarda müşteriye mümkün olduğunca bilgi verilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">9. Parça Parça Teslimat</h2>

            <p className="mt-3">
              Gerekli görülen durumlarda sipariş içeriği, üretim veya tedarik
              durumuna bağlı olarak tek seferde ya da parça parça teslim edilebilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">10. Yürürlük</h2>

            <p className="mt-3">
              FirmaPromosyon üzerinden sipariş veren kullanıcılar, sipariş süreci
              ile birlikte işbu teslimat koşullarını kabul etmiş sayılır.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}