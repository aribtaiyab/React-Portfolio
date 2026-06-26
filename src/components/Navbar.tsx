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

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={cn(
        'fixed left-1/2 z-50 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent will-change-transform transition-all duration-500',
        isScrolled
          ? 'top-4 w-[90%] max-w-4xl border border-accent-gold/40 bg-[rgba(12,12,14,0.72)] py-3 backdrop-blur-2xl shadow-[0_0_20px_rgba(212,175,55,0.15)] md:w-[85%]'
          : 'top-6 w-[95%] max-w-5xl border-transparent bg-transparent py-3 md:w-[92%] md:py-4'
      )}
    >
      {isScrolled && (
        <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
      )}

      <div className="relative z-10 flex w-full items-center justify-between px-5 md:px-10">
        <a
          href="#"
          className="group relative -ml-2 flex items-center p-2 text-xl font-serif font-bold tracking-widest text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-2xl"
        >
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent transition-all duration-500 group-hover:from-accent-gold group-hover:to-bright-gold">ARIB</span>
          <span className="ml-1 text-accent-gold transition-all duration-500 group-hover:text-bright-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative overflow-hidden py-2 text-[13px] font-semibold uppercase tracking-widest text-secondary transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-0.5 will-change-transform">{link.name}</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full -translate-x-full bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-0 shadow-[0_0_8px_#D4AF37] transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 will-change-transform" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2 text-secondary transition-colors duration-300 hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative flex h-5 w-6 flex-col justify-center gap-1.5">
            <span className={cn('h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-out', isMobileMenuOpen ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0')} />
            <span className={cn('h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-out', isMobileMenuOpen ? 'opacity-0' : 'opacity-100')} />
            <span className={cn('h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-out', isMobileMenuOpen ? '-translate-y-2 -rotate-45' : 'translate-y-0 rotate-0')} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 top-[110%] z-40 w-full overflow-hidden rounded-2xl border border-accent-gold/30 bg-[rgba(12,12,14,0.95)] shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-3xl will-change-transform md:hidden"
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
            <div className="relative z-10 flex w-full flex-col items-center gap-2 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex min-h-[44px] w-full items-center justify-center gap-3 py-4 text-center text-sm font-semibold uppercase tracking-widest text-secondary transition-colors duration-300 hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gold opacity-0 shadow-[0_0_8px_#D4AF37] transition-opacity duration-300 group-hover:opacity-100" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});
