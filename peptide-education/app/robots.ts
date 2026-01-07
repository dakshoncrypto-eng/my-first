import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://peptideclarity.in'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/toolkit/'], // Protect API routes and gated content
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
