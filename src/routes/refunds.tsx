import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/nubiux/LegalPage";

const TITLE = "Refund Policy — Nubiux Web Hosting";
const DESCRIPTION =
  "How Nubiux handles refunds, renewals and cancellations for monthly and annual hosting plans paid through PayPal.";

export const Route = createFileRoute("/refunds")({
  component: () => <LegalPage slug="refunds" />,
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
    links: [{ rel: "canonical", href: "/refunds" }],
  }),
});