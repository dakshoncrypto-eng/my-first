import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/ArticleLayout'
import { SummaryBox, UncertaintyBox } from '@/components/SummaryBox'
import { EvidenceTier } from '@/components/EvidenceTier'
import { RegulatoryStatus } from '@/components/RegulatoryStatus'
import { Sparkles, FlaskConical, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GHK-Cu (Copper Peptide): Evidence Review for Indian Users',
  description: 'Comprehensive evidence review of GHK-Cu copper peptide: skin, hair, wound healing claims, evidence tiers, and regulatory status in India.',
  keywords: ['GHK-Cu', 'copper peptide', 'India', 'skin', 'hair growth', 'wound healing', 'evidence'],
}

export default function GHKCuEvidencePage() {
  return (
    <ArticleLayout
      title="GHK-Cu (Copper Peptide): An Evidence Review"
      description="Evaluating the scientific evidence behind GHK-Cu claims for skin, hair, and healing — with India-specific context."
      category="Evidence Review"
      readTime="11 min"
      lastUpdated="January 2026"
    >
      <SummaryBox
        title="Evidence Summary"
        type="info"
        points={[
          'GHK-Cu is a naturally occurring tripeptide with copper binding',
          'Strongest evidence: Topical skin applications (cosmetic use)',
          'Moderate evidence: Wound healing (topical)',
          'Weaker evidence: Hair growth, injectable systemic effects',
          'Regulatory: Available in cosmetics; injectable forms are unapproved',
          'Overall tier: Tier 3-4 depending on application',
        ]}
      />

      <h2 id="what-is-ghk-cu">What Is GHK-Cu?</h2>
      <p>
        GHK-Cu (glycyl-L-histidyl-L-lysine copper) is a tripeptide — a small chain of three amino
        acids — that naturally binds copper. It was first isolated from human plasma in 1973 and
        has since been found in saliva, urine, and various tissues.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-800">
          <strong>Key distinction:</strong> Unlike BPC-157 or TB-500, GHK-Cu is a naturally occurring
          compound in your body. The synthetic version used in products is identical to the natural form.
        </p>
      </div>

      <h3>How It Works (Proposed Mechanisms)</h3>
      <ul>
        <li>
          <strong>Copper delivery:</strong> Transports copper to cells, which is essential for
          many enzymatic processes
        </li>
        <li>
          <strong>Gene expression:</strong> May modulate genes related to tissue remodeling,
          antioxidant response, and inflammation
        </li>
        <li>
          <strong>Collagen synthesis:</strong> May stimulate collagen production in skin
        </li>
        <li>
          <strong>Wound signaling:</strong> Released during tissue injury, may coordinate healing
        </li>
      </ul>

      <h2 id="evidence-by-claim">Evidence by Claim</h2>

      <UncertaintyBox
        level="medium"
        explanation="GHK-Cu has more human data than most research peptides, primarily in topical/cosmetic applications. However, injectable and systemic claims have much weaker evidence."
      />

      <h3 id="skin-aging">Claim: Anti-Aging / Skin Improvement</h3>

      <div className="border-l-4 border-green-400 pl-4 my-4">
        <div className="flex items-center mb-2">
          <EvidenceTier tier={3} />
          <span className="ml-2 text-sm text-gray-600">(Human observational + small trials)</span>
        </div>
      </div>

      <p>
        <strong>This is GHK-Cu&apos;s strongest evidence area.</strong> Multiple studies support
        topical GHK-Cu for skin:
      </p>

      <div className="bg-gray-50 rounded-lg p-5 my-4">
        <h4 className="font-semibold text-gray-900 mb-3">Key Studies</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Pickart et al. (2008):</strong> Review of copper peptides in skin regeneration.
            Demonstrated increased collagen synthesis in human fibroblast cultures.
          </li>
          <li>
            <strong>Leyden et al. (1987):</strong> Double-blind study on facial cream with copper
            peptides. Showed improvement in skin thickness and elasticity vs. placebo.
          </li>
          <li>
            <strong>Finkley et al. (2005):</strong> 12-week trial of GHK-Cu cream showed reduced
            wrinkle depth and improved skin density comparable to retinoic acid.
          </li>
        </ul>
      </div>

      <p><strong>What the evidence supports:</strong></p>
      <ul>
        <li>Topical GHK-Cu can improve skin appearance</li>
        <li>Effects are modest but measurable</li>
        <li>Comparable to other proven topical anti-aging ingredients</li>
      </ul>

      <p><strong>What the evidence doesn&apos;t support:</strong></p>
      <ul>
        <li>Dramatic &quot;reversal&quot; of aging</li>
        <li>Systemic anti-aging effects from injections</li>
        <li>Effects beyond the application area</li>
      </ul>

      <h3 id="wound-healing">Claim: Wound Healing</h3>

      <div className="border-l-4 border-yellow-400 pl-4 my-4">
        <div className="flex items-center mb-2">
          <EvidenceTier tier={3} />
          <span className="ml-2 text-sm text-gray-600">(Human trials, mostly topical)</span>
        </div>
      </div>

      <p>
        GHK-Cu has reasonable evidence for promoting wound healing when applied topically:
      </p>

      <div className="bg-gray-50 rounded-lg p-5 my-4">
        <h4 className="font-semibold text-gray-900 mb-3">Key Studies</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Bishop et al. (2002):</strong> Copper peptide cream accelerated wound healing
            in patients after laser resurfacing.
          </li>
          <li>
            <strong>Canapp et al. (2003):</strong> Veterinary study showed accelerated wound
            healing in dogs with GHK-Cu treatment.
          </li>
          <li>
            <strong>Mulder et al. (1994):</strong> Early study showing copper peptides enhanced
            wound healing in human subjects.
          </li>
        </ul>
      </div>

      <p><strong>Evidence supports:</strong></p>
      <ul>
        <li>Topical GHK-Cu may accelerate superficial wound healing</li>
        <li>Useful post-procedure (laser, peels, minor injuries)</li>
      </ul>

      <p><strong>Evidence doesn&apos;t support:</strong></p>
      <ul>
        <li>Injectable GHK-Cu for internal injuries</li>
        <li>Dramatic acceleration of major wound healing</li>
        <li>Replacing proper wound care protocols</li>
      </ul>

      <h3 id="hair-growth">Claim: Hair Growth / Hair Loss Prevention</h3>

      <div className="border-l-4 border-orange-400 pl-4 my-4">
        <div className="flex items-center mb-2">
          <EvidenceTier tier={4} />
          <span className="ml-2 text-sm text-gray-600">(Primarily in vitro + animal)</span>
        </div>
      </div>

      <p>
        Hair growth claims are popular but the evidence is weaker than for skin:
      </p>

      <div className="bg-gray-50 rounded-lg p-5 my-4">
        <h4 className="font-semibold text-gray-900 mb-3">What Exists</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <strong>In vitro studies:</strong> GHK-Cu can increase hair follicle size in cell
            cultures and upregulate genes related to hair growth.
          </li>
          <li>
            <strong>Mechanism plausibility:</strong> Copper is involved in hair pigmentation and
            GHK-Cu may affect relevant pathways.
          </li>
          <li>
            <strong>Anecdotal reports:</strong> User reports of hair improvement exist but are
            uncontrolled and subject to bias.
          </li>
        </ul>
      </div>

      <p><strong>What&apos;s missing:</strong></p>
      <ul>
        <li>Controlled human trials specifically for hair loss</li>
        <li>Comparison to proven treatments (minoxidil, finasteride)</li>
        <li>Long-term efficacy data</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
        <p className="text-amber-800 text-sm">
          <strong>Reality check:</strong> If GHK-Cu reliably grew hair, it would be a first-line
          treatment by now. The evidence gap between lab studies and real-world results is significant.
        </p>
      </div>

      <h3 id="systemic-effects">Claim: Systemic Effects (Injectable)</h3>

      <div className="border-l-4 border-red-400 pl-4 my-4">
        <div className="flex items-center mb-2">
          <EvidenceTier tier={4} />
          <span className="ml-2 text-sm text-gray-600">(Limited human data)</span>
        </div>
      </div>

      <p>
        Claims about injectable GHK-Cu for systemic anti-aging, tissue repair, or cognitive
        enhancement have minimal evidence:
      </p>

      <ul>
        <li>Most GHK-Cu research uses topical application</li>
        <li>Injectable pharmacokinetics poorly characterized</li>
        <li>Systemic effects largely extrapolated from cell studies</li>
        <li>No controlled human trials for injectable GHK-Cu</li>
      </ul>

      <h2 id="regulatory">Regulatory Status</h2>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Form</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status (India)</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Cosmetic (topical)</td>
              <td className="px-4 py-3"><RegulatoryStatus status="approved" /></td>
              <td className="px-4 py-3 text-sm text-gray-600">Available in skincare products; regulated as cosmetic</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Injectable</td>
              <td className="px-4 py-3"><RegulatoryStatus status="gray" /></td>
              <td className="px-4 py-3 text-sm text-gray-600">Not approved for human injection; research chemical status</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">WADA</td>
              <td className="px-4 py-3"><RegulatoryStatus status="gray" /></td>
              <td className="px-4 py-3 text-sm text-gray-600">Not on prohibited list (as of 2024)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Key difference from other peptides:</strong> You can legally purchase GHK-Cu in
        skincare products in India. Major cosmetic brands include copper peptides. The injectable
        research chemical version is a separate matter.
      </p>

      <h2 id="comparison">GHK-Cu vs Other Peptides</h2>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Factor</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">GHK-Cu</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">BPC-157</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">TB-500</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Natural occurrence</td>
              <td className="px-4 py-3 text-sm text-gray-600">Yes (human body)</td>
              <td className="px-4 py-3 text-sm text-gray-600">Derived from natural</td>
              <td className="px-4 py-3 text-sm text-gray-600">Fragment of natural</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Human trial data</td>
              <td className="px-4 py-3 text-sm text-gray-600">Yes (topical)</td>
              <td className="px-4 py-3 text-sm text-gray-600">Very limited</td>
              <td className="px-4 py-3 text-sm text-gray-600">None (TB-500 specifically)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Legal availability</td>
              <td className="px-4 py-3 text-sm text-gray-600">Cosmetics: Yes</td>
              <td className="px-4 py-3 text-sm text-gray-600">Research only</td>
              <td className="px-4 py-3 text-sm text-gray-600">Research only</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Primary use case</td>
              <td className="px-4 py-3 text-sm text-gray-600">Skin/cosmetic</td>
              <td className="px-4 py-3 text-sm text-gray-600">Healing (claimed)</td>
              <td className="px-4 py-3 text-sm text-gray-600">Healing (claimed)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="practical">Practical Considerations</h2>

      <h3>If Interested in GHK-Cu for Skin</h3>
      <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4">
        <ul className="space-y-2 text-green-800">
          <li>✓ Topical products are legal and available in India</li>
          <li>✓ Evidence supports modest benefits for skin</li>
          <li>✓ Lower risk than injectable peptides</li>
          <li>✓ Can be combined with other proven ingredients (retinol, vitamin C)</li>
        </ul>
      </div>

      <h3>If Considering Injectable GHK-Cu</h3>
      <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
        <ul className="space-y-2 text-red-800">
          <li>✗ Not approved for injection in India</li>
          <li>✗ Limited evidence for systemic benefits</li>
          <li>✗ Same quality/contamination risks as other research peptides</li>
          <li>✗ Topical may achieve similar benefits with less risk</li>
        </ul>
      </div>

      <h2 id="summary">Summary</h2>

      <p>
        GHK-Cu is unusual among peptides discussed in fitness/biohacking communities because:
      </p>

      <ol>
        <li>It&apos;s naturally occurring in the human body</li>
        <li>It has actual human trial data (for topical use)</li>
        <li>It&apos;s legally available in cosmetic products</li>
      </ol>

      <p>
        For those interested in copper peptide benefits, <strong>topical GHK-Cu products offer a
        legal, evidence-supported option</strong> without the risks and uncertainty of research
        chemical injectables.
      </p>

      <p>
        The jump from &quot;topical skin benefits&quot; to &quot;injectable systemic anti-aging&quot;
        is not supported by current evidence.
      </p>

      <div className="bg-gray-100 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-900">Related Articles</h3>
        <ul className="mt-3 space-y-2">
          <li>
            <Link
              href="/learn/tb500-vs-bpc157-india"
              className="text-primary-600 hover:underline"
            >
              TB-500 vs BPC-157: A Detailed Comparison
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
              href="/learn/peptide-quality-testing-india"
              className="text-primary-600 hover:underline"
            >
              Peptide Quality Testing in India: What You Need to Know
            </Link>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
