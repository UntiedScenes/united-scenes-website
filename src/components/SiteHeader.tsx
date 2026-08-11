import Link from "next/link";

const NAV_LINKS = [
  { href: "/cases", label: "cases" },
  { href: "/behind-the-scenes", label: "behind the scenes" },
  { href: "/team", label: "team" },
  { href: "/contact", label: "contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-heading text-xl lowercase tracking-tight">
          untied scenes
        </Link>

        <nav className="hidden items-center gap-8 font-text text-sm lowercase text-secondary md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 font-text text-sm text-secondary lg:flex">
          <a href="tel:+31600000000" className="hover:text-ink">
            +31 (0)6 00 00 00 00
          </a>
          <a href="mailto:info@untied-scenes.nl" className="hover:text-ink">
            info@untied-scenes.nl
          </a>
        </div>

        <div className="flex items-center gap-2 font-text text-xs font-semibold text-secondary">
          <span className="text-ink">NL</span>
          <span>/</span>
          <Link href="/en" className="hover:text-ink">
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
