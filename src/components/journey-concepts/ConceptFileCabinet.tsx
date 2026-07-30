import React from 'react';
import { experiences } from './data';

export default function ConceptFileCabinet() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 relative min-h-[150vh]">
      <div className="flex flex-col gap-0 pb-32">
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
                  
                  <div className="w-full md:w-2/3">
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
                      <div className="w-full text-sm font-black uppercase mb-1">Tags:</div>
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
  );
}
