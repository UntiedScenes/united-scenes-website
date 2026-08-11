import PlaceholderMedia from "@/components/PlaceholderMedia";
import Reveal from "@/components/Reveal";

const SHORTS = Array.from({ length: 9 }, (_, index) => `Short ${index + 1}`);

export default function ShortsGallery() {
  return (
    <section className="dark-shade">
      <div className="container">
        <Reveal as="h2" className="heading-4 light">
          shorts
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SHORTS.map((short) => (
            <PlaceholderMedia key={short} label={short} aspect="aspect-[9/16]" dark />
          ))}
        </div>
      </div>
    </section>
  );
}
