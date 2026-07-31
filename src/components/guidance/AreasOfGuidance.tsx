'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Microscope, 
  Target, 
  Lightbulb, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

const guidanceAreas = [
  {
    title: "Academic Mentorship",
    icon: BookOpen,
    points: [
      "Undergraduate & postgraduate course selection (Biology, Biotech, etc.)",
      "Career planning for higher education (M.Sc., Ph.D.)",
      "Academic goal setting and research planning"
    ],
    hoverColor: "bg-[#FF90E8]", // Pink
  },
  {
    title: "Research Guidance",
    icon: Microscope,
    points: [
      "Identifying research gaps and formulating hypotheses",
      "Designing robust experimental methodologies",
      "Guidance on writing and publishing research papers"
    ],
    hoverColor: "bg-[#FFC900]", // Yellow
  },
  {
    title: "Exam Preparation",
    icon: Target,
    points: [
      "Targeted strategies for NEET & MH-CET Biology",
      "Conceptual clarity for competitive success",
      "Mock tests, paper analysis, and time management"
    ],
    hoverColor: "bg-brand", // Green
  },
  {
    title: "Career Pathways",
    icon: GraduationCap,
    points: [
      "Exploring opportunities in Biotechnology and Zoology",
      "Industry vs. Academia: Making informed choices",
      "Resume building and interview preparation for scientific roles"
    ],
    hoverColor: "bg-blue-400", // Blue
  }
];

export function AreasOfGuidance() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-16 pb-24 relative bg-background bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] overflow-hidden mt-8">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b-[4px] border-dark pb-8 gap-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-dark uppercase tracking-tighter leading-none">
            Areas Of <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #191A23' }}>Guidance</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-dark/80 max-w-md">
            Comprehensive mentorship tailored to elevate your trajectory in the biological sciences.
          </p>
        </div>

        {/* The Mega-List Accordion */}
        <div className="flex flex-col border-t-[4px] border-dark">
          {guidanceAreas.map((area, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="group border-b-[4px] border-dark overflow-hidden relative cursor-pointer"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                
                {/* Background Flood Effect (Triggers on hover when NOT open, stays solid when open) */}
                <div 
                  className={`absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left ${area.hoverColor}
                    ${isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  `} 
                />

                {/* Main Row Header */}
                <div className="relative z-10 px-4 md:px-8 py-8 md:py-12 flex items-center justify-between">
                  
                  <div className="flex items-center gap-8 md:gap-12 w-full">
                    
                    {/* Index Number */}
                    <span className={`text-2xl md:text-3xl font-black transition-colors duration-300 ${isOpen ? 'text-dark' : 'text-dark/20 group-hover:text-dark/50'}`}>
                      0{index + 1}
                    </span>

                    {/* Massive Title with Hover Translation */}
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-dark uppercase tracking-tight transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-4 md:group-hover:translate-x-8">
                      {area.title}
                    </h3>
                  </div>

                  {/* Icon & Arrow Section */}
                  <div className="hidden md:flex items-center gap-8 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <area.icon size={48} className="text-dark" />
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={48} className="text-dark" />
                    </motion.div>
                  </div>

                </div>

                {/* Accordion Content (Framer Motion) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-10"
                    >
                      <div className="px-4 md:px-8 pb-12 md:pb-16 flex flex-col lg:flex-row gap-12 lg:gap-24 ml-12 md:ml-[5.5rem]">
                        
                        {/* Huge Watermark Graphic in Content */}
                        <div className="hidden lg:flex items-center justify-center w-48 h-48 bg-white border-[4px] border-dark rounded-full shadow-[8px_8px_0px_0px_rgba(25,26,35,1)]">
                           <area.icon size={80} className="text-dark" />
                        </div>

                        {/* Content List */}
                        <div className="flex-1">
                          <ul className="space-y-6">
                            {area.points.map((point, i) => (
                              <motion.li 
                                key={i} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-start gap-4"
                              >
                                <CheckCircle2 size={32} className="shrink-0 mt-1 text-dark" />
                                <span className="text-xl md:text-2xl font-bold text-dark/90 leading-tight">
                                  {point}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                          
                          <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 bg-white text-dark border-[3px] border-dark px-8 py-4 font-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:shadow-[0px_0px_0px_0px_rgba(25,26,35,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                          >
                            Learn More
                          </motion.button>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
