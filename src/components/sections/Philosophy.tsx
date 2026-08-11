import Reveal from "@/components/Reveal";
import SplitFadeText from "@/components/SplitFadeText";
import ArrowCircle from "@/components/ArrowCircle";

export default function Philosophy() {
  return (
    <section className="bg-ink text-paper">
      <div className="container py-24 lg:py-44">
        <div className="mx-auto w-full text-center lg:w-2/3 min-[1920px]:w-1/2">
          <Reveal
            as="h2"
            className="mb-4 font-subheading text-[clamp(1.5rem,1.2rem+1.2vw,2rem)]"
          >
            Waar twee werelden samenkomen
          </Reveal>

          <SplitFadeText className="mb-10 text-[clamp(1.4rem,1.1rem+1.3vw,2.25rem)] leading-[1.48]">
            Wij geloven erin dat conventionele videostrategieën niet meer werken. In
            deze wereld roept iedereen om aandacht. Val jij nog wel genoeg op? Untied
            Scenes combineert de stijlen en emotie van bioscoopfilms met een frisse,
            creatieve blik op fast paced storytelling. Of het nu gaat om short form
            content of een diepgaand merkverhaal, wij maken van iedere productie een
            ware beleving.
          </SplitFadeText>

          <a
            href="#behind-the-scenes"
            className="group mx-auto inline-flex items-center gap-4 rounded-full border border-paper py-1.5 pl-8 pr-1.5 font-text text-sm lowercase text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            lees meer
            <ArrowCircle tone="light" className="h-9 w-9" />
          </a>
        </div>
      </div>
    </section>
  );
}
