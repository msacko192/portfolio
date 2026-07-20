import { useState, useEffect, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { content, BRAND } from '../data/content'

const SERVICE_NAV = [
  { slug: 'erp-sur-mesure',          icon: '⚙️', title: 'ERP sur mesure',       desc: 'Gestion intégrée sur mesure' },
  { slug: 'crm-sur-mesure',          icon: '📊', title: 'CRM sur mesure',        desc: 'Pipeline commercial adapté' },
  { slug: 'portail-client',          icon: '🔗', title: 'Portail client',        desc: 'Espace client en ligne' },
  { slug: 'automatisation-processus',icon: '⚡', title: 'Automatisation',        desc: 'Tâches manuelles éliminées' },
  { slug: 'gestion-chantier',        icon: '🏗️', title: 'Gestion de chantier',  desc: 'Planning et suivi terrain' },
  { slug: 'gestion-intervention',    icon: '🔧', title: 'Gestion interventions', desc: 'Planification et rapports' },
]

function ChevronDown({ open }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HamburgerIcon({ open }) {
  return (
    <span className="flex flex-col justify-center items-center w-5 h-5 gap-[5px]" aria-hidden="true">
      <span className={`block h-px w-5 bg-current transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
      <span className={`block h-px w-5 bg-current transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
      <span className={`block h-px w-5 bg-current transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
    </span>
  )
}

function ServicesDropdown({ isLight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-white border border-border rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden"
    >
      {/* Grid 2 colonnes */}
      <div className="grid grid-cols-2 gap-px bg-border">
        {SERVICE_NAV.map((item) => (
          <Link
            key={item.slug}
            to={`/${item.slug}`}
            className="flex items-start gap-3 p-4 bg-white hover:bg-section transition-colors duration-150 group"
          >
            <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
            <div className="min-w-0">
              <p className="font-inter font-semibold text-sm text-primary group-hover:text-secondary transition-colors duration-150 leading-tight">
                {item.title}
              </p>
              <p className="font-inter text-xs text-muted leading-snug mt-0.5">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* Footer */}
      <div className="px-5 py-3 bg-section border-t border-border flex items-center justify-between">
        <span className="font-inter text-xs text-muted">Studio · Applications métier sur mesure</span>
        <Link
          to="/applications-metier"
          className="font-inter text-xs font-medium text-secondary hover:underline flex items-center gap-1"
        >
          Toutes nos expertises
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]               = useState(false)
  const [menuOpen, setMenuOpen]               = useState(false)
  const [servicesOpen, setServicesOpen]       = useState(false)
  const [mobileServOpen, setMobileServOpen]   = useState(false)
  const { pathname }                          = useLocation()
  const isHome                                = pathname === '/'
  const dropdownRef                           = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermer dropdown desktop au clic extérieur
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isLight = scrolled || menuOpen
  const realisationsHref = isHome ? '#realisations' : '/#realisations'
  const contactHref      = isHome ? '#contact'      : '/#contact'

  const navTextCls = isLight
    ? 'text-muted hover:text-primary'
    : 'text-white/70 hover:text-white'

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isLight
            ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className={`mx-auto max-w-6xl px-6 flex items-center gap-8 transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>

          {/* ── Logo ── */}
          <Link
            to="/"
            className={`font-archivo font-bold text-xl tracking-display transition-colors duration-200 shrink-0 ${
              isLight ? 'text-primary hover:text-secondary' : 'text-white hover:text-white/80'
            }`}
          >
            {BRAND}<span className="text-secondary">.</span>
          </Link>

          {/* ── Nav desktop ── */}
          <nav className="hidden md:flex items-center gap-1 flex-1">

            {/* Services avec dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`inline-flex items-center gap-1.5 font-inter text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-150 ${navTextCls}`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown open={servicesOpen} />
              </button>
              <AnimatePresence>
                {servicesOpen && <ServicesDropdown isLight={isLight} />}
              </AnimatePresence>
            </div>

            <a
              href={realisationsHref}
              className={`font-inter text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-150 ${navTextCls}`}
            >
              Réalisations
            </a>

            <Link
              to="/blog"
              className={`font-inter text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-150 ${navTextCls}`}
            >
              Blog
            </Link>
          </nav>

          {/* ── Actions desktop ── */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            {/* Badge disponibilité */}
            <span className={`hidden lg:flex items-center gap-1.5 font-inter text-xs transition-colors duration-300 ${
              isLight ? 'text-muted' : 'text-white/45'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0" />
              Disponible
            </span>

            <motion.a
              href={contactHref}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200 shrink-0"
            >
              {content.nav.cta}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>

          {/* ── Hamburger mobile ── */}
          <button
            className={`md:hidden p-2 -mr-2 ml-auto transition-colors duration-200 ${
              isLight ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </motion.header>

      {/* ── Drawer mobile ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-primary flex flex-col transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-16 shrink-0" />
        <nav className="flex-1 flex flex-col px-6 pt-6 pb-12 gap-0.5 overflow-y-auto">

          {/* Services mobile */}
          <div>
            <button
              className="w-full flex items-center justify-between font-archivo font-bold text-2xl tracking-display text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors duration-150"
              onClick={() => setMobileServOpen((v) => !v)}
              aria-expanded={mobileServOpen}
            >
              Services
              <ChevronDown open={mobileServOpen} />
            </button>
            {mobileServOpen && (
              <div className="flex flex-col gap-0 pl-4 mb-2">
                {SERVICE_NAV.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/${item.slug}`}
                    className="flex items-center gap-3 py-2.5 border-b border-white/5 text-white/60 hover:text-white transition-colors duration-150"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="font-inter text-base font-medium">{item.title}</span>
                  </Link>
                ))}
                <Link
                  to="/applications-metier"
                  className="font-inter text-sm text-secondary py-3"
                >
                  Toutes nos expertises →
                </Link>
              </div>
            )}
          </div>

          <a
            href={realisationsHref}
            onClick={() => setMenuOpen(false)}
            className="font-archivo font-bold text-2xl tracking-display text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors duration-150"
          >
            Réalisations
          </a>

          <Link
            to="/blog"
            className="font-archivo font-bold text-2xl tracking-display text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors duration-150"
          >
            Blog
          </Link>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={contactHref}
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-6 py-3.5 rounded-2xl hover:bg-secondary/90 transition-colors duration-200"
            >
              {content.nav.cta}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="flex items-center justify-center gap-1.5 text-white/35 text-xs font-inter">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Studio disponible pour nouveaux projets
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
