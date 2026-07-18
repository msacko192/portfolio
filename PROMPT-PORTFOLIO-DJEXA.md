# Prompt — Portfolio DJEXA

> À coller dans Claude Code, dans un dossier vide.

---

## Contexte

Tu construis le site vitrine de **DJEXA**, l'auto-entreprise de Moussa Sacko, développeur indépendant.

DJEXA conçoit des **applications métier sur mesure pour les PME** : remplacer les fichiers Excel, les tâches manuelles et les outils dispersés par une application pensée autour de leur façon de travailler.

**Le site n'a qu'un job : transformer un dirigeant de PME en prospect qui prend rendez-vous.** Ce n'est pas une vitrine de compétences techniques. Le visiteur doit repartir en pensant « cette personne comprend nos problèmes et peut construire l'outil dont on a besoin », pas « ce développeur maîtrise React ».

**Cible :** dirigeants de PME, responsables administratifs, directeurs opérationnels. Des gens qui ne savent pas ce qu'est une API et qui s'en moquent.

**Ton :** celui d'un petit atelier spécialisé, pas d'un freelance qui vend des heures. Sobre, direct, sans superlatif.

> **Le nom « DJEXA » est provisoire.** Isole-le dans une seule constante (`BRAND` dans `src/data/content.js`) pour qu'il se change en une ligne. Aucune occurrence en dur ailleurs.

---

## ⛔ Trois règles non négociables

**1. N'invente aucun projet, aucun chiffre, aucun témoignage, aucune capture d'écran.**
Chaque réalisation présentée doit être réelle. Si tu manques de matière, écris moins, ou demande-moi. Un faux projet découvert par un prospect met fin à la relation — et il le raconte. Ce site s'adresse à des dirigeants qui vérifient.

**2. Chaque réalisation porte une étiquette explicite : `Mission client` ou `Produit propre`.**
Mélanger les deux sans le dire se voit et coûte la confiance. Assumer qu'on édite ses propres produits est une force.

**3. Pas de Next.js.** Stack imposée ci-dessous.

---

## Stack

```
React 19 · Vite 7 · Tailwind 3.4 · Framer Motion
```

Le site est **prérendu en HTML statique au build** (`renderToString` + injection dans `index.html`) : une page qui renvoie un `<div id="root"></div>` vide n'est pas indexable, et un portfolio invisible sur Google ne sert à rien.

```
npm run build   →  vite build && node scripts/prerender.mjs
```

Le prérendu doit produire un `index.html` contenant l'intégralité du texte de la page. Vérifie-le à la fin.

**Formulaire de contact :** poste vers `/api/contact`. Documente le contrat attendu dans le README ; le backend (Hono + Resend) est hors périmètre.

---

## Direction visuelle — arrêtée, à appliquer

Le brief d'origine demandait navy `#0F172A` + bleu `#2563EB` + fond `#F8FAFC` + Inter, dans le style Linear / Vercel / Stripe. **C'est écarté.** Ce sont les valeurs par défaut de Tailwind (`slate-900`, `blue-600`, `slate-50`) et le rendu exact que produit n'importe quel générateur à qui on demande « SaaS B2B premium ». L'objectif est « petit atelier spécialisé » ; cette palette dit « template ».

### Le registre : l'atelier

Le positionnement dit **sur mesure**. C'est le mot qui commande tout. La confection contre le sur-mesure, le logiciel standard contre l'outil taillé à la forme de l'entreprise. Le registre est celui de l'atelier : précision, mesure, retenue, métier. Pas celui de la startup.

Ce qui doit transparaître : **établi**. Un dirigeant de PME de 55 ans doit s'y sentir en confiance comme dans l'étude d'un notaire — tout en voyant que c'est fait en 2026.

**Aucune imagerie de tailleur.** Pas de ciseaux, pas de fil, pas de mètre ruban. Le registre est dans la palette, la retenue et la précision, jamais dans l'illustration.

### Palette

```
encre     #14181A   ancre : sections sombres, texte principal
craie     #F5F4F1   fond principal
pierre    #EAE8E3   fond des sections alternées
graphite  #6E7377   texte secondaire
pin       #0E5C4A   L'ACCENT — boutons, liens, chiffres clés
rule      #DCDAD4   filets
```

**Un seul accent : le vert pin `#0E5C4A`.** Profond, sourd, presque loden. Il ne ressemble à rien de ce qui se fait en B2B — tout le monde fait du bleu — et il porte exactement ce qu'on cherche : établi, sérieux, financier au sens noble. Ce n'est ni le vert acide des sites tech, ni un vert écologique.

L'ancre `#14181A` est un noir à dominante verte, pas un navy. Le fond `#F5F4F1` est crayeux, pas crème.

**Discipline :** le vert pin ne sert qu'aux actions et à un ou deux chiffres. Jamais en aplat de section, jamais en dégradé. Si tu te demandes s'il faut l'ajouter quelque part, la réponse est non.

### Typographie

```
Display  Archivo    700, tracking-[-0.03em], très serré
Corps    Inter      400 / 500
Labels   Archivo    600, uppercase, tracking-[0.12em], 11px
```

Pas de police mono. Le mono dit « tech » — le visiteur est un dirigeant, pas un DSI.

Titres grands, serrés, sans timidité. C'est la typo qui porte la modernité pendant que la palette porte le sérieux.

### Interdits

Dégradés décoratifs · ombres portées colorées · illustrations cartoon · emojis · glassmorphism · cartes qui flottent au survol pour rien · « ✨ » · aucun bleu.

---

## Le signature : le hero

**Ne fais pas de faux dashboard.** Une capture d'application inventée est le réflexe du genre, et c'est un mensonge : il n'existe aucun produit DJEXA à montrer, et les applications clientes sont privées.

À la place, montre **ce que le visiteur reconnaît : son propre bordel.**

Un schéma SVG : des outils épars — un tableur, une boîte mail, un dossier partagé, un carnet, une messagerie — reliés par des traits qui se croisent, qui convergent, et qui se résolvent en **une seule forme**. Le désordre à gauche, l'ordre à droite.

C'est la thèse du site en une image, c'est honnête, et c'est ce qui fait dire au dirigeant « c'est exactement chez moi ».

Contraintes : SVG, traits fins, monochrome `encre` + `graphite`, l'accent `pin` uniquement sur la forme résolue. Animation à l'apparition : les traits se tracent, la forme se referme. **Une fois, deux secondes, et plus rien.** `prefers-reduced-motion` respecté.

Si le rendu n'est pas convaincant, **mieux vaut pas de visuel qu'un visuel faible**. Un hero typographique nu est préférable à une illustration ratée.

C'est le seul endroit où tu dépenses de l'audace. Tout le reste est calme.

---

## Structure

Site one-page.

### 1 — Hero

> **Votre entreprise est unique.
> Votre logiciel devrait l'être aussi.**
>
> Je développe des applications métier sur mesure adaptées à votre façon de travailler. J'aide les PME à remplacer leurs fichiers Excel, leurs tâches manuelles et leurs outils dispersés par des solutions simples, rapides et efficaces.

Boutons : **Discuter de votre projet** (plein, pin) · **Voir mes réalisations** (contour, encre)

Visuel : le schéma de convergence décrit ci-dessus.

### 2 — Les problèmes

> **Vos outils actuels vous ralentissent ?**

Quatre cartes :

| | |
|---|---|
| Trop de fichiers Excel | Vos informations sont dispersées et difficiles à suivre. |
| Tâches répétitives | Vos équipes perdent du temps sur des actions manuelles. |
| Manque de visibilité | Vous n'avez pas une vision claire de votre activité. |
| Outils inadaptés | Les logiciels standards ne correspondent pas toujours à votre métier. |

### 3 — La solution

> **Un logiciel pensé autour de votre entreprise**
>
> Chaque entreprise possède ses propres méthodes de travail. Je conçois des applications adaptées à vos processus afin de simplifier votre quotidien.

Timeline en 5 temps : Analyse · Conception · Développement · Mise en production · Accompagnement.

### 4 — Les offres

**Section obligatoire, absente du brief d'origine.** Sans prix affiché, le prospect ne se qualifie pas, hésite, et ne prend pas rendez-vous. Un dirigeant qui voit un point d'entrée à 500 € appelle ; un dirigeant qui ne voit aucun prix suppose que c'est cher et ferme l'onglet.

> **On commence par une journée. Vous décidez ensuite.**

| Offre | Prix | Contenu |
|---|---|---|
| **La journée d'audit** — *Pour commencer* | **500 €** | Je passe une journée dans vos process. Vous repartez avec un document : ce qui vous coûte du temps, ce qui est automatisable, ce que ça coûterait, dans quel ordre. Déduit de la suite si on continue. |
| **La régie** — *La formule* | **2 000 € / mois** | Un jour par semaine réservé, en continu. Évolutions, intégrations, corrections. Votre développeur, sans recrutement ni engagement annuel. Engagement au trimestre. |
| **Le module cadré** | **2 000 à 2 500 €** | Un périmètre précis, une date. Une intégration, un export automatisé, un écran qui manque. Trois à cinq jours. |

**La régie en avant** : carte inversée, fond `encre`, texte `craie`. C'est ce qu'on vend. L'audit est la porte d'entrée.

### 5 — Réalisations

> **Des solutions déjà développées**

Chaque étude de cas : **le problème → ce qui a été livré → le résultat**. Aucune techno dans le corps du texte ; les technos vont dans une ligne discrète en bas de carte.

**Projet 1 — Mission client**
Plateforme de suivi de production, secteur merchandising / PLV.
Espaces clients personnalisés, suivi de production, rôles et permissions, notifications temps réel, tableau de bord, portail client en lecture seule.
*Résultat :* visibilité sur l'avancement des projets, communication client simplifiée.

**Projet 2 — Mission client** ⭐
Application de facturation électronique pour un **groupe de cabinets comptables**. Sept mois, de l'architecture à la mise en production. Intégration d'une plateforme agréée en OAuth 2.1, formats Factur-X et UBL, architecture multi-tenant.
*Résultat :* en production avant l'échéance réglementaire.

> **C'est la meilleure preuve du site.** La réception de factures électroniques devient obligatoire le **1ᵉʳ septembre 2026** pour toutes les entreprises assujetties à la TVA, l'émission en septembre 2027 pour les TPE et PME. Quasiment aucun prestataire ne peut écrire « je l'ai déjà livré en production ». Donne à ce projet plus de place qu'aux autres et mentionne l'échéance.
>
> ⚠ **Le nom du client est peut-être sous NDA. Demande-moi avant de le citer.** Par défaut : « un groupe de cabinets comptables ».

**Projet 3 — Produit propre**
ERP administratif et financier : devis, factures, facturation électronique, connexion bancaire et récupération des transactions, catégorisation des dépenses, clients, fournisseurs, import catalogue produits.
*Résultat :* centralisation de la gestion administrative, réduction des tâches manuelles.

**Projet 4 — à arbitrer avec moi avant d'écrire**
Le brief d'origine demandait un « projet démonstration BTP » — donc un projet inventé. **Ne fais pas ça.** Deux options réelles :
- **YAMAEX** : Moussa dirige une entreprise d'étanchéité. Un outil de suivi de chantier construit pour sa propre entreprise est authentique — et c'est une meilleure histoire : un développeur qui a lui-même une boîte de BTP et qui a fait son outil. À condition qu'il existe.
- **Sinon, supprime le projet.** Trois vraies études de cas valent mieux que quatre dont une fausse.

**Captures d'écran :** si elles n'existent pas, laisse des emplacements propres à ratio fixe, fond `pierre`, sans texte de remplissage. **Ne génère pas de fausses captures.** Un emplacement vide est honnête.

### 6 — Secteurs

> **Des solutions adaptées aux métiers**
> Chaque secteur possède ses contraintes. Le logiciel est conçu autour de votre réalité.

**Cabinets comptables · BTP · Merchandising / PLV · PME de services**

> Le brief d'origine listait « cabinets d'avocats » — aucune réalisation ne le justifie, ne l'inclus pas. **« Cabinets comptables » manquait** alors que c'est le secteur le mieux documenté : trois références réelles et une expertise métier (FEC, PCG, liasse, facturation électronique). C'est le segment le plus crédible du site.

### 7 — Méthode

Quatre étapes : Comprendre votre activité · Identifier les gains possibles · Développer votre solution · Vous accompagner après livraison.

### 8 — Technologies

> **Une expertise technique au service de vos besoins**

React · TypeScript · Hono · Cloudflare · Bases de données · API · Stripe · Authentification · Emails transactionnels

**Section volontairement discrète.** Petite, en fin de page, sans emphase, texte `graphite`. Le dirigeant ne la lira pas ; elle est là pour le technicien qu'il consultera peut-être.

### 9 — Contact

> **Parlons de votre projet**
> Vous avez une idée d'application ou un processus à améliorer ? Échangeons sur votre besoin et voyons comment le digital peut simplifier votre activité.

Formulaire : Nom · Entreprise · Email · Téléphone · Description du besoin.
Bouton : **Prendre rendez-vous**.
Mention RGPD sous le formulaire. État de chargement, message d'erreur explicite, message de succès. Pas de `<form>` muet.

---

## Qualité

- **Responsive mobile parfait** — la majorité des dirigeants ouvriront le lien sur téléphone
- Framer Motion : **animations discrètes uniquement**. Une révélation au scroll, des micro-interactions au survol. Rien qui bouge sans raison. `prefers-reduced-motion` respecté.
- Focus clavier visible
- Balises SEO complètes + JSON-LD `ProfessionalService`
- **Tout le texte dans `src/data/content.js`**, aucune chaîne en dur dans les composants
- Le nom de marque dans une seule constante

---

## Vérification finale

```bash
npm run build

grep -c "Votre entreprise est unique" dist/index.html      # ≥ 1
grep -c "500" dist/index.html                              # ≥ 1  (les prix sont indexables)
grep -ci "2563EB\|0F172A\|F8FAFC" dist/assets/*.css        # 0    (aucun résidu de l'ancienne palette)

node -e "const h=require('fs').readFileSync('dist/index.html','utf8'); \
  const t=h.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '); \
  console.log('texte lisible sans JS :', t.length, 'caractères')"
# doit dépasser 3000
```

Montre-moi la sortie.

---

## Méthode

**1. Propose-moi d'abord un plan** : un wireframe ASCII de la page et une description du schéma SVG du hero. La palette et la typo sont arrêtées, ne les rediscute pas. **Ne code rien avant que je valide.**

**2. Puis construis**, en suivant le plan validé.

Si tu as besoin d'une information que tu ne peux pas déduire — nom du client de la mission facturation électronique, existence de l'outil YAMAEX, captures d'écran, logo — **demande-la-moi**. N'invente pas.
