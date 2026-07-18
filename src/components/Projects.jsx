import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { content } from '../data/content'
import { SectionDivider, SectionNumber } from './SectionMeta'
import { ease } from '../lib/motion'

const LABEL_STYLES = {
  mission: 'border-rule text-graphite',
  product: 'border-pin/40 text-pin',
}

function Thumbnail({ item, index }) {
  const isFeatured = item.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: Math.min(index * 0.07, 0.25), duration: 0.45, ease }}
      className={isFeatured ? 'md:col-span-2' : ''}
    >
      <Link
        to={`/projets/${item.slug}`}
        className="group block bg-craie border border-rule rounded-lg overflow-hidden relative focus-visible:ring-2 focus-visible:ring-pin focus-visible:ring-offset-2 cursor-pointer"
        aria-label={item.title}
      >
        {/* Image / cadre pierre */}
        <div
          className={`w-full bg-pierre transition-colors duration-300 group-hover:bg-rule ${
            isFeatured ? 'aspect-[3/1]' : 'aspect-video'
          }`}
          aria-hidden="true"
        />

        {/* Contenu vignette */}
        <div className={`p-5 ${isFeatured ? 'md:p-8' : ''}`}>
          {/* Labels */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`label border rounded px-2 py-0.5 ${LABEL_STYLES[item.labelType]}`}>
              {item.label}
            </span>
            {item.status === 'in_development' && (
              <span className="label text-graphite border border-dashed border-graphite/50 rounded px-2 py-0.5">
                En développement
              </span>
            )}
          </div>

          {/* Titre */}
          <h3
            className={`font-archivo font-bold tracking-display text-encre leading-snug text-balance group-hover:text-pin transition-colors duration-200 ${
              isFeatured ? 'text-xl md:text-2xl mb-3' : 'text-lg mb-3'
            }`}
          >
            {item.title}
          </h3>

          {/* Résultat — une ligne */}
          {item.result && (
            <p className="font-inter text-sm text-graphite leading-relaxed">
              {item.result}
            </p>
          )}

          {/* Affordance */}
          <div className="mt-4 flex items-center gap-1.5">
            <span className="font-inter text-xs text-pin/0 group-hover:text-pin transition-colors duration-200 translate-x-0 group-hover:translate-x-0.5 transition-transform">
              Voir le projet →
            </span>
          </div>
        </div>

        {/* Filet pin bas — se trace de gauche à droite au survol */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-pin scale-x-0 group-hover:scale-x-100 origin-left motion-reduce:transition-none transition-transform duration-300"
          aria-hidden="true"
          style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
        />
      </Link>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="realisations" className="bg-craie pb-20 md:pb-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <SectionNumber index={4} label="Les réalisations" />
        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-12 text-balance"
        >
          {content.projects.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 [grid-auto-flow:dense]">
          {content.projects.items.map((item, i) => (
            <Thumbnail key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
