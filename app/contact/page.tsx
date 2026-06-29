import type { Metadata } from "next";
import { CompanyDetails } from "@/components/company-details";
import { ContactForm } from "@/components/contact-form";
import { CodeFragment } from "@/components/code-fragment";
import { SectionLabel } from "@/components/section-label";
import { companyDetails } from "@/lib/company";
import { createOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Mode Code for websites, AI tools, automation systems or production-aware prototypes.",
  alternates: {
    canonical: "/contact/"
  },
  openGraph: createOpenGraph(
    "Contact Mode Code",
    "Talk to Mode Code about websites, AI tools, automation systems or production-aware prototypes.",
    "/contact/"
  )
};

export default function ContactPage() {
  return (
    <section className="border-b border-graphite-200/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-28">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-5 max-w-xl text-4xl font-medium leading-tight text-graphite-950 sm:text-5xl">
            Start with the problem, workflow or website that needs attention.
          </h1>
          <p className="mt-6 max-w-lg leading-7 text-graphite-600">
            Share the shape of the work and what needs to improve. Mode Code
            will respond with a practical next step.
          </p>
          <div className="mt-10 max-w-sm">
            <CodeFragment
              label="brief"
              snippet={`request({
  outcome: "clear",
  scope: "right-sized",
  next: "useful",
})`}
              />
          </div>
          <div className="mt-6 max-w-sm">
            <p className="mb-4 text-sm leading-6 text-graphite-600">
              Mode Code works from Portugal and the UK.
            </p>
            <CompanyDetails compact />
          </div>
        </div>

        <ContactForm email={companyDetails.email} />
      </div>
    </section>
  );
}
