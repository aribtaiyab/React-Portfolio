import { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import heropageImg from './heropage.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export const Hero = memo(function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-[110px] pb-12 md:pt-[130px] md:pb-20 lg:pt-[140px] lg:pb-16 bg-[#050505]">
      
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute left-1/4 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/5 blur-[120px] will-change-transform md:h-[600px] md:w-[600px] md:blur-[150px] lg:h-[800px] lg:w-[800px] mix-blend-screen" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent-gold/[0.03] blur-[100px] md:h-[500px] md:w-[500px] mix-blend-screen animate-[pulse-glow_8s_ease-in-out_infinite]" />
        <motion.div style={{ y: y1 }} className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/5 blur-[120px] will-change-transform md:h-[700px] md:w-[700px] md:blur-[150px] lg:h-[900px] lg:w-[900px] mix-blend-screen" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent-gold/[0.03] blur-[120px] md:h-[600px] md:w-[600px] mix-blend-screen animate-[pulse-glow_8s_ease-in-out_infinite]" />
        
        {/* Subtle animated gradient & Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#010101_100%)] opacity-90" />
      </div>

      {/* UNIFIED GLASS PANEL CONTAINER */}
      <div className="container relative z-10 mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center gap-8 px-6 py-10 md:gap-12 md:px-12 md:py-16 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:p-16 rounded-[2.5rem] border border-white/[0.04] bg-[#070709]/60 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-700 hover:border-accent-gold/20">
        
        {/* Soft ambient golden glow extending slightly between the text and image */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] mix-blend-screen" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="group relative w-full max-w-2xl flex flex-col justify-center transition-all duration-300 z-10"
        >
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.02] transition-opacity duration-300 group-hover:opacity-[0.05]">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.5" />
              <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="pointer-events-none absolute inset-0 z-0 mix-blend-screen bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.04),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 will-change-opacity" />

          <div className="relative z-10">
            <motion.h1 variants={itemVariants} className="relative mb-3 text-4xl font-serif font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
              <span className="mb-1 block text-xl font-sans font-light uppercase tracking-[0.25em] text-[#FAFAFA] opacity-95 sm:text-2xl md:mb-2 md:text-3xl">I'm</span>
              <span className="relative block pb-2 text-gold-gradient drop-shadow-[0_0_25px_rgba(212,175,55,0.3)] tracking-tight font-extrabold z-20">
                Arib Taiyab
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shine_10s_ease-in-out_infinite] pointer-events-none mix-blend-overlay" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
              </span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="mb-6 text-lg font-light tracking-[0.05em] text-[#FAFAFA] opacity-100 sm:text-xl md:mb-8 md:text-2xl lg:text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Full Stack Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="mb-8 max-w-[500px] text-balance text-[15px] font-light leading-[1.8] tracking-wide text-[#E5E7EB] sm:text-base md:mb-12 md:text-[17px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              I am passionate about building modern web experiences, continuously improving as a developer. Focused on building clean, responsive, and impactful digital products.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 md:gap-6 relative z-30">
              <MagneticButton 
                href="#projects" 
                variant="primary" 
                className="!bg-none !bg-[#0B0B0D]/90 backdrop-blur-md !border !border-accent-gold/40 !text-accent-gold hover:!text-[#F3E5AB] hover:!border-accent-gold !shadow-[0_8px_20px_rgba(212,175,55,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:!shadow-[0_15px_30px_rgba(212,175,55,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] active:scale-95 transition-all duration-500 flex w-full justify-center sm:w-auto group/btn overflow-hidden"
              >
                <span className="relative z-10 flex items-center font-bold tracking-widest text-[14px]">
                  View Projects
                  <ArrowRight size={18} className="ml-2 transition-transform duration-500 group-hover/btn:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent -translate-x-full group-hover/btn:animate-[shine_1.5s_ease-in-out] pointer-events-none mix-blend-screen" />
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ y: y2 }}
          className="relative mt-4 flex h-[350px] w-full items-center justify-center will-change-transform sm:h-[450px] md:h-[500px] lg:mt-0 lg:h-[600px] group/heroimg cursor-default z-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_65%)] blur-[80px] mix-blend-screen opacity-80 group-hover/heroimg:opacity-100 transition-opacity duration-700 md:blur-[120px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] md:h-[80%] md:w-[80%]" />

          <motion.div
            className="relative flex h-full w-full items-center justify-center will-change-transform animate-[float-subtle_7s_ease-in-out_infinite]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] mix-blend-screen pointer-events-none" />
            
            <div className="relative h-full max-w-[120%] w-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/heroimg:scale-[1.03] group-hover/heroimg:rotate-[3deg]">
              <img
                src={heropageImg}
                alt="Premium Hero Showcase"
                fetchPriority="high"
                decoding="async"
                loading="eager"
                className="h-full w-full object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)] group-hover/heroimg:drop-shadow-[0_25px_60px_rgba(212,175,55,0.3)] md:drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] lg:h-[120%] lg:w-[120%] opacity-95 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/heroimg:opacity-100 relative z-10"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)',
                  maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/heroimg:animate-[shine_1.5s_ease-in-out] pointer-events-none z-20 mix-blend-overlay" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
