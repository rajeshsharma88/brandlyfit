'use client'

import { motion } from 'motion/react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { CountUp } from '@/components/motion/count-up'

const EASE = [0.22, 1, 0.36, 1] as const

const STATS = [
  {
    value: 38,
    suffix: '%',
    label: 'Average CAC reduction',
    caption: 'across active client accounts',
  },
  {
    value: 3.2,
    suffix: 'x',
    decimals: 1,
    label: 'Average ROAS lift',
    caption: 'vs. baseline at engagement start',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Creative variants / month',
    caption: 'per client, at no extra headcount',
  },
  {
    value: 92,
    label: 'Net Promoter Score',
    caption: 'from our last client cohort survey',
  },
]

export function Stats() {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="Results">
      <div className="container-brand">
        <div className="mb-16">
          <Eyebrow className="mb-8">05 / the numbers</Eyebrow>
          <motion.h2
            className="text-display-2 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Numbers that{' '}
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
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-4 p-8 lg:p-12 bg-bg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
            >
              {/* Big number */}
              <div
                className="font-display font-medium text-text leading-none"
                style={{ fontSize: 'clamp(56px, 8vw, 100px)', letterSpacing: '-0.04em' }}
              >
                <CountUp
                  to={stat.value}
                  suffix={stat.suffix ?? ''}
                  decimals={stat.decimals ?? 0}
                  duration={1.4}
                />
              </div>

              {/* Label */}
              <div className="flex flex-col gap-1">
                <span className="font-medium text-[15px] text-text leading-tight">
                  {stat.label}
                </span>
                <span className="text-label text-text-4">{stat.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
