'use client';
import { motion } from "framer-motion";

export function GuidanceCTA() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-[#FFC900] border-y-[6px] border-dark overflow-hidden py-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mt-32">
      
      {/* Infinite Scrolling Marquee Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden rotate-[-2deg] scale-110">
        <motion.div
          animate={{ x: [0, -1035] }} // -1035px is approx the width of one set of text
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="whitespace-nowrap flex font-black text-[150px] uppercase text-dark leading-none"
        >
          {/* Repeat text several times to ensure smooth looping */}
          <span>TAKE THE NEXT STEP • START NOW • RESEARCH GUIDANCE • </span>
          <span>TAKE THE NEXT STEP • START NOW • RESEARCH GUIDANCE • </span>
          <span>TAKE THE NEXT STEP • START NOW • RESEARCH GUIDANCE • </span>
          <span>TAKE THE NEXT STEP • START NOW • RESEARCH GUIDANCE • </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Massive Text Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter"
            style={{ WebkitTextStroke: '2px #191A23' }}
          >
            Ready <br/>
            To <br/>
            <span className="text-dark" style={{ WebkitTextStroke: '0px' }}>Begin?</span>
          </h2>
        </div>

        {/* Action Box Side */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white border-[4px] border-dark p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(25,26,35,1)] transform rotate-1">
            <p className="text-xl md:text-2xl font-bold text-dark mb-10 leading-snug">
              Whether you are planning your academic pathway, beginning a research project, or seeking guidance on publications, <span className="bg-[#FF90E8] px-2">I am here to help.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-dark rounded-xl translate-x-[6px] translate-y-[6px] transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="relative bg-brand text-dark font-black uppercase tracking-wide px-8 py-5 border-[3px] border-dark rounded-xl transform transition-transform duration-200 group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
                  Schedule Consultation
                </div>
              </button>

              <button className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-dark rounded-xl translate-x-[6px] translate-y-[6px] transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="relative bg-[#FF90E8] text-dark font-black uppercase tracking-wide px-8 py-5 border-[3px] border-dark rounded-xl transform transition-transform duration-200 group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
                  Research Opportunities
                </div>
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t-[3px] border-dashed border-dark/30">
              <p className="font-bold text-dark/70 text-sm uppercase tracking-wider">
                Specialized guidance for literature reviews & molecular biology.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
