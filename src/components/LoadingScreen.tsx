import { m } from 'framer-motion';

export function LoadingScreen() {
  return (
    <m.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* 1. Cinematic Global Background & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)] mix-blend-screen" 
        />
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* WELCOME TO */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[10px] md:text-[11px] font-sans font-light tracking-[0.4em] uppercase text-[#F3E5AB] opacity-80 mb-4 ml-[0.4em]"
        >
          Welcome To
        </m.div>

        {/* ARIB TAIYAB */}
        <m.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4"
        >
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF8D6] to-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            ARIB TAIYAB
          </span>
          
          {/* Light Sweep */}
          <m.div
            initial={{ left: '-100%' }}
            animate={{ left: '200%' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
            className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] mix-blend-overlay z-20 pointer-events-none"
          />
        </m.div>

        {/* PORTFOLIO */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="text-[13px] md:text-[14px] font-light tracking-[0.3em] uppercase text-[#E0E0E0] mb-8 ml-[0.3em]"
        >
          Portfolio
        </m.div>

        {/* Expanding Gold Line */}
        <m.div
          initial={{ width: "0%" }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        />
      </div>

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,rgba(5,5,5,0.9)_100%)] pointer-events-none z-0" />
    </m.div>
  );
}
