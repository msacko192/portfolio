import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { BRAND, content } from '../data/content'
import Logo from './Logo'
import { services } from '../data/services'

const ease = [0.22, 1, 0.36, 1]

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
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/40 hover:text-white transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/40 hover:text-white transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
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
