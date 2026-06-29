import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CodeFragment } from "@/components/code-fragment";
import { SectionLabel } from "@/components/section-label";
import { ServiceCard } from "@/components/service-card";
import { createOpenGraph } from "@/lib/metadata";
import { services, workflowSnippet } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, AI tools, automation systems and MVPs for service-led businesses.",
  alternates: {
    canonical: "/services/"
  },
  openGraph: createOpenGraph(
    "Mode Code services",
    "Clean websites, practical AI tools, joined-up automation and lean MVPs.",
    "/services/"
  )
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-graphite-200/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
          <div>
            <SectionLabel>Services</SectionLabel>
            <h1 className="mt-5 max-w-2xl text-4xl font-medium leading-tight text-graphite-950 sm:text-5xl">
              Clean technology for businesses that need useful systems.
            </h1>
            <p className="mt-6 max-w-xl leading-7 text-graphite-600">
              Mode Code keeps strategy, interface design and engineering close
              together so the work stays clear, maintainable and practical.
            </p>
          </div>
          <CodeFragment
            label="services"
            tone="hero"
            snippet={`stack({
  website: "clear",
  ai: "practical",
  automation: "connected",
})`}
          />
        </div>
      </section>

      <section className="border-b border-graphite-200/80 bg-graphite-50/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:py-28">
          <div className="max-w-sm">
            <CodeFragment label="workflow" snippet={workflowSnippet} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-20 sm:px-8 md:flex-row md:items-center lg:px-10">
          <h2 className="max-w-2xl text-3xl font-medium leading-tight text-graphite-950 sm:text-4xl">
            Have a workflow or website that needs to work harder?
          </h2>
          <ButtonLink href="/contact/">Start a project</ButtonLink>
        </div>
      </section>
    </>
  );
}
