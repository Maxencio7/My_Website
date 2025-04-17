
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RocketIcon, StarIcon } from 'lucide-react';

const StartupDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white overflow-hidden">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 px-6 py-3 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-lg hover:from-[#3a7bd5] hover:to-[#00d2ff] transition-all duration-300 z-50 flex items-center gap-2"
      >
        ← Back to Portfolio
      </motion.button>

      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/a7a1969b-efec-482e-a623-11819f346ede.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="mb-8"
            >
              <RocketIcon className="w-16 h-16 mx-auto text-[#00d2ff]" />
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Explore the Universe
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Your gateway to the next frontier of space exploration and discovery
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-lg text-lg font-semibold hover:from-[#3a7bd5] hover:to-[#00d2ff] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
              >
                <StarIcon className="w-5 h-5" />
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#00d2ff] rounded-lg text-lg font-semibold hover:bg-[#00d2ff]/10 transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StartupDemo;
