import { memo } from 'react';
import { m } from 'framer-motion';
import { Code2, MonitorSmartphone, DatabaseZap, Wrench, Database } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface SkillItem {
  name: string;
  icon?: string;
  customUrl?: string;
  isLucide?: boolean;
  LucideIcon?: React.ElementType;
}

interface SkillCategory {
  title: string;
  Icon: React.ElementType;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    Icon: Code2,
    skills: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" }
    ]
  },
  {
    title: "Frontend",
    Icon: MonitorSmartphone,
    skills: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "React", icon: "react" }
    ]
  },
  {
    title: "Backend",
    Icon: DatabaseZap,
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "SQL", isLucide: true, LucideIcon: Database }
    ]
  },
  {
    title: "Tools",
    Icon: Wrench,
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" }
    ]
  }
];

export const Skills = memo(function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 border-t border-accent-gold/10 bg-[#050505] overflow-hidden">
      
      {/* Premium ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
         <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/[0.04] blur-[120px] mix-blend-screen animate-[pulse-glow_8s_ease-in-out_infinite]" />
         <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent-gold/[0.02] blur-[100px] mix-blend-screen" />
         {/* Noise texture overlay */}
         <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
         {/* Very subtle animated gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#111]/20 to-transparent mix-blend-overlay" />
         
         {/* Soft animated golden particles (simulated via radial gradients floating) */}
         <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent-gold/40 shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-[float-subtle_5s_ease-in-out_infinite]" />
         <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-accent-gold/30 shadow-[0_0_8px_rgba(212,175,55,0.6)] animate-[float-subtle_7s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-[1440px]">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={containerVariants}
        >
          {/* Custom Premium Section Title */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-center justify-center mb-16 md:mb-20 relative"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent-gold/60" />
              <div className="w-2 h-2 rotate-45 bg-accent-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-accent-gold/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-bright-gold to-accent-gold drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)] tracking-wide relative">
              Technical Skills
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shine_10s_ease-in-out_infinite] pointer-events-none mix-blend-overlay" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
            </h2>
          </m.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skillCategories.map((category, idx) => (
              <m.div 
                key={idx}
                variants={cardVariants}
                className="group/card relative h-full rounded-[22px] border border-white/[0.04] bg-[#0A0A0C]/90 backdrop-blur-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[1deg] hover:border-accent-gold/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)]"
              >
                {/* Noise Texture for Card */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
                
                {/* Inner subtle glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />

                {/* Reflection Sweep every 8s */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full animate-[shine_8s_ease-in-out_infinite] pointer-events-none mix-blend-overlay" />

                {/* Card Highlight Edges */}
                <div className="absolute inset-0 rounded-[22px] border border-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-[350ms] pointer-events-none" />

                {/* Header (Badge + Title) */}
                <h3 className="text-[19px] md:text-[21px] font-serif text-[#FAFAFA] mb-8 flex items-center gap-4 font-bold tracking-wide relative z-10 drop-shadow-sm">
                  {/* Glass Badge */}
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-[#050505]/80 flex items-center justify-center border border-accent-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.05)] overflow-hidden group-hover/card:border-accent-gold/50 group-hover/card:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-[350ms]">
                    {/* Rotating gradient ring */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent-gold/20 to-transparent animate-[spin_4s_linear_infinite]" />
                    <div className="absolute inset-[1px] bg-[#0A0A0C] rounded-full" />
                    <category.Icon className="w-[22px] h-[22px] text-accent-gold relative z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover/card:drop-shadow-[0_0_12px_rgba(212,175,55,0.8)] transition-all duration-[350ms] animate-[float-subtle_3s_ease-in-out_infinite]" />
                  </div>
                  {category.title}
                </h3>
                
                {/* Skill Items */}
                <div className="flex flex-col gap-3 relative z-10 w-full flex-grow">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="relative flex items-center gap-4 group/skill bg-white/[0.015] hover:bg-white/[0.04] p-3 md:p-3.5 rounded-xl border border-white/5 hover:border-accent-gold/30 transition-all duration-[300ms] ease-out will-change-transform overflow-hidden cursor-default">
                      
                      {/* Hover Shimmer Sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/10 to-transparent -translate-x-full group-hover/skill:animate-[shine_0.8s_ease-in-out] pointer-events-none mix-blend-screen" />
                      
                      {/* Left Accent Line */}
                      <div className="w-[3px] h-4 rounded-sm bg-white/10 group-hover/skill:bg-accent-gold transition-all duration-[300ms] group-hover/skill:h-7 group-hover/skill:shadow-[0_0_10px_rgba(212,175,55,0.8)] relative z-10" />
                      
                      {/* Icon Container */}
                      <div className="relative z-10 flex items-center justify-center w-5 h-5 transition-transform duration-[300ms] group-hover/skill:scale-[1.08] group-hover/skill:rotate-[5deg]">
                        {skill.isLucide && skill.LucideIcon ? (
                          <skill.LucideIcon className="w-5 h-5 text-[#A1A1AA] group-hover/skill:text-accent-gold drop-shadow-sm group-hover/skill:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-[300ms]" />
                        ) : (
                          <img 
                            src={skill.customUrl || `https://cdn.simpleicons.org/${skill.icon}/A1A1AA`} 
                            alt={skill.name} 
                            loading="lazy" 
                            decoding="async"
                            className={`w-full h-full object-contain transition-all duration-[300ms] group-hover/skill:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] ${skill.customUrl ? 'opacity-80 group-hover/skill:opacity-100' : 'group-hover/skill:brightness-200'}`}
                          />
                        )}
                      </div>

                      {/* Thin Separator Line */}
                      <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-white/[0.03] pointer-events-none" />

                      <span className="text-[#E5E7EB] text-[14px] md:text-[15px] font-medium tracking-wide group-hover/skill:text-accent-gold transition-colors duration-[300ms] relative z-10 drop-shadow-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>

      {/* Visual Connector to next section */}
      <div className="w-full flex items-center justify-center pointer-events-none absolute bottom-0 left-0 hidden md:flex">
        <div className="w-full h-[1px] visual-connector relative opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
        </div>
      </div>
    </section>
  );
});
