import { motion } from 'framer-motion';
import { PremiumCard } from './PremiumCard';
import { SectionTitle } from './SectionTitle';
import aribimg from './aribimg.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const infoCards = [
  "CSE Student",
  "Frontend Developer",
  "React Developer",
  "Problem Solver",
  "Builder",
  "Hackathon Enthusiast"
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 relative border-t border-white/5 bg-background overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-accent-gold/[0.03] blur-[100px] md:blur-[120px] pointer-events-none mix-blend-screen will-change-transform" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-soft-gold/[0.02] blur-[100px] md:blur-[120px] pointer-events-none mix-blend-screen will-change-transform" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle title="About Me" />

          {/* Unified Glass Layout Panel */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-card-bg backdrop-blur-2xl border border-white/5 p-6 sm:p-8 md:p-14 rounded-2xl md:rounded-3xl overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:border-accent-gold/30 transition-all duration-300 will-change-transform"
          >
            {/* Background lighting */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />

            {/* Decorative golden accent corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-[2px] border-l-[2px] border-accent-gold/40 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-[2px] border-r-[2px] border-accent-gold/40 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[2px] border-l-[2px] border-accent-gold/40 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[2px] border-r-[2px] border-accent-gold/40 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center relative z-10">
              <div className="order-2 lg:order-1 space-y-8">
                <p className="text-secondary text-[15px] sm:text-base md:text-lg leading-loose text-balance font-light">
                  I am a Computer Science Engineering student passionate about web development and software engineering. I enjoy building responsive applications, learning modern technologies, and transforming ideas into practical digital solutions.
                </p>
                
                {/* Visual Separator */}
                <div className="flex items-center gap-4 w-full">
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-accent-gold/40 via-white/10 to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shadow-[0_0_10px_#D4AF37]" />
                  <div className="h-[1px] flex-grow bg-gradient-to-l from-accent-gold/40 via-white/10 to-transparent" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {infoCards.map((card, idx) => (
                    <div 
                      key={idx}
                      className="relative p-4 md:p-5 flex items-center justify-center text-center bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/5 hover:border-accent-gold/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15),inset_0_0_20px_rgba(212,175,55,0.05)] transition-all duration-300 group/bento cursor-default overflow-hidden will-change-transform hover:-translate-y-1 hover:scale-[1.02]"
                    >
                      {/* Inner Glass Lighting */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative z-10 text-[11px] sm:text-xs font-bold tracking-widest text-secondary group-hover/bento:text-primary transition-colors duration-300 uppercase leading-snug drop-shadow-[0_0_8px_rgba(212,175,55,0)] group-hover/bento:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                        {card}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side (Premium Rectangular Image Card) */}
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] mx-auto order-1 lg:order-2 group/image cursor-pointer">
                 {/* Premium Background Aura & Spotlight */}
                 <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)] rounded-full blur-[60px] md:blur-3xl opacity-60 group-hover/image:opacity-100 group-hover/image:scale-110 transition-all duration-300 pointer-events-none mix-blend-screen" />
                 
                 <PremiumCard 
                   outerGlow="rgba(212, 175, 55, 0.4)" 
                   innerGlow="rgba(212, 175, 55, 0.15)" 
                   className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.15)] md:shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)] group-hover/image:shadow-[0_40px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.3)] transition-all duration-300"
                 >
                   {/* Gradient overlay for text contrast and depth */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,2,2,0.9)] via-[rgba(2,2,2,0.1)] to-transparent z-10 pointer-events-none mix-blend-multiply" />
                   
                   <img 
                     src={aribimg} 
                     alt="Arib Taiyab" 
                     loading="lazy"
                     decoding="async"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.onerror = null;
                       target.src = "/project-placeholder.png";
                     }}
                     className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 group-hover/image:brightness-110 transition-all duration-300 z-0 will-change-transform" 
                   />

                   {/* Reflection / Luxury overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.04)_25%,transparent_30%)] z-10 pointer-events-none" />
                   
                   {/* Soft floating gold particles overlay */}
                   <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
                 </PremiumCard>
              </div>
            </div>
          </motion.div>
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
}
