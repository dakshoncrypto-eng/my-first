import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DisclaimerBanner } from '@/components/DisclaimerBanner'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://peptideclarity.com'

export const metadata: Metadata = {
  title: {
    default: 'Peptide Clarity - Evidence-Based Peptide Education for India',
    template: '%s | Peptide Clarity',
  },
  description: 'Clear, evidence-based peptide education for Indian fitness enthusiasts. Understand mechanisms, evidence quality, and regulatory status before you decide.',
  keywords: ['peptides', 'BPC-157', 'peptide education', 'India', 'fitness', 'research peptides', 'evidence-based', 'TB-500', 'Ipamorelin'],
  authors: [{ name: 'Peptide Clarity' }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Peptide Clarity',
    title: 'Peptide Clarity - Evidence-Based Peptide Education for India',
    description: 'Clear, evidence-based peptide education for Indian fitness enthusiasts. No hype. No protocols. Just structured clarity.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Peptide Clarity - Understand before you decide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Clarity - Evidence-Based Peptide Education',
    description: 'Clear peptide education for Indian fitness enthusiasts. No hype. Just clarity.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics - privacy-friendly, no cookie banner needed */}
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="font-sans">
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
