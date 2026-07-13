import React from 'react';

const qualifications = [
  {
    year: "2013 - 2015",
    title: "M.Sc. Zoology",
    institution: "Savitribai Phule Pune University",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 100 100" fill="none" className="text-brand mb-6"><circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" strokeDasharray="8 4"/><path d="M 32 45 Q 41 40 50 45 Q 59 40 68 45 V 25 Q 59 20 50 25 Q 41 20 32 25 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><line x1="50" y1="25" x2="50" y2="45" stroke="currentColor" strokeWidth="3"/><text x="50" y="72" fontSize="20" fontWeight="bold" textAnchor="middle" fill="currentColor">SPPU</text></svg>
  },
  {
    year: "2015",
    title: "GATE (AIR 364)",
    institution: "National Level Examination",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 100 100" fill="none" className="text-brand mb-6"><circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" strokeDasharray="16 10"/><text x="50" y="57" fontSize="20" fontWeight="bold" textAnchor="middle" fill="currentColor">GATE</text></svg>
  },
  {
    year: "2016",
    title: "CSIR-UGC NET JRF (AIR 47) & LS (AIR 35)",
    institution: "National Level Examination",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 100 100" fill="none" className="text-brand mb-6"><ellipse cx="50" cy="40" rx="35" ry="12" stroke="currentColor" strokeWidth="4" transform="rotate(30 50 40)"/><ellipse cx="50" cy="40" rx="35" ry="12" stroke="currentColor" strokeWidth="4" transform="rotate(150 50 40)"/><circle cx="50" cy="40" r="6" fill="currentColor"/><text x="50" y="85" fontSize="20" fontWeight="bold" textAnchor="middle" fill="currentColor">CSIR</text></svg>
  },
  {
    year: "2017 - 2022",
    title: "PhD Zoology",
    institution: "Savitribai Phule Pune University",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 100 100" fill="none" className="text-brand mb-6"><circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" strokeDasharray="8 4"/><path d="M 32 45 Q 41 40 50 45 Q 59 40 68 45 V 25 Q 59 20 50 25 Q 41 20 32 25 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><line x1="50" y1="25" x2="50" y2="45" stroke="currentColor" strokeWidth="3"/><text x="50" y="72" fontSize="20" fontWeight="bold" textAnchor="middle" fill="currentColor">SPPU</text></svg>
  },
];

const skills = [
  {
    category: "Research & Analytics",
    items: "Enzymology extraction & purification, microbial gut isolation, toxicological stress bioassays, molecular biology protocols.",
  },
  {
    category: "Soft Skills",
    items: "Technical scientific writing, public speaking, academic curriculum design, cross-functional conference management.",
  },
];

export function About() {
  return (
    <section id="about" className="pt-20 pb-10 border-t border-dark/10 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-brand px-2 py-1 inline-block rounded-md border-2 border-dark shadow-[2px_2px_0px_0px_rgba(25,26,35,1)]">About Me</h2>
        <p className="text-lg md:text-xl text-dark whitespace-nowrap overflow-hidden text-ellipsis">
          A brief overview of my professional objective, core qualifications, and key skills.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        
        {/* Professional Objective Section */}
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center border-2 border-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-3xl font-bold">Professional Objective</h3>
          </div>
          <p className="text-xl leading-relaxed text-dark max-w-5xl">
            Enthusiastic and highly qualified Assistant Professor with a doctoral background in Zoology and a strong track record of competitive national examinations. Dedicated to delivering innovative, application-based lessons that develop student's analytical skills, while actively contributing to cutting-edge research in environmental biology and microbiology.
          </p>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center border border-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              Key Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border-2 border-dark shadow-[2px_2px_0px_0px_rgba(25,26,35,1)]">
                  <h4 className="font-bold text-lg mb-2">{skill.category}</h4>
                  <p className="text-dark/80">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Qualifications Cards */}
        <div className="bg-dark text-white rounded-[2rem] p-8 md:p-12 border-2 border-dark shadow-[4px_4px_0px_0px_rgba(185,255,102,1)] hover:shadow-[6px_6px_0px_0px_rgba(185,255,102,1)] transition-all">
          <h3 className="text-2xl font-bold mb-10 text-brand flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            Core Qualifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <div key={index} className="flex flex-col items-center text-center transition-all hover:-translate-y-1">
                {qual.icon}
                <span className="text-brand font-bold text-sm block mb-2 px-2 py-1 bg-brand/10 rounded-md inline-block">{qual.year}</span>
                <h4 className="font-bold text-xl leading-tight mb-3 text-white">{qual.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed font-medium">{qual.institution}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
