import type { Metadata, Viewport } from 'next'
import { Outfit, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SmoothScroll } from '@/components/SmoothScroll'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-instrument',
})

export const viewport: Viewport = {
  themeColor: '#1B2B4B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Professional Teeth Whitening | Bright Smile Clinic',
  description: 'Transform your smile with safe, professional teeth whitening.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${instrumentSerif.variable} font-sans antialiased noise-overlay`}>
        <SmoothScroll />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
