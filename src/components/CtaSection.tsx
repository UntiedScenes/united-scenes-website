import Link from "next/link";
import RotatingBadge from "@/components/RotatingBadge";
import { site } from "@/data/site";

type CtaSectionProps = {
  title?: string;
  text?: string;
  /** Toon de roterende badge rechts (decoratief, alleen op ruime schermen). */
  badge?: boolean;
};

/**
 * Vaste slotsectie op elke pagina: één primaire CTA naar contact,
 * met bellen/mailen direct eronder voor wie geen formulier wil.
 */
export default function CtaSection({
  title = "Zin om iets te maken dat blijft hangen?",
  text = "Vertel ons wat je voor ogen hebt. Binnen 24 uur weet je waar je aan toe bent.",
  badge = false,
}: CtaSectionProps) {
  return (
    <section className="on-dark bg-ink text-paper">
      <div className="wrap flex items-center justify-between gap-10 py-20 md:py-28">
        <div>
          <div className="max-w-2xl">
            <h2 className="heading text-3xl md:text-5xl">{title}</h2>
            <p className="mt-4 text-paper/70">{text}</p>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="btn btn-accent">
              Plan een gesprek
            </Link>
          </div>

          <p className="mt-6 text-sm text-paper/60">
            Liever direct?{" "}
            <a href={site.phoneHref} className="text-paper underline hover:text-accent">
              {site.phone}
            </a>{" "}
            of{" "}
            <a href={site.emailHref} className="text-paper underline hover:text-accent">
              {site.email}
            </a>
          </p>
        </div>

        {badge ? <RotatingBadge className="hidden shrink-0 lg:block" /> : null}
      </div>
    </section>
  );
}
