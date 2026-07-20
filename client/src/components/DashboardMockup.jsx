import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const SIDEBAR = [
  { id: 'dashboard', label: 'Dashboard',   active: true,  icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'commandes', label: 'Commandes',   active: false, icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { id: 'clients',   label: 'Clients',     active: false, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0' },
  { id: 'produits',  label: 'Produits',    active: false, icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10' },
  { id: 'rapports',  label: 'Rapports',    active: false, icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
]

const KPI = [
  { value: '84 000€', label: 'CA mensuel',   trend: '+18%', up: true  },
  { value: '247',     label: 'Commandes',    trend: '+12%', up: true  },
  { value: '98%',     label: 'Satisfaction', trend: '+2%',  up: true  },
]

const BARS = [
  { h: 38 }, { h: 55 }, { h: 44 }, { h: 70 },
  { h: 62 }, { h: 80 }, { h: 68 }, { h: 90 },
]

const MONTHS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû']

const ROWS = [
  { id: '#1847', client: 'Dupont SA',     amount: '1 240 €', status: 'Livrée',    ok: true  },
  { id: '#1846', client: 'Martin & Co.',  amount: '890 €',   status: 'En cours',  ok: false },
  { id: '#1845', client: 'Leclerc SA',    amount: '2 100 €', status: 'Livrée',    ok: true  },
]

function NavIcon({ path }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round"
         className="w-4 h-4 shrink-0">
      <path d={path} />
    </svg>
  )
}

export default function DashboardMockup() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-60px 0px' })
  const [showNotif, setShowNotif] = useState(false)
  const [notifLoop, setNotifLoop] = useState(0)

  useEffect(() => {
    if (!inView) return
    const show = setTimeout(() => setShowNotif(true), 2200)
    return () => clearTimeout(show)
  }, [inView])

  useEffect(() => {
    if (!showNotif) return
    const hide  = setTimeout(() => setShowNotif(false),  3200)
    const again = setTimeout(() => { setNotifLoop(n => n + 1); setShowNotif(true) }, 5800)
    return () => { clearTimeout(hide); clearTimeout(again) }
  }, [showNotif, notifLoop])

  const ease = [0.22, 1, 0.36, 1]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease }}
      className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] bg-white select-none"
    >
      {/* ── Title bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center gap-3"
      >
        {/* Traffic lights */}
        <div className="flex gap-[5px] shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        {/* Fake URL / tab */}
        <div className="flex-1 flex justify-center">
          <span className="bg-white border border-gray-200/80 rounded-md px-4 py-1 text-xs text-gray-500 font-inter leading-none">
            Gestion commerciale — Tableau de bord
          </span>
        </div>
        <div className="w-10 shrink-0" />
      </motion.div>

      {/* ── App layout ── */}
      <div className="flex" style={{ height: '380px' }}>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.25 }}
          className="bg-gray-50 border-r border-gray-100 w-44 shrink-0 flex flex-col py-3 gap-0.5"
        >
          {SIDEBAR.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.07, duration: 0.28, ease }}
              className={`mx-2 flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-inter font-medium cursor-default transition-colors ${
                item.active
                  ? 'bg-secondary/10 text-secondary'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </motion.div>
          ))}

          {/* Bottom */}
          <div className="mt-auto mx-2 flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-inter font-medium text-gray-400 cursor-default">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                 strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Paramètres
          </div>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 p-5 overflow-hidden relative">

          {/* Header row */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.3, ease }}
            className="flex items-center justify-between mb-4"
          >
            <div>
              <h2 className="font-archivo font-bold text-sm text-primary tracking-tight">Tableau de bord</h2>
              <p className="font-inter text-xs text-muted mt-0.5">Juillet 2026</p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.25 }}
              className="bg-secondary text-white font-inter text-xs font-medium px-3 py-1.5 rounded-lg cursor-default"
            >
              + Nouvelle commande
            </motion.div>
          </motion.div>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {KPI.map((k, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.35, ease }}
                className="bg-white border border-gray-100 rounded-xl p-3"
              >
                <p className="font-archivo font-bold text-base text-primary leading-none">{k.value}</p>
                <p className="font-inter text-xs text-muted mt-1 leading-none">{k.label}</p>
                <p className={`font-inter text-xs font-medium mt-1.5 leading-none ${k.up ? 'text-success' : 'text-red-500'}`}>
                  {k.trend}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="mb-4">
            <p className="font-inter text-xs text-muted mb-2 font-medium">Chiffre d'affaires — 8 derniers mois</p>
            <div className="flex items-end gap-1.5" style={{ height: '80px' }}>
              {BARS.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center" style={{ height: '68px' }}>
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ delay: 1.3 + i * 0.05, duration: 0.4, ease }}
                      style={{ height: `${bar.h}%`, transformOrigin: 'bottom' }}
                      className={`w-full rounded-sm ${i === 7 ? 'bg-secondary' : 'bg-secondary/25'}`}
                    />
                  </div>
                  <span className="font-inter text-[9px] text-gray-300 tabular leading-none">{MONTHS[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Table header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.2 }}
            className="border-t border-gray-100 pt-3"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-inter text-xs font-semibold text-primary">Dernières commandes</p>
              <span className="font-inter text-xs text-secondary cursor-default">Voir tout →</span>
            </div>
            <div className="flex flex-col gap-0">
              {ROWS.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.75 + i * 0.08, duration: 0.3, ease }}
                  className={`flex items-center gap-3 py-1.5 text-xs font-inter ${i < ROWS.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <span className="text-muted w-10 shrink-0 tabular">{row.id}</span>
                  <span className="text-primary font-medium flex-1 min-w-0 truncate">{row.client}</span>
                  <span className="text-muted tabular shrink-0">{row.amount}</span>
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    row.ok
                      ? 'bg-success/10 text-success'
                      : 'bg-amber-50 text-amber-600'
                  }`}>
                    {row.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notification toast */}
          <AnimatePresence>
            {showNotif && (
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 60, opacity: 0 }}
                transition={{ duration: 0.32, ease }}
                className="absolute top-4 right-4 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.10)] rounded-xl p-3 flex items-start gap-2.5 max-w-[196px]"
              >
                <span className="w-6 h-6 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-success">
                    <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-inter font-semibold text-xs text-primary leading-tight">Commande créée</p>
                  <p className="font-inter text-xs text-muted mt-0.5 leading-tight">#1848 — Moreau & Fils</p>
                  <p className="font-inter text-[10px] text-gray-300 mt-1">il y a quelques secondes</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  )
}
