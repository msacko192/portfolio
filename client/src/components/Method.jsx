import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { SectionNumber } from './SectionMeta'
import { textReveal, textLine, stagger, cardItem, popIn } from '../lib/motion'
import { AnimatedTitle } from '../animations/components'

export default function Method() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px 0px' })

  return (
    <section id="methode" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={headRef}
          variants={textReveal()}
          initial="hidden"
          animate={headInView ? 'show' : 'hidden'}
        >
          <motion.div variants={textLine}><SectionNumber index={6} label="La démarche" /></motion.div>
        </motion.div>
        <AnimatedTitle
          as="h2"
          className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance mb-12"
          delay={0.05}
        >
          {content.method.title}
        </AnimatedTitle>
        <motion.div
          ref={gridRef}
          variants={stagger()}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 gap-10 lg:gap-16"
        >
          {content.method.steps.map((step, i) => (
            <motion.div key={i} variants={cardItem} className="flex gap-6">
              <motion.span
                variants={popIn}
                className="font-archivo font-bold text-5xl text-secondary/25 leading-none shrink-0 select-none tabular"
              >
                {step.number}
              </motion.span>
              <div>
                <h3 className="font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance">
                  {step.title}
                </h3>
                <p className="font-inter text-muted leading-relaxed text-pretty max-w-[42ch]">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
