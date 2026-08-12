import type { Lang } from "@/lib/i18n";

/**
 * Editable legal content maintained by the Nubiux team.
 * Replace CONTACT_EMAIL / COMPANY_NAME with your registered details.
 */
export const COMPANY_NAME = "Nubiux";
export const CONTACT_EMAIL = "legal@nubiux.com";
export const SUPPORT_EMAIL = "support@nubiux.com";

export type LegalSlug = "terms" | "privacy" | "cookies" | "refunds";

// Each legal document tracks its own revision date, since editing one
// (e.g. Terms) should not make the others (Privacy, Cookies, Refunds)
// look like they changed too.
export const LAST_UPDATED: Record<LegalSlug, string> = {
  terms: "2026-08-12",
  privacy: "2026-08-05",
  cookies: "2026-08-05",
  refunds: "2026-08-05",
};

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
      "The rules that apply when you order, use and renew a Nubiux web hosting plan: account responsibilities, billing, acceptable use, backups and the limits of our liability.",
    intro:
      "These Terms of Service are the agreement between you and Nubiux for the use of this website and any hosting plan you order. By completing a payment or otherwise using the service, you accept them in full.",
    sections: [
      {
        h: "1. Introduction",
        p: [
          "These Terms of Service are a binding agreement between you and Nubiux and govern your access to this website and your use of any Nubiux hosting plan. By placing an order, completing a payment, or otherwise using the service you accept these terms in full.",
        ],
      },
      {
        h: "2. Your account",
        p: [
          "You must be at least 18 years old, or have the express consent of a parent or legal guardian, to open a Nubiux account.",
          "You agree to provide accurate, current and complete information when ordering a plan, and to keep it up to date. We may request additional verification, such as a government-issued ID or proof of payment, before activating or reinstating a service.",
          "You are responsible for keeping your cPanel and billing credentials confidential and for all activity carried out with them. Do not share your login details, and contact us immediately if you suspect unauthorized access.",
          "An account with no active plan, renewal or login activity for an extended period may be treated as inactive. We always try to reach you at your registered email before removing any associated data.",
        ],
      },
      {
        h: "3. Orders, activation and payments",
        p: [
          "A plan is activated once payment has been received and verified. We may deny or cancel an order, before or shortly after activation, if we reasonably suspect fraud, abuse, or a violation of these terms.",
          "Ordering a plan grants you a license to use the hosting resources described for that plan; it does not transfer ownership of the underlying servers, software or infrastructure.",
          "The storage, websites, email accounts and other resources available to you are those listed for your plan on our pricing page. Using resources beyond what your plan includes may require an upgrade.",
        ],
      },
      {
        h: "4. Billing, renewals and price changes",
        p: [
          "Plans are billed in advance, monthly or annually, in US dollars through PayPal. Annual plans are billed for twelve months at the discounted rate shown at checkout.",
          "Plans renew automatically at the end of each billing period unless you cancel beforehand. If a renewal is not paid by its due date the account may be suspended and, after a further grace period, the associated content may be permanently removed.",
          "We may change our prices at any time. Any change is announced in advance and takes effect from your next renewal — never during a period you have already paid for. If you do not agree with a new price, you may cancel before it takes effect.",
        ],
      },
      {
        h: "5. Refunds",
        p: [
          "New hosting orders are covered by our money-back guarantee. See our Refund Policy for the exact window, the exceptions that apply, and how to request one; renewals and third-party services purchased at your request are also handled as described there.",
          `Write to ${SUPPORT_EMAIL} with your account details to start a request.`,
        ],
      },
      {
        h: "6. Backups and your content",
        p: [
          "You keep full ownership of everything you upload, and you are responsible for it. We only access account data when needed to operate, secure or support the service, or to respond to a valid legal request.",
          "We run daily automated backups as an operational safety net and make reasonable efforts to help you recover lost data on request, but backups are not guaranteed to be complete, current or restorable in every case. Keep your own independent copies of anything critical.",
        ],
      },
      {
        h: "7. Website content and accuracy",
        p: [
          "We may update this website, including plan features, pricing and policies, at any time. We try to keep it accurate, but it is provided for general information and should not be your only source before an important decision — contact us if something needs clarifying.",
          "This website may link to third-party sites, such as PayPal or our Discord community. We do not control and are not responsible for the content, availability or practices of sites we do not operate.",
        ],
      },
      {
        h: "8. Acceptable use",
        p: [
          "You may not use the service to host or distribute malware, phishing pages, spam or unsolicited bulk email, unconfirmed mailing lists, denial-of-service tools, or content that infringes someone else's copyright, trademark or other rights.",
          "You may not run activities that abuse shared resources — unattended crypto mining, open proxies or relays, or scripts that saturate CPU, memory or disk I/O — or attempt to gain unauthorized access to accounts, data or systems that are not yours.",
          "You are responsible for every user, script and integration running under your account, whether you operate it directly or grant access to someone else.",
          "We may remove offending content and suspend or terminate an account for a breach of this policy. Where the impact on other customers allows it we contact you first; for active abuse, malware or illegal content we may act immediately and explain afterwards.",
        ],
      },
      {
        h: "9. Service availability and changes",
        p: [
          "We target 99.9% monthly uptime and monitor the infrastructure continuously. Scheduled maintenance that may cause a visible interruption is announced beforehand.",
          "We may modify, add or discontinue a feature of the service for operational, security or technical reasons. When a change affects an active plan we give reasonable notice so you can adjust or cancel before it takes effect.",
        ],
      },
      {
        h: "10. Third-party software and services",
        p: [
          "Your plan is provisioned with third-party software such as cPanel, LiteSpeed and Imunify360; using it is also subject to that software's own license or terms.",
          "Payments are processed by PayPal. Using PayPal to pay for a Nubiux plan is also subject to PayPal's own user agreement and privacy policy.",
        ],
      },
      {
        h: "11. Limitation of liability",
        p: [
          "The service is provided on a commercially reasonable basis, without a warranty that it will be uninterrupted or error-free. To the extent permitted by applicable law, we are not liable for indirect, incidental or consequential damages, including lost profits or lost data.",
          "Our total liability for any claim related to the service, however it arises, is limited to the amount you paid for the affected plan during the three months before the claim. We are not responsible for losses caused by third-party software you install, by content you publish, or by the loss of your own credentials.",
        ],
      },
      {
        h: "12. Changes to these terms",
        p: [
          "We may update these terms to reflect changes in the service or in applicable rules. The date at the top of this page always shows the current version, and material changes are also announced by email.",
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
      "Las reglas que aplican al contratar, usar y renovar un plan de hosting de Nubiux: responsabilidades de tu cuenta, facturación, uso aceptable, copias de seguridad y los límites de nuestra responsabilidad.",
    intro:
      "Estos Términos del Servicio son el acuerdo entre tú y Nubiux para el uso de este sitio web y de cualquier plan de hosting que contrates. Al completar un pago o usar el servicio de cualquier otra forma, los aceptas por completo.",
    sections: [
      {
        h: "1. Introducción",
        p: [
          "Estos Términos del Servicio son un acuerdo vinculante entre tú y Nubiux y rigen tu acceso a este sitio web y tu uso de cualquier plan de hosting de Nubiux. Al contratar, completar un pago o usar el servicio de cualquier otra forma, los aceptas por completo.",
        ],
      },
      {
        h: "2. Tu cuenta",
        p: [
          "Debes tener al menos 18 años, o contar con el consentimiento expreso de un padre, madre o tutor legal, para abrir una cuenta en Nubiux.",
          "Aceptas facilitar información exacta, actual y completa al contratar un plan, y mantenerla al día. Podemos solicitar verificación adicional, como un documento de identidad o un comprobante de pago, antes de activar o restablecer un servicio.",
          "Eres responsable de mantener en secreto tus credenciales de cPanel y de facturación, y de toda la actividad realizada con ellas. No compartas tus datos de acceso y contáctanos de inmediato si sospechas un acceso no autorizado.",
          "Una cuenta sin plan activo, renovaciones ni actividad de acceso durante un periodo prolongado puede tratarse como inactiva. Siempre intentamos contactarte en tu correo registrado antes de eliminar cualquier dato asociado.",
        ],
      },
      {
        h: "3. Contratación, activación y pagos",
        p: [
          "Un plan se activa una vez que el pago ha sido recibido y verificado. Podemos denegar o cancelar un pedido, antes o poco después de la activación, si sospechamos razonablemente fraude, abuso o un incumplimiento de estos términos.",
          "Contratar un plan te otorga una licencia de uso sobre los recursos de hosting descritos para ese plan; no transfiere la propiedad de los servidores, el software ni la infraestructura subyacente.",
          "El almacenamiento, los sitios web, las cuentas de correo y demás recursos disponibles son los indicados para tu plan en nuestra página de precios. Usar recursos por encima de lo que incluye tu plan puede requerir una mejora de plan.",
        ],
      },
      {
        h: "4. Facturación, renovaciones y cambios de precio",
        p: [
          "Los planes se facturan por adelantado, de forma mensual o anual, en dólares estadounidenses y a través de PayPal. Los planes anuales se cobran por doce meses al precio con descuento mostrado al momento de pagar.",
          "Los planes se renuevan automáticamente al final de cada periodo de facturación salvo que canceles antes. Si una renovación no se paga en la fecha prevista, la cuenta puede suspenderse y, tras un periodo de gracia adicional, el contenido asociado puede eliminarse de forma permanente.",
          "Podemos cambiar nuestros precios en cualquier momento. Todo cambio se anuncia con antelación y aplica desde tu siguiente renovación, nunca durante un periodo que ya hayas pagado. Si no estás de acuerdo con un nuevo precio, puedes cancelar antes de que entre en vigor.",
        ],
      },
      {
        h: "5. Reembolsos",
        p: [
          "Los pedidos nuevos de hosting están cubiertos por nuestra garantía de devolución de dinero. Consulta nuestra Política de Reembolsos para conocer el plazo exacto, las excepciones que aplican y cómo solicitar uno; las renovaciones y los servicios de terceros comprados a tu solicitud también se gestionan según lo descrito allí.",
          `Escríbenos a ${SUPPORT_EMAIL} con los datos de tu cuenta para iniciar una solicitud.`,
        ],
      },
      {
        h: "6. Copias de seguridad y tu contenido",
        p: [
          "Conservas la propiedad completa de todo lo que subes, y eres responsable de ello. Solo accedemos a los datos de la cuenta cuando es necesario para operar, proteger o dar soporte al servicio, o para responder a un requerimiento legal válido.",
          "Realizamos copias de seguridad automáticas diarias como red de seguridad operativa y hacemos esfuerzos razonables para ayudarte a recuperar datos perdidos si lo solicitas, pero no garantizamos que las copias sean completas, recientes o restaurables en todos los casos. Mantén tus propias copias independientes de cualquier información crítica.",
        ],
      },
      {
        h: "7. Contenido del sitio web y su exactitud",
        p: [
          "Podemos actualizar este sitio web, incluidas las características de los planes, los precios y las políticas, en cualquier momento. Procuramos que sea preciso, pero se ofrece con fines informativos generales y no debería ser tu única fuente antes de una decisión importante; contáctanos si algo necesita aclararse.",
          "Este sitio web puede enlazar a sitios de terceros, como PayPal o nuestra comunidad de Discord. No controlamos ni somos responsables del contenido, la disponibilidad ni las prácticas de sitios que no operamos.",
        ],
      },
      {
        h: "8. Uso aceptable",
        p: [
          "No puedes usar el servicio para alojar o distribuir malware, páginas de phishing, spam o correo masivo no solicitado, listas de correo sin confirmación, herramientas de denegación de servicio, ni contenido que infrinja derechos de autor, marcas u otros derechos de terceros.",
          "No puedes realizar actividades que abusen de los recursos compartidos —minería de criptomonedas desatendida, proxies o relés abiertos, o scripts que saturen CPU, memoria o disco— ni intentar acceder sin autorización a cuentas, datos o sistemas que no sean tuyos.",
          "Eres responsable de cada usuario, script e integración que se ejecute bajo tu cuenta, ya sea que lo operes tú directamente o le des acceso a otra persona.",
          "Podemos eliminar el contenido infractor y suspender o cancelar una cuenta por incumplir esta política. Cuando el impacto en otros clientes lo permite, te contactamos primero; ante abuso activo, malware o contenido ilegal podemos actuar de inmediato y explicarlo después.",
        ],
      },
      {
        h: "9. Disponibilidad del servicio y cambios",
        p: [
          "Nuestro objetivo es un 99,9% de disponibilidad mensual y monitorizamos la infraestructura de forma continua. El mantenimiento programado que pueda causar una interrupción visible se anuncia con antelación.",
          "Podemos modificar, añadir o retirar una función del servicio por motivos operativos, de seguridad o técnicos. Cuando un cambio afecta a un plan activo, avisamos con antelación razonable para que puedas ajustarte o cancelar antes de que entre en vigor.",
        ],
      },
      {
        h: "10. Software y servicios de terceros",
        p: [
          "Tu plan se provee con software de terceros como cPanel, LiteSpeed e Imunify360; su uso también está sujeto a la licencia o los términos propios de ese software.",
          "Los pagos se procesan a través de PayPal. Usar PayPal para pagar un plan de Nubiux también está sujeto al acuerdo de usuario y la política de privacidad propios de PayPal.",
        ],
      },
      {
        h: "11. Limitación de responsabilidad",
        p: [
          "El servicio se presta con criterios comercialmente razonables, sin garantizar que será ininterrumpido o estará libre de errores. En la medida que lo permita la ley aplicable, no somos responsables de daños indirectos, incidentales o consecuentes, incluidos lucro cesante o pérdida de datos.",
          "Nuestra responsabilidad total por cualquier reclamación relacionada con el servicio, sea cual sea su origen, se limita al importe que hayas pagado por el plan afectado durante los tres meses anteriores a la reclamación. No respondemos por pérdidas causadas por software de terceros que instales, por el contenido que publiques o por la pérdida de tus propias credenciales.",
        ],
      },
      {
        h: "12. Cambios en estos términos",
        p: [
          "Podemos actualizar estos términos para reflejar cambios en el servicio o en la normativa aplicable. La fecha en la parte superior de esta página siempre muestra la versión vigente, y los cambios relevantes también se anuncian por correo.",
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
        p: [
          "Este sitio no utiliza cookies publicitarias, rastreadores entre sitios ni píxeles de perfilado.",
        ],
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
