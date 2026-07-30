'use client';
import React, { useState } from 'react';
import { experiences } from './data';

export default function ConceptAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border-[3px] border-dark overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] my-2' : 'shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] hover:shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:-translate-y-1 cursor-pointer'}`}
            >
              {/* Header / Always visible part */}
              <div 
                className={`p-5 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${isExpanded ? 'bg-dark/5 cursor-default' : 'cursor-pointer'}`}
                onClick={() => !isExpanded && toggleAccordion(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border-[3px] border-dark bg-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] mt-1 md:mt-0">
                     <div className={`w-4 h-4 rounded-full ${exp.type === 'academic' ? 'bg-[#FF90E8]' : 'bg-[#FFC900]'}`}></div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-dark tracking-tight">{exp.role}</h3>
                    <h4 className="text-sm font-bold text-dark/70">{exp.institution}</h4>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 self-end md:self-auto max-md:w-full max-md:justify-between">
                  <div className={`px-3 py-1 rounded-md text-sm font-black border-2 border-dark shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] ${exp.type === 'academic' ? 'bg-[#FF90E8] text-dark' : 'bg-[#FFC900] text-dark'}`}>
                    {exp.duration}
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAccordion(index);
                    }}
                    className="w-8 h-8 flex items-center justify-center border-2 border-dark rounded-full bg-white hover:bg-brand transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Expandable Content */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 md:p-6 pt-0 md:pt-0 border-t-2 border-dark/10 mt-4 md:mt-0 max-md:mt-2 bg-dark/5 pb-6">
                    <p className="text-base text-dark/90 font-bold mb-4 pt-4">
                      {exp.description}
                    </p>

                    {exp.subjects && exp.subjects.length > 0 && (
                      <div className="flex flex-wrap gap-2 gap-y-3 mt-4">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
