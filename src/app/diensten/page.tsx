import type { Metadata } from "next";
import Link from "next/link";
import CaseCard from "@/components/CaseCard";
import CtaSection from "@/components/CtaSection";
import { getCase } from "@/data/cases";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Commercials, brandmovies, documentaires, aftermovies en videoclips. Bekijk wat Untied Scenes voor je maakt — met een bewijs-case per dienst.",
};

export default function DienstenPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="wrap py-16 md:py-24">
          <p className="eyebrow">diensten</p>
          <h1 className="heading mt-3 text-4xl md:text-6xl">Wat we maken</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Vijf soorten films, één aanpak: bioscoopkwaliteit, korte lijntjes
            en een concept dat van jou is. Bij elke dienst zie je direct het
            bewijs.
          </p>
        </div>
      </section>

      {services.map((service, index) => {
        const proofCase = getCase(service.caseSlug);
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={index > 0 ? "border-t border-line" : undefined}
          >
            <div className="wrap grid gap-10 py-16 md:grid-cols-2 md:py-24">
              <div>
                <p className="eyebrow">0{index + 1}</p>
                <h2 className="heading mt-3 text-3xl md:text-4xl">{service.title}</h2>
                <div className="mt-5 max-w-md space-y-4 text-lg">
                  {service.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link href="/contact" className="link-arrow mt-6">
                  vraag een voorstel aan
                </Link>
              </div>

              {proofCase ? (
                <div>
                  <p className="eyebrow mb-4">het bewijs</p>
                  <CaseCard caseItem={proofCase} />
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      <CtaSection
        title="Weet je nog niet welke vorm past?"
        text="Geen probleem. Vertel wat je wilt bereiken — wij adviseren welke film daarbij hoort."
      />
    </>
  );
}
