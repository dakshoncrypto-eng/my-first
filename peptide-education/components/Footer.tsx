import Link from 'next/link'
import { FlaskConical } from 'lucide-react'

const footerLinks = {
  learn: [
    { name: 'All Articles', href: '/learn' },
    { name: 'BPC-157 Legal Status', href: '/learn/bpc-157-legal-india' },
    { name: 'Evidence Evaluation', href: '/learn/how-to-evaluate-peptide-claims' },
    { name: 'Regulation Overview', href: '/learn/peptides-vs-supplements-regulation-india' },
  ],
  tools: [
    { name: 'Preview Tool', href: '/preview' },
    { name: 'Full Toolkit', href: '/tools' },
  ],
  legal: [
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <FlaskConical className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">
                Peptide<span className="text-primary-400">Clarity</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Evidence-based peptide education for Indian fitness enthusiasts.
              Understand before you decide.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Learn
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Tools
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Peptide Clarity. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Educational content only. Not medical advice. See{' '}
              <Link href="/disclaimer" className="underline hover:text-gray-300">
                full disclaimer
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
