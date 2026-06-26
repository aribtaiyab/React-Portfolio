import { Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111]/30 backdrop-blur-md border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold tracking-wider mb-2">
            ARIB<span className="text-accent-gold">.</span>
          </h2>
          <p className="text-secondary text-sm font-light">
            Designed and Developed by Arib Taiyab
          </p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-secondary items-center">
          <a href="https://github.com/aribtaiyab" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors duration-300" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aribtayab/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com/arib_x21" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors duration-300" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-8 text-center md:text-left">
         <p className="text-xs text-secondary/40 font-light">
           &copy; {new Date().getFullYear()} Arib Taiyab. All rights reserved.
         </p>
      </div>
    </footer>
  );
}
