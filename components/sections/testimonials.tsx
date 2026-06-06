'use client'

import { motion } from 'motion/react'
import { Star } from 'lucide-react'
import { Eyebrow } from '@/components/primitives/eyebrow'

const EASE = [0.22, 1, 0.36, 1] as const

const TESTIMONIALS = [
  {
    quote:
      'They feel less like an agency and more like an extension of our team. Weekly cadence, full transparency, zero hand-holding required.',
    name: 'Priya Mehta',
    role: 'Founder',
    company: 'Sage & Co.',
    rating: 5,
  },
  {
    quote:
      'We tripled our ad creative output without hiring a single new designer. That\'s the AI part working — and it shows in the numbers.',
    name: 'Arjun Singh',
    role: 'Growth Lead',
    company: 'Northstar Naturals',
    rating: 5,
  },
  {
    quote:
      'First agency we\'ve worked with that actually understood quick-commerce. They knew Blinkit\'s algorithm better than we did.',
    name: 'Rhea Kapoor',
    role: 'CMO',
    company: 'Acme Wellness',
    rating: 5,
  },
]

function StarRow({ count = 5, filled = 5 }: { count?: number; filled?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={0}
          fill={i < filled ? 'var(--color-accent-2)' : 'var(--color-border-strong)'}
        />
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number]
  index: number
}) {
  return (
    <motion.div
      className="flex flex-col gap-6 p-7 bg-surface border border-border rounded-xl snap-start shrink-0 w-[85vw] sm:w-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
    >
      {/* Stars */}
      <StarRow filled={testimonial.rating} />

      {/* Quote */}
      <blockquote
        className="flex-1 text-text"
        style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 400 }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3 pt-5 border-t border-border">
        {/* Avatar initial */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-medium"
          style={{
            background: 'var(--color-accent)',
            fontSize: 13,
            letterSpacing: '-0.01em',
          }}
        >
          {testimonial.name[0]}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-[14px] text-text leading-tight">
            {testimonial.name}
          </span>
          <span className="text-label text-text-3">
            {testimonial.role} · {testimonial.company}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="Testimonials">
      <div className="container-brand">

        {/* Header — eyebrow + headline left, aggregate rating right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
          <div>
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

          {/* Aggregate rating block */}
          <motion.div
            className="flex items-end gap-4 shrink-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          >
            <div className="flex flex-col gap-2">
              <div
                className="font-display font-medium text-text leading-none"
                style={{ fontSize: 'clamp(52px, 8vw, 80px)', letterSpacing: '-0.04em' }}
              >
                4.8
              </div>
              <StarRow count={5} filled={5} />
              <span className="text-label text-text-4">out of 5.0 · client NPS</span>
            </div>
          </motion.div>
        </div>

        {/* Cards — horizontal scroll on mobile, 3-col on desktop */}
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
