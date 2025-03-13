import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const StatsCard = ({ id, name, className = '', style = {}, delay = 0, img }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const route = "/portfolio/" + id;

  // Mobile/tablet card layout
  const mobileCard = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.001 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="relative group rounded-xl overflow-hidden h-64 md:h-80"
    >
      <div className="min-h-screen bg-white lg:bg-gradient-to-b lg:from-gray-800 lg:to-gray-900">
        <img 
          src={img} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative p-8">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{name}</h3>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
    </motion.div>
  );

  // Desktop card layout (original)
  const desktopCard = (
    <div 
      className={`
        absolute rounded-3xl shadow-lg 
        transform transition-all duration-700 ease-out
        hover:-translate-y-3 hover:shadow-5xl
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-96'}
        ${className}
      `}
      style={{
        ...style,
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="relative w-full h-full">
        <div className="absolute z-10 top-4 left-4">
          <h1 className="outfit-bold text-3xl font-bold drop-shadow-lg">{name}</h1>
        </div>
        <img 
          src={img} 
          alt="background" 
          className="absolute top-0 left-0 w-full h-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );

  return (
    <Link to={route}>
      <div className="block lg:hidden">
        {mobileCard}
      </div>
      <div className="hidden lg:block">
        {desktopCard}
      </div>
    </Link>
  );
};

const Portfolio = () => {
  const stats = [
    {
      id : 1,
      name: "Living Area",
      img: "https://images.unsplash.com/photo-1738771629156-3675a5c8c4de?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "rotate-12",
      style: {
        height: '320px',
        width: '360px',
        left: '0%',
        top: '12%',
        zIndex: 1
      },
      delay: 100
    },
    {
      id : 2,
      name: "Kitchen",
      img: "https://images.unsplash.com/photo-1738771608985-ca679b186f0a?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "rotate-6",
      style: {
        height: '320px',
        width: '360px',
        left: '12%',
        top: '40%',
        zIndex: 2
      },
      delay: 200
    },
    {
      id : 3,
      name: "Bedroom",
      img: "https://images.unsplash.com/photo-1738771525821-8eddde5101e4?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "-rotate-15",
      style: {
        height: '320px',
        width: '360px',
        left: '32%',
        top: '20%',
        zIndex: 3
      },
      delay: 350
    },
    {
      id : 4,
      name: "Commercial",
      img: "https://images.unsplash.com/photo-1738771646428-388f892dde4b?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "-rotate-5",
      style: {
        height: '320px',
        width: '360px',
        left: '52%',
        top: '40%',
        zIndex: 4
      },
      delay: 200
    },
    {
      id : 5,
      name: "Others",
      img: "https://images.unsplash.com/photo-1738771618427-9d9f0d4ab2f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "-rotate-11",
      style: {
        height: '320px',
        width: '360px',
        left: '69%',
        top: '12%',
        zIndex: 5
      },
      delay: 100
    }
  ];

  return (
    <div className="bg-gray-900 py-20">
      {/* Mobile/tablet layout */}
      <div className="lg:hidden container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our diverse collection of architectural projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat) => (
            <StatsCard
              key={stat.id}
              id={stat.id}
              name={stat.name}
              className={stat.className}
              style={stat.style}
              delay={stat.delay}
              img={stat.img}
            />
          ))}
        </div>
      </div>

      {/* Desktop layout (original) */}
      <div className="hidden lg:block relative w-full h-[650px] bg-gradient-to-b from-gray-900 to-gray-100">
        <div className="max-w-7xl mx-auto h-full relative cursor-pointer">
          {stats.map((stat) => (
            <StatsCard
              key={stat.id}
              id={stat.id}
              name={stat.name}
              className={stat.className}
              style={stat.style}
              delay={stat.delay}
              img={stat.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;