import { Shield, Eye, Database, Mail, Cookie } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Peptide Clarity - how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
            <Shield className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">
            Effective Date: January 2026
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section>
            <h2>Overview</h2>
            <p>
              Peptide Clarity (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy. This Privacy Policy
              explains what information we collect, how we use it, and your rights regarding
              your data.
            </p>
            <p>
              <strong>Our core principle:</strong> We collect only what we need, we don&apos;t sell your
              data, and we&apos;re transparent about our practices.
            </p>
          </section>

          <section>
            <h2 className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary-600" />
              Information We Collect
            </h2>

            <h3>Information You Provide</h3>
            <ul>
              <li>
                <strong>Email address:</strong> When you subscribe to updates or create an account
              </li>
              <li>
                <strong>Payment information:</strong> When you purchase paid content (processed
                securely by Razorpay; we do not store card details)
              </li>
              <li>
                <strong>Communications:</strong> When you contact us via email
              </li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li>
                <strong>Analytics data:</strong> Page views, referral sources, browser type, device
                type, country (collected via privacy-friendly analytics)
              </li>
              <li>
                <strong>Technical data:</strong> IP address (anonymized), browser type, operating
                system
              </li>
            </ul>

            <h3>Information We Do NOT Collect</h3>
            <ul>
              <li>Health information or medical history</li>
              <li>Information about substance use</li>
              <li>Sensitive personal data beyond what&apos;s necessary for services</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center">
              <Eye className="h-5 w-5 mr-2 text-primary-600" />
              How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Process payments and deliver purchased content</li>
              <li>Send service-related communications (purchase confirmations, updates)</li>
              <li>Send marketing emails (only with your consent; you can unsubscribe anytime)</li>
              <li>Analyze usage patterns to improve the Website</li>
              <li>Respond to your inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>

            <p>
              <strong>We do NOT:</strong>
            </p>
            <ul>
              <li>Sell your personal data to third parties</li>
              <li>Share your data with advertisers</li>
              <li>Use your data for profiling or targeted advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center">
              <Cookie className="h-5 w-5 mr-2 text-primary-600" />
              Cookies and Tracking
            </h2>
            <p>We use minimal cookies and tracking:</p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> Required for the Website to function (login
                sessions, purchase flow)
              </li>
              <li>
                <strong>Analytics:</strong> We use privacy-friendly analytics that do not track
                individual users across sites
              </li>
            </ul>
            <p>
              We do NOT use third-party advertising cookies or social media tracking pixels.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-2">Service</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Data Shared</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Razorpay</td>
                  <td className="py-2">Payment processing</td>
                  <td className="py-2">Payment details (not stored by us)</td>
                </tr>
                <tr>
                  <td className="py-2">Vercel</td>
                  <td className="py-2">Website hosting</td>
                  <td className="py-2">Technical data for site delivery</td>
                </tr>
                <tr>
                  <td className="py-2">Email provider</td>
                  <td className="py-2">Email delivery</td>
                  <td className="py-2">Email address</td>
                </tr>
                <tr>
                  <td className="py-2">Analytics</td>
                  <td className="py-2">Usage analytics</td>
                  <td className="py-2">Anonymized usage data</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Data Retention</h2>
            <ul>
              <li>
                <strong>Account data:</strong> Retained while your account is active; deleted upon
                request
              </li>
              <li>
                <strong>Purchase records:</strong> Retained as required by Indian tax law (typically
                7 years)
              </li>
              <li>
                <strong>Analytics data:</strong> Aggregated and anonymized; individual sessions not
                retained long-term
              </li>
              <li>
                <strong>Email communications:</strong> Retained until you unsubscribe
              </li>
            </ul>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your data (subject to legal
                retention requirements)
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a portable format
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing emails at any time
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@peptideclarity.com" className="text-primary-600">
                privacy@peptideclarity.com
              </a>
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>We implement appropriate security measures including:</p>
            <ul>
              <li>HTTPS encryption for all data transmission</li>
              <li>Secure payment processing via Razorpay (PCI-DSS compliant)</li>
              <li>Limited access to personal data on a need-to-know basis</li>
              <li>Regular security reviews</li>
            </ul>
            <p>
              While we take reasonable precautions, no method of transmission over the internet is
              100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              This Website is not intended for users under 18 years of age. We do not knowingly
              collect personal information from children. If you believe we have collected data
              from a minor, please contact us immediately.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by posting a notice on the Website or sending an email.
              Your continued use of the Website after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary-600" />
              Contact Us
            </h2>
            <p>For privacy-related questions or requests:</p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:privacy@peptideclarity.com" className="text-primary-600">
                  privacy@peptideclarity.com
                </a>
              </li>
            </ul>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>Last updated: January 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}
