import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CompanyDetails } from "@/components/company-details";
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

        <form
          aria-label="Project enquiry"
          className="border border-graphite-200 bg-white/80 p-5 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-graphite-800">
                Name
              </span>
              <input
                className="mt-2 w-full border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-graphite-800">
                Email
              </span>
              <input
                className="mt-2 w-full border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-medium text-graphite-800">
              Project type
            </span>
            <select
              className="mt-2 w-full border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
              name="projectType"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option>Website</option>
              <option>AI tool</option>
              <option>Automation</option>
              <option>MVP</option>
              <option>Design for Manufacturing</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-medium text-graphite-800">
              What needs to work better?
            </span>
            <textarea
              className="mt-2 min-h-40 w-full resize-y border border-graphite-200 bg-white px-4 py-3 text-base text-graphite-950 outline-none transition focus:border-accent"
              name="message"
              required
            />
          </label>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              className="inline-flex min-h-12 items-center justify-center bg-graphite-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-graphite-800 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              type="button"
            >
              Send enquiry
            </button>
            <ButtonLink href={`mailto:${companyDetails.email}`} variant="secondary">
              Email directly
            </ButtonLink>
          </div>
        </form>
      </div>
    </section>
  );
}
