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

    lede: "Votre logiciel fait presque tout — sauf ce que vos clients attendent. Vos équipes ressaisissent les mêmes informations dans trois outils différents. Et chaque fois que vous avez besoin de quelque chose de précis, la réponse c'est : le logiciel ne sait pas faire ça. On développe ce qui manque.",

    cta1: 'Parlons de votre projet',
    cta2: 'Voir nos réalisations',
  },

  problems: {
    title: 'Les outils standards ne correspondent pas toujours à votre façon de travailler.',
    subtitle: 'Voici les signaux que nous entendons le plus souvent dans les entreprises.',
    cards: [
      {
        title: 'Informations dispersées',
        body: "Vos données sont éparpillées dans des fichiers Excel et des emails. Impossible d'avoir une vue claire.",
        solution: 'Une seule source de vérité — toutes vos données centralisées dans un outil unique.',
      },
      {
        title: 'Tâches manuelles',
        body: "Vos équipes recopient des informations d'un outil à l'autre. Du temps perdu, des erreurs inévitables.",
        solution: 'Des processus automatisés — votre équipe se concentre sur ce qui compte vraiment.',
      },
      {
        title: 'Vos clients vous appellent pour savoir où en est leur dossier',
        body: "Votre logiciel est interne. Votre client, lui, n'y a pas accès. Résultat : des appels, des emails, des relances — pour des informations que vous avez déjà.",
        solution: "Un espace client en ligne — il consulte l'avancement, valide, télécharge ses documents. Zéro relance.",
      },
      {
        title: 'Logiciels inadaptés',
        body: "Les solutions du marché vous obligent à adapter vos processus. C'est l'outil qui devrait s'adapter, pas vous.",
        solution: "Un outil pensé pour vous — qui s'adapte à vos méthodes, pas l'inverse.",
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
        context: "Les cabinets comptables français faisaient face à une obligation légale imminente : être prêts pour la facturation électronique avant le 1er septembre 2026. Aucun outil du marché ne correspondait à leur organisation multi-cabinet.",
        problem: "Un groupe de cabinets comptables devait être prêt pour l'obligation de facturation électronique avant le 1er septembre 2026. Aucun outil du marché ne correspondait à leur organisation.",
        delivered: "L'application émet, envoie et archive les factures électroniques via la plateforme officielle retenue par le cabinet. Elle couvre tout le cycle : création de la facture, envoi, suivi de réception, archivage. Mise en service en sept mois, de la conception à la mise en production.",
        result: "En production avant l'échéance du 1er septembre 2026.",
        note: "La réception de factures électroniques devient obligatoire le 1er septembre 2026 pour toutes les entreprises assujetties à la TVA, l'émission en septembre 2027 pour les TPE/PME. Quasiment aucun prestataire indépendant ne peut écrire « déjà livré en production ».",
        fonctionnalites: [
          "Émission de factures électroniques via PDP agréée",
          "Suivi de réception et archivage légal automatique",
          "Interface dédiée par cabinet et collaborateur",
          "Notifications automatiques aux étapes clés",
          "Export conforme Factur-X / UBL 2.1",
          "Tableau de bord de traitement en temps réel",
        ],
        technologies: ['React', 'Hono', 'Cloudflare'],
        featured: true,
      },
      {
        id: 1,
        slug: 'suivi-production',
        title: 'Suivi de production',
        sector: 'Merchandising / PLV',
        period: '2024',
        context: "Une agence de PLV gérait des dizaines de projets simultanément pour des clients comme Renault, LVMH ou Décathlon, sans aucune visibilité partagée sur l'avancement des productions.",
        problem: "Le suivi des projets PLV se gérait par email et tableur. Ni l'équipe ni les clients n'avaient de visibilité claire sur l'état d'avancement de chaque commande.",
        delivered: "Chaque client dispose d'un espace en ligne dédié où il consulte l'avancement de ses commandes en temps réel. L'équipe interne met à jour les étapes au fil de la production, les clients reçoivent une notification automatique à chaque progression, et le responsable pilote l'ensemble depuis un tableau de bord.",
        result: "Visibilité totale sur l'avancement des projets, communication client simplifiée.",
        fonctionnalites: [
          "Espace client dédié par compte avec accès sécurisé",
          "Suivi Kanban par étape de production",
          "Notifications automatiques à chaque avancement",
          "Upload de bons de livraison et visuels",
          "Tableau de bord pilotage pour l'équipe interne",
          "Historique complet des échanges par projet",
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        featured: false,
      },
      {
        id: 3,
        slug: 'erp-administratif',
        title: 'ERP administratif et financier',
        sector: 'Entreprise de services',
        period: '2024',
        context: "Une entreprise de services gérait ses devis, factures, relevés bancaires et fichiers clients dans quatre outils différents sans aucun lien entre eux, ce qui rendait toute vision globale impossible.",
        problem: "Devis, factures, relevés bancaires, clients et fournisseurs étaient gérés dans des outils séparés. Impossible d'avoir une vision globale de l'activité sans compiler plusieurs fichiers.",
        delivered: "Un seul outil pour établir les devis, émettre les factures, consulter les mouvements bancaires et catégoriser les dépenses. Les transactions bancaires se synchronisent automatiquement. Clients, fournisseurs et catalogue produits sont gérés au même endroit.",
        result: "Gestion administrative centralisée, tâches manuelles supprimées.",
        fonctionnalites: [
          "Devis et factures générés en quelques clics",
          "Synchronisation bancaire automatique",
          "Catégorisation des dépenses",
          "Gestion clients et fournisseurs centralisée",
          "Catalogue produits et services",
          "Rapports financiers mensuels automatiques",
        ],
        technologies: ['React', 'Hono', 'PostgreSQL'],
        featured: false,
      },
      {
        id: 4,
        slug: 'gestion-cabinet-comptable',
        title: 'Application de gestion pour cabinet comptable',
        sector: 'Cabinets comptables',
        period: '2023',
        context: "Un cabinet comptable avec plusieurs collaborateurs utilisait un logiciel vieillissant devenu impossible à maintenir sans risquer de bloquer toute l'activité lors des périodes fiscales critiques.",
        problem: "Le logiciel de gestion du cabinet était devenu difficile à faire évoluer. Chaque modification prenait du temps et risquait de casser ce qui fonctionnait déjà.",
        delivered: "Le logiciel a été entièrement reconstruit sans interrompre l'activité du cabinet. Les collaborateurs ont continué à travailler normalement pendant toute la durée du projet. Le résultat est un outil plus rapide, plus fiable, et beaucoup plus facile à faire évoluer.",
        result: "Outil modernisé sans interruption de service, évolutions désormais rapides et sans risque.",
        fonctionnalites: [
          "Gestion des dossiers clients par collaborateur",
          "Suivi des missions et échéances fiscales",
          "Alertes de délais (FEC, liasse, bilan)",
          "Partage de documents sécurisé",
          "Tableau de bord d'avancement des dossiers",
          "Migration progressive sans interruption de service",
        ],
        technologies: ['React', 'Hono', 'PostgreSQL'],
        featured: false,
      },
      {
        id: 5,
        slug: 'suivi-chantier-btp',
        title: 'Suivi de chantier BTP',
        sector: 'BTP',
        period: '2025',
        context: "Une entreprise BTP gérant plusieurs chantiers simultanés perdait le contrôle de ses plannings, de ses équipes terrain et de sa relation client faute d'un outil centralisé.",
        problem: "Le planning des équipes, les comptes-rendus terrain, les documents de chantier et les échanges clients se géraient par téléphone et fichiers partagés. Aucune vision consolidée d'un chantier à l'autre.",
        delivered: "L'application centralise le planning des équipes, le suivi d'avancement par chantier, les documents, les photos terrain et les échanges avec les clients. Chaque chef de chantier dispose d'une vue sur ses interventions en cours.",
        result: "Pilotage de plusieurs chantiers simultanés depuis une seule interface.",
        fonctionnalites: [
          "Planning équipes accessible depuis le terrain",
          "Rapports journaliers avec photos géolocalisées",
          "Suivi d'avancement par chantier",
          "Documents et plans centralisés",
          "Espace client de suivi des travaux",
          "Vue d'ensemble multi-chantiers pour la direction",
        ],
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
        name: 'Entreprise de services',
        body: "Pilotage de l'activité, facturation, gestion administrative et automatisation des tâches répétitives.",
      },
    ],
  },

  method: {
    title: 'De la première discussion au déploiement, sans surprise.',
    steps: [
      {
        number: '01',
        title: 'Découverte',
        body: "Nous comprenons votre métier, vos processus réels et ce qui bloque aujourd'hui.",
      },
      {
        number: '02',
        title: 'Conception',
        body: "Architecture technique et maquettes fonctionnelles. Vous validez avant qu'on code.",
      },
      {
        number: '03',
        title: 'Prototype',
        body: "Un premier écran interactif. Vous testez, vous corrigez — c'est le moment d'affiner.",
      },
      {
        number: '04',
        title: 'Développement',
        body: "Construction incrémentale avec livraisons régulières. Vous voyez l'outil prendre forme.",
      },
      {
        number: '05',
        title: 'Tests',
        body: "Validation métier avec vos équipes sur des cas réels. Rien n'est livré sans avoir été testé.",
      },
      {
        number: '06',
        title: 'Déploiement',
        body: "Mise en production accompagnée. Nous restons disponibles le jour J et après.",
      },
      {
        number: '07',
        title: 'Évolutions',
        body: "L'outil grandit avec votre entreprise. Chaque amélioration part de vos retours terrain.",
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
    title: '15 minutes pour identifier votre prochain gain de temps.',
    body: "Expliquez-nous comment vous travaillez aujourd'hui. Nous vous disons honnêtement si un outil sur mesure peut changer quelque chose — et par où commencer.",
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

  faq: [
    {
      q: 'Combien coûte une application sur mesure ?',
      a: "Le périmètre détermine le prix. Ce qu'on peut garantir : on commence toujours par un périmètre ciblé, livrable rapidement. Le premier échange permet de chiffrer honnêtement — sans engagement.",
    },
    {
      q: 'En combien de temps le logiciel sera prêt ?',
      a: "Vous avez une première version utilisable en 4 à 10 semaines. Nous travaillons par itérations courtes — vous voyez l'avancement chaque semaine.",
    },
    {
      q: 'Faut-il une connaissance technique pour valider ?',
      a: "Non. Nos livrables sont toujours des interfaces testables, pas des spécifications techniques. Vous testez comme un utilisateur, pas comme un développeur.",
    },
    {
      q: "Peut-on faire évoluer l'application après la livraison ?",
      a: "C'est exactement l'intérêt du sur-mesure. Pas de dépendance à un éditeur — l'outil évolue quand vous en avez besoin.",
    },
    {
      q: 'Peut-on commencer par un seul module ?',
      a: "Oui. C'est même notre recommandation. Commencer par un périmètre ciblé permet de valider rapidement et d'itérer en fonction des retours réels.",
    },
  ],

  footer: {
    tagline: "Votre entreprise est unique. Votre logiciel devrait l'être aussi.",
    legal: `© ${new Date().getFullYear()} ${BRAND}. Tous droits réservés.`,
  },
}
