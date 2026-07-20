import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stagger, cardItem, hoverLift, wordReveal, wordItem } from './variants'

const FADE_TRANSITION = (delay) => ({ duration: 0.7, ease: 'easeOut', delay })

// ─── FadeIn ──────────────────────────────────────────────────────────────────
export function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={FADE_TRANSITION(delay)}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeUp ──────────────────────────────────────────────────────────────────
export function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={FADE_TRANSITION(delay)}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerContainer ────────────────────────────────────────────────────────
export function StaggerContainer({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      variants={stagger(delay)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── AnimatedCard ────────────────────────────────────────────────────────────
export function AnimatedCard({ children, className = '' }) {
  return (
    <motion.div variants={cardItem} whileHover={hoverLift} className={className}>
      {children}
    </motion.div>
  )
}

// ─── AnimatedSection ─────────────────────────────────────────────────────────
export function AnimatedSection({ children, as = 'div', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const Tag = motion[as] || motion.div
  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  )
}

// ─── AnimatedTitle ───────────────────────────────────────────────────────────
// Word-by-word heading — standalone, uses its own useInView so it works
// regardless of any parent AnimatePresence context.
export function AnimatedTitle({ children, as = 'h2', className = '', delay = 0 }) {
  const MotionTag = motion[as] || motion.h2
  const words = typeof children === 'string' ? children.split(' ') : null
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <MotionTag
      ref={ref}
      variants={wordReveal(delay)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {words
        ? words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordItem}
              style={{ display: 'inline-block', marginRight: i < words.length - 1 ? '0.28em' : '' }}
            >
              {word}
            </motion.span>
          ))
        : children}
    </MotionTag>
  )
}
