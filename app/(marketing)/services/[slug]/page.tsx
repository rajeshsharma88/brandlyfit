import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { SERVICES } from '@/content/services'
import { ServiceDetail } from '@/components/sections/service-detail'

interface Params {
  slug: string
}

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDesc,
    path: `/services/${service.slug}`,
  })
}

function buildServiceSchema(service: (typeof SERVICES)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDesc,
    provider: {
      '@type': 'Organization',
      name: 'Brandlyfit',
      url: 'https://brandlyfit.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    url: `https://brandlyfit.com/services/${service.slug}`,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceSchema(service)),
        }}
      />
      <ServiceDetail service={service} />
    </>
  )
}
