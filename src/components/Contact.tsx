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
      <div className="absolute top-[20%] left-[10%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full bg-accent-gold/[0.03] blur-[100px] md:blur-[120px] pointer-events-none mix-blend-screen will-change-transform" />

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

          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start bg-card-bg backdrop-blur-2xl border border-white/5 p-6 sm:p-8 md:p-14 rounded-2xl md:rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-accent-gold/30 transition-all duration-300">
            {/* Metallic Inner Frame for VIP Feel */}
            <div className="absolute inset-1 border border-white/5 rounded-[20px] md:rounded-[24px] pointer-events-none group-hover:border-accent-gold/20 transition-colors duration-300 z-20" />
            
            {/* Inner ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none mix-blend-screen" />

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
                        className="flex items-center gap-4 text-secondary hover:text-accent-gold transition-all duration-300 group/link p-2 -ml-2 rounded-lg hover:bg-white/[0.02]"
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 group-hover/link:border-accent-gold/50 flex items-center justify-center transition-all duration-300 group-hover/link:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                          <Icon size={16} className="md:w-5 md:h-5" />
                        </div>
                        <span className="text-xs md:text-sm tracking-widest font-bold">{link.name}</span>
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
                    className="w-full bg-[#050508] border border-white/10 p-3 md:p-4 rounded-xl text-primary text-sm focus:outline-none focus:border-accent-gold focus:shadow-[0_0_25px_rgba(212,175,55,0.15),inset_0_0_10px_rgba(212,175,55,0.05)] transition-all duration-300 placeholder:text-secondary/30 font-light"
                    placeholder="John Doe"
                  />
                  <div className="absolute bottom-[2px] left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-2 md:space-y-3 group/input relative">
                  <label htmlFor="email" className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest ml-1 group-focus-within/input:text-accent-gold transition-colors duration-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#050508] border border-white/10 p-3 md:p-4 rounded-xl text-primary text-sm focus:outline-none focus:border-accent-gold focus:shadow-[0_0_25px_rgba(212,175,55,0.15),inset_0_0_10px_rgba(212,175,55,0.05)] transition-all duration-300 placeholder:text-secondary/30 font-light"
                    placeholder="john@example.com"
                  />
                  <div className="absolute bottom-[2px] left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3 group/input relative">
                <label htmlFor="subject" className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest ml-1 group-focus-within/input:text-accent-gold transition-colors duration-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-[#050508] border border-white/10 p-3 md:p-4 rounded-xl text-primary text-sm focus:outline-none focus:border-accent-gold focus:shadow-[0_0_25px_rgba(212,175,55,0.15),inset_0_0_10px_rgba(212,175,55,0.05)] transition-all duration-300 placeholder:text-secondary/30 font-light"
                  placeholder="How can I help you?"
                />
                <div className="absolute bottom-[2px] left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-2 md:space-y-3 group/input relative">
                <label htmlFor="message" className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest ml-1 group-focus-within/input:text-accent-gold transition-colors duration-300">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#050508] border border-white/10 p-3 md:p-4 rounded-xl text-primary text-sm focus:outline-none focus:border-accent-gold focus:shadow-[0_0_25px_rgba(212,175,55,0.15),inset_0_0_10px_rgba(212,175,55,0.05)] transition-all duration-300 placeholder:text-secondary/30 font-light resize-none"
                  placeholder="Your message here..."
                />
                <div className="absolute bottom-[6px] left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="pt-2 md:pt-4 flex justify-end">
                <MagneticButton 
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto min-w-0 sm:min-w-[200px]"
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
