import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
