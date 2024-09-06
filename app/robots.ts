import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/clients/',
    },
    sitemap: 'https://big-pixel.com/sitemap.xml',
  }
}