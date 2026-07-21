import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { stagger, cardItem, hoverLift } from '../lib/motion'

const ease = [0.22, 1, 0.36, 1]

const ICONS = [
  'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21',
  'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
]

export default function Problems() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px 0px' })

  return (
    <section className="bg-section py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div ref={headRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="label text-secondary mb-4"
          >
            Le problème
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-archivo font-black text-primary tracking-display text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            {content.problems.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="font-inter text-muted mt-4 leading-relaxed"
          >
            {content.problems.subtitle}
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          ref={gridRef}
          variants={stagger(0.06)}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {content.problems.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              whileHover={hoverLift}
              className="bg-white border border-border rounded-2xl p-6 shadow-card cursor-default hover:border-secondary/20 hover:shadow-card-md transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                     strokeLinecap="round" strokeLinejoin="round"
                     className="w-5 h-5 text-red-400">
                  <path d={ICONS[i]} />
                </svg>
              </div>

              {/* Title + body */}
              <h3 className="font-archivo font-bold text-base tracking-tight text-primary mb-2 text-balance leading-snug">
                {card.title}
              </h3>
              <p className="font-inter text-muted text-sm leading-relaxed text-pretty mb-4">
                {card.body}
              </p>

              {/* Separator */}
              <div className="h-px bg-border mb-4" />

              {/* Solution */}
              {card.solution && (
                <div>
                  <span className="font-inter text-xs font-semibold text-secondary">→ La solution :</span>
                  <p className="font-inter text-sm font-medium text-primary mt-1.5 leading-snug text-balance">
                    {card.solution}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
