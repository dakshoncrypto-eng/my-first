import Link from 'next/link'
import { AlertTriangle, Clock, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { EmailCapture } from './EmailCapture'

interface ArticleLayoutProps {
  title: string
  description: string
  category: string
  readTime: string
  lastUpdated: string
  children: React.ReactNode
}

export function ArticleLayout({
  title,
  description,
  category,
  readTime,
  lastUpdated,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Article Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/learn"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Learn
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="text-sm text-gray-500 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {readTime} read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h1>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
          <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Article Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-6 disclaimer-banner rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-amber-800">Educational Content Only</p>
              <p className="mt-1 text-amber-700">
                This article is for educational purposes only. It is not medical advice and should
                not be used to make health decisions. See our{' '}
                <Link href="/disclaimer" className="underline hover:text-amber-900">
                  full disclaimer
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
          <div className="prose prose-gray max-w-none">{children}</div>
        </div>

        {/* Article Footer */}
        <div className="mt-8 p-6 bg-primary-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
            Want deeper analysis?
          </h3>
          <p className="mt-2 text-gray-600">
            Our paid toolkit includes detailed comparison frameworks, evidence tracking, and
            decision support tools.
          </p>
          <Link href="/tools" className="btn-primary mt-4 inline-flex">
            Explore Toolkit
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>

        {/* Email Capture */}
        <div className="mt-8">
          <EmailCapture variant="inline" source="article" />
        </div>
      </article>
    </div>
  )
}
