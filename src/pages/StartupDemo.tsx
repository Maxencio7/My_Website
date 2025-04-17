
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const StartupDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 px-6 py-3 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-lg hover:from-[#3a7bd5] hover:to-[#00d2ff] transition-all duration-300 z-50"
      >
        ← Back to Portfolio
      </motion.button>

      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/a7a1969b-efec-482e-a623-11819f346ede.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Explore the Universe
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Your gateway to the next frontier of space exploration and discovery
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-lg text-lg font-semibold hover:from-[#3a7bd5] hover:to-[#00d2ff] transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StartupDemo;
