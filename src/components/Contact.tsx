
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await (window as any).emailjs.sendForm(
        "service_2s5qe8m",
        "template_nxbjdln",
        e.currentTarget
      );
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-16 text-[#00d2ff] text-center">Contact Me</h2>
        <motion.div 
          whileHover={{ 
            rotateX: 2,
            rotateY: 2,
          }}
          className="max-w-2xl mx-auto bg-[#2a2a2a] p-10 rounded-2xl shadow-[0_10px_25px_rgba(0,210,255,0.2)] transform perspective-800 transition-all duration-500"
        >
          <p className="text-gray-300 text-center mb-8">Got a Project or just wanna say hey? I'm all ears.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-[#1f1f1f] rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#00d2ff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-[#1f1f1f] rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#00d2ff]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-4 bg-[#1f1f1f] rounded-lg border border-gray-700 text-white focus:outline-none focus:border-[#00d2ff]"
            />
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white rounded-lg hover:from-[#3a7bd5] hover:to-[#00d2ff] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
