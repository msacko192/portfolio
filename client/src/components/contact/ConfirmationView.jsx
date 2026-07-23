import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { ease } from '../../lib/motion'

const NEXT_STEPS = [
  {
    num: '①',
    title: 'Analyse de votre projet',
    desc: 'Nous étudions votre besoin afin de préparer notre échange.',
  },
  {
    num: '②',
    title: 'Premier échange',
    desc: '30 minutes pour comprendre votre entreprise, vos objectifs et vos contraintes.',
  },
  {
    num: '③',
    title: 'Proposition sur mesure',
    desc: 'Vous recevez une proposition détaillée comprenant le périmètre du projet, les fonctionnalités, le planning et le devis.',
  },
]

const WHY_ITEMS = [
  'Développement 100 % sur mesure',
  'Vous êtes propriétaire du code',
  'Accompagnement de A à Z',
  'Architecture évolutive',
  'Maintenance et évolutions possibles',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease, delay },
})

export default function ConfirmationView() {
  return (
    <div className="space-y-8">
      {/* Main confirmation card */}
      <motion.div
        {...fadeUp(0)}
        className="bg-white rounded-2xl border border-border shadow-card-md p-8 md:p-10 text-center"
      >
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 20 }}
        >
          <CheckCircle size={52} strokeWidth={1.5} className="text-success" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.2)}
          className="font-archivo font-black text-primary tracking-tight text-balance leading-tight mb-3"
          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
        >
          Votre demande a bien été envoyée.
        </motion.h2>

        <motion.p {...fadeUp(0.3)} className="font-inter text-sm text-muted leading-relaxed max-w-sm mx-auto mb-1">
          Merci pour votre confiance. Nous allons analyser votre projet avec attention avant de vous contacter.
        </motion.p>

        <motion.p {...fadeUp(0.35)} className="font-inter text-sm text-muted">
          Un membre de notre équipe reviendra vers vous sous{' '}
          <strong className="text-primary font-semibold">4 heures ouvrées</strong>.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <motion.div {...fadeUp(0.4)}>
        <h3 className="font-archivo font-black text-primary text-base mb-5">Les prochaines étapes</h3>
        <div className="space-y-4">
          {NEXT_STEPS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease }}
              className="flex gap-4"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/8 border border-secondary/20 flex items-center justify-center">
                <span className="text-secondary text-sm font-medium leading-none">{s.num}</span>
              </div>
              <div className="pt-0.5">
                <p className="font-inter font-semibold text-sm text-primary mb-1">{s.title}</p>
                <p className="font-inter text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why DJEXA */}
      <motion.div {...fadeUp(0.7)}>
        <h3 className="font-archivo font-black text-primary text-base mb-4">Pourquoi choisir DJEXA ?</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.07, duration: 0.35, ease }}
              className="flex items-center gap-3 bg-white rounded-xl border border-border px-4 py-3.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden="true" />
              <span className="font-inter text-sm text-primary">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Back to home */}
      <motion.div {...fadeUp(1.0)} className="text-center pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white font-inter font-medium text-sm px-7 py-3 rounded-xl hover:bg-primary/90 transition-colors duration-200"
        >
          Retour à l'accueil
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2.5 6.5h8M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>
    </div>
  )
}
