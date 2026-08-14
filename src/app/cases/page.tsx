import type { Metadata } from "next";
import Link from "next/link";
import CaseCard from "@/components/CaseCard";
import CtaSection from "@/components/CtaSection";
import { cases, caseTypeLabels, caseTypes } from "@/data/cases";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Commercials, brandmovies, documentaires, aftermovies en videoclips van Untied Scenes. Bekijk ons werk.",
};

export default async function CasesPage({ searchParams }: PageProps<"/cases">) {
  const { type } = await searchParams;
  const activeType = caseTypes.find((t) => t === type);
  const visibleCases = activeType
    ? cases.filter((c) => c.type === activeType)
    : cases;

  return (
    <>
      <section className="border-b border-line">
        <div className="wrap py-16 md:py-24">
          <p className="eyebrow">ons werk</p>
          <h1 className="heading mt-3 text-4xl md:text-6xl">Cases</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Elk project een eigen aanpak. Klik door en zie hoe we van een
            vraag een film maken.
          </p>

          {/* Filter op type — gewone links, geen client-side state nodig */}
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Filter op type">
            <Link
              href="/cases"
              className={`rounded-full border px-4 py-1.5 font-subheading text-sm transition-colors ${
                !activeType
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              alles
            </Link>
            {caseTypes.map((t) => (
              <Link
                key={t}
                href={`/cases?type=${t}`}
                className={`rounded-full border px-4 py-1.5 font-subheading text-sm transition-colors ${
                  activeType === t
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {caseTypeLabels[t]}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section>
        <div className="wrap py-16 md:py-20">
          {visibleCases.length > 0 ? (
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
              {visibleCases.map((caseItem) => (
                <CaseCard key={caseItem.slug} caseItem={caseItem} />
              ))}
            </div>
          ) : (
            <p className="text-muted">
              Nog geen cases in deze categorie.{" "}
              <Link href="/cases" className="underline">
                Bekijk alles
              </Link>
            </p>
          )}
        </div>
      </section>

      <CtaSection
        title="Jouw project tussen deze cases?"
        text="Vertel ons wat je wilt maken. We denken direct mee over aanpak en budget."
      />
    </>
  );
}
