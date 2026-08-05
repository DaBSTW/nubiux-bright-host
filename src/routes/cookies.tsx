import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/nubiux/LegalPage";

const TITLE = "Cookie Policy — Nubiux Web Hosting";
const DESCRIPTION =
  "Which cookies and browser storage the Nubiux website uses, what they are for, what we never use and how to control them.";

export const Route = createFileRoute("/cookies")({
  component: () => <LegalPage slug="cookies" />,
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
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
});