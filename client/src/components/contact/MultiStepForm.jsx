import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Building2,
  Rocket,
  ShoppingCart,
  Globe,
  Bot,
  Sparkles,
  ChevronLeft,
} from 'lucide-react'
import { ease } from '../../lib/motion'
import ProgressBar from './ProgressBar'
import StepHeader from './StepHeader'
import StepCard from './StepCard'
import ContactForm from './ContactForm'
import ConfirmationView from './ConfirmationView'

const TOTAL_STEPS = 6

const PROJECT_TYPES = [
  {
    id: 'metier',
    icon: Building2,
    title: 'Application métier sur mesure',
    desc: 'Automatiser vos processus, remplacer Excel, centraliser vos données et faire gagner du temps à vos équipes.',
  },
  {
    id: 'saas',
    icon: Rocket,
    title: 'Produit SaaS',
    desc: 'Créer une plateforme SaaS B2B ou B2C avec authentification, abonnements Stripe et espace client.',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'Site e-commerce',
    desc: 'Créer ou refondre une boutique performante sous Shopify ou sur mesure.',
  },
  {
    id: 'vitrine',
    icon: Globe,
    title: 'Site vitrine',
    desc: 'Présenter votre entreprise avec un site premium pensé pour convertir vos visiteurs en clients.',
  },
  {
    id: 'ia',
    icon: Bot,
    title: 'IA & Automatisation',
    desc: 'Automatiser vos tâches répétitives grâce aux agents IA et aux workflows intelligents.',
  },
  {
    id: 'other',
    icon: Sparkles,
    title: 'Un autre projet',
    desc: 'Nous définirons ensemble la meilleure solution.',
  },
]

const BUDGETS = [
  { id: '2k-5k',    title: '2 000 € à 5 000 €',    desc: 'Site vitrine, automatisation simple, MVP.' },
  { id: '5k-15k',   title: '5 000 € à 15 000 €',   desc: 'E-commerce, outil interne, application métier simple.' },
  { id: '15k-40k',  title: '15 000 € à 40 000 €',  desc: 'ERP métier, SaaS, plateforme complète.' },
  { id: '40k+',     title: 'Plus de 40 000 €',      desc: 'Projet stratégique ou multi-équipes.' },
  { id: 'unknown',  title: 'Je ne sais pas encore', desc: 'Nous définirons ensemble le budget adapté.' },
]

const TIMELINES = [
  { id: 'asap',       title: 'Dès que possible',              desc: 'Disponibilité prioritaire.' },
  { id: 'month',      title: 'Dans le mois',                  desc: 'Nous préparons votre lancement.' },
  { id: '1-3months',  title: 'Dans 1 à 3 mois',              desc: 'Parfait pour préparer le projet sereinement.' },
  { id: 'reflection', title: 'Je suis simplement en réflexion', desc: 'Nous pouvons déjà échanger sur votre besoin.' },
]

const slideVariants = {
  enter: d => ({ x: d > 0 ? 48 : -48, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: d => ({ x: d > 0 ? -48 : 48, opacity: 0, scale: 0.98 }),
}

const slideTrans = { duration: 0.3, ease }

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [formData, setFormData] = useState({
    projectType: null,
    budget: null,
    timeline: null,
    description: '',
    contact: { nom: '', email: '', telephone: '', entreprise: '', fonction: '' },
  })

  const isDone = step === 6

  function goTo(next) {
    setDirection(next > step ? 1 : -1)
    setStep(next)
  }

  function selectCard(field, value) {
    setFormData(prev => ({ ...prev, [field]: value }))
    setTimeout(() => goTo(step + 1), 300)
  }

  async function handleSubmit() {
    setLoading(true)
    setSubmitError(null)
    try {
      const res = await fetch('https://api.djexa.fr/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: formData.contact.nom,
          email: formData.contact.email,
          telephone: formData.contact.telephone,
          entreprise: formData.contact.entreprise,
          fonction: formData.contact.fonction,
          besoin: formData.description,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
        }),
      })
      if (!res.ok) throw new Error()
      goTo(6)
    } catch {
      setSubmitError("Une erreur est survenue. Veuillez réessayer ou nous contacter directement.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-[650px] mx-auto">
      {/* Progress bar — steps 1-5 */}
      {!isDone && <ProgressBar step={step} total={TOTAL_STEPS} />}

      {/* Back button — steps 2-5 */}
      {step > 1 && !isDone && (
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease }}
          onClick={() => goTo(step - 1)}
          className="flex items-center gap-1.5 font-inter text-sm text-muted hover:text-primary transition-colors duration-200 mb-6 -mt-2"
        >
          <ChevronLeft size={15} strokeWidth={2} />
          Retour
        </motion.button>
      )}

      {/* Animated step content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTrans}
        >

          {/* ── Étape 1 : Type de projet ── */}
          {step === 1 && (
            <div>
              <StepHeader
                title="Quel type de projet souhaitez-vous réaliser ?"
                subtitle="Une seule réponse. Nous vous orienterons ensuite vers la meilleure approche."
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map(pt => (
                  <StepCard
                    key={pt.id}
                    icon={pt.icon}
                    title={pt.title}
                    desc={pt.desc}
                    selected={formData.projectType === pt.id}
                    onClick={() => selectCard('projectType', pt.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Étape 2 : Budget ── */}
          {step === 2 && (
            <div>
              <StepHeader
                title="Quel budget envisagez-vous ?"
                subtitle="Cette information nous aide uniquement à proposer une solution adaptée."
              />
              <div className="flex flex-col gap-3">
                {BUDGETS.map(b => (
                  <StepCard
                    key={b.id}
                    title={b.title}
                    desc={b.desc}
                    selected={formData.budget === b.id}
                    onClick={() => selectCard('budget', b.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Étape 3 : Délai ── */}
          {step === 3 && (
            <div>
              <StepHeader
                title="Quand souhaitez-vous démarrer ?"
                subtitle="Nous planifions les nouveaux projets plusieurs semaines à l'avance."
              />
              <div className="flex flex-col gap-3">
                {TIMELINES.map(t => (
                  <StepCard
                    key={t.id}
                    title={t.title}
                    desc={t.desc}
                    selected={formData.timeline === t.id}
                    onClick={() => selectCard('timeline', t.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Étape 4 : Description ── */}
          {step === 4 && (
            <div>
              <StepHeader
                title="Décrivez votre projet"
                subtitle="Plus vous nous donnez de contexte, plus notre proposition sera pertinente."
              />
              <textarea
                value={formData.description}
                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Nous souhaitons créer un espace client permettant à nos clients de suivre leurs commandes, valider leurs documents et échanger avec nos équipes…"
                rows={6}
                maxLength={3000}
                className="w-full bg-white border border-border text-primary placeholder-muted/40 rounded-2xl px-5 py-4 font-inter text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all resize-none leading-relaxed"
              />
              <div className="flex items-center justify-between mt-2 mb-6">
                <span className={['font-inter text-xs transition-colors', formData.description.length < 20 ? 'text-muted/60' : 'text-success font-medium'].join(' ')}>
                  {formData.description.length < 20
                    ? `Minimum 20 caractères — encore ${20 - formData.description.length}`
                    : '✓ Bonne longueur'}
                </span>
                <span className="font-inter text-xs text-muted tabular">
                  {formData.description.length} / 3000
                </span>
              </div>
              <motion.button
                type="button"
                onClick={() => goTo(5)}
                disabled={formData.description.length < 20}
                whileTap={formData.description.length >= 20 ? { scale: 0.98 } : {}}
                className="w-full h-12 bg-primary text-white font-inter font-semibold text-sm rounded-xl hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
              >
                Continuer
              </motion.button>
            </div>
          )}

          {/* ── Étape 5 : Contact ── */}
          {step === 5 && (
            <div>
              <StepHeader
                title="Comment pouvons-nous vous contacter ?"
                subtitle="Un membre de notre équipe vous répond généralement sous 4 heures ouvrées."
              />
              <ContactForm
                data={formData.contact}
                onChange={contact => setFormData(prev => ({ ...prev, contact }))}
                onSubmit={handleSubmit}
                loading={loading}
                submitError={submitError}
              />
            </div>
          )}

          {/* ── Étape 6 : Confirmation ── */}
          {step === 6 && <ConfirmationView />}

        </motion.div>
      </AnimatePresence>
    </div>
  )
}
