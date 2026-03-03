import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata = {
  title: "Ürünler",
  description: "Kurumsal promosyon ürünleri: kupa, ajanda, kalem, tişört ve daha fazlası.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-semibold">Ürünler</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="group rounded-3xl bg-white p-4 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="mt-4">
              <div className="text-sm text-gray-600 font-medium">{p.category}</div>
              <h2 className="mt-1 text-lg font-semibold text-gray-900">{p.title}</h2>
              <p className="mt-2 text-sm text-gray-700">{p.shortDesc}</p>

              {/* Min adet kaldırıldı */}
              <div className="mt-4 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold text-white">
                Aynı gün dönüş
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}