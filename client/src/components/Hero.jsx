import { motion } from 'framer-motion'
import { content } from '../data/content'
import { f } from '../lib/motion'
import DashboardMockup from './DashboardMockup'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { hero } = content

  return (
    <section className="relative bg-white overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16 md:pt-28 md:pb-20">

      {/* ── Effets de fond ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Gradient radial centré sur le mockup (côté droit) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 75% 65% at 78% 52%, rgba(37,99,235,0.065) 0%, transparent 70%)',
          }}
        />

        {/* Grid de lignes ultra-fines */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v1H0zM0 0v40h1V0' fill='%23E5E7EB'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Colonne texte ── */}
          <div className="max-w-xl">

            {/* Badge */}
            <motion.div
              {...f(0.1)}
              className="inline-flex items-center gap-2 bg-secondary/8 border border-secondary/15 text-secondary text-xs font-inter font-medium px-4 py-1.5 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              {hero.badge}
            </motion.div>

            {/* Titre */}
            <h1
              className="font-archivo font-black leading-[1.05] tracking-display mb-7"
              style={{ fontSize: 'clamp(2.5rem, 5vw + 0.5rem, 4.25rem)' }}
            >
              <motion.span {...f(0.22)} className="block text-primary">
                Votre entreprise est unique.
              </motion.span>
              <motion.span {...f(0.34)} className="block text-secondary">
                Votre logiciel devrait l&apos;être aussi.
              </motion.span>
            </h1>

            {/* Lede */}
            <motion.p
              {...f(0.48)}
              className="font-inter text-muted leading-[1.8] mb-10 max-w-[44ch]"
              style={{ fontSize: '1.0625rem' }}
            >
              {hero.lede}
            </motion.p>

            {/* CTAs */}
            <motion.div {...f(0.60)} className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary text-white font-inter font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-secondary transition-all duration-200"
              >
                {hero.cta1}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5h8M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
              <motion.a
                href="#realisations"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-primary border border-border font-inter font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-section hover:border-secondary/30 transition-all duration-200"
              >
                {hero.cta2}
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...f(0.72)}
              className="flex items-center gap-6 pt-6 border-t border-border"
            >
              <div>
                <p className="font-archivo font-black text-primary text-2xl leading-none tabular">20+</p>
                <p className="font-inter text-xs text-muted mt-1">Projets livrés</p>
              </div>
              <div className="w-px h-10 bg-border shrink-0" />
              <div>
                <p className="font-archivo font-black text-primary text-2xl leading-none tabular">4–10</p>
                <p className="font-inter text-xs text-muted mt-1">Semaines de livraison</p>
              </div>
              <div className="w-px h-10 bg-border shrink-0" />
              <div>
                <p className="font-archivo font-black text-primary text-2xl leading-none">100%</p>
                <p className="font-inter text-xs text-muted mt-1">Code propriétaire</p>
              </div>
            </motion.div>

          </div>

          {/* ── Colonne visuelle ── */}
          <div className="hidden md:flex items-center justify-center">

            {/* Conteneur du mockup avec effets */}
            <div className="relative w-full">

              {/* Halo lumineux derrière */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{
                  background: 'radial-gradient(ellipse 85% 70% at 50% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)',
                  filter: 'blur(32px)',
                  transform: 'scale(1.15)',
                }}
              />

              {/* Mockup incliné */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.5 }}
                className="rounded-2xl overflow-hidden border border-border"
                style={{
                  transform: 'rotate(1deg) translateY(-4px)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10)',
                }}
              >
                <DashboardMockup />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
