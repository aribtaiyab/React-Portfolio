import { memo, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          
          const sections = navLinks.map(link => link.href.substring(1));
          let current = '';
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150 && rect.bottom >= 150) {
                current = `#${section}`;
                break;
              }
            }
          }
          if (current !== activeHash) {
             setActiveHash(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    
    handleScroll();
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, [activeHash]);

  useEffect(() => {
    const isOpen = isMobileMenuOpen;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu, isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -80, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={cn(
        'fixed left-1/2 z-50 rounded-[24px] transition-all duration-500 will-change-transform flex flex-col justify-center hover:translate-y-[-1px]',
        isScrolled
          ? 'top-4 w-[92%] max-w-4xl bg-[#030303]/75 backdrop-blur-[16px] py-3 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_4px_20px_rgba(212,175,55,0.15)] md:w-[85%]'
          : 'top-6 w-[96%] max-w-5xl bg-[#050505]/40 backdrop-blur-[14px] py-4 shadow-[0_8px_30px_rgba(0,0,0,0.6)] md:w-[92%]'
      )}
    >
      {/* Outer Metallic Border & Inner Glow */}
      <div className={cn(
        "pointer-events-none absolute inset-0 rounded-[24px] transition-all duration-700",
        isScrolled 
          ? "border border-accent-gold/40 shadow-[inset_0_0_20px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)]" 
          : "border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.03),inset_0_1px_1px_rgba(255,255,255,0.08)] group-hover:border-accent-gold/20"
      )} />
      
      {/* Ambient Lighting Background */}
      <div className={cn(
        "pointer-events-none absolute inset-0 rounded-[24px] transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)] mix-blend-screen",
        isScrolled ? "opacity-100" : "opacity-0"
      )} />

      <div className="relative z-10 flex w-full items-center justify-between px-6 md:px-10">
        <a
          href="#"
          className="group relative -ml-2 flex items-center p-2 text-xl font-serif font-bold tracking-widest transition-colors duration-300 md:text-2xl outline-none overflow-hidden rounded-lg"
        >
          {/* Logo with subtle embossed effect and shine */}
          <span className="relative text-gold-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] filter brightness-110 group-hover:brightness-125 transition-all duration-500">
             ARIB
          </span>
          <span className="ml-1 text-accent-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.9)]">.</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine-slow pointer-events-none mix-blend-overlay" />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "group relative py-2 text-[11px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 hover:-translate-y-[2px] outline-none",
                  isActive ? "text-accent-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" : "text-[#E0E0E0] hover:text-accent-gold"
                )}
              >
                <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-300">{link.name}</span>
                
                {/* Hover/Active Underline */}
                <span className={cn(
                  "absolute bottom-0 left-1/2 h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold to-transparent transition-all duration-300 ease-out shadow-[0_0_8px_rgba(212,175,55,0.9)]",
                  isActive ? "w-[120%] opacity-100" : "w-0 opacity-0 group-hover:w-[120%] group-hover:opacity-100"
                )} />
                
                {/* Active Glow behind text */}
                <span className={cn(
                  "absolute inset-0 bg-accent-gold/10 blur-md rounded-full transition-opacity duration-300 pointer-events-none",
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                )} />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="group flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2 text-[#E0E0E0] transition-colors duration-300 hover:text-accent-gold outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative flex h-5 w-6 flex-col justify-center gap-1.5 drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
            <span className={cn('h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out', isMobileMenuOpen ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0')} />
            <span className={cn('h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out', isMobileMenuOpen ? 'opacity-0' : 'opacity-100')} />
            <span className={cn('h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out', isMobileMenuOpen ? '-translate-y-2 -rotate-45' : 'translate-y-0 rotate-0')} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 top-[115%] z-40 w-full overflow-hidden rounded-[24px] border border-accent-gold/30 bg-[#070709]/95 shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.2)] backdrop-blur-3xl will-change-transform md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent shadow-[0_1px_10px_rgba(212,175,55,0.8)]" />
            
            <div className="relative z-10 flex w-full flex-col items-center gap-2 px-6 py-8">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "group relative flex min-h-[48px] w-full items-center justify-center gap-4 py-4 text-center text-xs font-semibold uppercase tracking-widest transition-all duration-300 outline-none",
                      isActive ? "text-accent-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" : "text-[#E0E0E0] hover:text-accent-gold"
                    )}
                  >
                    <span className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all duration-300 shadow-[0_0_8px_#D4AF37]",
                      isActive ? "bg-accent-gold opacity-100 scale-125" : "bg-accent-gold opacity-0 group-hover:opacity-100"
                    )} />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});
