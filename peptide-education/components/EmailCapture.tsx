'use client'

import { useState } from 'react'
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

interface EmailCaptureProps {
  variant?: 'inline' | 'card' | 'minimal'
  source?: string
  className?: string
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export function EmailCapture({
  variant = 'card',
  source = 'website',
  className = '',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<SubmitState>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setState('loading')
    setError(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to subscribe')
      }

      setState('success')
      setEmail('')
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  if (state === 'success') {
    return (
      <div className={`flex items-center justify-center p-4 bg-green-50 rounded-lg ${className}`}>
        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
        <span className="text-green-800 font-medium">You're subscribed! Check your email.</span>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          disabled={state === 'loading'}
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="btn-primary px-4 py-2 text-sm"
        >
          {state === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`bg-gray-50 border border-gray-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-start space-x-3">
          <Mail className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              Get evidence updates
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              New research summaries when they matter. No spam.
            </p>
            <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={state === 'loading'}
              />
              <button
                type="submit"
                disabled={state === 'loading'}
                className="btn-primary px-3 py-1.5 text-sm"
              >
                {state === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Join'}
              </button>
            </form>
            {error && (
              <p className="mt-1 text-xs text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Card variant (default)
  return (
    <div className={`bg-primary-50 border border-primary-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <Mail className="h-6 w-6 text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
      </div>
      <p className="text-gray-600 text-sm">
        Get notified when we publish new evidence summaries or regulatory updates.
        No spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={state === 'loading'}
          />
          <button
            type="submit"
            disabled={state === 'loading'}
            className="btn-primary px-6 py-2 whitespace-nowrap"
          >
            {state === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </p>
        )}
      </form>
      <p className="mt-3 text-xs text-gray-500">
        We respect your privacy. See our{' '}
        <a href="/privacy" className="underline hover:text-gray-700">privacy policy</a>.
      </p>
    </div>
  )
}
