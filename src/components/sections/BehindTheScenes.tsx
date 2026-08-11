import PlaceholderMedia from "@/components/PlaceholderMedia";
import Reveal from "@/components/Reveal";

const PILLARS = [
  { title: "passie", description: "[Placeholder] Gedreven door een passie voor beeldtaal en verhalen." },
  { title: "high performance", description: "[Placeholder] Een cultuur waarin snelheid en kwaliteit samengaan." },
  { title: "innovatie", description: "[Placeholder] Altijd op zoek naar nieuwe technieken en formats." },
  { title: "team", description: "[Placeholder] Een klein, hecht team met korte lijnen." },
  { title: "betrouwbaarheid", description: "[Placeholder] Afspraken en deadlines die altijd worden nagekomen." },
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
    <section className="bg-ink text-paper">
      <div className="container py-24">
        <Reveal as="h2" className="heading mb-10 text-[clamp(2rem,4vw,3.5rem)]">
          behind the scenes
        </Reveal>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="space-y-2">
              <h3 className="font-subheading text-sm lowercase text-accent">
                {pillar.title}
              </h3>
              <p className="font-text text-sm text-secondary">{pillar.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-8 font-subheading text-xl lowercase">meet the crew</h3>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {CREW.map((member) => (
            <div key={member.name} className="space-y-2 text-center">
              <PlaceholderMedia label={member.name} aspect="aspect-square" dark />
              <p className="font-subheading text-sm">{member.name}</p>
              <p className="font-text text-xs text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
