import Link from "next/link";

const SOCIALS = ["YouTube", "Instagram", "TikTok", "LinkedIn"];

export default function SiteFooter() {
  return (
    <footer className="dark">
      <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-6 light">
          <p>&copy; {new Date().getFullYear()} Untied Scenes. Alle rechten voorbehouden.</p>
          <p>
            Zusterbedrijf:{" "}
            <a href="https://untied-marketing.nl">untied-marketing.nl</a>
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/privacy" className="button-6 light">
            Privacyverklaring
          </Link>
          <Link href="/voorwaarden" className="button-6 light">
            Algemene voorwaarden
          </Link>
        </div>

        <div className="flex gap-4">
          {SOCIALS.map((social) => (
            <a key={social} href="#" className="button-6 light" aria-label={social}>
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
