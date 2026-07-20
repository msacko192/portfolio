import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BRAND, content } from '../data/content'
import { fadeUp } from '../lib/motion'
import { services } from '../data/services'
import { locations } from '../data/locations'

const SERVICE_LINKS = services
  .filter((s) => s.slug !== 'applications-metier')
  .slice(0, 6)
  .map((s) => ({ label: s.hero.eyebrow || s.meta.title, href: `/${s.slug}` }))

const COMPANY_LINKS = [
  { label: 'Notre méthode', href: '/#methode' },
  { label: 'Réalisations', href: '/#realisations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Toutes nos solutions', href: '/applications-metier' },
]

const BLOG_LINKS = [
  { label: 'Outils & productivité', href: '/blog/pourquoi-excel-ralentit-les-pme' },
  { label: 'BTP & chantier', href: '/blog/comment-digitaliser-entreprise-btp' },
  { label: 'Budget & coût', href: '/blog/combien-coute-application-metier' },
  { label: 'ERP ou sur mesure ?', href: '/blog/erp-ou-logiciel-sur-mesure' },
  { label: '5 signes pour changer', href: '/blog/5-signes-creer-propre-logiciel' },
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
  return (
    <footer className="bg-primary">

      {/* Grande phrase en haut */}
      <div className="border-b border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl"
          >
            <p
              className="font-archivo font-black text-white tracking-display text-balance leading-[1.06]"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}
            >
              Votre entreprise est unique.<br />
              <span className="text-secondary">Votre logiciel devrait l'être aussi.</span>
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
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="font-archivo font-bold text-xl tracking-tight text-white hover:text-white/80 transition-colors duration-200 block mb-3"
            >
              {BRAND}<span className="text-secondary">.</span>
            </Link>
            <p className="font-inter text-sm text-white/45 leading-relaxed text-pretty max-w-[30ch]">
              {content.footer.tagline}
            </p>
          </div>

          <FooterCol title="Solutions" links={SERVICE_LINKS} />
          <FooterCol title="Ressources" links={BLOG_LINKS} />
          <FooterCol title="Studio" links={COMPANY_LINKS} />
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/25">{content.footer.legal}</p>
          <p className="font-inter text-xs text-white/25">Studio logiciel sur mesure — Paris, France</p>
        </div>
      </div>
    </footer>
  )
}
