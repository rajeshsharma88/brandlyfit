'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Context ────────────────────────────────────────────────────────────────

interface StartProjectContextValue {
  open: () => void
}

const StartProjectContext = createContext<StartProjectContextValue | null>(null)

export function useStartProject() {
  const ctx = useContext(StartProjectContext)
  if (!ctx) throw new Error('useStartProject must be used within StartProjectProvider')
  return ctx
}

// ─── Trigger button ─────────────────────────────────────────────────────────
// Drop-in replacement for <Link href="/start"> — same visual, opens modal.

export function StartProjectButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open } = useStartProject()
  return (
    <button type="button" onClick={open} className={className} {...props}>
      {children}
    </button>
  )
}

// ─── Constants ──────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as const

const OVERLAY_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const PANEL_VARIANTS = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE, delay: 0.05 },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] as const },
  },
}

// ─── Form field ─────────────────────────────────────────────────────────────

function Field({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
}: {
  label: string
  id: string
  type?: string
  value: string
  onChange: (v: string) => void
  error?: string
  placeholder: string
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label text-text-3">
        {label} <span className="text-accent">*</span>
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full px-4 py-3 bg-surface border rounded-lg',
          'text-[15px] text-text placeholder:text-text-4',
          'outline-none transition-colors duration-200',
          'focus:border-accent focus:ring-1 focus:ring-accent/30',
          error ? 'border-red-500/60' : 'border-border'
        )}
      />
      {error && (
        <span className="text-[12px] text-red-400 font-mono">{error}</span>
      )}
    </div>
  )
}

// ─── Modal ──────────────────────────────────────────────────────────────────

function StartProjectModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLInputElement | null>(null)

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setName('')
      setEmail('')
      setPhone('')
      setErrors({})
      setSubmitted(false)
    }
  }, [isOpen])

  // Focus first field
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const el = document.getElementById('sp-name') as HTMLInputElement | null
        el?.focus()
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  function validate() {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Name is required'
    if (!email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Enter a valid email'
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required'
    } else if (!/^[\d\s\-+()]{7,20}$/.test(phone.trim())) {
      errs.phone = 'Enter a valid phone number'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // For now — log & show success. Backend route can be added later.
    console.log('Start project form:', { name: name.trim(), email: email.trim(), phone: phone.trim() })
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          variants={OVERLAY_VARIANTS}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25 }}
          data-lenis-prevent
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Start a project"
            variants={PANEL_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'relative w-full max-w-md',
              'bg-bg border border-border rounded-2xl',
              'p-8 md:p-10 shadow-2xl'
            )}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-text-4 hover:text-text-2 transition-colors duration-150 rounded-lg hover:bg-surface"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {submitted ? (
              /* ── Success state ─────────────────── */
              <div className="flex flex-col items-center text-center gap-6 py-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-display font-medium text-text mb-2"
                    style={{ fontSize: 24, letterSpacing: '-0.02em' }}
                  >
                    We&apos;ll be in touch
                  </h3>
                  <p className="text-[15px] text-text-3" style={{ fontWeight: 300 }}>
                    Thanks, {name.trim().split(' ')[0]}. We&apos;ll reach out within 24 hours to discuss your project.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-[13px] font-medium text-text-3 border border-border rounded-full hover:border-text-3 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            ) : (
              /* ── Form ──────────────────────────── */
              <>
                <div className="mb-8">
                  <div className="text-label text-text-4 mb-3">start a project</div>
                  <h3
                    className="font-display font-medium text-text"
                    style={{ fontSize: 28, letterSpacing: '-0.03em', lineHeight: 1.15 }}
                  >
                    Tell us about{' '}
                    <em
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        color: 'var(--color-accent-2)',
                        fontWeight: 400,
                      }}
                    >
                      yourself
                    </em>
                    .
                  </h3>
                </div>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <Field
                    id="sp-name"
                    label="Name"
                    value={name}
                    onChange={setName}
                    error={errors.name}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  <Field
                    id="sp-email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    error={errors.email}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                  <Field
                    id="sp-phone"
                    label="Phone"
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                    error={errors.phone}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />

                  <button
                    type="submit"
                    className={cn(
                      'w-full mt-2 px-6 py-3.5',
                      'bg-accent hover:bg-accent-2 text-white',
                      'text-[15px] font-medium rounded-full',
                      'transition-colors duration-200',
                      'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
                    )}
                  >
                    Submit
                  </button>

                  <p className="text-[11px] text-text-4 text-center mt-1" style={{ fontWeight: 300 }}>
                    We&apos;ll respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Provider ───────────────────────────────────────────────────────────────

export function StartProjectProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <StartProjectContext.Provider value={{ open }}>
      {children}
      <StartProjectModal isOpen={isOpen} onClose={close} />
    </StartProjectContext.Provider>
  )
}
