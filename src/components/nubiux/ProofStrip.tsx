import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const stats = ["proof.stat1", "proof.stat2", "proof.stat3", "proof.stat4"];

export function ProofStrip() {
  const { t } = useI18n();

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex size-4 items-center justify-center rounded-[3px] bg-[#00b67a]"
              >
                <Star className="size-[60%] fill-white text-white" />
              </span>
            ))}
          </span>
          <span className="text-sm font-semibold text-foreground">{t("proof.rating")}</span>
          <span className="text-sm text-muted-foreground">· {t("proof.count")}</span>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 lg:gap-x-10">
          {stats.map((s) => (
            <div key={s}>
              <dt className="text-base font-extrabold text-foreground">{t(`${s}.v`)}</dt>
              <dd className="text-xs text-muted-foreground">{t(`${s}.l`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
