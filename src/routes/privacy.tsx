import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/nubiux/LegalPage";

const TITLE = "Privacy Policy — Nubiux Web Hosting";
const DESCRIPTION =
  "What data Nubiux collects to provide hosting, how it is used, which providers are involved, how long it is kept and how to exercise your rights.";

export const Route = createFileRoute("/privacy")({
  component: () => <LegalPage slug="privacy" />,
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
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});