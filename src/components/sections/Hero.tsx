import PlaceholderMedia from "@/components/PlaceholderMedia";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-10">
        <PlaceholderMedia
          label="Hero showreel"
          aspect="h-full"
          dark
          className="h-full rounded-none border-none opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
      </div>

      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center gap-6 px-6 py-32">
        <p className="font-subheading text-sm uppercase tracking-[0.2em] text-accent">
          Untied Scenes
        </p>
        <h1 className="heading max-w-4xl text-[clamp(2.75rem,8vw,7rem)]">
          videoproductie op hoog niveau
        </h1>
      </div>
    </section>
  );
}
