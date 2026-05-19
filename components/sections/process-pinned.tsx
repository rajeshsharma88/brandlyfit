'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

const STEPS = [
  {
    num: '01',
    title: 'Diagnose',
    body: 'We audit your funnel, creative library, store, and search presence in week one. You get a 20-page report with no fluff.',
  },
  {
    num: '02',
    title: 'Build',
    body: 'We design the AI workflows specific to your category — creative engine, media playbook, store optimizations, search system.',
  },
  {
    num: '03',
    title: 'Scale',
    body: 'We run the system in market. Daily optimization, weekly creative refresh, monthly strategic review.',
  },
  {
    num: '04',
    title: 'Compound',
    body: 'Every month the system gets smarter. Lower CAC, higher LTV, faster experiments. The flywheel compounds.',
  },
]

// Each step occupies 1/4 of the scroll range.
// We fade in at the start of its range, fade out at the end (except the last).
function useStepAnimation(
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'],
  index: number,
  total: number
) {
  const start = index / total
  const mid   = start + 0.5 / total   // fully visible halfway through its slot
  const end   = (index + 1) / total

  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end],
    [0, 1, index === total - 1 ? 1 : 0.35]  // last step stays full opacity
  )
  const y = useTransform(
    scrollYProgress,
    [start, mid],
    [32, 0]
  )

  return { opacity, y }
}

function StepCard({
  step,
  scrollYProgress,
  index,
  total,
}: {
  step: (typeof STEPS)[number]
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  index: number
  total: number
}) {
  const { opacity, y } = useStepAnimation(scrollYProgress, index, total)

  return (
    <motion.div
      style={{ opacity, y }}
      className="flex flex-col gap-5 p-8 border border-border rounded-xl bg-surface"
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-accent flex-shrink-0" />
        <span className="text-label text-accent-2">{step.num}</span>
      </div>
      <h3
        className="font-display font-medium text-text"
        style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
      >
        {step.title}
      </h3>
      <p className="text-body text-text-2 leading-relaxed">{step.body}</p>
    </motion.div>
  )
}

// Progress bar that fills as we scroll through the section
function ProgressBar({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <div className="hidden lg:flex flex-col items-center gap-0">
      <div className="w-px h-full relative bg-border overflow-hidden" style={{ minHeight: 240 }}>
        <motion.div
          className="absolute top-0 left-0 right-0 bg-accent origin-top"
          style={{ scaleY, bottom: 0 }}
        />
      </div>
    </div>
  )
}

export function ProcessPinned() {
  // Outer container is 500vh tall — inner is sticky so it pins
  const outerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  })

  // Active step index (0-3) based on scroll progress
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 2, 3, 3]
  )

  return (
    // Outer: tall container that drives the scroll
    <div ref={outerRef} className="above-grid" style={{ height: '500vh' }}>

      {/* Inner: sticky panel that fills the viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden hairline-bottom">
        <div className="container-brand w-full py-12">

          {/* Header row */}
          <div className="mb-12 lg:mb-16">
            <Eyebrow className="mb-6">04 / our process</Eyebrow>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
              <h2 className="text-display-2">
                Four moves.{' '}
                <span className="block">
                  Compounding{' '}
                  <em
                    className="not-italic"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      color: 'var(--color-accent-2)',
                      fontWeight: 400,
                    }}
                  >
                    monthly
                  </em>
                  .
                </span>
              </h2>
              <p className="text-lead text-text-2 lg:ml-auto max-w-md" style={{ fontWeight: 300 }}>
                Four structured moves — run back-to-back, every month.
                Each one feeds the next. The flywheel compounds.
              </p>
            </div>
          </div>

          {/* Steps grid with progress bar */}
          <div className="flex gap-8">
            {/* Progress bar — desktop only */}
            <ProgressBar scrollYProgress={scrollYProgress} />

            {/* 2×2 step grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STEPS.map((step, i) => (
                <StepCard
                  key={step.num}
                  step={step}
                  scrollYProgress={scrollYProgress}
                  index={i}
                  total={STEPS.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
