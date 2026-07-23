import { useState } from 'react'
import { motion } from 'framer-motion'

function validate(data) {
  const errors = {}
  if (!data.nom.trim()) errors.nom = 'Ce champ est requis'
  if (!data.email.trim()) errors.email = 'Ce champ est requis'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Adresse email invalide'
  if (!data.telephone.trim()) errors.telephone = 'Ce champ est requis'
  return errors
}

function InputField({ label, id, type = 'text', placeholder, required, value, onChange, onBlur, error }) {
  return (
    <div>
      <label htmlFor={id} className="block font-inter text-xs font-semibold text-primary/60 uppercase tracking-wider mb-2">
        {label}
        {required && <span className="text-secondary ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={id}
        className={[
          'w-full h-12 bg-white border rounded-xl px-4 font-inter text-sm text-primary placeholder-muted/40 focus:outline-none transition-all duration-200',
          error
            ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400/20'
            : 'border-border focus:border-secondary focus:ring-1 focus:ring-secondary/20',
        ].join(' ')}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="font-inter text-xs text-red-500 mt-1.5"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default function ContactForm({ data, onChange, onSubmit, loading, submitError }) {
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  function handleChange(field, value) {
    const next = { ...data, [field]: value }
    onChange(next)
    if (touched[field]) {
      setErrors(validate(next))
    }
  }

  function handleBlur(field) {
    setTouched(prev => ({ ...prev, [field]: true }))
    setErrors(validate(data))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTouched({ nom: true, email: true, telephone: true })
    const errs = validate(data)
    setErrors(errs)
    if (Object.keys(errs).length === 0) onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Nom"
          id="nom"
          placeholder="Jean Dupont"
          required
          value={data.nom}
          onChange={v => handleChange('nom', v)}
          onBlur={() => handleBlur('nom')}
          error={errors.nom}
        />
        <InputField
          label="Email professionnel"
          id="email"
          type="email"
          placeholder="jean@entreprise.fr"
          required
          value={data.email}
          onChange={v => handleChange('email', v)}
          onBlur={() => handleBlur('email')}
          error={errors.email}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          label="Téléphone"
          id="telephone"
          type="tel"
          placeholder="06 00 00 00 00"
          required
          value={data.telephone}
          onChange={v => handleChange('telephone', v)}
          onBlur={() => handleBlur('telephone')}
          error={errors.telephone}
        />
        <InputField
          label="Entreprise"
          id="entreprise"
          placeholder="ACME SAS"
          value={data.entreprise}
          onChange={v => handleChange('entreprise', v)}
        />
      </div>
      <InputField
        label="Fonction"
        id="fonction"
        placeholder="Directeur des opérations"
        value={data.fonction}
        onChange={v => handleChange('fonction', v)}
      />

      {submitError && (
        <p className="font-inter text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {submitError}
        </p>
      )}

      <div className="pt-2">
        <motion.button
          type="submit"
          disabled={loading}
          whileTap={!loading ? { scale: 0.98 } : {}}
          className="w-full h-12 bg-primary text-white font-inter font-semibold text-sm rounded-xl hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2.5"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Envoi en cours…
            </>
          ) : (
            'Envoyer ma demande'
          )}
        </motion.button>
      </div>
    </form>
  )
}
