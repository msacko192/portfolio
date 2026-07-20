import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { stagger, tagItem } from '../lib/motion'

export default function Technologies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section className="bg-section py-14">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="label text-muted mb-5"
        >
          {content.technologies.title}
        </motion.p>
        <motion.div
          variants={stagger(0.02)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-wrap gap-2"
        >
          {content.technologies.items.map((item, i) => (
            <motion.span
              key={i}
              variants={tagItem}
              whileHover={{ scale: 1.06, color: '#2563EB', borderColor: '#2563EB', transition: { duration: 0.15 } }}
              className="font-inter text-sm text-muted border border-border rounded-2xl px-3 py-1.5 bg-white cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
