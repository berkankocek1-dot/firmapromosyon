import Image from "next/image";
import Link from "next/link";
import { getNewYearProducts } from "@/data/newYearProducts";

export default function NewYearProductShowcase({ compact = false }: { compact?: boolean }) {
  const selections = [
    { group: "hediye-setleri", label: "VIP hediye seti" },
    { group: "kalem-setleri", label: "Kalem seti" },
    { group: "ajandalar", label: "Ajanda" },
  ].flatMap(({ group, label }) => {
    const product = getNewYearProducts(group)[0];
    return product ? [{ product, label }] : [];
  });
  if (selections.length === 0) return null;
  return (
    <div aria-label="Yılbaşı için ürün örnekleri" className={compact ? "hidden w-full max-w-[280px] min-w-0 grid-cols-3 gap-2 md:grid" : "mx-auto hidden w-full max-w-md min-w-0 grid-cols-2 gap-3 sm:gap-4 md:grid"}>
      {selections.map(({ product, label }, index) => (
        <Link key={product.slug} href={`/urunler/${product.slug}`} className={`group min-w-0 overflow-hidden rounded-2xl border border-white/20 bg-white p-2 text-gray-950 shadow-lg transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${!compact && index === 0 ? "col-span-2 sm:mx-8" : ""}`}>
          <div className={`relative w-full bg-white ${compact ? "aspect-square" : index === 0 ? "h-44 sm:h-48" : "aspect-[4/3]"}`}>
            <Image src={product.image} alt={product.title} fill sizes={compact ? "90px" : index === 0 ? "(max-width: 639px) 80vw, 360px" : "(max-width: 639px) 40vw, 200px"} className="object-contain p-1 sm:p-2" />
          </div>
          <p className={compact ? "pb-1 pt-1 text-center text-[10px] font-bold leading-4" : "pb-1 pt-2 text-center text-xs font-bold leading-5 sm:text-sm"}>{label}</p>
        </Link>
      ))}
    </div>
  );
}
