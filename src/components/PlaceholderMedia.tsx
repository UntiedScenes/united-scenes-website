type PlaceholderMediaProps = {
  label: string;
  aspect?: string;
  dark?: boolean;
  className?: string;
};

export default function PlaceholderMedia({
  label,
  aspect = "aspect-video",
  dark = false,
  className = "",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`placeholder-media relative flex items-center justify-center overflow-hidden ${
        dark ? "on-dark border-white/10" : "border-black/10"
      } border ${aspect} ${className}`}
    >
      <span
        className={`rounded px-3 py-1 text-center text-xs font-subheading uppercase tracking-wide ${
          dark ? "bg-black/60 text-neutral-50" : "bg-white/70 text-neutral-800"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
