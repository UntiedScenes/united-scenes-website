import Link from "next/link";

const NAV_LINKS = [
  { href: "/cases", label: "Cases" },
  { href: "/behind-the-scenes", label: "Behind the Scenes" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          UNTIED SCENES
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 text-sm text-muted lg:flex">
          <a href="tel:+31600000000" className="hover:text-foreground">
            +31 (0)6 00 00 00 00
          </a>
          <a href="mailto:info@untied-scenes.nl" className="hover:text-foreground">
            info@untied-scenes.nl
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-muted">
          <span className="text-foreground">NL</span>
          <span>/</span>
          <Link href="/en" className="hover:text-foreground">
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
