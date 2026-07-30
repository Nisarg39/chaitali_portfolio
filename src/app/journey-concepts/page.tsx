import React from 'react';
import Link from 'next/link';
import ConceptComicPanels from '@/components/journey-concepts/ConceptComicPanels';
import ConceptFloatingType from '@/components/journey-concepts/ConceptFloatingType';
import ConceptFileCabinet from '@/components/journey-concepts/ConceptFileCabinet';

export const metadata = {
  title: 'Journey Section Concepts v2 - Dr. Chaitali Shaha',
};

export default function JourneyConceptsPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-dark pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16 relative z-50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-4 border-dark pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Journey Concepts <span className="bg-brand px-2 py-1 text-3xl rotate-3 inline-block border-[3px] border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)]">v2</span></h1>
            <p className="text-lg md:text-xl font-bold text-dark/70 max-w-2xl">
              Creative, non-generic layouts that completely ditch standard cards and timelines.
            </p>
          </div>
          <Link href="/" className="px-6 py-3 bg-[#FF90E8] text-dark border-[3px] border-dark rounded-xl font-black shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] transition-all">
            Back to Home
          </Link>
        </div>

        {/* Quick Nav */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="#concept-4" className="px-4 py-2 bg-white border-2 border-dark rounded-lg font-bold shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] hover:bg-brand transition-colors">
            4. Comic Panels
          </a>
          <a href="#concept-5" className="px-4 py-2 bg-white border-2 border-dark rounded-lg font-bold shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] hover:bg-[#FF90E8] transition-colors">
            5. Floating Type
          </a>
          <a href="#concept-6" className="px-4 py-2 bg-white border-2 border-dark rounded-lg font-bold shadow-[2px_2px_0px_0px_rgba(25,26,35,1)] hover:bg-[#FFC900] transition-colors">
            6. File Cabinet
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-32">
        {/* Concept 4 */}
        <section id="concept-4" className="scroll-mt-10 relative z-10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 mb-8 text-center relative z-50">
            <h2 className="text-3xl font-black bg-white inline-block px-4 py-2 border-[4px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] -rotate-2">
              Concept 4: Comic Book Panels
            </h2>
            <p className="mt-4 font-bold text-dark/80 max-w-2xl mx-auto bg-white/50 p-4 rounded-xl border-2 border-dark/10">
              An asymmetrical, chaotic but controlled comic-style layout. Completely removes the uniform "card" feel by varying shapes and sizes.
            </p>
          </div>
          <div className="bg-white/50 py-10 border-y-4 border-dark/10">
            <ConceptComicPanels />
          </div>
        </section>

        {/* Concept 5 */}
        <section id="concept-5" className="scroll-mt-10 relative z-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8 mb-8 text-center relative z-50">
            <h2 className="text-3xl font-black bg-[#FF90E8] inline-block px-4 py-2 border-[4px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] rotate-1">
              Concept 5: Floating Typography
            </h2>
            <p className="mt-4 font-bold text-dark/80 max-w-2xl mx-auto bg-white/50 p-4 rounded-xl border-2 border-dark/10">
              Card-less design. Massive sticky years stay in the background while content floats freely on a jagged path, with badges applied like physical stickers.
            </p>
          </div>
          <div className="bg-white/50 border-y-4 border-dark/10 pb-32">
            <ConceptFloatingType />
          </div>
        </section>

        {/* Concept 6 */}
        <section id="concept-6" className="scroll-mt-10 relative z-30">
          <div className="max-w-6xl mx-auto px-4 md:px-8 mb-8 text-center relative z-50">
            <h2 className="text-3xl font-black bg-[#FFC900] inline-block px-4 py-2 border-[4px] border-dark shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] -rotate-1">
              Concept 6: Tactile File Cabinet
            </h2>
            <p className="mt-4 font-bold text-dark/80 max-w-2xl mx-auto bg-white/50 p-4 rounded-xl border-2 border-dark/10">
              A highly interactive design mimicking thick, bright physical file folders that stack dynamically on top of each other as you scroll.
            </p>
          </div>
          <div className="bg-white/50 py-10 border-y-4 border-dark/10">
            <ConceptFileCabinet />
          </div>
        </section>
      </div>
    </div>
  );
}
