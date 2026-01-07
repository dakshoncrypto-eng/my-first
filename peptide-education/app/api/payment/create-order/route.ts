import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

// Lazy initialization to avoid build-time errors when env vars aren't available
function getRazorpayInstance() {
  const key_id = process.env.RAZORPAY_KEY_ID
  const key_secret = process.env.RAZORPAY_KEY_SECRET

  if (!key_id || !key_secret) {
    throw new Error('Razorpay credentials not configured')
  }

  return new Razorpay({ key_id, key_secret })
}

export async function POST(request: NextRequest) {
  try {
    const razorpay = getRazorpayInstance()
    const { amount, currency = 'INR', receipt, notes } = await request.json()

    // Validate amount
    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Invalid amount. Minimum is ₹1 (100 paise)' },
        { status: 400 }
      )
    }

    const options = {
      amount: amount, // Amount in paise (₹999 = 99900 paise)
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    }

    const order = await razorpay.orders.create(options)

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
    })
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    return NextResponse.json(
      { error: 'Failed to create order. Please try again.' },
      { status: 500 }
    )
  }
}
