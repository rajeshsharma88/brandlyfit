'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { MagneticButton } from '@/components/motion/magnetic-button'
import { StartProjectButton } from '@/components/sections/start-project-modal'

const EASE = [0.22, 1, 0.36, 1] as const

export function CtaBlock() {
  return (
    <section
      className="above-grid section-padding relative overflow-hidden"
      aria-label="Start a project"
    >
      {/* Background radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(91,79,229,0.14) 0%, transparent 70%)',
        }}
      />

      {/* Top edge hairline */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)',
        }}
      />

      <div className="container-brand flex flex-col items-center text-center gap-14 relative">

        {/* Mono label */}
        <motion.div
          className="text-label text-text-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          07 / start a project
        </motion.div>

        {/* Editorial headline */}
        <div className="overflow-hidden">
          <motion.h2
            className="font-display font-medium text-text"
            style={{
              fontSize: 'clamp(44px, 7vw, 100px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
            }}
            initial={{ y: '60%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            Let&apos;s build the
            <span className="block">engine you&apos;ll wish</span>
            <span className="block">
              you&apos;d built{' '}
              <em
                className="not-italic"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-accent-2)',
                  fontWeight: 400,
                }}
              >
                sooner
              </em>
              .
            </span>
          </motion.h2>
        </div>

        {/* Circular CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        >
          <MagneticButton>
            <StartProjectButton className="group relative inline-flex flex-col items-center justify-center gap-1 cursor-pointer bg-transparent border-none p-0">
              {/* Outer ring */}
              <div
                className="relative w-36 h-36 rounded-full border border-border-strong flex items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:bg-accent-soft"
                style={{ boxShadow: '0 0 0 0 rgba(91,79,229,0)' }}
              >
                {/* Inner filled circle */}
                <div
                  className="absolute inset-3 rounded-full bg-accent flex flex-col items-center justify-center gap-1 transition-all duration-300 group-hover:inset-2"
                  style={{ boxShadow: '0 0 32px rgba(91,79,229,0.5)' }}
                >
                  <span
                    className="font-display font-medium text-white text-center leading-tight"
                    style={{ fontSize: 12, letterSpacing: '-0.01em' }}
                  >
                    Start a<br />project
                  </span>
                </div>

                {/* Animated arrow in top-right */}
                <div
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                >
                  <ArrowUpRight size={12} className="text-white" strokeWidth={2.5} />
                </div>
              </div>
            </StartProjectButton>
          </MagneticButton>
        </motion.div>

        {/* Sub-text */}
        <motion.p
          className="text-label text-text-4 max-w-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
        >
          No retainer lock-in on first engagement · Reply within 24h
        </motion.p>
      </div>
    </section>
  )
}
