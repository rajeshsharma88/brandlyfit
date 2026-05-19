'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { animate } from 'motion/react'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const isFirst = useRef(true)

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    // Skip on first mount — loader handles that
    if (isFirst.current) {
      isFirst.current = false
      return
    }

    // Wipe in from top, then wipe out
    animate(overlay, { scaleY: [0, 1] }, { duration: 0.3, ease: [0.65, 0, 0.35, 1] })
      .then(() =>
        animate(overlay, { scaleY: [1, 0] }, {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.05,
        })
      )
  }, [pathname])

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden
        className="page-transition-overlay"
        style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
      />
      {children}
    </>
  )
}
