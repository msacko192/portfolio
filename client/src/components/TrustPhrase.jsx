import { motion } from 'framer-motion'
import { f } from '../lib/motion'

const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    stat: '20+',
    label: 'Projets livrés',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    stat: '4–10',
    label: 'Semaines de livraison',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    stat: '100%',
    label: 'Sur mesure',
  },
]

export default function TrustPhrase() {
  return (
    <section className="bg-section border-y border-border py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border w-full">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              {...f(0.1 + i * 0.1)}
              className="flex items-center gap-3 px-8 py-4 sm:py-0 w-full sm:w-auto justify-center"
            >
              <span className="text-secondary shrink-0">{item.icon}</span>
              {item.stat && (
                <span className="font-archivo font-black text-secondary text-lg leading-none">{item.stat}</span>
              )}
              <span className="font-inter text-sm text-muted">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
