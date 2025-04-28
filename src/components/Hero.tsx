
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { processImage } from "../utils/imageProcessor";

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
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${processedImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 flex flex-col items-center"
          >
            {/* Avatar with fallback mechanism */}
            <img
              src={PORTRAIT_IMAGE}
              alt="Portrait of Maxencio"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-[#00d2ff] shadow-lg"
              loading="eager"
              style={{ background: "#232336" }}
              onError={(e) => {
                // Fallback if image fails to load
                console.error("Portrait image failed to load, using placeholder");
                e.currentTarget.src = "https://via.placeholder.com/400x400.png?text=Maxencio";
              }}
            />
            <h1 className="text-5xl font-bold mb-6 text-[#00d2ff]">Hello, I'm Maxencio</h1>
            <p className="text-xl text-gray-300 mb-10">
              Web & App Designer | CLSBB | Aspiring DevSecOps + Ai
            </p>
            <a 
              href="https://github.com/Maxencio7/" 
              target="_blank"
              rel="noopener noreferrer"
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
