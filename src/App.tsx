import { Suspense, lazy, memo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundEffects } from './components/BackgroundEffects';

const About = lazy(() => import('./components/About').then((mod) => ({ default: mod.About })));
const Skills = lazy(() => import('./components/Skills').then((mod) => ({ default: mod.Skills })));
const Projects = lazy(() => import('./components/Projects').then((mod) => ({ default: mod.Projects })));
const Certifications = lazy(() => import('./components/Certifications').then((mod) => ({ default: mod.Certifications })));
const Contact = lazy(() => import('./components/Contact').then((mod) => ({ default: mod.Contact })));
const Footer = lazy(() => import('./components/Footer').then((mod) => ({ default: mod.Footer })));

const App = memo(function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden relative">
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
    </div>
  );
});

export default App;
