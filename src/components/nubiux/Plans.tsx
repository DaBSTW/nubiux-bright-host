import { Check, ShieldCheck, Star } from "lucide-react";
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
  "plans.f.migration",
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

const planStyles = [
  {
    card: "border-border bg-card",
    label: "text-foreground",
    check: "bg-card-blue text-primary",
    button: "border border-border bg-background text-foreground hover:border-primary hover:text-primary",
  },
  {
    card: "border-border bg-card lg:translate-y-2",
    label: "text-foreground",
    check: "bg-card-mint text-card-mint-foreground",
    button: "border border-border bg-background text-foreground hover:border-primary hover:text-primary",
  },
  {
    card: "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-lift)] lg:-translate-y-4",
    label: "text-primary-foreground",
    muted: "text-primary-foreground/75",
    check: "bg-primary-foreground/15 text-primary-foreground",
    divider: "border-primary-foreground/20",
    button: "bg-primary-foreground text-primary shadow-[var(--shadow-card)] hover:bg-card-blue",
  },
  {
    card: "border-2 border-foreground/20 bg-card lg:translate-y-2",
    label: "text-foreground",
    check: "bg-card-amber text-card-amber-foreground",
    button: "bg-foreground text-background hover:opacity-90",
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

        <div className="mt-14 grid items-end gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {plans.map((plan, i) => {
            const style = planStyles[i] ?? planStyles[0];
            return (
            <Reveal key={plan.key} delay={i * 100}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)] lg:p-8",
                  style.card,
                  plan.popular && "lg:pt-11",
                )}
              >
                {plan.popular ? (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[image:var(--gradient-brand)] px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-card)]">
                    <Star className="size-3.5 fill-current" aria-hidden="true" />
                    {t("plans.popular")}
                  </span>
                ) : null}

                <h3 className={cn("text-lg font-bold", style.label)}>{t(plan.key)}</h3>
                <p className={cn("mt-2 text-sm text-muted-foreground", style.muted)}>{t(plan.forKey)}</p>
                <p className="mt-4 flex items-end gap-1.5">
                  <span className={cn("text-5xl font-extrabold tracking-tight text-foreground", style.label)}>
                    ${formatPrice(plan.monthly)}
                  </span>
                  <span className={cn("pb-1.5 text-sm font-medium text-muted-foreground", style.muted)}>
                    {t("plans.month")}
                  </span>
                </p>
                <p className={cn("mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground", style.muted)}>
                  <span>
                    {t("plans.orAnnual")} ${plan.yearly} {t("plans.year")}
                  </span>
                  <span className={cn("rounded-full bg-background/85 px-2.5 py-1 text-xs font-semibold", style.label)}>
                    {t("plans.save")} {Math.round((1 - plan.yearly / (plan.monthly * 12)) * 100)}%
                  </span>
                </p>

                <ul className={cn("mt-7 flex-1 space-y-3.5 border-t border-border pt-7", style.divider)}>
                  {plan.features.map((f) => (
                    <li key={f} className={cn("flex items-start gap-2.5 text-sm text-muted-foreground", style.muted)}>
                      <span className={cn("mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full", style.check)}>
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      <span className={cn("text-foreground", style.label)}>{t(f)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#payment"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5",
                    style.button,
                  )}
                >
                  {t("plans.order")}
                </a>
              </article>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-card)]">
              <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
              {t("plans.guarantee")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("plans.help")}{" "}
              <a
                href="https://discord.gg/nubiux"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {t("plans.helpCta")}
              </a>
            </p>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
