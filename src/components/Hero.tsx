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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const Hero = memo(function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -80]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-12 pt-24 md:pb-20 md:pt-32 lg:py-0">
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/5 blur-[100px] will-change-transform md:h-[600px] md:w-[600px] md:blur-[150px] lg:h-[800px] lg:w-[800px]" />

      <div className="container relative z-10 mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center gap-8 px-6 md:gap-12 md:px-12 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="group relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/5 bg-card-bg p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 hover:border-accent-gold/30 sm:p-8 md:rounded-3xl md:p-14 lg:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        >
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.02] transition-opacity duration-300 group-hover:opacity-[0.05]">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.5" />
              <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="pointer-events-none absolute inset-0 z-0 mix-blend-screen bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 will-change-opacity" />

          <div className="relative z-10">
            <motion.h1 variants={itemVariants} className="relative mb-3 text-4xl font-serif font-bold leading-[1.1] tracking-tighter text-primary sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="mb-1 block text-xl font-sans font-light uppercase tracking-widest text-secondary opacity-80 sm:text-2xl md:mb-2 md:text-3xl">I'm</span>
              <span className="block pb-2 text-liquid-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">Arib Taiyab</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="mb-6 text-lg font-light tracking-wide text-primary opacity-90 sm:text-xl md:mb-8 md:text-2xl lg:text-3xl">
              Full Stack Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="mb-8 max-w-lg text-balance text-[13px] font-light leading-relaxed tracking-wide text-secondary sm:text-sm md:mb-12 md:text-base">
              I am passionate about building modern web experiences, continuously improving as a developer. Focused on building clean, responsive, and impactful digital products.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 md:gap-6">
              <MagneticButton href="#projects" variant="primary" className="flex w-full justify-center sm:w-auto">
                View Projects
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ y: y2 }}
          className="relative mt-4 flex h-[350px] w-full items-center justify-center will-change-transform sm:h-[450px] md:h-[500px] lg:mt-0 lg:h-[600px]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-accent-gold/10 blur-[80px] mix-blend-screen md:blur-[120px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] md:h-[80%] md:w-[80%]" />

          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            className="relative flex h-full w-full items-center justify-center pointer-events-none will-change-transform"
          >
            <img
              src={heropageImg}
              alt="Premium Hero Showcase"
              fetchPriority="high"
              decoding="async"
              loading="eager"
              width={720}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full max-w-[120%] w-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] md:drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] lg:h-[120%] lg:w-[120%]"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)',
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
