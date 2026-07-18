import { motion } from 'framer-motion'
import { content } from '../data/content'
import { SectionDivider, SectionNumber } from './SectionMeta'
import { ease } from '../lib/motion'

export default function Sectors() {
  return (
    <section className="bg-pierre pb-20 md:pb-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <SectionNumber index={5} label="Les secteurs" />
        <div className="max-w-2xl mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-4 text-balance"
          >
            {content.sectors.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.45, ease }}
            className="font-inter text-graphite leading-relaxed text-pretty max-w-[62ch]"
          >
            {content.sectors.subtitle}
          </motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-rule">
          {content.sectors.list.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45, ease }}
              className="border-b border-r border-rule p-6 last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
            >
              <h3 className="font-archivo font-bold text-lg tracking-display text-encre mb-2">
                {sector.name}
              </h3>
              <p className="font-inter text-sm text-graphite leading-relaxed text-pretty">
                {sector.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
