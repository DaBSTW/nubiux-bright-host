import { createFileRoute } from "@tanstack/react-router";
import { WordPressPage } from "@/components/nubiux/WordPressPage";

const TITLE = "WordPress Hosting — Fast, Secure & One-Click Install | Nubiux";
const DESCRIPTION =
  "Optimized WordPress hosting on NVMe servers with LiteSpeed cache, free SSL, daily backups, Imunify360 security and free migration. One-click install from cPanel.";

export const Route = createFileRoute("/wordpress")({
  component: () => <WordPressPage />,
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
    links: [{ rel: "canonical", href: "/wordpress" }],
  }),
});
