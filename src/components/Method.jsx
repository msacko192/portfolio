import { motion } from 'framer-motion'
import { content } from '../data/content'
import { SectionDivider, SectionNumber } from './SectionMeta'
import { ease } from '../lib/motion'

export default function Method() {
  return (
    <section className="bg-craie pb-20 md:pb-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <SectionNumber index={6} label="La démarche" />
        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-12 text-balance"
        >
          {content.method.title}
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
          {content.method.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45, ease }}
              className="flex gap-6"
            >
              <span className="font-archivo font-bold text-5xl text-pin leading-none shrink-0 select-none tabular">
                {step.number}
              </span>
              <div>
                <h3 className="font-archivo font-bold text-xl tracking-display text-encre mb-2 leading-snug text-balance">
                  {step.title}
                </h3>
                <p className="font-inter text-graphite leading-relaxed text-pretty max-w-[42ch]">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
