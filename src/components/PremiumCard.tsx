import { memo, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export const PremiumCard = memo(function PremiumCard({
  children,
  className = '',
  onClick,
  outerGlow = 'rgba(212, 175, 55, 0.35)',
  innerGlow = 'rgba(212, 175, 55, 0.06)',
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  outerGlow?: string;
  innerGlow?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl p-[1px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 will-change-transform hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] ${className}`}
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-20 rounded-xl border border-white/10 transition-colors duration-500 group-hover:border-accent-gold/40" />
      <div className="pointer-events-none absolute inset-[1px] z-20 rounded-xl border border-black/40" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-500 will-change-transform group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${outerGlow}, transparent)`,
          backgroundSize: '200% 100%',
        }}
      />

      <div className="relative z-10 h-full w-full overflow-hidden rounded-xl bg-card-bg p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-colors duration-500 group-hover:bg-[#111114]/90">
        <div
          className="pointer-events-none absolute inset-0 z-10 mix-blend-screen opacity-0 transition duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at center, ${innerGlow}, transparent 70%)` }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[20px] bg-gradient-to-t from-black/40 to-transparent" />

        {children}
      </div>
    </motion.div>
  );
});
