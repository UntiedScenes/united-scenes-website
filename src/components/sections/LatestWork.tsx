import PlaceholderMedia from "@/components/PlaceholderMedia";
import Reveal from "@/components/Reveal";

const LATEST_WORK = [
  { brand: "Remarkable", hashtags: ["#tech", "#productlaunch"] },
  { brand: "Fujifilm", hashtags: ["#camera", "#brandfilm"] },
  { brand: "Shokz", hashtags: ["#audio", "#sports"] },
  { brand: "Concept2", hashtags: ["#fitness", "#commercial"] },
  { brand: "Oakley", hashtags: ["#lifestyle", "#eyewear"] },
  { brand: "Monster Energy", hashtags: ["#extreme", "#branded"] },
  { brand: "Arc'teryx", hashtags: ["#outdoor", "#brandfilm"] },
];

export default function LatestWork() {
  return (
    <section className="bg-neutral-100 text-ink">
      <div className="container py-24">
        <Reveal as="h2" className="heading mb-10 text-[clamp(2rem,4vw,3.5rem)]">
          latest work
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_WORK.map((item) => (
            <div key={item.brand} className="group space-y-3">
              <PlaceholderMedia label={item.brand} />
              <div className="flex items-center justify-between font-text text-sm">
                <div className="space-x-2 text-secondary">
                  {item.hashtags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href="#"
                  className="font-subheading text-ink underline underline-offset-2 hover:text-secondary"
                >
                  bekijk meer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
