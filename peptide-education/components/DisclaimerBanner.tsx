'use client'

import { useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <strong>Educational content only.</strong> This site does not provide medical advice, dosage guidance, or sourcing information.{' '}
              <a href="/disclaimer" className="underline hover:text-amber-900">
                Read full disclaimer
              </a>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 rounded-md hover:bg-amber-100 transition-colors"
            aria-label="Dismiss disclaimer"
          >
            <X className="h-4 w-4 text-amber-600" />
          </button>
        </div>
      </div>
    </div>
  )
}
