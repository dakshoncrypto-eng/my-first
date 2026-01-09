import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Razorpay disabled - return message
  return NextResponse.json({
    success: false,
    message: 'Payments coming soon. Configure Razorpay keys to enable.',
  })
}
