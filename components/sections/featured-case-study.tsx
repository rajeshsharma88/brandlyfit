'use client'

import { motion } from 'motion/react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { ArrowLink } from '@/components/primitives/arrow-link'
import { CountUp } from '@/components/motion/count-up'

const EASE = [0.22, 1, 0.36, 1] as const

function StatPill({
  value,
  prefix,
  suffix,
  decimals,
  label,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
}) {
  return (
    <div className="flex flex-col gap-1.5 border-r border-border last:border-r-0 pr-8 last:pr-0">
      <div className="font-display font-medium text-text" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', lineHeight: 1 }}>
        <CountUp to={value} prefix={prefix} suffix={suffix} decimals={decimals} duration={1.4} />
      </div>
      <div className="text-label text-text-3">{label}</div>
    </div>
  )
}

function CaseStudyVisual() {
  return (
    <div
      className="relative w-full h-full min-h-[400px] lg:min-h-0 bg-surface border border-border rounded-xl overflow-hidden flex items-center justify-center"
    >
      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Abstract brand mark */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="w-16 h-16 bg-accent rounded-sm" />
        <div className="flex flex-col items-center gap-1">
          <div
            className="font-display font-medium text-text-3"
            style={{ fontSize: 13, letterSpacing: '-0.01em' }}
          >
            Sage &amp; Co.
          </div>
          <div className="text-label text-text-4">d2c skincare / bangalore</div>
        </div>
      </div>

      {/* Corner label */}
      <div className="absolute bottom-5 right-5 text-label text-text-4">
        case study / 01
      </div>
    </div>
  )
}

export function FeaturedCaseStudy() {
  return (
    <section
      className="above-grid section-padding hairline-bottom"
      aria-label="Featured case study"
    >
      <div className="container-brand">
        <div className="mb-12">
          <Eyebrow>03 / featured work</Eyebrow>
        </div>

        {/* 12-col grid: visual 7, content 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Visual placeholder — 7 cols */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <CaseStudyVisual />
          </motion.div>

          {/* Content — 5 cols */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-8 lg:py-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            {/* Top: label + headline */}
            <div className="flex flex-col gap-6">
              <span className="text-label text-text-3">
                case study / 01 / d2c skincare
              </span>

              <h2
                className="font-display font-medium text-text"
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                }}
              >
                How we cut CAC by{' '}
                <em
                  className="not-italic"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent-2)',
                    fontWeight: 400,
                  }}
                >
                  38%
                </em>{' '}
                in 60&nbsp;days.
              </h2>

              <p className="text-body text-text-2">
                A Bangalore-based skincare brand came to us with a leaking funnel and a creative library
                of four static images. We rebuilt their media buying, shipped 50+ AI-generated creatives,
                and restructured their Shopify CRO in parallel.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              <StatPill value={3.2} decimals={1} suffix="x" label="ROAS" />
              <StatPill value={2.4} prefix="₹" suffix="Cr" decimals={1} label="Revenue in 90 days" />
              <StatPill value={50} suffix="+" label="Creatives / month" />
            </div>

            {/* CTA */}
            <div>
              <ArrowLink href="/work/sage-co">
                Read the case study
              </ArrowLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
