import { memo, useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundEffects } from './components/BackgroundEffects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

const App = memo(function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-screen flex-col overflow-hidden relative"
      >
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10 flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </m.div>
    </LazyMotion>
  );
});

export default App;

