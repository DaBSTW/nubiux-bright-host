import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import wordpressLogo from "@/assets/apps/wordpress.svg";
import mascotServer from "@/assets/mascot-server.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { getWordPress } from "@/lib/wordpress";
import { SUPPORT_EMAIL } from "@/lib/legal";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Plans } from "./Plans";
import { Reveal, SectionHeading } from "./Reveal";
import { DecorDots, DecorGrid, DecorOrb } from "./Decor";

const accents = [
  "bg-card-blue text-primary",
  "bg-card-mint text-card-mint-foreground",
  "bg-card-amber text-card-amber-foreground",
  "bg-secondary text-foreground",
];

const bars = ["before:bg-primary", "before:bg-card-mint-foreground", "before:bg-card-amber-foreground", "before:bg-foreground"];

function accent(i: number) {
  return accents[i % accents.length] ?? accents[0]!;
}

function bar(i: number) {
  return bars[i % bars.length] ?? bars[0]!;
}

function WordPressBody() {
  const { lang, t } = useI18n();
  const c = getWordPress(lang);

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-border surface-soft py-16 lg:py-24">
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
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground shadow-[var(--shadow-card)]">
                <img src={wordpressLogo} alt="WordPress" width={16} height={16} className="size-4" />
                {c.badge}
              </span>
              <h1 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                {c.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{c.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
                >
                  {c.ctaPlans}
                </a>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {c.ctaSupport}
                </a>
              </div>
            </div>
            <img
              src={mascotServer}
              alt={t("mascot.alt.server")}
              width={816}
              height={816}
              loading="lazy"
              decoding="async"
              className="mx-auto h-40 w-40 drop-shadow-xl lg:h-56 lg:w-56"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background py-16 lg:py-24">
        <DecorDots className="opacity-50" />
        <DecorOrb className="-left-24 top-1/4 size-72" />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">{c.whatTitle}</h2>
          <div className="mt-5 space-y-4">
            {c.what.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-border surface-soft py-16 lg:py-24">
        <DecorGrid className="opacity-60" />
        <DecorOrb className="-right-20 bottom-0 size-80" soft />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading title={c.whyTitle} subtitle={c.whySubtitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.why.map((w, i) => (
              <Reveal key={w.t} delay={(i % 3) * 80}>
                <article
                  className={`relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-1 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${bar(i)}`}
                >
                  <span className={`inline-flex size-9 items-center justify-center rounded-xl text-sm font-bold ${accent(i)}`}>
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-base font-bold text-foreground">{w.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background py-16 lg:py-24">
        <DecorDots className="opacity-60" />
        <DecorOrb className="-left-16 top-10 size-72" soft />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading title={c.systemsTitle} subtitle={c.systemsSubtitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.systems.map((s, i) => (
              <Reveal key={s.t} delay={(i % 4) * 80}>
                <article className="h-full rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <span className={`inline-flex size-10 items-center justify-center rounded-xl ${accent(i)}`}>
                    <Check className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-foreground">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Plans />

      <section className="relative isolate overflow-hidden border-y border-border surface-soft py-16 lg:py-20">
        <DecorGrid className="opacity-60" />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading title={c.stackTitle} subtitle={c.stackSubtitle} />
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {c.stack.map((item, i) => (
              <Reveal as="li" key={item} delay={(i % 4) * 60}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-card)]">
                  <Check className="size-3.5 text-primary" aria-hidden="true" />
                  {item}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background py-16 lg:py-24">
        <DecorOrb className="-right-28 top-1/3 size-96" soft />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading title={c.faqTitle} />
          <Reveal delay={100} className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {c.faq.map((f) => (
                <AccordionItem
                  key={f.q}
                  value={f.q}
                  className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)]"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background pb-24">
        <DecorOrb className="-left-24 bottom-0 size-80" soft />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="rounded-[2rem] bg-[image:var(--gradient-brand)] px-8 py-14 text-center shadow-[var(--shadow-lift)] sm:px-16">
              <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">{c.ctaTitle}</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/85 sm:text-base">{c.ctaText}</p>
              <a
                href="#plans"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
              >
                {c.ctaPlans}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export function WordPressPage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <WordPressBody />
      <SiteFooter />
    </LanguageProvider>
  );
}
