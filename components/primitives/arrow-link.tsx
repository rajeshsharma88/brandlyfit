'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ArrowLinkProps {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
}

export function ArrowLink({ href, children, className, external }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group inline-flex items-center gap-1.5 text-text-2 hover:text-text transition-colors duration-200',
        className
      )}
    >
      <span className="border-b border-text-4 group-hover:border-text transition-colors duration-200">
        {children}
      </span>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  )
}
