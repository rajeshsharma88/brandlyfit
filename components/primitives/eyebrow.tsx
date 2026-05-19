import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn('flex items-center gap-3 text-label text-text-3', className)}>
      <span className="w-6 h-px bg-accent flex-shrink-0" />
      <span>{children}</span>
    </div>
  )
}
