"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;  longDesc?: string;
  price?: number;
};

const popularCategories = [
  "Kalem",
  "Promosyon Şapka",
  "Tarihsiz Defter",
  "Termos",
  "USB Bellek",
  "Powerbank",
  "Çakmak",
  "Anahtarlık",
  "Kupa",
  "Promosyon Tişört",
  "Ajanda",
  "Kalem Setleri",
  "Teknolojik Ürünler",
  "Ham Bez & Tela Çanta",
];const categorySubfilters: Record<string, string[]> = {
  Ajanda: ["Tümü", "17x24", "16 cm Serisi", "Termo Deri", "Termo PU", "Spiralli", "Sert Kapak"],
  Anahtarlık: ["Tümü", "Metal", "Deri", "Açacaklı", "Ev & Araba", "Telefon Standlı", "Özel Tasarım"],
  Çakmak: ["Tümü", "Taşlı", "Manyetolu", "Turbo / Rüzgar", "Doldurulabilir", "Mini Boy"],
  "Tarihsiz Defter": ["Tümü", "Kalem Tutuculu", "Metal Detaylı", "Premium", "Büyük Boy", "Kareli", "Cep & Mini Boy"],
  "Duvar Saatleri": ["Tümü", "30 cm ve Altı", "35 cm", "40 cm ve Üzeri", "Özel Tasarım"],
  "İmalat Ürünler": ["Tümü", "Açacak", "Mouse Pad", "Masaüstü", "Şemsiye", "Oto Ürünleri", "Diğer"],
  Kalem: ["Tümü", "Plastik", "Metal", "Roller", "Jel", "Rubber", "Kurşun", "Dokunmatik"],
  "Kalem Setleri": ["Tümü", "Roller & Tükenmez", "Kalem & Anahtarlık", "Premium", "Ahşap", "Tekli & Kutulu", "Özel Kalemler"],
  Kupa: ["Tümü", "Kupa", "Fincan"],
  Organizerler: ["Tümü", "Kılıflı", "Manyetik Kilitli", "Hesap Makineli", "Metal Tokalı", "Ajandalı"],
  Powerbank: ["Tümü", "5.000 mAh", "10.000 mAh", "20.000 mAh", "MagSafe", "Wireless", "Hızlı Şarj", "Işıklı Logo"],
  "Teknolojik Ürünler": ["Tümü", "Şarj Kabloları", "Bluetooth Hoparlör", "Wireless Şarj", "Telefon Standı", "Araç İçi", "LED Logolu"],
  Termos: ["Tümü", "500 ml", "Büyük Hacim", "Dijital Göstergeli", "Çelik", "Matara"],
  "USB Bellek": ["Tümü", "Metal", "Ahşap", "Deri", "Kart USB", "Özel Tasarım", "USB 3.0"],
  "VIP Ürünler": ["Tümü", "Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler", "Anahtarlıklı", "Premium & Lüks", "Set Kutuları"],
};

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}function matchesSubfilter(product: Product, filter: string) {
  if (filter === "Tümü") return true;

  const text = normalizeText(
    `${product.title} ${product.shortDesc} ${product.longDesc || ""}`
  );

  const key = normalizeText(filter);

  if (product.category === "Duvar Saatleri") {
    if (filter === "30 cm ve Altı") {
      return /(?:20|22|24|25|26|28|30)\s*cm/.test(text);
    }

    if (filter === "35 cm") {
      return /35\s*cm/.test(text);
    }

    if (filter === "40 cm ve Üzeri") {
      return /(?:40|45|50|55|60)\s*cm/.test(text);
    }
  }

  if (product.category === "Termos") {
    if (filter === "500 ml") {
      return /500\s*ml/.test(text);
    }

    if (filter === "Büyük Hacim") {
      return (
        /(?:700|750|800|900|1000|1200|1500)\s*ml/.test(text) ||
        /(?:1|12|15)\s*l(?:itre)?/.test(text)
      );
    }
  }

  if (
    product.category === "Kalem Setleri" &&
    filter === "Roller & Tükenmez"
  ) {
    return text.includes("roller") && text.includes("tukenmez");
  }

  if (
    product.category === "VIP Ürünler" &&
    filter === "Defter & Kalem"
  ) {
    return text.includes("defter") && text.includes("kalem");
  }

  if (
    product.category === "İmalat Ürünler" &&
    filter === "Diğer"
  ) {
    const knownTerms = [
      "acacak",
      "mouse pad",
      "mousepad",
      "masaustu",
      "semsiye",
      "oto",
      "arac",
    ];

    return !knownTerms.some((term) => text.includes(term));
  }

  const aliases: Record<string, string[]> = {
    "17x24": ["17 x 24", "17x24"],
    "16 cm serisi": ["16 x 24", "16x24", "165 x 22"],

    spiralli: ["spiral"],
    manyetolu: ["manyeto"],
    "turbo ruzgar": ["turbo", "ruzgar"],
    doldurulabilir: ["doldurulabilir", "doldurulabilen"],
    "mini boy": ["mini"],

    acacakli: ["acacak", "purjor"],
    "ev araba": ["ev seklinde", "araba seklinde"],
    "telefon standli": [
      "telefon standli",
      "telefon standi",
      "telefon tutucu",
    ],
    "ozel tasarim": [
      "ozel tasarim",
      "3d",
      "figur",
      "baret anahtarlik",
      "rozet",
    ],

    "kalem tutuculu": [
      "kalem tutuculu",
      "kalem yuvali",
      "kalemlikli",
    ],
    "metal detayli": [
      "metal plakali",
      "metal detayli",
      "metal tokali",
      "manyetik kilitli",
    ],
    "buyuk boy": [
      "buyuk boy",
      "17x24",
      "16x24",
      "195x25",
    ],
    "cep mini boy": ["cep boy", "mini boy"],

    "mouse pad": ["mouse pad", "mousepad"],
    "oto urunleri": ["oto", "arac"],

    jel: ["jel", "jell"],
    dokunmatik: ["dokunmatik", "stylus"],

    "kalem anahtarlik": ["kalem ve anahtarlik"],
    premium: ["premium", "vip", "luks"],
    "tekli kutulu": ["tekli", "kalem kutusu"],
    "ozel kalemler": [
      "ozel tasarim",
      "dolma kalem",
      "piston",
      "dokunmatik",
      "stylus",
    ],

    "hesap makineli": [
      "hesap makineli",
      "hesap makinali",
    ],
    "metal tokali": [
      "metal tokali",
      "metal kilitli",
    ],
    ajandali: ["ajanda"],

    "5000 mah": ["5000 mah"],
    "10000 mah": ["10000 mah"],
    "20000 mah": ["20000 mah"],
    wireless: ["wireless", "kablosuz"],
    "hizli sarj": [
      "hizli sarj",
      "quick charge",
      "pd sarj",
    ],
    "isikli logo": ["isikli logo", "led logo"],

    "sarj kablolari": [
      "sarj kablosu",
      "kablo seti",
      "coklu sarj kablosu",
    ],
    "bluetooth hoparlor": [
      "bluetooth hoparlor",
      "bluetooth speaker",
    ],
    "wireless sarj": [
      "wireless sarj",
      "kablosuz sarj",
      "magsafe",
    ],
    "telefon standi": [
      "telefon standi",
      "telefon tutucu",
      "telefon sabitleyici",
    ],
    "led logolu": ["led logo", "led isikli"],

    "dijital gostergeli": ["dijital", "gostergeli"],

    "kart usb": ["kart usb", "kredi karti"],
    "usb 30": ["usb 30"],

    "teknoloji setleri": [
      "powerbank",
      "usb",
      "bluetooth",
      "speaker",
      "magsafe",
      "kablo",
    ],
    "termoslu setler": ["termos"],
    anahtarlikli: ["anahtarlik"],
    "premium luks": [
      "premium",
      "luks",
      "prestijli",
      "vip hediye",
    ],
    "set kutulari": ["set kutusu"],
  };

  const terms = aliases[key] || [key];

  return terms.some((term) => text.includes(term));
}

export default function ProductsClient({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("q") || "";

  const [search, setSearch] = useState(queryFromUrl);
  const [activeCategory, setActiveCategory] = useState("Tümü");  const [activeSubfilter, setActiveSubfilter] = useState("Tümü");
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    setSearch(queryFromUrl);
  }, [queryFromUrl]);

  const categories = useMemo(
    () =>
      Array.from(new Set(products.map((product) => product.category))).sort(
        (a, b) => a.localeCompare(b, "tr")
      ),
    [products]
  );

  const visiblePopularCategories = useMemo(
    () => popularCategories.filter((category) => categories.includes(category)),
    [categories]
  );

  const availableSubfilters = categorySubfilters[activeCategory] || [];  const filteredProducts = useMemo(() => {
    const query = normalizeText(search);

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "Tümü" || product.category === activeCategory;

      if (!matchesCategory) return false;      if (!matchesSubfilter(product, activeSubfilter)) return false;

      if (!query) return true;

      const title = normalizeText(product.title);
      const category = normalizeText(product.category);
      const slug = normalizeText(product.slug);

      return (
        title.includes(query) ||
        category.includes(query) ||
        slug.includes(query)
      );
    });
  }, [search, activeCategory, activeSubfilter, products]);

  function changeCategory(category: string) {    setActiveCategory(category);    setActiveSubfilter("Tümü");  }  function clearFilters() {
    setSearch("");
    setActiveCategory("Tümü");    setActiveSubfilter("Tümü");
  }

  return (
    <>
      <section className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7">
        <div>
          <label
            htmlFor="product-search"
            className="mb-2 block text-sm font-semibold text-white"
          >
            Ürün adı veya stok kodu ile arayın
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="product-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Örnek: PY-110, metal kalem, çakmak"
              className="w-full rounded-2xl border border-white/20 bg-black/30 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-white/60"
            />

            <button
              type="button"
              onClick={clearFilters}
              className="rounded-2xl border border-white bg-white px-6 py-4 text-sm font-bold text-black transition hover:opacity-90"
            >
              Temizle
            </button>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">
                Popüler Kategoriler
              </h2>

              <p className="mt-1 text-sm text-white/60">
                Aradığınız ürün grubunu seçerek sonuçları daraltın.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllCategories((current) => !current)}
              className="self-start text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white sm:self-auto"
            >
              {showAllCategories
                ? "Daha Az Kategori Göster"
                : `+ Tüm Kategoriler (${categories.length})`}
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => changeCategory("Tümü")}
              className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                activeCategory === "Tümü"
                  ? "border-white bg-white text-black"
                  : "border-white/20 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Tümü
            </button>

            {visiblePopularCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-white bg-white text-black"
                    : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {showAllCategories && (
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-white">
                  Tüm Kategoriler
                </h3>

                <span className="text-xs text-white/50">
                  {categories.length} kategori
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      changeCategory(category);
                      setShowAllCategories(false);
                    }}
                    className={`rounded-xl border px-3 py-3 text-left text-sm font-semibold transition ${
                      activeCategory === category
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

          {availableSubfilters.length > 0 && (            <div className="mt-5 border-t border-white/10 pt-5">              <p className="mb-3 text-sm font-semibold text-white">                {activeCategory} türünü seçin              </p>              <div className="flex flex-wrap gap-2">                {availableSubfilters.map((filter) => (                  <button                    key={filter}                    type="button"                    onClick={() => setActiveSubfilter(filter)}                    className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${                      activeSubfilter === filter                        ? "border-white bg-white text-black"                        : "border-white/20 bg-white/5 text-white hover:bg-white/10"                    }`}                  >                    {filter}                  </button>                ))}              </div>            </div>          )}        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
          {activeCategory !== "Tümü" && (
            <button
              type="button"
              onClick={() => changeCategory("Tümü")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black"
            >
              {activeCategory}
              <span aria-hidden="true">×</span>
            </button>
          )}

          <p className="text-sm text-white/70">
            {activeCategory === "Tümü"
              ? `${filteredProducts.length} ürün gösteriliyor`
              : `${activeCategory} kategorisinde ${filteredProducts.length} ürün gösteriliyor`}
          </p>
        </div>
      </section>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-lg font-bold text-white">
            Ürün bulunamadı
          </h2>

          <p className="mt-2 text-sm text-white/70">
            Arama kelimenizi veya seçili kategoriyi değiştirerek tekrar deneyin.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black"
          >
            Filtreleri Temizle
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/urunler/${product.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold text-gray-600">
                  {product.category}
                </div>

                <h2 className="mt-1 text-lg font-bold text-gray-900">
                  {product.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm text-gray-700">
                  {product.shortDesc}
                </p>

                {product.price && (
                  <div className="mt-3">
                    <div className="text-base font-bold text-gray-900">
                      {product.price.toLocaleString("tr-TR")} TL + KDV
                    </div>

                    <div className="mt-1 text-xs font-medium text-green-600">
                      Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
                    </div>
                  </div>
                )}

                <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                  Hızlı Teklif
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}