import { useEffect } from 'react'

/**
 * Global scroll-reveal auto-system.
 *
 * Targets semantic content elements that are NOT already inside a Framer Motion
 * animated wrapper (detected by the inline `opacity` style FM sets on mount).
 * Elements above the fold at page-load are skipped — no flash, no re-animation
 * of content the user can already see.
 *
 * Stagger: siblings inside the same parent get sequential delay (80 ms each).
 * Respects prefers-reduced-motion: if the OS asks for reduced motion, this hook
 * does nothing (MotionConfig handles Framer Motion side; this handles the CSS side).
 *
 * Usage: call once in Layout.jsx — no other changes needed anywhere.
 */
export function useAutoReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const SELECTORS = [
      'main p',
      'main li',
      'main h3:not([class*="font-archivo"])', // h3s NOT already motion-wrapped
      'main label',
      'article p',
      'article li',
    ].join(',')

    const CLASS_HIDDEN  = 'sr-hidden'
    const CLASS_VISIBLE = 'sr-visible'
    const ATTR          = 'data-sr'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add(CLASS_VISIBLE)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    )

    // Small delay: let Framer Motion set its initial inline styles first so we
    // can detect which elements it already owns.
    const timer = setTimeout(() => {
      const candidates = Array.from(document.querySelectorAll(SELECTORS))

      // Group siblings by parent so we can assign stagger delays
      const parentMap = new Map()

      candidates.forEach((el) => {
        // Skip if already processed
        if (el.hasAttribute(ATTR)) return

        // Skip empty text nodes
        if (!el.textContent?.trim()) return

        // Skip if an ancestor already has an inline opacity (= Framer Motion owns it)
        if (el.closest('[style*="opacity"]')) return

        // Skip elements visible at page load (above the fold)
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) return

        el.setAttribute(ATTR, '')

        const parent = el.parentElement
        if (!parentMap.has(parent)) parentMap.set(parent, [])
        parentMap.get(parent).push(el)
      })

      // Apply stagger delays per parent group then observe
      parentMap.forEach((children) => {
        children.forEach((el, idx) => {
          const delay = idx * 80 // 80 ms stagger between siblings
          el.style.setProperty('--sr-delay', `${delay}ms`)
          el.classList.add(CLASS_HIDDEN)
          observer.observe(el)
        })
      })
    }, 300)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      // Clean up classes so page transitions start fresh
      document.querySelectorAll(`[${ATTR}]`).forEach((el) => {
        el.removeAttribute(ATTR)
        el.classList.remove(CLASS_HIDDEN, CLASS_VISIBLE)
        el.style.removeProperty('--sr-delay')
      })
    }
  }, [])
}
