type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  className?: string;
};

/** Vaste kop van een sectie: label, titel en optioneel één korte alinea. */
export default function SectionIntro({ eyebrow, title, text, className = "" }: SectionIntroProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading mt-3 text-3xl md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-muted">{text}</p> : null}
    </div>
  );
}
