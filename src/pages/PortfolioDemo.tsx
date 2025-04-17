
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from 'lucide-react';

const PortfolioDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 px-6 py-3 bg-gradient-to-r from-[#9b59b6] to-[#3498db] rounded-lg hover:from-[#3498db] hover:to-[#9b59b6] transition-all duration-300 z-50"
      >
        ← Back to Portfolio
      </motion.button>

      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/9aff5fd5-7b6c-43a7-9951-42fada893526.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/60" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#9b59b6] to-[#3498db] bg-clip-text text-transparent">
              Creative Conference
            </h1>
            <div className="flex justify-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <CalendarIcon className="w-5 h-5 text-[#9b59b6]" />
                <span>April 20-22, 2025</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <MapPinIcon className="w-5 h-5 text-[#3498db]" />
                <span>San Francisco, CA</span>
              </motion.div>
            </div>
            <p className="text-xl text-gray-300 mb-12">
              Join us for an inspiring gathering of creative minds from around the world
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#9b59b6] to-[#3498db] rounded-lg text-lg font-semibold hover:from-[#3498db] hover:to-[#9b59b6] transition-all duration-300"
              >
                Register Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#9b59b6] rounded-lg text-lg font-semibold hover:bg-[#9b59b6]/10 transition-all duration-300"
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

export default PortfolioDemo;
