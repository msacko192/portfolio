import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { textReveal, textLine } from '../lib/motion'

export default function Confirmation() {
  return (
    <section className="bg-section py-24 md:py-32 min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-2xl px-6 w-full">
        <motion.div
          variants={textReveal()}
          initial="hidden"
          animate="show"
          className="bg-white rounded-2xl border border-border shadow-card-md p-10 md:p-14 text-center"
        >
          {/* Checkmark */}
          <motion.div variants={textLine} className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-success" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>

          <motion.h1
            variants={textLine}
            className="font-archivo font-black text-primary tracking-display text-balance leading-tight mb-3"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Message envoyé !
          </motion.h1>

          <motion.p variants={textLine} className="font-inter text-muted leading-relaxed mb-2 max-w-[40ch] mx-auto">
            Merci pour votre message. Nous vous répondrons sous{' '}
            <strong className="text-primary font-semibold">48 heures ouvrées</strong>.
          </motion.p>

          <motion.p variants={textLine} className="font-inter text-sm text-muted/70 mb-10">
            Un email de confirmation vous a également été envoyé.
          </motion.p>

          <motion.div variants={textLine}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-white font-inter font-medium text-sm px-7 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Retour à l'accueil
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2.5 6.5h8M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
