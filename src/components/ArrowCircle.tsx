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

export default function ArrowCircle({ className = "" }: { className?: string }) {
  return (
    <span className={`button-circle flex items-center justify-center ${className}`}>
      <ArrowIcon className="absolute transition-transform duration-300 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[250%]" />
      <ArrowIcon className="absolute -translate-x-[250%] translate-y-[150%] transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
    </span>
  );
}
