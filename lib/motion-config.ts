// Standardized easing curves — use these everywhere for consistency

export const EASE_OUT = [0.22, 1, 0.36, 1] as const
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const

export const DURATIONS = {
  fast: 0.3,
  normal: 0.7,
  slow: 1.0,
  xslow: 1.4,
} as const

export const STAGGER = {
  tight: 0.05,
  normal: 0.08,
  loose: 0.12,
} as const

// viewport config for whileInView
export const VIEWPORT_ONCE = { once: true, margin: '-20%' } as const
export const VIEWPORT_LOOSE = { once: true, margin: '-10%' } as const
