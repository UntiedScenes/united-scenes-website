type MarqueeProps = {
  items: string[];
  className?: string;
};

/**
 * Doorlopende tekstband (puur CSS-animatie). Decoratief — de inhoud is
 * elders op de pagina ook als echte tekst aanwezig, dus aria-hidden.
 */
export default function Marquee({ items, className = "" }: MarqueeProps) {
  const strip = (
    <div className="marquee-track flex shrink-0 items-center">
      {items.map((item, index) => (
        <span key={item} className="flex items-center">
          <span
            className={`heading whitespace-nowrap px-6 text-4xl md:px-10 md:text-6xl ${
              index % 2 === 1 ? "text-outline" : ""
            }`}
          >
            {item}
          </span>
          <span className="text-accent" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee flex overflow-hidden ${className}`} aria-hidden="true">
      {strip}
      {strip}
    </div>
  );
}
