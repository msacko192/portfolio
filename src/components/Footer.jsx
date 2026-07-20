import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BRAND, content } from '../data/content'
import { fadeUp } from '../lib/motion'
import { services } from '../data/services'
import { locations } from '../data/locations'

const SERVICE_LINKS = services
  .filter((s) => s.slug !== 'applications-metier')
  .map((s) => ({ label: s.hero.eyebrow, href: `/${s.slug}` }))

const BLOG_LINKS = [
  { label: 'Tous les articles', href: '/blog' },
  { label: 'Outils & productivité', href: '/blog/pourquoi-excel-ralentit-les-pme' },
  { label: 'BTP & chantier', href: '/blog/comment-digitaliser-entreprise-btp' },
  { label: 'Budget & investissement', href: '/blog/combien-coute-application-metier' },
  { label: 'Stratégie & choix', href: '/blog/erp-ou-logiciel-sur-mesure' },
]

const LOCATION_LINKS = locations.map((l) => ({
  label: `Développeur à ${l.city}`,
  href: `/developpeur-applications-metier-${l.slug}`,
}))

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="font-inter text-xs font-medium text-white/40 uppercase tracking-widest mb-4">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="font-inter text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-primary">
      {/* Link sitemap */}
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
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
              className="font-archivo font-bold text-xl tracking-display text-white hover:text-white/80 transition-colors duration-200 block mb-3"
            >
              {BRAND}
            </Link>
            <p className="font-inter text-sm text-white/50 leading-relaxed text-pretty max-w-[30ch]">
              {content.footer.tagline}
            </p>
            <a
              href="/#contact"
              className="inline-flex mt-5 bg-secondary text-white font-inter font-medium text-xs px-4 py-2 rounded-xl hover:bg-secondary/90 transition-colors duration-200"
            >
              Discuter d'un projet →
            </a>
          </div>

          <FooterCol title="Services" links={SERVICE_LINKS} />
          <FooterCol title="Blog" links={BLOG_LINKS} />
          <FooterCol title="Par ville" links={LOCATION_LINKS} />
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/30">{content.footer.legal}</p>
          <Link
            to="/applications-metier"
            className="font-inter text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            Toutes les expertises
          </Link>
        </div>
      </div>
    </footer>
  )
}
