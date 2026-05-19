import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Eyebrow } from '@/components/primitives/eyebrow'
import {
  FOUNDER,
  PRINCIPLES,
  INDUSTRIES,
  COMPANY_STATS,
  GEOGRAPHIC_COVERAGE,
} from '@/content/about'

export const metadata: Metadata = buildMetadata({
  title: 'About — Brandlyfit',
  description:
    'AI-native marketing agency from Delhi NCR. 65+ clients, 10+ industries, and a $52.6M flagship client. Meet the team and philosophy behind Brandlyfit.',
  path: '/about',
})

function buildAboutSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Brandlyfit',
      url: 'https://brandlyfit.com',
      founder: {
        '@type': 'Person',
        name: FOUNDER.name,
        jobTitle: FOUNDER.role,
      },
      description:
        'AI-native marketing agency helping D2C brands scale across Meta, Google, Amazon, and quick commerce.',
      areaServed: GEOGRAPHIC_COVERAGE.map((city) => ({
        '@type': 'City',
        name: city,
      })),
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: '10+',
      },
    },
  }
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAboutSchema()),
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="About hero"
      >
        <div className="container-brand">
          <div className="mb-8">
            <Eyebrow>About brandlyfit</Eyebrow>
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
              AI-native.
              <span className="block">
                Delhi NCR{' '}
                <em
                  className="not-italic"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent-2)',
                    fontWeight: 400,
                  }}
                >
                  built
                </em>
                .
              </span>
            </h1>

            <p
              className="text-lead text-text-2 max-w-lg"
              style={{ fontWeight: 300 }}
            >
              We started with one question: what happens when you build an agency
              around AI workflows from day one, instead of bolting them on later?
              The answer is Brandlyfit.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section className="above-grid hairline-bottom" aria-label="Key numbers">
        <div className="container-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border overflow-hidden">
            {COMPANY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-3 p-8 md:p-10 bg-bg"
              >
                <span
                  className="font-display font-medium text-text"
                  style={{
                    fontSize: 'clamp(28px, 4vw, 48px)',
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

      {/* ── Manifesto ────────────────────────────────────────── */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="What we believe"
      >
        <div className="container-brand grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <Eyebrow>What we believe</Eyebrow>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <p
              className="text-lead text-text-2 leading-relaxed"
              style={{ fontWeight: 300 }}
            >
              Most marketing agencies sell hours. We sell outcomes. The
              difference is AI: it lets a small, focused team produce the
              creative volume, content velocity, and optimization speed of an
              agency ten times our size. We don&apos;t outsource. We don&apos;t
              subcontract. Every client gets the same system and the same
              people.
            </p>
            <p
              className="text-lead text-text-2 leading-relaxed"
              style={{ fontWeight: 300 }}
            >
              Our portfolio spans $52.6M healthcare technology companies and
              local businesses across Delhi NCR. The strategies are different.
              The system is the same. That&apos;s the point.
            </p>
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────── */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="Principles"
      >
        <div className="container-brand">
          <div className="mb-16">
            <Eyebrow>How we work</Eyebrow>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            {PRINCIPLES.map((p) => (
              <div key={p.index} className="flex flex-col gap-6 p-8 bg-bg">
                <span className="text-label text-text-4">{p.index}</span>
                <h3
                  className="font-display font-medium text-text"
                  style={{
                    fontSize: 22,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[15px] text-text-2 leading-relaxed"
                  style={{ fontWeight: 300 }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ──────────────────────────────────────────── */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="Founder"
      >
        <div className="container-brand grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[3/4] bg-surface border border-border rounded-xl overflow-hidden flex items-center justify-center">
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
                <div className="w-20 h-20 bg-accent rounded-full" />
                <span
                  className="font-display font-medium text-text-3"
                  style={{ fontSize: 14, letterSpacing: '-0.01em' }}
                >
                  {FOUNDER.name}
                </span>
                <span className="text-label text-text-4">{FOUNDER.role}</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
            <Eyebrow>The founder</Eyebrow>

            <h2
              className="font-display font-medium text-text"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              {FOUNDER.name}
            </h2>

            <p
              className="text-lead text-text-2 leading-relaxed"
              style={{ fontWeight: 300 }}
            >
              {FOUNDER.bio}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-px h-8 bg-border-strong" aria-hidden />
              <span className="text-label text-text-4">
                {FOUNDER.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────── */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="Industries"
      >
        <div className="container-brand">
          <div className="mb-16">
            <Eyebrow>Industries we serve</Eyebrow>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col items-center gap-3 p-6 bg-surface border border-border rounded-xl text-center"
              >
                <span
                  className="font-display font-medium text-text"
                  style={{
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {ind.count}
                </span>
                <span className="text-label text-text-4">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Geographic coverage ──────────────────────────────── */}
      <section
        className="above-grid section-padding hairline-bottom"
        aria-label="Geographic coverage"
      >
        <div className="container-brand grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-8">Where we operate</Eyebrow>
            <h2
              className="font-display font-medium text-text mb-6"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Local depth.{' '}
              <em
                className="not-italic"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-accent-2)',
                  fontWeight: 400,
                }}
              >
                Global
              </em>{' '}
              capability.
            </h2>
            <p
              className="text-lead text-text-2"
              style={{ fontWeight: 300 }}
            >
              Headquartered in Delhi NCR with clients across India and
              international markets including Nepal, Sri Lanka, Tanzania, USA,
              Kenya, Nigeria, Uganda, and the UK.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-2 gap-3">
              {GEOGRAPHIC_COVERAGE.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 px-5 py-4 bg-surface border border-border rounded-xl"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <span
                    className="font-display font-medium text-text"
                    style={{ fontSize: 14, letterSpacing: '-0.01em' }}
                  >
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service delivery standards ───────────────────────── */}
      <section
        className="above-grid section-padding"
        aria-label="How we deliver"
      >
        <div className="container-brand">
          <div className="mb-16">
            <Eyebrow>Service standards</Eyebrow>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-xl overflow-hidden">
            {[
              {
                title: '24h response',
                body: 'Every client message answered within 24 hours.',
              },
              {
                title: 'Monthly reporting',
                body: 'Comprehensive performance analysis with actionable insights.',
              },
              {
                title: 'Dedicated account',
                body: 'One point of contact who knows your business inside out.',
              },
              {
                title: 'Full transparency',
                body: 'Complete access to campaign data and performance metrics.',
              },
              {
                title: 'Client training',
                body: 'We teach you digital marketing best practices as we go.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 p-6 bg-bg"
              >
                <h3
                  className="font-display font-medium text-text"
                  style={{
                    fontSize: 15,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] text-text-3 leading-relaxed"
                  style={{ fontWeight: 300 }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
