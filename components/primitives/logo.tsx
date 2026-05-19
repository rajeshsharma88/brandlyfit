import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  href?: string
}

export function LogoWordmark({ className, href = '/' }: LogoProps) {
  const mark = (
    <span className={cn('flex items-center gap-3 group', className)}>
      <span className="w-3 h-3 bg-accent flex-shrink-0" />
      <span className="font-display text-[18px] font-medium tracking-tight text-text leading-none">
        brandlyfit
      </span>
    </span>
  )

  return href ? <Link href={href}>{mark}</Link> : mark
}

export function LogoMonogram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-10 h-10 bg-accent rounded-sm flex items-center justify-center',
        'text-white font-display text-lg font-medium',
        className
      )}
    >
      B
    </div>
  )
}
