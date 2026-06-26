import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  },
};

export function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div variants={itemVariants} className="flex items-center gap-4 md:gap-6 w-full mb-10 md:mb-16 select-none group">
      {/* Decorative luxury diamond */}
      <div className="relative flex items-center justify-center w-3 h-3">
        <div className="absolute inset-0 bg-accent-gold rotate-45 transform scale-50 group-hover:scale-75 transition-transform duration-500 shadow-[0_0_12px_#D4AF37]" />
        <div className="absolute inset-0 bg-soft-gold rotate-45 transform scale-[0.25]" />
      </div>
      
      <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold tracking-[0.15em] md:tracking-[0.2em] text-primary uppercase whitespace-nowrap text-gold-gradient drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
        {title}
      </h2>
      
      {/* Elegant decorative line */}
      <div className="relative flex-grow h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/60 via-accent-gold/10 to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-soft-gold via-transparent to-transparent opacity-50 blur-[1px]" />
      </div>
    </motion.div>
  );
}
