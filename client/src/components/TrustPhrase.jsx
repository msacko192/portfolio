import { motion } from 'framer-motion'
import { f } from '../lib/motion'

const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="M12 15l-2 5L9 9l11 4-5 2z" />
        <path d="M9 9L3 6l9-3 3 9-6-3z" opacity="0" />
        <circle cx="12" cy="8" r="3" />
        <path d="M5 3l1.5 1.5M3 12H1M5 21l1.5-1.5M12 22v-2M19 21l-1.5-1.5M21 12h2M19 3l-1.5 1.5" opacity="0" />
      </svg>
    ),
    stat: '20+',
    label: 'Projets livrés',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    stat: '100%',
    label: 'Sur mesure',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    stat: null,
    label: 'Vous restez propriétaire du code',
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
