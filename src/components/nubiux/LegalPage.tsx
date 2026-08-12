import { Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { CONTACT_EMAIL, getLegalDoc, LAST_UPDATED, type LegalSlug } from "@/lib/legal";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { DecorGrid, DecorOrb } from "./Decor";

function LegalBody({ slug }: { slug: LegalSlug }) {
  const { lang } = useI18n();
  const doc = getLegalDoc(lang, slug);
  const formatted = new Date(LAST_UPDATED[slug]).toLocaleDateString(
    lang === "es" ? "es-ES" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-border surface-soft py-16 lg:py-20">
        <DecorGrid className="opacity-70" />
        <DecorOrb className="-right-24 top-0 size-80" soft />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {doc.backLabel}
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            {doc.title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{doc.intro}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {doc.updatedLabel}: {formatted}
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background py-16 lg:py-20">
        <DecorOrb className="-left-24 top-1/3 size-72" />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <div className="rounded-2xl border border-border bg-secondary px-5 py-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{doc.noticeLabel}: </span>
              {doc.notice}
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section) => (
              <article key={section.h}>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">{section.h}</h2>
                <div className="mt-3 space-y-3">
                  {section.p.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="card-elevated mt-12 flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-foreground">{doc.contactLabel}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export function LegalPage({ slug }: { slug: LegalSlug }) {
  return (
    <LanguageProvider>
      <SiteHeader />
      <LegalBody slug={slug} />
      <SiteFooter />
    </LanguageProvider>
  );
}
