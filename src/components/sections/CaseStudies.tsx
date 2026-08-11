import PlaceholderMedia from "@/components/PlaceholderMedia";

const CASES = [
  {
    type: "Documentaire",
    title: "De eerste sprong",
    description: "[Placeholder] Documentaire over een bijzonder persoonlijk verhaal.",
  },
  {
    type: "Commercial",
    title: "BMW M3 CS — conquers the arctic wilderness",
    description: "[Placeholder] Commercial waarin de BMW M3 CS de arctische wildernis trotseert.",
  },
  {
    type: "Vision film",
    title: "De Skybox — Comfortzone",
    description: "[Placeholder] Vision film voor een vastgoedproject.",
  },
];

export default function CaseStudies() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          Cases
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {CASES.map((item) => (
            <article key={item.title} className="space-y-3">
              <PlaceholderMedia label={item.title} />
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {item.type}
              </p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
              <a href="#" className="inline-block text-sm font-semibold hover:underline">
                Lees meer
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
