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
];

export default function RehberPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Promosyon Ürün Rehberleri
        </h1>
        <p className="mt-3 text-gray-600">
          Promosyon ürünleri, DTF baskı, kurumsal promosyon ürün seçimi ve
          logo baskılı ürünler hakkında hazırladığımız detaylı rehberleri
          inceleyebilirsiniz.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/rehber/${g.slug}`}
            className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-gray-900">{g.title}</h2>

            <p className="mt-3 text-sm text-gray-600">{g.desc}</p>

            <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
              Rehberi Oku →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          Promosyon Ürün Kategorileri
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/kategori/kalem"
            className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
          >
            Promosyon Kalem
          </Link>

          <Link
            href="/kategori/cakmak"
            className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
          >
            Promosyon Çakmak
          </Link>

          <Link
            href="/kategori/anahtarlik"
            className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
          >
            Promosyon Anahtarlık
          </Link>
        </div>
      </div>
    </main>
  );
}