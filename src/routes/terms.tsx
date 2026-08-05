import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/nubiux/LegalPage";

const TITLE = "Terms of Service — Nubiux Web Hosting";
const DESCRIPTION =
  "The rules that apply when you order, use and renew a Nubiux hosting plan: billing, acceptable use, backups, support and cancellation.";

export const Route = createFileRoute("/terms")({
  component: () => <LegalPage slug="terms" />,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nubiux" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});