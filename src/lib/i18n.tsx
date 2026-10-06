import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

type Dict = Record<string, string | string[]>;

const en: Dict = {
  "nav.plans": "Plans",
  "nav.features": "Features",
  "nav.security": "Security",
  "nav.faq": "FAQ",
  "nav.cta": "Get Started",

  "hero.title.a": "Launch your website in minutes,",
  "hero.title.b": "not hours",
  "hero.subtitle":
    "Nubiux gives you blazing-fast NVMe hosting with free SSL, daily backups, cPanel and instant activation — plus real bilingual support in English and Spanish.",
  "hero.cta1": "See plans & pricing",
  "hero.cta2": "Ask us a question",
  "hero.badge1": "99.9% Uptime",
  "hero.badge2": "NVMe Storage",
  "hero.badge3": "Free SSL",
  "hero.badge4": "Instant Activation",
  "hero.badge5": "Support in EN & ES",
  "hero.guarantee": "14-day money-back guarantee",
  "hero.imageAlt": "Isometric illustration of Nubiux cloud hosting servers",

  "proof.rating": "Rated 4.8 / 5 on Trustpilot",
  "proof.count": "1,284 verified reviews",
  "proof.stat1.v": "99.9%",
  "proof.stat1.l": "Measured uptime",
  "proof.stat2.v": "< 3 min",
  "proof.stat2.l": "Average support reply",
  "proof.stat3.v": "400+",
  "proof.stat3.l": "One-click apps",
  "proof.stat4.v": "24/7",
  "proof.stat4.l": "Support in EN & ES",

  "plans.title": "Simple, transparent pricing",
  "plans.subtitle":
    "Every plan includes free SSL, daily backups, cPanel and bilingual support. No hidden fees.",
  "plans.year": "/ year",
  "plans.month": "/ mo",
  "plans.orAnnual": "or",
  "plans.save": "Save",
  "plans.promo": "First month for ${price} with code",
  "plans.popular": "Most Popular",
  "plans.order": "Order Now",
  "plans.billingMonthly": "Monthly",
  "plans.billingYearly": "Yearly",
  "plans.billingHint": "Save 17%",
  "plans.starter": "Starter",
  "plans.emprende": "Emprende",
  "plans.pro": "Pro",
  "plans.business": "Business",
  "plans.for.starter": "Perfect for a personal blog or your first landing page.",
  "plans.for.emprende": "Launch and grow several sites for your business with ease.",
  "plans.for.pro": "Built for freelancers and agencies managing multiple client sites.",
  "plans.for.business": "Scale with confidence: high traffic, large catalogs and full control.",
  "plans.f.web1": "1 Website",
  "plans.f.web3": "5 Websites",
  "plans.f.web5": "10 Websites",
  "plans.f.web10": "25 Websites",
  "plans.f.storage5": "15 GB NVMe Storage",
  "plans.f.storage10": "40 GB NVMe Storage",
  "plans.f.storage20": "80 GB NVMe Storage",
  "plans.f.storage35": "100 GB NVMe Storage",
  "plans.f.ssl": "Free SSL",
  "plans.f.bandwidth": "Unlimited Bandwidth",
  "plans.f.cpanel": "cPanel included",
  "plans.f.backups": "Daily Backups",
  "plans.f.email": "Professional Email Accounts",
  "plans.f.instant": "Instant Activation",
  "plans.f.migration": "Free Website Migration",
  "plans.f.support": "Bilingual Support (EN / ES)",
  "plans.f.priority": "Priority Bilingual Support",
  "plans.guarantee": "14-day money-back guarantee on every plan",
  "plans.help": "Not sure which plan fits you?",
  "plans.helpCta": "Ask us on Discord",

  "sticky.text": "Plans from $3 / mo",
  "sticky.cta": "See plans",

  "cookie.title": "We use cookies",
  "cookie.desc":
    "We use essential cookies to run the site, and optional ones to measure traffic and process payments.",
  "cookie.accept": "Accept all",
  "cookie.reject": "Essential only",
  "cookie.more": "Cookie Policy",


  "why.title": "Built for performance you can feel",
  "why.subtitle":
    "Infrastructure, security and support engineered so your website simply never lets you down.",
  "why.1.t": "High Performance SSD Servers",
  "why.1.d": "Pure NVMe SSD storage and tuned stacks for instant response times.",
  "why.2.t": "Enterprise Security",
  "why.2.d": "Hardened servers, active scanning and layered protection by default.",
  "why.3.t": "Global Connectivity",
  "why.3.d": "Premium network routes that keep your site fast anywhere.",
  "why.4.t": "Fast Website Loading",
  "why.4.d": "LiteSpeed caching delivers pages in milliseconds.",
  "why.5.t": "DDoS Protection",
  "why.5.d": "Continuous mitigation keeps attacks away from your visitors.",
  "why.6.t": "99.9% Uptime Guarantee",
  "why.6.d": "Redundant infrastructure monitored around the clock.",
  "why.7.t": "Daily Backups",
  "why.7.d": "Automatic snapshots you can restore in a single click.",
  "why.8.t": "Friendly Support",
  "why.8.d": "Real hosting specialists, 24/7, in English and Spanish.",

  "cpanel.title": "Manage everything from one clean panel",
  "cpanel.subtitle":
    "The industry standard control panel comes with every plan — no learning curve required.",
  "cpanel.1": "Manage your domains and subdomains",
  "cpanel.2": "Install WordPress with one click",
  "cpanel.3": "Create professional email accounts",
  "cpanel.4": "Administer MySQL databases",
  "cpanel.5": "Restore backups whenever you need",
  "cpanel.6": "Use the built-in file manager",
  "cpanel.imageAlt": "Nubiux hosting control panel dashboard",

  "soft.title": "One-click app installs",
  "soft.subtitle": "Deploy over 400 applications instantly — no manual configuration, no downtime.",

  "sec.title": "Protection on every layer",
  "sec.subtitle": "Your site is defended by the same tools used by enterprise hosting providers.",
  "sec.1.t": "Imunify360",
  "sec.1.d": "Proactive defense with real-time threat intelligence.",
  "sec.2.t": "KernelCare",
  "sec.2.d": "Live kernel patching with zero reboots.",
  "sec.3.t": "FleetSSL",
  "sec.3.d": "Certificates issued and renewed automatically.",
  "sec.4.t": "Automatic SSL",
  "sec.4.d": "HTTPS active from the very first minute.",
  "sec.5.t": "Firewall",
  "sec.5.d": "Smart rules that block malicious traffic.",
  "sec.6.t": "Malware Protection",
  "sec.6.d": "Continuous scanning and automatic cleanup.",
  "sec.7.t": "Automatic Updates",
  "sec.7.d": "Server software patched the day it ships.",

  "perf.title": "Engineered to load instantly",
  "perf.subtitle": "Every layer of the stack is tuned for speed and stability.",
  "perf.1.t": "LiteSpeed",
  "perf.1.d": "Up to 10x faster than standard web servers.",
  "perf.2.t": "CloudLinux",
  "perf.2.d": "Isolated accounts with guaranteed resources.",
  "perf.3.t": "SSD Storage",
  "perf.3.d": "Solid state drives for rapid data access.",
  "perf.4.t": "Optimized Servers",
  "perf.4.d": "Finely tuned PHP, MySQL and network settings.",
  "perf.5.t": "Caching",
  "perf.5.d": "Full-page and object caching enabled out of the box.",
  "perf.6.t": "Fast Loading",
  "perf.6.d": "Better Core Web Vitals and higher rankings.",
  "perf.7.t": "High Availability",
  "perf.7.d": "Redundancy that keeps you online.",

  "faq.title": "Frequently asked questions",
  "faq.subtitle": "Everything you need to know before ordering your hosting plan.",
  "faq.1.q": "How long does activation take?",
  "faq.1.a":
    "Activation is instant. As soon as your payment is confirmed you receive your cPanel credentials by email, usually in under a minute.",
  "faq.2.q": "Do you offer SSL?",
  "faq.2.a":
    "Yes. Every plan includes free SSL certificates that are installed and renewed automatically through FleetSSL.",
  "faq.3.q": "Can I upgrade later?",
  "faq.3.a":
    "Absolutely. You can move to a higher plan at any moment and we handle the change with no downtime or data loss.",
  "faq.4.q": "Do you accept PayPal?",
  "faq.4.a":
    "Yes, all payments are securely processed through PayPal, so your financial details are never shared with us.",
  "faq.5.q": "Can I migrate my website?",
  "faq.5.a":
    "Yes. Our team migrates your website, emails and databases from your previous provider free of charge.",
  "faq.6.q": "Is there daily backup?",
  "faq.6.a":
    "Every account is backed up daily with JetBackup and Backuply, and you can restore any snapshot yourself from cPanel.",

  "rev.title": "What our customers say",
  "rev.subtitle": "Real reviews from Nubiux customers published on Trustpilot.",
  "rev.score": "4.8 out of 5",
  "rev.count": "Based on 1,284 reviews",
  "rev.cta": "Read all reviews on Trustpilot",
  "rev.verified": "Verified review",
  "rev.1.n": "Laura Mendez",
  "rev.1.r": "Online store owner",
  "rev.1.h": "My store loads twice as fast",
  "rev.1.d":
    "I migrated my WooCommerce store and the difference was immediate. Checkout is smooth and I have not had a single outage.",
  "rev.2.n": "Daniel Rivas",
  "rev.2.r": "Freelance developer",
  "rev.2.h": "Support that actually knows hosting",
  "rev.2.d":
    "I wrote at 2 a.m. with a PHP issue and a real specialist fixed it in minutes. That alone is worth the price.",
  "rev.3.n": "Carolina Suarez",
  "rev.3.r": "Marketing agency",
  "rev.3.h": "Perfect for managing client sites",
  "rev.3.d":
    "cPanel plus one-click installs saves me hours every week. I host all of my clients on Nubiux now.",
  "rev.4.n": "Marcos Herrera",
  "rev.4.r": "Blogger",
  "rev.4.h": "Instant activation, no surprises",
  "rev.4.d":
    "I paid with PayPal and had my credentials in less than a minute. Transparent pricing with no hidden fees.",
  "rev.5.n": "Valeria Ortiz",
  "rev.5.r": "Small business",
  "rev.5.h": "Backups saved my website",
  "rev.5.d":
    "I broke my site with a bad plugin update and restored yesterday's backup in one click. Total peace of mind.",
  "rev.6.n": "Andres Puente",
  "rev.6.r": "SaaS founder",
  "rev.6.h": "Rock solid uptime",
  "rev.6.d":
    "Months in and monitoring still shows 100% availability. The security stack is far better than what I paid for before.",

  "pay.title": "Secure payments powered by PayPal",
  "pay.subtitle": "Pay with your PayPal balance, credit or debit card. Buyer protection included.",

  "trust.title": "Hosting you can rely on",
  "trust.subtitle": "Thousands of websites trust Nubiux for their day-to-day operations.",
  "trust.1": "99.9% Uptime Guarantee",
  "trust.2": "Professional Support",
  "trust.3": "Secure Infrastructure",
  "trust.4": "Premium Software Licenses",
  "trust.5": "Fast Activation",
  "trust.6": "Reliable Hosting",

  "cta.title": "Ready to launch with Nubiux?",
  "cta.subtitle": "Choose a plan, get activated in minutes and let us take care of the rest.",
  "cta.button": "Get Started",

  "footer.tagline":
    "Premium web hosting with enterprise software licenses, instant activation and support.",
  "footer.company": "Company",
  "footer.product": "Product",
  "footer.legal": "Legal",
  "footer.about": "About",
  "footer.hosting": "Hosting",
  "footer.pricing": "Pricing",
  "footer.faq": "FAQ",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
  "footer.cookies": "Cookie Policy",
  "footer.refunds": "Refund Policy",
  "footer.contact": "Contact",
  "footer.rights": "© Nubiux. All Rights Reserved.",
  "lang.label": "Language",

  "mascot.name": "Nubi",
  "mascot.hero": "Hi! I'm Nubi, your hosting buddy.",
  "mascot.alt.wave": "Nubi, the Nubiux capybara mascot, waving with a headset",
  "mascot.alt.shield": "Nubi, the Nubiux capybara mascot, holding a security shield",
  "mascot.alt.server": "Nubi, the Nubiux capybara mascot, hugging a server",
  "mascot.security": "I keep your site safe 24/7.",
  "mascot.footer": "See you in the cloud!",

  "discord.open": "Join our Discord",
  "discord.close": "Close",
  "discord.title": "Join the Nubiux Discord",
  "discord.desc":
    "Get accurate answers, real-time support and hosting news directly from our team and community.",
  "discord.b1": "Fast support from real humans",
  "discord.b2": "Status updates and maintenance notices",
  "discord.b3": "Tips, tutorials and exclusive offers",
  "discord.cta": "Join the server",
  "discord.members": "Open community · Free to join",
};

const es: Dict = {
  "nav.plans": "Planes",
  "nav.features": "Características",
  "nav.security": "Seguridad",
  "nav.faq": "Preguntas",
  "nav.cta": "Comenzar",

  "hero.title.a": "Lanza tu sitio web en minutos,",
  "hero.title.b": "no en horas",
  "hero.subtitle":
    "Nubiux te da hosting NVMe ultrarrápido con SSL gratis, copias de seguridad diarias, cPanel y activación instantánea — además de soporte real en español e inglés.",
  "hero.cta1": "Ver planes y precios",
  "hero.cta2": "Haznos una pregunta",
  "hero.badge1": "99.9% de Uptime",
  "hero.badge2": "Almacenamiento NVMe",
  "hero.badge3": "SSL Gratis",
  "hero.badge4": "Activación Instantánea",
  "hero.badge5": "Soporte en ES e EN",
  "hero.guarantee": "Garantía de devolución de 14 días",
  "hero.imageAlt": "Ilustración isométrica de los servidores cloud de Nubiux",

  "proof.rating": "4.8 / 5 en Trustpilot",
  "proof.count": "1.284 reseñas verificadas",
  "proof.stat1.v": "99.9%",
  "proof.stat1.l": "Uptime medido",
  "proof.stat2.v": "< 3 min",
  "proof.stat2.l": "Respuesta media de soporte",
  "proof.stat3.v": "400+",
  "proof.stat3.l": "Apps en un clic",
  "proof.stat4.v": "24/7",
  "proof.stat4.l": "Soporte en ES e EN",

  "plans.title": "Precios simples y transparentes",
  "plans.subtitle":
    "Todos los planes incluyen SSL gratis, copias diarias, cPanel y soporte bilingüe. Sin costes ocultos.",
  "plans.year": "/ año",
  "plans.month": "/ mes",
  "plans.orAnnual": "o",
  "plans.save": "Ahorra",
  "plans.promo": "Primer mes por ${price} con el código",
  "plans.popular": "Más Popular",
  "plans.order": "Contratar Ahora",
  "plans.billingMonthly": "Mensual",
  "plans.billingYearly": "Anual",
  "plans.billingHint": "Ahorra 17%",
  "plans.starter": "Starter",
  "plans.emprende": "Emprende",
  "plans.pro": "Pro",
  "plans.business": "Business",
  "plans.for.starter": "Perfecto para un blog personal o tu primera landing page.",
  "plans.for.emprende": "Lanza y haz crecer varios sitios de tu negocio con facilidad.",
  "plans.for.pro": "Pensado para freelancers y agencias que gestionan varios sitios de clientes.",
  "plans.for.business": "Escala con confianza: alto tráfico, catálogos grandes y control total.",
  "plans.f.web1": "1 Sitio Web",
  "plans.f.web3": "5 Sitios Web",
  "plans.f.web5": "10 Sitios Web",
  "plans.f.web10": "25 Sitios Web",
  "plans.f.storage5": "15 GB de Almacenamiento NVMe",
  "plans.f.storage10": "40 GB de Almacenamiento NVMe",
  "plans.f.storage20": "80 GB de Almacenamiento NVMe",
  "plans.f.storage35": "100 GB de Almacenamiento NVMe",
  "plans.f.ssl": "SSL Gratis",
  "plans.f.bandwidth": "Transferencia Ilimitada",
  "plans.f.cpanel": "cPanel incluido",
  "plans.f.backups": "Copias de Seguridad Diarias",
  "plans.f.email": "Cuentas de Correo Profesional",
  "plans.f.instant": "Activación Instantánea",
  "plans.f.migration": "Migración de Sitio Gratis",
  "plans.f.support": "Soporte Bilingüe (ES / EN)",
  "plans.f.priority": "Soporte Bilingüe Prioritario",
  "plans.guarantee": "Garantía de devolución de 14 días en todos los planes",
  "plans.help": "¿No sabes qué plan te conviene?",
  "plans.helpCta": "Pregúntanos en Discord",

  "sticky.text": "Planes desde $3 / mes",
  "sticky.cta": "Ver planes",

  "cookie.title": "Usamos cookies",
  "cookie.desc":
    "Usamos cookies esenciales para el funcionamiento del sitio y opcionales para medir el tráfico y procesar pagos.",
  "cookie.accept": "Aceptar todas",
  "cookie.reject": "Solo esenciales",
  "cookie.more": "Política de Cookies",


  "why.title": "Rendimiento que se nota",
  "why.subtitle": "Infraestructura, seguridad y soporte diseñados para que tu web nunca te falle.",
  "why.1.t": "Servidores SSD de Alto Rendimiento",
  "why.1.d": "Almacenamiento NVMe SSD y stacks optimizados para respuestas instantáneas.",
  "why.2.t": "Seguridad Empresarial",
  "why.2.d": "Servidores reforzados, análisis activo y protección por capas.",
  "why.3.t": "Conectividad Global",
  "why.3.d": "Rutas de red premium que mantienen tu sitio rápido en todo el mundo.",
  "why.4.t": "Carga Web Rápida",
  "why.4.d": "El caché de LiteSpeed entrega tus páginas en milisegundos.",
  "why.5.t": "Protección DDoS",
  "why.5.d": "Mitigación continua que mantiene los ataques lejos de tus visitantes.",
  "why.6.t": "Garantía de 99.9% de Uptime",
  "why.6.d": "Infraestructura redundante monitorizada 24 horas.",
  "why.7.t": "Copias de Seguridad Diarias",
  "why.7.d": "Snapshots automáticos que restauras con un solo clic.",
  "why.8.t": "Soporte Cercano",
  "why.8.d": "Especialistas reales en hosting, 24/7, en español e inglés.",

  "cpanel.title": "Administra todo desde un panel claro",
  "cpanel.subtitle":
    "El panel de control estándar de la industria viene con todos los planes, sin curva de aprendizaje.",
  "cpanel.1": "Administrar dominios y subdominios",
  "cpanel.2": "Instalar WordPress con un clic",
  "cpanel.3": "Crear cuentas de correo profesionales",
  "cpanel.4": "Administrar bases de datos MySQL",
  "cpanel.5": "Restaurar copias de seguridad cuando quieras",
  "cpanel.6": "Usar el administrador de archivos",
  "cpanel.imageAlt": "Panel de control de hosting de Nubiux",

  "soft.title": "Instalaciones con un solo clic",
  "soft.subtitle":
    "Despliega más de 400 aplicaciones al instante, sin configuraciones manuales ni interrupciones.",

  "sec.title": "Protección en todas las capas",
  "sec.subtitle":
    "Tu sitio está defendido con las mismas herramientas que usan los proveedores empresariales.",
  "sec.1.t": "Imunify360",
  "sec.1.d": "Defensa proactiva con inteligencia de amenazas en tiempo real.",
  "sec.2.t": "KernelCare",
  "sec.2.d": "Parcheo del kernel en vivo, sin reinicios.",
  "sec.3.t": "FleetSSL",
  "sec.3.d": "Certificados emitidos y renovados automáticamente.",
  "sec.4.t": "SSL Automático",
  "sec.4.d": "HTTPS activo desde el primer minuto.",
  "sec.5.t": "Firewall",
  "sec.5.d": "Reglas inteligentes que bloquean el tráfico malicioso.",
  "sec.6.t": "Protección contra Malware",
  "sec.6.d": "Análisis continuo y limpieza automática.",
  "sec.7.t": "Actualizaciones Automáticas",
  "sec.7.d": "Software del servidor actualizado el mismo día.",

  "perf.title": "Diseñado para cargar al instante",
  "perf.subtitle": "Cada capa del stack está optimizada para velocidad y estabilidad.",
  "perf.1.t": "LiteSpeed",
  "perf.1.d": "Hasta 10 veces más rápido que un servidor web estándar.",
  "perf.2.t": "CloudLinux",
  "perf.2.d": "Cuentas aisladas con recursos garantizados.",
  "perf.3.t": "Almacenamiento SSD",
  "perf.3.d": "Discos de estado sólido para un acceso ultrarrápido.",
  "perf.4.t": "Servidores Optimizados",
  "perf.4.d": "PHP, MySQL y red finamente ajustados.",
  "perf.5.t": "Caché",
  "perf.5.d": "Caché de página completa y de objetos activado de serie.",
  "perf.6.t": "Carga Rápida",
  "perf.6.d": "Mejores Core Web Vitals y mejor posicionamiento.",
  "perf.7.t": "Alta Disponibilidad",
  "perf.7.d": "Redundancia que te mantiene siempre online.",

  "faq.title": "Preguntas frecuentes",
  "faq.subtitle": "Todo lo que necesitas saber antes de contratar tu plan de hosting.",
  "faq.1.q": "¿Cuánto tarda la activación?",
  "faq.1.a":
    "La activación es instantánea. En cuanto se confirma tu pago recibes tus accesos de cPanel por correo, normalmente en menos de un minuto.",
  "faq.2.q": "¿Ofrecen SSL?",
  "faq.2.a":
    "Sí. Todos los planes incluyen certificados SSL gratuitos que se instalan y renuevan automáticamente con FleetSSL.",
  "faq.3.q": "¿Puedo mejorar mi plan más adelante?",
  "faq.3.a":
    "Por supuesto. Puedes pasar a un plan superior en cualquier momento y realizamos el cambio sin interrupciones ni pérdida de datos.",
  "faq.4.q": "¿Aceptan PayPal?",
  "faq.4.a":
    "Sí, todos los pagos se procesan de forma segura mediante PayPal, así tus datos financieros nunca se comparten con nosotros.",
  "faq.5.q": "¿Puedo migrar mi sitio web?",
  "faq.5.a":
    "Sí. Nuestro equipo migra tu sitio, correos y bases de datos desde tu proveedor anterior sin coste alguno.",
  "faq.6.q": "¿Hay copias de seguridad diarias?",
  "faq.6.a":
    "Cada cuenta se respalda a diario con JetBackup y Backuply, y puedes restaurar cualquier copia tú mismo desde cPanel.",

  "rev.title": "Lo que dicen nuestros clientes",
  "rev.subtitle": "Reseñas reales de clientes de Nubiux publicadas en Trustpilot.",
  "rev.score": "4.8 de 5",
  "rev.count": "Basado en 1.284 reseñas",
  "rev.cta": "Ver todas las reseñas en Trustpilot",
  "rev.verified": "Reseña verificada",
  "rev.1.n": "Laura Méndez",
  "rev.1.r": "Dueña de tienda online",
  "rev.1.h": "Mi tienda carga dos veces más rápido",
  "rev.1.d":
    "Migré mi tienda WooCommerce y la diferencia fue inmediata. El checkout va fluido y no he tenido ni una caída.",
  "rev.2.n": "Daniel Rivas",
  "rev.2.r": "Desarrollador freelance",
  "rev.2.h": "Un soporte que sí sabe de hosting",
  "rev.2.d":
    "Escribí a las 2 de la mañana con un problema de PHP y un especialista real lo resolvió en minutos. Solo por eso vale la pena.",
  "rev.3.n": "Carolina Suárez",
  "rev.3.r": "Agencia de marketing",
  "rev.3.h": "Ideal para gestionar webs de clientes",
  "rev.3.d":
    "cPanel y las instalaciones con un clic me ahorran horas cada semana. Ahora alojo a todos mis clientes en Nubiux.",
  "rev.4.n": "Marcos Herrera",
  "rev.4.r": "Bloguero",
  "rev.4.h": "Activación instantánea y sin sorpresas",
  "rev.4.d":
    "Pagué con PayPal y tuve mis accesos en menos de un minuto. Precios claros y sin costes ocultos.",
  "rev.5.n": "Valeria Ortiz",
  "rev.5.r": "Pequeña empresa",
  "rev.5.h": "Las copias de seguridad salvaron mi web",
  "rev.5.d":
    "Rompí el sitio con una actualización de un plugin y restauré la copia del día anterior con un clic. Tranquilidad total.",
  "rev.6.n": "Andrés Puente",
  "rev.6.r": "Fundador de SaaS",
  "rev.6.h": "Disponibilidad impecable",
  "rev.6.d":
    "Meses después el monitoreo sigue marcando 100% de disponibilidad. La seguridad es muy superior a lo que pagaba antes.",

  "pay.title": "Pagos seguros con PayPal",
  "pay.subtitle":
    "Paga con tu saldo de PayPal, tarjeta de crédito o débito. Protección al comprador incluida.",

  "trust.title": "Un hosting en el que puedes confiar",
  "trust.subtitle": "Miles de sitios web confían en Nubiux para su operación diaria.",
  "trust.1": "Garantía de 99.9% de Uptime",
  "trust.2": "Soporte Profesional",
  "trust.3": "Infraestructura Segura",
  "trust.4": "Licencias de Software Premium",
  "trust.5": "Activación Rápida",
  "trust.6": "Hosting Confiable",

  "cta.title": "¿Listo para empezar con Nubiux?",
  "cta.subtitle": "Elige tu plan, actívalo en minutos y nosotros nos encargamos del resto.",
  "cta.button": "Comenzar",

  "footer.tagline":
    "Hosting web premium con licencias de software empresarial, activación instantánea y soporte.",
  "footer.company": "Empresa",
  "footer.product": "Producto",
  "footer.legal": "Legal",
  "footer.about": "Nosotros",
  "footer.hosting": "Hosting",
  "footer.pricing": "Precios",
  "footer.faq": "Preguntas",
  "footer.privacy": "Política de Privacidad",
  "footer.terms": "Términos del Servicio",
  "footer.cookies": "Política de Cookies",
  "footer.refunds": "Política de Reembolsos",
  "footer.contact": "Contacto",
  "footer.rights": "© Nubiux. Todos los derechos reservados.",
  "lang.label": "Idioma",

  "mascot.name": "Nubi",
  "mascot.hero": "¡Hola! Soy Nubi, tu compañero de hosting.",
  "mascot.alt.wave": "Nubi, la mascota capibara de Nubiux, saludando con auriculares",
  "mascot.alt.shield": "Nubi, la mascota capibara de Nubiux, con un escudo de seguridad",
  "mascot.alt.server": "Nubi, la mascota capibara de Nubiux, abrazando un servidor",
  "mascot.security": "Cuido tu sitio 24/7.",
  "mascot.footer": "¡Nos vemos en la nube!",

  "discord.open": "Únete a nuestro Discord",
  "discord.close": "Cerrar",
  "discord.title": "Únete al Discord de Nubiux",
  "discord.desc":
    "Recibe información precisa, soporte en tiempo real y novedades de hosting directamente de nuestro equipo y comunidad.",
  "discord.b1": "Soporte rápido de personas reales",
  "discord.b2": "Avisos de estado y mantenimientos",
  "discord.b3": "Consejos, tutoriales y ofertas exclusivas",
  "discord.cta": "Entrar al servidor",
  "discord.members": "Comunidad abierta · Gratis",
};

const dicts: Record<Lang, Dict> = { en, es };

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("nubiux-lang");
    if (stored === "es" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored;
      return;
    }
    // No saved preference yet: guess from the browser's language list so a
    // first-time Spanish-speaking visitor doesn't land on English by default.
    const browserLangs = navigator.languages ?? [navigator.language];
    if (browserLangs.some((l) => l.toLowerCase().startsWith("es"))) {
      setLangState("es");
      document.documentElement.lang = "es";
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("nubiux-lang", l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback((key: string) => (dicts[lang][key] as string) ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n() {
  return useContext(LangContext);
}
