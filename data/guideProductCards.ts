import type { Product } from "@/data/products";
import { visibleProducts } from "@/data/productVisibility";

type ProductGroup = {
  category: Product["category"];
  terms?: string[];
  allTerms?: string[];
  excludeTerms?: string[];
  calculator?: boolean;
};
type GuideProductConfig = {
  title: string;
  categoryHref: string;
  groups: ProductGroup[];
};

export const guideProductConfigs: Record<string, GuideProductConfig> = {
  "promosyon-defter-fiyatlari-nasil-hesaplanir": {
  "title": "Fiyat ve Özelliklerini Karşılaştırabileceğiniz Defterler",
  "categoryHref": "/promosyon-defter",
  "groups": [
    {
      "category": "Tarihsiz Defter"
    }
  ]
},
  "promosyon-tisort-secim-ve-baski-rehberi": {
  "title": "Bisiklet ve Polo Yaka Tişört Modellerini İnceleyin",
  "categoryHref": "/promosyon-tisort",
  "groups": [
    {
      "category": "Promosyon Tişört"
    }
  ]
},
  "en-ucuz-promosyon-kalem": {
    "title": "Kalem Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem"
      }
    ]
  },
  "kurumsal-kalem": {
    "title": "Kalem Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem"
      }
    ]
  },
  "reklam-kalemleri": {
    "title": "Kalem Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem"
      }
    ]
  },
  "promosyon-kalem-fiyatlari-nasil-hesaplanir": {
    "title": "Kalem Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem"
      }
    ]
  },
  "promosyon-kalemlerde-baski-turleri-nelerdir": {
    "title": "Kalem Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem"
      }
    ]
  },
  "promosyon-kalem-nedir": {
    "title": "Kalem Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem"
      }
    ]
  },
  "promosyon-kalem-secerken-nelere-dikkat-edilmeli": {
    "title": "Kalem Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem"
      }
    ]
  },
  "promosyon-kalem-toptan": {
    "title": "Kalem Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem"
      }
    ]
  },
  "promosyon-anahtarlik-alirken-dikkat-edilmesi-gereken-10-kritik-nokta": {
    "title": "Anahtarlık Modellerini İnceleyin",
    "categoryHref": "/promosyon-anahtarlik",
    "groups": [
      {
        "category": "Anahtarlık"
      }
    ]
  },
  "promosyon-anahtarlik-fiyatlari": {
    "title": "Anahtarlık Modellerini İnceleyin",
    "categoryHref": "/promosyon-anahtarlik",
    "groups": [
      {
        "category": "Anahtarlık"
      }
    ]
  },
  "promosyon-anahtarlik-nedir": {
    "title": "Anahtarlık Modellerini İnceleyin",
    "categoryHref": "/promosyon-anahtarlik",
    "groups": [
      {
        "category": "Anahtarlık"
      }
    ]
  },
  "promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta": {
    "title": "Çakmak Modellerini İnceleyin",
    "categoryHref": "/promosyon-cakmak",
    "groups": [
      {
        "category": "Çakmak"
      }
    ]
  },
  "promosyon-cakmak-fiyatlari": {
    "title": "Çakmak Modellerini İnceleyin",
    "categoryHref": "/promosyon-cakmak",
    "groups": [
      {
        "category": "Çakmak"
      }
    ]
  },
  "promosyon-cakmak-kullanim-alanlari": {
    "title": "Çakmak Modellerini İnceleyin",
    "categoryHref": "/promosyon-cakmak",
    "groups": [
      {
        "category": "Çakmak"
      }
    ]
  },
  "promosyon-cakmak-nedir": {
    "title": "Çakmak Modellerini İnceleyin",
    "categoryHref": "/promosyon-cakmak",
    "groups": [
      {
        "category": "Çakmak"
      }
    ]
  },
  "promosyon-bayrak-secim-ve-baski-rehberi": {
    "title": "Bayraklar Modellerini İnceleyin",
    "categoryHref": "/promosyon-bayraklar",
    "groups": [
      {
        "category": "Bayraklar"
      }
    ]
  },
  "promosyon-caki-ve-fener-secim-rehberi": {
    "title": "Çakı, Fener ve Tornavida Seti Modellerini İnceleyin",
    "categoryHref": "/promosyon-caki-fener-tornavida-seti",
    "groups": [
      {
        "category": "Çakı, Fener ve Tornavida Seti"
      }
    ]
  },
  "promosyon-cep-aynasi-ve-aynali-set-secim-rehberi": {
    "title": "Ayna ve Deri Kartlıklar Modellerini İnceleyin",
    "categoryHref": "/promosyon-ayna-deri-kartliklar",
    "groups": [
      {
        "category": "Ayna ve Deri Kartlıklar"
      }
    ]
  },
  "promosyon-duvar-saati-secim-ve-baski-rehberi": {
    "title": "Duvar Saatleri Modellerini İnceleyin",
    "categoryHref": "/promosyon-duvar-saatleri",
    "groups": [
      {
        "category": "Duvar Saatleri"
      }
    ]
  },
  "promosyon-hesap-makinesi-secim-ve-baski-rehberi": {
    "title": "Hesap Makineleri Modellerini İnceleyin",
    "categoryHref": "/promosyon-hesap-makineleri",
    "groups": [
      {
        "category": "Hesap Makineleri"
      }
    ]
  },
  "promosyon-kalem-seti-secim-ve-baski-rehberi": {
    "title": "Kalem Setleri Modellerini İnceleyin",
    "categoryHref": "/promosyon-kalem-setleri",
    "groups": [
      {
        "category": "Kalem Setleri"
      }
    ]
  },
  "promosyon-karton-canta-secim-ve-baski-rehberi": {
    "title": "Karton Çantalar Modellerini İnceleyin",
    "categoryHref": "/promosyon-karton-cantalar",
    "groups": [
      {
        "category": "Karton Çantalar"
      }
    ]
  },
  "promosyon-kartvizitlik-secim-ve-baski-rehberi": {
    "title": "Kartvizitlik Modellerini İnceleyin",
    "categoryHref": "/promosyon-kartvizitlik",
    "groups": [
      {
        "category": "Kartvizitlik"
      }
    ]
  },
  "promosyon-kirtasiye-urunleri-secim-ve-baski-rehberi": {
    "title": "Kırtasiye Ürünleri Modellerini İnceleyin",
    "categoryHref": "/promosyon-kirtasiye-urunleri",
    "groups": [
      {
        "category": "Kırtasiye Ürünleri"
      }
    ]
  },
  "promosyon-matara-secim-ve-baski-rehberi": {
    "title": "Matara Modellerini İnceleyin",
    "categoryHref": "/promosyon-matara",
    "groups": [
      {
        "category": "Matara"
      }
    ]
  },
  "promosyon-powerbank-secim-rehberi": {
    "title": "Powerbank Modellerini İnceleyin",
    "categoryHref": "/promosyon-powerbank",
    "groups": [
      {
        "category": "Powerbank"
      }
    ]
  },
  "promosyon-sapka-rehberi": {
    "title": "Promosyon Şapka Modellerini İnceleyin",
    "categoryHref": "/promosyon-sapka",
    "groups": [
      {
        "category": "Promosyon Şapka"
      }
    ]
  },
  "promosyon-sekreterlik-evrak-cantasi-secim-rehberi": {
    "title": "Sekreterlikler ve Evrak Çantaları Modellerini İnceleyin",
    "categoryHref": "/promosyon-sekreterlikler-ve-evrak-cantalari",
    "groups": [
      {
        "category": "Sekreterlikler ve Evrak Çantaları"
      }
    ]
  },
  "promosyon-usb-bellek-secim-rehberi": {
    "title": "USB Bellek Modellerini İnceleyin",
    "categoryHref": "/promosyon-usb-bellek",
    "groups": [
      {
        "category": "USB Bellek"
      }
    ]
  },
  "promosyon-yapiskanli-notluk-secim-ve-baski-rehberi": {
    "title": "Yapışkanlı Notluklar Modellerini İnceleyin",
    "categoryHref": "/promosyon-yapiskanli-notluklar",
    "groups": [
      {
        "category": "Yapışkanlı Notluklar"
      }
    ]
  },
  "promosyon-yoyo-boyun-aski-ipi-secim-ve-baski-rehberi": {
    "title": "Yoyo ve Boyun Askı İpleri Modellerini İnceleyin",
    "categoryHref": "/promosyon-yoyo-ve-boyun-aski-ipleri",
    "groups": [
      {
        "category": "Yoyo ve Boyun Askı İpleri"
      }
    ]
  },
  "promosyon-kupa-baski": {
    "title": "Kupa Modellerini İnceleyin",
    "categoryHref": "/promosyon-kupa",
    "groups": [
      {
        "category": "Kupa"
      }
    ]
  },
  "kurumsal-hediye-seti-secim-rehberi": {
    "title": "Kurumsal Hediye Seti Örnekleri",
    "categoryHref": "/promosyon-vip-urunler",
    "groups": [
      {
        "category": "VIP Ürünler"
      },
      {
        "category": "Kalem Setleri"
      }
    ]
  },
  "plastik-kalem-mi-metal-kalem-mi-daha-mantikli": {
    "title": "Plastik ve Metal Kalem Örnekleri",
    "categoryHref": "/promosyon-kalem",
    "groups": [
      {
        "category": "Kalem",
        "terms": [
          "plastik"
        ]
      },
      {
        "category": "Kalem",
        "terms": [
          "metal"
        ]
      }
    ]
  },
  "promosyon-acacak-secim-ve-baski-rehberi": {
    "title": "Açacak ve Açacaklı Anahtarlık Örnekleri",
    "categoryHref": "/promosyon-acacak",
    "groups": [
      {
        "category": "İmalat Ürünler",
        "terms": [
          "acacak"
        ]
      },
      {
        "category": "Anahtarlık",
        "terms": [
          "acacak"
        ]
      }
    ]
  },
  "promosyon-bardak-altligi-secim-ve-baski-rehberi": {
    "title": "Bardak Altlığı Modellerini İnceleyin",
    "categoryHref": "/promosyon-bardak-altligi",
    "groups": [
      {
        "category": "İmalat Ürünler",
        "terms": [
          "bardak alt"
        ]
      }
    ]
  },
  "promosyon-bloknot-kup-bloknot-secim-ve-baski-rehberi": {
    "title": "Bloknot ve Küp Bloknot Örnekleri",
    "categoryHref": "/promosyon-bloknot",
    "groups": [
      {
        "category": "Matbaa Ürünleri",
        "terms": [
          "bloknot"
        ],
        "excludeTerms": [
          "kup"
        ]
      },
      {
        "category": "Matbaa Ürünleri",
        "terms": [
          "kup bloknot"
        ]
      }
    ]
  },
  "promosyon-cakmak-mi-kalem-mi-en-dogru-promosyon-urunu-secimi": {
    "title": "Kalem ve Çakmak Modellerini Karşılaştırın",
    "categoryHref": "/urunler",
    "groups": [
      {
        "category": "Kalem"
      },
      {
        "category": "Çakmak"
      }
    ]
  },
  "promosyon-defter-ajanda-secim-rehberi": {
    "title": "Defter ve Ajanda Örnekleri",
    "categoryHref": "/promosyon-defter",
    "groups": [
      {
        "category": "Tarihsiz Defter"
      },
      {
        "category": "Ajanda"
      }
    ]
  },
  "promosyon-gemici-takvimi-secim-rehberi": {
    "title": "Gemici Takvimi Modellerini İnceleyin",
    "categoryHref": "/promosyon-gemici-takvimi",
    "groups": [
      {
        "category": "Takvimler",
        "terms": [
          "gemici"
        ]
      }
    ]
  },
  "promosyon-hesap-makineli-organizer-secim-rehberi": {
    "title": "Hesap Makineli Organizer Örnekleri",
    "categoryHref": "/promosyon-hesap-makineli-organizer",
    "groups": [
      {
        "category": "Organizerler",
        "calculator": true
      }
    ]
  },
  "promosyon-hoparlor-secim-rehberi": {
    "title": "Hoparlör Modellerini İnceleyin",
    "categoryHref": "/promosyon-hoparlor",
    "groups": [
      {
        "category": "Teknolojik Ürünler",
        "terms": [
          "hoparlor"
        ]
      }
    ]
  },
  "promosyon-kablosuz-sarj-cihazi-secim-rehberi": {
    "title": "Kablosuz Şarj Ürünü Örnekleri",
    "categoryHref": "/promosyon-kablosuz-sarj-cihazi",
    "groups": [
      {
        "category": "Teknolojik Ürünler",
        "terms": [
          "wireless",
          "kablosuz"
        ],
        "allTerms": [
          "sarj"
        ]
      }
    ]
  },
  "promosyon-masaustu-urunleri-ve-sumen-secim-rehberi": {
    "title": "Masaüstü Ürünleri ve Sümen Örnekleri",
    "categoryHref": "/promosyon-ahsap-ve-deri-masaustu-urunler",
    "groups": [
      {
        "category": "Ahşap ve Deri Masaüstü Ürünler"
      },
      {
        "category": "Masa Sümeni"
      }
    ]
  },
  "promosyon-mouse-pad-secim-ve-baski-rehberi": {
    "title": "Mouse Pad Modellerini İnceleyin",
    "categoryHref": "/promosyon-mouse-pad",
    "groups": [
      {
        "category": "İmalat Ürünler",
        "terms": [
          "mouse pad",
          "mousepad"
        ]
      }
    ]
  },
  "promosyon-oto-kokusu-secim-ve-baski-rehberi": {
    "title": "Oto Kokusu Modelini İnceleyin",
    "categoryHref": "/promosyon-oto-kokusu",
    "groups": [
      {
        "category": "İmalat Ürünler",
        "terms": [
          "oto kokusu"
        ]
      }
    ]
  },
  "promosyon-rubber-kalem": {
    "title": "Rubber Kalem Örnekleri",
    "categoryHref": "/promosyon-rubber-kalem",
    "groups": [
      {
        "category": "Kalem",
        "terms": [
          "rubber"
        ]
      }
    ]
  },
  "promosyon-sarj-kablosu-secim-rehberi": {
    "title": "Şarj Kablosu ve Çoklayıcı Örnekleri",
    "categoryHref": "/promosyon-sarj-kablosu",
    "groups": [
      {
        "category": "Teknolojik Ürünler",
        "terms": [
          "kablo"
        ]
      }
    ]
  },
  "promosyon-semsiye-secim-ve-baski-rehberi": {
    "title": "Şemsiye Modellerini İnceleyin",
    "categoryHref": "/promosyon-semsiye",
    "groups": [
      {
        "category": "İmalat Ürünler",
        "terms": [
          "semsiye"
        ]
      }
    ]
  },
  "promosyon-spiralli-notluk-secim-ve-baski-rehberi": {
    "title": "Spiralli Notluk Örnekleri",
    "categoryHref": "/promosyon-spiralli-notluk",
    "groups": [
      {
        "category": "Geri Dönüşümlü Ürünler",
        "terms": [
          "spiral"
        ]
      }
    ]
  },
  "promosyon-tasli-cakmak-nedir": {
    "title": "Taşlı Çakmak Örnekleri",
    "categoryHref": "/promosyon-tasli-cakmak",
    "groups": [
      {
        "category": "Çakmak",
        "terms": [
          "tasli"
        ]
      }
    ]
  },
  "promosyon-telefon-tutucu-secim-rehberi": {
    "title": "Telefon Tutucu ve Standı Örnekleri",
    "categoryHref": "/promosyon-telefon-tutucu",
    "groups": [
      {
        "category": "Teknolojik Ürünler",
        "terms": [
          "telefon tutucu",
          "telefon stand"
        ]
      },
      {
        "category": "Geri Dönüşümlü Ürünler",
        "terms": [
          "telefon tutucu",
          "telefon stand"
        ]
      }
    ]
  },
  "promosyon-urunleri-secim-rehberi": {
    "title": "Farklı Promosyon Ürünlerini İnceleyin",
    "categoryHref": "/urunler",
    "groups": [
      {
        "category": "Kalem"
      },
      {
        "category": "Termos"
      },
      {
        "category": "Tarihsiz Defter"
      },
      {
        "category": "Anahtarlık"
      }
    ]
  },
  "dtf-baski-nedir": {
    "title": "Tekstil Baskısı İçin İncelenebilecek Ürünler",
    "categoryHref": "/promosyon-tisort",
    "groups": [
      {
        "category": "Promosyon Tişört"
      },
      {
        "category": "Ham Bez & Tela Çanta",
        "terms": [
          "ham bez"
        ]
      }
    ]
  }
};

function normalize(text: string): string {
  return text.toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, " ").trim();
}

function matches(product: Product, group: ProductGroup): boolean {
  if (product.category !== group.category) return false;
  const title = normalize(product.title);
  if (group.terms?.length && !group.terms.some((term) => title.includes(normalize(term)))) return false;
  if (group.allTerms?.some((term) => !title.includes(normalize(term)))) return false;
  if (group.excludeTerms?.some((term) => title.includes(normalize(term)))) return false;
  if (group.calculator && product.hasCalculator !== true && !title.includes("hesap makineli")) return false;
  return true;
}

export function selectGuideProducts(
  guideSlug: string,
  catalogue: Product[] = visibleProducts
): Product[] {
  const config = guideProductConfigs[guideSlug];
  if (!config) return [];
  const available = catalogue.filter(
    (product) => product.availability !== "https://schema.org/OutOfStock"
  );
  const pools = config.groups.map((group) => available.filter((product) => matches(product, group)));
  const selected: Product[] = [];
  const seen = new Set<string>();
  // Alternate between relevant groups, without padding with unrelated products.
  while (selected.length < 4) {
    let added = false;
    for (const pool of pools) {
      while (pool.length && seen.has(pool[0].slug)) pool.shift();
      const product = pool.shift();
      if (product) {
        seen.add(product.slug);
        selected.push(product);
        added = true;
      }
      if (selected.length === 4) break;
    }
    if (!added) break;
  }
  return selected;
}
