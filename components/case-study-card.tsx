type CaseStudyCardProps = {
  title: string;
  description: string;
  meta: string;
};

export function CaseStudyCard({ title, description, meta }: CaseStudyCardProps) {
  return (
    <article className="min-h-72 border border-graphite-200 bg-graphite-50/60 p-6 transition hover:border-graphite-400">
      <p className="font-mono text-xs text-graphite-500">{meta}</p>
      <h3 className="mt-16 text-2xl font-medium text-graphite-950">{title}</h3>
      <p className="mt-4 leading-7 text-graphite-600">{description}</p>
    </article>
  );
}
