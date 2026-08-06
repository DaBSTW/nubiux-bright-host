import { Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, Mail } from "lucide-react";
import mascotServer from "@/assets/mascot-server.png";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { getContact } from "@/lib/company";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { DecorGrid, DecorDots, DecorOrb } from "./Decor";

function ContactBody() {
  const { lang, t } = useI18n();
  const c = getContact(lang);

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
              src={mascotServer}
              alt={t("mascot.alt.server")}
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
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{c.channelsTitle}</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {c.channels.map((ch) => (
              <article key={ch.email} className="card-elevated flex flex-col p-6">
                <h3 className="text-base font-bold text-foreground sm:text-lg">{ch.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{ch.d}</p>
                <a
                  href={`mailto:${ch.email}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {ch.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-border surface-soft py-16 lg:py-20">
        <DecorDots className="opacity-60" />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
                <Clock className="size-6 text-primary" aria-hidden="true" />
                {c.hoursTitle}
              </h2>
              <ul className="mt-5 space-y-3">
                {c.hours.map((h) => (
                  <li key={h} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated p-6">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">{c.faqTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.faqText}</p>
              <a
                href="/#faq"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
              >
                {c.faqLink}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function ContactPage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <ContactBody />
      <SiteFooter />
    </LanguageProvider>
  );
}