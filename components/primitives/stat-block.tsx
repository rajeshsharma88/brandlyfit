import { cn } from '@/lib/utils'
import { CountUp } from '@/components/motion/count-up'

interface StatBlockProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  className?: string
}

export function StatBlock({
  value,
  prefix,
  suffix,
  decimals,
  label,
  className,
}: StatBlockProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="font-display text-display-2 font-medium text-text">
        <CountUp
          to={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          duration={1.2}
        />
      </div>
      <div className="text-label text-text-3">{label}</div>
    </div>
  )
}
