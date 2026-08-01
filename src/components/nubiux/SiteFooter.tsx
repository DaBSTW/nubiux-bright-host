import logo from "@/assets/nubiux-logo.png";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  const columns = [
    { title: "footer.company", links: ["footer.about", "footer.contact"] },
    { title: "footer.product", links: ["footer.hosting", "footer.pricing", "footer.faq"] },
    { title: "footer.legal", links: ["footer.privacy", "footer.terms"] },
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
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={t(col.title)}>
              <h3 className="text-sm font-bold text-foreground">{t(col.title)}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href={l === "footer.faq" ? "#faq" : l === "footer.pricing" ? "#plans" : "#top"}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {t(l)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}