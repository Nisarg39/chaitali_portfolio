import { Button } from "@/components/ui/Button";
import { SectionHighlight } from "@/components/ui/SectionHighlight";
import { ChevronRight } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 flex flex-col items-center text-center overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      {/* Premium Interactive Molecular Network Background */}
      <ParticleBackground />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <SectionHighlight>Mentorship & Consulting</SectionHighlight>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mt-6 mb-8">
          Empowering the Next Generation of Scientists
        </h1>
        <p className="text-lg md:text-2xl text-dark/80 max-w-3xl leading-relaxed mb-10">
          I am committed to supporting students, researchers, and aspiring academicians at every stage of their journey. Through evidence-based guidance, I help you build the skills needed to succeed in life sciences.
        </p>
        <Button variant="primary" className="flex items-center justify-center whitespace-nowrap text-lg px-8 py-6 rounded-full group shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Get Free Guidance
          <ChevronRight className="ml-2 w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
