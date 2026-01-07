import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '@/components/ArticleLayout'
import { SummaryBox, UncertaintyBox } from '@/components/SummaryBox'
import { AlertTriangle, FileText, Scale, ShieldOff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Does "Research Use Only" Actually Mean?',
  description: 'Decoding the legal fiction behind research chemical labeling and what it implies for buyers in India.',
  keywords: ['research use only', 'research chemicals', 'peptides', 'legal', 'India'],
}

export default function ResearchUseOnlyPage() {
  return (
    <ArticleLayout
      title='What Does "Research Use Only" Actually Mean?'
      description="Decoding the legal fiction behind research chemical labeling and what it implies for buyers in India."
      category="Regulatory"
      readTime="5 min"
      lastUpdated="January 2026"
    >
      <SummaryBox
        title="Key Takeaways"
        type="warning"
        points={[
          '"Research use only" is a legal disclaimer, NOT a safety designation',
          'It allows vendors to avoid drug approval requirements by claiming non-human use',
          'It does NOT mean the product has been tested or verified for any purpose',
          'It does NOT protect buyers from legal or health consequences',
          'It creates a legal fiction that may or may not hold up under scrutiny',
        ]}
      />

      <h2 id="what-it-is">What "Research Use Only" Actually Is</h2>
      <p>
        When you see a peptide or compound labeled &quot;for research use only,&quot; &quot;not for human
        consumption,&quot; or &quot;laboratory reagent,&quot; you are seeing a <strong>legal disclaimer</strong>,
        not a product category or safety certification.
      </p>
      <p>
        This label exists because:
      </p>
      <ul>
        <li>
          Selling substances for human use requires regulatory approval (CDSCO in India, FDA in US)
        </li>
        <li>
          Research peptides have not been through the approval process
        </li>
        <li>
          By claiming the product is &quot;not for human use,&quot; vendors attempt to operate outside
          drug regulations
        </li>
      </ul>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
        <p className="text-amber-800 font-medium">
          In simple terms: It&apos;s a legal workaround, not a meaningful description of the product.
        </p>
      </div>

      <h2 id="what-it-is-not">What "Research Use Only" Is NOT</h2>

      <div className="space-y-4 my-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <ShieldOff className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-800">NOT a Safety Designation</h4>
              <p className="text-red-700 text-sm mt-1">
                The label does not mean the product has been tested for safety — either for
                laboratory use or any other purpose. It makes no claims about purity,
                sterility, or absence of contaminants.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <ShieldOff className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-800">NOT a Quality Certification</h4>
              <p className="text-red-700 text-sm mt-1">
                Unlike pharmaceutical-grade products, research chemicals are not manufactured
                under GMP (Good Manufacturing Practice) standards. Quality varies widely
                between suppliers.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <ShieldOff className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-800">NOT Legal Protection for Buyers</h4>
              <p className="text-red-700 text-sm mt-1">
                The disclaimer protects the seller, not the buyer. If you purchase a &quot;research
                chemical&quot; and use it in ways that violate regulations, the disclaimer does
                not shield you from consequences.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <ShieldOff className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-800">NOT a Guarantee of Actual Research Quality</h4>
              <p className="text-red-700 text-sm mt-1">
                Legitimate research institutions typically source compounds from certified
                suppliers with certificates of analysis, chain of custody, and quality
                documentation. Consumer-facing &quot;research chemical&quot; vendors rarely meet
                these standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="legal-fiction">The Legal Fiction</h2>
      <p>
        The &quot;research use only&quot; label creates a legal fiction with two parts:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900">The Seller&apos;s Fiction</h4>
          <p className="text-sm text-gray-600 mt-2">
            &quot;I am selling a laboratory reagent for research purposes. I am not selling a drug
            for human consumption. Therefore, I do not need drug approval.&quot;
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900">The Buyer&apos;s Fiction</h4>
          <p className="text-sm text-gray-600 mt-2">
            &quot;I am purchasing a research chemical for laboratory or scientific purposes.
            I am not planning to consume it myself.&quot;
          </p>
        </div>
      </div>

      <p>
        In reality, both parties often know that the product is likely to be used for human
        consumption. The labels exist to create plausible deniability.
      </p>

      <UncertaintyBox
        level="high"
        explanation="How regulators and courts would treat this legal fiction is uncertain. It has not been extensively tested in Indian courts for research peptides specifically."
      />

      <h2 id="why-it-exists">Why This System Exists</h2>
      <p>
        The research chemical market emerged because:
      </p>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          <strong>Drug approval is expensive and slow</strong> — Clinical trials cost millions
          and take years. No company will invest in approving compounds for which patents have
          expired or which have small potential markets.
        </li>
        <li>
          <strong>Demand exists</strong> — People want access to compounds being discussed in
          research literature and online communities, even without approval.
        </li>
        <li>
          <strong>Regulatory gap</strong> — Regulators primarily focus on approved drugs and
          controlled substances. Research chemicals fall into an under-monitored gray zone.
        </li>
        <li>
          <strong>Enforcement is limited</strong> — Regulators have finite resources and
          typically prioritize larger public health threats.
        </li>
      </ol>

      <h2 id="risks">Risks You Should Understand</h2>

      <h3>Quality and Purity Risks</h3>
      <ul>
        <li>
          <strong>No standardization:</strong> Different batches from the same vendor may vary
          significantly
        </li>
        <li>
          <strong>Contamination:</strong> Products may contain impurities, degradation products,
          or entirely different compounds
        </li>
        <li>
          <strong>Mislabeling:</strong> The actual content may not match what is on the label
        </li>
        <li>
          <strong>No recourse:</strong> If you receive a substandard product, you have limited
          legal options
        </li>
      </ul>

      <h3>Legal Risks</h3>
      <ul>
        <li>
          <strong>Regulatory interpretation:</strong> Authorities may not accept the &quot;research
          use&quot; defense, especially in large quantities
        </li>
        <li>
          <strong>Import seizure:</strong> Customs may seize products regardless of labeling
        </li>
        <li>
          <strong>Future changes:</strong> Regulatory environment may change, making currently
          gray-zone products explicitly illegal
        </li>
      </ul>

      <h3>Health Risks</h3>
      <ul>
        <li>
          <strong>Unknown safety profile:</strong> These compounds have not been through human
          safety trials
        </li>
        <li>
          <strong>No medical supervision:</strong> You are self-experimenting without professional
          guidance
        </li>
        <li>
          <strong>Unknown interactions:</strong> Effects with other medications or conditions
          are not studied
        </li>
        <li>
          <strong>No adverse event monitoring:</strong> If something goes wrong, there is no
          pharmacovigilance system tracking it
        </li>
      </ul>

      <h2 id="verification">How Legitimate Research Works</h2>
      <p>
        For context, here is how actual research institutions handle compound procurement:
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
        <ul className="space-y-2 text-blue-800 text-sm">
          <li>• Compounds are sourced from certified suppliers with quality management systems</li>
          <li>• Each batch comes with a Certificate of Analysis (CoA) from an independent lab</li>
          <li>• Chain of custody is documented</li>
          <li>• Storage and handling conditions are specified and verified</li>
          <li>• Research protocols are reviewed by ethics committees</li>
          <li>• Adverse events are reported and tracked</li>
        </ul>
      </div>
      <p>
        Consumer research chemical purchases typically have none of these safeguards.
      </p>

      <h2 id="bottom-line">The Bottom Line</h2>
      <p>
        &quot;Research use only&quot; is a legal fiction that allows a market to exist in a regulatory
        gray zone. It:
      </p>
      <ul>
        <li>Does not make the product safe</li>
        <li>Does not guarantee quality</li>
        <li>Does not protect you legally</li>
        <li>Does not mean anyone has verified the product for any purpose</li>
      </ul>
      <p>
        If you are researching these compounds, understand that the label is about regulatory
        positioning, not product characteristics.
      </p>

      <h2 id="sources">Sources</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>• Drugs and Cosmetics Act, 1940 (India) — Definition of &quot;drug&quot;</li>
        <li>• CDSCO New Drug Approval Guidelines</li>
        <li>• Research chemical industry practices and labeling conventions</li>
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
              href="/learn/peptides-vs-supplements-regulation-india"
              className="text-primary-600 hover:underline"
            >
              Peptides vs Supplements: How India Regulates Them Differently
            </Link>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
