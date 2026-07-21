import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { ease } from '../lib/motion'
import { ProjectMockup } from './ProjectMockups'


function CaseStudyRow({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  const reversed = index % 2 !== 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease }}
      className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-14 ${
        index > 0 ? 'border-t border-border' : ''
      } ${reversed ? 'md:[direction:rtl]' : ''}`}
    >
      {/* Mockup */}
      <div className={`rounded-2xl overflow-hidden border border-border shadow-card-md bg-white min-h-[320px] ${reversed ? '[direction:ltr]' : ''}`}>
        <ProjectMockup slug={item.slug} />
      </div>

      {/* Texte */}
      <div className={reversed ? '[direction:ltr]' : ''}>
        <p className="label text-secondary mb-3">{item.sector}</p>
        <h3 className="font-archivo font-black text-primary tracking-display leading-[1.08] text-balance mb-4"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)' }}>
          {item.title}
        </h3>
        <p className="font-inter text-muted leading-relaxed text-pretty mb-5 max-w-[52ch]">
          {item.result}
        </p>

        {/* Fonctionnalites */}
        {item.fonctionnalites && (
          <ul className="flex flex-col gap-1.5 mb-5">
            {item.fonctionnalites.slice(0, 3).map((feat, i) => (
              <li key={i} className="flex items-start gap-2 font-inter text-sm text-muted">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {feat}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        {item.technologies && (
          <div className="flex flex-wrap gap-2 mb-5">
            {item.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="bg-section border border-border rounded-full px-2.5 py-0.5 font-inter text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
          <Link
            to={`/projets/${item.slug}`}
            className="inline-flex items-center gap-2 bg-primary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-secondary hover:scale-[1.02] transition-all duration-200"
          >
            Voir le projet
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span className="font-inter text-xs text-muted">{item.period}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })

  return (
    <section id="realisations" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div ref={headRef} className="mb-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="label text-secondary mb-4"
          >
            Réalisations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-archivo font-black text-primary tracking-display text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            {content.projects.title}
          </motion.h2>
        </div>

        {/* Case studies */}
        <div>
          {content.projects.items.map((item, i) => (
            <CaseStudyRow key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
