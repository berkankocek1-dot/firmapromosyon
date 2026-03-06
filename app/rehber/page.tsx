import Link from "next/link";

const guides = [
  {
    slug: "dtf-baski-nedir",
    title: "DTF Baskı Nedir? Nasıl Yapılır?",
    desc: "DTF baskı teknolojisi nedir, nasıl yapılır ve avantajları nelerdir? DTF baskı hakkında detaylı rehber.",
  },
  {
    slug: "promosyon-kupa-baski",
    title: "Promosyon Kupa Baskı Rehberi",
    desc: "Logo baskılı promosyon kupa nasıl yapılır? Kurumsal kupa siparişi verirken bilmeniz gerekenler.",
  },
  {
    slug: "promosyon-kalem-toptan",
    title: "Promosyon Kalem Toptan Satın Alma Rehberi",
    desc: "Toptan promosyon kalem nasıl alınır? En çok tercih edilen promosyon kalem modelleri ve fiyat bilgileri.",
  },
  {
    slug: "promosyon-urunleri-nedir",
    title: "Promosyon Ürünleri Nedir?",
    desc: "Promosyon ürünleri nedir, firmalar neden promosyon ürün kullanır ve en çok tercih edilen promosyon ürünleri.",
  },
  {
    slug: "promosyon-urunleri-nasil-secilir",
    title: "Promosyon Ürünleri Nasıl Seçilir?",
    desc: "Kurumsal promosyon ürün seçerken dikkat edilmesi gerekenler ve doğru promosyon stratejileri.",
  },
  {
    slug: "promosyon-kalem-neden-tercih-edilir",
    title: "Promosyon Kalem Neden En Çok Tercih Edilen Ürün?",
    desc: "Promosyon kalemlerin firmalar için en popüler promosyon ürünü olmasının sebepleri.",
  },
];

export default function RehberPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">

      {/* Başlık */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold">
          Promosyon Ürün Rehberleri
        </h1>
        <p className="text-gray-600 mt-3">
          Promosyon ürünleri, DTF baskı, kurumsal promosyon ürün seçimi ve 
          logo baskılı ürünler hakkında hazırladığımız detaylı rehberleri 
          inceleyebilirsiniz.
        </p>
      </div>

      {/* Rehber Kartları */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/rehber/${g.slug}`}
            className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-900">
              {g.title}
            </h2>

            <p className="text-gray-600 text-sm mt-3">
              {g.desc}
            </p>

            <span className="inline-block mt-4 text-sm font-semibold text-blue-600">
              Rehberi Oku →
            </span>
          </Link>
        ))}
      </div>

      {/* SEO iç link alanı */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-semibold">
          Promosyon Ürün Kategorileri
        </h2>

        <div className="flex flex-wrap gap-3 mt-4">
          <Link href="/kategori/kalem" className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            Promosyon Kalem
          </Link>

          <Link href="/kategori/cakmak" className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            Promosyon Çakmak
          </Link>

          <Link href="/kategori/anahtarlik" className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            Promosyon Anahtarlık
          </Link>

          <Link href="/kategori/defter" className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            Promosyon Defter
          </Link>
        </div>
      </div>

    </main>
  );
}