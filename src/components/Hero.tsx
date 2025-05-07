
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { processImage } from "../utils/imageProcessor";
import { ArrowRight } from "lucide-react";

// Use the portrait image with proper path
const PORTRAIT_IMAGE = "/lovable-uploads/82a769aa-62e5-4347-8fda-2e9cdf657c01.png";

const Hero = () => {
  const [processedImage, setProcessedImage] = useState<string>(PORTRAIT_IMAGE);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image to ensure it exists
    const img = new Image();
    img.src = PORTRAIT_IMAGE;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error("Failed to load portrait image");
      setImageLoaded(false);
    };

    const applyImageEffect = async () => {
      try {
        const processed = await processImage(PORTRAIT_IMAGE);
        setProcessedImage(processed);
      } catch (error) {
        console.error("Error processing image:", error);
        setProcessedImage(PORTRAIT_IMAGE); // Fallback to original image
      }
    };

    applyImageEffect();
  }, []);

  return (
    <section className="relative h-screen" id="home">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${processedImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 flex flex-col items-start max-w-3xl px-8 md:px-16"
          >
            {/* Avatar with fallback mechanism */}
            <img
              src={PORTRAIT_IMAGE}
              alt="Portrait of Maxencio"
              className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-[#00d2ff] shadow-lg"
              loading="eager"
              style={{ background: "#232336" }}
              onError={(e) => {
                // Fallback if image fails to load
                console.error("Portrait image failed to load, using placeholder");
                e.currentTarget.src = "https://via.placeholder.com/400x400.png?text=Maxencio";
              }}
            />
            <h1 className="text-5xl font-bold mb-4 text-[#00d2ff]">Hello, I'm Maxencio</h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Web & App Designer | CLSBB | Aspiring DevSecOps + Ai
            </p>
            
            {/* Enhanced "See My Work" button */}
            <motion.a 
              href="https://github.com/Maxencio7/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#9b59b6] to-[#3498db] text-white font-bold rounded-lg shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(155,89,182,0.6)] relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">See My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#9b59b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
