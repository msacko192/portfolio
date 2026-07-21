import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { content } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

function Item({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-inter font-medium text-primary group-hover:text-secondary transition-colors duration-200 text-sm md:text-base leading-snug">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease }}
          className="shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-secondary group-hover:text-secondary transition-colors duration-200"
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="font-inter text-sm text-muted leading-relaxed pb-5 max-w-[62ch]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-60px 0px' })

  return (
    <section className="bg-section py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid md:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

          {/* Heading (gauche) */}
          <div ref={headRef} className="md:sticky md:top-28">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="label text-secondary mb-4"
            >
              Questions fréquentes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="font-archivo font-black text-primary tracking-display leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Ce que les dirigeants demandent souvent.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              className="font-inter text-muted leading-relaxed mt-4 text-sm"
            >
              Des réponses directes, sans jargon.
            </motion.p>
          </div>

          {/* Accordéon (droite) */}
          <motion.div
            ref={listRef}
            initial={{ opacity: 0, y: 20 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="bg-white rounded-2xl border border-border px-6 md:px-8"
          >
            {content.faq.map((item, i) => (
              <Item
                key={i}
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
