
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Maxencio - Web & App Designer | Portfolio</title>
        <meta name="description" content="I'm Maxencio, a creative web/app designer and aspiring DevSecOps engineer with expertise in Lean Six Sigma and cybersecurity." />
        <meta name="keywords" content="web design, app design, portfolio, Maxencio, DevSecOps, cybersecurity" />
        <link rel="canonical" href="https://maxencio.vercel.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maxencio.vercel.app/" />
        <meta property="og:title" content="Maxencio - Web & App Designer | Portfolio" />
        <meta property="og:description" content="I'm Maxencio, a creative web/app designer and aspiring DevSecOps engineer with expertise in Lean Six Sigma and cybersecurity." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maxencio - Web & App Designer | Portfolio" />
        <meta name="twitter:description" content="I'm Maxencio, a creative web/app designer and aspiring DevSecOps engineer with expertise in Lean Six Sigma and cybersecurity." />
      </Helmet>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
