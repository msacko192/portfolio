import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { SectionNumber } from './SectionMeta'
import { textReveal, textLine, stagger, cardItem } from '../lib/motion'
import { AnimatedTitle } from '../animations/components'
import { ProjectSchema } from './ProjectSchemas'

function Thumbnail({ item }) {
  return (
    <motion.div variants={cardItem} whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }} className="h-full">
      <Link
        to={`/projets/${item.slug}`}
        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-md hover:border-secondary/30 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        aria-label={item.title}
      >
        <div className="border-b border-border shrink-0">
          <ProjectSchema slug={item.slug} />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-archivo font-bold text-lg tracking-display text-primary leading-snug text-balance mb-3 group-hover:text-secondary transition-colors duration-200">
            {item.title}
          </h3>
          <p className="font-inter text-sm text-muted leading-relaxed flex-1">
            {item.result || item.delivered.slice(0, 100) + '…'}
          </p>
          <p className="font-inter text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-4">
            Voir le projet →
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Projects() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px 0px' })

  return (
    <section id="realisations" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={headRef}
          variants={textReveal()}
          initial="hidden"
          animate={headInView ? 'show' : 'hidden'}
        >
          <motion.div variants={textLine}><SectionNumber index={4} label="Les réalisations" /></motion.div>
        </motion.div>
        <AnimatedTitle
          as="h2"
          className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance mb-12"
          delay={0.05}
        >
          {content.projects.title}
        </AnimatedTitle>
        <motion.div
          ref={gridRef}
          variants={stagger()}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
        >
          {content.projects.items.map((item) => (
            <Thumbnail key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
