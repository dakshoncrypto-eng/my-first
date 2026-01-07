'use client'

import { useState, useEffect } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import {
  createOrder,
  verifyPayment,
  loadRazorpayScript,
  openCheckout,
  RazorpayPaymentResponse,
} from '@/lib/razorpay'

interface CheckoutButtonProps {
  amount: number // in rupees
  productName: string
  className?: string
  onSuccess?: (access: any) => void
  onError?: (error: string) => void
}

type CheckoutState = 'idle' | 'loading' | 'success' | 'error'

export function CheckoutButton({
  amount,
  productName,
  className = '',
  onSuccess,
  onError,
}: CheckoutButtonProps) {
  const [state, setState] = useState<CheckoutState>('idle')
  const [error, setError] = useState<string | null>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // Load Razorpay script on mount
  useEffect(() => {
    loadRazorpayScript().then(setScriptLoaded)
  }, [])

  const handleCheckout = async () => {
    if (!scriptLoaded) {
      setError('Payment system is loading. Please try again.')
      return
    }

    setState('loading')
    setError(null)

    try {
      // Create order on server
      const order = await createOrder({
        amount: amount * 100, // Convert to paise
        notes: {
          product: productName,
        },
      })

      // Open Razorpay checkout
      openCheckout({
        order,
        onSuccess: async (response: RazorpayPaymentResponse) => {
          // Verify payment on server
          const verification = await verifyPayment(response)

          if (verification.success) {
            setState('success')

            // Store access token locally
            if (verification.access) {
              localStorage.setItem('peptide_clarity_access', JSON.stringify(verification.access))
            }

            onSuccess?.(verification.access)
          } else {
            setState('error')
            setError(verification.error || 'Payment verification failed')
            onError?.(verification.error || 'Payment verification failed')
          }
        },
        onError: (err: any) => {
          setState('error')
          const errorMessage = err?.error?.description || 'Payment failed. Please try again.'
          setError(errorMessage)
          onError?.(errorMessage)
        },
      })
    } catch (err) {
      setState('error')
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
      setError(errorMessage)
      onError?.(errorMessage)
    }
  }

  if (state === 'success') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="flex items-center text-green-600 mb-2">
          <CheckCircle2 className="h-6 w-6 mr-2" />
          <span className="font-semibold">Payment Successful!</span>
        </div>
        <p className="text-sm text-gray-600">
          You now have lifetime access to the toolkit.
        </p>
        <a
          href="/toolkit"
          className="mt-4 btn-primary"
        >
          Access Your Toolkit
        </a>
      </div>
    )
  }

  return (
    <div className={className}>
      <button
        onClick={handleCheckout}
        disabled={state === 'loading' || !scriptLoaded}
        className="btn-primary w-full py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {state === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>Get Toolkit — ₹{amount.toLocaleString('en-IN')}</>
        )}
      </button>

      {!scriptLoaded && (
        <p className="text-xs text-gray-500 text-center mt-2">
          Loading payment system...
        </p>
      )}

      {error && (
        <div className="mt-3 flex items-start text-sm text-red-600 bg-red-50 p-3 rounded-lg">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <p className="mt-3 text-xs text-center text-gray-500">
        Secure payment via Razorpay. UPI, Cards, Net Banking accepted.
      </p>
    </div>
  )
}
