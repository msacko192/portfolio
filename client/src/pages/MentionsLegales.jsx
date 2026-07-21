import { Link } from 'react-router-dom'
import { BRAND } from '../data/content'

export default function MentionsLegales() {
  return (
    <main className="bg-white min-h-screen">

      {/* Header */}
      <div className="bg-section border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Link
            to="/"
            className="font-inter text-sm text-muted hover:text-secondary transition-colors duration-200 inline-flex items-center gap-1.5 mb-6"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11 7H3M6 4l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Retour à l'accueil
          </Link>
          <p className="label text-secondary mb-3">Légal</p>
          <h1 className="font-archivo font-black text-primary tracking-display leading-[1.06]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            Mentions légales
          </h1>
          <p className="font-inter text-sm text-muted mt-3">Dernière mise à jour : juillet 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <div className="flex flex-col gap-12">

          <Section title="1. Éditeur du site">
            <p>Le site <strong>djexa.fr</strong> est édité par :</p>
            <dl className="mt-4 flex flex-col gap-2">
              <Row label="Dénomination" value={BRAND} />
              <Row label="Forme juridique" value="Entreprise individuelle (auto-entrepreneur)" />
              <Row label="SIRET" value="[À COMPLÉTER]" />
              <Row label="Siège social" value="Paris, France" />
              <Row label="Email" value="contact@djexa.fr" />
              <Row label="Directeur de la publication" value="Madi Diarra" />
            </dl>
          </Section>

          <Section title="2. Hébergement">
            <p>Le site est hébergé par :</p>
            <dl className="mt-4 flex flex-col gap-2">
              <Row label="Hébergeur" value="Cloudflare, Inc." />
              <Row label="Adresse" value="101 Townsend St, San Francisco, CA 94107, États-Unis" />
              <Row label="Site" value="cloudflare.com" />
            </dl>
          </Section>

          <Section title="3. Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site — textes, visuels, maquettes, code source, logos — est la propriété exclusive de {BRAND}, sauf mention contraire.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation partielle ou totale, par quelque procédé que ce soit, est strictement interdite sans l'autorisation écrite préalable de {BRAND}.
            </p>
          </Section>

          <Section title="4. Responsabilité">
            <p>
              {BRAND} s'efforce de maintenir les informations de ce site exactes et à jour. Toutefois, {BRAND} ne saurait être tenu responsable des erreurs ou omissions, ni de tout dommage résultant de l'utilisation des informations présentées.
            </p>
            <p className="mt-3">
              Les liens hypertextes vers d'autres sites sont fournis à titre informatif. {BRAND} n'assume aucune responsabilité quant au contenu de ces sites tiers.
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              Ce site n'utilise pas de cookies publicitaires ou de traceurs tiers à des fins de ciblage. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.
            </p>
            <p className="mt-3">
              Conformément à la réglementation en vigueur, vous pouvez paramétrer votre navigateur pour refuser les cookies. Cela peut affecter le bon fonctionnement de certaines fonctionnalités.
            </p>
          </Section>

          <Section title="6. Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </Section>

          <div className="border-t border-border pt-8">
            <p className="font-inter text-sm text-muted">
              Pour toute question relative aux mentions légales, vous pouvez nous contacter à l'adresse{' '}
              <a href="mailto:contact@djexa.fr" className="text-secondary hover:underline">contact@djexa.fr</a>.
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="font-archivo font-black text-primary text-xl tracking-display mb-4 pb-3 border-b border-border">
        {title}
      </h2>
      <div className="font-inter text-muted leading-relaxed text-sm flex flex-col gap-0">
        {children}
      </div>
    </section>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex gap-3">
      <dt className="font-medium text-primary/70 min-w-[160px] shrink-0">{label}</dt>
      <dd className="text-muted">{value}</dd>
    </div>
  )
}
