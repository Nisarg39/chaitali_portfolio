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
    role: "Biology Teacher",
    institution: "Takalkar Academy",
    duration: "Nov 2023 - May 2025",
    description: "Biology teacher (11th and 12th standard, NEET, MH-CET).",
    subjects: ["Biology", "NEET", "MH-CET"]
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
    type: 'academic',
    role: "Biology Teacher (Part time)",
    institution: "ECM²",
    duration: "2015 - 2017, 2023 - Present",
    description: "Biology teacher (9th to 12th Standard, NEET, MH-CET).",
    subjects: ["Biology", "NEET", "MH-CET"]
  },
  {
    type: 'academic',
    role: "Biology Teacher (Part time)",
    institution: "Om Sai Classes",
    duration: "2015 - 2020",
    description: "Biology teacher (9th to 12th Standard, NEET, MH-CET).",
    subjects: ["Biology", "NEET", "MH-CET"]
  },
  {
    type: 'academic',
    role: "Biology Teacher (Part time)",
    institution: "Smart Tutorials",
    duration: "2015 - 2016",
    description: "Biology teacher (9th to 12th Standard, NEET, MH-CET).",
    subjects: ["Biology", "NEET", "MH-CET"]
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
    <section id="experience" className="pt-4 pb-20 overflow-clip bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative">
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

        {/* Folder Cabinet Style Timeline */}
        <div className="w-full max-w-4xl mx-auto px-4 pt-12 pb-4 relative">
          <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => {
              // Cycle through some nice neo-brutalist colors for the folders
              const colors = ['bg-[#FF90E8]', 'bg-[#FFC900]', 'bg-brand', 'bg-white'];
              const bgColor = colors[index % colors.length];
              
              // Z-index increases so later items stack on top. 
              // We use sticky so as you scroll they pile up at the top.
              const topOffset = `${(index * 20) + 40}px`;

              return (
                <div 
                  key={index} 
                  className={`sticky transition-all duration-300 hover:-translate-y-2 group`}
                  style={{ top: topOffset, zIndex: index + 10 }}
                >
                  {/* Folder Tab */}
                  <div className="flex px-4 md:px-8">
                    <div className={`
                      ${bgColor} 
                      border-t-[4px] border-x-[4px] border-dark 
                      px-6 py-2 md:py-3 
                      rounded-t-2xl 
                      font-black text-lg md:text-xl 
                      shadow-[4px_0px_0px_0px_rgba(25,26,35,1)]
                      transform translate-y-[4px]
                      inline-block
                    `}>
                      {exp.duration}
                    </div>
                  </div>

                  {/* Folder Body */}
                  <div className={`
                    ${bgColor} 
                    border-[4px] border-dark 
                    rounded-2xl rounded-tl-none 
                    p-6 md:p-10 
                    shadow-[8px_8px_0px_0px_rgba(25,26,35,1)]
                    min-h-[300px]
                  `}>
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                      
                      <div className="w-full md:w-2/3 text-left">
                        <h3 className="text-3xl md:text-4xl font-black mb-3 text-dark uppercase tracking-tight" style={{ WebkitTextStroke: bgColor === 'bg-white' ? '0px' : '1px #191A23' }}>
                          {exp.role}
                        </h3>
                        <h4 className="text-xl font-bold text-dark mb-6 bg-white inline-block px-3 py-1 border-2 border-dark">
                          {exp.institution}
                        </h4>
                        
                        <p className="text-lg md:text-xl font-bold text-dark/90 bg-white/50 p-4 border-[3px] border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]">
                          {exp.description}
                        </p>
                      </div>

                      {/* Badges/Stickers on the folder */}
                      {exp.subjects && exp.subjects.length > 0 && (
                        <div className="w-full md:w-1/3 flex flex-wrap gap-3 p-4 border-2 border-dashed border-dark/40 rounded-xl bg-white/20">
                          <div className="w-full text-sm font-black uppercase mb-1 text-left">Tags:</div>
                          {exp.subjects.map((sub, idx) => (
                            <span key={idx} className="bg-dark text-white px-3 py-1 font-black text-sm border-2 border-transparent hover:border-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                      
                    </div>
                  </div>
                  
                  {/* Spacer below each folder so the next one can sit slightly lower when scrolling */}
                  <div className="h-16 md:h-24"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
