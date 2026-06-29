type ServiceCardProps = {
  title: string;
  description: string;
  snippet: string;
};

export function ServiceCard({ title, description, snippet }: ServiceCardProps) {
  return (
    <article className="group min-h-64 border border-graphite-200 bg-white/70 p-6 transition hover:border-graphite-400">
      <div
        aria-hidden="true"
        className="font-mono text-[11px] leading-5 text-graphite-400"
      >
        {snippet}
      </div>
      <h3 className="mt-14 text-2xl font-medium text-graphite-950">{title}</h3>
      <p className="mt-4 leading-7 text-graphite-600">{description}</p>
    </article>
  );
}
