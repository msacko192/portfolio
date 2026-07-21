import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

function validate(data) {
  const errors = {}
  if (!data.nom?.trim()) errors.nom = 'Requis'
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Adresse email invalide'
  if (!data.besoin?.trim()) errors.besoin = 'Requis'
  return errors
}

function Field({ label, id, type = 'text', required, rows, placeholder, error }) {
  const base =
    'w-full bg-white border border-border text-primary placeholder-muted/50 rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all'

  return (
    <div>
      <label htmlFor={id} className="block font-inter text-sm font-medium text-primary/80 mb-1.5">
        {label}{required && <span className="text-secondary ml-0.5">*</span>}
      </label>
      {rows ? (
        <textarea id={id} name={id} rows={rows} placeholder={placeholder} className={base} />
      ) : (
        <input id={id} name={id} type={type} placeholder={placeholder} className={base} />
      )}
      {error && <p className="font-inter text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-80px 0px' })

  async function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const fieldErrors = validate(data)
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      navigate('/confirmation')
    } catch {
      setStatus('error')
      setErrorMessage(content.contact.error)
    }
  }

  const { fields } = content.contact

  return (
    <section id="contact" className="bg-section py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading centré */}
        <div ref={headRef} className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="label text-secondary mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-archivo font-black text-primary tracking-display text-balance leading-[1.08]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            {content.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="font-inter text-muted mt-4 leading-relaxed text-pretty"
          >
            {content.contact.body}
          </motion.p>
        </div>

        {/* Formulaire card */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease, delay: 0.15 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl border border-border shadow-card-md p-8"
        >
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={fields.nom} id="nom" required placeholder="Jean Dupont" error={errors.nom} />
              <Field label={fields.entreprise} id="entreprise" placeholder="Votre entreprise" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={fields.email} id="email" type="email" required placeholder="jean@exemple.fr" error={errors.email} />
              <Field label={fields.telephone} id="telephone" type="tel" placeholder="06 00 00 00 00" />
            </div>
            <Field
              label={fields.besoin}
              id="besoin"
              rows={4}
              required
              placeholder="Décrivez brièvement votre besoin ou le processus que vous souhaitez améliorer…"
              error={errors.besoin}
            />
            {status === 'error' && (
              <p className="font-inter text-sm text-red-500">{errorMessage}</p>
            )}
            <div className="flex items-center justify-between gap-4 mt-1">
              <p className="font-inter text-xs text-muted leading-relaxed flex-1">
                {content.contact.rgpd}
              </p>
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
                className="shrink-0 bg-primary text-white font-inter font-medium text-sm px-7 py-3 rounded-xl hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02]"
              >
                {status === 'loading' ? 'Envoi…' : content.contact.cta}
              </motion.button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  )
}
