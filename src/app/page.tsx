import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Mentorship } from "@/components/Mentorship";
import { Publications } from "@/components/Publications";
import { Conferences } from "@/components/Conferences";
import { Training } from "@/components/Training";
import { Outreach } from "@/components/Outreach";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-20">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Text Content */}
          <div className="flex flex-col items-start gap-8 order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Educator & Researcher in Biological Sciences
            </h1>
            <p className="text-xl text-dark/80 max-w-lg leading-relaxed">
              Assistant Professor and researcher specializing in Biochemistry, Genetics, and Environmental Toxicology, with a focus on aquatic ecosystems and sustainable biotechnology.
            </p>
            <Button variant="primary" className="text-lg">View Publications</Button>
          </div>

          {/* Illustration */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] order-1 lg:order-2">
            <Image
              src="/hero-illustration-v4.png"
              alt="Dr. Chaitali Shaha Illustration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

        </section>

        <About />
        <Experience />
        <Mentorship />
        <Publications />
        <Conferences />
        <Training />
        <Outreach />

      </main>
    </div>
  );
}
