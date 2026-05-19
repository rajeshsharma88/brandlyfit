'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { LogoWordmark } from '@/components/primitives/logo'
import { MagneticButton } from '@/components/motion/magnetic-button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

const EASE = [0.22, 1, 0.36, 1] as const

// ─── Hamburger icon that morphs to X ──────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between" aria-hidden>
      <motion.span
        className="block h-px bg-current"
        animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.3, ease: EASE }}
      />
      <motion.span
        className="block h-px bg-current"
        animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-px bg-current"
        animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.3, ease: EASE }}
      />
    </div>
  )
}

// ─── Single nav link with underline-from-left ─────────────
function NavLink({
  href,
  label,
  active,
}: {
  href: string
  label: string
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative text-label transition-colors duration-200 py-1 group',
        active ? 'text-text' : 'text-text-3 hover:text-text-2'
      )}
    >
      {label}
      {/* Underline: active = always visible, hover = animates from left */}
      <span
        className={cn(
          'absolute -bottom-px left-0 h-px bg-text transition-all duration-300 ease-out',
          active ? 'w-full' : 'w-0 group-hover:w-full'
        )}
      />
    </Link>
  )
}

// ─── Mobile menu link with mask reveal ────────────────────
const MOBILE_LINK_VARIANTS = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: '0%',
    transition: { delay: i * 0.07, duration: 0.5, ease: EASE },
  }),
  exit: (i: number) => ({
    y: '110%',
    transition: { delay: (3 - i) * 0.04, duration: 0.3, ease: [0.65, 0, 0.35, 1] as const },
  }),
}

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      closeRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* ── Desktop / global nav bar ───────────────────── */}
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 above-grid',
          scrolled
            ? 'backdrop-blur-xl bg-bg/75 border-b border-border'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="container-brand flex items-center justify-between h-16">
          {/* Logo */}
          <LogoWordmark href="/" />

          {/* Desktop links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(link.href)}
              />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton>
              <Link
                href="/start"
                className={cn(
                  'inline-flex items-center gap-1.5 px-5 py-2.5',
                  'bg-accent hover:bg-accent-2 text-white',
                  'text-[13px] font-medium tracking-tight rounded-full',
                  'transition-colors duration-200'
                )}
              >
                Start a project
                <span aria-hidden className="opacity-60">→</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={closeRef}
            className="md:hidden text-text-2 hover:text-text transition-colors p-1 -mr-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ─────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col"
            data-lenis-prevent
          >
            {/* Dot grid texture inside overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Nav links — vertically centered */}
            <nav
              aria-label="Mobile navigation"
              className="flex-1 flex flex-col justify-center px-8 relative"
            >
              {/* Mono index — decorative */}
              <motion.div
                className="text-label text-text-4 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                navigation
              </motion.div>

              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div
                      custom={i}
                      variants={MOBILE_LINK_VARIANTS}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          'flex items-baseline gap-4 py-3 group',
                          'border-b border-border',
                          'font-display text-[clamp(36px,8vw,56px)] font-medium tracking-tight leading-tight',
                          isActive(link.href) ? 'text-text' : 'text-text-3 hover:text-text',
                          'transition-colors duration-200'
                        )}
                      >
                        <span className="text-label text-text-4 mt-1 w-6 flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {link.label}
                        {isActive(link.href) && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-accent flex-shrink-0 mb-1" />
                        )}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer strip */}
            <motion.div
              className="px-8 pb-10 flex items-center justify-between border-t border-border"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ delay: 0.32, duration: 0.4, ease: EASE }}
            >
              <div className="pt-8">
                <Link
                  href="/start"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'inline-flex items-center gap-2 px-6 py-3.5',
                    'bg-accent text-white text-[15px] font-medium rounded-full',
                    'hover:bg-accent-2 transition-colors duration-200'
                  )}
                >
                  Start a project →
                </Link>
              </div>
              <div className="pt-8 text-label text-text-4 text-right">
                brandlyfit.com<br />
                Delhi NCR
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
