import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

const items = ["faq.1", "faq.2", "faq.3", "faq.4", "faq.5", "faq.6"];

export function Faq() {
  const { t } = useI18n();
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border surface-soft py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading title={t("faq.title")} subtitle={t("faq.subtitle")} />
        <Reveal delay={100} className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item) => (
              <AccordionItem
                key={item}
                value={item}
                className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-card)]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {t(`${item}.q`)}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {t(`${item}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}