type SectionLabelProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <p
      className={[
        "font-mono text-xs",
        dark ? "text-graphite-400" : "text-graphite-500"
      ].join(" ")}
    >
      {children}
    </p>
  );
}
