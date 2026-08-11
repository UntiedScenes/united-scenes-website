import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import LatestWork from "@/components/sections/LatestWork";
import CaseStudies from "@/components/sections/CaseStudies";
import BehindTheScenes from "@/components/sections/BehindTheScenes";
import ShortsGallery from "@/components/sections/ShortsGallery";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <LatestWork />
        <CaseStudies />
        <BehindTheScenes />
        <ShortsGallery />
      </main>
      <SiteFooter />
    </div>
  );
}
