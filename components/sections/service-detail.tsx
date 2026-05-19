'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { MagneticButton } from '@/components/motion/magnetic-button'
import type { ServiceFull } from '@/content/services'

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

function ServiceHero({ service }: { service: ServiceFull }) {
  const { heroLine, heroAccent, name, index, tagline } = service

  const parts = heroLine.split(heroAccent)
  const before = parts[0] ?? ''
  const after = parts[1] ?? ''

  return (
    <section
      className="above-grid section-padding hairline-bottom"
      aria-label={`${name} hero`}
    >
      <div className="container-brand">
        <motion.div className="mb-8" {...fade(0)}>
          <Eyebrow>{index} / {tagline}</Eyebrow>
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
            {name}
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

// ─── What it is ──────────────────────────────────────────────────────────────

function WhatItIs({ service }: { service: ServiceFull }) {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="What it is">
      <div className="container-brand grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div className="lg:col-span-3" {...fade(0)}>
          <Eyebrow>What it is</Eyebrow>
        </motion.div>

        <motion.p
          className="lg:col-span-7 text-lead text-text-2 leading-relaxed"
          style={{ fontWeight: 300 }}
          {...fade(0.1)}
        >
          {service.whatItIs}
        </motion.p>
      </div>
    </section>
  )
}

// ─── How we run it ───────────────────────────────────────────────────────────

function HowWeRunIt({ service }: { service: ServiceFull }) {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="How we run it">
      <div className="container-brand">
        <motion.div className="mb-16" {...fade(0)}>
          <Eyebrow>How we run it</Eyebrow>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {service.howWeRunIt.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col gap-6 p-8 bg-bg"
              {...fade(i * 0.08)}
            >
              <span className="text-label text-text-4">{step.num}</span>
              <h3
                className="font-display font-medium text-text"
                style={{ fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1.2 }}
              >
                {step.title}
              </h3>
              <p className="text-[15px] text-text-2 leading-relaxed" style={{ fontWeight: 300 }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── AI Edge ─────────────────────────────────────────────────────────────────

function AIEdge({ service }: { service: ServiceFull }) {
  const { aiEdge } = service
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="The AI edge">
      <div className="container-brand">
        <motion.div
          className="rounded-2xl p-8 md:p-12 lg:p-16"
          style={{
            background: 'var(--color-accent-soft)',
            border: '0.5px solid rgba(91, 79, 229, 0.25)',
          }}
          {...fade(0)}
        >
          <Eyebrow className="mb-10">The AI edge</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <motion.h2
                className="text-display-2 mb-6"
                {...fade(0.05)}
              >
                {aiEdge.headline}
              </motion.h2>
              <motion.p
                className="text-lead text-text-2"
                style={{ fontWeight: 300 }}
                {...fade(0.1)}
              >
                {aiEdge.body}
              </motion.p>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7 flex flex-col gap-4">
              {aiEdge.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-text-2 leading-relaxed"
                  style={{ fontWeight: 300 }}
                  {...fade(0.1 + i * 0.07)}
                >
                  <Check
                    size={16}
                    className="flex-shrink-0 mt-0.5 text-accent"
                    aria-hidden
                  />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Stack ───────────────────────────────────────────────────────────────────

function Stack({ service }: { service: ServiceFull }) {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="Tools we use">
      <div className="container-brand">
        <motion.div className="mb-16" {...fade(0)}>
          <Eyebrow>Tools we use</Eyebrow>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {service.stack.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="flex flex-col gap-2 p-6 bg-surface border border-border rounded-xl"
              {...fade(i * 0.06)}
            >
              <span
                className="font-display font-medium text-text"
                style={{ fontSize: 15, letterSpacing: '-0.01em' }}
              >
                {tool.name}
              </span>
              <span className="text-label text-text-4">{tool.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Results ─────────────────────────────────────────────────────────────────

function Results({ service }: { service: ServiceFull }) {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="Results">
      <div className="container-brand">
        <motion.div className="mb-16" {...fade(0)}>
          <Eyebrow>Results</Eyebrow>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {service.results.map((r, i) => (
            <motion.div
              key={r.label}
              className="flex flex-col gap-4 p-8 md:p-10 bg-bg"
              {...fade(i * 0.1)}
            >
              <span
                className="font-display font-medium text-text"
                style={{
                  fontSize: 'clamp(44px, 6vw, 72px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                {r.value}
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="font-display font-medium text-text"
                  style={{ fontSize: 15, letterSpacing: '-0.01em' }}
                >
                  {r.label}
                </span>
                <span className="text-label text-text-4">{r.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Service CTA ─────────────────────────────────────────────────────────────

function ServiceCta({ service }: { service: ServiceFull }) {
  return (
    <section className="above-grid section-padding" aria-label="Start a project">
      <div className="container-brand flex flex-col items-center text-center gap-12">
        <motion.div className="text-label text-text-4" {...fade(0)}>
          Ready to start?
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
              {service.name}{' '}
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
            <Link
              href="/start"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-2 text-white text-[15px] font-medium rounded-full transition-colors duration-200"
            >
              Start a project
              <ArrowRight size={16} className="opacity-70" aria-hidden />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Composed page ────────────────────────────────────────────────────────────

export function ServiceDetail({ service }: { service: ServiceFull }) {
  return (
    <>
      <ServiceHero service={service} />
      <WhatItIs service={service} />
      <HowWeRunIt service={service} />
      <AIEdge service={service} />
      <Stack service={service} />
      <Results service={service} />
      <ServiceCta service={service} />
    </>
  )
}
