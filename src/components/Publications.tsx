import React from 'react';
import Link from 'next/link';

const publications = [
  {
    year: "2024",
    title: "Geospatial Analysis of Land Use Change and Grassland Degradation in Pune's Urban Hills",
    journal: "Asian Journal of Conservation Biology",
    authors: "Kiran Choudaj, Chaitali Shaha and Varsha Wankhade",
    doi: "https://doi.org/10.53562/ajcb.86114"
  },
  {
    year: "2024",
    title: "Elucidating the structure, and composition of bacterial symbionts in the gut regions of wood-feeding termite, Coptotermes formosanus and their functional profile towards lignocellulolytic systems",
    journal: "Frontiers in Microbiology",
    authors: "Mudasir Dar, Rongrong Xie, Luohui Jing, Xu Qing, Shehbaz Ali, Radhakrishna Pandit, Chaitali Shaha, Jianzhong Sun",
    doi: "https://doi.org/10.3389/fmicb.2024.1395568"
  },
  {
    year: "2023",
    title: "Natural remnants are refuges for rare birds in an urban area: a study from Pune city, India",
    journal: "Ornis Hungarica",
    authors: "Kiran Choudaj, Chaitali Shaha",
    doi: "https://doi.org/10.2478/orhu-2023-0004"
  },
  {
    year: "2022",
    title: "Mining the diversity and functional profile of bacterial symbionts from the larvae of Chironomus circumdatus (bloodworms)",
    journal: "Folia Microbiologica",
    authors: "Chaitali Shaha, Mudassir Dar and Radhakrishna Pandit",
    doi: "https://doi.org/10.1007/s12223-022-00984-3"
  },
  {
    year: "2022",
    title: "Bio-based versus synthetic: Comparative study of plasticizers mediated stress on Chironomus circumdatus (Diptera – Chironomidae)",
    journal: "Ecotoxicology",
    authors: "Chaitali Shaha and Radhakrishna Pandit",
    doi: "https://doi.org/10.1007/s10646-021-02516-0"
  },
  {
    year: "2021",
    title: "Characterization of an Esterase Producing Bacterium from the Gut of Chironomus circumdatus (Bloodworms) and its Ability to Use Modified Phthalates",
    journal: "Current Microbiology",
    authors: "Chaitali Shaha and Radhakrishna Pandit",
    doi: "https://doi.org/10.1007/s00284-021-02574-x"
  },
  {
    year: "2020",
    title: "Biochemical and molecular changes mediated by plasticizer diethyl phthalate in Chironomus circumdatus (bloodworms)",
    journal: "Comparative Biochemistry and Physiology, Part C",
    authors: "Chaitali Shaha and Radhakrishna Pandit",
    doi: "https://doi.org/10.1016/j.cbpc.2019.108650"
  },
  {
    year: "2020",
    title: "Impact of essential oils on Musca domestica larvae: oxidative stress and antioxidant responses",
    journal: "International Journal of Tropical Insect Science",
    authors: "Jyoti Chintalchere, Mudasir Dar, Chaitali Shaha, Radhakrishna Pandit",
    doi: "https://doi.org/10.1007/s42690-020-00272-y"
  },
  {
    year: "In Review",
    title: "Microflora in Aquatic Animals: Diversity, Functional Roles, Environmental Interactions, and Applications in Sustainable Aquaculture",
    journal: "Manuscript Under Review",
    authors: "Chaitali M. Shaha, Deepanjali Swain, Kiran B. Choudaj",
    doi: "#"
  },
  {
    year: "In Review",
    title: "Enzymatic and molecular characterization of phthalate ester degradation by Enterobacter mori BI1245 from insect gut microbiota",
    journal: "Manuscript Under Review",
    authors: "Chaitali M. Shaha, Praveen Kumar Dhankar, Kiran B. Choudaj, Akshaykumar Meshram, Radhakrishna S. Pandit",
    doi: "#"
  },
  {
    year: "In Review",
    title: "Metabarcoding and Functional Characterization of Gut Microbiota Reveals Phthalate-Degrading Potential in Chironomus circumdatus larvae",
    journal: "Manuscript Under Review",
    authors: "Chaitali M. Shaha, Praveen Kumar Dhankar, Kiran B. Choudaj, Akshaykumar Meshram, Radhakrishna S. Pandit",
    doi: "#"
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-24 relative bg-light border-t-2 border-dark overflow-hidden">
      
      {/* Brutalist Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-dark mb-2">
            Research
          </h2>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-brand" style={{ WebkitTextStroke: '2px #191a23' }}>
            Publications
          </h2>
        </div>
        <div className="flex flex-col items-end gap-6">
          {/* Count Badge */}
          <div className="flex items-center gap-4">
            <span className="font-black uppercase text-xl">Total Publications:</span>
            <div className="bg-[#22D3EE] border-[3px] border-dark px-4 py-2 text-3xl md:text-4xl font-black shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] rotate-3">
              {publications.length}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-3 animate-pulse bg-white border-2 border-dark px-4 py-2 shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]">
            <span className="font-black uppercase tracking-widest text-sm">Swipe / Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
      
      {/* Horizontal Scrolling Track */}
      <div 
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-12 px-4 md:px-8 pb-16 pt-8 [&::-webkit-scrollbar]:hidden" 
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {publications.map((pub, index) => (
          <Link 
            key={index} 
            href={pub.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[500px] snap-center bg-white border-[3px] border-dark shadow-[8px_8px_0px_0px_rgba(25,26,35,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(25,26,35,1)] transition-all flex flex-col p-6 md:p-8 relative group"
          >
            {/* Year Badge (Hanging off the edge) */}
            <div className={`absolute -top-6 -right-6 w-24 h-24 ${pub.year === 'In Review' ? 'bg-[#FFC900]' : 'bg-[#FF90E8]'} border-[3px] border-dark rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] rotate-12 group-hover:rotate-0 transition-transform z-10 p-2 text-center`}>
              <span className="font-black text-sm md:text-base leading-none">{pub.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-8 mt-4 pr-8">
              {pub.title}
            </h3>
            
            {/* Footer / Journal Details */}
            <div className="mt-auto pt-6 border-t-[3px] border-dark border-dashed flex flex-col items-start gap-3">
              <span className="font-black text-sm bg-dark text-brand px-3 py-1 shadow-[2px_2px_0px_0px_#B9FF66]">
                {pub.journal}
              </span>
              <p className="font-bold text-dark/80 text-sm italic">
                {pub.authors}
              </p>
            </div>
          </Link>
        ))}
        
        {/* Empty padding element to ensure the last card can be scrolled to the center */}
        <div className="shrink-0 w-4 md:w-8"></div>
      </div>
      
    </section>
  );
}
