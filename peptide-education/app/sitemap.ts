import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://peptideclarity.in'

  // Static pages
  const staticPages = [
    '',
    '/learn',
    '/tools',
    '/preview',
    '/disclaimer',
    '/terms',
    '/privacy',
  ]

  // Article pages (cornerstone content - highest priority)
  const articles = [
    '/learn/bpc-157-legal-india',
    '/learn/peptides-vs-supplements-regulation-india',
    '/learn/bpc-157-human-vs-animal-studies',
    '/learn/research-use-only-meaning',
    '/learn/how-to-evaluate-peptide-claims',
    '/learn/tb500-vs-bpc157-india',
    '/learn/peptide-quality-testing-india',
    '/learn/ghk-cu-copper-peptide-evidence',
  ]

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const articleEntries = articles.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for SEO cornerstone content
  }))

  return [...staticEntries, ...articleEntries]
}
