'use client'

import { useEffect } from 'react'
import { useMotionValue } from 'motion/react'

export function useMousePosition() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  useEffect(() => {
    const update = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [x, y])

  return { x, y }
}
