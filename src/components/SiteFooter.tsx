import Link from "next/link";

const SOCIALS = ["YouTube", "Instagram", "TikTok", "LinkedIn"];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 font-text text-sm text-secondary sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>&copy; {new Date().getFullYear()} Untied Scenes. Alle rechten voorbehouden.</p>
          <p>
            Zusterbedrijf:{" "}
            <a
              href="https://untied-marketing.nl"
              className="underline underline-offset-2 hover:text-neutral-50"
            >
              untied-marketing.nl
            </a>
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-neutral-50">
            Privacyverklaring
          </Link>
          <Link href="/voorwaarden" className="hover:text-neutral-50">
            Algemene voorwaarden
          </Link>
        </div>

        <div className="flex gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social}
              href="#"
              className="hover:text-neutral-50"
              aria-label={social}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
