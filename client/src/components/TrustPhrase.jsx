import { motion } from 'framer-motion'
import { f } from '../lib/motion'

const ITEMS = [
  { icon: '20+', label: 'Projets livrés' },
  { icon: '100%', label: 'Sur mesure' },
  { icon: '©', label: 'Vous restez propriétaire du code' },
]

export default function TrustPhrase() {
  return (
    <section className="bg-section border-y border-border py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border w-full">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              {...f(0.1 + i * 0.1)}
              className="flex items-center gap-3 px-8 py-4 sm:py-0 w-full sm:w-auto justify-center"
            >
              <span className="font-archivo font-black text-secondary text-lg leading-none">
                {item.icon}
              </span>
              <span className="font-inter text-sm text-muted">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
