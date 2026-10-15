import { createFileRoute } from "@tanstack/react-router";
import { VpsPage } from "@/components/nubiux/VpsPage";

const TITLE = "VPS Premium NVMe con CPU dedicada y Anti-DDoS | Nubiux";
const DESCRIPTION =
  "VPS premium desde $12.99/mes: NVMe, vCPU dedicada, red 10Gbps, Anti-DDoS, backups diarios, acceso root y soporte 24/7. Despliegue en menos de 60 segundos.";

export const Route = createFileRoute("/vps")({
  component: () => <VpsPage />,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/vps" }],
  }),
});
