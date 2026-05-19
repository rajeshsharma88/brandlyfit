'use client'

import { useRef, useState, ReactNode, MouseEvent } from 'react'
import { motion, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  disabled?: boolean
  onClick?: () => void
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  disabled = false,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useSpring(0, { stiffness: 300, damping: 25, mass: 0.5 })
  const y = useSpring(0, { stiffness: 300, damping: 25, mass: 0.5 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY

    // Only magnetic within 100px radius
    const dist = Math.sqrt(distX ** 2 + distY ** 2)
    if (dist < 100) {
      x.set(distX * strength)
      y.set(distY * strength)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-flex' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className={cn('cursor-none', className)}
    >
      {children}
    </motion.div>
  )
}
