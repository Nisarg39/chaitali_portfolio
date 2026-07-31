'use client';
import { motion } from "framer-motion";
import { BrainCircuit, FlaskConical, Globe, Target } from "lucide-react";

const approaches = [
  {
    title: "Strong Conceptual Understanding",
    desc: "Building a solid foundation in core biological sciences before moving to advanced topics. Clarity is the bedrock of innovation.",
    icon: BrainCircuit,
    color: "bg-[#FF90E8]", // Pink
  },
  {
    title: "Research-Oriented Thinking",
    desc: "Encouraging a mindset that questions, analyzes, and seeks evidence-based solutions. We don't just learn facts; we interrogate them.",
    icon: FlaskConical,
    color: "bg-[#FFC900]", // Yellow
  },
  {
    title: "Application-Based Learning",
    desc: "Connecting theoretical concepts directly to real-world applications, experimental scenarios, and sustainable biotechnology.",
    icon: Globe,
    color: "bg-brand", // Green
  },
  {
    title: "Personalized Career Planning",
    desc: "Tailoring guidance to align with your unique individual interests, strengths, and long-term goals in academia or industry.",
    icon: Target,
    color: "bg-white", // White
  }
];

export function MentoringApproach() {
  return (
    <section className="py-24 overflow-clip bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24">
          <div className="relative inline-block mt-4">
            <h2 className="text-4xl md:text-5xl font-black bg-white px-6 py-2 border-[4px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] transform -rotate-1 hover:rotate-0 transition-transform duration-300 uppercase tracking-tight">
              My Mentoring Approach
            </h2>
          </div>
          <p className="text-lg md:text-xl font-bold text-dark mt-8 max-w-2xl bg-[#FFC900] p-4 border-[3px] border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]">
            A philosophy built on continuous learning, conceptual clarity, and rigorous scientific inquiry.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Thick Dashed Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0 border-l-[4px] border-dashed border-dark -translate-x-1/2" />

          <div className="space-y-16">
            {approaches.map((approach, i) => {
              const isEven = i % 2 === 0;

              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center w-full group ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Chunky Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-[4px] border-dark bg-white shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] flex items-center justify-center z-20 group-hover:bg-[#FF90E8] transition-colors duration-300"
                  >
                    <div className="w-4 h-4 bg-dark rounded-full" />
                  </motion.div>

                  {/* Brutalist Card */}
                  <div className={`ml-24 md:ml-0 w-[calc(100%-6rem)] md:w-[45%] flex ${isEven ? 'justify-end md:pr-12' : 'justify-start md:pl-12'}`}>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.1 }}
                      className={`
                        ${approach.color}
                        w-full border-[4px] border-dark 
                        rounded-2xl p-8 
                        shadow-[8px_8px_0px_0px_rgba(25,26,35,1)]
                        hover:shadow-[12px_12px_0px_0px_rgba(25,26,35,1)] hover:-translate-y-1 hover:-translate-x-1
                        transition-all duration-300
                        relative overflow-hidden
                      `}
                    >
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="w-14 h-14 bg-white border-[3px] border-dark rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(25,26,35,1)]">
                          <approach.icon size={28} className="text-dark" />
                        </div>
                        <h4 className="text-2xl font-black text-dark uppercase tracking-tight leading-tight flex-1">
                          {approach.title}
                        </h4>
                      </div>
                      
                      <p className="text-lg font-bold text-dark/90 bg-white/70 p-4 border-[2px] border-dark relative z-10">
                        {approach.desc}
                      </p>

                      {/* Giant faded watermark icon */}
                      <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none transform -rotate-12">
                        <approach.icon size={200} className="text-dark" />
                      </div>

                    </motion.div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
