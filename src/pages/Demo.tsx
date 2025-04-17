
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Demo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => navigate('/')}
        className="mb-8 px-6 py-3 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-lg hover:from-[#3a7bd5] hover:to-[#00d2ff] transition-all duration-300"
      >
        ← Back to Portfolio
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#1f1f1f] p-8 rounded-2xl shadow-[0_10px_25px_rgba(0,210,255,0.2)]"
      >
        <h1 className="text-4xl font-bold mb-6 text-[#00d2ff]">Project Demo</h1>
        <p className="text-gray-300 mb-6">
          This is a demonstration page for the project. In a real application, this would contain
          the actual project content and functionality.
        </p>
        <div className="aspect-video bg-[#2a2a2a] rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Project Demo Content</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Demo;
