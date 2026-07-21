import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ease } from '../lib/motion'


function TitleBar({ label }) {
  return (
    <div className="bg-gray-50 border-b border-gray-100 px-3 py-2 flex items-center gap-2.5 shrink-0">
      <div className="flex gap-1.5 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <span className="bg-white border border-gray-200/70 rounded px-3 py-0.5 text-[10px] text-gray-400 font-inter leading-none flex-1 text-center truncate">
        {label}
      </span>
    </div>
  )
}

// ── 1. Suivi de production — Kanban ──────────────────────────────────────────

const KANBAN = [
  {
    col: 'À faire',
    count: 3,
    color: '#D97706',
    cards: ['Renault · 100 panneaux', 'LVMH · Présentoirs', 'Nike · Totems'],
  },
  {
    col: 'En cours',
    count: 2,
    color: '#2563EB',
    cards: ['Carrefour · Stand PLV', 'Décathlon · Rayonnage'],
  },
  {
    col: 'Livré',
    count: 5,
    color: '#10B981',
    cards: ['Leclerc · 60 displays', 'BHV · Vitrines', 'Sephora · Podiums'],
    done: true,
  },
]

function SuiviProductionMockup() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease }}
      className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25 }}
      >
        <TitleBar label="Suivi commandes PLV — Kanban" />
      </motion.div>

      <div className="p-4 bg-gray-50/50" style={{ minHeight: '260px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.3 }}
          className="flex items-center justify-between mb-3"
        >
          <h3 className="font-archivo font-bold text-xs text-primary">Commandes en cours</h3>
          <span className="bg-[#D97706]/10 text-[#D97706] font-inter text-[10px] font-semibold px-2 py-0.5 rounded-full">Juillet 2026</span>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-3 gap-2.5">
          {KANBAN.map((col, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 + ci * 0.1, duration: 0.35, ease }}
              className="bg-white rounded-xl border border-gray-100 p-2.5 flex flex-col gap-2"
            >
              {/* Column header */}
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-inter text-[10px] font-semibold text-primary">{col.col}</span>
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: col.color }}
                >
                  {col.count}
                </span>
              </div>
              {/* Cards */}
              {col.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + ci * 0.1 + i * 0.06, duration: 0.28, ease }}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-2 flex items-start gap-1.5"
                >
                  {col.done && (
                    <span className="mt-0.5 shrink-0">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" style={{ color: col.color }}>
                        <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                  <span className="font-inter text-[10px] text-primary leading-tight">{card}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── 2. Facturation électronique ───────────────────────────────────────────────

const INVOICE_LINES = [
  { label: 'Comptabilité logicielle 2024', amount: '2 400 €' },
  { label: 'Mise à jour SIRET', amount: '180 €' },
]
const STATUS_STEPS = ['Brouillon', 'Envoyée', 'Reçue ✓']

function FacturationMockup() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease }}
      className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25 }}
      >
        <TitleBar label="Facturation électronique" />
      </motion.div>

      <div className="p-5" style={{ minHeight: '260px' }}>
        {/* Invoice header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.35, ease }}
          className="flex items-start justify-between mb-5"
        >
          <div>
            <p className="font-archivo font-black text-sm text-primary tracking-tight">FACTURE</p>
            <p className="font-inter text-xs text-muted">#2024-047 · 14 mars 2025</p>
          </div>
          <div className="text-right">
            <p className="font-inter text-[10px] text-muted">Dupont &amp; Associés</p>
            <p className="font-inter text-[10px] text-muted">SIRET 123 456 789 00012</p>
          </div>
        </motion.div>

        {/* Lines */}
        <div className="border border-gray-100 rounded-xl overflow-hidden mb-4">
          <div className="bg-gray-50 px-3 py-1.5 grid grid-cols-[1fr_auto] gap-2">
            <span className="font-inter text-[10px] font-semibold text-muted uppercase tracking-wide">Prestation</span>
            <span className="font-inter text-[10px] font-semibold text-muted uppercase tracking-wide">Montant HT</span>
          </div>
          {INVOICE_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.3, ease }}
              className="px-3 py-2 grid grid-cols-[1fr_auto] gap-2 border-t border-gray-100"
            >
              <span className="font-inter text-[11px] text-primary">{line.label}</span>
              <span className="font-inter text-[11px] text-primary font-medium tabular-nums">{line.amount}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.75, duration: 0.3 }}
            className="px-3 py-2 border-t border-gray-200 grid grid-cols-[1fr_auto] gap-2 bg-gray-50/80"
          >
            <span className="font-inter text-[11px] font-semibold text-primary">Total TTC</span>
            <span className="font-archivo font-bold text-sm text-primary tabular-nums">2 580 €</span>
          </motion.div>
        </div>

        {/* Status flow */}
        <div className="flex items-center gap-2">
          {STATUS_STEPS.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.18, duration: 0.3, ease }}
                className={`font-inter text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                  i === 2
                    ? 'bg-[#10B981]/12 text-[#10B981]'
                    : i === 1
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-gray-100 text-gray-400'
                }`}
              >
                {step}
              </motion.span>
              {i < STATUS_STEPS.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.95 + i * 0.18 }}
                  className="text-gray-300 text-xs"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── 3. ERP administratif et financier ────────────────────────────────────────

const ERP_NAV = ['Tableau de bord', 'Devis', 'Factures', 'Banque', 'Clients']
const ERP_KPI = [
  { label: 'CA mensuel', value: '34 200€', trend: '+22%' },
  { label: 'Devis actifs', value: '12', trend: '+3' },
  { label: 'Factures dues', value: '3', trend: '' },
]
const ERP_TRANSACTIONS = [
  { label: 'Virement Martin & Co.', amount: '+3 200 €', ok: true },
  { label: 'Paiement fournisseur', amount: '−450 €', ok: true },
  { label: 'Abonnement SaaS', amount: '−89 €', ok: true },
]

function ERPMockup() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease }}
      className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25 }}
      >
        <TitleBar label="ERP Administratif — Tableau de bord" />
      </motion.div>

      <div className="flex" style={{ minHeight: '268px' }}>
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.25 }}
          className="bg-gray-50 border-r border-gray-100 w-28 shrink-0 py-3"
        >
          {ERP_NAV.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.48 + i * 0.07, duration: 0.25, ease }}
              className={`mx-1.5 px-2 py-1.5 rounded-lg text-[10px] font-inter font-medium cursor-default mb-0.5 ${
                i === 0 ? 'bg-secondary/10 text-secondary' : 'text-gray-500'
              }`}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <div className="flex-1 p-3.5 overflow-hidden">
          {/* KPI */}
          <div className="grid grid-cols-3 gap-2 mb-3.5">
            {ERP_KPI.map((k, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.3, ease }}
                className="bg-white border border-gray-100 rounded-xl p-2.5"
              >
                <p className="font-archivo font-bold text-sm text-primary tabular-nums leading-tight">{k.value}</p>
                <p className="font-inter text-[9px] text-muted mt-0.5 leading-tight">{k.label}</p>
                {k.trend && (
                  <p className="font-inter text-[9px] font-semibold mt-1 text-[#10B981] leading-tight">{k.trend}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Transactions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.2 }}
            className="border-t border-gray-100 pt-3"
          >
            <p className="font-inter text-[10px] font-semibold text-primary mb-2">Dernières transactions</p>
            {ERP_TRANSACTIONS.map((tx, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.1 + i * 0.08, duration: 0.28, ease }}
                className={`flex items-center justify-between py-1.5 text-[10px] font-inter ${
                  i < ERP_TRANSACTIONS.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                <span className="text-gray-600 truncate mr-2">{tx.label}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`font-medium tabular-nums ${tx.amount.startsWith('+') ? 'text-[#10B981]' : 'text-primary'}`}>
                    {tx.amount}
                  </span>
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-[#10B981] shrink-0">
                    <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// ── 4. Gestion cabinet comptable ──────────────────────────────────────────────

const CABINET_CLIENTS = ['Dupont & Associés', 'Martin SARL', 'Leclerc SA', 'BTP Réunion', 'Moreau & Fils']
const CABINET_DOCS = [
  { label: 'FEC 2024', status: 'Transmis ✓', ok: true },
  { label: 'Bilan 2023', status: 'En cours ◐', ok: null },
  { label: 'Liasse 2024', status: 'À valider ○', ok: false },
]

function CabinetMockup() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease }}
      className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25 }}
      >
        <TitleBar label="Gestion Cabinet — Dossiers clients" />
      </motion.div>

      <div className="flex" style={{ minHeight: '268px' }}>
        {/* Client list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.38 }}
          className="bg-gray-50 border-r border-gray-100 w-36 shrink-0 py-2"
        >
          <p className="font-inter text-[9px] font-semibold text-muted uppercase tracking-wide px-3 mb-1.5">Clients</p>
          {CABINET_CLIENTS.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 + i * 0.07, duration: 0.25, ease }}
              className={`mx-1.5 px-2 py-1.5 rounded-lg text-[10px] font-inter cursor-default mb-0.5 ${
                i === 0 ? 'bg-[#10B981]/10 text-[#10B981] font-semibold' : 'text-gray-500 hover:bg-white'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? 'bg-[#10B981]' : 'bg-gray-300'}`} />
                <span className="truncate">{client}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Document view */}
        <div className="flex-1 p-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.3, ease }}
            className="flex items-start justify-between mb-4"
          >
            <div>
              <h3 className="font-archivo font-bold text-sm text-primary">Dupont &amp; Associés</h3>
              <p className="font-inter text-[10px] text-muted mt-0.5">SIREN 123 456 789</p>
            </div>
            <span className="bg-amber-50 text-amber-600 font-inter text-[9px] font-semibold px-2 py-0.5 rounded-full border border-amber-100">
              2 en retard
            </span>
          </motion.div>

          <div className="flex flex-col gap-2">
            {CABINET_DOCS.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.3, ease }}
                className="flex items-center justify-between bg-gray-50 rounded-xl border border-gray-100 px-3 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-gray-400 shrink-0">
                    <path d="M9 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V6L9 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    <path d="M9 1v5h5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  <span className="font-inter text-[11px] text-primary font-medium">{doc.label}</span>
                </div>
                <span className={`font-inter text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  doc.ok === true
                    ? 'text-[#10B981] bg-[#10B981]/10'
                    : doc.ok === null
                      ? 'text-secondary bg-secondary/10'
                      : 'text-gray-400 bg-gray-100'
                }`}>
                  {doc.status}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.05, duration: 0.3 }}
            className="font-inter text-[10px] text-muted mt-3"
          >
            Prochaine échéance · 30 avril 2025
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

// ── 5. Suivi chantier BTP ────────────────────────────────────────────────────

const CHANTIER_STEPS = [
  { label: 'Fondations', done: true },
  { label: 'Gros œuvre', done: true },
  { label: 'Toiture', done: null },
  { label: 'Finitions', done: false },
]
const CHANTIER_TEAM = ['M', 'S', 'T', 'A']
const CHANTIER_STATS = [
  { icon: '📷', label: '12 photos' },
  { icon: '📋', label: '5 rapports' },
  { icon: '📄', label: '3 devis' },
]

function ChantierMockup() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease }}
      className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25 }}
      >
        <TitleBar label="Suivi Chantier BTP" />
      </motion.div>

      <div className="p-4 md:p-5" style={{ minHeight: '268px' }}>
        {/* Chantier header */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.3, ease }}
          className="flex items-start justify-between mb-4"
        >
          <div>
            <h3 className="font-archivo font-bold text-sm text-primary">Résidence Les Pins</h3>
            <p className="font-inter text-[10px] text-muted mt-0.5">Bordeaux · Chef de projet : Martin</p>
          </div>
          <span className="font-inter text-xs font-bold text-[#C08A2E] bg-[#C08A2E]/10 px-2 py-1 rounded-lg">68%</span>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.9, ease }}
              style={{ transformOrigin: 'left', width: '68%' }}
              className="h-full bg-[#C08A2E] rounded-full"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {CHANTIER_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.09, duration: 0.3, ease }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                step.done === true
                  ? 'bg-[#10B981]/15 border-[#10B981]'
                  : step.done === null
                    ? 'bg-secondary/10 border-secondary'
                    : 'bg-gray-50 border-gray-200'
              }`}>
                {step.done === true ? (
                  <svg viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5" style={{ color: '#10B981' }}>
                    <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : step.done === null ? (
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                )}
              </div>
              <span className="font-inter text-[9px] text-muted text-center leading-tight">{step.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Team + stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-inter text-[10px] text-muted">Équipe :</span>
            <div className="flex -space-x-1.5">
              {CHANTIER_TEAM.map((initial, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.0 + i * 0.07, duration: 0.25, ease }}
                  className="w-6 h-6 rounded-full bg-[#C08A2E]/15 border border-white flex items-center justify-center font-inter text-[9px] font-bold text-[#C08A2E]"
                >
                  {initial}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {CHANTIER_STATS.map((s, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 + i * 0.08 }}
                className="font-inter text-[10px] text-muted"
              >
                {s.icon} {s.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Export ────────────────────────────────────────────────────────────────────

const mockups = {
  'suivi-production':          SuiviProductionMockup,
  'facturation-electronique':  FacturationMockup,
  'erp-administratif':         ERPMockup,
  'gestion-cabinet-comptable': CabinetMockup,
  'suivi-chantier-btp':        ChantierMockup,
}

export function ProjectMockup({ slug }) {
  const Component = mockups[slug]
  return Component ? <Component /> : null
}
