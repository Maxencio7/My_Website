
import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).emailjs.init("PaEC-06vRKzg3a8_3");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
