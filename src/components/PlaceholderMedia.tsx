type PlaceholderMediaProps = {
  label: string;
  aspect?: string;
  className?: string;
};

export default function PlaceholderMedia({
  label,
  aspect = "aspect-video",
  className = "",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`placeholder-media relative flex items-center justify-center overflow-hidden rounded-md border border-white/10 ${aspect} ${className}`}
    >
      <span className="rounded bg-black/60 px-3 py-1 text-center text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}
