import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import portfolioCategories from "../data/portfolioData"; // Ensure this is correctly imported
import styles from './ProjectCard.module.css'

const PortfolioDetails = () => {
  const { id } = useParams();
  const portfolioId = parseInt(id || "0", 10);

  // Find the category that matches the portfolioId
  const selectedCategory = portfolioCategories.find(category => category.id === portfolioId);
  
  // If no category is found, default to an empty array
  const projects = selectedCategory ? selectedCategory.projects : [];

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) navbar.style.display = "none";

    return () => {
      if (navbar) navbar.style.display = "block";
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          {selectedCategory ? selectedCategory.title : "Portfolio Details"}
        </h1>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectDetailCard key={index} project={project} index={index} />
          ))
        ) : (
          <p className="text-xl text-center text-gray-300">No projects found for this category.</p>
        )}
      </div>
    </div>
  );
};

const ProjectDetailCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-8 my-16 ${
        isEven ? "md:mr-auto" : "md:ml-auto md:flex-row-reverse"
      }`}
    >
      {/* Image Section */}
      <div className="group relative w-full md:w-[500px] h-[350px]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
        <div className="absolute inset-0 rounded-xl shadow-lg shadow-indigo-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/50 to-gray-900/80 opacity-50" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50" />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-96 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg blur-sm" />
        <div className="relative rounded-lg p-6 shadow-lg shadow-indigo-500/10 bg-gray-800">
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
            {project.title}
          </h3>
          <p className="text-gray-300/90">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioDetails;
