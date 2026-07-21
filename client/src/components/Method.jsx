import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function Method() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px 0px' })

  const { steps } = content.method

  return (
    <section id="methode" className="bg-section py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div ref={headRef} className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="label text-secondary mb-4"
          >
            Notre méthode
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-archivo font-black text-primary tracking-display text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            {content.method.title}
          </motion.h2>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="overflow-x-auto pb-4 -mx-6 px-6"
        >
          <div className="flex min-w-[900px] md:min-w-0 gap-0 relative">

            {/* Ligne de fond (gris) */}
            <div className="absolute h-px bg-border" style={{ top: '20px', left: '20px', right: '20px' }} />

            {/* Ligne animée (bleue) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={timelineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute h-px bg-secondary origin-left"
              style={{ top: '20px', left: '20px', right: '20px' }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.08 }}
                className="flex-1 flex flex-col items-center text-center px-3 relative"
              >
                {/* Dot */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10 ${
                    i === 0
                      ? 'bg-secondary border-2 border-secondary'
                      : 'bg-white border-2 border-border'
                  }`}
                >
                  <span
                    className={`font-archivo font-black text-xs leading-none ${
                      i === 0 ? 'text-white' : 'text-muted'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="font-archivo font-black text-primary text-sm tracking-display mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="font-inter text-xs text-muted leading-relaxed text-pretty max-w-[120px]">
                  {step.body}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={timelineInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 1.2 }}
          className="font-inter text-xs text-muted mt-10 text-center"
        >
          De la première discussion jusqu'au déploiement, vous savez toujours où vous en êtes.
        </motion.p>

      </div>
    </section>
  )
}
