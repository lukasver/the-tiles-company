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
        source: '/token',
        destination: siteConfig.icoUrl,
        permanent: true,
      },
      {
        source: '/roadmap',
        destination: `${siteConfig.docsUrl}/07-roadmap`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
