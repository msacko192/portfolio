import { motion } from 'framer-motion'
import { ease } from '../../lib/motion'

export default function ProgressBar({ step, total }) {
  const pct = Math.round((step / total) * 100)

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        <span className="font-inter text-xs text-muted">
          Étape <strong className="text-primary font-semibold">{step}</strong>
          <span className="text-border"> / {total}</span>
        </span>
        <span className="font-inter text-xs font-medium text-secondary tabular">{pct} %</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-secondary rounded-full"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease }}
        />
      </div>
    </div>
  )
}
