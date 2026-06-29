import { memo } from 'react';
import { m } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import cCert from './c certificate.jpeg';
import cppCert from './c++ certificate.jpeg';
import pythonCert from './python certificate.jpeg';
import htmlCert from './html certificate.jpeg';
import cssCert from './css certificate.jpeg';
import jsCert from './javascript certificate.jpeg';

const certificates = [
  { name: "C Programming", image: cCert },
  { name: "C++ Programming", image: cppCert },
  { name: "Python Programming", image: pythonCert },
  { name: "HTML", image: htmlCert },
  { name: "CSS", image: cssCert },
  { name: "JavaScript", image: jsCert },
];

export const Certifications = memo(function Certifications() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    })
  };

  return (
    <section id="certificates" className="py-16 md:py-20 lg:py-24 relative bg-[#050505] overflow-hidden">
      <style>{`
        @keyframes goldShine {
          0%, 80%, 100% { opacity: 0; transform: translateX(-100%); }
          90% { opacity: 1; transform: translateX(100%); }
        }
        @keyframes reflectionSweep {
          0%, 80%, 100% { transform: translateX(-100%) skewX(-12deg); }
          90% { transform: translateX(200%) skewX(-12deg); }
        }
        @keyframes shimmerDiagonal {
          0%, 70%, 100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          85% { transform: translateX(200%) translateY(200%) rotate(45deg); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        .card-3d-wrapper {
          perspective: 1200px;
        }
        .card-3d-inner {
          transform-style: preserve-3d;
          transition: transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 350ms ease;
        }
        .card-3d-wrapper:hover .card-3d-inner {
          transform: rotateX(4deg) rotateY(-4deg) translateY(-10px) scale(1.02);
          box-shadow: 0 30px 50px -10px rgba(0,0,0,0.9), 0 0 30px rgba(212,175,55,0.2), inset 0 1px 2px rgba(255,255,255,0.3);
        }
        .card-3d-content {
          transform: translateZ(25px);
        }
        .card-3d-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background enhancements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(212,175,55,0.01),transparent_20%,transparent_80%,rgba(212,175,55,0.01))] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.05] blur-[120px] pointer-events-none animate-[breathe_10s_infinite]" />

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 md:gap-6 w-full mb-10 md:mb-16 select-none group relative overflow-hidden"
          >
            <div className="relative flex items-center justify-center w-3 h-3">
              <div className="absolute inset-0 bg-[#D4AF37] rotate-45 transform scale-50 shadow-[0_0_12px_#D4AF37] group-hover:scale-75 transition-transform duration-500" />
            </div>
            
            <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF8D6] to-[#D4AF37] uppercase whitespace-nowrap drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] relative">
              Certifications & Awards
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 mix-blend-overlay" style={{ animation: 'goldShine 10s infinite' }} />
            </h2>
            
            <div className="relative flex-grow h-[1px] bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37]/10 to-transparent overflow-hidden">
              <div className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-[#FFF8D6] to-transparent opacity-50" style={{ animation: 'reflectionSweep 8s infinite' }} />
            </div>
          </m.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((cert, idx) => (
              <m.div 
                key={idx}
                custom={idx} 
                variants={cardVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="card-3d-wrapper w-full h-full card-3d-float"
                style={{ animationDelay: `${idx * 0.4}s` }}
              >
                <div className="card-3d-inner relative flex flex-col h-full rounded-[22px] bg-[#0A0A0A]/80 backdrop-blur-2xl border border-[#D4AF37]/20 shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] group">
                  
                  {/* Metallic Inner Frame for Award Feel */}
                  <div className="absolute inset-2 border border-[#D4AF37]/10 rounded-[14px] pointer-events-none group-hover:border-[#D4AF37]/40 transition-colors duration-350 z-20 shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]" />
                  
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none z-0" />
                  <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay rounded-[22px] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

                  {/* Golden light behind card */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                  {/* Diagonal shimmer */}
                  <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none z-20">
                     <div className="absolute top-0 bottom-0 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animation: 'shimmerDiagonal 4s infinite' }} />
                  </div>

                  {/* Image Container */}
                  <div className="card-3d-content relative aspect-[4/3] bg-[#050508] rounded-t-[21px] overflow-hidden border-b border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors duration-350 z-10 p-4">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 600'%3E%3Crect fill='%23111' width='800' height='600'/%3E%3Ctext x='400' y='300' font-family='sans-serif' font-size='24' fill='%23555' text-anchor='middle' alignment-baseline='middle'%3ECertificate%3C/text%3E%3C/svg%3E";
                      }}
                      className="absolute inset-0 w-full h-full object-cover p-4 opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.03] rounded-[24px]" 
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)] opacity-80 pointer-events-none" />
                  </div>
                  
                  {/* Content Container */}
                  <div className="card-3d-content relative flex flex-col flex-grow p-6 md:p-8 z-10 bg-gradient-to-b from-transparent to-[#050505] rounded-b-[21px]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-all duration-350 shadow-[0_0_10px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                        <Award size={20} className="md:w-6 md:h-6" />
                      </div>
                      
                      <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                        <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-[#D4AF37]">Verified</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-350 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {cert.name}
                    </h3>
                    
                    <p className="text-gray-300 text-[13px] md:text-sm font-light mb-6 md:mb-8 flex-grow">
                      Professional certification demonstrating proficiency and expertise in {cert.name}.
                    </p>
                    
                    <a href={cert.image} target="_blank" rel="noopener noreferrer" className="relative mt-auto inline-flex items-center justify-center gap-2 md:gap-3 text-[11px] md:text-xs font-bold text-[#D4AF37] tracking-widest transition-all duration-300 w-full py-3.5 md:py-4 bg-white/[0.02] border border-[#D4AF37]/30 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 uppercase group/btn min-h-[44px] shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] overflow-hidden active:scale-95">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[reflectionSweep_1.5s_ease-in-out]" style={{ animation: 'reflectionSweep 1.5s ease-in-out infinite' }} />
                      <span className="relative z-10">View Certificate</span>
                      <ExternalLink size={14} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </section>
  );
});
