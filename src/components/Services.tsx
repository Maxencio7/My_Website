
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="py-20 bg-[#121212]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="bg-[#1f1f1f] p-8 rounded-2xl shadow-[0_10px_25px_rgba(0,210,255,0.2)] transform perspective-800 hover:rotate-x-2 hover:rotate-y-2 transition-transform duration-500">
          <h1 className="text-4xl font-bold mb-8 text-[#00d2ff] text-center">My IT & Cybersecurity Services</h1>
          <p className="text-gray-300 leading-relaxed mb-10">
            I offer a wide range of services tailored to meet your digital and business needs:
            cybersecurity audits, network troubleshooting, Windows optimization, printer support,
            antivirus setup, and general office IT solutions. Whether you're a small business or an
            individual in need of secure and reliable tech support, I've got you covered.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#00d2ff]">Download Free & Paid Resources</h2>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://drive.google.com/file/d/1Mvc7RsR6_M8NHy_hSgejNAsWV0NbY3l-/view?usp=sharing"
                className="px-6 py-3 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white rounded-lg hover:from-[#3a7bd5] hover:to-[#00d2ff] transition-all duration-300"
              >
                Download Free IT Tips PDF
              </a>
            </div>
          </div>

          <div className="bg-[#1f1f1f] p-8 rounded-xl transform perspective-800 hover:rotate-x-2 hover:rotate-y-2 transition-transform duration-500">
            <h2 className="text-2xl font-bold mb-6 text-[#00d2ff]">Get Custom Recommendations</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full p-3 bg-[#2a2a2a] rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#00d2ff]"
                />
              </div>
              <div>
                <label htmlFor="needs" className="block text-gray-300 mb-2">Describe Your IT Issue:</label>
                <textarea 
                  id="needs" 
                  rows={5} 
                  required 
                  className="w-full p-3 bg-[#2a2a2a] rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#00d2ff]"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white rounded-lg hover:from-[#3a7bd5] hover:to-[#00d2ff] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
