import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const KEY = "nubiux-cookie-consent";

export function CookieConsent() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const decide = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookie.title")}
      className="fixed bottom-20 left-4 right-4 z-[70] mx-auto max-w-md rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-lift)] md:bottom-5 md:left-5 md:right-auto"
    >
      <p className="text-sm font-bold text-foreground">{t("cookie.title")}</p>
      <p className="mt-2 text-sm text-muted-foreground">{t("cookie.desc")}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => decide("all")}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          {t("cookie.accept")}
        </button>
        <button
          type="button"
          onClick={() => decide("essential")}
          className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
        >
          {t("cookie.reject")}
        </button>
        <Link
          to="/cookies"
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          {t("cookie.more")}
        </Link>
      </div>
    </div>
  );
}
