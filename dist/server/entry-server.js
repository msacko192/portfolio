import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { useReducedMotion, motion, MotionConfig } from "framer-motion";
import { useLocation, Link, Outlet, useParams, Navigate, Routes, Route } from "react-router-dom";
const BRAND = "DJEXA";
const content = {
  nav: {
    cta: "Discuter de votre projet"
  },
  hero: {
    label: "Développeur indépendant · Applications métier sur mesure",
    headline: "Votre entreprise est unique.",
    headline2: "Votre logiciel devrait l'être aussi.",
    tension: "Le logiciel standard vous oblige à vous adapter. Le sur-mesure fait l'inverse.",
    body: "Je développe des applications métier sur mesure adaptées à votre façon de travailler. J'aide les PME à remplacer leurs fichiers Excel, leurs tâches manuelles et leurs outils dispersés par des solutions simples, rapides et efficaces.",
    cta1: "Discuter de votre projet",
    cta2: "Voir mes réalisations"
  },
  problems: {
    title: "Vos outils actuels vous ralentissent ?",
    cards: [
      {
        title: "Trop de fichiers Excel",
        body: "Vos informations sont dispersées et difficiles à suivre."
      },
      {
        title: "Tâches répétitives",
        body: "Vos équipes perdent du temps sur des actions manuelles."
      },
      {
        title: "Manque de visibilité",
        body: "Vous n'avez pas une vision claire de votre activité."
      },
      {
        title: "Outils inadaptés",
        body: "Les logiciels standards ne correspondent pas toujours à votre métier."
      }
    ]
  },
  solution: {
    title: "Un logiciel pensé autour de votre entreprise",
    body: "Chaque entreprise possède ses propres méthodes de travail. Je conçois des applications adaptées à vos processus afin de simplifier votre quotidien.",
    steps: [
      {
        number: "01",
        title: "Analyse",
        body: "Je prends le temps de comprendre vos processus, vos contraintes et vos objectifs."
      },
      {
        number: "02",
        title: "Conception",
        body: "Je conçois l'architecture et les interfaces adaptées à votre activité."
      },
      {
        number: "03",
        title: "Développement",
        body: "Je construis l'application avec les technologies appropriées à votre contexte."
      },
      {
        number: "04",
        title: "Mise en production",
        body: "Je déploie et configure votre solution dans votre environnement."
      },
      {
        number: "05",
        title: "Accompagnement",
        body: "Je reste disponible pour les évolutions, corrections et améliorations."
      }
    ]
  },
  pricing: {
    title: "On commence par une journée. Vous décidez ensuite.",
    plans: [
      {
        name: "La journée d'audit",
        tag: "Pour commencer",
        marker: "Le point de départ",
        cta: "En discuter",
        body: "Je passe une journée dans vos process. Vous repartez avec un document : ce qui vous coûte du temps, ce qui est automatisable, ce que ça coûterait, dans quel ordre. Déduit de la suite si on continue.",
        featured: false
      },
      {
        name: "La régie",
        tag: "La formule",
        marker: "L'accompagnement continu",
        cta: "Voir si ça correspond",
        body: "Un jour par semaine réservé, en continu. Évolutions, intégrations, corrections. Votre développeur, sans recrutement ni engagement annuel. Engagement au trimestre.",
        featured: true
      },
      {
        name: "Le module cadré",
        tag: "",
        marker: "Un besoin précis",
        cta: "En discuter",
        body: "Un périmètre précis, une date. Une intégration, un export automatisé, un écran qui manque. Trois à cinq jours.",
        featured: false
      }
    ]
  },
  projects: {
    title: "Des solutions déjà développées",
    items: [
      {
        id: 2,
        slug: "facturation-electronique",
        label: "Mission client",
        labelType: "mission",
        title: "Facturation électronique",
        sector: "Cabinets comptables",
        period: "2025–2026",
        problem: "Un groupe de cabinets comptables devait se conformer à l'obligation de facturation électronique avant l'échéance réglementaire, sans solution adaptée à leur organisation multi-entités.",
        delivered: "Application multi-tenant développée de l'architecture à la mise en production en sept mois. Intégration d'une plateforme de dématérialisation agréée via OAuth 2.1. Formats Factur-X et UBL, interface de gestion et suivi des flux.",
        result: "En production avant l'échéance réglementaire du 1er septembre 2026.",
        note: "La réception de factures électroniques devient obligatoire le 1er septembre 2026 pour toutes les entreprises assujetties à la TVA, l'émission en septembre 2027 pour les TPE/PME. Quasiment aucun prestataire indépendant ne peut écrire « déjà livré en production ».",
        technologies: ["React", "Hono", "Cloudflare", "OAuth 2.1", "Factur-X", "UBL"],
        featured: true,
        status: "delivered",
        hasImage: true
      },
      {
        id: 1,
        slug: "suivi-production",
        label: "Mission client",
        labelType: "mission",
        title: "Suivi de production",
        sector: "Merchandising / PLV",
        period: "2024",
        problem: "Le suivi des projets PLV était géré par email et tableur, sans visibilité partagée avec les clients sur l'état d'avancement.",
        delivered: "Plateforme de suivi de production avec espaces clients personnalisés, suivi d'avancement par étape, gestion des rôles et permissions, notifications temps réel et tableau de bord.",
        result: "Visibilité totale sur l'avancement des projets, communication client simplifiée.",
        technologies: ["React", "Node.js", "PostgreSQL"],
        featured: false,
        status: "delivered",
        hasImage: true
      },
      {
        id: 3,
        slug: "erp-administratif",
        label: "Produit propre",
        labelType: "product",
        title: "ERP administratif et financier",
        sector: "PME de services",
        period: "2024",
        problem: "Devis, factures, trésorerie, clients et fournisseurs gérés dans des outils séparés sans vision consolidée de l'activité.",
        delivered: "ERP couvrant devis, factures, facturation électronique, connexion bancaire et récupération des transactions, catégorisation des dépenses, gestion clients et fournisseurs, import catalogue produits.",
        result: "Centralisation de la gestion administrative, réduction des tâches manuelles.",
        technologies: ["React", "Hono", "PostgreSQL", "Open Banking"],
        featured: false,
        status: "delivered",
        hasImage: true
      },
      {
        id: 4,
        slug: "gestion-cabinet-comptable",
        label: "Mission client",
        labelType: "mission",
        title: "Application de gestion pour cabinet comptable",
        sector: "Cabinets comptables",
        period: "2023",
        problem: "Une application de gestion vieillissante, difficile à faire évoluer. Chaque nouvelle fonctionnalité prenait du temps et fragilisait l'existant.",
        delivered: "Migration vers une architecture moderne et découplée : l'interface séparée du moteur de données, chacun pouvant évoluer sans casser l'autre. Reprise des fonctionnalités existantes sans interruption de service.",
        result: "Une base saine, plus rapide à faire évoluer, et des mises à jour sans risque pour l'existant.",
        technologies: ["React", "Hono", "TypeScript", "PostgreSQL"],
        featured: false,
        status: "delivered",
        hasImage: false
      },
      {
        id: 5,
        slug: "suivi-chantier-btp",
        label: "Produit propre",
        labelType: "product",
        title: "Suivi de chantier BTP",
        sector: "BTP — Étanchéité",
        period: "En cours",
        problem: "En tant que dirigeant d'une entreprise d'étanchéité, je coordonnais planning, suivi terrain, documents et communication client par téléphone et fichiers partagés.",
        delivered: "Application de gestion de chantier : planning des équipes, suivi d'avancement, gestion documentaire, photos terrain, gestion des clients et tableaux de bord.",
        result: "",
        technologies: ["React", "Hono", "Cloudflare"],
        featured: false,
        status: "in_development",
        hasImage: false
      }
    ]
  },
  sectors: {
    title: "Des solutions adaptées aux métiers",
    subtitle: "Chaque secteur possède ses contraintes. Le logiciel est conçu autour de votre réalité.",
    list: [
      {
        name: "Cabinets comptables",
        body: "FEC, PCG, liasse fiscale, facturation électronique, gestion multi-cabinet. Trois références réelles en production."
      },
      {
        name: "BTP",
        body: "Suivi de chantier, planning des équipes, gestion documentaire, suivi terrain et relation client."
      },
      {
        name: "Merchandising / PLV",
        body: "Suivi de production, portail client personnalisé, gestion de projets et communications terrain."
      },
      {
        name: "PME de services",
        body: "Pilotage de l'activité, facturation, gestion administrative et automatisation des tâches répétitives."
      }
    ]
  },
  method: {
    title: "Une méthode rodée",
    steps: [
      {
        number: "01",
        title: "Comprendre votre activité",
        body: "Avant d'écrire une ligne de code, je passe du temps à comprendre comment vous travaillez, ce qui fonctionne et ce qui bloque."
      },
      {
        number: "02",
        title: "Identifier les gains possibles",
        body: "Je cartographie ce qui vous coûte du temps, ce qui est automatisable et ce que ça représente concrètement."
      },
      {
        number: "03",
        title: "Développer votre solution",
        body: "Je construis une application qui s'adapte à vos processus, pas l'inverse. Simple, rapide, efficace."
      },
      {
        number: "04",
        title: "Vous accompagner après livraison",
        body: "La relation ne s'arrête pas à la mise en production. Je reste disponible pour les évolutions."
      }
    ]
  },
  technologies: {
    title: "Une expertise technique au service de vos besoins",
    items: [
      "React",
      "TypeScript",
      "Hono",
      "Cloudflare",
      "Bases de données",
      "API",
      "Stripe",
      "Authentification",
      "Emails transactionnels"
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
    success: "Votre message a bien été envoyé. Je vous répondrai sous 24 heures.",
    error: "Une erreur s'est produite. Réessayez ou contactez-moi directement."
  },
  footer: {
    tagline: "Applications métier sur mesure pour les PME.",
    legal: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${BRAND}. Tous droits réservés.`
  }
};
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-craie border-b border-rule" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/",
            className: "font-archivo font-bold text-xl tracking-display text-encre hover:text-pin transition-colors",
            children: BRAND
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: isHome ? "#contact" : "/#contact",
            className: "bg-pin text-craie font-inter font-medium text-sm px-5 py-2.5 rounded hover:bg-encre transition-colors",
            children: content.nav.cta
          }
        )
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-craie border-t border-rule py-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "font-archivo font-bold text-encre tracking-display", children: BRAND }),
    /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-graphite", children: content.footer.tagline }),
    /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-graphite", children: content.footer.legal })
  ] }) });
}
function Layout() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const C = {
  encre: "#14181A",
  graphite: "#6E7377",
  pin: "#0E5C4A"
};
function pa(delay, duration, targetOpacity, reduce) {
  if (reduce) return {
    initial: { pathLength: 1, opacity: targetOpacity },
    animate: { pathLength: 1, opacity: targetOpacity }
  };
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: targetOpacity },
    transition: { delay, duration, ease: "easeInOut" }
  };
}
function HeroSVG() {
  const reduce = useReducedMotion() ?? false;
  const frameAnim = reduce ? { initial: { opacity: 1 }, animate: { opacity: 1 } } : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.3, duration: 0.4 } };
  const ruleAnim = (d) => reduce ? { initial: { pathLength: 1, opacity: 0.5 }, animate: { pathLength: 1, opacity: 0.5 } } : { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 0.5 }, transition: { delay: d, duration: 0.35 } };
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 600 420", width: "100%", height: "auto", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxs("g", { stroke: C.graphite, strokeWidth: "1", fill: "none", opacity: "0.85", children: [
      /* @__PURE__ */ jsx("rect", { x: "67", y: "79", width: "26", height: "22", rx: "1" }),
      /* @__PURE__ */ jsx("line", { x1: "67", y1: "88", x2: "93", y2: "88" }),
      /* @__PURE__ */ jsx("line", { x1: "67", y1: "97", x2: "93", y2: "97" }),
      /* @__PURE__ */ jsx("line", { x1: "79", y1: "79", x2: "79", y2: "101" }),
      /* @__PURE__ */ jsx("line", { x1: "88", y1: "79", x2: "88", y2: "101" }),
      /* @__PURE__ */ jsx("rect", { x: "42", y: "200", width: "26", height: "20", rx: "1" }),
      /* @__PURE__ */ jsx("polyline", { points: "42,200 55,212 68,200" }),
      /* @__PURE__ */ jsx("rect", { x: "131", y: "330", width: "28", height: "22", rx: "1" }),
      /* @__PURE__ */ jsx("path", { d: "M131 330 L131 325 Q131 323 133 323 L142 323 L145 327 L159 327 L159 330" }),
      /* @__PURE__ */ jsx("rect", { x: "204", y: "102", width: "22", height: "26", rx: "1" }),
      /* @__PURE__ */ jsx("line", { x1: "209", y1: "112", x2: "221", y2: "112" }),
      /* @__PURE__ */ jsx("line", { x1: "209", y1: "118", x2: "221", y2: "118" }),
      /* @__PURE__ */ jsx("line", { x1: "209", y1: "124", x2: "221", y2: "124" }),
      /* @__PURE__ */ jsx("rect", { x: "199", y: "102", width: "6", height: "26", rx: "1" }),
      /* @__PURE__ */ jsx("rect", { x: "173", y: "252", width: "24", height: "18", rx: "3" }),
      /* @__PURE__ */ jsx("path", { d: "M178 270 L175 277 L186 270" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.line,
      {
        x1: "80",
        y1: "90",
        x2: "215",
        y2: "115",
        stroke: C.encre,
        strokeWidth: "0.75",
        ...pa(0.1, 0.45, 0.4, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.line,
      {
        x1: "55",
        y1: "210",
        x2: "185",
        y2: "263",
        stroke: C.encre,
        strokeWidth: "0.75",
        ...pa(0.15, 0.45, 0.4, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.path,
      {
        d: "M145 340 C 100 298 65 255 55 210",
        stroke: C.encre,
        strokeWidth: "0.75",
        ...pa(0.2, 0.5, 0.4, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.line,
      {
        x1: "215",
        y1: "115",
        x2: "185",
        y2: "263",
        stroke: C.encre,
        strokeWidth: "0.75",
        ...pa(0.25, 0.4, 0.4, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.path,
      {
        d: "M80 90 C 110 145 150 200 185 263",
        stroke: C.encre,
        strokeWidth: "0.75",
        ...pa(0.3, 0.45, 0.4, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.path,
      {
        d: "M80 90 C 165 90 245 210 295 210",
        stroke: C.encre,
        strokeWidth: "1",
        ...pa(0.65, 0.6, 1, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.line,
      {
        x1: "55",
        y1: "210",
        x2: "295",
        y2: "210",
        stroke: C.encre,
        strokeWidth: "1",
        ...pa(0.72, 0.5, 1, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.path,
      {
        d: "M145 340 C 145 290 235 235 295 210",
        stroke: C.encre,
        strokeWidth: "1",
        ...pa(0.68, 0.6, 1, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.path,
      {
        d: "M215 115 C 265 115 290 165 295 210",
        stroke: C.encre,
        strokeWidth: "1",
        ...pa(0.78, 0.5, 1, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.path,
      {
        d: "M185 263 C 240 263 283 235 295 210",
        stroke: C.encre,
        strokeWidth: "1",
        ...pa(0.82, 0.45, 1, reduce)
      }
    ),
    /* @__PURE__ */ jsx(
      motion.line,
      {
        x1: "295",
        y1: "210",
        x2: "335",
        y2: "210",
        stroke: C.pin,
        strokeWidth: "1.5",
        ...pa(1.2, 0.18, 1, reduce)
      }
    ),
    /* @__PURE__ */ jsxs(motion.g, { ...frameAnim, children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "335",
          y: "110",
          width: "215",
          height: "195",
          rx: "6",
          stroke: C.pin,
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: "335",
          y1: "141",
          x2: "550",
          y2: "141",
          stroke: C.pin,
          strokeWidth: "1",
          opacity: "0.6"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "352", cy: "125", r: "2.5", fill: C.pin, opacity: "0.7" }),
      /* @__PURE__ */ jsx("circle", { cx: "362", cy: "125", r: "2.5", fill: C.pin, opacity: "0.45" }),
      /* @__PURE__ */ jsx("circle", { cx: "372", cy: "125", r: "2.5", fill: C.pin, opacity: "0.25" }),
      /* @__PURE__ */ jsx(
        motion.line,
        {
          x1: "355",
          y1: "183",
          x2: "520",
          y2: "183",
          stroke: C.pin,
          strokeWidth: "1",
          ...ruleAnim(1.55)
        }
      ),
      /* @__PURE__ */ jsx(
        motion.line,
        {
          x1: "355",
          y1: "222",
          x2: "495",
          y2: "222",
          stroke: C.pin,
          strokeWidth: "1",
          ...ruleAnim(1.65)
        }
      )
    ] })
  ] });
}
const ease = [0.22, 1, 0.36, 1];
const t = (delay = 0) => ({ duration: 0.45, ease, delay });
function Hero() {
  const { hero } = content;
  return /* @__PURE__ */ jsx("section", { className: "min-h-screen bg-craie flex items-center pt-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-20 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-6 h-px bg-encre/25 shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("p", { className: "label text-graphite", children: hero.label })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "font-archivo font-bold text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-encre leading-[0.97] mb-5 text-balance", children: [
            hero.headline,
            /* @__PURE__ */ jsx("br", {}),
            hero.headline2
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-archivo text-base md:text-lg text-encre/65 leading-snug mb-6 max-w-[44ch]", children: hero.tension }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-graphite text-base leading-relaxed mb-10 max-w-[52ch] text-pretty", children: hero.body }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center justify-center bg-pin text-craie font-inter font-medium text-sm px-7 py-3.5 rounded hover:bg-encre transition-colors",
                children: hero.cta1
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#realisations",
                className: "inline-flex items-center justify-center border border-encre/25 text-encre font-inter font-medium text-sm px-7 py-3.5 rounded hover:border-encre hover:bg-encre hover:text-craie transition-colors",
                children: hero.cta2
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "hidden md:block",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, delay: 0.3 },
        children: /* @__PURE__ */ jsx(HeroSVG, {})
      }
    )
  ] }) });
}
function SectionDivider() {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "h-px bg-rule",
      style: { originX: 0 },
      initial: { scaleX: 0 },
      whileInView: { scaleX: 1 },
      viewport: { once: true },
      transition: { duration: 0.7, ease }
    }
  );
}
function SectionNumber({ index, label }) {
  const n = String(index).padStart(2, "0");
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-8", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("span", { className: "label text-graphite/50", children: n }),
    /* @__PURE__ */ jsx("span", { className: "label text-graphite/30", children: "—" }),
    /* @__PURE__ */ jsx("span", { className: "label text-graphite/50", children: label })
  ] });
}
function Problems() {
  return /* @__PURE__ */ jsxs("section", { className: "bg-pierre pb-20 md:pb-28", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-14 md:pt-20", children: [
      /* @__PURE__ */ jsx(SectionNumber, { index: 1, label: "Le problème" }),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: -8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45, ease },
          className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-12 text-balance",
          children: content.problems.title
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: content.problems.cards.map((card, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { delay: i * 0.05, duration: 0.45, ease },
          className: "bg-craie border border-rule rounded-lg p-6",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-encre mb-2 text-balance", children: card.title }),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-graphite text-sm leading-relaxed text-pretty", children: card.body })
          ]
        },
        i
      )) })
    ] })
  ] });
}
function Solution() {
  const { steps } = content.solution;
  return /* @__PURE__ */ jsxs("section", { className: "bg-craie pb-20 md:pb-28", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-14 md:pt-20", children: [
      /* @__PURE__ */ jsx(SectionNumber, { index: 2, label: "L'approche" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-16", children: [
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: -8 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.45, ease },
            className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-4 text-balance",
            children: content.solution.title
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.08, duration: 0.45, ease },
            className: "font-inter text-graphite leading-relaxed text-pretty max-w-[62ch]",
            children: content.solution.body
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:block relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-[11px] left-[9px] right-0 h-px bg-rule" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 gap-4", children: steps.map((step, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 14 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.06, duration: 0.45, ease },
            className: "relative pt-8",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-[4px] left-[9px] w-[14px] h-[14px] rounded-full border-2 border-pin bg-craie" }),
              /* @__PURE__ */ jsx("p", { className: "label text-pin mb-2", children: step.number }),
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-base tracking-display text-encre mb-2 leading-snug text-balance", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-graphite leading-relaxed text-pretty", children: step.body })
            ]
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden", children: steps.map((step, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -12 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.05, duration: 0.4, ease },
          className: "flex gap-5 mb-8 last:mb-0",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center shrink-0", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border-2 border-pin flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "font-archivo font-bold text-pin text-xs", children: step.number }) }),
              i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "w-px flex-1 bg-rule mt-2 min-h-[2rem]" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-encre mb-1 text-balance", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-graphite leading-relaxed text-pretty", children: step.body })
            ] })
          ]
        },
        i
      )) })
    ] })
  ] });
}
function PlanCard({ plan, index }) {
  const delay = index * 0.1;
  if (plan.featured) {
    return /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: t(delay),
        className: "bg-encre text-craie rounded-lg p-8 flex flex-col",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            plan.tag && /* @__PURE__ */ jsx("p", { className: "label text-pin mb-3", children: plan.tag }),
            /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-2xl tracking-display text-craie mb-4 text-balance", children: plan.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-px bg-pin shrink-0", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("span", { className: "label text-pin", children: plan.marker })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-sm leading-relaxed text-craie/75 flex-1 text-pretty", children: plan.body }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "mt-8 inline-block text-center bg-pin text-craie font-inter font-medium text-sm px-6 py-3 rounded hover:bg-pin/80 transition-colors",
              children: plan.cta
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 14 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: t(delay),
      className: "bg-craie border border-rule rounded-lg p-8 flex flex-col",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          plan.tag && /* @__PURE__ */ jsx("p", { className: "label text-graphite mb-3", children: plan.tag }),
          /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-2xl tracking-display text-encre mb-4 text-balance", children: plan.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-px bg-encre/30 shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "label text-graphite", children: plan.marker })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-inter text-sm leading-relaxed text-graphite flex-1 text-pretty", children: plan.body }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            className: "mt-8 inline-block text-center border border-encre/20 text-encre font-inter font-medium text-sm px-6 py-3 rounded hover:border-encre hover:bg-encre hover:text-craie transition-colors",
            children: plan.cta
          }
        )
      ]
    }
  );
}
function Pricing() {
  return /* @__PURE__ */ jsxs("section", { className: "bg-pierre pb-20 md:pb-28", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-14 md:pt-20", children: [
      /* @__PURE__ */ jsx(SectionNumber, { index: 3, label: "Les offres" }),
      /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-12 text-balance", children: content.pricing.title }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 items-start", children: content.pricing.plans.map((plan, i) => /* @__PURE__ */ jsx(PlanCard, { plan, index: i }, i)) })
    ] })
  ] });
}
const LABEL_STYLES$1 = {
  mission: "border-rule text-graphite",
  product: "border-pin/40 text-pin"
};
function Thumbnail({ item, index }) {
  const isFeatured = item.featured;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 14 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: { delay: Math.min(index * 0.07, 0.25), duration: 0.45, ease },
      className: isFeatured ? "md:col-span-2" : "",
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/projets/${item.slug}`,
          className: "group block bg-craie border border-rule rounded-lg overflow-hidden relative focus-visible:ring-2 focus-visible:ring-pin focus-visible:ring-offset-2 cursor-pointer",
          "aria-label": item.title,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `w-full bg-pierre transition-colors duration-300 group-hover:bg-rule ${isFeatured ? "aspect-[3/1]" : "aspect-video"}`,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: `p-5 ${isFeatured ? "md:p-8" : ""}`, children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: `label border rounded px-2 py-0.5 ${LABEL_STYLES$1[item.labelType]}`, children: item.label }),
                item.status === "in_development" && /* @__PURE__ */ jsx("span", { className: "label text-graphite border border-dashed border-graphite/50 rounded px-2 py-0.5", children: "En développement" })
              ] }),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: `font-archivo font-bold tracking-display text-encre leading-snug text-balance group-hover:text-pin transition-colors duration-200 ${isFeatured ? "text-xl md:text-2xl mb-3" : "text-lg mb-3"}`,
                  children: item.title
                }
              ),
              item.result && /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-graphite leading-relaxed", children: item.result }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center gap-1.5", children: /* @__PURE__ */ jsx("span", { className: "font-inter text-xs text-pin/0 group-hover:text-pin transition-colors duration-200 translate-x-0 group-hover:translate-x-0.5 transition-transform", children: "Voir le projet →" }) })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-pin scale-x-0 group-hover:scale-x-100 origin-left motion-reduce:transition-none transition-transform duration-300",
                "aria-hidden": "true",
                style: { transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }
              }
            )
          ]
        }
      )
    }
  );
}
function Projects() {
  return /* @__PURE__ */ jsxs("section", { id: "realisations", className: "bg-craie pb-20 md:pb-28", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-14 md:pt-20", children: [
      /* @__PURE__ */ jsx(SectionNumber, { index: 4, label: "Les réalisations" }),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: -8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45, ease },
          className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-12 text-balance",
          children: content.projects.title
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 [grid-auto-flow:dense]", children: content.projects.items.map((item, i) => /* @__PURE__ */ jsx(Thumbnail, { item, index: i }, item.id)) })
    ] })
  ] });
}
function Sectors() {
  return /* @__PURE__ */ jsxs("section", { className: "bg-pierre pb-20 md:pb-28", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-14 md:pt-20", children: [
      /* @__PURE__ */ jsx(SectionNumber, { index: 5, label: "Les secteurs" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: -8 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.45, ease },
            className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-4 text-balance",
            children: content.sectors.title
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.08, duration: 0.45, ease },
            className: "font-inter text-graphite leading-relaxed text-pretty max-w-[62ch]",
            children: content.sectors.subtitle
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-rule", children: content.sectors.list.map((sector, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.05, duration: 0.45, ease },
          className: "border-b border-r border-rule p-6 last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-encre mb-2", children: sector.name }),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-graphite leading-relaxed text-pretty", children: sector.body })
          ]
        },
        i
      )) })
    ] })
  ] });
}
function Method() {
  return /* @__PURE__ */ jsxs("section", { className: "bg-craie pb-20 md:pb-28", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-14 md:pt-20", children: [
      /* @__PURE__ */ jsx(SectionNumber, { index: 6, label: "La démarche" }),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: -8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45, ease },
          className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-12 text-balance",
          children: content.method.title
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-10 lg:gap-16", children: content.method.steps.map((step, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06, duration: 0.45, ease },
          className: "flex gap-6",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-archivo font-bold text-5xl text-pin leading-none shrink-0 select-none tabular", children: step.number }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-xl tracking-display text-encre mb-2 leading-snug text-balance", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-graphite leading-relaxed text-pretty max-w-[42ch]", children: step.body })
            ] })
          ]
        },
        i
      )) })
    ] })
  ] });
}
function Technologies() {
  return /* @__PURE__ */ jsxs("section", { className: "bg-pierre pb-14", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 pt-12", children: [
      /* @__PURE__ */ jsx("p", { className: "label text-graphite mb-5", children: content.technologies.title }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: content.technologies.items.map((item, i) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "font-inter text-sm text-graphite border border-rule rounded px-3 py-1.5",
          children: item
        },
        i
      )) })
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
  const base = "w-full bg-white/5 border border-white/20 text-craie placeholder-graphite rounded px-4 py-3 font-inter text-sm focus:outline-none focus:border-pin transition-colors";
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "block label text-craie/70 mb-1.5", children: [
      label,
      required && " *"
    ] }),
    rows ? /* @__PURE__ */ jsx("textarea", { id, name: id, rows, placeholder, className: base }) : /* @__PURE__ */ jsx("input", { id, name: id, type, placeholder, className: base }),
    error && /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-red-400 mt-1", children: error })
  ] });
}
function Contact() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(content.contact.error);
    }
  }
  const { fields } = content.contact;
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "bg-encre pb-20 md:pb-28", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-6 pt-14 md:pt-20", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.45, ease },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-craie mb-4 text-balance", children: content.contact.title }),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-graphite leading-relaxed text-pretty max-w-[52ch]", children: content.contact.body })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.12, duration: 0.45, ease },
          children: status === "success" ? /* @__PURE__ */ jsx("div", { className: "bg-pin/10 border border-pin/30 rounded-lg p-6", children: /* @__PURE__ */ jsx("p", { className: "font-inter text-craie leading-relaxed", children: content.contact.success }) }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsx(
                Field,
                {
                  label: fields.nom,
                  id: "nom",
                  required: true,
                  placeholder: "Jean Dupont",
                  error: errors.nom
                }
              ),
              /* @__PURE__ */ jsx(
                Field,
                {
                  label: fields.entreprise,
                  id: "entreprise",
                  placeholder: "Votre entreprise"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsx(
                Field,
                {
                  label: fields.email,
                  id: "email",
                  type: "email",
                  required: true,
                  placeholder: "jean@exemple.fr",
                  error: errors.email
                }
              ),
              /* @__PURE__ */ jsx(
                Field,
                {
                  label: fields.telephone,
                  id: "telephone",
                  type: "tel",
                  placeholder: "06 00 00 00 00"
                }
              )
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
            status === "error" && /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-red-400", children: errorMessage }),
            /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: status === "loading",
                className: "w-full sm:w-auto bg-pin text-craie font-inter font-medium text-sm px-8 py-3 rounded hover:bg-pin/80 disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
                children: status === "loading" ? "Envoi…" : content.contact.cta
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-graphite leading-relaxed mt-1", children: content.contact.rgpd })
          ] })
        }
      )
    ] }) })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Problems, {}),
    /* @__PURE__ */ jsx(Solution, {}),
    /* @__PURE__ */ jsx(Pricing, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Sectors, {}),
    /* @__PURE__ */ jsx(Method, {}),
    /* @__PURE__ */ jsx(Technologies, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
const LABEL_STYLES = {
  mission: "border-rule text-graphite",
  product: "border-pin/40 text-pin"
};
const TOTAL = content.projects.items.length;
function ImageFrame() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-full bg-pierre aspect-[16/7] rounded-lg",
      "aria-hidden": "true"
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
    creator: {
      "@type": "Person",
      name: "DJEXA"
    }
  };
  return /* @__PURE__ */ jsxs("main", { className: "bg-craie", children: [
    /* @__PURE__ */ jsx(SectionDivider, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 pt-20 pb-28 md:pt-28 md:pb-36", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2.5 mb-10", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("span", { className: "label text-graphite/50", children: [
        "Réalisation ",
        position,
        " / ",
        total
      ] }) }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, ease },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsx("span", { className: `label border rounded px-2 py-0.5 ${LABEL_STYLES[item.labelType]}`, children: item.label }),
              item.status === "in_development" && /* @__PURE__ */ jsx("span", { className: "label text-graphite border border-dashed border-graphite/50 rounded px-2 py-0.5", children: "En développement" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "label text-graphite mb-2", children: item.sector }),
            /* @__PURE__ */ jsx("h1", { className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-3 leading-snug text-balance", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "label text-graphite/40", children: item.period })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "my-10",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, ease, delay: 0.1 },
          children: /* @__PURE__ */ jsx(ImageFrame, {})
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "flex flex-col gap-12",
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease, delay: 0.15 },
          children: [
            /* @__PURE__ */ jsxs("section", { "aria-labelledby": "section-problem", children: [
              /* @__PURE__ */ jsx("p", { id: "section-problem", className: "label text-graphite/50 mb-3", children: "Le problème" }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-encre/90 leading-relaxed text-pretty text-lg", children: item.problem })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-px bg-rule" }),
            /* @__PURE__ */ jsxs("section", { "aria-labelledby": "section-delivered", children: [
              /* @__PURE__ */ jsx("p", { id: "section-delivered", className: "label text-graphite/50 mb-3", children: "Ce qui a été livré" }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-encre/80 leading-relaxed text-pretty text-lg", children: item.delivered }),
              item.status === "in_development" && /* @__PURE__ */ jsx("p", { className: "font-inter text-sm italic text-graphite leading-relaxed mt-4", children: "Je dirige moi-même une entreprise du bâtiment. Je construis l'outil dont j'ai besoin — c'est la meilleure façon de le comprendre." })
            ] }),
            item.result && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("div", { className: "h-px bg-rule" }),
              /* @__PURE__ */ jsxs("section", { "aria-labelledby": "section-result", children: [
                /* @__PURE__ */ jsx("p", { id: "section-result", className: "label text-graphite/50 mb-3", children: "Le résultat" }),
                /* @__PURE__ */ jsx("p", { className: "font-inter font-medium text-pin leading-relaxed text-lg", children: item.result })
              ] })
            ] }),
            item.note && /* @__PURE__ */ jsx("div", { className: "bg-pin/8 border-l-2 border-pin pl-4 py-3", children: /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-encre leading-relaxed text-pretty", children: item.note }) }),
            /* @__PURE__ */ jsxs("section", { "aria-labelledby": "section-stack", children: [
              /* @__PURE__ */ jsx("p", { id: "section-stack", className: "label text-graphite/50 mb-3", children: "Stack" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: item.technologies.map((tech, i) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "font-inter text-xs text-graphite border border-rule rounded px-2 py-0.5",
                  children: tech
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center gap-6", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/#contact",
                  className: "bg-pin text-craie font-inter font-medium text-sm px-6 py-3 rounded hover:bg-encre transition-colors",
                  children: "Un projet similaire ? En discuter"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/",
                  className: "font-inter text-sm text-graphite hover:text-pin transition-colors",
                  children: "← Toutes les réalisations"
                }
              )
            ] })
          ]
        }
      )
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
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-craie flex flex-col", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b border-rule", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-6 h-16 flex items-center", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "font-archivo font-bold text-xl tracking-display text-encre hover:text-pin transition-colors",
        children: BRAND
      }
    ) }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 flex items-center justify-center px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "label text-graphite/50 mb-6", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-4 text-balance", children: "Page introuvable" }),
      /* @__PURE__ */ jsx("p", { className: "font-inter text-graphite mb-10 text-pretty", children: "La page que vous cherchez n'existe pas ou a été déplacée." }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "bg-pin text-craie font-inter font-medium text-sm px-6 py-3 rounded hover:bg-encre transition-colors",
          children: "Retour à l'accueil"
        }
      )
    ] }) })
  ] });
}
function AppRoutes() {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/projets/:slug", element: /* @__PURE__ */ jsx(ProjectDetail, {}) })
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
