import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/nubiux/ContactPage";

const TITLE = "Contact Nubiux — Sales & 24/7 Hosting Support";
const DESCRIPTION =
  "Contact the Nubiux team: sales and migration questions, 24/7 technical support for cPanel, email and SSL, plus legal and privacy requests.";

export const Route = createFileRoute("/contact")({
  component: () => <ContactPage />,
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
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});