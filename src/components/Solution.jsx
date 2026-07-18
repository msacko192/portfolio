import { motion } from 'framer-motion'
import { content } from '../data/content'
import { SectionDivider, SectionNumber } from './SectionMeta'
import { ease } from '../lib/motion'

export default function Solution() {
  const { steps } = content.solution

  return (
    <section className="bg-craie pb-20 md:pb-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <SectionNumber index={2} label="L'approche" />
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-4 text-balance"
          >
            {content.solution.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.45, ease }}
            className="font-inter text-graphite leading-relaxed text-pretty max-w-[62ch]"
          >
            {content.solution.body}
          </motion.p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-[11px] left-[9px] right-0 h-px bg-rule" />
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45, ease }}
                className="relative pt-8"
              >
                <div className="absolute top-[4px] left-[9px] w-[14px] h-[14px] rounded-full border-2 border-pin bg-craie" />
                <p className="label text-pin mb-2">{step.number}</p>
                <h3 className="font-archivo font-bold text-base tracking-display text-encre mb-2 leading-snug text-balance">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-graphite leading-relaxed text-pretty">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease }}
              className="flex gap-5 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-8 h-8 rounded-full border-2 border-pin flex items-center justify-center">
                  <span className="font-archivo font-bold text-pin text-xs">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-rule mt-2 min-h-[2rem]" />}
              </div>
              <div className="pb-6">
                <h3 className="font-archivo font-bold text-lg tracking-display text-encre mb-1 text-balance">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-graphite leading-relaxed text-pretty">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
