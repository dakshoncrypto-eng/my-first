import Link from 'next/link'
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react'

const articles = [
  {
    slug: 'bpc-157-legal-india',
    title: 'Is BPC-157 Legal in India? A Clear Breakdown',
    description: 'Understand the regulatory status of BPC-157 in India, including CDSCO position, customs implications, and what "research use only" actually means.',
    category: 'Regulatory',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'peptides-vs-supplements-regulation-india',
    title: 'Peptides vs Supplements: How India Regulates Them Differently',
    description: 'A clear framework for understanding how FSSAI, CDSCO, and customs treat different categories of compounds in India.',
    category: 'Regulatory',
    readTime: '7 min',
    featured: true,
  },
  {
    slug: 'bpc-157-human-vs-animal-studies',
    title: 'BPC-157: Human Studies vs Animal Studies — What We Actually Know',
    description: 'An honest breakdown of the evidence quality for BPC-157, distinguishing what we know from what we speculate.',
    category: 'Evidence',
    readTime: '10 min',
    featured: true,
  },
  {
    slug: 'research-use-only-meaning',
    title: 'What Does "Research Use Only" Actually Mean?',
    description: 'Decoding the legal fiction behind research chemical labeling and what it implies for buyers in India.',
    category: 'Regulatory',
    readTime: '5 min',
    featured: false,
  },
  {
    slug: 'how-to-evaluate-peptide-claims',
    title: 'How to Evaluate Peptide Claims: A Critical Thinking Framework',
    description: 'A practical framework for assessing peptide claims, identifying red flags, and understanding evidence tiers.',
    category: 'Framework',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'tb500-vs-bpc157-india',
    title: 'TB-500 vs BPC-157: A Detailed Comparison',
    description: 'Compare mechanisms, evidence quality, and regulatory status of two popular healing peptides in the Indian context.',
    category: 'Comparison',
    readTime: '10 min',
    featured: true,
  },
  {
    slug: 'peptide-quality-testing-india',
    title: 'Peptide Quality Testing in India: What You Need to Know',
    description: 'Understand peptide purity testing options in India, how to interpret test results, and red flags to watch for.',
    category: 'Quality',
    readTime: '9 min',
    featured: false,
  },
  {
    slug: 'ghk-cu-copper-peptide-evidence',
    title: 'GHK-Cu (Copper Peptide): An Evidence Review',
    description: 'Evaluating the scientific evidence behind GHK-Cu claims for skin, hair, and healing — with India-specific context.',
    category: 'Evidence',
    readTime: '11 min',
    featured: true,
  },
]

export default function LearnPage() {
  const featuredArticles = articles.filter((a) => a.featured)
  const otherArticles = articles.filter((a) => !a.featured)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Learn</h1>
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Evidence-based articles on peptide mechanisms, evidence quality, and India-specific regulatory context.
            Every claim is sourced. Uncertainty is clearly labeled.
          </p>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/learn/${article.slug}`}
              className="card-hover group"
            >
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {article.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                Read article
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Other Articles */}
        {otherArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">More Articles</h2>
            <div className="space-y-4">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/learn/${article.slug}`}
                  className="card-hover flex items-center justify-between group"
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toolkit CTA */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Want deeper analysis and comparison tools?
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Our paid toolkit includes peptide comparison frameworks, evidence tracking,
              regulatory dashboards, and decision support tools.
            </p>
            <div className="mt-6">
              <Link href="/tools" className="btn-primary">
                Explore Toolkit
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
