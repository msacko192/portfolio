import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { stagger, cardItem, hoverLift } from '../lib/motion'

const SERVICES = [
  {
    slug: 'erp-sur-mesure',
    icon: '⚙️',
    title: 'ERP sur mesure',
    body: "Un système de gestion intégré calqué sur vos processus réels : achats, stocks, production, facturation.",
    featured: true,
  },
  {
    slug: 'crm-sur-mesure',
    icon: '📊',
    title: 'CRM sur mesure',
    body: "Un CRM épuré, calqué sur votre cycle de vente réel, sans les fonctionnalités inutiles des grandes plateformes.",
    featured: false,
  },
  {
    slug: 'portail-client',
    icon: '🔗',
    title: 'Portail client',
    body: "Un espace en ligne où vos clients suivent leurs commandes et accèdent à leurs documents sans vous appeler.",
    featured: false,
  },
  {
    slug: 'automatisation-processus',
    icon: '⚡',
    title: 'Automatisation',
    body: "Éliminez les tâches manuelles répétitives : relances, transferts de données, alertes, rapports automatiques.",
    featured: false,
  },
  {
    slug: 'gestion-chantier',
    icon: '🏗️',
    title: 'Gestion de chantier',
    body: "Planning, rapports terrain, suivi des travaux — tout centralisé, accessible depuis le bureau ou le chantier.",
    featured: false,
  },
  {
    slug: 'gestion-intervention',
    icon: '🔧',
    title: 'Gestion interventions',
    body: "Planification, fiches d'intervention numérique, signature client et rapport auto-généré.",
    featured: false,
  },
]

export default function Solution() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px 0px' })

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div ref={headRef} className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="label text-secondary mb-4"
          >
            Nos solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-archivo font-black text-primary tracking-display text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Un logiciel pensé autour de votre entreprise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-inter text-muted mt-4 leading-relaxed text-pretty max-w-[62ch]"
          >
            Chaque entreprise possède ses propres méthodes de travail. Nous concevons des applications adaptées à vos processus, pas l'inverse.
          </motion.p>
        </div>

        {/* Service cards */}
        <motion.div
          ref={gridRef}
          variants={stagger(0.07)}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardItem}
              whileHover={hoverLift}
              className="h-full"
            >
              <Link
                to={`/${service.slug}`}
                className={`group flex flex-col h-full rounded-2xl p-6 border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                  service.featured
                    ? 'bg-primary border-primary text-white hover:bg-primary/95'
                    : 'bg-white border-border hover:border-secondary/30 hover:shadow-card-md'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl">{service.icon}</span>
                  <svg
                    viewBox="0 0 16 16" fill="none"
                    className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                      service.featured ? 'text-white' : 'text-secondary'
                    }`}
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className={`font-archivo font-bold text-lg tracking-tight mb-2 leading-snug text-balance ${
                  service.featured ? 'text-white' : 'text-primary group-hover:text-secondary transition-colors duration-200'
                }`}>
                  {service.title}
                </h3>
                <p className={`font-inter text-sm leading-relaxed text-pretty flex-1 ${
                  service.featured ? 'text-white/70' : 'text-muted'
                }`}>
                  {service.body}
                </p>
                <p className={`font-inter text-xs font-medium mt-5 ${
                  service.featured ? 'text-white/60' : 'text-secondary'
                }`}>
                  En savoir plus →
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA centré */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <Link
            to="/applications-metier"
            className="inline-flex items-center gap-2 font-inter font-medium text-sm text-muted hover:text-primary border border-border rounded-xl px-5 py-2.5 hover:border-primary/30 transition-all duration-200"
          >
            Toutes nos solutions
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
