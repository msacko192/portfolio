import { motion } from 'framer-motion'

export default function StepCard({ icon: Icon, title, desc, selected, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={!selected ? { y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={[
        'w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40',
        selected
          ? 'border-secondary bg-secondary shadow-glow'
          : 'border-border bg-white hover:border-secondary/40 hover:shadow-card-md',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <div
            className={[
              'shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200',
              selected ? 'bg-white/20' : 'bg-section',
            ].join(' ')}
          >
            <Icon
              size={20}
              strokeWidth={1.75}
              className={selected ? 'text-white' : 'text-secondary'}
            />
          </div>
        )}
        <div className="min-w-0">
          <p className={['font-inter font-semibold text-sm mb-1 transition-colors', selected ? 'text-white' : 'text-primary'].join(' ')}>
            {title}
          </p>
          <p className={['font-inter text-xs leading-relaxed transition-colors', selected ? 'text-white/75' : 'text-muted'].join(' ')}>
            {desc}
          </p>
        </div>
      </div>
    </motion.button>
  )
}
