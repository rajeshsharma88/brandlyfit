'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'motion/react'

interface CountUpProps {
  from?: number
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function CountUp({
  from = 0,
  to,
  duration = 1.2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' } as Parameters<typeof useInView>[1])

  useEffect(() => {
    if (!inView || !ref.current) return

    const el = ref.current
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`
      },
    })

    return () => controls.stop()
  }, [inView, from, to, duration, prefix, suffix, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}{from.toFixed(decimals)}{suffix}
    </span>
  )
}
