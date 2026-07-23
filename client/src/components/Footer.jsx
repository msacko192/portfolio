import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { BRAND, content } from '../data/content'
import Logo from './Logo'
import { services } from '../data/services'
import { ease } from '../lib/motion'


const SERVICE_LINKS = services
  .filter((s) => s.slug !== 'applications-metier')
  .slice(0, 6)
  .map((s) => ({ label: s.hero.eyebrow || s.meta.title, href: `/${s.slug}` }))

const PROJECT_LINKS = [
  { label: 'Facturation électronique', href: '/projets/facturation-electronique' },
  { label: 'Suivi de production', href: '/projets/suivi-production' },
  { label: 'ERP administratif', href: '/projets/erp-administratif' },
  { label: 'Gestion cabinet', href: '/projets/gestion-cabinet-comptable' },
  { label: 'Suivi chantier BTP', href: '/projets/suivi-chantier-btp' },
]

const STUDIO_LINKS = [
  { label: 'Notre méthode', href: '/#methode' },
  { label: 'Blog', href: '/blog' },
  { label: 'Toutes nos solutions', href: '/applications-metier' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/politique-de-confidentialite' },
]

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="font-inter text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">{title}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.href.startsWith('http') || link.href.startsWith('/#') ? (
              <a
                href={link.href}
                className="font-inter text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <Link
                to={link.href}
                className="font-inter text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const taglineRef = useRef(null)
  const taglineInView = useInView(taglineRef, { once: true, margin: '-80px 0px' })
  const colsRef = useRef(null)
  const colsInView = useInView(colsRef, { once: true, margin: '-80px 0px' })

  return (
    <footer className="bg-primary">

      {/* Grande phrase en haut */}
      <div className="border-b border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <motion.div
            ref={taglineRef}
            initial={{ opacity: 0, y: 24 }}
            animate={taglineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <p
              className="font-archivo font-black text-white tracking-display text-balance leading-[1.06]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Votre entreprise est unique.<br />
              <span className="text-secondary">Votre logiciel devrait l&apos;être aussi.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors duration-200"
              >
                Parlons de votre projet
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                to="/applications-metier"
                className="inline-flex items-center font-inter font-medium text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                Voir nos solutions →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Colonnes de liens */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <motion.div
          ref={colsRef}
          initial={{ opacity: 0, y: 16 }}
          animate={colsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-white hover:text-white/80 transition-colors duration-200 block mb-3"
              aria-label={BRAND}
            >
              <Logo />
            </Link>
            <p className="font-inter text-sm text-white/45 leading-relaxed text-pretty max-w-[28ch] mb-5">
              Studio de développement logiciel sur mesure.
            </p>
            <a
              href="mailto:contact@djexa.fr"
              className="font-inter text-sm text-white/50 hover:text-white transition-colors duration-200 block mb-5"
            >
              contact@djexa.fr
            </a>
          </div>

          <FooterCol title="Solutions" links={SERVICE_LINKS} />
          <FooterCol title="Réalisations" links={PROJECT_LINKS} />
          <FooterCol title="Studio" links={STUDIO_LINKS} />
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/25">{content.footer.legal}</p>
          <div className="flex items-center gap-5">
            <Link to="/mentions-legales" className="font-inter text-xs text-white/25 hover:text-white/50 transition-colors duration-200">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="font-inter text-xs text-white/25 hover:text-white/50 transition-colors duration-200">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
