import Link from "next/link";
import PlaceholderMedia from "@/components/PlaceholderMedia";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-10">
        <PlaceholderMedia label="Hero showreel" aspect="h-full" className="h-full rounded-none border-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-6 px-6 py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Untied Scenes
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Videoproductie op hoog niveau
        </h1>
        <Link
          href="/contact"
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Wanna disrupt?
        </Link>
      </div>
    </section>
  );
}
