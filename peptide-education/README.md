# Peptide Clarity

Evidence-based peptide education for Indian fitness enthusiasts.

## Overview

Peptide Clarity is an educational platform that provides:
- Clear, evidence-based information about peptides
- India-specific regulatory context
- Decision frameworks (not recommendations)
- Comparison tools and evidence tracking

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Content:** MDX
- **Icons:** Lucide React
- **Payments:** Razorpay
- **Analytics:** Plausible (privacy-friendly)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
peptide-education/
├── app/                    # Next.js App Router pages
│   ├── learn/             # Educational articles
│   ├── tools/             # Paid toolkit
│   ├── preview/           # Free preview tool
│   ├── disclaimer/        # Legal disclaimer
│   ├── terms/             # Terms of service
│   └── privacy/           # Privacy policy
├── components/            # Reusable React components
├── lib/                   # Utility functions and data
└── public/                # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `RAZORPAY_KEY_ID` | Yes | Razorpay API key (server) |
| `RAZORPAY_KEY_SECRET` | Yes | Razorpay secret (server) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Yes | Razorpay API key (client) |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL (e.g., https://peptideclarity.in) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Plausible domain for analytics |

4. Deploy

### Post-Deployment Checklist

- [ ] Verify Razorpay test mode works
- [ ] Switch to Razorpay live keys when ready
- [ ] Set up Plausible account and verify tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Set up domain in Razorpay dashboard

## Important Notes

- This is an educational platform only
- No medical advice, dosage guidance, or sourcing information is provided
- All content includes appropriate disclaimers
- See `/disclaimer` for full legal disclaimer

## License

All rights reserved.
