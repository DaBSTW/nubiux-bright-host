import {
  Activity,
  Bug,
  Check,
  CloudCog,
  Database,
  FolderOpen,
  Gauge,
  Globe2,
  HardDrive,
  Headphones,
  KeyRound,
  Lock,
  Mail,
  MousePointerClick,
  RefreshCcw,
  RotateCcw,
  Rocket,
  Server,
  ServerCog,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import cpanelImage from "@/assets/cpanel-dashboard.webp";
import mascotShield from "@/assets/mascot-shield.webp";
import mascotServer from "@/assets/mascot-server.webp";
import wordpressLogo from "@/assets/apps/wordpress.svg";
import joomlaLogo from "@/assets/apps/joomla.svg";
import drupalLogo from "@/assets/apps/drupal.svg";
import prestashopLogo from "@/assets/apps/prestashop.svg";
import woocommerceLogo from "@/assets/apps/woocommerce.svg";
import phpbbLogo from "@/assets/apps/phpbb.svg";
import laravelLogo from "@/assets/apps/laravel.svg";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";
import { DecorDots, DecorGrid, DecorOrb } from "./Decor";

function IconTile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span className={`inline-flex size-11 items-center justify-center rounded-xl ${className ?? "bg-accent text-accent-foreground"}`}>
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}

const featureStyles = [
  { card: "border-border bg-card", icon: "bg-card-blue text-primary", accent: "before:bg-primary" },
  { card: "border-border bg-card", icon: "bg-card-mint text-card-mint-foreground", accent: "before:bg-card-mint-foreground" },
  { card: "border-border bg-card", icon: "bg-card-amber text-card-amber-foreground", accent: "before:bg-card-amber-foreground" },
  { card: "border-border bg-card", icon: "bg-secondary text-foreground", accent: "before:bg-foreground" },
];

const bentoSpans = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2", "lg:col-span-2"];

function getFeatureStyle(index: number) {
  return featureStyles[index % featureStyles.length] ?? featureStyles[0];
}

function getBentoSpan(index: number) {
  return bentoSpans[index] ?? "lg:col-span-1";
}

const why: { key: string; icon: LucideIcon }[] = [
  { key: "why.1", icon: HardDrive },
  { key: "why.2", icon: ShieldCheck },
  { key: "why.3", icon: Globe2 },
  { key: "why.4", icon: Rocket },
  { key: "why.5", icon: ShieldAlert },
  { key: "why.6", icon: Activity },
  { key: "why.7", icon: RotateCcw },
  { key: "why.8", icon: Headphones },
];

export function WhyNubiux() {
  const { t } = useI18n();
  return (
    <section id="features" className="relative isolate scroll-mt-20 overflow-hidden bg-background py-20 lg:py-28">
      <DecorGrid className="opacity-70" />
      <DecorOrb className="-left-24 top-10 size-72" soft />
      <DecorOrb className="-right-20 bottom-0 size-80" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title={t("why.title")} subtitle={t("why.subtitle")} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => {
            const style = getFeatureStyle(i);
            return (
            <Reveal key={w.key} delay={(i % 4) * 80} className={getBentoSpan(i)}>
              <article className={`relative h-full overflow-hidden rounded-xl border p-6 shadow-[var(--shadow-card)] before:absolute before:inset-y-0 before:left-0 before:w-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${style.card} ${style.accent}`}>
                <IconTile icon={w.icon} className={style.icon} />
                <h3 className="mt-5 text-base font-bold text-foreground">{t(`${w.key}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`${w.key}.d`)}</p>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const cpanelItems: { key: string; icon: LucideIcon }[] = [
  { key: "cpanel.1", icon: Globe2 },
  { key: "cpanel.2", icon: MousePointerClick },
  { key: "cpanel.3", icon: Mail },
  { key: "cpanel.4", icon: Database },
  { key: "cpanel.5", icon: RotateCcw },
  { key: "cpanel.6", icon: FolderOpen },
];

export function CPanelSection() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden border-y border-border surface-soft py-20 lg:py-28">
      <DecorDots className="opacity-60" />
      <DecorOrb className="-right-28 top-1/4 size-96" soft />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            title={t("cpanel.title")}
            subtitle={t("cpanel.subtitle")}
          />
          <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
            {cpanelItems.map((c, i) => (
              <Reveal as="li" key={c.key} delay={i * 60} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <c.icon className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-foreground">{t(c.key)}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={120}>
          <img
            src={cpanelImage}
            alt={t("cpanel.imageAlt")}
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-3xl border border-border shadow-[var(--shadow-lift)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

const apps: { name: string; logo: string }[] = [
  { name: "WordPress", logo: wordpressLogo },
  { name: "Joomla", logo: joomlaLogo },
  { name: "Drupal", logo: drupalLogo },
  { name: "PrestaShop", logo: prestashopLogo },
  { name: "WooCommerce", logo: woocommerceLogo },
  { name: "phpBB", logo: phpbbLogo },
  { name: "Laravel", logo: laravelLogo },
];

export function Softaculous() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden bg-background py-20 lg:py-28">
      <DecorOrb className="left-1/2 top-0 size-[26rem] -translate-x-1/2" soft />
      <DecorDots className="opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title={t("soft.title")} subtitle={t("soft.subtitle")} />
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {apps.map((app, i) => (
            <Reveal as="li" key={app.name} delay={i * 60}>
              <div className="card-elevated flex h-full flex-col items-center gap-3 px-4 py-6 text-center">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent">
                  <img
                    src={app.logo}
                    alt={`${app.name} logo`}
                    width={28}
                    height={28}
                    loading="lazy"
                    decoding="async"
                    className="size-7"
                  />
                </span>
                <span className="text-sm font-semibold text-foreground">{app.name}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const security: { key: string; icon: LucideIcon }[] = [
  { key: "sec.1", icon: ShieldAlert },
  { key: "sec.2", icon: ServerCog },
  { key: "sec.3", icon: KeyRound },
  { key: "sec.4", icon: Lock },
  { key: "sec.5", icon: ShieldCheck },
  { key: "sec.6", icon: Bug },
  { key: "sec.7", icon: RefreshCcw },
];

export function Security() {
  const { t } = useI18n();
  return (
    <section
      id="security"
      className="relative isolate scroll-mt-20 overflow-hidden border-y border-border surface-soft py-20 lg:py-28"
    >
      <DecorGrid className="opacity-60" />
      <DecorOrb className="-left-24 top-1/3 size-80" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title={t("sec.title")} subtitle={t("sec.subtitle")} />
        <Reveal className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <img
            src={mascotShield}
            alt={t("mascot.alt.shield")}
            width={816}
            height={816}
            loading="lazy"
            decoding="async"
            className="h-32 w-32 drop-shadow-xl sm:h-40 sm:w-40"
          />
          <span className="rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-[var(--shadow-card)]">
            {t("mascot.security")}
          </span>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {security.map((s, i) => {
            const style = getFeatureStyle(i);
            return (
            <Reveal key={s.key} delay={(i % 4) * 80} className={getBentoSpan(i)}>
              <article className={`relative h-full overflow-hidden rounded-xl border p-6 shadow-[var(--shadow-card)] before:absolute before:inset-y-0 before:left-0 before:w-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${style.card} ${style.accent}`}>
                <IconTile icon={s.icon} className={style.icon} />
                <h3 className="mt-5 text-base font-bold text-foreground">{t(`${s.key}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`${s.key}.d`)}</p>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const perf: { key: string; icon: LucideIcon }[] = [
  { key: "perf.1", icon: Zap },
  { key: "perf.2", icon: CloudCog },
  { key: "perf.3", icon: HardDrive },
  { key: "perf.4", icon: Server },
  { key: "perf.5", icon: Gauge },
  { key: "perf.6", icon: Rocket },
  { key: "perf.7", icon: TrendingUp },
];

export function Performance() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden bg-background py-20 lg:py-28">
      <DecorDots className="opacity-60" />
      <DecorOrb className="-right-24 top-8 size-80" soft />
      <DecorOrb className="-left-16 bottom-4 size-72" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title={t("perf.title")} subtitle={t("perf.subtitle")} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perf.map((p, i) => {
            const style = getFeatureStyle(i + 1);
            return (
            <Reveal key={p.key} delay={(i % 4) * 80} className={getBentoSpan(i)}>
              <article className={`relative h-full overflow-hidden rounded-xl border p-6 shadow-[var(--shadow-card)] before:absolute before:inset-y-0 before:left-0 before:w-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${style.card} ${style.accent}`}>
                <IconTile icon={p.icon} className={style.icon} />
                <h3 className="mt-5 text-base font-bold text-foreground">{t(`${p.key}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`${p.key}.d`)}</p>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Payment() {
  const { t } = useI18n();
  return (
    <section
      id="payment"
      className="relative isolate scroll-mt-20 overflow-hidden border-y border-border surface-soft py-20 lg:py-24"
    >
      <DecorGrid className="opacity-70" />
      <DecorOrb className="left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2" soft />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <div className="card-elevated mx-auto flex flex-col items-center gap-6 px-8 py-12">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png"
              alt="PayPal"
              width={200}
              height={52}
              loading="lazy"
              decoding="async"
              className="h-9 w-auto"
            />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t("pay.title")}</h2>
            <p className="max-w-lg text-sm text-muted-foreground sm:text-base">{t("pay.subtitle")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const trust = ["trust.1", "trust.2", "trust.3", "trust.4", "trust.5", "trust.6"];

export function Trust() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden bg-background py-20 lg:py-24">
      <DecorDots className="opacity-50" />
      <DecorOrb className="-right-20 top-1/4 size-72" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title={t("trust.title")} subtitle={t("trust.subtitle")} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((item, i) => (
            <Reveal as="li" key={item} delay={(i % 3) * 80}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-secondary px-5 py-4">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-foreground">{t(item)}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden bg-background pb-24">
      <DecorOrb className="-left-24 bottom-0 size-80" soft />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[image:var(--gradient-brand)] px-8 py-16 text-center shadow-[var(--shadow-lift)] sm:px-16">
            <img
              src={mascotServer}
              alt={t("mascot.alt.server")}
              width={816}
              height={816}
              loading="lazy"
              decoding="async"
              className="mx-auto mb-6 h-32 w-32 drop-shadow-xl sm:h-40 sm:w-40"
            />
            <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">{t("cta.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/85 sm:text-base">
              {t("cta.subtitle")}
            </p>
            <a
              href="#plans"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
            >
              {t("cta.button")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}