
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const EcommerceDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate('/')}
            className="px-6 py-2 text-gray-800 hover:text-gray-600 transition-colors duration-300"
          >
            ← Back
          </motion.button>
          <h1 className="text-2xl font-bold text-gray-800">ModernHome</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </nav>

      <div className="pt-20">
        <div className="relative h-[70vh]">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/fd7d4513-b4bb-4d22-8bc0-bd1033cf0e5a.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/30" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 container mx-auto px-4 h-full flex items-center"
          >
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold text-white mb-6">Modern Furniture for Modern Living</h2>
              <p className="text-xl text-gray-100 mb-8">Discover our curated collection of contemporary furniture</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDemo;
