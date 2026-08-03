import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "./Reveal";

const reviews = ["rev.1", "rev.2", "rev.3", "rev.4", "rev.5", "rev.6"];

function Stars({ size = "size-6" }: { size?: string }) {
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`inline-flex ${size} items-center justify-center rounded-[3px] bg-[#00b67a]`}>
          <Star className="size-[60%] fill-white text-white" />
        </span>
      ))}
    </span>
  );
}

function TrustpilotMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#00b67a" aria-hidden="true">
      <path d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.83 8.714 7.422-5.388 4.583-3.326L24 9.311z" />
    </svg>
  );
}

function TrustpilotWordmark({ className = "h-6" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <TrustpilotMark />
      <span className="text-lg font-bold tracking-tight text-foreground">Trustpilot</span>
    </span>
  );
}

export function Reviews() {
  const { t } = useI18n();

  return (
    <section id="reviews" className="scroll-mt-20 border-y border-border surface-soft py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title={t("rev.title")} subtitle={t("rev.subtitle")} />

        <Reveal delay={80} className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4">
          <div className="card-elevated flex w-full flex-col items-center gap-3 px-6 py-6 text-center">
            <TrustpilotWordmark />
            <Stars />
            <p className="text-sm font-semibold text-foreground">
              {t("rev.score")} <span className="text-muted-foreground">· {t("rev.count")}</span>
            </p>
            <a
              href="https://www.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {t("rev.cta")}
            </a>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r} delay={(i % 3) * 80}>
              <article className="card-elevated flex h-full flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <Stars size="size-4" />
                  <TrustpilotMark className="size-4" />
                </div>
                <h3 className="text-base font-bold text-foreground">{t(`${r}.h`)}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{t(`${r}.d`)}</p>
                <footer className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {t(`${r}.n`).charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-foreground">{t(`${r}.n`)}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {t(`${r}.r`)} · {t("rev.verified")}
                    </span>
                  </span>
                </footer>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
