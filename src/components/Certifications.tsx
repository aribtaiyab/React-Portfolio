import { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { PremiumCard } from './PremiumCard';
import { SectionTitle } from './SectionTitle';

// Import local images if available
import cCert from './c certificate.jpeg';
import cppCert from './c++ certificate.jpeg';
import pythonCert from './python certificate.jpeg';
import htmlCert from './html certificate.jpeg';
import cssCert from './css certificate.jpeg';
import jsCert from './javascript certificate.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const certificates = [
  { name: "C Programming", image: cCert },
  { name: "C++ Programming", image: cppCert },
  { name: "Python Programming", image: pythonCert },
  { name: "HTML", image: htmlCert },
  { name: "CSS", image: cssCert },
  { name: "JavaScript", image: jsCert },
];

export const Certifications = memo(function Certifications() {
  return (
    <section id="certificates" className="py-16 md:py-20 lg:py-24 relative border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle title="Certifications & Awards" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((cert, idx) => (
              <PremiumCard 
                key={idx}
                className="group flex flex-col h-full relative border border-white/5 hover:border-accent-gold/50 bg-card-bg backdrop-blur-2xl transition-all duration-300 rounded-[16px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.2)]"
                outerGlow="rgba(212, 175, 55, 0.4)"
                innerGlow="rgba(212, 175, 55, 0.1)"
              >
                {/* Metallic Inner Frame for Award Feel */}
                <div className="absolute inset-1 border border-white/10 rounded-[12px] pointer-events-none group-hover:border-accent-gold/30 transition-colors duration-300 z-20" />
                
                {/* Premium Image Frame */}
                <div className="aspect-[4/3] bg-[#050508] relative flex items-center justify-center overflow-hidden rounded-t-lg border-b border-white/10 group/image">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen" />
                  
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
                    className="absolute inset-0 w-full h-full object-cover p-0 opacity-90 contrast-110 group-hover/image:opacity-100 group-hover/image:scale-[1.03] transition-all duration-300 will-change-transform z-10" 
                  />

                  {/* Corner luxury accents on image */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/30 rounded-tl-sm pointer-events-none z-20" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/30 rounded-tr-sm pointer-events-none z-20" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80 pointer-events-none z-20" />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent-gold group-hover:scale-110 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/30 transition-all duration-500 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                      <Award size={20} className="md:w-6 md:h-6" />
                    </div>
                    
                    <div className="bg-white/[0.03] border border-white/10 px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md">
                      <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-accent-gold">Verified</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-serif text-primary mb-2 group-hover:text-gold-gradient transition-colors duration-300 font-bold tracking-wide">
                    {cert.name}
                  </h3>
                  
                  <p className="text-secondary text-[13px] md:text-sm font-light mb-6 md:mb-8 flex-grow">
                    Professional certification demonstrating proficiency and expertise in {cert.name}.
                  </p>
                  
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 md:gap-3 text-[11px] md:text-xs font-bold text-primary tracking-widest transition-all duration-500 w-full py-3.5 md:py-4 bg-white/[0.02] border border-white/10 rounded-lg hover:border-accent-gold hover:bg-accent-gold/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] uppercase group/btn relative overflow-hidden min-h-[44px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shine pointer-events-none" style={{ animationDuration: '1.5s' }} />
                    View Certificate
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </PremiumCard>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Visual Connector to next section */}
      <div className="w-full flex items-center justify-center pointer-events-none absolute bottom-0 left-0 hidden md:flex">
        <div className="w-full h-[1px] visual-connector relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
        </div>
      </div>
    </section>
  );
});
