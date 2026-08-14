type PlaceholderMediaProps = {
  label: string;
  aspect?: string;
  className?: string;
};

/**
 * Nette plek voor beeld dat er nog niet is. Vervang door <Image> of een
 * video-embed zodra het echte materiaal beschikbaar is.
 */
export default function PlaceholderMedia({
  label,
  aspect = "aspect-video",
  className = "",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-ink/5 ${aspect} ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, transparent, transparent 16px, rgba(10,10,10,0.04) 16px, rgba(10,10,10,0.04) 32px)",
      }}
    >
      <span className="rounded-full bg-paper/90 px-4 py-1.5 text-center font-subheading text-xs uppercase tracking-widest text-muted">
        {label}
      </span>
    </div>
  );
}
