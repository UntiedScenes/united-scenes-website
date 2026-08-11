import PlaceholderMedia from "@/components/PlaceholderMedia";
import ScrollScaleMedia from "@/components/ScrollScaleMedia";
import HeroHeadline from "@/components/HeroHeadline";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-10">
        <ScrollScaleMedia>
          <PlaceholderMedia
            label="Hero showreel"
            aspect="h-full"
            dark
            className="h-full rounded-none border-none opacity-60"
          />
        </ScrollScaleMedia>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
      </div>

      <div className="container text-center">
        <HeroHeadline />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-paper">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M12 4v14m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
