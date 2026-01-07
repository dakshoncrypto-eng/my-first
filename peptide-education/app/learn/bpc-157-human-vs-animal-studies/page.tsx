import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/ArticleLayout'
import { SummaryBox, UncertaintyBox } from '@/components/SummaryBox'
import { EvidenceTier, EvidenceTierLegend } from '@/components/EvidenceTier'
import { AlertTriangle, Microscope, Users, FlaskConical } from 'lucide-react'

export const metadata: Metadata = {
  title: 'BPC-157: Human Studies vs Animal Studies — What We Actually Know',
  description: 'An honest breakdown of the evidence quality for BPC-157, distinguishing what we know from what we speculate.',
  keywords: ['BPC-157', 'evidence', 'human studies', 'animal studies', 'research'],
}

export default function BPC157EvidencePage() {
  return (
    <ArticleLayout
      title="BPC-157: Human Studies vs Animal Studies — What We Actually Know"
      description="An honest breakdown of the evidence quality for BPC-157, distinguishing what we know from what we speculate."
      category="Evidence"
      readTime="10 min"
      lastUpdated="January 2026"
    >
      <SummaryBox
        title="Evidence Summary"
        type="warning"
        points={[
          'BPC-157 evidence is primarily from ANIMAL studies (rats, mice)',
          'Human evidence is VERY LIMITED — a few small, low-quality trials',
          'No large randomized controlled trials (RCTs) in humans exist',
          'Animal results do NOT reliably predict human effects',
          'Overall evidence tier: TIER 3 (Animal Studies Only)',
        ]}
      />

      <div className="flex items-center justify-center my-6">
        <EvidenceTier tier={3} showDescription />
      </div>

      <h2 id="why-distinction-matters">Why This Distinction Matters</h2>
      <p>
        One of the most common problems in peptide discussions is the conflation of animal and
        human evidence. Claims like &quot;studies show BPC-157 heals tendons&quot; often reference rat
        studies as if they apply to humans.
      </p>
      <p>This matters because:</p>
      <ul>
        <li>
          <strong>Animal studies are not human studies.</strong> What works in rats often does
          not work in humans, and vice versa.
        </li>
        <li>
          <strong>Dosing doesn&apos;t translate directly.</strong> A dose effective in a 300g rat
          cannot be simply scaled to humans by body weight.
        </li>
        <li>
          <strong>Safety profiles differ.</strong> Humans may experience side effects or risks
          not seen in animals.
        </li>
        <li>
          <strong>Context differs.</strong> Lab conditions don&apos;t match real-world human use.
        </li>
      </ul>

      <h2 id="evidence-hierarchy">Understanding Evidence Hierarchy</h2>
      <p>
        Not all evidence is equal. Here&apos;s the standard hierarchy from strongest to weakest:
      </p>

      <div className="my-6">
        <EvidenceTierLegend />
      </div>

      <p>
        BPC-157 sits at <strong>Tier 3</strong> — primarily animal evidence, with very limited
        human data that does not meet standards for clinical conclusions.
      </p>

      <h2 id="animal-evidence">What Animal Studies Show</h2>
      <p>
        The animal literature on BPC-157 is extensive, primarily from a research group in Croatia
        led by Predrag Sikiric. Key findings from animal studies include:
      </p>

      <h3>Tissue Healing</h3>
      <ul>
        <li>
          <strong>Tendons and ligaments:</strong> Rat studies show accelerated healing of
          transected Achilles tendons and medial collateral ligaments
        </li>
        <li>
          <strong>Muscle:</strong> Faster healing of crushed muscle tissue in rats
        </li>
        <li>
          <strong>Bone:</strong> Some evidence of improved fracture healing in animal models
        </li>
      </ul>

      <h3>Gastrointestinal Protection</h3>
      <ul>
        <li>
          <strong>NSAID damage:</strong> Protection against aspirin and ibuprofen-induced gut
          damage in rats
        </li>
        <li>
          <strong>Ulcers:</strong> Healing of various types of induced ulcers in animal models
        </li>
        <li>
          <strong>Inflammatory bowel disease:</strong> Improvement in animal IBD models
        </li>
      </ul>

      <h3>Other Effects</h3>
      <ul>
        <li>Blood vessel formation (angiogenesis)</li>
        <li>Nerve healing in some models</li>
        <li>Potential effects on dopamine systems</li>
        <li>Various cytoprotective effects</li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-amber-800">Critical Limitation</p>
            <p className="text-amber-700 mt-1">
              Most of this research comes from a single research group. Independent replication
              by other labs is limited. The research also has methodological concerns (small
              sample sizes, lack of blinding in some studies).
            </p>
          </div>
        </div>
      </div>

      <h2 id="human-evidence">What Human Studies Show</h2>
      <p>
        Human evidence for BPC-157 is <strong>very limited</strong>. Here&apos;s what exists:
      </p>

      <h3>Published Human Studies</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Study</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Condition</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Participants</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quality</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm">Veljaca et al. (Phase II)</td>
              <td className="px-4 py-3 text-sm">Inflammatory Bowel Disease</td>
              <td className="px-4 py-3 text-sm">~30</td>
              <td className="px-4 py-3 text-sm text-orange-600">Low</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">Various small trials</td>
              <td className="px-4 py-3 text-sm">Wound healing</td>
              <td className="px-4 py-3 text-sm">&lt;50 total</td>
              <td className="px-4 py-3 text-sm text-orange-600">Low</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Key Problems with Human Evidence</h3>
      <ul>
        <li>
          <strong>Sample sizes are tiny</strong> — The largest trials have ~30 participants,
          far below what&apos;s needed for reliable conclusions
        </li>
        <li>
          <strong>Lack of independent replication</strong> — Most studies come from affiliated
          research groups
        </li>
        <li>
          <strong>Methodological issues</strong> — Many studies lack proper blinding, control
          groups, or standardized outcomes
        </li>
        <li>
          <strong>Publication bias</strong> — Negative results are less likely to be published
        </li>
        <li>
          <strong>No Phase 3 trials</strong> — The gold standard for efficacy has not been
          conducted
        </li>
      </ul>

      <UncertaintyBox
        level="very-high"
        explanation="The human evidence is insufficient to draw conclusions about efficacy or safety. We cannot say whether BPC-157 works in humans for any indication."
      />

      <h2 id="translation-problem">The Translation Problem</h2>
      <p>
        Why can&apos;t we just assume animal results apply to humans? Consider:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 flex items-center">
            <FlaskConical className="h-5 w-5 mr-2 text-gray-600" />
            Drug Development Reality
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            Over <strong>90% of drugs</strong> that show promise in animal studies fail in human
            trials. Success in rats is a weak predictor of success in humans.
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 flex items-center">
            <Microscope className="h-5 w-5 mr-2 text-gray-600" />
            Biological Differences
          </h4>
          <p className="text-sm text-gray-600 mt-2">
            Rats and humans have different metabolisms, immune systems, healing processes, and
            drug responses. What works in one species often doesn&apos;t work in another.
          </p>
        </div>
      </div>

      <h3>Examples of Translation Failure</h3>
      <ul>
        <li>
          <strong>Alzheimer&apos;s drugs:</strong> Hundreds of compounds worked in mouse models
          but failed in humans
        </li>
        <li>
          <strong>Cancer treatments:</strong> Most promising animal results don&apos;t translate
        </li>
        <li>
          <strong>Anti-inflammatory agents:</strong> Many drugs effective in rats cause harm
          in humans
        </li>
      </ul>

      <h2 id="common-claims">Common Claims Evaluated</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-gray-900">
              &quot;BPC-157 heals tendons and ligaments&quot;
            </h4>
            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
              Weak Evidence
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Reality:</strong> Animal studies show effects on tendon healing in rats.
            No quality human studies confirm this. We cannot say it works for human tendon injuries.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-gray-900">
              &quot;BPC-157 heals the gut / treats leaky gut&quot;
            </h4>
            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
              Weak Evidence
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Reality:</strong> Animal studies show gut-protective effects. Very limited
            human IBD data exists but is low quality. &quot;Leaky gut&quot; itself is not a well-defined
            medical diagnosis.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-gray-900">
              &quot;BPC-157 is safe because it&apos;s derived from human gastric juice&quot;
            </h4>
            <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
              Misleading
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Reality:</strong> BPC-157 is a synthetic peptide inspired by a sequence found
            in gastric juice, not extracted from it. Being &quot;natural&quot; or &quot;derived from the body&quot;
            does not mean safe. Many toxins are natural.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-gray-900">
              &quot;BPC-157 has no side effects&quot;
            </h4>
            <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
              Unknown
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Reality:</strong> We don&apos;t know the side effect profile in humans because
            adequate human studies haven&apos;t been done. Absence of reported side effects in small
            trials does not mean absence of side effects.
          </p>
        </div>
      </div>

      <h2 id="honest-assessment">An Honest Assessment</h2>
      <p>
        Based on available evidence, here&apos;s what we can honestly say about BPC-157:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800">What We Can Say</h4>
          <ul className="mt-2 text-sm text-green-700 space-y-1">
            <li>• Shows effects in animal models of tissue healing</li>
            <li>• Has been studied extensively in rats</li>
            <li>• Has a plausible mechanism of action</li>
            <li>• May warrant further human research</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800">What We Cannot Say</h4>
          <ul className="mt-2 text-sm text-red-700 space-y-1">
            <li>• That it works in humans for any condition</li>
            <li>• That it is safe for human use</li>
            <li>• What an effective or safe dose would be</li>
            <li>• What long-term effects might occur</li>
          </ul>
        </div>
      </div>

      <h2 id="decision-framework">How to Think About This</h2>
      <p>
        If you&apos;re researching BPC-157, consider these questions:
      </p>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          Am I comfortable making decisions based on animal studies that may not apply to humans?
        </li>
        <li>
          Do I understand that &quot;promising&quot; does not mean &quot;proven&quot;?
        </li>
        <li>
          Am I prepared for the possibility that it doesn&apos;t work or causes harm?
        </li>
        <li>
          Have I consulted with a healthcare professional about my specific situation?
        </li>
      </ol>

      <h2 id="sources">Sources</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>
          • Sikiric P, et al. &quot;Brain-gut Axis and Pentadecapeptide BPC 157&quot; — Review of
          animal literature (multiple publications)
        </li>
        <li>
          • Veljaca M, et al. — Phase II IBD trial data (limited availability)
        </li>
        <li>
          • General drug development statistics on animal-to-human translation rates
        </li>
        <li>
          • PubMed search: &quot;BPC-157 human trial&quot; — Limited results as of 2026
        </li>
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
