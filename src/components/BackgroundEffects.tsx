import { useEffect, useRef } from 'react';

export function BackgroundEffects() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    // Optimize by updating DOM directly to avoid React re-renders and React state lag
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      cancelAnimationFrame(animationFrameId);
      
      animationFrameId = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          const x = e.clientX - window.innerWidth / 2;
          const y = e.clientY - window.innerHeight / 2;
          spotlightRef.current.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep black space background */}
      <div className="absolute inset-0 bg-background" />

      {/* Multiple radial gradients for cinematic depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)] blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_60%)] blur-[120px]" />
      
      {/* Dynamic spotlight tracking mouse slightly */}
      <div
        ref={spotlightRef}
        className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] rounded-full blur-[140px] opacity-30 mix-blend-screen will-change-transform pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.04) 0%, transparent 50%)',
          transform: 'translate3d(-50%, -50%, 0)',
          transition: 'transform 0.15s ease-out'
        }}
      />

      {/* Grid overlay for structural feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Soft Particles using CSS background */}
      <div 
        className="absolute inset-0 opacity-[0.4] will-change-transform"
        style={{
          backgroundImage: 'radial-gradient(1px 1px at 10% 10%, rgba(212,175,55,0.8) 100%, transparent), radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.4) 100%, transparent), radial-gradient(1px 1px at 30% 60%, rgba(212,175,55,0.6) 100%, transparent), radial-gradient(2px 2px at 40% 80%, rgba(255,255,255,0.3) 100%, transparent), radial-gradient(1px 1px at 50% 20%, rgba(212,175,55,0.5) 100%, transparent), radial-gradient(1.5px 1.5px at 60% 50%, rgba(255,255,255,0.5) 100%, transparent), radial-gradient(1px 1px at 70% 90%, rgba(212,175,55,0.7) 100%, transparent), radial-gradient(2px 2px at 80% 40%, rgba(255,255,255,0.4) 100%, transparent), radial-gradient(1px 1px at 90% 70%, rgba(212,175,55,0.9) 100%, transparent)',
          backgroundSize: '250px 250px',
          animation: 'float-subtle 20s linear infinite'
        }}
      />
      
      {/* Film grain noise overlay for cinematic feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
    </div>
  );
}
