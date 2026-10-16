import type { Lang } from "@/lib/i18n";

export type VpsPlan = {
  name: string;
  sub: string;
  monthly: number;
  specs: string[];
  cta: string;
  popular?: boolean;
};

const es = {
  nav: { features: "Características", pricing: "Precios", cases: "Casos de Éxito", support: "Soporte", login: "Iniciar Sesión", cta: "Contratar VPS" },
  hero: {
    pre: "🚀 Infraestructura Cloud de Clase Empresarial",
    title: "Rendimiento Extremo. Cero Interrupciones.",
    titleAccent: "El VPS Premium que tu proyecto exige.",
    sub: "Olvídate de la lentitud y las caídas. Servidores con discos NVMe, CPU dedicada y protección Anti-DDoS. Despliega tu infraestructura en menos de 60 segundos.",
    cta: "Ver Planes y Precios",
    cta2: "Hablar con un Experto",
    seals: ["99.99% de Uptime garantizado", "Soporte Técnico 24/7 en minutos", "Garantía de reembolso de 7 días"],
  },
  pain: {
    title: "¿Tu hosting actual está frenando tu crecimiento?",
    items: [
      { title: "Cargas lentas", text: "Cada segundo de retraso te cuesta un 7% en conversiones. Los recursos compartidos matan tu velocidad." },
      { title: "Caídas inesperadas", text: "El error 502 o 504 no es una opción. Tu negocio debe estar online 24/7, sin excusas." },
      { title: "La solución Premium", text: "Recursos 100% garantizados, aislamiento total y hardware de última generación para que tú solo te preocupes por tu código o tu negocio." },
    ],
  },
  features: {
    title: "Tecnología de vanguardia, sin letra pequeña.",
    items: [
      { title: "Almacenamiento NVMe de Alta Velocidad", text: "Hasta 10 veces más rápido que los SSD tradicionales. Lectura/escritura instantánea para tus bases de datos." },
      { title: "CPU y RAM 100% Dedicadas", text: "Cero \"vecinos ruidosos\". Tus recursos son tuyos y solo tuyos. Rendimiento predecible en horas pico." },
      { title: "Red de 10Gbps y Anti-DDoS", text: "Mitigación de ataques DDoS incluida en todos los planes. Tu servidor estará protegido y tu red volará." },
      { title: "Acceso Root Total y Panel Intuitivo", text: "Control absoluto de tu servidor. Instala cualquier OS, configura tu stack y gestiona todo desde nuestro panel personalizado." },
      { title: "Backups Automáticos (Snapshots)", text: "Copias de seguridad diarias con retención de 7 días. Restaura tu servidor en un clic si algo sale mal." },
      { title: "Soporte Nivel 3 Real", text: "No hablamos con bots. Nuestros ingenieros de sistemas están disponibles 24/7/365 para resolver problemas complejos." },
    ],
  },
  cases: {
    title: "Construido para los que no se conforman con lo básico.",
    items: [
      { title: "E-commerce de Alto Tráfico", text: "WooCommerce, Magento, Prestashop" },
      { title: "Aplicaciones SaaS y APIs", text: "Node.js, Python, Ruby, Go" },
      { title: "Servidores de Juegos y Comunidades", text: "Minecraft, Rust, Ark" },
      { title: "Entornos Corporativos y ERP", text: "Odoo, SAP, bases de datos pesadas" },
    ],
  },
  pricing: {
    title: "Planes Premium a precios justos. Sin sorpresas.",
    monthly: "Mensual",
    yearly: "Anual",
    free: "2 meses gratis",
    month: "/ mes",
    year: "/ año",
    popular: "Más Popular",
    note: "Todos los planes incluyen Anti-DDoS, Backups diarios y Soporte 24/7. Facturación mensual o anual con 2 meses gratis.",
    plans: [
      { name: "STARTER", sub: "Ideal para proyectos en crecimiento.", monthly: 12.99, specs: ["2 vCPU (Dedicada)", "4 GB RAM DDR4", "80 GB NVMe", "4 TB Transferencia", "1 IP Dedicada"], cta: "Elegir Starter" },
      { name: "BUSINESS", sub: "El equilibrio perfecto para negocios serios.", monthly: 24.99, specs: ["4 vCPU (Dedicada)", "8 GB RAM DDR4", "160 GB NVMe", "8 TB Transferencia", "1 IP Dedicada"], cta: "Elegir Business", popular: true },
      { name: "ENTERPRISE", sub: "Potencia bruta para cargas de trabajo pesadas.", monthly: 49.99, specs: ["8 vCPU (Dedicada)", "16 GB RAM DDR4", "320 GB NVMe", "Transferencia Ilimitada*", "1 IP Dedicada"], cta: "Elegir Enterprise" },
    ] as VpsPlan[],
  },
  reviews: {
    title: "Más de 5,000 developers y empresas confían en nosotros.",
    items: [
      { quote: "Migramos nuestra tienda de Shopify/WooCommerce y el tiempo de carga bajó un 60%. Las ventas subieron y el soporte técnico nos ayudó a configurar el stack en minutos.", name: "Carlos M.", role: "CTO en TechRetail" },
      { quote: "Por fin un VPS donde el 'Noisy Neighbor' no existe. El rendimiento de la base de datos es consistente incluso en Black Friday.", name: "Ana R.", role: "Lead Developer en DataCorp" },
      { quote: "El panel de control es increíblemente limpio y la activación es literalmente instantánea. 10/10.", name: "Javier T.", role: "SysAdmin Freelance" },
    ],
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      { q: "¿Puedo migrar mi servidor actual gratis?", a: "¡Sí! Nuestro equipo de expertos realizará la migración de tu VPS actual de forma gratuita y sin tiempo de inactividad." },
      { q: "¿Qué sistemas operativos puedo instalar?", a: "Tienes acceso total. Puedes instalar Ubuntu, Debian, CentOS, AlmaLinux, Windows Server, o subir tu propia imagen ISO personalizada." },
      { q: "¿Puedo mejorar mi plan (Upgrade) más tarde?", a: "Absolutamente. Puedes escalar los recursos de tu VPS en cualquier momento desde tu panel de control con un solo clic, sin perder datos." },
      { q: "¿Tienen algún costo de configuración o setup?", a: "Cero. No cobramos fees de configuración. El precio que ves es el precio final." },
    ],
  },
  final: {
    title: "Deja de perder clientes por un servidor lento.",
    sub: "Únete a la élite del hosting cloud. Despliega tu VPS Premium en 60 segundos.",
    cta: "Activar mi VPS Premium Ahora",
    note: "Sin contratos de permanencia. Cancela cuando quieras.",
  },
  footer: {
    desc: "Infraestructura cloud premium con NVMe, CPU dedicada y soporte humano 24/7.",
    products: "Productos", support: "Soporte", legal: "Legal",
    productLinks: ["VPS Premium", "Servidores Dedicados", "Cloud Hosting", "Dominios"],
    supportLinks: ["Centro de Ayuda", "Estado del Servidor (Status)", "Contacto", "Migraciones"],
    legalLinks: ["Términos y Condiciones", "Política de Privacidad", "SLA (Acuerdo de Nivel de Servicio)", "AUP (Política de Uso Aceptable)"],
    rights: "Todos los derechos reservados.",
    pay: "Métodos de pago:",
  },
};

const en: typeof es = {
  nav: { features: "Features", pricing: "Pricing", cases: "Success Stories", support: "Support", login: "Log In", cta: "Get a VPS" },
  hero: {
    pre: "🚀 Enterprise-Grade Cloud Infrastructure",
    title: "Extreme Performance. Zero Downtime.",
    titleAccent: "The Premium VPS your project demands.",
    sub: "Forget slowness and outages. Servers with NVMe drives, dedicated CPU and Anti-DDoS protection. Deploy your infrastructure in under 60 seconds.",
    cta: "See Plans & Pricing",
    cta2: "Talk to an Expert",
    seals: ["99.99% guaranteed uptime", "24/7 tech support in minutes", "7-day money-back guarantee"],
  },
  pain: {
    title: "Is your current hosting holding back your growth?",
    items: [
      { title: "Slow loading", text: "Every second of delay costs you 7% in conversions. Shared resources kill your speed." },
      { title: "Unexpected outages", text: "A 502 or 504 error is not an option. Your business must be online 24/7, no excuses." },
      { title: "The Premium solution", text: "100% guaranteed resources, full isolation and latest-generation hardware so you only worry about your code or your business." },
    ],
  },
  features: {
    title: "Cutting-edge technology, no fine print.",
    items: [
      { title: "High-Speed NVMe Storage", text: "Up to 10x faster than traditional SSDs. Instant read/write for your databases." },
      { title: "100% Dedicated CPU & RAM", text: "Zero \"noisy neighbors\". Your resources are yours alone. Predictable performance at peak hours." },
      { title: "10Gbps Network & Anti-DDoS", text: "DDoS mitigation included in every plan. Your server stays protected and your network flies." },
      { title: "Full Root Access & Intuitive Panel", text: "Total control of your server. Install any OS, configure your stack and manage everything from our custom panel." },
      { title: "Automatic Backups (Snapshots)", text: "Daily backups with 7-day retention. Restore your server in one click if something goes wrong." },
      { title: "Real Tier-3 Support", text: "No bots. Our systems engineers are available 24/7/365 to solve complex problems." },
    ],
  },
  cases: {
    title: "Built for those who won't settle for basic.",
    items: [
      { title: "High-Traffic E-commerce", text: "WooCommerce, Magento, Prestashop" },
      { title: "SaaS Apps & APIs", text: "Node.js, Python, Ruby, Go" },
      { title: "Game Servers & Communities", text: "Minecraft, Rust, Ark" },
      { title: "Corporate & ERP Environments", text: "Odoo, SAP, heavy databases" },
    ],
  },
  pricing: {
    title: "Premium plans at fair prices. No surprises.",
    monthly: "Monthly",
    yearly: "Yearly",
    free: "2 months free",
    month: "/ mo",
    year: "/ yr",
    popular: "Most Popular",
    note: "All plans include Anti-DDoS, daily backups and 24/7 support. Monthly or yearly billing with 2 months free.",
    plans: [
      { name: "STARTER", sub: "Ideal for growing projects.", monthly: 12.99, specs: ["2 vCPU (Dedicated)", "4 GB DDR4 RAM", "80 GB NVMe", "4 TB Transfer", "1 Dedicated IP"], cta: "Choose Starter" },
      { name: "BUSINESS", sub: "The perfect balance for serious businesses.", monthly: 24.99, specs: ["4 vCPU (Dedicated)", "8 GB DDR4 RAM", "160 GB NVMe", "8 TB Transfer", "1 Dedicated IP"], cta: "Choose Business", popular: true },
      { name: "ENTERPRISE", sub: "Raw power for heavy workloads.", monthly: 49.99, specs: ["8 vCPU (Dedicated)", "16 GB DDR4 RAM", "320 GB NVMe", "Unlimited Transfer*", "1 Dedicated IP"], cta: "Choose Enterprise" },
    ],
  },
  reviews: {
    title: "Over 5,000 developers and companies trust us.",
    items: [
      { quote: "We migrated our Shopify/WooCommerce store and load time dropped 60%. Sales went up and support helped us set up the stack in minutes.", name: "Carlos M.", role: "CTO at TechRetail" },
      { quote: "Finally a VPS where the 'Noisy Neighbor' doesn't exist. Database performance is consistent even on Black Friday.", name: "Ana R.", role: "Lead Developer at DataCorp" },
      { quote: "The control panel is incredibly clean and activation is literally instant. 10/10.", name: "Javier T.", role: "Freelance SysAdmin" },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { q: "Can I migrate my current server for free?", a: "Yes! Our experts will migrate your current VPS for free and with zero downtime." },
      { q: "Which operating systems can I install?", a: "You have full access. Install Ubuntu, Debian, CentOS, AlmaLinux, Windows Server, or upload your own custom ISO." },
      { q: "Can I upgrade my plan later?", a: "Absolutely. Scale your VPS resources anytime from your control panel in one click, without losing data." },
      { q: "Are there any setup fees?", a: "Zero. We don't charge setup fees. The price you see is the final price." },
    ],
  },
  final: {
    title: "Stop losing customers to a slow server.",
    sub: "Join the cloud hosting elite. Deploy your Premium VPS in 60 seconds.",
    cta: "Activate my Premium VPS Now",
    note: "No lock-in contracts. Cancel anytime.",
  },
  footer: {
    desc: "Premium cloud infrastructure with NVMe, dedicated CPU and 24/7 human support.",
    products: "Products", support: "Support", legal: "Legal",
    productLinks: ["Premium VPS", "Dedicated Servers", "Cloud Hosting", "Domains"],
    supportLinks: ["Help Center", "Server Status", "Contact", "Migrations"],
    legalLinks: ["Terms & Conditions", "Privacy Policy", "SLA (Service Level Agreement)", "AUP (Acceptable Use Policy)"],
    rights: "All rights reserved.",
    pay: "Payment methods:",
  },
};

export function getVps(lang: Lang) {
  return lang === "es" ? es : en;
}
