import { NextRequest, NextResponse } from 'next/server'

// Simple email storage for MVP
// In production, integrate with ConvertKit, Buttondown, or similar
// For now, we'll log and could store in a simple JSON file or database

interface Subscriber {
  email: string
  source: string
  subscribedAt: string
  ip?: string
}

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim()

    // Create subscriber record
    const subscriber: Subscriber = {
      email: normalizedEmail,
      source: source || 'website',
      subscribedAt: new Date().toISOString(),
    }

    // Log the subscription (visible in Vercel logs)
    console.log('NEW_SUBSCRIBER:', JSON.stringify(subscriber))

    // TODO: In production, integrate with email service:
    // - ConvertKit: https://developers.convertkit.com/
    // - Buttondown: https://buttondown.email/api
    // - Resend: https://resend.com/docs
    //
    // Example ConvertKit integration:
    // await fetch('https://api.convertkit.com/v3/forms/FORM_ID/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: process.env.CONVERTKIT_API_KEY,
    //     email: normalizedEmail,
    //   }),
    // })

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed',
    })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
