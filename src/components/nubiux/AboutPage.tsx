import { Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import mascotWave from "@/assets/mascot-wave.png";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { getAbout, SALES_EMAIL } from "@/lib/company";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { DecorGrid, DecorDots, DecorOrb } from "./Decor";

function AboutBody() {
  const { lang, t } = useI18n();
  const c = getAbout(lang);

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-border surface-soft py-16 lg:py-20">
        <DecorGrid className="opacity-70" />
        <DecorOrb className="-right-24 top-0 size-80" soft />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {c.back}
          </Link>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                {c.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{c.intro}</p>
            </div>
            <img
              src={mascotWave}
              alt={t("mascot.alt.wave")}
              width={816}
              height={816}
              loading="lazy"
              decoding="async"
              className="mx-auto h-40 w-40 lg:h-52 lg:w-52"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background py-16 lg:py-20">
        <DecorOrb className="-left-24 top-1/4 size-72" />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{c.storyTitle}</h2>
          <div className="mt-4 max-w-3xl space-y-3">
            {c.story.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p}
              </p>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-bold text-foreground sm:text-3xl">{c.statsTitle}</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.stats.map((s) => (
              <div key={s.l} className="card-elevated p-5">
                <dt className="text-2xl font-bold text-primary sm:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-border surface-soft py-16 lg:py-20">
        <DecorDots className="opacity-60" />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{c.valuesTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {c.values.map((v) => (
              <article key={v.t} className="card-elevated p-6">
                <h3 className="text-base font-bold text-foreground sm:text-lg">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background py-16 lg:py-20">
        <DecorOrb className="-right-20 bottom-0 size-72" soft />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{c.ctaTitle}</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{c.ctaText}</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/#plans"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              {c.ctaPlans}
            </a>
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="size-4" aria-hidden="true" />
              {c.ctaContact}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export function AboutPage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <AboutBody />
      <SiteFooter />
    </LanguageProvider>
  );
}