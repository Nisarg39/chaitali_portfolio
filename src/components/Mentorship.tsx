import React from 'react';

const pgProjects = [
  {
    title: "Impact of exotic plants on butterflies in Pune urban area",
    student: "Prathamesh Sureshrao Mule"
  },
  {
    title: "Assessment of aquatic environment characteristics surrounding the Chironomus species in the natural conditions.",
    student: "Ruchita Narendra Bhosale"
  },
  {
    title: "Study the interaction between butterflies and plants in Pune City.",
    student: "Radhakisan Girish Waghmare"
  }
];

const ugProjects = [
  {
    title: "Plasticizer pollution and microbial remediation: principles, applications and future perspectives.",
    student: "Sheetal Toppo"
  },
  {
    title: "A multidisciplinary review of chironomus: bioindicators, model organisms and ecosystem engineers.",
    student: "Pragati Pradhan"
  },
  {
    title: "Microflora: diversity and functions in aquatic animals.",
    student: "Deepanjali Swain"
  },
  {
    title: "DNA metabarcoding in insects: principles, application and future perspectives.",
    student: "Esita Mondal"
  },
  {
    title: "Role of enzymes in aquatic insects.",
    student: "Dibyajyoti Samantaray"
  },
  {
    title: "A review on contraception in India: current practices and emerging needs.",
    student: "Goldy Kumari"
  },
  {
    title: "Shift from classical education to application-based learning in zoology: a paradigm transformation in higher education under nep 2020.",
    student: "Swagatika Sahu"
  }
];

export function Mentorship() {
  return (
    <section id="mentorship" className="py-20 bg-white relative border-t-[3px] border-dark">
      
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#191A23" strokeWidth="8" strokeDasharray="10 10"/>
        </svg>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Giant Poster Container */}
        <div className="flex flex-col lg:flex-row border-[3px] border-dark bg-[#f4f4f0] shadow-[16px_16px_0px_0px_rgba(25,26,35,1)]">
          
          {/* Left Vertical Banner */}
          <div className="lg:w-32 bg-[#FF90E8] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-dark relative">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] pointer-events-none"></div>
            
            {/* Sticky Container */}
            <div className="sticky top-24 py-6 lg:py-10 w-full flex justify-center z-10">
              {/* Mobile horizontal text */}
              <h2 className="text-6xl lg:hidden font-black uppercase tracking-tighter text-dark whitespace-nowrap">
                Mentorship
              </h2>
              {/* Desktop vertical text */}
              <h2 
                className="hidden lg:block text-8xl font-black uppercase tracking-tighter text-dark"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Mentorship
              </h2>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-8 lg:p-16">
            
            <div className="mb-16 max-w-4xl">
              <h3 className="text-3xl lg:text-5xl font-black uppercase leading-none mb-6">
                Guiding the Next Generation
              </h3>
              <p className="text-xl lg:text-2xl font-bold text-dark/80 leading-relaxed border-l-8 border-[#FFC900] pl-6">
                Fostering analytical skills and deep-dive research through dedicated mentorship for postgraduate and undergraduate students.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">
              
              {/* Postgraduate Column */}
              <div>
                <div className="flex items-center gap-4 mb-8 border-b-[3px] border-dark pb-4">
                  <div className="bg-[#FFC900] w-12 h-12 border-[3px] border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] flex items-center justify-center rotate-3">
                    <span className="font-black text-xl">PG</span>
                  </div>
                  <h4 className="text-4xl font-black uppercase tracking-tight">M.Sc. Projects</h4>
                  {/* PG Count Badge */}
                  <div className="ml-auto bg-white border-2 border-dark px-3 py-1 text-xl font-black shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] -rotate-3">
                    {pgProjects.length}
                  </div>
                </div>
                
                <div className="space-y-12">
                  {pgProjects.map((project, index) => (
                    <div key={index} className="relative group">
                      {/* Decorative quote mark */}
                      <span className="absolute -left-6 -top-4 text-6xl text-brand font-serif opacity-50 select-none hidden md:block">"</span>
                      
                      <h5 className="text-2xl lg:text-3xl font-black text-dark leading-tight mb-4 uppercase">
                        {project.title}
                      </h5>
                      <div className="inline-block transform -rotate-1 group-hover:rotate-0 transition-transform">
                        <span className="bg-dark text-[#FFC900] font-black uppercase px-4 py-2 text-sm md:text-base border-2 border-dark shadow-[4px_4px_0px_0px_#B9FF66] inline-flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          {project.student}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Undergraduate Column */}
              <div>
                <div className="flex items-center gap-4 mb-8 border-b-[3px] border-dark pb-4">
                  <div className="bg-[#22D3EE] w-12 h-12 border-[3px] border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] flex items-center justify-center -rotate-3">
                    <span className="font-black text-xl">UG</span>
                  </div>
                  <h4 className="text-4xl font-black uppercase tracking-tight">B.Sc. Projects</h4>
                  {/* UG Count Badge */}
                  <div className="ml-auto bg-white border-2 border-dark px-3 py-1 text-xl font-black shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] rotate-3">
                    {ugProjects.length}
                  </div>
                </div>
                
                <div className="space-y-12">
                  {ugProjects.map((project, index) => (
                    <div key={index} className="relative group">
                      <span className="absolute -left-6 -top-4 text-6xl text-brand font-serif opacity-50 select-none hidden md:block">"</span>
                      
                      <h5 className="text-xl lg:text-2xl font-black text-dark leading-tight mb-4 uppercase">
                        {project.title}
                      </h5>
                      <div className="inline-block transform rotate-1 group-hover:rotate-0 transition-transform">
                        <span className="bg-dark text-[#22D3EE] font-black uppercase px-4 py-2 text-sm md:text-base border-2 border-dark shadow-[4px_4px_0px_0px_#FF90E8] inline-flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          {project.student}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
