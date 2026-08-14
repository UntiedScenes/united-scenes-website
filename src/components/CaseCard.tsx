import Link from "next/link";
import type { Case } from "@/data/cases";
import PlaceholderMedia from "@/components/PlaceholderMedia";

export default function CaseCard({ caseItem }: { caseItem: Case }) {
  return (
    <Link href={`/cases/${caseItem.slug}`} className="group block">
      <div className="overflow-hidden">
        <PlaceholderMedia
          label={`beeld — ${caseItem.client}`}
          className="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
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

      <h3 className="heading mt-3 text-xl group-hover:underline md:text-2xl">
        {caseItem.title}
      </h3>
      <p className="mt-1 font-subheading text-sm text-muted">{caseItem.client}</p>
      <p className="mt-2 text-sm">{caseItem.hook}</p>
    </Link>
  );
}
