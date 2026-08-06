import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/nubiux/AboutPage";

const TITLE = "About Nubiux — The Team Behind Your Hosting";
const DESCRIPTION =
  "Meet Nubiux: a small hosting team building fast SSD cPanel hosting with honest pricing, security by default and 24/7 human support.";

export const Route = createFileRoute("/about")({
  component: () => <AboutPage />,
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
    links: [{ rel: "canonical", href: "/about" }],
  }),
});