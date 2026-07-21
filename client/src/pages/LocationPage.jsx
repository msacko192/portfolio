import { useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { locations } from '../data/locations'
import { textReveal, textLine, vFadeUp, stagger, cardItem, hoverLift } from '../lib/motion'
import Breadcrumb from '../components/Breadcrumb'

const SERVICES = [
  { title: 'ERP sur mesure', href: '/erp-sur-mesure', body: 'Système de gestion intégré calqué sur vos processus réels.' },
  { title: 'CRM sur mesure', href: '/crm-sur-mesure', body: 'Pipeline commercial adapté à votre cycle de vente.' },
  { title: 'Portail client', href: '/portail-client', body: 'Espace en ligne où vos clients suivent leurs dossiers.' },
  { title: 'Gestion de chantier', href: '/gestion-chantier', body: 'Planning, rapports terrain et suivi des travaux centralisés.' },
  { title: 'Gestion des interventions', href: '/gestion-intervention', body: 'Planification, fiche numérique et signature client.' },
  { title: 'Automatisation', href: '/automatisation-processus', body: 'Éliminez les tâches manuelles répétitives.' },
]

const FAQ = [
  {
    q: 'Travaillez-vous uniquement à distance ou en présentiel aussi ?',
    a: "Nous travaillons principalement à distance pour pouvoir servir des clients partout en France. Des déplacements sont possibles si le projet le justifie — réunion de cadrage, atelier utilisateurs, formation.",
  },
  {
    q: 'Quelle est votre disponibilité habituelle ?',
    a: "Nous prenons généralement deux à trois projets simultanément. Si nous ne sommes pas disponibles immédiatement, nous vous le disons clairement et pouvons indiquer un délai de démarrage réaliste.",
  },
  {
    q: 'Comment se passe le premier échange ?',
    a: "Un appel ou visioconférence de 30 minutes pour comprendre votre besoin, vos contraintes et votre activité. Sans engagement. À l'issue, vous savez si votre projet est faisable et dans quelle fourchette.",
  },
]

export default function LocationPage() {
  const { pathname } = useLocation()
  const citySlug = pathname.replace('/developpeur-applications-metier-', '')
  const location = locations.find((l) => l.slug === citySlug)

  const contextRef = useRef(null)
  const contextInView = useInView(contextRef, { once: true, margin: '-80px 0px' })
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px 0px' })
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: '-80px 0px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px 0px' })

  if (!location) return null

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: `DJEXA ${location.city}` },
            ]}
          />
          <motion.div
            variants={textReveal()}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={textLine} className="label text-secondary mb-4">{location.region}</motion.p>
            <motion.h1 variants={textLine} className="font-archivo font-bold text-4xl md:text-5xl tracking-display text-white mb-5 leading-tight text-balance max-w-3xl">
              Développeur applications métier sur mesure à {location.city}
            </motion.h1>
            <motion.p variants={textLine} className="font-inter text-white/60 leading-relaxed text-pretty max-w-[58ch] text-lg mb-8">
              Nous créons des logiciels sur mesure pour les entreprises de {location.region} — ERP, CRM, portail client, gestion de chantier et d'intervention. À distance ou en déplacement selon vos besoins.
            </motion.p>
            <motion.div variants={textLine}>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
              >
                Discuter de votre projet
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Context */}
      <section className="bg-section py-16">
        <div ref={contextRef} className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={vFadeUp}
            initial="hidden"
            animate={contextInView ? 'show' : 'hidden'}
            className="bg-white border border-border rounded-2xl p-8"
          >
            <p className="font-inter text-text leading-relaxed text-pretty text-lg">{location.context}</p>
            <p className="font-inter text-muted leading-relaxed text-pretty mt-4">
              Qu'il s'agisse de remplacer des fichiers Excel devenus ingérables, d'automatiser des processus qui mobilisent vos équipes sur des tâches à faible valeur, ou de donner à vos clients une visibilité en temps réel — nous développons l'outil adapté à votre situation spécifique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 md:py-28">
        <div ref={servicesRef} className="mx-auto max-w-6xl px-6">
          <motion.h2
            variants={textLine}
            initial="hidden"
            animate={servicesInView ? 'show' : 'hidden'}
            className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance"
          >
            Ce que nous développons pour les entreprises de {location.region}
          </motion.h2>
          <motion.div
            variants={stagger()}
            initial="hidden"
            animate={servicesInView ? 'show' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {SERVICES.map((item) => (
              <motion.div key={item.href} variants={cardItem} whileHover={hoverLift}>
                <Link
                  to={item.href}
                  className="flex flex-col h-full bg-white border border-border rounded-2xl p-6 shadow-card hover:border-secondary/40 transition-colors duration-200 group"
                >
                  <h3 className="font-archivo font-bold text-lg tracking-display text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-muted leading-relaxed text-pretty flex-1">{item.body}</p>
                  <span className="font-inter text-xs text-secondary mt-4">En savoir plus →</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section py-20">
        <div ref={faqRef} className="mx-auto max-w-4xl px-6">
          <motion.h2
            variants={textLine}
            initial="hidden"
            animate={faqInView ? 'show' : 'hidden'}
            className="font-archivo font-bold text-3xl tracking-display text-primary mb-10 text-balance"
          >
            Questions pratiques
          </motion.h2>
          <motion.div
            variants={stagger()}
            initial="hidden"
            animate={faqInView ? 'show' : 'hidden'}
            className="flex flex-col gap-4"
          >
            {FAQ.map((item, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={hoverLift}
                className="bg-white border border-border rounded-2xl p-6 cursor-default"
              >
                <h3 className="font-archivo font-bold text-base tracking-display text-primary mb-2">{item.q}</h3>
                <p className="font-inter text-sm text-muted leading-relaxed text-pretty">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div ref={ctaRef} className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            variants={vFadeUp}
            initial="hidden"
            animate={ctaInView ? 'show' : 'hidden'}
          >
            <h2 className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-white mb-4 text-balance">
              Parlons de votre projet à {location.city}
            </h2>
            <p className="font-inter text-white/60 leading-relaxed max-w-[50ch] mx-auto mb-8">
              Premier échange de 30 minutes pour comprendre votre besoin. Gratuit, sans engagement.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center bg-secondary text-white font-inter font-medium text-sm px-8 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Prendre contact
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
