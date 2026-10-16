import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Archive, Building2, Check, Code2, Cpu, Gamepad2, HardDrive, Headset, Menu, Network, ShieldCheck, ShoppingCart, Star, Terminal, TriangleAlert, Turtle, X } from "lucide-react";
import logo from "@/assets/nubiux-logo.webp";
import mascotServer from "@/assets/mascot-server.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { getVps } from "@/lib/vps";
import { SUPPORT_EMAIL } from "@/lib/legal";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";
import { DecorDots, DecorGrid, DecorOrb } from "./Decor";

const DISCORD = "https://discord.gg/nubiux";
const painIcons = [Turtle, TriangleAlert, ShieldCheck];
const caseIcons = [ShoppingCart, Code2, Gamepad2, Building2];
const featureIcons = [HardDrive, Cpu, Network, Terminal, Archive, Headset];
const accents = [
  "bg-card-blue text-primary",
  "bg-card-mint text-card-mint-foreground",
  "bg-card-amber text-card-amber-foreground",
];
const accent = (i: number) => accents[i % accents.length] ?? accents[0]!;

function VpsHeader() {
  const { lang, setLang } = useI18n();
  const c = getVps(lang).nav;
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#features", label: c.features },
    { href: "#pricing", label: c.pricing },
    { href: "#cases", label: c.cases },
    { href: DISCORD, label: c.support },
  ];
  const langBtn = (
    <button
      type="button"
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold uppercase text-muted-foreground hover:text-foreground"
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Nubiux" width={32} height={32} className="size-8" />
          <span className="text-lg font-bold tracking-tight text-foreground">Nubiux <span className="text-primary">VPS</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="VPS">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-flex">{langBtn}</span>
          <a href="#" className="hidden text-sm font-semibold text-foreground hover:text-primary sm:inline-flex">{c.login}</a>
          <a href="#pricing" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 sm:inline-flex">{c.cta}</a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">{l.label}</a>
          ))}
          <a href="#" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">{c.login}</a>
          <div className="mt-3 border-t border-border px-3 pt-3">{langBtn}</div>
        </nav>
      ) : null}
    </header>
  );
}

function fmt(n: number) {
  return n.toFixed(2);
}

function VpsBody() {
  const { lang } = useI18n();
  const c = getVps(lang);
  const [yearly, setYearly] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden surface-soft py-16 lg:py-24">
        <DecorGrid className="opacity-70" />
        <DecorOrb className="-right-24 top-0 size-96" soft />
        <DecorOrb className="-left-20 bottom-0 size-72" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <span className="inline-flex rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground shadow-[var(--shadow-card)]">{c.hero.pre}</span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl">
              {c.hero.title} <span className="text-primary">{c.hero.titleAccent}</span>
            </h1>
            <h2 className="mt-5 max-w-2xl text-base font-normal text-muted-foreground sm:text-lg">{c.hero.sub}</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5">{c.hero.cta}</a>
              <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">{c.hero.cta2}</a>
            </div>
            <ul className="mt-7 flex flex-col gap-2 text-sm text-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
              {c.hero.seals.map((s) => (
                <li key={s} className="flex items-center gap-2"><Check className="size-4 text-primary" />{s}</li>
              ))}
            </ul>
          </div>
          <Reveal className="relative">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-lift)]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-foreground">vps-01 · Ubuntu 24.04</span>
                <span className="rounded-full bg-card-mint px-2.5 py-1 text-xs font-bold text-card-mint-foreground">● Online</span>
              </div>
              {[["CPU", 34], ["RAM", 52], ["NVMe", 21]].map(([k, v]) => (
                <div key={k} className="mt-5">
                  <div className="flex justify-between text-xs text-muted-foreground"><span>{k}</span><span>{v}%</span></div>
                  <div className="mt-1.5 h-2 rounded-full bg-secondary"><div className="h-2 rounded-full bg-[image:var(--gradient-brand)]" style={{ width: `${v}%` }} /></div>
                </div>
              ))}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[["99.99%", "Uptime"], ["10Gbps", "Network"], ["<60s", "Deploy"]].map(([a, b]) => (
                  <div key={b} className="rounded-xl bg-secondary p-3"><p className="text-sm font-bold text-foreground">{a}</p><p className="text-[11px] text-muted-foreground">{b}</p></div>
                ))}
              </div>
            </div>
            <img src={mascotServer} alt="Nubi" width={816} height={816} className="absolute -bottom-10 -left-10 hidden h-32 w-32 lg:block" />
          </Reveal>
        </div>
      </section>

      {/* Pain vs solution */}
      <section className="relative border-t border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading title={c.pain.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.pain.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className={cn("h-full rounded-2xl border p-7 shadow-[var(--shadow-card)]", i === 2 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card")}>
                  {(() => { const I = painIcons[i] ?? ShieldCheck; return <span className={cn("inline-flex size-12 items-center justify-center rounded-xl", i === 2 ? "bg-primary-foreground/15 text-primary-foreground" : i === 0 ? "bg-card-amber text-card-amber-foreground" : "bg-destructive/10 text-destructive")}><I className="size-6" strokeWidth={1.75} /></span>; })()}
                  <h3 className={cn("mt-4 text-lg font-bold", i === 2 ? "text-primary-foreground" : "text-foreground")}>{p.title}</h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", i === 2 ? "text-primary-foreground/80" : "text-muted-foreground")}>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative isolate scroll-mt-20 overflow-hidden border-t border-border surface-soft py-20">
        <DecorDots className="opacity-50" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading title={c.features.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.items.map((f, i) => {
              const Icon = featureIcons[i] ?? Cpu;
              return (
                <Reveal key={f.title} delay={(i % 3) * 100}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                    <span className={cn("inline-flex size-11 items-center justify-center rounded-xl", accent(i))}><Icon className="size-5" /></span>
                    <h3 className="mt-4 text-base font-bold text-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="cases" className="scroll-mt-20 border-t border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading title={c.cases.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.cases.items.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <div className={cn("h-full rounded-2xl border border-border p-7", accent(i + 1), i === 3 && "bg-secondary text-foreground")}>
                  {(() => { const I = caseIcons[i] ?? Code2; return <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[var(--shadow-card)]"><I className="size-6" strokeWidth={1.75} /></span>; })()}
                  <h3 className="mt-5 text-base font-bold text-foreground">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{u.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative isolate scroll-mt-20 overflow-hidden border-t border-border surface-soft py-20 lg:py-28">
        <DecorGrid className="opacity-60" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading title={c.pricing.title} />
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-border bg-card p-1 shadow-[var(--shadow-card)]">
              {[false, true].map((y) => (
                <button key={String(y)} type="button" onClick={() => setYearly(y)} aria-pressed={yearly === y}
                  className={cn("rounded-full px-5 py-2 text-sm font-semibold transition-colors", yearly === y ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>
                  {y ? c.pricing.yearly : c.pricing.monthly}
                  {y ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[11px]", yearly ? "bg-primary-foreground/20" : "bg-card-mint text-card-mint-foreground")}>{c.pricing.free}</span> : null}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-14 grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.pricing.plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className={cn("relative flex flex-col rounded-2xl border p-8 shadow-[var(--shadow-card)]",
                  p.popular ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-lift)] md:scale-105" : "border-border bg-card")}>
                  {p.popular ? (
                    <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[image:var(--gradient-brand)] px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-[var(--shadow-card)]">
                      <Star className="size-3.5 fill-current" />{c.pricing.popular}
                    </span>
                  ) : null}
                  <h3 className={cn("text-lg font-bold tracking-wide", p.popular ? "text-primary-foreground" : "text-foreground")}>{p.name}</h3>
                  <p className={cn("mt-1 text-sm", p.popular ? "text-primary-foreground/75" : "text-muted-foreground")}>{p.sub}</p>
                  <p className="mt-5 flex items-end gap-1.5">
                    <span className={cn("text-4xl font-extrabold", p.popular ? "text-primary-foreground" : "text-foreground")}>${fmt(yearly ? p.monthly * 10 : p.monthly)}</span>
                    <span className={cn("pb-1 text-sm", p.popular ? "text-primary-foreground/75" : "text-muted-foreground")}>{yearly ? c.pricing.year : c.pricing.month}</span>
                  </p>
                  <ul className={cn("mt-6 space-y-3 border-t pt-6", p.popular ? "border-primary-foreground/20" : "border-border")}>
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm">
                        <span className={cn("inline-flex size-5 items-center justify-center rounded-full", p.popular ? "bg-primary-foreground/15" : "bg-card-blue text-primary")}><Check className="size-3" /></span>
                        <span className={p.popular ? "text-primary-foreground" : "text-foreground"}>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={DISCORD} target="_blank" rel="noopener noreferrer" className={cn("mt-8 inline-flex justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                    p.popular ? "bg-primary-foreground text-primary" : "border border-border bg-background text-foreground hover:border-primary hover:text-primary")}>{p.cta}</a>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">*{c.pricing.note}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading title={c.reviews.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.reviews.items.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <div className="flex gap-0.5 text-primary">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}</div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">“{r.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className={cn("inline-flex size-10 items-center justify-center rounded-full text-sm font-bold", accent(i))}>{r.name.charAt(0)}</span>
                    <span><span className="block text-sm font-bold text-foreground">{r.name}</span><span className="block text-xs text-muted-foreground">{r.role}</span></span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border surface-soft py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading title={c.faq.title} />
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {c.faq.items.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)]">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-background sm:text-4xl">{c.final.title}</h2>
          <p className="mt-4 text-background/75">{c.final.sub}</p>
          <a href="#pricing" className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5">{c.final.cta}</a>
          <p className="mt-4 text-xs text-background/60">{c.final.note}</p>
        </div>
      </section>
    </main>
  );
}

function VpsFooter() {
  const { lang } = useI18n();
  const f = getVps(lang).footer;
  const cols = [
    { title: f.products, links: f.productLinks.map((l, i) => ({ l, href: ["/vps", "/contact", "/#plans", "/contact"][i]! })) },
    { title: f.support, links: f.supportLinks.map((l, i) => ({ l, href: [DISCORD, DISCORD, "/contact", "/contact"][i]! })) },
    { title: f.legal, links: f.legalLinks.map((l, i) => ({ l, href: ["/terms", "/privacy", "/terms", "/terms"][i]! })) },
  ];
  return (
    <footer className="border-t border-background/10 bg-foreground text-background/70">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Nubiux" width={28} height={28} className="size-7" />
              <span className="font-bold text-background">Nubiux</span>
            </div>
            <p className="mt-4 text-sm">{f.desc}</p>
            <div className="mt-5 flex gap-3 text-sm">
              <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="hover:text-background">Discord</a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-background">Email</a>
            </div>
          </div>
          {cols.map((c) => (
            <nav key={c.title}>
              <h3 className="text-sm font-bold text-background">{c.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((x) => <li key={x.l}><a href={x.href} className="hover:text-background">{x.l}</a></li>)}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-background/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nubiux. {f.rights}</p>
          <div className="flex flex-wrap items-center gap-2">
            <span>{f.pay}</span>
            {["VISA", "Mastercard", "PayPal", "Crypto"].map((m) => (
              <span key={m} className="rounded-md border border-background/20 px-2 py-1 font-bold text-background">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function VpsPage() {
  return (
    <LanguageProvider>
      <VpsHeader />
      <VpsBody />
      <VpsFooter />
    </LanguageProvider>
  );
}
