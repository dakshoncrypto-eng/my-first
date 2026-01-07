import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DisclaimerBanner } from '@/components/DisclaimerBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Peptide Clarity - Evidence-Based Peptide Education for India',
    template: '%s | Peptide Clarity',
  },
  description: 'Clear, evidence-based peptide education for Indian fitness enthusiasts. Understand mechanisms, evidence quality, and regulatory status before you decide.',
  keywords: ['peptides', 'BPC-157', 'peptide education', 'India', 'fitness', 'research peptides', 'evidence-based'],
  authors: [{ name: 'Peptide Clarity' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Peptide Clarity',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisclaimerBanner />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
