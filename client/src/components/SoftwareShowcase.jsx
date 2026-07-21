import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ProjectMockup } from './ProjectMockups'
import DashboardMockup from './DashboardMockup'
import { f } from '../lib/motion'

const ease = [0.22, 1, 0.36, 1]

const TABS = [
  {
    label: 'ERP sur mesure',
    sector: 'Gestion d\'entreprise',
    mockupSlug: 'erp-administratif',
    description: 'Centralisez devis, factures, clients et dépenses dans un seul outil conçu autour de votre façon de travailler.',
    benefits: ['Saisie unique, données partout', 'Tableaux de bord en temps réel', 'Aucun module inutile'],
    href: '/erp-sur-mesure',
  },
  {
    label: 'Portail client',
    sector: 'Relation client',
    mockupSlug: 'gestion-cabinet-comptable',
    description: 'Donnez à vos clients un espace en ligne pour suivre leurs dossiers, accéder à leurs documents et communiquer avec vos équipes.',
    benefits: ['Moins d\'appels entrants', 'Accès aux documents 24h/24', 'Expérience client professionnelle'],
    href: '/portail-client',
  },
  {
    label: 'Automatisation',
    sector: 'Productivité',
    mockupSlug: 'facturation-electronique',
    description: 'Supprimez les ressaisies, les relances manuelles et les transferts d\'information entre outils.',
    benefits: ['Zéro double saisie', 'Relances automatiques', 'Rapports générés automatiquement'],
    href: '/automatisation-processus',
  },
  {
    label: 'Gestion de chantier',
    sector: 'BTP & Construction',
    mockupSlug: 'suivi-chantier-btp',
    description: 'Planification, rapports terrain, suivi des travaux — centralisés, accessibles depuis le bureau ou le chantier.',
    benefits: ['Rapports terrain en temps réel', 'Suivi des avancements', 'Gestion sous-traitants'],
    href: '/gestion-chantier',
  },
  {
    label: 'CRM sur mesure',
    sector: 'Commercial',
    mockupSlug: 'suivi-production',
    description: 'Pipeline commercial adapté à votre cycle de vente réel, sans les fonctionnalités inutiles des grandes plateformes.',
    benefits: ['Pipeline adapté à votre cycle', 'Relances commerciales automatisées', 'Vue 360° de vos clients'],
    href: '/crm-sur-mesure',
  },
  {
    label: 'Gestion des interventions',
    sector: 'Services terrain',
    mockupSlug: null,
    description: 'Planification des techniciens, fiches d\'intervention numériques et rapports auto-générés après chaque visite.',
    benefits: ['Planning optimisé', 'Signature client sur tablette', 'Rapport d\'intervention instantané'],
    href: '/gestion-intervention',
  },
]

function MockupPanel({ slug }) {
  if (!slug) return <DashboardMockup />
  return <ProjectMockup slug={slug} />
}

export default function SoftwareShowcase() {
  const [active, setActive] = useState(0)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })

  const tab = TABS[active]

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div ref={headRef} className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="label text-secondary mb-4"
          >
            Nos logiciels
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-archivo font-black text-primary tracking-display text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Des interfaces conçues pour vos équipes, pas pour des démos.
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="flex gap-1.5 flex-wrap justify-center mb-10"
        >
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`font-inter text-sm px-4 py-2 rounded-xl transition-all duration-200 ${
                active === i
                  ? 'bg-secondary text-white shadow-sm'
                  : 'bg-section text-muted hover:text-primary hover:bg-border/40'
              }`}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease }}
            className="grid md:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center"
          >
            {/* Mockup */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-card-md bg-white min-h-[360px]">
              <MockupPanel slug={tab.mockupSlug} />
            </div>

            {/* Description */}
            <div>
              <span className="label text-secondary mb-3 block">{tab.sector}</span>
              <h3
                className="font-archivo font-black text-primary tracking-display leading-[1.1] text-balance mb-4"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                {tab.label}
              </h3>
              <p className="font-inter text-muted leading-relaxed text-pretty mb-6 max-w-[46ch]">
                {tab.description}
              </p>

              <ul className="flex flex-col gap-2.5 mb-8">
                {tab.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-inter text-sm text-primary">{b}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={tab.href}
                className="inline-flex items-center gap-2 font-inter font-medium text-sm text-secondary hover:text-secondary/80 transition-colors duration-200"
              >
                En savoir plus
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
