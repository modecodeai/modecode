import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CaseStudyCard } from "@/components/case-study-card";
import { CodeFragment } from "@/components/code-fragment";
import { SectionLabel } from "@/components/section-label";
import { ServiceCard } from "@/components/service-card";
import { brandTagline } from "@/lib/company";
import {
  caseStudies,
  manufacturingCapabilities,
  prototypeSnippet,
  processSteps,
  productIdeaSnippet,
  services,
  workflowSnippet
} from "@/lib/site-content";
import { createOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    absolute: "Mode Code | Websites, AI Tools, Automation & Product Prototyping"
  },
  description:
    "Mode Code builds clean websites, useful AI tools, automation systems and production-aware prototypes, including CAD, CNC-aware design and 3D printing support.",
  alternates: {
    canonical: "/"
  },
  openGraph: createOpenGraph(
    "Mode Code | Websites, AI Tools, Automation & Product Prototyping",
    "Mode Code builds clean websites, useful AI tools, automation systems and production-aware prototypes.",
    "/"
  )
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-graphite-200/80">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-28 hidden w-[720px] -translate-x-1/2 text-[11px] leading-5 text-graphite-300/40 code-mask lg:block"
        >
          <pre>{`route('/systems').build()
signal.clean = true
handoff.repeat = false
service.stack.map(input)`}</pre>
        </div>
        <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_420px] lg:px-10">
          <div className="relative z-10 max-w-4xl">
            <p className="mb-5 font-mono text-xs text-graphite-500">
              {brandTagline}
            </p>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] text-graphite-950 sm:text-6xl lg:text-7xl">
              Software for businesses that need things to work.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite-600 sm:text-xl">
              Mode Code builds clean websites, useful AI tools, automation
              systems and production-aware prototypes for digital and physical
              ideas.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact/">Start a project</ButtonLink>
              <ButtonLink href="/services/" variant="secondary">
                See what we build
              </ButtonLink>
            </div>
          </div>
          <div className="relative z-10">
            <CodeFragment
              tone="hero"
              label="mode"
              snippet={`build({
  website: "clear",
  automation: "useful",
  ai: "practical",
  prototype: "testable",
})`}
            />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative border-b border-graphite-200/80 bg-graphite-50/80"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <SectionLabel>What we build</SectionLabel>
              <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight text-graphite-950 sm:text-4xl">
                Practical technology for service businesses with real operating
                constraints.
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-graphite-600">
                Strategy, interface design and engineering kept close together so
                the result is clear, maintainable and useful.
              </p>
              <div className="mt-10 hidden max-w-sm lg:block">
                <CodeFragment label="workflow" snippet={workflowSnippet} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-graphite-200/80 bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-32">
          <div>
            <SectionLabel>Physical ideas</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight text-graphite-950 sm:text-4xl">
              From digital systems to physical prototypes.
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-graphite-600">
              Mode Code works across both software and making. Alongside
              websites, AI tools and automation, we support early-stage physical
              product ideas with CAD modelling, CNC-aware design, 3D printing
              and prototyping. The aim is simple: help ideas become clear,
              testable and ready for the next stage.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-graphite-600 sm:grid-cols-2">
              {manufacturingCapabilities.slice(0, 6).map((item) => (
                <li key={item} className="border-l border-graphite-300 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid content-start gap-4">
            <CodeFragment label="prototype" snippet={prototypeSnippet} />
            <CodeFragment label="product" snippet={productIdeaSnippet} />
          </div>
        </div>
      </section>

      <section className="border-b border-graphite-200/80 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight text-graphite-950 sm:text-4xl">
                Quiet, useful systems with the right level of complexity.
              </h2>
            </div>
            <CodeFragment
              className="w-full md:w-[300px]"
              label="case"
              snippet={`scope({
  public: true,
  private: false,
})`}
            />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.title} {...caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-graphite-200/80 bg-graphite-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <SectionLabel dark>Process</SectionLabel>
              <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight text-white sm:text-4xl">
                Simple enough to move quickly. Structured enough to avoid waste.
              </h2>
            </div>
            <ol className="grid gap-3 sm:grid-cols-5">
              {processSteps.map((step, index) => (
                <li
                  key={step}
                  className="border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="font-mono text-xs text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-xl font-medium">{step}</h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-graphite-50/80">
        <div
          aria-hidden="true"
          className="absolute bottom-8 right-8 hidden max-w-md font-mono text-[11px] leading-5 text-graphite-300/50 lg:block"
        >
          <pre>{`queue.remove('friction')
forms.connect()
launch.when(clear === true)`}</pre>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <SectionLabel>Start</SectionLabel>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-graphite-950 sm:text-5xl">
              Have an idea, a broken workflow, or a website that needs to work
              harder?
            </h2>
            <div className="mt-10">
              <ButtonLink href="/contact/">Talk to Mode Code</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
