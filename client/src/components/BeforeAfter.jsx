import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
}

export default function BeforeAfter() {
  const { beforeAfter } = content

  const beforeRef = useRef(null)
  const beforeInView = useInView(beforeRef, { once: true, margin: '-80px 0px' })
  const afterRef = useRef(null)
  const afterInView = useInView(afterRef, { once: true, margin: '-80px 0px' })

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance">
          {beforeAfter.title}
        </h2>

        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-0">

          {/* Colonne AVANT */}
          <div ref={beforeRef} className="bg-[#EAE8E3] rounded-2xl md:rounded-r-none md:rounded-l-2xl p-8 md:p-10">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-[#6E7377] mb-6">
              Avant
            </p>
            <ul className="flex flex-col gap-4">
              {beforeAfter.before.map((item, i) => (
                <motion.li
                  key={i}
                  variants={ITEM_VARIANTS}
                  initial="hidden"
                  animate={beforeInView ? 'show' : 'hidden'}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[5px] shrink-0 w-3 h-px bg-[#6E7377] inline-block"/>
                  <span className="font-inter text-sm text-[#6E7377] leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Séparateur pin (visible md+) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-full bg-[#0E5C4A] opacity-30"/>
          </div>

          {/* Colonne APRÈS */}
          <div ref={afterRef} className="bg-white border border-[#DCDAD4] rounded-2xl md:rounded-l-none md:rounded-r-2xl p-8 md:p-10 mt-3 md:mt-0">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-[#0E5C4A] mb-6">
              Après
            </p>
            <ul className="flex flex-col gap-4">
              {beforeAfter.after.map((item, i) => (
                <motion.li
                  key={i}
                  variants={ITEM_VARIANTS}
                  initial="hidden"
                  animate={afterInView ? 'show' : 'hidden'}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#0E5C4A] inline-block"/>
                  <span className="font-inter text-sm text-primary leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
