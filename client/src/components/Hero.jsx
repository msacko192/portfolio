import { motion } from 'framer-motion'
import { content } from '../data/content'
import DashboardMockup from './DashboardMockup'

const ease = [0.22, 1, 0.36, 1]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease, delay },
  }
}

export default function Hero() {
  const { hero } = content

  return (
    <section className="bg-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Colonne texte ── */}
          <div className="max-w-xl">

            {/* Badge */}
            <motion.div {...fadeUp(0.15)} className="inline-flex items-center gap-2 bg-secondary/8 border border-secondary/15 text-secondary text-xs font-inter font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              {hero.badge}
            </motion.div>

            {/* Titre principal */}
            <h1
              className="font-archivo font-black text-primary leading-[1.04] tracking-display mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
            >
              <motion.span {...fadeUp(0.25)} className="block">
                Votre entreprise
              </motion.span>
              <motion.span {...fadeUp(0.33)} className="block">
                est unique.
              </motion.span>
              <motion.span {...fadeUp(0.41)} className="block text-secondary">
                Votre logiciel
              </motion.span>
              <motion.span {...fadeUp(0.49)} className="block text-secondary">
                devrait l'être aussi.
              </motion.span>
            </h1>

            {/* Lede */}
            <motion.p
              {...fadeUp(0.6)}
              className="font-inter text-muted leading-[1.75] mb-10 max-w-[42ch]"
              style={{ fontSize: '1.0625rem' }}
            >
              {hero.lede}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.72)} className="flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary text-white font-inter font-medium text-sm px-6 py-3 rounded-xl hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200"
              >
                {hero.cta1}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5h8M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
              <motion.a
                href="#realisations"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-primary border border-border font-inter font-medium text-sm px-6 py-3 rounded-xl hover:bg-section hover:scale-[1.02] transition-all duration-200"
              >
                {hero.cta2}
              </motion.a>
            </motion.div>

          </div>

          {/* ── Colonne visuelle — DashboardMockup ── */}
          <div className="hidden md:block">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
