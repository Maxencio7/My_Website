
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/image.jpeg",
      title: "Startup Project",
      link: "/demo/startup"
    },
    {
      id: 2,
      image: "/port.png",
      title: "Portfolio Project",
      link: "/demo/portfolio"
    },
    {
      id: 3,
      image: "/ecom.jpg",
      title: "E-commerce Project",
      link: "/demo/ecommerce"
    }
  ];

  return (
    <section className="py-20 bg-[#121212]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-16 text-[#00d2ff] text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link to={project.link} key={project.id}>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 2,
                  rotateY: 2,
                }}
                className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,210,255,0.15)] transform perspective-800 transition-all duration-500"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00d2ff] mb-2">{project.title}</h3>
                  <p className="text-gray-400">Click to view demo</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
