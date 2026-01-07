'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FlaskConical,
  Lock,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react'
import { previewPeptides, PeptideData } from '@/lib/peptideData'
import { EvidenceTier, EvidenceTierLegend } from '@/components/EvidenceTier'
import { RegulatoryStatus } from '@/components/RegulatoryStatus'

function PeptideCard({ peptide, isExpanded, onToggle }: {
  peptide: PeptideData
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Card Header */}
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

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          {/* Mechanism */}
          <div className="mt-4">
            <h4 className="font-medium text-gray-900 mb-2">Mechanism of Action</h4>
            <p className="text-gray-600 text-sm">{peptide.mechanism.summary}</p>
          </div>

          {/* Evidence Summary */}
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

          {/* Regulatory Status */}
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

          {/* Risk Signals */}
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

          {/* Common Claims */}
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

          {/* Sources */}
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

export default function PreviewPage() {
  const [expandedPeptide, setExpandedPeptide] = useState<string | null>(previewPeptides[0]?.id || null)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3">
            <FlaskConical className="h-10 w-10 text-primary-600" />
            <h1 className="text-3xl font-bold text-gray-900">Preview Tool</h1>
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our peptide comparison framework with 3 sample peptides.
            See how we structure evidence, regulatory status, and risk signals.
          </p>
          <div className="mt-4 inline-flex items-center text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-full">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Free preview — limited to 3 peptides
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {previewPeptides.map((peptide) => (
              <PeptideCard
                key={peptide.id}
                peptide={peptide}
                isExpanded={expandedPeptide === peptide.id}
                onToggle={() => setExpandedPeptide(
                  expandedPeptide === peptide.id ? null : peptide.id
                )}
              />
            ))}

            {/* Locked Content Teaser */}
            <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
              <Lock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">
                10+ more peptides in the full toolkit
              </h3>
              <p className="mt-2 text-gray-500 max-w-md mx-auto">
                Including CJC-1295, GHRP-6, Sermorelin, GHK-Cu, Melanotan II, and more.
                Plus advanced comparison matrices and decision tools.
              </p>
              <Link href="/tools" className="btn-primary mt-6 inline-flex">
                Unlock Full Toolkit — ₹999
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Evidence Tier Legend */}
            <EvidenceTierLegend />

            {/* How to Use */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">How to Use This Tool</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Click any peptide to expand detailed information
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Check evidence tiers to understand data quality
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Review regulatory status for India specifically
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  Note risk signals before any decisions
                </li>
              </ul>
            </div>

            {/* Upgrade CTA */}
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 className="font-semibold text-gray-900">Get the Full Toolkit</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>✓ 10+ peptides with full analysis</li>
                <li>✓ Side-by-side comparison matrix</li>
                <li>✓ Decision support flowcharts</li>
                <li>✓ All future updates included</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">₹999</span>
                <span className="text-gray-500 ml-1">one-time</span>
              </div>
              <Link href="/tools" className="btn-primary w-full mt-4">
                Get Toolkit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
