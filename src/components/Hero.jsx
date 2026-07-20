import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { siWhatsapp, siGooglecalendar } from 'simple-icons'
import './hero.css'
import { content } from '../data/content'

const F = 'Inter, system-ui, sans-serif'

/* ── Icônes dans les nœuds (nested SVG, viewBox 0 0 24 24) ── */
function nodeIcon(type, cx, cy) {
  const s = 34
  const h = s / 2
  const pos = { x: cx - h, y: cy - h, width: s, height: s, viewBox: '0 0 24 24' }

  /* Vraie icône WhatsApp */
  if (type === 'whatsapp') return (
    <svg {...pos}>
      <path fill={`#${siWhatsapp.hex}`} d={siWhatsapp.path} />
    </svg>
  )

  /* Microsoft Outlook — bleu officiel */
  if (type === 'outlook') return (
    <svg {...pos}>
      <rect width="24" height="24" rx="4" fill="#0078D4" />
      <rect x="9" y="2" width="10" height="20" rx="1" fill="white" opacity="0.15" />
      <text x="5" y="18" fontSize="13" fontWeight="900" fill="white" fontFamily={F}>O</text>
    </svg>
  )

  /* Vraie icône Google Calendar */
  if (type === 'calendar') return (
    <svg {...pos}>
      <path fill={`#${siGooglecalendar.hex}`} d={siGooglecalendar.path} />
    </svg>
  )

  /* Microsoft Excel — vert foncé officiel + X blanc */
  if (type === 'excel') return (
    <svg {...pos}>
      <rect width="24" height="24" rx="4" fill="#217346" />
      {/* Feuille claire derrière */}
      <path d="M10 2h8a1 1 0 011 1v4H9V3a1 1 0 011-1z" fill="white" opacity="0.18" />
      <rect x="9" y="6" width="10" height="16" rx="1" fill="white" opacity="0.12" />
      {/* X blanc centré à gauche */}
      <line x1="4"  y1="9"  x2="10" y2="17" stroke="white" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="10" y1="9"  x2="4"  y2="17" stroke="white" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  )

  /* Microsoft Word — bleu officiel + W blanc */
  if (type === 'word') return (
    <svg {...pos}>
      <rect width="24" height="24" rx="4" fill="#2B579A" />
      {/* Feuille claire derrière */}
      <rect x="9" y="2" width="10" height="20" rx="1" fill="white" opacity="0.15" />
      {/* W blanc centré à gauche */}
      <text x="6" y="18" fontSize="14" fontWeight="900" fill="white" fontFamily={F}>W</text>
    </svg>
  )

  /* PDF — rouge Adobe + texte PDF */
  if (type === 'pdf') return (
    <svg {...pos}>
      <rect width="24" height="24" rx="4" fill="#E8192C" />
      {/* Silhouette document */}
      <path d="M6 2h8l4 4v16H6z" fill="white" opacity="0.15" />
      <path d="M14 2v4h4" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
      <text x="12" y="16.5" fontSize="8.5" fontWeight="800" fill="white" textAnchor="middle" fontFamily={F} letterSpacing="-0.2">PDF</text>
    </svg>
  )

  return null
}

export default function Hero() {
  const { hero } = content

  useEffect(() => {
    const els = document.querySelectorAll(
      '.hero-eyebrow, .hero-title .hero-line, .hero-lede, .hero-cta-block, .node-item, .node-hub'
    )
    const onEnd = (e) => { e.currentTarget.style.willChange = 'auto' }
    els.forEach(el => el.addEventListener('animationend', onEnd, { once: true }))
    return () => els.forEach(el => el.removeEventListener('animationend', onEnd))
  }, [])

  const C = { x: 200, y: 172 }

  const NODES = [
    { cx: 58,  cy: 72,  icon: 'excel',    label: 'Excel',      lx: 30,  ly: 74,  anchor: 'end',   nd: '0.4s' },
    { cx: 58,  cy: 172, icon: 'outlook',  label: 'Outlook',    lx: 30,  ly: 174, anchor: 'end',   nd: '0.6s' },
    { cx: 58,  cy: 272, icon: 'whatsapp', label: 'WhatsApp',   lx: 30,  ly: 274, anchor: 'end',   nd: '0.8s' },
    { cx: 342, cy: 72,  icon: 'calendar', label: 'G. Calendar',lx: 370, ly: 74,  anchor: 'start', nd: '0.5s' },
    { cx: 342, cy: 172, icon: 'pdf',      label: 'PDF',        lx: 370, ly: 174, anchor: 'start', nd: '0.7s' },
    { cx: 342, cy: 272, icon: 'word',     label: 'Word',       lx: 370, ly: 274, anchor: 'start', nd: '0.9s' },
  ]

  return (
    <section className="min-h-screen bg-primary flex items-center pt-16">
      <div className="mx-auto max-w-6xl px-6 py-20 w-full grid md:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-20 items-center">

        {/* ── Colonne texte ── */}
        <div>
          <p className="hero-eyebrow label text-white/50 mb-7">{hero.eyebrow}</p>

          <h1
            className="hero-title font-archivo font-extrabold leading-[1.02] tracking-[-0.035em] text-white text-balance"
            style={{ fontSize: 'clamp(2.6rem, 5.6vw, 4.5rem)' }}
          >
            {hero.titleLines.map((line, i) => (
              <span key={i} className={`hero-line${i === hero.titleLines.length - 1 ? ' text-secondary' : ''}`}>
                {line}
              </span>
            ))}
          </h1>

          <p className="hero-lede font-inter leading-[1.7] text-white/60 mt-7 max-w-[30rem] text-pretty" style={{ fontSize: '1.075rem' }}>
            {hero.lede}
          </p>

          <div className="hero-cta-block flex flex-wrap gap-3 mt-9">
            <motion.a href="#contact" whileTap={{ scale: 0.97 }} className="font-inter font-medium text-sm px-6 py-3 rounded-2xl bg-secondary text-white hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200">
              {hero.cta1}
            </motion.a>
            <motion.a href="#realisations" whileTap={{ scale: 0.97 }} className="font-inter font-medium text-sm px-6 py-3 rounded-2xl border border-white/25 text-white hover:bg-white/10 transition-all duration-200">
              {hero.cta2}
            </motion.a>
          </div>
        </div>

        {/* ── Colonne visuelle — graphe de convergence ── */}
        <div className="hidden md:block" style={{ aspectRatio: '1 / .86', width: '100%' }}>
          <svg
            viewBox="0 0 400 344"
            role="img"
            aria-labelledby="hero-vt hero-vd"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            <title id="hero-vt">Vos outils remplacés par une seule application sur mesure</title>
            <desc id="hero-vd">Excel, Outlook, WhatsApp, Google Calendar, PDF et Word convergent vers une application centralisée.</desc>

            <defs>
              <clipPath id="hubClip">
                <circle cx={C.x} cy={C.y} r="43" />
              </clipPath>
              <linearGradient id="hubGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1A7A5F" />
                <stop offset="100%" stopColor="#093B2C" />
              </linearGradient>
            </defs>

            {/* Flux animés vers le hub */}
            {NODES.map((n, i) => (
              <line
                key={`f${i}`}
                x1={n.cx} y1={n.cy} x2={C.x} y2={C.y}
                stroke="#0E5C4A" strokeWidth="1.6" strokeLinecap="round"
                strokeDasharray="5 18"
                className="node-flow"
                style={{ '--nd': n.nd }}
              />
            ))}

            {/* Anneau de pulse */}
            <circle cx={C.x} cy={C.y} r="58" fill="#0E5C4A" className="node-hub-ring" />

            {/* Nœuds sources */}
            {NODES.map((n, i) => (
              <g key={`n${i}`} className="node-item" style={{ '--nd': n.nd }}>
                <circle cx={n.cx} cy={n.cy} r="25" fill="white" stroke="#E8E6E0" strokeWidth="1" />
                {nodeIcon(n.icon, n.cx, n.cy)}
                <text x={n.lx} y={n.ly} fontSize="7" fill="#DCDAD4" fontFamily={F} textAnchor={n.anchor}>{n.label}</text>
              </g>
            ))}

            {/* Hub central — mini dashboard app */}
            <g className="node-hub">
              {/* Fond dégradé */}
              <circle cx={C.x} cy={C.y} r="46" fill="url(#hubGrad)" />

              <g clipPath="url(#hubClip)">
                {/* Fenêtre app (cadre) */}
                <rect x="172" y="138" width="56" height="66" rx="5"
                      fill="white" fillOpacity="0.06"
                      stroke="white" strokeOpacity="0.16" strokeWidth="0.7" />

                {/* Barre de titre */}
                <rect x="172" y="138" width="56" height="11" rx="5" fill="white" fillOpacity="0.14" />
                <rect x="172" y="143" width="56" height="6" fill="white" fillOpacity="0.14" />

                {/* Boutons fenêtre */}
                <circle cx="178"   cy="144" r="1.8" fill="white" fillOpacity="0.40" />
                <circle cx="183.5" cy="144" r="1.8" fill="white" fillOpacity="0.40" />
                <circle cx="189"   cy="144" r="1.8" fill="white" fillOpacity="0.40" />

                {/* Titre fenêtre */}
                <text x="207" y="146.5" fontSize="4" fill="white" fillOpacity="0.52"
                      fontFamily={F} fontWeight="600" textAnchor="middle" letterSpacing="0.3">Tableau de bord</text>

                {/* Séparateur sidebar */}
                <line x1="185" y1="149" x2="185" y2="204" stroke="white" strokeOpacity="0.08" strokeWidth="0.5" />

                {/* Sidebar nav (5 items) */}
                {[153, 161, 169, 177, 185].map((y, i) => (
                  <rect key={i} x="175" y={y} width="7" height="5.5" rx="1.5"
                        fill="white" fillOpacity={i === 0 ? 0.55 : 0.15} />
                ))}

                {/* KPI tiles */}
                <rect x="188" y="152" width="17" height="12" rx="2.5" fill="white" fillOpacity="0.10" />
                <text x="196.5" y="158.5" fontSize="6" fontWeight="700" fill="white" fillOpacity="0.90"
                      fontFamily={F} textAnchor="middle">84</text>
                <text x="196.5" y="162.5" fontSize="2.8" fill="white" fillOpacity="0.40"
                      fontFamily={F} textAnchor="middle">clients</text>

                <rect x="208" y="152" width="17" height="12" rx="2.5" fill="white" fillOpacity="0.10" />
                <text x="216.5" y="158.5" fontSize="6" fontWeight="700" fill="white" fillOpacity="0.90"
                      fontFamily={F} textAnchor="middle">98%</text>
                <text x="216.5" y="162.5" fontSize="2.8" fill="white" fillOpacity="0.40"
                      fontFamily={F} textAnchor="middle">livrés</text>

                {/* Séparateur contenu */}
                <line x1="188" y1="168" x2="227" y2="168" stroke="white" strokeOpacity="0.10" strokeWidth="0.5" />

                {/* Lignes de données */}
                {[
                  { y: 172, bar: 20, val: '124' },
                  { y: 180, bar: 15, val: '98'  },
                  { y: 188, bar: 9,  val: '3'   },
                ].map((row, i) => (
                  <g key={i}>
                    <circle cx="191" cy={row.y} r="1.8" fill="white" fillOpacity="0.22" />
                    <rect x="195" y={row.y - 1.8} width={row.bar} height="3.5" rx="1"
                          fill="white" fillOpacity="0.18" />
                    <text x="227" y={row.y + 1.5} fontSize="3.8" fill="white" fillOpacity="0.65"
                          fontFamily={F} textAnchor="end">{row.val}</text>
                  </g>
                ))}

                {/* Sparkline */}
                <polyline
                  points="188,201 193,198 199,199 205,195 211,193 217,191 223,188 228,186"
                  fill="none" stroke="white" strokeOpacity="0.38" strokeWidth="1.2"
                  strokeLinecap="round" strokeLinejoin="round"
                />
                <path
                  d="M188,201 193,198 199,199 205,195 211,193 217,191 223,188 228,186 L228,204 L188,204 Z"
                  fill="white" fillOpacity="0.06"
                />
              </g>
            </g>

          </svg>
        </div>

      </div>
    </section>
  )
}
