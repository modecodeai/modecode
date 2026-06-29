import Link from "next/link";

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  href,
  variant = "primary"
}: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-12 items-center justify-center bg-graphite-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-graphite-800 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      : "inline-flex min-h-12 items-center justify-center border border-graphite-300 bg-white/60 px-6 py-3 text-sm font-medium text-graphite-950 transition hover:border-graphite-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
