import { useState } from 'react'
import { motion } from 'framer-motion'
import { content } from '../data/content'
import { SectionDivider } from './SectionMeta'
import { ease } from '../lib/motion'

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
    'w-full bg-white/5 border border-white/20 text-craie placeholder-graphite rounded px-4 py-3 font-inter text-sm focus:outline-none focus:border-pin transition-colors'

  return (
    <div>
      <label htmlFor={id} className="block label text-craie/70 mb-1.5">
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
    <section id="contact" className="bg-encre pb-20 md:pb-28">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
          >
            <h2 className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-craie mb-4 text-balance">
              {content.contact.title}
            </h2>
            <p className="font-inter text-graphite leading-relaxed text-pretty max-w-[52ch]">
              {content.contact.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.45, ease }}
          >
            {status === 'success' ? (
              <div className="bg-pin/10 border border-pin/30 rounded-lg p-6">
                <p className="font-inter text-craie leading-relaxed">{content.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={fields.nom}
                    id="nom"
                    required
                    placeholder="Jean Dupont"
                    error={errors.nom}
                  />
                  <Field
                    label={fields.entreprise}
                    id="entreprise"
                    placeholder="Votre entreprise"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={fields.email}
                    id="email"
                    type="email"
                    required
                    placeholder="jean@exemple.fr"
                    error={errors.email}
                  />
                  <Field
                    label={fields.telephone}
                    id="telephone"
                    type="tel"
                    placeholder="06 00 00 00 00"
                  />
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
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto bg-pin text-craie font-inter font-medium text-sm px-8 py-3 rounded hover:bg-pin/80 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === 'loading' ? 'Envoi…' : content.contact.cta}
                  </button>
                </div>

                <p className="font-inter text-xs text-graphite leading-relaxed mt-1">
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
