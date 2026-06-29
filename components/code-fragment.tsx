type CodeFragmentProps = {
  snippet: string;
  label?: string;
  tone?: "default" | "hero";
  className?: string;
};

export function CodeFragment({
  snippet,
  label = "fragment",
  tone = "default",
  className = ""
}: CodeFragmentProps) {
  const hero = tone === "hero";

  return (
    <div
      aria-hidden="true"
      className={[
        "border font-mono text-xs leading-6",
        hero
          ? "border-graphite-300 bg-graphite-950 p-5 text-graphite-200 shadow-soft sm:p-6"
          : "border-graphite-200 bg-white/60 p-4 text-graphite-500",
        className
      ].join(" ")}
    >
      <div
        className={[
          "mb-4 flex items-center justify-between border-b pb-3",
          hero ? "border-white/10 text-graphite-400" : "border-graphite-200"
        ].join(" ")}
      >
        <span>{label}</span>
        <span>{"/"}</span>
      </div>
      <pre className="overflow-hidden whitespace-pre-wrap">{snippet}</pre>
    </div>
  );
}
