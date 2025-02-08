import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const portfolioData = {
  1: ["https://via.placeholder.com/800", "https://via.placeholder.com/801", "https://via.placeholder.com/800", "https://via.placeholder.com/801"],
  2: ["https://via.placeholder.com/802", "https://via.placeholder.com/803", "https://via.placeholder.com/800", "https://via.placeholder.com/801"],
  3: ["https://via.placeholder.com/804", "https://via.placeholder.com/805", "https://via.placeholder.com/800", "https://via.placeholder.com/801"],
  4: ["https://via.placeholder.com/806", "https://via.placeholder.com/807", "https://via.placeholder.com/800", "https://via.placeholder.com/801"],
  5: ["https://via.placeholder.com/808", "https://via.placeholder.com/809", "https://via.placeholder.com/800", "https://via.placeholder.com/801"],
  6: ["https://via.placeholder.com/810", "https://via.placeholder.com/811", "https://via.placeholder.com/800", "https://via.placeholder.com/801"],
};

const PortfolioDetails = () => {
  const { id } = useParams();
  const portfolioId = parseInt(id || "0", 10);
  const images = portfolioData[portfolioId] || [];

  const positions = [
    { x: 0, y: 0 },
    { x: 300, y: 120 },
    { x: 0, y: 250 },
    { x: 300, y: 370 },
  ];

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) navbar.style.display = "none";

    return () => {
      if (navbar) navbar.style.display = "block";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center relative">
      <div className="relative w-[800px] h-[600px]">
        {images.length > 0 ? (
          images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Portfolio ${portfolioId} - ${index}`}
              className="absolute w-80 h-40 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
              animate={{
                opacity: 1,
                x: positions[index % positions.length].x,
                y: positions[index % positions.length].y,
              }}
              transition={{ duration: 1, delay: index * 0.5, ease: "easeOut" }}
            />
          ))
        ) : (
          <p className="text-xl">No images found for this portfolio.</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetails;
