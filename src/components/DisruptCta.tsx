import Link from "next/link";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 12L12 4M12 4H5M12 4V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DisruptCta() {
  return (
    <Link
      href="/contact"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-accent py-4 pl-6 pr-2 font-text text-base leading-none text-ink shadow-lg sm:bottom-10 sm:right-14"
    >
      wanna disrupt?
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink">
        <ArrowIcon className="absolute text-accent transition-transform duration-300 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[250%]" />
        <ArrowIcon className="absolute -translate-x-[250%] translate-y-[150%] text-accent transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </Link>
  );
}
