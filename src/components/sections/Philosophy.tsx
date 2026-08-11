import Reveal from "@/components/Reveal";
import SplitFadeText from "@/components/SplitFadeText";
import ArrowCircle from "@/components/ArrowCircle";

export default function Philosophy() {
  return (
    <section className="dark py-24 lg:py-44">
      <div className="container">
        <div className="row justify-center">
          <div className="col w-full text-center lg:w-2/3 min-[1920px]:w-1/2">
            <Reveal as="h2" className="heading-7 light">
              Waar twee werelden samenkomen
            </Reveal>

            <SplitFadeText className="text-1 light">
              Wij geloven erin dat conventionele videostrategieën niet meer werken. In
              deze wereld roept iedereen om aandacht. Val jij nog wel genoeg op? Untied
              Scenes combineert de stijlen en emotie van bioscoopfilms met een frisse,
              creatieve blik op fast paced storytelling. Of het nu gaat om short form
              content of een diepgaand merkverhaal, wij maken van iedere productie een
              ware beleving.
            </SplitFadeText>

            <div className="button-wrapper justify-center">
              <a href="#behind-the-scenes" className="button-3 light">
                lees meer
                <ArrowCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
