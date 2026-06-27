import { memo } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { GraduationCap, Layout, Code2, Lightbulb, Wrench, Trophy } from 'lucide-react';
import aribimg from './aribimg.jpeg';

const containerVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const infoCards = [
  { text: "CSE Student", icon: GraduationCap },
  { text: "Frontend Developer", icon: Layout },
  { text: "React Developer", icon: Code2 },
  { text: "Problem Solver", icon: Lightbulb },
  { text: "Builder", icon: Wrench },
  { text: "Hackathon Enthusiast", icon: Trophy }
];

export const About = memo(function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#050505] overflow-hidden">
      {/* Cinematic global background for About section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.02] to-transparent mix-blend-screen pointer-events-none" />
      
      {/* Soft golden ambient lighting */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-accent-gold/[0.04] blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent-gold/[0.03] blur-[150px] pointer-events-none mix-blend-screen" />
      
      {/* Minimal grain texture for cinematic depth */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="max-w-[1200px] mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <SectionTitle title="About Me" />
          </motion.div>

          {/* Luxury Glass Layout Panel */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-[#0A0A0A]/80 backdrop-blur-3xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 p-8 sm:p-12 md:p-20 rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_2px_2px_rgba(255,255,255,0.05)] transition-all duration-700 overflow-hidden group"
          >
            {/* Soft inner ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />
            
            {/* Elegant reflection sweep every few seconds */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-[150%] animate-[shine_8s_ease-in-out_infinite] pointer-events-none mix-blend-overlay" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center relative z-10">
              <div className="order-2 lg:order-1 flex flex-col gap-10">
                <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
                  <p className="text-[#E0E0E0] text-[16px] sm:text-[18px] md:text-[20px] leading-[2] md:leading-[2.2] text-balance font-light drop-shadow-md tracking-[0.02em]">
                    I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF8D6] font-medium drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">Computer Science Engineering student</span> passionate about web development and software engineering. I enjoy building responsive applications, learning modern technologies, and transforming ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF8D6] font-medium drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">practical digital solutions</span>.
                  </p>
                </motion.div>
                
                {/* Elegant Separator */}
                <motion.div variants={itemVariants} className="flex items-center gap-6 w-full opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                </motion.div>

                {/* Premium Technology Chips */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                  {infoCards.map((card, idx) => (
                    <motion.div 
                      variants={itemVariants}
                      key={idx}
                      className="group/chip relative flex items-center gap-3 p-4 bg-[#050505]/60 backdrop-blur-xl rounded-[16px] border border-[#D4AF37]/15 shadow-[0_4px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#D4AF37]/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15),inset_0_1px_2px_rgba(212,175,55,0.2)] transition-all duration-500 hover:scale-[1.05] hover:-translate-y-1 cursor-default overflow-hidden"
                    >
                      {/* Chip inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 group-hover/chip:bg-[#D4AF37]/20 group-hover/chip:border-[#D4AF37] transition-all duration-500 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                        <card.icon size={14} className="group-hover/chip:scale-110 transition-transform duration-500 drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                      </div>
                      <span className="relative z-10 text-[11px] sm:text-[12px] font-bold tracking-[0.1em] text-[#A1A1AA] group-hover/chip:text-[#F0F0F0] transition-colors duration-500 uppercase leading-snug drop-shadow-sm group-hover/chip:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                        {card.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side (Premium Portrait Card) */}
              <motion.div 
                variants={itemVariants}
                className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px] mx-auto order-1 lg:order-2 group/image cursor-pointer animate-[float-subtle_8s_ease-in-out_infinite] [perspective:1000px]"
              >
                 {/* Soft warm golden ambient lighting behind the portrait */}
                 <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] blur-[50px] opacity-50 group-hover/image:opacity-100 transition-opacity duration-700 pointer-events-none" />
                 
                 {/* Premium Rectangular Frame */}
                 <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-[#D4AF37]/20 bg-[#050505]/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.05)] group-hover/image:border-[#D4AF37]/40 group-hover/image:shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.15),inset_0_1px_3px_rgba(255,255,255,0.1)] transition-all duration-700 group-hover/image:[transform:rotateY(3deg)_rotateX(3deg)_translateY(-4px)] [transform-style:preserve-3d]">
                   
                   {/* Secondary inner glass border */}
                   <div className="absolute inset-3 rounded-[16px] border border-[#D4AF37]/10 pointer-events-none z-20 group-hover/image:border-[#D4AF37]/30 transition-colors duration-700 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]" />

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
                     className="absolute inset-0 w-full h-full object-cover object-center opacity-95 group-hover/image:opacity-100 group-hover/image:scale-[1.02] transition-all duration-500 z-0 will-change-transform" 
                   />

                   {/* Soft reflection sweep every 10 seconds */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] animate-[shine_10s_ease-in-out_infinite] pointer-events-none z-30 mix-blend-overlay" />
                   
                   {/* Elegant bottom gradient for depth and soft edge highlights */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                   <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-10" />
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
