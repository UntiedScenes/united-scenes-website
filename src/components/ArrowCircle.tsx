function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={`h-4 w-4 ${className}`} aria-hidden="true">
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

type ArrowCircleProps = {
  className?: string;
  tone?: "dark" | "light";
};

export default function ArrowCircle({ className = "", tone = "dark" }: ArrowCircleProps) {
  const bg = tone === "dark" ? "bg-ink" : "bg-accent";
  const icon = tone === "dark" ? "text-accent" : "text-ink";

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full ${bg} ${className}`}
    >
      <ArrowIcon
        className={`absolute ${icon} transition-transform duration-300 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[250%]`}
      />
      <ArrowIcon
        className={`absolute -translate-x-[250%] translate-y-[150%] ${icon} transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0`}
      />
    </span>
  );
}
