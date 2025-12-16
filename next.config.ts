import type { NextConfig } from "next";
import { siteConfig } from './lib/config';

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: '/docs',
        destination: siteConfig.docsUrl,
        permanent: true,
      },
      {
        source: '/ico',
        destination: siteConfig.icoUrl,
        permanent: true,
      },
      {
        source: '/docs',
        destination: siteConfig.docsUrl,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
