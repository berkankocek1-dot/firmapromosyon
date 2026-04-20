import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/promosyon-seramik-porselen-kupalar',
        destination: '/promosyon-kupa',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;