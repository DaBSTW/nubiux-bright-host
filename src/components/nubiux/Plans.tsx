import { Check, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";
import { DecorGrid, DecorOrb } from "./Decor";

function formatPrice(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

const base = [
  "plans.f.ssl",
  "plans.f.bandwidth",
  "plans.f.cpanel",
  "plans.f.backups",
  "plans.f.email",
  "plans.f.instant",
];

const plans = [
  {
    key: "plans.starter",
    monthly: 3,
    yearly: 30,
    forKey: "plans.for.starter",
    features: ["plans.f.web1", "plans.f.storage5", ...base, "plans.f.support"],
    popular: false,
  },
  {
    key: "plans.emprende",
    monthly: 5,
    yearly: 50,
    forKey: "plans.for.emprende",
    features: ["plans.f.web3", "plans.f.storage10", ...base, "plans.f.support"],
    popular: false,
  },
  {
    key: "plans.pro",
    monthly: 8,
    yearly: 80,
    forKey: "plans.for.pro",
    features: ["plans.f.web5", "plans.f.storage20", ...base, "plans.f.support"],
    popular: true,
  },
  {
    key: "plans.business",
    monthly: 12,
    yearly: 120,
    forKey: "plans.for.business",
    features: ["plans.f.web10", "plans.f.storage35", ...base, "plans.f.priority"],
    popular: false,
  },
];

export function Plans() {
  const { t } = useI18n();

  return (
    <section
      id="plans"
      className="relative isolate scroll-mt-20 overflow-hidden bg-background py-20 lg:py-28"
    >
      <DecorGrid className="opacity-70" />
      <DecorOrb className="left-1/2 top-0 size-[30rem] -translate-x-1/2" soft />
      <DecorOrb className="-right-24 bottom-10 size-80" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title={t("plans.title")} subtitle={t("plans.subtitle")} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {plans.map((plan, i) => (
            <Reveal key={plan.key} delay={i * 100}>
              <article
                className={cn(
                  "card-elevated relative flex h-full flex-col p-7 lg:p-8",
                  plan.popular && "border-primary/40 ring-1 ring-primary/25 lg:-mt-4 lg:pt-11",
                )}
              >
                {plan.popular ? (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[image:var(--gradient-brand)] px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-card)]">
                    <Star className="size-3.5 fill-current" aria-hidden="true" />
                    {t("plans.popular")}
                  </span>
                ) : null}

                <h3 className="text-lg font-bold text-foreground">{t(plan.key)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(plan.forKey)}</p>
                <p className="mt-4 flex items-end gap-1.5">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    ${formatPrice(plan.monthly)}
                  </span>
                  <span className="pb-1.5 text-sm font-medium text-muted-foreground">
                    {t("plans.month")}
                  </span>
                </p>
                <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>
                    {t("plans.orAnnual")} ${plan.yearly} {t("plans.year")}
                  </span>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    {t("plans.save")} {Math.round((1 - plan.yearly / (plan.monthly * 12)) * 100)}%
                  </span>
                </p>

                <ul className="mt-7 flex-1 space-y-3.5 border-t border-border pt-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      <span className="text-foreground">{t(f)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#payment"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5",
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-lift)]"
                      : "border border-border bg-card text-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  {t("plans.order")}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
