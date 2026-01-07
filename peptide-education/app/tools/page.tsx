'use client'

import Link from 'next/link'
import {
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Scale,
  FileSearch,
  Brain,
  Sparkles,
  Shield
} from 'lucide-react'
import { CheckoutButton } from '@/components/CheckoutButton'

const toolkitFeatures = [
  {
    icon: BarChart3,
    title: 'Peptide Comparison Matrix',
    description: 'Side-by-side comparison of mechanisms, evidence strength, and risk signals across peptides.',
  },
  {
    icon: FileSearch,
    title: 'Evidence Tracker',
    description: 'Detailed breakdown of human vs. animal studies with clear uncertainty labeling for each compound.',
  },
  {
    icon: Scale,
    title: 'Regulatory Status Dashboard',
    description: 'India-specific regulatory status including CDSCO position, customs risk, and WADA status.',
  },
  {
    icon: Brain,
    title: 'Decision Flowchart',
    description: 'Interactive framework to help you think through what you want to understand about any peptide.',
  },
  {
    icon: Shield,
    title: 'Risk Signal Checklist',
    description: 'Standardized framework for identifying red flags and knowledge gaps.',
  },
  {
    icon: Sparkles,
    title: 'Regular Updates',
    description: 'Evidence summaries updated as new research emerges.',
  },
]

const includedItems = [
  '10+ peptides covered with detailed analysis',
  'Evidence tier ratings for all claims',
  'India-specific regulatory context',
  'Interactive comparison tools',
  'Downloadable reference materials',
  'All future updates included',
]

const notIncluded = [
  'Dosage or administration guidance',
  'Sourcing or supplier information',
  'Personal protocols or recommendations',
  'Medical advice of any kind',
]

export default function ToolsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3">
            <FlaskConical className="h-10 w-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Peptide Clarity Toolkit</h1>
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            One clear reference instead of hours of conflicting research.
            Decision frameworks and comparison tools, not protocols or recommendations.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What&apos;s Inside</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolkitFeatures.map((feature) => (
            <div key={feature.title} className="card">
              <feature.icon className="h-8 w-8 text-primary-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <div className="card border-2 border-primary-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  LIFETIME ACCESS
                </span>
              </div>

              <div className="text-center pt-4">
                <h3 className="text-2xl font-bold text-gray-900">Full Toolkit</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">₹999</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Pay once, access forever. All updates included.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-3">Included:</h4>
                <ul className="space-y-2">
                  {includedItems.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Not included (by design):</h4>
                <ul className="space-y-2">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <span className="text-red-500 mr-2 font-bold">✕</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <CheckoutButton
                  amount={999}
                  productName="Peptide Clarity Toolkit"
                  onSuccess={(access) => {
                    console.log('Purchase successful:', access)
                  }}
                  onError={(error) => {
                    console.error('Purchase failed:', error)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Try Before You Buy */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Not sure yet? Try the preview.</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Our free preview tool gives you a taste of the comparison framework with limited peptides.
            See the quality before you commit.
          </p>
          <div className="mt-6">
            <Link href="/preview" className="btn-secondary">
              Try Preview Tool
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Common Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">What exactly am I paying for?</h3>
              <p className="mt-2 text-gray-600">
                You&apos;re paying for structured clarity — organization, decision frameworks, and
                evidence synthesis that saves you hours of research. Not information (that&apos;s freely
                available), but the work of making sense of it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Why no dosage guidance?</h3>
              <p className="mt-2 text-gray-600">
                This is a deliberate choice. We&apos;re an educational resource, not a protocol source.
                Providing dosage guidance would cross into territory we believe requires medical
                supervision, not a website.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Is this updated over time?</h3>
              <p className="mt-2 text-gray-600">
                Yes. As new research emerges, we update the evidence summaries and regulatory
                information. Your one-time purchase includes all future updates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Can I get a refund?</h3>
              <p className="mt-2 text-gray-600">
                If the toolkit doesn&apos;t meet your expectations, contact us within 7 days for a
                full refund. We&apos;d rather you be satisfied than stuck with something you don&apos;t value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
