import React from 'react';
import { experiences } from './data';

// Helper for halftone background
const HalftoneBg = () => (
  <div 
    className="absolute inset-0 opacity-10 pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
      backgroundSize: '12px 12px'
    }}
  />
);

// Dialogue bubble tail SVG
const BubbleTail = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`absolute w-6 h-6 fill-white stroke-dark stroke-[3px] ${className}`}
    style={{ filter: 'drop-shadow(2px 2px 0px rgba(25,26,35,1))' }}
  >
    <path d="M2,2 L12,22 L22,2 Z" />
  </svg>
);

export default function ConceptComicPanels() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
        {experiences.map((exp, index) => {
          // Asymmetrical grid logic: 
          // We vary the size of panels based on index to create a comic book feel
          let colSpan = 'md:col-span-6';
          let rowSpan = 'row-span-1';
          let rotation = '';
          let bgClass = 'bg-white';
          
          if (index % 4 === 0) {
            colSpan = 'md:col-span-7';
            rowSpan = 'row-span-2';
            bgClass = 'bg-[#FF90E8]';
          } else if (index % 4 === 1) {
            colSpan = 'md:col-span-5';
            rotation = 'hover:-rotate-2';
            bgClass = 'bg-white';
          } else if (index % 4 === 2) {
            colSpan = 'md:col-span-4';
            bgClass = 'bg-[#FFC900]';
          } else if (index % 4 === 3) {
            colSpan = 'md:col-span-8';
            rowSpan = 'row-span-2';
            rotation = 'hover:rotate-1';
            bgClass = 'bg-brand';
          }

          // Force all to be 1 col on mobile
          const gridClasses = `max-md:col-span-1 ${colSpan} ${rowSpan} ${rotation}`;
          
          const isColorful = bgClass !== 'bg-white';

          return (
            <div key={index} className={`${gridClasses} relative group transition-transform duration-300`}>
              <div className={`h-full ${bgClass} border-[4px] border-dark shadow-[8px_8px_0px_0px_rgba(25,26,35,1)] p-6 md:p-8 flex flex-col relative overflow-visible`}>
                
                {isColorful && <HalftoneBg />}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Header - Year as a "caption box" */}
                  <div className="absolute -top-5 -left-2 bg-white border-4 border-dark px-4 py-1 font-black text-xl shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] -rotate-3 z-20">
                    {exp.duration}
                  </div>

                  {/* Main content */}
                  <div className="mt-4 flex-grow">
                    <h3 className={`text-2xl md:text-3xl font-black mb-2 text-dark uppercase leading-none ${isColorful ? 'text-white' : ''}`} style={{ WebkitTextStroke: isColorful ? '1px #191A23' : '0px' }}>
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-black text-dark mb-4 bg-white/80 inline-block px-2 border-2 border-dark/20 leading-snug shadow-sm">
                      {exp.institution}
                    </h4>
                    
                    <p className={`text-base md:text-lg font-bold border-l-4 border-dark pl-4 ${isColorful ? 'text-dark/90' : 'text-dark/80'}`}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Subjects as Dialogue Bubbles */}
                  {exp.subjects && exp.subjects.length > 0 && (
                    <div className="flex flex-wrap gap-4 gap-y-6 mt-8 relative z-20">
                      {exp.subjects.map((sub, idx) => (
                        <div key={idx} className="relative group/bubble">
                          <span className={`block bg-white text-dark px-3 py-2 border-[3px] border-dark text-sm md:text-base font-black shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] rounded-2xl rounded-bl-none ${idx % 2 === 0 ? 'rotate-2' : '-rotate-1'}`}>
                            {sub}
                          </span>
                        </div>
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
  );
}
