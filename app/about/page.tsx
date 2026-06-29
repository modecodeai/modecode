import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CompanyDetails } from "@/components/company-details";
import { CodeFragment } from "@/components/code-fragment";
import { SectionLabel } from "@/components/section-label";
import { createOpenGraph } from "@/lib/metadata";
import { processSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mode Code is a software, AI automation and web development studio for service-led businesses.",
  alternates: {
    canonical: "/about/"
  },
  openGraph: createOpenGraph(
    "About Mode Code",
    "A software, AI automation and web development studio building practical systems for service-led businesses.",
    "/about/"
  )
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-graphite-200/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
          <div>
            <SectionLabel>About</SectionLabel>
            <h1 className="mt-5 max-w-2xl text-4xl font-medium leading-tight text-graphite-950 sm:text-5xl">
              A software studio for service businesses that need technology to
              behave.
            </h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-graphite-600">
              Mode Code builds clean websites, useful AI tools and automation
              systems for teams that care less about novelty and more about
              dependable outcomes.
            </p>
            <div className="mt-10">
              <CodeFragment
                label="principles"
                snippet={`make({
  clear: true,
  maintainable: true,
  overbuilt: false,
})`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-graphite-200/80 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <CompanyDetails />
        </div>
      </section>

      <section className="border-b border-graphite-200/80 bg-graphite-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <SectionLabel dark>Process</SectionLabel>
              <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight sm:text-4xl">
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

      <section className="bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-20 sm:px-8 md:flex-row md:items-center lg:px-10">
          <h2 className="max-w-2xl text-3xl font-medium leading-tight text-graphite-950 sm:text-4xl">
            Bring a rough idea, a stalled system or a website that needs a
            sharper job.
          </h2>
          <ButtonLink href="/contact/">Start a project</ButtonLink>
        </div>
      </section>
    </>
  );
}
