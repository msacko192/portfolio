import { motion } from 'framer-motion'
import { proofBeforeContact } from '../data/content'
import { SectionDivider } from './SectionMeta'
import { ease } from '../lib/motion'

export default function ProofBeforeContact() {
  const { mode, facts, testimonial } = proofBeforeContact

  const showTestimonial =
    mode === 'testimonial' &&
    testimonial.enabled === true &&
    testimonial.author?.trim()

  // Guard-rail: never render an anonymous testimonial — fall back to facts
  const showFacts = !showTestimonial

  return (
    <section className="bg-encre" aria-labelledby="proof-heading">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-12 md:pb-16">
        <p id="proof-heading" className="label text-craie/40 mb-8">
          Ce que ça représente concrètement
        </p>

        {showFacts && (
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-5 max-w-2xl"
          >
            {facts.map((fact, i) => (
              <motion.li
                key={i}
                variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                transition={{ delay: i * 0.08, duration: 0.4, ease }}
                className="font-inter text-base text-craie/80 leading-relaxed pl-5 border-l-2 border-pin text-pretty"
              >
                {fact}
              </motion.li>
            ))}
          </motion.ul>
        )}

        {showTestimonial && (
          <figure>
            <blockquote>
              <p className="font-archivo font-bold text-xl md:text-2xl text-craie leading-snug text-balance mb-6">
                « {testimonial.quote} »
              </p>
            </blockquote>
            <figcaption className="font-inter text-sm text-craie/50">
              {testimonial.author}
              {testimonial.role ? ` — ${testimonial.role}` : ''}
              {testimonial.company ? `, ${testimonial.company}` : ''}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  )
}
