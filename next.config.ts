import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {"source":"/urunler/promosyon-duvar-saati-37cm-aluminyum-kasa-ds-115","destination":"/urunler/promosyon-duvar-saati-ds-115-37cm","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-37cm-metal-kasa-ds-120","destination":"/urunler/promosyon-duvar-saati-ds-120-37cm","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-38cm-metal-kasa-ds-130","destination":"/urunler/promosyon-duvar-saati-ds-130-30cm-metal-kasa","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-35cm-plastik-kasa-ds-135","destination":"/urunler/promosyon-duvar-saati-ds-135-33cm-metal-kasa","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-35cm-plastik-kasa-ds-150","destination":"/urunler/promosyon-duvar-saati-ds-150-31cm-metal-kasa","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-35cm-plastik-kasa-ds-160","destination":"/urunler/promosyon-duvar-saati-ds-160-40cm-plastik-kasa","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-metal-kasa-ds-170","destination":"/urunler/promosyon-duvar-saati-ds-170-40cm-plastik-kasa","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-31-cm-metal-kasa-ds-230","destination":"/urunler/promosyon-duvar-saati-ds-230-35cm-abs-kasa","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-33-cm-metal-kasa-ds-240","destination":"/urunler/promosyon-duvar-saati-ds-240-35cm-abs-kasa","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-37-cm-aluminyum-kasa-ds-250","destination":"/urunler/promosyon-duvar-saati-ds-250-40cm-metalize-plastik","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-35-cm-plastik-kasa-metalize-ds-260","destination":"/urunler/promosyon-duvar-saati-ds-260-40cm-metalize-plastik","permanent":true},
      {"source":"/urunler/promosyon-duvar-saati-ds-340-35cm-bombe-cam","destination":"/urunler/promosyon-duvar-saati-ds-340-35cm-plastik-kasa","permanent":true},
      {"source":"/urunler/promosyon-organizer-org-200-kilifli-defter","destination":"/urunler/promosyon-organizer-defter-td-135","permanent":true},
      {"source":"/urunler/promosyon-organizer-org-110","destination":"/urunler/promosyon-organizer-defter-td-136","permanent":true},
      {"source":"/urunler/promosyon-tarihsiz-defter-14-5x21-td-116","destination":"/urunler/promosyon-tarihsiz-defter-15-5x21-5-td-116","permanent":true},
      {"source":"/urunler/promosyon-tarihsiz-defter-13x21-td-126","destination":"/urunler/promosyon-tarihsiz-defter-15x21-td-126","permanent":true},
      {"source":"/urunler/promosyon-powerbank-20000mah-led-fenerli-pb-140","destination":"/urunler/promosyon-powerbank-10000mah-pb-140","permanent":true},
      {"source":"/urunler/promosyon-powerbank-20000mah-pb-150","destination":"/urunler/promosyon-powerbank-10000mah-pb-150","permanent":true},
      {"source":"/urunler/promosyon-powerbank-5000mah-pb-270","destination":"/urunler/promosyon-powerbank-10000mah-pb-270","permanent":true},
      {"source":"/urunler/promosyon-powerbank-organizer-pb-370-6500mah-logolu","destination":"/urunler/promosyon-powerbank-organizer-pb-370-8000mah-logolu","permanent":true},
      {"source":"/urunler/promosyon-powerbank-organizer-pb-380-6000mah-logolu","destination":"/urunler/promosyon-powerbank-organizer-pb-380-6500mah-logolu","permanent":true},

      {"source":"/urunler/promosyon-kalem-usb-bellek-ub-290","destination":"/urunler/promosyon-kalem-usb-bellek-ub-200","permanent":true},
      {"source":"/urunler/promosyon-usb-bellek-ub-200","destination":"/urunler/promosyon-usb-bellek-ub-460","permanent":true},
      {"source":"/urunler/promosyon-usb-bellek-ub-300","destination":"/urunler/promosyon-metal-usb-bellek-ub-140","permanent":true},
      {"source":"/urunler/promosyon-usb-bellek-ub-320","destination":"/urunler/promosyon-anahtarlikli-usb-bellek-ub-170","permanent":true},
      {"source":"/urunler/promosyon-kutulu-vip-set-ub-330","destination":"/urunler/promosyon-kutulu-vip-set-ub-270","permanent":true},

      {
        source: "/urunler/promosyon-metal-kalem-mk-440",
        destination: "/urunler/promosyon-metal-kalem-mk-210",
        permanent: true,
      },
      {
        source: "/urunler/promosyon-metal-kalem-mk-500",
        destination: "/urunler/promosyon-metal-kalem-mk-360",
        permanent: true,
      },
      {
        source: "/urunler/promosyon-metal-kalem-mk-510",
        destination: "/urunler/promosyon-metal-kalem-mk-330",
        permanent: true,
      },
      {
        source: "/urunler/promosyon-kalem-rk-290-renkli-plastik",
        destination: "/urunler/promosyon-kalem-rk-290",
        permanent: true,
      },
      {
        source: "/promosyon-seramik-porselen-kupalar",
        destination: "/promosyon-kupa",
        permanent: true,
      },
      {
        source: "/urunler/promosyon-seramik-kupa-330ml-sk-100",
        destination: "/urunler/promosyon-porselen-kupa-330ml-pk-100",
        permanent: true,
      },
      {
        source: "/urunler/promosyon-powerbank-13000mah-pb-110",
        destination: "/urunler/promosyon-powerbank-20000mah-pb-110",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
