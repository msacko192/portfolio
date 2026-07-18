import { motion } from 'framer-motion'
import { content } from '../data/content'
import { SectionDivider, SectionNumber } from './SectionMeta'
import { ease, t } from '../lib/motion'

function PlanCard({ plan, index }) {
  const delay = index * 0.1

  if (plan.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={t(delay)}
        className="bg-encre text-craie rounded-lg p-8 flex flex-col"
      >
        <div className="mb-6">
          {plan.tag && (
            <p className="label text-pin mb-3">{plan.tag}</p>
          )}
          <h3 className="font-archivo font-bold text-2xl tracking-display text-craie mb-4 text-balance">
            {plan.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-pin shrink-0" aria-hidden="true" />
            <span className="label text-pin">{plan.marker}</span>
          </div>
        </div>
        <p className="font-inter text-sm leading-relaxed text-craie/75 flex-1 text-pretty">{plan.body}</p>
        <a
          href="#contact"
          className="mt-8 inline-block text-center bg-pin text-craie font-inter font-medium text-sm px-6 py-3 rounded hover:bg-pin/80 transition-colors"
        >
          {plan.cta}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={t(delay)}
      className="bg-craie border border-rule rounded-lg p-8 flex flex-col"
    >
      <div className="mb-6">
        {plan.tag && (
          <p className="label text-graphite mb-3">{plan.tag}</p>
        )}
        <h3 className="font-archivo font-bold text-2xl tracking-display text-encre mb-4 text-balance">
          {plan.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-3 h-px bg-encre/30 shrink-0" aria-hidden="true" />
          <span className="label text-graphite">{plan.marker}</span>
        </div>
      </div>
      <p className="font-inter text-sm leading-relaxed text-graphite flex-1 text-pretty">{plan.body}</p>
      <a
        href="#contact"
        className="mt-8 inline-block text-center border border-encre/20 text-encre font-inter font-medium text-sm px-6 py-3 rounded hover:border-encre hover:bg-encre hover:text-craie transition-colors"
      >
        {plan.cta}
      </a>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section className="bg-pierre pb-20 md:pb-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <SectionNumber index={3} label="Les offres" />
        <h2 className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-12 text-balance">
          {content.pricing.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {content.pricing.plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
