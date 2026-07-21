import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { ease, stagger, cardItem } from '../lib/motion'
import { ProjectSchema } from '../components/ProjectSchemas'

const TOTAL = content.projects.items.length

function Section({ label, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
    >
      <p className="label text-muted/60 mb-4">{label}</p>
      {children}
    </motion.section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const item = content.projects.items.find((p) => p.slug === slug)

  if (!item) return <Navigate to="/404" replace />

  const position = String(item.id).padStart(2, '0')
  const total    = String(TOTAL).padStart(2, '0')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: item.title,
    description: item.problem,
    creator: { '@type': 'Person', name: 'DJEXA' },
  }

  return (
    <main className="bg-white">
      <div className="h-px bg-border" />

      <div className="mx-auto max-w-4xl px-6 pt-20 pb-28 md:pt-28 md:pb-36">

        {/* Counter + Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease }}
          className="flex items-center justify-between mb-10"
        >
          <Link
            to="/"
            className="font-inter text-sm text-muted hover:text-secondary transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11 7H3M6 4l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Réalisations
          </Link>
          <span className="label text-muted/40">{position} / {total}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mb-12"
        >
          <p className="label text-secondary mb-3">{item.sector}</p>
          <h1
            className="font-archivo font-black text-primary tracking-display leading-[1.06] text-balance mb-3"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}
          >
            {item.title}
          </h1>
          <p className="label text-muted/50">{item.period}</p>
        </motion.div>

        <div className="flex flex-col gap-12">

          {/* Contexte */}
          {item.context && (
            <Section label="Contexte">
              <p className="font-inter text-primary leading-relaxed text-pretty text-lg">
                {item.context}
              </p>
            </Section>
          )}

          <div className="h-px bg-border" />

          {/* Le problème */}
          <Section label="Le problème">
            <p className="font-inter text-primary leading-relaxed text-pretty text-lg">
              {item.problem}
            </p>
          </Section>

          <div className="h-px bg-border" />

          {/* La solution */}
          <Section label="Ce qui a été mis en place">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px 0px' }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="mb-6 border border-border rounded-2xl overflow-hidden"
            >
              <ProjectSchema slug={item.slug} />
            </motion.div>
            <p className="font-inter text-muted leading-relaxed text-pretty text-lg">
              {item.delivered}
            </p>
          </Section>

          {/* Fonctionnalités */}
          {item.fonctionnalites && item.fonctionnalites.length > 0 && (
            <>
              <div className="h-px bg-border" />
              <Section label="Fonctionnalités clés">
                <div className="grid sm:grid-cols-2 gap-3">
                  {item.fonctionnalites.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-secondary" aria-hidden="true">
                          <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-inter text-primary text-sm leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </>
          )}

          {/* Résultat */}
          {item.result && (
            <>
              <div className="h-px bg-border" />
              <Section label="Le résultat">
                <p
                  className="font-archivo font-black text-secondary tracking-tight leading-[1.12] text-balance"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  {item.result}
                </p>
              </Section>
            </>
          )}

          {/* Note */}
          {item.note && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px 0px' }}
              transition={{ duration: 0.5, ease }}
              className="bg-secondary/6 border-l-2 border-secondary pl-4 py-3 rounded-r-xl"
            >
              <p className="font-inter text-sm text-primary leading-relaxed text-pretty">{item.note}</p>
            </motion.div>
          )}

          {/* Technologies */}
          {item.technologies && (
            <>
              <div className="h-px bg-border" />
              <Section label="Technologies">
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span key={i} className="bg-section border border-border rounded-full px-3 py-1 font-inter text-sm text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </Section>
            </>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px 0px' }}
            transition={{ duration: 0.5, ease }}
            className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <motion.a
              href="/#contact"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Un projet similaire ? Parlons-en
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <Link
              to="/"
              className="font-inter text-sm text-muted hover:text-secondary transition-colors duration-200"
            >
              ← Toutes les réalisations
            </Link>
          </motion.div>

        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
