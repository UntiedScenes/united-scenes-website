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
    <section className="dark-shade">
      <div className="container">
        <Reveal as="h2" className="heading-4 light">
          latest work
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_WORK.map((item) => (
            <div key={item.brand} className="group space-y-3">
              <PlaceholderMedia label={item.brand} dark />
              <div className="flex items-center justify-between">
                <div className="text-6 light space-x-2">
                  {item.hashtags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#" className="button-5 light">
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
