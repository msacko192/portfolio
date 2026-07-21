import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { motion, AnimatePresence, useInView, MotionConfig } from "framer-motion";
import { useLocation, Link, Outlet, useNavigate, useParams, Navigate, Routes, Route } from "react-router-dom";
const BRAND = "DJEXA";
const content = {
  nav: {
    cta: "Parlons de votre projet"
  },
  hero: {
    badge: "Applications métier sur mesure",
    lede: "Nous créons des logiciels personnalisés qui automatisent vos processus, améliorent votre organisation et donnent à vos équipes les outils adaptés à leur quotidien.",
    cta1: "Parlons de votre projet",
    cta2: "Voir nos réalisations"
  },
  problems: {
    title: "Les outils standards ne correspondent pas toujours à votre façon de travailler.",
    subtitle: "Voici les signaux que nous entendons le plus souvent dans les entreprises.",
    cards: [
      {
        title: "Informations dispersées",
        body: "Vos données sont éparpillées dans des fichiers Excel et des emails. Impossible d'avoir une vue claire.",
        solution: "Une seule source de vérité — toutes vos données centralisées dans un outil unique."
      },
      {
        title: "Tâches manuelles",
        body: "Vos équipes recopient des informations d'un outil à l'autre. Du temps perdu, des erreurs inévitables.",
        solution: "Des processus automatisés — votre équipe se concentre sur ce qui compte vraiment."
      },
      {
        title: "Manque de visibilité",
        body: "Vous pilotez votre activité sans tableau de bord fiable. Chaque décision se prend dans le flou.",
        solution: "Des tableaux de bord temps réel — pilotez avec des chiffres fiables à tout moment."
      },
      {
        title: "Logiciels inadaptés",
        body: "Les solutions du marché vous obligent à adapter vos processus. C'est l'outil qui devrait s'adapter, pas vous.",
        solution: "Un outil pensé pour vous — qui s'adapte à vos méthodes, pas l'inverse."
      }
    ]
  },
  projects: {
    title: "Des solutions déjà développées",
    items: [
      {
        id: 2,
        slug: "facturation-electronique",
        title: "Facturation électronique",
        sector: "Cabinets comptables",
        period: "2025–2026",
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
          "Tableau de bord de traitement en temps réel"
        ],
        technologies: ["React", "Hono", "Cloudflare"],
        featured: true
      },
      {
        id: 1,
        slug: "suivi-production",
        title: "Suivi de production",
        sector: "Merchandising / PLV",
        period: "2024",
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
          "Historique complet des échanges par projet"
        ],
        technologies: ["React", "Node.js", "PostgreSQL"],
        featured: false
      },
      {
        id: 3,
        slug: "erp-administratif",
        title: "ERP administratif et financier",
        sector: "Entreprise de services",
        period: "2024",
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
          "Rapports financiers mensuels automatiques"
        ],
        technologies: ["React", "Hono", "PostgreSQL"],
        featured: false
      },
      {
        id: 4,
        slug: "gestion-cabinet-comptable",
        title: "Application de gestion pour cabinet comptable",
        sector: "Cabinets comptables",
        period: "2023",
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
          "Migration progressive sans interruption de service"
        ],
        technologies: ["React", "Hono", "PostgreSQL"],
        featured: false
      },
      {
        id: 5,
        slug: "suivi-chantier-btp",
        title: "Suivi de chantier BTP",
        sector: "BTP",
        period: "2025",
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
          "Vue d'ensemble multi-chantiers pour la direction"
        ],
        technologies: ["React", "Hono", "Cloudflare"],
        featured: false
      }
    ]
  },
  method: {
    title: "De la première discussion au déploiement, sans surprise.",
    steps: [
      {
        number: "01",
        title: "Découverte",
        body: "Nous comprenons votre métier, vos processus réels et ce qui bloque aujourd'hui."
      },
      {
        number: "02",
        title: "Conception",
        body: "Architecture technique et maquettes fonctionnelles. Vous validez avant qu'on code."
      },
      {
        number: "03",
        title: "Prototype",
        body: "Un premier écran interactif. Vous testez, vous corrigez — c'est le moment d'affiner."
      },
      {
        number: "04",
        title: "Développement",
        body: "Construction incrémentale avec livraisons régulières. Vous voyez l'outil prendre forme."
      },
      {
        number: "05",
        title: "Tests",
        body: "Validation métier avec vos équipes sur des cas réels. Rien n'est livré sans avoir été testé."
      },
      {
        number: "06",
        title: "Déploiement",
        body: "Mise en production accompagnée. Nous restons disponibles le jour J et après."
      },
      {
        number: "07",
        title: "Évolutions",
        body: "L'outil grandit avec votre entreprise. Chaque amélioration part de vos retours terrain."
      }
    ]
  },
  contact: {
    title: "Parlons de votre projet",
    body: "Vous avez une idée d'application ou un processus à améliorer ? Échangeons sur votre besoin et voyons comment le digital peut simplifier votre activité.",
    cta: "Prendre rendez-vous",
    rgpd: "Vos données sont utilisées uniquement pour vous recontacter. Elles ne sont ni vendues ni transmises à des tiers, conformément au RGPD.",
    fields: {
      nom: "Nom",
      entreprise: "Entreprise",
      email: "Email",
      telephone: "Téléphone",
      besoin: "Décrivez votre besoin"
    },
    error: "Une erreur s'est produite. Réessayez ou contactez-nous directement."
  },
  comparison: {
    columns: ["Fichiers Excel", "Logiciel standard", "Application sur mesure"],
    highlight: 2,
    rows: [
      { criteria: "Coût de départ", values: ["Faible", "Moyen (abonnement)", "Investissement ponctuel"] },
      { criteria: "Adapté à VOS process", values: ["Non, vous vous adaptez", "Partiellement", "Oui, pensé pour vous"] },
      { criteria: "Évolue avec vous", values: ["Non", "Selon l'éditeur", "Oui, quand vous voulez"] },
      { criteria: "Risque d'erreur", values: ["Élevé (ressaisies)", "Moyen", "Faible (une seule source)"] },
      { criteria: "Vous en êtes maître", values: ["Oui mais fragile", "Non (dépendance éditeur)", "Oui"] }
    ]
  },
  faq: [
    {
      q: "Combien coûte une application sur mesure ?",
      a: "Un premier module ciblé se développe entre 8 000 et 25 000 €. Le périmètre détermine le prix — pas l'envie de facturer plus. Nous vous donnons une estimation honnête dès le premier échange."
    },
    {
      q: "En combien de temps le logiciel sera prêt ?",
      a: "Vous avez une première version utilisable en 4 à 10 semaines. Nous travaillons par itérations courtes — vous voyez l'avancement chaque semaine."
    },
    {
      q: "Faut-il une connaissance technique pour valider ?",
      a: "Non. Nos livrables sont toujours des interfaces testables, pas des spécifications techniques. Vous testez comme un utilisateur, pas comme un développeur."
    },
    {
      q: "Peut-on faire évoluer l'application après la livraison ?",
      a: "C'est exactement l'intérêt du sur-mesure. Pas de dépendance à un éditeur — l'outil évolue quand vous en avez besoin."
    },
    {
      q: "Peut-on commencer par un seul module ?",
      a: "Oui. C'est même notre recommandation. Commencer par un périmètre ciblé permet de valider rapidement et d'itérer en fonction des retours réels."
    }
  ],
  footer: {
    legal: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${BRAND}. Tous droits réservés.`
  }
};
const services = [
  {
    slug: "applications-metier",
    meta: {
      title: "Applications métier sur mesure | DJEXA",
      description: "Studio spécialisé en applications métier sur mesure. ERP, CRM, portail client, gestion de chantier — des logiciels pensés autour de votre façon de travailler."
    },
    hero: {
      eyebrow: "Applications métier",
      title: "Des logiciels pensés autour de votre activité",
      subtitle: "Votre entreprise a des processus qui lui sont propres. Elle mérite un outil qui les respecte — pas un logiciel générique qui vous oblige à changer votre façon de travailler.",
      cta: "Discuter de votre projet"
    },
    intro: {
      title: "Ce que nous développons",
      body: "Nous aidons les entreprises à remplacer les fichiers Excel, les saisies manuelles et les outils dispersés par une application unique, fiable et adaptée à leur métier. Chaque projet part de votre réalité terrain, pas d'un cahier des charges standard."
    },
    services: [
      { slug: "erp-sur-mesure", title: "ERP sur mesure", icon: "⚙️", body: "Un système de gestion intégré calqué sur vos processus réels : achats, stocks, production, facturation." },
      { slug: "portail-client", title: "Portail client", icon: "🔗", body: "Un espace en ligne où vos clients suivent leurs commandes et accèdent à leurs documents sans vous appeler." },
      { slug: "automatisation-processus", title: "Automatisation", icon: "⚡", body: "Éliminez les tâches manuelles répétitives : relances, transferts de données, alertes, rapports automatiques." },
      { slug: "gestion-chantier", title: "Gestion de chantier", icon: "🏗️", body: "Planning, rapports terrain, suivi des travaux — tout centralisé, accessible depuis le bureau ou le chantier." },
      { slug: "gestion-intervention", title: "Gestion des interventions", icon: "🔧", body: "Planification, fiches d'intervention numérique, signature client et rapport auto-généré." },
      { slug: "crm-sur-mesure", title: "CRM sur mesure", icon: "📊", body: "Un CRM épuré, calqué sur votre cycle de vente réel, sans les fonctionnalités inutiles des grandes plateformes." }
    ],
    faq: [
      {
        q: "En quoi une application sur mesure est-elle différente d'un logiciel du marché ?",
        a: "Un logiciel du marché est conçu pour des milliers d'entreprises différentes. Il impose sa logique à votre activité. Une application sur mesure est construite autour de vos processus existants — vous n'avez rien à adapter."
      },
      {
        q: "Est-ce accessible avec un budget limité ?",
        a: "Oui, à condition de commencer par un périmètre bien ciblé. Un MVP (version initiale utile et utilisable) se développe en 4 à 12 semaines. On part de là et on améliore en continu, selon vos retours et votre budget."
      },
      {
        q: "Qui s'occupe de la maintenance après le développement ?",
        a: "Nous proposons un contrat de maintenance évolutive si vous souhaitez faire évoluer l'outil dans le temps. Vous êtes aussi libre de confier la maintenance à un autre développeur — tous les accès vous appartiennent."
      }
    ]
  },
  {
    slug: "erp-sur-mesure",
    benefit: "Centralisez toute votre activité",
    meta: {
      title: "ERP sur mesure | DJEXA",
      description: "ERP sur mesure — un système de gestion intégré conçu autour de vos processus réels, pas des fonctionnalités génériques d'un éditeur. Studio indépendant, délais maîtrisés."
    },
    hero: {
      eyebrow: "ERP sur mesure",
      title: "Un ERP qui suit votre logique, pas l'inverse",
      subtitle: "Les ERP du marché sont conçus pour des milliers d'entreprises différentes. Résultat : vous passez votre temps à contourner l'outil plutôt qu'à travailler avec lui.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Ce qui se passe avec les ERP standard",
      items: [
        {
          title: "Vous payez pour des fonctionnalités inutiles",
          body: "Odoo, SAP, Cegid : des centaines de modules, dont 80 % ne correspondent pas à votre activité. Vous les payez quand même, dans l'abonnement ou dans la complexité."
        },
        {
          title: "Vous contournez l'outil au lieu de travailler avec",
          body: "Export Excel pour calculer quelque chose que le logiciel ne sait pas faire. Saisie en double parce que l'intégration n'est pas prévue. Ces contournements deviennent la norme."
        },
        {
          title: "L'adoption est difficile",
          body: "Une interface surchargée, une logique étrangère à votre métier — vos équipes n'utilisent pas l'outil comme prévu, ou pas du tout."
        }
      ]
    },
    features: {
      title: "Ce que vous obtenez avec un ERP sur mesure",
      items: [
        {
          title: "Tableau de bord pensé pour votre activité",
          body: "Les indicateurs qui comptent pour vous, affichés en temps réel. Pas de données inutiles, pas de tableaux qui ne correspondent à rien."
        },
        {
          title: "Workflows calqués sur vos processus réels",
          body: "Chaque étape de votre activité — commande, production, livraison, facturation — suit la logique que vous avez définie avec vos équipes."
        },
        {
          title: "Modules uniquement pour ce que vous faites",
          body: "Achats, stocks, production, facturation, RH : vous choisissez ce dont vous avez besoin. Rien d'autre."
        },
        {
          title: "Intégrations ciblées",
          body: "Connexion à votre outil de comptabilité, votre CRM, vos fournisseurs — uniquement ce qui est utile pour votre activité."
        }
      ]
    },
    faq: [
      {
        q: "C'est quoi exactement un ERP sur mesure ?",
        a: "Un système de gestion intégré (achats, ventes, stocks, RH, facturation) développé spécifiquement pour les processus de votre entreprise. Pas de fonctionnalités inutiles, pas de logique étrangère à votre métier."
      },
      {
        q: "Pourquoi ne pas prendre Odoo ou Sage plutôt ?",
        a: "Ces solutions conviennent si vos processus sont proches des standards de votre secteur. Si votre activité a une logique propre — cycle de vente atypique, production spécifique, workflow non standard — le sur mesure est plus rentable sur la durée."
      },
      {
        q: "Quel délai pour développer un ERP sur mesure ?",
        a: "Entre 2 et 5 mois selon la complexité. Nous livrons une première version utilisable rapidement, puis l'outil évolue avec vos retours terrain."
      },
      {
        q: "Puis-je faire évoluer l'application avec un autre développeur ?",
        a: "Oui. Tous les accès sont les vôtres dès la livraison. Vous pouvez faire évoluer l'outil avec nous ou avec n'importe quel autre développeur."
      }
    ]
  },
  {
    slug: "portail-client",
    benefit: "Donnez un accès direct à vos clients",
    meta: {
      title: "Portail client sur mesure | DJEXA",
      description: "Donnez à vos clients un espace en ligne pour suivre leurs commandes, accéder aux documents et communiquer avec vos équipes. Moins d'appels, plus de satisfaction client."
    },
    hero: {
      eyebrow: "Portail client",
      title: "Donnez à vos clients une visibilité en temps réel",
      subtitle: "Vos clients vous appellent plusieurs fois par semaine pour savoir où en est leur commande ou leur dossier. Un portail client supprime ces appels et libère vos équipes.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Ce qui se passe sans portail client",
      items: [
        {
          title: "Les coups de téléphone inutiles mobilisent vos équipes",
          body: '"Où en est ma commande ?" "La livraison est pour quand ?" Des questions légitimes, mais qui volent du temps à des personnes qui pourraient avancer leur travail.'
        },
        {
          title: "Le partage de documents par email crée de la confusion",
          body: "Quelle version du devis est la bonne ? L'attestation a été renvoyée mais introuvable. L'historique des échanges est noyé dans des fils de 40 emails."
        },
        {
          title: "Vos clients ont l'impression d'être dans le flou",
          body: "Un client qui doit appeler pour avoir des nouvelles est un client qui se demande si vous gérez bien son dossier. Ce doute coûte des renouvellements et des recommandations."
        }
      ]
    },
    features: {
      title: "Ce que vous obtenez avec un portail client",
      items: [
        {
          title: "Espace personnel sécurisé",
          body: "Chaque client accède à son espace avec ses identifiants. Il voit ses données, pas celles des autres."
        },
        {
          title: "Suivi en temps réel",
          body: "Avancement des commandes, statut des dossiers, planning des interventions — mis à jour automatiquement depuis votre back-office."
        },
        {
          title: "Documents centralisés",
          body: "Devis, factures, rapports, attestations : tout au même endroit, accessible à tout moment depuis un navigateur."
        },
        {
          title: "Messagerie intégrée",
          body: "Communication directe avec vos équipes, avec historique complet et notifications automatiques aux étapes clés."
        }
      ]
    },
    faq: [
      {
        q: "Est-ce que ça nécessite un compte pour chaque client ?",
        a: "Oui, mais l'inscription peut être automatisée : dès qu'une commande est créée dans votre système, le client reçoit son accès par email. Aucune action manuelle requise de votre part."
      },
      {
        q: "Est-ce que c'est sécurisé pour des données sensibles ?",
        a: "Oui. L'accès est authentifié, les données de chaque client sont strictement isolées, et le stockage est chiffré. La conformité RGPD est incluse dans la conception."
      },
      {
        q: "Peut-on connecter ça à notre logiciel existant ?",
        a: "C'est souvent le cas. Le portail client s'alimente depuis votre base de données ou votre logiciel de gestion via une API. Nous faisons un audit de faisabilité en début de projet."
      }
    ]
  },
  {
    slug: "automatisation-processus",
    benefit: "Supprimez les tâches répétitives",
    meta: {
      title: "Automatisation des processus métier | DJEXA",
      description: "Éliminez les tâches manuelles répétitives — saisies en double, relances manuelles, transferts d'information — et concentrez vos équipes sur ce qui a de la valeur."
    },
    hero: {
      eyebrow: "Automatisation",
      title: "Automatisez ce qui vous fait perdre du temps",
      subtitle: "Dans beaucoup d'entreprises, des personnes qualifiées passent des heures chaque semaine à des tâches qui pourraient s'exécuter toutes seules. Ce temps-là a un coût.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Les frictions les plus courantes",
      items: [
        {
          title: "Saisies en double entre plusieurs systèmes",
          body: "Une commande saisie dans le CRM doit être ressaisie dans le logiciel de facturation, puis dans le tableau de suivi Excel. Chaque re-saisie est une source d'erreur."
        },
        {
          title: "Relances qui dépendent de la mémoire de quelqu'un",
          body: "Impayés, devis en attente, renouvellements d'abonnement : si quelqu'un ne pense pas à relancer, rien ne se passe. Et les oublis coûtent de l'argent."
        },
        {
          title: "Rapports et synthèses produits manuellement",
          body: "Consolider les données de plusieurs sources pour produire un tableau de bord mensuel : une demi-journée de travail chaque mois, pour une photo du passé."
        }
      ]
    },
    features: {
      title: "Ce que l'automatisation peut faire pour vous",
      items: [
        {
          title: "Workflows déclenchés par des événements métier",
          body: "Quand une commande est validée, le stock se met à jour, la facture se génère et le client reçoit une confirmation — sans intervention humaine."
        },
        {
          title: "Relances programmées et personnalisées",
          body: "Emails ou SMS de relance automatiques, à la bonne personne, au bon moment, avec les bonnes informations tirées de votre base de données."
        },
        {
          title: "Alertes pour ce qui mérite une attention humaine",
          body: "Tout ce qui peut être automatisé l'est. Ce qui nécessite un jugement humain déclenche une alerte, pas une to-do list qui déborde."
        },
        {
          title: "Connexion entre vos outils existants",
          body: "Vos outils actuels continuent de fonctionner. On les connecte entre eux via des APIs pour supprimer les saisies en double sans tout remplacer."
        }
      ]
    },
    faq: [
      {
        q: "Est-ce qu'on doit tout remplacer pour automatiser ?",
        a: "Non. La plupart du temps, on connecte les outils existants entre eux. L'objectif est de supprimer les frictions, pas de tout refaire."
      },
      {
        q: "Comment identifie-t-on ce qui mérite d'être automatisé ?",
        a: "On commence par un audit rapide de vos processus : quelles tâches sont répétitives, quelle est leur fréquence, quel est leur coût en temps. On priorise ce qui a le meilleur retour sur investissement."
      },
      {
        q: "Que se passe-t-il si un workflow automatisé rencontre un cas non prévu ?",
        a: "On conçoit toujours un mécanisme d'exception : l'automatisation s'arrête et alerte la bonne personne. Aucun processus critique ne tourne en aveugle."
      }
    ]
  },
  {
    slug: "gestion-chantier",
    benefit: "Pilotez vos chantiers en temps réel",
    meta: {
      title: "Logiciel de gestion de chantier sur mesure | DJEXA",
      description: "Application de gestion de chantier sur mesure pour entreprises BTP et artisans — planning partagé, rapports terrain numériques, suivi des travaux, documents chantier centralisés."
    },
    hero: {
      eyebrow: "Gestion de chantier",
      title: "Pilotez vos chantiers depuis une seule interface",
      subtitle: "Rapports papier, photos perdues, planning non partagé, client dans le flou — les chantiers modernes méritent mieux que des outils conçus pour un autre siècle.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Ce qui freine les entreprises du bâtiment",
      items: [
        {
          title: "Le planning existe en plusieurs versions, aucune n'est à jour",
          body: "Le chef de chantier a sa version, le bureau en a une autre. Les modifications ne se propagent pas. Les équipes arrivent sans savoir ce qu'elles doivent faire."
        },
        {
          title: "Les rapports terrain arrivent trop tard et sont incomplets",
          body: "Comptes-rendus sur papier, photos par WhatsApp, appels téléphoniques pour donner les avancements : l'information met des jours à remonter, si elle remonte."
        },
        {
          title: "Les clients sont dans le flou sur l'avancement",
          body: "Un client qui ne sait pas où en sont ses travaux appelle, pousse, stresse. Et quand il est mécontent de l'information, il l'est aussi du chantier."
        }
      ]
    },
    features: {
      title: "Ce que vous obtenez",
      items: [
        {
          title: "Planning partagé en temps réel",
          body: "Les équipes terrain voient leurs tâches du jour sur leur téléphone. Les modifications au bureau se propagent instantanément, sans appel à 7h du matin."
        },
        {
          title: "Rapports journaliers numériques",
          body: "Photo géolocalisée + commentaire = rapport en 2 minutes depuis le chantier. Stocké, horodaté, accessible depuis le bureau immédiatement."
        },
        {
          title: "Suivi des ressources",
          body: "Heures par tâche et par compagnon, matériaux utilisés, présence des sous-traitants — tout tracé sans ressaisie au bureau."
        },
        {
          title: "Visibilité client",
          body: "Un espace de suivi pour vos clients : avancement, photos, planning prévisionnel. Moins d'appels, plus de confiance."
        }
      ]
    },
    faq: [
      {
        q: "Fonctionne-t-il sans connexion internet sur le chantier ?",
        a: "Oui, l'application mobile peut fonctionner hors-ligne. Les données se synchronisent automatiquement dès que la connexion est rétablie."
      },
      {
        q: "Est-ce utilisable sur les smartphones des compagnons ?",
        a: "C'est conçu pour ça. Interface épurée, boutons larges, utilisable avec des gants. Pas besoin de formation longue."
      },
      {
        q: "Peut-on gérer plusieurs chantiers simultanément ?",
        a: "Oui. Le tableau de bord bureau donne une vue d'ensemble de tous les chantiers en cours, avec alertes sur les retards ou problèmes signalés."
      }
    ]
  },
  {
    slug: "gestion-intervention",
    benefit: "Gérez vos interventions sans friction",
    meta: {
      title: "Logiciel de gestion des interventions sur mesure | DJEXA",
      description: "Application de gestion des interventions terrain pour entreprises de maintenance, SAV et dépannage — planification, fiche numérique, signature client, rapport automatique."
    },
    hero: {
      eyebrow: "Gestion des interventions",
      title: "Planifiez et suivez vos interventions terrain",
      subtitle: "Un agenda papier, un technicien qui arrive sans les bonnes infos, un client non prévenu du retard — chaque intervention manquée ou mal gérée coûte de la relation client.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Les problèmes les plus fréquents",
      items: [
        {
          title: "Planification manuelle = erreurs et doubles réservations",
          body: "Agenda partagé par email ou tableau Excel : deux personnes affectées au même créneau, un technicien envoyé sans les bonnes pièces, un client non prévenu."
        },
        {
          title: "Le technicien arrive sans les informations nécessaires",
          body: "Historique du matériel non consulté, pièces non préparées, adresse incertaine. Résultat : intervention incomplète, second passage nécessaire."
        },
        {
          title: "Les rapports d'intervention doivent être ressaisis au bureau",
          body: "Compte-rendu manuscrit remis en fin de journée, ressaisi le lendemain. Perte de temps, erreurs de transcription, et facture qui part avec 3 jours de retard."
        }
      ]
    },
    features: {
      title: "Ce que vous obtenez",
      items: [
        {
          title: "Planning intelligent",
          body: "Affectation par zone géographique, compétence et disponibilité. Visualisation en temps réel de l'emploi du temps de chaque technicien."
        },
        {
          title: "Fiche d'intervention numérique",
          body: "Chaque technicien accède sur son téléphone à l'historique du matériel, à l'adresse, aux pièces à prévoir, et remplit son compte-rendu directement sur place."
        },
        {
          title: "Signature électronique",
          body: "Le client signe sur l'écran du technicien. Le rapport est généré automatiquement et envoyé par email dans la minute qui suit."
        },
        {
          title: "Gestion du stock de pièces",
          body: "Suivi du stock par technicien et par dépôt. Alertes de réapprovisionnement automatiques. Plus d'intervention avortée faute de pièce."
        }
      ]
    },
    faq: [
      {
        q: "Comment les techniciens reçoivent-ils leurs missions ?",
        a: "Par notification sur leur téléphone dès qu'une intervention leur est affectée. Ils voient leur planning de la journée, l'adresse, et les infos du client."
      },
      {
        q: "Peut-on gérer différents types d'interventions ?",
        a: "Oui. Maintenance préventive, dépannage, installation, visite commerciale — chaque type peut avoir son propre formulaire et son propre workflow."
      },
      {
        q: "La facturation peut-elle être automatisée ?",
        a: "Oui. À partir du compte-rendu validé, la facture peut être générée automatiquement et envoyée au client, avec les références de l'intervention."
      }
    ]
  },
  {
    slug: "crm-sur-mesure",
    benefit: "Gérez vos relations clients efficacement",
    meta: {
      title: "CRM sur mesure | DJEXA",
      description: "CRM sur mesure — pipeline commercial adapté à votre cycle de vente, relances automatisées, suivi des prospects et clients, sans la complexité de Salesforce ou HubSpot."
    },
    hero: {
      eyebrow: "CRM sur mesure",
      title: "Un CRM qui parle votre langue commerciale",
      subtitle: "Salesforce, HubSpot, Pipedrive : conçus pour des équipes commerciales de 50 personnes dans des grandes entreprises. Pas pour votre cycle de vente à vous.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Ce qui ne fonctionne pas avec les CRM standard",
      items: [
        {
          title: "Trop complexe pour vos équipes",
          body: "Des dizaines de champs inutiles, une interface surchargée, une logique qui ne correspond pas à votre façon de vendre. Résultat : vos commerciaux n'utilisent pas le CRM."
        },
        {
          title: "Le cycle de vente ne correspond pas au standard",
          body: "Un devis qui se négocie sur 6 mois, une vente qui implique 3 interlocuteurs différents, un renouvellement annuel — les CRM du marché n'ont pas prévu votre logique."
        },
        {
          title: "Les relances dépendent de chaque commercial",
          body: "Pas de process partagé = pas de suivi cohérent. Quand un commercial quitte l'entreprise, ses prospects disparaissent avec lui."
        }
      ]
    },
    features: {
      title: "Ce que vous obtenez avec un CRM sur mesure",
      items: [
        {
          title: "Pipeline calqué sur votre cycle de vente",
          body: "Vos étapes commerciales réelles, dans votre ordre, avec les informations pertinentes à chaque étape. Pas les étapes par défaut d'un éditeur américain."
        },
        {
          title: "Fiche client utile",
          body: "L'historique qui compte vraiment : devis, échanges, relances, commandes, tout au même endroit, accessible en 5 secondes."
        },
        {
          title: "Relances automatiques sans emails génériques",
          body: "Relances programmées à partir des données réelles du prospect : date du dernier contact, montant du devis, secteur d'activité. Personnalisées, pas spam."
        },
        {
          title: "Accessible sur mobile",
          body: "Vos commerciaux terrain saisissent leurs notes après un rendez-vous depuis leur téléphone. Pas de ressaisie au bureau."
        }
      ]
    },
    faq: [
      {
        q: "Peut-on migrer notre base contacts existante ?",
        a: "Oui, la migration depuis Excel, HubSpot ou tout autre système est incluse dans le projet. Vos données existantes ne sont pas perdues."
      },
      {
        q: "Peut-on connecter le CRM à notre logiciel de facturation ?",
        a: "Oui. Quand un prospect devient client, ses informations se synchronisent automatiquement dans votre logiciel de facturation, sans ressaisie."
      },
      {
        q: "Combien d'utilisateurs peut-il gérer ?",
        a: "Il n'y a pas de limite technique. Chaque utilisateur a ses propres droits d'accès : un commercial voit ses prospects, un manager voit tout."
      }
    ]
  },
  {
    slug: "logiciel-btp",
    meta: {
      title: "Logiciel BTP sur mesure | DJEXA",
      description: "Logiciel BTP sur mesure — gestion de chantier, suivi des interventions, facturation à l'avancement, gestion sous-traitants. Conçu pour les entreprises du bâtiment et travaux publics."
    },
    hero: {
      eyebrow: "Logiciel BTP",
      title: "Des outils numériques adaptés aux contraintes du BTP",
      subtitle: "Le bâtiment a ses propres règles : sous-traitance, situations de travaux, documents réglementaires, équipes terrain mobiles. Les logiciels génériques ne sont pas faits pour ça.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Les contraintes spécifiques du BTP que les logiciels génériques ignorent",
      items: [
        {
          title: "La gestion des sous-traitants est complexe",
          body: "Suivi des heures, des attestations, des retenues de garantie, des situations de travaux — aucun logiciel générique ne gère ça correctement sans paramétrage lourd."
        },
        {
          title: "Les documents réglementaires s'accumulent",
          body: "PPSPS, DOE, PGC, déclarations de sous-traitance — produits manuellement, stockés de façon non structurée, difficiles à retrouver en cas de contrôle."
        },
        {
          title: "La facturation à l'avancement nécessite un suivi rigoureux",
          body: "Situations de travaux mensuelles, retenues de garantie, avoirs — une facturation BTP est complexe et l'erreur coûte cher."
        }
      ]
    },
    features: {
      title: "Ce que vous obtenez",
      items: [
        {
          title: "Gestion complète du chantier",
          body: "Planning, ressources humaines, matériaux, engins, sous-traitants — tout dans un seul tableau de bord, avec vue d'ensemble sur tous les chantiers en cours."
        },
        {
          title: "Documents réglementaires intégrés",
          body: "Génération et archivage des PPSPS, DOE, PGC et autres documents obligatoires, directement liés à chaque chantier."
        },
        {
          title: "Facturation à l'avancement",
          body: "Situations de travaux mensuelles générées automatiquement à partir des avancements saisis terrain. Retenues de garantie calculées et suivies."
        },
        {
          title: "Application mobile terrain",
          body: "Utilisable sans connexion sur le chantier. Rapports, photos, relevés d'heures — remontées automatiquement au bureau dès que la 4G revient."
        }
      ]
    },
    faq: [
      {
        q: "Fonctionne-t-il pour les artisans ou seulement les grandes entreprises ?",
        a: "Il est conçu pour les entreprises BTP de toutes tailles. Plus simple et moins cher qu'un ERP générique, mais complet sur ce qui compte pour le bâtiment."
      },
      {
        q: "Peut-on gérer les agréments et qualifications (RGE, etc.) ?",
        a: "Oui, les certifications de l'entreprise et des compagnons peuvent être intégrées avec alertes d'expiration."
      },
      {
        q: "La facturation peut-elle s'interfacer avec notre comptabilité ?",
        a: "Oui. Export vers les principaux logiciels de comptabilité (Sage, Cegid, EBP) ou connexion directe via API selon votre outil."
      }
    ]
  },
  {
    slug: "logiciel-avocat",
    meta: {
      title: "Logiciel de gestion pour cabinet d'avocats sur mesure | DJEXA",
      description: "Logiciel de gestion pour cabinet d'avocats — gestion des dossiers, suivi des délais procéduraux, facturation au temps passé, espace client sécurisé. RGPD by design."
    },
    hero: {
      eyebrow: "Logiciel avocat",
      title: "Gérez votre cabinet avec un outil conçu pour les avocats",
      subtitle: "Excel, Outlook et des classeurs papier pour gérer des dossiers confidentiels : c'est un risque réglementaire et une perte de temps que vous n'avez pas à subir.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Les problèmes concrets dans un cabinet non digitalisé",
      items: [
        {
          title: "Les délais procéduraux gérés manuellement",
          body: "Un délai manqué devant une juridiction peut coûter le dossier. Le suivre dans un tableau Excel ou un agenda papier, c'est prendre un risque inutile."
        },
        {
          title: "La confidentialité des dossiers n'est pas assurée",
          body: "Emails non chiffrés, fichiers partagés sans contrôle d'accès, données clients mélangées dans des boîtes mail partagées — une exposition réelle à des risques de responsabilité."
        },
        {
          title: "La facturation au temps passé est laborieuse",
          body: "Saisir ses heures dans Excel, les consolider en fin de mois, générer la facture manuellement : des heures perdues chaque mois sur une tâche administrative."
        }
      ]
    },
    features: {
      title: "Ce que vous obtenez",
      items: [
        {
          title: "Gestion des dossiers structurée",
          body: "Chaque dossier est classé par matière, client, juridiction. Pièces, actes, correspondances — tout lié au bon dossier, accessible en un clic."
        },
        {
          title: "Alertes sur les délais procéduraux",
          body: "Chaque délai est saisi une fois. L'outil vous alerte à J-15, J-7 et J-1. Plus de délai manqué par oubli."
        },
        {
          title: "Suivi du temps et facturation automatique",
          body: "Chaque collaborateur saisit ses heures par dossier. La facture se génère en un clic, avec le détail des prestations et les honoraires convenus."
        },
        {
          title: "Espace client sécurisé",
          body: "Vos clients consultent leurs documents et l'avancement de leur dossier depuis un espace chiffré, accessible sur ordinateur ou téléphone. RGPD by design."
        }
      ]
    },
    faq: [
      {
        q: "Est-ce conforme aux exigences du RGPD et du secret professionnel ?",
        a: "Oui. La confidentialité est intégrée à la conception : chiffrement des données, accès strictement contrôlé, hébergement en France possible, journalisation des accès."
      },
      {
        q: "Peut-on migrer les dossiers existants ?",
        a: "Oui. Une migration depuis vos fichiers actuels (Excel, PDF, dossiers partagés) est prévue en début de projet pour ne pas repartir de zéro."
      },
      {
        q: "Est-ce utilisable par les collaborateurs et stagiaires avec des droits limités ?",
        a: "Oui, chaque utilisateur a des droits configurables : un collaborateur voit les dossiers qui lui sont affectés, un associé voit tout."
      }
    ]
  },
  {
    slug: "logiciel-merchandising",
    meta: {
      title: "Logiciel de merchandising sur mesure | DJEXA",
      description: "Application de merchandising sur mesure — suivi des implantations, reporting terrain avec photos géolocalisées, KPIs par enseigne et région, tableau de bord direction en temps réel."
    },
    hero: {
      eyebrow: "Logiciel merchandising",
      title: "Suivez chaque implantation, chaque PLV, depuis votre bureau",
      subtitle: "Des équipes terrain qui envoient des rapports par email, des photos dispersées dans des téléphones, une direction qui ne sait pas ce qui se passe en rayon — c'est le quotidien de trop d'entreprises.",
      cta: "Discuter de votre projet"
    },
    problems: {
      title: "Ce qui freine les équipes merchandising",
      items: [
        {
          title: "La consolidation des rapports terrain prend une demi-journée",
          body: "Chaque commercial terrain envoie son Excel, vous les fusionnez à la main, corrigez les formats, calculez les KPIs. C'est chronophage et source d'erreurs."
        },
        {
          title: "Les photos de terrain sont inutilisables",
          body: "Dispersées dans les téléphones, non nommées, non datées, non localisées. Impossible de retrouver rapidement la photo d'un magasin précis à une date donnée."
        },
        {
          title: "La direction n'a pas de visibilité en temps réel",
          body: "Rapport mensuel disponible avec 5 jours de décalage. Si une enseigne n'est pas conforme, vous le découvrez trois semaines après."
        }
      ]
    },
    features: {
      title: "Ce que vous obtenez",
      items: [
        {
          title: "Application mobile pour les équipes terrain",
          body: "Fiche magasin numérique, prise de photos géolocalisées et horodatées, validation de conformité planogramme — depuis le smartphone, en quelques minutes par visite."
        },
        {
          title: "Tableau de bord direction en temps réel",
          body: "KPIs agrégés automatiquement dès que les équipes terrain valident leurs visites. Taux de conformité par enseigne, région, période — sans consolidation manuelle."
        },
        {
          title: "Alertes sur les non-conformités",
          body: "Une implantation non conforme signalée par l'équipe terrain déclenche une alerte immédiate. Vous réagissez en heures, pas en semaines."
        },
        {
          title: "Export clients automatisé",
          body: "Pour les agences PLV : rapports PDF et Excel par client, par enseigne, par période — générés automatiquement sans ressaisie."
        }
      ]
    },
    faq: [
      {
        q: "Peut-on gérer plusieurs clients ou enseignes simultanément ?",
        a: "Oui. Chaque client ou enseigne est isolé dans son propre espace. Les équipes terrain voient les missions qui leur sont affectées, la direction voit tout."
      },
      {
        q: "Est-ce utilisable sans formation longue pour les équipes terrain ?",
        a: "C'est conçu pour ça. Trois écrans, pas de formation nécessaire au-delà d'une démonstration de 30 minutes."
      },
      {
        q: "Peut-on intégrer les planogrammes pour vérification automatique ?",
        a: "Oui, les planogrammes peuvent être intégrés comme référence. L'équipe terrain les consulte sur place et valide poste par poste."
      }
    ]
  }
];
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}
function Logo() {
  return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2.5", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        height: "26",
        viewBox: "44 30 145 140",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        style: { display: "block" },
        children: [
          /* @__PURE__ */ jsx("circle", { cx: "112", cy: "36.3", r: "6.3", fill: "currentColor" }),
          /* @__PURE__ */ jsx("circle", { cx: "157.2", cy: "54.9", r: "8.8", fill: "currentColor" }),
          /* @__PURE__ */ jsx("circle", { cx: "175.7", cy: "100", r: "13.3", fill: "currentColor" }),
          /* @__PURE__ */ jsx("circle", { cx: "157.2", cy: "145.2", r: "8.8", fill: "currentColor" }),
          /* @__PURE__ */ jsx("circle", { cx: "112", cy: "163.7", r: "6.3", fill: "currentColor" }),
          /* @__PURE__ */ jsx("circle", { cx: "66.9", cy: "145.2", r: "4.6", fill: "currentColor" }),
          /* @__PURE__ */ jsx("circle", { cx: "48.3", cy: "100", r: "3.5", fill: "currentColor" }),
          /* @__PURE__ */ jsx("circle", { cx: "66.9", cy: "54.9", r: "4.6", fill: "currentColor" }),
          /* @__PURE__ */ jsx("circle", { cx: "112", cy: "100", r: "19.6", fill: "currentColor" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "font-archivo font-black text-xl tracking-tight leading-none", children: "DJEXA" })
  ] });
}
const NAV_ICONS = {
  "erp-sur-mesure": /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4.5 h-4.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
    /* @__PURE__ */ jsx("path", { d: "M2 17l10 5 10-5" }),
    /* @__PURE__ */ jsx("path", { d: "M2 12l10 5 10-5" })
  ] }),
  "crm-sur-mesure": /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4.5 h-4.5", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M18 20V10M12 20V4M6 20v-6" }) }),
  "portail-client": /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4.5 h-4.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  "automatisation-processus": /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4.5 h-4.5", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }) }),
  "gestion-chantier": /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4.5 h-4.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("path", { d: "M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18zM6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2" }),
    /* @__PURE__ */ jsx("path", { d: "M10 6h4M10 10h4M10 14h4M10 18h4" })
  ] }),
  "gestion-intervention": /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4.5 h-4.5", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" }) })
};
const appsMeta = services.find((s) => s.slug === "applications-metier");
const SERVICE_NAV = (appsMeta?.services ?? []).filter((s) => s.slug !== "applications-metier").slice(0, 6).map((s) => ({ slug: s.slug, title: s.title, desc: s.body.split(".")[0] }));
function ChevronDown({ open }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      className: `transition-transform duration-200 ${open ? "rotate-180" : ""}`,
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx("path", { d: "M2 4l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function HamburgerIcon({ open }) {
  return /* @__PURE__ */ jsxs("span", { className: "flex flex-col justify-center items-center w-5 h-5 gap-[5px]", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("span", { className: `block h-px w-5 bg-current transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}` }),
    /* @__PURE__ */ jsx("span", { className: `block h-px w-5 bg-current transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}` }),
    /* @__PURE__ */ jsx("span", { className: `block h-px w-5 bg-current transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}` })
  ] });
}
function SolutionsDropdown() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 8 },
      transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
      className: "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-white border border-border rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-px bg-border", children: SERVICE_NAV.map((item) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/${item.slug}`,
            className: "flex items-start gap-3 p-4 bg-white hover:bg-section transition-colors duration-150 group",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted group-hover:text-secondary transition-colors duration-150 shrink-0 mt-0.5", children: NAV_ICONS[item.slug] }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "font-inter font-semibold text-sm text-primary group-hover:text-secondary transition-colors duration-150 leading-tight", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted leading-snug mt-0.5", children: item.desc })
              ] })
            ]
          },
          item.slug
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "px-5 py-3 bg-section border-t border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-inter text-xs text-muted", children: "Studio DJEXA · Applications métier sur mesure" }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/applications-metier",
              className: "font-inter text-xs font-medium text-secondary hover:underline flex items-center gap-1",
              children: [
                "Toutes nos solutions",
                /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 5h6M5 2l3 3-3 3", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Navbar() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const showBg = !isHome || scrolled || menuOpen;
  const headerBg = showBg ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]" : "bg-transparent";
  const methodeHref = isHome ? "#methode" : "/#methode";
  const realisationsHref = isHome ? "#realisations" : "/#realisations";
  const contactHref = isHome ? "#contact" : "/#contact";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.header,
      {
        initial: { y: -64, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`,
        children: /* @__PURE__ */ jsxs("div", { className: `mx-auto max-w-7xl px-6 flex items-center gap-8 transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`, children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: "text-secondary hover:text-secondary/80 transition-colors duration-200 shrink-0",
              "aria-label": BRAND,
              children: /* @__PURE__ */ jsx(Logo, {})
            }
          ),
          /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-0.5 flex-1", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                ref: dropdownRef,
                className: "relative",
                onMouseEnter: () => setSolutionsOpen(true),
                onMouseLeave: () => setSolutionsOpen(false),
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setSolutionsOpen((v) => !v),
                      className: "inline-flex items-center gap-1.5 font-inter text-sm font-medium text-muted hover:text-primary px-3 py-2 rounded-lg transition-colors duration-150",
                      "aria-expanded": solutionsOpen,
                      "aria-haspopup": "true",
                      children: [
                        "Solutions",
                        /* @__PURE__ */ jsx(ChevronDown, { open: solutionsOpen })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: solutionsOpen && /* @__PURE__ */ jsx(SolutionsDropdown, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: realisationsHref,
                className: "font-inter text-sm font-medium text-muted hover:text-primary px-3 py-2 rounded-lg transition-colors duration-150",
                children: "Réalisations"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: methodeHref,
                className: "font-inter text-sm font-medium text-muted hover:text-primary px-3 py-2 rounded-lg transition-colors duration-150",
                children: "Méthode"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/blog",
                className: "font-inter text-sm font-medium text-muted hover:text-primary px-3 py-2 rounded-lg transition-colors duration-150",
                children: "Blog"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-3 ml-auto", children: /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: contactHref,
              whileTap: { scale: 0.97 },
              className: "inline-flex items-center gap-2 bg-primary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-secondary hover:scale-[1.02] transition-all duration-200 shrink-0",
              children: [
                content.nav.cta,
                /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6h8M6 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden p-2 -mr-2 ml-auto text-primary transition-colors duration-200",
              onClick: () => setMenuOpen((v) => !v),
              "aria-expanded": menuOpen,
              "aria-label": menuOpen ? "Fermer le menu" : "Ouvrir le menu",
              children: /* @__PURE__ */ jsx(HamburgerIcon, { open: menuOpen })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `md:hidden fixed inset-0 z-40 bg-white flex flex-col transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        "aria-hidden": !menuOpen,
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-16 shrink-0" }),
          /* @__PURE__ */ jsxs("nav", { className: "flex-1 flex flex-col px-6 pt-6 pb-12 gap-0 overflow-y-auto", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "w-full flex items-center justify-between font-archivo font-bold text-2xl tracking-display text-primary py-4 border-b border-border transition-colors duration-150",
                  onClick: () => setMobileSolOpen((v) => !v),
                  "aria-expanded": mobileSolOpen,
                  children: [
                    "Solutions",
                    /* @__PURE__ */ jsx(ChevronDown, { open: mobileSolOpen })
                  ]
                }
              ),
              mobileSolOpen && /* @__PURE__ */ jsxs("div", { className: "flex flex-col pl-4 py-2 mb-1", children: [
                SERVICE_NAV.map((item) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: `/${item.slug}`,
                    className: "flex items-center gap-3 py-2.5 border-b border-border/50 text-muted hover:text-primary transition-colors duration-150",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "shrink-0", children: NAV_ICONS[item.slug] }),
                      /* @__PURE__ */ jsx("span", { className: "font-inter text-base font-medium", children: item.title })
                    ]
                  },
                  item.slug
                )),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/applications-metier",
                    className: "font-inter text-sm text-secondary py-3",
                    children: "Toutes nos solutions →"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: realisationsHref,
                onClick: () => setMenuOpen(false),
                className: "font-archivo font-bold text-2xl tracking-display text-primary py-4 border-b border-border transition-colors duration-150",
                children: "Réalisations"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: methodeHref,
                onClick: () => setMenuOpen(false),
                className: "font-archivo font-bold text-2xl tracking-display text-primary py-4 border-b border-border transition-colors duration-150",
                children: "Méthode"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/blog",
                className: "font-archivo font-bold text-2xl tracking-display text-primary py-4 border-b border-border transition-colors duration-150",
                children: "Blog"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-col gap-3", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: contactHref,
                onClick: () => setMenuOpen(false),
                className: "inline-flex items-center justify-center gap-2 bg-primary text-white font-inter font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors duration-200",
                children: [
                  content.nav.cta,
                  /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6h8M6 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                ]
              }
            ) })
          ] })
        ]
      }
    )
  ] });
}
const ease = [0.22, 1, 0.36, 1];
const DURATION = {
  card: 0.25,
  hero: 0.6
};
const vFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.hero, ease } }
};
const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: delay } }
});
const textReveal = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: delay } }
});
const cardItem = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: DURATION.card * 2.5, ease } }
};
const textLine = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } }
};
const hoverLift = { y: -6, transition: { duration: 0.2, ease: "easeOut" } };
const f = (delay = 0, y = 16) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
});
const SERVICE_LINKS = services.filter((s) => s.slug !== "applications-metier").slice(0, 6).map((s) => ({ label: s.hero.eyebrow || s.meta.title, href: `/${s.slug}` }));
const PROJECT_LINKS = [
  { label: "Facturation électronique", href: "/projets/facturation-electronique" },
  { label: "Suivi de production", href: "/projets/suivi-production" },
  { label: "ERP administratif", href: "/projets/erp-administratif" },
  { label: "Gestion cabinet", href: "/projets/gestion-cabinet-comptable" },
  { label: "Suivi chantier BTP", href: "/projets/suivi-chantier-btp" }
];
const STUDIO_LINKS = [
  { label: "Notre méthode", href: "/#methode" },
  { label: "Blog", href: "/blog" },
  { label: "Toutes nos solutions", href: "/applications-metier" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/politique-de-confidentialite" }
];
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "font-inter text-xs font-semibold text-white/30 uppercase tracking-widest mb-5", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-3", children: links.map((link) => /* @__PURE__ */ jsx("li", { children: link.href.startsWith("http") || link.href.startsWith("/#") ? /* @__PURE__ */ jsx(
      "a",
      {
        href: link.href,
        className: "font-inter text-sm text-white/55 hover:text-white transition-colors duration-200",
        children: link.label
      }
    ) : /* @__PURE__ */ jsx(
      Link,
      {
        to: link.href,
        className: "font-inter text-sm text-white/55 hover:text-white transition-colors duration-200",
        children: link.label
      }
    ) }, link.href)) })
  ] });
}
function Footer() {
  const taglineRef = useRef(null);
  const taglineInView = useInView(taglineRef, { once: true, margin: "-80px 0px" });
  const colsRef = useRef(null);
  const colsInView = useInView(colsRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsxs("footer", { className: "bg-primary", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-white/8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 py-16 md:py-20", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: taglineRef,
        initial: { opacity: 0, y: 24 },
        animate: taglineInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.7, ease },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsxs(
            "p",
            {
              className: "font-archivo font-black text-white tracking-display text-balance leading-[1.06]",
              style: { fontSize: "clamp(2rem, 4vw, 3.5rem)" },
              children: [
                "Votre entreprise est unique.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "Votre logiciel devrait l'être aussi." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/#contact",
                className: "inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors duration-200",
                children: [
                  "Parlons de votre projet",
                  /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6h8M6 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/applications-metier",
                className: "inline-flex items-center font-inter font-medium text-sm text-white/60 hover:text-white transition-colors duration-200",
                children: "Voir nos solutions →"
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 py-14 md:py-16", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: colsRef,
        initial: { opacity: 0, y: 16 },
        animate: colsInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.6, ease, delay: 0.1 },
        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-10",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/",
                className: "text-white hover:text-white/80 transition-colors duration-200 block mb-3",
                "aria-label": BRAND,
                children: /* @__PURE__ */ jsx(Logo, {})
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-white/45 leading-relaxed text-pretty max-w-[28ch] mb-5", children: "Studio de développement logiciel sur mesure." }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:contact@djexa.fr",
                className: "font-inter text-sm text-white/50 hover:text-white transition-colors duration-200 block mb-5",
                children: "contact@djexa.fr"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.linkedin.com/company/djexa",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "DJEXA sur LinkedIn",
                className: "text-white/40 hover:text-white transition-colors duration-200",
                children: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(FooterCol, { title: "Solutions", links: SERVICE_LINKS }),
          /* @__PURE__ */ jsx(FooterCol, { title: "Réalisations", links: PROJECT_LINKS }),
          /* @__PURE__ */ jsx(FooterCol, { title: "Studio", links: STUDIO_LINKS })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-white/25", children: content.footer.legal }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
        /* @__PURE__ */ jsx(Link, { to: "/mentions-legales", className: "font-inter text-xs text-white/25 hover:text-white/50 transition-colors duration-200", children: "Mentions légales" }),
        /* @__PURE__ */ jsx(Link, { to: "/politique-de-confidentialite", className: "font-inter text-xs text-white/25 hover:text-white/50 transition-colors duration-200", children: "Confidentialité" })
      ] })
    ] }) })
  ] });
}
function Layout() {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
        children: /* @__PURE__ */ jsx(Outlet, {})
      },
      pathname
    ) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const SIDEBAR_PRIMARY = [
  { id: "dashboard", label: "Dashboard", active: true, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { id: "commandes", label: "Commandes", active: false, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { id: "clients", label: "Clients", active: false, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
  { id: "produits", label: "Produits", active: false, icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" },
  { id: "rapports", label: "Rapports", active: false, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { id: "projets", label: "Projets", active: false, icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
  { id: "equipe", label: "Équipe", active: false, icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }
];
const SIDEBAR_SECONDARY = [
  { id: "documents", label: "Documents", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
];
const KPI = [
  { value: "84k€", label: "CA mensuel", trend: "+18%", up: true },
  { value: "247", label: "Commandes", trend: "+12%", up: true },
  { value: "97%", label: "Livraisons", trend: "+2%", up: true },
  { value: "4.9", label: "Note client", trend: "↑", up: true }
];
const MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû"];
const CHART_POINTS = [
  { x: 0, y: 37.2 },
  { x: 34.3, y: 27 },
  { x: 68.6, y: 33.6 },
  { x: 102.9, y: 18 },
  { x: 137.1, y: 22.8 },
  { x: 171.4, y: 12 },
  { x: 205.7, y: 19.2 },
  { x: 240, y: 6 }
];
const CHART_LINE = "M 0,37.2 L 34.3,27 L 68.6,33.6 L 102.9,18 L 137.1,22.8 L 171.4,12 L 205.7,19.2 L 240,6";
const CHART_AREA = "M 0,37.2 L 34.3,27 L 68.6,33.6 L 102.9,18 L 137.1,22.8 L 171.4,12 L 205.7,19.2 L 240,6 L 240,60 L 0,60 Z";
const ROWS = [
  { id: "#1847", client: "Dupont SA", amount: "1 240 €", ok: true },
  { id: "#1846", client: "Martin & Co.", amount: "890 €", ok: false },
  { id: "#1845", client: "Leclerc SA", amount: "2 100 €", ok: true }
];
const ACTIVITY = [
  { dot: "bg-secondary", text: "Martin a mis à jour #1849", time: "2min" },
  { dot: "bg-success", text: "Nouvel utilisateur : Sophie D.", time: "8min" },
  { dot: "bg-amber-400", text: "Rapport mensuel généré", time: "1h" }
];
const CALENDAR = [
  { day: "Lun 14", event: "Réunion", color: "bg-secondary" },
  { day: "Mar 15", event: "Audit", color: "bg-[#4F46E5]" },
  { day: "Mer 16", event: null },
  { day: "Jeu 17", event: "Demo", color: "bg-success" },
  { day: "Ven 18", event: null }
];
const TEAM = [
  { initial: "M", bg: "bg-secondary" },
  { initial: "S", bg: "bg-[#4F46E5]" },
  { initial: "T", bg: "bg-amber-500" },
  { initial: "A", bg: "bg-success" }
];
function NavIcon({ path }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "w-3.5 h-3.5 shrink-0",
      children: /* @__PURE__ */ jsx("path", { d: path })
    }
  );
}
function DashboardMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [showNotif, setShowNotif] = useState(false);
  const [notifLoop, setNotifLoop] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const show = setTimeout(() => setShowNotif(true), 2200);
    return () => clearTimeout(show);
  }, [inView]);
  useEffect(() => {
    if (!showNotif) return;
    const hide = setTimeout(() => setShowNotif(false), 3200);
    const again = setTimeout(() => {
      setNotifLoop((n) => n + 1);
      setShowNotif(true);
    }, 5800);
    return () => {
      clearTimeout(hide);
      clearTimeout(again);
    };
  }, [showNotif, notifLoop]);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 28, scale: 0.97 },
      animate: inView ? { opacity: 1, y: 0, scale: 1 } : {},
      transition: { duration: 0.65, ease },
      className: "w-full rounded-2xl overflow-hidden shadow-card-lg ring-1 ring-black/[0.06] bg-white select-none",
      children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: inView ? { opacity: 1 } : {},
            transition: { delay: 0.3, duration: 0.3 },
            className: "bg-gray-50 border-b border-gray-100 px-3 py-2 flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-[5px] shrink-0", children: [
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#FF5F57]" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#FEBC2E]" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#28C840]" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2.5 py-1 w-36", children: [
                /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-2.5 h-2.5 text-gray-400 shrink-0", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "6.5", r: "4", stroke: "currentColor", strokeWidth: "1.4" }),
                  /* @__PURE__ */ jsx("path", { d: "M14 14l-3-3", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-inter leading-none text-gray-400", style: { fontSize: "10px" }, children: "Rechercher..." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: "w-4 h-4 text-gray-500", children: /* @__PURE__ */ jsx("path", { d: "M10 2a6 6 0 00-6 6v1L2.5 11.5A1 1 0 003.5 13h13a1 1 0 001-1.5L16 9V8a6 6 0 00-6-6zM8.5 16.5a1.5 1.5 0 003 0", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }),
                  /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "font-inter font-bold text-white leading-none", style: { fontSize: "7px" }, children: "2" }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "font-inter font-bold text-white leading-none", style: { fontSize: "8px" }, children: "JD" }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex", style: { height: "440px" }, children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: inView ? { opacity: 1 } : {},
              transition: { delay: 0.45, duration: 0.25 },
              className: "bg-gray-50 border-r border-gray-100 w-[132px] shrink-0 flex flex-col py-3 gap-0.5 overflow-hidden",
              children: [
                SIDEBAR_PRIMARY.map((item, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -8 },
                    animate: inView ? { opacity: 1, x: 0 } : {},
                    transition: { delay: 0.55 + i * 0.06, duration: 0.28, ease },
                    className: `mx-2 flex items-center gap-2 px-2 py-1.5 rounded-lg font-inter font-medium cursor-default transition-colors ${item.active ? "bg-secondary/10 text-secondary" : "text-gray-500"}`,
                    style: { fontSize: "11px" },
                    children: [
                      /* @__PURE__ */ jsx(NavIcon, { path: item.icon }),
                      item.label
                    ]
                  },
                  item.id
                )),
                /* @__PURE__ */ jsx("div", { className: "mx-4 my-1 h-px bg-gray-100" }),
                SIDEBAR_SECONDARY.map((item, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -8 },
                    animate: inView ? { opacity: 1, x: 0 } : {},
                    transition: { delay: 1 + i * 0.06, duration: 0.28, ease },
                    className: "mx-2 flex items-center gap-2 px-2 py-1.5 rounded-lg font-inter font-medium text-gray-400 cursor-default",
                    style: { fontSize: "11px" },
                    children: [
                      /* @__PURE__ */ jsx(NavIcon, { path: item.icon }),
                      item.label
                    ]
                  },
                  item.id
                )),
                /* @__PURE__ */ jsxs("div", { className: "mt-auto flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mx-2 flex items-center gap-2 px-2 py-1.5 rounded-lg font-inter font-medium text-gray-400 cursor-default", style: { fontSize: "11px" }, children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "w-3.5 h-3.5 shrink-0",
                        children: [
                          /* @__PURE__ */ jsx("path", { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
                          /* @__PURE__ */ jsx("path", { d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
                        ]
                      }
                    ),
                    "Paramètres"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mx-2 flex items-center gap-2 px-2 py-2 border-t border-gray-100 mt-0.5", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "font-inter font-bold text-secondary", style: { fontSize: "7px" }, children: "JD" }) }),
                    /* @__PURE__ */ jsx("span", { className: "font-inter text-gray-500 truncate", style: { fontSize: "11px" }, children: "Jean Dupont" })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col p-4 overflow-hidden relative", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: -6 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                transition: { delay: 0.5, duration: 0.3, ease },
                className: "flex items-center justify-between mb-3 shrink-0",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-sm text-primary tracking-tight", children: "Tableau de bord" }),
                    /* @__PURE__ */ jsx("p", { className: "font-inter text-muted", style: { fontSize: "10px" }, children: "Juillet 2026" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: inView ? { opacity: 1, scale: 1 } : {},
                      transition: { delay: 0.65, duration: 0.25 },
                      className: "bg-secondary text-white font-inter font-medium px-2.5 py-1.5 rounded-lg cursor-default",
                      style: { fontSize: "10px" },
                      children: "+ Nouvelle commande"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2 mb-3 shrink-0", children: KPI.map((k, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                transition: { delay: 0.85 + i * 0.08, duration: 0.35, ease },
                className: "bg-white border border-gray-100 rounded-xl p-2.5",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "font-archivo font-bold text-sm text-primary leading-none", children: k.value }),
                  /* @__PURE__ */ jsx("p", { className: "font-inter text-muted mt-1 leading-none", style: { fontSize: "9px" }, children: k.label }),
                  /* @__PURE__ */ jsx("p", { className: `font-inter font-medium mt-1 leading-none ${k.up ? "text-success" : "text-red-500"}`, style: { fontSize: "9px" }, children: k.trend })
                ]
              },
              i
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3 shrink-0", children: [
              /* @__PURE__ */ jsx("p", { className: "font-inter text-muted font-medium mb-1.5", style: { fontSize: "10px" }, children: "Chiffre d'affaires — 8 derniers mois" }),
              /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 240 60", className: "w-full", style: { height: "56px" }, preserveAspectRatio: "none", children: [
                /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "chartGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#2563EB", stopOpacity: "0.12" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#2563EB", stopOpacity: "0" })
                ] }) }),
                /* @__PURE__ */ jsx(
                  motion.path,
                  {
                    d: CHART_AREA,
                    fill: "url(#chartGrad)",
                    initial: { opacity: 0 },
                    animate: inView ? { opacity: 1 } : {},
                    transition: { duration: 0.6, delay: 1.8 }
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.path,
                  {
                    d: CHART_LINE,
                    fill: "none",
                    stroke: "#2563EB",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    initial: { pathLength: 0, opacity: 0 },
                    animate: inView ? { pathLength: 1, opacity: 1 } : {},
                    transition: {
                      pathLength: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.3 },
                      opacity: { duration: 0.3, delay: 1.3 }
                    }
                  }
                ),
                CHART_POINTS.map((pt, i) => /* @__PURE__ */ jsx(
                  motion.circle,
                  {
                    cx: pt.x,
                    cy: pt.y,
                    r: "2",
                    fill: "#2563EB",
                    initial: { scale: 0, opacity: 0 },
                    animate: inView ? { scale: 1, opacity: 1 } : {},
                    transition: { duration: 0.2, delay: 1.5 + i * 0.07 }
                  },
                  i
                ))
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center mt-0.5", children: MONTHS.map((m, i) => /* @__PURE__ */ jsx("span", { className: "flex-1 text-center font-inter text-gray-300 tabular leading-none", style: { fontSize: "8px" }, children: m }, i)) })
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: inView ? { opacity: 1 } : {},
                transition: { delay: 1.6, duration: 0.2 },
                className: "border-t border-gray-100 pt-2.5 flex gap-3 flex-1 min-h-0 overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsx("p", { className: "font-inter font-semibold text-primary", style: { fontSize: "10px" }, children: "Dernières commandes" }),
                      /* @__PURE__ */ jsx("span", { className: "font-inter text-secondary cursor-default", style: { fontSize: "10px" }, children: "Voir tout →" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: ROWS.map((row, i) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -6 },
                        animate: inView ? { opacity: 1, x: 0 } : {},
                        transition: { delay: 1.75 + i * 0.07, duration: 0.25, ease },
                        className: `flex items-center gap-2 py-1.5 font-inter ${i < ROWS.length - 1 ? "border-b border-gray-50" : ""}`,
                        style: { fontSize: "10px" },
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "text-muted w-9 shrink-0 tabular", children: row.id }),
                          /* @__PURE__ */ jsx("span", { className: "text-primary font-medium flex-1 min-w-0 truncate", children: row.client }),
                          /* @__PURE__ */ jsx("span", { className: "text-muted tabular shrink-0", children: row.amount }),
                          /* @__PURE__ */ jsx("span", { className: `shrink-0 px-1.5 py-0.5 rounded-full font-medium ${row.ok ? "bg-success/10 text-success" : "bg-amber-50 text-amber-600"}`, style: { fontSize: "8px" }, children: row.ok ? "Livrée" : "En cours" })
                        ]
                      },
                      i
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "w-[38%] border-l border-gray-100 pl-3 min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-inter font-semibold text-primary mb-2", style: { fontSize: "10px" }, children: "Activité" }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2.5", children: ACTIVITY.map((act, i) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0 },
                        animate: inView ? { opacity: 1 } : {},
                        transition: { delay: 1.85 + i * 0.1, duration: 0.25 },
                        className: "flex items-start gap-1.5",
                        children: [
                          /* @__PURE__ */ jsx("div", { className: `w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${act.dot}` }),
                          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsx("p", { className: "font-inter text-primary leading-tight truncate", style: { fontSize: "9px" }, children: act.text }),
                            /* @__PURE__ */ jsxs("p", { className: "font-inter text-gray-300 mt-0.5", style: { fontSize: "8px" }, children: [
                              "il y a ",
                              act.time
                            ] })
                          ] })
                        ]
                      },
                      i
                    )) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { children: showNotif && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.92, y: -4 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.92, y: -4 },
                transition: { duration: 0.28, ease },
                className: "absolute top-4 right-4 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.10)] rounded-xl p-3 flex items-start gap-2.5 max-w-[168px]",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-success/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-3.5 h-3.5 text-success", children: /* @__PURE__ */ jsx("path", { d: "M3 8l3.5 3.5L13 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-inter font-semibold text-xs text-primary leading-tight", children: "Commande créée" }),
                    /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted mt-0.5 leading-tight", children: "#1848 — Moreau & Fils" }),
                    /* @__PURE__ */ jsx("p", { className: "font-inter text-gray-300 mt-1", style: { fontSize: "9px" }, children: "il y a quelques secondes" })
                  ] })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: inView ? { opacity: 1 } : {},
              transition: { delay: 0.8, duration: 0.3 },
              className: "w-[112px] shrink-0 border-l border-gray-100 bg-gray-50/50 py-3 px-2.5 flex flex-col gap-3 overflow-hidden",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-inter font-semibold uppercase tracking-wide text-gray-400 mb-2", style: { fontSize: "8px", letterSpacing: "0.1em" }, children: "Agenda" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1.5", children: CALENDAR.map((entry, i) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: 8 },
                      animate: inView ? { opacity: 1, x: 0 } : {},
                      transition: { delay: 1 + i * 0.07, duration: 0.22, ease },
                      className: "flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "font-inter text-gray-400 w-11 shrink-0 leading-none", style: { fontSize: "9px" }, children: entry.day }),
                        entry.event ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 min-w-0", children: [
                          /* @__PURE__ */ jsx("span", { className: `w-1.5 h-1.5 rounded-full shrink-0 ${entry.color}` }),
                          /* @__PURE__ */ jsx("span", { className: "font-inter text-primary truncate leading-none", style: { fontSize: "9px" }, children: entry.event })
                        ] }) : /* @__PURE__ */ jsx("span", { className: "font-inter text-gray-200 leading-none", style: { fontSize: "9px" }, children: "—" })
                      ]
                    },
                    i
                  )) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "h-px bg-gray-100" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-inter font-semibold uppercase tracking-wide text-gray-400 mb-2", style: { fontSize: "8px", letterSpacing: "0.1em" }, children: "Équipe" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex -space-x-1.5", children: TEAM.map((member, i) => /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { scale: 0 },
                        animate: inView ? { scale: 1 } : {},
                        transition: { delay: 1.4 + i * 0.07, duration: 0.2, ease: [0.34, 1.56, 0.64, 1] },
                        className: `w-5 h-5 rounded-full ${member.bg} flex items-center justify-center ring-1 ring-white font-inter font-bold text-white`,
                        style: { fontSize: "7px" },
                        children: member.initial
                      },
                      i
                    )) }),
                    /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        initial: { opacity: 0 },
                        animate: inView ? { opacity: 1 } : {},
                        transition: { delay: 1.7, duration: 0.2 },
                        className: "ml-2 font-inter text-gray-400",
                        style: { fontSize: "9px" },
                        children: "+6"
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Hero() {
  const { hero } = content;
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-white overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16 md:pt-28 md:pb-20", children: [
    /* @__PURE__ */ jsxs("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "radial-gradient(ellipse 75% 65% at 78% 52%, rgba(37,99,235,0.065) 0%, transparent 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 opacity-[0.28]",
          style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v1H0zM0 0v40h1V0' fill='%23E5E7EB'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6 w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            ...f(0.1),
            className: "inline-flex items-center gap-2 bg-secondary/8 border border-secondary/15 text-secondary text-xs font-inter font-medium px-4 py-1.5 rounded-full mb-8",
            children: [
              /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary shrink-0" }),
              hero.badge
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: "font-archivo font-black leading-[1.05] tracking-display mb-7",
            style: { fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.25rem)" },
            children: [
              /* @__PURE__ */ jsx(motion.span, { ...f(0.22), className: "block text-primary", children: "Votre entreprise est unique." }),
              /* @__PURE__ */ jsx(motion.span, { ...f(0.34), className: "block text-secondary", children: "Votre logiciel devrait l'être aussi." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            ...f(0.48),
            className: "font-inter text-muted leading-[1.8] mb-10 max-w-[44ch]",
            style: { fontSize: "1.0625rem" },
            children: hero.lede
          }
        ),
        /* @__PURE__ */ jsxs(motion.div, { ...f(0.6), className: "flex flex-wrap gap-3 mb-10", children: [
          /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: "#contact",
              whileTap: { scale: 0.97 },
              className: "inline-flex items-center gap-2 bg-primary text-white font-inter font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-secondary transition-all duration-200",
              children: [
                hero.cta1,
                /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2.5 6.5h8M7 2.5l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.a,
            {
              href: "#realisations",
              whileTap: { scale: 0.97 },
              className: "inline-flex items-center gap-2 text-primary border border-border font-inter font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-section hover:border-secondary/30 transition-all duration-200",
              children: hero.cta2
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            ...f(0.72),
            className: "flex items-center gap-6 pt-6 border-t border-border",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-archivo font-black text-primary text-2xl leading-none tabular", children: "20+" }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted mt-1", children: "Projets livrés" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-border shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-archivo font-black text-primary text-2xl leading-none tabular", children: "4–10" }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted mt-1", children: "Semaines de livraison" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-border shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-archivo font-black text-primary text-2xl leading-none", children: "24h" }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted mt-1", children: "Délai de réponse" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 -z-10",
            style: {
              background: "radial-gradient(ellipse 85% 70% at 50% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)",
              filter: "blur(32px)",
              transform: "scale(1.15)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 16 },
            animate: { opacity: 1, scale: 1, y: 0 },
            transition: { duration: 0.8, ease, delay: 0.5 },
            className: "rounded-2xl overflow-hidden border border-border",
            style: {
              transform: "rotate(1deg) translateY(-4px)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10)"
            },
            children: /* @__PURE__ */ jsx(DashboardMockup, {})
          }
        )
      ] }) })
    ] }) })
  ] });
}
const ITEMS = [
  {
    icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
      /* @__PURE__ */ jsx("path", { d: "M2 17l10 5 10-5" }),
      /* @__PURE__ */ jsx("path", { d: "M2 12l10 5 10-5" })
    ] }),
    stat: "20+",
    label: "Projets livrés"
  },
  {
    icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx("path", { d: "M12 8v4l3 3" })
    ] }),
    stat: "4–10",
    label: "Semaines de livraison"
  },
  {
    icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
      /* @__PURE__ */ jsx("path", { d: "M22 4L12 14.01l-3-3" })
    ] }),
    stat: "100%",
    label: "Sur mesure"
  }
];
function TrustPhrase() {
  return /* @__PURE__ */ jsx("section", { className: "bg-section border-y border-border py-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border w-full", children: ITEMS.map((item, i) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      ...f(0.1 + i * 0.1),
      className: "flex items-center gap-3 px-8 py-4 sm:py-0 w-full sm:w-auto justify-center",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-secondary shrink-0", children: item.icon }),
        item.stat && /* @__PURE__ */ jsx("span", { className: "font-archivo font-black text-secondary text-lg leading-none", children: item.stat }),
        /* @__PURE__ */ jsx("span", { className: "font-inter text-sm text-muted", children: item.label })
      ]
    },
    i
  )) }) }) });
}
const ICONS = [
  "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21",
  "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
];
function Problems() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease },
          className: "label text-secondary mb-4",
          children: "Le problème"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 14 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, ease, delay: 0.1 },
          className: "font-archivo font-black text-primary tracking-display text-balance leading-[1.08]",
          style: { fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" },
          children: content.problems.title
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease, delay: 0.2 },
          className: "font-inter text-muted mt-4 leading-relaxed",
          children: content.problems.subtitle
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: gridRef,
        variants: stagger(0.06),
        initial: "hidden",
        animate: gridInView ? "show" : "hidden",
        className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
        children: content.problems.cards.map((card, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: cardItem,
            whileHover: hoverLift,
            className: "bg-white border border-border rounded-2xl p-6 shadow-card cursor-default hover:border-secondary/20 hover:shadow-card-md transition-all duration-200",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.7",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "w-5 h-5 text-red-400",
                  children: /* @__PURE__ */ jsx("path", { d: ICONS[i] })
                }
              ) }),
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-base tracking-tight text-primary mb-2 text-balance leading-snug", children: card.title }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-muted text-sm leading-relaxed text-pretty mb-4", children: card.body }),
              /* @__PURE__ */ jsx("div", { className: "h-px bg-border mb-4" }),
              card.solution && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-inter text-xs font-semibold text-secondary", children: "→ La solution :" }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-sm font-medium text-primary mt-1.5 leading-snug text-balance", children: card.solution })
              ] })
            ]
          },
          i
        ))
      }
    )
  ] }) });
}
function TitleBar({ label }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 border-b border-gray-100 px-3 py-2 flex items-center gap-2.5 shrink-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
      /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#FF5F57]" }),
      /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" }),
      /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#28C840]" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "bg-white border border-gray-200/70 rounded px-3 py-0.5 text-[10px] text-gray-400 font-inter leading-none flex-1 text-center truncate", children: label })
  ] });
}
const KANBAN = [
  {
    col: "À faire",
    count: 3,
    color: "#D97706",
    cards: ["Renault · 100 panneaux", "LVMH · Présentoirs", "Nike · Totems"]
  },
  {
    col: "En cours",
    count: 2,
    color: "#2563EB",
    cards: ["Carrefour · Stand PLV", "Décathlon · Rayonnage"]
  },
  {
    col: "Livré",
    count: 5,
    color: "#10B981",
    cards: ["Leclerc · 60 displays", "BHV · Vitrines", "Sephora · Podiums"],
    done: true
  }
];
function SuiviProductionMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20, scale: 0.97 },
      animate: inView ? { opacity: 1, y: 0, scale: 1 } : {},
      transition: { duration: 0.6, ease },
      className: "w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: inView ? { opacity: 1 } : {},
            transition: { delay: 0.25 },
            children: /* @__PURE__ */ jsx(TitleBar, { label: "Suivi commandes PLV — Kanban" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-gray-50/50", style: { minHeight: "260px" }, children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -6 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { delay: 0.35, duration: 0.3 },
              className: "flex items-center justify-between mb-3",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-xs text-primary", children: "Commandes en cours" }),
                /* @__PURE__ */ jsx("span", { className: "bg-[#D97706]/10 text-[#D97706] font-inter text-[10px] font-semibold px-2 py-0.5 rounded-full", children: "Juillet 2026" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2.5", children: KANBAN.map((col, ci) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { delay: 0.45 + ci * 0.1, duration: 0.35, ease },
              className: "bg-white rounded-xl border border-gray-100 p-2.5 flex flex-col gap-2",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-inter text-[10px] font-semibold text-primary", children: col.col }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white",
                      style: { background: col.color },
                      children: col.count
                    }
                  )
                ] }),
                col.cards.map((card, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 6 },
                    animate: inView ? { opacity: 1, y: 0 } : {},
                    transition: { delay: 0.6 + ci * 0.1 + i * 0.06, duration: 0.28, ease },
                    className: "bg-gray-50 border border-gray-100 rounded-lg p-2 flex items-start gap-1.5",
                    children: [
                      col.done && /* @__PURE__ */ jsx("span", { className: "mt-0.5 shrink-0", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", fill: "none", className: "w-3 h-3", style: { color: col.color }, children: /* @__PURE__ */ jsx("path", { d: "M2 6l2.5 2.5L10 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
                      /* @__PURE__ */ jsx("span", { className: "font-inter text-[10px] text-primary leading-tight", children: card })
                    ]
                  },
                  i
                ))
              ]
            },
            ci
          )) })
        ] })
      ]
    }
  );
}
const INVOICE_LINES = [
  { label: "Comptabilité logicielle 2024", amount: "2 400 €" },
  { label: "Mise à jour SIRET", amount: "180 €" }
];
const STATUS_STEPS = ["Brouillon", "Envoyée", "Reçue ✓"];
function FacturationMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20, scale: 0.97 },
      animate: inView ? { opacity: 1, y: 0, scale: 1 } : {},
      transition: { duration: 0.6, ease },
      className: "w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: inView ? { opacity: 1 } : {},
            transition: { delay: 0.25 },
            children: /* @__PURE__ */ jsx(TitleBar, { label: "Facturation électronique" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-5", style: { minHeight: "260px" }, children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -8 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { delay: 0.35, duration: 0.35, ease },
              className: "flex items-start justify-between mb-5",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-archivo font-black text-sm text-primary tracking-tight", children: "FACTURE" }),
                  /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted", children: "#2024-047 · 14 mars 2025" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-inter text-[10px] text-muted", children: "Dupont & Associés" }),
                  /* @__PURE__ */ jsx("p", { className: "font-inter text-[10px] text-muted", children: "SIRET 123 456 789 00012" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "border border-gray-100 rounded-xl overflow-hidden mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 px-3 py-1.5 grid grid-cols-[1fr_auto] gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-inter text-[10px] font-semibold text-muted uppercase tracking-wide", children: "Prestation" }),
              /* @__PURE__ */ jsx("span", { className: "font-inter text-[10px] font-semibold text-muted uppercase tracking-wide", children: "Montant HT" })
            ] }),
            INVOICE_LINES.map((line, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -8 },
                animate: inView ? { opacity: 1, x: 0 } : {},
                transition: { delay: 0.55 + i * 0.1, duration: 0.3, ease },
                className: "px-3 py-2 grid grid-cols-[1fr_auto] gap-2 border-t border-gray-100",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-inter text-[11px] text-primary", children: line.label }),
                  /* @__PURE__ */ jsx("span", { className: "font-inter text-[11px] text-primary font-medium tabular-nums", children: line.amount })
                ]
              },
              i
            )),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: inView ? { opacity: 1 } : {},
                transition: { delay: 0.75, duration: 0.3 },
                className: "px-3 py-2 border-t border-gray-200 grid grid-cols-[1fr_auto] gap-2 bg-gray-50/80",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-inter text-[11px] font-semibold text-primary", children: "Total TTC" }),
                  /* @__PURE__ */ jsx("span", { className: "font-archivo font-bold text-sm text-primary tabular-nums", children: "2 580 €" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: STATUS_STEPS.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: inView ? { opacity: 1, scale: 1 } : {},
                transition: { delay: 0.9 + i * 0.18, duration: 0.3, ease },
                className: `font-inter text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${i === 2 ? "bg-[#10B981]/12 text-[#10B981]" : i === 1 ? "bg-secondary/10 text-secondary" : "bg-gray-100 text-gray-400"}`,
                children: step
              }
            ),
            i < STATUS_STEPS.length - 1 && /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0 },
                animate: inView ? { opacity: 1 } : {},
                transition: { delay: 0.95 + i * 0.18 },
                className: "text-gray-300 text-xs",
                children: "→"
              }
            )
          ] }, i)) })
        ] })
      ]
    }
  );
}
const ERP_NAV = ["Tableau de bord", "Devis", "Factures", "Banque", "Clients"];
const ERP_KPI = [
  { label: "CA mensuel", value: "34 200€", trend: "+22%" },
  { label: "Devis actifs", value: "12", trend: "+3" },
  { label: "Factures dues", value: "3", trend: "" }
];
const ERP_TRANSACTIONS = [
  { label: "Virement Martin & Co.", amount: "+3 200 €", ok: true },
  { label: "Paiement fournisseur", amount: "−450 €", ok: true },
  { label: "Abonnement SaaS", amount: "−89 €", ok: true }
];
function ERPMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20, scale: 0.97 },
      animate: inView ? { opacity: 1, y: 0, scale: 1 } : {},
      transition: { duration: 0.6, ease },
      className: "w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: inView ? { opacity: 1 } : {},
            transition: { delay: 0.25 },
            children: /* @__PURE__ */ jsx(TitleBar, { label: "ERP Administratif — Tableau de bord" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex", style: { minHeight: "268px" }, children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: inView ? { opacity: 1 } : {},
              transition: { delay: 0.4, duration: 0.25 },
              className: "bg-gray-50 border-r border-gray-100 w-28 shrink-0 py-3",
              children: ERP_NAV.map((item, i) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -6 },
                  animate: inView ? { opacity: 1, x: 0 } : {},
                  transition: { delay: 0.48 + i * 0.07, duration: 0.25, ease },
                  className: `mx-1.5 px-2 py-1.5 rounded-lg text-[10px] font-inter font-medium cursor-default mb-0.5 ${i === 0 ? "bg-secondary/10 text-secondary" : "text-gray-500"}`,
                  children: item
                },
                i
              ))
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 p-3.5 overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2 mb-3.5", children: ERP_KPI.map((k, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                transition: { delay: 0.7 + i * 0.1, duration: 0.3, ease },
                className: "bg-white border border-gray-100 rounded-xl p-2.5",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "font-archivo font-bold text-sm text-primary tabular-nums leading-tight", children: k.value }),
                  /* @__PURE__ */ jsx("p", { className: "font-inter text-[9px] text-muted mt-0.5 leading-tight", children: k.label }),
                  k.trend && /* @__PURE__ */ jsx("p", { className: "font-inter text-[9px] font-semibold mt-1 text-[#10B981] leading-tight", children: k.trend })
                ]
              },
              i
            )) }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: inView ? { opacity: 1 } : {},
                transition: { delay: 1, duration: 0.2 },
                className: "border-t border-gray-100 pt-3",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "font-inter text-[10px] font-semibold text-primary mb-2", children: "Dernières transactions" }),
                  ERP_TRANSACTIONS.map((tx, i) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -6 },
                      animate: inView ? { opacity: 1, x: 0 } : {},
                      transition: { delay: 1.1 + i * 0.08, duration: 0.28, ease },
                      className: `flex items-center justify-between py-1.5 text-[10px] font-inter ${i < ERP_TRANSACTIONS.length - 1 ? "border-b border-gray-50" : ""}`,
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-600 truncate mr-2", children: tx.label }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                          /* @__PURE__ */ jsx("span", { className: `font-medium tabular-nums ${tx.amount.startsWith("+") ? "text-[#10B981]" : "text-primary"}`, children: tx.amount }),
                          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", fill: "none", className: "w-3 h-3 text-[#10B981] shrink-0", children: /* @__PURE__ */ jsx("path", { d: "M2 6l2.5 2.5L10 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                        ] })
                      ]
                    },
                    i
                  ))
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const CABINET_CLIENTS = ["Dupont & Associés", "Martin SARL", "Leclerc SA", "BTP Réunion", "Moreau & Fils"];
const CABINET_DOCS = [
  { label: "FEC 2024", status: "Transmis ✓", ok: true },
  { label: "Bilan 2023", status: "En cours ◐", ok: null },
  { label: "Liasse 2024", status: "À valider ○", ok: false }
];
function CabinetMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20, scale: 0.97 },
      animate: inView ? { opacity: 1, y: 0, scale: 1 } : {},
      transition: { duration: 0.6, ease },
      className: "w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: inView ? { opacity: 1 } : {},
            transition: { delay: 0.25 },
            children: /* @__PURE__ */ jsx(TitleBar, { label: "Gestion Cabinet — Dossiers clients" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex", style: { minHeight: "268px" }, children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: inView ? { opacity: 1 } : {},
              transition: { delay: 0.38 },
              className: "bg-gray-50 border-r border-gray-100 w-36 shrink-0 py-2",
              children: [
                /* @__PURE__ */ jsx("p", { className: "font-inter text-[9px] font-semibold text-muted uppercase tracking-wide px-3 mb-1.5", children: "Clients" }),
                CABINET_CLIENTS.map((client, i) => /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -6 },
                    animate: inView ? { opacity: 1, x: 0 } : {},
                    transition: { delay: 0.45 + i * 0.07, duration: 0.25, ease },
                    className: `mx-1.5 px-2 py-1.5 rounded-lg text-[10px] font-inter cursor-default mb-0.5 ${i === 0 ? "bg-[#10B981]/10 text-[#10B981] font-semibold" : "text-gray-500 hover:bg-white"}`,
                    children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsx("span", { className: `w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? "bg-[#10B981]" : "bg-gray-300"}` }),
                      /* @__PURE__ */ jsx("span", { className: "truncate", children: client })
                    ] })
                  },
                  i
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 p-4 overflow-hidden", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: -6 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                transition: { delay: 0.55, duration: 0.3, ease },
                className: "flex items-start justify-between mb-4",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-sm text-primary", children: "Dupont & Associés" }),
                    /* @__PURE__ */ jsx("p", { className: "font-inter text-[10px] text-muted mt-0.5", children: "SIREN 123 456 789" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "bg-amber-50 text-amber-600 font-inter text-[9px] font-semibold px-2 py-0.5 rounded-full border border-amber-100", children: "2 en retard" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: CABINET_DOCS.map((doc, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 10 },
                animate: inView ? { opacity: 1, x: 0 } : {},
                transition: { delay: 0.7 + i * 0.1, duration: 0.3, ease },
                className: "flex items-center justify-between bg-gray-50 rounded-xl border border-gray-100 px-3 py-2.5",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4 text-gray-400 shrink-0", children: [
                      /* @__PURE__ */ jsx("path", { d: "M9 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V6L9 1z", stroke: "currentColor", strokeWidth: "1.2", strokeLinejoin: "round" }),
                      /* @__PURE__ */ jsx("path", { d: "M9 1v5h5", stroke: "currentColor", strokeWidth: "1.2", strokeLinejoin: "round" })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "font-inter text-[11px] text-primary font-medium", children: doc.label })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: `font-inter text-[10px] font-semibold px-2 py-0.5 rounded-full ${doc.ok === true ? "text-[#10B981] bg-[#10B981]/10" : doc.ok === null ? "text-secondary bg-secondary/10" : "text-gray-400 bg-gray-100"}`, children: doc.status })
                ]
              },
              i
            )) }),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: inView ? { opacity: 1 } : {},
                transition: { delay: 1.05, duration: 0.3 },
                className: "font-inter text-[10px] text-muted mt-3",
                children: "Prochaine échéance · 30 avril 2025"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const CHANTIER_STEPS = [
  { label: "Fondations", done: true },
  { label: "Gros œuvre", done: true },
  { label: "Toiture", done: null },
  { label: "Finitions", done: false }
];
const CHANTIER_TEAM = ["M", "S", "T", "A"];
const CHANTIER_STATS = [
  { icon: "📷", label: "12 photos" },
  { icon: "📋", label: "5 rapports" },
  { icon: "📄", label: "3 devis" }
];
function ChantierMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 20, scale: 0.97 },
      animate: inView ? { opacity: 1, y: 0, scale: 1 } : {},
      transition: { duration: 0.6, ease },
      className: "w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/[0.05] bg-white select-none",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: inView ? { opacity: 1 } : {},
            transition: { delay: 0.25 },
            children: /* @__PURE__ */ jsx(TitleBar, { label: "Suivi Chantier BTP" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-4 md:p-5", style: { minHeight: "268px" }, children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -6 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { delay: 0.35, duration: 0.3, ease },
              className: "flex items-start justify-between mb-4",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-sm text-primary", children: "Résidence Les Pins" }),
                  /* @__PURE__ */ jsx("p", { className: "font-inter text-[10px] text-muted mt-0.5", children: "Bordeaux · Chef de projet : Martin" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-inter text-xs font-bold text-[#C08A2E] bg-[#C08A2E]/10 px-2 py-1 rounded-lg", children: "68%" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-gray-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scaleX: 0 },
              animate: inView ? { scaleX: 1 } : {},
              transition: { delay: 0.5, duration: 0.9, ease },
              style: { transformOrigin: "left", width: "68%" },
              className: "h-full bg-[#C08A2E] rounded-full"
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2 mb-5", children: CHANTIER_STEPS.map((step, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              transition: { delay: 0.7 + i * 0.09, duration: 0.3, ease },
              className: "flex flex-col items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsx("div", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center ${step.done === true ? "bg-[#10B981]/15 border-[#10B981]" : step.done === null ? "bg-secondary/10 border-secondary" : "bg-gray-50 border-gray-200"}`, children: step.done === true ? /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", fill: "none", className: "w-3.5 h-3.5", style: { color: "#10B981" }, children: /* @__PURE__ */ jsx("path", { d: "M2 6l2.5 2.5L10 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) : step.done === null ? /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-secondary" }) : /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-gray-300" }) }),
                /* @__PURE__ */ jsx("span", { className: "font-inter text-[9px] text-muted text-center leading-tight", children: step.label })
              ]
            },
            i
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-inter text-[10px] text-muted", children: "Équipe :" }),
              /* @__PURE__ */ jsx("div", { className: "flex -space-x-1.5", children: CHANTIER_TEAM.map((initial, i) => /* @__PURE__ */ jsx(
                motion.span,
                {
                  initial: { opacity: 0, scale: 0.7 },
                  animate: inView ? { opacity: 1, scale: 1 } : {},
                  transition: { delay: 1 + i * 0.07, duration: 0.25, ease },
                  className: "w-6 h-6 rounded-full bg-[#C08A2E]/15 border border-white flex items-center justify-center font-inter text-[9px] font-bold text-[#C08A2E]",
                  children: initial
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: CHANTIER_STATS.map((s, i) => /* @__PURE__ */ jsxs(
              motion.span,
              {
                initial: { opacity: 0 },
                animate: inView ? { opacity: 1 } : {},
                transition: { delay: 1.2 + i * 0.08 },
                className: "font-inter text-[10px] text-muted",
                children: [
                  s.icon,
                  " ",
                  s.label
                ]
              },
              i
            )) })
          ] })
        ] })
      ]
    }
  );
}
const mockups = {
  "suivi-production": SuiviProductionMockup,
  "facturation-electronique": FacturationMockup,
  "erp-administratif": ERPMockup,
  "gestion-cabinet-comptable": CabinetMockup,
  "suivi-chantier-btp": ChantierMockup
};
function ProjectMockup({ slug }) {
  const Component = mockups[slug];
  return Component ? /* @__PURE__ */ jsx(Component, {}) : null;
}
const TABS = [
  {
    label: "ERP sur mesure",
    sector: "Gestion d'entreprise",
    mockupSlug: "erp-administratif",
    description: "Centralisez devis, factures, clients et dépenses dans un seul outil conçu autour de votre façon de travailler.",
    benefits: ["Saisie unique, données partout", "Tableaux de bord en temps réel", "Aucun module inutile"],
    href: "/erp-sur-mesure"
  },
  {
    label: "Portail client",
    sector: "Relation client",
    mockupSlug: "gestion-cabinet-comptable",
    description: "Donnez à vos clients un espace en ligne pour suivre leurs dossiers, accéder à leurs documents et communiquer avec vos équipes.",
    benefits: ["Moins d'appels entrants", "Accès aux documents 24h/24", "Expérience client professionnelle"],
    href: "/portail-client"
  },
  {
    label: "Automatisation",
    sector: "Productivité",
    mockupSlug: "facturation-electronique",
    description: "Supprimez les ressaisies, les relances manuelles et les transferts d'information entre outils.",
    benefits: ["Zéro double saisie", "Relances automatiques", "Rapports générés automatiquement"],
    href: "/automatisation-processus"
  },
  {
    label: "Gestion de chantier",
    sector: "BTP & Construction",
    mockupSlug: "suivi-chantier-btp",
    description: "Planification, rapports terrain, suivi des travaux — centralisés, accessibles depuis le bureau ou le chantier.",
    benefits: ["Rapports terrain en temps réel", "Suivi des avancements", "Gestion sous-traitants"],
    href: "/gestion-chantier"
  },
  {
    label: "CRM sur mesure",
    sector: "Commercial",
    mockupSlug: "suivi-production",
    description: "Pipeline commercial adapté à votre cycle de vente réel, sans les fonctionnalités inutiles des grandes plateformes.",
    benefits: ["Pipeline adapté à votre cycle", "Relances commerciales automatisées", "Vue 360° de vos clients"],
    href: "/crm-sur-mesure"
  },
  {
    label: "Gestion des interventions",
    sector: "Services terrain",
    mockupSlug: null,
    description: "Planification des techniciens, fiches d'intervention numériques et rapports auto-générés après chaque visite.",
    benefits: ["Planning optimisé", "Signature client sur tablette", "Rapport d'intervention instantané"],
    href: "/gestion-intervention"
  }
];
function MockupPanel({ slug }) {
  if (!slug) return /* @__PURE__ */ jsx(DashboardMockup, {});
  return /* @__PURE__ */ jsx(ProjectMockup, { slug });
}
function SoftwareShowcase() {
  const [active, setActive] = useState(0);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const tab = TABS[active];
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-24 md:py-32 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease },
          className: "label text-secondary mb-4",
          children: "Nos logiciels"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 14 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, ease, delay: 0.1 },
          className: "font-archivo font-black text-primary tracking-display text-balance leading-[1.08]",
          style: { fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" },
          children: "Des interfaces conçues pour vos équipes, pas pour des démos."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: headInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.5, ease, delay: 0.2 },
        className: "flex gap-1.5 flex-wrap justify-center mb-10",
        children: TABS.map((t, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActive(i),
            className: `font-inter text-sm px-4 py-2 rounded-xl transition-all duration-200 ${active === i ? "bg-secondary text-white shadow-sm" : "bg-section text-muted hover:text-primary hover:bg-border/40"}`,
            children: t.label
          },
          i
        ))
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.4, ease },
        className: "grid md:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-border shadow-card-md bg-white min-h-[360px]", children: /* @__PURE__ */ jsx(MockupPanel, { slug: tab.mockupSlug }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "label text-secondary mb-3 block", children: tab.sector }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "font-archivo font-black text-primary tracking-display leading-[1.1] text-balance mb-4",
                style: { fontSize: "clamp(1.5rem, 2.5vw, 2rem)" },
                children: tab.label
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed text-pretty mb-6 max-w-[46ch]", children: tab.description }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2.5 mb-8", children: tab.benefits.map((b, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4 text-secondary shrink-0 mt-0.5", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3 8l3.5 3.5L13 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
              /* @__PURE__ */ jsx("span", { className: "font-inter text-sm text-primary", children: b })
            ] }, i)) }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: tab.href,
                className: "inline-flex items-center gap-2 font-inter font-medium text-sm text-secondary hover:text-secondary/80 transition-colors duration-200",
                children: [
                  "En savoir plus",
                  /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6h8M6 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                ]
              }
            )
          ] })
        ]
      },
      active
    ) })
  ] }) });
}
function CaseStudyRow({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const reversed = index % 2 !== 0;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 24 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.65, ease },
      className: `grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-14 ${index > 0 ? "border-t border-border" : ""} ${reversed ? "md:[direction:rtl]" : ""}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: `rounded-2xl overflow-hidden border border-border shadow-card-md bg-white min-h-[320px] ${reversed ? "[direction:ltr]" : ""}`, children: /* @__PURE__ */ jsx(ProjectMockup, { slug: item.slug }) }),
        /* @__PURE__ */ jsxs("div", { className: reversed ? "[direction:ltr]" : "", children: [
          /* @__PURE__ */ jsx("p", { className: "label text-secondary mb-3", children: item.sector }),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "font-archivo font-black text-primary tracking-display leading-[1.08] text-balance mb-4",
              style: { fontSize: "clamp(1.5rem, 2.8vw, 2rem)" },
              children: item.title
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed text-pretty mb-5 max-w-[52ch]", children: item.result }),
          item.fonctionnalites && /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-1.5 mb-5", children: item.fonctionnalites.slice(0, 3).map((feat, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 font-inter text-sm text-muted", children: [
            /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", fill: "none", className: "w-4 h-4 text-success shrink-0 mt-0.5", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3 8l3.5 3.5L13 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
            feat
          ] }, i)) }),
          item.technologies && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: item.technologies.slice(0, 3).map((tech, i) => /* @__PURE__ */ jsx("span", { className: "bg-section border border-border rounded-full px-2.5 py-0.5 font-inter text-xs text-muted", children: tech }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/projets/${item.slug}`,
                className: "inline-flex items-center gap-2 bg-primary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-secondary hover:scale-[1.02] transition-all duration-200",
                children: [
                  "Voir le projet",
                  /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6h8M6 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "font-inter text-xs text-muted", children: item.period })
          ] })
        ] })
      ]
    }
  );
}
function Projects() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { id: "realisations", className: "bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "mb-4", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease },
          className: "label text-secondary mb-4",
          children: "Réalisations"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 14 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, ease, delay: 0.1 },
          className: "font-archivo font-black text-primary tracking-display text-balance leading-[1.08]",
          style: { fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" },
          children: content.projects.title
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: content.projects.items.map((item, i) => /* @__PURE__ */ jsx(CaseStudyRow, { item, index: i }, item.id)) })
  ] }) });
}
function Method() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px 0px" });
  const { steps } = content.method;
  return /* @__PURE__ */ jsx("section", { id: "methode", className: "bg-section py-24 md:py-32 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "max-w-2xl mb-16", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease },
          className: "label text-secondary mb-4",
          children: "Notre méthode"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 14 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, ease, delay: 0.1 },
          className: "font-archivo font-black text-primary tracking-display text-balance leading-[1.08]",
          style: { fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" },
          children: content.method.title
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: timelineRef,
        className: "overflow-x-auto pb-4 -mx-6 px-6",
        children: /* @__PURE__ */ jsxs("div", { className: "flex min-w-[900px] md:min-w-0 gap-0 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute h-px bg-border", style: { top: "20px", left: "20px", right: "20px" } }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scaleX: 0 },
              animate: timelineInView ? { scaleX: 1 } : { scaleX: 0 },
              transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
              className: "absolute h-px bg-secondary origin-left",
              style: { top: "20px", left: "20px", right: "20px" }
            }
          ),
          steps.map((step, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: timelineInView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.5, ease, delay: 0.15 + i * 0.08 },
              className: "flex-1 flex flex-col items-center text-center px-3 relative",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10 ${i === 0 ? "bg-secondary border-2 border-secondary" : "bg-white border-2 border-border"}`,
                    children: /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `font-archivo font-black text-xs leading-none ${i === 0 ? "text-white" : "text-muted"}`,
                        children: step.number
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "font-archivo font-black text-primary text-sm tracking-display mb-1.5 leading-snug", children: step.title }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted leading-relaxed text-pretty max-w-[120px]", children: step.body })
              ]
            },
            i
          ))
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: timelineInView ? { opacity: 1 } : {},
        transition: { duration: 0.5, ease, delay: 1.2 },
        className: "font-inter text-xs text-muted mt-10 text-center",
        children: "De la première discussion jusqu'au déploiement, vous savez toujours où vous en êtes."
      }
    )
  ] }) });
}
function Comparison() {
  const { comparison } = content;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const hl = comparison.highlight;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      variants: vFadeUp,
      initial: "hidden",
      animate: inView ? "show" : "hidden",
      className: "overflow-x-auto rounded-2xl border border-border",
      children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[480px] border-collapse text-sm font-inter", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "bg-white text-left px-5 py-4 font-semibold text-muted border-b border-border w-[32%]", children: " " }),
          comparison.columns.map((col, i) => /* @__PURE__ */ jsxs(
            "th",
            {
              scope: "col",
              className: [
                "px-5 py-4 text-left font-semibold border-b",
                i === hl ? "bg-secondary/8 text-secondary border-secondary/25" : "bg-white text-muted border-border"
              ].join(" "),
              children: [
                col,
                i === hl && /* @__PURE__ */ jsx("span", { className: "ml-2 inline-block text-xs font-medium bg-secondary/12 text-secondary rounded-full px-2 py-0.5 align-middle", children: "recommandé" })
              ]
            },
            i
          ))
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: comparison.rows.map((row, ri) => /* @__PURE__ */ jsxs("tr", { className: ri % 2 === 0 ? "bg-white" : "bg-section", children: [
          /* @__PURE__ */ jsx(
            "th",
            {
              scope: "row",
              className: "px-5 py-3.5 text-left font-medium text-primary border-b border-border",
              children: row.criteria
            }
          ),
          row.values.map((val, ci) => /* @__PURE__ */ jsx(
            "td",
            {
              className: [
                "px-5 py-3.5 border-b border-border",
                ci === hl ? "text-primary font-medium bg-secondary/5" : "text-muted",
                ri === comparison.rows.length - 1 ? "border-b-0" : ""
              ].join(" "),
              children: val
            },
            ci
          ))
        ] }, ri)) })
      ] })
    }
  );
}
function WhyCustom() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "max-w-2xl mb-12", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease },
          className: "label text-secondary mb-4",
          children: "Pourquoi du sur-mesure"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 14 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, ease, delay: 0.1 },
          className: "font-archivo font-black text-primary tracking-display text-balance leading-[1.08]",
          style: { fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" },
          children: "Pourquoi ne pas utiliser un logiciel standard ?"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease, delay: 0.2 },
          className: "font-inter text-muted leading-relaxed mt-4 max-w-[52ch]",
          children: "Parce que votre entreprise ne fonctionne pas comme les autres."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Comparison, {}),
    /* @__PURE__ */ jsx(
      motion.p,
      {
        ...f(0.3),
        className: "font-inter text-xs text-muted mt-8 max-w-[56ch]",
        children: "Nous ne dénigrons pas les ERP du marché — certains sont excellents. Nous vous aidons à choisir ce qui est vraiment adapté à votre situation."
      }
    )
  ] }) });
}
function Item({ q, a, open, onToggle }) {
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: onToggle,
        className: "w-full flex items-center justify-between gap-4 py-5 text-left group",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-inter font-medium text-primary group-hover:text-secondary transition-colors duration-200 text-sm md:text-base leading-snug", children: q }),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { rotate: open ? 45 : 0 },
              transition: { duration: 0.2, ease },
              className: "shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-secondary group-hover:text-secondary transition-colors duration-200",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M5 1v8M1 5h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.3, ease },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed pb-5 max-w-[62ch]", children: a })
      }
    ) })
  ] });
}
function FAQ$1() {
  const [openIndex, setOpenIndex] = useState(0);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "md:sticky md:top-28", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease },
          className: "label text-secondary mb-4",
          children: "Questions fréquentes"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 14 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, ease, delay: 0.1 },
          className: "font-archivo font-black text-primary tracking-display leading-[1.08] text-balance",
          style: { fontSize: "clamp(1.75rem, 3vw, 2.5rem)" },
          children: "Ce que les dirigeants demandent souvent."
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease, delay: 0.2 },
          className: "font-inter text-muted leading-relaxed mt-4 text-sm",
          children: "Des réponses directes, sans jargon."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: listRef,
        initial: { opacity: 0, y: 20 },
        animate: listInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.6, ease },
        className: "bg-white rounded-2xl border border-border px-6 md:px-8",
        children: content.faq.map((item, i) => /* @__PURE__ */ jsx(
          Item,
          {
            q: item.q,
            a: item.a,
            open: openIndex === i,
            onToggle: () => setOpenIndex(openIndex === i ? -1 : i)
          },
          i
        ))
      }
    )
  ] }) }) });
}
function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsxs("section", { className: "bg-primary relative overflow-hidden py-28 md:py-36", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-0",
        style: {
          background: "radial-gradient(ellipse 70% 80% at 50% 110%, rgba(37,99,235,0.18) 0%, transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-0 opacity-[0.04]",
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v1H0zM0 0v40h1V0' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { ref, className: "mx-auto max-w-4xl px-6 text-center relative z-10", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease },
          className: "label text-secondary mb-6",
          children: "Votre prochain logiciel"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.7, ease, delay: 0.1 },
          className: "font-archivo font-black text-white tracking-display leading-[1.06] text-balance mb-6",
          style: { fontSize: "clamp(2.25rem, 5vw, 3.75rem)" },
          children: "Parlons de votre futur logiciel."
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, ease, delay: 0.22 },
          className: "font-inter text-white/60 leading-relaxed text-balance max-w-[52ch] mx-auto mb-10",
          style: { fontSize: "1.0625rem" },
          children: "Expliquez-nous comment vous travaillez. Nous imaginons l'application qui fera gagner du temps à vos équipes chaque jour."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease, delay: 0.35 },
          className: "flex flex-col sm:flex-row items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                href: "/#contact",
                whileTap: { scale: 0.97 },
                className: "inline-flex items-center gap-2 bg-secondary text-white font-inter font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-secondary/90 transition-all duration-200",
                children: [
                  "Prendre rendez-vous",
                  /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2.5 6.5h8M7 2.5l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/#realisations",
                className: "inline-flex items-center gap-2 border border-white/20 text-white font-inter font-medium text-sm px-7 py-3.5 rounded-xl hover:bg-white/8 transition-all duration-200",
                children: "Découvrir nos réalisations"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: inView ? { opacity: 1 } : {},
          transition: { duration: 0.5, ease, delay: 0.5 },
          className: "font-inter text-xs text-white/30 mt-6",
          children: "Échange sans engagement — réponse sous 24h"
        }
      )
    ] })
  ] });
}
function validate(data) {
  const errors = {};
  if (!data.nom?.trim()) errors.nom = "Requis";
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Adresse email invalide";
  if (!data.besoin?.trim()) errors.besoin = "Requis";
  return errors;
}
function Field({ label, id, type = "text", required, rows, placeholder, error }) {
  const base = "w-full bg-white border border-border text-primary placeholder-muted/50 rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all";
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "block font-inter text-sm font-medium text-primary/80 mb-1.5", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-secondary ml-0.5", children: "*" })
    ] }),
    rows ? /* @__PURE__ */ jsx("textarea", { id, name: id, rows, placeholder, className: base }) : /* @__PURE__ */ jsx("input", { id, name: id, type, placeholder, className: base }),
    error && /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-red-500 mt-1", children: error })
  ] });
}
function Contact() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px 0px" });
  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const fieldErrors = validate(data);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const apiBase = "";
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
      navigate("/confirmation");
    } catch {
      setStatus("error");
      setErrorMessage(content.contact.error);
    }
  }
  const { fields } = content.contact;
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "bg-section py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { ref: headRef, className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease },
          className: "label text-secondary mb-4",
          children: "Contact"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 14 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, ease, delay: 0.1 },
          className: "font-archivo font-black text-primary tracking-display text-balance leading-[1.08]",
          style: { fontSize: "clamp(1.75rem, 3vw, 2.5rem)" },
          children: content.contact.title
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: headInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, ease, delay: 0.2 },
          className: "font-inter text-muted mt-4 leading-relaxed text-pretty",
          children: content.contact.body
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: formRef,
        initial: { opacity: 0, y: 20 },
        animate: formInView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.65, ease, delay: 0.15 },
        className: "max-w-2xl mx-auto bg-white rounded-2xl border border-border shadow-card-md p-8",
        children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(Field, { label: fields.nom, id: "nom", required: true, placeholder: "Jean Dupont", error: errors.nom }),
            /* @__PURE__ */ jsx(Field, { label: fields.entreprise, id: "entreprise", placeholder: "Votre entreprise" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(Field, { label: fields.email, id: "email", type: "email", required: true, placeholder: "jean@exemple.fr", error: errors.email }),
            /* @__PURE__ */ jsx(Field, { label: fields.telephone, id: "telephone", type: "tel", placeholder: "06 00 00 00 00" })
          ] }),
          /* @__PURE__ */ jsx(
            Field,
            {
              label: fields.besoin,
              id: "besoin",
              rows: 4,
              required: true,
              placeholder: "Décrivez brièvement votre besoin ou le processus que vous souhaitez améliorer…",
              error: errors.besoin
            }
          ),
          status === "error" && /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-red-500", children: errorMessage }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mt-1", children: [
            /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted leading-relaxed flex-1", children: content.contact.rgpd }),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                type: "submit",
                disabled: status === "loading",
                whileTap: status !== "loading" ? { scale: 0.97 } : {},
                className: "shrink-0 bg-primary text-white font-inter font-medium text-sm px-7 py-3 rounded-xl hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02]",
                children: status === "loading" ? "Envoi…" : content.contact.cta
              }
            )
          ] })
        ] })
      }
    )
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(TrustPhrase, {}),
    /* @__PURE__ */ jsx(Problems, {}),
    /* @__PURE__ */ jsx(SoftwareShowcase, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Method, {}),
    /* @__PURE__ */ jsx(WhyCustom, {}),
    /* @__PURE__ */ jsx(FAQ$1, {}),
    /* @__PURE__ */ jsx(CTAFinal, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
function PLVSchema() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      viewBox: "0 0 320 150",
      fill: "none",
      overflow: "hidden",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("rect", { width: "320", height: "150", fill: "#F5F4F1" }),
        /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0.5", width: "319", height: "149", stroke: "#DCDAD4", strokeWidth: "1" }),
        /* @__PURE__ */ jsx("rect", { width: "4", height: "150", fill: "#B0723A" }),
        /* @__PURE__ */ jsx("text", { x: "44", y: "46", fontFamily: "Georgia, serif", fontSize: "9", letterSpacing: "0.8", fill: "#B0723A", children: "MISSION CLIENT · MERCHANDISING / PLV" }),
        /* @__PURE__ */ jsxs("g", { strokeWidth: "1.2", children: [
          /* @__PURE__ */ jsx("rect", { x: "44", y: "72", width: "52", height: "60", rx: "3", stroke: "#14181A", fill: "none" }),
          /* @__PURE__ */ jsx("rect", { x: "140", y: "72", width: "52", height: "60", rx: "3", stroke: "#14181A", fill: "none" }),
          /* @__PURE__ */ jsx("rect", { x: "236", y: "72", width: "52", height: "60", rx: "3", stroke: "#0E5C4A", strokeWidth: "1.6", fill: "none" })
        ] }),
        /* @__PURE__ */ jsxs("g", { stroke: "#14181A", strokeWidth: "1", children: [
          /* @__PURE__ */ jsx("line", { x1: "54", y1: "90", x2: "86", y2: "90" }),
          /* @__PURE__ */ jsx("line", { x1: "54", y1: "102", x2: "80", y2: "102" }),
          /* @__PURE__ */ jsx("line", { x1: "150", y1: "90", x2: "182", y2: "90" }),
          /* @__PURE__ */ jsx("line", { x1: "150", y1: "102", x2: "176", y2: "102" })
        ] }),
        /* @__PURE__ */ jsx("path", { d: "M248 102 l7 7 l14 -16", stroke: "#0E5C4A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("rect", { x: "44", y: "122", width: "52", height: "4", rx: "2", fill: "#B0723A" }),
        /* @__PURE__ */ jsx("rect", { x: "140", y: "122", width: "34", height: "4", rx: "2", fill: "#B0723A" }),
        /* @__PURE__ */ jsx("rect", { x: "236", y: "122", width: "52", height: "4", rx: "2", fill: "#0E5C4A" }),
        /* @__PURE__ */ jsxs("g", { stroke: "#B0723A", strokeWidth: "1", strokeDasharray: "3 3", children: [
          /* @__PURE__ */ jsx("line", { x1: "100", y1: "102", x2: "136", y2: "102" }),
          /* @__PURE__ */ jsx("line", { x1: "196", y1: "102", x2: "232", y2: "102" })
        ] })
      ]
    }
  );
}
function FacturationSchema() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      viewBox: "0 0 320 150",
      fill: "none",
      overflow: "hidden",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("rect", { width: "320", height: "150", fill: "#F5F4F1" }),
        /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0.5", width: "319", height: "149", stroke: "#DCDAD4", strokeWidth: "1" }),
        /* @__PURE__ */ jsx("rect", { width: "4", height: "150", fill: "#0E5C4A" }),
        /* @__PURE__ */ jsx("text", { x: "44", y: "46", fontFamily: "Georgia, serif", fontSize: "9", letterSpacing: "0.8", fill: "#0E5C4A", children: "MISSION CLIENT · CABINETS COMPTABLES" }),
        /* @__PURE__ */ jsxs("g", { stroke: "#14181A", strokeWidth: "1.2", children: [
          /* @__PURE__ */ jsx("rect", { x: "44", y: "70", width: "58", height: "70", rx: "2" }),
          /* @__PURE__ */ jsx("line", { x1: "56", y1: "90", x2: "90", y2: "90" }),
          /* @__PURE__ */ jsx("line", { x1: "56", y1: "102", x2: "90", y2: "102" }),
          /* @__PURE__ */ jsx("line", { x1: "56", y1: "114", x2: "82", y2: "114" }),
          /* @__PURE__ */ jsx("line", { x1: "56", y1: "126", x2: "90", y2: "126" })
        ] }),
        /* @__PURE__ */ jsx("line", { x1: "110", y1: "105", x2: "150", y2: "105", stroke: "#6E7377", strokeWidth: "1", strokeDasharray: "3 3" }),
        /* @__PURE__ */ jsxs("g", { stroke: "#14181A", strokeWidth: "1.2", children: [
          /* @__PURE__ */ jsx("circle", { cx: "180", cy: "105", r: "26" }),
          /* @__PURE__ */ jsx("path", { d: "M169 105 l7 7 l15 -16", stroke: "#0E5C4A", fill: "none" })
        ] }),
        /* @__PURE__ */ jsx("line", { x1: "210", y1: "105", x2: "250", y2: "105", stroke: "#6E7377", strokeWidth: "1", strokeDasharray: "3 3" }),
        /* @__PURE__ */ jsxs("g", { stroke: "#0E5C4A", strokeWidth: "1.6", children: [
          /* @__PURE__ */ jsx("rect", { x: "258", y: "70", width: "58", height: "70", rx: "3" }),
          /* @__PURE__ */ jsx("line", { x1: "258", y1: "88", x2: "316", y2: "88" }),
          /* @__PURE__ */ jsx("line", { x1: "270", y1: "106", x2: "310", y2: "106" }),
          /* @__PURE__ */ jsx("line", { x1: "270", y1: "120", x2: "298", y2: "120" })
        ] }),
        /* @__PURE__ */ jsx("circle", { cx: "268", cy: "79", r: "2.5", fill: "#0E5C4A" })
      ]
    }
  );
}
function ERPSchema() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      viewBox: "0 0 320 150",
      fill: "none",
      overflow: "hidden",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("rect", { width: "320", height: "150", fill: "#F5F4F1" }),
        /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0.5", width: "319", height: "149", stroke: "#DCDAD4", strokeWidth: "1" }),
        /* @__PURE__ */ jsx("rect", { width: "4", height: "150", fill: "#3F6DA6" }),
        /* @__PURE__ */ jsx("text", { x: "44", y: "46", fontFamily: "Georgia, serif", fontSize: "9", letterSpacing: "0.8", fill: "#3F6DA6", children: "PRODUIT PROPRE · GESTION FINANCIÈRE" }),
        /* @__PURE__ */ jsx("path", { d: "M60 76 l22 -10 l22 10 v6 h-44 z", stroke: "#14181A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("line", { x1: "66", y1: "88", x2: "66", y2: "112", stroke: "#14181A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("line", { x1: "82", y1: "88", x2: "82", y2: "112", stroke: "#14181A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("line", { x1: "98", y1: "88", x2: "98", y2: "112", stroke: "#14181A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("line", { x1: "58", y1: "112", x2: "106", y2: "112", stroke: "#14181A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("text", { x: "82", y: "130", fontFamily: "Inter, sans-serif", fontSize: "9", fill: "#3F6DA6", textAnchor: "middle", children: "Banque" }),
        /* @__PURE__ */ jsx("path", { d: "M112 96 C 140 96, 150 96, 176 96", stroke: "#3F6DA6", strokeWidth: "1.2", strokeDasharray: "3 3" }),
        /* @__PURE__ */ jsx("rect", { x: "180", y: "66", width: "96", height: "66", rx: "4", stroke: "#0E5C4A", strokeWidth: "1.6" }),
        /* @__PURE__ */ jsx("line", { x1: "180", y1: "84", x2: "276", y2: "84", stroke: "#0E5C4A", strokeWidth: "1.4" }),
        /* @__PURE__ */ jsx("circle", { cx: "192", cy: "75", r: "2.5", fill: "#0E5C4A" }),
        /* @__PURE__ */ jsxs("g", { stroke: "#6E7377", strokeWidth: "1", children: [
          /* @__PURE__ */ jsx("line", { x1: "192", y1: "98", x2: "230", y2: "98" }),
          /* @__PURE__ */ jsx("line", { x1: "192", y1: "110", x2: "264", y2: "110" }),
          /* @__PURE__ */ jsx("line", { x1: "192", y1: "120", x2: "244", y2: "120" })
        ] }),
        /* @__PURE__ */ jsx("rect", { x: "292", y: "72", width: "26", height: "16", rx: "2", fill: "#3F6DA6" }),
        /* @__PURE__ */ jsx("rect", { x: "292", y: "94", width: "26", height: "16", rx: "2", fill: "#3F6DA6", opacity: "0.6" }),
        /* @__PURE__ */ jsx("rect", { x: "292", y: "116", width: "26", height: "16", rx: "2", fill: "#3F6DA6", opacity: "0.35" })
      ]
    }
  );
}
function CabinetSchema() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      viewBox: "0 0 320 150",
      fill: "none",
      overflow: "hidden",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("rect", { width: "320", height: "150", fill: "#F5F4F1" }),
        /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0.5", width: "319", height: "149", stroke: "#DCDAD4", strokeWidth: "1" }),
        /* @__PURE__ */ jsx("rect", { width: "4", height: "150", fill: "#0E5C4A" }),
        /* @__PURE__ */ jsx("text", { x: "44", y: "46", fontFamily: "Georgia, serif", fontSize: "9", letterSpacing: "0.8", fill: "#0E5C4A", children: "MISSION CLIENT · CABINETS COMPTABLES" }),
        /* @__PURE__ */ jsx("rect", { x: "44", y: "74", width: "60", height: "58", rx: "3", stroke: "#9AA0A6", strokeWidth: "1.2", strokeDasharray: "4 3" }),
        /* @__PURE__ */ jsx("text", { x: "74", y: "106", fontFamily: "Inter, sans-serif", fontSize: "9", fill: "#9AA0A6", textAnchor: "middle", children: "monolithe" }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("marker", { id: "marker-cab", viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto", children: /* @__PURE__ */ jsx("path", { d: "M2 1L8 5L2 9", stroke: "#0E5C4A", strokeWidth: "1.5" }) }) }),
        /* @__PURE__ */ jsx("line", { x1: "110", y1: "103", x2: "150", y2: "103", stroke: "#0E5C4A", strokeWidth: "1.4", markerEnd: "url(#marker-cab)" }),
        /* @__PURE__ */ jsx("rect", { x: "158", y: "72", width: "80", height: "28", rx: "3", stroke: "#14181A", strokeWidth: "1.3" }),
        /* @__PURE__ */ jsx("text", { x: "198", y: "90", fontFamily: "Inter, sans-serif", fontSize: "10", fill: "#14181A", textAnchor: "middle", children: "Interface" }),
        /* @__PURE__ */ jsx("rect", { x: "158", y: "108", width: "80", height: "28", rx: "3", stroke: "#0E5C4A", strokeWidth: "1.6" }),
        /* @__PURE__ */ jsx("text", { x: "198", y: "126", fontFamily: "Inter, sans-serif", fontSize: "10", fill: "#0E5C4A", textAnchor: "middle", children: "Moteur données" }),
        /* @__PURE__ */ jsx("line", { x1: "198", y1: "100", x2: "198", y2: "108", stroke: "#6E7377", strokeWidth: "1", strokeDasharray: "3 3" })
      ]
    }
  );
}
function ChantierSchema() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      viewBox: "0 0 320 150",
      fill: "none",
      overflow: "hidden",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("rect", { width: "320", height: "150", fill: "#F5F4F1" }),
        /* @__PURE__ */ jsx("rect", { x: "0.5", y: "0.5", width: "319", height: "149", stroke: "#DCDAD4", strokeWidth: "1" }),
        /* @__PURE__ */ jsx("rect", { width: "4", height: "150", fill: "#C08A2E" }),
        /* @__PURE__ */ jsx("text", { x: "44", y: "46", fontFamily: "Georgia, serif", fontSize: "9", letterSpacing: "0.8", fill: "#C08A2E", children: "PRODUIT PROPRE · BTP" }),
        /* @__PURE__ */ jsxs("g", { stroke: "#14181A", strokeWidth: "1.2", children: [
          /* @__PURE__ */ jsx("path", { d: "M50 128 v-34 l18 -12 l18 12 v34" }),
          /* @__PURE__ */ jsx("line", { x1: "50", y1: "110", x2: "86", y2: "110" }),
          /* @__PURE__ */ jsx("rect", { x: "58", y: "114", width: "8", height: "8" }),
          /* @__PURE__ */ jsx("rect", { x: "70", y: "114", width: "8", height: "8" })
        ] }),
        /* @__PURE__ */ jsx("text", { x: "68", y: "140", fontFamily: "Inter, sans-serif", fontSize: "9", fill: "#C08A2E", textAnchor: "middle", children: "Chantier" }),
        /* @__PURE__ */ jsxs("g", { stroke: "#C08A2E", strokeWidth: "1", strokeDasharray: "3 3", children: [
          /* @__PURE__ */ jsx("line", { x1: "96", y1: "104", x2: "150", y2: "88" }),
          /* @__PURE__ */ jsx("line", { x1: "96", y1: "112", x2: "150", y2: "128" })
        ] }),
        /* @__PURE__ */ jsx("rect", { x: "156", y: "70", width: "70", height: "40", rx: "3", stroke: "#0E5C4A", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxs("g", { stroke: "#0E5C4A", strokeWidth: "1", children: [
          /* @__PURE__ */ jsx("line", { x1: "156", y1: "82", x2: "226", y2: "82" }),
          /* @__PURE__ */ jsx("line", { x1: "168", y1: "82", x2: "168", y2: "110" }),
          /* @__PURE__ */ jsx("line", { x1: "190", y1: "82", x2: "190", y2: "110" }),
          /* @__PURE__ */ jsx("line", { x1: "212", y1: "82", x2: "212", y2: "110" }),
          /* @__PURE__ */ jsx("line", { x1: "156", y1: "96", x2: "226", y2: "96" })
        ] }),
        /* @__PURE__ */ jsx("rect", { x: "170", y: "98", width: "18", height: "10", fill: "#0E5C4A", opacity: "0.5" }),
        /* @__PURE__ */ jsx("text", { x: "191", y: "124", fontFamily: "Inter, sans-serif", fontSize: "9", fill: "#0E5C4A", textAnchor: "middle", children: "Planning" }),
        /* @__PURE__ */ jsx("rect", { x: "250", y: "74", width: "46", height: "34", rx: "3", stroke: "#14181A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("circle", { cx: "262", cy: "86", r: "4", stroke: "#14181A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("path", { d: "M252 106 l12 -12 l8 8 l6 -6 l8 10", stroke: "#14181A", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("text", { x: "273", y: "124", fontFamily: "Inter, sans-serif", fontSize: "9", fill: "#6E7377", textAnchor: "middle", children: "Photos" })
      ]
    }
  );
}
const schemas = {
  "suivi-production": PLVSchema,
  "facturation-electronique": FacturationSchema,
  "erp-administratif": ERPSchema,
  "gestion-cabinet-comptable": CabinetSchema,
  "suivi-chantier-btp": ChantierSchema
};
function ProjectSchema({ slug }) {
  const Schema = schemas[slug];
  return Schema ? /* @__PURE__ */ jsx(Schema, {}) : null;
}
const TOTAL = content.projects.items.length;
function Section$2({ label, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.6, ease },
      children: [
        /* @__PURE__ */ jsx("p", { className: "label text-muted/60 mb-4", children: label }),
        children
      ]
    }
  );
}
function ProjectDetail() {
  const { slug } = useParams();
  const item = content.projects.items.find((p) => p.slug === slug);
  if (!item) return /* @__PURE__ */ jsx(Navigate, { to: "/404", replace: true });
  const position = String(item.id).padStart(2, "0");
  const total = String(TOTAL).padStart(2, "0");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.problem,
    creator: { "@type": "Person", name: "DJEXA" }
  };
  return /* @__PURE__ */ jsxs("main", { className: "bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "h-px bg-border" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 pt-20 pb-28 md:pt-28 md:pb-36", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4, ease },
          className: "flex items-center justify-between mb-10",
          children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/",
                className: "font-inter text-sm text-muted hover:text-secondary transition-colors duration-200 flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M11 7H3M6 4l-3 3 3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
                  "Réalisations"
                ]
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "label text-muted/40", children: [
              position,
              " / ",
              total
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease, delay: 0.1 },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsx("p", { className: "label text-secondary mb-3", children: item.sector }),
            /* @__PURE__ */ jsx(
              "h1",
              {
                className: "font-archivo font-black text-primary tracking-display leading-[1.06] text-balance mb-3",
                style: { fontSize: "clamp(1.875rem, 4vw, 3rem)" },
                children: item.title
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "label text-muted/50", children: item.period })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12", children: [
        item.context && /* @__PURE__ */ jsx(Section$2, { label: "Contexte", children: /* @__PURE__ */ jsx("p", { className: "font-inter text-primary leading-relaxed text-pretty text-lg", children: item.context }) }),
        /* @__PURE__ */ jsx("div", { className: "h-px bg-border" }),
        /* @__PURE__ */ jsx(Section$2, { label: "Le problème", children: /* @__PURE__ */ jsx("p", { className: "font-inter text-primary leading-relaxed text-pretty text-lg", children: item.problem }) }),
        /* @__PURE__ */ jsx("div", { className: "h-px bg-border" }),
        /* @__PURE__ */ jsxs(Section$2, { label: "Ce qui a été mis en place", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.98 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true, margin: "-40px 0px" },
              transition: { duration: 0.6, ease, delay: 0.1 },
              className: "mb-6 border border-border rounded-2xl overflow-hidden",
              children: /* @__PURE__ */ jsx(ProjectSchema, { slug: item.slug })
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed text-pretty text-lg", children: item.delivered })
        ] }),
        item.fonctionnalites && item.fonctionnalites.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "h-px bg-border" }),
          /* @__PURE__ */ jsx(Section$2, { label: "Fonctionnalités clés", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: item.fonctionnalites.map((feat, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", fill: "none", className: "w-3 h-3 text-secondary", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6l2.5 2.5L10 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "font-inter text-primary text-sm leading-relaxed", children: feat })
          ] }, i)) }) })
        ] }),
        item.result && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "h-px bg-border" }),
          /* @__PURE__ */ jsx(Section$2, { label: "Le résultat", children: /* @__PURE__ */ jsx(
            "p",
            {
              className: "font-archivo font-black text-secondary tracking-tight leading-[1.12] text-balance",
              style: { fontSize: "clamp(1.5rem, 3vw, 2.25rem)" },
              children: item.result
            }
          ) })
        ] }),
        item.note && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-40px 0px" },
            transition: { duration: 0.5, ease },
            className: "bg-secondary/6 border-l-2 border-secondary pl-4 py-3 rounded-r-xl",
            children: /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-primary leading-relaxed text-pretty", children: item.note })
          }
        ),
        item.technologies && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "h-px bg-border" }),
          /* @__PURE__ */ jsx(Section$2, { label: "Technologies", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: item.technologies.map((tech, i) => /* @__PURE__ */ jsx("span", { className: "bg-section border border-border rounded-full px-3 py-1 font-inter text-sm text-muted", children: tech }, i)) }) })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-40px 0px" },
            transition: { duration: 0.5, ease },
            className: "pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6",
            children: [
              /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: "/#contact",
                  whileTap: { scale: 0.97 },
                  className: "inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
                  children: [
                    "Un projet similaire ? Parlons-en",
                    /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6h8M6 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/",
                  className: "font-inter text-sm text-muted hover:text-secondary transition-colors duration-200",
                  children: "← Toutes les réalisations"
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
      }
    )
  ] });
}
function Breadcrumb({ items }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Fil d'Ariane", className: "flex items-center gap-2 mb-10 flex-wrap", children: items.map((item, i) => {
    const isLast = i === items.length - 1;
    return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
      i > 0 && /* @__PURE__ */ jsx("span", { className: "text-white/25 text-xs", "aria-hidden": "true", children: "›" }),
      isLast || !item.href ? /* @__PURE__ */ jsx("span", { className: "font-inter text-sm text-white/50", children: item.label }) : /* @__PURE__ */ jsx(
        Link,
        {
          to: item.href,
          className: "font-inter text-sm text-white/50 hover:text-white/80 transition-colors duration-200",
          children: item.label
        }
      )
    ] }, i);
  }) });
}
function FAQItem({ q, a }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      variants: cardItem,
      whileHover: hoverLift,
      className: "border border-border rounded-2xl p-6 bg-white cursor-default",
      children: [
        /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-base tracking-display text-primary mb-2 leading-snug text-balance", children: q }),
        /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty", children: a })
      ]
    }
  );
}
function ServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").split("/")[0];
  const service = services.find((s) => s.slug === slug);
  const hubRef = useRef(null);
  const hubInView = useInView(hubRef, { once: true, margin: "-80px 0px" });
  const problemsRef = useRef(null);
  const problemsInView = useInView(problemsRef, { once: true, margin: "-80px 0px" });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px 0px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-80px 0px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px 0px" });
  if (!service) return null;
  const isHub = slug === "applications-metier";
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          items: [
            { label: "Accueil", href: "/" },
            { label: service.hero.eyebrow }
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: textReveal(),
          initial: "hidden",
          animate: "show",
          children: [
            /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-secondary mb-4", children: service.hero.eyebrow }),
            /* @__PURE__ */ jsx(motion.h1, { variants: textLine, className: "font-archivo font-bold text-4xl md:text-5xl tracking-display text-white mb-5 leading-tight text-balance max-w-3xl", children: service.hero.title }),
            /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "font-inter text-white/60 leading-relaxed text-pretty max-w-[58ch] text-lg mb-8", children: service.hero.subtitle }),
            /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/#contact",
                className: "inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
                children: service.hero.cta
              }
            ) })
          ]
        }
      )
    ] }) }),
    isHub && service.services && /* @__PURE__ */ jsx("section", { className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { ref: hubRef, className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: textLine,
          initial: "hidden",
          animate: hubInView ? "show" : "hidden",
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-4 text-balance", children: service.intro.title }),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed text-pretty max-w-[62ch]", children: service.intro.body })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: stagger(),
          initial: "hidden",
          animate: hubInView ? "show" : "hidden",
          className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
          children: service.services.map((item) => /* @__PURE__ */ jsx(motion.div, { variants: cardItem, whileHover: hoverLift, children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/${item.slug}`,
              className: "flex flex-col h-full bg-white border border-border rounded-2xl p-6 shadow-card hover:border-secondary/40 transition-colors duration-200 group",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-2xl mb-3", "aria-hidden": "true", children: item.icon }),
                /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-primary mb-2 group-hover:text-secondary transition-colors duration-200", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty flex-1", children: item.body }),
                /* @__PURE__ */ jsx("span", { className: "font-inter text-xs text-secondary mt-4 flex items-center gap-1", children: "En savoir plus →" })
              ]
            }
          ) }, item.slug))
        }
      )
    ] }) }),
    !isHub && service.problems && /* @__PURE__ */ jsx("section", { className: "bg-section py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { ref: problemsRef, className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          variants: textLine,
          initial: "hidden",
          animate: problemsInView ? "show" : "hidden",
          className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance",
          children: service.problems.title
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: stagger(),
          initial: "hidden",
          animate: problemsInView ? "show" : "hidden",
          className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
          children: service.problems.items.map((item, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: cardItem,
              whileHover: hoverLift,
              className: "bg-white border border-border rounded-2xl p-6 shadow-card cursor-default",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-base tracking-display text-primary mb-2 leading-snug text-balance", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty", children: item.body })
              ]
            },
            i
          ))
        }
      )
    ] }) }),
    !isHub && service.features && /* @__PURE__ */ jsx("section", { className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { ref: featuresRef, className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          variants: textLine,
          initial: "hidden",
          animate: featuresInView ? "show" : "hidden",
          className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance",
          children: service.features.title
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: stagger(),
          initial: "hidden",
          animate: featuresInView ? "show" : "hidden",
          className: "grid sm:grid-cols-2 gap-8",
          children: service.features.items.map((item, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: cardItem,
              className: "flex gap-5",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-1.5 rounded-full bg-secondary/20 shrink-0 mt-1", style: { height: "auto", minHeight: "24px" } }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-primary mb-2 leading-snug text-balance", children: item.title }),
                  /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed text-pretty", children: item.body })
                ] })
              ]
            },
            i
          ))
        }
      )
    ] }) }),
    service.faq && /* @__PURE__ */ jsx("section", { className: "bg-section py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { ref: faqRef, className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          variants: textLine,
          initial: "hidden",
          animate: faqInView ? "show" : "hidden",
          className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance",
          children: "Questions fréquentes"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: stagger(),
          initial: "hidden",
          animate: faqInView ? "show" : "hidden",
          className: "flex flex-col gap-4",
          children: service.faq.map((item, i) => /* @__PURE__ */ jsx(FAQItem, { q: item.q, a: item.a }, i))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-20", children: /* @__PURE__ */ jsx("div", { ref: ctaRef, className: "mx-auto max-w-4xl px-6", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: vFadeUp,
        initial: "hidden",
        animate: ctaInView ? "show" : "hidden",
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-white mb-4 text-balance", children: "Un projet dans votre entreprise ?" }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-white/60 leading-relaxed max-w-[52ch] mx-auto mb-8", children: "Décrivez votre besoin en quelques lignes. Nous revenons vers vous dans les 48 heures avec un premier avis honnête." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/#contact",
                className: "bg-secondary text-white font-inter font-medium text-sm px-8 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
                children: "Discuter de votre projet"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/applications-metier",
                className: "border border-white/25 text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-white/10 transition-all duration-200",
                children: "Voir toutes nos expertises"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
const posts = [
  {
    slug: "pourquoi-excel-ralentit-les-pme",
    title: "Pourquoi Excel ralentit votre entreprise (et ce que vous pouvez faire)",
    date: "2026-06-15",
    readTime: 6,
    category: "Outils & productivité",
    excerpt: "Excel est l'outil par défaut de millions d'entreprises françaises. Et pourtant, il est souvent la principale source de perte de temps dans les équipes — pas parce qu'il est mauvais, mais parce qu'il est utilisé pour des tâches pour lesquelles il n'a pas été conçu.",
    content: [
      {
        type: "intro",
        text: "Excel est l'outil par défaut de millions d'entreprises françaises. Flexible, accessible, connu de tous. Et pourtant, dans beaucoup d'entreprises, il est devenu la principale source de perte de temps. Pas parce qu'Excel est mauvais — c'est un outil remarquable pour ce qu'il fait. Mais parce qu'il est utilisé pour des choses pour lesquelles il n'a pas été conçu."
      },
      {
        type: "h2",
        title: "Le problème des fichiers qui ne sont jamais vraiment partagés",
        text: `Quand plusieurs personnes travaillent sur le même fichier, la question se pose rapidement : qui a la "bonne" version ? La V4_FINALE.xlsx ? La V4_FINALE_OK_2.xlsx envoyée hier soir ? Les modifications d'une personne n'arrivent pas chez les autres en temps réel. Des heures de travail peuvent se chevaucher, voire s'annuler. La simple question "tu as la dernière version ?" résume à elle seule un problème d'organisation que beaucoup d'entreprises subissent chaque semaine.`
      },
      {
        type: "h2",
        title: "Une erreur de formule peut coûter très cher",
        text: "Dans un devis BTP, une cellule mal référencée peut entraîner une sous-estimation de plusieurs milliers d'euros. Dans un tableau de stock, une formule qui ne s'étend pas jusqu'à la dernière ligne fausse l'ensemble des calculs. Excel n'a pas de garde-fous natifs contre ces erreurs. Sans audit régulier des formules, elles peuvent se propager silencieusement pendant des mois. Et contrairement à une base de données, Excel n'a pas de journal des modifications : impossible de savoir qui a changé quoi, et quand."
      },
      {
        type: "h2",
        title: "Excel ne grandit pas avec votre activité",
        text: `Dix lignes, c'est parfait. Mille lignes, ça ralentit. Cinquante mille lignes, c'est inutilisable. Au-delà de la performance, Excel ne permet pas de gérer des droits d'accès différenciés : si vous partagez le fichier, vous partagez tout. Pas de notion de "cet utilisateur peut voir mais pas modifier", pas de "ce collaborateur n'a accès qu'à ses données". Ce qui fonctionnait pour une équipe de trois personnes devient un problème de sécurité et de confidentialité à dix.`
      },
      {
        type: "h2",
        title: "L'absence de tableaux de bord en temps réel",
        text: "Un tableau Excel est une photo du passé. Pour avoir une vision consolidée de l'activité, il faut souvent ouvrir plusieurs fichiers, copier des données, recalculer des totaux — une demi-journée de travail pour produire un rapport qui sera périmé le lendemain. Les dirigeants qui s'appuient sur des données Excel pour prendre des décisions le font souvent avec des données qui ont déjà plusieurs jours ou semaines de retard."
      },
      {
        type: "h2",
        title: "Quand faut-il vraiment passer à autre chose ?",
        text: "Excel reste pertinent pour des analyses ad hoc, des calculs financiers ponctuels, ou des données que vous êtes le seul à utiliser. En revanche, si plusieurs personnes ont besoin du même fichier en même temps, si des erreurs ont commencé à coûter de l'argent, ou si consolider des données prend plus de temps que les analyser — c'est le signe qu'il faut une solution structurée. Pas nécessairement un ERP complet : parfois, une application métier ciblée sur un seul processus suffit pour transformer le quotidien d'une équipe."
      },
      {
        type: "conclusion",
        text: `La vraie question n'est pas "Excel ou pas Excel" — c'est "est-ce qu'on utilise le bon outil pour le bon usage ?" Si vous vous retrouvez à contourner Excel plus souvent qu'à travailler avec, c'est probablement le moment d'explorer d'autres options.`
      }
    ]
  },
  {
    slug: "comment-digitaliser-entreprise-btp",
    title: "Comment digitaliser une entreprise du BTP sans perturber les chantiers",
    date: "2026-06-22",
    readTime: 7,
    category: "BTP & chantier",
    excerpt: "La digitalisation dans le BTP a mauvaise réputation : des outils compliqués, adoptés sous contrainte, abandonnés trois mois plus tard. Voici comment les entreprises qui réussissent leur transformation numérique s'y prennent — et ce qu'elles évitent.",
    content: [
      {
        type: "intro",
        text: `La digitalisation dans le BTP a mauvaise réputation. Des logiciels compliqués imposés par la direction, adoptés sous contrainte par des chefs de chantier qui ont "autre chose à faire", abandonnés trois mois plus tard. Et pourtant, les entreprises qui réussissent leur transformation numérique en retirent des bénéfices concrets et durables. La différence tient rarement à la technologie choisie. Elle tient à l'ordre dans lequel les décisions sont prises.`
      },
      {
        type: "h2",
        title: "Commencer par le problème, pas par l'outil",
        text: `La première erreur est d'acheter un logiciel pour "faire de la digitalisation". La bonne démarche est d'identifier une friction concrète qui coûte du temps ou de l'argent aujourd'hui, et de chercher comment la réduire. Dans le BTP, les frictions les plus fréquentes sont connues : les rapports terrain qui n'arrivent pas au bureau à temps, le planning que personne n'a en version à jour, les clients qui appellent parce qu'ils ne savent pas où en sont leurs travaux. Commencez par là.`
      },
      {
        type: "h2",
        title: "Le planning de chantier : le premier levier",
        text: "Un planning partagé en temps réel est souvent la transformation la plus impactante et la plus rapide à mettre en place. Quand les équipes terrain voient leurs tâches du jour sur leur téléphone — sans appel à 7h du matin pour savoir où aller — et que les modifications faites au bureau se propagent instantanément, le gain de temps est immédiat. La résistance à l'adoption est faible parce que l'utilité est évidente dès le premier jour."
      },
      {
        type: "h2",
        title: "Les rapports journaliers numériques",
        text: "Un compagnon qui prend une photo sur son téléphone et ajoute un commentaire en deux minutes, c'est un rapport de chantier. Stocké, horodaté, géolocalisé, accessible depuis le bureau sans attendre la fin de journée. En cas de litige sur un défaut ou une malfaçon, la traçabilité photographique devient une protection concrète. Les entreprises qui ont fait ce passage témoignent d'une réduction significative des conflits de garantie — pas parce qu'il y a moins de problèmes, mais parce que la preuve est disponible."
      },
      {
        type: "h2",
        title: "La communication avec le client",
        text: 'Un client qui sait où en sont ses travaux — via un espace de suivi en ligne, avec les photos et le planning prévisionnel — appelle moins souvent pour "avoir des nouvelles". Et quand il y a un retard ou un problème, être proactif dans la communication transforme une source de mécontentement en démonstration de professionnalisme. Les entreprises qui ont mis en place un suivi client numérique rapportent systématiquement une meilleure satisfaction, même sur des chantiers qui ont eu des aléas.'
      },
      {
        type: "h2",
        title: "L'adoption : le vrai défi",
        text: "L'outil le plus simple est celui qu'on utilise vraiment. Impliquer les chefs de chantier dans la conception de l'outil — pas pour leur demander leur avis une fois le logiciel acheté, mais pour définir avec eux ce dont ils ont besoin — garantit une adoption bien plus solide qu'une formation obligatoire de deux jours. Les meilleurs déploiements commencent avec un pilote sur un chantier, avec des utilisateurs volontaires, avant de généraliser."
      },
      {
        type: "conclusion",
        text: "La digitalisation du BTP n'est pas une transformation en un jour. Mais chaque étape bien choisie — un planning partagé, des rapports numériques, un suivi client — améliore concrètement le quotidien des équipes et la relation avec les clients. La clé est de commencer par un problème réel, pas par une technologie."
      }
    ]
  },
  {
    slug: "combien-coute-application-metier",
    title: "Combien coûte une application métier sur mesure ?",
    date: "2026-07-01",
    readTime: 8,
    category: "Budget & investissement",
    excerpt: "C'est la question que tout dirigeant d'entreprises se pose avant de se lancer. Voici ce qui détermine vraiment le prix d'une application métier sur mesure, les fourchettes réelles, et comment évaluer si l'investissement est rentable pour vous.",
    content: [
      {
        type: "intro",
        text: `"Combien ça coûte ?" C'est souvent la première question que les dirigeants d'entreprises posent quand ils envisagent de développer une application sur mesure. Et c'est une question légitime — personne ne veut se retrouver avec une facture surprise au bout de six mois. Voici une réponse honnête sur ce qui détermine le prix, et comment évaluer si l'investissement est rentable pour votre situation.`
      },
      {
        type: "h2",
        title: "Pourquoi il n'y a pas de prix catalogue",
        text: "Une application métier, c'est comme une maison : le prix dépend de ce qu'on construit, pas d'un tarif standard. Un formulaire de contact coûte quelques centaines d'euros. Un ERP avec module de planification, facturation et interface mobile coûte vingt fois plus. Les variables qui font la différence : le nombre d'écrans et de fonctionnalités, le nombre d'utilisateurs, la complexité des règles métier, les intégrations avec des systèmes existants, et la nécessité ou non d'une application mobile."
      },
      {
        type: "h2",
        title: "Les facteurs qui font monter le budget",
        text: "Certains besoins ont un impact significatif sur le coût. Les intégrations avec des systèmes existants (ERP, comptabilité, API partenaires) nécessitent un travail d'audit et de développement spécifique. Une application mobile en plus de la version web représente typiquement 30 à 50 % de travail supplémentaire. La synchronisation hors-ligne (nécessaire pour les équipes terrain sans connexion stable) est techniquement complexe. Les tableaux de bord analytiques avec agrégations de données importantes demandent une architecture soignée. Enfin, les contraintes réglementaires spécifiques — RGPD renforcé, normes sectorielles, conformité financière — ajoutent du temps de conception."
      },
      {
        type: "h2",
        title: "Les fourchettes réelles",
        text: "Sans détour : une application simple avec un ou deux workflows principaux et une dizaine d'écrans se développe entre 8 000 et 20 000 €. Une application métier complète — ERP léger, gestion de chantier, CRM avec quelques intégrations — entre 20 000 et 60 000 €. Une plateforme complexe avec architecture multi-tenant, nombreux connecteurs et module d'analyse avancé dépasse les 60 000 €. Ces fourchettes incluent la conception, le développement, les tests et la mise en production. Elles ne correspondent pas à un abonnement mensuel : c'est un investissement ponctuel pas un abonnement mensuel."
      },
      {
        type: "h2",
        title: "Comment évaluer la rentabilité",
        text: "Avant de regarder le coût de développement, calculez le coût du statu quo. Prenez le temps que vos équipes passent sur les tâches que l'application automatiserait, multipliez par le coût horaire, et projetez sur douze mois. Trois personnes qui passent deux heures par jour à consolider des données représentent environ 15 000 à 20 000 € de masse salariale non productive chaque année — sans compter les erreurs, les retards clients et les opportunités manquées. Un outil à 25 000 € amorti sur trois ans revient à 8 300 € par an. Le calcul devient souvent évident."
      },
      {
        type: "h2",
        title: "Ce qui coûte moins cher que prévu",
        text: "Travailler avec un développeur indépendant — plutôt qu'une agence avec ses frais de structure, sa marge commerciale et ses chefs de projet — réduit significativement le budget à périmètre identique. Partir d'un MVP bien ciblé (une seule fonctionnalité, une seule équipe utilisatrice) plutôt que de tout vouloir au départ permet de valider rapidement la valeur avant d'investir davantage. Et réutiliser des composants techniques éprouvés — authentification, gestion des fichiers, notifications — évite de réinventer la roue à chaque projet."
      },
      {
        type: "conclusion",
        text: "Le vrai coût à regarder n'est pas le devis de développement — c'est la différence entre ce que le statu quo vous coûte chaque année et ce que l'outil vous coûterait amorti sur sa durée de vie. Si vous voulez qu'on fasse ce calcul ensemble pour votre situation spécifique, c'est l'objet d'un premier appel de 30 minutes."
      }
    ]
  },
  {
    slug: "erp-ou-logiciel-sur-mesure",
    title: "ERP ou logiciel sur mesure : que choisir pour votre entreprise ?",
    date: "2026-07-08",
    readTime: 7,
    category: "Stratégie & choix",
    excerpt: "Odoo, SAP, Sage... le marché des ERP est immense. Alors pourquoi certaines entreprises font-elles le choix de développer leur propre logiciel plutôt que d'adopter une solution existante ? Ce n'est pas toujours la bonne décision. Voici comment la prendre avec discernement.",
    content: [
      {
        type: "intro",
        text: "Odoo, SAP Business One, Sage 100, Cegid... le marché des ERP est immense et bien établi. Alors pourquoi certaines entreprises font-elles le choix de développer leur propre logiciel de gestion plutôt que d'adopter une solution existante ? Ce n'est pas toujours la bonne décision. Et ce guide n'a pas pour vocation de vous convaincre du sur mesure — mais de vous aider à choisir ce qui est vraiment adapté à votre situation."
      },
      {
        type: "h2",
        title: "Ce que font bien les ERP du marché",
        text: "Les ERP standard couvrent des processus largement partagés par des milliers d'entreprises : comptabilité générale, gestion des stocks, facturation, gestion des commandes. Ils bénéficient d'années de développement, de mises à jour régulières incluses dans l'abonnement, d'une documentation abondante et d'une communauté d'utilisateurs. Le déploiement sur les fonctionnalités standards est rapide. Pour une entreprise dont les processus ne sortent pas de l'ordinaire, ils peuvent être parfaitement adaptés."
      },
      {
        type: "h2",
        title: "Les limites des ERP standard pour certaines entreprises",
        text: "Le problème apparaît quand votre activité a une logique qui sort des processus standards. Les ERP sont conçus pour s'adapter à des milliers de cas différents — ce qui signifie qu'ils imposent leur structure à votre activité, pas l'inverse. Le paramétrage peut compenser partiellement cette rigidité, mais il a ses limites. Les modules supplémentaires coûtent souvent plus cher que prévu. Et l'interface, conçue pour être générale, est rarement épurée : vos équipes se retrouvent face à des dizaines d'options dont elles n'utilisent qu'une fraction."
      },
      {
        type: "h2",
        title: "Quand le sur mesure s'impose",
        text: "Quelques situations rendent le sur mesure clairement plus pertinent. Quand votre activité a un flux métier non standard — une prestation complexe avec plusieurs phases d'approbation, un cycle de production atypique, une tarification qui ne rentre dans aucune case. Quand vos équipes terrain ont besoin d'une interface ultra-simple, utilisable sur smartphone sans formation. Quand vous avez besoin de vous intégrer à des outils très spécifiques à votre secteur. Et quand votre façon de travailler est un avantage concurrentiel que vous ne souhaitez pas niveler en vous alignant sur le standard d'un éditeur."
      },
      {
        type: "h2",
        title: "La fausse opposition",
        text: `Ce n'est pas ERP contre sur mesure — c'est "quels processus méritent d'être standardisés, et lesquels méritent d'être différenciés ?" Une stratégie souvent efficace : garder un ERP standard pour la comptabilité, qui doit respecter des normes précises, et développer sur mesure uniquement pour le cœur de métier, là où votre différenciation opérationnelle se joue. Votre CRM peut être sur mesure pendant que votre comptabilité reste sur Sage. Les deux coexistent via une intégration ciblée.`
      },
      {
        type: "h2",
        title: "Les questions à se poser avant de décider",
        text: "Avez-vous documenté votre processus métier actuel ? Si vous ne pouvez pas l'expliquer clairement, aucun outil — ERP ou sur mesure — ne pourra bien le couvrir. Combien de vos équipes utilisent réellement votre logiciel actuel, et sur quelles fonctionnalités ? Si 80 % des utilisateurs n'utilisent que 20 % des fonctions, c'est souvent le signe que l'outil n'est pas adapté. Et quel est le coût mensuel des contournements — exports Excel, saisies manuelles, appels téléphoniques pour compenser ce que le logiciel ne fait pas ?"
      },
      {
        type: "conclusion",
        text: `Il n'y a pas de réponse universelle. Il y a votre activité, vos processus, vos équipes, et votre budget. Si vous voulez un avis honnête sur votre situation spécifique, un premier échange de 30 minutes suffit généralement pour identifier ce qui vous correspond le mieux — même si la réponse est "un ERP standard est parfait pour vous".`
      }
    ]
  },
  {
    slug: "5-signes-creer-propre-logiciel",
    title: "5 signes qu'il est temps de créer votre propre logiciel métier",
    date: "2026-07-15",
    readTime: 5,
    category: "Outils & productivité",
    excerpt: "Beaucoup de dirigeants d'entreprises pensent que créer son propre logiciel, c'est réservé aux grandes entreprises. Voici 5 signaux concrets qui indiquent qu'un outil sur mesure serait rentable pour vous dès aujourd'hui.",
    content: [
      {
        type: "intro",
        text: "Créer son propre logiciel, beaucoup de dirigeants d'entreprises pensent que c'est réservé aux grandes entreprises avec des budgets informatiques conséquents. Ce n'est pas le cas — et cette idée fait manquer à beaucoup d'entreprises un levier de productivité significatif. Voici 5 signaux concrets qui indiquent qu'un outil sur mesure serait rentable pour votre situation."
      },
      {
        type: "numbered",
        items: [
          {
            title: "Vous avez un fichier Excel que personne d'autre ne comprend vraiment",
            text: "Ce fichier existe dans beaucoup d'entreprises. Il a été créé par quelqu'un de débrouillard, il est devenu indispensable, et aujourd'hui une seule personne sait vraiment comment il fonctionne. Si cette personne part, c'est un risque opérationnel réel. Ce fichier est la preuve d'un besoin métier réel que personne n'a encore adressé correctement — et c'est exactement le point de départ d'une bonne application sur mesure."
          },
          {
            title: 'Vos équipes ont développé des "contournements" devenus la norme',
            text: "Copier-coller des données entre trois outils pour compléter une tâche. Utiliser WhatsApp pour transmettre des informations qui doivent ensuite être ressaisies ailleurs. Envoyer un email pour confirmer ce qu'un autre logiciel devrait déjà savoir. Chaque contournement est une friction qui coûte du temps chaque jour — et s'accumule sur une année."
          },
          {
            title: "Vous perdez des opportunités par manque de visibilité",
            text: "Un prospect qui n'a pas été relancé parce que personne n'avait de rappel en place. Une commande retardée parce que le stock n'était pas visible en temps réel. Un client qui n'a pas renouvelé parce qu'aucune alerte n'était programmée. Ces manques de visibilité ont un coût direct sur le chiffre d'affaires."
          },
          {
            title: "Le départ d'une personne emporte la connaissance avec elle",
            text: `Si l'onboarding d'un nouveau collaborateur dure trois semaines parce qu'il faut lui "expliquer comment ça marche ici", c'est souvent le signe que la connaissance opérationnelle est dans les têtes, pas dans des processus documentés et supportés par un outil. Un bon logiciel métier porte la logique de l'entreprise indépendamment des individus.`
          },
          {
            title: "Vous avez fait le calcul et le statu quo coûte plus cher que le changement",
            text: `Prenez les heures perdues sur des tâches répétitives, multipliez par le coût horaire chargé, projetez sur douze mois. Ajoutez les erreurs, les retards clients et les opportunités manquées. Comparez à l'amortissement d'une application sur mesure sur trois ans. Si le statu quo coûte plus cher — et c'est souvent le cas — la question n'est plus "est-ce qu'on le fait ?" mais "par où on commence ?".`
          }
        ]
      },
      {
        type: "conclusion",
        text: "Si vous vous reconnaissez dans trois de ces cinq situations, la conversation vaut la peine d'être engagée. Pas nécessairement pour lancer un grand projet — mais pour comprendre quel serait le premier chantier le plus rentable pour vous."
      }
    ]
  }
];
function formatDate$1(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function BlogIndex() {
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-60px 0px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6", children: /* @__PURE__ */ jsxs(motion.div, { variants: textReveal(), initial: "hidden", animate: "show", children: [
      /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-secondary mb-4", children: "Blog" }),
      /* @__PURE__ */ jsx(motion.h1, { variants: textLine, className: "font-archivo font-bold text-4xl md:text-5xl tracking-display text-white mb-5 leading-tight text-balance max-w-2xl", children: "Ressources pour les entreprises qui veulent mieux travailler" }),
      /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "font-inter text-white/60 leading-relaxed text-pretty max-w-[54ch] text-lg", children: "Conseils pratiques, retours d'expérience et guides pour les dirigeants qui cherchent à améliorer leurs outils et leurs processus." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: listRef,
        variants: stagger(0.05),
        initial: "hidden",
        animate: listInView ? "show" : "hidden",
        className: "flex flex-col gap-6",
        children: posts.map((post) => /* @__PURE__ */ jsx(motion.div, { variants: cardItem, whileHover: hoverLift, children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/blog/${post.slug}`,
            className: "flex flex-col sm:flex-row gap-6 border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-card-md transition-colors duration-200 group",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "label text-secondary", children: post.category }),
                  /* @__PURE__ */ jsx("span", { className: "text-border", "aria-hidden": "true", children: "·" }),
                  /* @__PURE__ */ jsxs("span", { className: "label text-muted", children: [
                    post.readTime,
                    " min de lecture"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance group-hover:text-secondary transition-colors duration-200", children: post.title }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty max-w-[62ch]", children: post.excerpt })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4", children: [
                /* @__PURE__ */ jsx("time", { className: "font-inter text-xs text-muted/60 whitespace-nowrap", children: formatDate$1(post.date) }),
                /* @__PURE__ */ jsx("span", { className: "font-inter text-sm text-secondary", children: "Lire →" })
              ] })
            ]
          }
        ) }, post.slug))
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-section py-16", children: /* @__PURE__ */ jsx("div", { ref: ctaRef, className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxs(motion.div, { variants: vFadeUp, initial: "hidden", animate: ctaInView ? "show" : "hidden", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-2xl tracking-display text-primary mb-3 text-balance", children: "Vous avez un projet pour votre entreprise ?" }),
      /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed mb-6 max-w-[48ch] mx-auto", children: "Décrivez votre besoin. Nous revenons vers vous dans les 48 heures." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/#contact",
          className: "inline-flex items-center bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
          children: "Discuter de votre projet"
        }
      )
    ] }) }) })
  ] });
}
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function renderSection(section, i) {
  if (section.type === "intro") {
    return /* @__PURE__ */ jsx("p", { className: "font-inter text-lg text-text leading-relaxed text-pretty mb-8", children: section.text }, i);
  }
  if (section.type === "h2") {
    return /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-2xl tracking-display text-primary mb-3 leading-snug text-balance", children: section.title }),
      /* @__PURE__ */ jsx("p", { className: "font-inter text-text leading-relaxed text-pretty", children: section.text })
    ] }, i);
  }
  if (section.type === "numbered") {
    return /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-8 mb-8", children: section.items.map((item, j) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
      /* @__PURE__ */ jsx("span", { className: "font-archivo font-bold text-4xl text-secondary/20 leading-none shrink-0 tabular-nums select-none w-8 text-right", children: j + 1 }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "font-inter text-text leading-relaxed text-pretty", children: item.text })
      ] })
    ] }, j)) }, i);
  }
  if (section.type === "conclusion") {
    return /* @__PURE__ */ jsx("div", { className: "border-t border-border pt-8 mb-8", children: /* @__PURE__ */ jsx("p", { className: "font-inter text-text/80 leading-relaxed text-pretty italic", children: section.text }) }, i);
  }
  return null;
}
function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px 0px" });
  const relatedRef = useRef(null);
  const relatedInView = useInView(relatedRef, { once: true, margin: "-80px 0px" });
  if (!post) return null;
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          items: [
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.category }
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: textReveal(),
          initial: "hidden",
          animate: "show",
          children: [
            /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-secondary mb-4", children: post.category }),
            /* @__PURE__ */ jsx(motion.h1, { variants: textLine, className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-white mb-5 leading-snug text-balance", children: post.title }),
            /* @__PURE__ */ jsxs(motion.div, { variants: textLine, className: "flex items-center gap-4 flex-wrap", children: [
              /* @__PURE__ */ jsx("time", { className: "font-inter text-sm text-white/50", children: formatDate(post.date) }),
              /* @__PURE__ */ jsx("span", { className: "text-white/20", "aria-hidden": "true", children: "·" }),
              /* @__PURE__ */ jsxs("span", { className: "font-inter text-sm text-white/50", children: [
                post.readTime,
                " min de lecture"
              ] })
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("article", { className: "bg-white py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: stagger(0.08),
          initial: "hidden",
          animate: "show",
          children: post.content.map((section, i) => /* @__PURE__ */ jsx(motion.div, { variants: vFadeUp, children: renderSection(section, i) }, i))
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          ref: ctaRef,
          initial: { opacity: 0, y: 40 },
          animate: ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
          transition: { duration: 0.7, ease: "easeOut" },
          className: "mt-12 bg-secondary/8 border border-secondary/20 rounded-2xl p-8",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance", children: "Un projet dans votre entreprise ?" }),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed mb-5 max-w-[52ch]", children: "Décrivez votre besoin en quelques lignes. Nous revenons vers vous dans les 48 heures avec un premier avis honnête — sans engagement." }),
            /* @__PURE__ */ jsx(
              motion.a,
              {
                href: "/#contact",
                whileTap: { scale: 0.97 },
                className: "inline-flex items-center bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
                children: "Discuter de votre projet"
              }
            )
          ]
        }
      )
    ] }) }),
    relatedPosts.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-section py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-xl tracking-display text-primary mb-6", children: "Articles similaires" }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          ref: relatedRef,
          variants: stagger(),
          initial: "hidden",
          animate: relatedInView ? "show" : "hidden",
          className: "grid sm:grid-cols-2 gap-4",
          children: relatedPosts.map((p) => /* @__PURE__ */ jsx(motion.div, { variants: cardItem, whileHover: hoverLift, children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/blog/${p.slug}`,
              className: "block border border-border rounded-2xl p-5 bg-white hover:border-secondary/40 transition-colors duration-200 group",
              children: [
                /* @__PURE__ */ jsx("p", { className: "label text-secondary mb-1", children: p.category }),
                /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-base tracking-display text-primary leading-snug text-balance group-hover:text-secondary transition-colors duration-200", children: p.title }),
                /* @__PURE__ */ jsxs("p", { className: "font-inter text-xs text-muted mt-2", children: [
                  p.readTime,
                  " min de lecture"
                ] })
              ]
            }
          ) }, p.slug))
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: "/blog",
          className: "font-inter text-sm text-muted hover:text-secondary transition-colors duration-200",
          children: "← Tous les articles"
        }
      ) })
    ] }) })
  ] });
}
const locations = [
  {
    city: "Paris",
    slug: "paris",
    region: "Île-de-France",
    context: "L'Île-de-France concentre des centaines de milliers d'entreprises dans tous les secteurs — commerce, services, BTP, industrie. La concurrence y est forte, et l'efficacité opérationnelle est souvent le facteur différenciant."
  },
  {
    city: "Lyon",
    slug: "lyon",
    region: "Auvergne-Rhône-Alpes",
    context: "Lyon est le deuxième pôle économique français, avec un tissu dense d'entreprises industrielles, de services aux entreprises et de négoce. La région Auvergne-Rhône-Alpes concentre des entreprises avec des besoins métiers souvent très spécifiques."
  },
  {
    city: "Toulouse",
    slug: "toulouse",
    region: "Occitanie",
    context: "Toulouse est le cœur de la filière aéronautique française, mais aussi un pôle de santé, de services numériques et d'agriculture. Les entreprises toulousaines ont des contraintes métiers distinctives qui méritent des outils adaptés."
  },
  {
    city: "Bordeaux",
    slug: "bordeaux",
    region: "Nouvelle-Aquitaine",
    context: "Bordeaux connaît une forte croissance économique depuis dix ans, avec des entreprises dans le négoce, le BTP, le tourisme et les services. La métropole bordelaise est devenue un terrain fertile pour les entreprises en développement."
  },
  {
    city: "Marseille",
    slug: "marseille",
    region: "Provence-Alpes-Côte d'Azur",
    context: "Marseille est un carrefour commercial avec des entreprises dans le transport, la logistique, les services et le BTP. La région PACA concentre des entreprises aux besoins variés, souvent confrontées à des défis de coordination et de visibilité opérationnelle."
  }
];
const SERVICES = [
  { title: "ERP sur mesure", href: "/erp-sur-mesure", body: "Système de gestion intégré calqué sur vos processus réels." },
  { title: "CRM sur mesure", href: "/crm-sur-mesure", body: "Pipeline commercial adapté à votre cycle de vente." },
  { title: "Portail client", href: "/portail-client", body: "Espace en ligne où vos clients suivent leurs dossiers." },
  { title: "Gestion de chantier", href: "/gestion-chantier", body: "Planning, rapports terrain et suivi des travaux centralisés." },
  { title: "Gestion des interventions", href: "/gestion-intervention", body: "Planification, fiche numérique et signature client." },
  { title: "Automatisation", href: "/automatisation-processus", body: "Éliminez les tâches manuelles répétitives." }
];
const FAQ = [
  {
    q: "Travaillez-vous uniquement à distance ou en présentiel aussi ?",
    a: "Nous travaillons principalement à distance pour pouvoir servir des clients partout en France. Des déplacements sont possibles si le projet le justifie — réunion de cadrage, atelier utilisateurs, formation."
  },
  {
    q: "Quelle est votre disponibilité habituelle ?",
    a: "Nous prenons généralement deux à trois projets simultanément. Si nous ne sommes pas disponibles immédiatement, nous vous le disons clairement et pouvons indiquer un délai de démarrage réaliste."
  },
  {
    q: "Comment se passe le premier échange ?",
    a: "Un appel ou visioconférence de 30 minutes pour comprendre votre besoin, vos contraintes et votre activité. Sans engagement. À l'issue, vous savez si votre projet est faisable et dans quelle fourchette."
  }
];
function LocationPage() {
  const { pathname } = useLocation();
  const citySlug = pathname.replace("/developpeur-applications-metier-", "");
  const location = locations.find((l) => l.slug === citySlug);
  const contextRef = useRef(null);
  const contextInView = useInView(contextRef, { once: true, margin: "-80px 0px" });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px 0px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-80px 0px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px 0px" });
  if (!location) return null;
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          items: [
            { label: "Accueil", href: "/" },
            { label: `DJEXA ${location.city}` }
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: textReveal(),
          initial: "hidden",
          animate: "show",
          children: [
            /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-secondary mb-4", children: location.region }),
            /* @__PURE__ */ jsxs(motion.h1, { variants: textLine, className: "font-archivo font-bold text-4xl md:text-5xl tracking-display text-white mb-5 leading-tight text-balance max-w-3xl", children: [
              "Développeur applications métier sur mesure à ",
              location.city
            ] }),
            /* @__PURE__ */ jsxs(motion.p, { variants: textLine, className: "font-inter text-white/60 leading-relaxed text-pretty max-w-[58ch] text-lg mb-8", children: [
              "Nous créons des logiciels sur mesure pour les entreprises de ",
              location.region,
              " — ERP, CRM, portail client, gestion de chantier et d'intervention. À distance ou en déplacement selon vos besoins."
            ] }),
            /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "/#contact",
                className: "inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
                children: "Discuter de votre projet"
              }
            ) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-section py-16", children: /* @__PURE__ */ jsx("div", { ref: contextRef, className: "mx-auto max-w-4xl px-6", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: vFadeUp,
        initial: "hidden",
        animate: contextInView ? "show" : "hidden",
        className: "bg-white border border-border rounded-2xl p-8",
        children: [
          /* @__PURE__ */ jsx("p", { className: "font-inter text-text leading-relaxed text-pretty text-lg", children: location.context }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed text-pretty mt-4", children: "Qu'il s'agisse de remplacer des fichiers Excel devenus ingérables, d'automatiser des processus qui mobilisent vos équipes sur des tâches à faible valeur, ou de donner à vos clients une visibilité en temps réel — nous développons l'outil adapté à votre situation spécifique." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { ref: servicesRef, className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          variants: textLine,
          initial: "hidden",
          animate: servicesInView ? "show" : "hidden",
          className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance",
          children: [
            "Ce que nous développons pour les entreprises de ",
            location.region
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: stagger(),
          initial: "hidden",
          animate: servicesInView ? "show" : "hidden",
          className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
          children: SERVICES.map((item) => /* @__PURE__ */ jsx(motion.div, { variants: cardItem, whileHover: hoverLift, children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: item.href,
              className: "flex flex-col h-full bg-white border border-border rounded-2xl p-6 shadow-card hover:border-secondary/40 transition-colors duration-200 group",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-primary mb-2 group-hover:text-secondary transition-colors duration-200", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty flex-1", children: item.body }),
                /* @__PURE__ */ jsx("span", { className: "font-inter text-xs text-secondary mt-4", children: "En savoir plus →" })
              ]
            }
          ) }, item.href))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-section py-20", children: /* @__PURE__ */ jsxs("div", { ref: faqRef, className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          variants: textLine,
          initial: "hidden",
          animate: faqInView ? "show" : "hidden",
          className: "font-archivo font-bold text-3xl tracking-display text-primary mb-10 text-balance",
          children: "Questions pratiques"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: stagger(),
          initial: "hidden",
          animate: faqInView ? "show" : "hidden",
          className: "flex flex-col gap-4",
          children: FAQ.map((item, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: cardItem,
              whileHover: hoverLift,
              className: "bg-white border border-border rounded-2xl p-6 cursor-default",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-base tracking-display text-primary mb-2", children: item.q }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty", children: item.a })
              ]
            },
            i
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-20", children: /* @__PURE__ */ jsx("div", { ref: ctaRef, className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: vFadeUp,
        initial: "hidden",
        animate: ctaInView ? "show" : "hidden",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-white mb-4 text-balance", children: [
            "Parlons de votre projet à ",
            location.city
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-white/60 leading-relaxed max-w-[50ch] mx-auto mb-8", children: "Premier échange de 30 minutes pour comprendre votre besoin. Gratuit, sans engagement." }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/#contact",
              className: "inline-flex items-center bg-secondary text-white font-inter font-medium text-sm px-8 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
              children: "Prendre contact"
            }
          )
        ]
      }
    ) }) })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white flex flex-col", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "text-secondary hover:text-secondary/80 transition-colors",
        "aria-label": BRAND,
        children: /* @__PURE__ */ jsx(Logo, {})
      }
    ) }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 flex items-center justify-center px-6", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: textReveal(),
        initial: "hidden",
        animate: "show",
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-secondary/60 mb-6", children: "404" }),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              variants: textLine,
              className: "font-archivo font-black text-3xl md:text-4xl tracking-display text-primary mb-4 text-balance",
              children: "Page introuvable"
            }
          ),
          /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "font-inter text-muted mb-10 text-pretty", children: "La page que vous cherchez n'existe pas ou a été déplacée." }),
          /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(motion.div, { whileTap: { scale: 0.97 }, style: { display: "inline-block" }, children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: "bg-primary text-white font-inter font-medium text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors",
              children: "Retour à l'accueil"
            }
          ) }) })
        ]
      }
    ) })
  ] });
}
function Confirmation() {
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-24 md:py-32 min-h-[70vh] flex items-center", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl px-6 w-full", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      variants: textReveal(),
      initial: "hidden",
      animate: "show",
      className: "bg-white rounded-2xl border border-border shadow-card-md p-10 md:p-14 text-center",
      children: [
        /* @__PURE__ */ jsx(motion.div, { variants: textLine, className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-success/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", className: "w-8 h-8 text-success", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M5 13l4 4L19 7", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) }),
        /* @__PURE__ */ jsx(
          motion.h1,
          {
            variants: textLine,
            className: "font-archivo font-black text-primary tracking-display text-balance leading-tight mb-3",
            style: { fontSize: "clamp(1.5rem, 3vw, 2.25rem)" },
            children: "Message envoyé !"
          }
        ),
        /* @__PURE__ */ jsxs(motion.p, { variants: textLine, className: "font-inter text-muted leading-relaxed mb-2 max-w-[40ch] mx-auto", children: [
          "Merci pour votre message. Nous vous répondrons sous",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-primary font-semibold", children: "48 heures ouvrées" }),
          "."
        ] }),
        /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "font-inter text-sm text-muted/70 mb-10", children: "Un email de confirmation vous a également été envoyé." }),
        /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/",
            className: "inline-flex items-center gap-2 bg-primary text-white font-inter font-medium text-sm px-7 py-3 rounded-xl hover:bg-primary/90 transition-colors",
            children: [
              "Retour à l'accueil",
              /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 13 13", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2.5 6.5h8M7 2.5l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        ) })
      ]
    }
  ) }) });
}
function MentionsLegales() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-section border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "font-inter text-sm text-muted hover:text-secondary transition-colors duration-200 inline-flex items-center gap-1.5 mb-6",
          children: [
            /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M11 7H3M6 4l-3 3 3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
            "Retour à l'accueil"
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "label text-secondary mb-3", children: "Légal" }),
      /* @__PURE__ */ jsx("h1", { className: "font-archivo font-black text-primary tracking-display leading-[1.06]", style: { fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }, children: "Mentions légales" }),
      /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted mt-3", children: "Dernière mise à jour : juillet 2026" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-6 py-14 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12", children: [
      /* @__PURE__ */ jsxs(Section$1, { title: "1. Éditeur du site", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Le site ",
          /* @__PURE__ */ jsx("strong", { children: "djexa.fr" }),
          " est édité par :"
        ] }),
        /* @__PURE__ */ jsxs("dl", { className: "mt-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx(Row, { label: "Dénomination", value: BRAND }),
          /* @__PURE__ */ jsx(Row, { label: "Forme juridique", value: "Entreprise individuelle (auto-entrepreneur)" }),
          /* @__PURE__ */ jsx(Row, { label: "SIRET", value: "[À COMPLÉTER]" }),
          /* @__PURE__ */ jsx(Row, { label: "Siège social", value: "Paris, France" }),
          /* @__PURE__ */ jsx(Row, { label: "Email", value: "contact@djexa.fr" }),
          /* @__PURE__ */ jsx(Row, { label: "Directeur de la publication", value: "Madi Diarra" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section$1, { title: "2. Hébergement", children: [
        /* @__PURE__ */ jsx("p", { children: "Le site est hébergé par :" }),
        /* @__PURE__ */ jsxs("dl", { className: "mt-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx(Row, { label: "Hébergeur", value: "Cloudflare, Inc." }),
          /* @__PURE__ */ jsx(Row, { label: "Adresse", value: "101 Townsend St, San Francisco, CA 94107, États-Unis" }),
          /* @__PURE__ */ jsx(Row, { label: "Site", value: "cloudflare.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section$1, { title: "3. Propriété intellectuelle", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "L'ensemble du contenu de ce site — textes, visuels, maquettes et logos — est la propriété exclusive de ",
          BRAND,
          ", sauf mention contraire."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3", children: [
          "Toute reproduction, représentation, modification, publication, adaptation ou exploitation partielle ou totale, par quelque procédé que ce soit, est strictement interdite sans l'autorisation écrite préalable de ",
          BRAND,
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section$1, { title: "4. Responsabilité", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          BRAND,
          " s'efforce de maintenir les informations de ce site exactes et à jour. Toutefois, ",
          BRAND,
          " ne saurait être tenu responsable des erreurs ou omissions, ni de tout dommage résultant de l'utilisation des informations présentées."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3", children: [
          "Les liens hypertextes vers d'autres sites sont fournis à titre informatif. ",
          BRAND,
          " n'assume aucune responsabilité quant au contenu de ces sites tiers."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section$1, { title: "5. Cookies", children: [
        /* @__PURE__ */ jsx("p", { children: "Ce site n'utilise pas de cookies publicitaires ou de traceurs tiers à des fins de ciblage. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Conformément à la réglementation en vigueur, vous pouvez paramétrer votre navigateur pour refuser les cookies. Cela peut affecter le bon fonctionnement de certaines fonctionnalités." })
      ] }),
      /* @__PURE__ */ jsx(Section$1, { title: "6. Droit applicable", children: /* @__PURE__ */ jsx("p", { children: "Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents." }) }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-border pt-8", children: /* @__PURE__ */ jsxs("p", { className: "font-inter text-sm text-muted", children: [
        "Pour toute question relative aux mentions légales, vous pouvez nous contacter à l'adresse",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:contact@djexa.fr", className: "text-secondary hover:underline", children: "contact@djexa.fr" }),
        "."
      ] }) })
    ] }) })
  ] });
}
function Section$1({ title, children }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "font-archivo font-black text-primary text-xl tracking-display mb-4 pb-3 border-b border-border", children: title }),
    /* @__PURE__ */ jsx("div", { className: "font-inter text-muted leading-relaxed text-sm flex flex-col gap-0", children })
  ] });
}
function Row({ label, value }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsx("dt", { className: "font-medium text-primary/70 min-w-[160px] shrink-0", children: label }),
    /* @__PURE__ */ jsx("dd", { className: "text-muted", children: value })
  ] });
}
function PolitiqueConfidentialite() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-section border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "font-inter text-sm text-muted hover:text-secondary transition-colors duration-200 inline-flex items-center gap-1.5 mb-6",
          children: [
            /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M11 7H3M6 4l-3 3 3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
            "Retour à l'accueil"
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "label text-secondary mb-3", children: "Légal" }),
      /* @__PURE__ */ jsx("h1", { className: "font-archivo font-black text-primary tracking-display leading-[1.06]", style: { fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }, children: "Politique de confidentialité" }),
      /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted mt-3", children: "Dernière mise à jour : juillet 2026" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-6 py-14 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12", children: [
      /* @__PURE__ */ jsxs(Section, { title: "1. Responsable du traitement", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Les données personnelles collectées sur ce site sont traitées par ",
          /* @__PURE__ */ jsx("strong", { children: BRAND }),
          ", entreprise individuelle dont le siège est à Paris, France."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3", children: [
          "Contact : ",
          /* @__PURE__ */ jsx("a", { href: "mailto:contact@djexa.fr", className: "text-secondary hover:underline", children: "contact@djexa.fr" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "2. Données collectées", children: [
        /* @__PURE__ */ jsx("p", { children: "Lors de l'utilisation du formulaire de contact, les informations suivantes peuvent être collectées :" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 flex flex-col gap-2 pl-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-secondary mt-1", children: "–" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Nom" }),
              " — identification de l'interlocuteur"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-secondary mt-1", children: "–" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Adresse email" }),
              " — pour vous répondre"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-secondary mt-1", children: "–" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Numéro de téléphone" }),
              " — optionnel, pour vous rappeler si nécessaire"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-secondary mt-1", children: "–" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Nom de l'entreprise" }),
              " — optionnel, pour comprendre le contexte de votre demande"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-secondary mt-1", children: "–" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Description du besoin" }),
              " — pour préparer notre échange"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4", children: "Ces données sont transmises de manière sécurisée et ne sont jamais cédées, vendues ou transmises à des tiers." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "3. Finalité et base légale", children: [
        /* @__PURE__ */ jsx("p", { children: "Les données collectées via le formulaire de contact sont utilisées exclusivement dans le but de répondre à votre demande et d'échanger avec vous sur un éventuel projet." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3", children: [
          "La base légale de ce traitement est l'",
          /* @__PURE__ */ jsx("strong", { children: "intérêt légitime" }),
          " de ",
          BRAND,
          " à répondre aux demandes entrantes (article 6.1.f du RGPD), ainsi que votre ",
          /* @__PURE__ */ jsx("strong", { children: "consentement" }),
          " implicite lors de la soumission du formulaire."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "4. Durée de conservation", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Vos données sont conservées pendant une durée maximale de ",
          /* @__PURE__ */ jsx("strong", { children: "3 ans" }),
          " à compter de notre dernier échange, sauf demande de suppression de votre part."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Au-delà de ce délai, elles sont supprimées ou anonymisées." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "5. Vos droits", children: [
        /* @__PURE__ */ jsx("p", { children: "Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 flex flex-col gap-3 pl-4", children: [
          ["Droit d'accès", "Obtenir une copie des données vous concernant que nous détenons."],
          ["Droit de rectification", "Corriger des données inexactes ou incomplètes."],
          ["Droit à l'effacement", "Demander la suppression de vos données (« droit à l'oubli »)."],
          ["Droit à la portabilité", "Recevoir vos données dans un format structuré et lisible."],
          ["Droit d'opposition", "Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière."],
          ["Droit à la limitation", "Demander le gel temporaire du traitement de vos données."]
        ].map(([right, desc]) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-secondary mt-0.5", children: "–" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: right }),
            " : ",
            desc
          ] })
        ] }, right)) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
          "Pour exercer ces droits, contactez-nous à",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:contact@djexa.fr", className: "text-secondary hover:underline", children: "contact@djexa.fr" }),
          ". Nous répondrons dans un délai maximum de ",
          /* @__PURE__ */ jsx("strong", { children: "30 jours" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "6. Réclamation auprès de la CNIL", children: [
        /* @__PURE__ */ jsx("p", { children: "Si vous estimez que le traitement de vos données n'est pas conforme à la réglementation, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :" }),
        /* @__PURE__ */ jsxs("dl", { className: "mt-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("dt", { className: "font-medium text-primary/70 min-w-[80px] shrink-0", children: "Site" }),
            /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsx("a", { href: "https://www.cnil.fr", target: "_blank", rel: "noopener noreferrer", className: "text-secondary hover:underline", children: "www.cnil.fr" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("dt", { className: "font-medium text-primary/70 min-w-[80px] shrink-0", children: "Adresse" }),
            /* @__PURE__ */ jsx("dd", { children: "3 Place de Fontenoy, TSA 80715 — 75334 Paris Cedex 07" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "7. Cookies et traceurs", children: [
        /* @__PURE__ */ jsx("p", { children: "Ce site n'utilise pas de cookies publicitaires, de traceurs de réseaux sociaux ou d'outils d'analyse comportementale tiers (Google Analytics, Facebook Pixel, etc.)." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Des cookies techniques strictement nécessaires au fonctionnement du site (session, sécurité) peuvent être déposés. Ces cookies ne nécessitent pas votre consentement au sens de la réglementation en vigueur." })
      ] }),
      /* @__PURE__ */ jsx(Section, { title: "8. Sécurité", children: /* @__PURE__ */ jsxs("p", { children: [
        BRAND,
        " met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Les données transitent via des connexions HTTPS chiffrées."
      ] }) }),
      /* @__PURE__ */ jsx(Section, { title: "9. Modifications", children: /* @__PURE__ */ jsx("p", { children: "Cette politique peut être mise à jour à tout moment pour refléter l'évolution de nos pratiques ou des exigences légales. La date de dernière mise à jour est indiquée en haut de cette page." }) }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-border pt-8", children: /* @__PURE__ */ jsxs("p", { className: "font-inter text-sm text-muted", children: [
        "Pour toute question relative à la protection de vos données, contactez-nous à",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:contact@djexa.fr", className: "text-secondary hover:underline", children: "contact@djexa.fr" }),
        "."
      ] }) })
    ] }) })
  ] });
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h2", { className: "font-archivo font-black text-primary text-xl tracking-display mb-4 pb-3 border-b border-border", children: title }),
    /* @__PURE__ */ jsx("div", { className: "font-inter text-muted leading-relaxed text-sm", children })
  ] });
}
function AppRoutes() {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/projets/:slug", element: /* @__PURE__ */ jsx(ProjectDetail, {}) }),
      services.map((s) => /* @__PURE__ */ jsx(Route, { path: `/${s.slug}`, element: /* @__PURE__ */ jsx(ServicePage, {}) }, s.slug)),
      /* @__PURE__ */ jsx(Route, { path: "/confirmation", element: /* @__PURE__ */ jsx(Confirmation, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/mentions-legales", element: /* @__PURE__ */ jsx(MentionsLegales, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/politique-de-confidentialite", element: /* @__PURE__ */ jsx(PolitiqueConfidentialite, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(BlogIndex, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blog/:slug", element: /* @__PURE__ */ jsx(BlogPost, {}) }),
      locations.map((l) => /* @__PURE__ */ jsx(
        Route,
        {
          path: `/developpeur-applications-metier-${l.slug}`,
          element: /* @__PURE__ */ jsx(LocationPage, {})
        },
        l.slug
      ))
    ] }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] });
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(AppRoutes, {}) }) })
  );
}
export {
  render
};
