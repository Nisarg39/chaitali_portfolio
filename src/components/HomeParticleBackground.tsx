'use client';

export function HomeParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white/50 pointer-events-none">
      {/* Orb 1: Emerald */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-400/20 blur-[80px] animate-blob" />
      
      {/* Orb 2: Teal */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-400/20 blur-[100px] animate-blob animation-delay-2000" />
      
      {/* Orb 3: Blue */}
      <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] rounded-full bg-blue-400/20 blur-[120px] animate-blob animation-delay-4000" />
      
      {/* Orb 4: Indigo */}
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-400/20 blur-[60px] animate-blob animation-delay-6000" />

      {/* Global Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 12s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}
