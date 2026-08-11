import Link from "next/link";

export default function DisruptCta() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-accent py-4 pl-6 pr-2 font-text text-base leading-none text-ink shadow-lg transition-transform hover:scale-105 sm:bottom-10 sm:right-14"
    >
      wanna disrupt?
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-accent">
        →
      </span>
    </Link>
  );
}
