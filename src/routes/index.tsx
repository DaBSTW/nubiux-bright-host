import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/nubiux/SiteHeader";
import { Hero } from "@/components/nubiux/Hero";
import { Plans } from "@/components/nubiux/Plans";
import {
  CPanelSection,
  FinalCta,
  Payment,
  Performance,
  Security,
  Softaculous,
  Trust,
  WhyNubiux,
} from "@/components/nubiux/Sections";
import { Faq } from "@/components/nubiux/Faq";
import { SiteFooter } from "@/components/nubiux/SiteFooter";

const TITLE = "Nubiux — Fast, Secure & Reliable Web Hosting";
const DESCRIPTION =
  "Premium SSD web hosting from $35/year with free SSL, cPanel, daily backups, LiteSpeed, Imunify360 and instant activation. PayPal accepted.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nubiux" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Nubiux",
              description: DESCRIPTION,
              areaServed: "Worldwide",
            },
            {
              "@type": "Product",
              name: "Nubiux Web Hosting",
              description: DESCRIPTION,
              brand: { "@type": "Brand", name: "Nubiux" },
              offers: [
                { "@type": "Offer", name: "Basic Plan", price: "35", priceCurrency: "USD" },
                { "@type": "Offer", name: "Standard Plan", price: "65", priceCurrency: "USD" },
                { "@type": "Offer", name: "Premium Plan", price: "120", priceCurrency: "USD" },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does activation take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Activation is instant. As soon as your payment is confirmed you receive your cPanel credentials by email.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer SSL?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, every plan includes free SSL certificates installed and renewed automatically.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you accept PayPal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all payments are securely processed through PayPal.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Plans />
        <Licenses />
        <WhyNubiux />
        <CPanelSection />
        <Softaculous />
        <Security />
        <Performance />
        <Faq />
        <Payment />
        <Trust />
        <FinalCta />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
