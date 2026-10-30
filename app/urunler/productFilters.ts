type Product = {
  title: string;
  shortDesc: string;
  longDesc?: string;
  category: string;
};

export const categorySubfilters: Record<string, string[]> = {
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
  Termos: ["Tümü", "500 ml", "Büyük Hacim", "Dijital Göstergeli", "Çelik"],
  "USB Bellek": ["Tümü", "Metal", "Ahşap", "Deri", "Kart USB", "Özel Tasarım", "USB 3.0"],
  "VIP Ürünler": ["Tümü", "Defter & Kalem", "Teknoloji Setleri", "Termoslu Setler", "Anahtarlıklı", "Premium & Lüks", "Set Kutuları"],
};

export function normalizeText(value: string) {
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
}

export function matchesSubfilter(product: Product, filter: string) {
  if (filter === "Tümü") return true;

  const text = normalizeText(
    `${product.title} ${product.shortDesc} ${product.longDesc || ""}`
  );

  const key = normalizeText(filter);

  if (product.category === "Duvar Saatleri") {
    if (filter === "30 cm ve Altı") {
      return [...text.matchAll(/\b(\d+(?:[.,]\d+)?)\s*cm\b/g)]
        .some((match) => Number(match[1].replace(",", ".")) <= 30);
    }

    if (filter === "35 cm") {
      return /35\s*cm/.test(text);
    }

    if (filter === "40 cm ve Üzeri") {
      return [...text.matchAll(/\b(\d+(?:[.,]\d+)?)\s*cm\b/g)]
        .some((match) => Number(match[1].replace(",", ".")) >= 40);
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
