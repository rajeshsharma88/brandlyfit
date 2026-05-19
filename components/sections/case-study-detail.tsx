'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { MagneticButton } from '@/components/motion/magnetic-button'
import { StartProjectButton } from '@/components/sections/start-project-modal'
import type { CaseStudy } from '@/content/case-studies'

const EASE = [0.22, 1, 0.36, 1] as const

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10%' },
    transition: { duration: 0.6, ease: EASE, delay },
  }
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function CaseHero({ study }: { study: CaseStudy }) {
  const { heroHeadline, heroAccent, client, index, tagline } = study
  const parts = heroHeadline.split(heroAccent)
  const before = parts[0] ?? ''
  const after = parts[1] ?? ''

  return (
    <section
      className="above-grid section-padding hairline-bottom"
      aria-label={`${client} case study`}
    >
      <div className="container-brand">
        <motion.div className="mb-8" {...fade(0)}>
          <Eyebrow>case study {index} / {tagline.toLowerCase()}</Eyebrow>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-display font-medium text-text"
            style={{
              fontSize: 'clamp(52px, 8vw, 112px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
            }}
            initial={{ y: '55%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {client}
          </motion.h1>
        </div>

        <motion.p
          className="text-lead text-text-2 max-w-2xl"
          style={{ fontWeight: 300 }}
          {...fade(0.15)}
        >
          {before}
          <em
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--color-accent-2)',
              fontWeight: 400,
            }}
          >
            {heroAccent}
          </em>
          {after}
        </motion.p>
      </div>
    </section>
  )
}

// ─── Stats bar ──────────────────────────────────────────────────────────────

function StatsBar({ study }: { study: CaseStudy }) {
  return (
    <section className="above-grid hairline-bottom" aria-label="Key results">
      <div className="container-brand">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden">
          {study.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-3 p-8 md:p-10 bg-bg"
              {...fade(i * 0.1)}
            >
              <span
                className="font-display font-medium text-text"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span className="text-label text-text-4">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Challenge ──────────────────────────────────────────────────────────────

function Challenge({ study }: { study: CaseStudy }) {
  return (
    <section
      className="above-grid section-padding hairline-bottom"
      aria-label="The challenge"
    >
      <div className="container-brand grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div className="lg:col-span-3" {...fade(0)}>
          <Eyebrow>The challenge</Eyebrow>
        </motion.div>

        <motion.p
          className="lg:col-span-7 text-lead text-text-2 leading-relaxed"
          style={{ fontWeight: 300 }}
          {...fade(0.1)}
        >
          {study.challenge}
        </motion.p>
      </div>
    </section>
  )
}

// ─── Approach ───────────────────────────────────────────────────────────────

function Approach({ study }: { study: CaseStudy }) {
  return (
    <section
      className="above-grid section-padding hairline-bottom"
      aria-label="Our approach"
    >
      <div className="container-brand">
        <motion.div className="mb-16" {...fade(0)}>
          <Eyebrow>Our approach</Eyebrow>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {study.approach.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-6 p-8 bg-bg"
              {...fade(i * 0.08)}
            >
              <span className="text-label text-text-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p
                className="text-[15px] text-text-2 leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Results ────────────────────────────────────────────────────────────────

function ResultsSection({ study }: { study: CaseStudy }) {
  return (
    <section
      className="above-grid section-padding hairline-bottom"
      aria-label="Results"
    >
      <div className="container-brand grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div className="lg:col-span-3" {...fade(0)}>
          <Eyebrow>The results</Eyebrow>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.p
            className="text-lead text-text-2 leading-relaxed"
            style={{ fontWeight: 300 }}
            {...fade(0.1)}
          >
            {study.results}
          </motion.p>

          {/* Services used */}
          <motion.div className="flex flex-wrap gap-2" {...fade(0.2)}>
            {study.services.map((svc) => (
              <span
                key={svc}
                className="px-4 py-2 text-label text-text-3 bg-surface border border-border rounded-full"
              >
                {svc}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ────────────────────────────────────────────────────────────────────

function CaseStudyCta() {
  return (
    <section className="above-grid section-padding" aria-label="Start a project">
      <div className="container-brand flex flex-col items-center text-center gap-12">
        <motion.div className="text-label text-text-4" {...fade(0)}>
          Want results like these?
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            className="font-display font-medium text-text"
            style={{
              fontSize: 'clamp(40px, 6vw, 88px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
            }}
            initial={{ y: '55%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
          >
            Let&apos;s build your
            <span className="block">
              growth{' '}
              <em
                className="not-italic"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-accent-2)',
                  fontWeight: 400,
                }}
              >
                engine
              </em>
              .
            </span>
          </motion.h2>
        </div>

        <motion.div {...fade(0.25)}>
          <MagneticButton>
            <StartProjectButton
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-2 text-white text-[15px] font-medium rounded-full transition-colors duration-200 cursor-pointer"
            >
              Start a project
              <ArrowRight size={16} className="opacity-70" aria-hidden />
            </StartProjectButton>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Composed page ──────────────────────────────────────────────────────────

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <>
      <CaseHero study={study} />
      <StatsBar study={study} />
      <Challenge study={study} />
      <Approach study={study} />
      <ResultsSection study={study} />
      <CaseStudyCta />
    </>
  )
}
