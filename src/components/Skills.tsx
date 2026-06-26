import { motion } from 'framer-motion';
import { PremiumCard } from './PremiumCard';
import { SectionTitle } from './SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategories = [
  {
    title: "Programming",
    iconSrc: "/icon-lang.png",
    skills: ["C", "C++", "Python", "JavaScript"],
    glow: "rgba(212, 175, 55, 0.4)", // Warm gold
    borderColor: "border-accent-gold/30 hover:border-accent-gold/60",
    accentGlow: "shadow-[0_0_20px_rgba(212,175,55,0.05)] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
    dotColor: "bg-accent-gold shadow-[0_0_8px_#D4AF37]"
  },
  {
    title: "Frontend",
    iconSrc: "/icon-frontend.png",
    skills: ["HTML", "CSS", "Tailwind CSS", "React"],
    glow: "rgba(6, 182, 212, 0.4)", // Cyan
    borderColor: "border-accent-cyan/30 hover:border-accent-cyan/60",
    accentGlow: "shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    dotColor: "bg-accent-cyan shadow-[0_0_8px_#06B6D4]"
  },
  {
    title: "Backend",
    iconSrc: "/icon-backend.png",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
    glow: "rgba(59, 130, 246, 0.4)", // Blue
    borderColor: "border-accent-blue/30 hover:border-accent-blue/60",
    accentGlow: "shadow-[0_0_20px_rgba(59,130,246,0.05)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    dotColor: "bg-accent-blue shadow-[0_0_8px_#3B82F6]"
  },
  {
    title: "Tools",
    iconSrc: "/icon-tools.png",
    skills: ["Git", "GitHub", "VS Code"],
    glow: "rgba(139, 92, 246, 0.4)", // Purple
    borderColor: "border-accent-purple/30 hover:border-accent-purple/60",
    accentGlow: "shadow-[0_0_20px_rgba(139,92,246,0.05)] hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    dotColor: "bg-accent-purple shadow-[0_0_8px_#8B5CF6]"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 relative border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle title="Technical Skills" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skillCategories.map((category, idx) => (
              <PremiumCard 
                key={idx}
                className={`h-full border ${category.borderColor} ${category.accentGlow} bg-card-bg backdrop-blur-2xl transition-all duration-300`}
                outerGlow={category.glow}
                innerGlow="rgba(255, 255, 255, 0.03)"
              >
                {/* Premium corner highlights */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 rounded-tl-lg pointer-events-none" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 rounded-bl-lg pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 rounded-br-lg pointer-events-none" />

                <h3 className="text-lg font-serif text-primary mb-6 md:mb-8 flex items-center gap-4 font-bold tracking-wide">
                  <div className="w-10 h-10 rounded-full bg-[#111114] flex items-center justify-center border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)] overflow-hidden">
                     <img 
                       src={category.iconSrc} 
                       alt={category.title} 
                       loading="lazy"
                       decoding="async"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.onerror = null;
                         target.src = "/tech-stack.png";
                       }}
                       className="w-5 h-5 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
                     />
                  </div>
                  {category.title}
                </h3>
                
                <div className="flex flex-col gap-3 md:gap-4 relative z-10">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-4 group/skill bg-white/[0.01] hover:bg-white/[0.04] p-3 md:p-3.5 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 will-change-transform">
                      <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-sm rotate-45 bg-white/20 group-hover/skill:${category.dotColor.split(' ')[0]} group-hover/skill:${category.dotColor.split(' ')[1]} group-hover/skill:rotate-90 transition-all duration-300`} />
                      <span className="text-secondary text-[13px] md:text-sm font-medium tracking-wide group-hover/skill:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
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
