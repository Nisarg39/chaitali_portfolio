import React from 'react';

const conferences = [
  {
    eventName: "Symposium on Interdisciplinary Sciences, NISER",
    role: "Contributory Talk",
    location: "Bhubaneswar",
    year: "2025",
    type: "Symposium"
  },
  {
    eventName: "2nd Int. Conf. on Pollution Control for Clean Environment (ICPCCE)",
    role: "Oral Presentation",
    location: "IIT-Bhubaneswar",
    year: "2025",
    type: "Conference"
  },
  {
    eventName: "Advances and Innovations in Biotechnology for Sustainable Development",
    role: "Oral Presentation",
    location: "AKS University, Satna, MP",
    year: "2019",
    type: "Conference"
  },
  {
    eventName: "All India Cell Biology Conf. & 2nd Int. Conf. on Trends in Cell and Molecular Biology",
    role: "Poster Presentation",
    location: "India",
    year: "2018",
    type: "Conference"
  },
  {
    eventName: "Department of Chemistry, Savitribai Phule Pune University",
    role: "Poster Presentation",
    location: "Pune, India",
    year: "2013",
    type: "Presentation"
  },
  {
    eventName: "Hormonal regulation & control of calcium and phosphate metabolism",
    role: "Guest Lecture",
    location: "Shri Shiv Chhatrapati College, Junnar",
    year: "2017",
    type: "Lecture"
  },
  {
    eventName: "Cell cycle and its regulation",
    role: "Guest Lecture",
    location: "Shri Shiv Chhatrapati College, Junnar",
    year: "2016",
    type: "Lecture"
  }
];

const rowColors = ['hover:bg-[#22D3EE]', 'hover:bg-[#B9FF66]', 'hover:bg-[#FF90E8]', 'hover:bg-[#FFC900]'];

export function Conferences() {
  return (
    <section id="conferences" className="bg-white pb-24 overflow-hidden border-t-[3px] border-dark">
      
      {/* Marquee Header */}
      <div className="w-full border-b-[3px] border-dark bg-brand flex items-center h-24 md:h-32 relative overflow-hidden">
        <div className="absolute whitespace-nowrap flex animate-marquee w-max">
          <span className="text-5xl md:text-7xl font-black uppercase tracking-tighter mx-4 text-dark">
            CONFERENCES • SEMINARS • WORKSHOPS • CONFERENCES • SEMINARS • WORKSHOPS • 
          </span>
          <span className="text-5xl md:text-7xl font-black uppercase tracking-tighter mx-4 text-dark">
            CONFERENCES • SEMINARS • WORKSHOPS • CONFERENCES • SEMINARS • WORKSHOPS • 
          </span>
        </div>
      </div>

      {/* Typographic Table Layout */}
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 mt-16">
        <div className="flex flex-col border-t-[4px] border-dark shadow-[16px_16px_0px_0px_rgba(25,26,35,1)]">
          {conferences.map((conf, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col lg:flex-row items-start lg:items-center justify-between p-8 lg:p-12 border-b-[4px] border-dark bg-white ${rowColors[index % rowColors.length]} transition-colors duration-300 gap-8 lg:gap-16 overflow-hidden cursor-default`}
            >
              
              {/* Massive Year Watermark on Hover */}
              <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[150px] lg:text-[250px] font-black text-transparent opacity-0 group-hover:opacity-[0.15] transition-all duration-500 select-none pointer-events-none transform group-hover:translate-x-10" style={{ WebkitTextStroke: '4px #191A23' }}>
                {conf.year}
              </div>

              {/* Year & Type */}
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 w-full lg:w-48 shrink-0 z-10">
                <span className="text-5xl lg:text-6xl font-black text-dark tracking-tighter">{conf.year}</span>
                <span className="bg-dark text-white font-bold uppercase px-4 py-1 text-sm tracking-widest inline-block border-2 border-dark shadow-[2px_2px_0px_0px_#FFC900] group-hover:shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] group-hover:-translate-y-1 transition-transform">
                  {conf.type}
                </span>
              </div>

              {/* Title */}
              <div className="flex-1 z-10 w-full">
                <h3 className="text-3xl lg:text-5xl font-black uppercase text-dark leading-[0.95] tracking-tighter">
                  {conf.eventName}
                </h3>
              </div>

              {/* Role & Location */}
              <div className="flex flex-col sm:flex-row lg:flex-col justify-between lg:justify-start gap-6 lg:gap-4 w-full lg:w-72 shrink-0 z-10 lg:border-l-[4px] lg:border-dark/20 lg:pl-10 group-hover:border-dark transition-colors">
                <div className="flex-1">
                  <span className="block text-xs uppercase font-black text-dark/50 tracking-widest mb-1 group-hover:text-dark">Role</span>
                  <span className="font-bold text-xl lg:text-2xl text-dark leading-tight">{conf.role}</span>
                </div>
                <div className="flex-1">
                  <span className="block text-xs uppercase font-black text-dark/50 tracking-widest mb-1 group-hover:text-dark">Location</span>
                  <span className="font-bold text-xl lg:text-2xl text-dark leading-tight">{conf.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
