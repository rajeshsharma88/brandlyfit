import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { LogoWordmark } from '@/components/primitives/logo'

const SERVICES = [
  { label: 'Meta Ads', href: '/services/meta-ads' },
  { label: 'Google Ads', href: '/services/google-ads' },
  { label: 'E-commerce Ads', href: '/services/ecommerce-ads' },
  { label: 'Quick-commerce Ads', href: '/services/quick-commerce-ads' },
  { label: 'Shopify', href: '/services/shopify' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'AEO', href: '/services/aeo' },
  { label: 'GEO', href: '/services/geo' },
]

const COMPANY = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Start a project', href: '/start' },
  { label: 'Contact', href: '/contact' },
]

const CONNECT = [
  { label: 'LinkedIn', href: '#', external: true },
  { label: 'Instagram', href: '#', external: true },
  { label: 'Twitter / X', href: '#', external: true },
  { label: 'hello@brandlyfit.com', href: 'mailto:hello@brandlyfit.com', external: false },
]

function FooterLink({
  href,
  label,
  external,
}: {
  href: string
  label: string
  external?: boolean
}) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-1 text-caption text-text-4 hover:text-text-2 transition-colors duration-150"
    >
      {label}
      {external && (
        <ArrowUpRight
          size={12}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 -mt-0.5"
        />
      )}
    </Link>
  )
}

function ColumnHead({ children }: { children: React.ReactNode }) {
  return <h3 className="text-label text-text-3 mb-5">{children}</h3>
}

export function Footer() {
  return (
    <footer className="hairline-top above-grid" aria-label="Site footer">
      {/* ── Giant bleeding wordmark ───────────────────── */}
      {/*
        Overflows the container intentionally — centered in the viewport,
        font is large enough to bleed both sides at most viewport widths.
      */}
      <div
        className="overflow-hidden border-b border-border relative"
        aria-hidden
      >
        <div
          className="text-center select-none leading-none whitespace-nowrap font-display font-medium"
          style={{
            fontSize: 'clamp(96px, 20vw, 280px)',
            letterSpacing: '-0.04em',
            color: 'var(--color-border-strong)',
            padding: '0.15em 0 0.05em',
          }}
        >
          brandlyfit
        </div>
      </div>

      {/* ── Column grid ──────────────────────────────── */}
      <div className="container-brand pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12">

          {/* Identity */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-5">
            <LogoWordmark href="/" />
            <p className="text-caption text-text-3 max-w-[200px] leading-relaxed">
              AI-native growth for D2C brands that want to scale without bloating headcount.
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-label text-text-4">Delhi NCR, India</span>
              <span className="text-label text-text-4">brandlyfit.com</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <ColumnHead>Services</ColumnHead>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <FooterLink href={s.href} label={s.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <ColumnHead>Company</ColumnHead>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <FooterLink href={c.href} label={c.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <ColumnHead>Connect</ColumnHead>
            <ul className="flex flex-col gap-2.5">
              {CONNECT.map((c) => (
                <li key={c.label}>
                  <FooterLink href={c.href} label={c.label} external={c.external} />
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div>
            <ColumnHead>Info</ColumnHead>
            <ul className="flex flex-col gap-2.5">
              <li className="text-label text-text-4">Brand v1.0</li>
              <li className="text-label text-text-4">May 2026</li>
              <li className="text-label text-text-4">AI-native</li>
              <li className="text-label text-text-4">Dark first</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom meta bar ──────────────────────────── */}
      <div className="border-t border-border">
        <div className="container-brand py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-label text-text-4">
            © 2026 Brandlyfit. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-label text-text-4 hover:text-text-3 transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-label text-text-4 hover:text-text-3 transition-colors duration-150"
            >
              Terms
            </Link>
            <span className="text-label text-text-4">Made in Delhi</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
