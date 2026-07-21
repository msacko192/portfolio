import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

export default function CTAFinal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section className="bg-primary relative overflow-hidden py-28 md:py-36">

      {/* Effets de fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 110%, rgba(37,99,235,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Grid de lignes subtiles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v1H0zM0 0v40h1V0' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="label text-secondary mb-6"
        >
          Votre prochain logiciel
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-archivo font-black text-white tracking-display leading-[1.06] text-balance mb-6"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
        >
          Parlons de votre futur logiciel.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          className="font-inter text-white/60 leading-relaxed text-balance max-w-[52ch] mx-auto mb-10"
          style={{ fontSize: '1.0625rem' }}
        >
          Expliquez-nous comment vous travaillez. Nous imaginons l'application qui fera gagner du temps à vos équipes chaque jour.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="/#contact"
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-secondary text-white font-inter font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-secondary/90 transition-all duration-200"
          >
            Prendre rendez-vous
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2.5 6.5h8M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <Link
            to="/#realisations"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-inter font-medium text-sm px-7 py-3.5 rounded-xl hover:bg-white/8 transition-all duration-200"
          >
            Découvrir nos réalisations
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.5 }}
          className="font-inter text-xs text-white/30 mt-6"
        >
          Échange sans engagement — réponse sous 24h
        </motion.p>

      </div>
    </section>
  )
}
