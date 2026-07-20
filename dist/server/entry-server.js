import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { motion, AnimatePresence, useInView, MotionConfig } from "framer-motion";
import { useLocation, Link, Outlet, useParams, Navigate, Routes, Route } from "react-router-dom";
import { siWhatsapp, siGooglecalendar } from "simple-icons";
const BRAND = "DJEXA";
const content = {
  nav: {
    cta: "Discuter de votre projet"
  },
  hero: {
    eyebrow: "Studio · Applications métier sur mesure",
    titleLines: ["Votre entreprise", "est unique.", "Votre logiciel aussi."],
    lede: "Nous développons des applications métier sur mesure pour les PME. Les fichiers Excel, les tâches manuelles et les outils éparpillés deviennent une seule application, pensée autour de votre façon de travailler.",
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
    body: "Chaque entreprise possède ses propres méthodes de travail. Nous concevons des applications adaptées à vos processus afin de simplifier votre quotidien.",
    steps: [
      {
        number: "01",
        title: "Analyse",
        body: "Nous prenons le temps de comprendre vos processus, vos contraintes et vos objectifs."
      },
      {
        number: "02",
        title: "Conception",
        body: "Nous concevons l'architecture et les interfaces adaptées à votre activité."
      },
      {
        number: "03",
        title: "Développement",
        body: "Nous construisons l'application avec les technologies appropriées à votre contexte."
      },
      {
        number: "04",
        title: "Mise en production",
        body: "Nous déployons et configurons votre solution dans votre environnement."
      },
      {
        number: "05",
        title: "Accompagnement",
        body: "Nous restons disponibles pour les évolutions, corrections et améliorations."
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
        body: "Nous passons une journée dans vos process. Vous repartez avec un document : ce qui vous coûte du temps, ce qui est automatisable, ce que ça coûterait, dans quel ordre. Déduit de la suite si on continue.",
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
        tag: "Périmètre précis",
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
        title: "Facturation électronique",
        sector: "Cabinets comptables",
        period: "2025–2026",
        problem: "Un groupe de cabinets comptables devait être prêt pour l'obligation de facturation électronique avant le 1er septembre 2026. Aucun outil du marché ne correspondait à leur organisation.",
        delivered: "L'application émet, envoie et archive les factures électroniques via la plateforme officielle retenue par le cabinet. Elle couvre tout le cycle : création de la facture, envoi, suivi de réception, archivage. Mise en service en sept mois, de la conception à la mise en production.",
        result: "En production avant l'échéance du 1er septembre 2026.",
        note: "La réception de factures électroniques devient obligatoire le 1er septembre 2026 pour toutes les entreprises assujetties à la TVA, l'émission en septembre 2027 pour les TPE/PME. Quasiment aucun prestataire indépendant ne peut écrire « déjà livré en production ».",
        technologies: ["React", "Hono", "Cloudflare"],
        featured: true
      },
      {
        id: 1,
        slug: "suivi-production",
        title: "Suivi de production",
        sector: "Merchandising / PLV",
        period: "2024",
        problem: "Le suivi des projets PLV se gérait par email et tableur. Ni l'équipe ni les clients n'avaient de visibilité claire sur l'état d'avancement de chaque commande.",
        delivered: "Chaque client dispose d'un espace en ligne dédié où il consulte l'avancement de ses commandes en temps réel. L'équipe interne met à jour les étapes au fil de la production, les clients reçoivent une notification automatique à chaque progression, et le responsable pilote l'ensemble depuis un tableau de bord.",
        result: "Visibilité totale sur l'avancement des projets, communication client simplifiée.",
        technologies: ["React", "Node.js", "PostgreSQL"],
        featured: false
      },
      {
        id: 3,
        slug: "erp-administratif",
        title: "ERP administratif et financier",
        sector: "PME de services",
        period: "2024",
        problem: "Devis, factures, relevés bancaires, clients et fournisseurs étaient gérés dans des outils séparés. Impossible d'avoir une vision globale de l'activité sans compiler plusieurs fichiers.",
        delivered: "Un seul outil pour établir les devis, émettre les factures, consulter les mouvements bancaires et catégoriser les dépenses. Les transactions bancaires se synchronisent automatiquement. Clients, fournisseurs et catalogue produits sont gérés au même endroit.",
        result: "Gestion administrative centralisée, tâches manuelles supprimées.",
        technologies: ["React", "Hono", "PostgreSQL"],
        featured: false
      },
      {
        id: 4,
        slug: "gestion-cabinet-comptable",
        title: "Application de gestion pour cabinet comptable",
        sector: "Cabinets comptables",
        period: "2023",
        problem: "Le logiciel de gestion du cabinet était devenu difficile à faire évoluer. Chaque modification prenait du temps et risquait de casser ce qui fonctionnait déjà.",
        delivered: "Le logiciel a été entièrement reconstruit sans interrompre l'activité du cabinet. Les collaborateurs ont continué à travailler normalement pendant toute la durée du projet. Le résultat est un outil plus rapide, plus fiable, et beaucoup plus facile à faire évoluer.",
        result: "Outil modernisé sans interruption de service, évolutions désormais rapides et sans risque.",
        technologies: ["React", "Hono", "PostgreSQL"],
        featured: false
      },
      {
        id: 5,
        slug: "suivi-chantier-btp",
        title: "Suivi de chantier BTP",
        sector: "BTP",
        period: "2025",
        problem: "Le planning des équipes, les comptes-rendus terrain, les documents de chantier et les échanges clients se géraient par téléphone et fichiers partagés. Aucune vision consolidée d'un chantier à l'autre.",
        delivered: "L'application centralise le planning des équipes, le suivi d'avancement par chantier, les documents, les photos terrain et les échanges avec les clients. Chaque chef de chantier dispose d'une vue sur ses interventions en cours.",
        result: "Pilotage de plusieurs chantiers simultanés depuis une seule interface.",
        technologies: ["React", "Hono", "Cloudflare"],
        featured: false
      }
    ]
  },
  sectors: {
    title: "Des solutions adaptées aux métiers",
    subtitle: "Chaque secteur possède ses contraintes. Le logiciel est conçu autour de votre réalité.",
    list: [
      {
        name: "Cabinets comptables",
        body: "FEC, PCG, liasse fiscale, facturation électronique, gestion multi-cabinet — adapté aux cabinets de toutes tailles."
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
        body: "Avant d'écrire une ligne de code, nous passons du temps à comprendre comment vous travaillez, ce qui fonctionne et ce qui bloque."
      },
      {
        number: "02",
        title: "Identifier les gains possibles",
        body: "Nous cartographions ce qui vous coûte du temps, ce qui est automatisable et ce que ça représente concrètement."
      },
      {
        number: "03",
        title: "Développer votre solution",
        body: "Nous construisons une application qui s'adapte à vos processus, pas l'inverse. Simple, rapide, efficace."
      },
      {
        number: "04",
        title: "Vous accompagner après livraison",
        body: "La relation ne s'arrête pas à la mise en production. Nous restons disponibles pour les évolutions."
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
    success: "Votre message a bien été envoyé. Nous vous répondrons sous 24 heures.",
    error: "Une erreur s'est produite. Réessayez ou contactez-nous directement."
  },
  beforeAfter: {
    title: "Ce qui change, concrètement.",
    before: [
      "Des fichiers Excel qui circulent par email",
      "Des informations recopiées d'un outil à l'autre",
      "Des relances par WhatsApp et par téléphone",
      "Personne ne sait où en est vraiment un dossier"
    ],
    after: [
      "Une seule application, une seule source de vérité",
      "Les données saisies une fois, réutilisées partout",
      "Des notifications automatiques, plus de relances manuelles",
      "Chaque dossier suivi en temps réel, par tous"
    ]
  },
  comparison: {
    title: "Excel, logiciel standard, ou application sur mesure ?",
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
  footer: {
    tagline: "Applications métier sur mesure pour les PME.",
    legal: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${BRAND}. Tous droits réservés.`
  }
};
const SERVICE_NAV = [
  { slug: "erp-sur-mesure", icon: "⚙️", title: "ERP sur mesure", desc: "Gestion intégrée sur mesure" },
  { slug: "crm-sur-mesure", icon: "📊", title: "CRM sur mesure", desc: "Pipeline commercial adapté" },
  { slug: "portail-client", icon: "🔗", title: "Portail client", desc: "Espace client en ligne" },
  { slug: "automatisation-processus", icon: "⚡", title: "Automatisation", desc: "Tâches manuelles éliminées" },
  { slug: "gestion-chantier", icon: "🏗️", title: "Gestion de chantier", desc: "Planning et suivi terrain" },
  { slug: "gestion-intervention", icon: "🔧", title: "Gestion interventions", desc: "Planification et rapports" }
];
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
function ServicesDropdown({ isLight }) {
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
              /* @__PURE__ */ jsx("span", { className: "text-xl shrink-0 mt-0.5", children: item.icon }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("p", { className: "font-inter font-semibold text-sm text-primary group-hover:text-secondary transition-colors duration-150 leading-tight", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-muted leading-snug mt-0.5", children: item.desc })
              ] })
            ]
          },
          item.slug
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "px-5 py-3 bg-section border-t border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "font-inter text-xs text-muted", children: "Studio · Applications métier sur mesure" }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/applications-metier",
              className: "font-inter text-xs font-medium text-secondary hover:underline flex items-center gap-1",
              children: [
                "Toutes nos expertises",
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServOpen, setMobileServOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const dropdownRef = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const isLight = scrolled || menuOpen;
  const realisationsHref = isHome ? "#realisations" : "/#realisations";
  const contactHref = isHome ? "#contact" : "/#contact";
  const navTextCls = isLight ? "text-muted hover:text-primary" : "text-white/70 hover:text-white";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.header,
      {
        initial: { y: -64, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isLight ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxs("div", { className: `mx-auto max-w-6xl px-6 flex items-center gap-8 transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`, children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/",
              className: `font-archivo font-bold text-xl tracking-display transition-colors duration-200 shrink-0 ${isLight ? "text-primary hover:text-secondary" : "text-white hover:text-white/80"}`,
              children: [
                BRAND,
                /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-1 flex-1", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                ref: dropdownRef,
                className: "relative",
                onMouseEnter: () => setServicesOpen(true),
                onMouseLeave: () => setServicesOpen(false),
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setServicesOpen((v) => !v),
                      className: `inline-flex items-center gap-1.5 font-inter text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-150 ${navTextCls}`,
                      "aria-expanded": servicesOpen,
                      "aria-haspopup": "true",
                      children: [
                        "Services",
                        /* @__PURE__ */ jsx(ChevronDown, { open: servicesOpen })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: servicesOpen && /* @__PURE__ */ jsx(ServicesDropdown, { isLight }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: realisationsHref,
                className: `font-inter text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-150 ${navTextCls}`,
                children: "Réalisations"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/blog",
                className: `font-inter text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-150 ${navTextCls}`,
                children: "Blog"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-4 ml-auto", children: [
            /* @__PURE__ */ jsxs("span", { className: `hidden lg:flex items-center gap-1.5 font-inter text-xs transition-colors duration-300 ${isLight ? "text-muted" : "text-white/45"}`, children: [
              /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0" }),
              "Disponible"
            ] }),
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                href: contactHref,
                whileTap: { scale: 0.97 },
                className: "inline-flex items-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200 shrink-0",
                children: [
                  content.nav.cta,
                  /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6h8M6 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `md:hidden p-2 -mr-2 ml-auto transition-colors duration-200 ${isLight ? "text-primary" : "text-white"}`,
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
        className: `md:hidden fixed inset-0 z-40 bg-primary flex flex-col transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        "aria-hidden": !menuOpen,
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-16 shrink-0" }),
          /* @__PURE__ */ jsxs("nav", { className: "flex-1 flex flex-col px-6 pt-6 pb-12 gap-0.5 overflow-y-auto", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "w-full flex items-center justify-between font-archivo font-bold text-2xl tracking-display text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors duration-150",
                  onClick: () => setMobileServOpen((v) => !v),
                  "aria-expanded": mobileServOpen,
                  children: [
                    "Services",
                    /* @__PURE__ */ jsx(ChevronDown, { open: mobileServOpen })
                  ]
                }
              ),
              mobileServOpen && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0 pl-4 mb-2", children: [
                SERVICE_NAV.map((item) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: `/${item.slug}`,
                    className: "flex items-center gap-3 py-2.5 border-b border-white/5 text-white/60 hover:text-white transition-colors duration-150",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-base", children: item.icon }),
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
                    children: "Toutes nos expertises →"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: realisationsHref,
                onClick: () => setMenuOpen(false),
                className: "font-archivo font-bold text-2xl tracking-display text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors duration-150",
                children: "Réalisations"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/blog",
                className: "font-archivo font-bold text-2xl tracking-display text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors duration-150",
                children: "Blog"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: contactHref,
                  onClick: () => setMenuOpen(false),
                  className: "inline-flex items-center justify-center gap-2 bg-secondary text-white font-inter font-medium text-sm px-6 py-3.5 rounded-2xl hover:bg-secondary/90 transition-colors duration-200",
                  children: [
                    content.nav.cta,
                    /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2 6h8M6 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-1.5 text-white/35 text-xs font-inter", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
                "Studio disponible pour nouveaux projets"
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
const ease = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
};
const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: delay } }
});
const textReveal = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: delay } }
});
const wordReveal = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: delay } }
});
const cardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease } }
};
const textLine = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } }
};
const wordItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } }
};
const tagItem = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease } }
};
const popIn = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }
};
const hoverLift = { y: -6, transition: { duration: 0.2, ease: "easeOut" } };
const services = [
  {
    slug: "applications-metier",
    meta: {
      title: "Applications métier sur mesure pour PME | DJEXA",
      description: "Studio spécialisé en applications métier sur mesure pour les PME. ERP, CRM, portail client, gestion de chantier — des logiciels pensés autour de votre façon de travailler."
    },
    hero: {
      eyebrow: "Applications métier",
      title: "Des logiciels pensés autour de votre activité",
      subtitle: "Votre entreprise a des processus qui lui sont propres. Elle mérite un outil qui les respecte — pas un logiciel générique qui vous oblige à changer votre façon de travailler.",
      cta: "Discuter de votre projet"
    },
    intro: {
      title: "Ce que nous développons",
      body: "Nous aidons les PME à remplacer les fichiers Excel, les saisies manuelles et les outils dispersés par une application unique, fiable et adaptée à leur métier. Chaque projet part de votre réalité terrain, pas d'un cahier des charges standard."
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
        q: "Est-ce accessible pour une PME avec un budget limité ?",
        a: "Oui, à condition de commencer par un périmètre bien ciblé. Un MVP (version initiale utile et utilisable) se développe en 4 à 12 semaines. On part de là et on améliore en continu, selon vos retours et votre budget."
      },
      {
        q: "Qui s'occupe de la maintenance après le développement ?",
        a: "Nous proposons un contrat de maintenance évolutive si vous souhaitez faire évoluer l'outil dans le temps. Vous êtes aussi libre de confier la maintenance à un autre développeur — vous restez propriétaire du code source."
      }
    ]
  },
  {
    slug: "erp-sur-mesure",
    meta: {
      title: "ERP sur mesure pour PME | DJEXA",
      description: "ERP sur mesure pour PME — un système de gestion intégré conçu autour de vos processus réels, pas des fonctionnalités génériques d'un éditeur. Studio indépendant, délais maîtrisés."
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
        q: "Suis-je propriétaire du code ?",
        a: "Oui, intégralement. Le code source vous appartient dès la livraison. Vous pouvez le faire évoluer avec nous ou avec n'importe quel autre développeur."
      }
    ]
  },
  {
    slug: "portail-client",
    meta: {
      title: "Portail client sur mesure pour PME | DJEXA",
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
    meta: {
      title: "Automatisation des processus métier pour PME | DJEXA",
      description: "Éliminez les tâches manuelles répétitives dans votre PME — saisies en double, relances manuelles, transferts d'information — et concentrez vos équipes sur ce qui a de la valeur."
    },
    hero: {
      eyebrow: "Automatisation",
      title: "Automatisez ce qui vous fait perdre du temps",
      subtitle: "Dans beaucoup de PME, des personnes qualifiées passent des heures chaque semaine à des tâches qui pourraient s'exécuter toutes seules. Ce temps-là a un coût.",
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
    meta: {
      title: "CRM sur mesure pour PME | DJEXA",
      description: "CRM sur mesure pour PME — pipeline commercial adapté à votre cycle de vente, relances automatisées, suivi des prospects et clients, sans la complexité de Salesforce ou HubSpot."
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
      title: "Logiciel BTP sur mesure pour PME du bâtiment | DJEXA",
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
        a: "Il est conçu pour les PME BTP de 5 à 100 personnes. Plus simple et moins cher qu'un ERP de grande entreprise, mais complet sur ce qui compte pour le bâtiment."
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
const locations = [
  {
    city: "Paris",
    slug: "paris",
    region: "Île-de-France",
    context: "L'Île-de-France concentre plus de 300 000 PME dans tous les secteurs — commerce, services, BTP, industrie. La concurrence y est forte, et l'efficacité opérationnelle est souvent le facteur différenciant."
  },
  {
    city: "Lyon",
    slug: "lyon",
    region: "Auvergne-Rhône-Alpes",
    context: "Lyon est le deuxième pôle économique français, avec un tissu dense de PME industrielles, de services aux entreprises et de négoce. La région Auvergne-Rhône-Alpes concentre des entreprises avec des besoins métiers souvent très spécifiques."
  },
  {
    city: "Toulouse",
    slug: "toulouse",
    region: "Occitanie",
    context: "Toulouse est le cœur de la filière aéronautique française, mais aussi un pôle de santé, de services numériques et d'agriculture. Les PME toulousaines ont des contraintes métiers distinctives qui méritent des outils adaptés."
  },
  {
    city: "Bordeaux",
    slug: "bordeaux",
    region: "Nouvelle-Aquitaine",
    context: "Bordeaux connaît une forte croissance économique depuis dix ans, avec des PME dans le négoce, le BTP, le tourisme et les services. La métropole bordelaise est devenue un terrain fertile pour les entreprises en développement."
  },
  {
    city: "Marseille",
    slug: "marseille",
    region: "Provence-Alpes-Côte d'Azur",
    context: "Marseille est un carrefour commercial avec des entreprises dans le transport, la logistique, les services et le BTP. La région PACA concentre des PME aux besoins variés, souvent confrontées à des défis de coordination et de visibilité opérationnelle."
  }
];
const SERVICE_LINKS = services.filter((s) => s.slug !== "applications-metier").map((s) => ({ label: s.hero.eyebrow, href: `/${s.slug}` }));
const BLOG_LINKS = [
  { label: "Tous les articles", href: "/blog" },
  { label: "Outils & productivité", href: "/blog/pourquoi-excel-ralentit-les-pme" },
  { label: "BTP & chantier", href: "/blog/comment-digitaliser-entreprise-btp" },
  { label: "Budget & investissement", href: "/blog/combien-coute-application-metier" },
  { label: "Stratégie & choix", href: "/blog/erp-ou-logiciel-sur-mesure" }
];
const LOCATION_LINKS = locations.map((l) => ({
  label: `Développeur à ${l.city}`,
  href: `/developpeur-applications-metier-${l.slug}`
}));
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "font-inter text-xs font-medium text-white/40 uppercase tracking-widest mb-4", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2.5", children: links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      Link,
      {
        to: link.href,
        className: "font-inter text-sm text-white/60 hover:text-white transition-colors duration-200",
        children: link.label
      }
    ) }, link.href)) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-primary", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-6 py-14 md:py-20", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.15 },
        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-10",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 lg:col-span-1", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/",
                className: "font-archivo font-bold text-xl tracking-display text-white hover:text-white/80 transition-colors duration-200 block mb-3",
                children: BRAND
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-white/50 leading-relaxed text-pretty max-w-[30ch]", children: content.footer.tagline }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/#contact",
                className: "inline-flex mt-5 bg-secondary text-white font-inter font-medium text-xs px-4 py-2 rounded-xl hover:bg-secondary/90 transition-colors duration-200",
                children: "Discuter d'un projet →"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(FooterCol, { title: "Services", links: SERVICE_LINKS }),
          /* @__PURE__ */ jsx(FooterCol, { title: "Blog", links: BLOG_LINKS }),
          /* @__PURE__ */ jsx(FooterCol, { title: "Par ville", links: LOCATION_LINKS })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-white/30", children: content.footer.legal }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/applications-metier",
          className: "font-inter text-xs text-white/30 hover:text-white/60 transition-colors duration-200",
          children: "Toutes les expertises"
        }
      )
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
const F = "Inter, system-ui, sans-serif";
function nodeIcon(type, cx, cy) {
  const s = 34;
  const h = s / 2;
  const pos = { x: cx - h, y: cy - h, width: s, height: s, viewBox: "0 0 24 24" };
  if (type === "whatsapp") return /* @__PURE__ */ jsx("svg", { ...pos, children: /* @__PURE__ */ jsx("path", { fill: `#${siWhatsapp.hex}`, d: siWhatsapp.path }) });
  if (type === "outlook") return /* @__PURE__ */ jsxs("svg", { ...pos, children: [
    /* @__PURE__ */ jsx("rect", { width: "24", height: "24", rx: "4", fill: "#0078D4" }),
    /* @__PURE__ */ jsx("rect", { x: "9", y: "2", width: "10", height: "20", rx: "1", fill: "white", opacity: "0.15" }),
    /* @__PURE__ */ jsx("text", { x: "5", y: "18", fontSize: "13", fontWeight: "900", fill: "white", fontFamily: F, children: "O" })
  ] });
  if (type === "calendar") return /* @__PURE__ */ jsx("svg", { ...pos, children: /* @__PURE__ */ jsx("path", { fill: `#${siGooglecalendar.hex}`, d: siGooglecalendar.path }) });
  if (type === "excel") return /* @__PURE__ */ jsxs("svg", { ...pos, children: [
    /* @__PURE__ */ jsx("rect", { width: "24", height: "24", rx: "4", fill: "#217346" }),
    /* @__PURE__ */ jsx("path", { d: "M10 2h8a1 1 0 011 1v4H9V3a1 1 0 011-1z", fill: "white", opacity: "0.18" }),
    /* @__PURE__ */ jsx("rect", { x: "9", y: "6", width: "10", height: "16", rx: "1", fill: "white", opacity: "0.12" }),
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "9", x2: "10", y2: "17", stroke: "white", strokeWidth: "3.4", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("line", { x1: "10", y1: "9", x2: "4", y2: "17", stroke: "white", strokeWidth: "3.4", strokeLinecap: "round" })
  ] });
  if (type === "word") return /* @__PURE__ */ jsxs("svg", { ...pos, children: [
    /* @__PURE__ */ jsx("rect", { width: "24", height: "24", rx: "4", fill: "#2B579A" }),
    /* @__PURE__ */ jsx("rect", { x: "9", y: "2", width: "10", height: "20", rx: "1", fill: "white", opacity: "0.15" }),
    /* @__PURE__ */ jsx("text", { x: "6", y: "18", fontSize: "14", fontWeight: "900", fill: "white", fontFamily: F, children: "W" })
  ] });
  if (type === "pdf") return /* @__PURE__ */ jsxs("svg", { ...pos, children: [
    /* @__PURE__ */ jsx("rect", { width: "24", height: "24", rx: "4", fill: "#E8192C" }),
    /* @__PURE__ */ jsx("path", { d: "M6 2h8l4 4v16H6z", fill: "white", opacity: "0.15" }),
    /* @__PURE__ */ jsx("path", { d: "M14 2v4h4", fill: "none", stroke: "white", strokeWidth: "1", opacity: "0.3" }),
    /* @__PURE__ */ jsx("text", { x: "12", y: "16.5", fontSize: "8.5", fontWeight: "800", fill: "white", textAnchor: "middle", fontFamily: F, letterSpacing: "-0.2", children: "PDF" })
  ] });
  return null;
}
function Hero() {
  const { hero } = content;
  useEffect(() => {
    const els = document.querySelectorAll(
      ".hero-eyebrow, .hero-title .hero-line, .hero-lede, .hero-cta-block, .node-item, .node-hub"
    );
    const onEnd = (e) => {
      e.currentTarget.style.willChange = "auto";
    };
    els.forEach((el) => el.addEventListener("animationend", onEnd, { once: true }));
    return () => els.forEach((el) => el.removeEventListener("animationend", onEnd));
  }, []);
  const C = { x: 200, y: 172 };
  const NODES = [
    { cx: 58, cy: 72, icon: "excel", label: "Excel", lx: 30, ly: 74, anchor: "end", nd: "0.4s" },
    { cx: 58, cy: 172, icon: "outlook", label: "Outlook", lx: 30, ly: 174, anchor: "end", nd: "0.6s" },
    { cx: 58, cy: 272, icon: "whatsapp", label: "WhatsApp", lx: 30, ly: 274, anchor: "end", nd: "0.8s" },
    { cx: 342, cy: 72, icon: "calendar", label: "G. Calendar", lx: 370, ly: 74, anchor: "start", nd: "0.5s" },
    { cx: 342, cy: 172, icon: "pdf", label: "PDF", lx: 370, ly: 174, anchor: "start", nd: "0.7s" },
    { cx: 342, cy: 272, icon: "word", label: "Word", lx: 370, ly: 274, anchor: "start", nd: "0.9s" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "min-h-screen bg-primary flex items-center pt-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 py-20 w-full grid md:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "hero-eyebrow label text-white/50 mb-7", children: hero.eyebrow }),
      /* @__PURE__ */ jsx(
        "h1",
        {
          className: "hero-title font-archivo font-extrabold leading-[1.02] tracking-[-0.035em] text-white text-balance",
          style: { fontSize: "clamp(2.6rem, 5.6vw, 4.5rem)" },
          children: hero.titleLines.map((line, i) => /* @__PURE__ */ jsx("span", { className: `hero-line${i === hero.titleLines.length - 1 ? " text-secondary" : ""}`, children: line }, i))
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "hero-lede font-inter leading-[1.7] text-white/60 mt-7 max-w-[30rem] text-pretty", style: { fontSize: "1.075rem" }, children: hero.lede }),
      /* @__PURE__ */ jsxs("div", { className: "hero-cta-block flex flex-wrap gap-3 mt-9", children: [
        /* @__PURE__ */ jsx(motion.a, { href: "#contact", whileTap: { scale: 0.97 }, className: "font-inter font-medium text-sm px-6 py-3 rounded-2xl bg-secondary text-white hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200", children: hero.cta1 }),
        /* @__PURE__ */ jsx(motion.a, { href: "#realisations", whileTap: { scale: 0.97 }, className: "font-inter font-medium text-sm px-6 py-3 rounded-2xl border border-white/25 text-white hover:bg-white/10 transition-all duration-200", children: hero.cta2 })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block", style: { aspectRatio: "1 / .86", width: "100%" }, children: /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: "0 0 400 344",
        role: "img",
        "aria-labelledby": "hero-vt hero-vd",
        style: { width: "100%", height: "100%", overflow: "visible" },
        children: [
          /* @__PURE__ */ jsx("title", { id: "hero-vt", children: "Vos outils remplacés par une seule application sur mesure" }),
          /* @__PURE__ */ jsx("desc", { id: "hero-vd", children: "Excel, Outlook, WhatsApp, Google Calendar, PDF et Word convergent vers une application centralisée." }),
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsx("clipPath", { id: "hubClip", children: /* @__PURE__ */ jsx("circle", { cx: C.x, cy: C.y, r: "43" }) }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "hubGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#1A7A5F" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#093B2C" })
            ] })
          ] }),
          NODES.map((n, i) => /* @__PURE__ */ jsx(
            "line",
            {
              x1: n.cx,
              y1: n.cy,
              x2: C.x,
              y2: C.y,
              stroke: "#0E5C4A",
              strokeWidth: "1.6",
              strokeLinecap: "round",
              strokeDasharray: "5 18",
              className: "node-flow",
              style: { "--nd": n.nd }
            },
            `f${i}`
          )),
          /* @__PURE__ */ jsx("circle", { cx: C.x, cy: C.y, r: "58", fill: "#0E5C4A", className: "node-hub-ring" }),
          NODES.map((n, i) => /* @__PURE__ */ jsxs("g", { className: "node-item", style: { "--nd": n.nd }, children: [
            /* @__PURE__ */ jsx("circle", { cx: n.cx, cy: n.cy, r: "25", fill: "white", stroke: "#E8E6E0", strokeWidth: "1" }),
            nodeIcon(n.icon, n.cx, n.cy),
            /* @__PURE__ */ jsx("text", { x: n.lx, y: n.ly, fontSize: "7", fill: "#DCDAD4", fontFamily: F, textAnchor: n.anchor, children: n.label })
          ] }, `n${i}`)),
          /* @__PURE__ */ jsxs("g", { className: "node-hub", children: [
            /* @__PURE__ */ jsx("circle", { cx: C.x, cy: C.y, r: "46", fill: "url(#hubGrad)" }),
            /* @__PURE__ */ jsxs("g", { clipPath: "url(#hubClip)", children: [
              /* @__PURE__ */ jsx(
                "rect",
                {
                  x: "172",
                  y: "138",
                  width: "56",
                  height: "66",
                  rx: "5",
                  fill: "white",
                  fillOpacity: "0.06",
                  stroke: "white",
                  strokeOpacity: "0.16",
                  strokeWidth: "0.7"
                }
              ),
              /* @__PURE__ */ jsx("rect", { x: "172", y: "138", width: "56", height: "11", rx: "5", fill: "white", fillOpacity: "0.14" }),
              /* @__PURE__ */ jsx("rect", { x: "172", y: "143", width: "56", height: "6", fill: "white", fillOpacity: "0.14" }),
              /* @__PURE__ */ jsx("circle", { cx: "178", cy: "144", r: "1.8", fill: "white", fillOpacity: "0.40" }),
              /* @__PURE__ */ jsx("circle", { cx: "183.5", cy: "144", r: "1.8", fill: "white", fillOpacity: "0.40" }),
              /* @__PURE__ */ jsx("circle", { cx: "189", cy: "144", r: "1.8", fill: "white", fillOpacity: "0.40" }),
              /* @__PURE__ */ jsx(
                "text",
                {
                  x: "207",
                  y: "146.5",
                  fontSize: "4",
                  fill: "white",
                  fillOpacity: "0.52",
                  fontFamily: F,
                  fontWeight: "600",
                  textAnchor: "middle",
                  letterSpacing: "0.3",
                  children: "Tableau de bord"
                }
              ),
              /* @__PURE__ */ jsx("line", { x1: "185", y1: "149", x2: "185", y2: "204", stroke: "white", strokeOpacity: "0.08", strokeWidth: "0.5" }),
              [153, 161, 169, 177, 185].map((y, i) => /* @__PURE__ */ jsx(
                "rect",
                {
                  x: "175",
                  y,
                  width: "7",
                  height: "5.5",
                  rx: "1.5",
                  fill: "white",
                  fillOpacity: i === 0 ? 0.55 : 0.15
                },
                i
              )),
              /* @__PURE__ */ jsx("rect", { x: "188", y: "152", width: "17", height: "12", rx: "2.5", fill: "white", fillOpacity: "0.10" }),
              /* @__PURE__ */ jsx(
                "text",
                {
                  x: "196.5",
                  y: "158.5",
                  fontSize: "6",
                  fontWeight: "700",
                  fill: "white",
                  fillOpacity: "0.90",
                  fontFamily: F,
                  textAnchor: "middle",
                  children: "84"
                }
              ),
              /* @__PURE__ */ jsx(
                "text",
                {
                  x: "196.5",
                  y: "162.5",
                  fontSize: "2.8",
                  fill: "white",
                  fillOpacity: "0.40",
                  fontFamily: F,
                  textAnchor: "middle",
                  children: "clients"
                }
              ),
              /* @__PURE__ */ jsx("rect", { x: "208", y: "152", width: "17", height: "12", rx: "2.5", fill: "white", fillOpacity: "0.10" }),
              /* @__PURE__ */ jsx(
                "text",
                {
                  x: "216.5",
                  y: "158.5",
                  fontSize: "6",
                  fontWeight: "700",
                  fill: "white",
                  fillOpacity: "0.90",
                  fontFamily: F,
                  textAnchor: "middle",
                  children: "98%"
                }
              ),
              /* @__PURE__ */ jsx(
                "text",
                {
                  x: "216.5",
                  y: "162.5",
                  fontSize: "2.8",
                  fill: "white",
                  fillOpacity: "0.40",
                  fontFamily: F,
                  textAnchor: "middle",
                  children: "livrés"
                }
              ),
              /* @__PURE__ */ jsx("line", { x1: "188", y1: "168", x2: "227", y2: "168", stroke: "white", strokeOpacity: "0.10", strokeWidth: "0.5" }),
              [
                { y: 172, bar: 20, val: "124" },
                { y: 180, bar: 15, val: "98" },
                { y: 188, bar: 9, val: "3" }
              ].map((row, i) => /* @__PURE__ */ jsxs("g", { children: [
                /* @__PURE__ */ jsx("circle", { cx: "191", cy: row.y, r: "1.8", fill: "white", fillOpacity: "0.22" }),
                /* @__PURE__ */ jsx(
                  "rect",
                  {
                    x: "195",
                    y: row.y - 1.8,
                    width: row.bar,
                    height: "3.5",
                    rx: "1",
                    fill: "white",
                    fillOpacity: "0.18"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "text",
                  {
                    x: "227",
                    y: row.y + 1.5,
                    fontSize: "3.8",
                    fill: "white",
                    fillOpacity: "0.65",
                    fontFamily: F,
                    textAnchor: "end",
                    children: row.val
                  }
                )
              ] }, i)),
              /* @__PURE__ */ jsx(
                "polyline",
                {
                  points: "188,201 193,198 199,199 205,195 211,193 217,191 223,188 228,186",
                  fill: "none",
                  stroke: "white",
                  strokeOpacity: "0.38",
                  strokeWidth: "1.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M188,201 193,198 199,199 205,195 211,193 217,191 223,188 228,186 L228,204 L188,204 Z",
                  fill: "white",
                  fillOpacity: "0.06"
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] }) });
}
const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
function BeforeAfter() {
  const { beforeAfter } = content;
  const beforeRef = useRef(null);
  const beforeInView = useInView(beforeRef, { once: true, margin: "-80px 0px" });
  const afterRef = useRef(null);
  const afterInView = useInView(afterRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-10 text-balance", children: beforeAfter.title }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1fr_1px_1fr] gap-0", children: [
      /* @__PURE__ */ jsxs("div", { ref: beforeRef, className: "bg-[#EAE8E3] rounded-2xl md:rounded-r-none md:rounded-l-2xl p-8 md:p-10", children: [
        /* @__PURE__ */ jsx("p", { className: "font-inter text-xs font-semibold tracking-widest uppercase text-[#6E7377] mb-6", children: "Avant" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: beforeAfter.before.map((item, i) => /* @__PURE__ */ jsxs(
          motion.li,
          {
            variants: ITEM_VARIANTS,
            initial: "hidden",
            animate: beforeInView ? "show" : "hidden",
            transition: { duration: 0.4, ease: "easeOut", delay: i * 0.06 },
            className: "flex items-start gap-3",
            children: [
              /* @__PURE__ */ jsx("span", { className: "mt-[5px] shrink-0 w-3 h-px bg-[#6E7377] inline-block" }),
              /* @__PURE__ */ jsx("span", { className: "font-inter text-sm text-[#6E7377] leading-relaxed", children: item })
            ]
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-px h-full bg-[#0E5C4A] opacity-30" }) }),
      /* @__PURE__ */ jsxs("div", { ref: afterRef, className: "bg-white border border-[#DCDAD4] rounded-2xl md:rounded-l-none md:rounded-r-2xl p-8 md:p-10 mt-3 md:mt-0", children: [
        /* @__PURE__ */ jsx("p", { className: "font-inter text-xs font-semibold tracking-widest uppercase text-[#0E5C4A] mb-6", children: "Après" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: beforeAfter.after.map((item, i) => /* @__PURE__ */ jsxs(
          motion.li,
          {
            variants: ITEM_VARIANTS,
            initial: "hidden",
            animate: afterInView ? "show" : "hidden",
            transition: { duration: 0.4, ease: "easeOut", delay: i * 0.06 },
            className: "flex items-start gap-3",
            children: [
              /* @__PURE__ */ jsx("span", { className: "mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#0E5C4A] inline-block" }),
              /* @__PURE__ */ jsx("span", { className: "font-inter text-sm text-primary leading-relaxed", children: item })
            ]
          },
          i
        )) })
      ] })
    ] })
  ] }) });
}
function SectionNumber({ index, label }) {
  const n = String(index).padStart(2, "0");
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-8", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("span", { className: "label text-muted", children: n }),
    /* @__PURE__ */ jsx("span", { className: "label text-border", children: "—" }),
    /* @__PURE__ */ jsx("span", { className: "label text-muted", children: label })
  ] });
}
function AnimatedTitle({ children, as = "h2", className = "", delay = 0 }) {
  const MotionTag = motion[as] || motion.h2;
  const words = typeof children === "string" ? children.split(" ") : null;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsx(
    MotionTag,
    {
      ref,
      variants: wordReveal(delay),
      initial: "hidden",
      animate: inView ? "show" : "hidden",
      className,
      children: words ? words.map((word, i) => /* @__PURE__ */ jsx(
        motion.span,
        {
          variants: wordItem,
          style: { display: "inline-block", marginRight: i < words.length - 1 ? "0.28em" : "" },
          children: word
        },
        i
      )) : children
    }
  );
}
function Problems() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: headRef,
        variants: textReveal(),
        initial: "hidden",
        animate: headInView ? "show" : "hidden",
        children: /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(SectionNumber, { index: 1, label: "Le problème" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      AnimatedTitle,
      {
        as: "h2",
        className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance mb-12",
        delay: 0.05,
        children: content.problems.title
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: gridRef,
        variants: stagger(),
        initial: "hidden",
        animate: gridInView ? "show" : "hidden",
        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
        children: content.problems.cards.map((card, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: cardItem,
            whileHover: hoverLift,
            className: "bg-white border border-border rounded-2xl p-6 shadow-card cursor-default",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-primary mb-2 text-balance", children: card.title }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-muted text-sm leading-relaxed text-pretty", children: card.body })
            ]
          },
          i
        ))
      }
    )
  ] }) });
}
function Solution() {
  const { steps } = content.solution;
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const stepsWrapRef = useRef(null);
  const stepsInView = useInView(stepsWrapRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: headRef,
        variants: textReveal(),
        initial: "hidden",
        animate: headInView ? "show" : "hidden",
        className: "max-w-2xl mb-16",
        children: [
          /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(SectionNumber, { index: 2, label: "L'approche" }) }),
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              variants: textLine,
              className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-4 text-balance",
              children: content.solution.title
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              variants: textLine,
              className: "font-inter text-muted leading-relaxed text-pretty max-w-[62ch]",
              children: content.solution.body
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { ref: stepsWrapRef, children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: stagger(0.1),
          initial: "hidden",
          animate: stepsInView ? "show" : "hidden",
          className: "hidden md:block relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-[11px] left-[9px] right-0 h-px bg-border" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 gap-4", children: steps.map((step, i) => /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "relative pt-8", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  variants: popIn,
                  className: "absolute top-[4px] left-[9px] w-[14px] h-[14px] rounded-full border-2 border-secondary bg-white"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "label text-secondary mb-2", children: step.number }),
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-base tracking-display text-primary mb-2 leading-snug text-balance", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty", children: step.body })
            ] }, i)) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: stagger(),
          initial: "hidden",
          animate: stepsInView ? "show" : "hidden",
          className: "md:hidden",
          children: steps.map((step, i) => /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "flex gap-5 mb-8 last:mb-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center shrink-0", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border-2 border-secondary flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "font-archivo font-bold text-secondary text-xs", children: step.number }) }),
              i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "w-px flex-1 bg-border mt-2 min-h-[2rem]" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-primary mb-1 text-balance", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty", children: step.body })
            ] })
          ] }, i))
        }
      )
    ] })
  ] }) });
}
function Comparison() {
  const { comparison } = content;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const hl = comparison.highlight;
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-2xl md:text-3xl tracking-display text-primary mb-8 text-balance", children: comparison.title }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref,
        variants: fadeUp,
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
    )
  ] }) });
}
function PlanCard({ plan }) {
  if (plan.featured) {
    return /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: cardItem,
        whileHover: { y: -5, transition: { duration: 0.2, ease: "easeOut" } },
        className: "bg-primary text-white rounded-2xl p-8 flex flex-col shadow-card-md",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
            plan.tag && /* @__PURE__ */ jsx("p", { className: "label text-secondary mb-3", children: plan.tag }),
            /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-2xl tracking-display text-white mb-4 text-balance", children: plan.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-sm leading-relaxed text-white/65 flex-1 text-pretty", children: plan.body }),
          /* @__PURE__ */ jsx(
            motion.a,
            {
              href: "#contact",
              whileTap: { scale: 0.97 },
              className: "mt-8 inline-block text-center bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
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
      variants: cardItem,
      whileHover: hoverLift,
      className: "bg-white border border-border rounded-2xl p-8 flex flex-col shadow-card",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
          plan.tag && /* @__PURE__ */ jsx("p", { className: "label text-muted mb-3", children: plan.tag }),
          /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-2xl tracking-display text-primary mb-4 text-balance", children: plan.name })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-inter text-sm leading-relaxed text-muted flex-1 text-pretty", children: plan.body }),
        /* @__PURE__ */ jsx(
          motion.a,
          {
            href: "#contact",
            whileTap: { scale: 0.97 },
            className: "mt-8 inline-block text-center border border-border text-primary font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:border-secondary hover:text-secondary transition-colors duration-200",
            children: plan.cta
          }
        )
      ]
    }
  );
}
function Pricing() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: headRef,
        variants: textReveal(),
        initial: "hidden",
        animate: headInView ? "show" : "hidden",
        children: /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(SectionNumber, { index: 3, label: "Les offres" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      AnimatedTitle,
      {
        as: "h2",
        className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance mb-12",
        delay: 0.05,
        children: content.pricing.title
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: gridRef,
        variants: stagger(0.05),
        initial: "hidden",
        animate: gridInView ? "show" : "hidden",
        className: "grid md:grid-cols-3 gap-6 items-start",
        children: content.pricing.plans.map((plan, i) => /* @__PURE__ */ jsx(PlanCard, { plan }, i))
      }
    )
  ] }) });
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
function Thumbnail({ item }) {
  return /* @__PURE__ */ jsx(motion.div, { variants: cardItem, whileHover: { y: -5, transition: { duration: 0.2, ease: "easeOut" } }, className: "h-full", children: /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/projets/${item.slug}`,
      className: "group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-md hover:border-secondary/30 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
      "aria-label": item.title,
      children: [
        /* @__PURE__ */ jsx("div", { className: "border-b border-border shrink-0", children: /* @__PURE__ */ jsx(ProjectSchema, { slug: item.slug }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-primary leading-snug text-balance mb-3 group-hover:text-secondary transition-colors duration-200", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed flex-1", children: item.result || item.delivered.slice(0, 100) + "…" }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-4", children: "Voir le projet →" })
        ] })
      ]
    }
  ) });
}
function Projects() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { id: "realisations", className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: headRef,
        variants: textReveal(),
        initial: "hidden",
        animate: headInView ? "show" : "hidden",
        children: /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(SectionNumber, { index: 4, label: "Les réalisations" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      AnimatedTitle,
      {
        as: "h2",
        className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance mb-12",
        delay: 0.05,
        children: content.projects.title
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: gridRef,
        variants: stagger(),
        initial: "hidden",
        animate: gridInView ? "show" : "hidden",
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch",
        children: content.projects.items.map((item) => /* @__PURE__ */ jsx(Thumbnail, { item }, item.id))
      }
    )
  ] }) });
}
function Sectors() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: headRef,
        variants: textReveal(),
        initial: "hidden",
        animate: headInView ? "show" : "hidden",
        className: "max-w-2xl mb-12",
        children: [
          /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(SectionNumber, { index: 5, label: "Les secteurs" }) }),
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              variants: textLine,
              className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-4 text-balance",
              children: content.sectors.title
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              variants: textLine,
              className: "font-inter text-muted leading-relaxed text-pretty max-w-[62ch]",
              children: content.sectors.subtitle
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: gridRef,
        variants: stagger(),
        initial: "hidden",
        animate: gridInView ? "show" : "hidden",
        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
        children: content.sectors.list.map((sector, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: cardItem,
            whileHover: hoverLift,
            className: "bg-white border border-border rounded-2xl p-6 shadow-card cursor-default",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-primary mb-2", children: sector.name }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-muted leading-relaxed text-pretty", children: sector.body })
            ]
          },
          i
        ))
      }
    )
  ] }) });
}
function Method() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: headRef,
        variants: textReveal(),
        initial: "hidden",
        animate: headInView ? "show" : "hidden",
        children: /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(SectionNumber, { index: 6, label: "La démarche" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      AnimatedTitle,
      {
        as: "h2",
        className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance mb-12",
        delay: 0.05,
        children: content.method.title
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: gridRef,
        variants: stagger(),
        initial: "hidden",
        animate: gridInView ? "show" : "hidden",
        className: "grid sm:grid-cols-2 gap-10 lg:gap-16",
        children: content.method.steps.map((step, i) => /* @__PURE__ */ jsxs(motion.div, { variants: cardItem, className: "flex gap-6", children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              variants: popIn,
              className: "font-archivo font-bold text-5xl text-secondary/25 leading-none shrink-0 select-none tabular",
              children: step.number
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "font-inter text-muted leading-relaxed text-pretty max-w-[42ch]", children: step.body })
          ] })
        ] }, i))
      }
    )
  ] }) });
}
function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-14", children: /* @__PURE__ */ jsxs("div", { ref, className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0, y: -8 },
        animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        className: "label text-muted mb-5",
        children: content.technologies.title
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: stagger(0.02),
        initial: "hidden",
        animate: inView ? "show" : "hidden",
        className: "flex flex-wrap gap-2",
        children: content.technologies.items.map((item, i) => /* @__PURE__ */ jsx(
          motion.span,
          {
            variants: tagItem,
            whileHover: { scale: 1.06, color: "#2563EB", borderColor: "#2563EB", transition: { duration: 0.15 } },
            className: "font-inter text-sm text-muted border border-border rounded-2xl px-3 py-1.5 bg-white cursor-default",
            children: item
          },
          i
        ))
      }
    )
  ] }) });
}
const posts = [
  {
    slug: "pourquoi-excel-ralentit-les-pme",
    title: "Pourquoi Excel ralentit les PME (et ce que vous pouvez faire)",
    date: "2026-06-15",
    readTime: 6,
    category: "Outils & productivité",
    excerpt: "Excel est l'outil par défaut de millions de PME françaises. Et pourtant, il est souvent la principale source de perte de temps dans les équipes — pas parce qu'il est mauvais, mais parce qu'il est utilisé pour des tâches pour lesquelles il n'a pas été conçu.",
    content: [
      {
        type: "intro",
        text: "Excel est l'outil par défaut de millions de PME françaises. Flexible, accessible, connu de tous. Et pourtant, dans beaucoup d'entreprises, il est devenu la principale source de perte de temps. Pas parce qu'Excel est mauvais — c'est un outil remarquable pour ce qu'il fait. Mais parce qu'il est utilisé pour des choses pour lesquelles il n'a pas été conçu."
      },
      {
        type: "h2",
        title: "Le problème des fichiers qui ne sont jamais vraiment partagés",
        text: `Quand plusieurs personnes travaillent sur le même fichier, la question se pose rapidement : qui a la "bonne" version ? La V4_FINALE.xlsx ? La V4_FINALE_OK_2.xlsx envoyée hier soir ? Les modifications d'une personne n'arrivent pas chez les autres en temps réel. Des heures de travail peuvent se chevaucher, voire s'annuler. La simple question "tu as la dernière version ?" résume à elle seule un problème d'organisation que beaucoup de PME subissent chaque semaine.`
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
    excerpt: "C'est la question que tout dirigeant de PME se pose avant de se lancer. Voici ce qui détermine vraiment le prix d'une application métier sur mesure, les fourchettes réelles, et comment évaluer si l'investissement est rentable pour vous.",
    content: [
      {
        type: "intro",
        text: `"Combien ça coûte ?" C'est souvent la première question que les dirigeants de PME posent quand ils envisagent de développer une application sur mesure. Et c'est une question légitime — personne ne veut se retrouver avec une facture surprise au bout de six mois. Voici une réponse honnête sur ce qui détermine le prix, et comment évaluer si l'investissement est rentable pour votre situation.`
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
        text: "Sans détour : une application simple avec un ou deux workflows principaux et une dizaine d'écrans se développe entre 8 000 et 20 000 €. Une application métier complète — ERP léger, gestion de chantier, CRM avec quelques intégrations — entre 20 000 et 60 000 €. Une plateforme complexe avec architecture multi-tenant, nombreux connecteurs et module d'analyse avancé dépasse les 60 000 €. Ces fourchettes incluent la conception, le développement, les tests et la mise en production. Elles ne correspondent pas à un abonnement mensuel : c'est un investissement ponctuel dont vous êtes propriétaire."
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
    title: "ERP ou logiciel sur mesure : que choisir pour votre PME ?",
    date: "2026-07-08",
    readTime: 7,
    category: "Stratégie & choix",
    excerpt: "Odoo, SAP, Sage... le marché des ERP est immense. Alors pourquoi certaines PME font-elles le choix de développer leur propre logiciel plutôt que d'adopter une solution existante ? Ce n'est pas toujours la bonne décision. Voici comment la prendre avec discernement.",
    content: [
      {
        type: "intro",
        text: "Odoo, SAP Business One, Sage 100, Cegid... le marché des ERP est immense et bien établi. Alors pourquoi certaines PME font-elles le choix de développer leur propre logiciel de gestion plutôt que d'adopter une solution existante ? Ce n'est pas toujours la bonne décision. Et ce guide n'a pas pour vocation de vous convaincre du sur mesure — mais de vous aider à choisir ce qui est vraiment adapté à votre situation."
      },
      {
        type: "h2",
        title: "Ce que font bien les ERP du marché",
        text: "Les ERP standard couvrent des processus largement partagés par des milliers d'entreprises : comptabilité générale, gestion des stocks, facturation, gestion des commandes. Ils bénéficient d'années de développement, de mises à jour régulières incluses dans l'abonnement, d'une documentation abondante et d'une communauté d'utilisateurs. Le déploiement sur les fonctionnalités standards est rapide. Pour une PME dont les processus ne sortent pas de l'ordinaire, ils peuvent être parfaitement adaptés."
      },
      {
        type: "h2",
        title: "Les limites des ERP standard pour certaines PME",
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
    excerpt: "Beaucoup de dirigeants de PME pensent que créer son propre logiciel, c'est réservé aux grandes entreprises. Voici 5 signaux concrets qui indiquent qu'un outil sur mesure serait rentable pour vous dès aujourd'hui.",
    content: [
      {
        type: "intro",
        text: "Créer son propre logiciel, beaucoup de dirigeants de PME pensent que c'est réservé aux grandes entreprises avec des budgets informatiques conséquents. Ce n'est pas le cas — et cette idée fait manquer à beaucoup d'entreprises un levier de productivité significatif. Voici 5 signaux concrets qui indiquent qu'un outil sur mesure serait rentable pour votre situation."
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
function formatDate$2(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function BlogPreview() {
  const latest = posts.slice(0, 3);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px 0px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px 0px" });
  return /* @__PURE__ */ jsx("section", { className: "bg-section py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-10 gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          ref: headRef,
          variants: textReveal(),
          initial: "hidden",
          animate: headInView ? "show" : "hidden",
          children: [
            /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-muted mb-2", children: "Blog" }),
            /* @__PURE__ */ jsx(motion.h2, { variants: textLine, className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance", children: "Ressources pour les PME" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 10 },
          animate: headInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 },
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
          children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/blog",
              className: "font-inter text-sm text-secondary hover:text-secondary/80 transition-colors duration-200",
              children: "Tous les articles →"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: gridRef,
        variants: stagger(),
        initial: "hidden",
        animate: gridInView ? "show" : "hidden",
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
        children: latest.map((post) => /* @__PURE__ */ jsx(motion.div, { variants: cardItem, whileHover: hoverLift, children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/blog/${post.slug}`,
            className: "flex flex-col h-full bg-white border border-border rounded-2xl p-6 shadow-card hover:border-secondary/40 transition-colors duration-200 group",
            children: [
              /* @__PURE__ */ jsx("p", { className: "label text-secondary mb-3", children: post.category }),
              /* @__PURE__ */ jsx("h3", { className: "font-archivo font-bold text-lg tracking-display text-primary mb-3 leading-snug text-balance flex-1 group-hover:text-secondary transition-colors duration-200", children: post.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-2 pt-4 border-t border-border", children: [
                /* @__PURE__ */ jsx("time", { className: "font-inter text-xs text-muted/60", children: formatDate$2(post.date) }),
                /* @__PURE__ */ jsxs("span", { className: "font-inter text-xs text-muted", children: [
                  post.readTime,
                  " min"
                ] })
              ] })
            ]
          }
        ) }, post.slug))
      }
    )
  ] }) });
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
  const base = "w-full bg-white/5 border border-white/15 text-white placeholder-white/30 rounded-2xl px-4 py-3 font-inter text-sm focus:outline-none focus:border-secondary transition-colors";
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "block label text-white/60 mb-1.5", children: [
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
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px 0px" });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-80px 0px" });
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
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "bg-primary py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: leftRef,
        variants: textReveal(),
        initial: "hidden",
        animate: leftInView ? "show" : "hidden",
        children: [
          /* @__PURE__ */ jsx(motion.h2, { variants: textLine, className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-white mb-4 text-balance", children: content.contact.title }),
          /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "font-inter text-white/60 leading-relaxed text-pretty max-w-[52ch]", children: content.contact.body })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        ref: rightRef,
        variants: fadeUp,
        initial: "hidden",
        animate: rightInView ? "show" : "hidden",
        children: status === "success" ? /* @__PURE__ */ jsx("div", { className: "bg-secondary/10 border border-secondary/30 rounded-2xl p-6", children: /* @__PURE__ */ jsx("p", { className: "font-inter text-white leading-relaxed", children: content.contact.success }) }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "flex flex-col gap-4", children: [
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
          status === "error" && /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-red-400", children: errorMessage }),
          /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
            motion.button,
            {
              type: "submit",
              disabled: status === "loading",
              whileTap: status !== "loading" ? { scale: 0.97 } : {},
              className: "w-full sm:w-auto bg-secondary text-white font-inter font-medium text-sm px-8 py-3 rounded-2xl hover:bg-secondary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01]",
              children: status === "loading" ? "Envoi…" : content.contact.cta
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "font-inter text-xs text-white/40 leading-relaxed mt-1", children: content.contact.rgpd })
        ] })
      }
    )
  ] }) }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(BeforeAfter, {}),
    /* @__PURE__ */ jsx(Problems, {}),
    /* @__PURE__ */ jsx(Solution, {}),
    /* @__PURE__ */ jsx(Comparison, {}),
    /* @__PURE__ */ jsx(Pricing, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Sectors, {}),
    /* @__PURE__ */ jsx(Method, {}),
    /* @__PURE__ */ jsx(Technologies, {}),
    /* @__PURE__ */ jsx(BlogPreview, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
const TOTAL = content.projects.items.length;
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
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4, ease: "easeOut" },
          className: "flex items-center gap-2.5 mb-10",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsxs("span", { className: "label text-muted/60", children: [
            "Réalisation ",
            position,
            " / ",
            total
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: textReveal(),
          initial: "hidden",
          animate: "show",
          className: "mb-10",
          children: [
            /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-muted mb-2", children: item.sector }),
            /* @__PURE__ */ jsx(
              motion.h1,
              {
                variants: textLine,
                className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary mb-3 leading-snug text-balance",
                children: item.title
              }
            ),
            /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-muted/50", children: item.period })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "my-10 border border-border rounded-2xl overflow-hidden",
          initial: { opacity: 0, scale: 0.98 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
          children: /* @__PURE__ */ jsx(ProjectSchema, { slug: item.slug })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: stagger(0.1),
          initial: "hidden",
          animate: "show",
          className: "flex flex-col gap-12",
          children: [
            /* @__PURE__ */ jsxs(motion.section, { variants: fadeUp, "aria-labelledby": "section-problem", children: [
              /* @__PURE__ */ jsx("p", { id: "section-problem", className: "label text-muted/60 mb-3", children: "Le problème" }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-text leading-relaxed text-pretty text-lg", children: item.problem })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "h-px bg-rule" }),
            /* @__PURE__ */ jsxs(motion.section, { variants: fadeUp, "aria-labelledby": "section-delivered", children: [
              /* @__PURE__ */ jsx("p", { id: "section-delivered", className: "label text-muted/60 mb-3", children: "Ce qui a été mis en place" }),
              /* @__PURE__ */ jsx("p", { className: "font-inter text-text/80 leading-relaxed text-pretty text-lg", children: item.delivered })
            ] }),
            item.result && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "h-px bg-rule" }),
              /* @__PURE__ */ jsxs(motion.section, { variants: fadeUp, "aria-labelledby": "section-result", children: [
                /* @__PURE__ */ jsx("p", { id: "section-result", className: "label text-muted/60 mb-3", children: "Le résultat" }),
                /* @__PURE__ */ jsx("p", { className: "font-inter font-medium text-secondary leading-relaxed text-lg", children: item.result })
              ] })
            ] }),
            item.note && /* @__PURE__ */ jsx(
              motion.div,
              {
                variants: fadeUp,
                className: "bg-secondary/8 border-l-2 border-secondary pl-4 py-3 rounded-r-lg",
                children: /* @__PURE__ */ jsx("p", { className: "font-inter text-sm text-text leading-relaxed text-pretty", children: item.note })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: fadeUp,
                className: "pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6",
                children: [
                  /* @__PURE__ */ jsx(
                    motion.a,
                    {
                      href: "/#contact",
                      whileTap: { scale: 0.97 },
                      className: "bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200",
                      children: "Un projet similaire ? En discuter"
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
        variants: fadeUp,
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
      /* @__PURE__ */ jsx(motion.h1, { variants: textLine, className: "font-archivo font-bold text-4xl md:text-5xl tracking-display text-white mb-5 leading-tight text-balance max-w-2xl", children: "Ressources pour les PME qui veulent mieux travailler" }),
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
    /* @__PURE__ */ jsx("section", { className: "bg-section py-16", children: /* @__PURE__ */ jsx("div", { ref: ctaRef, className: "mx-auto max-w-4xl px-6 text-center", children: /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, initial: "hidden", animate: ctaInView ? "show" : "hidden", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-2xl tracking-display text-primary mb-3 text-balance", children: "Vous avez un projet dans votre PME ?" }),
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
          children: post.content.map((section, i) => /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, children: renderSection(section, i) }, i))
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
            /* @__PURE__ */ jsx("h2", { className: "font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance", children: "Un projet dans votre PME ?" }),
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
              "Nous créons des logiciels sur mesure pour les PME de ",
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
        variants: fadeUp,
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
            "Ce que nous développons pour les PME de ",
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
        variants: fadeUp,
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-craie flex flex-col", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b border-rule", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-6 h-16 flex items-center", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "font-archivo font-bold text-xl tracking-display text-encre hover:text-pin transition-colors",
        children: BRAND
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
          /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "label text-graphite/50 mb-6", children: "404" }),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              variants: textLine,
              className: "font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-4 text-balance",
              children: "Page introuvable"
            }
          ),
          /* @__PURE__ */ jsx(motion.p, { variants: textLine, className: "font-inter text-graphite mb-10 text-pretty", children: "La page que vous cherchez n'existe pas ou a été déplacée." }),
          /* @__PURE__ */ jsx(motion.div, { variants: textLine, children: /* @__PURE__ */ jsx(motion.div, { whileTap: { scale: 0.97 }, style: { display: "inline-block" }, children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: "bg-pin text-craie font-inter font-medium text-sm px-6 py-3 rounded hover:bg-encre transition-colors",
              children: "Retour à l'accueil"
            }
          ) }) })
        ]
      }
    ) })
  ] });
}
function AppRoutes() {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/projets/:slug", element: /* @__PURE__ */ jsx(ProjectDetail, {}) }),
      services.map((s) => /* @__PURE__ */ jsx(Route, { path: `/${s.slug}`, element: /* @__PURE__ */ jsx(ServicePage, {}) }, s.slug)),
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
