import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { SectionNumber } from './SectionMeta'
import { textReveal, textLine, stagger, popIn, fadeUp } from '../lib/motion'

export default function Solution() {
  const { steps } = content.solution

  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })

  // Single wrapper ref for both desktop/mobile — whichever is visible fires
  const stepsWrapRef = useRef(null)
  const stepsInView = useInView(stepsWrapRef, { once: true, margin: '-80px 0px' })

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={headRef}
          variants={textReveal()}
          initial="hidden"
          animate={headInView ? 'show' : 'hidden'}
          className="max-w-2xl mb-16"
        >
          <motion.div variants={textLine}><SectionNumber index={2} label="L'approche" /></motion.div>
          <motion.h2
            variants={textLine}
            className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-4 text-balance"
          >
            {content.solution.title}
          </motion.h2>
          <motion.p
            variants={textLine}
            className="font-inter text-muted leading-relaxed text-pretty max-w-[62ch]"
          >
            {content.solution.body}
          </motion.p>
        </motion.div>

        <div ref={stepsWrapRef}>
          {/* Desktop: timeline horizontale */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            animate={stepsInView ? 'show' : 'hidden'}
            className="hidden md:block relative"
          >
            <div className="absolute top-[11px] left-[9px] right-0 h-px bg-border" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="relative pt-8">
                  <motion.div
                    variants={popIn}
                    className="absolute top-[4px] left-[9px] w-[14px] h-[14px] rounded-full border-2 border-secondary bg-white"
                  />
                  <p className="label text-secondary mb-2">{step.number}</p>
                  <h3 className="font-archivo font-bold text-base tracking-display text-primary mb-2 leading-snug text-balance">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-muted leading-relaxed text-pretty">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile: vertical */}
          <motion.div
            variants={stagger()}
            initial="hidden"
            animate={stepsInView ? 'show' : 'hidden'}
            className="md:hidden"
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-5 mb-8 last:mb-0">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-8 h-8 rounded-full border-2 border-secondary flex items-center justify-center">
                    <span className="font-archivo font-bold text-secondary text-xs">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2 min-h-[2rem]" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-archivo font-bold text-lg tracking-display text-primary mb-1 text-balance">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-muted leading-relaxed text-pretty">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
