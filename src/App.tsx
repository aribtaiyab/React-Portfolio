import { Suspense, lazy, memo, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundEffects } from './components/BackgroundEffects';
import { LoadingScreen } from './components/LoadingScreen';

const About = lazy(() => import('./components/About').then((mod) => ({ default: mod.About })));
const Skills = lazy(() => import('./components/Skills').then((mod) => ({ default: mod.Skills })));
const Projects = lazy(() => import('./components/Projects').then((mod) => ({ default: mod.Projects })));
const Certifications = lazy(() => import('./components/Certifications').then((mod) => ({ default: mod.Certifications })));
const Contact = lazy(() => import('./components/Contact').then((mod) => ({ default: mod.Contact })));
const Footer = lazy(() => import('./components/Footer').then((mod) => ({ default: mod.Footer })));

const App = memo(function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Total intro duration 2.2s. 
    // If reduced motion is enabled, skip the intro completely or make it very brief.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, prefersReducedMotion ? 0 : 2200);

    return () => clearTimeout(timer);
  }, []);

  // Control scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-screen flex-col overflow-hidden relative"
      >
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10 flex-grow">
          <Hero />
          <Suspense fallback={<div className="h-20" aria-hidden="true" />}>
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-24" aria-hidden="true" />}>
          <Footer />
        </Suspense>
      </motion.div>
    </>
  );
});

export default App;
