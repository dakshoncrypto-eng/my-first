/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        evidence: {
          robust: '#16a34a',
          preliminary: '#ca8a04',
          animal: '#ea580c',
          theoretical: '#dc2626',
          anecdotal: '#6b7280',
        },
        status: {
          approved: '#16a34a',
          gray: '#ca8a04',
          prohibited: '#dc2626',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: '#1f2937',
            h1: {
              fontWeight: '700',
              color: '#111827',
            },
            h2: {
              fontWeight: '600',
              color: '#1f2937',
            },
            h3: {
              fontWeight: '600',
              color: '#374151',
            },
            a: {
              color: '#0284c7',
              '&:hover': {
                color: '#0369a1',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
