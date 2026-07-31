import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/guidance/HeroSection";
import { AreasOfGuidance } from "@/components/guidance/AreasOfGuidance";
import { WhoCanBenefit } from "@/components/guidance/WhoCanBenefit";
import { MentoringApproach } from "@/components/guidance/MentoringApproach";
import { GuidanceCTA } from "@/components/guidance/GuidanceCTA";

export default function GuidancePage() {
  return (
    <div className="min-h-screen font-sans bg-background flex flex-col">
      <Navbar />

      <main className="w-full flex-grow pt-10">
        <HeroSection />
        <AreasOfGuidance />
        <WhoCanBenefit />
        <MentoringApproach />
        <GuidanceCTA />
      </main>
    </div>
  );
}
