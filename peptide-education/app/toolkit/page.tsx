'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  FlaskConical,
  Lock,
  CheckCircle2,
  BarChart3,
  FileSearch,
  Scale,
  Brain,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react'
import { allPeptides, PeptideData } from '@/lib/peptideData'
import { EvidenceTier, EvidenceTierLegend } from '@/components/EvidenceTier'
import { RegulatoryStatus } from '@/components/RegulatoryStatus'

function PeptideCard({ peptide, isExpanded, onToggle }: {
  peptide: PeptideData
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 text-left">{peptide.name}</h3>
            <p className="text-sm text-gray-500">{peptide.category}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <EvidenceTier tier={peptide.evidence.tier} />
          <RegulatoryStatus status={peptide.regulatory.india} jurisdiction="India" />
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">Mechanism of Action</h4>
            <p className="text-gray-600 text-sm">{peptide.mechanism.summary}</p>
            {peptide.mechanism.detailed && (
              <p className="text-gray-600 text-sm mt-2">{peptide.mechanism.detailed}</p>
            )}
          </div>

          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">Evidence Summary</h4>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">{peptide.evidence.summary}</p>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-500 uppercase mb-1">Human Studies</p>
                <p className="text-sm text-gray-700">{peptide.evidence.humanStudies}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-500 uppercase mb-1">Animal Studies</p>
                <p className="text-sm text-gray-700">{peptide.evidence.animalStudies}</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">Regulatory Status</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <RegulatoryStatus status={peptide.regulatory.india} jurisdiction="India" />
                <RegulatoryStatus status={peptide.regulatory.us} jurisdiction="US" />
                <RegulatoryStatus status={peptide.regulatory.eu} jurisdiction="EU" />
                <RegulatoryStatus status={peptide.regulatory.wada} jurisdiction="WADA" />
              </div>
              <p className="text-sm text-gray-600">{peptide.regulatory.indiaDetails}</p>
              {peptide.regulatory.wadaDetails && (
                <p className="text-sm text-red-600 mt-2">
                  <AlertTriangle className="h-4 w-4 inline mr-1" />
                  {peptide.regulatory.wadaDetails}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">Risk Signals</h4>
            <ul className="space-y-1">
              {peptide.riskSignals.map((risk, index) => (
                <li key={index} className="flex items-start text-sm">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{risk}</span>
                </li>
              ))}
            </ul>
          </div>

          {peptide.commonClaims.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Common Claims Evaluated</h4>
              <div className="space-y-2">
                {peptide.commonClaims.map((claim, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-start justify-between">
                      <p className="font-medium text-gray-900 text-sm">{claim.claim}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        claim.evidenceSupport === 'strong' ? 'bg-green-100 text-green-700' :
                        claim.evidenceSupport === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                        claim.evidenceSupport === 'weak' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {claim.evidenceSupport} evidence
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{claim.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {peptide.sources.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Key Sources</h4>
              <ul className="space-y-1">
                {peptide.sources.map((source, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {source.title}
                    {source.url && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline ml-1"
                      >
                        <ExternalLink className="h-3 w-3 inline" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-4 text-xs text-gray-500">Last updated: {peptide.lastUpdated}</p>
        </div>
      )}
    </div>
  )
}

export default function ToolkitPage() {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)
  const [expandedPeptide, setExpandedPeptide] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'comparison' | 'evidence' | 'regulatory'>('comparison')

  useEffect(() => {
    // Check for access token in localStorage
    const accessData = localStorage.getItem('peptide_clarity_access')
    setHasAccess(!!accessData)
  }, [])

  // Loading state
  if (hasAccess === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FlaskConical className="h-12 w-12 text-primary-600 mx-auto animate-pulse" />
          <p className="mt-4 text-gray-600">Loading toolkit...</p>
        </div>
      </div>
    )
  }

  // No access - show upgrade prompt
  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
            <Lock className="h-8 w-8 text-gray-400" />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-gray-900">Toolkit Access Required</h1>
          <p className="mt-2 text-gray-600">
            You need to purchase the toolkit to access this page.
          </p>
          <div className="mt-6 space-y-3">
            <Link href="/tools" className="btn-primary w-full inline-flex justify-center">
              Get Toolkit — ₹999
            </Link>
            <Link href="/preview" className="btn-secondary w-full inline-flex justify-center">
              Try Free Preview First
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Has access - show full toolkit
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <FlaskConical className="h-8 w-8 text-primary-600" />
                <h1 className="text-2xl font-bold text-gray-900">Peptide Clarity Toolkit</h1>
              </div>
              <p className="mt-1 text-gray-600">Full access — lifetime updates included</p>
            </div>
            <div className="flex items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Access Granted
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-6 flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'comparison'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 className="h-4 w-4 inline mr-1.5" />
              Comparison
            </button>
            <button
              onClick={() => setActiveTab('evidence')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'evidence'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileSearch className="h-4 w-4 inline mr-1.5" />
              Evidence
            </button>
            <button
              onClick={() => setActiveTab('regulatory')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'regulatory'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Scale className="h-4 w-4 inline mr-1.5" />
              Regulatory
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {allPeptides.map((peptide) => (
              <PeptideCard
                key={peptide.id}
                peptide={peptide}
                isExpanded={expandedPeptide === peptide.id}
                onToggle={() => setExpandedPeptide(
                  expandedPeptide === peptide.id ? null : peptide.id
                )}
              />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <EvidenceTierLegend />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Reference</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Click any peptide to see full details
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Evidence tiers show data quality
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  All claims link to sources
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Updated as new research emerges
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="font-semibold text-amber-900 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Remember
              </h3>
              <p className="mt-2 text-sm text-amber-800">
                This toolkit provides educational information only. It is not medical advice
                and should not be used to make health decisions without consulting a qualified
                healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
