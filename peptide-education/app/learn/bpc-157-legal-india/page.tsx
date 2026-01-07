import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/ArticleLayout'
import { SummaryBox, UncertaintyBox } from '@/components/SummaryBox'
import { RegulatoryStatus, RegulatoryTable } from '@/components/RegulatoryStatus'
import { EvidenceTier } from '@/components/EvidenceTier'
import { AlertTriangle, Scale, FileText, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Is BPC-157 Legal in India? A Clear Breakdown',
  description: 'Understand the regulatory status of BPC-157 in India, including CDSCO position, customs implications, and what "research use only" actually means.',
  keywords: ['BPC-157', 'legal', 'India', 'CDSCO', 'peptides', 'regulation'],
}

export default function BPC157LegalIndiaPage() {
  return (
    <ArticleLayout
      title="Is BPC-157 Legal in India? A Clear Breakdown"
      description="Understand the regulatory status of BPC-157 in India, including CDSCO position, customs implications, and what 'research use only' actually means."
      category="Regulatory"
      readTime="8 min"
      lastUpdated="January 2026"
    >
      <SummaryBox
        title="Key Takeaways"
        type="warning"
        points={[
          'BPC-157 is NOT approved for human use in India by CDSCO',
          'It is NOT scheduled as a controlled substance under NDPS Act',
          'It exists in a regulatory gray zone when sold as "research chemical"',
          'Import may face customs scrutiny but is not explicitly prohibited',
          'Using unapproved substances carries unknown risks',
        ]}
      />

      <h2 id="short-answer">The Short Answer</h2>
      <p>
        BPC-157 occupies a <strong>regulatory gray zone</strong> in India. It is:
      </p>
      <ul>
        <li>
          <strong>Not approved</strong> for human use by the Central Drugs Standard Control
          Organization (CDSCO)
        </li>
        <li>
          <strong>Not scheduled</strong> as a controlled or prohibited substance under the
          Narcotic Drugs and Psychotropic Substances (NDPS) Act
        </li>
        <li>
          <strong>Not regulated</strong> as a dietary supplement under FSSAI (because it&apos;s not
          a food or supplement)
        </li>
      </ul>
      <p>
        This creates an ambiguous situation where BPC-157 is neither explicitly legal nor explicitly
        illegal for personal possession, but is not legally approved for human consumption or
        medical use.
      </p>

      <UncertaintyBox
        level="high"
        explanation="Regulatory interpretation of research peptides in India is inconsistent. Enforcement varies. The information here reflects our best understanding but should not be treated as legal advice."
      />

      <h2 id="regulatory-bodies">Understanding India&apos;s Regulatory Bodies</h2>
      <p>
        To understand BPC-157&apos;s status, you need to understand which regulatory bodies are
        relevant — and which are not.
      </p>

      <h3>CDSCO (Central Drugs Standard Control Organization)</h3>
      <p>
        CDSCO is India&apos;s primary drug regulatory authority, equivalent to the US FDA. It
        approves drugs for human use in India under the Drugs and Cosmetics Act, 1940.
      </p>
      <p>
        <strong>BPC-157&apos;s status:</strong> Not approved. BPC-157 has never been submitted for
        approval, never completed clinical trials required for approval, and is not listed in the
        Indian Pharmacopoeia.
      </p>
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
        <p className="text-amber-800">
          <strong>What this means:</strong> Any substance not approved by CDSCO cannot be legally
          marketed, sold, or prescribed for human use in India. Selling BPC-157 for human
          consumption would violate the Drugs and Cosmetics Act.
        </p>
      </div>

      <h3>FSSAI (Food Safety and Standards Authority of India)</h3>
      <p>
        FSSAI regulates food products and dietary supplements in India.
      </p>
      <p>
        <strong>BPC-157&apos;s status:</strong> Not applicable. BPC-157 is not a food, nutrient, or
        dietary supplement. It&apos;s a synthetic peptide with no history of use in food. FSSAI
        regulations do not apply.
      </p>

      <h3>NDPS Act (Narcotic Drugs and Psychotropic Substances Act)</h3>
      <p>
        The NDPS Act controls narcotic and psychotropic substances in India, with strict penalties
        for possession, sale, or trafficking.
      </p>
      <p>
        <strong>BPC-157&apos;s status:</strong> Not scheduled. BPC-157 is not listed as a controlled
        substance under the NDPS Act. This means possession is not a criminal offense under this
        specific law.
      </p>

      <h2 id="gray-zone">The &quot;Research Chemical&quot; Gray Zone</h2>
      <p>
        BPC-157 is typically sold as a &quot;research chemical&quot; or labeled &quot;for research
        use only&quot; or &quot;not for human consumption.&quot;
      </p>
      <p>This labeling serves a specific purpose:</p>
      <ul>
        <li>
          It allows sellers to avoid the requirement for CDSCO drug approval by claiming they&apos;re
          not selling a product for human use
        </li>
        <li>
          It creates a legal fiction that the buyer is a researcher purchasing for laboratory use
        </li>
        <li>
          It shifts responsibility to the buyer for any &quot;misuse&quot;
        </li>
      </ul>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-6">
        <h4 className="font-semibold text-gray-900 flex items-center">
          <HelpCircle className="h-5 w-5 mr-2 text-gray-600" />
          What &quot;Research Use Only&quot; Actually Means
        </h4>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• It is a <strong>legal disclaimer</strong>, not a safety designation</li>
          <li>• It does <strong>not</strong> mean the product has been tested for research quality</li>
          <li>• It does <strong>not</strong> mean it&apos;s safe for any purpose</li>
          <li>• It does <strong>not</strong> protect the buyer from legal or health consequences</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
          Read more: <Link href="/learn/research-use-only-meaning" className="text-primary-600 hover:underline">
            What Does &quot;Research Use Only&quot; Actually Mean?
          </Link>
        </p>
      </div>

      <h2 id="import-customs">Import and Customs Considerations</h2>
      <p>
        Many people in India obtain research peptides through international orders. Here&apos;s what
        you should understand about import:
      </p>

      <h3>Customs Authority</h3>
      <p>
        Indian customs has broad authority to inspect and seize imports, particularly those that:
      </p>
      <ul>
        <li>Appear to be drugs or pharmaceutical products</li>
        <li>Lack proper documentation</li>
        <li>Are misdeclared or underdeclared</li>
        <li>Raise health or safety concerns</li>
      </ul>

      <h3>Import Risk Factors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800">Higher Risk</h4>
          <ul className="mt-2 text-sm text-red-700 space-y-1">
            <li>• Large quantities</li>
            <li>• Vials or injectable formats</li>
            <li>• Pharmaceutical-looking packaging</li>
            <li>• Shipments from known research chemical vendors</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800">Lower Risk (but not zero)</h4>
          <ul className="mt-2 text-sm text-green-700 space-y-1">
            <li>• Small quantities</li>
            <li>• Clearly labeled as research material</li>
            <li>• Accompanied by documentation</li>
          </ul>
        </div>
      </div>

      <UncertaintyBox
        level="high"
        explanation="Customs enforcement is inconsistent. Some shipments pass without issue; others are seized or held. There is no reliable way to predict outcomes."
      />

      <h2 id="comparison">How Does India Compare to Other Countries?</h2>
      <RegulatoryTable
        data={[
          { peptide: 'BPC-157', india: 'gray', us: 'gray', eu: 'gray', wada: 'prohibited' },
        ]}
      />
      <p className="mt-4">
        The regulatory status is similar across most major jurisdictions — BPC-157 exists in a gray
        zone almost everywhere. The key differences are:
      </p>
      <ul>
        <li>
          <strong>US:</strong> FDA has not approved BPC-157. The FDA has issued warning letters to
          companies making therapeutic claims. Research chemical sales continue under similar
          disclaimers.
        </li>
        <li>
          <strong>EU:</strong> Not approved by EMA. Status varies by member state but generally
          similar gray zone.
        </li>
        <li>
          <strong>WADA:</strong> BPC-157 is on the WADA Prohibited List under category S0
          (Non-Approved Substances). Athletes subject to anti-doping testing should be aware that
          use would constitute a violation.
        </li>
      </ul>

      <h2 id="practical-implications">Practical Implications</h2>
      <p>
        Given this regulatory landscape, here&apos;s a realistic assessment:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <span className="text-amber-700 font-bold">1</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Personal Possession</h4>
            <p className="text-gray-600">
              Possessing BPC-157 for personal use is not explicitly illegal under current Indian
              law, but it is also not explicitly permitted. You are in a gray zone.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <span className="text-amber-700 font-bold">2</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Selling for Human Use</h4>
            <p className="text-gray-600">
              Selling BPC-157 for human consumption would violate the Drugs and Cosmetics Act.
              This is why vendors use &quot;research use only&quot; labels.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <span className="text-amber-700 font-bold">3</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Import</h4>
            <p className="text-gray-600">
              Import is possible but carries risk of customs interception. There is no legal
              protection if a shipment is seized.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <span className="text-amber-700 font-bold">4</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Athletes</h4>
            <p className="text-gray-600">
              If you are subject to any anti-doping testing (WADA, NADA, sport-specific), BPC-157
              use would be a violation. This includes amateur and collegiate sports with testing.
            </p>
          </div>
        </div>
      </div>

      <h2 id="risk-framework">Risk Framework</h2>
      <p>
        When evaluating any decision about research peptides, consider these risk categories:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Category</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Level</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Legal (possession)</td>
              <td className="px-4 py-3"><span className="text-yellow-600 font-medium">Medium</span></td>
              <td className="px-4 py-3 text-sm text-gray-600">Gray zone, not explicitly prohibited</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Legal (import)</td>
              <td className="px-4 py-3"><span className="text-orange-600 font-medium">Medium-High</span></td>
              <td className="px-4 py-3 text-sm text-gray-600">Customs may seize; no recourse</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Health (safety)</td>
              <td className="px-4 py-3"><span className="text-red-600 font-medium">High</span></td>
              <td className="px-4 py-3 text-sm text-gray-600">No human safety data; unknown risks</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Quality (purity)</td>
              <td className="px-4 py-3"><span className="text-red-600 font-medium">High</span></td>
              <td className="px-4 py-3 text-sm text-gray-600">No quality control standards; contamination risk</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Sports (anti-doping)</td>
              <td className="px-4 py-3"><span className="text-red-600 font-medium">Very High</span></td>
              <td className="px-4 py-3 text-sm text-gray-600">WADA prohibited; would result in ban</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="what-we-dont-know">What This Article Does NOT Tell You</h2>
      <p>
        This article is focused on regulatory status. It does not address:
      </p>
      <ul>
        <li>Whether BPC-157 is effective for any purpose (see our evidence article)</li>
        <li>How to obtain BPC-157 (we do not provide sourcing information)</li>
        <li>How to use BPC-157 (we do not provide dosage or protocol guidance)</li>
        <li>Whether you should use BPC-157 (that is your decision, with professional guidance)</li>
      </ul>
      <p>
        Our role is to help you understand the landscape clearly, not to recommend any course of
        action.
      </p>

      <h2 id="sources">Sources</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>
          • Central Drugs Standard Control Organization (CDSCO) — Drug approval database and
          regulations
        </li>
        <li>
          • Drugs and Cosmetics Act, 1940 (India) — Primary legislation governing drug regulation
        </li>
        <li>
          • FSSAI — Food Safety and Standards Authority of India regulations
        </li>
        <li>
          • NDPS Act, 1985 — Narcotic Drugs and Psychotropic Substances Act schedules
        </li>
        <li>
          • WADA Prohibited List 2024 —{' '}
          <a
            href="https://www.wada-ama.org/en/prohibited-list"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            wada-ama.org
          </a>
        </li>
      </ul>

      <div className="bg-gray-100 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-900">Related Articles</h3>
        <ul className="mt-3 space-y-2">
          <li>
            <Link
              href="/learn/peptides-vs-supplements-regulation-india"
              className="text-primary-600 hover:underline"
            >
              Peptides vs Supplements: How India Regulates Them Differently
            </Link>
          </li>
          <li>
            <Link
              href="/learn/research-use-only-meaning"
              className="text-primary-600 hover:underline"
            >
              What Does &quot;Research Use Only&quot; Actually Mean?
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
        </ul>
      </div>
    </ArticleLayout>
  )
}
