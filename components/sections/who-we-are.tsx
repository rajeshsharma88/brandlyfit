'use client'

import { motion } from 'motion/react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { ArrowLink } from '@/components/primitives/arrow-link'

const EASE = [0.22, 1, 0.36, 1] as const

const DIFFERENTIATORS = [
  'AI-native workflows across every channel',
  'Creative, media, store & search — one unified system',
  'Transparent weekly reporting, no fluff',
]

export function WhoWeAre() {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="Who we are">
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: statement */}
          <div>
            <Eyebrow className="mb-8">01 / who we are</Eyebrow>

            <motion.h2
              className="text-display-2 mb-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              We deliver AI-native growth for brands ready to{' '}
              <em
                className="not-italic"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-accent-2)',
                  fontWeight: 400,
                }}
              >
                compound
              </em>
              .
            </motion.h2>

            <motion.p
              className="text-lead text-text-2 mb-10"
              style={{ fontWeight: 300 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
              Most D2C brands are sitting on untapped growth — leaking funnel, slow
              creatives, or flying blind on performance data. We fix all of it, running
              as an extension of your team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              <ArrowLink href="/about">Read our story</ArrowLink>
            </motion.div>
          </div>

          {/* Right: big stat + differentiators */}
          <div className="flex flex-col gap-8">

            {/* Big number */}
            <motion.div
              className="flex items-end gap-3"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            >
              <span
                className="font-display font-medium text-text leading-none"
                style={{
                  fontSize: 'clamp(80px, 12vw, 140px)',
                  letterSpacing: '-0.04em',
                }}
              >
                10
              </span>
              <div className="mb-3 flex flex-col gap-1">
                <span
                  className="font-display font-medium"
                  style={{
                    fontSize: 'clamp(32px, 5vw, 52px)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: 'var(--color-accent-2)',
                  }}
                >
                  +
                </span>
                <span
                  className="text-body text-text-2 max-w-[130px] leading-snug"
                >
                  years of D2C marketing expertise
                </span>
              </div>
            </motion.div>

            <div className="h-px bg-border" />

            {/* Bullets */}
            <motion.ul
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
            >
              {DIFFERENTIATORS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-[6px] w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-body text-text-2">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
