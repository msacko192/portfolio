import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { content } from '../data/content'
import { textReveal, textLine, stagger, fadeUp } from '../lib/motion'
import { FadeIn } from '../animations/components'
import { ProjectSchema } from '../components/ProjectSchemas'

const TOTAL = content.projects.items.length

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

        {/* Fil éditorial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-2.5 mb-10"
          aria-hidden="true"
        >
          <span className="label text-muted/60">Réalisation {position} / {total}</span>
        </motion.div>

        {/* En-tête */}
        <motion.div
          variants={textReveal()}
          initial="hidden"
          animate="show"
          className="mb-10"
        >
          <motion.p variants={textLine} className="label text-muted mb-2">{item.sector}</motion.p>
          <motion.h1
            variants={textLine}
            className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-3 leading-snug text-balance"
          >
            {item.title}
          </motion.h1>
          <motion.p variants={textLine} className="label text-muted/50">{item.period}</motion.p>
        </motion.div>

        {/* Schéma SVG */}
        <motion.div
          className="my-10 border border-border rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <ProjectSchema slug={item.slug} />
        </motion.div>

        {/* Corps — chaque section apparaît en séquence au scroll */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-12"
        >
          {/* Le problème */}
          <motion.section variants={fadeUp} aria-labelledby="section-problem">
            <p id="section-problem" className="label text-muted/60 mb-3">Le problème</p>
            <p className="font-inter text-text leading-relaxed text-pretty text-lg">
              {item.problem}
            </p>
          </motion.section>

          <motion.div variants={fadeUp} className="h-px bg-rule" />

          {/* Ce qui a été mis en place */}
          <motion.section variants={fadeUp} aria-labelledby="section-delivered">
            <p id="section-delivered" className="label text-muted/60 mb-3">Ce qui a été mis en place</p>
            <p className="font-inter text-text/80 leading-relaxed text-pretty text-lg">
              {item.delivered}
            </p>
          </motion.section>

          {/* Résultat */}
          {item.result && (
            <>
              <motion.div variants={fadeUp} className="h-px bg-rule" />
              <motion.section variants={fadeUp} aria-labelledby="section-result">
                <p id="section-result" className="label text-muted/60 mb-3">Le résultat</p>
                <p className="font-inter font-medium text-secondary leading-relaxed text-lg">
                  {item.result}
                </p>
              </motion.section>
            </>
          )}

          {/* Note contexte */}
          {item.note && (
            <motion.div
              variants={fadeUp}
              className="bg-secondary/8 border-l-2 border-secondary pl-4 py-3 rounded-r-lg"
            >
              <p className="font-inter text-sm text-text leading-relaxed text-pretty">{item.note}</p>
            </motion.div>
          )}

          {/* CTA de fin */}
          <motion.div
            variants={fadeUp}
            className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <motion.a
              href="/#contact"
              whileTap={{ scale: 0.97 }}
              className="bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Un projet similaire ? En discuter
            </motion.a>
            <Link
              to="/"
              className="font-inter text-sm text-muted hover:text-secondary transition-colors duration-200"
            >
              ← Toutes les réalisations
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
