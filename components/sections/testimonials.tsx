'use client'

import { motion } from 'motion/react'
import { Eyebrow } from '@/components/primitives/eyebrow'

const EASE = [0.22, 1, 0.36, 1] as const

const TESTIMONIALS = [
  {
    quote:
      'They feel less like an agency and more like an extension of our team.',
    name: 'Priya Mehta',
    role: 'Founder',
    company: 'Sage & Co.',
  },
  {
    quote:
      'We tripled our ad creative output without hiring a single new designer. That\'s the AI part working.',
    name: 'Arjun Singh',
    role: 'Growth Lead',
    company: 'Northstar Naturals',
  },
  {
    quote:
      'First agency we\'ve worked with that actually understood quick-commerce.',
    name: 'Rhea Kapoor',
    role: 'CMO',
    company: 'Acme Wellness',
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number]
  index: number
}) {
  return (
    <motion.div
      className="flex flex-col gap-8 p-8 bg-surface border border-border rounded-xl snap-start flex-shrink-0 w-[85vw] sm:w-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
    >
      {/* Opening serif quote mark */}
      <div
        aria-hidden
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 80,
          lineHeight: 0.8,
          color: 'var(--color-accent-2)',
          opacity: 0.6,
          userSelect: 'none',
        }}
      >
        &ldquo;
      </div>

      {/* Quote */}
      <blockquote
        className="flex-1 text-text"
        style={{ fontSize: 17, lineHeight: 1.6, fontWeight: 400 }}
      >
        {testimonial.quote}
      </blockquote>

      {/* Divider + attribution */}
      <div className="flex flex-col gap-3 pt-6 border-t border-border">
        <span className="font-medium text-[15px] text-text">{testimonial.name}</span>
        <span className="text-label text-text-3">
          {testimonial.role} · {testimonial.company}
        </span>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="Testimonials">
      <div className="container-brand">
        <div className="mb-12">
          <Eyebrow className="mb-8">06 / what clients say</Eyebrow>
          <motion.h2
            className="text-display-2 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            The work{' '}
            <em
              className="not-italic"
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: 'var(--color-accent-2)',
                fontWeight: 400,
              }}
            >
              speaks
            </em>
            .
          </motion.h2>
        </div>

        {/* Mobile: horizontal scroll with snap. Desktop: 3-col grid. */}
        <div
          className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-6 sm:mx-0 px-6 sm:px-0"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          data-lenis-prevent
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
