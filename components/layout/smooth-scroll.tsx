'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { useLenis } from '@/hooks/use-lenis'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useLenis()
  return <>{children}</>
}
