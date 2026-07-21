export const services = [
  {
    slug: 'applications-metier',
    meta: {
      title: 'Applications métier sur mesure | DJEXA',
      description:
        "Studio spécialisé en applications métier sur mesure. ERP, CRM, portail client, gestion de chantier — des logiciels pensés autour de votre façon de travailler.",
    },
    hero: {
      eyebrow: 'Applications métier',
      title: 'Des logiciels pensés autour de votre activité',
      subtitle:
        "Votre entreprise a des processus qui lui sont propres. Elle mérite un outil qui les respecte — pas un logiciel générique qui vous oblige à changer votre façon de travailler.",
      cta: 'Discuter de votre projet',
    },
    intro: {
      title: 'Ce que nous développons',
      body:
        "Nous aidons les entreprises à remplacer les fichiers Excel, les saisies manuelles et les outils dispersés par une application unique, fiable et adaptée à leur métier. Chaque projet part de votre réalité terrain, pas d'un cahier des charges standard.",
    },
    services: [
      { slug: 'erp-sur-mesure', title: 'ERP sur mesure', icon: '⚙️', body: "Un système de gestion intégré calqué sur vos processus réels : achats, stocks, production, facturation." },
      { slug: 'portail-client', title: 'Portail client', icon: '🔗', body: "Un espace en ligne où vos clients suivent leurs commandes et accèdent à leurs documents sans vous appeler." },
      { slug: 'automatisation-processus', title: 'Automatisation', icon: '⚡', body: "Éliminez les tâches manuelles répétitives : relances, transferts de données, alertes, rapports automatiques." },
      { slug: 'gestion-chantier', title: 'Gestion de chantier', icon: '🏗️', body: "Planning, rapports terrain, suivi des travaux — tout centralisé, accessible depuis le bureau ou le chantier." },
      { slug: 'gestion-intervention', title: 'Gestion des interventions', icon: '🔧', body: "Planification, fiches d'intervention numérique, signature client et rapport auto-généré." },
      { slug: 'crm-sur-mesure', title: 'CRM sur mesure', icon: '📊', body: "Un CRM épuré, calqué sur votre cycle de vente réel, sans les fonctionnalités inutiles des grandes plateformes." },
    ],
    faq: [
      {
        q: "En quoi une application sur mesure est-elle différente d'un logiciel du marché ?",
        a: "Un logiciel du marché est conçu pour des milliers d'entreprises différentes. Il impose sa logique à votre activité. Une application sur mesure est construite autour de vos processus existants — vous n'avez rien à adapter.",
      },
      {
        q: "Est-ce accessible avec un budget limité ?",
        a: "Oui, à condition de commencer par un périmètre bien ciblé. Un MVP (version initiale utile et utilisable) se développe en 4 à 12 semaines. On part de là et on améliore en continu, selon vos retours et votre budget.",
      },
      {
        q: "Qui s'occupe de la maintenance après le développement ?",
        a: "Nous proposons un contrat de maintenance évolutive si vous souhaitez faire évoluer l'outil dans le temps. Vous êtes aussi libre de confier la maintenance à un autre développeur — tous les accès vous appartiennent.",
      },
    ],
  },

  {
    slug: 'erp-sur-mesure',
    benefit: 'Centralisez toute votre activité',
    meta: {
      title: 'ERP sur mesure | DJEXA',
      description:
        "ERP sur mesure — un système de gestion intégré conçu autour de vos processus réels, pas des fonctionnalités génériques d'un éditeur. Studio indépendant, délais maîtrisés.",
    },
    hero: {
      eyebrow: 'ERP sur mesure',
      title: "Un ERP qui suit votre logique, pas l'inverse",
      subtitle:
        "Les ERP du marché sont conçus pour des milliers d'entreprises différentes. Résultat : vous passez votre temps à contourner l'outil plutôt qu'à travailler avec lui.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Ce qui se passe avec les ERP standard',
      items: [
        {
          title: 'Vous payez pour des fonctionnalités inutiles',
          body: "Odoo, SAP, Cegid : des centaines de modules, dont 80 % ne correspondent pas à votre activité. Vous les payez quand même, dans l'abonnement ou dans la complexité.",
        },
        {
          title: "Vous contournez l'outil au lieu de travailler avec",
          body: "Export Excel pour calculer quelque chose que le logiciel ne sait pas faire. Saisie en double parce que l'intégration n'est pas prévue. Ces contournements deviennent la norme.",
        },
        {
          title: "L'adoption est difficile",
          body: "Une interface surchargée, une logique étrangère à votre métier — vos équipes n'utilisent pas l'outil comme prévu, ou pas du tout.",
        },
      ],
    },
    features: {
      title: 'Ce que vous obtenez avec un ERP sur mesure',
      items: [
        {
          title: 'Tableau de bord pensé pour votre activité',
          body: "Les indicateurs qui comptent pour vous, affichés en temps réel. Pas de données inutiles, pas de tableaux qui ne correspondent à rien.",
        },
        {
          title: 'Workflows calqués sur vos processus réels',
          body: "Chaque étape de votre activité — commande, production, livraison, facturation — suit la logique que vous avez définie avec vos équipes.",
        },
        {
          title: 'Modules uniquement pour ce que vous faites',
          body: "Achats, stocks, production, facturation, RH : vous choisissez ce dont vous avez besoin. Rien d'autre.",
        },
        {
          title: 'Intégrations ciblées',
          body: "Connexion à votre outil de comptabilité, votre CRM, vos fournisseurs — uniquement ce qui est utile pour votre activité.",
        },
      ],
    },
    faq: [
      {
        q: "C'est quoi exactement un ERP sur mesure ?",
        a: "Un système de gestion intégré (achats, ventes, stocks, RH, facturation) développé spécifiquement pour les processus de votre entreprise. Pas de fonctionnalités inutiles, pas de logique étrangère à votre métier.",
      },
      {
        q: "Pourquoi ne pas prendre Odoo ou Sage plutôt ?",
        a: "Ces solutions conviennent si vos processus sont proches des standards de votre secteur. Si votre activité a une logique propre — cycle de vente atypique, production spécifique, workflow non standard — le sur mesure est plus rentable sur la durée.",
      },
      {
        q: "Quel délai pour développer un ERP sur mesure ?",
        a: "Entre 2 et 5 mois selon la complexité. Nous livrons une première version utilisable rapidement, puis l'outil évolue avec vos retours terrain.",
      },
      {
        q: "Puis-je faire évoluer l'application avec un autre développeur ?",
        a: "Oui. Tous les accès sont les vôtres dès la livraison. Vous pouvez faire évoluer l'outil avec nous ou avec n'importe quel autre développeur.",
      },
    ],
  },

  {
    slug: 'portail-client',
    benefit: 'Donnez un accès direct à vos clients',
    meta: {
      title: 'Portail client sur mesure | DJEXA',
      description:
        "Donnez à vos clients un espace en ligne pour suivre leurs commandes, accéder aux documents et communiquer avec vos équipes. Moins d'appels, plus de satisfaction client.",
    },
    hero: {
      eyebrow: 'Portail client',
      title: 'Donnez à vos clients une visibilité en temps réel',
      subtitle:
        "Vos clients vous appellent plusieurs fois par semaine pour savoir où en est leur commande ou leur dossier. Un portail client supprime ces appels et libère vos équipes.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Ce qui se passe sans portail client',
      items: [
        {
          title: 'Les coups de téléphone inutiles mobilisent vos équipes',
          body: "\"Où en est ma commande ?\" \"La livraison est pour quand ?\" Des questions légitimes, mais qui volent du temps à des personnes qui pourraient avancer leur travail.",
        },
        {
          title: 'Le partage de documents par email crée de la confusion',
          body: "Quelle version du devis est la bonne ? L'attestation a été renvoyée mais introuvable. L'historique des échanges est noyé dans des fils de 40 emails.",
        },
        {
          title: 'Vos clients ont l\'impression d\'être dans le flou',
          body: "Un client qui doit appeler pour avoir des nouvelles est un client qui se demande si vous gérez bien son dossier. Ce doute coûte des renouvellements et des recommandations.",
        },
      ],
    },
    features: {
      title: 'Ce que vous obtenez avec un portail client',
      items: [
        {
          title: 'Espace personnel sécurisé',
          body: "Chaque client accède à son espace avec ses identifiants. Il voit ses données, pas celles des autres.",
        },
        {
          title: 'Suivi en temps réel',
          body: "Avancement des commandes, statut des dossiers, planning des interventions — mis à jour automatiquement depuis votre back-office.",
        },
        {
          title: 'Documents centralisés',
          body: "Devis, factures, rapports, attestations : tout au même endroit, accessible à tout moment depuis un navigateur.",
        },
        {
          title: 'Messagerie intégrée',
          body: "Communication directe avec vos équipes, avec historique complet et notifications automatiques aux étapes clés.",
        },
      ],
    },
    faq: [
      {
        q: "Est-ce que ça nécessite un compte pour chaque client ?",
        a: "Oui, mais l'inscription peut être automatisée : dès qu'une commande est créée dans votre système, le client reçoit son accès par email. Aucune action manuelle requise de votre part.",
      },
      {
        q: "Est-ce que c'est sécurisé pour des données sensibles ?",
        a: "Oui. L'accès est authentifié, les données de chaque client sont strictement isolées, et le stockage est chiffré. La conformité RGPD est incluse dans la conception.",
      },
      {
        q: "Peut-on connecter ça à notre logiciel existant ?",
        a: "C'est souvent le cas. Le portail client s'alimente depuis votre base de données ou votre logiciel de gestion via une API. Nous faisons un audit de faisabilité en début de projet.",
      },
    ],
  },

  {
    slug: 'automatisation-processus',
    benefit: 'Supprimez les tâches répétitives',
    meta: {
      title: 'Automatisation des processus métier | DJEXA',
      description:
        "Éliminez les tâches manuelles répétitives — saisies en double, relances manuelles, transferts d'information — et concentrez vos équipes sur ce qui a de la valeur.",
    },
    hero: {
      eyebrow: 'Automatisation',
      title: 'Automatisez ce qui vous fait perdre du temps',
      subtitle:
        "Dans beaucoup d'entreprises, des personnes qualifiées passent des heures chaque semaine à des tâches qui pourraient s'exécuter toutes seules. Ce temps-là a un coût.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Les frictions les plus courantes',
      items: [
        {
          title: 'Saisies en double entre plusieurs systèmes',
          body: "Une commande saisie dans le CRM doit être ressaisie dans le logiciel de facturation, puis dans le tableau de suivi Excel. Chaque re-saisie est une source d'erreur.",
        },
        {
          title: "Relances qui dépendent de la mémoire de quelqu'un",
          body: "Impayés, devis en attente, renouvellements d'abonnement : si quelqu'un ne pense pas à relancer, rien ne se passe. Et les oublis coûtent de l'argent.",
        },
        {
          title: 'Rapports et synthèses produits manuellement',
          body: "Consolider les données de plusieurs sources pour produire un tableau de bord mensuel : une demi-journée de travail chaque mois, pour une photo du passé.",
        },
      ],
    },
    features: {
      title: "Ce que l'automatisation peut faire pour vous",
      items: [
        {
          title: 'Workflows déclenchés par des événements métier',
          body: "Quand une commande est validée, le stock se met à jour, la facture se génère et le client reçoit une confirmation — sans intervention humaine.",
        },
        {
          title: 'Relances programmées et personnalisées',
          body: "Emails ou SMS de relance automatiques, à la bonne personne, au bon moment, avec les bonnes informations tirées de votre base de données.",
        },
        {
          title: 'Alertes pour ce qui mérite une attention humaine',
          body: "Tout ce qui peut être automatisé l'est. Ce qui nécessite un jugement humain déclenche une alerte, pas une to-do list qui déborde.",
        },
        {
          title: 'Connexion entre vos outils existants',
          body: "Vos outils actuels continuent de fonctionner. On les connecte entre eux via des APIs pour supprimer les saisies en double sans tout remplacer.",
        },
      ],
    },
    faq: [
      {
        q: "Est-ce qu'on doit tout remplacer pour automatiser ?",
        a: "Non. La plupart du temps, on connecte les outils existants entre eux. L'objectif est de supprimer les frictions, pas de tout refaire.",
      },
      {
        q: "Comment identifie-t-on ce qui mérite d'être automatisé ?",
        a: "On commence par un audit rapide de vos processus : quelles tâches sont répétitives, quelle est leur fréquence, quel est leur coût en temps. On priorise ce qui a le meilleur retour sur investissement.",
      },
      {
        q: "Que se passe-t-il si un workflow automatisé rencontre un cas non prévu ?",
        a: "On conçoit toujours un mécanisme d'exception : l'automatisation s'arrête et alerte la bonne personne. Aucun processus critique ne tourne en aveugle.",
      },
    ],
  },

  {
    slug: 'gestion-chantier',
    benefit: 'Pilotez vos chantiers en temps réel',
    meta: {
      title: 'Logiciel de gestion de chantier sur mesure | DJEXA',
      description:
        "Application de gestion de chantier sur mesure pour entreprises BTP et artisans — planning partagé, rapports terrain numériques, suivi des travaux, documents chantier centralisés.",
    },
    hero: {
      eyebrow: 'Gestion de chantier',
      title: 'Pilotez vos chantiers depuis une seule interface',
      subtitle:
        "Rapports papier, photos perdues, planning non partagé, client dans le flou — les chantiers modernes méritent mieux que des outils conçus pour un autre siècle.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Ce qui freine les entreprises du bâtiment',
      items: [
        {
          title: "Le planning existe en plusieurs versions, aucune n'est à jour",
          body: "Le chef de chantier a sa version, le bureau en a une autre. Les modifications ne se propagent pas. Les équipes arrivent sans savoir ce qu'elles doivent faire.",
        },
        {
          title: 'Les rapports terrain arrivent trop tard et sont incomplets',
          body: "Comptes-rendus sur papier, photos par WhatsApp, appels téléphoniques pour donner les avancements : l'information met des jours à remonter, si elle remonte.",
        },
        {
          title: "Les clients sont dans le flou sur l'avancement",
          body: "Un client qui ne sait pas où en sont ses travaux appelle, pousse, stresse. Et quand il est mécontent de l'information, il l'est aussi du chantier.",
        },
      ],
    },
    features: {
      title: 'Ce que vous obtenez',
      items: [
        {
          title: 'Planning partagé en temps réel',
          body: "Les équipes terrain voient leurs tâches du jour sur leur téléphone. Les modifications au bureau se propagent instantanément, sans appel à 7h du matin.",
        },
        {
          title: 'Rapports journaliers numériques',
          body: "Photo géolocalisée + commentaire = rapport en 2 minutes depuis le chantier. Stocké, horodaté, accessible depuis le bureau immédiatement.",
        },
        {
          title: 'Suivi des ressources',
          body: "Heures par tâche et par compagnon, matériaux utilisés, présence des sous-traitants — tout tracé sans ressaisie au bureau.",
        },
        {
          title: 'Visibilité client',
          body: "Un espace de suivi pour vos clients : avancement, photos, planning prévisionnel. Moins d'appels, plus de confiance.",
        },
      ],
    },
    faq: [
      {
        q: "Fonctionne-t-il sans connexion internet sur le chantier ?",
        a: "Oui, l'application mobile peut fonctionner hors-ligne. Les données se synchronisent automatiquement dès que la connexion est rétablie.",
      },
      {
        q: "Est-ce utilisable sur les smartphones des compagnons ?",
        a: "C'est conçu pour ça. Interface épurée, boutons larges, utilisable avec des gants. Pas besoin de formation longue.",
      },
      {
        q: "Peut-on gérer plusieurs chantiers simultanément ?",
        a: "Oui. Le tableau de bord bureau donne une vue d'ensemble de tous les chantiers en cours, avec alertes sur les retards ou problèmes signalés.",
      },
    ],
  },

  {
    slug: 'gestion-intervention',
    benefit: 'Gérez vos interventions sans friction',
    meta: {
      title: 'Logiciel de gestion des interventions sur mesure | DJEXA',
      description:
        "Application de gestion des interventions terrain pour entreprises de maintenance, SAV et dépannage — planification, fiche numérique, signature client, rapport automatique.",
    },
    hero: {
      eyebrow: 'Gestion des interventions',
      title: 'Planifiez et suivez vos interventions terrain',
      subtitle:
        "Un agenda papier, un technicien qui arrive sans les bonnes infos, un client non prévenu du retard — chaque intervention manquée ou mal gérée coûte de la relation client.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Les problèmes les plus fréquents',
      items: [
        {
          title: 'Planification manuelle = erreurs et doubles réservations',
          body: "Agenda partagé par email ou tableau Excel : deux personnes affectées au même créneau, un technicien envoyé sans les bonnes pièces, un client non prévenu.",
        },
        {
          title: 'Le technicien arrive sans les informations nécessaires',
          body: "Historique du matériel non consulté, pièces non préparées, adresse incertaine. Résultat : intervention incomplète, second passage nécessaire.",
        },
        {
          title: "Les rapports d'intervention doivent être ressaisis au bureau",
          body: "Compte-rendu manuscrit remis en fin de journée, ressaisi le lendemain. Perte de temps, erreurs de transcription, et facture qui part avec 3 jours de retard.",
        },
      ],
    },
    features: {
      title: 'Ce que vous obtenez',
      items: [
        {
          title: 'Planning intelligent',
          body: "Affectation par zone géographique, compétence et disponibilité. Visualisation en temps réel de l'emploi du temps de chaque technicien.",
        },
        {
          title: "Fiche d'intervention numérique",
          body: "Chaque technicien accède sur son téléphone à l'historique du matériel, à l'adresse, aux pièces à prévoir, et remplit son compte-rendu directement sur place.",
        },
        {
          title: 'Signature électronique',
          body: "Le client signe sur l'écran du technicien. Le rapport est généré automatiquement et envoyé par email dans la minute qui suit.",
        },
        {
          title: 'Gestion du stock de pièces',
          body: "Suivi du stock par technicien et par dépôt. Alertes de réapprovisionnement automatiques. Plus d'intervention avortée faute de pièce.",
        },
      ],
    },
    faq: [
      {
        q: "Comment les techniciens reçoivent-ils leurs missions ?",
        a: "Par notification sur leur téléphone dès qu'une intervention leur est affectée. Ils voient leur planning de la journée, l'adresse, et les infos du client.",
      },
      {
        q: "Peut-on gérer différents types d'interventions ?",
        a: "Oui. Maintenance préventive, dépannage, installation, visite commerciale — chaque type peut avoir son propre formulaire et son propre workflow.",
      },
      {
        q: "La facturation peut-elle être automatisée ?",
        a: "Oui. À partir du compte-rendu validé, la facture peut être générée automatiquement et envoyée au client, avec les références de l'intervention.",
      },
    ],
  },

  {
    slug: 'crm-sur-mesure',
    benefit: 'Gérez vos relations clients efficacement',
    meta: {
      title: 'CRM sur mesure | DJEXA',
      description:
        "CRM sur mesure — pipeline commercial adapté à votre cycle de vente, relances automatisées, suivi des prospects et clients, sans la complexité de Salesforce ou HubSpot.",
    },
    hero: {
      eyebrow: 'CRM sur mesure',
      title: 'Un CRM qui parle votre langue commerciale',
      subtitle:
        "Salesforce, HubSpot, Pipedrive : conçus pour des équipes commerciales de 50 personnes dans des grandes entreprises. Pas pour votre cycle de vente à vous.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Ce qui ne fonctionne pas avec les CRM standard',
      items: [
        {
          title: 'Trop complexe pour vos équipes',
          body: "Des dizaines de champs inutiles, une interface surchargée, une logique qui ne correspond pas à votre façon de vendre. Résultat : vos commerciaux n'utilisent pas le CRM.",
        },
        {
          title: 'Le cycle de vente ne correspond pas au standard',
          body: "Un devis qui se négocie sur 6 mois, une vente qui implique 3 interlocuteurs différents, un renouvellement annuel — les CRM du marché n'ont pas prévu votre logique.",
        },
        {
          title: 'Les relances dépendent de chaque commercial',
          body: "Pas de process partagé = pas de suivi cohérent. Quand un commercial quitte l'entreprise, ses prospects disparaissent avec lui.",
        },
      ],
    },
    features: {
      title: 'Ce que vous obtenez avec un CRM sur mesure',
      items: [
        {
          title: 'Pipeline calqué sur votre cycle de vente',
          body: "Vos étapes commerciales réelles, dans votre ordre, avec les informations pertinentes à chaque étape. Pas les étapes par défaut d'un éditeur américain.",
        },
        {
          title: 'Fiche client utile',
          body: "L'historique qui compte vraiment : devis, échanges, relances, commandes, tout au même endroit, accessible en 5 secondes.",
        },
        {
          title: 'Relances automatiques sans emails génériques',
          body: "Relances programmées à partir des données réelles du prospect : date du dernier contact, montant du devis, secteur d'activité. Personnalisées, pas spam.",
        },
        {
          title: 'Accessible sur mobile',
          body: "Vos commerciaux terrain saisissent leurs notes après un rendez-vous depuis leur téléphone. Pas de ressaisie au bureau.",
        },
      ],
    },
    faq: [
      {
        q: "Peut-on migrer notre base contacts existante ?",
        a: "Oui, la migration depuis Excel, HubSpot ou tout autre système est incluse dans le projet. Vos données existantes ne sont pas perdues.",
      },
      {
        q: "Peut-on connecter le CRM à notre logiciel de facturation ?",
        a: "Oui. Quand un prospect devient client, ses informations se synchronisent automatiquement dans votre logiciel de facturation, sans ressaisie.",
      },
      {
        q: "Combien d'utilisateurs peut-il gérer ?",
        a: "Il n'y a pas de limite technique. Chaque utilisateur a ses propres droits d'accès : un commercial voit ses prospects, un manager voit tout.",
      },
    ],
  },

  {
    slug: 'logiciel-btp',
    meta: {
      title: 'Logiciel BTP sur mesure | DJEXA',
      description:
        "Logiciel BTP sur mesure — gestion de chantier, suivi des interventions, facturation à l'avancement, gestion sous-traitants. Conçu pour les entreprises du bâtiment et travaux publics.",
    },
    hero: {
      eyebrow: 'Logiciel BTP',
      title: 'Des outils numériques adaptés aux contraintes du BTP',
      subtitle:
        "Le bâtiment a ses propres règles : sous-traitance, situations de travaux, documents réglementaires, équipes terrain mobiles. Les logiciels génériques ne sont pas faits pour ça.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Les contraintes spécifiques du BTP que les logiciels génériques ignorent',
      items: [
        {
          title: 'La gestion des sous-traitants est complexe',
          body: "Suivi des heures, des attestations, des retenues de garantie, des situations de travaux — aucun logiciel générique ne gère ça correctement sans paramétrage lourd.",
        },
        {
          title: "Les documents réglementaires s'accumulent",
          body: "PPSPS, DOE, PGC, déclarations de sous-traitance — produits manuellement, stockés de façon non structurée, difficiles à retrouver en cas de contrôle.",
        },
        {
          title: "La facturation à l'avancement nécessite un suivi rigoureux",
          body: "Situations de travaux mensuelles, retenues de garantie, avoirs — une facturation BTP est complexe et l'erreur coûte cher.",
        },
      ],
    },
    features: {
      title: 'Ce que vous obtenez',
      items: [
        {
          title: 'Gestion complète du chantier',
          body: "Planning, ressources humaines, matériaux, engins, sous-traitants — tout dans un seul tableau de bord, avec vue d'ensemble sur tous les chantiers en cours.",
        },
        {
          title: 'Documents réglementaires intégrés',
          body: "Génération et archivage des PPSPS, DOE, PGC et autres documents obligatoires, directement liés à chaque chantier.",
        },
        {
          title: "Facturation à l'avancement",
          body: "Situations de travaux mensuelles générées automatiquement à partir des avancements saisis terrain. Retenues de garantie calculées et suivies.",
        },
        {
          title: 'Application mobile terrain',
          body: "Utilisable sans connexion sur le chantier. Rapports, photos, relevés d'heures — remontées automatiquement au bureau dès que la 4G revient.",
        },
      ],
    },
    faq: [
      {
        q: "Fonctionne-t-il pour les artisans ou seulement les grandes entreprises ?",
        a: "Il est conçu pour les entreprises BTP de toutes tailles. Plus simple et moins cher qu'un ERP générique, mais complet sur ce qui compte pour le bâtiment.",
      },
      {
        q: "Peut-on gérer les agréments et qualifications (RGE, etc.) ?",
        a: "Oui, les certifications de l'entreprise et des compagnons peuvent être intégrées avec alertes d'expiration.",
      },
      {
        q: "La facturation peut-elle s'interfacer avec notre comptabilité ?",
        a: "Oui. Export vers les principaux logiciels de comptabilité (Sage, Cegid, EBP) ou connexion directe via API selon votre outil.",
      },
    ],
  },

  {
    slug: 'logiciel-avocat',
    meta: {
      title: "Logiciel de gestion pour cabinet d'avocats sur mesure | DJEXA",
      description:
        "Logiciel de gestion pour cabinet d'avocats — gestion des dossiers, suivi des délais procéduraux, facturation au temps passé, espace client sécurisé. RGPD by design.",
    },
    hero: {
      eyebrow: 'Logiciel avocat',
      title: 'Gérez votre cabinet avec un outil conçu pour les avocats',
      subtitle:
        "Excel, Outlook et des classeurs papier pour gérer des dossiers confidentiels : c'est un risque réglementaire et une perte de temps que vous n'avez pas à subir.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Les problèmes concrets dans un cabinet non digitalisé',
      items: [
        {
          title: 'Les délais procéduraux gérés manuellement',
          body: "Un délai manqué devant une juridiction peut coûter le dossier. Le suivre dans un tableau Excel ou un agenda papier, c'est prendre un risque inutile.",
        },
        {
          title: "La confidentialité des dossiers n'est pas assurée",
          body: "Emails non chiffrés, fichiers partagés sans contrôle d'accès, données clients mélangées dans des boîtes mail partagées — une exposition réelle à des risques de responsabilité.",
        },
        {
          title: 'La facturation au temps passé est laborieuse',
          body: "Saisir ses heures dans Excel, les consolider en fin de mois, générer la facture manuellement : des heures perdues chaque mois sur une tâche administrative.",
        },
      ],
    },
    features: {
      title: 'Ce que vous obtenez',
      items: [
        {
          title: 'Gestion des dossiers structurée',
          body: "Chaque dossier est classé par matière, client, juridiction. Pièces, actes, correspondances — tout lié au bon dossier, accessible en un clic.",
        },
        {
          title: 'Alertes sur les délais procéduraux',
          body: "Chaque délai est saisi une fois. L'outil vous alerte à J-15, J-7 et J-1. Plus de délai manqué par oubli.",
        },
        {
          title: 'Suivi du temps et facturation automatique',
          body: "Chaque collaborateur saisit ses heures par dossier. La facture se génère en un clic, avec le détail des prestations et les honoraires convenus.",
        },
        {
          title: 'Espace client sécurisé',
          body: "Vos clients consultent leurs documents et l'avancement de leur dossier depuis un espace chiffré, accessible sur ordinateur ou téléphone. RGPD by design.",
        },
      ],
    },
    faq: [
      {
        q: "Est-ce conforme aux exigences du RGPD et du secret professionnel ?",
        a: "Oui. La confidentialité est intégrée à la conception : chiffrement des données, accès strictement contrôlé, hébergement en France possible, journalisation des accès.",
      },
      {
        q: "Peut-on migrer les dossiers existants ?",
        a: "Oui. Une migration depuis vos fichiers actuels (Excel, PDF, dossiers partagés) est prévue en début de projet pour ne pas repartir de zéro.",
      },
      {
        q: "Est-ce utilisable par les collaborateurs et stagiaires avec des droits limités ?",
        a: "Oui, chaque utilisateur a des droits configurables : un collaborateur voit les dossiers qui lui sont affectés, un associé voit tout.",
      },
    ],
  },

  {
    slug: 'logiciel-merchandising',
    meta: {
      title: 'Logiciel de merchandising sur mesure | DJEXA',
      description:
        "Application de merchandising sur mesure — suivi des implantations, reporting terrain avec photos géolocalisées, KPIs par enseigne et région, tableau de bord direction en temps réel.",
    },
    hero: {
      eyebrow: 'Logiciel merchandising',
      title: 'Suivez chaque implantation, chaque PLV, depuis votre bureau',
      subtitle:
        "Des équipes terrain qui envoient des rapports par email, des photos dispersées dans des téléphones, une direction qui ne sait pas ce qui se passe en rayon — c'est le quotidien de trop d'entreprises.",
      cta: 'Discuter de votre projet',
    },
    problems: {
      title: 'Ce qui freine les équipes merchandising',
      items: [
        {
          title: 'La consolidation des rapports terrain prend une demi-journée',
          body: "Chaque commercial terrain envoie son Excel, vous les fusionnez à la main, corrigez les formats, calculez les KPIs. C'est chronophage et source d'erreurs.",
        },
        {
          title: 'Les photos de terrain sont inutilisables',
          body: "Dispersées dans les téléphones, non nommées, non datées, non localisées. Impossible de retrouver rapidement la photo d'un magasin précis à une date donnée.",
        },
        {
          title: "La direction n'a pas de visibilité en temps réel",
          body: "Rapport mensuel disponible avec 5 jours de décalage. Si une enseigne n'est pas conforme, vous le découvrez trois semaines après.",
        },
      ],
    },
    features: {
      title: 'Ce que vous obtenez',
      items: [
        {
          title: 'Application mobile pour les équipes terrain',
          body: "Fiche magasin numérique, prise de photos géolocalisées et horodatées, validation de conformité planogramme — depuis le smartphone, en quelques minutes par visite.",
        },
        {
          title: 'Tableau de bord direction en temps réel',
          body: "KPIs agrégés automatiquement dès que les équipes terrain valident leurs visites. Taux de conformité par enseigne, région, période — sans consolidation manuelle.",
        },
        {
          title: 'Alertes sur les non-conformités',
          body: "Une implantation non conforme signalée par l'équipe terrain déclenche une alerte immédiate. Vous réagissez en heures, pas en semaines.",
        },
        {
          title: 'Export clients automatisé',
          body: "Pour les agences PLV : rapports PDF et Excel par client, par enseigne, par période — générés automatiquement sans ressaisie.",
        },
      ],
    },
    faq: [
      {
        q: "Peut-on gérer plusieurs clients ou enseignes simultanément ?",
        a: "Oui. Chaque client ou enseigne est isolé dans son propre espace. Les équipes terrain voient les missions qui leur sont affectées, la direction voit tout.",
      },
      {
        q: "Est-ce utilisable sans formation longue pour les équipes terrain ?",
        a: "C'est conçu pour ça. Trois écrans, pas de formation nécessaire au-delà d'une démonstration de 30 minutes.",
      },
      {
        q: "Peut-on intégrer les planogrammes pour vérification automatique ?",
        a: "Oui, les planogrammes peuvent être intégrés comme référence. L'équipe terrain les consulte sur place et valide poste par poste.",
      },
    ],
  },
]
