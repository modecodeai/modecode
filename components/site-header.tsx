import Link from "next/link";

const links = [
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite-200/80 bg-graphite-50/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-8 lg:px-10">
        <Link
          className="flex items-center gap-3 text-sm font-medium text-graphite-950"
          href="/"
          aria-label="Mode Code home"
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center border border-graphite-950 bg-graphite-950 font-mono text-[11px] text-white"
          >
            MC
          </span>
          <span>Mode Code</span>
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm text-graphite-600">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className="transition hover:text-graphite-950"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
