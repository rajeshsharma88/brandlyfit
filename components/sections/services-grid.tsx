'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Eyebrow } from '@/components/primitives/eyebrow'
import { SERVICES } from '@/content/services'
import { cn } from '@/lib/utils'

// CSS class applied per card for the asymmetric desktop grid
const GRID_CLASSES: Record<string, string> = {
  'meta-ads':          'sg-meta',
  'google-ads':        'sg-google',
  'ecommerce-ads':     'sg-ecommerce',
  'quick-commerce-ads':'sg-qcommerce',
  'shopify':           'sg-shopify',
  'seo':               'sg-seo',
  'aeo':               'sg-aeo',
  'geo':               'sg-geo',
}

const EASE = [0.22, 1, 0.36, 1] as const

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const isFeatured = service.slug === 'meta-ads' // spans 2 rows — give more space

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.05 }}
      className={cn(
        GRID_CLASSES[service.slug],
        'group relative flex flex-col justify-between',
        'bg-surface border border-border rounded-xl p-6 md:p-8',
        'hover:border-accent transition-[border-color] duration-300',
        isFeatured ? 'min-h-[280px] lg:min-h-0' : 'min-h-[180px] lg:min-h-0'
      )}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          {/* Violet square — animates on hover */}
          <div
            className={cn(
              'flex-shrink-0 bg-accent transition-all duration-300',
              isFeatured ? 'w-3 h-3' : 'w-2.5 h-2.5',
              'group-hover:scale-[1.6]'
            )}
          />
          <span className="text-label text-text-4">{service.index}</span>
        </div>

        {/* Arrow — translates on hover */}
        <ArrowUpRight
          size={isFeatured ? 20 : 16}
          className="text-text-4 group-hover:text-text-2 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
        />
      </div>

      {/* Service name */}
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
        {/* Header — asymmetric two-column layout */}
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
            className="text-lead text-text-2 lg:ml-auto max-w-[540px]"
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

        {/* Asymmetric service grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3"
          role="list"
          aria-label="Our services"
        >
          {SERVICES.map((service, i) => (
            <div key={service.slug} role="listitem">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
