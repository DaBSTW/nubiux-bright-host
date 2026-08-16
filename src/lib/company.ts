import type { Lang } from "@/lib/i18n";

export const SALES_EMAIL = "sales@nubiux.com";

export type AboutContent = {
  back: string;
  title: string;
  intro: string;
  storyTitle: string;
  story: string[];
  statsTitle: string;
  stats: { v: string; l: string }[];
  valuesTitle: string;
  values: { t: string; d: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaPlans: string;
  ctaContact: string;
};

export type ContactContent = {
  back: string;
  title: string;
  intro: string;
  channelsTitle: string;
  channels: { t: string; d: string; email: string }[];
  hoursTitle: string;
  hours: string[];
  faqTitle: string;
  faqText: string;
  faqLink: string;
};

const about: Record<Lang, AboutContent> = {
  en: {
    back: "Back to home",
    title: "About Nubiux",
    intro:
      "We are a small, focused hosting team that believes fast, secure websites should not require a system administrator — or an enterprise budget.",
    storyTitle: "Our story",
    story: [
      'Nubiux started because we were tired of hosting that felt slow, opaque and impossible to get help with. Support tickets went unanswered, renewals doubled without warning and "unlimited" always came with fine print.',
      "So we built the hosting we wanted to buy: pure SSD servers, cPanel with one-click app installs, free SSL, daily backups and premium software licenses already included in the price you see.",
      "Today we host stores, academies, news portals and agency projects, and we still answer every message ourselves — no scripted replies, no outsourced first line.",
    ],
    statsTitle: "Nubiux in numbers",
    stats: [
      { v: "99.9%", l: "Uptime target" },
      { v: "24/7", l: "Support" },
      { v: "<15 min", l: "Average first reply" },
      { v: "100%", l: "SSD NVMe storage" },
    ],
    valuesTitle: "What we stand for",
    values: [
      {
        t: "Honest pricing",
        d: "The price on the plan is the price you pay. Licenses, SSL and backups are included, not upsells.",
      },
      {
        t: "Performance first",
        d: "Tuned stacks, NVMe storage and sensible server density so your pages stay fast under real traffic.",
      },
      {
        t: "Security by default",
        d: "Hardened servers, active malware scanning, free SSL and daily backups on every single plan.",
      },
      {
        t: "Real people",
        d: "You talk to the same team that runs the servers. No bots, no ticket ping-pong, no upsell scripts.",
      },
    ],
    ctaTitle: "Ready to move your site to Nubiux?",
    ctaText: "Pick a plan and we will migrate your existing website for free.",
    ctaPlans: "View plans",
    ctaContact: "Talk to us",
  },
  es: {
    back: "Volver al inicio",
    title: "Sobre Nubiux",
    intro:
      "Somos un equipo de hosting pequeño y enfocado que cree que tener un sitio rápido y seguro no debería exigir un administrador de sistemas — ni un presupuesto empresarial.",
    storyTitle: "Nuestra historia",
    story: [
      'Nubiux nació porque estábamos cansados del hosting lento, opaco e imposible de contactar. Los tickets quedaban sin respuesta, las renovaciones se duplicaban sin avisar y lo "ilimitado" siempre traía letra pequeña.',
      "Así que construimos el hosting que nosotros queríamos contratar: servidores 100% SSD, cPanel con instalación de apps en un clic, SSL gratis, copias de seguridad diarias y licencias premium ya incluidas en el precio que ves.",
      "Hoy alojamos tiendas, academias, portales de noticias y proyectos de agencias, y seguimos respondiendo cada mensaje nosotros mismos: sin respuestas automáticas ni soporte externalizado.",
    ],
    statsTitle: "Nubiux en números",
    stats: [
      { v: "99.9%", l: "Objetivo de disponibilidad" },
      { v: "24/7", l: "Soporte" },
      { v: "<15 min", l: "Primera respuesta media" },
      { v: "100%", l: "Almacenamiento SSD NVMe" },
    ],
    valuesTitle: "En qué creemos",
    values: [
      {
        t: "Precios honestos",
        d: "El precio del plan es el que pagas. Licencias, SSL y backups van incluidos, no son extras.",
      },
      {
        t: "Rendimiento primero",
        d: "Stacks optimizados, discos NVMe y densidad razonable por servidor para que tu web siga rápida con tráfico real.",
      },
      {
        t: "Seguridad por defecto",
        d: "Servidores endurecidos, escaneo de malware, SSL gratis y copias diarias en todos los planes.",
      },
      {
        t: "Personas reales",
        d: "Hablas con el mismo equipo que gestiona los servidores. Sin bots ni guiones de venta.",
      },
    ],
    ctaTitle: "¿Listo para mover tu web a Nubiux?",
    ctaText: "Elige un plan y migramos tu sitio actual gratis.",
    ctaPlans: "Ver planes",
    ctaContact: "Habla con nosotros",
  },
};

const contact: Record<Lang, ContactContent> = {
  en: {
    back: "Back to home",
    title: "Contact Nubiux",
    intro:
      "Questions before ordering, a migration to plan or something not working? Write to the right inbox and a real person answers — usually in under 15 minutes.",
    channelsTitle: "How to reach us",
    channels: [
      {
        t: "Sales & pre-purchase",
        d: "Plan comparisons, custom resources, free migrations and invoicing questions.",
        email: SALES_EMAIL,
      },
      {
        t: "Technical support",
        d: "Existing accounts: cPanel, email, SSL, backups, performance or downtime.",
        email: "support@nubiux.com",
      },
      {
        t: "Legal & privacy",
        d: "Terms, data protection requests, abuse reports and refund claims.",
        email: "legal@nubiux.com",
      },
    ],
    hoursTitle: "Response times",
    hours: [
      "Support monitoring: 24 hours a day, every day of the year.",
      "Average first reply: under 15 minutes; complex cases within a few hours.",
      "Sales enquiries: answered within one business day at the latest.",
    ],
    faqTitle: "Looking for a quick answer?",
    faqText:
      "Most questions about plans, migrations, SSL and billing are already answered in our FAQ.",
    faqLink: "Read the FAQ",
  },
  es: {
    back: "Volver al inicio",
    title: "Contactar con Nubiux",
    intro:
      "¿Dudas antes de contratar, una migración por planificar o algo que no funciona? Escribe al buzón correcto y te responde una persona real, normalmente en menos de 15 minutos.",
    channelsTitle: "Cómo contactarnos",
    channels: [
      {
        t: "Ventas y preventa",
        d: "Comparar planes, recursos personalizados, migraciones gratuitas y facturación.",
        email: SALES_EMAIL,
      },
      {
        t: "Soporte técnico",
        d: "Cuentas activas: cPanel, correo, SSL, copias de seguridad, rendimiento o caídas.",
        email: "support@nubiux.com",
      },
      {
        t: "Legal y privacidad",
        d: "Términos, protección de datos, denuncias de abuso y solicitudes de reembolso.",
        email: "legal@nubiux.com",
      },
    ],
    hoursTitle: "Tiempos de respuesta",
    hours: [
      "Monitorización de soporte: 24 horas al día, todos los días del año.",
      "Primera respuesta media: menos de 15 minutos; casos complejos en unas horas.",
      "Consultas comerciales: respondidas como máximo en un día laborable.",
    ],
    faqTitle: "¿Buscas una respuesta rápida?",
    faqText:
      "La mayoría de dudas sobre planes, migraciones, SSL y pagos ya están resueltas en nuestras preguntas frecuentes.",
    faqLink: "Ver preguntas frecuentes",
  },
};

export const getAbout = (lang: Lang) => about[lang];
export const getContact = (lang: Lang) => contact[lang];
