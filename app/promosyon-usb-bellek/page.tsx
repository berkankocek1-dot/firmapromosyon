import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { products } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";

export const metadata: Metadata = {
  title: "Promosyon USB Bellek | Logo Baskılı USB Bellek",
  description:
    "Promosyon USB bellek modelleri. Logo baskılı USB bellek, toptan kurumsal promosyon USB bellek çeşitleri için hızlı teklif alın.",
  alternates: { canonical: `${SITE_URL}/promosyon-usb-bellek` },
};

export default function UsbPage() {
  const usbProducts = products.filter(
    (p) => p.category === "USB Bellek"
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      
      <h1 className="text-3xl font-bold mb-6">
        Promosyon USB Bellek
      </h1>

      <p className="text-gray-700 mb-8">
        Promosyon USB bellek modelleri, firmaların marka tanıtımı için en çok
        tercih ettiği promosyon ürünleri arasında yer alır. Logo baskılı USB
        bellek ürünleri fuarlar, seminerler, bayi toplantıları ve kurumsal
        etkinliklerde dağıtılarak marka bilinirliğini artırır.
      </p>

      {/* Ürün Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {usbProducts.map((product) => (
          <Link
            key={product.id}
            href={`/urunler/${product.slug}`}
            className="border rounded-lg p-4 hover:shadow-md"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="rounded mb-3"
            />

            <h2 className="font-semibold mb-2">
              {product.title}
            </h2>

            <p className="text-sm text-gray-600">
              {product.shortDesc}
            </p>
          </Link>
        ))}
      </div>

      {/* SEO Yazısı */}
      <section className="mt-14 text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold">
          Logo Baskılı Promosyon USB Bellek
        </h2>

        <p>
          Promosyon USB bellek, kurumsal tanıtım için kullanılan en etkili
          promosyon ürünlerinden biridir. Kullanıcılar tarafından aktif şekilde
          kullanılan bir ürün olması sayesinde marka görünürlüğü uzun süre
          devam eder.
        </p>

        <p>
          Firmalar genellikle fuar, lansman, seminer ve bayi toplantılarında
          logo baskılı USB bellek dağıtarak hem kullanışlı hem de prestijli bir
          tanıtım ürünü sunar. Promosyon USB bellek modelleri farklı kapasite ve
          tasarım seçenekleri ile üretilebilmektedir.
        </p>

        <p>
          Toptan promosyon USB bellek siparişlerinde kapasite seçenekleri
          genellikle 8GB, 16GB, 32GB, 64GB ve 128GB olarak tercih edilmektedir.
          Ayrıca USB 3.0 modelleri daha hızlı veri aktarımı sağlayarak kurumsal
          kullanım için avantaj sunar.
        </p>

        <p>
          Promosyon USB bellek fiyatları kapasite seçeneğine, sipariş miktarına
          ve baskı türüne göre değişiklik gösterebilir. Kurumsal firmalar için
          toplu sipariş ve logo baskılı üretim seçenekleri ile uygun maliyetli
          promosyon çözümleri sunulmaktadır.
        </p>
      </section>
    </main>
  );
}