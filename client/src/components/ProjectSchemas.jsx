/**
 * Schémas SVG — Phase 4.
 * viewBox 320×150, sans bloc titre/sous-titre.
 * overflow="hidden" pour contenir le texte dans la viewBox.
 * fontSize=9 / letterSpacing=0.8 sur le label secteur pour tenir dans 320 unités.
 */

function PLVSchema() {
  return (
    <svg
      width="100%" viewBox="0 0 320 150" fill="none"
      overflow="hidden"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    >
      <rect width="320" height="150" fill="#F5F4F1"/>
      <rect x="0.5" y="0.5" width="319" height="149" stroke="#DCDAD4" strokeWidth="1"/>
      <rect width="4" height="150" fill="#B0723A"/>
      <text x="44" y="46" fontFamily="Georgia, serif" fontSize="9" letterSpacing="0.8" fill="#B0723A">
        MISSION CLIENT · MERCHANDISING / PLV
      </text>
      <g strokeWidth="1.2">
        <rect x="44" y="72" width="52" height="60" rx="3" stroke="#14181A" fill="none"/>
        <rect x="140" y="72" width="52" height="60" rx="3" stroke="#14181A" fill="none"/>
        <rect x="236" y="72" width="52" height="60" rx="3" stroke="#0E5C4A" strokeWidth="1.6" fill="none"/>
      </g>
      <g stroke="#14181A" strokeWidth="1">
        <line x1="54" y1="90" x2="86" y2="90"/>
        <line x1="54" y1="102" x2="80" y2="102"/>
        <line x1="150" y1="90" x2="182" y2="90"/>
        <line x1="150" y1="102" x2="176" y2="102"/>
      </g>
      <path d="M248 102 l7 7 l14 -16" stroke="#0E5C4A" strokeWidth="1.2"/>
      <rect x="44" y="122" width="52" height="4" rx="2" fill="#B0723A"/>
      <rect x="140" y="122" width="34" height="4" rx="2" fill="#B0723A"/>
      <rect x="236" y="122" width="52" height="4" rx="2" fill="#0E5C4A"/>
      <g stroke="#B0723A" strokeWidth="1" strokeDasharray="3 3">
        <line x1="100" y1="102" x2="136" y2="102"/>
        <line x1="196" y1="102" x2="232" y2="102"/>
      </g>
    </svg>
  )
}

function FacturationSchema() {
  return (
    <svg
      width="100%" viewBox="0 0 320 150" fill="none"
      overflow="hidden"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    >
      <rect width="320" height="150" fill="#F5F4F1"/>
      <rect x="0.5" y="0.5" width="319" height="149" stroke="#DCDAD4" strokeWidth="1"/>
      <rect width="4" height="150" fill="#0E5C4A"/>
      <text x="44" y="46" fontFamily="Georgia, serif" fontSize="9" letterSpacing="0.8" fill="#0E5C4A">
        MISSION CLIENT · CABINETS COMPTABLES
      </text>
      <g stroke="#14181A" strokeWidth="1.2">
        <rect x="44" y="70" width="58" height="70" rx="2"/>
        <line x1="56" y1="90" x2="90" y2="90"/>
        <line x1="56" y1="102" x2="90" y2="102"/>
        <line x1="56" y1="114" x2="82" y2="114"/>
        <line x1="56" y1="126" x2="90" y2="126"/>
      </g>
      <line x1="110" y1="105" x2="150" y2="105" stroke="#6E7377" strokeWidth="1" strokeDasharray="3 3"/>
      <g stroke="#14181A" strokeWidth="1.2">
        <circle cx="180" cy="105" r="26"/>
        <path d="M169 105 l7 7 l15 -16" stroke="#0E5C4A" fill="none"/>
      </g>
      <line x1="210" y1="105" x2="250" y2="105" stroke="#6E7377" strokeWidth="1" strokeDasharray="3 3"/>
      <g stroke="#0E5C4A" strokeWidth="1.6">
        <rect x="258" y="70" width="58" height="70" rx="3"/>
        <line x1="258" y1="88" x2="316" y2="88"/>
        <line x1="270" y1="106" x2="310" y2="106"/>
        <line x1="270" y1="120" x2="298" y2="120"/>
      </g>
      <circle cx="268" cy="79" r="2.5" fill="#0E5C4A"/>
    </svg>
  )
}

function ERPSchema() {
  return (
    <svg
      width="100%" viewBox="0 0 320 150" fill="none"
      overflow="hidden"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    >
      <rect width="320" height="150" fill="#F5F4F1"/>
      <rect x="0.5" y="0.5" width="319" height="149" stroke="#DCDAD4" strokeWidth="1"/>
      <rect width="4" height="150" fill="#3F6DA6"/>
      <text x="44" y="46" fontFamily="Georgia, serif" fontSize="9" letterSpacing="0.8" fill="#3F6DA6">
        PRODUIT PROPRE · GESTION FINANCIÈRE
      </text>
      <path d="M60 76 l22 -10 l22 10 v6 h-44 z" stroke="#14181A" strokeWidth="1.2"/>
      <line x1="66" y1="88" x2="66" y2="112" stroke="#14181A" strokeWidth="1.2"/>
      <line x1="82" y1="88" x2="82" y2="112" stroke="#14181A" strokeWidth="1.2"/>
      <line x1="98" y1="88" x2="98" y2="112" stroke="#14181A" strokeWidth="1.2"/>
      <line x1="58" y1="112" x2="106" y2="112" stroke="#14181A" strokeWidth="1.2"/>
      <text x="82" y="130" fontFamily="Inter, sans-serif" fontSize="9" fill="#3F6DA6" textAnchor="middle">Banque</text>
      <path d="M112 96 C 140 96, 150 96, 176 96" stroke="#3F6DA6" strokeWidth="1.2" strokeDasharray="3 3"/>
      <rect x="180" y="66" width="96" height="66" rx="4" stroke="#0E5C4A" strokeWidth="1.6"/>
      <line x1="180" y1="84" x2="276" y2="84" stroke="#0E5C4A" strokeWidth="1.4"/>
      <circle cx="192" cy="75" r="2.5" fill="#0E5C4A"/>
      <g stroke="#6E7377" strokeWidth="1">
        <line x1="192" y1="98" x2="230" y2="98"/>
        <line x1="192" y1="110" x2="264" y2="110"/>
        <line x1="192" y1="120" x2="244" y2="120"/>
      </g>
      <rect x="292" y="72" width="26" height="16" rx="2" fill="#3F6DA6"/>
      <rect x="292" y="94" width="26" height="16" rx="2" fill="#3F6DA6" opacity="0.6"/>
      <rect x="292" y="116" width="26" height="16" rx="2" fill="#3F6DA6" opacity="0.35"/>
    </svg>
  )
}

function CabinetSchema() {
  return (
    <svg
      width="100%" viewBox="0 0 320 150" fill="none"
      overflow="hidden"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    >
      <rect width="320" height="150" fill="#F5F4F1"/>
      <rect x="0.5" y="0.5" width="319" height="149" stroke="#DCDAD4" strokeWidth="1"/>
      <rect width="4" height="150" fill="#0E5C4A"/>
      <text x="44" y="46" fontFamily="Georgia, serif" fontSize="9" letterSpacing="0.8" fill="#0E5C4A">
        MISSION CLIENT · CABINETS COMPTABLES
      </text>
      <rect x="44" y="74" width="60" height="58" rx="3" stroke="#9AA0A6" strokeWidth="1.2" strokeDasharray="4 3"/>
      <text x="74" y="106" fontFamily="Inter, sans-serif" fontSize="9" fill="#9AA0A6" textAnchor="middle">monolithe</text>
      <defs>
        <marker id="marker-cab" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" stroke="#0E5C4A" strokeWidth="1.5"/>
        </marker>
      </defs>
      <line x1="110" y1="103" x2="150" y2="103" stroke="#0E5C4A" strokeWidth="1.4" markerEnd="url(#marker-cab)"/>
      <rect x="158" y="72" width="80" height="28" rx="3" stroke="#14181A" strokeWidth="1.3"/>
      <text x="198" y="90" fontFamily="Inter, sans-serif" fontSize="10" fill="#14181A" textAnchor="middle">Interface</text>
      <rect x="158" y="108" width="80" height="28" rx="3" stroke="#0E5C4A" strokeWidth="1.6"/>
      <text x="198" y="126" fontFamily="Inter, sans-serif" fontSize="10" fill="#0E5C4A" textAnchor="middle">Moteur données</text>
      <line x1="198" y1="100" x2="198" y2="108" stroke="#6E7377" strokeWidth="1" strokeDasharray="3 3"/>
    </svg>
  )
}

function ChantierSchema() {
  return (
    <svg
      width="100%" viewBox="0 0 320 150" fill="none"
      overflow="hidden"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    >
      <rect width="320" height="150" fill="#F5F4F1"/>
      <rect x="0.5" y="0.5" width="319" height="149" stroke="#DCDAD4" strokeWidth="1"/>
      <rect width="4" height="150" fill="#C08A2E"/>
      <text x="44" y="46" fontFamily="Georgia, serif" fontSize="9" letterSpacing="0.8" fill="#C08A2E">
        PRODUIT PROPRE · BTP
      </text>
      <g stroke="#14181A" strokeWidth="1.2">
        <path d="M50 128 v-34 l18 -12 l18 12 v34"/>
        <line x1="50" y1="110" x2="86" y2="110"/>
        <rect x="58" y="114" width="8" height="8"/>
        <rect x="70" y="114" width="8" height="8"/>
      </g>
      <text x="68" y="140" fontFamily="Inter, sans-serif" fontSize="9" fill="#C08A2E" textAnchor="middle">Chantier</text>
      <g stroke="#C08A2E" strokeWidth="1" strokeDasharray="3 3">
        <line x1="96" y1="104" x2="150" y2="88"/>
        <line x1="96" y1="112" x2="150" y2="128"/>
      </g>
      <rect x="156" y="70" width="70" height="40" rx="3" stroke="#0E5C4A" strokeWidth="1.5"/>
      <g stroke="#0E5C4A" strokeWidth="1">
        <line x1="156" y1="82" x2="226" y2="82"/>
        <line x1="168" y1="82" x2="168" y2="110"/>
        <line x1="190" y1="82" x2="190" y2="110"/>
        <line x1="212" y1="82" x2="212" y2="110"/>
        <line x1="156" y1="96" x2="226" y2="96"/>
      </g>
      <rect x="170" y="98" width="18" height="10" fill="#0E5C4A" opacity="0.5"/>
      <text x="191" y="124" fontFamily="Inter, sans-serif" fontSize="9" fill="#0E5C4A" textAnchor="middle">Planning</text>
      <rect x="250" y="74" width="46" height="34" rx="3" stroke="#14181A" strokeWidth="1.2"/>
      <circle cx="262" cy="86" r="4" stroke="#14181A" strokeWidth="1.2"/>
      <path d="M252 106 l12 -12 l8 8 l6 -6 l8 10" stroke="#14181A" strokeWidth="1.2"/>
      <text x="273" y="124" fontFamily="Inter, sans-serif" fontSize="9" fill="#6E7377" textAnchor="middle">Photos</text>
    </svg>
  )
}

const schemas = {
  'suivi-production':          PLVSchema,
  'facturation-electronique':  FacturationSchema,
  'erp-administratif':         ERPSchema,
  'gestion-cabinet-comptable': CabinetSchema,
  'suivi-chantier-btp':        ChantierSchema,
}

export function ProjectSchema({ slug }) {
  const Schema = schemas[slug]
  return Schema ? <Schema /> : null
}
