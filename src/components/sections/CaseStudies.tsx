import PlaceholderMedia from "@/components/PlaceholderMedia";
import Reveal from "@/components/Reveal";

const CASES = [
  {
    type: "Documentaire",
    title: "de eerste sprong",
    description: "[Placeholder] Documentaire over een bijzonder persoonlijk verhaal.",
  },
  {
    type: "Commercial",
    title: "BMW M3 CS — conquers the arctic wilderness",
    description: "[Placeholder] Commercial waarin de BMW M3 CS de arctische wildernis trotseert.",
  },
  {
    type: "Vision film",
    title: "de Skybox — comfortzone",
    description: "[Placeholder] Vision film voor een vastgoedproject.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal as="h2" className="heading mb-10 text-[clamp(2rem,4vw,3.5rem)]">
          cases
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {CASES.map((item) => (
            <article key={item.title} className="space-y-3">
              <PlaceholderMedia label={item.title} />
              <p className="font-subheading text-xs uppercase tracking-wide text-secondary">
                {item.type}
              </p>
              <h3 className="font-subheading text-lg lowercase">{item.title}</h3>
              <p className="font-text text-sm text-secondary">{item.description}</p>
              <a
                href="#"
                className="inline-block font-text text-sm underline underline-offset-2 hover:text-secondary"
              >
                lees meer
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
