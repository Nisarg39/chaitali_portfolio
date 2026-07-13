import React from 'react';

const training = [
  {
    title: "Refresher Course in Zoology",
    organization: "Ministry of Education",
    category: "Higher Education",
    color: "text-[#FF90E8]",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    )
  },
  {
    title: "Virtual Labs Project BootCamp",
    organization: "IIT Bombay",
    category: "Technical Training",
    color: "text-[#B9FF66]",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
    )
  },
  {
    title: "Art and Science of Publication Writing",
    organization: "One Week STTP Workshop",
    category: "Professional Development",
    color: "text-[#22D3EE]",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    )
  }
];

export function Training() {
  return (
    <section id="training" className="py-32 bg-dark text-white relative overflow-hidden">
      
      {/* Giant Decorative Background SVGs */}
      <svg className="absolute top-0 right-0 text-[#FF90E8] opacity-[0.03] transform translate-x-1/4 -translate-y-1/4 pointer-events-none" width="800" height="800" viewBox="0 0 100 100">
         <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 left-0 text-[#B9FF66] opacity-[0.03] transform -translate-x-1/4 translate-y-1/4 pointer-events-none animate-pulse" width="600" height="600" viewBox="0 0 100 100">
         <circle cx="50" cy="50" r="50" fill="currentColor" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 border-b-4 border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4">
            Professional <span className="text-dark" style={{ WebkitTextStroke: '2px #B9FF66' }}>Training</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white/60 max-w-2xl mt-6">
            Continuous development and technical training to stay at the forefront of education and research.
          </p>
        </div>

        {/* Typographic List Layout */}
        <div className="flex flex-col gap-16 md:gap-20">
          {training.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center group cursor-default">
              
              {/* Giant Number */}
              <div 
                className="text-7xl md:text-9xl font-black text-transparent group-hover:text-white transition-colors duration-500 shrink-0" 
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}
              >
                0{index + 1}
              </div>

              {/* Line Separator (Expands on hover) */}
              <div className="w-16 h-[2px] md:h-[4px] bg-white/20 group-hover:bg-white group-hover:w-32 transition-all duration-500 shrink-0 hidden md:block"></div>

              {/* Content */}
              <div className="flex-1">
                <h4 className={`text-sm md:text-base font-black uppercase tracking-widest ${item.color} mb-3`}>
                  {item.category}
                </h4>
                <h3 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl font-medium text-white/50 italic">
                  {item.organization}
                </p>
              </div>
              
              {/* Decorative SVG for each item */}
              <div className={`hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0 group-hover:rotate-12 ${item.color}`}>
                {item.svg}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
