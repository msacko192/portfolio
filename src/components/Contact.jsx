import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { textReveal, textLine, fadeUp } from '../lib/motion'

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
    'w-full bg-white/5 border border-white/15 text-white placeholder-white/30 rounded-2xl px-4 py-3 font-inter text-sm focus:outline-none focus:border-secondary transition-colors'

  return (
    <div>
      <label htmlFor={id} className="block label text-white/60 mb-1.5">
        {label}{required && ' *'}
      </label>
      {rows ? (
        <textarea id={id} name={id} rows={rows} placeholder={placeholder} className={base} />
      ) : (
        <input id={id} name={id} type={type} placeholder={placeholder} className={base} />
      )}
      {error && <p className="font-inter text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const leftRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true, margin: '-80px 0px' })
  const rightRef = useRef(null)
  const rightInView = useInView(rightRef, { once: true, margin: '-80px 0px' })

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
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage(content.contact.error)
    }
  }

  const { fields } = content.contact

  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            ref={leftRef}
            variants={textReveal()}
            initial="hidden"
            animate={leftInView ? 'show' : 'hidden'}
          >
            <motion.h2 variants={textLine} className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-white mb-4 text-balance">
              {content.contact.title}
            </motion.h2>
            <motion.p variants={textLine} className="font-inter text-white/60 leading-relaxed text-pretty max-w-[52ch]">
              {content.contact.body}
            </motion.p>
          </motion.div>

          <motion.div
            ref={rightRef}
            variants={fadeUp}
            initial="hidden"
            animate={rightInView ? 'show' : 'hidden'}
          >
            {status === 'success' ? (
              <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-6">
                <p className="font-inter text-white leading-relaxed">{content.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
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
                  <p className="font-inter text-sm text-red-400">{errorMessage}</p>
                )}
                <div className="mt-2">
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
                    className="w-full sm:w-auto bg-secondary text-white font-inter font-medium text-sm px-8 py-3 rounded-2xl hover:bg-secondary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01]"
                  >
                    {status === 'loading' ? 'Envoi…' : content.contact.cta}
                  </motion.button>
                </div>
                <p className="font-inter text-xs text-white/40 leading-relaxed mt-1">
                  {content.contact.rgpd}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
