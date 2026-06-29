import type { Metadata } from "next";
import { CompanyDetails } from "@/components/company-details";
import { SectionLabel } from "@/components/section-label";
import { companyDetails } from "@/lib/company";
import { createOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Mode Code website.",
  alternates: {
    canonical: "/terms/"
  },
  openGraph: createOpenGraph(
    "Terms | Mode Code",
    "Terms of use for the Mode Code website.",
    "/terms/"
  )
};

export default function TermsPage() {
  return (
    <section className="border-b border-graphite-200/80">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Terms</SectionLabel>
        <h1 className="mt-5 text-4xl font-medium leading-tight text-graphite-950 sm:text-5xl">
          Terms of use
        </h1>
        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-medium text-graphite-950">
              Website use
            </h2>
            <p className="mt-3 text-graphite-600">
              This website is provided by {companyDetails.legalName} for
              general information about Mode Code services. Content may change
              without notice.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-graphite-950">
              Project work
            </h2>
            <p className="mt-3 text-graphite-600">
              Any project engagement, scope, fees, timelines and deliverables
              are governed by a separate written agreement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-graphite-950">
              Intellectual property
            </h2>
            <p className="mt-3 text-graphite-600">
              Website text, design direction and materials are owned by Mode
              Code or {companyDetails.legalName} unless otherwise stated.
              Client work remains subject to the relevant project agreement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-graphite-950">
              Liability
            </h2>
            <p className="mt-3 text-graphite-600">
              Mode Code aims to keep this site accurate and available, but does
              not guarantee uninterrupted access or complete accuracy.
            </p>
          </section>
          <CompanyDetails />
        </div>
      </div>
    </section>
  );
}
