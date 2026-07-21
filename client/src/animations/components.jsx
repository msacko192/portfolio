import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { wordReveal, wordItem } from './variants'

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
