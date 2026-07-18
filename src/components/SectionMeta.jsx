import { motion } from 'framer-motion'
import { ease } from '../lib/motion'

export function SectionDivider() {
  return (
    <motion.div
      className="h-px bg-rule"
      style={{ originX: 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
    />
  )
}

export function SectionNumber({ index, label }) {
  const n = String(index).padStart(2, '0')
  return (
    <div className="flex items-center gap-2.5 mb-8" aria-hidden="true">
      <span className="label text-graphite/50">{n}</span>
      <span className="label text-graphite/30">—</span>
      <span className="label text-graphite/50">{label}</span>
    </div>
  )
}
