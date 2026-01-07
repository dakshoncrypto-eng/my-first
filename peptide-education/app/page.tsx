import Link from 'next/link'
import {
  FlaskConical,
  BookOpen,
  Shield,
  Scale,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  FileSearch,
  Microscope,
  Brain
} from 'lucide-react'
import { EmailCapture } from '@/components/EmailCapture'

const features = [
  {
    icon: FileSearch,
    title: 'Evidence-Based Analysis',
    description: 'Every claim is grounded in peer-reviewed research with clear uncertainty labeling.',
  },
  {
    icon: Scale,
    title: 'India Regulatory Context',
    description: 'Understand CDSCO, FSSAI, and customs implications specific to India.',
  },
  {
    icon: Brain,
    title: 'Decision Frameworks',
    description: 'Tools and frameworks to help you think clearly, not tell you what to do.',
  },
  {
    icon: Shield,
    title: 'Conservative Positioning',
    description: 'No dosage guidance, no sourcing, no protocols. Education only.',
  },
]

const whatYouGet = [
  'Clear explanation of peptide mechanisms of action',
  'Human vs. animal study evidence breakdown',
  'India-specific regulatory status for each compound',
  'Evidence tier ratings (robust → preliminary → animal-only)',
  'Risk signal identification framework',
  'Decision support tools (not recommendations)',
]

const whatWeRefuse = [
  'Dosage or administration guidance',
  'Sourcing or supplier information',
  'Personal protocols or recommendations',
  'Medical advice of any kind',
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Understand peptides{' '}
              <span className="text-primary-600">before you decide</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Clear, evidence-based peptide education for Indian fitness enthusiasts.
              No hype. No protocols. Just structured clarity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn" className="btn-primary text-lg px-8 py-3">
                <BookOpen className="h-5 w-5 mr-2" />
                Start Learning
              </Link>
              <Link href="/preview" className="btn-secondary text-lg px-8 py-3">
                <FlaskConical className="h-5 w-5 mr-2" />
                Try Preview Tool
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              The peptide information landscape is broken
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Influencers oversell. Forums speculate. Vendors market.
              Finding trustworthy, India-relevant information is nearly impossible.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Hype Everywhere</h3>
              <p className="mt-2 text-gray-600">
                Most content overstates benefits and ignores uncertainty in the evidence.
              </p>
            </div>
            <div className="card text-center">
              <Microscope className="h-10 w-10 text-amber-500 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Mixed Evidence</h3>
              <p className="mt-2 text-gray-600">
                Animal studies get presented as human proof. Speculation becomes fact.
              </p>
            </div>
            <div className="card text-center">
              <Scale className="h-10 w-10 text-amber-500 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">No India Context</h3>
              <p className="mt-2 text-gray-600">
                Most resources assume US/EU regulatory frameworks that don&apos;t apply here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Differently */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              What Peptide Clarity does differently
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re not here to sell you on peptides. We&apos;re here to help you think clearly.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-hover">
                <feature.icon className="h-8 w-8 text-primary-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get vs What We Refuse */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What You Get */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-2" />
                What you get
              </h2>
              <ul className="mt-6 space-y-3">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Refuse */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                What we refuse to provide
              </h2>
              <ul className="mt-6 space-y-3">
                {whatWeRefuse.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 font-bold">✕</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                This is intentional. We believe restraint is a trust signal in a space full of overclaiming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCapture source="homepage" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to understand peptides clearly?
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Start with our free educational articles or try the preview tool.
            When you&apos;re ready for deeper analysis, our full toolkit is available.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
            >
              Read Free Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-primary-500 transition-colors"
            >
              Explore Toolkit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
