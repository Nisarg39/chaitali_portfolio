import React from 'react';
import { experiences } from './data';

export default function ConceptVerticalTimeline() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-dark -translate-x-1/2 rounded-full z-0"></div>

        <div className="flex flex-col gap-12 md:gap-24 relative z-10">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const alignClass = isEven ? "md:pr-12 md:text-right md:items-end" : "md:pl-12 md:text-left md:items-start";
            const rowClass = isEven ? "md:flex-row" : "md:flex-row-reverse";

            return (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center w-full relative ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 w-8 h-8 rounded-full border-[4px] border-dark bg-white shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${exp.type === 'academic' ? 'bg-[#FF90E8]' : 'bg-[#FFC900]'}`}></div>
                </div>

                {/* Card Container */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 flex flex-col ${alignClass}`}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 border-[3px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(25,26,35,1)] transition-all duration-300 relative group overflow-hidden w-full text-left">
                    {/* Decorative accent block */}
                    <div className={`absolute top-0 ${isEven ? 'md:right-0 md:left-auto rounded-bl-full' : 'left-0 rounded-br-full'} max-md:left-0 max-md:rounded-br-full w-20 h-20 ${exp.type === 'academic' ? 'bg-[#FF90E8]' : 'bg-[#FFC900]'} opacity-30 transition-transform group-hover:scale-125`}></div>

                    <div className={`relative z-10 inline-block px-3 py-1 rounded-md text-sm font-black border-2 border-dark mb-4 shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] ${exp.type === 'academic' ? 'bg-[#FF90E8] text-dark' : 'bg-[#FFC900] text-dark'}`}>
                      {exp.duration}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-black mb-3 text-dark tracking-tight leading-tight">{exp.role}</h3>
                    <h4 className="text-sm font-black text-dark mb-5 bg-brand/40 inline-block px-2 py-1 border border-dark/20 rounded">{exp.institution}</h4>
                    
                    <p className="text-base text-dark/80 font-bold mb-4">
                      {exp.description}
                    </p>

                    {exp.subjects && exp.subjects.length > 0 && (
                      <div className={`flex flex-wrap gap-2 gap-y-3 mt-2 ${isEven ? 'md:justify-end' : 'md:justify-start'} max-md:justify-start`}>
                        {exp.subjects.map((sub, idx) => (
                          <span key={idx} className="bg-dark text-white px-2 py-1 rounded text-xs font-black shadow-[2px_2px_0px_0px_#B9FF66]">
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
