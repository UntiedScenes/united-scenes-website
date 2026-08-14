import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import SectionIntro from "@/components/SectionIntro";
import { team, values } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Het team achter Untied Scenes: een compact productieteam waarin elke schakel telt. Korte lijntjes, direct contact met de makers.",
};

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="wrap py-16 md:py-24">
          <p className="eyebrow">over ons</p>
          <h1 className="heading mt-3 max-w-2xl text-4xl md:text-6xl">
            Klein team. Elke schakel telt.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Geen legers aan crew, geen tussenlagen. Bij Untied Scenes werk je
            direct met de makers — en dat zie je terug in het resultaat én in
            het tempo.
          </p>
        </div>
      </section>

      {/* Teamleden */}
      <section>
        <div className="wrap py-16 md:py-24">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name}>
                <PlaceholderMedia label={`foto — ${member.name}`} aspect="aspect-[3/4]" />
                <h2 className="heading mt-4 text-xl">{member.name}</h2>
                <p className="font-subheading text-sm text-muted">{member.role}</p>
                <p className="mt-3 text-sm">{member.bio}</p>
                {member.email ? (
                  <p className="mt-3 text-sm">
                    <a href={`mailto:${member.email}`} className="underline hover:text-muted">
                      {member.email}
                    </a>
                    {member.phone && member.phoneHref ? (
                      <>
                        <br />
                        <a href={member.phoneHref} className="underline hover:text-muted">
                          {member.phone}
                        </a>
                      </>
                    ) : null}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze / waarden */}
      <section className="on-dark bg-ink text-paper">
        <div className="wrap py-20 md:py-28">
          <SectionIntro
            eyebrow="zo werken wij"
            title="Waar je op kunt rekenen"
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="border-t border-paper/20 pt-5">
                <h3 className="heading text-xl">{value.title}</h3>
                <p className="mt-3 text-sm text-paper/70">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Werken met dit team?"
        text="Plan een gesprek en ontdek binnen een half uur wat we voor je kunnen maken."
      />
    </>
  );
}
