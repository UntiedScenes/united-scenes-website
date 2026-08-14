import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import VideoEmbed from "@/components/VideoEmbed";
import { cases, caseTypeLabels, getCase, getNextCase } from "@/data/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseItem = getCase(slug);
  if (!caseItem) return {};
  return {
    title: `${caseItem.title} — ${caseItem.client}`,
    description: caseItem.intro,
  };
}

export default async function CaseDetailPage({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const caseItem = getCase(slug);
  if (!caseItem) notFound();

  const nextCase = getNextCase(caseItem.slug);

  return (
    <article>
      {/* Openingsscène */}
      <section className="on-dark bg-ink text-paper">
        <div className="wrap py-16 md:py-24">
          <p className="eyebrow text-paper/50">
            {caseItem.client} — {caseTypeLabels[caseItem.type]} — {caseItem.year}
          </p>
          <h1 className="heading mt-4 max-w-3xl text-4xl md:text-6xl">
            {caseItem.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-paper/70">{caseItem.intro}</p>
        </div>
        <div className="wrap pb-16 md:pb-24">
          <VideoEmbed url={caseItem.videoUrl} title={caseItem.title} />
        </div>
      </section>

      {/* De opdracht */}
      <section>
        <div className="wrap grid gap-8 py-16 md:grid-cols-[16rem_1fr] md:py-24">
          <h2 className="heading text-2xl md:text-3xl">De opdracht</h2>
          <div className="max-w-2xl space-y-4 text-lg">
            {caseItem.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="border-t border-line">
        <div className="wrap grid gap-8 py-16 md:grid-cols-[16rem_1fr] md:py-24">
          <h2 className="heading text-2xl md:text-3xl">Onze aanpak</h2>
          <div className="max-w-2xl space-y-4 text-lg">
            {caseItem.approach.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Het resultaat */}
      <section className="border-t border-line">
        <div className="wrap grid gap-8 py-16 md:grid-cols-[16rem_1fr] md:py-24">
          <h2 className="heading text-2xl md:text-3xl">Het resultaat</h2>
          <div className="max-w-2xl space-y-6">
            <div className="space-y-4 text-lg">
              {caseItem.result.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <PlaceholderMedia label={`behind the scenes — ${caseItem.client}`} />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="on-dark bg-ink text-paper">
        <div className="wrap py-16 md:py-24">
          {caseItem.stats ? (
            <div className="grid gap-10 sm:grid-cols-3">
              {caseItem.stats.map((stat) => (
                <div key={stat.label} className="border-t border-paper/20 pt-5">
                  <p className="heading text-4xl text-accent md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-paper/70">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}

          {caseItem.quote ? (
            <figure className={caseItem.stats ? "mt-16 max-w-2xl" : "max-w-2xl"}>
              <blockquote className="heading text-2xl md:text-3xl">
                &ldquo;{caseItem.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-paper/60">
                {caseItem.quote.author}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </section>

      {/* CTA + volgende case */}
      <section>
        <div className="wrap grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="heading text-3xl md:text-4xl">Wil jij dit ook?</h2>
            <p className="mt-4 max-w-md text-muted">
              Vertel ons wat je voor ogen hebt. Binnen 24 uur weet je waar je
              aan toe bent.
            </p>
            <Link href="/contact" className="btn btn-accent mt-6">
              Plan een gesprek
            </Link>
          </div>

          <Link
            href={`/cases/${nextCase.slug}`}
            className="group block border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0"
          >
            <p className="eyebrow">volgende case</p>
            <h3 className="heading mt-3 text-2xl group-hover:underline md:text-3xl">
              {nextCase.title}
            </h3>
            <p className="mt-2 text-sm text-muted">
              {nextCase.client} — {caseTypeLabels[nextCase.type]}
            </p>
            <span className="link-arrow mt-4">bekijk case</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
