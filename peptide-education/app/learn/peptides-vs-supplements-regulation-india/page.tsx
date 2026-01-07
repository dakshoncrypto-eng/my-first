import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/ArticleLayout'
import { SummaryBox, UncertaintyBox } from '@/components/SummaryBox'
import { Scale, Pill, FlaskConical, Apple, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Peptides vs Supplements: How India Regulates Them Differently',
  description: 'A clear framework for understanding how FSSAI, CDSCO, and customs treat different categories of compounds in India.',
  keywords: ['peptides', 'supplements', 'FSSAI', 'CDSCO', 'India', 'regulation'],
}

export default function PeptidesVsSupplementsPage() {
  return (
    <ArticleLayout
      title="Peptides vs Supplements: How India Regulates Them Differently"
      description="A clear framework for understanding how FSSAI, CDSCO, and customs treat different categories of compounds in India."
      category="Regulatory"
      readTime="7 min"
      lastUpdated="January 2026"
    >
      <SummaryBox
        title="Key Takeaways"
        type="info"
        points={[
          'Dietary supplements are regulated by FSSAI under food safety laws',
          'Drugs and pharmaceuticals are regulated by CDSCO under the Drugs and Cosmetics Act',
          'Research peptides fall into a gray zone — not regulated as supplements, not approved as drugs',
          'The category something falls into determines what is legal and what is not',
          'Mislabeling or misrepresenting category is illegal',
        ]}
      />

      <h2 id="why-it-matters">Why Categories Matter</h2>
      <p>
        In India, what you can legally buy, sell, import, and use depends entirely on{' '}
        <strong>which regulatory category</strong> a product falls into. The same compound might be:
      </p>
      <ul>
        <li>Legal as a food ingredient</li>
        <li>Restricted as a drug</li>
        <li>Prohibited as a controlled substance</li>
      </ul>
      <p>
        Understanding these categories is essential before researching any compound, including
        peptides.
      </p>

      <h2 id="three-categories">The Three Main Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Apple className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="font-semibold text-green-800">Food & Supplements</h3>
          </div>
          <p className="text-sm text-green-700">Regulated by FSSAI</p>
          <p className="text-xs text-green-600 mt-2">
            Vitamins, minerals, protein powders, herbal supplements
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Pill className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="font-semibold text-blue-800">Drugs & Pharmaceuticals</h3>
          </div>
          <p className="text-sm text-blue-700">Regulated by CDSCO</p>
          <p className="text-xs text-blue-600 mt-2">
            Prescription medicines, OTC drugs, approved therapies
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <FlaskConical className="h-6 w-6 text-amber-600 mr-2" />
            <h3 className="font-semibold text-amber-800">Research Chemicals</h3>
          </div>
          <p className="text-sm text-amber-700">Gray Zone</p>
          <p className="text-xs text-amber-600 mt-2">
            Peptides, research compounds, unapproved substances
          </p>
        </div>
      </div>

      <h2 id="fssai">FSSAI: Food and Dietary Supplements</h2>

      <h3>What FSSAI Regulates</h3>
      <p>
        The Food Safety and Standards Authority of India (FSSAI) regulates food products, including
        dietary supplements, under the Food Safety and Standards Act, 2006. This includes:
      </p>
      <ul>
        <li><strong>Nutraceuticals:</strong> Foods with health benefits beyond basic nutrition</li>
        <li><strong>Health supplements:</strong> Vitamins, minerals, amino acids, enzymes</li>
        <li><strong>Foods for special dietary use:</strong> Sports nutrition, medical foods</li>
        <li><strong>Foods for special medical purpose</strong></li>
      </ul>

      <h3>Key FSSAI Requirements</h3>
      <ul>
        <li>Products must be on the approved list of ingredients</li>
        <li>Manufacturing must follow FSSAI standards</li>
        <li>Labels must include FSSAI license number</li>
        <li>No therapeutic claims allowed (only nutritional claims)</li>
        <li>Must be safe for oral consumption with history of use</li>
      </ul>

      <h3>What FSSAI Does NOT Regulate</h3>
      <p>
        FSSAI explicitly does not cover substances that:
      </p>
      <ul>
        <li>Make drug-like therapeutic claims</li>
        <li>Are not intended for oral consumption</li>
        <li>Have no history of safe use as food</li>
        <li>Are synthetic compounds without food use history</li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
        <p className="text-amber-800">
          <strong>Why peptides don&apos;t fall under FSSAI:</strong> Research peptides like BPC-157 are
          synthetic compounds with no history of use as food ingredients. They are not on the
          approved list and cannot be legally marketed as dietary supplements in India.
        </p>
      </div>

      <h2 id="cdsco">CDSCO: Drugs and Pharmaceuticals</h2>

      <h3>What CDSCO Regulates</h3>
      <p>
        The Central Drugs Standard Control Organization (CDSCO) regulates drugs under the Drugs
        and Cosmetics Act, 1940. A &quot;drug&quot; includes any substance intended for:
      </p>
      <ul>
        <li>Diagnosis, cure, mitigation, treatment, or prevention of disease</li>
        <li>Affecting the structure or function of the body</li>
      </ul>

      <h3>Drug Approval Process</h3>
      <p>For a drug to be legally marketed in India, it must:</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Complete preclinical studies (animal testing)</li>
        <li>Complete Phase 1-3 clinical trials in humans</li>
        <li>Submit a New Drug Application (NDA) to CDSCO</li>
        <li>Receive manufacturing and marketing approval</li>
        <li>Be manufactured in licensed facilities</li>
      </ol>

      <h3>Unapproved Drugs</h3>
      <p>
        Any substance that affects body structure/function but has not completed this approval
        process is technically an &quot;unapproved drug.&quot; Selling unapproved drugs for human use
        violates the Drugs and Cosmetics Act.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-800">
          <strong>Where peptides fall:</strong> Research peptides like BPC-157 have not completed
          clinical trials and are not approved by CDSCO. They cannot be legally sold as drugs
          or medicines in India.
        </p>
      </div>

      <h2 id="gray-zone">The Research Chemical Gray Zone</h2>
      <p>
        Research peptides exist in a regulatory gap:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Question</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Answer</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Is it a food/supplement?</td>
              <td className="px-4 py-3 text-sm text-gray-600">No — not on FSSAI approved list</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Is it an approved drug?</td>
              <td className="px-4 py-3 text-sm text-gray-600">No — not approved by CDSCO</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Is it a controlled substance?</td>
              <td className="px-4 py-3 text-sm text-gray-600">No — not scheduled under NDPS Act</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Can it be sold for human use?</td>
              <td className="px-4 py-3 text-sm text-gray-600">No — would require CDSCO approval</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Can it be sold as &quot;research chemical&quot;?</td>
              <td className="px-4 py-3 text-sm text-gray-600">Gray area — not explicitly prohibited</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        This gray zone is why vendors use disclaimers like &quot;for research use only&quot; — it&apos;s an
        attempt to operate outside both FSSAI and CDSCO jurisdiction by claiming the product is
        not for human consumption.
      </p>

      <UncertaintyBox
        level="high"
        explanation="The regulatory status of research chemicals is ambiguous. Enforcement varies and may change. This is not legal advice."
      />

      <h2 id="comparison-table">Quick Comparison</h2>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspect</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Supplements (FSSAI)</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Drugs (CDSCO)</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Research Peptides</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium">Regulator</td>
              <td className="px-4 py-3">FSSAI</td>
              <td className="px-4 py-3">CDSCO</td>
              <td className="px-4 py-3">None (gray zone)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Approval required?</td>
              <td className="px-4 py-3">Yes (approved ingredients list)</td>
              <td className="px-4 py-3">Yes (clinical trials + NDA)</td>
              <td className="px-4 py-3">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Legal to sell for human use?</td>
              <td className="px-4 py-3 text-green-600">Yes (with license)</td>
              <td className="px-4 py-3 text-green-600">Yes (with approval)</td>
              <td className="px-4 py-3 text-red-600">No</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Health claims allowed?</td>
              <td className="px-4 py-3">Limited (nutritional only)</td>
              <td className="px-4 py-3">Yes (approved claims)</td>
              <td className="px-4 py-3">No</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Import status</td>
              <td className="px-4 py-3">Clear process</td>
              <td className="px-4 py-3">Clear process</td>
              <td className="px-4 py-3">Ambiguous</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Example</td>
              <td className="px-4 py-3">Whey protein, Vitamin D</td>
              <td className="px-4 py-3">Paracetamol, Metformin</td>
              <td className="px-4 py-3">BPC-157, TB-500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="practical-guidance">Practical Guidance</h2>

      <h3>How to Identify What Category Something Falls Into</h3>
      <ol className="list-decimal list-inside space-y-3">
        <li>
          <strong>Check if it&apos;s on the FSSAI approved list</strong> — If yes, it can be legally
          sold as a supplement with FSSAI license
        </li>
        <li>
          <strong>Check if it&apos;s CDSCO approved</strong> — If yes, it&apos;s a legal pharmaceutical
          (may require prescription)
        </li>
        <li>
          <strong>Check if it&apos;s scheduled under NDPS</strong> — If yes, it&apos;s a controlled substance
        </li>
        <li>
          <strong>If none of the above</strong> — It likely falls into the research chemical gray zone
        </li>
      </ol>

      <h3>Red Flags to Watch For</h3>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
        <ul className="space-y-2 text-red-800">
          <li className="flex items-start">
            <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>Product makes therapeutic claims but has no FSSAI/CDSCO number</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>Sold as &quot;supplement&quot; but contains non-approved ingredients</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>Injectable products sold without pharmaceutical license</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>Claims that seem too good to be true</span>
          </li>
        </ul>
      </div>

      <h2 id="sources">Sources</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>• Food Safety and Standards Act, 2006</li>
        <li>• FSSAI Health Supplements Regulations, 2016</li>
        <li>• Drugs and Cosmetics Act, 1940</li>
        <li>• CDSCO New Drug Approval Guidelines</li>
      </ul>

      <div className="bg-gray-100 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-900">Related Articles</h3>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="/learn/bpc-157-legal-india" className="text-primary-600 hover:underline">
              Is BPC-157 Legal in India?
            </Link>
          </li>
          <li>
            <Link href="/learn/research-use-only-meaning" className="text-primary-600 hover:underline">
              What Does &quot;Research Use Only&quot; Actually Mean?
            </Link>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
