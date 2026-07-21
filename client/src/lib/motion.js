export * from '../animations/variants.js'

// Imperative animation helper — replaces inline {initial, animate, transition} patterns
export const f = (delay = 0, y = 16) => ({
  initial:    { opacity: 0, y },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})
