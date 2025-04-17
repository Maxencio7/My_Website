
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { processImage } from "../utils/imageProcessor";

const Hero = () => {
  const [processedImage, setProcessedImage] = useState<string>("/prof.jpeg");

  useEffect(() => {
    const applyImageEffect = async () => {
      try {
        const processed = await processImage("/prof.jpeg");
        setProcessedImage(processed);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    };

    applyImageEffect();
  }, []);

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000" style={{ backgroundImage: `url(${processedImage})` }}>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-[#00d2ff]">Hello, I'm Maxencio</h1>
            <p className="text-xl text-gray-300 mb-10">
              Web & App Designer | CLSBB | Aspiring DevSecOps + Ai
            </p>
            <a 
              href="https://github.com/Maxencio7/" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white font-bold rounded-lg shadow-lg hover:translate-y-[-4px] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)] hover:bg-gradient-to-r hover:from-[#9b59b6] hover:to-[#3498db]"
            >
              See My Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
