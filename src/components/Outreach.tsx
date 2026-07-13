import React from 'react';

export function Outreach() {
  return (
    <section id="outreach" className="py-20 bg-white border-t-[3px] border-dark relative overflow-hidden">
      
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Floating Typography Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-dark mb-2 leading-none">
            Outreach <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #191A23' }}>& Education</span>
          </h2>
        </div>

        {/* Free-flowing Layout (No Cards) */}
        <div className="flex flex-col gap-20">
          
          {/* Vichar Education */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 z-10">
                <div className="inline-block bg-[#FF90E8] text-dark font-black px-4 py-1 mb-6 border-2 border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] transform -rotate-2 text-base md:text-lg">
                  Dec 2023 - April 2025
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-dark mb-6 tracking-tighter leading-[0.9]">
                  Vichar <br/> Education
                </h3>
                
                <p className="text-lg md:text-xl font-bold text-dark/80 mb-8 max-w-xl leading-relaxed">
                  Founder & Educator on a dedicated online platform offering recorded sessions for NEET Biology students.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 bg-white border-2 border-dark font-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] transition-all text-base group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 group-hover:scale-110 transition-transform"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z" fill="white"/></svg>
                    YouTube Channel
                  </button>
                  <button className="flex items-center gap-2 bg-white border-2 border-dark font-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] transition-all text-base group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                    Mobile App
                  </button>
                </div>
              </div>

              {/* Abstract Graphic */}
              <div className="w-full md:w-2/5 flex justify-center md:justify-end relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#B9FF66] rounded-full blur-3xl opacity-50 z-0"></div>
                <svg className="relative z-10 w-48 h-48 md:w-64 md:h-64 text-dark animate-spin-slow" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 0L120 80L200 100L120 120L100 200L80 120L0 100L80 80L100 0Z" fill="currentColor"/>
                  <circle cx="100" cy="100" r="30" fill="#FF90E8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dotted Line Separator */}
          <div className="w-full border-t-[3px] border-dashed border-dark/20"></div>

          {/* IRP Block */}
          <div className="relative">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              
              <div className="flex-1 z-10 md:text-right flex flex-col md:items-end">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#22D3EE] border-2 border-dark rounded-full shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] mb-6 transform rotate-12 hover:rotate-45 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-dark"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-dark mb-4">
                  Internal <br/> Resource <br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px #191A23' }}>Person</span>
                </h3>
                
                <p className="text-lg md:text-xl font-bold text-dark/80 mb-6 max-w-xl leading-relaxed">
                  Served as an IRP for the PAC 24.10 approved research programme:
                </p>

                <div className="bg-[#FFC900] border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(25,26,35,1)] p-6 md:p-8 transform -rotate-1 max-w-xl text-left md:text-right hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-lg md:text-xl font-black italic leading-tight text-dark">
                    "Developing Environmental Education Activities at Regional Institute of Education for sensitizing Pre-service and In-service Teachers and School Children"
                  </p>
                </div>
              </div>

              {/* Abstract Graphic */}
              <div className="w-full md:w-2/5 flex justify-center md:justify-start relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#22D3EE] rounded-full blur-3xl opacity-50 z-0"></div>
                <svg className="relative z-10 w-48 h-48 md:w-64 md:h-64 text-dark" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="25" width="150" height="150" stroke="currentColor" strokeWidth="8" strokeDasharray="20 10"/>
                  <circle cx="100" cy="100" r="50" fill="#FFC900" stroke="currentColor" strokeWidth="8"/>
                  <path d="M100 50L100 150M50 100L150 100" stroke="currentColor" strokeWidth="8"/>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
