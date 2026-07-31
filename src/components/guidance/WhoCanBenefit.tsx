'use client';
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function WhoCanBenefit() {
  const audiences = [
    { text: 'Higher Secondary Students (NEET)', color: 'bg-[#FF90E8]' },
    { text: 'Undergraduate (B.Sc.)', color: 'bg-[#FFC900]' },
    { text: 'Postgraduate (M.Sc.)', color: 'bg-brand' },
    { text: 'Ph.D. Scholars', color: 'bg-blue-400' },
    { text: 'Early-career Researchers', color: 'bg-white' },
    { text: 'Competitive Exam Aspirants', color: 'bg-[#FF90E8]' }
  ];

  return (
    <section className="py-24 relative">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-dark uppercase tracking-tighter inline-block relative">
          Who Can 
          <span className="relative z-10 ml-4 bg-[#FFC900] px-4 py-1 border-[4px] border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] inline-block transform -rotate-2">
            Benefit?
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto px-4">
        {audiences.map((audience, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: i * 0.1 }}
            className={`flex items-center gap-4 px-6 md:px-8 py-4 ${audience.color} border-[3px] border-dark shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:shadow-[6px_6px_0px_0px_rgba(25,26,35,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 cursor-default rounded-xl`}
          >
            <Users size={24} className="text-dark" />
            <span className="text-lg md:text-xl font-bold uppercase tracking-wide text-dark">
              {audience.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
