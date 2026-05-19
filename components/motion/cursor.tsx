'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'motion/react'

type CursorVariant = 'default' | 'link' | 'text'

export function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>('default')
  const [isVisible, setIsVisible] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  // Main cursor: tight spring
  const x = useSpring(rawX, { stiffness: 800, damping: 50, mass: 0.5 })
  const y = useSpring(rawY, { stiffness: 800, damping: 50, mass: 0.5 })

  // Trail cursor: sluggish spring (lags behind)
  const trailX = useSpring(rawX, { stiffness: 200, damping: 30, mass: 1 })
  const trailY = useSpring(rawY, { stiffness: 200, damping: 30, mass: 1 })

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], [data-cursor="link"]')) {
        setVariant('link')
      } else if (target.closest('p, h1, h2, h3, h4, h5, h6, [data-cursor="text"]')) {
        setVariant('text')
      } else {
        setVariant('default')
      }
    }

    const hide = () => setIsVisible(false)
    const show = () => setIsVisible(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleEnter)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleEnter)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [rawX, rawY, isVisible])

  // SSR guard + touch guard
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (!window.matchMedia('(pointer: coarse)').matches) {
      setMounted(true)
      document.body.style.cursor = 'none'
    }
    return () => {
      document.body.style.cursor = ''
    }
  }, [])

  if (!mounted) return null

  const sizes: Record<CursorVariant, number> = {
    default: 8,
    link: 40,
    text: 2,
  }

  const size = sizes[variant]

  return (
    <>
      {/* Trail dot */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: 20,
          height: 20,
          background: 'rgba(255,255,255,0.06)',
          mixBlendMode: 'difference',
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      {/* Main cursor */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: size,
          height: variant === 'text' ? 20 : size,
          borderRadius: variant === 'text' ? 1 : '50%',
          background:
            variant === 'link'
              ? 'rgba(91, 79, 229, 0.4)'
              : 'rgba(255, 255, 255, 0.6)',
          mixBlendMode: 'difference',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { type: 'spring', stiffness: 600, damping: 40 },
          height: { type: 'spring', stiffness: 600, damping: 40 },
          borderRadius: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  )
}
