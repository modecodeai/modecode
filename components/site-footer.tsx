import Link from "next/link";
import {
  brandTagline,
  companyDetails,
  registeredOfficeInline
} from "@/lib/company";

const links = [
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" }
];

export function SiteFooter() {
  return (
    <footer className="bg-graphite-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <Link className="text-sm font-medium" href="/">
            Mode Code
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-graphite-400">
            {brandTagline}
          </p>
          <p className="mt-4 max-w-xl text-xs leading-6 text-graphite-500">
            {companyDetails.legalName} · Company No.{" "}
            {companyDetails.companyNumber} · Registered office:{" "}
            {registeredOfficeInline}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-5 text-sm text-graphite-300">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
