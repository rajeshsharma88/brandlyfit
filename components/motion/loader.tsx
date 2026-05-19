'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, motion } from 'motion/react'

export function Loader() {
  const [show, setShow] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const squareRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show on first visit per session
    const seen = sessionStorage.getItem('bf-loader-seen')
    if (seen) return

    sessionStorage.setItem('bf-loader-seen', '1')
    setShow(true)

    const container = containerRef.current
    const square = squareRef.current
    const wordmark = wordmarkRef.current
    if (!container || !square || !wordmark) return

    // Sequence: square scales in → wordmark fades in → whole thing wipes up
    animate(square, { scale: [0, 1] }, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15,
    })
      .then(() =>
        animate(wordmark, { opacity: [0, 1] }, {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        })
      )
      .then(() =>
        // Hold briefly then wipe up
        new Promise<void>((resolve) => setTimeout(resolve, 350))
      )
      .then(() =>
        animate(container, { y: [0, '-100%'] }, {
          duration: 0.6,
          ease: [0.65, 0, 0.35, 1],
        })
      )
      .then(() => {
        setShow(false)
        window.dispatchEvent(new CustomEvent('bf:ready'))
      })
  }, [])

  if (!show) return null

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="fixed inset-0 z-[99999] bg-bg flex items-center justify-center"
    >
      <div className="flex items-center gap-4">
        <div
          ref={squareRef}
          className="w-4 h-4 bg-accent"
          style={{ scale: 0 }}
        />
        <div
          ref={wordmarkRef}
          className="font-display text-2xl font-medium tracking-tight text-text"
          style={{ opacity: 0 }}
        >
          brandlyfit
        </div>
      </div>
    </div>
  )
}
