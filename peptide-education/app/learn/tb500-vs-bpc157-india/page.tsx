import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/ArticleLayout'
import { SummaryBox, UncertaintyBox } from '@/components/SummaryBox'
import { EvidenceTier } from '@/components/EvidenceTier'
import { RegulatoryStatus } from '@/components/RegulatoryStatus'
import { Scale, Beaker, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TB-500 vs BPC-157: Comparison for Indian Users',
  description: 'Compare TB-500 and BPC-157 peptides: mechanisms, evidence quality, regulatory status in India, and key differences for informed decision-making.',
  keywords: ['TB-500', 'BPC-157', 'comparison', 'India', 'peptides', 'healing', 'thymosin beta-4'],
}

export default function TB500vsBPC157Page() {
  return (
    <ArticleLayout
      title="TB-500 vs BPC-157: A Detailed Comparison"
      description="Compare mechanisms, evidence quality, and regulatory status of two popular healing peptides in the Indian context."
      category="Comparison"
      readTime="10 min"
      lastUpdated="January 2026"
    >
      <SummaryBox
        title="Quick Comparison"
        type="info"
        points={[
          'Both are research peptides NOT approved for human use in India',
          'BPC-157: Gastric peptide, more gut/tendon research, oral bioavailability claims',
          'TB-500: Thymosin beta-4 fragment, more wound healing research, injectable only',
          'Evidence quality: Both primarily animal studies (Tier 4)',
          'Neither is scheduled under NDPS Act; both exist in regulatory gray zone',
        ]}
      />

      <h2 id="overview">What Are These Peptides?</h2>

      <h3>BPC-157 (Body Protection Compound-157)</h3>
      <p>
        BPC-157 is a synthetic peptide derived from a protein found in human gastric juice.
        It&apos;s a 15-amino acid sequence that doesn&apos;t exist in nature in this isolated form —
        it&apos;s created by extracting and synthesizing a specific portion of a larger protective protein.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-800">
          <strong>Origin:</strong> Derived from BPC (Body Protection Compound), a protein found in
          gastric juice. The &quot;157&quot; refers to the 15-amino acid sequence.
        </p>
      </div>

      <h3>TB-500 (Thymosin Beta-4 Fragment)</h3>
      <p>
        TB-500 is a synthetic version of a naturally occurring peptide called Thymosin Beta-4 (Tβ4).
        Thymosin Beta-4 is found throughout the body and plays roles in tissue repair, cell migration,
        and wound healing. TB-500 is the active region of this larger protein.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-800">
          <strong>Origin:</strong> Synthetic fragment of Thymosin Beta-4, a 43-amino acid protein
          involved in cell building and tissue repair.
        </p>
      </div>

      <h2 id="mechanisms">Proposed Mechanisms</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="border rounded-lg p-5">
          <h4 className="font-semibold text-gray-900 mb-3">BPC-157</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Promotes angiogenesis (blood vessel formation)</li>
            <li>• Modulates nitric oxide system</li>
            <li>• Interacts with growth factor pathways</li>
            <li>• Potential gut-brain axis effects</li>
            <li>• Cytoprotective (cell-protecting) properties</li>
          </ul>
          <div className="mt-3 pt-3 border-t">
            <p className="text-xs text-gray-500">
              <strong>Caveat:</strong> Most mechanism research is from animal studies.
              Human pharmacokinetics largely unknown.
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-5">
          <h4 className="font-semibold text-gray-900 mb-3">TB-500</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Upregulates actin (cell structure protein)</li>
            <li>• Promotes cell migration to injury sites</li>
            <li>• Reduces inflammation at wound sites</li>
            <li>• Supports keratinocyte migration (skin healing)</li>
            <li>• May promote hair follicle stem cell migration</li>
          </ul>
          <div className="mt-3 pt-3 border-t">
            <p className="text-xs text-gray-500">
              <strong>Caveat:</strong> Thymosin Beta-4 mechanisms well-studied;
              TB-500 fragment specifically less researched.
            </p>
          </div>
        </div>
      </div>

      <h2 id="evidence">Evidence Comparison</h2>

      <UncertaintyBox
        level="high"
        explanation="Both peptides have primarily animal study evidence. Human clinical trial data is extremely limited for both. Claims of effectiveness should be viewed with appropriate skepticism."
      />

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspect</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BPC-157</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">TB-500</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Human RCTs</td>
              <td className="px-4 py-3 text-sm text-gray-600">Very limited (oral, gut-focused)</td>
              <td className="px-4 py-3 text-sm text-gray-600">None published</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Animal Studies</td>
              <td className="px-4 py-3 text-sm text-gray-600">Extensive (rats, primarily)</td>
              <td className="px-4 py-3 text-sm text-gray-600">Moderate (mice, rats, horses)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Evidence Tier</td>
              <td className="px-4 py-3"><EvidenceTier tier={4} /></td>
              <td className="px-4 py-3"><EvidenceTier tier={4} /></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Primary Research Focus</td>
              <td className="px-4 py-3 text-sm text-gray-600">Gut healing, tendon repair</td>
              <td className="px-4 py-3 text-sm text-gray-600">Wound healing, cardiac repair</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Oral Bioavailability</td>
              <td className="px-4 py-3 text-sm text-gray-600">Claims exist (disputed)</td>
              <td className="px-4 py-3 text-sm text-gray-600">No evidence for oral use</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>BPC-157 Research Highlights</h3>
      <ul>
        <li>
          <strong>Tendon healing:</strong> Multiple rat studies show accelerated Achilles tendon
          healing. No human tendon studies.
        </li>
        <li>
          <strong>Gut protection:</strong> Consistent protective effects against NSAIDs, alcohol,
          and stress-induced gut damage in rats. Limited human oral studies for IBD.
        </li>
        <li>
          <strong>Muscle healing:</strong> Some rat studies on muscle tear recovery.
        </li>
      </ul>

      <h3>TB-500 Research Highlights</h3>
      <ul>
        <li>
          <strong>Wound healing:</strong> Thymosin Beta-4 (parent compound) has human data for
          corneal wounds. TB-500 fragment has animal data only.
        </li>
        <li>
          <strong>Cardiac repair:</strong> Thymosin Beta-4 showed promise in mouse heart attack
          models. Human cardiac trials of Tβ4 were discontinued.
        </li>
        <li>
          <strong>Hair growth:</strong> Some animal evidence for hair follicle effects. No human data.
        </li>
      </ul>

      <h2 id="regulatory">Regulatory Status in India</h2>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Regulatory Aspect</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BPC-157</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">TB-500</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">CDSCO Approval</td>
              <td className="px-4 py-3"><RegulatoryStatus status="gray" /></td>
              <td className="px-4 py-3"><RegulatoryStatus status="gray" /></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">NDPS Status</td>
              <td className="px-4 py-3 text-sm text-gray-600">Not scheduled</td>
              <td className="px-4 py-3 text-sm text-gray-600">Not scheduled</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">WADA Status</td>
              <td className="px-4 py-3"><RegulatoryStatus status="prohibited" /></td>
              <td className="px-4 py-3"><RegulatoryStatus status="prohibited" /></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Import Risk</td>
              <td className="px-4 py-3 text-sm text-gray-600">Medium-High</td>
              <td className="px-4 py-3 text-sm text-gray-600">Medium-High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Both peptides occupy essentially the same regulatory position in India:
      </p>
      <ul>
        <li>Not approved for human therapeutic use</li>
        <li>Not controlled substances</li>
        <li>Sold under &quot;research use only&quot; disclaimers</li>
        <li>Gray zone for personal possession and import</li>
        <li>Prohibited for athletes under WADA testing</li>
      </ul>

      <h2 id="practical">Practical Differences</h2>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Factor</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BPC-157</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">TB-500</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Administration Routes</td>
              <td className="px-4 py-3 text-sm text-gray-600">Injectable, oral (claimed)</td>
              <td className="px-4 py-3 text-sm text-gray-600">Injectable only</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Stability</td>
              <td className="px-4 py-3 text-sm text-gray-600">Relatively stable</td>
              <td className="px-4 py-3 text-sm text-gray-600">Less stable, requires proper storage</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Typical Cost (India)</td>
              <td className="px-4 py-3 text-sm text-gray-600">₹2,000-5,000 per vial</td>
              <td className="px-4 py-3 text-sm text-gray-600">₹3,000-7,000 per vial</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Community Usage</td>
              <td className="px-4 py-3 text-sm text-gray-600">More common, more anecdotes</td>
              <td className="px-4 py-3 text-sm text-gray-600">Less common in India</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 my-6">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-amber-900">Quality Concerns Apply to Both</h4>
            <p className="mt-1 text-amber-800 text-sm">
              Neither peptide has quality standards when sold as &quot;research chemicals.&quot;
              Purity claims are unverified. Contamination risks exist for both. Third-party testing
              is rare and expensive.
            </p>
          </div>
        </div>
      </div>

      <h2 id="summary">Summary: How to Think About This Comparison</h2>

      <p>
        When comparing BPC-157 and TB-500, the key insight is that <strong>both are in similar
        positions</strong>:
      </p>

      <div className="bg-gray-100 rounded-lg p-6 my-6">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-gray-400 mr-2">→</span>
            <span><strong>Evidence:</strong> Both have primarily animal research. Neither has robust human clinical trials.</span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 mr-2">→</span>
            <span><strong>Regulatory:</strong> Both are unapproved in India and exist in the same gray zone.</span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 mr-2">→</span>
            <span><strong>Risk:</strong> Both carry similar quality, safety, and legal risks.</span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 mr-2">→</span>
            <span><strong>Decision:</strong> Choosing between them requires weighing uncertain claims against each other.</span>
          </li>
        </ul>
      </div>

      <p>
        Neither can be recommended based on evidence. The choice is not &quot;which is better&quot;
        but &quot;do you accept the uncertainty of either?&quot;
      </p>

      <h2 id="what-we-dont-cover">What This Article Does NOT Cover</h2>
      <ul>
        <li>Dosing protocols (we don&apos;t provide medical guidance)</li>
        <li>Where to obtain these peptides (we don&apos;t provide sourcing)</li>
        <li>Whether you should use either (that&apos;s your decision with professional guidance)</li>
        <li>Combination protocols (no evidence base to evaluate)</li>
      </ul>

      <div className="bg-gray-100 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-900">Related Articles</h3>
        <ul className="mt-3 space-y-2">
          <li>
            <Link
              href="/learn/bpc-157-legal-india"
              className="text-primary-600 hover:underline"
            >
              Is BPC-157 Legal in India? A Clear Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/learn/bpc-157-human-vs-animal-studies"
              className="text-primary-600 hover:underline"
            >
              BPC-157: Human Studies vs Animal Studies
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-evaluate-peptide-claims"
              className="text-primary-600 hover:underline"
            >
              How to Evaluate Peptide Claims: A Critical Thinking Framework
            </Link>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
