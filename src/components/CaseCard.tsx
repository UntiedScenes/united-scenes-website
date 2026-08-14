import Link from "next/link";
import type { Case } from "@/data/cases";
import PlaceholderMedia from "@/components/PlaceholderMedia";

type CaseCardProps = {
  caseItem: Case;
  /** Grotere titel voor een uitgelichte kaart die de volle breedte krijgt. */
  large?: boolean;
};

export default function CaseCard({ caseItem, large = false }: CaseCardProps) {
  return (
    <Link href={`/cases/${caseItem.slug}`} className="group block">
      <div className="relative overflow-hidden">
        <PlaceholderMedia
          label={`beeld — ${caseItem.client}`}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-accent text-lg text-ink opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          ↗
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {caseItem.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-subheading text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3
        className={`heading mt-3 group-hover:underline ${
          large ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
        }`}
      >
        {caseItem.title}
      </h3>
      <p className="mt-1 font-subheading text-sm text-muted">{caseItem.client}</p>
      <p className={`mt-2 text-sm ${large ? "md:text-base" : ""}`}>{caseItem.hook}</p>
    </Link>
  );
}
