'use client'

import { motion } from 'motion/react'
import { MagneticButton } from '@/components/motion/magnetic-button'
import { StartProjectButton } from '@/components/sections/start-project-modal'

const EASE = [0.22, 1, 0.36, 1] as const

export function CtaBlock() {
  return (
    <section
      className="above-grid section-padding"
      aria-label="Start a project"
    >
      <div className="container-brand flex flex-col items-center text-center gap-12">

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

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        >
          <MagneticButton>
            <StartProjectButton
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-2 text-white text-[15px] font-medium rounded-full transition-colors duration-200 cursor-pointer"
            >
              Start a project
              <span aria-hidden className="opacity-70">→</span>
            </StartProjectButton>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
