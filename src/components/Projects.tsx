import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PremiumCard } from './PremiumCard';
import { SectionTitle } from './SectionTitle';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import pythonImg from './python project.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const projects = [
  {
    title: "Currency Calculator",
    description: "Currency conversion application with clean interface and real-time calculations.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: image2,
    github: "https://github.com/aribtaiyab/Currency-Converter",
    glow: "rgba(212, 175, 55, 0.4)",
    borderColor: "border-accent-gold/30",
    hoverBorder: "group-hover:border-accent-gold/60"
  },
  {
    title: "Amazon Clone",
    description: "Responsive Amazon-inspired e-commerce interface.",
    tech: ["HTML", "CSS"],
    image: image4,
    github: "https://github.com/aribtaiyab/amazon-clone",
    glow: "rgba(6, 182, 212, 0.4)",
    borderColor: "border-accent-cyan/30",
    hoverBorder: "group-hover:border-accent-cyan/60"
  },
  {
    title: "Stone Paper Scissors Game",
    description: "Interactive browser-based game with score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: image3,
    github: "https://github.com/aribtaiyab/StonePaperScissors",
    glow: "rgba(243, 216, 122, 0.4)",
    borderColor: "border-bright-gold/30",
    hoverBorder: "group-hover:border-bright-gold/60"
  },
  {
    title: "Python Calculator",
    description: "Desktop calculator application built using Python GUI.",
    tech: ["Python", "Tkinter"],
    image: pythonImg,
    github: "https://github.com/aribtaiyab/calculater-python-",
    glow: "rgba(59, 130, 246, 0.4)",
    borderColor: "border-accent-blue/30",
    hoverBorder: "group-hover:border-accent-blue/60"
  },
  {
    title: "Google Clone",
    description: "Modern Google homepage recreation with responsive design.",
    tech: ["HTML", "Tailwind CSS"],
    image: image1,
    github: "https://github.com/aribtaiyab/Google-Clone",
    glow: "rgba(16, 185, 129, 0.4)",
    borderColor: "border-accent-emerald/30",
    hoverBorder: "group-hover:border-accent-emerald/60"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 relative border-t border-white/5 bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] left-[20%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full bg-accent-gold/[0.03] blur-[100px] md:blur-[120px] pointer-events-none mix-blend-screen will-change-transform" />
      <div className="absolute bottom-[20%] right-[15%] w-[350px] md:w-[400px] h-[350px] md:h-[400px] rounded-full bg-soft-gold/[0.03] blur-[120px] md:blur-[140px] pointer-events-none mix-blend-screen will-change-transform" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle title="Featured Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, idx) => (
              <PremiumCard 
                key={idx}
                className={`group flex flex-col h-full bg-card-bg backdrop-blur-2xl border ${project.borderColor} ${project.hoverBorder} transition-all duration-300`}
                outerGlow={project.glow}
                innerGlow={project.glow.replace(/0\.[34]/, '0.08')}
              >
                {/* Premium Image Frame */}
                <div className="aspect-[16/10] sm:aspect-video bg-[#050505] relative flex items-center justify-center border-b border-white/10 overflow-hidden group/image rounded-t-[10px]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='%23111' width='800' height='400'/%3E%3Ctext x='400' y='200' font-family='sans-serif' font-size='24' fill='%23555' text-anchor='middle' alignment-baseline='middle'%3EProject Preview%3C/text%3E%3C/svg%3E";
                    }}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 contrast-110 group-hover/image:opacity-100 group-hover/image:scale-105 transition-all duration-300 z-0 will-change-transform" 
                  />
                  
                  {/* Soft gold overlay for premium feel */}
                  <div className="absolute inset-0 bg-accent-gold/10 mix-blend-overlay pointer-events-none z-10" />
                  
                  {/* Backdrop Glow Circle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full blur-3xl opacity-40 transition-transform duration-300 group-hover/image:scale-150 group-hover/image:opacity-70 mix-blend-screen" style={{ backgroundColor: project.glow.replace(/0\.[34]/, '0.8') }} />
                  </div>
                  
                  {/* Subtle noise overlay */}
                  <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-black/40 rounded-b-[10px]">
                  <h3 className="text-lg md:text-xl font-serif text-primary mb-3 md:mb-4 group-hover:text-accent-gold transition-colors duration-300 font-bold tracking-wide drop-shadow-sm">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary text-[13px] md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase px-2.5 md:px-3 py-1 md:py-1.5 bg-white/[0.02] border border-white/5 group-hover:border-white/15 group-hover:bg-white/[0.05] rounded-full text-secondary transition-all duration-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-5 mt-auto pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-500 relative">
                    <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-accent-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent-gold transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center -ml-2" aria-label="View Github">
                      <Github size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent-gold transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="View Live Project">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </PremiumCard>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Visual Connector to next section */}
      <div className="w-full flex items-center justify-center pointer-events-none absolute bottom-0 left-0 hidden md:flex">
        <div className="w-full h-[1px] visual-connector relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
        </div>
      </div>
    </section>
  );
}
