import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-cloud.jpg";
import mascotWave from "@/assets/mascot-wave.png";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const badges = ["hero.badge1", "hero.badge2", "hero.badge3", "hero.badge4", "hero.badge5"];

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden surface-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand-light/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-20 sm:pt-24 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-28">
        <div>
          <Reveal delay={80}>
            <h1 className=" text-4xl leading-[1.08] font-extrabold text-foreground sm:text-5xl lg:text-[3.4rem]">
              {t("hero.title.a")}{" "}
              <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
                {t("hero.title.b")}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">{t("hero.subtitle")}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#plans"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              >
                {t("hero.cta1")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {t("hero.cta2")}
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-3">
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {t(b)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative rounded-[2rem] border border-border bg-card p-3 shadow-[var(--shadow-lift)]">
            <img
              src={heroImage}
              alt={t("hero.imageAlt")}
              width={1280}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)]">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <ShieldCheck className="size-4.5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">99.9%</p>
              <p className="text-xs text-muted-foreground">Uptime</p>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-8 right-0 flex items-end gap-2 sm:-right-4">
            <span className="mb-8 hidden rounded-2xl rounded-br-sm border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-[var(--shadow-card)] sm:block">
              {t("mascot.hero")}
            </span>
            <img
              src={mascotWave}
              alt={t("mascot.alt.wave")}
              width={816}
              height={816}
              decoding="async"
              className="h-32 w-32 drop-shadow-xl sm:h-40 sm:w-40"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}