import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { CASE_STUDIES } from '@/content/case-studies'

export const metadata: Metadata = buildMetadata({
  title: 'Work — Brandlyfit',
  description:
    '65+ clients across 10 industries. Case studies from healthcare technology, franchise networks, non-profits, and laboratory services.',
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="Work overview"
      >
        <div className="container-brand">
          <div className="mb-8">
            <Eyebrow>Our work</Eyebrow>
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
              65+ clients.
              <span className="block">
                Real{' '}
                <em
                  className="not-italic"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent-2)',
                    fontWeight: 400,
                  }}
                >
                  results
                </em>
                .
              </span>
            </h1>

            <p
              className="text-lead text-text-2 max-w-lg"
              style={{ fontWeight: 300 }}
            >
              From a $52.6M healthcare technology company to local businesses
              across Delhi NCR — every engagement is built on the same AI-native
              system, scaled to fit.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies grid */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="Case studies"
      >
        <div className="container-brand">
          <div className="mb-16">
            <Eyebrow>Featured case studies</Eyebrow>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group flex flex-col gap-8 p-8 md:p-10 bg-bg hover:bg-surface transition-colors duration-200"
              >
                {/* Visual placeholder */}
                <div className="relative w-full aspect-[4/3] bg-surface-2 border border-border rounded-xl overflow-hidden flex items-center justify-center">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <div className="relative flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-sm" />
                    <span
                      className="font-display font-medium text-text-3"
                      style={{ fontSize: 13, letterSpacing: '-0.01em' }}
                    >
                      {study.client}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-label text-text-4">
                    {study.coverLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-label text-text-4">
                      {study.index} / {study.industry.toLowerCase()}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-text-4 group-hover:text-text-2 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </div>

                  <h2
                    className="font-display font-medium text-text"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.1,
                    }}
                  >
                    {study.client}
                  </h2>

                  <p
                    className="text-[15px] text-text-2 leading-relaxed line-clamp-3"
                    style={{ fontWeight: 300 }}
                  >
                    {study.excerpt}
                  </p>

                  {/* Stats row */}
                  <div className="flex flex-wrap gap-x-6 gap-y-3 mt-2">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-0.5">
                        <span
                          className="font-display font-medium text-text"
                          style={{ fontSize: 20, letterSpacing: '-0.02em' }}
                        >
                          {stat.value}
                        </span>
                        <span className="text-label text-text-4">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client summary */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="Client overview"
      >
        <div className="container-brand">
          <div className="mb-16">
            <Eyebrow>By the numbers</Eyebrow>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {[
              { value: '65+', label: 'Total clients' },
              { value: '10+', label: 'Industries' },
              { value: '$52.6M', label: 'Largest client revenue' },
              { value: '37.24%', label: 'Client YoY growth' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-3 p-8 md:p-10 bg-bg"
              >
                <span
                  className="font-display font-medium text-text"
                  style={{
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-label text-text-4">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="above-grid section-padding" aria-label="Industries">
        <div className="container-brand">
          <div className="mb-16">
            <Eyebrow>Industries we serve</Eyebrow>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2
                className="font-display font-medium text-text mb-6"
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                Multi-industry{' '}
                <em
                  className="not-italic"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent-2)',
                    fontWeight: 400,
                  }}
                >
                  expertise
                </em>
                .
              </h2>
              <p
                className="text-lead text-text-2"
                style={{ fontWeight: 300 }}
              >
                Real Estate, Healthcare, Education, Technology, Food &amp;
                Beverage, Hospitality, Financial Services, Retail,
                Transportation, and Digital Services.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Real Estate', count: 10 },
                  { name: 'Education', count: 9 },
                  { name: 'Technology', count: 8 },
                  { name: 'Retail', count: 8 },
                  { name: 'Healthcare', count: 7 },
                  { name: 'Food & Beverage', count: 5 },
                  { name: 'Financial', count: 4 },
                  { name: 'Hospitality', count: 4 },
                ].map((ind) => (
                  <div
                    key={ind.name}
                    className="flex items-center justify-between px-5 py-4 bg-surface border border-border rounded-xl"
                  >
                    <span
                      className="font-display font-medium text-text"
                      style={{ fontSize: 14, letterSpacing: '-0.01em' }}
                    >
                      {ind.name}
                    </span>
                    <span className="text-label text-accent">
                      {ind.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
