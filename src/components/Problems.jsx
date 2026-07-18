import { motion } from 'framer-motion'
import { content } from '../data/content'
import { SectionDivider, SectionNumber } from './SectionMeta'
import { ease } from '../lib/motion'

export default function Problems() {
  return (
    <section className="bg-pierre pb-20 md:pb-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <SectionNumber index={1} label="Le problème" />
        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-12 text-balance"
        >
          {content.problems.title}
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.problems.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05, duration: 0.45, ease }}
              className="bg-craie border border-rule rounded-lg p-6"
            >
              <h3 className="font-archivo font-bold text-lg tracking-display text-encre mb-2 text-balance">
                {card.title}
              </h3>
              <p className="font-inter text-graphite text-sm leading-relaxed text-pretty">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
