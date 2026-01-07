import { FileText, Shield, CreditCard, RefreshCcw } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for using Peptide Clarity website and services.',
}

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
            <FileText className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-gray-600">
            Effective Date: January 2026
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Peptide Clarity (&quot;the Website&quot;), you agree to be bound by these
              Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Website.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the Website
              after any modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>2. Nature of Services</h2>
            <p>
              Peptide Clarity provides educational content and tools related to peptide science. Our
              services include:
            </p>
            <ul>
              <li>Free educational articles and resources</li>
              <li>Paid tools and comparison frameworks (&quot;Toolkit&quot;)</li>
              <li>Decision support frameworks</li>
            </ul>
            <p>
              <strong>Important:</strong> All content is for educational purposes only. We do not
              provide medical advice, dosage guidance, sourcing information, or recommendations for
              use of any substance. See our{' '}
              <a href="/disclaimer" className="text-primary-600">Disclaimer</a> for full details.
            </p>
          </section>

          <section>
            <h2>3. User Responsibilities</h2>
            <p>By using this Website, you agree to:</p>
            <ul>
              <li>Use the Website only for lawful, educational purposes</li>
              <li>Not rely on any content as medical advice</li>
              <li>Consult qualified healthcare professionals for health decisions</li>
              <li>Comply with all applicable laws in your jurisdiction</li>
              <li>Not distribute, reproduce, or resell any paid content without authorization</li>
              <li>Not attempt to circumvent any access controls or security measures</li>
              <li>Provide accurate information when creating an account or making purchases</li>
            </ul>
          </section>

          <section>
            <h2>4. Paid Services</h2>

            <h3>4.1 Pricing and Payment</h3>
            <ul>
              <li>All prices are listed in Indian Rupees (INR)</li>
              <li>Payment is processed securely via Razorpay</li>
              <li>Prices are subject to change; existing purchases are not affected</li>
              <li>GST/taxes may apply as per Indian law</li>
            </ul>

            <h3>4.2 Access</h3>
            <ul>
              <li>One-time purchases provide lifetime access to purchased content</li>
              <li>Access is personal and non-transferable</li>
              <li>&quot;Lifetime&quot; means the operational lifetime of the Website</li>
              <li>We reserve the right to modify or discontinue services with reasonable notice</li>
            </ul>

            <h3>4.3 Refund Policy</h3>
            <ul>
              <li>Refund requests accepted within 7 days of purchase</li>
              <li>Refunds issued to original payment method</li>
              <li>Refund requests should be sent to billing@peptideclarity.com</li>
              <li>Abuse of refund policy may result in account suspension</li>
            </ul>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              All content on this Website, including text, graphics, logos, tools, and software, is
              the property of Peptide Clarity or its licensors and is protected by copyright and
              other intellectual property laws.
            </p>
            <p>You may:</p>
            <ul>
              <li>Access and use content for personal, non-commercial educational purposes</li>
              <li>Share links to free content</li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>Reproduce, distribute, or resell any content without authorization</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use content for commercial purposes without written permission</li>
              <li>Create derivative works from paid content</li>
            </ul>
          </section>

          <section>
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              THE WEBSITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Accuracy, completeness, or reliability of content</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Uninterrupted or error-free operation</li>
            </ul>
            <p>
              We do not warrant that information is current or that any errors will be corrected.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PEPTIDE CLARITY AND ITS OPERATORS SHALL NOT BE
              LIABLE FOR ANY:
            </p>
            <ul>
              <li>Direct, indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or use</li>
              <li>Personal injury or property damage</li>
              <li>Damages arising from use or inability to use the Website</li>
              <li>Damages arising from reliance on any content</li>
            </ul>
            <p>
              <strong>Maximum liability:</strong> Our total liability for any claim shall not exceed
              the amount paid by you for paid services in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Peptide Clarity and its operators from any
              claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any decisions you make based on content from this Website</li>
            </ul>
          </section>

          <section>
            <h2>9. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from these Terms
              or your use of the Website shall be subject to the exclusive jurisdiction of the
              courts in [City], India.
            </p>
          </section>

          <section>
            <h2>10. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>
              For questions about these Terms, contact us at:{' '}
              <a href="mailto:legal@peptideclarity.com" className="text-primary-600">
                legal@peptideclarity.com
              </a>
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>Last updated: January 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}
