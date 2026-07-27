import React from 'react';

export function Outreach() {
  return (
    <section id="outreach" className="py-20 bg-white border-t-[3px] border-dark relative overflow-hidden">
      
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Floating Typography Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-dark mb-2 leading-none">
            Outreach <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #191A23' }}>& Education</span>
          </h2>
        </div>

        {/* Free-flowing Layout */}
        <div className="flex flex-col gap-20">
          
          {/* Post-graduation teaching experience */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 z-10">
                <div className="inline-block bg-[#FF90E8] text-dark font-black px-4 py-1 mb-6 border-2 border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] transform -rotate-2 text-base md:text-lg">
                  15th Sept 2022 – 10th Mar 2023
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black uppercase text-dark mb-4 tracking-tighter leading-[1]">
                  Post-Graduation <br/> Teaching
                </h3>
                
                <div className="bg-white border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(25,26,35,1)] p-6 transform rotate-1">
                  <h4 className="text-xl md:text-2xl font-bold text-dark mb-2">
                    Assistant Professor (Adhoc)
                  </h4>
                  <p className="text-base md:text-lg font-medium text-dark/80 leading-relaxed">
                    Department of Zoology (Postgraduate), Modern College of Arts, Science and Commerce, Ganeshkhind, Pune-16.
                  </p>
                </div>
              </div>

              {/* Abstract Graphic */}
              <div className="w-full md:w-2/5 flex justify-center md:justify-end relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#B9FF66] rounded-full blur-3xl opacity-50 z-0"></div>
                <svg className="relative z-10 w-48 h-48 md:w-64 md:h-64 text-dark animate-spin-slow" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 0L120 80L200 100L120 120L100 200L80 120L0 100L80 80L100 0Z" fill="currentColor"/>
                  <circle cx="100" cy="100" r="30" fill="#FF90E8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dotted Line Separator */}
          <div className="w-full border-t-[3px] border-dashed border-dark/20"></div>

          {/* Bachelor teaching experience */}
          <div className="relative">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              
              <div className="flex-1 z-10 md:text-right flex flex-col md:items-end">
                <div className="inline-block bg-[#22D3EE] text-dark font-black px-4 py-1 mb-6 border-2 border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] transform rotate-2 text-base md:text-lg">
                  26th June 2025 - 16th May 2026
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black uppercase text-dark mb-4 tracking-tighter leading-[1]">
                  Bachelor <br/> Teaching
                </h3>
                
                <div className="bg-[#FFC900] border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(25,26,35,1)] p-6 transform -rotate-1 text-left md:text-right hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-xl md:text-2xl font-bold text-dark mb-2">
                    Assistant Professor (Contractual)
                  </h4>
                  <p className="text-base md:text-lg font-medium text-dark/80 leading-relaxed">
                    Department of Education in Science and Mathematics (DESM), Regional Institute of Education, Near NICCO park, Bhubaneswar-751022
                  </p>
                </div>
              </div>

              {/* Abstract Graphic */}
              <div className="w-full md:w-2/5 flex justify-center md:justify-start relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#22D3EE] rounded-full blur-3xl opacity-50 z-0"></div>
                <svg className="relative z-10 w-48 h-48 md:w-64 md:h-64 text-dark" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="25" width="150" height="150" stroke="currentColor" strokeWidth="8" strokeDasharray="20 10"/>
                  <circle cx="100" cy="100" r="50" fill="#FFC900" stroke="currentColor" strokeWidth="8"/>
                  <path d="M100 50L100 150M50 100L150 100" stroke="currentColor" strokeWidth="8"/>
                </svg>
              </div>

            </div>
          </div>

          {/* Dotted Line Separator */}
          <div className="w-full border-t-[3px] border-dashed border-dark/20"></div>

          {/* Pre-University Teaching Experience */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 z-10">
                <h3 className="text-4xl md:text-5xl font-black uppercase text-dark mb-6 tracking-tighter leading-[1]">
                  9th to 12th Standard <br/> NEET, MH-CET
                </h3>
                
                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white border-2 border-dark p-4 shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] transition-all">
                    <div className="bg-[#B9FF66] text-dark font-bold px-3 py-1 border border-dark whitespace-nowrap text-sm">
                      Nov 2023 - May 2025
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Takalkar Academy</h4>
                      <p className="text-sm font-medium text-dark/70">Biology teacher (11th and 12th standard, NEET, MH-CET)</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white border-2 border-dark p-4 shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] transition-all">
                    <div className="bg-[#FF90E8] text-dark font-bold px-3 py-1 border border-dark whitespace-nowrap text-sm">
                      2015 - 2020
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Om Sai Classes</h4>
                      <p className="text-sm font-medium text-dark/70">Biology teacher (9th to 12th Standard, NEET, MH-CET) (Part time)</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white border-2 border-dark p-4 shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] transition-all">
                    <div className="bg-[#FFC900] text-dark font-bold px-3 py-1 border border-dark whitespace-nowrap text-sm">
                      2015 - 2017, 2023 -
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">ECM²</h4>
                      <p className="text-sm font-medium text-dark/70">Biology teacher (9th to 12th Standard, NEET, MH-CET) (Part time)</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white border-2 border-dark p-4 shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] transition-all">
                    <div className="bg-[#22D3EE] text-dark font-bold px-3 py-1 border border-dark whitespace-nowrap text-sm">
                      2015 - 2016
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Smart Tutorials</h4>
                      <p className="text-sm font-medium text-dark/70">Biology teacher (9th to 12th Standard, NEET, MH-CET) (Part time)</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Abstract Graphic */}
              <div className="w-full md:w-2/5 flex justify-center md:justify-end relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FF90E8] rounded-full blur-3xl opacity-50 z-0"></div>
                <svg className="relative z-10 w-48 h-48 md:w-64 md:h-64 text-dark" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 20L180 100L100 180L20 100L100 20Z" stroke="currentColor" strokeWidth="8"/>
                  <circle cx="100" cy="100" r="20" fill="#B9FF66" stroke="currentColor" strokeWidth="8"/>
                  <path d="M20 20L180 180M180 20L20 180" stroke="currentColor" strokeWidth="4" opacity="0.5"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
