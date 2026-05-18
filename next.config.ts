import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;