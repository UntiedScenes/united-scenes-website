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
    <section id="behind-the-scenes" className="dark">
      <div className="container">
        <Reveal as="h2" className="heading-4 light">
          behind the scenes
        </Reveal>

        <div className="row mb-16 gap-8">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="col w-1/2 sm:w-1/3 lg:w-1/5">
              <h3 className="heading-8 light text-accent">{pillar.title}</h3>
              <p className="text-6 light">{pillar.description}</p>
            </div>
          ))}
        </div>

        <h3 className="heading-5 light">meet the crew</h3>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {CREW.map((member) => (
            <div key={member.name} className="space-y-2 text-center">
              <PlaceholderMedia label={member.name} aspect="aspect-square" dark />
              <p className="text-6 light">{member.name}</p>
              <p className="text-6 light">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
