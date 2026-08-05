import type { Lang } from "@/lib/i18n";

/**
 * Editable legal content maintained by the Nubiux team.
 * Replace CONTACT_EMAIL / COMPANY_NAME with your registered details.
 */
export const COMPANY_NAME = "Nubiux";
export const CONTACT_EMAIL = "legal@nubiux.com";
export const SUPPORT_EMAIL = "support@nubiux.com";
export const LAST_UPDATED = "2026-08-05";

export type LegalSection = { h: string; p: string[] };
export type LegalDoc = {
  title: string;
  description: string;
  intro: string;
  updatedLabel: string;
  noticeLabel: string;
  notice: string;
  backLabel: string;
  contactLabel: string;
  sections: LegalSection[];
};

export type LegalSlug = "terms" | "privacy" | "cookies" | "refunds";

const commonEn = {
  updatedLabel: "Last updated",
  noticeLabel: "Please note",
  notice:
    "This page is maintained by the Nubiux team to answer common questions about our service. It is a general summary and not legal advice. Write to us if you need clarification before purchasing.",
  backLabel: "Back to home",
  contactLabel: "Questions about this document?",
};

const commonEs = {
  updatedLabel: "Última actualización",
  noticeLabel: "Ten en cuenta",
  notice:
    "Esta página es mantenida por el equipo de Nubiux para responder dudas frecuentes sobre el servicio. Es un resumen general y no constituye asesoría legal. Escríbenos si necesitas aclaraciones antes de contratar.",
  backLabel: "Volver al inicio",
  contactLabel: "¿Dudas sobre este documento?",
};

const en: Record<LegalSlug, LegalDoc> = {
  terms: {
    ...commonEn,
    title: "Terms of Service",
    description:
      "The rules that apply when you order, use and renew a Nubiux web hosting plan, including acceptable use and account responsibilities.",
    intro:
      "These terms describe the agreement between you and Nubiux when you order or use any of our shared web hosting plans. By completing a payment you accept them.",
    sections: [
      {
        h: "1. The service",
        p: [
          "Nubiux provides shared web hosting on SSD servers with cPanel, free SSL certificates, email accounts, daily backups and one-click application installs, according to the plan you purchase.",
          "Resources such as storage and email accounts are those listed on the plan you select. Bandwidth is offered without a fixed cap but remains subject to fair use so a single account does not degrade the shared server.",
        ],
      },
      {
        h: "2. Accounts and credentials",
        p: [
          "You are responsible for keeping your cPanel and billing credentials secure and for all activity performed with them.",
          "You must provide a valid email address. Service notices, invoices and activation details are sent there.",
        ],
      },
      {
        h: "3. Billing, renewals and prices",
        p: [
          "Plans are billed monthly or annually in advance, in US dollars, through PayPal. Annual plans are billed for twelve months at the discounted rate shown on the pricing section.",
          "Service continues while the plan is paid. If an invoice is not paid by its due date the account may be suspended and, after a further grace period, the data may be removed.",
          "Prices may change. Any change is announced in advance and applies from your next renewal, never during a period you already paid.",
        ],
      },
      {
        h: "4. Acceptable use",
        p: [
          "You may not host or distribute malware, phishing pages, spam operations, content that infringes third-party rights, or material that is illegal where the service is provided.",
          "You may not run activities that abuse shared resources, such as unattended crypto mining, public proxies, mass mailing from the shared IP, or scripts that saturate CPU or disk I/O.",
          "Accounts used for these activities may be suspended to protect other customers on the same server. Where possible we contact you first.",
        ],
      },
      {
        h: "5. Backups and your content",
        p: [
          "You keep ownership of everything you upload. We only access account data when needed to operate, secure or support the service.",
          "We create daily automated backups as an operational safety net. They are not a substitute for your own copies, so we recommend keeping independent backups of critical data.",
        ],
      },
      {
        h: "6. Availability and support",
        p: [
          "We target 99.9% monthly uptime and monitor the infrastructure continuously. Scheduled maintenance is announced when it may cause interruption.",
          "Support is available every day through our support channels and covers the hosting platform, cPanel and server-side issues. Custom development inside your own applications falls outside support.",
        ],
      },
      {
        h: "7. Suspension and termination",
        p: [
          "You may cancel at any time from your account or by contacting us; the service stays active until the end of the paid period.",
          "We may suspend or terminate an account for non-payment, for breach of the acceptable use rules, or when required to protect the platform or comply with a lawful request.",
        ],
      },
      {
        h: "8. Liability",
        p: [
          "The service is provided on a commercially reasonable basis. To the extent permitted by applicable law, our liability for any claim related to the service is limited to the amount you paid for it during the three months before the claim.",
          "We are not responsible for losses caused by third-party software you install, by content you publish, or by the loss of credentials.",
        ],
      },
      {
        h: "9. Changes to these terms",
        p: [
          "We may update these terms to reflect changes in the service or in applicable rules. The date at the top of this page always shows the current version, and material changes are announced by email.",
        ],
      },
    ],
  },
  privacy: {
    ...commonEn,
    title: "Privacy Policy",
    description:
      "What personal data Nubiux collects to provide hosting, how it is used, how long it is kept and how you can request access or deletion.",
    intro:
      "This policy explains which data Nubiux processes when you visit this website, order a plan or contact support, and the choices you have over that data.",
    sections: [
      {
        h: "Data we collect",
        p: [
          "Account data: name, email address and the billing details required to issue your invoice and activate the plan.",
          "Payment data: PayPal processes your payment. We receive the confirmation and transaction reference, not your card or bank credentials.",
          "Support data: the messages, tickets and technical details you send us so we can reproduce and solve an issue.",
          "Technical data: server, application and security logs (including IP addresses) generated automatically while the hosting service runs.",
        ],
      },
      {
        h: "How we use it",
        p: [
          "To create, activate, maintain and renew your hosting account.",
          "To provide support, investigate incidents and protect the platform against abuse, fraud and attacks.",
          "To send service notices such as invoices, renewal reminders, maintenance windows and security alerts.",
          "We do not sell your personal data and we do not share it for third-party advertising.",
        ],
      },
      {
        h: "Service providers",
        p: [
          "We rely on a small set of providers to operate: PayPal for payments, our datacenter and infrastructure provider for server hosting, and email delivery for transactional messages.",
          "Providers only receive the data they need for their function and are required to keep it confidential.",
        ],
      },
      {
        h: "Retention",
        p: [
          "Account and billing records are kept while your account is active and afterwards for as long as accounting obligations require.",
          "Technical and security logs are kept for a limited operational period and then deleted or aggregated.",
          "Website content stored in your hosting account is deleted after cancellation, once the grace period ends.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You can ask for access to your data, correction of inaccurate details, deletion, or a copy in a portable format.",
          `Write to ${CONTACT_EMAIL} from the email address registered on the account and we will respond as quickly as we can.`,
        ],
      },
      {
        h: "Security",
        p: [
          "Hosting accounts are protected with SSL certificates, firewalling, malware scanning, brute-force protection and restricted administrative access.",
          "No platform can promise absolute security, so we also recommend strong passwords and keeping your applications updated.",
        ],
      },
    ],
  },
  cookies: {
    ...commonEn,
    title: "Cookie Policy",
    description:
      "Which cookies and local storage this Nubiux website uses, what they are for and how you can control them from your browser.",
    intro:
      "This website keeps its use of cookies and browser storage to the minimum needed for it to work correctly.",
    sections: [
      {
        h: "What we store",
        p: [
          "Language preference: we save your choice between English and Spanish in your browser's local storage so the site opens in the same language next time.",
          "Technical requests: our servers log basic request data such as IP address and browser type for security and diagnostics. This is not a cookie and is not used to profile you.",
        ],
      },
      {
        h: "What we do not use",
        p: [
          "This website does not run advertising cookies, cross-site trackers or profiling pixels.",
        ],
      },
      {
        h: "Third-party content",
        p: [
          "Some elements are loaded from external services, such as the PayPal logo and web fonts. Those providers may receive your IP address as part of the request, as happens with any embedded resource.",
        ],
      },
      {
        h: "Managing your choices",
        p: [
          "You can clear or block cookies and local storage from your browser settings at any time. If you clear the language preference the site simply opens in its default language.",
        ],
      },
    ],
  },
  refunds: {
    ...commonEn,
    title: "Refund Policy",
    description:
      "How Nubiux handles refund requests, cancellations and renewals for monthly and annual hosting plans paid through PayPal.",
    intro:
      "We want you to keep a plan because it works for you, not because of a payment you regret. This is how refunds and cancellations work.",
    sections: [
      {
        h: "New orders",
        p: [
          "If your first hosting order does not meet your expectations, contact us within 14 days of activation and we will refund it in full through PayPal.",
          "Refunds are issued to the same PayPal account used for the purchase, usually within a few business days after approval.",
        ],
      },
      {
        h: "Renewals",
        p: [
          "Renewals of a plan you were already using are not automatically refundable, because the service was provisioned for the new period.",
          "If a renewal was charged unintentionally, contact us as soon as you notice it and we will review the case individually.",
        ],
      },
      {
        h: "Cancellations",
        p: [
          "You can cancel at any time. The plan stays active until the end of the period you already paid and is not renewed afterwards.",
          "Download your files and databases from cPanel before the period ends; data may be removed once the grace period expires.",
        ],
      },
      {
        h: "Exceptions",
        p: [
          "Refunds are not available for accounts suspended for breaching the acceptable use rules, or for third-party services and licenses bought at your request from an external vendor.",
        ],
      },
      {
        h: "How to request a refund",
        p: [
          `Write to ${SUPPORT_EMAIL} from the email registered on the account, with your domain and the PayPal transaction reference. We confirm every request in writing.`,
        ],
      },
    ],
  },
};

const es: Record<LegalSlug, LegalDoc> = {
  terms: {
    ...commonEs,
    title: "Términos del Servicio",
    description:
      "Las reglas que aplican al contratar, usar y renovar un plan de hosting de Nubiux, incluido el uso aceptable y tus responsabilidades de cuenta.",
    intro:
      "Estos términos describen el acuerdo entre tú y Nubiux cuando contratas o usas cualquiera de nuestros planes de hosting compartido. Al completar un pago los aceptas.",
    sections: [
      {
        h: "1. El servicio",
        p: [
          "Nubiux ofrece hosting web compartido en servidores SSD con cPanel, certificados SSL gratuitos, cuentas de correo, copias de seguridad diarias e instalación de aplicaciones en un clic, según el plan que contrates.",
          "Los recursos como almacenamiento y cuentas de correo son los indicados en el plan elegido. El tráfico se ofrece sin límite fijo, pero sujeto a uso razonable para que una cuenta no degrade el servidor compartido.",
        ],
      },
      {
        h: "2. Cuentas y credenciales",
        p: [
          "Eres responsable de mantener seguras tus credenciales de cPanel y de facturación, y de toda la actividad realizada con ellas.",
          "Debes facilitar un correo electrónico válido: allí enviamos avisos del servicio, facturas y los datos de activación.",
        ],
      },
      {
        h: "3. Facturación, renovaciones y precios",
        p: [
          "Los planes se facturan por adelantado, de forma mensual o anual, en dólares estadounidenses y a través de PayPal. Los planes anuales se cobran por doce meses al precio con descuento indicado en la sección de precios.",
          "El servicio continúa mientras el plan esté pagado. Si una factura no se paga en la fecha prevista, la cuenta puede suspenderse y, tras un periodo de gracia, los datos pueden eliminarse.",
          "Los precios pueden cambiar. Cualquier cambio se anuncia con antelación y aplica desde tu siguiente renovación, nunca durante un periodo ya pagado.",
        ],
      },
      {
        h: "4. Uso aceptable",
        p: [
          "No puedes alojar ni distribuir malware, páginas de phishing, operaciones de spam, contenido que infrinja derechos de terceros ni material ilegal donde se presta el servicio.",
          "No puedes ejecutar actividades que abusen de los recursos compartidos, como minería de criptomonedas desatendida, proxies públicos, envíos masivos desde la IP compartida o scripts que saturen CPU o disco.",
          "Las cuentas usadas para estas actividades pueden suspenderse para proteger al resto de clientes del servidor. Cuando sea posible te contactamos antes.",
        ],
      },
      {
        h: "5. Copias de seguridad y tu contenido",
        p: [
          "Conservas la propiedad de todo lo que subes. Solo accedemos a los datos de la cuenta cuando es necesario para operar, proteger o dar soporte al servicio.",
          "Realizamos copias automáticas diarias como red de seguridad operativa. No sustituyen tus propias copias, así que recomendamos mantener respaldos independientes de la información crítica.",
        ],
      },
      {
        h: "6. Disponibilidad y soporte",
        p: [
          "Nuestro objetivo es un 99,9% de disponibilidad mensual y monitorizamos la infraestructura de forma continua. El mantenimiento programado se anuncia cuando pueda causar interrupción.",
          "El soporte está disponible todos los días por nuestros canales y cubre la plataforma de hosting, cPanel y las incidencias del servidor. El desarrollo a medida dentro de tus aplicaciones queda fuera del soporte.",
        ],
      },
      {
        h: "7. Suspensión y cancelación",
        p: [
          "Puedes cancelar cuando quieras desde tu cuenta o contactándonos; el servicio sigue activo hasta el final del periodo pagado.",
          "Podemos suspender o cancelar una cuenta por impago, por incumplir las reglas de uso aceptable o cuando sea necesario para proteger la plataforma o atender un requerimiento legal.",
        ],
      },
      {
        h: "8. Responsabilidad",
        p: [
          "El servicio se presta con criterios comercialmente razonables. En la medida que permita la ley aplicable, nuestra responsabilidad por cualquier reclamación relacionada con el servicio se limita al importe pagado por él en los tres meses anteriores.",
          "No respondemos por pérdidas causadas por software de terceros que instales, por el contenido que publiques o por la pérdida de credenciales.",
        ],
      },
      {
        h: "9. Cambios en estos términos",
        p: [
          "Podemos actualizar estos términos para reflejar cambios en el servicio o en la normativa aplicable. La fecha del inicio de esta página indica siempre la versión vigente y los cambios relevantes se anuncian por correo.",
        ],
      },
    ],
  },
  privacy: {
    ...commonEs,
    title: "Política de Privacidad",
    description:
      "Qué datos personales recoge Nubiux para prestar el hosting, cómo se usan, cuánto se conservan y cómo solicitar acceso o eliminación.",
    intro:
      "Esta política explica qué datos trata Nubiux cuando visitas este sitio, contratas un plan o escribes a soporte, y las opciones que tienes sobre ellos.",
    sections: [
      {
        h: "Datos que recogemos",
        p: [
          "Datos de cuenta: nombre, correo electrónico y los datos de facturación necesarios para emitir tu factura y activar el plan.",
          "Datos de pago: PayPal procesa el pago. Nosotros recibimos la confirmación y la referencia de la transacción, no tus credenciales bancarias o de tarjeta.",
          "Datos de soporte: los mensajes, tickets y detalles técnicos que nos envías para reproducir y resolver una incidencia.",
          "Datos técnicos: registros de servidor, aplicación y seguridad (incluidas direcciones IP) generados automáticamente al operar el hosting.",
        ],
      },
      {
        h: "Para qué los usamos",
        p: [
          "Para crear, activar, mantener y renovar tu cuenta de hosting.",
          "Para dar soporte, investigar incidentes y proteger la plataforma frente a abusos, fraude y ataques.",
          "Para enviar avisos del servicio como facturas, recordatorios de renovación, ventanas de mantenimiento y alertas de seguridad.",
          "No vendemos tus datos personales ni los compartimos para publicidad de terceros.",
        ],
      },
      {
        h: "Proveedores",
        p: [
          "Trabajamos con un conjunto reducido de proveedores para operar: PayPal para los pagos, nuestro proveedor de centro de datos e infraestructura para los servidores, y un servicio de envío de correo transaccional.",
          "Los proveedores solo reciben los datos necesarios para su función y están obligados a mantener la confidencialidad.",
        ],
      },
      {
        h: "Conservación",
        p: [
          "Los registros de cuenta y facturación se conservan mientras la cuenta esté activa y después durante el tiempo que exijan las obligaciones contables.",
          "Los registros técnicos y de seguridad se conservan un periodo operativo limitado y luego se eliminan o agregan.",
          "El contenido alojado en tu cuenta se elimina tras la cancelación, una vez terminado el periodo de gracia.",
        ],
      },
      {
        h: "Tus derechos",
        p: [
          "Puedes solicitar acceso a tus datos, la corrección de datos inexactos, su eliminación o una copia en formato portable.",
          `Escríbenos a ${CONTACT_EMAIL} desde el correo registrado en la cuenta y responderemos lo antes posible.`,
        ],
      },
      {
        h: "Seguridad",
        p: [
          "Las cuentas de hosting se protegen con certificados SSL, firewall, escaneo de malware, protección contra fuerza bruta y acceso administrativo restringido.",
          "Ninguna plataforma puede prometer seguridad absoluta, por lo que también recomendamos contraseñas robustas y mantener tus aplicaciones actualizadas.",
        ],
      },
    ],
  },
  cookies: {
    ...commonEs,
    title: "Política de Cookies",
    description:
      "Qué cookies y almacenamiento local usa el sitio de Nubiux, para qué sirven y cómo controlarlos desde tu navegador.",
    intro:
      "Este sitio usa el mínimo de cookies y almacenamiento del navegador necesario para funcionar correctamente.",
    sections: [
      {
        h: "Qué guardamos",
        p: [
          "Preferencia de idioma: guardamos tu elección entre inglés y español en el almacenamiento local del navegador para que el sitio se abra en el mismo idioma la próxima vez.",
          "Peticiones técnicas: nuestros servidores registran datos básicos de la petición, como la IP y el tipo de navegador, con fines de seguridad y diagnóstico. No es una cookie ni se usa para perfilarte.",
        ],
      },
      {
        h: "Qué no usamos",
        p: ["Este sitio no utiliza cookies publicitarias, rastreadores entre sitios ni píxeles de perfilado."],
      },
      {
        h: "Contenido de terceros",
        p: [
          "Algunos elementos se cargan desde servicios externos, como el logo de PayPal y las tipografías web. Esos proveedores pueden recibir tu dirección IP como parte de la petición, igual que con cualquier recurso incrustado.",
        ],
      },
      {
        h: "Cómo gestionar tus opciones",
        p: [
          "Puedes borrar o bloquear cookies y almacenamiento local desde la configuración de tu navegador en cualquier momento. Si borras la preferencia de idioma, el sitio se abrirá en su idioma por defecto.",
        ],
      },
    ],
  },
  refunds: {
    ...commonEs,
    title: "Política de Reembolsos",
    description:
      "Cómo gestiona Nubiux los reembolsos, cancelaciones y renovaciones de los planes mensuales y anuales pagados con PayPal.",
    intro:
      "Queremos que mantengas tu plan porque te funciona, no por un pago del que te arrepientes. Así funcionan los reembolsos y las cancelaciones.",
    sections: [
      {
        h: "Primeros pedidos",
        p: [
          "Si tu primer pedido de hosting no cumple tus expectativas, escríbenos dentro de los 14 días siguientes a la activación y lo reembolsamos íntegramente por PayPal.",
          "Los reembolsos se emiten a la misma cuenta de PayPal usada en la compra, normalmente en pocos días hábiles tras la aprobación.",
        ],
      },
      {
        h: "Renovaciones",
        p: [
          "Las renovaciones de un plan que ya estabas usando no son reembolsables de forma automática, porque el servicio se aprovisionó para el nuevo periodo.",
          "Si una renovación se cobró sin intención, escríbenos en cuanto lo detectes y revisamos el caso de forma individual.",
        ],
      },
      {
        h: "Cancelaciones",
        p: [
          "Puedes cancelar cuando quieras. El plan sigue activo hasta el final del periodo ya pagado y no se renueva después.",
          "Descarga tus archivos y bases de datos desde cPanel antes de que termine el periodo; los datos pueden eliminarse cuando finalice el periodo de gracia.",
        ],
      },
      {
        h: "Excepciones",
        p: [
          "No hay reembolso para cuentas suspendidas por incumplir las reglas de uso aceptable, ni para servicios y licencias de terceros adquiridos a petición tuya a un proveedor externo.",
        ],
      },
      {
        h: "Cómo solicitar un reembolso",
        p: [
          `Escribe a ${SUPPORT_EMAIL} desde el correo registrado en la cuenta, indicando tu dominio y la referencia de la transacción de PayPal. Confirmamos por escrito cada solicitud.`,
        ],
      },
    ],
  },
};

const docs: Record<Lang, Record<LegalSlug, LegalDoc>> = { en, es };

export function getLegalDoc(lang: Lang, slug: LegalSlug): LegalDoc {
  return docs[lang][slug];
}