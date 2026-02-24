import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

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
      <body className="font-sans antialiased noise-overlay">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
