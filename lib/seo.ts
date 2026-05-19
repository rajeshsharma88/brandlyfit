import { Metadata } from 'next'

interface PageSEOProps {
  title: string
  description: string
  path?: string
  ogImage?: string
}

export function buildMetadata({ title, description, path = '', ogImage }: PageSEOProps): Metadata {
  const url = `https://brandlyfit.com${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage ?? '/og/default.png', width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      images: [ogImage ?? '/og/default.png'],
    },
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brandlyfit',
  url: 'https://brandlyfit.com',
  logo: 'https://brandlyfit.com/og/default.png',
  description:
    'AI-native marketing agency helping D2C brands scale across Meta, Google, Amazon, and quick commerce.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressRegion: 'NCR',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@brandlyfit.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/brandlyfit',
    'https://www.instagram.com/brandlyfit',
    'https://twitter.com/brandlyfit',
  ],
}
