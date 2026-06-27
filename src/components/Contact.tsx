import { memo } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github, FaInstagram as Instagram } from 'react-icons/fa6';
import { MagneticButton } from './MagneticButton';
import { SectionTitle } from './SectionTitle';

const containerVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const socialLinks = [
  { name: 'aribtayab@gmail.com', url: 'mailto:aribtayab@gmail.com', icon: Mail },
  { name: 'Arib taiyab', url: 'https://www.linkedin.com/in/aribtayab/', icon: Linkedin },
  { name: 'Arib Taiyab', url: 'https://github.com/aribtaiyab', icon: Github },
  { name: 'arib_x21', url: 'https://instagram.com/arib_x21', icon: Instagram },
];

export const Contact = memo(function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 relative border-t border-white/5 bg-background overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[10%] left-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-accent-gold/[0.04] blur-[120px] md:blur-[150px] pointer-events-none mix-blend-screen will-change-transform" />
      <div className="absolute bottom-[10%] right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-soft-champagne/[0.03] blur-[120px] md:blur-[150px] pointer-events-none mix-blend-screen will-change-transform" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle title="Get In Touch" />
          
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary mb-4 md:mb-6 font-bold tracking-tight text-gold-gradient drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              Let's Build Something Great
            </h2>
            <p className="text-secondary max-w-2xl mx-auto text-balance font-light text-sm md:text-lg opacity-80 leading-relaxed">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start bg-[#050505]/60 backdrop-blur-3xl border border-accent-gold/20 p-6 sm:p-8 md:p-14 rounded-2xl md:rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(212,175,55,0.15),0_0_40px_rgba(212,175,55,0.05)] relative overflow-hidden group/container transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(212,175,55,0.3),0_0_60px_rgba(212,175,55,0.1)]">
            {/* Inner ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.1),transparent_60%)] pointer-events-none mix-blend-screen transition-opacity duration-700 opacity-60 group-hover/container:opacity-100" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_40%)] pointer-events-none mix-blend-screen" />

            <motion.div variants={itemVariants} className="space-y-8 md:space-y-12 relative z-30">
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-primary mb-6 md:mb-8 font-semibold tracking-wide">Contact Details</h3>
                <div className="space-y-4 md:space-y-6">
                  {socialLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 md:gap-5 text-secondary hover:text-accent-gold transition-all duration-500 group/link p-3 md:p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-accent-gold/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1),inset_0_0_0_1px_rgba(212,175,55,0.1)] hover:-translate-y-1 relative overflow-hidden"
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/link:animate-shine pointer-events-none" />
                        
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/10 group-hover/link:border-accent-gold/50 flex items-center justify-center transition-all duration-500 group-hover/link:shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover/link:scale-110 relative z-10">
                          <div className="absolute inset-0 rounded-full bg-accent-gold/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 blur-md" />
                          <Icon size={18} className="md:w-6 md:h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover/link:drop-shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all duration-500 relative z-10" />
                        </div>
                        <span className="text-xs md:text-sm tracking-widest font-bold z-10">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.form 
              variants={itemVariants}
              className="space-y-6 md:space-y-8 relative z-30"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 md:space-y-3 group/input relative">
                  <label htmlFor="name" className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest ml-1 group-focus-within/input:text-accent-gold transition-colors duration-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#050505]/40 backdrop-blur-md border border-accent-gold/20 rounded-xl px-5 py-4 text-primary text-sm focus:outline-none focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/50 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 placeholder:text-secondary/40 font-light hover:bg-[#050505]/60 hover:border-accent-gold/40"
                    placeholder="Arib Taiyab"
                  />
                </div>
                
                <div className="space-y-2 md:space-y-3 group/input relative">
                  <label htmlFor="email" className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest ml-1 group-focus-within/input:text-accent-gold transition-colors duration-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#050505]/40 backdrop-blur-md border border-accent-gold/20 rounded-xl px-5 py-4 text-primary text-sm focus:outline-none focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/50 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 placeholder:text-secondary/40 font-light hover:bg-[#050505]/60 hover:border-accent-gold/40"
                    placeholder="aribtayab@gmail.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3 group/input relative">
                <label htmlFor="subject" className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest ml-1 group-focus-within/input:text-accent-gold transition-colors duration-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-[#050505]/40 backdrop-blur-md border border-accent-gold/20 rounded-xl px-5 py-4 text-primary text-sm focus:outline-none focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/50 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 placeholder:text-secondary/40 font-light hover:bg-[#050505]/60 hover:border-accent-gold/40"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2 md:space-y-3 group/input relative">
                <label htmlFor="message" className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest ml-1 group-focus-within/input:text-accent-gold transition-colors duration-300">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#050505]/40 backdrop-blur-md border border-accent-gold/20 rounded-xl px-5 py-4 text-primary text-sm focus:outline-none focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/50 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 placeholder:text-secondary/40 font-light resize-none hover:bg-[#050505]/60 hover:border-accent-gold/40"
                  placeholder="Your message here..."
                />
              </div>

              <div className="pt-4 md:pt-6 flex justify-end">
                <MagneticButton 
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto min-w-0 sm:min-w-[200px] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                  <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </MagneticButton>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
