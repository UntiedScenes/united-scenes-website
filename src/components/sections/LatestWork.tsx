import PlaceholderMedia from "@/components/PlaceholderMedia";

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
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          Latest work
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_WORK.map((item) => (
            <div key={item.brand} className="group space-y-3">
              <PlaceholderMedia label={item.brand} />
              <div className="flex items-center justify-between text-sm">
                <div className="space-x-2 text-muted">
                  {item.hashtags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href="#"
                  className="font-semibold text-accent hover:underline"
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
