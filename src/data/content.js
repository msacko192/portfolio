export const BRAND = 'DJEXA'
export const SITE_URL = 'https://djexa.fr'

export const content = {
  nav: {
    cta: 'Discuter de votre projet',
  },

  hero: {
    label: 'Développeur indépendant · Applications métier sur mesure',
    headline: 'Votre entreprise est unique.',
    headline2: "Votre logiciel devrait l'être aussi.",
    tension: 'Le logiciel standard vous oblige à vous adapter. Le sur-mesure fait l\'inverse.',
    body: "Je développe des applications métier sur mesure adaptées à votre façon de travailler. J'aide les PME à remplacer leurs fichiers Excel, leurs tâches manuelles et leurs outils dispersés par des solutions simples, rapides et efficaces.",
    cta1: 'Discuter de votre projet',
    cta2: 'Voir mes réalisations',
  },

  problems: {
    title: 'Vos outils actuels vous ralentissent ?',
    cards: [
      {
        title: 'Trop de fichiers Excel',
        body: 'Vos informations sont dispersées et difficiles à suivre.',
      },
      {
        title: 'Tâches répétitives',
        body: 'Vos équipes perdent du temps sur des actions manuelles.',
      },
      {
        title: 'Manque de visibilité',
        body: "Vous n'avez pas une vision claire de votre activité.",
      },
      {
        title: 'Outils inadaptés',
        body: 'Les logiciels standards ne correspondent pas toujours à votre métier.',
      },
    ],
  },

  solution: {
    title: 'Un logiciel pensé autour de votre entreprise',
    body: 'Chaque entreprise possède ses propres méthodes de travail. Je conçois des applications adaptées à vos processus afin de simplifier votre quotidien.',
    steps: [
      {
        number: '01',
        title: 'Analyse',
        body: 'Je prends le temps de comprendre vos processus, vos contraintes et vos objectifs.',
      },
      {
        number: '02',
        title: 'Conception',
        body: "Je conçois l'architecture et les interfaces adaptées à votre activité.",
      },
      {
        number: '03',
        title: 'Développement',
        body: "Je construis l'application avec les technologies appropriées à votre contexte.",
      },
      {
        number: '04',
        title: 'Mise en production',
        body: 'Je déploie et configure votre solution dans votre environnement.',
      },
      {
        number: '05',
        title: 'Accompagnement',
        body: "Je reste disponible pour les évolutions, corrections et améliorations.",
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
        body: 'Je passe une journée dans vos process. Vous repartez avec un document : ce qui vous coûte du temps, ce qui est automatisable, ce que ça coûterait, dans quel ordre. Déduit de la suite si on continue.',
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
        tag: '',
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
        label: 'Mission client',
        labelType: 'mission',
        title: 'Facturation électronique',
        sector: 'Cabinets comptables',
        period: '2025–2026',
        problem: "Un groupe de cabinets comptables devait se conformer à l'obligation de facturation électronique avant l'échéance réglementaire, sans solution adaptée à leur organisation multi-entités.",
        delivered: "Application multi-tenant développée de l'architecture à la mise en production en sept mois. Intégration d'une plateforme de dématérialisation agréée via OAuth 2.1. Formats Factur-X et UBL, interface de gestion et suivi des flux.",
        result: "En production avant l'échéance réglementaire du 1er septembre 2026.",
        note: "La réception de factures électroniques devient obligatoire le 1er septembre 2026 pour toutes les entreprises assujetties à la TVA, l'émission en septembre 2027 pour les TPE/PME. Quasiment aucun prestataire indépendant ne peut écrire « déjà livré en production ».",
        technologies: ['React', 'Hono', 'Cloudflare', 'OAuth 2.1', 'Factur-X', 'UBL'],
        featured: true,
        status: 'delivered',
        hasImage: true,
      },
      {
        id: 1,
        slug: 'suivi-production',
        label: 'Mission client',
        labelType: 'mission',
        title: 'Suivi de production',
        sector: 'Merchandising / PLV',
        period: '2024',
        problem: "Le suivi des projets PLV était géré par email et tableur, sans visibilité partagée avec les clients sur l'état d'avancement.",
        delivered: "Plateforme de suivi de production avec espaces clients personnalisés, suivi d'avancement par étape, gestion des rôles et permissions, notifications temps réel et tableau de bord.",
        result: "Visibilité totale sur l'avancement des projets, communication client simplifiée.",
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        featured: false,
        status: 'delivered',
        hasImage: true,
      },
      {
        id: 3,
        slug: 'erp-administratif',
        label: 'Produit propre',
        labelType: 'product',
        title: 'ERP administratif et financier',
        sector: 'PME de services',
        period: '2024',
        problem: "Devis, factures, trésorerie, clients et fournisseurs gérés dans des outils séparés sans vision consolidée de l'activité.",
        delivered: "ERP couvrant devis, factures, facturation électronique, connexion bancaire et récupération des transactions, catégorisation des dépenses, gestion clients et fournisseurs, import catalogue produits.",
        result: 'Centralisation de la gestion administrative, réduction des tâches manuelles.',
        technologies: ['React', 'Hono', 'PostgreSQL', 'Open Banking'],
        featured: false,
        status: 'delivered',
        hasImage: true,
      },
      {
        id: 4,
        slug: 'gestion-cabinet-comptable',
        label: 'Mission client',
        labelType: 'mission',
        title: 'Application de gestion pour cabinet comptable',
        sector: 'Cabinets comptables',
        period: '2023',
        problem: "Une application de gestion vieillissante, difficile à faire évoluer. Chaque nouvelle fonctionnalité prenait du temps et fragilisait l'existant.",
        delivered: "Migration vers une architecture moderne et découplée : l'interface séparée du moteur de données, chacun pouvant évoluer sans casser l'autre. Reprise des fonctionnalités existantes sans interruption de service.",
        result: "Une base saine, plus rapide à faire évoluer, et des mises à jour sans risque pour l'existant.",
        technologies: ['React', 'Hono', 'TypeScript', 'PostgreSQL'],
        featured: false,
        status: 'delivered',
        hasImage: false,
      },
      {
        id: 5,
        slug: 'suivi-chantier-btp',
        label: 'Produit propre',
        labelType: 'product',
        title: 'Suivi de chantier BTP',
        sector: 'BTP — Étanchéité',
        period: 'En cours',
        problem: "En tant que dirigeant d'une entreprise d'étanchéité, je coordonnais planning, suivi terrain, documents et communication client par téléphone et fichiers partagés.",
        delivered: "Application de gestion de chantier : planning des équipes, suivi d'avancement, gestion documentaire, photos terrain, gestion des clients et tableaux de bord.",
        result: '',
        technologies: ['React', 'Hono', 'Cloudflare'],
        featured: false,
        status: 'in_development',
        hasImage: false,
      },
    ],
  },

  sectors: {
    title: 'Des solutions adaptées aux métiers',
    subtitle: 'Chaque secteur possède ses contraintes. Le logiciel est conçu autour de votre réalité.',
    list: [
      {
        name: 'Cabinets comptables',
        body: 'FEC, PCG, liasse fiscale, facturation électronique, gestion multi-cabinet. Trois références réelles en production.',
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
        body: "Avant d'écrire une ligne de code, je passe du temps à comprendre comment vous travaillez, ce qui fonctionne et ce qui bloque.",
      },
      {
        number: '02',
        title: 'Identifier les gains possibles',
        body: "Je cartographie ce qui vous coûte du temps, ce qui est automatisable et ce que ça représente concrètement.",
      },
      {
        number: '03',
        title: 'Développer votre solution',
        body: "Je construis une application qui s'adapte à vos processus, pas l'inverse. Simple, rapide, efficace.",
      },
      {
        number: '04',
        title: 'Vous accompagner après livraison',
        body: "La relation ne s'arrête pas à la mise en production. Je reste disponible pour les évolutions.",
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
    success: 'Votre message a bien été envoyé. Je vous répondrai sous 24 heures.',
    error: 'Une erreur s\'est produite. Réessayez ou contactez-moi directement.',
  },

  footer: {
    tagline: 'Applications métier sur mesure pour les PME.',
    legal: `© ${new Date().getFullYear()} ${BRAND}. Tous droits réservés.`,
  },
}
