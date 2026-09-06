import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const DISCORD_INVITE = "https://discord.gg/nubiux";

function DiscordMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

export function DiscordWidget() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const bullets = ["discord.b1", "discord.b2", "discord.b3"];

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed bottom-24 right-5 z-[60] md:bottom-5 flex flex-col items-end gap-3"
    >
      <div
        className={cn(
          "pointer-events-none w-[19rem] max-w-[calc(100vw-2.5rem)] origin-bottom-right overflow-hidden rounded-2xl bg-[#313338] text-[#dbdee1] shadow-[0_18px_50px_-12px_rgba(0,0,0,0.55)] ring-1 ring-black/20 transition-all duration-200",
          open ? "pointer-events-auto scale-100 opacity-100" : "scale-95 opacity-0",
        )}
        role="dialog"
        aria-label={t("discord.title")}
        aria-hidden={!open}
      >
        <div className="relative flex items-center gap-3 bg-[#5865F2] px-4 py-4 text-white">
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/15">
            <DiscordMark className="size-5" />
          </span>
          <div className="pr-6">
            <p className="text-sm font-bold leading-tight">{t("discord.title")}</p>
            <p className="mt-0.5 text-[11px] font-medium text-white/80">{t("discord.members")}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("discord.close")}
            className="absolute right-3 top-3 inline-flex size-6 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X className="size-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-4 py-4">
          <p className="text-[13px] leading-relaxed text-[#b5bac1]">{t("discord.desc")}</p>
          <ul className="mt-3 space-y-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-[12.5px] font-medium text-[#dbdee1]"
              >
                <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-[#23a559] text-white">
                  <Check className="size-2.5" aria-hidden="true" />
                </span>
                {t(b)}
              </li>
            ))}
          </ul>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4752c4]"
          >
            <DiscordMark className="size-4" />
            {t("discord.cta")}
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t("discord.open")}
        title={t("discord.open")}
        className="pointer-events-auto inline-flex size-14 items-center justify-center rounded-full bg-[#5865F2] text-white shadow-[0_12px_30px_-8px_rgba(88,101,242,0.75)] transition-transform duration-200 hover:scale-105 hover:bg-[#4752c4] active:scale-95"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <DiscordMark className="size-7" />}
      </button>
    </div>
  );
}
