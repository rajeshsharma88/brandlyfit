import type { Metadata } from 'next'
import { buildMetadata, organizationSchema } from '@/lib/seo'
import { Hero } from '@/components/sections/hero'
import { ClientMarquee } from '@/components/sections/client-marquee'
import { ServicesGrid } from '@/components/sections/services-grid'
import { FeaturedCaseStudy } from '@/components/sections/featured-case-study'
import { ProcessPinned } from '@/components/sections/process-pinned'
import { Stats } from '@/components/sections/stats'
import { Testimonials } from '@/components/sections/testimonials'
import { CtaBlock } from '@/components/sections/cta-block'

export const metadata: Metadata = buildMetadata({
  title: 'Brandlyfit — AI-Native Marketing for D2C Brands',
  description:
    "The growth engine D2C brands wish they built in-house. We help you scale across Meta, Google, Amazon, Blinkit, Zepto and beyond.",
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <ClientMarquee />
      <ServicesGrid />
      <FeaturedCaseStudy />
      <ProcessPinned />
      <Stats />
      <Testimonials />
      <CtaBlock />
    </>
  )
}
