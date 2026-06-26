import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808]"
    >
      {/* Background radial soft gold glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          initial={{ letterSpacing: "0.2em", opacity: 0, y: 10 }}
          animate={{ letterSpacing: "0.5em", opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-3xl md:text-4xl font-serif font-bold text-primary mr-[-0.5em] select-none"
        >
          ARIB<span className="text-accent-gold">.</span>
        </motion.div>

        {/* Elegant Minimalist progress line */}
        <div className="w-24 h-[1px] bg-white/5 relative overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-accent-gold to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
