import type { Metadata, Viewport } from 'next'
import './globals.css'
import { display, sans, mono, serif } from './fonts'
import { SmoothScrollProvider } from '@/components/layout/smooth-scroll'
import { CustomCursor } from '@/components/motion/cursor'
import { PageTransition } from '@/components/motion/page-transition'
import { Loader } from '@/components/motion/loader'

export const metadata: Metadata = {
  metadataBase: new URL('https://brandlyfit.com'),
  title: {
    default: 'Brandlyfit — AI-Native Marketing for D2C Brands',
    template: '%s | Brandlyfit',
  },
  description:
    'Brandlyfit helps D2C founders scale across Meta, Google, Amazon, Blinkit, Zepto and beyond — running the AI-native workflows their in-house teams can\'t move fast enough to build.',
  keywords: ['D2C marketing', 'Meta Ads', 'Google Ads', 'AI marketing', 'performance marketing India'],
  authors: [{ name: 'Brandlyfit' }],
  creator: 'Brandlyfit',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://brandlyfit.com',
    siteName: 'Brandlyfit',
    title: 'Brandlyfit — AI-Native Marketing for D2C Brands',
    description: 'The growth engine D2C brands wish they built in-house.',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandlyfit — AI-Native Marketing for D2C Brands',
    description: 'The growth engine D2C brands wish they built in-house.',
    images: ['/og/default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} ${serif.variable} h-full`}
    >
      <body className="min-h-full bg-bg text-text antialiased">
        <Loader />
        <SmoothScrollProvider>
          <PageTransition>
            <div id="root-layout" className="above-grid">
              {children}
            </div>
          </PageTransition>
        </SmoothScrollProvider>
        <CustomCursor />
      </body>
    </html>
  )
}
