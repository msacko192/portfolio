export const posts = [
  {
    slug: 'pourquoi-excel-ralentit-les-pme',
    title: 'Pourquoi Excel ralentit votre entreprise (et ce que vous pouvez faire)',
    date: '2026-06-15',
    readTime: 6,
    category: 'Outils & productivité',
    excerpt:
      "Excel est l'outil par défaut de millions d'entreprises françaises. Et pourtant, il est souvent la principale source de perte de temps dans les équipes — pas parce qu'il est mauvais, mais parce qu'il est utilisé pour des tâches pour lesquelles il n'a pas été conçu.",
    content: [
      {
        type: 'intro',
        text: "Excel est l'outil par défaut de millions d'entreprises françaises. Flexible, accessible, connu de tous. Et pourtant, dans beaucoup d'entreprises, il est devenu la principale source de perte de temps. Pas parce qu'Excel est mauvais — c'est un outil remarquable pour ce qu'il fait. Mais parce qu'il est utilisé pour des choses pour lesquelles il n'a pas été conçu.",
      },
      {
        type: 'h2',
        title: 'Le problème des fichiers qui ne sont jamais vraiment partagés',
        text: "Quand plusieurs personnes travaillent sur le même fichier, la question se pose rapidement : qui a la \"bonne\" version ? La V4_FINALE.xlsx ? La V4_FINALE_OK_2.xlsx envoyée hier soir ? Les modifications d'une personne n'arrivent pas chez les autres en temps réel. Des heures de travail peuvent se chevaucher, voire s'annuler. La simple question \"tu as la dernière version ?\" résume à elle seule un problème d'organisation que beaucoup d'entreprises subissent chaque semaine.",
      },
      {
        type: 'h2',
        title: 'Une erreur de formule peut coûter très cher',
        text: "Dans un devis BTP, une cellule mal référencée peut entraîner une sous-estimation de plusieurs milliers d'euros. Dans un tableau de stock, une formule qui ne s'étend pas jusqu'à la dernière ligne fausse l'ensemble des calculs. Excel n'a pas de garde-fous natifs contre ces erreurs. Sans audit régulier des formules, elles peuvent se propager silencieusement pendant des mois. Et contrairement à une base de données, Excel n'a pas de journal des modifications : impossible de savoir qui a changé quoi, et quand.",
      },
      {
        type: 'h2',
        title: 'Excel ne grandit pas avec votre activité',
        text: "Dix lignes, c'est parfait. Mille lignes, ça ralentit. Cinquante mille lignes, c'est inutilisable. Au-delà de la performance, Excel ne permet pas de gérer des droits d'accès différenciés : si vous partagez le fichier, vous partagez tout. Pas de notion de \"cet utilisateur peut voir mais pas modifier\", pas de \"ce collaborateur n'a accès qu'à ses données\". Ce qui fonctionnait pour une équipe de trois personnes devient un problème de sécurité et de confidentialité à dix.",
      },
      {
        type: 'h2',
        title: "L'absence de tableaux de bord en temps réel",
        text: "Un tableau Excel est une photo du passé. Pour avoir une vision consolidée de l'activité, il faut souvent ouvrir plusieurs fichiers, copier des données, recalculer des totaux — une demi-journée de travail pour produire un rapport qui sera périmé le lendemain. Les dirigeants qui s'appuient sur des données Excel pour prendre des décisions le font souvent avec des données qui ont déjà plusieurs jours ou semaines de retard.",
      },
      {
        type: 'h2',
        title: 'Quand faut-il vraiment passer à autre chose ?',
        text: "Excel reste pertinent pour des analyses ad hoc, des calculs financiers ponctuels, ou des données que vous êtes le seul à utiliser. En revanche, si plusieurs personnes ont besoin du même fichier en même temps, si des erreurs ont commencé à coûter de l'argent, ou si consolider des données prend plus de temps que les analyser — c'est le signe qu'il faut une solution structurée. Pas nécessairement un ERP complet : parfois, une application métier ciblée sur un seul processus suffit pour transformer le quotidien d'une équipe.",
      },
      {
        type: 'conclusion',
        text: "La vraie question n'est pas \"Excel ou pas Excel\" — c'est \"est-ce qu'on utilise le bon outil pour le bon usage ?\" Si vous vous retrouvez à contourner Excel plus souvent qu'à travailler avec, c'est probablement le moment d'explorer d'autres options.",
      },
    ],
  },

  {
    slug: 'comment-digitaliser-entreprise-btp',
    title: 'Comment digitaliser une entreprise du BTP sans perturber les chantiers',
    date: '2026-06-22',
    readTime: 7,
    category: 'BTP & chantier',
    excerpt:
      "La digitalisation dans le BTP a mauvaise réputation : des outils compliqués, adoptés sous contrainte, abandonnés trois mois plus tard. Voici comment les entreprises qui réussissent leur transformation numérique s'y prennent — et ce qu'elles évitent.",
    content: [
      {
        type: 'intro',
        text: "La digitalisation dans le BTP a mauvaise réputation. Des logiciels compliqués imposés par la direction, adoptés sous contrainte par des chefs de chantier qui ont \"autre chose à faire\", abandonnés trois mois plus tard. Et pourtant, les entreprises qui réussissent leur transformation numérique en retirent des bénéfices concrets et durables. La différence tient rarement à la technologie choisie. Elle tient à l'ordre dans lequel les décisions sont prises.",
      },
      {
        type: 'h2',
        title: "Commencer par le problème, pas par l'outil",
        text: "La première erreur est d'acheter un logiciel pour \"faire de la digitalisation\". La bonne démarche est d'identifier une friction concrète qui coûte du temps ou de l'argent aujourd'hui, et de chercher comment la réduire. Dans le BTP, les frictions les plus fréquentes sont connues : les rapports terrain qui n'arrivent pas au bureau à temps, le planning que personne n'a en version à jour, les clients qui appellent parce qu'ils ne savent pas où en sont leurs travaux. Commencez par là.",
      },
      {
        type: 'h2',
        title: 'Le planning de chantier : le premier levier',
        text: "Un planning partagé en temps réel est souvent la transformation la plus impactante et la plus rapide à mettre en place. Quand les équipes terrain voient leurs tâches du jour sur leur téléphone — sans appel à 7h du matin pour savoir où aller — et que les modifications faites au bureau se propagent instantanément, le gain de temps est immédiat. La résistance à l'adoption est faible parce que l'utilité est évidente dès le premier jour.",
      },
      {
        type: 'h2',
        title: 'Les rapports journaliers numériques',
        text: "Un compagnon qui prend une photo sur son téléphone et ajoute un commentaire en deux minutes, c'est un rapport de chantier. Stocké, horodaté, géolocalisé, accessible depuis le bureau sans attendre la fin de journée. En cas de litige sur un défaut ou une malfaçon, la traçabilité photographique devient une protection concrète. Les entreprises qui ont fait ce passage témoignent d'une réduction significative des conflits de garantie — pas parce qu'il y a moins de problèmes, mais parce que la preuve est disponible.",
      },
      {
        type: 'h2',
        title: 'La communication avec le client',
        text: "Un client qui sait où en sont ses travaux — via un espace de suivi en ligne, avec les photos et le planning prévisionnel — appelle moins souvent pour \"avoir des nouvelles\". Et quand il y a un retard ou un problème, être proactif dans la communication transforme une source de mécontentement en démonstration de professionnalisme. Les entreprises qui ont mis en place un suivi client numérique rapportent systématiquement une meilleure satisfaction, même sur des chantiers qui ont eu des aléas.",
      },
      {
        type: 'h2',
        title: "L'adoption : le vrai défi",
        text: "L'outil le plus simple est celui qu'on utilise vraiment. Impliquer les chefs de chantier dans la conception de l'outil — pas pour leur demander leur avis une fois le logiciel acheté, mais pour définir avec eux ce dont ils ont besoin — garantit une adoption bien plus solide qu'une formation obligatoire de deux jours. Les meilleurs déploiements commencent avec un pilote sur un chantier, avec des utilisateurs volontaires, avant de généraliser.",
      },
      {
        type: 'conclusion',
        text: "La digitalisation du BTP n'est pas une transformation en un jour. Mais chaque étape bien choisie — un planning partagé, des rapports numériques, un suivi client — améliore concrètement le quotidien des équipes et la relation avec les clients. La clé est de commencer par un problème réel, pas par une technologie.",
      },
    ],
  },

  {
    slug: 'combien-coute-application-metier',
    title: 'Combien coûte une application métier sur mesure ?',
    date: '2026-07-01',
    readTime: 8,
    category: 'Budget & investissement',
    excerpt:
      "C'est la question que tout dirigeant d'entreprises se pose avant de se lancer. Voici ce qui détermine vraiment le prix d'une application métier sur mesure, les fourchettes réelles, et comment évaluer si l'investissement est rentable pour vous.",
    content: [
      {
        type: 'intro',
        text: "\"Combien ça coûte ?\" C'est souvent la première question que les dirigeants d'entreprises posent quand ils envisagent de développer une application sur mesure. Et c'est une question légitime — personne ne veut se retrouver avec une facture surprise au bout de six mois. Voici une réponse honnête sur ce qui détermine le prix, et comment évaluer si l'investissement est rentable pour votre situation.",
      },
      {
        type: 'h2',
        title: "Pourquoi il n'y a pas de prix catalogue",
        text: "Une application métier, c'est comme une maison : le prix dépend de ce qu'on construit, pas d'un tarif standard. Un formulaire de contact coûte quelques centaines d'euros. Un ERP avec module de planification, facturation et interface mobile coûte vingt fois plus. Les variables qui font la différence : le nombre d'écrans et de fonctionnalités, le nombre d'utilisateurs, la complexité des règles métier, les intégrations avec des systèmes existants, et la nécessité ou non d'une application mobile.",
      },
      {
        type: 'h2',
        title: 'Les facteurs qui font monter le budget',
        text: "Certains besoins ont un impact significatif sur le coût. Les intégrations avec des systèmes existants (ERP, comptabilité, API partenaires) nécessitent un travail d'audit et de développement spécifique. Une application mobile en plus de la version web représente typiquement 30 à 50 % de travail supplémentaire. La synchronisation hors-ligne (nécessaire pour les équipes terrain sans connexion stable) est techniquement complexe. Les tableaux de bord analytiques avec agrégations de données importantes demandent une architecture soignée. Enfin, les contraintes réglementaires spécifiques — RGPD renforcé, normes sectorielles, conformité financière — ajoutent du temps de conception.",
      },
      {
        type: 'h2',
        title: 'Les fourchettes réelles',
        text: "Sans détour : une application simple avec un ou deux workflows principaux et une dizaine d'écrans se développe entre 8 000 et 20 000 €. Une application métier complète — ERP léger, gestion de chantier, CRM avec quelques intégrations — entre 20 000 et 60 000 €. Une plateforme complexe avec architecture multi-tenant, nombreux connecteurs et module d'analyse avancé dépasse les 60 000 €. Ces fourchettes incluent la conception, le développement, les tests et la mise en production. Elles ne correspondent pas à un abonnement mensuel : c'est un investissement ponctuel pas un abonnement mensuel.",
      },
      {
        type: 'h2',
        title: 'Comment évaluer la rentabilité',
        text: "Avant de regarder le coût de développement, calculez le coût du statu quo. Prenez le temps que vos équipes passent sur les tâches que l'application automatiserait, multipliez par le coût horaire, et projetez sur douze mois. Trois personnes qui passent deux heures par jour à consolider des données représentent environ 15 000 à 20 000 € de masse salariale non productive chaque année — sans compter les erreurs, les retards clients et les opportunités manquées. Un outil à 25 000 € amorti sur trois ans revient à 8 300 € par an. Le calcul devient souvent évident.",
      },
      {
        type: 'h2',
        title: 'Ce qui coûte moins cher que prévu',
        text: "Travailler avec un développeur indépendant — plutôt qu'une agence avec ses frais de structure, sa marge commerciale et ses chefs de projet — réduit significativement le budget à périmètre identique. Partir d'un MVP bien ciblé (une seule fonctionnalité, une seule équipe utilisatrice) plutôt que de tout vouloir au départ permet de valider rapidement la valeur avant d'investir davantage. Et réutiliser des composants techniques éprouvés — authentification, gestion des fichiers, notifications — évite de réinventer la roue à chaque projet.",
      },
      {
        type: 'conclusion',
        text: "Le vrai coût à regarder n'est pas le devis de développement — c'est la différence entre ce que le statu quo vous coûte chaque année et ce que l'outil vous coûterait amorti sur sa durée de vie. Si vous voulez qu'on fasse ce calcul ensemble pour votre situation spécifique, c'est l'objet d'un premier appel de 30 minutes.",
      },
    ],
  },

  {
    slug: 'erp-ou-logiciel-sur-mesure',
    title: 'ERP ou logiciel sur mesure : que choisir pour votre entreprise ?',
    date: '2026-07-08',
    readTime: 7,
    category: 'Stratégie & choix',
    excerpt:
      "Odoo, SAP, Sage... le marché des ERP est immense. Alors pourquoi certaines entreprises font-elles le choix de développer leur propre logiciel plutôt que d'adopter une solution existante ? Ce n'est pas toujours la bonne décision. Voici comment la prendre avec discernement.",
    content: [
      {
        type: 'intro',
        text: "Odoo, SAP Business One, Sage 100, Cegid... le marché des ERP est immense et bien établi. Alors pourquoi certaines entreprises font-elles le choix de développer leur propre logiciel de gestion plutôt que d'adopter une solution existante ? Ce n'est pas toujours la bonne décision. Et ce guide n'a pas pour vocation de vous convaincre du sur mesure — mais de vous aider à choisir ce qui est vraiment adapté à votre situation.",
      },
      {
        type: 'h2',
        title: 'Ce que font bien les ERP du marché',
        text: "Les ERP standard couvrent des processus largement partagés par des milliers d'entreprises : comptabilité générale, gestion des stocks, facturation, gestion des commandes. Ils bénéficient d'années de développement, de mises à jour régulières incluses dans l'abonnement, d'une documentation abondante et d'une communauté d'utilisateurs. Le déploiement sur les fonctionnalités standards est rapide. Pour une entreprise dont les processus ne sortent pas de l'ordinaire, ils peuvent être parfaitement adaptés.",
      },
      {
        type: 'h2',
        title: 'Les limites des ERP standard pour certaines entreprises',
        text: "Le problème apparaît quand votre activité a une logique qui sort des processus standards. Les ERP sont conçus pour s'adapter à des milliers de cas différents — ce qui signifie qu'ils imposent leur structure à votre activité, pas l'inverse. Le paramétrage peut compenser partiellement cette rigidité, mais il a ses limites. Les modules supplémentaires coûtent souvent plus cher que prévu. Et l'interface, conçue pour être générale, est rarement épurée : vos équipes se retrouvent face à des dizaines d'options dont elles n'utilisent qu'une fraction.",
      },
      {
        type: 'h2',
        title: "Quand le sur mesure s'impose",
        text: "Quelques situations rendent le sur mesure clairement plus pertinent. Quand votre activité a un flux métier non standard — une prestation complexe avec plusieurs phases d'approbation, un cycle de production atypique, une tarification qui ne rentre dans aucune case. Quand vos équipes terrain ont besoin d'une interface ultra-simple, utilisable sur smartphone sans formation. Quand vous avez besoin de vous intégrer à des outils très spécifiques à votre secteur. Et quand votre façon de travailler est un avantage concurrentiel que vous ne souhaitez pas niveler en vous alignant sur le standard d'un éditeur.",
      },
      {
        type: 'h2',
        title: 'La fausse opposition',
        text: "Ce n'est pas ERP contre sur mesure — c'est \"quels processus méritent d'être standardisés, et lesquels méritent d'être différenciés ?\" Une stratégie souvent efficace : garder un ERP standard pour la comptabilité, qui doit respecter des normes précises, et développer sur mesure uniquement pour le cœur de métier, là où votre différenciation opérationnelle se joue. Votre CRM peut être sur mesure pendant que votre comptabilité reste sur Sage. Les deux coexistent via une intégration ciblée.",
      },
      {
        type: 'h2',
        title: 'Les questions à se poser avant de décider',
        text: "Avez-vous documenté votre processus métier actuel ? Si vous ne pouvez pas l'expliquer clairement, aucun outil — ERP ou sur mesure — ne pourra bien le couvrir. Combien de vos équipes utilisent réellement votre logiciel actuel, et sur quelles fonctionnalités ? Si 80 % des utilisateurs n'utilisent que 20 % des fonctions, c'est souvent le signe que l'outil n'est pas adapté. Et quel est le coût mensuel des contournements — exports Excel, saisies manuelles, appels téléphoniques pour compenser ce que le logiciel ne fait pas ?",
      },
      {
        type: 'conclusion',
        text: "Il n'y a pas de réponse universelle. Il y a votre activité, vos processus, vos équipes, et votre budget. Si vous voulez un avis honnête sur votre situation spécifique, un premier échange de 30 minutes suffit généralement pour identifier ce qui vous correspond le mieux — même si la réponse est \"un ERP standard est parfait pour vous\".",
      },
    ],
  },

  {
    slug: '5-signes-creer-propre-logiciel',
    title: "5 signes qu'il est temps de créer votre propre logiciel métier",
    date: '2026-07-15',
    readTime: 5,
    category: 'Outils & productivité',
    excerpt:
      "Beaucoup de dirigeants d'entreprises pensent que créer son propre logiciel, c'est réservé aux grandes entreprises. Voici 5 signaux concrets qui indiquent qu'un outil sur mesure serait rentable pour vous dès aujourd'hui.",
    content: [
      {
        type: 'intro',
        text: "Créer son propre logiciel, beaucoup de dirigeants d'entreprises pensent que c'est réservé aux grandes entreprises avec des budgets informatiques conséquents. Ce n'est pas le cas — et cette idée fait manquer à beaucoup d'entreprises un levier de productivité significatif. Voici 5 signaux concrets qui indiquent qu'un outil sur mesure serait rentable pour votre situation.",
      },
      {
        type: 'numbered',
        items: [
          {
            title: "Vous avez un fichier Excel que personne d'autre ne comprend vraiment",
            text: "Ce fichier existe dans beaucoup d'entreprises. Il a été créé par quelqu'un de débrouillard, il est devenu indispensable, et aujourd'hui une seule personne sait vraiment comment il fonctionne. Si cette personne part, c'est un risque opérationnel réel. Ce fichier est la preuve d'un besoin métier réel que personne n'a encore adressé correctement — et c'est exactement le point de départ d'une bonne application sur mesure.",
          },
          {
            title: 'Vos équipes ont développé des \"contournements\" devenus la norme',
            text: "Copier-coller des données entre trois outils pour compléter une tâche. Utiliser WhatsApp pour transmettre des informations qui doivent ensuite être ressaisies ailleurs. Envoyer un email pour confirmer ce qu'un autre logiciel devrait déjà savoir. Chaque contournement est une friction qui coûte du temps chaque jour — et s'accumule sur une année.",
          },
          {
            title: 'Vous perdez des opportunités par manque de visibilité',
            text: "Un prospect qui n'a pas été relancé parce que personne n'avait de rappel en place. Une commande retardée parce que le stock n'était pas visible en temps réel. Un client qui n'a pas renouvelé parce qu'aucune alerte n'était programmée. Ces manques de visibilité ont un coût direct sur le chiffre d'affaires.",
          },
          {
            title: "Le départ d'une personne emporte la connaissance avec elle",
            text: "Si l'onboarding d'un nouveau collaborateur dure trois semaines parce qu'il faut lui \"expliquer comment ça marche ici\", c'est souvent le signe que la connaissance opérationnelle est dans les têtes, pas dans des processus documentés et supportés par un outil. Un bon logiciel métier porte la logique de l'entreprise indépendamment des individus.",
          },
          {
            title: 'Vous avez fait le calcul et le statu quo coûte plus cher que le changement',
            text: "Prenez les heures perdues sur des tâches répétitives, multipliez par le coût horaire chargé, projetez sur douze mois. Ajoutez les erreurs, les retards clients et les opportunités manquées. Comparez à l'amortissement d'une application sur mesure sur trois ans. Si le statu quo coûte plus cher — et c'est souvent le cas — la question n'est plus \"est-ce qu'on le fait ?\" mais \"par où on commence ?\".",
          },
        ],
      },
      {
        type: 'conclusion',
        text: "Si vous vous reconnaissez dans trois de ces cinq situations, la conversation vaut la peine d'être engagée. Pas nécessairement pour lancer un grand projet — mais pour comprendre quel serait le premier chantier le plus rentable pour vous.",
      },
    ],
  },
]
