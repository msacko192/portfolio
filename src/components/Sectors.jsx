import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { SectionNumber } from './SectionMeta'
import { textReveal, textLine, stagger, cardItem, hoverLift } from '../lib/motion'

export default function Sectors() {
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
          className="max-w-2xl mb-12"
        >
          <motion.div variants={textLine}><SectionNumber index={5} label="Les secteurs" /></motion.div>
          <motion.h2
            variants={textLine}
            className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-4 text-balance"
          >
            {content.sectors.title}
          </motion.h2>
          <motion.p
            variants={textLine}
            className="font-inter text-muted leading-relaxed text-pretty max-w-[62ch]"
          >
            {content.sectors.subtitle}
          </motion.p>
        </motion.div>
        <motion.div
          ref={gridRef}
          variants={stagger()}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {content.sectors.list.map((sector, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              whileHover={hoverLift}
              className="bg-white border border-border rounded-2xl p-6 shadow-card cursor-default"
            >
              <h3 className="font-archivo font-bold text-lg tracking-display text-primary mb-2">
                {sector.name}
              </h3>
              <p className="font-inter text-sm text-muted leading-relaxed text-pretty">
                {sector.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
