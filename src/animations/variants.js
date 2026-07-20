// ─── Easing curve ───────────────────────────────────────────────────────────
export const ease = [0.22, 1, 0.36, 1]

// ─── Page / section entrances ───────────────────────────────────────────────
export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5, ease } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
}

// ─── Stagger containers ──────────────────────────────────────────────────────
export const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
})

// Text cascade — section headers: eyebrow → h2 → body stagger in sequence
export const textReveal = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
})

// Word-by-word title animation
export const wordReveal = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
})

// ─── Leaf item variants ───────────────────────────────────────────────────────
export const cardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.65, ease } },
}

export const textLine = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease } },
}

export const wordItem = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.4, ease } },
}

export const tagItem = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1,    transition: { duration: 0.35, ease } },
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.7 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
}

export const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  show:   { opacity: 1, scale: 1,    transition: { duration: 0.7, ease } },
}

// ─── Hover / interaction ─────────────────────────────────────────────────────
export const hoverLift = { y: -6, transition: { duration: 0.2, ease: 'easeOut' } }

export const hoverButton = {
  scale: 1.03,
  boxShadow: '0 8px 24px -4px rgba(37, 99, 235, 0.22)',
  transition: { duration: 0.2 },
}

export const tapButton = { scale: 0.97, transition: { duration: 0.1 } }

// ─── Continuous animation ────────────────────────────────────────────────────
export const floatY = {
  y: [0, -10, 0],
  transition: { duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
}

// ─── Legacy helper ───────────────────────────────────────────────────────────
export const t = (delay = 0) => ({ duration: 0.35, ease, delay })
