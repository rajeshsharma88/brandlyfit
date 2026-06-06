'use client'

import { motion } from 'motion/react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { ArrowLink } from '@/components/primitives/arrow-link'
import { CountUp } from '@/components/motion/count-up'
import { TrendingUp, TrendingDown, Layers } from 'lucide-react'

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
      <div
        className="font-display font-medium text-text"
        style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', lineHeight: 1 }}
      >
        <CountUp to={value} prefix={prefix} suffix={suffix} decimals={decimals} duration={1.4} />
      </div>
      <div className="text-label text-text-3">{label}</div>
    </div>
  )
}

const METRIC_CARDS = [
  {
    icon: TrendingDown,
    label: 'CAC reduced',
    value: '38%',
    trend: 'down',
    caption: 'vs. baseline',
  },
  {
    icon: TrendingUp,
    label: 'ROAS',
    value: '3.2x',
    trend: 'up',
    caption: 'in 90 days',
  },
  {
    icon: Layers,
    label: 'Creatives / mo',
    value: '50+',
    trend: 'up',
    caption: 'zero extra headcount',
  },
]

function CaseStudyVisual() {
  return (
    <div className="relative w-full h-full min-h-100 lg:min-h-0 rounded-xl overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-surface border border-border rounded-xl" />

      {/* Gradient glow — top-left accent */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          left: '-10%',
          width: '60%',
          height: '60%',
          background:
            'radial-gradient(circle, rgba(91,79,229,0.30) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-7 lg:p-8">

        {/* Top: brand identity */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: 'var(--color-accent)',
                boxShadow: '0 0 20px rgba(91,79,229,0.4)',
              }}
            >
              <span
                className="font-display font-medium text-white"
                style={{ fontSize: 14, letterSpacing: '-0.04em' }}
              >
                S&amp;C
              </span>
            </div>
            <div>
              <div
                className="font-display font-medium text-text"
                style={{ fontSize: 14, letterSpacing: '-0.01em' }}
              >
                Sage &amp; Co.
              </div>
              <div className="text-label text-text-4">D2C skincare · Bangalore</div>
            </div>
          </div>

          <div className="text-label text-text-4">case study / 01</div>
        </div>

        {/* Middle: metric cards */}
        <div className="flex flex-col gap-3 my-8">
          {METRIC_CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                className="flex items-center justify-between px-4 py-3 rounded-lg border border-border bg-bg"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-accent-soft border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-accent-2" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-medium text-text" style={{ fontSize: 13 }}>
                      {card.label}
                    </div>
                    <div className="text-label text-text-4">{card.caption}</div>
                  </div>
                </div>
                <div
                  className="font-display font-medium"
                  style={{
                    fontSize: 22,
                    letterSpacing: '-0.035em',
                    color:
                      card.trend === 'up'
                        ? 'var(--color-accent-2)'
                        : 'var(--color-text)',
                  }}
                >
                  {card.value}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom: timeline pill */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: '0%' }}
              whileInView={{ width: '67%' }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
            />
          </div>
          <span className="text-label text-text-4 whitespace-nowrap">60 days to results</span>
        </div>
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

          {/* Visual — 7 cols */}
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
            {/* Label + headline */}
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
                A Bangalore-based skincare brand came to us with a leaking funnel and a creative
                library of four static images. We rebuilt their media buying, shipped 50+
                AI-generated creatives, and restructured their Shopify CRO in parallel.
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
