import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { SectionNumber } from './SectionMeta'
import { textReveal, textLine, stagger, cardItem, hoverLift } from '../lib/motion'
import { AnimatedTitle } from '../animations/components'

function PlanCard({ plan }) {
  if (plan.featured) {
    return (
      <motion.div
        variants={cardItem}
        whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
        className="bg-primary text-white rounded-2xl p-8 flex flex-col shadow-card-md"
      >
        <div className="mb-5">
          {plan.tag && <p className="label text-secondary mb-3">{plan.tag}</p>}
          <h3 className="font-archivo font-bold text-2xl tracking-display text-white mb-4 text-balance">
            {plan.name}
          </h3>
        </div>
        <p className="font-inter text-sm leading-relaxed text-white/65 flex-1 text-pretty">{plan.body}</p>
        <motion.a
          href="#contact"
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-block text-center bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
        >
          {plan.cta}
        </motion.a>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardItem}
      whileHover={hoverLift}
      className="bg-white border border-border rounded-2xl p-8 flex flex-col shadow-card"
    >
      <div className="mb-5">
        {plan.tag && <p className="label text-muted mb-3">{plan.tag}</p>}
        <h3 className="font-archivo font-bold text-2xl tracking-display text-primary mb-4 text-balance">
          {plan.name}
        </h3>
      </div>
      <p className="font-inter text-sm leading-relaxed text-muted flex-1 text-pretty">{plan.body}</p>
      <motion.a
        href="#contact"
        whileTap={{ scale: 0.97 }}
        className="mt-8 inline-block text-center border border-border text-primary font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:border-secondary hover:text-secondary transition-colors duration-200"
      >
        {plan.cta}
      </motion.a>
    </motion.div>
  )
}

export default function Pricing() {
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
          <motion.div variants={textLine}><SectionNumber index={3} label="Les offres" /></motion.div>
        </motion.div>
        <AnimatedTitle
          as="h2"
          className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance mb-12"
          delay={0.05}
        >
          {content.pricing.title}
        </AnimatedTitle>
        <motion.div
          ref={gridRef}
          variants={stagger(0.05)}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {content.pricing.plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
