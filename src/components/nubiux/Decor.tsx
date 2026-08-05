/**
 * Purely decorative background layers used to fill empty whitespace
 * around sections. All layers are aria-hidden and pointer-events-none.
 */
export function DecorGrid({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`deco-grid pointer-events-none absolute inset-0 ${className}`} />;
}

export function DecorDots({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`deco-dots pointer-events-none absolute inset-0 ${className}`} />;
}

export function DecorOrb({
  className = "",
  soft = false,
  float = true,
}: {
  className?: string;
  soft?: boolean;
  float?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${soft ? "deco-orb-soft" : "deco-orb"} ${
        float ? "deco-float" : ""
      } ${className}`}
    />
  );
}