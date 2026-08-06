import { Link } from "@tanstack/react-router";
import logo from "@/assets/nubiux-logo.png";
import mascotWave from "@/assets/mascot-wave.png";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  const columns: { title: string; links: { key: string; to: string }[] }[] = [
    {
      title: "footer.company",
      links: [
        { key: "footer.about", to: "/about" },
        { key: "footer.contact", to: "/contact" },
      ],
    },
    {
      title: "footer.product",
      links: [
        { key: "footer.hosting", to: "/#plans" },
        { key: "footer.pricing", to: "/#plans" },
        { key: "footer.faq", to: "/#faq" },
      ],
    },
    {
      title: "footer.legal",
      links: [
        { key: "footer.terms", to: "/terms" },
        { key: "footer.privacy", to: "/privacy" },
        { key: "footer.cookies", to: "/cookies" },
        { key: "footer.refunds", to: "/refunds" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Nubiux" width={28} height={28} loading="lazy" className="size-7" />
              <span className="text-base font-bold text-foreground">Nubiux</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={mascotWave}
                alt={t("mascot.alt.wave")}
                width={816}
                height={816}
                loading="lazy"
                decoding="async"
                className="h-20 w-20"
              />
              <span className="rounded-2xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground">
                {t("mascot.footer")}
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={t(col.title)}>
              <h3 className="text-sm font-bold text-foreground">{t(col.title)}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) =>
                  l.to.startsWith("/#") ? (
                    <li key={l.key}>
                      <a
                        href={l.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t(l.key)}
                      </a>
                    </li>
                  ) : (
                    <li key={l.key}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t(l.key)}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}