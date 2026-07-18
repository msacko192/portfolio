import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'

const C = {
  encre:    '#14181A',
  graphite: '#6E7377',
  pin:      '#0E5C4A',
}

function pa(delay, duration, targetOpacity, reduce) {
  if (reduce) return {
    initial: { pathLength: 1, opacity: targetOpacity },
    animate: { pathLength: 1, opacity: targetOpacity },
  }
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: targetOpacity },
    transition: { delay, duration, ease: 'easeInOut' },
  }
}

export default function HeroSVG() {
  const reduce = useReducedMotion() ?? false
  const frameAnim = reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.3, duration: 0.4 } }
  const ruleAnim = (d) => reduce
    ? { initial: { pathLength: 1, opacity: 0.5 }, animate: { pathLength: 1, opacity: 0.5 } }
    : { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 0.5 }, transition: { delay: d, duration: 0.35 } }

  return (
    <svg viewBox="0 0 600 420" width="100%" height="auto" fill="none" aria-hidden="true">
      {/* ── Icons (always visible) ── */}
      <g stroke={C.graphite} strokeWidth="1" fill="none" opacity="0.85">
        {/* Sheet — center (80, 90) */}
        <rect x="67" y="79" width="26" height="22" rx="1" />
        <line x1="67" y1="88" x2="93" y2="88" />
        <line x1="67" y1="97" x2="93" y2="97" />
        <line x1="79" y1="79" x2="79" y2="101" />
        <line x1="88" y1="79" x2="88" y2="101" />
        {/* Mail — center (55, 210) */}
        <rect x="42" y="200" width="26" height="20" rx="1" />
        <polyline points="42,200 55,212 68,200" />
        {/* Folder — center (145, 340) */}
        <rect x="131" y="330" width="28" height="22" rx="1" />
        <path d="M131 330 L131 325 Q131 323 133 323 L142 323 L145 327 L159 327 L159 330" />
        {/* Notebook — center (215, 115) */}
        <rect x="204" y="102" width="22" height="26" rx="1" />
        <line x1="209" y1="112" x2="221" y2="112" />
        <line x1="209" y1="118" x2="221" y2="118" />
        <line x1="209" y1="124" x2="221" y2="124" />
        <rect x="199" y="102" width="6" height="26" rx="1" />
        {/* Chat — center (185, 263) */}
        <rect x="173" y="252" width="24" height="18" rx="3" />
        <path d="M178 270 L175 277 L186 270" />
      </g>

      {/* ── Disorder lines (left chaos) ── */}
      <motion.line x1="80" y1="90" x2="215" y2="115"
        stroke={C.encre} strokeWidth="0.75" {...pa(0.1, 0.45, 0.4, reduce)} />
      <motion.line x1="55" y1="210" x2="185" y2="263"
        stroke={C.encre} strokeWidth="0.75" {...pa(0.15, 0.45, 0.4, reduce)} />
      <motion.path d="M145 340 C 100 298 65 255 55 210"
        stroke={C.encre} strokeWidth="0.75" {...pa(0.2, 0.5, 0.4, reduce)} />
      <motion.line x1="215" y1="115" x2="185" y2="263"
        stroke={C.encre} strokeWidth="0.75" {...pa(0.25, 0.4, 0.4, reduce)} />
      <motion.path d="M80 90 C 110 145 150 200 185 263"
        stroke={C.encre} strokeWidth="0.75" {...pa(0.3, 0.45, 0.4, reduce)} />

      {/* ── Convergence lines (stronger, toward single point) ── */}
      <motion.path d="M80 90 C 165 90 245 210 295 210"
        stroke={C.encre} strokeWidth="1" {...pa(0.65, 0.6, 1, reduce)} />
      <motion.line x1="55" y1="210" x2="295" y2="210"
        stroke={C.encre} strokeWidth="1" {...pa(0.72, 0.5, 1, reduce)} />
      <motion.path d="M145 340 C 145 290 235 235 295 210"
        stroke={C.encre} strokeWidth="1" {...pa(0.68, 0.6, 1, reduce)} />
      <motion.path d="M215 115 C 265 115 290 165 295 210"
        stroke={C.encre} strokeWidth="1" {...pa(0.78, 0.5, 1, reduce)} />
      <motion.path d="M185 263 C 240 263 283 235 295 210"
        stroke={C.encre} strokeWidth="1" {...pa(0.82, 0.45, 1, reduce)} />

      {/* ── Bridge to frame ── */}
      <motion.line x1="295" y1="210" x2="335" y2="210"
        stroke={C.pin} strokeWidth="1.5" {...pa(1.2, 0.18, 1, reduce)} />

      {/* ── Application frame ── */}
      <motion.g {...frameAnim}>
        {/* Frame border */}
        <rect x="335" y="110" width="215" height="195" rx="6"
          stroke={C.pin} strokeWidth="1.5" />
        {/* Header line */}
        <line x1="335" y1="141" x2="550" y2="141"
          stroke={C.pin} strokeWidth="1" opacity="0.6" />
        {/* Three dots (mac-style) in header */}
        <circle cx="352" cy="125" r="2.5" fill={C.pin} opacity="0.7" />
        <circle cx="362" cy="125" r="2.5" fill={C.pin} opacity="0.45" />
        <circle cx="372" cy="125" r="2.5" fill={C.pin} opacity="0.25" />
        {/* Content rule 1 */}
        <motion.line x1="355" y1="183" x2="520" y2="183"
          stroke={C.pin} strokeWidth="1" {...ruleAnim(1.55)} />
        {/* Content rule 2 */}
        <motion.line x1="355" y1="222" x2="495" y2="222"
          stroke={C.pin} strokeWidth="1" {...ruleAnim(1.65)} />
      </motion.g>
    </svg>
  )
}
