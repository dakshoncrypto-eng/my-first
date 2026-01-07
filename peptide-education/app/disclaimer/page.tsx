import { AlertTriangle, Shield, Scale, FileText } from 'lucide-react'

export const metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimer regarding the educational nature of Peptide Clarity content.',
}

export default function DisclaimerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
            <AlertTriangle className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Important Disclaimer</h1>
          <p className="mt-2 text-gray-600">
            Please read this carefully before using Peptide Clarity.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8">
          {/* Main Disclaimer Box */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
            <h2 className="text-lg font-bold text-amber-800 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Educational Content Only
            </h2>
            <p className="mt-3 text-amber-900">
              This website provides <strong>educational information only</strong>. Nothing on this
              site should be interpreted as medical advice, a recommendation to use any substance,
              or guidance on administration, dosage, or sourcing.
            </p>
          </div>

          {/* What This Site Is */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary-600" />
              What This Site Is
            </h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                An educational resource for understanding peptide science
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                A synthesis of publicly available research and regulatory information
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                A framework for evaluating claims and evidence quality
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                India-specific regulatory context and status information
              </li>
            </ul>
          </section>

          {/* What This Site Is NOT */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-red-600" />
              What This Site Is NOT
            </h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✕</span>
                Medical advice or a substitute for professional medical consultation
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✕</span>
                A recommendation to use, purchase, or administer any peptide
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✕</span>
                Dosage, administration, or protocol guidance
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✕</span>
                Sourcing information or supplier recommendations
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✕</span>
                A guarantee of accuracy, completeness, or timeliness of information
              </li>
            </ul>
          </section>

          {/* Regulatory Status */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <Scale className="h-5 w-5 mr-2 text-primary-600" />
              Regarding Regulatory Status
            </h2>
            <div className="mt-4 text-gray-700 space-y-4">
              <p>
                Many peptides discussed on this site are <strong>not approved for human use</strong> in
                India or elsewhere. They may be classified as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Research chemicals (for laboratory use only)</li>
                <li>Investigational compounds (not approved by any regulatory authority)</li>
                <li>Unapproved drugs under CDSCO regulations</li>
                <li>Prohibited substances under WADA anti-doping rules</li>
              </ul>
              <p>
                Regulatory status varies by jurisdiction and changes over time. Information provided
                here reflects our best understanding at the time of writing but may not be current
                or complete.
              </p>
            </div>
          </section>

          {/* Assumption of Risk */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900">Assumption of Risk</h2>
            <div className="mt-4 text-gray-700 space-y-4">
              <p>
                By using this website, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You are accessing this information for <strong>educational purposes only</strong>
                </li>
                <li>
                  You assume <strong>full responsibility</strong> for any decisions you make based on
                  information found here
                </li>
                <li>
                  You will <strong>consult with qualified healthcare professionals</strong> before
                  making any health-related decisions
                </li>
                <li>
                  You understand that using unapproved substances carries <strong>unknown risks</strong>
                </li>
                <li>
                  You will comply with all <strong>applicable laws and regulations</strong> in your
                  jurisdiction
                </li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
            <div className="mt-4 text-gray-700 space-y-4">
              <p>
                To the fullest extent permitted by law, Peptide Clarity and its operators:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Make no warranties or representations about the accuracy, reliability, completeness,
                  or timeliness of any content
                </li>
                <li>
                  Disclaim all liability for any harm, injury, or damage arising from use of this
                  website or reliance on its content
                </li>
                <li>
                  Are not responsible for any decisions made based on information provided here
                </li>
                <li>
                  Limit maximum liability to the amount paid by the user for any paid services
                </li>
              </ul>
            </div>
          </section>

          {/* Medical Emergency */}
          <section className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-red-800">Medical Emergency</h2>
            <p className="mt-2 text-red-700">
              If you are experiencing a medical emergency, <strong>call emergency services
              immediately</strong> or go to your nearest emergency room. Do not rely on any
              information from this website in an emergency situation.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Questions about this disclaimer? Contact us at{' '}
              <a href="mailto:legal@peptideclarity.com" className="text-primary-600 hover:underline">
                legal@peptideclarity.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
