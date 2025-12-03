import { siteConfig } from '@/lib/config';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;
  // const blogRoutes = allBlogs
  //   .filter((post) => !post.draft)
  //   .map((post) => ({
  //     url: `${siteUrl}/${post.path}`,
  //     lastModified: post.lastmod || post.date,
  //   }));

  const routes = ['', 'about', 'docs'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
