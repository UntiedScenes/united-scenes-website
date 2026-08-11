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
    <section className="light">
      <div className="container">
        <Reveal as="h2" className="heading-4 dark">
          cases
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {CASES.map((item) => (
            <article key={item.title} className="space-y-3">
              <PlaceholderMedia label={item.title} />
              <p className="text-6 dark uppercase tracking-wide">{item.type}</p>
              <h3 className="heading-8 dark">{item.title}</h3>
              <p className="text-3 dark">{item.description}</p>
              <a href="#" className="button-6 dark">
                lees meer
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
