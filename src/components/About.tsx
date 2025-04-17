
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-[#121212]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-16 text-[#00d2ff] text-center">About Me</h2>
        <motion.div 
          whileHover={{ 
            rotateX: 2,
            rotateY: 2,
          }}
          className="max-w-3xl mx-auto bg-[#1f1f1f] p-10 rounded-2xl shadow-[0_10px_25px_rgba(0,210,255,0.2)] transform perspective-800 transition-all duration-500"
        >
          <div className="space-y-6 text-gray-300">
            <p>
              I'm a self-driven web/app designer and aspiring DevSecOps engineer, 
              constantly exploring new creative angles and smarter solutions.
              With a strong background in Lean Six Sigma, cybersecurity and a deep love for clean,
              efficient design, I bring structure to style.
            </p>
            <p>
              Through my journey's just beginning, I'm passionate about
              building modern, responsive websites/apps that look amazing 
              and feel intuitive. I'm hands-on with HTML, CSS, Javascript, React, Flutter etc. 
              Every project is a chance to create something
              that feels alive.
            </p>
            <p>
              I'm here to work, grow, and make something dope. Let's create something
              that stands out.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
