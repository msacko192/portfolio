import { useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { services } from '../data/services'
import { textReveal, textLine, fadeUp, stagger, cardItem, hoverLift } from '../lib/motion'
import Breadcrumb from '../components/Breadcrumb'

function FAQItem({ q, a }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={hoverLift}
      className="border border-border rounded-2xl p-6 bg-white cursor-default"
    >
      <h3 className="font-archivo font-bold text-base tracking-display text-primary mb-2 leading-snug text-balance">
        {q}
      </h3>
      <p className="font-inter text-sm text-muted leading-relaxed text-pretty">{a}</p>
    </motion.div>
  )
}

export default function ServicePage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/+/, '').split('/')[0]
  const service = services.find((s) => s.slug === slug)

  const hubRef = useRef(null)
  const hubInView = useInView(hubRef, { once: true, margin: '-80px 0px' })
  const problemsRef = useRef(null)
  const problemsInView = useInView(problemsRef, { once: true, margin: '-80px 0px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-80px 0px' })
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: '-80px 0px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px 0px' })

  if (!service) return null

  const isHub = slug === 'applications-metier'

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: service.hero.eyebrow },
            ]}
          />
          <motion.div
            variants={textReveal()}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={textLine} className="label text-secondary mb-4">{service.hero.eyebrow}</motion.p>
            <motion.h1 variants={textLine} className="font-archivo font-bold text-4xl md:text-5xl tracking-display text-white mb-5 leading-tight text-balance max-w-3xl">
              {service.hero.title}
            </motion.h1>
            <motion.p variants={textLine} className="font-inter text-white/60 leading-relaxed text-pretty max-w-[58ch] text-lg mb-8">
              {service.hero.subtitle}
            </motion.p>
            <motion.div variants={textLine}>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
              >
                {service.hero.cta}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hub page: services list */}
      {isHub && service.services && (
        <section className="bg-white py-20 md:py-28">
          <div ref={hubRef} className="mx-auto max-w-6xl px-6">
            <motion.div
              variants={textLine}
              initial="hidden"
              animate={hubInView ? 'show' : 'hidden'}
              className="mb-12"
            >
              <h2 className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-4 text-balance">
                {service.intro.title}
              </h2>
              <p className="font-inter text-muted leading-relaxed text-pretty max-w-[62ch]">
                {service.intro.body}
              </p>
            </motion.div>
            <motion.div
              variants={stagger()}
              initial="hidden"
              animate={hubInView ? 'show' : 'hidden'}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {service.services.map((item) => (
                <motion.div key={item.slug} variants={cardItem} whileHover={hoverLift}>
                  <Link
                    to={`/${item.slug}`}
                    className="flex flex-col h-full bg-white border border-border rounded-2xl p-6 shadow-card hover:border-secondary/40 transition-colors duration-200 group"
                  >
                    <span className="text-2xl mb-3" aria-hidden="true">{item.icon}</span>
                    <h3 className="font-archivo font-bold text-lg tracking-display text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-muted leading-relaxed text-pretty flex-1">
                      {item.body}
                    </p>
                    <span className="font-inter text-xs text-secondary mt-4 flex items-center gap-1">
                      En savoir plus →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Non-hub: Problems */}
      {!isHub && service.problems && (
        <section className="bg-section py-20 md:py-28">
          <div ref={problemsRef} className="mx-auto max-w-6xl px-6">
            <motion.h2
              variants={textLine}
              initial="hidden"
              animate={problemsInView ? 'show' : 'hidden'}
              className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance"
            >
              {service.problems.title}
            </motion.h2>
            <motion.div
              variants={stagger()}
              initial="hidden"
              animate={problemsInView ? 'show' : 'hidden'}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {service.problems.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardItem}
                  whileHover={hoverLift}
                  className="bg-white border border-border rounded-2xl p-6 shadow-card cursor-default"
                >
                  <h3 className="font-archivo font-bold text-base tracking-display text-primary mb-2 leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-muted leading-relaxed text-pretty">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Non-hub: Features/Solution */}
      {!isHub && service.features && (
        <section className="bg-white py-20 md:py-28">
          <div ref={featuresRef} className="mx-auto max-w-6xl px-6">
            <motion.h2
              variants={textLine}
              initial="hidden"
              animate={featuresInView ? 'show' : 'hidden'}
              className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance"
            >
              {service.features.title}
            </motion.h2>
            <motion.div
              variants={stagger()}
              initial="hidden"
              animate={featuresInView ? 'show' : 'hidden'}
              className="grid sm:grid-cols-2 gap-8"
            >
              {service.features.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardItem}
                  className="flex gap-5"
                >
                  <div className="w-1.5 rounded-full bg-secondary/20 shrink-0 mt-1" style={{ height: 'auto', minHeight: '24px' }} />
                  <div>
                    <h3 className="font-archivo font-bold text-lg tracking-display text-primary mb-2 leading-snug text-balance">
                      {item.title}
                    </h3>
                    <p className="font-inter text-muted leading-relaxed text-pretty">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && (
        <section className="bg-section py-20 md:py-28">
          <div ref={faqRef} className="mx-auto max-w-4xl px-6">
            <motion.h2
              variants={textLine}
              initial="hidden"
              animate={faqInView ? 'show' : 'hidden'}
              className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance"
            >
              Questions fréquentes
            </motion.h2>
            <motion.div
              variants={stagger()}
              initial="hidden"
              animate={faqInView ? 'show' : 'hidden'}
              className="flex flex-col gap-4"
            >
              {service.faq.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-20">
        <div ref={ctaRef} className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'show' : 'hidden'}
            className="text-center"
          >
            <h2 className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-white mb-4 text-balance">
              Un projet dans votre entreprise ?
            </h2>
            <p className="font-inter text-white/60 leading-relaxed max-w-[52ch] mx-auto mb-8">
              Décrivez votre besoin en quelques lignes. Nous revenons vers vous dans les 48 heures avec un premier avis honnête.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-secondary text-white font-inter font-medium text-sm px-8 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
              >
                Discuter de votre projet
              </a>
              <Link
                to="/applications-metier"
                className="border border-white/25 text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-white/10 transition-all duration-200"
              >
                Voir toutes nos expertises
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
