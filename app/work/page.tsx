import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CaseStudyCard } from "@/components/case-study-card";
import { CodeFragment } from "@/components/code-fragment";
import { SectionLabel } from "@/components/section-label";
import { createOpenGraph } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Mode Code work across service websites, AI workflows and practical digital systems.",
  alternates: {
    canonical: "/work/"
  },
  openGraph: createOpenGraph(
    "Mode Code work",
    "Selected website, service and AI workflow projects from Mode Code.",
    "/work/"
  )
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-graphite-200/80">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-20 sm:px-8 md:flex-row md:items-end lg:px-10 lg:py-28">
          <div>
            <SectionLabel>Work</SectionLabel>
            <h1 className="mt-5 max-w-2xl text-4xl font-medium leading-tight text-graphite-950 sm:text-5xl">
              Quiet, useful systems with the right level of complexity.
            </h1>
          </div>
          <CodeFragment
            className="w-full md:w-[320px]"
            label="case"
            snippet={`scope({
  public: true,
  private: false,
})`}
          />
        </div>
      </section>

      <section className="border-b border-graphite-200/80 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.title} {...caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-20 sm:px-8 md:flex-row md:items-center lg:px-10">
          <h2 className="max-w-2xl text-3xl font-medium leading-tight sm:text-4xl">
            Need something clear, practical and built around how the business
            actually runs?
          </h2>
          <ButtonLink href="/contact/">Talk to Mode Code</ButtonLink>
        </div>
      </section>
    </>
  );
}
