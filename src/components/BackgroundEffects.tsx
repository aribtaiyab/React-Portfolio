import { useEffect, useRef } from 'react';

export function BackgroundEffects() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf: number;
    let cx = 0, cy = 0, tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      // Max movement: 5px for gentle parallax
      tx = (e.clientX / window.innerWidth - 0.5) * 10;
      ty = (e.clientY / window.innerHeight - 0.5) * 10;
    };

    const tick = () => {
      cx += (tx - cx) * 0.05; 
      cy += (ty - cy) * 0.05;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const noiseSvg = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

  return (
    <>
      {/* LAYER 1: Deep charcoal base */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-anim-breathe will-change-transform origin-center"
             style={{ animation: 'bg-breathe 25s ease-in-out infinite alternate' }}>
          
          {/* LAYER 2: Luxury mesh gradients */}
          <div className="absolute inset-0 mix-blend-screen opacity-80"
               style={{
                 background: `
                   radial-gradient(circle at 10% 20%, rgba(212,175,55,0.03) 0%, transparent 40%),
                   radial-gradient(circle at 90% 80%, rgba(243,224,150,0.02) 0%, transparent 40%),
                   radial-gradient(circle at 50% 50%, rgba(30,30,35,0.4) 0%, transparent 60%),
                   radial-gradient(circle at 80% 30%, rgba(245,158,11,0.02) 0%, transparent 40%),
                   radial-gradient(circle at 20% 80%, rgba(6,78,59,0.015) 0%, transparent 40%)
                 `
               }} />
        </div>
      </div>

      {/* LAYER 3: Section ambient glow orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-90">
        <div className="absolute left-1/2 top-[3%] w-[90vw] max-w-[1200px] aspect-square -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
        <div className="absolute right-0 top-[20%] w-[80vw] max-w-[1000px] aspect-square translate-x-1/4 -translate-y-1/2 bg-[radial-gradient(circle,rgba(243,224,150,0.05)_0%,transparent_60%)]" />
        <div className="absolute left-0 top-[40%] w-[85vw] max-w-[1100px] aspect-square -translate-x-1/4 -translate-y-1/2 bg-[radial-gradient(circle,rgba(184,134,11,0.05)_0%,transparent_60%)]" />
        <div className="absolute right-0 top-[65%] w-[95vw] max-w-[1300px] aspect-square translate-x-1/4 -translate-y-1/2 bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_60%)]" />
        <div className="absolute left-1/2 top-[85%] w-[90vw] max-w-[1200px] aspect-square -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
      </div>

      {/* PARALLAX CONTAINER: Layers 4, 5, 6 */}
      <div ref={parallaxRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden will-change-transform">
        {/* LAYER 4: Soft floating fog */}
        <div className="absolute inset-[-10%] opacity-40 mix-blend-screen"
             style={{
               background: `
                 radial-gradient(ellipse at 30% 40%, rgba(212,175,55,0.02) 0%, transparent 50%),
                 radial-gradient(ellipse at 70% 60%, rgba(243,224,150,0.015) 0%, transparent 50%)
               `,
               animation: 'fog-drift 30s ease-in-out infinite alternate'
             }} />

        {/* LAYER 5: Glass lighting */}
        <div className="absolute inset-0 overflow-hidden mix-blend-screen">
          <div className="absolute top-[-50%] left-[-50%] w-[200vw] h-[200vh]"
               style={{
                 background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.015) 45%, rgba(243,224,150,0.03) 50%, rgba(212,175,55,0.015) 55%, transparent 100%)',
                 animation: 'glass-reflection 20s linear infinite'
               }} />
        </div>

        {/* LAYER 6: Very subtle particles */}
        <div className="absolute inset-0 opacity-[0.15]"
             style={{
               animation: 'bg-particle-a 45s ease-in-out infinite alternate',
               backgroundImage: `
                 radial-gradient(1px 1px at 15% 25%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1.5px 1.5px at 35% 45%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 65% 15%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(2px 2px at 85% 75%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1.5px 1.5px at 10% 80%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 45% 90%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(2px 2px at 75% 35%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 25% 65%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1.5px 1.5px at 95% 50%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 55% 25%, rgba(212,175,55,1) 100%, transparent)
               `,
               backgroundSize: '100% 100%'
             }} />
        <div className="absolute inset-0 opacity-[0.12]"
             style={{
               animation: 'bg-particle-b 55s ease-in-out infinite alternate-reverse',
               backgroundImage: `
                 radial-gradient(1.5px 1.5px at 8% 12%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 28% 52%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 58% 82%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(2px 2px at 88% 22%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 18% 92%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1.5px 1.5px at 48% 32%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 78% 62%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(2px 2px at 38% 72%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1px 1px at 98% 42%, rgba(212,175,55,1) 100%, transparent),
                 radial-gradient(1.5px 1.5px at 68% 92%, rgba(212,175,55,1) 100%, transparent)
               `,
               backgroundSize: '100% 100%'
             }} />
      </div>

      {/* LAYER 7: Vignette + Noise */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-overlay opacity-[0.85]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,rgba(0,0,0,0.8)_100%)]" />
      </div>
      
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-overlay"
           style={{
             opacity: 0.008,
             backgroundImage: noiseSvg,
             backgroundRepeat: 'repeat',
             backgroundSize: '150px 150px'
           }} />
    </>
  );
}
