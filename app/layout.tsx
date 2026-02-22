import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#0052CC',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Professional Teeth Whitening | Bright Smile Clinic',
  description: 'Transform your smile with safe, professional teeth whitening. Get 8+ shades whiter in one session. Schedule your free consultation today.',
  keywords: ['teeth whitening', 'professional whitening', 'smile transformation', 'dental whitening', 'cosmetic dentistry'],
  authors: [{ name: 'Bright Smile Clinic' }],
  creator: 'v0.app',
  publisher: 'Bright Smile Clinic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brightsmileclinic.com',
    siteName: 'Bright Smile Clinic',
    title: 'Professional Teeth Whitening | Bright Smile Clinic',
    description: 'Transform your smile with safe, professional teeth whitening. Get 8+ shades whiter in one session.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 600,
        alt: 'Professional teeth whitening transformation',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Teeth Whitening | Bright Smile Clinic',
    description: 'Transform your smile with safe, professional teeth whitening.',
    images: ['/images/hero.jpg'],
  },
  alternates: {
    canonical: 'https://brightsmileclinic.com',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
