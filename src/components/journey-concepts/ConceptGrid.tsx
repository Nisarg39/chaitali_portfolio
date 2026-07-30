import React from 'react';
import { experiences } from './data';

export default function ConceptGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {experiences.map((exp, index) => {
          return (
            <div key={index} className="break-inside-avoid">
              <div className="bg-white rounded-2xl p-6 md:p-8 border-[3px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(25,26,35,1)] transition-all duration-300 relative group overflow-hidden text-left h-full flex flex-col">
                {/* Decorative accent block */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${exp.type === 'academic' ? 'bg-[#FF90E8]' : 'bg-[#FFC900]'} rounded-bl-full opacity-30 transition-transform group-hover:scale-125`}></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className={`inline-block px-3 py-1 rounded-md text-sm font-black border-2 border-dark shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] ${exp.type === 'academic' ? 'bg-[#FF90E8] text-dark' : 'bg-[#FFC900] text-dark'}`}>
                    {exp.duration}
                  </div>
                  {/* Small badge for type */}
                  <div className="w-8 h-8 rounded-full border-[3px] border-dark bg-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(25,26,35,1)]">
                     <div className={`w-3 h-3 rounded-full ${exp.type === 'academic' ? 'bg-[#FF90E8]' : 'bg-[#FFC900]'}`}></div>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black mb-3 text-dark tracking-tight leading-tight">{exp.role}</h3>
                <h4 className="text-sm font-black text-dark mb-5 bg-brand/40 inline-block self-start px-2 py-1 border border-dark/20 rounded">{exp.institution}</h4>
                
                <p className="text-base text-dark/80 font-bold mb-6 flex-grow">
                  {exp.description}
                </p>

                {exp.subjects && exp.subjects.length > 0 && (
                  <div className="flex flex-wrap gap-2 gap-y-3 mt-auto pt-4 border-t-2 border-dark/10">
                    {exp.subjects.map((sub, idx) => (
                      <span key={idx} className="bg-dark text-white px-2 py-1 rounded text-xs font-black shadow-[2px_2px_0px_0px_#B9FF66]">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
