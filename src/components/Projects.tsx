import { memo } from 'react';
import { m } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa6';
import accessai from './accessai.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import pythonImg from './python project.jpeg';

type ProjectCard = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live?: string;
  glow: string;
  borderColor: string;
  hoverBorder: string;
  featured?: boolean;
  badge?: string;
  features?: string[];
};

const projects: ProjectCard[] = [
  {
    title: "Access AI",
    description: "AI-powered Chrome Extension that explains, summarizes, translates, and answers questions directly on any webpage without leaving the current tab.",
    tech: ["React.js", "Tailwind CSS", "Supabase", "Groq API", "Chrome Extension API"],
    image: accessai,
    github: "https://github.com/aribtaiyab/ACCESSAI",
    live: "https://accessai-frontend.vercel.app/",
    glow: "rgba(212, 175, 55, 0.08)",
    borderColor: "border-[#D4AF37]/30",
    hoverBorder: "group-hover:border-[#D4AF37]/60 group-hover:-translate-y-1",
    featured: true,
    badge: "⭐ Featured Project",
    features: [
      "✨ Explain Text",
      "📄 Summarize",
      "🌍 Translate 150+ Languages",
      "💬 Ask This Page"
    ]
  },
  {
    title: "Currency Calculator",
    description: "Currency conversion application with clean interface and real-time calculations.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: image2,
    github: "https://github.com/aribtaiyab/Currency-Converter",
    glow: "rgba(212, 175, 55, 0.05)",
    borderColor: "border-accent-gold/10",
    hoverBorder: "group-hover:border-accent-gold/30 group-hover:-translate-y-1"
  },
  {
    title: "Amazon Clone",
    description: "Responsive Amazon-inspired e-commerce interface.",
    tech: ["HTML", "CSS"],
    image: image4,
    github: "https://github.com/aribtaiyab/amazon-clone",
    glow: "rgba(232, 201, 106, 0.05)",
    borderColor: "border-soft-gold/10",
    hoverBorder: "group-hover:border-soft-gold/30 group-hover:-translate-y-1"
  },
  {
    title: "Stone Paper Scissors Game",
    description: "Interactive browser-based game with score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: image3,
    github: "https://github.com/aribtaiyab/StonePaperScissors",
    glow: "rgba(243, 229, 171, 0.05)",
    borderColor: "border-soft-champagne/10",
    hoverBorder: "group-hover:border-soft-champagne/30 group-hover:-translate-y-1"
  },
  {
    title: "Python Calculator",
    description: "Desktop calculator application built using Python GUI.",
    tech: ["Python", "Tkinter"],
    image: pythonImg,
    github: "https://github.com/aribtaiyab/calculater-python-",
    glow: "rgba(165, 243, 252, 0.05)",
    borderColor: "border-soft-cyan/10",
    hoverBorder: "group-hover:border-soft-cyan/30 group-hover:-translate-y-1"
  },
  {
    title: "Google Clone",
    description: "Modern Google homepage recreation with responsive design.",
    tech: ["HTML", "Tailwind CSS"],
    image: image1,
    github: "https://github.com/aribtaiyab/Google-Clone",
    glow: "rgba(212, 175, 55, 0.05)",
    borderColor: "border-accent-gold/10",
    hoverBorder: "group-hover:border-accent-gold/30 group-hover:-translate-y-1"
  }
];

export const Projects = memo(function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    })
  };

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 relative bg-[#050505] overflow-hidden">
      <style>{`
        @keyframes goldShine {
          0%, 80%, 100% { opacity: 0; transform: translateX(-100%); }
          90% { opacity: 1; transform: translateX(100%); }
        }
        @keyframes reflectionSweep {
          0%, 80%, 100% { transform: translateX(-100%) skewX(-12deg); }
          90% { transform: translateX(200%) skewX(-12deg); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        @keyframes featuredSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        .featured-card {
          transform: translateZ(0);
        }
        .card-3d-wrapper {
          perspective: 1200px;
        }
        .card-3d-inner {
          transform-style: preserve-3d;
          transition: transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 350ms ease;
        }
        .card-3d-wrapper:not(.featured-card):hover .card-3d-inner {
          transform: rotateX(4deg) rotateY(-4deg) translateY(-10px) scale(1.03);
          box-shadow: 0 30px 50px -10px rgba(0,0,0,0.9), 0 0 25px rgba(212,175,55,0.15), inset 0 1px 2px rgba(255,255,255,0.2);
        }
        .featured-card:hover .card-3d-inner {
          transform: translateY(-4px) scale(1.005);
          box-shadow: 0 16px 28px -14px rgba(0,0,0,0.7), 0 0 20px rgba(212,175,55,0.12);
        }
        .featured-card:hover .featured-image {
          transform: scale(1.035);
        }
        .featured-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px;
          padding: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.75;
          pointer-events: none;
          animation: featuredSweep 5.4s linear infinite;
        }
        .card-3d-content {
          transform: translateZ(20px);
        }
        .card-3d-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background enhancements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(212,175,55,0.02),transparent_20%,transparent_80%,rgba(212,175,55,0.02))] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      {/* Ambient glowing orbs */}
      <div className="absolute top-[30%] left-[15%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.05] blur-[120px] pointer-events-none animate-[breathe_8s_infinite]" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/[0.04] blur-[150px] pointer-events-none animate-[breathe_12s_infinite]" />

      {/* Separators */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 md:gap-6 w-full mb-10 md:mb-16 select-none group relative overflow-hidden"
          >
            <div className="relative flex items-center justify-center w-3 h-3">
              <div className="absolute inset-0 bg-[#D4AF37] rotate-45 transform scale-50 shadow-[0_0_12px_#D4AF37] group-hover:scale-75 transition-transform duration-500" />
            </div>
            
            <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF8D6] to-[#D4AF37] uppercase whitespace-nowrap drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] relative">
              Featured Projects
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 mix-blend-overlay" style={{ animation: 'goldShine 10s infinite' }} />
            </h2>
            
            <div className="relative flex-grow h-[1px] bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37]/10 to-transparent overflow-hidden">
              <div className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-[#FFF8D6] to-transparent opacity-50" style={{ animation: 'reflectionSweep 8s infinite' }} />
            </div>
          </m.div>

          {/* Cards Grid */}
          <div className="space-y-8 md:space-y-10">
            {(() => {
              const featuredProject = projects[0];
              const remainingProjects = projects.slice(1);
              const featuredTags = featuredProject?.features ?? [];

              return (
                <>
                  <m.div
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className="card-3d-wrapper featured-card w-full h-full card-3d-float"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <div className="card-3d-inner relative flex flex-col overflow-hidden rounded-[18px] border border-[#D4AF37]/25 bg-[#0A0A0A]/85 backdrop-blur-2xl shadow-[0_12px_28px_rgba(0,0,0,0.5),0_0_16px_rgba(212,175,55,0.08)] group">
                      <div className="absolute inset-0 rounded-[18px] pointer-events-none group-hover:border group-hover:border-[#D4AF37]/45 transition-colors duration-350 z-20" />
                      <div className="absolute inset-0 rounded-[18px] bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none z-0" />
                      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay rounded-[18px] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
                      <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none z-20">
                        <div className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animation: 'reflectionSweep 8s infinite' }} />
                      </div>

                      <div className="grid md:grid-cols-1 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
                        <div className="card-3d-content relative min-h-[240px] sm:min-h-[260px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[#D4AF37]/20 bg-[#050505] rounded-t-[17px] lg:rounded-t-none lg:rounded-l-[17px]">
                          <img
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            loading="eager"
                            decoding="async"
                            className="featured-image absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-350 group-hover:scale-[1.035]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/80 pointer-events-none" />
                        </div>

                        <div className="card-3d-content relative flex flex-col p-4 sm:p-5 lg:p-6 z-10 bg-gradient-to-b from-transparent to-[#050505]">
                          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-2.5 py-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F4E0A8] shadow-[0_0_16px_rgba(212,175,55,0.1)] mb-3">
                            <span className="text-[12px]">⭐</span>
                            <span>Featured Project</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FFF7DD] mb-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {featuredProject.title}
                          </h3>
                          <p className="text-gray-300 text-[12px] sm:text-[13px] leading-5 sm:leading-6 mb-3 sm:mb-4 font-light">
                            {featuredProject.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                            {featuredTags.map((feature, featureIdx) => (
                              <span key={featureIdx} className="text-[8px] sm:text-[9px] font-medium tracking-[0.2em] uppercase px-2.5 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-[#F6E2A5] shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-md">
                                {feature}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                            {featuredProject.tech.map((t, tIdx) => (
                              <span key={tIdx} className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase px-2.5 py-1.5 bg-black/50 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] shadow-[0_2px_8px_rgba(0,0,0,0.5)] backdrop-blur-md">
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="mt-auto flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 border-t border-[#D4AF37]/10">
                            <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="relative group/btn text-[#F6E2A5] hover:text-[#FFF2C7] transition-all duration-300 px-3 py-2 flex items-center justify-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 rounded-full shadow-[0_3px_8px_rgba(0,0,0,0.45)] hover:shadow-[0_0_12px_rgba(212,175,55,0.2)] hover:bg-[#D4AF37]/20 backdrop-blur-md active:scale-95 overflow-hidden text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em]" aria-label="View Live Demo">
                              <div className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" style={{ animation: 'reflectionSweep 1.5s ease-in-out infinite' }} />
                              <ExternalLink size={16} className="relative z-10" />
                              <span className="relative z-10">Live Demo</span>
                            </a>
                            <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="relative group/btn text-[#F6E2A5] hover:text-[#FFF2C7] transition-all duration-300 px-3 py-2 flex items-center justify-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 rounded-full shadow-[0_3px_8px_rgba(0,0,0,0.45)] hover:shadow-[0_0_12px_rgba(212,175,55,0.2)] hover:bg-[#D4AF37]/20 backdrop-blur-md active:scale-95 overflow-hidden text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em]" aria-label="View GitHub">
                              <div className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" style={{ animation: 'reflectionSweep 1.5s ease-in-out infinite' }} />
                              <Github size={16} className="relative z-10" />
                              <span className="relative z-10">GitHub</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </m.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {remainingProjects.map((project, idx) => (
                      <m.div
                        key={idx + 1}
                        custom={idx + 1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="card-3d-wrapper w-full h-full card-3d-float"
                        style={{ animationDelay: `${(idx + 1) * 0.2}s` }}
                      >
                        <div className="card-3d-inner relative flex flex-col h-full rounded-[22px] bg-[#0A0A0A]/80 backdrop-blur-2xl border border-[#D4AF37]/20 shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] group">
                          <div className="absolute inset-0 rounded-[22px] pointer-events-none group-hover:border group-hover:border-[#D4AF37]/50 transition-colors duration-350 z-20" />
                          <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none z-0" />
                          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay rounded-[22px] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

                          <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none z-20">
                            <div className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animation: 'reflectionSweep 8s infinite' }} />
                          </div>

                          <div className="card-3d-content relative aspect-[16/10] sm:aspect-video rounded-t-[21px] overflow-hidden border-b border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-colors duration-350 z-10 bg-[#050505]">
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
                              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-350 group-hover:opacity-100 group-hover:scale-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] opacity-80 pointer-events-none" />
                          </div>

                          <div className="card-3d-content relative flex flex-col flex-grow p-6 md:p-8 z-10 bg-gradient-to-b from-transparent to-[#050505] rounded-b-[21px]">
                            <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-3 md:mb-4 group-hover:text-[#D4AF37] transition-colors duration-350 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow font-light">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                              {project.tech.map((t, tIdx) => (
                                <span key={tIdx} className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 bg-black/50 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 rounded-full text-[#D4AF37] shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-colors duration-350 backdrop-blur-md">
                                  {t}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-colors duration-350 relative">
                              <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="relative group/btn text-gray-300 hover:text-[#D4AF37] transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center -ml-2 bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:bg-[#D4AF37]/10 backdrop-blur-md active:scale-95 overflow-hidden" aria-label="View Github">
                                <div className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" style={{ animation: 'reflectionSweep 1.5s ease-in-out infinite' }} />
                                <Github size={20} className="relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
                              </a>
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="relative group/btn text-gray-300 hover:text-[#D4AF37] transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center bg-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:bg-[#D4AF37]/10 backdrop-blur-md active:scale-95 overflow-hidden" aria-label="View Live Project">
                                <div className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" style={{ animation: 'reflectionSweep 1.5s ease-in-out infinite' }} />
                                <ExternalLink size={20} className="relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </m.div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </section>
  );
});
