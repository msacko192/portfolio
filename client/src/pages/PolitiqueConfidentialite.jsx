import { Link } from 'react-router-dom'
import { BRAND } from '../data/content'

export default function PolitiqueConfidentialite() {
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
            Politique de confidentialité
          </h1>
          <p className="font-inter text-sm text-muted mt-3">Dernière mise à jour : juillet 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <div className="flex flex-col gap-12">

          <Section title="1. Responsable du traitement">
            <p>
              Les données personnelles collectées sur ce site sont traitées par <strong>{BRAND}</strong>,
              entreprise individuelle dont le siège est à Paris, France.
            </p>
            <p className="mt-3">
              Contact : <a href="mailto:contact@djexa.fr" className="text-secondary hover:underline">contact@djexa.fr</a>
            </p>
          </Section>

          <Section title="2. Données collectées">
            <p>Lors de l'utilisation du formulaire de contact, les informations suivantes peuvent être collectées :</p>
            <ul className="mt-4 flex flex-col gap-2 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">–</span>
                <span><strong>Nom</strong> — identification de l'interlocuteur</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">–</span>
                <span><strong>Adresse email</strong> — pour vous répondre</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">–</span>
                <span><strong>Numéro de téléphone</strong> — optionnel, pour vous rappeler si nécessaire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">–</span>
                <span><strong>Nom de l'entreprise</strong> — optionnel, pour comprendre le contexte de votre demande</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">–</span>
                <span><strong>Description du besoin</strong> — pour préparer notre échange</span>
              </li>
            </ul>
            <p className="mt-4">
              Ces données sont transmises de manière sécurisée et ne sont jamais cédées, vendues ou transmises à des tiers.
            </p>
          </Section>

          <Section title="3. Finalité et base légale">
            <p>
              Les données collectées via le formulaire de contact sont utilisées exclusivement dans le but de répondre à votre demande et d'échanger avec vous sur un éventuel projet.
            </p>
            <p className="mt-3">
              La base légale de ce traitement est l'<strong>intérêt légitime</strong> de {BRAND} à répondre aux demandes entrantes (article 6.1.f du RGPD), ainsi que votre <strong>consentement</strong> implicite lors de la soumission du formulaire.
            </p>
          </Section>

          <Section title="4. Durée de conservation">
            <p>
              Vos données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter de notre dernier échange, sauf demande de suppression de votre part.
            </p>
            <p className="mt-3">
              Au-delà de ce délai, elles sont supprimées ou anonymisées.
            </p>
          </Section>

          <Section title="5. Vos droits">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="mt-4 flex flex-col gap-3 pl-4">
              {[
                ["Droit d'accès", "Obtenir une copie des données vous concernant que nous détenons."],
                ["Droit de rectification", "Corriger des données inexactes ou incomplètes."],
                ["Droit à l'effacement", "Demander la suppression de vos données (« droit à l'oubli »)."],
                ["Droit à la portabilité", "Recevoir vos données dans un format structuré et lisible."],
                ["Droit d'opposition", "Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière."],
                ["Droit à la limitation", "Demander le gel temporaire du traitement de vos données."],
              ].map(([right, desc]) => (
                <li key={right} className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">–</span>
                  <span><strong>{right}</strong> : {desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:contact@djexa.fr" className="text-secondary hover:underline">contact@djexa.fr</a>.
              Nous répondrons dans un délai maximum de <strong>30 jours</strong>.
            </p>
          </Section>

          <Section title="6. Réclamation auprès de la CNIL">
            <p>
              Si vous estimez que le traitement de vos données n'est pas conforme à la réglementation, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <dl className="mt-4 flex flex-col gap-2">
              <div className="flex gap-3">
                <dt className="font-medium text-primary/70 min-w-[80px] shrink-0">Site</dt>
                <dd><a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">www.cnil.fr</a></dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-medium text-primary/70 min-w-[80px] shrink-0">Adresse</dt>
                <dd>3 Place de Fontenoy, TSA 80715 — 75334 Paris Cedex 07</dd>
              </div>
            </dl>
          </Section>

          <Section title="7. Cookies et traceurs">
            <p>
              Ce site n'utilise pas de cookies publicitaires, de traceurs de réseaux sociaux ou d'outils d'analyse comportementale tiers (Google Analytics, Facebook Pixel, etc.).
            </p>
            <p className="mt-3">
              Des cookies techniques strictement nécessaires au fonctionnement du site (session, sécurité) peuvent être déposés. Ces cookies ne nécessitent pas votre consentement au sens de la réglementation en vigueur.
            </p>
          </Section>

          <Section title="8. Sécurité">
            <p>
              {BRAND} met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Les données transitent via des connexions HTTPS chiffrées.
            </p>
          </Section>

          <Section title="9. Modifications">
            <p>
              Cette politique peut être mise à jour à tout moment pour refléter l'évolution de nos pratiques ou des exigences légales. La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </Section>

          <div className="border-t border-border pt-8">
            <p className="font-inter text-sm text-muted">
              Pour toute question relative à la protection de vos données, contactez-nous à{' '}
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
      <div className="font-inter text-muted leading-relaxed text-sm">
        {children}
      </div>
    </section>
  )
}
