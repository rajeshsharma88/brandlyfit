'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { MagneticButton } from '@/components/motion/magnetic-button'
import { StartProjectButton } from '@/components/sections/start-project-modal'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { cn } from '@/lib/utils'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

// ─── Headline line definitions ─────────────────────────────
// Split into individual lines so each gets its own mask-reveal.
// Line 3 carries the editorial <em> accent.
const HEADLINE_LINES: Array<{
  content: React.ReactNode
  delay: number
}> = [
  { content: 'The growth engine', delay: 0.15 },
  { content: 'D2C brands wish', delay: 0.23 },
  {
    content: (
      <>
        they built{' '}
        <em
          className="not-italic"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-accent-2)',
            fontWeight: 400,
          }}
        >
          in-house
        </em>
        .
      </>
    ),
    delay: 0.31,
  },
]

// ─── Scroll-bounce indicator ───────────────────────────────
function ScrollIndicator({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="absolute bottom-8 right-8 md:right-10 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.0, ease: EASE_OUT }}
      aria-hidden
    >
      {/* Vertical tick line */}
      <motion.div
        className="w-px h-10 bg-border-strong origin-top"
        animate={{ scaleY: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
      />
      <span
        className="text-label text-text-4"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.12em' }}
      >
        scroll
      </span>
    </motion.div>
  )
}

// ─── Ghost CTA button ──────────────────────────────────────
function GhostButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-flex items-center gap-2',
        'text-[14px] font-medium text-text-2 hover:text-text',
        'transition-colors duration-200 py-2.5'
      )}
    >
      <span className="relative">
        {children}
        {/* Underline from left */}
        <span className="absolute -bottom-px left-0 h-px w-0 bg-text-2 group-hover:w-full transition-all duration-300 ease-out" />
      </span>
    </Link>
  )
}

// ─── Hero ──────────────────────────────────────────────────
export function Hero() {
  const [ready, setReady] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Kick off hero animations either when:
  //   a) the loader dispatches bf:ready (first visit), or
  //   b) a short timeout fires (return visits — no loader shows)
  useEffect(() => {
    let settled = false
    const go = () => {
      if (settled) return
      settled = true
      setReady(true)
    }

    window.addEventListener('bf:ready', go)
    // Return-visit fallback: loader doesn't fire, so start after 200ms
    const t = setTimeout(go, 200)

    return () => {
      window.removeEventListener('bf:ready', go)
      clearTimeout(t)
    }
  }, [])

  // Scroll-driven headline parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const opacityOut = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Nav spacer */}
      <div className="h-16 flex-shrink-0" aria-hidden />

      {/* Content — parallax container */}
      <motion.div
        style={{ y: contentY, opacity: opacityOut }}
        className="flex-1 flex items-center"
      >
        <div className="container-brand w-full py-20">

          {/* Eyebrow — first element to appear */}
          <div className="overflow-hidden mb-10">
            <motion.div
              initial={{ y: '110%' }}
              animate={ready ? { y: '0%' } : {}}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.05 }}
            >
              <Eyebrow>brandlyfit / ai-native growth</Eyebrow>
            </motion.div>
          </div>

          {/* Headline — three lines with mask reveal, 80ms stagger */}
          <h1
            className="text-display-1 mb-8 md:mb-10"
            style={{ maxWidth: '14ch' }}
          >
            {HEADLINE_LINES.map((line, i) => (
              <span key={i} className="text-mask block">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={ready ? { y: '0%' } : {}}
                  transition={{ duration: 0.8, ease: EASE_OUT, delay: line.delay }}
                >
                  {line.content}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subhead */}
          <motion.p
            className="text-lead text-text-2 max-w-[580px] mb-12"
            style={{ lineHeight: 1.55, fontWeight: 300, fontSize: 19 }}
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.52 }}
          >
            We help D2C founders scale across Meta, Google, Amazon, Blinkit, Zepto and
            beyond — running the AI-native workflows their in-house teams can&apos;t move
            fast enough to build.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.65 }}
          >
            {/* Primary — magnetic */}
            <MagneticButton>
              <StartProjectButton
                className={cn(
                  'inline-flex items-center gap-2 px-7 py-3.5',
                  'bg-accent hover:bg-accent-2 text-white',
                  'text-[14px] font-medium tracking-tight rounded-full',
                  'transition-colors duration-200 cursor-pointer'
                )}
              >
                Start a project
                <span aria-hidden className="opacity-70">→</span>
              </StartProjectButton>
            </MagneticButton>

            {/* Secondary — ghost */}
            <GhostButton href="/work">See our work</GhostButton>
          </motion.div>

          {/* Bottom-left kicker — subtle brand attribution */}
          <motion.div
            className="mt-20 md:mt-28 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.85 }}
          >
            <div className="w-px h-8 bg-border-strong" aria-hidden />
            <span className="text-label text-text-4">
              ai-native / dark-first / Delhi NCR
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — bottom-right, vertically oriented */}
      <ScrollIndicator visible={ready} />

      {/* Bottom hairline fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)',
        }}
      />
    </section>
  )
}
