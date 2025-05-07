
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/a7a1969b-efec-482e-a623-11819f346ede.png",
      title: "Startup Project",
      description: "Modern landing page with space theme",
      link: "/demo/startup",
      alt: "Space-themed startup landing page design"
    },
    {
      id: 2,
      image: "/lovable-uploads/9aff5fd5-7b6c-43a7-9951-42fada893526.png",
      title: "Influencer Conference",
      description: "Creative conference website design",
      link: "/demo/portfolio",
      alt: "Creative conference website design for influencers"
    },
    {
      id: 3,
      image: "/lovable-uploads/fd7d4513-b4bb-4d22-8bc0-bd1033cf0e5a.png",
      title: "E-commerce Project",
      description: "Modern furniture shopping experience",
      link: "/demo/ecommerce",
      alt: "Modern furniture e-commerce website design"
    }
  ];

  return (
    <section className="py-20 bg-[#121212]" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        {/* F-pattern: Strong left-aligned heading */}
        <h2 className="text-4xl font-bold mb-4 text-[#00d2ff] text-left">My Projects</h2>
        
        <p className="text-gray-300 text-lg mb-8 max-w-2xl">
          Take a look at some of my recent work. Each project demonstrates my approach to 
          design, development and problem-solving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {projects.map((project) => (
            <Link to={project.link} key={project.id} aria-label={`View ${project.title} project`} className="group">
              <motion.div 
                whileHover={{ 
                  scale: 1.03,
                }}
                className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,210,255,0.15)] transition-all duration-500"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-[#00d2ff] mb-2">{project.title}</h3>
                    <div className="bg-[#2a2a3a] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight size={16} className="text-[#00d2ff]" />
                    </div>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
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
