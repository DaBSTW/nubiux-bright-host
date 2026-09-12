import type { Lang } from "@/lib/i18n";

export type WordPressContent = {
  back: string;
  badge: string;
  title: string;
  intro: string;
  ctaPlans: string;
  ctaSupport: string;
  whatTitle: string;
  what: string[];
  whyTitle: string;
  whySubtitle: string;
  why: { t: string; d: string }[];
  systemsTitle: string;
  systemsSubtitle: string;
  systems: { t: string; d: string }[];
  stackTitle: string;
  stackSubtitle: string;
  stack: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
};

const content: Record<Lang, WordPressContent> = {
  en: {
    back: "Back to home",
    badge: "Optimized WordPress hosting",
    title: "WordPress hosting that is fast, secure and ready in minutes",
    intro:
      "Install WordPress with one click on NVMe servers with LiteSpeed cache, free SSL, daily backups and Imunify360 protection. Same plans, same honest pricing — tuned for WordPress.",
    ctaPlans: "See plans",
    ctaSupport: "Talk to support",
    whatTitle: "What is WordPress?",
    what: [
      "WordPress is the world's most popular content management system (CMS): free, open-source software that lets you build and edit a website without writing code.",
      "It powers more than 40% of all websites — from personal blogs and business sites to online stores, magazines, academies and membership portals.",
      "You manage everything from a visual dashboard: pages, posts, images, menus, forms and users. Thousands of themes control how your site looks, and plugins add features such as SEO, ecommerce, bookings or multilingual content.",
    ],
    whyTitle: "Why choose WordPress?",
    whySubtitle: "Flexible enough for any project, simple enough to run it yourself.",
    why: [
      {
        t: "No code required",
        d: "Write pages and posts in a visual editor. Change your design without touching a single line of code.",
      },
      {
        t: "Grows with you",
        d: "Start with a simple site and add a store, a blog, a booking system or a members area whenever you need it.",
      },
      {
        t: "Built for SEO",
        d: "Clean URLs, fast templates and plugins like Yoast or Rank Math help you rank on Google from day one.",
      },
      {
        t: "Huge ecosystem",
        d: "Over 60,000 plugins and thousands of themes, plus tutorials and professionals available everywhere.",
      },
      {
        t: "You own your site",
        d: "Open-source software on your own hosting: no monthly platform lock-in, and you can move it whenever you want.",
      },
      {
        t: "Ready for ecommerce",
        d: "Add WooCommerce and sell physical or digital products with your own payment methods and no per-sale fees.",
      },
    ],
    systemsTitle: "What we provide for your WordPress",
    systemsSubtitle: "Every plan includes the stack and tooling WordPress needs to stay fast and safe.",
    systems: [
      {
        t: "One-click installer",
        d: "Install WordPress from cPanel with Softaculous in under a minute, with automatic updates and staging copies.",
      },
      {
        t: "LiteSpeed + caching",
        d: "LiteSpeed web server with the LSCache plugin for WordPress: page caching, image optimization and Core Web Vitals gains.",
      },
      {
        t: "NVMe storage",
        d: "Pure NVMe SSD disks so database queries and the admin dashboard respond instantly.",
      },
      {
        t: "Free SSL, auto-renewed",
        d: "HTTPS on every domain and subdomain, issued and renewed automatically — no configuration needed.",
      },
      {
        t: "Daily backups",
        d: "Automatic daily copies of files and databases with self-service restore from cPanel.",
      },
      {
        t: "Imunify360 security",
        d: "Malware scanning, WAF rules, brute-force protection on wp-login and automatic cleanup of infected files.",
      },
      {
        t: "PHP versions & limits",
        d: "Choose your PHP version and adjust memory, upload size and execution time for demanding plugins.",
      },
      {
        t: "Free migration",
        d: "Already have a WordPress site? We move it for you, keep your emails and databases, with no downtime.",
      },
    ],
    stackTitle: "Compatible with your favourite plugins",
    stackSubtitle: "Tested with the tools most WordPress projects rely on.",
    stack: [
      "WooCommerce",
      "Elementor",
      "Yoast SEO",
      "Rank Math",
      "LiteSpeed Cache",
      "WPForms",
      "WPML",
      "Wordfence",
    ],
    faqTitle: "WordPress questions",
    faq: [
      {
        q: "Do I need to install WordPress myself?",
        a: "No. From cPanel you install it with one click, and we can do it for you at no cost when you open your account.",
      },
      {
        q: "Can you move my current WordPress site?",
        a: "Yes, migration is free. Send us your current hosting access and we handle files, database, emails and SSL.",
      },
      {
        q: "Which plan should I pick for WordPress?",
        a: "A single WordPress site with a blog runs comfortably on the entry plan. For a WooCommerce store or several sites, we recommend Pro or Business.",
      },
      {
        q: "Do you update WordPress and plugins?",
        a: "The installer can apply automatic updates for WordPress, themes and plugins, and daily backups let you roll back if an update breaks something.",
      },
    ],
    ctaTitle: "Launch your WordPress site today",
    ctaText: "Instant activation, free SSL, free migration and a 30-day money-back guarantee.",
  },
  es: {
    back: "Volver al inicio",
    badge: "Hosting optimizado para WordPress",
    title: "Hosting WordPress rápido, seguro y listo en minutos",
    intro:
      "Instala WordPress con un clic en servidores NVMe con caché LiteSpeed, SSL gratis, copias de seguridad diarias y protección Imunify360. Los mismos planes y los mismos precios claros, ajustados para WordPress.",
    ctaPlans: "Ver planes",
    ctaSupport: "Hablar con soporte",
    whatTitle: "¿Qué es WordPress?",
    what: [
      "WordPress es el gestor de contenidos (CMS) más popular del mundo: un software libre y gratuito que te permite crear y editar tu web sin programar.",
      "Está detrás de más del 40% de todos los sitios web: desde blogs personales y webs de empresa hasta tiendas online, revistas, academias y portales de miembros.",
      "Todo se gestiona desde un panel visual: páginas, entradas, imágenes, menús, formularios y usuarios. Miles de plantillas definen el diseño y los plugins añaden funciones como SEO, tienda, reservas o contenido multilingüe.",
    ],
    whyTitle: "¿Por qué elegir WordPress?",
    whySubtitle: "Flexible para cualquier proyecto y sencillo para gestionarlo tú mismo.",
    why: [
      {
        t: "Sin programar",
        d: "Crea páginas y entradas en un editor visual. Cambia el diseño sin tocar una línea de código.",
      },
      {
        t: "Crece contigo",
        d: "Empieza con una web sencilla y añade tienda, blog, reservas o zona de socios cuando lo necesites.",
      },
      {
        t: "Pensado para SEO",
        d: "URLs limpias, plantillas rápidas y plugins como Yoast o Rank Math para posicionar en Google desde el primer día.",
      },
      {
        t: "Ecosistema enorme",
        d: "Más de 60.000 plugins y miles de plantillas, además de tutoriales y profesionales en todas partes.",
      },
      {
        t: "Tu web es tuya",
        d: "Software libre en tu propio hosting: sin depender de una plataforma cerrada y con libertad para mudarte cuando quieras.",
      },
      {
        t: "Listo para vender",
        d: "Añade WooCommerce y vende productos físicos o digitales con tus propios métodos de pago y sin comisiones por venta.",
      },
    ],
    systemsTitle: "Los sistemas que te damos para WordPress",
    systemsSubtitle: "Todos los planes incluyen la tecnología que WordPress necesita para ir rápido y seguro.",
    systems: [
      {
        t: "Instalador en un clic",
        d: "Instala WordPress desde cPanel con Softaculous en menos de un minuto, con actualizaciones automáticas y copias de prueba.",
      },
      {
        t: "LiteSpeed + caché",
        d: "Servidor LiteSpeed con el plugin LSCache para WordPress: caché de páginas, optimización de imágenes y mejores Core Web Vitals.",
      },
      {
        t: "Almacenamiento NVMe",
        d: "Discos NVMe puros para que las consultas a la base de datos y el escritorio respondan al instante.",
      },
      {
        t: "SSL gratis y automático",
        d: "HTTPS en todos tus dominios y subdominios, emitido y renovado solo, sin configurar nada.",
      },
      {
        t: "Copias diarias",
        d: "Backups automáticos de archivos y bases de datos con restauración desde cPanel cuando quieras.",
      },
      {
        t: "Seguridad Imunify360",
        d: "Escaneo de malware, reglas WAF, protección contra ataques de fuerza bruta en wp-login y limpieza automática de archivos infectados.",
      },
      {
        t: "Versiones y límites de PHP",
        d: "Elige tu versión de PHP y ajusta memoria, tamaño de subida y tiempo de ejecución para plugins exigentes.",
      },
      {
        t: "Migración gratuita",
        d: "¿Ya tienes WordPress? Lo trasladamos nosotros, con tus correos y bases de datos, sin caídas.",
      },
    ],
    stackTitle: "Compatible con tus plugins favoritos",
    stackSubtitle: "Probado con las herramientas que usan la mayoría de proyectos WordPress.",
    stack: [
      "WooCommerce",
      "Elementor",
      "Yoast SEO",
      "Rank Math",
      "LiteSpeed Cache",
      "WPForms",
      "WPML",
      "Wordfence",
    ],
    faqTitle: "Dudas sobre WordPress",
    faq: [
      {
        q: "¿Tengo que instalar WordPress yo mismo?",
        a: "No. Desde cPanel se instala con un clic y, si lo prefieres, lo hacemos nosotros sin coste al abrir tu cuenta.",
      },
      {
        q: "¿Pueden traer mi WordPress actual?",
        a: "Sí, la migración es gratuita. Envíanos los accesos de tu hosting actual y nos encargamos de archivos, base de datos, correos y SSL.",
      },
      {
        q: "¿Qué plan me conviene para WordPress?",
        a: "Una web WordPress con blog funciona de sobra en el plan inicial. Para una tienda WooCommerce o varios sitios recomendamos Pro o Business.",
      },
      {
        q: "¿Actualizan WordPress y los plugins?",
        a: "El instalador puede aplicar actualizaciones automáticas de WordPress, plantillas y plugins, y las copias diarias te permiten volver atrás si algo falla.",
      },
    ],
    ctaTitle: "Lanza tu web WordPress hoy",
    ctaText: "Activación instantánea, SSL gratis, migración gratuita y 30 días de garantía de devolución.",
  },
};

export function getWordPress(lang: Lang): WordPressContent {
  return content[lang];
}
