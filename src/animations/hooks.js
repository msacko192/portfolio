import { useState, useEffect } from 'react'

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 * Uses a passive scroll listener — safe for performance.
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    handler() // run once on mount
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
