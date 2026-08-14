import Link from "next/link";

/**
 * Langzaam roterende cirkeltekst met pijl in het midden. Decoratieve
 * tweede route naar contact; draait niet bij prefers-reduced-motion.
 */
export default function RotatingBadge({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      aria-label="Plan een gesprek"
      className={`group relative block h-36 w-36 ${className}`}
    >
      <svg viewBox="0 0 120 120" className="badge-spin h-full w-full fill-current">
        <defs>
          <path
            id="badge-circle"
            d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
          />
        </defs>
        <text fontSize="11.5" letterSpacing="2.5" className="font-subheading uppercase">
          <textPath href="#badge-circle">
            plan een gesprek ✦ plan een gesprek ✦
          </textPath>
        </text>
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-3xl text-accent transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        ↗
      </span>
    </Link>
  );
}
