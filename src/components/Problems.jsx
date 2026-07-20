import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { SectionNumber } from './SectionMeta'
import { textReveal, textLine, stagger, cardItem, hoverLift } from '../lib/motion'
import { AnimatedTitle } from '../animations/components'

export default function Problems() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px 0px' })

  return (
    <section className="bg-section py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={headRef}
          variants={textReveal()}
          initial="hidden"
          animate={headInView ? 'show' : 'hidden'}
        >
          <motion.div variants={textLine}><SectionNumber index={1} label="Le problème" /></motion.div>
        </motion.div>
        <AnimatedTitle
          as="h2"
          className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance mb-12"
          delay={0.05}
        >
          {content.problems.title}
        </AnimatedTitle>
        <motion.div
          ref={gridRef}
          variants={stagger()}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {content.problems.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              whileHover={hoverLift}
              className="bg-white border border-border rounded-2xl p-6 shadow-card cursor-default"
            >
              <h3 className="font-archivo font-bold text-lg tracking-display text-primary mb-2 text-balance">
                {card.title}
              </h3>
              <p className="font-inter text-muted text-sm leading-relaxed text-pretty">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
