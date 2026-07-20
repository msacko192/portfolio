export const BRAND = 'DJEXA'
export const SITE_URL = 'https://djexa.fr'


export const content = {
  nav: {
    cta: 'Parlons de votre projet',
  },

  hero: {
    badge: 'Applications métier sur mesure',
    eyebrow: 'Studio · Applications métier sur mesure',

    titleLines: ['Votre entreprise', 'est unique.', 'Votre logiciel', "devrait l’être aussi."],

    lede: "Nous créons des logiciels personnalisés qui automatisent vos processus, améliorent votre organisation et donnent à vos équipes les outils adaptés à leur quotidien.",

    cta1: 'Parlons de votre projet',
    cta2: 'Voir nos réalisations',
  },

  problems: {
    title: 'Les outils standards ne correspondent pas toujours à votre façon de travailler.',
    subtitle: 'Voici les signaux que nous entendons le plus souvent dans les PME.',
    cards: [
      {
        title: 'Informations dispersées',
        body: "Vos données sont éparpillées dans des fichiers Excel et des emails. Impossible d'avoir une vue claire.",
      },
      {
        title: 'Tâches manuelles',
        body: "Vos équipes recopient des informations d'un outil à l'autre. Du temps perdu, des erreurs inévitables.",
      },
      {
        title: 'Manque de visibilité',
        body: 'Vous pilotez votre activité sans tableau de bord fiable. Chaque décision se prend dans le flou.',
      },
      {
        title: 'Logiciels inadaptés',
        body: "Les solutions du marché vous obligent à adapter vos processus. C'est l'outil qui devrait s'adapter, pas vous.",
      },
    ],
  },

  solution: {
    title: 'Un logiciel pensé autour de votre entreprise',
    body: 'Chaque entreprise possède ses propres méthodes de travail. Nous concevons des applications adaptées à vos processus afin de simplifier votre quotidien.',
    steps: [
      {
        number: '01',
        title: 'Analyse',
        body: 'Nous prenons le temps de comprendre vos processus, vos contraintes et vos objectifs.',
      },
      {
        number: '02',
        title: 'Conception',
        body: "Nous concevons l'architecture et les interfaces adaptées à votre activité.",
      },
      {
        number: '03',
        title: 'Développement',
        body: "Nous construisons l'application avec les technologies appropriées à votre contexte.",
      },
      {
        number: '04',
        title: 'Mise en production',
        body: 'Nous déployons et configurons votre solution dans votre environnement.',
      },
      {
        number: '05',
        title: 'Accompagnement',
        body: "Nous restons disponibles pour les évolutions, corrections et améliorations.",
      },
    ],
  },

  pricing: {
    title: 'On commence par une journée. Vous décidez ensuite.',
    plans: [
      {
        name: "La journée d'audit",
        tag: 'Pour commencer',
        marker: 'Le point de départ',
        cta: 'En discuter',
        body: 'Nous passons une journée dans vos process. Vous repartez avec un document : ce qui vous coûte du temps, ce qui est automatisable, ce que ça coûterait, dans quel ordre. Déduit de la suite si on continue.',
        featured: false,
      },
      {
        name: 'La régie',
        tag: 'La formule',
        marker: "L'accompagnement continu",
        cta: 'Voir si ça correspond',
        body: "Un jour par semaine réservé, en continu. Évolutions, intégrations, corrections. Votre développeur, sans recrutement ni engagement annuel. Engagement au trimestre.",
        featured: true,
      },
      {
        name: 'Le module cadré',
        tag: 'Périmètre précis',
        marker: 'Un besoin précis',
        cta: 'En discuter',
        body: "Un périmètre précis, une date. Une intégration, un export automatisé, un écran qui manque. Trois à cinq jours.",
        featured: false,
      },
    ],
  },

  projects: {
    title: 'Des solutions déjà développées',
    items: [
      {
        id: 2,
        slug: 'facturation-electronique',
        title: 'Facturation électronique',
        sector: 'Cabinets comptables',
        period: '2025–2026',
        problem: "Un groupe de cabinets comptables devait être prêt pour l'obligation de facturation électronique avant le 1er septembre 2026. Aucun outil du marché ne correspondait à leur organisation.",
        delivered: "L'application émet, envoie et archive les factures électroniques via la plateforme officielle retenue par le cabinet. Elle couvre tout le cycle : création de la facture, envoi, suivi de réception, archivage. Mise en service en sept mois, de la conception à la mise en production.",
        result: "En production avant l'échéance du 1er septembre 2026.",
        note: "La réception de factures électroniques devient obligatoire le 1er septembre 2026 pour toutes les entreprises assujetties à la TVA, l'émission en septembre 2027 pour les TPE/PME. Quasiment aucun prestataire indépendant ne peut écrire « déjà livré en production ».",
        technologies: ['React', 'Hono', 'Cloudflare'],
        featured: true,
      },
      {
        id: 1,
        slug: 'suivi-production',
        title: 'Suivi de production',
        sector: 'Merchandising / PLV',
        period: '2024',
        problem: "Le suivi des projets PLV se gérait par email et tableur. Ni l'équipe ni les clients n'avaient de visibilité claire sur l'état d'avancement de chaque commande.",
        delivered: "Chaque client dispose d'un espace en ligne dédié où il consulte l'avancement de ses commandes en temps réel. L'équipe interne met à jour les étapes au fil de la production, les clients reçoivent une notification automatique à chaque progression, et le responsable pilote l'ensemble depuis un tableau de bord.",
        result: "Visibilité totale sur l'avancement des projets, communication client simplifiée.",
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        featured: false,
      },
      {
        id: 3,
        slug: 'erp-administratif',
        title: 'ERP administratif et financier',
        sector: 'PME de services',
        period: '2024',
        problem: "Devis, factures, relevés bancaires, clients et fournisseurs étaient gérés dans des outils séparés. Impossible d'avoir une vision globale de l'activité sans compiler plusieurs fichiers.",
        delivered: "Un seul outil pour établir les devis, émettre les factures, consulter les mouvements bancaires et catégoriser les dépenses. Les transactions bancaires se synchronisent automatiquement. Clients, fournisseurs et catalogue produits sont gérés au même endroit.",
        result: "Gestion administrative centralisée, tâches manuelles supprimées.",
        technologies: ['React', 'Hono', 'PostgreSQL'],
        featured: false,
      },
      {
        id: 4,
        slug: 'gestion-cabinet-comptable',
        title: 'Application de gestion pour cabinet comptable',
        sector: 'Cabinets comptables',
        period: '2023',
        problem: "Le logiciel de gestion du cabinet était devenu difficile à faire évoluer. Chaque modification prenait du temps et risquait de casser ce qui fonctionnait déjà.",
        delivered: "Le logiciel a été entièrement reconstruit sans interrompre l'activité du cabinet. Les collaborateurs ont continué à travailler normalement pendant toute la durée du projet. Le résultat est un outil plus rapide, plus fiable, et beaucoup plus facile à faire évoluer.",
        result: "Outil modernisé sans interruption de service, évolutions désormais rapides et sans risque.",
        technologies: ['React', 'Hono', 'PostgreSQL'],
        featured: false,
      },
      {
        id: 5,
        slug: 'suivi-chantier-btp',
        title: 'Suivi de chantier BTP',
        sector: 'BTP',
        period: '2025',
        problem: "Le planning des équipes, les comptes-rendus terrain, les documents de chantier et les échanges clients se géraient par téléphone et fichiers partagés. Aucune vision consolidée d'un chantier à l'autre.",
        delivered: "L'application centralise le planning des équipes, le suivi d'avancement par chantier, les documents, les photos terrain et les échanges avec les clients. Chaque chef de chantier dispose d'une vue sur ses interventions en cours.",
        result: "Pilotage de plusieurs chantiers simultanés depuis une seule interface.",
        technologies: ['React', 'Hono', 'Cloudflare'],
        featured: false,
      },
    ],
  },

  sectors: {
    title: 'Des solutions adaptées aux métiers',
    subtitle: 'Chaque secteur possède ses contraintes. Le logiciel est conçu autour de votre réalité.',
    list: [
      {
        name: 'Cabinets comptables',
        body: 'FEC, PCG, liasse fiscale, facturation électronique, gestion multi-cabinet — adapté aux cabinets de toutes tailles.',
      },
      {
        name: 'BTP',
        body: "Suivi de chantier, planning des équipes, gestion documentaire, suivi terrain et relation client.",
      },
      {
        name: 'Merchandising / PLV',
        body: 'Suivi de production, portail client personnalisé, gestion de projets et communications terrain.',
      },
      {
        name: 'PME de services',
        body: "Pilotage de l'activité, facturation, gestion administrative et automatisation des tâches répétitives.",
      },
    ],
  },

  method: {
    title: 'Une méthode rodée',
    steps: [
      {
        number: '01',
        title: 'Comprendre votre activité',
        body: "Avant d'écrire une ligne de code, nous passons du temps à comprendre comment vous travaillez, ce qui fonctionne et ce qui bloque.",
      },
      {
        number: '02',
        title: 'Identifier les gains possibles',
        body: "Nous cartographions ce qui vous coûte du temps, ce qui est automatisable et ce que ça représente concrètement.",
      },
      {
        number: '03',
        title: 'Développer votre solution',
        body: "Nous construisons une application qui s'adapte à vos processus, pas l'inverse. Simple, rapide, efficace.",
      },
      {
        number: '04',
        title: 'Vous accompagner après livraison',
        body: "La relation ne s'arrête pas à la mise en production. Nous restons disponibles pour les évolutions.",
      },
    ],
  },

  technologies: {
    title: 'Une expertise technique au service de vos besoins',
    items: [
      'React',
      'TypeScript',
      'Hono',
      'Cloudflare',
      'Bases de données',
      'API',
      'Stripe',
      'Authentification',
      'Emails transactionnels',
    ],
  },

  contact: {
    title: 'Parlons de votre projet',
    body: "Vous avez une idée d'application ou un processus à améliorer ? Échangeons sur votre besoin et voyons comment le digital peut simplifier votre activité.",
    cta: 'Prendre rendez-vous',
    rgpd: 'Vos données sont utilisées uniquement pour vous recontacter. Elles ne sont ni vendues ni transmises à des tiers, conformément au RGPD.',
    fields: {
      nom: 'Nom',
      entreprise: 'Entreprise',
      email: 'Email',
      telephone: 'Téléphone',
      besoin: 'Décrivez votre besoin',
    },
    success: 'Votre message a bien été envoyé. Nous vous répondrons sous 24 heures.',
    error: "Une erreur s'est produite. Réessayez ou contactez-nous directement.",
  },

  beforeAfter: {
    title: 'Ce qui change, concrètement.',
    before: [
      'Des fichiers Excel qui circulent par email',
      "Des informations recopiées d'un outil à l'autre",
      'Des relances par WhatsApp et par téléphone',
      "Personne ne sait où en est vraiment un dossier",
    ],
    after: [
      'Une seule application, une seule source de vérité',
      'Les données saisies une fois, réutilisées partout',
      'Des notifications automatiques, plus de relances manuelles',
      'Chaque dossier suivi en temps réel, par tous',
    ],
  },

  comparison: {
    title: 'Excel, logiciel standard, ou application sur mesure ?',
    columns: ['Fichiers Excel', 'Logiciel standard', 'Application sur mesure'],
    highlight: 2,
    rows: [
      { criteria: 'Coût de départ',       values: ['Faible', 'Moyen (abonnement)', 'Investissement ponctuel'] },
      { criteria: 'Adapté à VOS process', values: ['Non, vous vous adaptez', 'Partiellement', 'Oui, pensé pour vous'] },
      { criteria: 'Évolue avec vous',     values: ['Non', "Selon l'éditeur", 'Oui, quand vous voulez'] },
      { criteria: "Risque d'erreur",      values: ['Élevé (ressaisies)', 'Moyen', 'Faible (une seule source)'] },
      { criteria: 'Vous en êtes maître',  values: ['Oui mais fragile', 'Non (dépendance éditeur)', 'Oui'] },
    ],
  },

  footer: {
    tagline: "Votre entreprise est unique. Votre logiciel devrait l'être aussi.",
    legal: `© ${new Date().getFullYear()} ${BRAND}. Tous droits réservés.`,
  },
}
