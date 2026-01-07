// Razorpay client-side utilities

export const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID

export interface RazorpayOrder {
  id: string
  amount: number
  currency: string
  receipt: string
}

export interface RazorpayPaymentResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

export interface CreateOrderParams {
  amount: number // in paise
  currency?: string
  receipt?: string
  notes?: Record<string, string>
}

export async function createOrder(params: CreateOrderParams): Promise<RazorpayOrder> {
  const response = await fetch('/api/payment/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to create order')
  }

  const data = await response.json()
  return data.order
}

export async function verifyPayment(
  paymentResponse: RazorpayPaymentResponse,
  email?: string
): Promise<{ success: boolean; access?: any; error?: string }> {
  const response = await fetch('/api/payment/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...paymentResponse,
      email,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    return { success: false, error: data.error }
  }

  return { success: true, access: data.access }
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false)
      return
    }

    if ((window as any).Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export interface OpenCheckoutParams {
  order: RazorpayOrder
  onSuccess: (response: RazorpayPaymentResponse) => void
  onError: (error: any) => void
  prefill?: {
    name?: string
    email?: string
    contact?: string
  }
}

export function openCheckout({
  order,
  onSuccess,
  onError,
  prefill,
}: OpenCheckoutParams): void {
  if (!(window as any).Razorpay) {
    onError(new Error('Razorpay SDK not loaded'))
    return
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: 'Peptide Clarity',
    description: 'Peptide Clarity Toolkit - Lifetime Access',
    order_id: order.id,
    handler: onSuccess,
    prefill: prefill || {},
    theme: {
      color: '#0284c7', // primary-600
    },
    modal: {
      ondismiss: () => {
        console.log('Checkout modal dismissed')
      },
    },
  }

  const razorpay = new (window as any).Razorpay(options)
  razorpay.on('payment.failed', onError)
  razorpay.open()
}
