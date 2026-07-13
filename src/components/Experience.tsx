import React from 'react';

const experiences = [
  {
    type: 'academic',
    role: "Assistant Professor (Contractual)",
    institution: "Regional Institute of Education, Bhubaneswar",
    duration: "June 2025 - May 2026",
    description: "Department of Education in Science and Mathematics (DESM). Fostering analytical skills and delivering application-based lessons.",
    subjects: []
  },
  {
    type: 'academic',
    role: "Assistant Professor (Adhoc)",
    institution: "Modern College of Arts, Science & Commerce, Pune",
    duration: "Sept 2022 - March 2023",
    description: "Department of Zoology (Postgraduate). Designed and executed comprehensive curriculum for postgraduate students.",
    subjects: ["Biochemistry", "Genetics", "Cell Biology", "Immunology", "Molecular Biology", "Biotechnology", "Research Methodology"]
  },
  {
    type: 'research',
    role: "PhD Researcher",
    institution: "Chironomus circumdatus Studies",
    duration: "2017 - 2021",
    description: "Isolated bacteria from the gut of Chironomus circumdatus, characterized esterases enzyme from them and studied the role of Carboxylesterases in biodegrading of plasticizers.",
    subjects: []
  },
  {
    type: 'research',
    role: "Master's Dissertation",
    institution: "Chironomus ramosus Studies",
    duration: "Dec 2014 - Feb 2016",
    description: "Studied photoreceptors present in the different developmental stages of Chironomus and opsins present in them.",
    subjects: []
  },
  {
    type: 'research',
    role: "Bachelor's Dissertation",
    institution: "Vigna unguiculata Studies",
    duration: "June 2012 - March 2013",
    description: "Extracted, purified and immobilized Alkaline phosphatase enzyme from Vigna unguiculata.",
    subjects: []
  }
];

export function Experience() {
  return (
    <section id="experience" className="pt-4 pb-20 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative">
      {/* Top fade gradient to blend background texture */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>
      
      <div className="w-full relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12 max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative inline-block mt-4">
            <h2 className="text-4xl md:text-5xl font-black bg-brand px-6 py-2 border-[3px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              The Journey
            </h2>
          </div>
          <p className="text-lg text-dark font-bold mt-6 max-w-2xl bg-white/90 p-4 rounded-lg border-2 border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] backdrop-blur-sm">
            A chronological timeline blending intensive academic teaching with deep-dive research.
          </p>
        </div>

        {/* Horizontal Timeline Track */}
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-0 px-4 md:px-8 lg:px-16 pb-12 pt-4 [&::-webkit-scrollbar]:hidden"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            const cardContent = (
              <div className="bg-white rounded-2xl p-6 md:p-8 border-[3px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(25,26,35,1)] transition-all duration-300 relative group overflow-hidden w-full h-full z-10 text-left">
                {/* Decorative accent block */}
                <div className={`absolute top-0 left-0 w-20 h-20 ${exp.type === 'academic' ? 'bg-[#FF90E8]' : 'bg-[#FFC900]'} rounded-br-full opacity-30 transition-transform group-hover:scale-125`}></div>

                <div className={`relative z-10 inline-block px-3 py-1 rounded-md text-sm font-black border-2 border-dark mb-4 shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] ${exp.type === 'academic' ? 'bg-[#FF90E8] text-dark' : 'bg-[#FFC900] text-dark'}`}>
                  {exp.duration}
                </div>
                
                <h3 className="text-xl md:text-2xl font-black mb-3 text-dark tracking-tight leading-tight">{exp.role}</h3>
                <h4 className="text-sm font-black text-dark mb-5 bg-brand/40 inline-block px-2 py-1 border border-dark/20 rounded">{exp.institution}</h4>
                
                <p className="text-base text-dark/80 font-bold mb-4">
                  {exp.description}
                </p>

                {exp.subjects && exp.subjects.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-dark/10">
                    {exp.subjects.map((sub, idx) => (
                      <span key={idx} className="bg-dark text-white px-2 py-1 rounded text-xs font-black shadow-[2px_2px_0px_0px_#B9FF66]">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );

            return (
              <div key={index} className="shrink-0 w-[85vw] md:w-[500px] snap-center relative flex flex-col md:grid md:grid-rows-2 md:h-[650px] gap-6 md:gap-0">
                
                {/* Horizontal line segment (only on desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[4px] bg-dark -translate-y-1/2 z-0"></div>

                {/* Mobile View Card */}
                <div className="md:hidden">
                  {cardContent}
                </div>

                {/* Desktop View - Top Half */}
                <div className="hidden md:flex flex-col justify-end pb-12 relative px-4">
                  {isEven && (
                    <>
                      {/* Vertical line connecting card to main track */}
                      <div className="absolute bottom-0 left-1/2 w-[4px] h-12 bg-dark -translate-x-1/2 z-0"></div>
                      {/* Dot on the track */}
                      <div className="absolute -bottom-4 left-1/2 w-8 h-8 rounded-full border-[4px] border-dark bg-white shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] -translate-x-1/2 z-20 flex items-center justify-center">
                        <div className={`w-3 h-3 rounded-full ${exp.type === 'academic' ? 'bg-[#FF90E8]' : 'bg-[#FFC900]'}`}></div>
                      </div>
                      {cardContent}
                    </>
                  )}
                </div>

                {/* Desktop View - Bottom Half */}
                <div className="hidden md:flex flex-col justify-start pt-12 relative px-4">
                  {!isEven && (
                    <>
                      {/* Vertical line connecting card to main track */}
                      <div className="absolute top-0 left-1/2 w-[4px] h-12 bg-dark -translate-x-1/2 z-0"></div>
                      {/* Dot on the track */}
                      <div className="absolute -top-4 left-1/2 w-8 h-8 rounded-full border-[4px] border-dark bg-white shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] -translate-x-1/2 z-20 flex items-center justify-center">
                        <div className={`w-3 h-3 rounded-full ${exp.type === 'academic' ? 'bg-[#FF90E8]' : 'bg-[#FFC900]'}`}></div>
                      </div>
                      {cardContent}
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
