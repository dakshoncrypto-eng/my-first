import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      email,
    } = await request.json()

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment verification data' },
        { status: 400 }
      )
    }

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex')

    const isValid = expectedSignature === razorpay_signature

    if (!isValid) {
      return NextResponse.json(
        { error: 'Payment verification failed. Invalid signature.' },
        { status: 400 }
      )
    }

    // Payment verified successfully
    // In production, you would:
    // 1. Store the purchase in a database
    // 2. Generate access credentials
    // 3. Send confirmation email
    // 4. Update user's access status

    // For now, we'll return success with access info
    const accessToken = generateAccessToken(razorpay_payment_id)

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
      access: {
        token: accessToken,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        purchasedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Error verifying payment:', error)
    return NextResponse.json(
      { error: 'Payment verification failed. Please contact support.' },
      { status: 500 }
    )
  }
}

// Simple token generation for MVP
// In production, use proper JWT or database-backed tokens
function generateAccessToken(paymentId: string): string {
  const timestamp = Date.now()
  const data = `${paymentId}:${timestamp}`
  return Buffer.from(data).toString('base64')
}
