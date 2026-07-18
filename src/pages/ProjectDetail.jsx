import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { content } from '../data/content'
import { ease } from '../lib/motion'
import { SectionDivider } from '../components/SectionMeta'

const LABEL_STYLES = {
  mission: 'border-rule text-graphite',
  product: 'border-pin/40 text-pin',
}

const TOTAL = content.projects.items.length

function ImageFrame() {
  return (
    <div
      className="w-full bg-pierre aspect-[16/7] rounded-lg"
      aria-hidden="true"
    />
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const item = content.projects.items.find((p) => p.slug === slug)

  if (!item) return <Navigate to="/404" replace />

  const position = String(item.id).padStart(2, '0')
  const total = String(TOTAL).padStart(2, '0')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: item.title,
    description: item.problem,
    creator: {
      '@type': 'Person',
      name: 'DJEXA',
    },
  }

  return (
    <main className="bg-craie">
      <SectionDivider />

      <div className="mx-auto max-w-4xl px-6 pt-20 pb-28 md:pt-28 md:pb-36">

        {/* Fil éditorial */}
        <div className="flex items-center gap-2.5 mb-10" aria-hidden="true">
          <span className="label text-graphite/50">Réalisation {position} / {total}</span>
        </div>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className={`label border rounded px-2 py-0.5 ${LABEL_STYLES[item.labelType]}`}>
              {item.label}
            </span>
            {item.status === 'in_development' && (
              <span className="label text-graphite border border-dashed border-graphite/50 rounded px-2 py-0.5">
                En développement
              </span>
            )}
          </div>

          <p className="label text-graphite mb-2">{item.sector}</p>
          <h1 className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-3 leading-snug text-balance">
            {item.title}
          </h1>
          <p className="label text-graphite/40">{item.period}</p>
        </motion.div>

        {/* Visuel */}
        <motion.div
          className="my-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <ImageFrame />
        </motion.div>

        {/* Corps */}
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
        >
          {/* Le problème */}
          <section aria-labelledby="section-problem">
            <p id="section-problem" className="label text-graphite/50 mb-3">Le problème</p>
            <p className="font-inter text-encre/90 leading-relaxed text-pretty text-lg">
              {item.problem}
            </p>
          </section>

          <div className="h-px bg-rule" />

          {/* Ce qui a été livré */}
          <section aria-labelledby="section-delivered">
            <p id="section-delivered" className="label text-graphite/50 mb-3">Ce qui a été livré</p>
            <p className="font-inter text-encre/80 leading-relaxed text-pretty text-lg">
              {item.delivered}
            </p>
            {item.status === 'in_development' && (
              <p className="font-inter text-sm italic text-graphite leading-relaxed mt-4">
                Je dirige moi-même une entreprise du bâtiment. Je construis l'outil dont j'ai besoin — c'est la meilleure façon de le comprendre.
              </p>
            )}
          </section>

          {/* Résultat */}
          {item.result && (
            <>
              <div className="h-px bg-rule" />
              <section aria-labelledby="section-result">
                <p id="section-result" className="label text-graphite/50 mb-3">Le résultat</p>
                <p className="font-inter font-medium text-pin leading-relaxed text-lg">
                  {item.result}
                </p>
              </section>
            </>
          )}

          {/* Note callout (facturation électronique) */}
          {item.note && (
            <div className="bg-pin/8 border-l-2 border-pin pl-4 py-3">
              <p className="font-inter text-sm text-encre leading-relaxed text-pretty">{item.note}</p>
            </div>
          )}

          {/* Stack */}
          <section aria-labelledby="section-stack">
            <p id="section-stack" className="label text-graphite/50 mb-3">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="font-inter text-xs text-graphite border border-rule rounded px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* CTA de fin */}
          <div className="pt-4 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="/#contact"
              className="bg-pin text-craie font-inter font-medium text-sm px-6 py-3 rounded hover:bg-encre transition-colors"
            >
              Un projet similaire ? En discuter
            </a>
            <Link
              to="/"
              className="font-inter text-sm text-graphite hover:text-pin transition-colors"
            >
              ← Toutes les réalisations
            </Link>
          </div>
        </motion.div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
