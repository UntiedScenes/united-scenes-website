import Link from "next/link";
import CaseCard from "@/components/CaseCard";
import CtaSection from "@/components/CtaSection";
import Marquee from "@/components/Marquee";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import Reveal from "@/components/Reveal";
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
  const [headlineCase, ...gridCases] = featuredCases;

  return (
    <>
      {/* Hero */}
      <section className="on-dark overflow-hidden bg-ink text-paper">
        <div className="hero-rise wrap pb-16 pt-24 md:pb-24 md:pt-36">
          <p className="eyebrow text-paper/50">
            videoproductie — commercials, brandmovies &amp; meer
          </p>
          <h1 className="heading mt-4 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
            Video die niemand <span className="text-outline">wegklikt</span>
            <span className="text-accent">.</span>
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

        <div className="border-t border-paper/10 py-6">
          <Marquee items={services.map((service) => service.title)} />
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="wrap grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <h2 className="heading text-3xl md:text-4xl">
              Klein team.
              <br />
              Grote schermen.
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-4 text-lg">
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
          </Reveal>
        </div>
      </section>

      {/* Uitgelicht werk — één grote kop-case, drie kaarten eronder */}
      <section className="border-t border-line">
        <div className="wrap py-20 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro eyebrow="uitgelicht werk" title="Cases waar we trots op zijn" />
            <Link href="/cases" className="link-arrow">
              alle cases
            </Link>
          </Reveal>

          <Reveal className="mt-12">
            <CaseCard caseItem={headlineCase} large />
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {gridCases.map((caseItem, index) => (
              <Reveal key={caseItem.slug} delay={index * 90}>
                <CaseCard caseItem={caseItem} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USP's */}
      <section className="on-dark bg-ink text-paper">
        <div className="wrap py-20 md:py-28">
          <Reveal>
            <SectionIntro eyebrow="waarom untied scenes" title="Geen poespas. Wel resultaat." />
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp, index) => (
              <Reveal
                key={usp.title}
                delay={index * 90}
                className="border-t border-paper/20 pt-5 transition-colors duration-300 hover:border-accent"
              >
                <p className="heading text-outline text-4xl">0{index + 1}</p>
                <h3 className="heading mt-3 text-xl">{usp.title}</h3>
                <p className="mt-3 text-sm text-paper/70">{usp.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team-teaser */}
      <section>
        <div className="wrap py-20 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro
              eyebrow="het team"
              title="De makers achter de camera"
              text="Elke schakel een specialist. Samen één film."
            />
            <Link href="/team" className="link-arrow">
              leer het team kennen
            </Link>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 90}>
                <Link href="/team" className="group block">
                  <div className="overflow-hidden">
                    <PlaceholderMedia
                      label={`foto — ${member.name}`}
                      aspect="aspect-[3/4]"
                      className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="heading mt-3 text-lg">{member.name}</h3>
                  <p className="text-sm text-muted">{member.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten kort */}
      <section className="border-t border-line">
        <div className="wrap py-20 md:py-28">
          <Reveal>
            <SectionIntro eyebrow="wat we maken" title="Van commercial tot documentaire" />
          </Reveal>
          <Reveal className="mt-10">
            <ul className="divide-y divide-line border-y border-line">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/diensten#${service.slug}`}
                    className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <span className="heading text-2xl transition-transform duration-300 ease-out group-hover:translate-x-2 md:text-3xl">
                      {service.title}
                      <span className="ml-3 inline-block text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        ↗
                      </span>
                    </span>
                    <span className="max-w-md text-sm text-muted sm:text-right">
                      {service.short}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Social proof */}
      <section>
        <div className="wrap py-20 md:py-28">
          <Reveal>
            <figure className="relative mx-auto max-w-3xl text-center">
              <span
                aria-hidden="true"
                className="heading pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 text-[10rem] leading-none text-accent"
              >
                &ldquo;
              </span>
              <blockquote className="heading relative text-2xl md:text-4xl">
                &ldquo;Ze beloofden een commercial die niet op de rest lijkt.
                Dat is gelukt — en hij was er eerder dan afgesproken.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                Marketingmanager, VoltNed —{" "}
                <Link href="/cases/voltned-commercial" className="underline hover:text-ink">
                  bekijk de case
                </Link>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-14 text-center text-sm text-muted">
              Vertrouwd door merken, events en artiesten in heel Nederland —
              en altijd bereikbaar via{" "}
              <a href={site.phoneHref} className="underline hover:text-ink">
                {site.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection badge />
    </>
  );
}
