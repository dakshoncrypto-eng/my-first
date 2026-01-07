import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/ArticleLayout'
import { SummaryBox, UncertaintyBox } from '@/components/SummaryBox'
import { AlertTriangle, CheckCircle, XCircle, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Peptide Quality Testing in India: What You Need to Know',
  description: 'Understand peptide purity testing options in India, how to interpret test results, red flags to watch for, and the limitations of research chemical quality.',
  keywords: ['peptide testing', 'purity', 'India', 'HPLC', 'mass spectrometry', 'quality control'],
}

export default function PeptideQualityTestingPage() {
  return (
    <ArticleLayout
      title="Peptide Quality Testing in India: What You Need to Know"
      description="A practical guide to understanding peptide quality, testing options, and how to evaluate purity claims in the Indian market."
      category="Quality"
      readTime="9 min"
      lastUpdated="January 2026"
    >
      <SummaryBox
        title="Key Points"
        type="warning"
        points={[
          'Research peptides have NO regulatory quality standards in India',
          'Seller purity claims (e.g., "99% pure") are often unverified marketing',
          'Third-party testing is possible but expensive and logistically difficult',
          'Common contaminants: bacterial endotoxins, residual solvents, degradation products',
          'Certificate of Analysis (CoA) is only as trustworthy as its source',
        ]}
      />

      <h2 id="quality-problem">The Quality Problem</h2>
      <p>
        Research peptides exist outside pharmaceutical quality control systems. When you purchase
        a peptide labeled &quot;for research use only,&quot; you&apos;re buying a product that:
      </p>
      <ul>
        <li>Has no manufacturing standards enforced by CDSCO or any regulator</li>
        <li>Has no independent verification of contents or purity</li>
        <li>May be manufactured in facilities with varying quality controls</li>
        <li>May have degraded during shipping or storage</li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
        <div className="flex">
          <AlertTriangle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-red-800 font-semibold">The Uncomfortable Truth</h4>
            <p className="text-red-700 mt-1">
              When a vendor claims &quot;99% purity,&quot; there is no regulatory body verifying this.
              You are trusting the seller&apos;s claim entirely. Some vendors are honest; many are not.
            </p>
          </div>
        </div>
      </div>

      <h2 id="what-can-go-wrong">What Can Go Wrong with Peptide Quality</h2>

      <h3>1. Identity Issues</h3>
      <p>The peptide may not be what it claims to be:</p>
      <ul>
        <li><strong>Wrong peptide entirely:</strong> Cheaper peptide substituted</li>
        <li><strong>Truncated sequences:</strong> Incomplete synthesis</li>
        <li><strong>Scrambled sequences:</strong> Amino acids in wrong order</li>
      </ul>

      <h3>2. Purity Issues</h3>
      <p>The peptide may contain contaminants:</p>
      <ul>
        <li><strong>Synthesis byproducts:</strong> Failed sequences, deletion peptides</li>
        <li><strong>Residual solvents:</strong> TFA, acetonitrile, DMF from manufacturing</li>
        <li><strong>Heavy metals:</strong> From manufacturing equipment</li>
        <li><strong>Bacterial endotoxins:</strong> Particularly dangerous for injectables</li>
      </ul>

      <h3>3. Degradation Issues</h3>
      <p>The peptide may have broken down:</p>
      <ul>
        <li><strong>Oxidation:</strong> Methionine residues are vulnerable</li>
        <li><strong>Hydrolysis:</strong> Peptide bonds can break</li>
        <li><strong>Aggregation:</strong> Peptides clumping together</li>
      </ul>

      <div className="bg-gray-100 rounded-lg p-6 my-6">
        <h4 className="font-semibold text-gray-900 mb-3">Why This Matters</h4>
        <p className="text-gray-700">
          A peptide with 70% purity and 30% unknown contaminants is not just &quot;less
          effective&quot; — it&apos;s a mixture where 30% of what you&apos;re using is unknown
          substances. For injectable products especially, this creates unpredictable risks.
        </p>
      </div>

      <h2 id="testing-methods">Testing Methods Explained</h2>

      <h3>HPLC (High-Performance Liquid Chromatography)</h3>
      <p>
        HPLC separates compounds in a mixture and measures their relative amounts. It&apos;s the
        most common purity test for peptides.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            What HPLC Shows
          </h4>
          <ul className="mt-2 text-sm text-green-700 space-y-1">
            <li>• Percentage purity (main peak)</li>
            <li>• Presence of impurities (other peaks)</li>
            <li>• Relative amounts of contaminants</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 flex items-center">
            <XCircle className="h-4 w-4 mr-2" />
            What HPLC Doesn&apos;t Show
          </h4>
          <ul className="mt-2 text-sm text-red-700 space-y-1">
            <li>• Identity of the peptide</li>
            <li>• What the impurities are</li>
            <li>• Bacterial contamination</li>
            <li>• Heavy metal content</li>
          </ul>
        </div>
      </div>

      <h3>Mass Spectrometry (MS)</h3>
      <p>
        Mass spectrometry measures the molecular weight of compounds. It can verify peptide identity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            What MS Shows
          </h4>
          <ul className="mt-2 text-sm text-green-700 space-y-1">
            <li>• Molecular weight (identity confirmation)</li>
            <li>• Whether the correct peptide is present</li>
            <li>• Major modifications or truncations</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 flex items-center">
            <XCircle className="h-4 w-4 mr-2" />
            What MS Doesn&apos;t Show
          </h4>
          <ul className="mt-2 text-sm text-red-700 space-y-1">
            <li>• Exact purity percentage</li>
            <li>• Sequence order (without fragmentation)</li>
            <li>• Biological activity</li>
          </ul>
        </div>
      </div>

      <h3>Amino Acid Analysis (AAA)</h3>
      <p>
        Breaks down the peptide and counts amino acids. Confirms composition but not sequence.
      </p>

      <h3>Endotoxin Testing (LAL Test)</h3>
      <p>
        Tests for bacterial endotoxins using Limulus amebocyte lysate. Critical for injectables
        but rarely included in research peptide testing.
      </p>

      <h2 id="india-options">Testing Options in India</h2>

      <UncertaintyBox
        level="medium"
        explanation="Testing options in India for research peptides are limited. The information below represents available options but availability and pricing may vary."
      />

      <h3>Institutional Labs</h3>
      <p>
        Some university and research institution labs offer analytical services. Options include:
      </p>
      <ul>
        <li>IIT analytical chemistry departments</li>
        <li>CSIR laboratories (CDRI, IICT, NCL)</li>
        <li>Private analytical services companies</li>
      </ul>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
        <p className="text-amber-800 text-sm">
          <strong>Challenge:</strong> Most institutional labs require institutional affiliation or
          official research purpose. Testing &quot;research chemicals for personal use&quot; may
          not be accepted.
        </p>
      </div>

      <h3>Private Analytical Labs</h3>
      <p>
        Some private labs offer HPLC and MS services. Costs typically range from:
      </p>
      <ul>
        <li><strong>HPLC purity:</strong> ₹2,000 - ₹5,000 per sample</li>
        <li><strong>Mass spectrometry:</strong> ₹3,000 - ₹8,000 per sample</li>
        <li><strong>Full characterization:</strong> ₹10,000 - ₹25,000 per sample</li>
      </ul>

      <h3>International Testing</h3>
      <p>
        Some international labs accept samples from India. Janoshik Analytical (Czech Republic)
        is commonly used in the research peptide community.
      </p>
      <ul>
        <li>More experienced with research peptides</li>
        <li>Higher costs plus international shipping</li>
        <li>Shipping peptides internationally has its own legal considerations</li>
      </ul>

      <h2 id="coa">Understanding Certificates of Analysis (CoA)</h2>

      <p>
        Many vendors provide Certificates of Analysis. Here&apos;s how to evaluate them:
      </p>

      <div className="space-y-4 my-6">
        <div className="border rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Signs of Legitimate CoA</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Issued by third-party lab (not the seller)</li>
                <li>• Includes actual chromatograms/spectra, not just numbers</li>
                <li>• Has specific batch/lot number matching your product</li>
                <li>• Includes testing date and lab contact information</li>
                <li>• Lab can verify the report if contacted</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <XCircle className="h-4 w-4 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Red Flags in CoAs</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• &quot;In-house testing&quot; (seller tested their own product)</li>
                <li>• Generic CoA with no batch number</li>
                <li>• Same CoA used for multiple products</li>
                <li>• No raw data, just purity percentage</li>
                <li>• Lab cannot be contacted or doesn&apos;t exist</li>
                <li>• Suspiciously perfect numbers (99.9% every time)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 id="practical">Practical Quality Assessment</h2>

      <p>
        If third-party testing isn&apos;t practical, these observations can provide some
        (limited) information:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Observation</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">What It Might Indicate</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Limitations</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Powder appearance</td>
              <td className="px-4 py-3 text-sm text-gray-600">Should be white/off-white, fluffy</td>
              <td className="px-4 py-3 text-sm text-gray-600">Visual tells you nothing about purity</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Reconstitution</td>
              <td className="px-4 py-3 text-sm text-gray-600">Should dissolve easily, clear solution</td>
              <td className="px-4 py-3 text-sm text-gray-600">Impure products can also dissolve</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Vial/packaging</td>
              <td className="px-4 py-3 text-sm text-gray-600">Professional packaging suggests established vendor</td>
              <td className="px-4 py-3 text-sm text-gray-600">Packaging quality ≠ product quality</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">Vacuum seal</td>
              <td className="px-4 py-3 text-sm text-gray-600">Intact seal suggests proper handling</td>
              <td className="px-4 py-3 text-sm text-gray-600">Resealing is easy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-6">
        <h4 className="font-semibold text-gray-900 flex items-center">
          <HelpCircle className="h-5 w-5 mr-2 text-gray-600" />
          The Honest Assessment
        </h4>
        <p className="mt-2 text-gray-700">
          Without laboratory testing, you cannot reliably assess peptide quality. Visual inspection
          and vendor reputation provide weak signals at best. The research peptide market operates
          on trust with limited verification — this is a fundamental limitation you should understand.
        </p>
      </div>

      <h2 id="recommendations">How to Approach Quality</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 font-bold">1</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Accept the Uncertainty</h4>
            <p className="text-gray-600">
              Recognize that research peptide quality is inherently uncertain. No amount of vendor
              research eliminates this.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 font-bold">2</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Evaluate Vendor Transparency</h4>
            <p className="text-gray-600">
              Prefer vendors who provide third-party testing, specific batch CoAs, and are
              transparent about their limitations.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 font-bold">3</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Consider Testing for High Stakes</h4>
            <p className="text-gray-600">
              If you&apos;re using significant quantities or have specific concerns, invest in
              third-party testing. The cost is small relative to the risk of contaminated products.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 font-bold">4</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Factor Quality Risk into Decisions</h4>
            <p className="text-gray-600">
              When evaluating any research peptide, quality uncertainty should be part of your
              risk assessment, not ignored.
            </p>
          </div>
        </div>
      </div>

      <h2 id="what-we-dont-cover">What This Article Does NOT Cover</h2>
      <ul>
        <li>Specific vendor recommendations (we don&apos;t provide sourcing)</li>
        <li>How to &quot;test&quot; peptides at home (not possible meaningfully)</li>
        <li>Which peptides are &quot;safe&quot; (safety requires proper trials, not testing)</li>
      </ul>

      <div className="bg-gray-100 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-900">Related Articles</h3>
        <ul className="mt-3 space-y-2">
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
              href="/learn/how-to-evaluate-peptide-claims"
              className="text-primary-600 hover:underline"
            >
              How to Evaluate Peptide Claims: A Critical Thinking Framework
            </Link>
          </li>
          <li>
            <Link
              href="/learn/bpc-157-legal-india"
              className="text-primary-600 hover:underline"
            >
              Is BPC-157 Legal in India? A Clear Breakdown
            </Link>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
