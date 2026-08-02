import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import logo from "@/assets/nubiux-logo.png";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const links = [
  { href: "#plans", key: "nav.plans" },
  { href: "#features", key: "nav.features" },
  { href: "#security", key: "nav.security" },
  { href: "#faq", key: "nav.faq" },
];

function LangSwitch() {
  const { lang, setLang } = useI18n();
  const options: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];
  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border bg-secondary p-1"
      role="group"
      aria-label="Language selector"
    >
      <Globe className="ml-1.5 size-3.5 text-muted-foreground" aria-hidden="true" />
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
            lang === o.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o.code === "en" ? "🇺🇸 " : "🇪🇸 "}
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-18 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Nubiux" width={32} height={32} className="size-8" />
          <span className="text-lg font-bold tracking-tight text-foreground">Nubiux</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href="#plans"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t("nav.cta")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}