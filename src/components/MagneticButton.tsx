import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticButton({ 
  children, 
  className = "", 
  href, 
  type = "button", 
  onClick,
  variant = "primary"
}: { 
  children: React.ReactNode, 
  className?: string, 
  href?: string, 
  type?: "button" | "submit" | "reset", 
  onClick?: (e: React.MouseEvent) => void,
  variant?: "primary" | "secondary"
}) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Smooth, reduced pull
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.span
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      className="flex items-center gap-2 justify-center w-full h-full relative z-10"
    >
      {children}
    </motion.span>
  );

  const baseClasses = "relative overflow-hidden group rounded-full font-semibold transition-all duration-500 select-none py-3.5 px-9 text-sm will-change-transform";
  const variants = {
    primary: "bg-gradient-to-r from-accent-gold via-bright-gold to-accent-gold text-background shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.5)] border border-white/20 hover:-translate-y-1",
    secondary: "border border-white/10 bg-card-bg backdrop-blur-md text-primary hover:border-accent-gold/40 hover:shadow-[0_8px_25px_rgba(212,175,55,0.2)] hover:-translate-y-1"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref as any}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={classes}
        onClick={onClick as any}
        style={{ display: 'inline-block' }}
      >
        {/* Light Sweep Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-light-sweep" style={{ animationDuration: '1.5s' }} />
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={classes}
      onClick={onClick}
    >
      {/* Light Sweep Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-light-sweep" style={{ animationDuration: '1.5s' }} />
      {buttonContent}
    </motion.button>
  );
}
