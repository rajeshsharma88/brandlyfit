'use client'

import { useEffect } from 'react'

export function useLenis() {
  useEffect(() => {
    let lenis: import('lenis').default | null = null

    async function init() {
      const { default: Lenis } = await import('lenis')

      lenis = new Lenis({
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        prevent: (node) => node.closest('[data-lenis-prevent]') !== null,
      })

      function raf(time: number) {
        lenis?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    init()

    return () => {
      lenis?.destroy()
    }
  }, [])
}
