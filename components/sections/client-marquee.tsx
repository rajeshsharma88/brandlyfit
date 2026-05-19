'use client'

import { motion } from 'motion/react'

const CLIENTS = [
  'Acme Wellness',
  'Sage & Co.',
  'Northstar Naturals',
  'Bloom & Bay',
  'Pura Vida',
  'Kova',
  'Ember & Oak',
  'Veldt Co.',
]

// Duplicate for seamless infinite loop
const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS]

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0 px-10">
      {/* Small violet square — brand mark placeholder */}
      <div className="w-1.5 h-1.5 bg-accent opacity-60 flex-shrink-0" />
      <span
        className="font-display font-medium text-text-4 whitespace-nowrap"
        style={{ fontSize: 14, letterSpacing: '-0.01em' }}
      >
        {name}
      </span>
    </div>
  )
}

export function ClientMarquee() {
  return (
    <section aria-label="Trusted by" className="above-grid">
      {/* Label above */}
      <div className="flex justify-center py-5 hairline-bottom hairline-top">
        <span className="text-label text-text-4">trusted by 40+ d2c brands</span>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden hairline-bottom py-5 group">
        {/* Fade edges */}
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, var(--color-bg) 0%, transparent 100%)',
          }}
        />
        <div
          aria-hidden
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, var(--color-bg) 0%, transparent 100%)',
          }}
        />

        {/* Track */}
        <div
          className="marquee-track flex items-center"
          style={{ width: 'max-content' }}
        >
          {MARQUEE_ITEMS.map((name, i) => (
            <ClientLogo key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
