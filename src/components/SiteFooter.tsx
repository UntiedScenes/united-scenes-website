import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks, site, socials } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3 md:py-16">
        <div>
          <Logo className="h-5 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-paper/60">{site.tagline}.</p>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-paper/50">contact</p>
          <ul className="mt-3 space-y-1">
            <li>
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="pt-2 text-paper/60">
              {site.address.street}
              <br />
              {site.address.city}
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-paper/50">menu</p>
          <ul className="mt-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-accent">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="wrap flex flex-col gap-4 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Untied Scenes. Zusterbedrijf:{" "}
            <a
              href={site.sisterCompany.href}
              className="underline hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.sisterCompany.label}
            </a>
          </p>
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
