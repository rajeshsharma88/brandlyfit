import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { SERVICES } from '@/content/services'

export const metadata: Metadata = buildMetadata({
  title: 'Services — Brandlyfit',
  description:
    'Meta Ads, Google Ads, e-commerce advertising, quick-commerce, Shopify, SEO, AEO, and GEO — eight services run as one AI-native growth system.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="above-grid section-padding hairline-bottom" aria-label="Services overview">
        <div className="container-brand">
          <div className="mb-8">
            <Eyebrow>What we do</Eyebrow>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h1
              className="font-display font-medium text-text"
              style={{
                fontSize: 'clamp(52px, 8vw, 112px)',
                letterSpacing: '-0.04em',
                lineHeight: 0.92,
              }}
            >
              Eight services.
              <span className="block">
                One{' '}
                <em
                  className="not-italic"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent-2)',
                    fontWeight: 400,
                  }}
                >
                  system
                </em>
                .
              </span>
            </h1>

            <p className="text-lead text-text-2 max-w-lg" style={{ fontWeight: 300 }}>
              Most agencies bolt services together. We run them as one connected AI workflow —
              creative, media, store, and search compounding into a single growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="above-grid section-padding" aria-label="All services">
        <div className="container-brand">
          <ul className="flex flex-col gap-px bg-border rounded-xl overflow-hidden">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-6 px-8 py-7 bg-bg hover:bg-surface transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset outline-none"
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <span className="text-label text-text-4 flex-shrink-0 w-6">{service.index}</span>

                    <div className="min-w-0">
                      <span
                        className="block font-display font-medium text-text group-hover:text-text transition-colors"
                        style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', letterSpacing: '-0.02em' }}
                      >
                        {service.name}
                      </span>
                      <span className="block text-label text-text-4 mt-1">{service.tagline}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 flex-shrink-0">
                    <p className="hidden md:block text-[14px] text-text-3 max-w-xs text-right leading-snug" style={{ fontWeight: 300 }}>
                      {service.shortDesc}
                    </p>
                    <ArrowUpRight
                      size={18}
                      className="text-text-4 group-hover:text-text-2 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
