import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Comparison from './Comparison'
import { f } from '../lib/motion'

const ease = [0.22, 1, 0.36, 1]

export default function WhyCustom() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div ref={headRef} className="max-w-2xl mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="label text-secondary mb-4"
          >
            Pourquoi du sur-mesure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-archivo font-black text-primary tracking-display text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Pourquoi ne pas utiliser un logiciel standard ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="font-inter text-muted leading-relaxed mt-4 max-w-[52ch]"
          >
            Parce que votre entreprise ne fonctionne pas comme les autres.
          </motion.p>
        </div>

        {/* Tableau comparatif */}
        <Comparison />

        {/* Note rassurante */}
        <motion.p
          {...f(0.3)}
          className="font-inter text-xs text-muted mt-8 max-w-[56ch]"
        >
          Nous ne dénigrons pas les ERP du marché — certains sont excellents. Nous vous aidons à choisir ce qui est vraiment adapté à votre situation.
        </motion.p>

      </div>
    </section>
  )
}
