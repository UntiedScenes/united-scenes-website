import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Plan een gesprek met Untied Scenes. Bel 078 890 29 50, mail info@get-untied.nl of stuur het formulier — binnen 24 uur reactie.",
};

const steps = [
  "We reageren binnen 24 uur — vaak sneller.",
  "Kort kennismakingsgesprek: wat wil je bereiken, voor wie, wanneer?",
  "Je krijgt een concreet voorstel met aanpak, planning en prijs.",
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="wrap py-16 md:py-24">
          <p className="eyebrow">contact</p>
          <h1 className="heading mt-3 text-4xl md:text-6xl">Plan een gesprek</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Vertel kort wat je voor ogen hebt. Meer dan vijf velden vragen we
            niet van je.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap grid gap-14 py-16 md:grid-cols-[1fr_20rem] md:py-24 lg:gap-20">
          <ContactForm />

          <aside className="space-y-10">
            <div>
              <p className="eyebrow">liever direct?</p>
              <ul className="mt-3 space-y-1 text-lg">
                <li>
                  <a href={site.phoneHref} className="heading text-2xl hover:underline">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={site.emailHref} className="underline hover:text-muted">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow">studio</p>
              <p className="mt-3 text-muted">
                {site.address.street}
                <br />
                {site.address.city}
              </p>
            </div>

            <div>
              <p className="eyebrow">wat gebeurt er daarna?</p>
              <ol className="mt-3 space-y-3">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm">
                    <span className="shrink-0 font-subheading">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
