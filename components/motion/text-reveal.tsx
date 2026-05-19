'use client'

import { ReactNode, Children, isValidElement, cloneElement } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Wraps each child line in an overflow:hidden mask. Children should be
 * separate elements (one per line) for proper line-by-line stagger.
 */
export function TextReveal({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  as: Tag = 'div',
}: TextRevealProps) {
  const lines = Children.toArray(children)

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const line = {
    hidden: { y: '110%' },
    visible: {
      y: '0%',
      transition: { duration: 0.8, ease },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
    >
      {lines.map((child, i) => (
        <span key={i} className="text-mask">
          <motion.span
            className="block"
            variants={line}
          >
            {child}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}

/**
 * Single-line reveal — for eyebrows, labels, standalone lines.
 */
export function LineReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <span className={cn('text-mask inline-block', className)}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.7, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/**
 * Fade-up reveal — for paragraphs, CTAs, subtler elements.
 */
export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}
