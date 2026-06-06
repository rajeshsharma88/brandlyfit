'use client'

import Link from 'next/link'
import {
  ArrowUpRight,
  TrendingUp,
  Search,
  ShoppingCart,
  Zap,
  Store,
  BarChart2,
  Sparkles,
  Globe,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { SERVICES } from '@/content/services'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

// ── Desktop asymmetric grid placement ──────────────────────
const GRID_CLASSES: Record<string, string> = {
  'meta-ads':           'sg-meta',
  'google-ads':         'sg-google',
  'ecommerce-ads':      'sg-ecommerce',
  'quick-commerce-ads': 'sg-qcommerce',
  'shopify':            'sg-shopify',
  'seo':                'sg-seo',
  'aeo':                'sg-aeo',
  'geo':                'sg-geo',
}

const SERVICE_ICONS: Record<string, LucideIcon> = {
  'meta-ads':           TrendingUp,
  'google-ads':         Search,
  'ecommerce-ads':      ShoppingCart,
  'quick-commerce-ads': Zap,
  'shopify':            Store,
  'seo':                BarChart2,
  'aeo':                Sparkles,
  'geo':                Globe,
}

const EASE = [0.22, 1, 0.36, 1] as const

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const isFeatured = service.slug === 'meta-ads'
  const Icon = SERVICE_ICONS[service.slug]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.05 }}
      className={cn(
        'group relative flex flex-col justify-between h-full',
        'bg-surface border border-border rounded-xl p-6 md:p-8',
        'hover:border-accent transition-all duration-300',
        isFeatured ? 'min-h-70 lg:min-h-0' : 'min-h-45 lg:min-h-0'
      )}
    >
      {/* Hover glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(91,79,229,0.10) 0%, transparent 60%)',
        }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          {/* Icon badge */}
          <div
            className={cn(
              'flex items-center justify-center rounded-lg shrink-0',
              'bg-accent-soft border border-accent/20',
              'transition-all duration-300 group-hover:bg-accent/15',
              isFeatured ? 'w-9 h-9' : 'w-8 h-8'
            )}
          >
            {Icon && (
              <Icon
                size={isFeatured ? 18 : 15}
                className="text-accent-2"
                strokeWidth={1.75}
              />
            )}
          </div>
          <span className="text-label text-text-4">{service.index}</span>
        </div>

        <ArrowUpRight
          size={isFeatured ? 20 : 16}
          className="text-text-4 group-hover:text-text-2 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
        />
      </div>

      {/* Service name + description */}
      <div className="flex-1 flex flex-col justify-end gap-4">
        <h3
          className={cn(
            'font-display font-medium tracking-tight leading-tight text-text',
            isFeatured
              ? 'text-[clamp(28px,3.5vw,40px)]'
              : 'text-[22px] md:text-[24px]'
          )}
          style={{ letterSpacing: '-0.025em' }}
        >
          {service.name}
        </h3>

        <p className="text-caption text-text-3 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Tagline chip — featured card only */}
        {isFeatured && (
          <div className="flex">
            <span className="text-label text-accent-2 px-2.5 py-1 rounded-md border border-accent/20 bg-accent-soft">
              {service.tagline}
            </span>
          </div>
        )}
      </div>

      {/* Full-card link overlay */}
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 rounded-xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-label={`${service.name} — ${service.shortDesc}`}
      />
    </motion.div>
  )
}

export function ServicesGrid() {
  return (
    <section className="above-grid section-padding hairline-bottom" aria-label="Services">
      <div className="container-brand">
        <div className="mb-4">
          <Eyebrow className="mb-8">02 / what we do</Eyebrow>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.h2
            className="text-display-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Eight services.{' '}
            <span className="block">
              One operating{' '}
              <em
                className="not-italic"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-accent-2)',
                  fontWeight: 400,
                }}
              >
                system
              </em>
              .
            </span>
          </motion.h2>

          <motion.p
            className="text-lead text-text-2 lg:ml-auto max-w-135"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            Most agencies bolt services together. We run them as one connected AI
            workflow — creative, media, store, and search compounding into a single
            growth engine.
          </motion.p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3"
          role="list"
          aria-label="Our services"
        >
          {SERVICES.map((service, i) => (
            <div key={service.slug} role="listitem" className={GRID_CLASSES[service.slug]}>
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
