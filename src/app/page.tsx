import Link from "next/link";
import CaseCard from "@/components/CaseCard";
import CtaSection from "@/components/CtaSection";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import SectionIntro from "@/components/SectionIntro";
import { featuredCases } from "@/data/cases";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { team } from "@/data/team";

const usps = [
  {
    title: "korte lijntjes",
    body: "Je schakelt direct met de regisseur. Geen accountmanagers, geen ruis.",
  },
  {
    title: "AI-gedreven efficiëntie",
    body: "Slimmer van concept naar montage. Sneller resultaat, zelfde bioscoopkwaliteit.",
  },
  {
    title: "afspraak is afspraak",
    body: "Deadline gemist bestaat bij ons niet. Wat we beloven, leveren we.",
  },
  {
    title: "geen dertien-in-een-dozijn",
    body: "Elk concept op maat. Templates en trucjes laten we aan anderen.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark bg-ink text-paper">
        <div className="wrap py-24 md:py-36">
          <p className="eyebrow text-paper/50">videoproductie — commercials, brandmovies &amp; meer</p>
          <h1 className="heading mt-4 max-w-3xl text-4xl sm:text-6xl md:text-7xl">
            Video die niemand wegklikt.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/70">
            Bioscoopkwaliteit voor merken die durven op te vallen. Klein team,
            korte lijntjes, geen poespas.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn btn-accent">
              Plan een gesprek
            </Link>
            <Link href="/cases" className="link-arrow text-paper/80 hover:text-paper">
              bekijk ons werk
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="wrap grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <h2 className="heading text-3xl md:text-4xl">
            Klein team.
            <br />
            Grote schermen.
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              Untied Scenes is een compact productieteam waarin elke schakel
              telt. Geen legers aan crew, geen tussenlagen — wel makers die
              hun vak verstaan en direct met je schakelen.
            </p>
            <p className="text-muted">
              Van eerste concept tot laatste frame blijft je verhaal in
              dezelfde handen. Daarom kunnen we snel zijn zonder in te leveren
              op kwaliteit.
            </p>
          </div>
        </div>
      </section>

      {/* Uitgelicht werk */}
      <section className="border-t border-line">
        <div className="wrap py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro
              eyebrow="uitgelicht werk"
              title="Cases waar we trots op zijn"
            />
            <Link href="/cases" className="link-arrow">
              alle cases
            </Link>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {featuredCases.map((caseItem) => (
              <CaseCard key={caseItem.slug} caseItem={caseItem} />
            ))}
          </div>
        </div>
      </section>

      {/* USP's */}
      <section className="on-dark bg-ink text-paper">
        <div className="wrap py-20 md:py-28">
          <SectionIntro
            eyebrow="waarom untied scenes"
            title="Geen poespas. Wel resultaat."
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp, index) => (
              <div key={usp.title} className="border-t border-paper/20 pt-5">
                <p className="font-subheading text-sm text-accent">
                  0{index + 1}
                </p>
                <h3 className="heading mt-2 text-xl">{usp.title}</h3>
                <p className="mt-3 text-sm text-paper/70">{usp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team-teaser */}
      <section>
        <div className="wrap py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro
              eyebrow="het team"
              title="De makers achter de camera"
              text="Elke schakel een specialist. Samen één film."
            />
            <Link href="/team" className="link-arrow">
              leer het team kennen
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((member) => (
              <Link key={member.name} href="/team" className="group block">
                <PlaceholderMedia
                  label={`foto — ${member.name}`}
                  aspect="aspect-[3/4]"
                  className="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <h3 className="heading mt-3 text-lg">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten kort */}
      <section className="border-t border-line">
        <div className="wrap py-20 md:py-28">
          <SectionIntro
            eyebrow="wat we maken"
            title="Van commercial tot documentaire"
          />
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/diensten#${service.slug}`}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="heading text-2xl transition-colors group-hover:text-muted md:text-3xl">
                    {service.title}
                  </span>
                  <span className="max-w-md text-sm text-muted sm:text-right">
                    {service.short}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social proof */}
      <section>
        <div className="wrap py-20 md:py-28">
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="heading text-2xl md:text-4xl">
              &ldquo;Ze beloofden een commercial die niet op de rest lijkt. Dat
              is gelukt — en hij was er eerder dan afgesproken.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              Marketingmanager, VoltNed —{" "}
              <Link href="/cases/voltned-commercial" className="underline hover:text-ink">
                bekijk de case
              </Link>
            </figcaption>
          </figure>

          <p className="mt-14 text-center text-sm text-muted">
            Vertrouwd door merken, events en artiesten in heel Nederland —
            en altijd bereikbaar via{" "}
            <a href={site.phoneHref} className="underline hover:text-ink">
              {site.phone}
            </a>
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
