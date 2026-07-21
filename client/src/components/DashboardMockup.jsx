import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const SIDEBAR_PRIMARY = [
  { id: 'dashboard', label: 'Dashboard',  active: true,  icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'commandes', label: 'Commandes',  active: false, icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { id: 'clients',   label: 'Clients',    active: false, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0' },
  { id: 'produits',  label: 'Produits',   active: false, icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10' },
  { id: 'rapports',  label: 'Rapports',   active: false, icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { id: 'projets',   label: 'Projets',    active: false, icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
  { id: 'equipe',    label: 'Équipe',     active: false, icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
]

const SIDEBAR_SECONDARY = [
  { id: 'documents', label: 'Documents', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
]

const KPI = [
  { value: '84k€', label: 'CA mensuel',  trend: '+18%', up: true },
  { value: '247',  label: 'Commandes',   trend: '+12%', up: true },
  { value: '97%',  label: 'Livraisons',  trend: '+2%',  up: true },
  { value: '4.9',  label: 'Note client', trend: '↑',    up: true },
]

const MONTHS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû']

// Data points: heights as % of 60px chart area
const CHART_POINTS = [
  { x: 0,     y: 37.2 },
  { x: 34.3,  y: 27.0 },
  { x: 68.6,  y: 33.6 },
  { x: 102.9, y: 18.0 },
  { x: 137.1, y: 22.8 },
  { x: 171.4, y: 12.0 },
  { x: 205.7, y: 19.2 },
  { x: 240,   y: 6.0  },
]

const CHART_LINE = 'M 0,37.2 L 34.3,27 L 68.6,33.6 L 102.9,18 L 137.1,22.8 L 171.4,12 L 205.7,19.2 L 240,6'
const CHART_AREA = 'M 0,37.2 L 34.3,27 L 68.6,33.6 L 102.9,18 L 137.1,22.8 L 171.4,12 L 205.7,19.2 L 240,6 L 240,60 L 0,60 Z'

const ROWS = [
  { id: '#1847', client: 'Dupont SA',    amount: '1 240 €', ok: true  },
  { id: '#1846', client: 'Martin & Co.', amount: '890 €',   ok: false },
  { id: '#1845', client: 'Leclerc SA',   amount: '2 100 €', ok: true  },
]

const ACTIVITY = [
  { dot: 'bg-secondary', text: 'Martin a mis à jour #1849', time: '2min' },
  { dot: 'bg-success',   text: 'Nouvel utilisateur : Sophie D.', time: '8min' },
  { dot: 'bg-amber-400', text: 'Rapport mensuel généré', time: '1h' },
]

const CALENDAR = [
  { day: 'Lun 14', event: 'Réunion', color: 'bg-secondary' },
  { day: 'Mar 15', event: 'Audit',   color: 'bg-[#4F46E5]' },
  { day: 'Mer 16', event: null },
  { day: 'Jeu 17', event: 'Demo',    color: 'bg-success' },
  { day: 'Ven 18', event: null },
]

const TEAM = [
  { initial: 'M', bg: 'bg-secondary' },
  { initial: 'S', bg: 'bg-[#4F46E5]' },
  { initial: 'T', bg: 'bg-amber-500' },
  { initial: 'A', bg: 'bg-success' },
]

function NavIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round"
         className="w-3.5 h-3.5 shrink-0">
      <path d={path} />
    </svg>
  )
}

export default function DashboardMockup() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const [showNotif, setShowNotif] = useState(false)
  const [notifLoop, setNotifLoop] = useState(0)

  useEffect(() => {
    if (!inView) return
    const show = setTimeout(() => setShowNotif(true), 2200)
    return () => clearTimeout(show)
  }, [inView])

  useEffect(() => {
    if (!showNotif) return
    const hide  = setTimeout(() => setShowNotif(false), 3200)
    const again = setTimeout(() => { setNotifLoop(n => n + 1); setShowNotif(true) }, 5800)
    return () => { clearTimeout(hide); clearTimeout(again) }
  }, [showNotif, notifLoop])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease }}
      className="w-full rounded-2xl overflow-hidden shadow-card-lg ring-1 ring-black/[0.06] bg-white select-none"
    >
      {/* ── Title bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="bg-gray-50 border-b border-gray-100 px-3 py-2 flex items-center gap-3"
      >
        {/* Traffic lights */}
        <div className="flex gap-[5px] shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Search */}
        <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2.5 py-1 w-36">
          <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 text-gray-400 shrink-0">
            <circle cx="6.5" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.4" />
            <path d="M14 14l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="font-inter leading-none text-gray-400" style={{ fontSize: '10px' }}>Rechercher...</span>
        </div>

        {/* Bell + Avatar */}
        <div className="ml-auto flex items-center gap-2.5">
          <div className="relative">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-gray-500">
              <path d="M10 2a6 6 0 00-6 6v1L2.5 11.5A1 1 0 003.5 13h13a1 1 0 001-1.5L16 9V8a6 6 0 00-6-6zM8.5 16.5a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="font-inter font-bold text-white leading-none" style={{ fontSize: '7px' }}>2</span>
            </span>
          </div>
          <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <span className="font-inter font-bold text-white leading-none" style={{ fontSize: '8px' }}>JD</span>
          </div>
        </div>
      </motion.div>

      {/* ── App layout ── */}
      <div className="flex" style={{ height: '440px' }}>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.25 }}
          className="bg-gray-50 border-r border-gray-100 w-[132px] shrink-0 flex flex-col py-3 gap-0.5 overflow-hidden"
        >
          {SIDEBAR_PRIMARY.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.06, duration: 0.28, ease }}
              className={`mx-2 flex items-center gap-2 px-2 py-1.5 rounded-lg font-inter font-medium cursor-default transition-colors ${
                item.active
                  ? 'bg-secondary/10 text-secondary'
                  : 'text-gray-500'
              }`}
              style={{ fontSize: '11px' }}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </motion.div>
          ))}

          <div className="mx-4 my-1 h-px bg-gray-100" />

          {SIDEBAR_SECONDARY.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.0 + i * 0.06, duration: 0.28, ease }}
              className="mx-2 flex items-center gap-2 px-2 py-1.5 rounded-lg font-inter font-medium text-gray-400 cursor-default"
              style={{ fontSize: '11px' }}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </motion.div>
          ))}

          {/* Bottom */}
          <div className="mt-auto flex flex-col gap-0.5">
            <div className="mx-2 flex items-center gap-2 px-2 py-1.5 rounded-lg font-inter font-medium text-gray-400 cursor-default" style={{ fontSize: '11px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                   strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Paramètres
            </div>
            <div className="mx-2 flex items-center gap-2 px-2 py-2 border-t border-gray-100 mt-0.5">
              <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <span className="font-inter font-bold text-secondary" style={{ fontSize: '7px' }}>JD</span>
              </div>
              <span className="font-inter text-gray-500 truncate" style={{ fontSize: '11px' }}>Jean Dupont</span>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex flex-col p-4 overflow-hidden relative">

          {/* Header row */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.3, ease }}
            className="flex items-center justify-between mb-3 shrink-0"
          >
            <div>
              <h2 className="font-archivo font-bold text-sm text-primary tracking-tight">Tableau de bord</h2>
              <p className="font-inter text-muted" style={{ fontSize: '10px' }}>Juillet 2026</p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.25 }}
              className="bg-secondary text-white font-inter font-medium px-2.5 py-1.5 rounded-lg cursor-default"
              style={{ fontSize: '10px' }}
            >
              + Nouvelle commande
            </motion.div>
          </motion.div>

          {/* 4 KPI cards */}
          <div className="grid grid-cols-4 gap-2 mb-3 shrink-0">
            {KPI.map((k, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.85 + i * 0.08, duration: 0.35, ease }}
                className="bg-white border border-gray-100 rounded-xl p-2.5"
              >
                <p className="font-archivo font-bold text-sm text-primary leading-none">{k.value}</p>
                <p className="font-inter text-muted mt-1 leading-none" style={{ fontSize: '9px' }}>{k.label}</p>
                <p className={`font-inter font-medium mt-1 leading-none ${k.up ? 'text-success' : 'text-red-500'}`} style={{ fontSize: '9px' }}>{k.trend}</p>
              </motion.div>
            ))}
          </div>

          {/* Line chart */}
          <div className="mb-3 shrink-0">
            <p className="font-inter text-muted font-medium mb-1.5" style={{ fontSize: '10px' }}>Chiffre d&apos;affaires — 8 derniers mois</p>
            <svg viewBox="0 0 240 60" className="w-full" style={{ height: '56px' }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d={CHART_AREA}
                fill="url(#chartGrad)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
              />
              <motion.path
                d={CHART_LINE}
                fill="none"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{
                  pathLength: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.3 },
                  opacity:    { duration: 0.3, delay: 1.3 },
                }}
              />
              {CHART_POINTS.map((pt, i) => (
                <motion.circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r="2"
                  fill="#2563EB"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.2, delay: 1.5 + i * 0.07 }}
                />
              ))}
            </svg>
            <div className="flex items-center mt-0.5">
              {MONTHS.map((m, i) => (
                <span key={i} className="flex-1 text-center font-inter text-gray-300 tabular leading-none" style={{ fontSize: '8px' }}>{m}</span>
              ))}
            </div>
          </div>

          {/* Table + Activity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.2 }}
            className="border-t border-gray-100 pt-2.5 flex gap-3 flex-1 min-h-0 overflow-hidden"
          >
            {/* Table */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <p className="font-inter font-semibold text-primary" style={{ fontSize: '10px' }}>Dernières commandes</p>
                <span className="font-inter text-secondary cursor-default" style={{ fontSize: '10px' }}>Voir tout →</span>
              </div>
              <div className="flex flex-col">
                {ROWS.map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.75 + i * 0.07, duration: 0.25, ease }}
                    className={`flex items-center gap-2 py-1.5 font-inter ${i < ROWS.length - 1 ? 'border-b border-gray-50' : ''}`}
                    style={{ fontSize: '10px' }}
                  >
                    <span className="text-muted w-9 shrink-0 tabular">{row.id}</span>
                    <span className="text-primary font-medium flex-1 min-w-0 truncate">{row.client}</span>
                    <span className="text-muted tabular shrink-0">{row.amount}</span>
                    <span className={`shrink-0 px-1.5 py-0.5 rounded-full font-medium ${
                      row.ok ? 'bg-success/10 text-success' : 'bg-amber-50 text-amber-600'
                    }`} style={{ fontSize: '8px' }}>
                      {row.ok ? 'Livrée' : 'En cours'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activity feed */}
            <div className="w-[38%] border-l border-gray-100 pl-3 min-w-0">
              <p className="font-inter font-semibold text-primary mb-2" style={{ fontSize: '10px' }}>Activité</p>
              <div className="flex flex-col gap-2.5">
                {ACTIVITY.map((act, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.85 + i * 0.1, duration: 0.25 }}
                    className="flex items-start gap-1.5"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${act.dot}`} />
                    <div className="min-w-0">
                      <p className="font-inter text-primary leading-tight truncate" style={{ fontSize: '9px' }}>{act.text}</p>
                      <p className="font-inter text-gray-300 mt-0.5" style={{ fontSize: '8px' }}>il y a {act.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Notification toast */}
          <AnimatePresence>
            {showNotif && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -4 }}
                transition={{ duration: 0.28, ease }}
                className="absolute top-4 right-4 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.10)] rounded-xl p-3 flex items-start gap-2.5 max-w-[168px]"
              >
                <span className="w-6 h-6 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-success">
                    <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-inter font-semibold text-xs text-primary leading-tight">Commande créée</p>
                  <p className="font-inter text-xs text-muted mt-0.5 leading-tight">#1848 — Moreau & Fils</p>
                  <p className="font-inter text-gray-300 mt-1" style={{ fontSize: '9px' }}>il y a quelques secondes</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="w-[112px] shrink-0 border-l border-gray-100 bg-gray-50/50 py-3 px-2.5 flex flex-col gap-3 overflow-hidden"
        >
          {/* Calendar */}
          <div>
            <p className="font-inter font-semibold uppercase tracking-wide text-gray-400 mb-2" style={{ fontSize: '8px', letterSpacing: '0.1em' }}>Agenda</p>
            <div className="flex flex-col gap-1.5">
              {CALENDAR.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.0 + i * 0.07, duration: 0.22, ease }}
                  className="flex items-center gap-1.5"
                >
                  <span className="font-inter text-gray-400 w-11 shrink-0 leading-none" style={{ fontSize: '9px' }}>{entry.day}</span>
                  {entry.event ? (
                    <div className="flex items-center gap-1 min-w-0">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${entry.color}`} />
                      <span className="font-inter text-primary truncate leading-none" style={{ fontSize: '9px' }}>{entry.event}</span>
                    </div>
                  ) : (
                    <span className="font-inter text-gray-200 leading-none" style={{ fontSize: '9px' }}>—</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Team */}
          <div>
            <p className="font-inter font-semibold uppercase tracking-wide text-gray-400 mb-2" style={{ fontSize: '8px', letterSpacing: '0.1em' }}>Équipe</p>
            <div className="flex items-center">
              <div className="flex -space-x-1.5">
                {TEAM.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 1.4 + i * 0.07, duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                    className={`w-5 h-5 rounded-full ${member.bg} flex items-center justify-center ring-1 ring-white font-inter font-bold text-white`}
                    style={{ fontSize: '7px' }}
                  >
                    {member.initial}
                  </motion.div>
                ))}
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.7, duration: 0.2 }}
                className="ml-2 font-inter text-gray-400"
                style={{ fontSize: '9px' }}
              >
                +6
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
