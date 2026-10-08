import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

/**
 * His current Wix site returns 404 for /sitemap.xml, so search engines have
 * nothing to crawl. This fixes that.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/murals', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
