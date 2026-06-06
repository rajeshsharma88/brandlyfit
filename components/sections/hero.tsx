'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { MagneticButton } from '@/components/motion/magnetic-button'
import { StartProjectButton } from '@/components/sections/start-project-modal'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { cn } from '@/lib/utils'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const HEADLINE_LINES: Array<{ content: React.ReactNode; delay: number }> = [
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

const METRICS = [
  { value: '3.2x', label: 'avg ROAS' },
  { value: '38%', label: 'CAC reduction' },
  { value: '50+', label: 'creatives / mo' },
]

function HeroVisual({ ready }: { ready: boolean }) {
  return (
    <motion.div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ minHeight: 420 }}
      initial={{ opacity: 0, y: 24 }}
      animate={ready ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, ease: EASE_OUT, delay: 0.45 }}
    >
      {/* Base surface */}
      <div className="absolute inset-0 bg-surface border border-border rounded-2xl" />

      {/* Primary glow — violet orb */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(91,79,229,0.45) 0%, rgba(91,79,229,0.12) 45%, transparent 70%)',
          filter: 'blur(36px)',
        }}
      />

      {/* Secondary accent orb — top right */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: 160,
          height: 160,
          background:
            'radial-gradient(circle, rgba(123,114,238,0.25) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content stack */}
      <div className="relative h-full flex flex-col items-center justify-center gap-7 px-6 py-12">

        {/* Trust pill */}
        <motion.div
          className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-border-strong bg-surface-2"
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.75 }}
        >
          <div className="flex -space-x-1.5">
            {[
              'hsl(250,55%,55%)',
              'hsl(220,60%,50%)',
              'hsl(270,50%,60%)',
            ].map((bg, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full border border-bg flex-shrink-0"
                style={{ background: bg }}
              />
            ))}
          </div>
          <span className="text-label text-text-2 whitespace-nowrap">
            Trusted by 40+ D2C brands
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>

        {/* Brand mark */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.62 }}
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: 'var(--color-accent)', boxShadow: '0 0 32px rgba(91,79,229,0.5)' }}
          >
            {/* Stylised BF monogram */}
            <span
              className="font-display font-medium text-white"
              style={{ fontSize: 20, letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              bf
            </span>
          </div>
          <div className="text-center">
            <div
              className="font-display font-medium text-text"
              style={{ fontSize: 13, letterSpacing: '-0.01em' }}
            >
              Brandlyfit
            </div>
            <div className="text-label text-text-4">AI-native growth</div>
          </div>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.88 }}
        >
          {METRICS.map((m, i) => (
            <div key={m.label} className="flex items-center gap-5">
              {i > 0 && <div className="w-px h-7 bg-border" />}
              <div className="flex flex-col items-center gap-0.5">
                <div
                  className="font-display font-medium text-text"
                  style={{ fontSize: 24, letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {m.value}
                </div>
                <div className="text-label text-text-4 whitespace-nowrap">{m.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Channel tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 1.05 }}
        >
          {['Meta', 'Google', 'Amazon', 'Blinkit', 'Zepto'].map((ch) => (
            <span
              key={ch}
              className="text-label text-text-4 px-2.5 py-1 rounded-md border border-border"
            >
              {ch}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-4 right-4 text-label text-text-4">
        Delhi NCR · 2026
      </div>

      {/* Subtle bottom glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(91,79,229,0.08) 0%, transparent 100%)',
        }}
      />
    </motion.div>
  )
}

function ScrollIndicator({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="absolute bottom-8 right-8 md:right-10 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.0, ease: EASE_OUT }}
      aria-hidden
    >
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

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
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
        <span className="absolute -bottom-px left-0 h-px w-0 bg-text-2 group-hover:w-full transition-all duration-300 ease-out" />
      </span>
    </Link>
  )
}

export function Hero() {
  const [ready, setReady] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let settled = false
    const go = () => {
      if (settled) return
      settled = true
      setReady(true)
    }
    window.addEventListener('bf:ready', go)
    const t = setTimeout(go, 200)
    return () => {
      window.removeEventListener('bf:ready', go)
      clearTimeout(t)
    }
  }, [])

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
      <div className="h-16 flex-shrink-0" aria-hidden />

      <motion.div
        style={{ y: contentY, opacity: opacityOut }}
        className="flex-1 flex items-center"
      >
        <div className="container-brand w-full py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-10 lg:gap-14 items-center">

            {/* ── Left: text ── */}
            <div>
              <div className="overflow-hidden mb-10">
                <motion.div
                  initial={{ y: '110%' }}
                  animate={ready ? { y: '0%' } : {}}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.05 }}
                >
                  <Eyebrow>brandlyfit / ai-native growth</Eyebrow>
                </motion.div>
              </div>

              <h1 className="text-display-1 mb-8 md:mb-10" style={{ maxWidth: '14ch' }}>
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

              <motion.p
                className="text-lead text-text-2 max-w-[540px] mb-12"
                style={{ lineHeight: 1.55, fontWeight: 300, fontSize: 19 }}
                initial={{ opacity: 0, y: 20 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.52 }}
              >
                We help D2C founders scale across Meta, Google, Amazon, Blinkit, Zepto and
                beyond — running the AI-native workflows their in-house teams can&apos;t move
                fast enough to build.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.65 }}
              >
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

                <GhostButton href="/work">See our work</GhostButton>
              </motion.div>

              <motion.div
                className="mt-16 md:mt-20 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.85 }}
              >
                <div className="w-px h-8 bg-border-strong" aria-hidden />
                <span className="text-label text-text-4">ai-native / dark-first / Delhi NCR</span>
              </motion.div>
            </div>

            {/* ── Right: visual panel ── */}
            <HeroVisual ready={ready} />
          </div>
        </div>
      </motion.div>

      <ScrollIndicator visible={ready} />

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
