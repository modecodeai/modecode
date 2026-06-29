import {
  companyDetails,
  portugalTradingAddressInline,
  registeredOfficeInline
} from "@/lib/company";

type CompanyDetailsProps = {
  compact?: boolean;
};

export function CompanyDetails({ compact = false }: CompanyDetailsProps) {
  return (
    <section
      aria-labelledby="company-details-title"
      className={
        compact
          ? "border border-graphite-200 bg-white/70 p-5"
          : "border border-graphite-200 bg-graphite-50/70 p-6"
      }
    >
      <h2
        id="company-details-title"
        className="text-xl font-medium text-graphite-950"
      >
        Company details
      </h2>
      <dl className="mt-5 grid gap-4 text-sm leading-6 text-graphite-600">
        <div>
          <dt className="font-medium text-graphite-950">Legal name</dt>
          <dd>{companyDetails.legalName}</dd>
        </div>
        <div>
          <dt className="font-medium text-graphite-950">Company number</dt>
          <dd>{companyDetails.companyNumber}</dd>
        </div>
        {!compact ? (
          <>
            <div>
              <dt className="font-medium text-graphite-950">Status</dt>
              <dd>{companyDetails.companyStatus}</dd>
            </div>
            <div>
              <dt className="font-medium text-graphite-950">Company type</dt>
              <dd>{companyDetails.companyType}</dd>
            </div>
            <div>
              <dt className="font-medium text-graphite-950">Incorporated</dt>
              <dd>{companyDetails.incorporatedOn}</dd>
            </div>
          </>
        ) : null}
        <div>
          <dt className="font-medium text-graphite-950">Registered office</dt>
          <dd>{registeredOfficeInline}</dd>
        </div>
        <div>
          <dt className="font-medium text-graphite-950">
            Portugal trading address
          </dt>
          <dd>{portugalTradingAddressInline}</dd>
        </div>
        <div>
          <dt className="font-medium text-graphite-950">Website</dt>
          <dd>
            <a
              className="underline decoration-graphite-300 underline-offset-4 transition hover:text-graphite-950"
              href={companyDetails.website}
            >
              {companyDetails.websiteLabel}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
