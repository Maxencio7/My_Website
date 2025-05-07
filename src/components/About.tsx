
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-[#121212]" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        {/* F-pattern: Strong left-aligned heading */}
        <h2 className="text-4xl font-bold mb-6 text-[#00d2ff] text-left">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-[#00d2ff] mb-4 border-l-4 border-[#00d2ff] pl-4">My Background</h3>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-300 mb-8">
              I'm a self-driven web/app designer and aspiring DevSecOps engineer, 
              constantly exploring new creative angles and smarter solutions.
              With a strong background in Lean Six Sigma, cybersecurity and a deep love for clean,
              efficient design, I bring structure to style.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-[#00d2ff] mb-4 border-l-4 border-[#00d2ff] pl-4">My Approach</h3>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-300 mb-8">
              Through my journey's just beginning, I'm passionate about
              building modern, responsive websites/apps that look amazing 
              and feel intuitive. I'm hands-on with HTML, CSS, Javascript, React, Flutter etc. 
              Every project is a chance to create something
              that feels alive.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-[#00d2ff] mb-4 border-l-4 border-[#00d2ff] pl-4">My Mission</h3>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-300">
              I'm here to work, grow, and make something dope. Let's create something
              that stands out.
            </p>
            
            <motion.a 
              href="https://github.com/Maxencio7/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-[#00d2ff] font-semibold hover:underline group"
            >
              <span>Check out my GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
