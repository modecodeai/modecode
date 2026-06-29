import type { Metadata } from "next";
import { CompanyDetails } from "@/components/company-details";
import { SectionLabel } from "@/components/section-label";
import { companyDetails } from "@/lib/company";
import { createOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Mode Code.",
  alternates: {
    canonical: "/privacy/"
  },
  openGraph: createOpenGraph(
    "Privacy | Mode Code",
    "Privacy information for Mode Code.",
    "/privacy/"
  )
};

export default function PrivacyPage() {
  return (
    <section className="border-b border-graphite-200/80">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 lg:py-28">
        <SectionLabel>Privacy</SectionLabel>
        <h1 className="mt-5 text-4xl font-medium leading-tight text-graphite-950 sm:text-5xl">
          Privacy policy
        </h1>
        <div className="mt-10 space-y-8 leading-7 text-graphite-600">
          <section>
            <h2 className="text-xl font-medium text-graphite-950">
              Information collected
            </h2>
            <p className="mt-3 text-graphite-600">
              {companyDetails.legalName} collects information you choose to
              share through contact forms or direct email, such as your name,
              email address, company details and project context.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-graphite-950">
              How it is used
            </h2>
            <p className="mt-3 text-graphite-600">
              This information is used to respond to enquiries, prepare project
              recommendations and deliver agreed services. It is not sold or
              rented to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-graphite-950">
              Retention
            </h2>
            <p className="mt-3 text-graphite-600">
              Project and enquiry information is kept only for as long as needed
              for communication, delivery, legal or operational purposes.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-medium text-graphite-950">
              Contact
            </h2>
            <p className="mt-3 text-graphite-600">
              For privacy questions or data requests, email{" "}
              {companyDetails.email}.
            </p>
          </section>
          <CompanyDetails />
        </div>
      </div>
    </section>
  );
}
