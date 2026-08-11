import PlaceholderMedia from "@/components/PlaceholderMedia";

const PILLARS = [
  { title: "Passie", description: "[Placeholder] Gedreven door een passie voor beeldtaal en verhalen." },
  { title: "High performance", description: "[Placeholder] Een cultuur waarin snelheid en kwaliteit samengaan." },
  { title: "Innovatie", description: "[Placeholder] Altijd op zoek naar nieuwe technieken en formats." },
  { title: "Team", description: "[Placeholder] Een klein, hecht team met korte lijnen." },
  { title: "Betrouwbaarheid", description: "[Placeholder] Afspraken en deadlines die altijd worden nagekomen." },
];

const CREW = [
  { name: "Teamlid 1", role: "Regisseur" },
  { name: "Teamlid 2", role: "Regisseur" },
  { name: "Teamlid 3", role: "Editor" },
  { name: "Teamlid 4", role: "Editor" },
  { name: "Teamlid 5", role: "Animator" },
  { name: "Teamlid 6", role: "Producer" },
];

export default function BehindTheScenes() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          Behind the Scenes
        </h2>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-8 text-xl font-semibold">Meet the crew</h3>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {CREW.map((member) => (
            <div key={member.name} className="space-y-2 text-center">
              <PlaceholderMedia label={member.name} aspect="aspect-square" />
              <p className="text-sm font-semibold">{member.name}</p>
              <p className="text-xs text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
