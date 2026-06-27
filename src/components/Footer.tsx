import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from 'react-icons/fa6';

export const Footer = memo(function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-[#030303]/80 backdrop-blur-3xl pt-16 pb-12 overflow-hidden"
    >
      {/* Soft top divider with metallic gold glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent shadow-[0_1px_15px_rgba(212,175,55,0.6)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent blur-sm" />

      {/* Elegant radial lighting behind footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
      
      {/* Minimal grain texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left group"
        >
          <h2 className="text-2xl font-serif font-bold tracking-[0.15em] mb-3 text-[#F0F0F0] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            ARIB<span className="text-accent-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]">.</span>
          </h2>
          <p className="text-[#A1A1AA] text-[13px] font-light tracking-wide">
            Designed and Developed by <span className="text-accent-gold/90 font-medium drop-shadow-sm group-hover:text-accent-gold transition-colors duration-300">Arib Taiyab</span>
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-5 items-center"
        >
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/aribtaiyab' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aribtayab/' },
            { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/arib_x21' }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.label}
              className="group/social relative flex items-center justify-center w-11 h-11 rounded-full bg-[#0A0A0A]/60 backdrop-blur-xl border border-[#D4AF37]/20 shadow-[0_4px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#D4AF37]/60 hover:shadow-[0_8px_25px_rgba(212,175,55,0.25),inset_0_0_10px_rgba(212,175,55,0.1)] transition-all duration-500 hover:-translate-y-1 hover:rotate-[3deg] overflow-hidden"
            >
              {/* Soft ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] opacity-0 group-hover/social:opacity-100 transition-opacity duration-500" />
              
              {/* Reflection sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/social:animate-[shine_1.5s_ease-in-out_infinite] mix-blend-overlay" />
              
              <social.icon size={18} className="relative z-10 text-[#C0C0C0] group-hover/social:text-accent-gold group-hover/social:scale-110 group-hover/social:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-500" />
            </a>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container relative z-10 mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/[0.03] text-center flex justify-center"
      >
         <p className="text-[11px] text-[#71717A] font-light tracking-widest uppercase flex items-center gap-2">
           &copy; {new Date().getFullYear()} Arib Taiyab <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" /> All rights reserved.
         </p>
      </motion.div>
    </motion.footer>
  );
});
