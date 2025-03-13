import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import portfolioCategories from "../data/portfolioData";
import Modal from "./Modal";

const backgroundColors = [
  "bg-gradient-to-l from-gray-50 to-gray-300",
  "bg-gradient-to-r from-gray-100 to-gray-400",
  "bg-gradient-to-l from-gray-200 to-gray-500",
  "bg-gradient-to-r from-gray-300 to-gray-600",
  "bg-gradient-to-l from-gray-400 to-gray-700"
];

const PortfolioDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const portfolioId = parseInt(id || "0", 10);

  const selectedCategory = portfolioCategories.find(
    (category) => category.id === portfolioId
  );
  const projects = selectedCategory ? selectedCategory.projects : [];

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) navbar.style.display = "none";

    return () => {
      if (navbar) navbar.style.display = "block";
    };
  }, []);

  return (
    <div className="min-h-screen py-20 px-6 relative flex flex-col items-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-800">
      <button
        onClick={() => navigate("/portfolio")}
        className="outfit-bold absolute top-20 left-10 bg-gradient-to-r cursor-pointer from-gray-500 to-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:from-gray-800 hover:to-gray-700 transition duration-300 hidden md:block"
      >
        ← Go to Portfolio
      </button>

      <h1 className="outfit-bold text-4xl text-gray-900 text-center mb-12">
        {selectedCategory ? selectedCategory.title : "Portfolio Details"}
      </h1>
      <div className="w-full max-w-6xl space-y-12">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectDetailCard key={index} project={project} index={index} />
          ))
        ) : (
          <p className="text-xl text-center text-gray-600">No projects found for this category.</p>
        )}
      </div>
    </div>
  );
};

const ProjectDetailCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const backgroundClass = isEven ? "bg-gradient-to-l from-gray-500 to-gray-800" : "bg-gradient-to-r from-gray-300 to-gray-600";

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
      <div className={`relative w-full md:w-[500px] h-[350px] rounded-xl overflow-hidden ${backgroundClass} p-1`}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-xl"
          loading="lazy"
        />
      </div>

      <div className="w-full md:w-96 relative p-6">
        <h3 className="outfit-bold text-4xl font-bold mb-4 text-gray-900">{project.title}</h3>
        <p className="outfit text-gray-700 text-2xl">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioDetails;