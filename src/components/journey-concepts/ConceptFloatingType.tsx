import React from 'react';
import { experiences } from './data';

// A jagged SVG line to connect the experiences
const JaggedLine = () => (
  <div className="absolute left-[10%] md:left-1/2 top-0 bottom-0 w-4 h-full pointer-events-none -translate-x-1/2 z-0 hidden md:block">
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000">
      <path 
        d="M50,0 L20,100 L80,200 L30,300 L70,400 L20,500 L80,600 L40,700 L60,800 L20,900 L50,1000" 
        fill="none" 
        stroke="#191A23" 
        strokeWidth="4" 
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  </div>
);

export default function ConceptFloatingType() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-0 relative bg-[#F3F4F6] overflow-hidden">
      
      <JaggedLine />

      <div className="flex flex-col relative z-10">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center py-20 border-b-4 border-dark/5 md:border-b-0">
              
              {/* Massive Sticky Background Typography for the Year */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-20 md:opacity-30">
                <span className="text-[150px] md:text-[300px] font-black text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '4px #191A23' }}>
                  {exp.duration.split(' ')[0]} {/* Takes just the first year or word */}
                </span>
              </div>

              {/* Floating Content (No Card) */}
              <div className={`relative z-20 w-full md:w-3/5 ${isEven ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'}`}>
                
                <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end max-md:items-start'}`}>
                  
                  {/* Floating Date Badge */}
                  <div className={`inline-block px-4 py-2 text-xl md:text-2xl font-black bg-brand border-[3px] border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] mb-6 ${isEven ? '-rotate-3' : 'rotate-2'}`}>
                    {exp.duration}
                  </div>

                  {/* Raw Text for Role */}
                  <h3 className={`text-4xl md:text-6xl font-black mb-2 text-dark uppercase leading-[0.9] tracking-tighter ${isEven ? 'md:text-left' : 'md:text-right max-md:text-left'}`}>
                    {exp.role}
                  </h3>
                  
                  {/* Highlighted Institution */}
                  <h4 className="text-xl md:text-2xl font-black text-dark mb-8 bg-[#FF90E8] inline-block px-3 py-1 border-[3px] border-dark">
                    @ {exp.institution}
                  </h4>
                  
                  {/* Uncontained Description */}
                  <p className={`text-lg md:text-xl font-bold max-w-md bg-white p-4 border-l-8 border-dark ${isEven ? 'md:text-left' : 'md:text-right max-md:text-left'}`}>
                    {exp.description}
                  </p>

                  {/* Sticker Badges */}
                  {exp.subjects && exp.subjects.length > 0 && (
                    <div className={`flex flex-wrap gap-4 mt-10 max-w-lg ${isEven ? 'md:justify-start' : 'md:justify-end max-md:justify-start'}`}>
                      {exp.subjects.map((sub, idx) => {
                        // Randomize sticker colors and rotations
                        const colors = ['bg-[#FFC900]', 'bg-[#FF90E8]', 'bg-brand', 'bg-white'];
                        const color = colors[idx % colors.length];
                        const rotations = ['rotate-3', '-rotate-6', 'rotate-6', '-rotate-2'];
                        const rot = rotations[idx % rotations.length];

                        return (
                          <div key={idx} className={`px-4 py-2 ${color} border-[3px] border-dark font-black text-lg shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] ${rot} hover:scale-110 transition-transform cursor-default`}>
                            #{sub.toUpperCase()}
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
