import Link from "next/link";

const guides = [
  {
    slug: "dtf-baski-nedir",
    title: "DTF Baskı Nedir?",
    desc: "DTF baskı süreci ve avantajları.",
  },
  {
    slug: "promosyon-kupa-baski",
    title: "Promosyon Kupa Baskı",
    desc: "Kurumsal kupa siparişi rehberi.",
  },
  {
    slug: "promosyon-kalem-toptan",
    title: "Promosyon Kalem Toptan",
    desc: "Toptan promosyon kalem seçenekleri.",
  },
];

export default function RehberPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-3xl font-bold">Promosyon Rehberleri</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/rehber/${g.slug}`}
            className="border p-5 rounded-xl hover:shadow"
          >
            <h2 className="text-lg font-semibold">{g.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{g.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}